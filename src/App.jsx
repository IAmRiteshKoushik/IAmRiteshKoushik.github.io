import React from "react";
import { Button, IconButton } from "@material-tailwind/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineHeader,
} from "@material-tailwind/react";
import {
    BellIcon,
    ArchiveBoxIcon,
    CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

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
                        <h1 className="text-3xl mt-40">01. About Me</h1>
                    </div>

                    <div className="w-3/5 h-screen flex flex-col items-left" id="experience">
                        <h1 className="text-3xl mt-40">02. Where I've Worked At</h1>
                        <div className="w-[25rem] mt-4">
                            <Timeline>
                                <TimelineItem className="h-28">
                                    <TimelineConnector className="!w-[78px]" />
                                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                        <TimelineIcon className="p-3" variant="ghost">
                                            <BellIcon className="h-5 w-5" />
                                        </TimelineIcon>
                                        <div className="flex flex-col gap-1">
                                            <Typography variant="h6" color="blue-gray">
                                                $2400, Design changes
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal">
                                                22 DEC 7:20 PM
                                            </Typography>
                                        </div>
                                    </TimelineHeader>
                                </TimelineItem>
                                <TimelineItem className="h-28">
                                    <TimelineConnector className="!w-[78px]" />
                                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                        <TimelineIcon className="p-3" variant="ghost" color="red">
                                            <ArchiveBoxIcon className="h-5 w-5" />
                                        </TimelineIcon>
                                        <div className="flex flex-col gap-1">
                                            <Typography variant="h6" color="blue-gray">
                                                New order #1832412
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal">
                                                21 DEC 11 PM
                                            </Typography>
                                        </div>
                                    </TimelineHeader>
                                </TimelineItem>
                                <TimelineItem className="h-28">
                                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                        <TimelineIcon className="p-3" variant="ghost" color="green">
                                            <CurrencyDollarIcon className="h-5 w-5" />
                                        </TimelineIcon>
                                        <div className="flex flex-col gap-1">
                                            <Typography variant="h6" color="blue-gray">
                                                Payment completed for order #4395133
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal">
                                                20 DEC 2:20 AM
                                            </Typography>
                                        </div>
                                    </TimelineHeader>
                                </TimelineItem>
                            </Timeline>
                        </div>
                    </div>

                    <div className="w-3/5 h-[100vh] flex flex-col items-left" id="projects">
                        <h1 className="text-3xl mt-40">03. My Notable Projects</h1>
                        <div className="w-[25rem] mt-4">
                            <Timeline>
                                <TimelineItem className="h-28">
                                    <TimelineConnector className="!w-[78px]" />
                                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                        <TimelineIcon className="p-3" variant="ghost">
                                            <BellIcon className="h-5 w-5" />
                                        </TimelineIcon>
                                        <div className="flex flex-col gap-1">
                                            <Typography variant="h6" color="blue-gray">
                                                $2400, Design changes
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal">
                                                22 DEC 7:20 PM
                                            </Typography>
                                        </div>
                                    </TimelineHeader>
                                </TimelineItem>
                                <TimelineItem className="h-28">
                                    <TimelineConnector className="!w-[78px]" />
                                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                        <TimelineIcon className="p-3" variant="ghost" color="red">
                                            <ArchiveBoxIcon className="h-5 w-5" />
                                        </TimelineIcon>
                                        <div className="flex flex-col gap-1">
                                            <Typography variant="h6" color="blue-gray">
                                                New order #1832412
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal">
                                                21 DEC 11 PM
                                            </Typography>
                                        </div>
                                    </TimelineHeader>
                                </TimelineItem>
                                <TimelineItem className="h-28">
                                    <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                                        <TimelineIcon className="p-3" variant="ghost" color="green">
                                            <CurrencyDollarIcon className="h-5 w-5" />
                                        </TimelineIcon>
                                        <div className="flex flex-col gap-1">
                                            <Typography variant="h6" color="blue-gray">
                                                Payment completed for order #4395133
                                            </Typography>
                                            <Typography variant="small" color="gray" className="font-normal">
                                                20 DEC 2:20 AM
                                            </Typography>
                                        </div>
                                    </TimelineHeader>
                                </TimelineItem>
                            </Timeline>
                        </div>
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
