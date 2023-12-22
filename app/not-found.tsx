'use client';

import Header from '@/components/Singular/App/Header';
import classes from '@/styles/pagesStyles/error.module.scss';
import Link from 'next/link';

export default function NotFound() {
    const goBack = () => {
      window.history.back();
    };
    
    return (
        <div className={classes['page-error']}>
            <Header />
            <div className={classes['inner-container']}>
                <div className={classes.info}>
                    <h1 className={classes.title}>Something went wrong.</h1>
                    <p className={classes.description}>Try to re-visit the site</p>
                    {/* <a href='https://t.me/aleksys228' target='_blank' className={classes.button + ' button-yellow'}>
                        <div className={classes.inner + ' inner'}>Contact</div>
                    </a> */}
                    {/* <Link href='/' className={classes.button + ' button-yellow'}>
                        <div className={classes.inner + ' inner'}>Back</div>
                    </Link> */}
                    <button onClick={goBack} className={classes.button + ' button-yellow'}>
                        <div className={classes.inner + ' inner'}>Back</div>
                    </button>
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