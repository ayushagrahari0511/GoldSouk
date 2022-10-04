import $ from 'jquery'
import { useEffect, useRef } from 'react'

const Ar = () => {
    const el = useRef()
    useEffect(() => {
        const script = document.createElement("script");
        const script1 = document.createElement("script")
        const script2 = document.createElement("script")

        script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        script1.src = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
        script2.src = "https://cdn.mirrar.in/v4.0.5/js/init.min.js"

        script.async = true
        script1.async = true
        script2.async = true

        script.integrity = "sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        script1.integrity = "sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA=="

        script.crossOrigin = "anonymous"
        script1.crossOrigin = "anonymous"

        script.referrerPolicy = "no-referrer"
        script1.referrerPolicy = "no-referrer"

        document.body.appendChild(script)
        document.body.appendChild(script1)
        document.body.appendChild(script2)
        $("p").hide()
        var options = {
            // "key": "API_KEY_HERE",
            "key": "3qOOr68TIBUZfRwRjBRjPl7skmH7JIVSzWofU3uR",
        }

        "use strict";

        $(document).ready(async function () {

            init(options);
            start();
        });


        // const action = "add"
        // const tryonPayload = {
        //     _id: 1334,
        //     product_category: "EAR",
        //     product_name: "earring",
        //     product_id: 568,
        //     thumbnail: "./two-tone.jpg"
        // }

        // filterAddRemove()
        // startCamera();
        // filterAddRemove(action, tryonPayload);

        // document.addEventListener('init', (data) => {
        //     filterAddRemove("add", tryon_payload);
        // });

        return () => {
            document.body.removeChild(script)
            document.body.removeChild(script1)
            document.body.removeChild(script2)
        }
    }, [])
    return (
        <div ref={el}>
        </div>
    )
}

export default Ar