import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    const skills = [
        "JavaScript",
        "React",
        "Mongo DB",
        "Express",
        "Node JS",
        "C",
        "Python"
    ]
    return (
        <div>
            <SectionTitle title="About" />
            <div className='flex w-full items-center'>
                <div className='h-[70vh] w-1/2'>
                    <lottie-player
                        src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json"
                        background="transparent"
                        speed="1"
                        autoplay
                    >    </lottie-player>
                </div>
                <div className='flex flex-col gap-5 w-1/2'>
                    <p className='text-white'>
                        and different soft skills to ensure personal and professional growth and in the end to contribute to the prosperity of the
                    </p>
                    <p className='text-white'>
                        and different soft skills to ensure personal and professional growth and in the end to contribute to the prosperity of the
                    </p>
                </div>
            </div>

            <div className='py-5'>
                <h1 className='text-xl text-tertiary'>Nessus is a remote security scanning tool
                </h1>
                <div className='flex flex-wrap gap-10'>
                    {skills.map((skill, index) => (
                        <div className='border border-tertiary py-3 px-10 rounded-full'>
                            <h1 className='text-tertiary'>{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About