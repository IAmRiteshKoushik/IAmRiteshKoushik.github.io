import React from "react";
import { Button, IconButton } from "@material-tailwind/react"
import Navbar from "./components/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {

  return (
        <div className="w-full">
            <div className="flex justify-center mt-2 sticky top-2">
                <Navbar/>
            </div>
            {/*Main Content*/}
            <div className="flex">
                <div className="flex flex-col gap-5 h-[70vh] justify-center absolute ml-10" id="socials">
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
                <div className="w-full flex flex-col items-center">
                    <div className="w-3/5 h-screen flex flex-col items-left mt-20" id="hero">
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
                        <h1 className="text-3xl">01. About Me</h1>
                    </div>

                    <div className="w-3/5 h-screen flex flex-col items-left" id="experience">
                        <h1 className="text-3xl">02. Where I've Worked At</h1>
                    </div>

                    <div className="w-3/5 h-screen flex flex-col items-left" id="projects">
                        <h1 className="text-3xl">03. My Notable Projects</h1>
                    </div>

                    <div className="w-3/5 flex flex-col items-center my-20" id="contact">
                        <h1>04. What's Upcoming ?</h1>
                        <h1 className="text-6xl">Get In Touch</h1>
                        <p className="text-2xl">
                            I am currently looking for internships and part-time 
                            employment opportunities. My inbox is always open. 
                            Whether you have a job proposal, or just want to say 
                            hi, I'll try my best to get back to you!
                        </p>
                        <a>
                            <Button>Contact Me</Button>
                        </a>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
  )
}

export default App
