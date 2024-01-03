import classes from '@/styles/componentsStyles/Landing/section3.module.scss';

export default function Section3() {

    return (
        <section className={`${classes['section-3']} section`}>
            <div className={classes['inner-container']}>
                <div className={classes.watch}>
                    <div className={classes.inner}>
                        <img src="/static/img/Landing/watch.png" alt="" />
                        {/* <div className={classes.shadow}></div> */}
                        <img src="/static/svg/Landing/watchArrow.svg" alt="" className={`${classes.arrow} ${classes['arrow-minutes']}`} />
                        <img src="/static/svg/Landing/watchArrow.svg" alt="" className={`${classes.arrow} ${classes['arrow-hours']}`} />
                    </div>
                </div>
                <div className={classes.info}>
                    <strong className={classes['big-description']}>
                        Delivering Results
                    </strong>
                    <p className={classes.description}>
                        From freelancing to my current role, I've brought designs to life and delivered 
                        over 10 diverse projects. My work isn't just about coding; it's about making 
                        websites that meet unique business needs. Whether it's a simple landing page or 
                        a complex online shop, I focus on results. Using tools like Git, I ensure smooth 
                        collaboration, and the end result goes beyond expectations, ensuring a positive user experience.
                    </p>
                </div>
            </div>
            <div className={`${classes['orange-stick-1']} ${classes.stick}`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['orange-stick-2']} ${classes.stick}`}>
                <img src="/static/img/Landing/orangeStick.png" alt="" />
            </div>
            <div className={`${classes['green-stick-1']} ${classes.stick} desktop`}>
                <img src="/static/img/Landing/greenStick.png" alt="" />
            </div>
            <div className={`${classes['green-stick-2']} ${classes.stick} desktop`}>
                <img src="/static/img/Landing/greenStick.png" alt="" />
            </div>
            <div className={`${classes['green-stick-3']} ${classes.stick}`}>
                <img src="/static/img/Landing/greenStick.png" alt="" />
            </div>
        </section>
    )
}