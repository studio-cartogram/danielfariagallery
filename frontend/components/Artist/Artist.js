import React, {Component} from 'react';
import Link from 'next/link';
import {StyledImage, StyledImageContainer} from './styles';

function Artist({url, image, title}) {
  return (
    <Link href={url}>
      <a>{title}</a>
    </Link>
  );
}

export default Artist;
