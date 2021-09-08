import { Component } from 'react';
import { ButtonGroupProps } from '../ButtonGroup';
export interface SegmentedControlProps<T> extends ButtonGroupProps {
    value?: string[] | T[];
    selectedIndex?: number;
    renderItem?: (label: string | T, selectedIndex: number, props: ButtonGroupProps) => JSX.Element;
    onValueChange?: (label: string | T, selectedIndex: number) => void;
}
export interface SegmentedControlState {
    selectedIndex: number;
}
export default class SegmentedControl<T> extends Component<SegmentedControlProps<T>, SegmentedControlState> {
    constructor(props: SegmentedControlProps<T>);
    static defaultProps: SegmentedControlProps<{}>;
    handlePress: (label: string | T, selectedIndex: number) => void;
    render(): JSX.Element;
}
