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
  #work-item-date {
    width: 10rem;
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

  /* Footer */
  #footer-content {
    padding: 3rem 3rem 3rem 3rem;
    transition: 0.3s;
  }
  #footer-content p:hover {
    color: #fff;
  }
  @media (prefers-color-scheme: dark) {
    #footer-content p:hover {
      color: #f5f5f5;
    }
  }
  @media only screen and (min-device-width: 350px) and (max-device-width: 915px) {
    #footer-content {
      padding: 3rem 3rem 3rem 3rem;
    }
  }

  /* Navigation */
  #navigation {
    display: flex;
    padding: 1rem 5rem 3rem 5rem;
  }
  #navigation-h1 {
    width: 50rem;
  }
  #navigation-h1 p {
    text-decoration: none;
    transition: 0.3s;
  }
  #navigation-h1 p:hover {
    color: #fff;
  }

  @media (prefers-color-scheme: dark) {
    #navigation-h1 p:hover {
      color: #f5f5f5;
    }
  }

  @media only screen and (min-device-width: 350px) and (max-device-width: 915px) {
    #navigation {
      padding: 1rem 5rem 1rem 5rem;
    }
  }
`
