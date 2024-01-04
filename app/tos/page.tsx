"use client";

import classes from '@/styles/pagesStyles/tos.module.scss'
import Header from '@/components/Singular/App/Header';
import Link from 'next/link';

interface InfoBlock {
    id: number | string;
    title: string;
    description: string;
}

const INFO_BLOCKS: InfoBlock[] = [
    {
        id: 1,
        title: `Acceptance of Terms`,
        description: `By accessing or using the Service, you agree to be bound by these Terms. If you disagree 
        with any part of the Terms, you may not use the Service.`
    },
    {
        id: 2,
        title: `Description of Service`,
        description: `The Service provides information about the freelance frontend web development services 
        offered by the Developer, including a portfolio showcasing previous projects, skills, and relevant information.`
    },
    {
        id: 3,
        title: `Intellectual Property`,
        description: `All content on the Service, including but not limited to text, graphics, logos, images, and 
        software, is the property of the Developer and is protected by copyright and other intellectual property laws. 
        You may not use, reproduce, distribute, or create derivative works based on the content without explicit 
        permission from the Developer.`
    },
    {
        id: 4,
        title: `Client Projects and Confidentiality`,
        description: `The portfolio may showcase projects completed for clients. However, the Developer will not 
        disclose proprietary or confidential information about clients or their projects without prior consent.`
    },
    {
        id: 5,
        title: `Web Development Services and Partnership`,
        description: `The Developer may offer web development services and partnership opportunities. Specific terms, 
        conditions, and agreements related to these services or partnerships will be discussed separately and documented 
        in a formal agreement.`
    },
    {
        id: 6,
        title: `Third-Party Links`,
        description: `The Service may contain links to third-party websites or services that are not owned or controlled 
        by the Developer. The Developer has no control over, and assumes no responsibility for, the content, privacy 
        policies, or practices of any third-party websites or services. You further acknowledge and agree that the 
        Developer shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged 
        to be caused by or in connection with the use of or reliance on any such content, goods, or services available 
        on or through any such websites or services.`
    },
    {
        id: 7,
        title: `Changes to Terms`,
        description: `The Developer reserves the right to modify or replace these Terms at any time. If a revision is 
        material, we will try to provide at least 30 days' notice before any new terms take effect. What constitutes 
        a material change will be determined at our sole discretion.`
    },
];

export default function Tos() {

    return (
        <div className={classes['page-tos']}>
            <Header />
            <div className={classes['inner-container']}>
                <div className={classes.center}>
                    <h1 className={classes.title}>Terms of service</h1>
                    <div className={classes['info-blocks']}>
                        {INFO_BLOCKS.map((el, index) => {
                            return (
                                <div className={classes['info-block']}>
                                    <span className={classes.subtitle}>{index + 1}. {el.title}</span>
                                    <p className={classes.description}>{el.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <Link href='/' className={`${classes.button} button-yellow`}>
                        <div className={`${classes.inner} inner`}>Back</div>
                    </Link>
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
