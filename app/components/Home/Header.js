import Image from 'next/image'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const Header = () => {
    const [isCardHidden, setCardHidden] = useState(true);
    const { data, status } = useSession();

    if (status === 'unauthenticated') {
        setTimeout(function () {
            window.location.href = '/';
        }, 2000);
        return "You're not authorized";
    }
    if (status === 'loading') {
        return "Loading...";
    }

    const toggleCard = () => {
        setCardHidden(!isCardHidden);
    };
    return (
        <header>

            <div className="header-top">

                <div className="container">

                    <ul className="header-social-container">

                        <li>
                            <a href="#" className="social-link">
                                <Icon icon="ic:baseline-facebook" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <Icon icon="carbon:logo-twitter" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <Icon icon="carbon:logo-instagram" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <Icon icon="carbon:logo-linkedin" />
                            </a>
                        </li>

                    </ul>

                    <div className="header-alert-news">
                        <p>
                            <b>Free Shipping</b>
                            This Week Order Over - $55
                        </p>
                    </div>

                    <div className="header-top-actions">

                        <select name="currency">

                            <option value="usd">USD</option>
                            <option value="eur">INR</option>

                        </select>

                        <select name="language">

                            <option value="en-US">English</option>
                            <option value="es-ES">Hindi</option>
                        </select>

                    </div>

                </div>

            </div>

            <div className="header-main">

                <div className="container">

                    <a href="#" className="header-logo">
                        <Icon icon="carbon:logo-react" color="#f66" width="36" height="36" />
                    </a>

                    <div className="header-search-container">

                        <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />

                        <button className="search-btn">
                            <ion-icon name="search-outline"></ion-icon>
                        </button>

                    </div>

                    <div className="header-user-actions">

                        <button className="action-btn">
                            <ion-icon name="person-outline"></ion-icon>
                        </button>

                        <button className="action-btn">
                            <Icon icon="typcn:heart-outline" />
                            <span className="count">0</span>
                        </button>

                        <button className="action-btn">
                            <Icon icon="ion:bag-handle-outline" />
                            <span className="count">0</span>
                        </button>
                        <div className="z-50">
                            <ul className="flex items-center">
                                <Link href="#" className="display-picture ml-auto" onClick={toggleCard}>
                                    <img src={data?.user?.image || " "} alt="" className="h-[2.88rem] w-[2.88rem] object-cover rounded-full border-2 border-white hover:border-orange-500" />
                                </Link>
                            </ul>
                            <div className={`card transition duration-500 ease-in-out ${isCardHidden ? 'hidden' : ''}`}>
                                <ul className="flex flex-col items-center bg-orange-400 absolute top-30 right-0 rounded-xl py-2 px-5  list-none ">
                                    <li className="py-2 text-center font-semibold">
                                        <span className="text-white text-l no-underline p-2 tracking-wider">{data?.user.name.toUpperCase()}</span>
                                    </li>
                                    <li className="py-2 hover:bg-orange-500 transition duration-300 w-20 rounded-xl text-center">
                                        <Link href="#" className="text-white text-sm no-underline p-2">Profile</Link>
                                    </li>
                                    <li className="pb-2 hover:bg-orange-500 transition duration-300 w-20 rounded-xl text-center">
                                        <Link href="#" className="text-white text-sm p-2 no-underline">Account</Link>
                                    </li>
                                    <li className="pb-2 hover:bg-orange-500 transition duration-300 w-20 rounded-xl text-center">
                                        <Link href="#" className="text-white text-sm p-2 no-underline">Settings</Link>
                                    </li>
                                    <li className="pb-2 hover:bg-orange-500 transition duration-300 w-20 rounded-xl text-center">
                                        <Link
                                            href="#"
                                            className="text-white text-sm p-2 no-underline"
                                            onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
                                        >
                                            Log Out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <nav className="desktop-navigation-menu">

                <div className="container">

                    <ul className="desktop-menu-category-list">

                        <li className="menu-category">
                            <a href="#" className="menu-title">Home</a>
                        </li>

                        <li className="menu-category">
                            <a href="#" className="menu-title">Categories</a>

                            <div className="dropdown-panel">

                                <ul className="dropdown-panel-list">

                                    <li className="menu-title">
                                        <a href="#">Electronics</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Desktop</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Laptop</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Camera</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Tablet</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Headphone</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">
                                            <img src="https://res.cloudinary.com/dq0ns677p/image/upload/v1697803690/ecommerce/images/electronics-banner-1_bezp3x.jpg" alt="headphone collection" width="250"
                                                height="119" />
                                        </a>
                                    </li>

                                </ul>

                                <ul className="dropdown-panel-list">

                                    <li className="menu-title">
                                        <a href="#">Men's</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Formal</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Casual</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Sports</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Jacket</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Sunglasses</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">
                                            <img src="https://res.cloudinary.com/dq0ns677p/image/upload/v1697803690/ecommerce/images/mens-banner_adehz7.jpg" alt="men's fashion" width="250" height="119" />
                                        </a>
                                    </li>

                                </ul>

                                <ul className="dropdown-panel-list">

                                    <li className="menu-title">
                                        <a href="#">Women's</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Formal</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Casual</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Perfume</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Cosmetics</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Bags</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">
                                            <img src="https://res.cloudinary.com/dq0ns677p/image/upload/v1697803698/ecommerce/images/womens-banner_uvro8b.jpg" alt="women's fashion" width="250" height="119" />
                                        </a>
                                    </li>

                                </ul>

                                <ul className="dropdown-panel-list">

                                    <li className="menu-title">
                                        <a href="#">Electronics</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Smart Watch</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Smart TV</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Keyboard</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Mouse</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">Microphone</a>
                                    </li>

                                    <li className="panel-list-item">
                                        <a href="#">
                                            <img src="https://res.cloudinary.com/dq0ns677p/image/upload/v1697803690/ecommerce/images/electronics-banner-2_sbgrvt.jpg" alt="mouse collection" width="250" height="119" />
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </li>

                        <li className="menu-category">
                            <a href="#" className="menu-title">Men's</a>

                            <ul className="dropdown-list">

                                <li className="dropdown-item">
                                    <a href="#">Shirt</a>
                                </li>

                                <li className="dropdown-item">
                                    <a href="#">Shorts & Jeans</a>
                                </li>

                                <li className="dropdown-item">
                                    <a href="#">Safety Shoes</a>
                                </li>

                                <li className="dropdown-item">
                                    <a href="#">Wallet</a>
                                </li>

                            </ul>
                        </li>

                        <li className="menu-category">
                            <a href="#" className="menu-title">Women's</a>

                            <ul className="dropdown-list">

                                <li className="dropdown-item">
                                    <a href="#">Dress & Frock</a>
                                </li>

                                <li className="dropdown-item">
                                    <a href="#">Earrings</a>
                                </li>

                                <li className="dropdown-item">
                                    <a href="#">Necklace</a>
                                </li>

                                <li className="dropdown-item">
                                    <a href="#">Makeup Kit</a>
                                </li>

                            </ul>
                        </li>

                        <li className="menu-category">
                            <a href="#" className="menu-title">Jewelry</a>

                            <ul className="dropdown-list">

                                <li className="dropdown-item">
                                    <a href="#">Earrings</a>
                                </li>

                                <li className="dropdown-item">
                                    <a href="#">Couple Rings</a>
                                </li>

                                <li className="dropdown-item">
                                    <a href="#">Necklace</a>
                                </li>

                                <li className="dropdown-item">
                                    <a href="#">Bracelets</a>
                                </li>

                            </ul>
                        </li>

                        <li className="menu-category">
                            <a href="#" className="menu-title">Perfume</a>

                            <ul className="dropdown-list">

                                <li className="dropdown-item">
                                    <a href="#">Clothes Perfume</a>
                                </li>

                                <li className="dropdown-item">
                                    <a href="#">Deodorant</a>
                                </li>

                                <li className="dropdown-item">
                                    <a href="#">Flower Fragrance</a>
                                </li>

                                <li className="dropdown-item">
                                    <a href="#">Air Freshener</a>
                                </li>

                            </ul>
                        </li>

                        <li className="menu-category">
                            <a href="#" className="menu-title">Blog</a>
                        </li>

                        <li className="menu-category">
                            <a href="#" className="menu-title">Hot Offers</a>
                        </li>

                    </ul>

                </div>

            </nav>

            <div className="mobile-bottom-navigation">

                <button className="action-btn" data-mobile-menu-open-btn>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>

                <button className="action-btn">
                    <Icon icon="ion:bag-handle-outline" />

                    <span className="count">0</span>
                </button>

                <button className="action-btn">
                    <ion-icon name="home-outline"></ion-icon>
                </button>

                <button className="action-btn">
                    <Icon icon="typcn:heart-outline" />
                    <span className="count">0</span>
                </button>

                <button className="action-btn" data-mobile-menu-open-btn>
                    <ion-icon name="grid-outline"></ion-icon>
                </button>

            </div>

            <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

                <div className="menu-top">
                    <h2 className="menu-title">Menu</h2>

                    <button className="menu-close-btn" data-mobile-menu-close-btn>
                        <Icon icon="mdi:remove-outline" />
                    </button>
                </div>

                <ul className="mobile-menu-category-list">

                    <li className="menu-category">
                        <a href="#" className="menu-title">Home</a>
                    </li>

                    <li className="menu-category">

                        <button className="accordion-menu" data-accordion-btn>
                            <p className="menu-title">Men's</p>

                            <div>
                                <Icon icon="material-symbols:box-add-outline" className="add-icon" />
                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                            </div>
                        </button>

                        <ul className="submenu-category-list" data-accordion>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Shirt</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Shorts & Jeans</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Safety Shoes</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Wallet</a>
                            </li>

                        </ul>

                    </li>

                    <li className="menu-category">

                        <button className="accordion-menu" data-accordion-btn>
                            <p className="menu-title">Women's</p>

                            <div>
                                <Icon icon="material-symbols:box-add-outline" className="add-icon" />
                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                            </div>
                        </button>

                        <ul className="submenu-category-list" data-accordion>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Dress & Frock</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Earrings</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Necklace</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Makeup Kit</a>
                            </li>

                        </ul>

                    </li>

                    <li className="menu-category">

                        <button className="accordion-menu" data-accordion-btn>
                            <p className="menu-title">Jewelry</p>

                            <div>
                                <Icon icon="material-symbols:box-add-outline" className="add-icon" />
                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                            </div>
                        </button>

                        <ul className="submenu-category-list" data-accordion>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Earrings</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Couple Rings</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Necklace</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Bracelets</a>
                            </li>

                        </ul>

                    </li>

                    <li className="menu-category">

                        <button className="accordion-menu" data-accordion-btn>
                            <p className="menu-title">Perfume</p>

                            <div>
                                <Icon icon="material-symbols:box-add-outline" className="add-icon" />
                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                            </div>
                        </button>

                        <ul className="submenu-category-list" data-accordion>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Clothes Perfume</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Deodorant</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Flower Fragrance</a>
                            </li>

                            <li className="submenu-category">
                                <a href="#" className="submenu-title">Air Freshener</a>
                            </li>

                        </ul>

                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">Blog</a>
                    </li>

                    <li className="menu-category">
                        <a href="#" className="menu-title">Hot Offers</a>
                    </li>

                </ul>

                <div className="menu-bottom">

                    <ul className="menu-category-list">

                        <li className="menu-category">

                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Language</p>

                                <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                            </button>

                            <ul className="submenu-category-list" data-accordion>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">English</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">Fren&ccedil;h</a>
                                </li>

                            </ul>

                        </li>

                        <li className="menu-category">
                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Currency</p>
                                <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                            </button>

                            <ul className="submenu-category-list" data-accordion>
                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">USD &dollar;</a>
                                </li>

                                <li className="submenu-category">
                                    <a href="#" className="submenu-title">EUR &euro;</a>
                                </li>
                            </ul>
                        </li>

                    </ul>

                    <ul className="menu-social-container">

                        <li>
                            <a href="#" className="social-link">
                                <Icon icon="ic:baseline-facebook" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <Icon icon="carbon:logo-twitter" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <Icon icon="carbon:logo-instagram" />
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                <Icon icon="carbon:logo-linkedin" />
                            </a>
                        </li>

                    </ul>

                </div>

            </nav>

        </header>
    )
}

export default Header