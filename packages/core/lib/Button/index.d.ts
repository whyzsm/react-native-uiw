import React from 'react';
import { TextProps, TouchableOpacityProps } from 'react-native';
export interface ButtonProps extends TouchableOpacityProps {
    color?: string;
    /**
     * 如果子节点是文本，修改文本样式
     */
    textStyle?: TextProps['style'];
    /**
     * 设置禁用
     */
    disabled?: boolean;
    /**
     * 加载状态
     */
    loading?: boolean;
    /**
     * 按钮类型，可选值为
     */
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark';
    /**
     * 按钮尺寸
     */
    size?: 'small' | 'default' | 'large';
    /**
     * 设置按钮圆角
     */
    rounded?: boolean | number;
    /**
     * 设置是否显示边框
     */
    bordered?: boolean;
}
export default class ButtonView<T> extends React.Component<ButtonProps> {
    static defaultProps: ButtonProps;
    render(): JSX.Element | null;
}
