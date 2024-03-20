import React, { ReactNode } from "react";
import Navbar from '../../../frontend/src/components/Navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => (
    <div>
        <Navbar/>
        {props.children}
    </div>
);

export default Layout;
