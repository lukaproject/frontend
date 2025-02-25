import { Button, Layout } from "antd";
import React from "react";
const { Content } = Layout;

const NotFound: React.FC = () => {
    return (
        <Content>
            Not Found
            <Button onClick={() => {
                window.history.back()
            }}>Back to last page</Button>
        </Content>
    )
}

export default NotFound;