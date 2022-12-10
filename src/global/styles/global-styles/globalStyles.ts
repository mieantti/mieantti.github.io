// Emotion
import { css } from '@emotion/react'

export const globalStyles = css`
  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    height: 100%;
  }
  body {
    margin: 0;
  }
  #tsparticles {
    position: fixed;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    z-index: -1;
  }
  @media (prefers-color-scheme: dark) {
    body {
      background-color: #2962ff;
      color: #000000;
    }
  }
  @media (prefers-color-scheme: light) {
    body {
      background-color: #448aff;
      color: #000000;
    }
  }
  .base-max-width {
    margin-left: auto;
    margin-right: auto;
    max-width: 100rem;
  }
`
