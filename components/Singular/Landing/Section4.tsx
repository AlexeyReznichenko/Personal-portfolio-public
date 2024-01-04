import ButtonProject from '@/components/Reusable/Landing/ButtonProject';
import ProjectComp from '@/components/Reusable/Landing/Project';
import classes from '@/styles/componentsStyles/Landing/section4.module.scss';
import Project from '@/types/project';

const PROJECTS: Project[] = [
    {
        id: 'tonmainers',
        name: 'Ton Mainers',
        cover: 'tonmainers',
        link: 'https://project-bitmainers.vercel.app',
        description: 'TonMiners is a groundbreaking NFT game on the TON Blockchain, offering a captivating pixelated universe where players can engage in mining activities.',
        technologies: 'NEXT - TypeScript - Scss',
        staff: '2 Designers - 1 Frontend dev',
        timeSpent: '2 months'
    },
    {
        id: 'quicksms',
        name: 'Quick SMS',
        cover: 'sms',
        link: 'https://quicksms.io',
        description: 'QuickSMS.io revolutionizes SMS marketing with its non-VOIP number rental system, providing a secure gateway to SMS campaigns, bulk messaging, and message marketing.',
        technologies: 'VUE - TypeScript - Scss',
        staff: '2 Designers - 2 Frontend devs',
        timeSpent: '1 month'
    },
    {
        id: 'heavenspro',
        name: 'Heavens Pro',
        cover: 'heavensPro',
        link: 'https://heavens.pro',
        description: 'Developing unique IT business solutions since 2020. Symphony of design, tech prowess, and impeccable quality.',
        technologies: 'NEXT - TypeScript - Scss',
        staff: '2 Designers - 2 Frontend devs',
        timeSpent: '2 months'
    },
    {
        id: 'invicta',
        name: 'Invicta',
        cover: 'invicta',
        link: 'https://release-invictamarket.heavens.cam',
        description: 'Explore Invicta, your go-to store system that sells gift cards from lots of brands. Navigate a visually stunning website featuring abstract figures and 3D card models.',
        technologies: 'NUXT - TypeScript - Scss',
        staff: '1 Designer - 1 Frontend dev',
        timeSpent: '3 month'
    },
    {
        id: 'kerma',
        name: 'Kerma',
        cover: 'kerma',
        link: 'https://kerma.netlify.app',
        description: `Dive into Kerma, a fun crypto (ETH) game where the biggest bet takes the prize. The website's pink design and a cute 3D winged cat make the game lively.`,
        technologies: 'NUXT - TypeScript - Scss',
        staff: '2 Designers - 1 Frontend dev',
        timeSpent: '1 month'
    },
    {
        id: 'earngames',
        name: 'Earn Games',
        cover: 'earngames',
        link: 'https://release-emiratesgames.heavens.cam',
        description: 'Check out Earn Games, our marketplace for special NFTs and our Academy, where we teach young folks to be digital experts in blockchain and Web 3.0.',
        technologies: 'VUE - TypeScript - Scss',
        staff: '2 Designers - 3 Frontend devs',
        timeSpent: '2 months'
    },
    {
        id: 'nuef',
        name: 'Nuef',
        cover: 'nuef',
        link: 'https://release-nuefmusic.heavens.cam',
        description: `Welcome to Nuef, the portfolio website for a musical studio that elevates brands to fame. At Nuef, it's not just about money, we seek believers in their musical projects.`,
        technologies: 'HTML - JavaScript - Scss',
        staff: '1 Designer - 1 Frontend dev',
        timeSpent: '3 weeks'
    },
    {
        id: 'metasnipers',
        name: 'Meta Snipers',
        cover: 'metasnipers',
        link: 'https://release-metasnipers.heavens.cam',
        description: 'MetaSnipers stands at the forefront of NFT innovation, offering a unique platform that predicts trends in the dynamic world of digital art and collectibles.',
        technologies: 'VUE - TypeScript - Scss',
        staff: '1 Designer - 1 Frontend dev',
        timeSpent: '2 weeks'
    },
    {
        id: 'digiproxy2',
        name: 'Digi Proxy 2',
        cover: 'proxyCatGirl',
        link: 'https://digiproxy.cc/en',
        description: 'Digi Proxy is your ultimate solution for reliable and secure Residential, Datacenter, and Sneaker proxies. Constantly innovating for the best internet experience.',
        technologies: 'NEXT - TypeScript - Scss',
        staff: '2 Designers - 4 Frontend devs',
        timeSpent: '1 month'
    },
    {
        id: 'digiproxy',
        name: 'Digi Proxy',
        cover: 'digiProxy',
        link: 'https://digiproxy.pages.dev',
        description: 'Experience the pinnacle of proxy services with Digi Proxy – your source for the fastest and most affordable residential proxies.',
        technologies: 'HTML - JavaScript - Scss',
        staff: '1 Designer - 1 Frontend dev',
        timeSpent: '1 month'
    },
    {
        id: 'earnfm',
        name: 'Earn FM',
        cover: 'earnFm',
        link: 'https://release-musicearnfm.heavens.cam',
        description: 'Switch to Earn.FM for the easiest way to earn passive income effortlessly. Simply turn it on, download the app, and let your internet connection pay for itself.',
        technologies: 'VUE - TypeScript - Scss',
        staff: '1 Designer - 2 Frontend devs',
        timeSpent: '3 weeks'
    },
    {
        id: 'mikhailwoodo',
        name: 'Mikhail Woodo',
        cover: 'mikhailPortfolio',
        link: 'https://woodo.pages.dev',
        description: 'Explore the portfolio of Mikhail, a skilled web and UI/UX designer, showcasing a collection of successful projects and stunning designs.',
        technologies: 'HTML - JavaScript - Scss',
        staff: '1 Designer - 1 Frontend dev',
        timeSpent: '2 weeks'
    },
];

export default function Section4() {

    return (
        <section className={`${classes['section-4']} section`}>
            <div className={classes['inner-container']}>
                <div className={classes.projects}>
                    <div className={classes['flex-container']}>
                        <div className={classes['index-container']}>
                            {PROJECTS.map((_, index, arr) => {
                                return (
                                    <span 
                                     key={index + 'index'}
                                     className={`
                                      ${classes.index} 
                                      ${index + 1 !== arr.length ? classes['index-to-top'] : ''} 
                                      ${index !== 0 ? classes['index-from-bottom'] : ''}
                                    `}>
                                        {index + 1}
                                    </span>
                                )
                            })}
                        </div>
                        <div className={classes['title-container']}>
                            <div className={classes.inner}>
                                {PROJECTS.map((el, index, arr) => {
                                    return (
                                        <h2 
                                         key={index + 'title'}
                                         className={`
                                          ${classes.title} 
                                          ${index + 1 !== arr.length ? classes['title-to-top'] : ''}  
                                          ${index !== 0 ? classes['title-from-bottom'] : ''}
                                        `}>
                                            {el.name}
                                        </h2>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={`${classes.lines} desktop`}>
                            {PROJECTS.map((el, index, arr) => {
                                return (
                                    <ButtonProject 
                                        key={el.id + 'button'}
                                        index={index}
                                        projectsAmount={arr.length}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    {PROJECTS.map((el, index, arr) => {
                        return (
                            <ProjectComp 
                                key={el.id}
                                id={el.id}
                                name={el.name}
                                cover={el.cover}
                                link={el.link}
                                description={el.description}
                                technologies={el.technologies}
                                staff={el.staff}
                                timeSpent={el.timeSpent}
                                index={index}
                                projectsAmount={arr.length}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}