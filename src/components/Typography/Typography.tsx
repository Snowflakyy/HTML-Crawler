import {
  Body,
  Heading1,
  Heading3,
  Heading4,
  Span,
  Alink as AlinkElement,
} from "./elements";
import React from "react";
import {
  HTMLHeadingPropsH1,
  HTMLHeadingPropsH3,
  HTMLHeadingPropsH4,
  HTMLHeadingPropsBody,
  HTMLSpanProps,
  HTMLAnchorProps,
} from "../../types";
export interface H1Props extends HTMLHeadingPropsH1 {
  variant?: "bold" | "medium";
}

export const H1Bd = ({ variant = "bold", ...props }: H1Props) => {
  return <Heading1 {...props} variant={variant} />;
};
export const H1Md = ({ variant = "medium", ...props }: H1Props) => {
  return <Heading1 {...props} variant={variant} />;
};

export interface H3Props extends HTMLHeadingPropsH3 {
  variant?: "bold" | "medium";
}

export const H3Bd = ({ variant = "bold", ...props }: H3Props) => {
  return <Heading3 {...props} variant={variant} />;
};

export const H3Md = ({ variant = "medium", ...props }: H3Props) => {
  return <Heading3 {...props} variant={variant} />;
};

export interface H4Props extends HTMLHeadingPropsH4 {
  variant?: "large" | "medium" | "small";
}

export const H4Lg = ({ variant = "large", ...props }: H4Props) => {
  return <Heading4 {...props} variant={variant} />;
};
export const H4Md = ({ variant = "medium", ...props }: H4Props) => {
  return <Heading4 {...props} variant={variant} />;
};
export const H4Sm = ({ variant = "small", ...props }: H4Props) => {
  return <Heading4 {...props} variant={variant} />;
};

export interface BodyProps extends HTMLHeadingPropsBody {
  variant: "large" | "medium" | "small" | "button";
  subvariant: "none" | "medium" | "regular" | "semibold" | "regular2";
  error?: boolean;
}
export const BodyLg = ({
  variant = "large",
  subvariant = "none",
  ...props
}: BodyProps) => {
  return <Body {...props} variant={variant} subvariant={subvariant} />;
};
BodyLg.defaultProps = {
  variant: "large",
  subvariant: "",
};

export const BodyBtn = ({
  variant = "button",
  subvariant = "none",
  ...props
}: BodyProps) => {
  return <Body {...props} variant={variant} subvariant={subvariant} />;
};
BodyLg.defaultProps = {
  variant: "button",
  subvariant: "none",
};

export const BodyMdMd = ({
  variant = "medium",
  subvariant = "medium",
  ...props
}: BodyProps) => {
  return <Body {...props} variant={variant} subvariant={subvariant} />;
};
BodyMdMd.defaultProps = {
  variant: "medium",
  subvariant: "medium",
};
export const BodyMdRg = ({
  variant = "medium",
  subvariant = "regular",
  ...props
}: BodyProps) => {
  return <Body {...props} variant={variant} subvariant={subvariant} />;
};
BodyMdRg.defaultProps = {
  variant: "medium",
  subvariant: "regular",
};
export const BodyMdSb = ({
  variant = "medium",
  subvariant = "regular2",
  ...props
}: BodyProps) => {
  return <Body {...props} variant={variant} subvariant={subvariant} />;
};
BodyMdSb.defaultProps = {
  variant: "medium",
  subvariant: "regular2",
};

export const BodySmRg = ({
  variant = "small",
  subvariant = "regular",
  ...props
}: BodyProps) => {
  return <Body {...props} variant={variant} subvariant={subvariant} />;
};
BodySmRg.defaultProps = {
  variant: "small",
  subvariant: "regular",
};
export const BodySmMd = ({
  variant = "small",
  subvariant = "medium",
  error = false,
  ...props
}: BodyProps) => {
  return (
    <Body {...props} variant={variant} error={error} subvariant={subvariant} />
  );
};
BodySmMd.defaultProps = {
  variant: "small",
  subvariant: "medium",
  error: false,
};

export interface SpanProps extends HTMLSpanProps {
  gradient:  "purpleToBlueText" | "pinkToYellowText";
}

export const SpanElement = ({ gradient = "pinkToYellowText", ...props }: SpanProps) => {
  return <Span {...props} gradient={gradient} />;
};

export interface AnchorProps extends HTMLAnchorProps {
  // gradient?: "purpleToBlueText" | "pinkToYellow";
}

export const Alink = ({ ...props }: AnchorProps) => {
  return <AlinkElement {...props} />;
};

export const Typography = {
  H1Bd,
  H1Md,
  H3Bd,
  H4Md,
  BodyLg,
  BodyMdMd,
  BodyMdRg,
  BodyMdSb,
};
