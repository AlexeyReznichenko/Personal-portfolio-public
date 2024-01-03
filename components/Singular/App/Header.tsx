import { isTouchDevice } from '@/store';
import { baseActions, selectIsNavigationLinkAboutClicked, selectIsNavigationLinkEarngamesClicked, selectIsNavigationLinkInvictaClicked, selectIsNavigationLinkPortfolioClicked, selectIsNavigationLinkQuickSmsClicked, selectIsNavigationLinkTonmainersClicked, selectIsPreloaderFinished, selectMobileNavOpenedIndicator } from '@/store/baseSlice';
import classes from '@/styles/componentsStyles/App/header.module.scss';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavigationMenu from './NavigationMenu';
import Navigation from './Navigation';

export default function Header() {
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const isPreloaderFinished = useSelector(selectIsPreloaderFinished);
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
    const scrollToSection = (type: string): void => {
        const pinSpacer = document.querySelector(`.pin-spacer`) as HTMLDivElement;
        dispatch(baseActions.closeMobileNavOpenedIndicator());

        if (pathname === '/') {
            if (!pinSpacer) return;

            if (window.innerWidth < 850) {
                const PROJECT_BASE_VALUE = 3160;
                const PROJECT_SCROLL_VALUE = 535;
                if (type === 'portfolio') {
                    scrollTo(0, PROJECT_BASE_VALUE);
                } else if (type === 'about') {
                    scrollTo(0, 560);
                } else if (type === 'sms') {
                    scrollTo(0, PROJECT_BASE_VALUE + (PROJECT_SCROLL_VALUE * 1));
                } else if (type === 'invicta') {
                    scrollTo(0, PROJECT_BASE_VALUE + (PROJECT_SCROLL_VALUE * 3));
                } else if (type === 'earngames') {
                    scrollTo(0, PROJECT_BASE_VALUE + (PROJECT_SCROLL_VALUE * 5));
                }
                return;
            }

            if (window.innerWidth > 850 && isTouchDevice()) {
                const PROJECT_BASE_VALUE = 3220;
                const PROJECT_SCROLL_VALUE = 530;
                if (type === 'portfolio') {
                    scrollTo(0, PROJECT_BASE_VALUE);
                } else if (type === 'about') {
                    scrollTo(0, 540);
                } else if (type === 'sms') {
                    scrollTo(0, PROJECT_BASE_VALUE + (PROJECT_SCROLL_VALUE * 1));
                } else if (type === 'invicta') {
                    scrollTo(0, PROJECT_BASE_VALUE + (PROJECT_SCROLL_VALUE * 3));
                } else if (type === 'earngames') {
                    scrollTo(0, PROJECT_BASE_VALUE + (PROJECT_SCROLL_VALUE * 5));
                }
                return;
            }

            if (window.innerWidth > 850 && !isTouchDevice()) {
                const PROJECT_BASE_VALUE = .327;
                const PROJECT_SCROLL_VALUE = .0535;
                const PIN_SPACER_HEIGHT = pinSpacer.clientHeight;
                if (type === 'portfolio') {
                    scrollTo(0, PIN_SPACER_HEIGHT * PROJECT_BASE_VALUE);
                } else if (type === 'about') {
                    scrollTo(0, PIN_SPACER_HEIGHT * .0545);
                } else if (type === 'sms') {
                    scrollTo(0, PIN_SPACER_HEIGHT * (PROJECT_BASE_VALUE + (PROJECT_SCROLL_VALUE * 1)));
                } else if (type === 'invicta') {
                    scrollTo(0, PIN_SPACER_HEIGHT * (PROJECT_BASE_VALUE + (PROJECT_SCROLL_VALUE * 3)));
                } else if (type === 'earngames') {
                    scrollTo(0, PIN_SPACER_HEIGHT * (PROJECT_BASE_VALUE + (PROJECT_SCROLL_VALUE * 5)));
                }
                return;
            }
        } else {
            let timeoutTime = 3000;

            if (isPreloaderFinished) {
                timeoutTime = 2000;
            }

            router.push('/');
            setTimeout(() => {
                dispatch(baseActions.isNavigationLinkClicked({type, value: true}));
            }, timeoutTime);
        }
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHECK IF LINKS OF THE LANDING PAGE WERE CLICKED FROM A DIFFERENT PAGE
    useEffect(() => {
        
        setTimeout(() => {
            if (isNavigationLinkPortfolioClicked) {
                scrollToSection('portfolio');
                dispatch(baseActions.isNavigationLinkClicked({type: 'portfolio', value: false}));
            }
    
            if (isNavigationLinkAboutClicked) {
                scrollToSection('about');
                dispatch(baseActions.isNavigationLinkClicked({type: 'about', value: false}));
            }
    
            if (isNavigationLinkQuickSmsClicked) {
                scrollToSection('sms');
                dispatch(baseActions.isNavigationLinkClicked({type: 'sms', value: false}));
            }
    
            if (isNavigationLinkInvictaClicked) {
                scrollToSection('invicta');
                dispatch(baseActions.isNavigationLinkClicked({type: 'invicta', value: false}));
            }
    
            if (isNavigationLinkEarngamesClicked) {
                scrollToSection('earngames');
                dispatch(baseActions.isNavigationLinkClicked({type: 'earngames', value: false}));
            }
        }, 200);
    }, [isNavigationLinkPortfolioClicked, isNavigationLinkAboutClicked, 
        isNavigationLinkQuickSmsClicked, isNavigationLinkInvictaClicked, 
        isNavigationLinkTonmainersClicked, isNavigationLinkEarngamesClicked]);

    return (
        <header className={`${classes.header} ${(pathname !== '/' ? classes['header-not-fixed'] : '')}`}>
            <NavigationMenu 
             scrollToSection={scrollToSection}
            />
            <div className={classes['inner-container']}>
                <div className={classes.left}>
                    <Link href='/' className={classes.logo}>Oleksii</Link>
                    <Navigation
                     scrollToSection={scrollToSection}
                    />
                </div>
                <div className={classes.right}>
                    {/* <a href='https://t.me/aleksys228' target='_blank' className={classes.button}>
                        <div className={classes.inner}>Contact</div>
                    </a> */}
                    <a href='https://www.linkedin.com/in/oleksiireznichenko' target='_blank' className={classes.button}>
                        <div className={classes.inner}>LinkedIn</div>
                    </a>
                    <button onClick={toggleNavMenu} className={`${classes['mobile-menu-button']} mobile`}>
                        <img src="/static/svg/mobileMenuLines.svg" alt="" />
                    </button>
                </div>
            </div>
        </header>
    )
}