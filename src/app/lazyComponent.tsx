import React, { Suspense } from 'react'
import Hero from '../components/hero';
import MainProjects from '../components/mainProjects';
import TextMask from '../components/textMask';
import AboutUs from '../components/aboutUs';
import Projectss from '@/components/Projects3D/Projects';
import Perpective from '../components/perpective/Perpective';
import Faqs from '../components/workedWith';
import FaqsData from '../components/workedWith/WorkedWithData';
import Stairs from '../animations/transition/Stairs';
import Loading from '@/utils/loading/Loading';

const LazyComponent = () => {
    return (
        <Suspense fallback={<Loading height={100} />}>
            <Stairs>
                <Hero />
                <MainProjects />
                <TextMask />
                <AboutUs />
                <Projectss />
                <Perpective />
                <div className='faqs__padding'>
                    <Faqs Data={FaqsData} />
                </div>
            </Stairs>
        </Suspense>
    )
}

export default LazyComponent