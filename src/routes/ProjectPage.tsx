import {motion, AnimatePresence} from 'framer-motion';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useState} from 'react';
import clsx from 'clsx';

import {useDisclosure, SIZES} from '@/hooks';
import {
    Icon,
    projects,
    Smartphone,
    Monitor,
    OscillatingLine,
    ThemeSwitchButton,
    Logo, LanguageSwitchButton,
} from '@/components';
import {nextArrElement} from '@/utility';
import {HashLink} from 'react-router-hash-link';
import {useTranslation} from "react-i18next";

const fadeIn = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: -20},
    transition: {duration: 0.5}
};

export function ProjectPage() {
    const [isMobilePreview, setIsMobilePreview] = useState(
        window.matchMedia(`(min-width: ${SIZES.sm}px)`).matches
    );
    const {isOpen: isTextOpen, open: openText} = useDisclosure(false);
    const navigate = useNavigate();

    const {name: page} = useParams();
    const project = projects.find((project) => project.name.toLowerCase() === page?.toLowerCase());
    if (!project) return null;


    const {t} = useTranslation()
    return (
        <motion.main
            className="main-layout py-5 [&_*]:select-none w-full"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <nav className="flex justify-between items-center h-8 mt-2 mb-16">
                <HashLink to="/#projects" className="h-4/6 cursor-pointer">
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <Icon
                            type="long-arrow"
                            className="h-full hover:text-accent-400 text-default transition-colors duration-300"
                        />
                    </motion.div>
                </HashLink>
                <Link to="/">
                    <motion.div whileHover={{scale: 1.05}}>
                        <Logo className="h-16"/>
                    </motion.div>
                </Link>

                <div className="text-right grow flex items-center justify-end gap-4">
                    <ThemeSwitchButton className="w-6 h-6"/>
                    <LanguageSwitchButton className="w-6 h-6"/>
                </div>
            </nav>

            <motion.div className="flex flex-col items-center gap-5" {...fadeIn}>
                <AnimatePresence mode="wait">
                    (
                    <motion.div key="desktop" {...fadeIn}>
                        <Monitor src={project.demo.desktop} className="max-w-full h-[600px]"/>
                    </motion.div>
                    )
                </AnimatePresence>

                <div className="space-x-6 mb-5">
                    <motion.button
                        onClick={() => setIsMobilePreview(false)}
                        className={clsx(
                            'border-b border-main-0 dark:border-main-reverse-0 transition-default text-default',
                            isMobilePreview
                                ? 'border-opacity-0 dark:border-opacity-0 hover:border-opacity-50'
                                : 'border-opacity-100'
                        )}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        Desktop
                    </motion.button>

                </div>
                <OscillatingLine/>
            </motion.div>

            <motion.div className="flex justify-between items-center mt-10" {...fadeIn}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-righteous">
                    {/*{project.name}*/}
                    {t(`Projects.${project.name}.name`)}
                </h2>
                <span className="italic text-sm text-right">{t(`Projects.${project.name}.type`)}</span>
            </motion.div>

            <motion.div className="mt-8" {...fadeIn}>
                <h3 className="text-lg mb-2 font-righteous">{t('ProjectPage.tech')}</h3>
                <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <motion.li
                            key={technology}
                            className="skill-item"
                            whileHover={{scale: 1.05, backgroundColor: 'var(--color-accent-500)'}}
                        >
                            {technology}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            <motion.div className="mt-8" {...fadeIn}>
                <h3 className="text-lg mb-2 font-righteous">{t('ProjectPage.what')}</h3>
                <ul className="list-disc ml-4 text-sm">
                    {/*{t(`Projects.${project.name}.description`, {returnObjects: true}).map((item, index) => (*/}
                    {/*    <motion.li*/}
                    {/*        key={index}*/}
                    {/*        className="hover:text-accent-300"*/}
                    {/*        whileHover={{x: 5}}*/}
                    {/*    >*/}
                    {/*        {item}*/}
                    {/*    </motion.li>*/}
                    {/*))}*/}
                    {(t(`Projects.${project.name}.description`, {returnObjects: true}) as string[]).map((item, index) => (
                        <motion.li
                            key={index}
                            className="hover:text-accent-300"
                            whileHover={{x: 5}}
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            <motion.div className="my-8 flex justify-evenly" {...fadeIn}>
                <motion.a
                    className="font-righteous tracking-wide font-bold text-xl gradient-text hover:gradient-text-animation transition-default"
                    target="_blank"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    Deploy
                </motion.a>
                <motion.a
                    href={project.urls.repo}
                    className="font-righteous tracking-wide font-bold text-xl gradient-text hover:gradient-text-animation transition-default"
                    target="_blank"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    {t('ProjectPage.repo')}
                </motion.a>
            </motion.div>

            {project.essay && (
                <>
                    {isTextOpen || (
                        <motion.button
                            onClick={openText}
                            className="flex gap-1.5 items-center mt-12 mb-10 mx-auto first-letter"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            <div className="animated-arrows">
                                <span></span>
                                <span></span>
                            </div>
                            <span className="text-xl font-bold">{t('ProjectPage.more')}</span>
                            <div className="animated-arrows">
                                <span></span>
                                <span></span>
                            </div>
                        </motion.button>
                    )}

                    <AnimatePresence>
                        {isTextOpen && (
                            <motion.div
                                initial={{opacity: 0, height: 0}}
                                animate={{opacity: 1, height: 'auto'}}
                                exit={{opacity: 0, height: 0}}
                                transition={{duration: 0.5}}
                                className="mb-10 mt-12 overflow-hidden"
                            >
                                <div className="transition-colors duration-300 text-default text-justify">
                                    <h3 className="text-lg font-righteous mb-2">{t('ProjectPage.thoughts')}</h3>
                                    {project.essay(t)}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}

            <OscillatingLine className=""/>
            <motion.div className="mt-8" {...fadeIn}>
                <Link
                    to={`/project/${nextArrElement(projects, project).name}`}
                    className="h-full ml-auto max-w-max flex flex-wrap items-center text-lg group"
                >
                    <motion.span
                        className="group-hover:-translate-x-2.5 transition-default text-default mr-1.5"
                        whileHover={{x: -10}}
                    >
                        {t('ProjectPage.next')}
                    </motion.span>
                    <div className="flex ml-auto gap-2.5 items-center">
                        <motion.span
                            className="font-righteous gradient-text group-hover:gradient-text-animation group-hover:-translate-x-2"
                            whileHover={{x: -5}}
                        >
                            {nextArrElement(projects, project).name}
                        </motion.span>
                        <motion.div whileHover={{x: 5}}>
                            <Icon
                                type="long-arrow"
                                className="h-4 2xs:h-5 rotate-180 group-hover:text-accent-500 transition-colors duration-300 text-default"
                            />
                        </motion.div>
                    </div>
                </Link>
            </motion.div>
        </motion.main>
    );
}