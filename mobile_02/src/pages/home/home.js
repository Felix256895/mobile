import React, { Component } from 'react';

import NavHeader from '@/components/navHeader/navHeader';

class home extends Component {
    render() {
        return (
            <div>
                <NavHeader title='首页' record />
            </div>
        );
    }
}

export default home;