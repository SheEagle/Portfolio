import {memo, MouseEventHandler} from 'react';
import {HashLink} from 'react-router-hash-link';
import deepEqual from 'deep-equal';
import {useTranslation} from "react-i18next";

type NavigationLinksProps = {
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    classNames?: {
        list?: string;
        item?: string;
        link?: string;
    };
};

export function NavigationLinks_({onClick, classNames}: NavigationLinksProps) {
    const {t} = useTranslation();
    return (
        <ul className={classNames?.list}>
            <li className={classNames?.item}>
                <HashLink className={classNames?.link} onClick={onClick} smooth to="/#top">

                    {t('Navigation.Hero')}
                </HashLink>
            </li>
            <li className={classNames?.item}>
                <HashLink className={classNames?.link} onClick={onClick} smooth to="/#about-me">

                    {t('Navigation.Me')}
                </HashLink>
            </li>
            <li className={classNames?.item}>
                <HashLink className={classNames?.link} onClick={onClick} smooth to="/#projects">

                    {t('Navigation.Projects')}
                </HashLink>
            </li>
            <li className={classNames?.item}>
                <HashLink className={classNames?.link} onClick={onClick} smooth to="/#skills">

                    {t('Navigation.Skill')}
                </HashLink>
            </li>
            <li className={classNames?.item}>
                <HashLink className={classNames?.link} onClick={onClick} smooth to="/#interest">

                    {t('Navigation.Interest')}
                </HashLink>
            </li>
            <li className={classNames?.item}>
                <HashLink className={classNames?.link} onClick={onClick} smooth to="/#contact">

                    {t('Navigation.Contact')}
                </HashLink>
            </li>
        </ul>
    );
}

export const NavigationLinks = memo(NavigationLinks_, deepEqual);
