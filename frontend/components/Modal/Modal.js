import React from 'react';
import {
  StyledModal,
  StyledControls,
  StyledModalMast,
  StyledImage,
  StyledTitle,
} from './styles';
import {withRouter} from 'next/router';
import {getFileNameFromPath} from '../../utilities';
import Title from '../Title';
import Link from '../Link';
import {Shortcut} from '@shopify/react-shortcuts';

class Modal extends React.Component {
  state = {
    itemIndex: null,
  };

  componentDidMount() {
    if (this.props.router.query.id) {
      this.show();
    }
  }

  show = () => {
    const itemIndex = this.getItemIndex();
    this.setState({
      itemIndex,
    });
  };

  componentDidUpdate(prevProps) {
    // navigating from exhinition single to an single image,
    // we are looking at an image and want to disable scroll
    if (!prevProps.router.query.id && this.props.router.query.id) {
      this.disableSrcoll();

      this.show();

      return;
    }
    if (prevProps.router.query.id !== this.props.router.query.id) {
      this.show();
    }

    // if we don't have an id, we are on the exhibition single
    // and want to disable the scroll.
    if (!this.props.router.query.id) {
      this.enableSrcoll();
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

    const {itemIndex} = this.state;

    const item = collection[itemIndex];

    if (!item) {
      return null;
    }

    const workDetailsMarkup =
      item.details && item.details.length
        ? item.details.map((detail, index) => {
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
        <Shortcut ordered={['ArrowRight']} onMatch={this.next} />
        <Shortcut ordered={['ArrowLeft']} onMatch={this.prev} />
        <Shortcut ordered={['Escape']} onMatch={this.dismiss} />

        <StyledImage
          alt={item.title}
          src={item.image.url || work.image.medium}
        />
        <StyledModalMast>
          <Link onClick={this.dismiss}>Close</Link>
          <StyledTitle>
            <Title>{item.title}</Title>
            <span>{workDetailsMarkup}</span>
          </StyledTitle>
          <StyledControls>
            <Link onClick={this.prev}>Prev</Link>
            <Link onClick={this.next}>Next</Link>
          </StyledControls>
        </StyledModalMast>
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

  next = () => {
    this.setState((state) => {
      const nextItemIndex = state.itemIndex + 1;

      this.goToImage(nextItemIndex);

      return {
        itemIndex: nextItemIndex,
      };
    });
  };

  prev = () => {
    this.setState((state) => {
      const nextItemIndex = state.itemIndex - 1;

      this.goToImage(nextItemIndex);

      return {
        itemIndex: nextItemIndex,
      };
    });
  };

  goToImage = (index) => {
    const {router, collection} = this.props;
    const item = collection[index];

    if (!item) {
      this.dismiss();
      return null;
    }
    const id = getFileNameFromPath(item.image.large || work.image.medium);
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

  getItemIndex() {
    return (
      this.props.router.query.id &&
      this.props.collection.findIndex((item) =>
        item.image
          ? getFileNameFromPath(item.image.large) === this.props.router.query.id
          : 0,
      )
    );
  }

  disableSrcoll() {
    document.body.classList.add('no-scroll');
  }

  enableSrcoll() {
    document.body.classList.remove('no-scroll');
  }
}

export default withRouter(Modal);
