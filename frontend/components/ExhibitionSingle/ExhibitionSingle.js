import React from 'react';
import PageText from '../PageText';
import PageMast from '../PageMast';
import PageThumbs from '../PageThumbs';
import Thumbnail from '../Thumbnail';
import Title from '../Title';
import Column from '../Column';

class ExhibitionSingle extends React.Component {
  state = {
    currentSection: 'work',
  };
  render() {
    const {currentSection} = this.state;
    const {title, startDate, endDate, opening, works, content} = this.props;

    const openingReceptionMarkup = opening
      ? `Opening reception: ${opening}`
      : null;

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
            return (
              <Thumbnail
                key={work.work_image}
                url={work.work_image}
                title={work.work_title}
                image={work.work_image}
              />
            );
          });
          return <PageThumbs>{workimageMarkup}</PageThumbs>;
      }
    }

    return (
      <React.Fragment>
        <Column />
        <PageMast>
          <Title>
            <div dangerouslySetInnerHTML={{__html: title}} />
          </Title>
          <p>
            {startDate} - {endDate}
            <br />
            {openingReceptionMarkup}
          </p>
          <button onClick={this.handleSectionChange('work')}>Work</button>
          <button onClick={this.handleSectionChange('about')}>About</button>
        </PageMast>
        <Column />
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

export default ExhibitionSingle;
