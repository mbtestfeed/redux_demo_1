export function tastesFormattedForDropdown(tastes) {
  return tastes.map(taste => {
    return {
      value: taste,
      text: taste
    };
  });
}
