import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Heading Font Name';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/Poppins-Regular.ttf') format('ttf');
        unicode-range: U+0000-007F, U+00A0-00FF, U+0100-017F, U+0180-024F, U+1E00-1EFF, U+0259, U+0279, U+0292, U+02B0, U+02BB, U+02BC, U+0300-036F, U+1DC4-1DC7, U+1DCA, U+1DD2-1DD4, U+1DD6, U+1DD8, U+1DDA, U+1DDC-1DDE, U+1DE0-1DE6, U+1DE8-1DF5, U+1DFC-1DFF, U+1E9E, U+1F00-1FFF;
      }
      `}
  />
);

export default Fonts;
