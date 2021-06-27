import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import styles from './style.less';
import { TeamOutlined, UserOutlined, HomeOutlined, PieChartFilled } from '@ant-design/icons'

const { Sider } = Layout;

export default () => {

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
        setCollapsed(!collapsed);
    }

    return (
        <Sider theme='light' className={styles.siderNav} onCollapse={onCollapse} collapsible collapsed={collapsed}>
            <Menu
                theme='light'
                defaultSelectedKeys={['1']}
                mode="inline"
            >
                <Menu.Item key='1' icon={<HomeOutlined />}>
                    <a href='#'>服务商大盘</a>
                </Menu.Item>
                <Menu.Item key='2' icon={<TeamOutlined />}>
                    <a href='#'>知乎大盘</a>
                </Menu.Item>
                <Menu.Item key='3' icon={<UserOutlined />}>
                    <a href='#' >百度大盘</a>
                </Menu.Item>
                <Menu.Item key='4' icon={<PieChartFilled />}>
                    <a href='#' >谷歌大盘</a>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}