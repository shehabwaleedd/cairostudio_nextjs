import React from 'react'
import styles from "./style.module.scss"
import Image from 'next/image'

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

]

const Team = () => {
    return (
        <section className={styles.team}>
            <div className={styles.team__members}>
                {TeamData.map((member) => {
                    return (
                        <div key={member.id} className={styles.member}>
                            <Image src={member.image} alt={member.name} className={styles.team__member__image} width={600} height={600} />
                            <div className={styles.details}>
                                <h3 className={styles.team__member__name}>{member.name}</h3>
                                <p className={styles.team__member__role}>{member.role}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Team