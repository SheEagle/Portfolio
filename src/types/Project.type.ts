import {TFunction} from "i18next";
import {ReactElement} from "react";

export type ProjectType = {
    name: string;
    type: string;
    technologies: string[];
    urls: {
        // deploy: string;
        repo: string;
    };
    demo: { desktop: string };
    description: string[];
    essay?: (t: TFunction) => ReactElement;
};
