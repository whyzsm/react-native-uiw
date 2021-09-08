import React from 'react';
export declare type ExpandableSectionProps = {
    /**
     * 标题
     */
    sectionHeader?: JSX.Element;
    /**
     * 折叠内容
     */
    children?: React.ReactNode;
    /**
     * 是否展开
     */
    expanded?: boolean;
    /**
     * 展开后显示位置 标题上或标题下
     */
    top?: boolean;
    /**
     * 点击事件
     */
    onPress?: () => void;
};
declare function ExpandableSection(props: ExpandableSectionProps): JSX.Element;
export default ExpandableSection;
