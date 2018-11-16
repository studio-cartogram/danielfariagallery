import Icon from '../Icon';
import Link from '../Link';

import {
  StyledButton,
  StyledLi,
  StyledFilterControl,
  StyledItemsList,
  StyledArrow,
  StyledBackdrop,
  StyledLink,
} from './styles';

function FilterControl({
  label,
  filterKey,
  items,
  onItemClick,
  open,
  selected,
  href,
  current,
}) {
  if (href) {
    return (
      <StyledLink>
        <Link variant="primary" current={current} href={href}>
          {label}
        </Link>
      </StyledLink>
    );
  }
  const itemsMarkup = [...new Set(items)].map((item, index) => {
    if (!item) {
      return null;
    }
    return (
      <StyledLi key={`${item}${index}`}>
        <StyledButton onClick={onItemClick(filterKey, item)}>
          {item}
        </StyledButton>
      </StyledLi>
    );
  });

  const allButtonMarkup = (
    <StyledLi>
      <StyledButton
        open={open}
        onClick={open ? onItemClick() : onItemClick(filterKey)}
      >
        {open ? label : selected || label}
        <StyledArrow>
          <Icon icon={open ? 'ARROWUP' : 'ARROWDOWN'} />
        </StyledArrow>
      </StyledButton>
    </StyledLi>
  );

  const backdropMarkup = open ? (
    <StyledBackdrop onClick={onItemClick()} />
  ) : null;

  return (
    <StyledFilterControl>
      {allButtonMarkup}
      <StyledItemsList open={open}>{itemsMarkup}</StyledItemsList>
      {backdropMarkup}
    </StyledFilterControl>
  );
}

export default FilterControl;
