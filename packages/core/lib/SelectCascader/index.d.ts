import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import React, { Component } from 'react';
export declare type CascaderOneValue = string | number | undefined;
export declare type CascaderValue = CascaderOneValue[];
export interface ICascaderDataItem {
    label: React.ReactNode;
    value: CascaderOneValue;
    children?: ICascaderDataItem[];
}
export interface ISelectCascaderProps {
    onDismiss?: () => void;
    title?: string;
    dismissText?: string;
    okText?: string;
    value?: CascaderValue;
    onChange?: (value: CascaderValue, label: string) => void;
    visible: boolean;
    onVisibleChange?: () => {};
    data: ICascaderDataItem[];
    defaultValue?: CascaderValue | undefined;
    onOk?: (value: CascaderValue, label: string) => void;
    disabled?: boolean;
    cols?: number;
    pickerItemStyle?: StyleProp<TextStyle>;
    headerStyle?: StyleProp<ViewStyle>;
}
export interface Istate {
    modalVisible: boolean;
    value: CascaderValue;
}
export default class SelectCascader extends Component<ISelectCascaderProps, Istate> {
    static defaultProps: {
        dismissText: string;
        okText: string;
        title: string;
        disabled: boolean;
        cols: number;
    };
    state: {
        value: CascaderValue;
        modalVisible: boolean;
    };
    outerCtrl: () => void;
    componentWillReceiveProps(nextProps: ISelectCascaderProps): void;
    getSel(value: CascaderValue): string;
    onValueChange: (itemValue: CascaderOneValue, index: number) => void;
    getValue(d: ICascaderDataItem[], val: CascaderValue | undefined): CascaderValue;
    getCols: () => JSX.Element[];
    onDismiss: () => void;
    onOk: () => void;
    render(): JSX.Element;
}
