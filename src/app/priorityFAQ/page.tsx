import Image from 'next/image'

import {
  DownArrow,
  PlusCircle,
  GlobalIcon,
  HeaderLogo,
  MoreIcon,
} from 'src/icons/icon'
import { inconsolata, plusJakartaSans } from 'src/app/layout'

import styles from './page.module.css'
import stylesIcon from './dashboard_icon.module.css'
import { Content } from './content'

const Header = () => {
  return (
    <header className={styles.pageHeader}>
      <div>
        <HeaderLogo />
      </div>
      <div className={styles.language}>
        <a href="#">
          <GlobalIcon />
          <span>English</span>
        </a>
      </div>
    </header>
  )
}

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.sidebarHeader}>
          <div className={`${styles.sidebarLeft} ${styles.flexRow}`}>
            <div className="icon">
              <Image
                src="/BitAvatar.png"
                alt="avatar"
                className={styles.sidebarAvatar}
                width={48}
                height={48}
                priority
              />
            </div>
            <div className={styles.sidebarHeaderText}>
              <div
                className={`${styles.sidebarHeaderTitle} ${inconsolata.className}`}
              >
                BTC Coin Community
              </div>
              <div className={`${styles.members} ${inconsolata.className}`}>
                12,500 Members
              </div>
            </div>
          </div>
          <div className="right">
            <DownArrow />
          </div>
        </div>

        <div className={`${inconsolata.className} ${styles.menuArea}`}>
          <div className={`general-area ${styles.section}`}>
            <div
              className={`${styles.sectionTitle} ${plusJakartaSans.className}`}
            >
              GENERAL
            </div>
            <div className={styles.sectionList}>
              <ul className="level1">
                <li>
                  <div className={styles.sectionItem}>
                    <a href="#">
                      <i
                        className={`${styles.dashboardIcon} ${stylesIcon.dashboard}`}
                      ></i>
                      <span>Dashboard</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className={styles.sectionItem}>
                    <a href="#">
                      <div>
                        <i
                          className={`${styles.dashboardIcon} ${stylesIcon.setup}`}
                        ></i>
                      </div>
                      <div className={styles.tagTail} data-content="Essential">
                        <span>Setup in channels</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li className={styles.active}>
                  <div className={styles.sectionItem}>
                    <a href="#">
                      <i
                        className={`${styles.dashboardIcon} ${stylesIcon.bot}`}
                      ></i>
                      <span className={styles.tagTail} data-content="Essential">
                        AI Data Training
                      </span>
                    </a>
                  </div>

                  <ul className={styles.level2}>
                    <li>
                      <div className={styles.sectionItem}>
                        <a href="#">
                          <div className={styles.iconWrapper}>
                            <i
                              className={`${styles.dashboardIcon2} ${stylesIcon.dot}`}
                            ></i>
                          </div>
                          <span>Data Import</span>
                        </a>
                      </div>
                    </li>
                    <li className={styles.active}>
                      <div className={styles.sectionItem}>
                        <a href="#">
                          <div className={styles.iconWrapper}>
                            <i
                              className={`${styles.dashboardIcon2} ${stylesIcon.dotHighlight}`}
                            ></i>
                          </div>
                          <span>FAQ Management</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className={styles.sectionItem}>
                    <a href="#">
                      <div className={styles.iconWrapper}>
                        <i
                          className={`${styles.dashboardIcon} ${stylesIcon.history}`}
                        ></i>
                      </div>
                      <span>Bot History</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className={styles.sectionItem}>
                    <a href="#">
                      <div className={styles.iconWrapper}>
                        <i
                          className={`${styles.dashboardIcon} ${stylesIcon.cog}`}
                        ></i>
                      </div>
                      <span>Bot Settings</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${styles.pluginsArea} ${styles.section}`}>
            <div
              className={`${styles.sectionTitle} ${plusJakartaSans.className}`}
            >
              Plugins Management
            </div>
            <div className={styles.sectionList}>
              <ul className="level1">
                <li>
                  <div className={styles.sectionItem}>
                    <div className={styles.iconWrapper}>
                      <i
                        className={`${styles.dashboardIcon} ${stylesIcon.dot}  ${stylesIcon.diff}`}
                      ></i>
                    </div>

                    <span className={styles.tagTail} data-content="Coming soon">
                      Quiz Generator
                    </span>
                  </div>
                </li>
                <li>
                  <div className={styles.sectionItem}>
                    <div className={styles.iconWrapper}>
                      <i
                        className={`${styles.dashboardIcon} ${stylesIcon.dot} ${stylesIcon.diff}`}
                      ></i>
                    </div>

                    <span className={styles.tagTail} data-content="Coming soon">
                      FAQ Generator
                    </span>
                  </div>
                </li>
              </ul>
              <div className={styles.addPlugins}>
                <a href="#">
                  <PlusCircle />
                  <span
                    className={`${inconsolata.className} ${styles.addPluginsText}`}
                  >
                    Add new plugins
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.userArea}>
        <div className={`${styles.userAreaLeft} ${styles.flexRow}`}>
          <div className={styles.userImage}>
            <Image
              src="/UserAvatar.png"
              alt="Informance AI Logo"
              className={styles.informanceLogo}
              width={60}
              height={60}
              priority
            />
          </div>
          <div>
            <div className={styles.userName}>Ryan Lee</div>
            <div className={styles.userLevel}>Premium</div>
          </div>
        </div>
        <div>
          <MoreIcon />
        </div>
      </div>
    </div>
  )
}

export default function PriorityFAQ() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.contentWrapper}>
        <Sidebar />
        <Content />
      </div>
    </main>
  )
}
