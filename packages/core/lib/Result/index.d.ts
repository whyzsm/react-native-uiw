import React, { Component } from 'react';
import { ViewProps } from 'react-native';
export interface ResultProps extends ViewProps {
    /**
     * 插图元素 (可以为<img src="" />/<Icon type="" />等)
     */
    img?: React.ReactNode;
    /**
     * title 文案
     */
    title?: React.ReactNode;
    /**
     * message 文案
     */
    message?: React.ReactNode;
}
export default class Result extends Component<ResultProps> {
    static defaultProps: ResultProps;
    render(): JSX.Element;
}
