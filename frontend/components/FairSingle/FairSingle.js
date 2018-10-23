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

class FairSingle extends React.Component {
  state = {
    currentSection: 'work',
  };
  render() {
    const {currentSection} = this.state;
    const {title, works, content, startDate, endDate} = this.props;

    // const workArtists = works.map((work) => {
    //   return work.work_artist[0];
    // });

    // const featuredArtists = work.reduce((acc, work) => {
    //   const currentArtists = work.work_artist.map(
    //     (artist) => artist && artist.post_title,
    //   );
    //   return [...acc, ...currentArtists];
    // }, []);

    // const newsArtists = news.reduce((acc, news) => {
    //   const currentNewsArtists = news.acf.artist.map(
    //     (artist) => artist && artist.post_title,
    //   );

    //   return [...acc, ...currentNewsArtists];
    // }, []);

    // const fairArtists = works.reduce((acc, work) => {
    //   const currentFairArtists = work.work_artist.map(
    //     (artist) => artist && artist.post_title,
    //   );

    //   return [...acc, ...currentFairArtists];
    // }, []);

    // console.log(featuredArtists);

    // const workArtists = works.map((work) => {
    //   return work.work_artist;
    // });

    // const workArtists = works.map((item) => {
    //   const featuredArtists = item.work_artist.map(
    //     (artist) => artist && artist.post_title,
    //   );
    //   return [...featuredArtists];
    // }, []);

    // console.log(featuredArtists);

    // this gets me the first artist off the first Work
    // console.log(works[0].work_artist[0].post_title);

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
            return (
              <Thumbnail
                key={work.work_image}
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
        <PageMast>
          <Title>
            <div dangerouslySetInnerHTML={{__html: title}} />
          </Title>
          <p>
            {startDate} - {endDate}
          </p>
          <PageNav>
            <Link onClick={this.handleSectionChange('work')}>Work</Link>
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

export default FairSingle;
