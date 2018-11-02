import React from 'react';
import {withRouter} from 'next/router';
import PageText from '../PageText';
import PageMast from '../PageMast';
import Thumbnail from '../Thumbnail';
import Title from '../Title';
import PageNav from '../PageNav';
import Link from '../Link';
import Modal from '../../components/Modal';
import {getFileNameFromPath} from '../../utilities';
import uniqBy from 'lodash/uniqBy';
import flatten from 'lodash/flatten';
class FairSingle extends React.Component {
  state = {
    currentSection: 'work',
  };
  render() {
    const {currentSection} = this.state;
    const {title, works, content, startDate, endDate, slug} = this.props;
    const artists = flatten(
      works.map((work) => {
        return work.work_artist ? work.work_artist : [];
      }),
    );
    const uniqueArtists = uniqBy(artists, 'post_name');
    const artistListMarkup = uniqueArtists.map((artist, index) => {
      return (
        <React.Fragment>
          <Link
            variant="tertiary"
            as={`/artist/${artist.post_name}`}
            href={`/artist?slug=${artist.post_name}`}
          >
            {artist.post_title}
          </Link>
          {index === uniqueArtists.length - 1 ? '' : ', '}
        </React.Fragment>
      );
    });

    function sectionMarkup(currentSection) {
      switch (currentSection) {
        case 'about':
          return (
            <PageText>
              <div dangerouslySetInnerHTML={{__html: content}} />
            </PageText>
          );
        case 'work':
          if (!works) {
            return null;
          }
          const workImageMarkup = works.map((work) => {
            const id = getFileNameFromPath(
              work.work_image.sizes.img_large ||
                work.work_image.sizes.img_medium,
            );
            const href = `/fair?slug=${slug}&id=${id}`;
            const as = `/fair/${slug}?id=${id}`;
            return (
              <Thumbnail
                url={work.work_image}
                title={work.work_title}
                image={
                  work.work_image.sizes.img_large ||
                  work.work_image.sizes.img_medium
                }
                artist={work.work_artist}
                key={id}
                id={id}
                as={as}
                href={href}
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
        <div>
          <Link as="/fairs" href="/fairs">
            All fairs
          </Link>
        </div>
        <PageMast>
          <Title>
            <div dangerouslySetInnerHTML={{__html: title}} />
          </Title>
          <p>
            {startDate} - {endDate}
            <br />
            Featuring: {artistListMarkup}
          </p>
          <PageNav>
            <Link
              current={currentSection === 'work'}
              onClick={this.handleSectionChange('work')}
            >
              Work
            </Link>
            <Link
              current={currentSection === 'about'}
              onClick={this.handleSectionChange('about')}
            >
              About
            </Link>
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

export default withRouter(FairSingle);
