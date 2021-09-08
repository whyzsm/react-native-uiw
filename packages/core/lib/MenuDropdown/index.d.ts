import React from 'react';
import { Animated, LayoutChangeEvent } from 'react-native';
import Item from './item';
import { ButtonProps } from '../Button';
import { IconsName } from '../Icon';
export interface MenuDropdownProps extends ButtonProps {
    title: string;
}
interface IState {
    btnIcon: IconsName;
    visibleMenu: Boolean;
    listHeightValue: Animated.Value;
    listHeight: number;
}
export default class MenuDropdown extends React.Component<MenuDropdownProps> {
    static defaultProps: MenuDropdownProps;
    static Item: typeof Item;
    state: IState;
    handleonPress: () => void;
    animateStart: () => void;
    animateClose: () => void;
    menuContainer: (event: LayoutChangeEvent) => void;
    render(): JSX.Element;
}
export {};
