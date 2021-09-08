import { Component } from 'react';
import { ViewProps, ImageProps } from 'react-native';
export interface AvatarProps extends ViewProps {
    imageProps?: ImageProps;
    src?: string | number;
    size?: number;
    rounded?: number;
    shape?: 'circle' | 'square';
}
export default class Avatar extends Component<AvatarProps> {
    static defaultProps: AvatarProps;
    render(): JSX.Element;
}
