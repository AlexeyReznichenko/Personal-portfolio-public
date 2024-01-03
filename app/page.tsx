"use client";

import { useEffect } from 'react';
import { isTouchDevice } from '@/store';
import gsap, { Power0 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { baseActions } from '@/store/baseSlice';
import { useDispatch } from 'react-redux';
import classes from '@/styles/pagesStyles/landing.module.scss'
import classesSection1 from '@/styles/componentsStyles/Landing/section1.module.scss';
import classesSection2 from '@/styles/componentsStyles/Landing/section2.module.scss';
import classesSection3 from '@/styles/componentsStyles/Landing/section3.module.scss';
import classesSection4 from '@/styles/componentsStyles/Landing/section4.module.scss';
import classesHeader from '@/styles/componentsStyles/App/header.module.scss';
import classesProject from '@/styles/componentsStyles/Landing/project.module.scss';
import classesButtonProject from '@/styles/componentsStyles/Landing/buttonProject.module.scss';
import Preloader from '@/components/Singular/App/Preloader';
import Header from '@/components/Singular/App/Header';
import Footer from '@/components/Singular/App/Footer';
import Section1 from '@/components/Singular/Landing/Section1';
import Section2 from '@/components/Singular/Landing/Section2';
import Section3 from '@/components/Singular/Landing/Section3';
import Section4 from '@/components/Singular/Landing/Section4';

gsap.registerPlugin(ScrollTrigger);

let initialWindowWidth = 0;

export default function Home() {
    const dispatch = useDispatch();
    let timeline = gsap.timeline({});
    let ctx = gsap.context(() => {});

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // DISABLE EMPTY LINKS CLICK
    const linksPreventDefault = (): void => {
        const links = Array.from(document.querySelectorAll('a[href="#"]'));
        links.forEach((el) => {
            el.addEventListener("click", (e) => {
                e.preventDefault();
            });
        });
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // RESIZE EVENT HANDLER
    const handleResize = (): void => {
        if (!initialWindowWidth) return;
        // RELOAD PAGE ON RESIZE
        const NEW_WINDOW_WIDTH = Math.abs(initialWindowWidth - window.innerWidth);
        checkIsMobile();
        if (NEW_WINDOW_WIDTH < 100) return;
        location.reload();
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHECK IF DEVICE IS MOBILE TYPE AND HITTING MOBILE BREAKPOINT
    const checkIsMobile = (): void => {
        if (window.innerWidth > 850) {
            dispatch(baseActions.isMobileToFalse());
        } else {
            dispatch(baseActions.isMobileToTrue());
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SCROLL TO THE TOP OF THE PAGE
    const scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const initAnimation = (): void => {
        const WINDOW_WIDTH = window.innerWidth;
        const WINDOW_HEIGHT = window.innerHeight;

        // CSS UNITS IN PIXELS
        const BASE_FONT_SIZE = parseInt( getComputedStyle(document.querySelector('html')!).fontSize );
        const VW = WINDOW_WIDTH / 100;
        const VH = WINDOW_HEIGHT / 100;

        // TIMELINE END
        let scrollTimelineEnd = 'top -1100%';

        if (window.outerWidth < 850 || isTouchDevice()) {
            scrollTimelineEnd = 'top -9000px';
        }

        let scrollTimelineTrigger = `.animation-block`;

        ctx = gsap.context(() => {

            // GSAP TIMELINE
            timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollTimelineTrigger,
                    start: 'top 0%',
                    end: scrollTimelineEnd,
                    scrub: 1,
                    pin: scrollTimelineTrigger,
                }
            });

            // GSAP ANIMATIONS

            if (WINDOW_WIDTH > 850) {

                // timeline
                // .add('section-1-animation')
                // .to(`.${classesSection1['section-1']}`, {duration: 1, backgroundColor: '#141319', ease: Power0.easeIn}, 'section-1-animation')
                // .to(`.${classesSection1.title}`, {duration: 1, x: -2 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-1-animation')
                // .from(`.${classesSection1.description}`, {duration: 1, y: 15 * BASE_FONT_SIZE, scale: .8, ease: Power0.easeIn}, 'section-1-animation')
                // .to(`.${classesSection1.dollar} img`, {duration: 1, x: 43 * BASE_FONT_SIZE, y: -10 * BASE_FONT_SIZE, scale: 1.6, rotate: 14, ease: Power0.easeIn}, 'section-1-animation')
                // .to(`.${classesSection1.stands} .${classesSection1.inner}`, {duration: 1, y: 5 * BASE_FONT_SIZE, scale: 1.2, ease: Power0.easeIn}, 'section-1-animation')
                // .fromTo(`.${classesSection1.stands} .${classesSection1.inner}`, 
                //     {duration: 1, filter: 'brightness(90%)'},
                //     {duration: 1, filter: 'brightness(140%)'},
                // 'section-1-animation')
                // .from(`.${classesSection1['orange-stick-1']}`, {duration: 1, x: -23 * BASE_FONT_SIZE, y: 23 * BASE_FONT_SIZE, rotate: 67, ease: Power0.easeIn}, 'section-1-animation')
                // .from(`.${classesSection1['orange-stick-2']}`, {duration: 1, x: -23 * BASE_FONT_SIZE, y: 23 * BASE_FONT_SIZE, rotate: 58, ease: Power0.easeIn}, 'section-1-animation')
                // .from(`.${classesSection1['green-stick-1']}`, {duration: 1, x: -23 * BASE_FONT_SIZE, y: 23 * BASE_FONT_SIZE, rotate: -80, ease: Power0.easeIn}, 'section-1-animation')
                // .from(`.${classesSection1['orange-stick-3']}`, {duration: 1, x: -23 * BASE_FONT_SIZE, y: -23 * BASE_FONT_SIZE, rotate: 53, ease: Power0.easeIn}, 'section-1-animation')
                // .from(`.${classesSection1['green-stick-2']}`, {duration: 1, x: 23 * BASE_FONT_SIZE, y: -23 * BASE_FONT_SIZE, rotate: 63, ease: Power0.easeIn}, 'section-1-animation')
                // .from(`.${classesSection1['orange-stick-4']}`, {duration: 1, x: 23 * BASE_FONT_SIZE, y: 23 * BASE_FONT_SIZE, rotate: 46, ease: Power0.easeIn}, 'section-1-animation')
                // .from(`.${classesSection1['orange-stick-5']}`, {duration: 1, x: 23 * BASE_FONT_SIZE, y: 23 * BASE_FONT_SIZE, rotate: 75, ease: Power0.easeIn}, 'section-1-animation')
                // .to(`.${classesSection1['shadow-bottom']}`, {duration: 1, y: 10 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-1-animation')

                // .add('section-2-animation')
                // .from(`.${classesSection2['section-2']}`, {duration: 1.2, y: 110 * VH, ease: Power0.easeIn}, 'section-2-animation+=.35')
                // .from(`.${classesSection2['orange-stick-1']}`, {duration: 1.2, x: 60 * BASE_FONT_SIZE, y: 10 * BASE_FONT_SIZE, rotate: -40, ease: Power0.easeIn}, 'section-2-animation+=.35')
                // .from(`.${classesSection2['green-stick-1']}`, {duration: 1.2, x: 60 * BASE_FONT_SIZE, y: 10 * BASE_FONT_SIZE, rotate: -14, ease: Power0.easeIn}, 'section-2-animation+=.35')
                // .to(`.${classesSection1.title}`, {duration: 1.2, y: -120 * VH, ease: Power0.easeIn}, 'section-2-animation+=.35')
                // .to(`.${classesSection1.description}`, {duration: 1.2, y: -103 * VH, ease: Power0.easeIn}, 'section-2-animation+=.35')
                // .to(`.${classesSection1.dollar}`, {duration: 1.2, x: 60 * BASE_FONT_SIZE, y: 40 * VH, rotate: 70, ease: Power0.easeIn}, 'section-2-animation+=.35')
                // .to(`.${classesSection1['orange-stick-3']}`, {duration: 1.2, y: -29 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-2-animation+=.35')
                // .to(`.${classesSection1['green-stick-2']}`, {duration: 1.2, y: -29 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-2-animation+=.35')

                timeline
                .add('section-1-animation')
                .to(`.${classesSection1['section-1']}`, {duration: 0, backgroundColor: '#141319', ease: Power0.easeIn}, 'section-1-animation')
                .to(`.${classesSection1.title}`, {duration: 0, x: -2 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-1-animation')
                .from(`.${classesSection1.description}`, {duration: 0, y: 15 * BASE_FONT_SIZE, scale: .8, ease: Power0.easeIn}, 'section-1-animation')
                // .to(`.${classesSection1.dollar} img`, {duration: 0, x: 43 * BASE_FONT_SIZE, y: -10 * BASE_FONT_SIZE, scale: 1.6, rotate: 14, ease: Power0.easeIn}, 'section-1-animation')
                .to(`.${classesSection1.stands} .${classesSection1.inner}`, {duration: 0, y: 5 * BASE_FONT_SIZE, scale: 1.2, ease: Power0.easeIn}, 'section-1-animation')
                .fromTo(`.${classesSection1.stands} .${classesSection1.inner}`, 
                    {duration: 0, filter: 'brightness(90%)'},
                    {duration: 0, filter: 'brightness(140%)'},
                'section-1-animation')
                .from(`.${classesSection1['orange-stick-1']}`, {duration: 0, x: -23 * BASE_FONT_SIZE, y: 23 * BASE_FONT_SIZE, rotate: 67, ease: Power0.easeIn}, 'section-1-animation')
                .from(`.${classesSection1['orange-stick-2']}`, {duration: 0, x: -23 * BASE_FONT_SIZE, y: 23 * BASE_FONT_SIZE, rotate: 58, ease: Power0.easeIn}, 'section-1-animation')
                .from(`.${classesSection1['green-stick-1']}`, {duration: 0, x: -23 * BASE_FONT_SIZE, y: 23 * BASE_FONT_SIZE, rotate: -80, ease: Power0.easeIn}, 'section-1-animation')
                .from(`.${classesSection1['orange-stick-3']}`, {duration: 0, x: -23 * BASE_FONT_SIZE, y: -23 * BASE_FONT_SIZE, rotate: 53, ease: Power0.easeIn}, 'section-1-animation')
                .from(`.${classesSection1['green-stick-2']}`, {duration: 0, x: 23 * BASE_FONT_SIZE, y: -23 * BASE_FONT_SIZE, rotate: 63, ease: Power0.easeIn}, 'section-1-animation')
                .from(`.${classesSection1['orange-stick-4']}`, {duration: 0, x: 23 * BASE_FONT_SIZE, y: 23 * BASE_FONT_SIZE, rotate: 46, ease: Power0.easeIn}, 'section-1-animation')
                .from(`.${classesSection1['orange-stick-5']}`, {duration: 0, x: 23 * BASE_FONT_SIZE, y: 23 * BASE_FONT_SIZE, rotate: 75, ease: Power0.easeIn}, 'section-1-animation')
                .to(`.${classesSection1['shadow-bottom']}`, {duration: 0, y: 10 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-1-animation')

                .add('section-2-animation')
                .from(`.${classesHeader.header}`, {duration: .5, delay: .7, backgroundImage: 'linear-gradient(to bottom,#141319 25%,rgba(0,0,0,0))', ease: Power0.easeIn}, 'section-2-animation')
                .from(`.${classesSection2['section-2']}`, {duration: 1.2, y: 110 * VH, ease: Power0.easeIn}, 'section-2-animation')
                .from(`.${classesSection2['orange-stick-1']}`, {duration: 1.2, x: 60 * BASE_FONT_SIZE, y: 10 * BASE_FONT_SIZE, rotate: -40, ease: Power0.easeIn}, 'section-2-animation')
                .from(`.${classesSection2['green-stick-1']}`, {duration: 1.2, x: 60 * BASE_FONT_SIZE, y: 10 * BASE_FONT_SIZE, rotate: -14, ease: Power0.easeIn}, 'section-2-animation')
                .to(`.${classesSection1.title}`, {duration: 1.2, y: -120 * VH, ease: Power0.easeIn}, 'section-2-animation')
                .to(`.${classesSection1.description}`, {duration: 1.2, y: -103 * VH, ease: Power0.easeIn}, 'section-2-animation')
                .to(`.${classesSection1.dollar}`, {duration: 1.2, y: -80 * VH, ease: Power0.easeIn}, 'section-2-animation')
                .to(`.${classesSection1['orange-stick-3']}`, {duration: 1.2, y: -29 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-2-animation')
                .to(`.${classesSection1['green-stick-2']}`, {duration: 1.2, y: -29 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-2-animation')

                .add('section-2-animation-2')
                .to(`.${classesSection1['section-1']}`, {duration: .4, autoAlpha: 0, ease: Power0.easeIn}, 'section-2-animation-2')
                .from(`.${classesSection3['section-3']}`, {duration: .4, autoAlpha: 0, ease: Power0.easeIn}, 'section-2-animation-2')
                .to(`.${classesSection2['info-block-1']}`, {duration: 1, opacity: .3, ease: Power0.easeIn}, 'section-2-animation-2')
                .from(`.${classesSection2['info-block-2']}`, {duration: 1, opacity: .3, ease: Power0.easeIn}, 'section-2-animation-2')
                .to(`.${classesSection2['block-1']}`, {duration: 1, opacity: .2, ease: Power0.easeIn}, 'section-2-animation-2')
                .from(`.${classesSection2['block-2']}`, {duration: 1, opacity: .2, ease: Power0.easeIn}, 'section-2-animation-2')
                .from(`.${classesSection2['line-1']} .${classesSection2.inner}`, {duration: 1, width: 0, ease: Power0.easeIn}, 'section-2-animation-2')
                .to(`.${classesSection2['orange-stick-1']}`, {duration: 1, x: 14 * BASE_FONT_SIZE, y: 10 * BASE_FONT_SIZE, rotate: -56, ease: Power0.easeIn}, 'section-2-animation-2')
                .to(`.${classesSection2['green-stick-1']}`, {duration: 1, x: -12 * BASE_FONT_SIZE, y: -22 * BASE_FONT_SIZE, rotate: -25, ease: Power0.easeIn}, 'section-2-animation-2')

                .add('section-3-animation')
                .to(`.${classesSection2['section-2']}`, {duration: 1.2, delay: .35, y: -110 * VH, ease: Power0.easeIn}, 'section-3-animation')
                .from(`.${classesSection2['line-2']} .${classesSection2.inner}`, {duration: 1.2, delay: .15, width: 0, ease: Power0.easeIn}, 'section-3-animation')
                .from(`.${classesSection3.content}`, {duration: 1.2, delay: .35, y: 50 * VH, ease: Power0.easeIn}, 'section-3-animation')
                .from(`.${classesSection3.watch}`, {duration: 1.2, delay: .35, y: 50 * VH, ease: Power0.easeIn}, 'section-3-animation')

                .add('section-3-animation-2')
                .fromTo(`.${classesSection3.watch} .${classesSection3.inner}`, 
                    {duration: .9, scale: .7},
                    {duration: .9, scale: 1.1},
                'section-3-animation-2')
                .fromTo(`.${classesSection3['arrow-minutes']}`, 
                    {duration: .9, rotate: -31}, 
                    {duration: .9, rotate: 360}, 
                'section-3-animation-2')
                .fromTo(`.${classesSection3['arrow-hours']}`, 
                    {duration: .9, rotate: 238}, 
                    {duration: .9, rotate: 270}, 
                'section-3-animation-2')
                // .from(`.${classesSection3.shadow}`, {duration: .9, opacity: 0, ease: Power0.easeIn}, 'section-3-animation-2')
                .from(`.${classesSection3['orange-stick-1']}`, {duration: .9, x: -50 * BASE_FONT_SIZE, y: 50 * BASE_FONT_SIZE, rotate: -70, ease: Power0.easeIn}, 'section-3-animation-2')
                .from(`.${classesSection3['green-stick-1']}`, {duration: .9, x: -50 * BASE_FONT_SIZE, y: 50 * BASE_FONT_SIZE, rotate: -53, ease: Power0.easeIn}, 'section-3-animation-2')
                .from(`.${classesSection3['green-stick-2']}`, {duration: .9, x: -50 * BASE_FONT_SIZE, y: -50 * BASE_FONT_SIZE, rotate: 43, ease: Power0.easeIn}, 'section-3-animation-2')
                .from(`.${classesSection3['orange-stick-2']}`, {duration: .9, x: 50 * BASE_FONT_SIZE, y: 50 * BASE_FONT_SIZE, rotate: -160, ease: Power0.easeIn}, 'section-3-animation-2')
                .from(`.${classesSection3['green-stick-3']}`, {duration: .9, x: 50 * BASE_FONT_SIZE, y: 50 * BASE_FONT_SIZE, rotate: 43, ease: Power0.easeIn}, 'section-3-animation-2')

                .add('section-3-animation-3')
                .to(`.${classesSection3.watch} .${classesSection3.inner}`, {duration: .8, scale: 1, ease: Power0.easeIn}, 'section-3-animation-3')
                .to(`.${classesSection3.watch}`, {duration: .8, top: '25%', ease: Power0.easeIn}, 'section-3-animation-3')
                // .to(`.${classesSection3.shadow}`, {duration: .8, opacity: 0, ease: Power0.easeIn}, 'section-3-animation-3')
                .from(`.${classesSection3.info}`, {duration: .8, y: 100 * VH, ease: Power0.easeIn}, 'section-3-animation-3')
                .to(`.${classesSection3['orange-stick-1']}`, {duration: .8, x: -20 * BASE_FONT_SIZE, y: -100 * BASE_FONT_SIZE, rotate: 15, ease: Power0.easeIn}, 'section-3-animation-3')
                .to(`.${classesSection3['green-stick-1']}`, {duration: .8, x: -10 * BASE_FONT_SIZE, y: -90 * VH, rotate: 56, ease: Power0.easeIn}, 'section-3-animation-3')
                .to(`.${classesSection3['green-stick-2']}`, {duration: .8, x: -10 * BASE_FONT_SIZE, y: -50 * VH, rotate: 47, ease: Power0.easeIn}, 'section-3-animation-3')
                .to(`.${classesSection3['orange-stick-2']}`, {duration: .8, x: -5 * BASE_FONT_SIZE, y: -17 * BASE_FONT_SIZE, rotate: -200, ease: Power0.easeIn}, 'section-3-animation-3')
                .to(`.${classesSection3['green-stick-3']}`, {duration: .8, x: 0 * BASE_FONT_SIZE, y: -15 * BASE_FONT_SIZE, rotate: -5, ease: Power0.easeIn}, 'section-3-animation-3')

                .add('section-3-animation-4')
                .from(`.${classesSection4['section-4']}`, {duration: 1.2, y: 110 * VH, ease: Power0.easeIn}, 'section-3-animation-4+=.35')
                .to(`.${classesSection3['inner-container']}`, {duration: 1.2, y: -100 * VH, ease: Power0.easeIn}, 'section-3-animation-4+=.35')
                .to(`.${classesSection3.info}`, {duration: 1.2, y: 10 * VH, ease: Power0.easeIn}, 'section-3-animation-4+=.35')
                .to(`.${classesSection3['orange-stick-1']}`, {duration: 1.2, x: -50 * BASE_FONT_SIZE, y: -120 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-3-animation-4+=.35')
                .to(`.${classesSection3['green-stick-1']}`, {duration: 1.2, x: -20 * BASE_FONT_SIZE, y: -110 * VH, ease: Power0.easeIn}, 'section-3-animation-4+=.35')
                .to(`.${classesSection3['green-stick-2']}`, {duration: 1.2, x: -20 * BASE_FONT_SIZE, y: -70 * VH, ease: Power0.easeIn}, 'section-3-animation-4+=.35')
                .to(`.${classesSection3['orange-stick-2']}`, {duration: 1.2, x: 30 * BASE_FONT_SIZE, y: -40 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-3-animation-4+=.35')
                .to(`.${classesSection3['green-stick-3']}`, {duration: 1.2, x: 30 * BASE_FONT_SIZE, y: -25 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-3-animation-4+=.35')
                .from(`.button-up`, {duration: 1.2, autoAlpha: 0, ease: Power0.easeIn}, 'section-3-animation-4+=.35')

                .add('section-4-animation')
                .to(`.${classesProject['project-to-top']}`, {duration: 1, stagger: 1.2, delay: .25, y: -110 * VH, ease: Power0.easeIn}, 'section-4-animation')
                .to(`.${classesProject['project-to-top']} .${classesProject.cover}`, {duration: 1, stagger: 1.2, delay: .25, height: 26 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-4-animation')
                .to(`.${classesProject['project-to-top']} .${classesProject.info}`, {duration: 1, stagger: 1.2, delay: .25, y: -30 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-4-animation')
                .to(`.${classesSection4['title-to-top']}`, {duration: 1, stagger: 1.2, delay: .25, y: 18 * BASE_FONT_SIZE, textShadow: '0px 0px 0px rgba(0, 0, 0, 0)', ease: Power0.easeIn}, 'section-4-animation')
                .to(`.${classesSection4['index-to-top']}`, {duration: 1, stagger: 1.2, delay: .25, autoAlpha: 0, ease: Power0.easeIn}, 'section-4-animation')
                .to(`.${classesButtonProject['button-project-to-top']}`, {duration: 1, stagger: 1.2, delay: .25, height: 5, backgroundColor: '#2D2D2D', width: '80%', ease: Power0.easeIn}, 'section-4-animation')
                .from(`.${classesProject['project-from-bottom']}`, {duration: 1, stagger: 1.2, delay: .2, y: 110 * VH, ease: Power0.easeIn}, 'section-4-animation')
                .from(`.${classesProject['project-from-bottom']} .${classesProject.cover}`, {duration: 1, stagger: 1.2, delay: .2, height: 26 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-4-animation')
                .from(`.${classesProject['project-from-bottom']} .${classesProject.info}`, {duration: 1, stagger: 1.2, delay: .2, y: -30 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-4-animation')
                .fromTo(`.${classesProject['project-from-bottom']} .${classesProject.cover} img`, 
                    {duration: .8, delay: .4, stagger: 1.2, filter: 'brightness(20%) blur(5px) grayscale(1)'},
                    {duration: .8, delay: .4, stagger: 1.2, filter: 'brightness(100%) blur(0px) grayscale(0)'},
                'section-4-animation')
                .from(`.${classesSection4['title-from-bottom']}`, {duration: 1, stagger: 1.2, delay: .2, y: -18 * BASE_FONT_SIZE, textShadow: '0px 0px 0px rgba(0, 0, 0, 0)', ease: Power0.easeIn}, 'section-4-animation')
                .from(`.${classesSection4['index-from-bottom']}`, {duration: 1, stagger: 1.2, delay: .2, autoAlpha: 0, ease: Power0.easeIn}, 'section-4-animation')
                .to(`.${classesButtonProject['button-project']}`, {duration: 1, stagger: 1.2, delay: .2, height: 6, backgroundColor: '#D9D9D9', width: '100%', ease: Power0.easeIn}, 'section-4-animation-=1.2')

            } else {

                // timeline
                // .add('section-1-animation')
                // .to(`.${classesSection1['section-1']}`, {duration: 1, backgroundColor: '#141319', ease: 'linear'}, 'section-1-animation')
                // .from(`.${classesSection1.description}`, {duration: 1, y: 80 * VH, scale: .8, ease: 'linear'}, 'section-1-animation')
                // // .to(`.${classesSection1.dollar} img`, {duration: 1, x: 27 * BASE_FONT_SIZE, y: 1 * BASE_FONT_SIZE, scale: 1.8, rotate: 14, ease: 'linear'}, 'section-1-animation')
                // .to(`.${classesSection1.dollar} img`, {duration: 1, x: 37 * BASE_FONT_SIZE, y: 4 * BASE_FONT_SIZE, scale: 1.8, rotate: 14, ease: 'linear'}, 'section-1-animation')
                // .to(`.${classesSection1.stands} .${classesSection1.inner}`, {duration: 1, y: 15 * BASE_FONT_SIZE, scale: 1.2, ease: 'linear'}, 'section-1-animation')
                // .fromTo(`.${classesSection1.stands} .${classesSection1.inner}`, 
                //     {duration: 1, filter: 'brightness(90%)'},
                //     {duration: 1, filter: 'brightness(140%)'},
                // 'section-1-animation')
                // .from(`.${classesSection1['orange-stick-1']}`, {duration: 1, x: -23 * BASE_FONT_SIZE, y: 45 * BASE_FONT_SIZE, rotate: 63, ease: 'linear'}, 'section-1-animation')
                // .from(`.${classesSection1['green-stick-1']}`, {duration: 1, x: -23 * BASE_FONT_SIZE, y: 23 * BASE_FONT_SIZE, rotate: -80, ease: 'linear'}, 'section-1-animation')
                // .from(`.${classesSection1['orange-stick-3']}`, {duration: 1, x: -23 * BASE_FONT_SIZE, y: -23 * BASE_FONT_SIZE, rotate: 53, ease: 'linear'}, 'section-1-animation')
                // .from(`.${classesSection1['green-stick-2']}`, {duration: 1, x: 23 * BASE_FONT_SIZE, y: -23 * BASE_FONT_SIZE, rotate: 63, ease: 'linear'}, 'section-1-animation')

                // .add('section-2-animation')
                // .from(`.${classesSection2['section-2']}`, {duration: 1.2, y: 120 * VH, ease: 'linear'}, 'section-2-animation+=.35')
                // .from(`.${classesSection2['orange-stick-1']}`, {duration: 1.2, x: 60 * BASE_FONT_SIZE, y: 10 * BASE_FONT_SIZE, rotate: -40, ease: 'linear'}, 'section-2-animation+=.15')
                // .from(`.${classesSection2['green-stick-1']}`, {duration: 1.2, x: 60 * BASE_FONT_SIZE, y: 10 * BASE_FONT_SIZE, rotate: -14, ease: 'linear'}, 'section-2-animation+=.15')
                // .to(`.${classesSection1.info}`, {duration: 1.2, y: -60 * VH, ease: 'linear'}, 'section-2-animation+=.15')
                // .to(`.${classesSection1['orange-stick-3']}`, {duration: 1.2, y: -29 * BASE_FONT_SIZE, ease: 'linear'}, 'section-2-animation+=.15')
                // .to(`.${classesSection1['green-stick-2']}`, {duration: 1.2, y: -29 * BASE_FONT_SIZE, ease: 'linear'}, 'section-2-animation+=.15')

                timeline
                .add('section-1-animation')
                .to(`.${classesSection1['section-1']}`, {duration: 0, backgroundColor: '#141319', ease: 'linear'}, 'section-1-animation')
                .from(`.${classesSection1.description}`, {duration: 0, y: 80 * VH, scale: .8, ease: 'linear'}, 'section-1-animation')
                // .to(`.${classesSection1.dollar} img`, {duration: 0, x: 37 * BASE_FONT_SIZE, y: 4 * BASE_FONT_SIZE, scale: 1.8, rotate: 14, ease: 'linear'}, 'section-1-animation')
                .to(`.${classesSection1.stands} .${classesSection1.inner}`, {duration: 0, y: 15 * BASE_FONT_SIZE, scale: 1.2, ease: 'linear'}, 'section-1-animation')
                .fromTo(`.${classesSection1.stands} .${classesSection1.inner}`, 
                    {duration: 0, filter: 'brightness(90%)'},
                    {duration: 0, filter: 'brightness(140%)'},
                'section-1-animation')
                .from(`.${classesSection1['orange-stick-1']}`, {duration: 0, x: -23 * BASE_FONT_SIZE, y: 45 * BASE_FONT_SIZE, rotate: 63, ease: 'linear'}, 'section-1-animation')
                .from(`.${classesSection1['green-stick-1']}`, {duration: 0, x: -23 * BASE_FONT_SIZE, y: 23 * BASE_FONT_SIZE, rotate: -80, ease: 'linear'}, 'section-1-animation')
                .from(`.${classesSection1['orange-stick-3']}`, {duration: 0, x: -23 * BASE_FONT_SIZE, y: -23 * BASE_FONT_SIZE, rotate: 53, ease: 'linear'}, 'section-1-animation')
                .from(`.${classesSection1['green-stick-2']}`, {duration: 0, x: 23 * BASE_FONT_SIZE, y: -23 * BASE_FONT_SIZE, rotate: 63, ease: 'linear'}, 'section-1-animation')

                .add('section-2-animation')
                .from(`.${classesSection2['section-2']}`, {duration: 1.2, y: 120 * VH, ease: 'linear'}, 'section-2-animation')
                .from(`.${classesSection2['orange-stick-1']}`, {duration: 1.2, x: 60 * BASE_FONT_SIZE, y: 10 * BASE_FONT_SIZE, rotate: -40, ease: 'linear'}, 'section-2-animation')
                .from(`.${classesSection2['green-stick-1']}`, {duration: 1.2, x: 60 * BASE_FONT_SIZE, y: 10 * BASE_FONT_SIZE, rotate: -14, ease: 'linear'}, 'section-2-animation')
                .to(`.${classesSection1.info}`, {duration: 1.2, y: -80 * VH, ease: 'linear'}, 'section-2-animation')
                .to(`.${classesSection1['orange-stick-3']}`, {duration: 1.2, y: -29 * BASE_FONT_SIZE, ease: 'linear'}, 'section-2-animation')
                .to(`.${classesSection1['green-stick-2']}`, {duration: 1.2, y: -29 * BASE_FONT_SIZE, ease: 'linear'}, 'section-2-animation')

                .add('section-2-animation-2')
                .to(`.${classesSection1['section-1']}`, {duration: .4, autoAlpha: 0, ease: 'linear'}, 'section-2-animation-2')
                .from(`.${classesSection3['section-3']}`, {duration: .4, autoAlpha: 0, ease: 'linear'}, 'section-2-animation-2')
                .to(`.${classesSection2['info-block-1']}`, {duration: 1, opacity: .3, x: -320 - 30 * VW, ease: 'linear'}, 'section-2-animation-2')
                .from(`.${classesSection2['info-block-2']}`, {duration: 1, opacity: .3, x: 110 * VW, ease: 'linear'}, 'section-2-animation-2')
                .to(`.${classesSection2.timeline}`, {duration: 1, x: -220 * VW * .5, ease: 'linear'}, 'section-2-animation-2')
                .to(`.${classesSection2['block-1']}`, {duration: 1, opacity: .2, ease: 'linear'}, 'section-2-animation-2')
                .from(`.${classesSection2['block-2']}`, {duration: 1, opacity: .2, ease: 'linear'}, 'section-2-animation-2')
                .from(`.${classesSection2['line-1']} .${classesSection2.inner}`, {duration: 1, width: 0, ease: 'linear'}, 'section-2-animation-2')
                .to(`.${classesSection2['orange-stick-1']}`, {duration: 1, x: -14 * BASE_FONT_SIZE, y: 20 * BASE_FONT_SIZE, rotate: 37, ease: 'linear'}, 'section-2-animation-2')
                .to(`.${classesSection2['green-stick-1']}`, {duration: 1, x: -12 * BASE_FONT_SIZE, y: 10 * BASE_FONT_SIZE, rotate: 33, ease: 'linear'}, 'section-2-animation-2')

                .add('section-3-animation')
                .to(`.${classesSection2['section-2']}`, {duration: 1.2, delay: .15, y: -120 * VH, ease: 'linear'}, 'section-3-animation')
                .from(`.${classesSection2['line-2']} .${classesSection2.inner}`, {duration: 1.2, delay: .15, width: 0, ease: 'linear'}, 'section-3-animation')
                .from(`.${classesSection3.content}`, {duration: 1.2, delay: .15, y: 50 * VH, ease: 'linear'}, 'section-3-animation')
                .from(`.${classesSection3.watch}`, {duration: 1.2, delay: .125, y: 50 * VH, ease: 'linear'}, 'section-3-animation')

                .add('section-3-animation-2')
                .fromTo(`.${classesSection3.watch} .${classesSection3.inner}`, 
                    {duration: .9, scale: .9},
                    {duration: .9, scale: 1.1},
                'section-3-animation-2')
                .fromTo(`.${classesSection3['arrow-minutes']}`, 
                    {duration: .9, rotate: -31}, 
                    {duration: .9, rotate: 360}, 
                'section-3-animation-2')
                .fromTo(`.${classesSection3['arrow-hours']}`, 
                    {duration: .9, rotate: 238}, 
                    {duration: .9, rotate: 270}, 
                'section-3-animation-2')
                // .from(`.${classesSection3.shadow}`, {duration: .9, opacity: 0, ease: 'linear'}, 'section-3-animation-2')

                .add('section-3-animation-3')
                .to(`.${classesSection3.watch} .${classesSection3.inner}`, {duration: .8, scale: .9, ease: 'linear'}, 'section-3-animation-3')
                .to(`.${classesSection3.watch}`, {duration: .8, top: '28%', ease: 'linear'}, 'section-3-animation-3')
                // .to(`.${classesSection3.shadow}`, {duration: .8, opacity: 0, ease: 'linear'}, 'section-3-animation-3')
                .from(`.${classesSection3.info}`, {duration: .8, y: 100 * VH, ease: 'linear'}, 'section-3-animation-3')
                .from(`.${classesSection3['orange-stick-1']}`, {duration: .8, x: 50 * BASE_FONT_SIZE, y: 40 * BASE_FONT_SIZE, rotate: 60, ease: 'linear'}, 'section-3-animation-3')
                .from(`.${classesSection3['orange-stick-2']}`, {duration: .8, x: -30 * BASE_FONT_SIZE, y: -40 * BASE_FONT_SIZE, rotate: 50, ease: 'linear'}, 'section-3-animation-3')
                .from(`.${classesSection3['green-stick-3']}`, {duration: .8, x: 30 * BASE_FONT_SIZE, y: -40 * BASE_FONT_SIZE, rotate: -55, ease: 'linear'}, 'section-3-animation-3')

                .add('section-3-animation-4')
                .from(`.${classesSection4['section-4']}`, {duration: 1.2, y: 120 * VH, ease: 'linear'}, 'section-3-animation-4+=.15')
                .to(`.${classesSection3['inner-container']}`, {duration: 1.2, y: -100 * VH, ease: 'linear'}, 'section-3-animation-4+=.15')
                .to(`.${classesSection3.info}`, {duration: 1.2, y: 10 * VH, ease: Power0.easeIn}, 'section-3-animation-4+=.15')
                .to(`.${classesSection3['orange-stick-1']}`, {duration: 1.2, x: 50 * BASE_FONT_SIZE, y: 40 * BASE_FONT_SIZE, ease: 'linear'}, 'section-3-animation-4+=.15')
                .to(`.${classesSection3['orange-stick-2']}`, {duration: 1.2, x: -30 * BASE_FONT_SIZE, y: -40 * BASE_FONT_SIZE, ease: 'linear'}, 'section-3-animation-4+=.15')
                .to(`.${classesSection3['green-stick-3']}`, {duration: 1.2, x: 30 * BASE_FONT_SIZE, y: -25 * BASE_FONT_SIZE, ease: 'linear'}, 'section-3-animation-4+=.15')
                .from(`.button-up`, {duration: 1.2, autoAlpha: 0, ease: 'linear'}, 'section-3-animation-4+=.15')

                .add('section-4-animation')
                .to(`.${classesProject['project-to-top']}`, {duration: .5, stagger: 1.15, delay: .2, opacity: .1, ease: Power0.easeIn}, 'section-4-animation')
                .to(`.${classesProject['project-to-top']}`, {duration: 1, stagger: 1.15, delay: .2, y: -110 * VH, ease: Power0.easeIn}, 'section-4-animation')
                .to(`.${classesProject['project-to-top']} .${classesProject.info}`, {duration: 1, stagger: 1.15, delay: .2, opacity: .2, y: -35 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-4-animation')
                .to(`.${classesProject['project-to-top']} .${classesProject.cover}`, {duration: 1, stagger: 1.15, delay: .2, height: 26 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-4-animation')
                .fromTo(`.${classesProject['project-to-top']} .${classesProject.cover} img`, 
                    {duration: .8, delay: .2, stagger: 1.15, filter: 'brightness(100%) grayscale(0)'},
                    {duration: .8, delay: .2, stagger: 1.15, filter: 'brightness(20%) grayscale(1)'},
                'section-4-animation')
                .to(`.${classesSection4['title-to-top']}`, {duration: 1, stagger: 1.15, delay: .2, y: 120, textShadow: '0px 0px 0px rgba(0, 0, 0, 0)', ease: Power0.easeIn}, 'section-4-animation')
                .to(`.${classesSection4['index-to-top']}`, {duration: 1, stagger: 1.15, delay: .2, autoAlpha: 0, ease: Power0.easeIn}, 'section-4-animation')
                .to(`.${classesButtonProject['button-project-to-top']}`, {duration: 1, stagger: 1.15, delay: .2, height: 5, backgroundColor: '#2D2D2D', width: '80%', ease: Power0.easeIn}, 'section-4-animation')
                .from(`.${classesProject['project-from-bottom']}`, {duration: 1, stagger: 1.15, delay: .15, y: 110 * VH, ease: Power0.easeIn}, 'section-4-animation')
                .from(`.${classesProject['project-from-bottom']} .${classesProject.info}`, {duration: 1, stagger: 1.15, delay: .15, opacity: .2, y: -35 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-4-animation')
                .from(`.${classesProject['project-from-bottom']} .${classesProject.cover}`, {duration: 1, stagger: 1.15, delay: .15, height: 26 * BASE_FONT_SIZE, ease: Power0.easeIn}, 'section-4-animation')
                .fromTo(`.${classesProject['project-from-bottom']} .${classesProject.cover} img`, 
                    {duration: .8, delay: .35, stagger: 1.15, filter: 'brightness(20%) blur(0px) grayscale(1)'},
                    {duration: .8, delay: .35, stagger: 1.15, filter: 'brightness(100%) blur(0px) grayscale(0)'},
                'section-4-animation')
                .from(`.${classesSection4['title-from-bottom']}`, {duration: 1, stagger: 1.15, delay: .15, y: -120, textShadow: '0px 0px 0px rgba(0, 0, 0, 0)', ease: Power0.easeIn}, 'section-4-animation')
                .from(`.${classesSection4['index-from-bottom']}`, {duration: 1, stagger: 1.15, delay: .15, autoAlpha: 0, ease: Power0.easeIn}, 'section-4-animation')
                .to(`.${classesButtonProject['button-project']}`, {duration: 1, stagger: 1.15, delay: .15, height: 6, backgroundColor: '#D9D9D9', width: '100%', ease: Power0.easeIn}, 'section-4-animation-=1.2')

            }
        });
    };

    useEffect(() => {
        linksPreventDefault();
        checkIsMobile();
        initAnimation();

        initialWindowWidth = window.innerWidth;

        // ADD WINDOW EVENT LISTENER
        window.addEventListener('resize', handleResize);

        return () => {
            ctx.revert();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={classes['page-landing']}>
            <Preloader />
            <Header />
            <div className={`${classes['animation-block']} animation-block`}>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </div>
            <Footer />
            <button onClick={scrollToTop} className='button-up'>
                <img src="/static/svg/arrow.svg" alt="" />
            </button>
        </div>
    )
}
