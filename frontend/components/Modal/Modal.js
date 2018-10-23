import React from 'react';
import {
  StyledModal,
  StyledModalControls,
  StyledModalMast,
  StyledImage,
  StyledClose,
} from './styles';
import {withRouter} from 'next/router';
import {getFileNameFromPath} from '../../utilities';
import Title from '../Title';
import Link from '../Link';

/*
  Next Steps

  1. Add prev and next accorw
  2. Add full image button
  3. Add whatever else you want details wise

*/
class Modal extends React.Component {
  componentDidMount() {
    if (this.props.router.query.id) {
      this.disableSrcoll();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.router.query.id && !this.props.router.query.id) {
      this.enableSrcoll();
    } else {
      this.disableSrcoll();
    }
  }

  render() {
    console.log('render');
    const {
      collection,
      router: {
        query: {id},
      },
    } = this.props;

    if (!id) {
      return null;
    }

    const itemIndex = collection.findIndex(
      (item) => getFileNameFromPath(item.work_image) === id,
    );
    const item = collection[itemIndex];

    if (!item) {
      return null;
    }

    const workDetails =
      item.work_details && item.work_details.length
        ? item.work_details.map((detail, index) => {
            return (
              <React.Fragment key={index}>
                {detail.work_detail}
                <br />
              </React.Fragment>
            );
          })
        : null;

    return (
      <StyledModal>
        <StyledClose>
          <Link onClick={this.dismiss}>Close</Link>
        </StyledClose>
        <StyledModalControls>
          <Link onClick={this.prev(itemIndex)}>Prev</Link>
          <Link onClick={this.next(itemIndex)}>Next</Link>
        </StyledModalControls>
        <StyledModalMast>
          <Title>{item.work_title}</Title>
          <div>{workDetails}</div>
        </StyledModalMast>
        <StyledImage alt={item.work_title} src={item.work_image} />
      </StyledModal>
    );
  }

  dismiss = () => {
    const {router} = this.props;
    router.push(
      `/exhibition?slug=${router.query.slug}`,
      `${router.pathname}/${router.query.slug}`,
    );
  };

  next = (itemIndex) => {
    return () => {
      const nextItemIndex = itemIndex + 1;
      this.goToImage(nextItemIndex);
    };
  };

  prev = (itemIndex) => {
    return () => {
      const nextItemIndex = itemIndex - 1;
      this.goToImage(nextItemIndex);
    };
  };

  goToImage = (index) => {
    const {router, collection} = this.props;
    const item = collection[index];

    if (!item) {
      this.dismiss();
      return null;
    }
    const id = getFileNameFromPath(item.work_image);
    router.push(...this.getPushUrl(id));
  };

  getPushUrl(id) {
    const {router} = this.props;

    if (!id) {
      return [
        `/exhibition?slug=${router.query.slug}`,
        `${router.pathname}/${router.query.slug}`,
      ];
    }

    return [
      `/exhibition?slug=${router.query.slug}&id=${id}`,
      `${router.pathname}/${router.query.slug}?id=${id}`,
    ];
  }

  disableSrcoll() {
    document.body.classList.add('no-scroll');
  }

  enableSrcoll() {
    document.body.classList.remove('no-scroll');
  }
}

export default withRouter(Modal);
