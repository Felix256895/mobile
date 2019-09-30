import React, { Component } from 'react';
import Aside from '@/components/Aside';

class Main extends Component {
    render() {
        return (
            <main style={{paddingTop:'3.6rem'}}>
                <Aside />
            </main>
        );
    }
}

export default Main;