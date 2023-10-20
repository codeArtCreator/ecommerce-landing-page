import React from 'react'

const NotificationToast = () => {
    return (
        <div className="notification-toast" data-toast>

            <button className="toast-close-btn" data-toast-close>
                <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="toast-banner">
                <img src="https://res.cloudinary.com/dq0ns677p/image/upload/v1697803694/ecommerce/images/products/jewellery-1_lruooj.jpg" alt="Rose Gold Earrings" width="80" height="70" />
            </div>

            <div className="toast-detail">

                <p className="toast-message">
                    Someone in new just bought
                </p>

                <p className="toast-title">
                    Rose Gold Earrings
                </p>

                <p className="toast-meta">
                    <time datetime="PT2M">2 Minutes</time> ago
                </p>

            </div>

        </div>
    )
}

export default NotificationToast