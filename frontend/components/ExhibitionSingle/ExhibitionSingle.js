import React from 'react';
import {withRouter} from 'next/router';
import PageText from '../PageText';
import PageMast from '../PageMast';
import PageNav from '../PageNav';
import Thumbnail from '../Thumbnail';
import Title from '../Title';
import Link from '../Link';
import FeaturedImage from '../FeaturedImage';
import Modal from '../../components/Modal';
import {getFileNameFromPath} from '../../utilities';

class ExhibitionSingle extends React.Component {
  state = {
    currentSection: 'work',
  };
  render() {
    const {currentSection} = this.state;
    const {
      title,
      startDate,
      endDate,
      opening,
      works,
      artists,
      content,
      slug,
      current,
      featuredImage,
    } = this.props;

    const openingReceptionMarkup = opening
      ? `Opening reception: ${opening}`
      : null;

    const displayTitle =
      artists && artists.length
        ? commaListsAnd`${artists}: <em>${title}</em>`
        : title;
    const hasWork = works && works.length;
    const hasAbout = content && content.length;

    const forceAbout = currentSection === 'work' && !hasWork;

    const aboutMarkup = (
      <PageText>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </PageText>
    );

    function sectionMarkup(currentSection) {
      switch (currentSection) {
        case 'about':
          return aboutMarkup;
        case 'work':
          const workImageMarkup =
            works &&
            works.map((work) => {
              const id = getFileNameFromPath(
                work.work_image.sizes.img_large ||
                  work.work_image.sizes.img_medium,
              );
              const href = `/exhibition?slug=${slug}&id=${id}`;
              const as = `/exhibition/${slug}?id=${id}`;
              return (
                <Thumbnail
                  url={work.work_image}
                  title={work.work_title}
                  image={
                    work.work_image.sizes.img_large ||
                    work.work_image.sizes.img_medium
                  }
                  key={id}
                  id={id}
                  as={as}
                  href={href}
                />
              );
            });
          return (
            <React.Fragment>
              <FeaturedImage image={featuredImage} />
              {workImageMarkup}
            </React.Fragment>
          );
        default:
          return (
            hasAbout && (
              <PageText>
                <div dangerouslySetInnerHTML={{__html: content}} />
              </PageText>
            )
          );
      }
    }

    const currentSectionMarkup = forceAbout
      ? aboutMarkup
      : sectionMarkup(currentSection);

    debugger;

    const workLinkMarkup = (
      <Link
        current={currentSection === 'work'}
        onClick={this.handleSectionChange('work')}
        href="#"
        variant="primary"
      >
        Work
      </Link>
    );

    const aboutLinkMarkup = (
      <Link
        current={currentSection === 'about'}
        onClick={this.handleSectionChange('about')}
        href="#"
        variant="primary"
      >
        About
      </Link>
    );

    const pageNavMarkup =
      hasWork && hasAbout ? (
        <PageNav>
          {workLinkMarkup}
          {aboutLinkMarkup}
        </PageNav>
      ) : null;

    return (
      <React.Fragment>
        <Modal current collection={works} />
        {!current && (
          <div>
            <Link as="/exhibitions/past" href="/exhibitions/past">
              All exhibitions
            </Link>
          </div>
        )}
        <PageMast>
          <Title>
            <div dangerouslySetInnerHTML={{__html: displayTitle}} />
          </Title>
          <p>
            {startDate} - {endDate}
            <br />
            {openingReceptionMarkup}
          </p>
        </PageMast>
        {pageNavMarkup}
        {currentSectionMarkup}
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

export default withRouter(ExhibitionSingle);
