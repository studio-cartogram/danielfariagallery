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
    this.disableSrcoll();
    const itemIndex = this.getItemIndex();
    this.setState({
      itemIndex,
    });
  };

  componentDidUpdate(prevProps) {
    // navigating from exhinition single to an single image,
    // we are looking at an image and want to disable scroll
    if (!prevProps.router.query.id && this.props.router.query.id) {
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
    // debugger;
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
        <Link onClick={this.dismiss}>Close</Link>
        <StyledControls>
          <Link onClick={this.prev}>Prev</Link>
          <Link onClick={this.next}>Next</Link>
        </StyledControls>
        <StyledModalMast>
          <Title>{item.title}</Title>
          <p>{workDetailsMarkup}</p>
          <p>
            <Link target="_blank" href={item.image.url}>
              Full image
            </Link>
          </p>
        </StyledModalMast>
        <StyledImage
          alt={item.title}
          src={item.image.sizes.img_large || work.image.sizes.img_medium}
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
    const id = getFileNameFromPath(
      item.image.sizes.img_large || work.image.sizes.img_medium,
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

  getItemIndex() {
    return (
      this.props.router.query.id &&
      this.props.collection.findIndex(
        (item) =>
          item.image.sizes
            ? getFileNameFromPath(item.image.sizes.img_large) ===
              this.props.router.query.id
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
