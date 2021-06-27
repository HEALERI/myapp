import React from 'react';
import HeaderNav from '../../nav/HeaderNav';

export default (props) => {
    const {children} = props;
    return (
        <div>
            <HeaderNav />
            {children}
        </div>
    );
}