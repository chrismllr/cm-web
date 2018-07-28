import { css } from 'styled-components'

export const palette = {
  TEXT: '#222',
  TEXT_LT: '#4a4a4a',
  PRIMARY: '#9021fb',
  DX_GOLD: '#D6B064',
  BG: '#f8f8f8',
  LIGHTBOX_BG: 'rgba(255, 255, 107, 0.98)'
}

export const fonts = {
  PRIMARY: '"Paytone One", serif',
  SECONDARY: '"IBM Plex Sans", sans-serif'
}

const sizes = {
  tablet: 630,
  desktop: 768
}

export const media = Object.keys(sizes).reduce(
  (acc, label) => ({
    ...acc,
    [label]: (...args) => css`
      @media screen and (min-width: ${sizes[label] / 14}rem) {
        ${css(...args)};
      }
    `
  }),
  {}
)
