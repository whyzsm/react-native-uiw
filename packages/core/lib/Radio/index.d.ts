import { Component } from 'react';
import { ViewProps, Animated, GestureResponderEvent } from 'react-native';
export interface RadioProps extends ViewProps {
    checked?: boolean;
    disabled?: boolean;
    circleSize?: number;
    color?: string;
    thumbSize?: number;
    onPress?: (event: GestureResponderEvent) => void;
}
export interface RadioState {
    sizeValue: Animated.Value;
    checked?: boolean;
}
export default class Radio extends Component<RadioProps, RadioState> {
    static defaultProps: RadioProps;
    constructor(props: RadioProps);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: RadioProps): void;
    animatedStart(checked?: boolean): void;
    handlePress: (event: GestureResponderEvent) => void;
    render(): JSX.Element;
}
