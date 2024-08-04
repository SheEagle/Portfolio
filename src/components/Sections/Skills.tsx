import clsx from 'clsx';
import {useState} from 'react';
import {motion} from 'framer-motion';
import {Icon, IconType} from '@/components';
import {objectEntriesTyped, objectKeysTyped} from '@/utility';
import {useTranslation} from "react-i18next";

const skillCategories = {
    Backend: {
        icon: 'backend' as IconType,
        skills: [
            'Java',
            'SpringBoot',
            'Python',
            'Django',
            'Flask',
        ],
    },
    Frontend: {
        icon: 'frontend' as IconType,
        skills: [
            'React',
            'Vue.js',
        ],
    },
    Database: {
        icon: 'database' as IconType,
        skills: [
            'MySQL',
            'PostgreSQL',
            'Redis',
            'MongoDB',
        ],
    },
    deployment: {
        icon: 'cloud-computing' as IconType,
        skills: ['Docker', 'k8s'],
    },
    'AI&Data': {
        icon: 'ai' as IconType,
        skills: [
            'PyTorch',
            'Numpy',
            'keras',
            'pandas',
            'MATLAB',
        ],
    },
    tools: {
        icon: 'tools' as IconType,
        skills: ['Figma', 'Git', 'Linux', 'Latex', 'MarkDown'],
    },
    languages: {
        icon: 'languages' as IconType,
        skills: [
            ['English', 'C1'],
            ['Chinese', 'Native'],
            ['Japanese', 'N5'],
        ],
    },
};
type SkillsType = keyof typeof skillCategories;

//
export function Skills() {
    const [currentTab, setCurrentTab] = useState<SkillsType>(objectKeysTyped(skillCategories)[0]);
    const {t}=useTranslation()
    return (
        <section
            id="skills"
            className="relative text-lg px-8 xs:px-10 sm:px-12 xs:py-12 py-16 mt-24 mb-20 transition-colors duration-300 bg-main-reverse-1 dark:bg-main-1 text-default"
        >
            <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 w-full">
                <h2 className="uppercase text-6xl font-righteous leading-[0.8] md:hidden">Skills</h2>
                <ul className="md:basis-[calc(50%_-_32px)] md:shrink-0 flex flex-col gap-y-2 h-64 md:h-80 lg:h-64">
                    {objectEntriesTyped(skillCategories).map((skill) => {
                        const skillType = skill[0];
                        const icon = skill[1].icon;
                        return (
                            <motion.li
                                key={skillType}
                                className={clsx(
                                    'grow w-full flex align-center rounded-lg transition-default',
                                    skillType === currentTab ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' : 'bg-main-reverse-2 dark:bg-main-2 hover:bg-main-reverse-3 dark:hover:bg-main-3',
                                )}
                                onClick={() => setCurrentTab(skillType)}
                            >
                                <motion.button
                                    whileTap={{scale: 0.95}}
                                    whileHover={{scale: 1.05}}
                                    className="w-full h-full px-8 uppercase text-lg font-black flex items-center justify-between"
                                >
                                    <div className="flex items-center w-full justify-between md:w-auto">
                                    <span className="w-8 text-left order-2 md:order-none">
                                        <Icon type={icon} className="w-5 inline"/>
                                    </span>
                                        <span className="relative top-[1px] order-1 md:order-none">{skillType}</span>
                                    </div>
                                    {skillType === currentTab && (
                                        <Icon type="long-arrow" className="h-5 rotate-180 hidden md:block"/>
                                    )}
                                </motion.button>
                            </motion.li>
                        );
                    })}
                </ul>

                <div className="md:w-[calc(50%_-_32px)] md:grow-0 relative">
                    <div className="relative z-10">
                        <h2 className="uppercase text-6xl font-righteous mb-8 leading-[0.8] hidden md:block">
                            {t('Skills.skills')}
                        </h2>
                        {currentTab === 'languages' ? (
                            <ul className="space-y-2">
                                {skillCategories[currentTab].skills.map(([language, level]) => (
                                    <li key={language} className="text-lg group">
                                        <span className="font-bold mr-2">{language}:</span>
                                        <span className="group-hover:text-accent-400 transition-all duration-200">
                      {level}
                    </span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <ul className="flex flex-wrap gap-2">
                                {skillCategories[currentTab].skills.map((skill) => (
                                    <li key={skill} className="skill-item">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <motion.div
                        className="absolute right-0 top-0 h-full text-accent-300 dark:text-accent-400 opacity-[12%] transition-colors duration-300"
                        style={{width: '150px', height: '150px', marginTop: '100px'}}
                    >
                        <Icon
                            type={skillCategories[currentTab].icon}
                            style={{width: '130px', height: '130px', marginTop: '50px'}}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

