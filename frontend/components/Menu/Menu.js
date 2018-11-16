import React from 'react';
import Link from '../../components/Link';
import {StyledMenuText, StyledMenu} from './styles';

function Menu({items, current}) {
  const itemsMarkup = items.map((item, index) => {
    // console.log(getSlug(item.url));
    console.log(current.includes(item.url) && item);

    return item.object === 'custom' ? (
      <StyledMenuText key={item.ID}>
        <Link
          current={current.includes(item.url)}
          variant="primary"
          href={item.url}
        >
          {item.title}
        </Link>
      </StyledMenuText>
    ) : (
      <StyledMenuText key={item.ID}>
        <Link
          variant="primary"
          current={current === `/${getSlug(item.url)}`}
          as={`/${getSlug(item.url)}`}
          href={`/${getSlug(item.url)}`}
        >
          {item.title}
        </Link>
      </StyledMenuText>
    );
  });
  return <StyledMenu>{itemsMarkup}</StyledMenu>;
}

function getSlug(url) {
  const parts = url.split('/');
  return parts.length > 2 ? parts[parts.length - 2] : '';
}

export default Menu;
