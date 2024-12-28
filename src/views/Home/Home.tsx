import { Button, Flex, Layout, List, theme } from "antd";
import React from "react";
import LukaFooter from "../commons/footer";
import { JumpTo } from "../commons/jumpto";
import { LukaHeaderStyle } from "../css/commoncss";
import LukaBreadcrumb from "../commons/Breadcrumb";
const { Content, Header } = Layout;

function Home() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Flex gap="middle" vertical>
            <Header style={LukaHeaderStyle}>Hello Luka</Header>
            <LukaBreadcrumb items={[
                'Home',
            ]}></LukaBreadcrumb>
            <Content style={{ padding: '0 48px' }}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <List
                        header={
                            <div>Sub Pages</div>
                        }
                        footer={<></>}
                        bordered
                        dataSource={[
                            (<Button onClick={() => JumpTo('/bags')} type="link">
                                to Bags
                            </Button>),
                            (<Button onClick={() => JumpTo('/nodes')} type="link">
                                to Nodes
                            </Button>)
                        ]}
                        renderItem={(item) => (
                            <List.Item>
                                {item}
                            </List.Item>
                        )}>
                    </List>
                </div>
            </Content>
            <LukaFooter />
        </Flex>
    )
}

export default Home; 