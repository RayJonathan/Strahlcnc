"use client";

import { useEffect } from 'react';
import Grid from "./Grid";

function ProductPage() {
    useEffect(() => {
        const url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?65366';
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        const options = {
            "enabled": true,
            "chatButtonSetting": {
                "backgroundColor": "#00e785",
                "ctaText": "Chat with us",
                "borderRadius": "25",
                "marginLeft": "0",
                "marginRight": "20",
                "marginBottom": "20",
                "ctaIconWATI": false,
                "position": "right"
            },
            "brandSetting": {
                "brandName": "Wati",
                "brandSubTitle": "undefined",
                "brandImg": "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
                "welcomeText": "Hi there!\nHow can I help you?",
                "messageText": "Hello, %0A I have a question about {{page_link}}",
                "backgroundColor": "#00e785",
                "ctaText": "Chat with us",
                "borderRadius": "25",
                "autoShow": false,
                "phoneNumber": "+6285524970078"
            }
        };
        s.onload = function () {
            if (window.CreateWhatsappChatWidget) {
                window.CreateWhatsappChatWidget(options);
            }
        };
        document.body.appendChild(s);

        return () => {
            document.body.removeChild(s);
        };
    }, []);

    return (
        <>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-112 xl:h-128 bg-cover" style={{ backgroundImage: "url('/kanopi.jpeg')", backgroundPosition: "center 15%" }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">Kanopi</h1>
                </div>
            </div >


            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-8 lg:p-12">
                <Grid />
            </div>
        </>
    );
}

export default ProductPage;
