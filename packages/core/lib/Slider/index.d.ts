import { Component } from 'react';
import { ViewProps, ViewStyle, LayoutChangeEvent, Animated, PanResponderInstance, PanResponderGestureState } from 'react-native';
declare const DEFAULT_ANIMATION_CONFIGS: {
    spring: {
        friction: number;
        tension: number;
    };
    timing: {
        duration: number;
        easing: import("react-native").EasingFunction;
        delay: number;
    };
};
export interface RectProps {
    width: number;
    height: number;
}
export interface SliderProps extends ViewProps {
    value?: number;
    step?: number;
    maxValue?: number;
    minValue?: number;
    /**
     * 值为 `true` 时，Slider 为垂直方向
     */
    vertical?: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    shownThumb?: boolean;
    thumbSize?: RectProps;
    animationType?: keyof typeof DEFAULT_ANIMATION_CONFIGS;
    maximumTrackTintColor?: string;
    minimumTrackTintColor?: string;
    thumbTintColor?: string;
    trackStyle?: ViewStyle;
    thumbStyle?: ViewStyle;
    animateTransitions?: boolean;
    animationConfig?: Animated.SpringAnimationConfig;
    onChange?: (value: number) => void;
    onSlidingComplete?: (value: number) => void;
    onSlidingStart?: (value: number) => void;
}
export interface SliderState {
    containerSize: RectProps;
    trackSize: RectProps;
    thumbSize: RectProps;
    value: Animated.Value;
}
export default class Slider extends Component<SliderProps, SliderState> {
    panResponder: PanResponderInstance;
    _previousLeft: number;
    static defaultProps: {
        value: number;
        step: number;
        maxValue: number;
        minValue: number;
        height: number;
        vertical: boolean;
        shownThumb: boolean;
        thumbSize: {
            width: number;
            height: number;
        };
        maximumTrackTintColor: string;
        minimumTrackTintColor: string;
        thumbTintColor: string;
        animationType: string;
        onChange: () => void;
        onSlidingComplete: () => void;
        onSlidingStart: () => void;
    };
    constructor(props: SliderProps);
    componentDidUpdate(prevProps: SliderProps): void;
    setCurrentValue(value: number): void;
    setCurrentValueAnimated(value: number): void;
    getThumbLeft(value: number): number;
    getCurrentValue: () => any;
    handlePanResponderGrant: () => void;
    handlePanResponderEnd: () => void;
    handlePanResponderMove: (_: any, gestureState: PanResponderGestureState) => void;
    getValue(gestureState: PanResponderGestureState): number;
    handleMeasure(name: string, event: LayoutChangeEvent): void;
    measureContainer: (event: LayoutChangeEvent) => void;
    measureThumb: (event: LayoutChangeEvent) => void;
    getMinimumTrackStyles(thumbStart: Animated.AnimatedInterpolation): {
        position: ViewStyle['position'];
        height?: Animated.AnimatedAddition | undefined;
        width?: Animated.AnimatedAddition | undefined;
        marginLeft?: ViewStyle['marginLeft'];
        marginTop?: ViewStyle['marginTop'];
    };
    getThumbPositionStyles(thumbStart: Animated.AnimatedInterpolation): ({
        translateX: number;
        translateY?: undefined;
    } | {
        translateY: Animated.AnimatedInterpolation;
        translateX?: undefined;
    })[] | ({
        translateX: Animated.AnimatedInterpolation;
        translateY?: undefined;
    } | {
        translateY: number;
        translateX?: undefined;
    })[];
    render(): JSX.Element;
}
export {};
