import classes from '@/styles/componentsStyles/Faq/question.module.scss';

interface Props {
    question: string;
    answer?: string;
    answerList?: string[];
    answerListSkills?: string[];
    answerListYears?: string[];
}

export default function Question({ question, answer, answerListSkills, answerListYears }: Props) {

    return (
        <div className={`${classes.question} question`}>
            <div className={`${classes['header-line']} header-line`}>
                <h3 className={classes.title}>{question}</h3>
                <img src="/static/svg/arrowFaq.svg" alt="" className={`${classes.arrow} arrow`} />
            </div>
            <div className={`${classes['toggle-container']} toggle-container`}>
                {answer && <p className={classes.answer}>{answer}</p>}
                {answerListSkills && answerListYears && <div className={`${classes.answer} ${classes['flex-container']}`}>
                    <ul className={`${classes.list} ${classes.skills}`}>
                        {answerListSkills.map((el, index) => {
                            return (
                                <li 
                                 key={index + 'skills'}
                                 className={classes.item}>
                                    {el}
                                </li>
                            )
                        })}
                    </ul>
                    <ul className={`${classes.list}`}>
                        {answerListYears.map((el, index) => {
                            return (
                                <li 
                                 key={index + 'years'}
                                 className={classes.item}>
                                    {el}
                                </li>
                            )
                        })}
                    </ul>
                </div>}
            </div>
        </div>
    )
}