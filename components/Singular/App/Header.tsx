import { isTouchDevice } from '@/store';
import { baseActions, selectIsNavigationLinkAboutClicked, selectIsNavigationLinkEarngamesClicked, selectIsNavigationLinkInvictaClicked, selectIsNavigationLinkPortfolioClicked, selectIsNavigationLinkQuickSmsClicked, selectIsNavigationLinkTonmainersClicked, selectMobileNavOpenedIndicator } from '@/store/baseSlice';
import classes from '@/styles/componentsStyles/header.module.scss';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavigationMenu from './NavigationMenu';


export default function Header() {
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const mobileNavOpenedIndicator = useSelector(selectMobileNavOpenedIndicator);
    const isNavigationLinkPortfolioClicked = useSelector(selectIsNavigationLinkPortfolioClicked);
    const isNavigationLinkAboutClicked = useSelector(selectIsNavigationLinkAboutClicked);
    const isNavigationLinkQuickSmsClicked = useSelector(selectIsNavigationLinkQuickSmsClicked);
    const isNavigationLinkInvictaClicked = useSelector(selectIsNavigationLinkInvictaClicked);
    const isNavigationLinkTonmainersClicked = useSelector(selectIsNavigationLinkTonmainersClicked);
    const isNavigationLinkEarngamesClicked = useSelector(selectIsNavigationLinkEarngamesClicked);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // DISABLE PAGE SCROLLING IF NAVIGATION MENU IS OPENED
    useEffect(() => {
        const lockPaddingValue = window.innerWidth - document.body.offsetWidth + 'px';
        if (mobileNavOpenedIndicator) {
            document.getElementsByTagName('html')[0].style.overflow = 'hidden';
            document.body.style.paddingRight = lockPaddingValue;
        } else {
            document.getElementsByTagName('html')[0].style.overflow = 'auto';
            document.body.style.paddingRight = '0';
        }
    }, [mobileNavOpenedIndicator]);
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // TOGGLE MOBILE MENU
    const toggleNavMenu = (): void => {
        dispatch(baseActions.toggleMobileNavOpenedIndicator());
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SCROLL TO THE NEEDED SECTION FUNCTIONS
    const scrollToPortfolioSection = (): void => {
        const pinSpacer = document.querySelector(`.pin-spacer`) as HTMLDivElement;
        dispatch(baseActions.closeMobileNavOpenedIndicator());

        if (pathname === '/') {
            if (!pinSpacer) return;

            if (window.innerWidth < 850) {
                scrollTo(0, 4020);
            }

            if (window.innerWidth > 850 && isTouchDevice()) {
                scrollTo(0, 4060);
            }

            if (window.innerWidth > 850 && !isTouchDevice()) {
                scrollTo(0, pinSpacer.clientHeight * .377);
            }
        } else {
            router.push('/');
            setTimeout(() => {
                dispatch(baseActions.isNavigationLinkClicked({type: 'portfolio', value: true}));
            }, 3000);
        }
    };

    const scrollToAboutSection = (): void => {
        const pinSpacer = document.querySelector(`.pin-spacer`) as HTMLDivElement;
        dispatch(baseActions.closeMobileNavOpenedIndicator());

        if (pathname === '/') {
            if (!pinSpacer) return;

            if (window.innerWidth < 850) {
                scrollTo(0, 1217);
            }

            if (window.innerWidth > 850 && isTouchDevice()) {
                scrollTo(0, 1165);
            }

            if (window.innerWidth > 850 && !isTouchDevice()) {
                scrollTo(0, pinSpacer.clientHeight * .1085);
            }
        } else {
            router.push('/');
            setTimeout(() => {
                dispatch(baseActions.isNavigationLinkClicked({type: 'about', value: true}));
            }, 3000);
        }
    };

    const scrollToQuickSmsSection = (): void => {
        const pinSpacer = document.querySelector(`.pin-spacer`) as HTMLDivElement;
        dispatch(baseActions.closeMobileNavOpenedIndicator());

        if (pathname === '/') {
            if (!pinSpacer) return;

            if (window.innerWidth < 850) {
                scrollTo(0, 4020 + (535 * 1));
            }

            if (window.innerWidth > 850 && isTouchDevice()) {
                scrollTo(0, 4060 + (535 * 1));
            }

            if (window.innerWidth > 850 && !isTouchDevice()) {
                scrollTo(0, pinSpacer.clientHeight * (.377 + (.05 * 1)));
            }
        } else {
            router.push('/');
            setTimeout(() => {
                dispatch(baseActions.isNavigationLinkClicked({type: 'sms', value: true}));
            }, 3000);
        }
    };

    const scrollToInvictaSection = (): void => {
        const pinSpacer = document.querySelector(`.pin-spacer`) as HTMLDivElement;
        dispatch(baseActions.closeMobileNavOpenedIndicator());

        if (pathname === '/') {
            if (!pinSpacer) return;

            if (window.innerWidth < 850) {
                scrollTo(0, 4020 + (535 * 3));
            }

            if (window.innerWidth > 850 && isTouchDevice()) {
                scrollTo(0, 4060 + (535 * 3));
            }

            if (window.innerWidth > 850 && !isTouchDevice()) {
                scrollTo(0, pinSpacer.clientHeight * (.377 + (.05 * 3)));
            }
        } else {
            router.push('/');
            setTimeout(() => {
                dispatch(baseActions.isNavigationLinkClicked({type: 'invicta', value: true}));
            }, 3000);
        }
    };

    const scrollToEarngamesSection = (): void => {
        const pinSpacer = document.querySelector(`.pin-spacer`) as HTMLDivElement;
        dispatch(baseActions.closeMobileNavOpenedIndicator());

        if (pathname === '/') {
            if (!pinSpacer) return;

            if (window.innerWidth < 850) {
                scrollTo(0, 4020 + (535 * 5));
            }

            if (window.innerWidth > 850 && isTouchDevice()) {
                scrollTo(0, 4060 + (535 * 5));
            }

            if (window.innerWidth > 850 && !isTouchDevice()) {
                scrollTo(0, pinSpacer.clientHeight * (.377 + (.05 * 5)));
            }
        } else {
            router.push('/');
            setTimeout(() => {
                dispatch(baseActions.isNavigationLinkClicked({type: 'earngames', value: true}));
            }, 3000);
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHECK IF LINKS OF THE LANDING PAGE WERE CLICKED FROM A DIFFERENT PAGE
    useEffect(() => {
        
        setTimeout(() => {
            if (isNavigationLinkPortfolioClicked) {
                scrollToPortfolioSection();
                dispatch(baseActions.isNavigationLinkClicked({type: 'portfolio', value: false}));
            }
    
            if (isNavigationLinkAboutClicked) {
                scrollToAboutSection();
                dispatch(baseActions.isNavigationLinkClicked({type: 'about', value: false}));
            }
    
            if (isNavigationLinkQuickSmsClicked) {
                scrollToQuickSmsSection();
                dispatch(baseActions.isNavigationLinkClicked({type: 'sms', value: false}));
            }
    
            if (isNavigationLinkInvictaClicked) {
                scrollToInvictaSection();
                dispatch(baseActions.isNavigationLinkClicked({type: 'invicta', value: false}));
            }
    
            if (isNavigationLinkEarngamesClicked) {
                scrollToEarngamesSection();
                dispatch(baseActions.isNavigationLinkClicked({type: 'earngames', value: false}));
            }
        }, 200);
    }, [isNavigationLinkPortfolioClicked, isNavigationLinkAboutClicked, 
        isNavigationLinkQuickSmsClicked, isNavigationLinkInvictaClicked, 
        isNavigationLinkTonmainersClicked, isNavigationLinkEarngamesClicked]);

    return (
        <header className={classes.header + ' ' + (pathname !== '/' ? classes['header-not-fixed'] : '')}>
            <NavigationMenu 
            scrollToPortfolioSection={scrollToPortfolioSection}
            scrollToAboutSection={scrollToAboutSection}
            scrollToQuickSmsSection={scrollToQuickSmsSection}
            scrollToInvictaSection={scrollToInvictaSection}
            scrollToEarngamesSection={scrollToEarngamesSection}
            />
            <div className={classes['inner-container']}>
                <div className={classes.left}>
                    <Link href='/' className={classes.logo}>Oleksii</Link>
                    <nav className={`${classes.navigation} desktop`}>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                <span className={classes.subtitle}>Navigation</span>
                            </li>
                            <li className={classes.item}>
                                <button onClick={scrollToPortfolioSection} className={classes.link}>Portfolio</button>
                            </li>
                            <li className={classes.item}>
                                <button onClick={scrollToAboutSection} className={classes.link}>About me</button>
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
                                <button onClick={scrollToQuickSmsSection} className={classes.link}>QuickSms</button>
                            </li>
                            <li className={classes.item}>
                                <button onClick={scrollToInvictaSection} className={classes.link}>Invicta</button>
                            </li>
                        </ul>
                        <ul className={classes.list}>
                            <li className={classes.item}>
                                <span className={classes.subtitle}>Best animations</span>
                            </li>
                            <li className={classes.item}>
                                <button onClick={scrollToPortfolioSection} className={classes.link}>TonMainers</button>
                            </li>
                            <li className={classes.item}>
                                <button onClick={scrollToEarngamesSection} className={classes.link}>EarnGames</button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.right}>
                    <a href='https://t.me/aleksys228' target='_blank' className={classes.button}>
                        <div className={classes.inner}>Contact</div>
                    </a>
                    <button onClick={toggleNavMenu} className={classes['mobile-menu-button'] + ' mobile'}>
                        <img src="/static/svg/mobileMenuLines.svg" alt="" />
                    </button>
                </div>
            </div>
        </header>
    )
}