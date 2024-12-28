import { Flex, Layout } from "antd";
import React from "react";
import LukaFooter from "../commons/footer";
import { LukaHeaderStyle } from "../css/commoncss";
import { useParams } from "react-router-dom";
import LukaBreadcrumb from "../commons/Breadcrumb";
const { Content, Header } = Layout;

function SingleBag() {
    const { bagDisplayName } = useParams()
    return (
        <Flex gap="middle" vertical>
            <Header style={LukaHeaderStyle}>Hello Luka</Header>
            <LukaBreadcrumb items={[
                <a href="/">Home</a>,
                <a href="/bags">Bags</a>,
                <div>{bagDisplayName}</div>
            ]}></LukaBreadcrumb>
            <Content style={{ padding: '0 48px' }}>
                <div>
                    Single Bag
                </div>
            </Content>
            <LukaFooter />
        </Flex>
    )
};

export default SingleBag;