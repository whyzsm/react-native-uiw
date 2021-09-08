import { Component } from 'react';
import { Animated, ViewProps, ViewStyle, GestureResponderEvent } from 'react-native';
export interface DrawerProps extends ViewProps {
    isOpen?: boolean;
    maskClosable?: boolean;
    placement?: 'right' | 'left' | 'top' | 'bottom';
    drawerWidth?: number;
    drawerHeight?: number;
    maskProps?: ViewStyle;
    drawerBackgroundColor?: string;
    onChange?: (isOpen: boolean) => void;
    openDrawer?: (isOpen: boolean) => void;
    closeDrawer?: (isOpen: boolean) => void;
}
export interface DrawerState {
    drawerValue: Animated.ValueXY;
    overlayValue: Animated.Value;
    zIndexValue: number;
}
export default class Drawer extends Component<DrawerProps, DrawerState> {
    static defaultProps: {
        placement: string;
        drawerBackgroundColor: string;
        drawerWidth: number;
        drawerHeight: number;
        maskClosable: boolean;
        isOpen: boolean;
        onChange: () => null;
        openDrawer: () => null;
        closeDrawer: () => null;
    };
    constructor(props: DrawerProps);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: DrawerProps): void;
    onOverlayClick: (e: GestureResponderEvent) => false | undefined;
    render(): JSX.Element;
    handleDrawer(isOpen: boolean): void;
    getInitPosition(): {
        x: number;
        y: number;
    };
    openDrawer(): void;
    closeDrawer(): void;
}
