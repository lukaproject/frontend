import { Card, Flex, Layout, Space } from "antd";
import React from "react";
import LukaFooter from "../commons/footer";
import { LukaHeaderStyle } from "../css/commoncss";
import { useParams } from "react-router-dom";
import LukaBreadcrumb from "../commons/Breadcrumb";
const { Content, Header } = Layout;

function TaskInfo(taskInfo: SingleTaskViewProp.TaskInfoProps) {
    return (
        <Space direction="vertical" size={16}>
            <Card title="base info" style={{ width: 300 }}>
                <p>Task Display Name: {taskInfo.Name}</p>
                <p>Create Time: {taskInfo.CreateTime!.toString()}</p>
                <p>Finished Time: {taskInfo.FinishedTime!.toString()}</p>
                <p>ExitCode: {taskInfo.ExitCode!.toString()}</p>
            </Card>
            <Card title="script" style={{ width: 300 }}>
                {taskInfo.Script}
            </Card>
        </Space>
    )
}

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
                <TaskInfo
                    Name={taskDisplayName}
                    CreateTime={new Date(2024, 10, 1)}
                    FinishedTime={new Date(Date.now())}
                    ExitCode={10}
                    Script="echo 1"
                />
            </Content>
            <LukaFooter />
        </Flex >
    )
};

export default SingleTask;