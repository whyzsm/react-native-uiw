import React from 'react';
import { SvgProps } from 'react-native-svg';
import svgPaths from '@uiw/icons/fonts/w-icon.json';
export declare type IconsName = keyof typeof svgPaths;
export interface IconsProps extends SvgProps {
    name?: IconsName;
    size?: number;
    fill?: string;
    stroke?: string;
    /**
     * SVG path d=`paths`
     */
    paths?: string[];
    /**
     * Svg 图标字符串
     */
    xml?: string;
}
export default class Icons extends React.Component<IconsProps> {
    static displayName: string;
    static defaultProps: IconsProps;
    render(): JSX.Element | null;
}
