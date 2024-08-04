import {Hero, AboutMe, Projects, Contact, Skills} from '@/components';

import {Interest} from "@/components/Sections/Interest";

export function Landing() {
    return (
        <main>
            <Hero/>
            <AboutMe/>
            <Skills/>
            <Interest/>
            <Projects/>
            <Contact/>
        </main>
    );
}
