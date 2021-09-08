import { ModalProps as RNModalProps, Animated } from 'react-native';
export interface MaskLayerProps extends RNModalProps {
    /**
     * 遮罩层是否禁止点击
     * defult: `true`
     */
    maskClosable?: boolean;
    /**
     * 是否隐藏
     */
    visible?: boolean;
    /**
     * 遮罩层透明度
     * defult: `0.6`
     */
    opacity?: number;
    /**
     * 隐藏消除回调事件
     */
    onDismiss?: () => void;
    animatedParallelShow?: Animated.CompositeAnimation[];
    animatedParallelHide?: Animated.CompositeAnimation[];
    children?: JSX.Element;
}
declare const _default: (props?: MaskLayerProps) => JSX.Element;
export default _default;
