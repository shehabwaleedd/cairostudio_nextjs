import React from 'react'

const backup = () => {
    // const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);
    // const manageMouseEnter = (e, index) => {
    //     gsap.to(e.target, {
    //         top: "-2vw",
    //         backgroundColor: Data[index].color,
    //         duration: 0.29,
    //         ease: "cubic-bezier(0.16, 1, 0.3, 1)"
    //     });
    //     setHoveredProjectIndex(index);
    // };

    // const manageMouseLeave = (e, index) => {
    //     gsap.to(e.target, {
    //         top: "0",
    //         backgroundColor: "var(--background-color)",
    //         duration: 0.29,
    //         ease: "cubic-bezier(0.16, 1, 0.3, 1)"
    //     });
    //     setHoveredProjectIndex(index);
    // };
    return (
        <div>
            {/* <div className="projectsPageCo__content">
                    {
                        Data.map((project, index) => {
                            const isHovered = index === hoveredProjectIndex;
                            return (
                                <Link to={`/projects/${project.title}`} key={index}>
                                    <div onMouseEnter={(e) => { manageMouseEnter(e, index) }} onMouseLeave={(e) => { manageMouseLeave(e, index) }} >
                                        <motion.h2 initial={{ opacity: 0, x: -10, skewX: 10, transition: { duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} whileInView={{ opacity: 1, x: 0, skewX: 0, transition: { duration: 0.4, type: "spring", staggerChildren: 2.5, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} viewport={{ once: true }}>{project.title}</motion.h2>
                                        <span className={isHovered ? 'opacity-transition' : ''}>
                                            {project.category[0]} - {project.category[1]}
                                        </span>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div> */}
        </div>
    )
}

export default backup

    // .projectsPage__container {
    //     display: flex;
    //     height: 100vh;
    //     align-items: flex-start;
    //     justify-content: flex-start;
    //     flex-direction: column;
    //     transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);



    //     .projectsPageCo__content {
    //         position: relative;
    //         width: 100%;
    //         transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

    //         div {
    //             display: flex;
    //             justify-content: space-between;
    //             border-top: 1px solid black;
    //             cursor: pointer;
    //             position: relative;
    //             margin-bottom: -2vw;
    //             transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    //             background-color: var(--background-color);
    //             z-index: 999;
    //             h2 {
    //                 border-top: 1px solid black;
    //                 margin: 0px;
    //                 font-size: 5vw;
    //                 padding-left: 10px;
    //                 text-transform: uppercase;
    //                 pointer-events: none;
    //                 transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    //                 font-family: 'Outfit-Bold';
    //                 color: var(--container-color);
    //                 padding-left: 2rem;
    //             }

    //             &:hover {
    //                 transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

    //                 h2 {
    //                     transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    //                     color: var(--background-color);
    //                 }

    //                 span {
    //                     transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    //                     color: var(--background-color);
    //                 }
    //             }

    //             span {
    //                 font-size: 0.9vw;
    //                 position: absolute;
    //                 right: 0;
    //                 top: 3rem;
    //                 display: inline-block;
    //                 color: var(--container-color);
    //                 text-transform: uppercase;
    //                 font-family: 'Outfit-Bold', sans-serif;
    //                 margin: 0px;
    //                 position: relative;
    //                 letter-spacing: 0.1rem;
    //                 z-index: 2;
    //                 padding-right: 2rem;
    //                 opacity: 1;
    //                 @media (max-width: 956px) {
    //                     font-size: 0.8vw;
    //                     opacity: 1;
    //                 }
    //             }

    //             .opacity-transition {
    //                 font-size: 0.9vw;
    //                 position: absolute;
    //                 right: 0;
    //                 top: 3rem;
    //                 display: inline-block;
    //                 color: var(--background-color);
    //                 text-transform: uppercase;
    //                 font-family: 'Outfit-Bold', sans-serif;
    //                 margin: 0px;
    //                 position: relative;
    //                 letter-spacing: 0.1rem;
    //                 z-index: 2;
    //                 padding-right: 2rem;
    //                 opacity: 1;
    //                 @media (max-width: 956px) {
    //                     font-size: 0.8vw;
    //                     opacity: 0;
    //                 }
    //             }
    //         }

    //     }
    // }