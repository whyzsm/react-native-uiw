import { Component } from 'react';
import { ButtonProps } from '../Button';
import { FlexProps } from '../Flex';
export interface ButtonGroupProps extends ButtonProps, FlexProps {
    /**
     * 按钮间隔间距
     */
    gutter?: number;
    /**
     * 换行展示
     */
    inline?: boolean;
}
export default class ButtonGroup extends Component<ButtonGroupProps> {
    static defaultProps: ButtonGroupProps;
    render(): JSX.Element;
}
