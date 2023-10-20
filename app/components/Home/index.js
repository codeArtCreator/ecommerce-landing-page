'use client'

import React from 'react'
import { useSession, signOut } from "next-auth/react";
import '../../css/style.css';
import '../../css/style-prefix.css'
import Category from './Category';
import Banner from './Banner';
import Header from './Header';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Footer from './Footer';
import Product from './Product';
import NotificationToast from './NotificationToast';
import Newsletter from './Newsletter';
import Loading from '../Loading/Loading';


const HomePage = () => {
    const { data, status } = useSession();

    if (status === 'unauthenticated') {
        setTimeout(function () {
            window.location.href = '/';
        }, 2000);
        return "You're not authorized";
    }
    if (status === 'loading') {
        return <Loading />
    }

    return (
        <div>
            <div className="overlay" data-overlay></div>

            {/* NEWSLETTER */}
            {/* <Newsletter /> */}

            {/* NOTIFICATION TOAST */}

            {/* <NotificationToast /> */}

            {/* HEADER */}
            <Header />

            {/* MAIN */}
            <main>
                {/* BANNER */}
                <Banner />

                {/* CATEGORY */}
                <Category />

                {/* PRODUCT */}
                <Product />

                {/* TESTIMONIALS, CTA & SERVICE */}
                <Testimonials />

                {/* BLOG */}
                <Blog />

            </main>

            {/* FOOTER */}
            <Footer />


        </div>
    )
}

export default HomePage