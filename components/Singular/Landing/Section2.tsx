import classes from '@/styles/componentsStyles/Landing/section2.module.scss';

export default function Section2() {

    return (
        <section className={classes['section-2'] + ' section'}>
            <div className={classes['inner-container']}>
                <div className={classes.content}>
                    <strong className={classes['big-description']}>
                        Skills and Experience
                    </strong>
                    <span className={classes.word}>My portfolio</span>
                    <div className={classes['info-blocks']}>
                        <div className={`${classes['info-block']} ${classes['info-block-1']}`}>
                            <strong className={classes.subtitle}>Frontend Technologies</strong>
                            <p className={classes.description}>
                                Skilled in HTML, CSS, Sass, JavaScript and TypeScript with a solid foundation. 
                                Experienced in frameworks like Vue.js, React, Nuxt.js and Next.js, contributing 
                                to the development of dynamic and responsive web applications.
                            </p>
                        </div>
                        <div className={`${classes['info-block']} ${classes['info-block-2']}`}>
                            <strong className={classes.subtitle}>Git and Teamwork</strong>
                            <p className={classes.description}>
                                Extensive experience with Git, using it to collaborate effectively and manage code.
                                I ensure smooth teamwork, contributing to the success of each project.
                            </p>
                        </div>
                    </div>
                    <div className={classes.timeline}>
                        <div className={`${classes.block} ${classes['block-1']}`}>
                            <div className={classes.inner}></div>
                        </div>
                        <div className={`${classes.line} ${classes['line-1']}`}>
                            <div className={classes.inner}></div>
                        </div>
                        <div className={`${classes.block} ${classes['block-2']}`}>
                            <div className={classes.inner}></div>
                        </div>
                        <div className={`${classes.line} ${classes['line-2']}`}>
                            <div className={classes.inner}></div>
                        </div>
                        <div className={`${classes.block} ${classes['block-3']}`}>
                            <div className={classes.inner}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes['orange-stick-1']} ${classes.stick}`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['green-stick-1']} ${classes.stick}`}>
                <img src="/static/img/Landing/greenStick.png" alt="" />
            </div>
        </section>
    )
}