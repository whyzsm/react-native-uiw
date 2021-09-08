import React from 'react';
import { Animated, SwitchProps as SwitchPropsDefault, ViewStyle, LayoutChangeEvent } from 'react-native';
export interface SwitchProps extends SwitchPropsDefault {
    trackStyle?: ViewStyle;
    thumbStyle?: ViewStyle;
    checked?: boolean;
    color?: string;
    /**
     * 设置大小
     */
    size?: 'small' | 'default' | 'large';
}
export interface SwitchState {
    checked: boolean;
    borderValue: Animated.Value;
    translateXValue: Animated.Value;
    bgOpacity: Animated.Value;
    containerSize: {
        width: number;
        height: number;
    };
}
export default class Switch extends React.Component<SwitchProps, SwitchState> {
    translateXValue: number;
    height: number;
    static defaultProps: SwitchProps;
    constructor(props: SwitchProps);
    UNSAFE_componentWillReceiveProps(nextProps: SwitchProps): void;
    animatedStart(checked: boolean): void;
    onPress: () => void;
    measureContainer: (event: LayoutChangeEvent) => void;
    render(): JSX.Element;
}
