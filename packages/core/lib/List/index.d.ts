import React, { Component } from 'react';
import { FlatListProps, StyleProp, ViewStyle } from 'react-native';
import Item, { ListItemProps } from './Item';
/**
 * @see https://facebook.github.io/react-native/docs/flatlist.html#props
 */
export interface ListRenderItemInfoCustom<ItemT> {
    item: ItemT;
    index: number;
    separators?: {
        highlight: () => void;
        unhighlight: () => void;
        updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
    };
}
export interface ListProps extends Omit<FlatListProps<{}>, 'renderItem'> {
    children?: React.ReactNode;
    renderItem?: (info: ListRenderItemInfoCustom<{}>) => React.ReactElement | null;
    /**
     * flat default: `true`
     * - flat = `true` => `FlatList`
     * - flat = `false` => `<View>` 上拉下拉刷新失效，是一个简单的 `List`
     */
    flat?: boolean;
    /**
     * 标题
     */
    title?: React.ReactNode;
    /**
     * 额外内容，展示右侧内容;
     */
    extra?: React.ReactNode;
    titleStyle?: StyleProp<ViewStyle>;
    paddingLeft?: ListItemProps['paddingLeft'];
    size?: ListItemProps['size'];
}
export interface ListState {
    data: ListProps['data'];
}
export default class List extends Component<ListProps, ListState> {
    static Item: typeof Item;
    static defaultProps: ListProps;
    constructor(props: ListProps);
    getData(nextProps?: ListProps): void;
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: ListProps): void;
    renderItemChild(props: ListRenderItemInfoCustom<{}>): React.ReactElement;
    render(): JSX.Element;
}
