import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { experiences } from '../../resorces/exprience';

function Experiences() {
    return (
        <div>
            <SectionTitle title="Experience" />

            <div className='flex'>
                <div>
                    {experiences.map((experience) => (
                        <div>
                            <h1 className="text-xl text-white"></h1>
                        </div>
                    ))}
                </div>
            </div>

            <div>

            </div>
        </div>
    );
}

export default Experiences