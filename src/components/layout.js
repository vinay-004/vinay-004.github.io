import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'
import layoutStyle from './layout.module.scss'


const Layout = (props) => {
    return (
        <div className={layoutStyle.container}>
            <div className={layoutStyle.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout