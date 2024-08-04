import {motion, AnimatePresence} from 'framer-motion';
import {useState} from 'react';
import {Icon, IconType} from '@/components';
import {objectEntriesTyped, objectKeysTyped} from '@/utility';
import {useTranslation} from "react-i18next";

const interestCategories = {
    Music: {
        icon: 'music' as IconType,
        interests: ['Singing', 'Guzheng', 'Post Rock'],
    },
    Photography: {
        icon: 'photography' as IconType,
        interests: ['Dream Core', 'Weird Core', 'Street Photography', 'Landscape'],
    },
    Sports: {
        icon: 'sports' as IconType,
        interests: ['Fitness', 'Swimming', 'Skating'],
    },
    Others: {
        icon: 'others' as IconType,
        interests: ['Urbex', 'Vintage Hunting', 'Scripts Writing', 'Styling'],
    },
};

type InterestsType = keyof typeof interestCategories;

export function Interest() {
    const [currentTab, setCurrentTab] = useState<InterestsType>(objectKeysTyped(interestCategories)[0]);
    const {t}=useTranslation()
    return (
        <section
            id="interest"
            className="relative text-lg px-8 xs:px-10 sm:px-12 py-16 mt-24 mb-20 transition-all duration-300 "
        >
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="uppercase text-6xl font-righteous mb-12 leading-tight bg-clip-text "
                >
                    {t('Interest.interest')}
                </motion.h2>
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {objectEntriesTyped(interestCategories).map(([category, data], index) => (
                        <motion.div
                            key={category}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className={`bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${
                                category === currentTab ? 'bg-violet-500 ' : 'bg-violet-300  hover:bg-violet-400'
                            }`}
                            onClick={() => setCurrentTab(category as InterestsType)}
                        >
                            <Icon type={data.icon} className="w-8 h-8 mb-2"/>
                            <span className="font-medium text-lg font-black">
                                 {t(`Interest.categories.${category}.name`)}
                            </span>
                        </motion.div>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentTab}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.3}}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        {interestCategories[currentTab].interests.map((interest, index) => (
                            <motion.div
                                key={interest}
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.3, delay: index * 0.1}}
                                className="interest-item bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 px-6 rounded-full shadow-lg text-white font-medium text-lg"
                            >
                                {/*{interest}*/}
                                {t(`Interest.categories.${currentTab}.interests.${interest}`)}
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}