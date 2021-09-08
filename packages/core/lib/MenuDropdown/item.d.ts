import React from 'react';
export interface ItemProps {
    children?: React.ReactNode;
}
export default class Item extends React.Component<ItemProps> {
    render(): JSX.Element;
}
