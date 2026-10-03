import heroImage from "./images/Hero.jfif";

import React, { useEffect, useState } from "react";

function Hero() {

    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    const words = [
        "Front-End Developer",
        "React Developer",
        "UI/UX Enthusiast"
    ];

    useEffect(() => {

        const currentWord = words[index];

        const speed = isDeleting ? 70 : 120;

        const timer = setTimeout(() => {

            if (!isDeleting) {

                setText(
                    currentWord.substring(0, text.length + 1)
                );

                if (text === currentWord) {
                    setIsDeleting(true);
                }

            } else {

                setText(
                    currentWord.substring(0, text.length - 1)
                );

                if (text === "") {
                    setIsDeleting(false);

                    setIndex(
                        (index + 1) % words.length
                    );
                }
            }

        }, text === currentWord && !isDeleting ? 1500 : speed);

        return () => clearTimeout(timer);

    }, [text, isDeleting, index]);


    return(
       <section className="hero" id="home">

    <div className="hero-content">


        <h1>
           Hi! I'm <span className="name">Habiba</span> Alhanbly
        </h1>

        <h2 className="typing">
            {text}
            <span className="cursor">|</span>
        </h2>

        <p>
            I build responsive and user-friendly websites
            using modern web technologies.
        </p>

        <button className="hero-btn">
            Get in Touch
        </button>

    </div>

    <img
        src={heroImage}
        alt="Habiba Alhanbly"
        className="hero-image"
    />

</section>

    )
}

export default Hero;