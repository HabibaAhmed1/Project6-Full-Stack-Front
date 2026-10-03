import React from "react";

function ProjectCard(props) {

    return (
        <div className="project-card">

            <div className="project-image">

                <span>
                    &lt;/&gt;
                </span>

            </div>


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