import React, { Component } from 'react';
import { TextProps } from 'react-native';
import { FlexProps } from '../Flex';
export interface EmptyProps extends FlexProps {
    /**
     * 设置提示语
     */
    label?: string;
    /**
     * 设置提示音样式
     */
    labelStyle?: TextProps['style'];
    /**
     * 设置 图标尺寸
     */
    size?: number;
    /**
     * 替换默认的图标 这里是 SVG string
     */
    xml?: string;
    /**
     * 空提示更多内容
     */
    children?: React.ReactNode;
}
export default class Empty extends Component<EmptyProps> {
    static defaultProps: EmptyProps;
    render(): JSX.Element;
}
