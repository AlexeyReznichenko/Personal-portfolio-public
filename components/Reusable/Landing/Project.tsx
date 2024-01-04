import classes from '@/styles/componentsStyles/Landing/project.module.scss';
import Image from 'next/image';

interface Props {
    id: number | string;
    name: string;
    cover: string;
    link: string;
    description: string;
    technologies: string;
    staff: string;
    timeSpent: string;
    index: number;
    projectsAmount: number;
}

export default function Project({ id, name, cover, link, description, technologies, staff, timeSpent, index, projectsAmount }: Props) {

    return (
        <div 
            className={`
            ${classes.project} 
            ${index + 1 !== projectsAmount ? classes['project-to-top'] : ''} 
            ${index !== 0 ? classes['project-from-bottom'] : ''}
        `}>
            <a href={link} target='_blank' className={classes.cover}>
                <Image quality={90} src={`/static/img/Projects/${cover}.jpg`} alt='' fill />
                <div className={`${classes['hover-cover']} desktop`}>
                    <span>Open Website</span>
                </div>
            </a>
            <div className={classes.info}>
                <div className={classes.left}>
                    <p className={classes.description}>
                        {description}
                    </p>
                    <div className={classes.block}>
                        <span className={classes.technologies}>{technologies}</span>
                        <span className={classes.staff}>{staff}</span>
                    </div>
                </div>
                <div className={classes.timeline}>
                    <div>
                        <span className={classes.subtitle}>Spent on the project</span>
                        <span className={classes.time}>{timeSpent}</span>
                    </div>
                    <img src="/static/svg/Landing/clock.svg" alt="" className={classes.clock} />
                </div>
                <a href={link} target='_blank' className={`${classes.button} mobile`}>
                    <div className={classes.inner}>Visit website</div>
                </a>
            </div>
        </div>
    )
}