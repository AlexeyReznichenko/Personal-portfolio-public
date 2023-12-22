import { baseActions, selectMobileNavOpenedIndicator } from '@/store/baseSlice';
import classes from '@/styles/componentsStyles/navigationMenu.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
    scrollToPortfolioSection: Function;
    scrollToAboutSection: Function;
    scrollToQuickSmsSection: Function;
    scrollToInvictaSection: Function;
    scrollToEarngamesSection: Function;
}

export default function NavigationMenu({scrollToPortfolioSection, scrollToAboutSection, scrollToQuickSmsSection, scrollToInvictaSection, scrollToEarngamesSection}: Props) {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const mobileNavOpenedIndicator = useSelector(selectMobileNavOpenedIndicator);

    // CLOSE MENU ON PAGE CHANGE
    useEffect(() => {
        dispatch(baseActions.closeMobileNavOpenedIndicator());
    }, [pathname]);

    return (
        <div className={classes['navigation-menu'] + ' mobile ' + (!mobileNavOpenedIndicator ? classes['menu-closed'] : '')}>
            <div className={classes['inner-container']}>
                <nav className={classes.navigation}>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <span className={classes.subtitle}>Navigation</span>
                    </li>
                    <li className={classes.item}>
                        <button onClick={() => scrollToPortfolioSection()} className={classes.link}>Portfolio</button>
                    </li>
                    <li className={classes.item}>
                        <button onClick={() => scrollToAboutSection()} className={classes.link}>About me</button>
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
                        <a href='https://www.linkedin.com/in/oleksiireznichenko' target='_blank' className={classes.link}>LinkedIn</a>
                    </li>
                    <li className={classes.item}>
                        <a href='https://drive.google.com/file/d/1G4tUGzjNWNEdUP4cZXD4zO2kawuS5SzA/view?usp=sharing' target='_blank' className={classes.link}>CV | Resume</a>
                    </li>
                    <li className={classes.item}>
                        <a href='https://github.com/AlexeyReznichenko' target='_blank' className={classes.link}>GitHub</a>
                    </li>
                </ul>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <span className={classes.subtitle}>Stores</span>
                    </li>
                    <li className={classes.item}>
                        <button onClick={() => scrollToQuickSmsSection()} className={classes.link}>QuickSms</button>
                    </li>
                    <li className={classes.item}>
                        <button onClick={() => scrollToInvictaSection()} className={classes.link}>Invicta</button>
                    </li>
                </ul>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <span className={classes.subtitle}>Best animations</span>
                    </li>
                    <li className={classes.item}>
                        <button onClick={() => scrollToPortfolioSection()} className={classes.link}>TonMainers</button>
                    </li>
                    <li className={classes.item}>
                        <button onClick={() => scrollToEarngamesSection()} className={classes.link}>EarnGames</button>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    )
}