import React from 'react';
import PageText from '../PageText';
import PageMast from '../PageMast';
import PageThumbs from '../PageThumbs';
import Thumbnail from '../Thumbnail';
import Title from '../Title';
import Column from '../Column';

function ExhibitionSingle({
  title,
  startDate,
  endDate,
  opening,
  works,
  content,
}) {
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

  const openingReceptionMarkup = opening
    ? `Opening reception: ${opening}`
    : null;

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
      </PageMast>
      <Column />
      <PageText>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </PageText>
      <PageThumbs>{workimageMarkup}</PageThumbs>
    </React.Fragment>
  );
}

export default ExhibitionSingle;
