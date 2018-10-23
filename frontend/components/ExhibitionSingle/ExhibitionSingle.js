import React from 'react';
import {withRouter} from 'next/router';
import PageText from '../PageText';
import PageMast from '../PageMast';
import PageNav from '../PageNav';
import Thumbnail from '../Thumbnail';
import Title from '../Title';
import Link from '../Link';
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
      router,
    } = this.props;

    const openingReceptionMarkup = opening
      ? `Opening reception: ${opening}`
      : null;

    const displayTitle =
      artists && artists.length ? commaListsAnd`${artists}: ${title}` : title;

    function sectionMarkup(currentSection) {
      switch (currentSection) {
        case 'about':
          return (
            <PageText>
              <div dangerouslySetInnerHTML={{__html: content}} />
            </PageText>
          );
        case 'work':
          const workimageMarkup = works.map((work) => {
            const id = getFileNameFromPath(work.work_image);
            const href = `${router.pathname}?slug=${
              router.query.slug
            }&id=${id}`;
            const as = `${router.pathname}/${router.query.slug}?id=${id}`;
            return (
              <Thumbnail
                key={id}
                id={id}
                as={as}
                href={href}
                title={work.work_title}
                image={work.work_image}
              />
            );
          });
          return <React.Fragment>{workimageMarkup}</React.Fragment>;
      }
    }

    return (
      <React.Fragment>
        <Modal collection={works} />
        <PageMast>
          <Title>
            <div dangerouslySetInnerHTML={{__html: displayTitle}} />
          </Title>
          <p>
            {startDate} - {endDate}
            <br />
            {openingReceptionMarkup}
          </p>
          <PageNav>
            <Link
              current={currentSection}
              onClick={this.handleSectionChange('work')}
              href="#"
            >
              Work
            </Link>
            <Link
              current={currentSection}
              onClick={this.handleSectionChange('about')}
              href="#"
            >
              About
            </Link>
          </PageNav>
        </PageMast>
        {sectionMarkup(currentSection)}
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
