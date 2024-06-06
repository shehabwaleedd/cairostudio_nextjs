import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"


export const animatePageIn = () => {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");
    const bannerFour = document.getElementById("banner-4");
    const textAnimation = document.getElementById("text-animation");

    if (bannerOne && bannerTwo && bannerThree && bannerFour && textAnimation) {
        const tl = gsap.timeline();


        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: 0,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: -100,
            stagger: 0.2,
            duration: 1,
            ease: "power2.inOut",
        })
    }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
    const bannerOne = document.getElementById("banner-1")
    const bannerTwo = document.getElementById("banner-2")
    const bannerThree = document.getElementById("banner-3")
    const bannerFour = document.getElementById("banner-4")
    const textAnimation = document.getElementById("text-animation");

    if (bannerOne && bannerTwo && bannerThree && bannerFour && textAnimation) {
        const tl = gsap.timeline({
            onComplete: () => {
                router.push(href);
            }
        });

        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
            yPercent: -100,
        })
            .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
                yPercent: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power2.inOut",
            })
            tl.set(textAnimation, { display: 'block', })
            .set('.letter', { opacity: 0 })
            .to('.letter', {
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut",
                stagger: 0.05,
            })
            .to('.letter', {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
                stagger: 0.05,
            });

    }
}