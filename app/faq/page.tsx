"use client";

import classes from '@/styles/pagesStyles/faq.module.scss'
import Header from '@/components/Singular/App/Header';
import { slideDown, slideUp } from '@/utils/slideFunctions';
import Question from '@/components/Reusable/Faq/Question';

interface Question {
    id: number | string;
    question: string;
    answer?: string;
    answerList?: string[];
    answerListSkills?: string[];
    answerListYears?: string[];
}

const QUESTIONS: Question[] = [
    {
        id: 1,
        question: `What is your experience as a Frontend Web Developer?`,
        answer: `I have 3 years of experience as a Frontend Web Developer. During this time, I've focused 
        on making websites faster and more user-friendly, specializing in adding animations and 3D features.`
    },
    {
        id: 2,
        question: `What are your primary skills and the duration of your experience in each?`,
        answerListSkills: [
            'HTML:',
            'CSS:',
            'Sass:',
            'JavaScript:',
            'Vue.js:',
            'Nuxt.js:',
            'Git:',
            'TypeScript:',
            'React:',
            'Next.js:',
        ],
        answerListYears: [
            '3 years',
            '3 years',
            '3 years',
            '3 years',
            '2 years',
            '2 years',
            '2 years',
            '1 year',
            '1 year',
            '1 year',
        ],
    },
    {
        id: 3,
        question: `What is your current position and role?`,
        answer: `I am currently a Frontend Web Developer at Heavens.pro, where I have been working since 
        April 2021. I've successfully delivered over 10 projects, ranging from basic landing pages to complex 
        online shops.`
    },
    {
        id: 4,
        question: `What tools and technologies do you use in your current role?`,
        answer: `In my current role, I use Vue.js, React, and Next.js as core tools, combined with HTML, SCSS, 
        and TypeScript for effective development. Git is used for version control.`
    },
    {
        id: 5,
        question: `How do you ensure that your websites not only look impressive but also perform well?`,
        answer: `I emphasize performance optimization and enhancing the overall user experience. This ensures 
        that the websites operate smoothly, providing users with a positive and seamless interaction.`
    },
    {
        id: 6,
        question: `Do you stay updated on the latest trends in web development?`,
        answer: `I am always learning and staying updated on the latest trends in web development to ensure 
        that I bring the most current and effective solutions to my projects.`
    },
];

export default function Faq() {

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // TOGGLE SLIDES DONW AND UP
    const slideToggle = (target: HTMLElement, duration = 500) => {
        if (window.getComputedStyle(target).display === 'none') {
            slideDown(target, duration);
        } else {
            slideUp(target, duration);
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // TOGGLE EVENT FOR ANSWERS FOR QUESTIONS
    const toggleEvent = (event: React.MouseEvent): void => {
        const target = event.target as HTMLElement;
        const parent = target?.closest(`.question`);
        const toggleContainer = parent?.querySelector('.toggle-container') as HTMLElement;

        if (parent && toggleContainer && !parent.classList.contains('animating')) {
            const arrow = parent?.querySelector(`.arrow`);
            const headerLine = parent.querySelector(`.header-line`)!;

            let timeoutTime = 700;

            slideToggle(toggleContainer);

            if (arrow) {
                arrow.classList.toggle(`arrow-active`);
            }

            headerLine.classList.toggle('padding');
            parent.classList.add('animating');

            setTimeout(() => {
                parent.classList.remove('animating');
            }, timeoutTime);
        }
    };

    return (
        <div className={classes['page-faq']}>
            <Header />
            <div className={classes['inner-container']}>
                <div onClick={toggleEvent} className={classes.questions}>
                    {QUESTIONS.map((el, i) => {
                        return (
                            <Question
                                key={el.id}
                                question={el.question}
                                answer={el.answer}
                                answerList={el.answerList}
                                answerListSkills={el.answerListSkills}
                                answerListYears={el.answerListYears}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={`${classes['orange-stick-3']} ${classes.stick}`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['orange-stick-5']} ${classes.stick} desktop`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['green-stick-1']} ${classes.stick}`}>
                <img src="/static/img/Landing/greenStick.png" alt="" />
            </div>
            <div className={`${classes['green-stick-2']} ${classes.stick}`}>
                <img src="/static/img/Landing/greenStick.png" alt="" />
            </div>
        </div>
    )
}
