import { baseActions, selectIsPreloaderFinished } from '@/store/baseSlice';
import classes from '@/styles/componentsStyles/App/preloader.module.scss';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function Preloader() {
    const dispatch = useDispatch();
    const preloaderTimeline = gsap.timeline({});
    const isPreloaderFinished = useSelector(selectIsPreloaderFinished);

    // RELOADER ANIMATION
    const initAnimation = (): void => {
        const VH = window.innerHeight / 100;
        const VW = window.innerWidth / 100;

        let animationDuration = 1.8;

        if (isPreloaderFinished) {
            animationDuration = .9;
        }
    
        preloaderTimeline
        .to(`.${classes['line-left']} .${classes.inner}`, {duration: animationDuration, y: 100 * VH - 155}, 0)
        .to(`.${classes['line-right']} .${classes.inner}`, {duration: animationDuration, y: -(100 * VH - 155)}, 0)
        .to(`.${classes['logo-animating']}`, {duration: animationDuration, width: '100%'}, 0)
        .to(`.${classes.preloader}`, {duration: .5, delay: animationDuration + .3, autoAlpha: 0}, 0)
        .to("html", { duration: 0, overflowY: "visible", delay: animationDuration + .3 }, 0);
    };

    useEffect(() => {
        const HTML = document.querySelector('html')!;
        HTML.style.overflowY = 'hidden';
        initAnimation();

        setTimeout(() => {
            HTML.style.overflowY = 'hidden';
        }, 100);

        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 200);

        setTimeout(() => {
            dispatch(baseActions.isPreloaderFinishedToTrue());
        }, 2700);
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