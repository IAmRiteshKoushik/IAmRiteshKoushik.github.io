import React from "react";
import { Button, IconButton, Chip } from "@material-tailwind/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faTwitter, faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon,
  TimelineBody } from "@material-tailwind/react";

function App() {
    return (
        <div className="w-full">
            {/* NavBar */}
            <div className="flex justify-center mt-2 sticky top-2 bg-opacity-50 z-10">
                <div className="flex h-24 rounded-lg w-3/5 items-center justify-center gap-7 shadow-lg z-100">
                    <a href="#about">
                        <Button 
                            variant="outlined"
                        >
                            01. ABOUT ME
                        </Button>                
                    </a>
                    <a href="#experience">
                        <Button 
                            variant="outlined"

                        >
                            02. EXPERIENCE
                        </Button>                
                    </a>
                    <a href="#projects">
                        <Button 
                            variant="outlined"
                        >
                            03. PROJECTS 
                        </Button>                
                    </a>
                    <a href="#contact">
                        <Button 
                            variant="outlined"
                        >
                            04. CONTACT
                        </Button>                
                    </a>
                    <a href="https://drive.google.com/file/d/1F6betrdsDBc--2x6sQBSNQn3T4BPKhKH/view?usp=sharing" target="_blank">
                        <Button className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faPagelines} className="text-xl"/>
                            Checkout Resume
                        </Button>
                    </a>
                </div>
            </div>

            {/*Main Content*/}
            <div className="flex fixed">
                {/* Links */}
                <div className="flex fixed flex-col gap-5 h-[70vh] justify-center ml-10" id="socials">
                    <a id="github" href="https://github.com/IAmRiteshKoushik" target="_blank">
                        <IconButton 
                            className="rounded hover:shadow-lg"
                            variant="outlined"
                            size="lg"
                        >
                            <FontAwesomeIcon icon={faGithub} className="text-2xl"/>
                        </IconButton>
                    </a>
                    <a id="twitter" href="https://x.com/AmRiteshKoushik" target="_blank">
                        <IconButton 
                            className="rounded hover:shadow-lg"
                            variant="outlined"
                            size="lg"
                        >
                            <FontAwesomeIcon icon={faTwitter} className="text-2xl"/>
                        </IconButton>
                    </a>
                    <a id="linkedin" href="https://www.linkedin.com/in/ritesh-koushik/" target="_blank">
                        <IconButton 
                            className="rounded hover:shadow-lg"
                            variant="outlined"
                            size="lg"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="text-2xl"/>
                        </IconButton>
                    </a>
                    <a id="mail" href="mailto:riteshkoushik39@gmail.com" target="_blank">
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
                            <a href="https://github.com/IAmRiteshKoushik" target="_blank">
                                <Button className="flex items-center gap-3" variant="outlined">
                                    <FontAwesomeIcon icon={faGithub} className="text-xl"/>
                                    GitHub Profile
                                </Button>
                            </a>
                            <a href="https://drive.google.com/file/d/1F6betrdsDBc--2x6sQBSNQn3T4BPKhKH/view?usp=sharing" target="_blank">
                                <Button className="flex items-center gap-3">
                                    <FontAwesomeIcon icon={faPagelines} className="text-xl"/>
                                    Checkout Resume
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="w-3/5 h-screen flex flex-col items-left" id="about">
                        <h1 className="text-3xl mt-40"><b>01. About Me</b></h1>
                        <div className="grid grid-cols-3 gap-4 px-20 pt-5">
                            <div className="col-span-2 p-4 shadow-lg rounded-lg">
                                <p className="mb-3">
                                    <b>Namaste World!</b> My name is Ritesh Koushik. I am a 
                                    full-stack developer out of India. My 
                                    interest in web development started back in 2022 
                                    when I was tasked with redesigning the portal for 
                                    India Space Research Organization (ISRO) as part of
                                    university coursework. This introduced me to 
                                    React.js, TailwindCSS and the open-source UI 
                                    libraries created by devs all around the world.
                                </p>
                                <p className="my-3">
                                    <b>Fast-forwarding</b> to present day, I am having the 
                                    priviledge of working across skilled teams and have 
                                    found my interest and specialization in backend 
                                    engineering where I get to manage databases, and 
                                    build robust and scalable server-side applications.
                                </p>
                                <p className="my-3">
                                    I am also exploring the domains of <b>GenAI</b> and 
                                    <b> Web3 - Solana</b>. Check back soon for a project!
                                </p>

                                <div className="flex gap-2 mt-2 flex-wrap">
                                    <Chip value="Next.JS" className="rounded-full" />
                                    <Chip value="Solid.JS" className="rounded-full" />
                                    <Chip value="Express.JS" className="rounded-full" />
                                    <Chip value="Ruby on Rails" className="rounded-full" />
                                    <Chip value="Go" className="rounded-full" />
                                    <Chip value="Python" className="rounded-full" />
                                    <Chip value="SQL" className="rounded-full" />
                                    <Chip value="MongoDB" className="rounded-full" />
                                    <Chip value="CI/CD" className="rounded-full" />
                                    <Chip value="Redis" className="rounded-full" />
                                    <Chip value="Docker" className="rounded-full" />
                                    <Chip value="Kubernetes" className="rounded-full" />
                                    <Chip value="Prometheus" className="rounded-full" />
                                    <Chip value="Grafana" className="rounded-full" />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img src="./Me.jpeg" alt="profile photo" className="rounded-full shadow-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Work Experience */}
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
                                        <div className="flex gap-2 mt-2">
                                            <Chip value="Next.JS" className="rounded-full" />
                                            <Chip value="Solid.JS" className="rounded-full" />
                                            <Chip value="Express.JS" className="rounded-full" />
                                            <Chip value="Postgre-SQL" className="rounded-full" />
                                            <Chip value="GitHub Actions" className="rounded-full" />
                                            <Chip value="Redis" className="rounded-full" />
                                            <Chip value="Docker" className="rounded-full" />
                                            <Chip value="Payment Gateway" className="rounded-full" />
                                        </div>
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
                                        <div className="flex gap-2 mt-2">
                                            <Chip value="Next.JS" className="rounded-full" />
                                            <Chip value="Material-UI" className="rounded-full" />
                                            <Chip value="TailwindCSS" className="rounded-full" />
                                            <Chip value="QR-Generation" className="rounded-full" />
                                        </div>
                                    </TimelineBody>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="w-3/5 h-[100vh] flex flex-col items-left" id="projects">
                        <h1 className="text-3xl mt-40 mb-5"><b>03. My Notable Projects</b></h1>
                        <div className="flex flex-wrap gap-5 justify-center">
                            {/* Project 1*/}
                            <div className="shadow-lg rounded-xl p-5 w-1/3">
                                <p className="text-2xl text-wrap">CodeRev: Code-Review Automation Tool</p>
                                <p className="text-wrap">
                                    Review Python, Java or TypeScript code using 
                                    CodeRev through
                                    AWS-CodeGuru which using machine 
                                    learning models to highlight errors, vulnerabilities
                                    and produce fixes for the code.
                                </p>
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    <Chip value="Next.JS" variant="gradient" className="rounded-full" />
                                    <Chip value="Express" variant="gradient" className="rounded-full" />
                                    <Chip value="MongoDB" variant="gradient" className="rounded-full" />
                                    <Chip value="AWS" variant="gradient" className="rounded-full" />
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://github.com/IAmRiteshKoushik/coderev-web" target="_blank">
                                        <Button className="mt-4 flex items-center gap-3">
                                            <FontAwesomeIcon icon={faGithub} className="text-xl"/>
                                            Web App
                                        </Button>
                                    </a>
                                    <a href="https://github.com/IAmRiteshKoushik/coderev-bk" target="_blank">
                                        <Button className="mt-4 flex items-center gap-3">
                                            <FontAwesomeIcon icon={faGithub} className="text-xl"/>
                                            Server App
                                        </Button>
                                    </a>
                                </div>
                            </div>
                            {/* Project 2*/}
                            <div className="shadow-lg rounded-xl p-5 w-1/3">
                                <p className="text-2xl text-wrap">RocketBase: BaaS</p>
                                <p className="text-wrap">
                                    Entire backend in a single executable file. 
                                    Leveraging the performance benefits of Rust 
                                    to create a drop-in backend with an 
                                    administration panel build with SolidJS.
                                    Database requirements are met using SurrealDB
                                    and Redis.
                                </p>
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    <Chip value="Solid.JS" variant="gradient" className="rounded-full" />
                                    <Chip value="Rust" variant="gradient" className="rounded-full" />
                                    <Chip value="SurrealDB" variant="gradient" className="rounded-full" />
                                    <Chip value="Redis" variant="gradient" className="rounded-full" />
                                </div>
                                <a href="https://github.com/IAmRiteshKoushik/RocketBase" target="_blank">
                                    <Button className="mt-4 flex items-center gap-3">
                                        <FontAwesomeIcon icon={faGithub} className="text-xl"/>
                                        Server App
                                    </Button>
                                </a>
                            </div>
                            {/* Project 3*/}
                            <div className="shadow-lg rounded-xl p-5 w-1/3">
                                <p className="text-2xl text-wrap">Portfolio Website</p>
                                <p className="text-wrap">
                                    Simple portfolio website showcasing work experience,
                                    projects and contact info. You are currently looking 
                                    at it :)
                                </p>
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    <Chip value="React.JS" variant="gradient" className="rounded-full" />
                                    <Chip value="TailwindCSS" variant="gradient" className="rounded-full" />
                                    <Chip value="Material-UI" variant="gradient" className="rounded-full" />
                                </div>
                                <a href="https://github.com/IAmRiteshKoushik/IAmRiteshKoushik.github.io" target="_blank">
                                    <Button className="mt-4 flex items-center gap-3">
                                        <FontAwesomeIcon icon={faGithub} className="text-xl"/>
                                        Web App
                                    </Button>
                                </a>
                            </div>
                            {/* Project 3*/}
                            <div className="shadow-lg rounded-xl p-5 w-1/3">
                                <p className="text-2xl text-wrap">BankAPI</p>
                                <p className="text-wrap py-2">
                                    A simple API written in Go which simulates the 
                                    working of a bank server. It uses a PostgreSQL
                                    database to handle transactions and can be 
                                    deployed in any environment through 
                                    containerization using Docker. JWT has been 
                                    used for token-based authentication.
                                </p>
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    <Chip value="Go" variant="gradient" className="rounded-full" />
                                    <Chip value="JSON" variant="gradient" className="rounded-full" />
                                    <Chip value="SQL" variant="gradient" className="rounded-full" />
                                    <Chip value="Docker" variant="gradient" className="rounded-full" />
                                </div>
                                <a href="https://github.com/IAmRiteshKoushik/go-bank" target="_blank">
                                    <Button className="mt-4 flex items-center gap-3">
                                        <FontAwesomeIcon icon={faGithub} className="text-xl"/>
                                        Server App
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
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
