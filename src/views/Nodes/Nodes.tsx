import { Button, Flex, Layout, Popover } from "antd";
import LukaFooter from "../commons/footer";
import { LukaHeaderStyle } from "../css/commoncss";
import LukaBreadcrumb from "../commons/Breadcrumb";
const { Header, Content } = Layout;

interface NodeContentProps {
    NodeId: string;
}


function NodeContent(props: NodeContentProps) {
    return (
        <div>
            {props.NodeId}
        </div>
    )
}

function Node(props: NodeContentProps) {
    return (
        <Popover content={NodeContent(props)} title={props.NodeId}>
            <Button type="primary">Node1</Button>
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
                    <Node NodeId="11"></Node>
                </Content>
            </Layout>
            <LukaFooter></LukaFooter>
        </Flex>
    )
}

export default Nodes;