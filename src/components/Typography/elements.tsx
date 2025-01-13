import styled, { css } from "styled-components";
import { theme } from "../../styles";
import {
  H1Props,
  H3Props,
  H4Props,
  BodyProps,
  SpanProps,
  AnchorProps,
} from ".";

export const Heading1 = styled(({ variant, ...props }: H1Props) => (
  <h1 {...props} />
))`
  ${({ variant }) => variant && theme.typography.h1[variant]}
`;

export const Heading3 = styled(({ variant, ...props }: H3Props) => (
  <h3 {...props} />
))`
  ${({ variant }) => variant && theme.typography.h3[variant]}
`;

export const Heading4 = styled(({ variant, ...props }: H4Props) => (
  <h4 {...props} />
))`
  ${({ variant }) => variant && theme.typography.h4[variant]}
`;

export const Body = styled(
  ({ variant, subvariant, error, ...props }: BodyProps) => <h5 {...props} />
)`
  ${({ variant, subvariant, error }) =>
    variant &&
    css`
      ${subvariant === "none"
        ? theme.typography.body[variant]
        : theme.typography.body[variant][subvariant]}
      color:${error ? theme.colors.error : "inherit"}
    `}
`;

export const Span = styled(({ gradient, ...props }: SpanProps) => (
  <span {...props} />
))`
  background: ${({ gradient }) => gradient && theme.gradients[gradient]};
`;

export const Alink = styled(({ ...props }: AnchorProps) => <a {...props} />)`
  cursor: pointer;
  ${theme.typography.body.medium.regular2}
  `;
  // background: ${({ gradient }) =>
  //   gradient ? theme.gradients[gradient] : "inherit"};
