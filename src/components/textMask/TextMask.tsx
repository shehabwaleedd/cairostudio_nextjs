import React  from 'react';
import mainVideoPlaceholder from "../../../public/assets/mainVideoPlaceholder.webp"
import './TextMask.scss';

const TextMask: React.FC = () => {

    return (
        <section className="textMask">
            <div className="textMask__container">
                <video loop autoPlay muted playsInline src="/mainVideo2.mp4" poster={mainVideoPlaceholder.src} security='restricted'/>
            </div>
        </section>
    );
};

export default TextMask;
