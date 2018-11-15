import React from 'react';
import {
  StyledModal,
  StyledControls,
  StyledModalMast,
  StyledImage,
} from './styles';
import {withRouter} from 'next/router';
import {getFileNameFromPath} from '../../utilities';
import Title from '../Title';
import Link from '../Link';

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
      (item) => getFileNameFromPath(item.work_image.sizes.img_large) === id,
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

    const workDetailsMarkup =
      item.work_details && item.work_details.length ? (
        <div>{workDetails}</div>
      ) : null;

    return (
      <StyledModal>
        <Link onClick={this.dismiss}>Close</Link>
        <StyledControls>
          <Link onClick={this.prev(itemIndex)}>Prev</Link>
          <Link onClick={this.next(itemIndex)}>Next</Link>
        </StyledControls>
        <StyledModalMast>
          <Title>{item.work_title}</Title>
          <p>{workDetailsMarkup}</p>
          <p>
            <Link target="_blank" href={item.work_image.url}>
              Full image
            </Link>
          </p>
        </StyledModalMast>
        <StyledImage
          alt={item.work_title}
          src={
            item.work_image.sizes.img_large || work.work_image.sizes.img_medium
          }
        />
      </StyledModal>
    );
  }

  dismiss = () => {
    const {router} = this.props;

    router.push(
      `${router.pathname}?slug=${router.query.slug}`,
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
    const id = getFileNameFromPath(
      item.work_image.sizes.img_large || work.work_image.sizes.img_medium,
    );
    router.push(...this.getPushUrl(id));
  };

  getPushUrl(id) {
    const {router} = this.props;
    if (!id) {
      return [
        `${router.pathname}?slug=${router.query.slug}`,
        `${router.pathname}/${router.query.slug}`,
      ];
    }

    return [
      `${router.pathname}?slug=${router.query.slug}&id=${id}`,
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
