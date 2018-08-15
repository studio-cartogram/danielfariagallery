function FilterControl({label, items, onItemClick}) {
  const itemsMarkup = [...new Set(items)].map((item) => {
    return (
      <li key={item}>
        <button onClick={onItemClick(item)}>{item}</button>
      </li>
    );
  });

  const allButtonMarkup = (
    <li>
      <button onClick={onItemClick(null)}>{label} ^</button>
    </li>
  );

  return (
    <ul>
      {allButtonMarkup}
      {itemsMarkup}
    </ul>
  );
}

export default FilterControl;
