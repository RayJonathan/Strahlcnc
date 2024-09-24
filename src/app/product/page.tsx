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
                "phoneNumber": "111111111111111"
            }
        };
        s.onload = function() {
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
            <div className="relative h-160 bg-cover bg-center" style={{ backgroundImage: "url('/bg-product.png')" }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative flex items-start justify-center h-full text-center text-white pt-12">
                    <h1 className="text-2xl sm:text-4xl md:text-4xl 2xl:text-5xl font-bold">Product Name</h1>
                </div>
            </div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <Grid />
            </div>
        </>
    );
}

export default ProductPage;
