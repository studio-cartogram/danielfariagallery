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
        url={work.work_image}
        title={work.work_title}
        image={work.work_image}
      />
    );
  });

  return (
    <React.Fragment>
      <Column />
      <PageMast>
        <Title>{title}</Title>
        <p>
          {startDate} - {endDate}
          <br />
          Opening reception: {opening}
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
