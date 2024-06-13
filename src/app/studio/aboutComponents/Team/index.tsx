'use client'
import React from 'react'
import "./Team.scss"
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const TeamData = [
    {
        id: 2,
        name: "Shehab Waleed",
        role: "Web Developer",
        image: "https://res.cloudinary.com/ds20vy7zo/image/upload/v1717922057/291215314_1625196377881772_2901110771553819599_n_sr95ak.jpg"
    },
    {
        id: 1,
        name: "Rym Chebbi",
        role: "Business Developer",
        image: "https://res.cloudinary.com/ds20vy7zo/image/upload/v1717921064/279916371_699911074658292_3821390991278728868_n_xm4cbh.jpg"
    },
    {
        id: 3,
        name: "Abdallah Osama",
        role: "Graphic Designer",
        image: "https://res.cloudinary.com/ds20vy7zo/image/upload/v1717921059/311267169_421362886800865_3750963405119657114_n_yxpecy.jpg"
    },
    {
        id: 4,
        name: "Mina Nagy",
        role: "Backend Developer",
        image: "https://res.cloudinary.com/ds20vy7zo/image/upload/v1718282493/116976297_efajx9.jpg"
    },

]

const Team = () => {

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: false,
        mode: "snap",
        drag: true,
        rubberband: false,
        breakpoints: {
            "(min-width: 380px)": {
                slides: { perView: 1, spacing: 10 },
            },
            "(min-width: 768px)": {
                slides: { perView: 2, spacing: 20 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3, spacing: 30 },
            },
        },
        slides: {
            perView: 1, spacing: 20, origin: "auto",
        },
    });


    return (
        <section className={`team keen-slider `} ref={sliderRef}>
            <div className="team__members">
                {TeamData.map((member) => {
                    return (
                        <div key={member.id} className={`member keen-slider__slide`}>
                            <Image src={member.image} alt={member.name} className="team__member__image" width={600} height={600} />
                            <div className="details">
                                <h3 className="team__member__name">{member.name}</h3>
                                <p className="team__member__role">{member.role}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Team