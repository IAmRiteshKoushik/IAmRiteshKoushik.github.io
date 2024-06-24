import React from "react";
import { Button, IconButton } from "@material-tailwind/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon,
  TimelineBody, Typography } from "@material-tailwind/react";

function App() {
    return (
        <div className="w-full">
            {/* NavBar */}
            <div className="flex justify-center mt-2 sticky top-2 bg-opacity-50 z-10">
                <div className="flex h-24 rounded-lg w-3/5 items-center justify-center gap-7 shadow-lg z-100">
                    <a href="#about">
                        <Button 
                            color="black"
                            loading={false}
                            variant="outlined"
                        >
                            01. ABOUT ME
                        </Button>                
                    </a>
                    <a href="#experience">
                        <Button 
                            color="black"
                            loading={false}
                            variant="outlined"

                        >
                            02. EXPERIENCE
                        </Button>                
                    </a>
                    <a href="#projects">
                        <Button 
                            color="black"
                            loading={false}
                            variant="outlined"
                        >
                            03. PROJECTS 
                        </Button>                
                    </a>
                    <a href="#contact">
                        <Button 
                            color="black"
                            loading={false}
                            variant="outlined"
                        >
                            04. CONTACT
                        </Button>                
                    </a>
                    <a href="#">
                        <Button 
                            color="black"
                            loading={false}
                            variant="gradient"
                        >
                            RESUME
                        </Button>                
                    </a>
                </div>
            </div>

            {/*Main Content*/}
            <div className="flex fixed">
                {/* Links */}
                <div className="flex fixed flex-col gap-5 h-[70vh] justify-center ml-10" id="socials">
                    <a id="github" href="https://github.com/IAmRiteshKoushik">
                        <IconButton 
                            className="rounded hover:shadow-lg"
                            variant="outlined"
                            size="lg"
                        >
                            <FontAwesomeIcon icon={faGithub} className="text-2xl"/>
                        </IconButton>
                    </a>
                    <a id="twitter" href="https://x.com/AmRiteshKoushik">
                        <IconButton 
                            className="rounded hover:shadow-lg"
                            variant="outlined"
                            size="lg"
                        >
                            <FontAwesomeIcon icon={faTwitter} className="text-2xl"/>
                        </IconButton>
                    </a>
                    <a id="linkedin" href="https://www.linkedin.com/in/ritesh-koushik/">
                        <IconButton 
                            className="rounded hover:shadow-lg"
                            variant="outlined"
                            size="lg"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="text-2xl"/>
                        </IconButton>
                    </a>
                    <a id="mail" href="mailto:riteshkoushik39@gmail.com">
                        <IconButton 
                            className="rounded hover:shadow-lg"
                            variant="outlined"
                            size="lg"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="text-2xl"/>
                        </IconButton>
                    </a>
                </div>
                {/*Movable content*/}
                <div className="w-full flex flex-col items-center overflow-y-scroll h-[80vh]">
                    <div className="w-3/5 flex flex-col items-left mt-20" id="hero">
                        <p className="mt-2 mb-3 text-xl">Hi, my name is</p>
                        <p className="my-2 text-8xl">Ritesh Koushik.</p>
                        <p className="my-2 text-7xl">I translate ideas into products.</p>
                        <p className="mt-4 mb-3 text-xl w-3/5">I design, develop and maintain robust and
                            scalable backend systems that power exceptional user experiences. 
                            Currently, I am looking for internships and part-time 
                            offers in <b>Backend</b>, <b>DevOps</b> and <b>Cloud Engineering</b> roles.
                        </p>
                        <div className="mt-3 flex gap-5 mb-3">
                            <a href="https://github.com/IAmRiteshKoushik">
                                <Button
                                    variant="outlined"
                                >
                                    GITHUB PROFILE
                                </Button>
                            </a>
                            <a href="#">
                                <Button>CHECKOUT RESUME</Button>
                            </a>
                        </div>
                    </div>

                    <div className="w-3/5 h-screen flex flex-col items-left" id="about">
                        <h1 className="text-3xl mt-40"><b>01. About Me</b></h1>
                    </div>

                    <div className="w-3/5 h-screen flex flex-col items-left" id="experience">
                        <h1 className="text-3xl mt-40"><b>02. Where I've Worked At</b></h1>
                        <div className="py-10 px-20">
                            <Timeline>
                                <TimelineItem>
                                    <TimelineConnector />
                                    <TimelineHeader className="h-3">
                                        <TimelineIcon />
                                        <p className="text-xl"><b>Amrita Center for Entrepreneurship | June 2024 - Present</b></p>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <p className="text-gray-700 text-sm">
                                            Leading a 10-developer team with the tasks of creating a full-responsive portal
                                            for Amrita Center for Entrepreneurship along with an administrative panel for 
                                            controlling release of blogs, events, newsletters and maintaining mailing lists
                                            to 1500+ members (students, faculties and industry experts).
                                        </p>
                                        <ul className="mt-1">
                                            <li className="list-disc ml-5 text-gray-700 text-sm">
                                                Writing clean, attractive and maintainable UI components in NextJS 
                                                for the main portal. Enhancing the user-experience with framer-motion animations.
                                            </li>
                                            <li className="list-disc ml-5 text-gray-700 text-sm">
                                                Handling frontend-to-backend integration through REST APIs and integration of PayU as 
                                                the payment handling gateway for events.
                                            </li>
                                            <li className="list-disc ml-5 text-gray-700 text-sm">
                                                Carrying out DDoS mitigation, handling authentication through JSON Web Tokens and 
                                                load-testing the server to handle an expected traffic threshold of 5000 users.
                                            </li>
                                            <li className="list-disc ml-5 text-gray-700 text-sm">
                                                Carrying out the end-to-end testing and deployment of the application using Docker, 
                                                GitHub Actions (CI/CD), managing database-cache using Redis and maintaining connection
                                                pools in PostgreSQL.
                                            </li>
                                        </ul>
                                        <p className="mt-2"><b><u>Tech</u>: <i>NextJS, SolidJS, TypeScript, NodeJS, ExpressJS, GitHub Actions, PostgreSQL, Redis, Docker</i></b></p>
                                    </TimelineBody>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineConnector />
                                    <TimelineHeader className="h-3">
                                        <TimelineIcon />
                                        <p className="text-xl"><b>Anokha 24': Amrita's National-Level Techfest | Feb 2024 - April 2024</b></p>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <ul className="mt-1">
                                            <li className="list-disc ml-5 text-gray-700 text-sm">
                                                Writing clean, attractive and maintainable UI components in NextJS 
                                                for the main portal. Enhancing the user-experience with GSAP scroll-trigger animations.
                                            </li>
                                            <li className="list-disc ml-5 text-gray-700 text-sm">
                                                Handled safety of tokens, introduced QR based profile management for guests 
                                                (non-university students) and optimized the UI through memoization and reduction
                                                in the number of re-renders.
                                            </li>
                                        </ul>
                                        <p className="mt-2"><b><u>Tech</u>: <i>NextJS, MaterialUI, TailwindCSS, QR-Generation</i></b></p>
                                    </TimelineBody>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </div>

                    <div className="w-3/5 h-[100vh] flex flex-col items-left" id="projects">
                        <h1 className="text-3xl mt-40"><b>03. My Notable Projects</b></h1>
                    </div>

                    <div className="w-3/5 h-[100vh] flex flex-col items-center my-20" id="contact">
                        <h1>04. What's Upcoming ?</h1>
                        <h1 className="text-6xl my-4">Get In Touch</h1>
                        <p className="text-xl text-center mb-8">
                            I am currently looking for internships and part-time 
                            employment opportunities. My inbox is always open. 
                            Whether you have a job proposal, or just want to say 
                            hi, I'll try my best to get back to you!
                        </p>
                        <a href="mailto:riteshkoushik39@gmail.com">
                            <Button>Contact Me</Button>
                        </a>
                    </div>
                    {/* Footer */}
                    <div>Created by <b>Ritesh Koushik,</b> 2024</div>
                </div>
            </div>
        </div>
    )
}

export default App
