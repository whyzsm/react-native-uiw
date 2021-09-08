import React from 'react';
interface TableProps {
    data: Array<Object>;
    columns: Array<columnsState>;
    rowKey: any;
}
interface columnsState {
    dataIndex: string;
    title: string;
    style?: Object;
    render?: (record: any) => React.ReactNode;
    ellipsis?: boolean;
}
declare const Table: ({ data, columns, rowKey }: TableProps) => JSX.Element;
export default Table;
