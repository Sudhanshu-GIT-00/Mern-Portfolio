import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function Contact() {
    const user = {
        name: "Sudhanshu Ranjan",
        age: null,
        gender: "Male",
        gmail: "rsudhanshu119@gmail.com",
        mobile: "+91 7979959747",
        country: "INDIA"

    }
    return (
        <div>
            <SectionTitle title="hello" />
            <div className="flex">
                <div className="flex flex-col gap-1">
                    <p className="text-tertiary ">{"{"}</p>
                    {Object.keys(user).map((key) => (
                        <p className='ml-5 '>
                            <span className="text-tertiary">{key} : </span>
                            <span className="text-tertiary">{user[key]}</span>
                        </p>
                    ))}
                    <p className="text-tertiary ">{"}"}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact