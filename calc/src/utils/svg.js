export function getRingFiltersText(ringFilters) {
  return ringFilters.reduce((str, ringFilter, idx) => {
    if (idx > 0) str += ",";
    if (Array.isArray(ringFilter))
      return (str + ringFilter[0] + "-" + ringFilter[1]);
    if (!isNaN(ringFilter)) return str + ringFilter;
  }, "");
}
