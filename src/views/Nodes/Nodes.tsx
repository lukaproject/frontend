import { Button, Flex, Layout, Popover } from "antd";
import LukaFooter from "../commons/footer";
import { LukaHeaderStyle } from "../css/commoncss";
import LukaBreadcrumb from "../commons/Breadcrumb";
const { Header, Content } = Layout;

interface NodeContentProps {
    Id: string;
    Name?: string;
}


function NodeContent(nodeContent: NodeContentProps) {
    return (
        <div>
            {nodeContent.Id}
        </div>
    )
}

function Node(nodeContent: NodeContentProps) {
    return (
        <Popover content={NodeContent(nodeContent)} title={nodeContent.Id}>
            <Button type="primary">{nodeContent.Id}</Button>
        </Popover>
    )
}

function Nodes() {
    return (
        <Flex gap="middle" vertical>
            <Header style={LukaHeaderStyle}>Hello Luka</Header>
            <LukaBreadcrumb items={[
                <a href="/">Home</a>,
                <div>Nodes</div>
            ]} />
            <Layout>
                <Content>
                    <Node Id="11"></Node>
                    <Node Id="12"></Node>
                    <Node Id="13"></Node>
                    <Node Id="14"></Node>
                    <Node Id="15"></Node>
                </Content>
            </Layout>
            <LukaFooter></LukaFooter>
        </Flex>
    )
}

export default Nodes;