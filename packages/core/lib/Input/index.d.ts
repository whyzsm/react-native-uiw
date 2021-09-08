import React from 'react';
import { TextInput, TextInputProperties, GestureResponderEvent } from 'react-native';
import { InputItemPropsType } from './PropsType';
export interface InputProps extends Omit<TextInputProperties, 'onChange' | 'onFocus' | 'onBlur'>, InputItemPropsType {
    last?: boolean;
    onExtraClick?: (event: GestureResponderEvent) => void;
    onErrorClick?: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    onChange?: (value: string) => void;
}
export default class Input extends React.Component<InputProps, any> {
    static defaultProps: {
        type: string;
        editable: boolean;
        clear: boolean;
        onChange: () => void;
        onBlur: () => void;
        onFocus: () => void;
        extra: string;
        onExtraClick: () => void;
        error: boolean;
        onErrorClick: () => void;
        last: boolean;
    };
    inputRef: TextInput | null | undefined;
    onChange: (text: string) => void;
    onInputClear: () => void;
    render(): JSX.Element;
}
