import { Flex, Layout } from "antd";
import React from "react";
import LukaFooter from "../commons/footer";
import { LukaHeaderStyle } from "../css/commoncss";
import { useParams } from "react-router-dom";
import LukaBreadcrumb from "../commons/Breadcrumb";
const { Content, Header } = Layout;

function SingleTask() {
    const { bagDisplayName, taskDisplayName } = useParams()
    const bagLink = `/bags/${bagDisplayName}`
    const tasksLink = bagLink + `/tasks`
    return (
        <Flex gap="middle" vertical>
            <Header style={LukaHeaderStyle}>Hello Luka</Header>
            <LukaBreadcrumb items={[
                <a href="/">Home</a>,
                <a href="/bags">Bags</a>,
                <a href={bagLink}>{bagDisplayName}</a>,
                <a href={tasksLink}>Tasks</a>,
                <div>{taskDisplayName}</div>,
            ]
            }></LukaBreadcrumb >
            <Content style={{ padding: '0 48px' }}>
                <div>
                    Single Task
                </div>
            </Content>
            <LukaFooter />
        </Flex >
    )
};

export default SingleTask;