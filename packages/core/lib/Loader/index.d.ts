import React, { Component } from 'react';
import { ViewProps } from 'react-native';
export interface LoaderProps extends ViewProps {
    /**
     * 图标的大小 (default is `small`)
     */
    size?: 'small' | 'large';
    /**
     * The foreground color of the spinner (default is `gray`).
     */
    color?: string;
    /**
     * 遮罩层颜色 (default is `rgba(255, 255, 255, 0.85)`)
     */
    maskColor?: string;
    /**
     * 是显示`Indicator`（默认值是true）还是隐藏`Indicator`（false）。
     */
    loading?: boolean;
    /**
     * 动画图标与文字垂直显示
     */
    vertical?: boolean;
    /**
     * 设置按钮圆角，用于加载内容为圆角的情况
     */
    rounded?: number;
    /**
     * 当作为包裹元素时，可以自定义描述文案
     */
    tip?: React.ReactNode;
}
export default class Loader extends Component<LoaderProps> {
    static defaultProps: LoaderProps;
    render(): JSX.Element | null;
}
