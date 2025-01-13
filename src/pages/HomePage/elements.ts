import styled, { css } from "styled-components";
import {
  Button as _button,
  Image as _image,
  H1Bd as _h1,
  H1Md as _h2,
  H3Bd as _h3,
  H4Lg as _h4,
  H4Md as _h5,
  H4Sm as _h6,
  BodyMdMd as _p,
  Alink as _a,
} from "../../components";
import { FormInput as _form } from "../../components/FormInput/elements";
import { theme } from "../../styles/theme";
export const H1 = styled(_h1)``
export const H2 = styled(_h2)``
export const H3 = styled(_h3)``
export const H4 = styled(_h4)``
export const H5 = styled(_h5)``
export const H6=styled(_h6)``
export const P = styled(_p)(() => css``);
export const A = styled(_a)``;
export const Image = styled(_image)`
  widht: 50px;
  height: 50px;
`;
export const Input = styled(_form)``;
export const TableContainer = styled.table`
  width: 100%;
`;
export const TableRow = styled.tr``;
export const TableCell = styled.td`
  ${() => theme.typography.body.medium.medium}
`;
export const TableBody = styled.tbody``
export const Button = styled(_button)`
  width: 20%;
`;
export const DivContainer = styled.div`
margin-top:100px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

