import React from 'react';
import { TouchableOpacityProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
export interface CheckBoxProps extends TouchableOpacityProps {
    textStyle?: StyleProp<TextStyle & ViewStyle>;
    checked?: boolean;
    disabled?: boolean;
    color?: string;
    checkedIcon?: string | JSX.Element;
    unCheckedIcon?: string | JSX.Element;
    onChange?: (checked: boolean) => void;
}
export interface CheckBoxState {
    checked: boolean;
}
export default class CheckBox extends React.Component<CheckBoxProps, CheckBoxState> {
    constructor(props: CheckBoxProps);
    static defaultProps: {
        checkedIcon: string;
        unCheckedIcon: string;
        color: string;
    };
    UNSAFE_componentWillReceiveProps(nextProps: CheckBoxProps): void;
    onPress: () => void;
    render(): JSX.Element;
}
