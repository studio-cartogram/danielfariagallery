import React from 'react';
import Link from '../../components/Link';
import {StyledMenuText, StyledMenu} from './styles';

function Menu({items}) {
  const itemsMarkup = items.map((item, index) => {
    return item.object === 'custom' ? (
      <Link href={item.url} key={item.ID}>
        <StyledMenuText>{item.title}</StyledMenuText>
      </Link>
    ) : (
      <Link
        as={`/${getSlug(item.url)}`}
        href={`/${getSlug(item.url)}`}
        key={item.ID}
      >
        <StyledMenuText>{item.title}</StyledMenuText>
      </Link>
    );
  });

  return <StyledMenu>{itemsMarkup}</StyledMenu>;
}

function getSlug(url) {
  const parts = url.split('/');
  return parts.length > 2 ? parts[parts.length - 2] : '';
}

export default Menu;
