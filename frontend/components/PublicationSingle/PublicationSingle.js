import React from 'react';
import {config} from '../../config';
import PageText from '../PageText';
import PageMast from '../PageMast';
import Thumbnail from '../Thumbnail';
import Title from '../Title';
import Fetcher from '../Fetcher';
import Error from '../Error';
import PageNav from '../PageNav';
import Link from '../Link';
import Modal from '../../components/Modal';
import {getFileNameFromPath} from '../../utilities';

class PublicationSingle extends React.Component {
  state = {
    currentSection: 'images',
  };
  render() {
    const {currentSection} = this.state;
    const {title, works, content, slug} = this.props;

    function sectionMarkup(currentSection) {
      switch (currentSection) {
        case 'about':
          return (
            <PageText>
              <div dangerouslySetInnerHTML={{__html: content}} />
            </PageText>
          );
        case 'images':
          if (!works) {
            return null;
          }
          const workImageMarkup = works.map((work) => {
            const id = getFileNameFromPath(work.work_image);
            const href = `/publication?slug=${slug}&id=${id}`;
            const as = `/publication/${slug}?id=${id}`;
            return (
              <Thumbnail
                key={id}
                id={id}
                as={as}
                href={href}
                url={work.work_image}
                title={work.work_title}
                image={work.work_image}
                artist={work.work_artist}
              />
            );
          });
          return <React.Fragment>{workImageMarkup}</React.Fragment>;
      }
    }

    const subSectionMarkup = sectionMarkup(currentSection);
    return (
      <React.Fragment>
        <Modal current collection={works} />
        <PageMast>
          <Title>
            <div dangerouslySetInnerHTML={{__html: title}} />
          </Title>
          <PageNav>
            <Link onClick={this.handleSectionChange('images')}>Images</Link>
            <Link onClick={this.handleSectionChange('about')}>About</Link>
          </PageNav>
        </PageMast>
        {subSectionMarkup}
      </React.Fragment>
    );
  }
  handleSectionChange = (newSection) => {
    return () => {
      this.setState({
        currentSection: newSection,
      });
    };
  };
}

export default withRouter(PublicationSingle);
