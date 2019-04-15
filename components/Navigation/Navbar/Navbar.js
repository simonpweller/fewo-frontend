import React, {useState} from 'react'
import {FormattedMessage, injectIntl} from 'react-intl';
import English from './flags/English';
import German from './flags/German';
import css from './navbar.scss';
import ActiveLink from './ActiveLink';

function Navbar({locale, setLocale, intl}) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className={css.navbar}>
      <div className={css.container}>
        <div className={css.innerWrapper}>
          <ActiveLink href={'/'}>
            <FormattedMessage id={'holidaysInHetzdorf'}/>
          </ActiveLink>
          <button className={css.toggle} onClick={() => setExpanded(!isExpanded)}>
            <div className={isExpanded ? css.bar1Expanded : css.bar}/>
            <div className={isExpanded ? css.bar2Expanded : css.bar}/>
            <div className={isExpanded ? css.bar3Expanded : css.bar}/>
          </button>
          <nav>
            <ul className={isExpanded ? css.navItemsExpanded : css.navItems}>
              <li>
                <ActiveLink href={'/belegung'}>
                  <FormattedMessage id={'availability'}/>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href={'/buchen'}>
                  <FormattedMessage id={'booking'}/>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href={'/anfahrt'}>
                  <FormattedMessage id={'directions'}/>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href={'/ferienwohnung'}>
                  <FormattedMessage id={'apartment'}/>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href={'/ferienhaus'}>
                  <FormattedMessage id={'house'}/>
                </ActiveLink>
              </li>
            </ul>
          </nav>
          <button
            lang={locale === 'de' ? 'en': 'de'}
            className={isExpanded ? css.languageToggleExpanded : css.languageToggle}
            onClick={() => {
              const nextLang = locale === 'de' ? 'en' : 'de';
              setLocale(nextLang);
              document.querySelector('html').setAttribute('lang', nextLang);
            }}
            aria-label={intl.formatMessage({id: 'languageToggle'})}
          >
            {locale === 'de'
              ? <English />
              : <German />
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(Navbar);
