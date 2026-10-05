import React from "react";

function ProjectCard(props) {

    return (
        <div className="project-card">

            {/* Laptop Mockup */}
            <div className="project-image">

                <div className="laptop">
                    <div className="laptop-screen">
                        <img
                            src={props.image}
                            alt={props.title}
                        />
                    </div>

                    <div className="laptop-base"></div>
                </div>

            </div>


            {/* Project Content */}
            <div className="project-content">

                <span className="project-category">
                    {props.category}
                </span>

                <h3>
                    {props.title}
                </h3>

                <p>
                    {props.description}
                </p>


                {/* Buttons */}
                <div className="project-buttons">

                    <button>
                        View Project
                    </button>

                    <button>
                        GitHub
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProjectCard;

