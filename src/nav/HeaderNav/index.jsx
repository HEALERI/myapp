import React from 'react';
import styles from './style.less';
import logo from '../../logo.svg';
import { Menu } from 'antd';


export default () => {
    return (
        <div className={styles.headerNav}>
            <div>
                <img src={logo} alt="" className={styles.logo}></img>
                <span>
                    体验技术平台
                </span>
            </div>
            <div style={{marginLeft:'50px'}}>
                <Menu theme='dark' mode='horizontal'>
                    <Menu.Item key='1' style={{padding:'0 30px'}} >
                        <a href='/home'>首页</a>
                    </Menu.Item>
                    <Menu.Item key='2' style={{padding:'0 30px'}}>
                        <a href='/market'>大盘</a>
                    </Menu.Item>
                    <Menu.Item key='3' style={{padding:'0 30px'}}>
                        <a href='user'>用户</a>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
}