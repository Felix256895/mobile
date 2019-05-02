import React, { Component } from "react";
import QRCode from 'qrcode-react';
import NavHeader from '@/components/navHeader/navHeader';
import styles from './qrcode.less';

class qrcode extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <main>
                 <NavHeader title='二维码' record />
                <section className={styles.qrcode_box}>
                    <div>
                        <QRCode 
                        value='https://github.com/clear-source/mobile/tree/master/mobile_02'
                        size={300}
                        fgColor= '#000000'
                        bgColor='#ffffff'
                        logo={require('../../assets/images/logo.png')}
                        logoWidth={50}
                        logoHeight={50}
                        />
                    </div>
                </section>
            </main>
        );
    }
}

export default qrcode;