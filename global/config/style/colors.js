export const black = `rgb(10, 10, 10)`;
export const white = `rgb(245, 245, 245)`;

export const grey = `rgb(33, 34, 46)`;
export const greyDark = `rgb(23, 24, 34)`;
export const greyLight = `rgb(53, 54, 66)`;

export const primary = `rgb(253, 163, 43)`;
export const primaryDark = `rgb(250, 147, 30)`;
export const secondary = `rgb(0, 196, 232)`;
export const secondaryDark = `rgb(0, 183, 210)`;

export const bad = `#BB4646`;
export const good = `#7DB743`;
export const info = `#5BAFBB`;
export const warn = `#D4B442`;

export const status = {
  bad,
  good,
  info,
  warn,
}

export const defaultColors = {
  background: black['800'],
  black: black['800'],
  grey: grey['500'],
  link: secondary['600'],
  linkHover: secondary['100'],
  primary: primary['500'],
  primaryHover: primary['100'],
  primaryText: white['100'],
  secondary: secondary['500'],
  secondaryHover: secondary['100'],
  secondaryText: white['100'],
  text: white['200'],
  white: '#EFEFE1',
};


export default {
  ...defaultColors,
  status,
  black,
  grey,
  white,
  primary,
  secondary,
  defaultColors
};
