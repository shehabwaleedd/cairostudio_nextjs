import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const CaseComponent = ({ projects, sliderRefs, innerSmallRefs, current }) => {
    return (
        <>
            {projects.map((item, index) => (
                <React.Fragment key={item.id}>
                    <Link href={`/case-study/${item.title}`} passHref>
                        <div ref={(el) => (sliderRefs.current[index] = el)}>
                            <Image src={item.cover} alt={item.title} objectFit='cover' className={`slider__item ${current === index ? 'slider__item--current' : ''}`} />
                        </div>
                    </Link>
                    <div className='showCase__title'>
                        {item.title !== 'Swag' && <h1 className='showCase__title__text'>{item.title}</h1>}
                    </div>
                    <Link href={`/case-study/${item.title}`} passHref>
                        <div ref={(el) => (innerSmallRefs.current[index] = el)}>
                            <Image src={item.homePage} alt={item.title + ' homepage'} className={`slider__item-small ${current === index ? 'slider__item--current-small' : ''}`} />
                        </div>
                    </Link>
                </React.Fragment>
            ))
            }
        </>
    )
}

export default CaseComponent