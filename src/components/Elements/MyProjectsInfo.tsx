import {ProjectType} from '@/types/Project.type';
import {TFunction} from 'i18next';
import smartNestPCDemo from '@/assets/videos/SmartNest DEMO PC.mp4';
import theCodePCDemo from '@/assets/videos/The Code DEMO PC.mp4';
import axisPCDemo from '@/assets/videos/Axis DEMO PC.mp4';

export const projects: ProjectType[] = [
    {
        name: 'The Code',
        type: 'a STEM Knowledge Sharing Forum',
        technologies: [
            'SpringBoot',
            'Vue.js',
            'MySQL',
            'Redis',
            'RabbitMQ',
            'JWT',
            'Docker',
        ],
        urls: {
            repo: 'https://github.com/SheEagle/TheCode',
        },
        demo: {
            desktop: theCodePCDemo,
        },
        description: [
            'Developed a Social media app that is focused on posting.',
            'Adopted an exceedingly scalable feature-based architecture for the front-end and a simplified "Clean architecture" on the back-end.',
            'Designed a highly intuitive and responsive user interface that enables most pleasant user experience.',
            'Set up a secure authentification/authorization process that was enabled by using dual JWT tokens and email verification.',
            'Added surface-level end-to-end tests with Cypress.',
            'Deployed the API on fly.io with Docker.',
        ],
        essay: (t: TFunction) => (
            <div className="project-info">
                <p><i>{t('Projects.The Code.essay.intro')}</i></p>
                <p>{t('Projects.The Code.essay.para1')}</p>
                <p>{t('Projects.The Code.essay.para2')}</p>
                <p>{t('Projects.The Code.essay.para3')}</p>
                <p>{t('Projects.The Code.essay.conclusion')}</p>
            </div>
        ),
    },
    {
        name: 'Axis',
        type: 'a Trip Reservation System',
        technologies: ['SpringBoot', 'Vue.js', 'MySQL', 'Redis', 'InfluxDB', 'WebSocket', 'Mybatis-Plus', 'JSCH'],
        urls: {
            repo: 'https://github.com/SheEagle/Axis',
        },
        demo: {
            desktop: axisPCDemo,
        },
        description: [
            'Developed a fully responsive web application that is a Singleplayer + Multiplayer + AI game.',
            'Utilized websockets to enable bi-directional communication between clients and the server.',
            'Designed a minimalistic yet intuitive opponent search feature.',
            'Applied the mini-max algorithm to add Artificial Intelligence to keep players entertained even in the absence of other players.',
        ],
        essay: (t: TFunction) => (
            <div className="project-info">
                <p>{t('Projects.Axis.essay.intro')}</p>
                <h4>{t('Projects.Axis.essay.para1')}</h4>
                <p>{t('Projects.Axis.essay.para2')}</p>
                <p>{t('Projects.Axis.essay.para3')}</p>
                <p>{t('Projects.Axis.essay.conclusion')}</p>
            </div>),
    },
    {
        name: 'SmartNest',
        type: 'an Image Editor',
        technologies: ['Python', 'Flask', 'PyTorch', 'Raspberry Pi', 'ROS', 'Delta-1A'],
        urls: {
            repo: 'https://github.com/SheEagle/SmartNest-Emotion',
        },
        demo: {
            desktop: smartNestPCDemo,
        },
        description: [
            'Created a fully responsive web application to edit…to them, as well as applying basic image filters.',
            'Used canvas to imprint changes onto a given image …t at the expense of accuracy of image generation.',
            'Bootstrapped the application with an API for popular meme images.',
            'Designed an eye-pleasing user interface.',
        ],
        essay: (t: TFunction) => (
            <div className="project-info">
                <p>{t('Projects.SmartNest.essay.intro')}</p>
                <h4>{t('Projects.SmartNest.essay.para1')}</h4>
                <p>{t('Projects.SmartNest.essay.para2')}</p>
                <p>{t('Projects.SmartNest.essay.para3')}</p>
                <p>{t('Projects.SmartNest.essay.conclusion')}</p>

            </div>
        ),
    },
];
