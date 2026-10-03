import React from "react";

import ProjectCard from "./ProjectCard";

import {
    useSelector,
    useDispatch
} from "react-redux";

import {
    setFilter
} from "../redux/actions/projectActions";


function Projects() {

    const filter = useSelector(
        (state) => state.projects.filter
    );

    const dispatch = useDispatch();


    const projects = [

        {
            id: 1,

            title: "Space Explorer",

            category: "Tailwind",

            description:
                "A modern space exploration website."
        },

        {
            id: 2,

            title: "Travel Website",

            category: "Tailwind",

            description:
                "A beautiful travel planning website."
        },

        {
            id: 3,

            title: "Health Food",

            category: "CSS",

            description:
                "A healthy eating application."
        }

    ];


    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter(
                (project) =>
                    project.category === filter
            );


    return (
        <section
            className="projects-section"
            id="projects"
        >

            <div className="section-heading">

                <span className="section-label">
                    MY WORK
                </span>

                <h2>
                    Featured <span>Projects</span>
                </h2>

                <p>
                    Some of the projects I've built
                    using modern web technologies.
                </p>

            </div>


            {/* Filter Buttons */}

            <div className="filter-buttons">

                <button
                    className={
                        filter === "All"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        dispatch(
                            setFilter("All")
                        )
                    }
                >
                    All
                </button>


                <button
                    className={
                        filter === "Tailwind"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        dispatch(
                            setFilter("Tailwind")
                        )
                    }
                >
                    Tailwind
                </button>


                <button
                    className={
                        filter === "CSS"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        dispatch(
                            setFilter("CSS")
                        )
                    }
                >
                    CSS
                </button>

            </div>


            {/* Project Cards */}

            <div className="projects-grid">

                {filteredProjects.map(
                    (project) => (

                        <ProjectCard
                            key={project.id}

                            title={project.title}

                            category={project.category}

                            description={
                                project.description
                            }
                        />

                    )
                )}

            </div>

        </section>
    );
}

export default Projects;