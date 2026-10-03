import React from "react";

function Skills() {

    const skills = [
        {
            name: "HTML",
            level: 90
        },
        {
            name: "CSS",
            level: 85
        },
        {
            name: "JavaScript",
            level: 80
        },
        {
            name: "React",
            level: 75
        },
        {
            name: "Tailwind CSS",
            level: 80
        },
        {
            name: "Git & GitHub",
            level: 75
        }
    ];

    return (
        <section className="skills-section" id="skills">

            <div className="section-heading">

                <span className="section-label">
                    MY SKILLS
                </span>

                <h2>
                    Technologies I <span>Love</span>
                </h2>

                <p>
                    Technologies and tools I use to build
                    modern and responsive websites.
                </p>

            </div>


            <div className="skills-grid">

                {skills.map((skill) => (

                    <div
                        className="skill-card"
                        key={skill.name}
                    >

                        <div className="skill-top">

                            <h3>
                                {skill.name}
                            </h3>

                            <span>
                                {skill.level}%
                            </span>

                        </div>

                        <div className="progress-bar">

                            <div
                                className="progress"
                                style={{
                                    width: `${skill.level}%`
                                }}
                            ></div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Skills;