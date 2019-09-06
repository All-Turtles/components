import { css, createGlobalStyle } from 'styled-components'

import { Colors } from 'app/styles'

const sansSerifFallback = "'-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Roboto', 'sans-serif'"

export const fontFace = `'Quasimoda', ${sansSerifFallback}`
export const fontWeights = {
  regular: 400
}

export const body = css`
  font-size: 16px;
  line-height: 152%;
`

export const header1 = css`
  font-size: 24px;
  line-height: 152%;
  font-weight: ${fontWeights.regular};
  margin: 0;
`
export const header2 = css`
  font-size: 20px;
  line-height: 152%;
  font-weight: ${fontWeights.regular};
  margin: 0;
`
export const header3 = css`
  font-size: 18px;
  line-height: 152%;
  font-weight: ${fontWeights.regular};
  margin: 0;
`
export const header4 = css`
  font-size: 22px;
  line-height: 152%;
  font-weight: ${fontWeights.regular};
  margin: 40px 0 20px 0;
`
export const header5 = css`
  font-size: 18px;
  line-height: 152%;
  font-weight: ${fontWeights.regular};
  margin: 30px 0 15px 0;
`

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${fontFace};
  }

  h1 { ${header1}; }
  h2 { ${header2}; }
  h3 { ${header3}; }
  h4 { ${header4}; }
  h5 { ${header5}; }
  a {
    color: ${Colors.brand};
    text-decoration: none;
    transition: color .3s ease;

    &:hover {
      color: ${Colors.brand};
    }
  }
`
