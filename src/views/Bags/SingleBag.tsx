import { Flex, Layout, Card, Space } from "antd";
import React from "react";
import LukaFooter from "../commons/footer";
import { LukaHeaderStyle } from "../css/commoncss";
import { useParams } from "react-router-dom";
import LukaBreadcrumb from "../commons/Breadcrumb";
import NotFound from "../commons/notfound";
const { Content, Header } = Layout;


function CheckIfBagExists(value: string): boolean {
    if (value.localeCompare("existbag") === 0) {
        return true
    }
    return false
}

function BagInfo(bagInfo: SingleBagViewProp.BagInfoProps) {
    return (
        <Space direction="vertical" size={16}>
            <Card title={bagInfo.Name} style={{ width: 300 }}>
                <p>Create Time: {bagInfo.CreateTime.toString()}</p>
            </Card>
        </Space>
    )
}

function SingleBag() {
    const { bagDisplayName } = useParams()

    if (!CheckIfBagExists(bagDisplayName!)) {
        return (
            <NotFound></NotFound>
        )
    }
    return (
        <Flex gap="middle" vertical>
            <Header style={LukaHeaderStyle}>Hello Luka</Header>
            <LukaBreadcrumb items={[
                <a href="/">Home</a>,
                <a href="/bags">Bags</a>,
                <div>{bagDisplayName}</div>
            ]}></LukaBreadcrumb>
            <Content style={{ padding: '0 48px' }}>
                <BagInfo
                    Name={bagDisplayName!}
                    CreateTime={new Date(Date.now())} />
            </Content>
            <LukaFooter />
        </Flex>
    )
};

export default SingleBag;