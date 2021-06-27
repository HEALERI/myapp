import React from 'react';
import SiderNav from '../../nav/SiderNav';
import styles from './style.less';

export default (props) => {
    const { children } = props;
    return (
        <div className={styles.siderNav}>
            <SiderNav />
            <div className={styles.siderContent}  >
                {children}
            </div>
        </div>
    );
}