import {memo} from 'react';

type LogoProps = {
    className?: string;
};

function Logo_({className}: LogoProps) {
    return (
        <svg viewBox="0 0 720 720" fill="none" className={className}>
            <circle cx="370" cy="370" r="348" stroke="currentColor" strokeWidth="4"/>
            <circle cx="365" cy="365" r="348.5" stroke="currentColor" strokeWidth="3"/>
            <circle cx="360" cy="360" r="349" stroke="currentColor" strokeWidth="2"/>
            <circle cx="355" cy="355" r="349" stroke="currentColor" strokeWidth="2"/>
            <circle cx="350" cy="350" r="349.5" stroke="currentColor"/>
            {/* 更大并居中的 SW 字母 */}
            <g transform="translate(360, 360) scale(2.6)">
                {/* 字母 S */}
                <path d="M-50,50 q30,-50 60,-100 q30,50 60,100" fill="currentColor"/>
                {/* 字母 W */}
                <path d="M-50,-50 l25,50 l-25,50 l50,-100 l50,100 l-25,-50 l25,-50" fill="currentColor"/>
            </g>
        </svg>
    );
}

export const Logo = memo(Logo_);
