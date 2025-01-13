import { DefaultTheme, Interpolation } from "styled-components";

type ThemeProps<T> = {
    theme: T;
};
export type FlattenInterpolation<P> = ReadonlyArray<Interpolation<ThemeProps<P>>>;
export interface TypographyStylesProps {

h1:{
    bold : FlattenInterpolation<DefaultTheme> , 
    medium : FlattenInterpolation<DefaultTheme>
}
h3:{
    bold:FlattenInterpolation<DefaultTheme>,
    medium : FlattenInterpolation<DefaultTheme>,
}
h4:{
    large:FlattenInterpolation<DefaultTheme>,
    medium: FlattenInterpolation<DefaultTheme>,
    small:FlattenInterpolation<DefaultTheme>,
}
body:{
 large:FlattenInterpolation<DefaultTheme>,
 button:FlattenInterpolation<DefaultTheme>,
    medium:{
        medium:FlattenInterpolation<DefaultTheme>,
        regular:FlattenInterpolation<DefaultTheme>,
        regular2:FlattenInterpolation<DefaultTheme>
    }
    small:{
        medium:FlattenInterpolation<DefaultTheme>,
        regular:FlattenInterpolation<DefaultTheme>,
    }
}
}
