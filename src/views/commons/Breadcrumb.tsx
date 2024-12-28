import { Breadcrumb, Layout } from "antd";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import React from "react";
const { Content } = Layout;

interface LukaBreadcrumbProps {
    items: React.ReactNode[];
}

const LukaBreadcrumb: React.FC<LukaBreadcrumbProps> = ({ items }) => {
    return (
        <Content style={{ padding: '0 48px' }}>
            <Breadcrumb items={
                items.map<BreadcrumbItemType>((item, index, arr) => {
                    return {
                        title: item,
                    };
                })
            }>
            </Breadcrumb>
        </Content>
    );
}

export default LukaBreadcrumb;