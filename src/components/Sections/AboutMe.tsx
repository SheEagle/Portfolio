import {HashLink} from 'react-router-hash-link';
import {Suspense} from 'react';

import {AboutMeCanvas, Loader} from '@/components';
import {useTranslation} from 'react-i18next';

export function AboutMe() {
    const {t} = useTranslation();
    return (
        <section className="main-layout" id="about-me">
            {/* Initially I wanted to have the height of this component to be 90vh. But this makes projects section below very ustable */}
            {/* It seems to doesn't like viewheights of anything other than 100vh. WHY??? */}
            <div
                className="w-full px-6 2xs:px-8 lg:px-0 relative lg:h-screen rounded-3xl lg:rounded-none flex flex-col bg-main-reverse-1 dark:bg-main-1 text-default transition-colors duration-300 lg:bg-transparent lg:dark:bg-transparent">
                <div
                    className="max-h-[calc(100vh_-_400px)] min-h-[400px] lg:max-h-max lg:h-full lg:ml-[500px] lg:z-10 pt-8 pb-4 relative flex flex-col gap-4">
                    <h2 className="shrink-0 text-4xl 2xs:text-5xl sm:text-6xl uppercase font-righteous text-center lg:text-left">
                        {t('About.About me')}


                    </h2>
                    <div className="shrink sm:text-lg grow space-y-2 overflow-auto pb-6 hide-scrollbar highlight-links">
                        <p>
                            {t('Introduction.intro')}{' '}
                            <HashLink smooth to="/#skills" className="text-accent-300">
                                {t('About.Skills')}
                            </HashLink>{' '}
                            {t('Introduction.and')}{' '}
                            <HashLink smooth to="/#projects" className="text-accent-300">
                                {t('About.Projects')}
                            </HashLink>
                            .
                        </p>
                        <p>
                            {t('Introduction.para1')}
                        </p>
                        <p>
                            {t('Introduction.para2')}
                        </p>
                        <p>
                            {t('Introduction.para3')}
                        </p>
                        <p>
                            {t('Introduction.para4')}
                        </p>
                        <p>
                            {t('Introduction.para5')}
                        </p>

                    </div>
                    <div className="flex items-center gap-4 shrink">
                        <button>
                            <div className="scroll-down-mouse"/>
                        </button>
                        <div className="uppercase font-bold shrink-0">{t('About.Scroll')}</div>
                    </div>
                </div>

                <Suspense
                    fallback={
                        <div className="h-[360px] lg:absolute lg:h-full lg:w-[500px] flex items-center justify-center">
                            <Loader/>
                        </div>
                    }
                >
                    <div className="h-[360px] lg:absolute lg:left-[calc(-100%_+_10em)] lg:w-[200%] lg:h-full">
                        <AboutMeCanvas/>
                    </div>
                </Suspense>
            </div>
        </section>
    );
}
