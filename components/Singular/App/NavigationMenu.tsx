import { baseActions, selectMobileNavOpenedIndicator } from '@/store/baseSlice';
import classes from '@/styles/componentsStyles/App/navigationMenu.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
    scrollToSection: Function;
}

export default function NavigationMenu({ scrollToSection }: Props) {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const mobileNavOpenedIndicator = useSelector(selectMobileNavOpenedIndicator);

    // CLOSE MENU ON PAGE CHANGE
    useEffect(() => {
        dispatch(baseActions.closeMobileNavOpenedIndicator());
    }, [pathname]);

    return (
        <div className={`${classes['navigation-menu']} mobile ${(!mobileNavOpenedIndicator ? classes['menu-closed'] : '')}`}>
            <div className={classes['inner-container']}>
                <nav className={classes.navigation}>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <span className={classes.subtitle}>Navigation</span>
                    </li>
                    <li className={classes.item}>
                        <button onClick={() => scrollToSection('portfolio')} className={classes.link}>Portfolio</button>
                    </li>
                    <li className={classes.item}>
                        <button onClick={() => scrollToSection('about')} className={classes.link}>About me</button>
                    </li>
                    <li className={classes.item}>
                        <Link href='/faq' className={classes.link}>FAQ</Link>
                    </li>
                </ul>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <span className={classes.subtitle}>Contacts</span>
                    </li>
                    <li className={classes.item}>
                        <a 
                            href='https://t.me/aleksys228' 
                            target='_blank' 
                            className={classes.link}>
                            Telegram
                        </a>
                    </li>
                    <li className={classes.item}>
                        <a 
                         href='https://drive.google.com/file/d/1X3XHCpJ2lOlGTHEvFdZYJM1leNuKa6Ic/view?usp=sharing' 
                         target='_blank' 
                         className={classes.link}>
                            CV | Resume
                        </a>
                    </li>
                    <li className={classes.item}>
                        <a 
                         href='https://github.com/AlexeyReznichenko' 
                         target='_blank' 
                         className={classes.link}>
                            GitHub
                        </a>
                    </li>
                </ul>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <span className={classes.subtitle}>Stores</span>
                    </li>
                    <li className={classes.item}>
                        <button onClick={() => scrollToSection('sms')} className={classes.link}>QuickSms</button>
                    </li>
                    <li className={classes.item}>
                        <button onClick={() => scrollToSection('invicta')} className={classes.link}>Invicta</button>
                    </li>
                </ul>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <span className={classes.subtitle}>Best animations</span>
                    </li>
                    <li className={classes.item}>
                        <button onClick={() => scrollToSection('portfolio')} className={classes.link}>TonMainers</button>
                    </li>
                    <li className={classes.item}>
                        <button onClick={() => scrollToSection('earngames')} className={classes.link}>EarnGames</button>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    )
}