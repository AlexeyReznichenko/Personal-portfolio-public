import { isTouchDevice } from '@/store';
import classes from '@/styles/componentsStyles/Landing/buttonProject.module.scss';
import Image from 'next/image';

interface Props {
    index: number;
    projectsAmount: number;
}

export default function ButtonProject({ index, projectsAmount }: Props) {

    // SCROLL TO SELECTED PROJECT
    const scrollToProject = (index: number): void => {
        const pinSpacer = document.querySelector(`.pin-spacer`) as HTMLDivElement;

        if (!pinSpacer) return;

        if (window.innerWidth > 850 && isTouchDevice()) {
            scrollTo(0, 3220 + (530 * index));
            return;
        }

        if (window.innerWidth > 850 && !isTouchDevice()) {
            scrollTo(0, pinSpacer.clientHeight * (.327 + (.0535 * index)));
        }
    };

    return (
        <button 
            onClick={() => scrollToProject(index)} 
            className={`
            ${classes['button-project']} 
            ${index + 1 !== projectsAmount ? classes['button-project-to-top'] : ''}
        `}></button>
    )
}