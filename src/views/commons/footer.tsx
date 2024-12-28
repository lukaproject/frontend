import { Layout } from "antd";
import React from "react";
const { Footer } = Layout;

export const LukaFooterContent = "Powered by Luka Project!";

const LukaFooter: React.FC = () => {
    return (
        <Footer>
            {LukaFooterContent}
        </Footer>
    )
}

export default LukaFooter;