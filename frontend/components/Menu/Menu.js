import React from 'react';
import Link from '../../components/Link';
import {StyledMenuText, StyledMenu} from './styles';

function Menu({items, current}) {
  const itemsMarkup = items.map((item, index) => {
    return item.object === 'custom' ? (
      <Link href={item.url} key={item.ID}>
        <StyledMenuText current={current === item.url}>
          {item.title}
        </StyledMenuText>
      </Link>
    ) : (
      <Link
        current={current}
        as={`/${getSlug(item.url)}`}
        href={`/${getSlug(item.url)}`}
        key={item.ID}
      >
        <StyledMenuText current={current === `/${getSlug(item.url)}`}>
          {item.title}
        </StyledMenuText>
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
