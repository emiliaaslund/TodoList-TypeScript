import { createGlobalStyle } from "styled-components";

import FormulaRegular from "./Formula1-Regular.ttf";
import FormulaBold from "./Formula1-Bold.ttf";
import FormulaWide from "./Formula1-Wide.ttf";

export default createGlobalStyle`
@font-face {
  font-family: "FormulaRegular";
  src: local("FormulaRegular"),
    url(${FormulaRegular}) format("truetype");
}

@font-face {
  font-family: "FormulaBold";
  src: local("FormulaBold"), url(${FormulaBold}) format("truetype");
}

@font-face {
  font-family: "FormulaWide";
  src: local("FormulaWide"), url(${FormulaWide}) format("truetype");
}
`;
