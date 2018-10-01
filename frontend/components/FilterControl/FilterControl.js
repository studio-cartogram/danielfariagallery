import Icon from '../Icon';

import {
  StyledButton,
  StyledLi,
  StyledFilterControl,
  StyledItemsList,
  StyledArrow,
} from './styles';

function FilterControl({label, filterKey, items, onItemClick, open, selected}) {
  const itemsMarkup = [...new Set(items)].map((item, index) => {
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
      <StyledButton onClick={open ? onItemClick() : onItemClick(filterKey)}>
        {open ? label : selected || label}
        <StyledArrow>
          <Icon icon={open ? 'ARROWUP' : 'ARROWDOWN'} />
        </StyledArrow>
      </StyledButton>
    </StyledLi>
  );

  return (
    <StyledFilterControl>
      {allButtonMarkup}
      <StyledItemsList open={open}>{itemsMarkup}</StyledItemsList>
    </StyledFilterControl>
  );
}

export default FilterControl;
