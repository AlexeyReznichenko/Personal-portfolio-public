import classes from '@/styles/componentsStyles/App/navigation.module.scss';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
    scrollToSection: Function;
}

export default function Navigation({ scrollToSection }: Props) {
    const [isActiveDropdown1, setIsActiveDropdown1] = useState<boolean>(false);
    const [isActiveDropdown2, setIsActiveDropdown2] = useState<boolean>(false);
    const [isActiveDropdown3, setIsActiveDropdown3] = useState<boolean>(false);
    const [isActiveDropdown4, setIsActiveDropdown4] = useState<boolean>(false);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // HANDLE DROPDOWN OPENING AND CLOSING
    const handleOpenDropdown = (handler: React.Dispatch<React.SetStateAction<boolean>>): void => {
        handler(true);
    };
    
    const handleCloseDropdown = (handler: React.Dispatch<React.SetStateAction<boolean>>): void => {
        handler(false);
    };

    return (
        <nav className={`${classes.navigation} desktop`}>
            <div 
             onMouseOver={() => handleOpenDropdown(setIsActiveDropdown1)}
             onMouseOut={() => handleCloseDropdown(setIsActiveDropdown1)}
             className={`
              ${classes['dropdown-container']} 
              ${(isActiveDropdown1 ? classes['active-dropdown-container'] : '')}
            `}>
                <button className={`${classes['dropdown-opener']}`}>
                    <span>Navigation</span>
                    <img 
                     src="/static/svg/arrowToBottom.svg" alt="" 
                     className={`${classes.icon} ${(isActiveDropdown1 ? classes.active : '')}`} />
                </button>
                <div className={`${classes.dropdown} ${classes['dropdown-1']} ${(isActiveDropdown1 ? '' : ' closed')}`}>
                    <ul
                        onClick={() => handleCloseDropdown(setIsActiveDropdown4)}
                        className={classes.list}>
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
                </div>
            </div>
            
            <div
             onMouseOver={() => handleOpenDropdown(setIsActiveDropdown2)}
             onMouseOut={() => handleCloseDropdown(setIsActiveDropdown2)}
             className={`
                ${classes['dropdown-container']} 
                ${(isActiveDropdown2 ? classes['active-dropdown-container'] : '')}
            `}>
                <button className={`${classes['dropdown-opener']}`}>
                    <span>Contacts</span>
                    <img 
                     src="/static/svg/arrowToBottom.svg" alt="" 
                     className={`${classes.icon} ${(isActiveDropdown2 ? classes.active : '')}`} />
                </button>
                <div className={`${classes.dropdown} ${classes['dropdown-2']} ${(isActiveDropdown2 ? '' : ' closed')}`}>
                    <ul
                     onClick={() => handleCloseDropdown(setIsActiveDropdown2)}
                     className={classes.list}>
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
                </div>
            </div>

            <div
             onMouseOver={() => handleOpenDropdown(setIsActiveDropdown3)}
             onMouseOut={() => handleCloseDropdown(setIsActiveDropdown3)} 
             className={`${classes['dropdown-container']} ${(isActiveDropdown3 ? classes['active-dropdown-container'] : '')}`}>
                <button className={`${classes['dropdown-opener']}`}>
                    <span>Stores</span>
                    <img 
                     src="/static/svg/arrowToBottom.svg" alt="" 
                     className={`${classes.icon} ${(isActiveDropdown3 ? classes.active : '')}`} />
                </button>
                <div className={`${classes.dropdown} ${classes['dropdown-3']} ${(isActiveDropdown3 ? '' : ' closed')}`}>
                    <ul
                     onClick={() => handleCloseDropdown(setIsActiveDropdown3)}
                     className={classes.list}>
                        <li className={classes.item}>
                            <button onClick={() => scrollToSection('sms')} className={classes.link}>QuickSms</button>
                        </li>
                        <li className={classes.item}>
                            <button onClick={() => scrollToSection('invicta')} className={classes.link}>Invicta</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div
             onMouseOver={() => handleOpenDropdown(setIsActiveDropdown4)}
             onMouseOut={() => handleCloseDropdown(setIsActiveDropdown4)} 
             className={`${classes['dropdown-container']} ${(isActiveDropdown4 ? classes['active-dropdown-container'] : '')}`}>
                <button className={`${classes['dropdown-opener']}`}>
                    <span>Best animations</span>
                    <img 
                     src="/static/svg/arrowToBottom.svg" alt="" 
                     className={`${classes.icon} ${(isActiveDropdown4 ? classes.active : '')}`} />
                </button>
                <div className={`${classes.dropdown} ${classes['dropdown-4']} ${(isActiveDropdown4 ? '' : ' closed')}`}>
                    <ul
                     onClick={() => handleCloseDropdown(setIsActiveDropdown4)}
                     className={classes.list}>
                        <li className={classes.item}>
                            <button onClick={() => scrollToSection('portfolio')} className={classes.link}>TonMainers</button>
                        </li>
                        <li className={classes.item}>
                            <button onClick={() => scrollToSection('earngames')} className={classes.link}>EarnGames</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}