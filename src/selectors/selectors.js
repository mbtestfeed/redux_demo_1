export function tastesFormattedForDropdown(tastes) {
  return tastes.map(taste => {
    console.log(taste);
    return {
      value: taste,
      text: taste
    };
  });
}
