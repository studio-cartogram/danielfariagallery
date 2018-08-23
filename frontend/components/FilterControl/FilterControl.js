import {StyledButton, StyledLi, StyledFilterControl} from './styles';

function FilterControl({label, items, onItemClick}) {
  const itemsMarkup = [...new Set(items)].map((item) => {
    return (
      <StyledLi key={item}>
        <StyledButton onClick={onItemClick(item)}>{item}</StyledButton>
      </StyledLi>
    );
  });

  const allButtonMarkup = (
    <StyledLi>
      <StyledButton onClick={onItemClick(null)}>{label}</StyledButton>
    </StyledLi>
  );

  return (
    <StyledFilterControl>
      {allButtonMarkup}
      {itemsMarkup}
    </StyledFilterControl>
  );
}

export default FilterControl;
