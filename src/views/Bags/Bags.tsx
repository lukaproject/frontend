import { Flex, Layout, Menu, MenuProps, Table, TableProps, theme } from "antd";
import React, { useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import LukaFooter from "../commons/footer";
import { JumpTo } from "../commons/jumpto";
import { LukaHeaderStyle } from "../css/commoncss";
import Search, { SearchProps } from "antd/es/input/Search";
import LukaBreadcrumb from "../commons/Breadcrumb";
const { Content, Header, Sider } = Layout;

function CallListBagsAPI(): BagsViewsProp.BagType[] {
    return [
        {
            key: "1",
            bagName: "test-bagname-1",
            bagDisplayName: "test-bag-display-name-1",
        },
        {
            key: "2",
            bagName: "test-bagname-2",
            bagDisplayName: "test-bag-display-name-2",
        }
    ]
}

const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    value = value.trim()
    JumpTo('/bags/' + value)
}

function ListBags(props: BagsViewsProp.HiddenProps) {

    const columns: TableProps<BagsViewsProp.BagType>['columns'] = [
        {
            title: "Bag Name",
            dataIndex: "bagName",
            key: "bagName",
            render: (_, { bagName }) => {
                return (
                    <a href={"/bags/" + bagName}>{bagName}</a>
                )
            }
        },
        {
            title: "Bag Display Name",
            dataIndex: "bagDisplayName",
            key: "bagDisplayName",
        }
    ]
    const data = CallListBagsAPI();
    return (
        <div hidden={props.hidden}>
            List Bags
            <Table<BagsViewsProp.BagType> columns={columns} dataSource={data}></Table>
        </div>
    );
}

function FindBag(props: BagsViewsProp.HiddenProps) {
    return (
        <div hidden={props.hidden}>
            <Search
                placeholder="bag's display name"
                enterButton="go to single bag page"
                onSearch={onSearch}
            />
        </div>
    )
}

function Bags() {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const KeyFindBag = "Find Bag";
    const KeyListBags = "List Bags";

    const [hiddenFindBag, setHiddenFindBag] = useState(false);
    const [hiddenListBags, setHiddenListBags] = useState(true);
    const allSubPages = [setHiddenFindBag, setHiddenListBags]

    const EnabledBlock = (f: (value: React.SetStateAction<boolean>) => void) => {
        allSubPages.forEach((func) => {
            func(true)
        })
        f(false);
    };

    const sliderItems: MenuProps['items'] = [
        {
            label: "Find Bag",
            key: KeyFindBag,
            icon: <UserOutlined />,
            onClick: () => EnabledBlock(setHiddenFindBag)
        },
        {
            label: "List Bags",
            key: KeyListBags,
            icon: <UserOutlined />,
            onClick: () => EnabledBlock(setHiddenListBags)
        }
    ];

    return (
        <Flex gap="middle" vertical>
            <Header style={LukaHeaderStyle}>
                Hello Luka
            </Header>
            <LukaBreadcrumb items={[
                <a href="/">Home</a>,
                <div>Bags</div>
            ]} />
            <Layout style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
                <Sider style={{ background: colorBgContainer }} width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[KeyFindBag]}
                        style={{ height: '100%' }}
                        items={sliderItems}
                    />
                </Sider>
                <Content style={{ padding: '0 48px' }}>
                    <FindBag hidden={hiddenFindBag} />
                    <ListBags hidden={hiddenListBags} />
                </Content>
            </Layout>
            <LukaFooter />
        </Flex >
    )
};

export default Bags;