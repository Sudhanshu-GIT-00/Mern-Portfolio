import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Contact() {
    // const user = {
    //     name: "Sudhanshu Ranjan",
    //     age: null,
    //     gender: "Male",
    //     gmail: "rsudhanshu119@gmail.com",
    //     mobile: "+91 7979959747",
    //     country: "INDIA"

    // }
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { contact } = portfolioData;
    // const { lottieURL, description1, description2, skills } = contact;

    return (
        <div>
            <SectionTitle title="hello" />
            <div className="flex sm:flex-col items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-tertiary ">{"{"}</p>
                    {Object.keys(contact).map((key) => (
                        <p className='ml-5 '>
                            <span className="text-tertiary">{key} : </span>
                            <span className="text-tertiary">{contact[key]}</span>
                        </p>
                    ))}
                    <p className="text-tertiary ">{"}"}</p>
                </div>

                <div className='h-[400px]'>
                    <lottie-player
                        src="https://assets9.lottiefiles.com/packages/lf20_eroqjb7w.json"
                        background="transparent"
                        speed="1"
                        autoplay
                    >

                    </lottie-player>
                </div>
            </div>
        </div>
    );
}

export default Contact