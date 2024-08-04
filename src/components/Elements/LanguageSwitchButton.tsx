import clsx from 'clsx';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageSwitchButtonProps = {
    className?: string;
};

export function LanguageSwitchButton_({ className }: LanguageSwitchButtonProps) {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language.startsWith('en') ? 'zh' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            className={clsx('language-toggle', className)}
            title="Toggles language"
            aria-label="auto"
            aria-live="polite"
            data-language={i18n.language}
            onClick={toggleLanguage}
        >
            <svg className="language-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="language-text">{i18n.language.startsWith('en') ? '中' : 'En'}</span>
        </button>
    );
}

export const LanguageSwitchButton = memo(LanguageSwitchButton_);