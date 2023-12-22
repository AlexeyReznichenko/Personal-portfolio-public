import classes from '@/styles/componentsStyles/footer.module.scss';
import Link from 'next/link';


export default function Footer() {

    return (
        <>
            <div className={classes['button-container']}>
                <span className={classes.subtitle}>Looking for a professional solution?</span>
                <a href='https://www.linkedin.com/in/oleksiireznichenko' target='_blank' className={classes['big-link']}>
                    <strong>Let’s start a project</strong>
                    <img src="/static/svg/arrowAngle.svg" alt="" className={classes.arrow} />
                </a>
            </div>
            <footer className={classes.footer}>
                <div className={classes['inner-container']}>
                    <div className={classes.left}>
                        <img src="/logo.svg " alt="" className={classes.logo} />
                        <nav className={classes.navigation}>
                            <ul className={classes.list}>
                                <li className={classes.item}>
                                    <span className={classes.subtitle}>Contact me</span>
                                </li>
                                <li className={classes.item}>
                                    <a href='https://t.me/aleksys228' target='_blank' className={classes.link}>Telegram</a>
                                </li>
                                <li className={classes.item}>
                                    <a href='https://www.linkedin.com/in/oleksiireznichenko' target='_blank' className={classes.link}>LinkedIn</a>
                                </li>
                            </ul>
                            <ul className={`${classes.list} ${classes['list-2']}`}>
                                <li className={classes.item}>   
                                    <span className={classes.subtitle}>My expertise</span>
                                </li>
                                <li className={classes.item}>
                                    <a href='https://drive.google.com/file/d/1G4tUGzjNWNEdUP4cZXD4zO2kawuS5SzA/view?usp=sharing' target='_blank' className={classes.link}>CV | Resume</a>
                                </li>
                                <li className={classes.item}>
                                    <a href='https://github.com/AlexeyReznichenko' target='_blank' className={classes.link}>GitHub</a>
                                </li>
                            </ul>
                            <ul className={classes.list + ' desktop'}>
                                <li className={classes.item}>
                                    <span className={classes.subtitle}>© 2023 P2H Inc, All rights reserved.</span>
                                </li>
                                {/* <li className={classes.item}>
                                    <Link href='/faq' className={classes.link}>FAQ</Link>
                                </li> */}
                                <li className={classes.item}>
                                    <Link href='/tos' className={classes.link}>Terms of Service</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <ul className={classes.list + ' mobile'}>
                        <li className={classes.item}>
                            <span className={classes.subtitle}>© 2023 P2H Inc, All rights reserved.</span>
                        </li>
                        <li className={classes.item}>
                            <Link href='/tos' className={classes.link}>Terms of Service</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}