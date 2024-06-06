import React from 'react';
import styles from "./page.module.scss";

interface Option {
    name: string;
}

interface ScopeItem {
    title: string;
    options?: Option[];
}

interface ScopeOfWorkProps {
    scopeOfWork: ScopeItem[];
}

const ScopeOfWork: React.FC<ScopeOfWorkProps> = ({ scopeOfWork }) => {
    return (
        <div className={styles.prdeco__scope}>
            <div className={styles.prdecoso__left}>
                <h2>Scope Of Work</h2>
            </div>
            <div className={styles.prdecoso__right}>
                {scopeOfWork.map((scopeItem, index) => (
                    <div className={styles.prdecoso__right__item} key={`scopeItem-${index}`}>
                        <h2 key={`scopeItem-${index}`}>{scopeItem.title}</h2>
                        <div>
                            {scopeItem.options?.map((option, idx) => (
                                <ul className={styles.prdecoso__right__item__item} key={`scopeItem-${index}-option-${idx}`}>
                                    <li key={`scopeItem-${index}-option-${idx}`}>
                                        {option.name}
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScopeOfWork;
