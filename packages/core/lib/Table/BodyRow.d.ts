import React from 'react';
interface BodyRowProps {
    columns: Array<columnsState>;
    record: Object | any;
    style?: Object;
}
interface columnsState {
    dataIndex: string;
    title: string;
    style?: Object;
    render?: (record: any) => React.ReactNode;
    ellipsis?: boolean;
}
export default function BodyRow({ columns, record, style }: BodyRowProps): JSX.Element;
export {};
