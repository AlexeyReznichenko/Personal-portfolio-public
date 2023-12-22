import classes from '@/styles/componentsStyles/preloader.module.scss';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';


export default function Preloader() {
    const preloaderTimeline = gsap.timeline({});

    // RELOADER ANIMATION
    const initAnimation = (): void => {
        const vh = window.innerHeight / 100;
        const vw = window.innerWidth / 100;
    
        preloaderTimeline
        .to(`.${classes['line-left']} .${classes.inner}`, {duration: 2, y: 100 * vh - 155}, 0)
        .to(`.${classes['line-right']} .${classes.inner}`, {duration: 2, y: -(100 * vh - 155)}, 0)
        .to(`.${classes['logo-animating']}`, {duration: 2, width: '100%'}, 0)
        .to(`.${classes.preloader}`, {duration: .5, delay: 2.4, autoAlpha: 0}, 0)
        .to("html", { duration: 0, overflowY: "visible", delay: 2.4 }, 0);
    };

    useEffect(() => {
        const html = document.querySelector('html')!;
        html.style.overflowY = 'hidden';
        initAnimation();

        setTimeout(() => {
            html.style.overflowY = 'hidden';
        }, 100);

        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 200);
        // }, 2200);
    }, []);


    return (
        <div className={classes.preloader}>
            <div className={classes.center}>
                <div className={classes['logo-container']}>
                    <img src="/logo.svg" alt="" className={classes['logo-opacity']} />
                    <div className={classes['logo-animating']}>
                        <img src="/logo.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className={`${classes.line} ${classes['line-left']}`}>
                <div className={classes.inner}></div>
            </div>
            <div className={`${classes.line} ${classes['line-right']}`}>
                <div className={classes.inner}></div>
            </div>
        </div>
    )
}