import {Icon} from '@/components';

type ContactLinksProps = {
    classNames?: {
        list?: string;
        item?: string;
        link?: string;
        icon?: string;
    };
};

export function ContactLinks({classNames}: ContactLinksProps) {
    return (
        <ul className={classNames?.list}>
            <li className={classNames?.item}>
                <a target="_blank" href="mailto:morganwang68@gmail.com" className={classNames?.link}>
                    <Icon type="mail" className={classNames?.icon}/>
                </a>
            </li>
            <li className={classNames?.item}>
                <a target="_blank" href="https://github.com/SheEagle" className={classNames?.link}>
                    <Icon type="github" className={classNames?.icon}/>
                </a>
            </li>
            <li className={classNames?.item}>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/xiru-wang-551103248/"
                    className={classNames?.link}
                >
                    <Icon type="linkedin" className={classNames?.icon}/>
                </a>
            </li>
            {/*<li className={classNames?.item}>*/}
            {/*    <a*/}
            {/*        target="_blank"*/}
            {/*        href="https://discord.com/users/292300959265062922"*/}
            {/*        className={classNames?.link}*/}
            {/*    >*/}
            {/*        <Icon type="discord" className={classNames?.icon}/>*/}
            {/*    </a>*/}
            {/*</li>*/}
        </ul>
    );
}
