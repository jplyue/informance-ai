'use client'

import React, { useState } from 'react'
import { observer } from 'mobx-react'

import {
  WarningIcon,
  FullScreenIcon,
  EditIcon,
  DeleteIcon,
  SearchIcon,
} from 'src/icons/icon'
import { inconsolata, literata } from 'src/app/layout'
import AddFAQ from 'src/app/addFAQ/addFAQ'
import listStore from 'src/stores/ListStore'

import styles from './page.module.css'

interface Item {
  id: number
  title: string
  answer: string
  type: string
}

export const Content = observer(() => {
  const [activeTab, setActiveTab] = useState(0)
  const tabTitles = ['Priority FAQ(30)', 'Conflicting(30)', 'Unanswered(30)']

  const handleToggleTab = (index: number) => {
    setActiveTab(index)
  }

  const handleDelete = (item: Item) => {
    listStore.removeItem(item.id)
  }

  return (
    <div className={styles.content}>
      <div className="warning">
        <div className="left">
          <div className="icon">
            <WarningIcon />
          </div>
          <span className={inconsolata.className}>
            Still have 23 conflicting, 30 unanswered data need to be processed.
          </span>
        </div>
        <div className="right">
          <a href="#" className={inconsolata.className}>
            View now
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.titleArea}>
          <h2 className={`${literata.className} ${styles.titleText}`}>
            FAQ Management
          </h2>
          <p className={styles.subHeader}>
            Training your AI Assistant with customised data. Supports: URL, PDF,
            Excel, Pptx, MP3, MP4/MOV
          </p>
        </div>

        <div className="tab-area">
          <div className={styles.tabHeader}>
            <div className={`${inconsolata.className} ${styles.tab}`}>
              {tabTitles.map((title, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles.tabItem} ${
                      activeTab === index ? styles.active : ''
                    }`}
                    onClick={(e) => handleToggleTab(index)}
                  >
                    <a href="#"> {title}</a>
                  </div>
                )
              })}
            </div>
            <div className={styles.action}>
              <button className="button normal">Import Data</button>
              <AddFAQ />
            </div>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 0 && (
              <div>
                <div className={styles.tabContentTop}>
                  <h4>All FAQ</h4>
                  <div className={styles.searchWrapper}>
                    <div className={styles.searchArea}>
                      <div className={styles.searchIconWrapper}>
                        <SearchIcon />
                      </div>
                      <input type="text" placeholder="Search" />
                    </div>
                    <div className={styles.searchFullScreen}>
                      <FullScreenIcon />
                    </div>
                  </div>
                </div>
                <div className={styles.faqList}>
                  <ol>
                    {listStore.items.map((item, index) => (
                      <li key={index}>
                        <div className={styles.faqListItemWrapper}>
                          <div className={styles.faqListNumber}>
                            {index + 1}
                          </div>
                          <div className={styles.faqListText}>
                            <div className={styles.faqListItemTitle}>
                              {item.title}
                            </div>
                            <div className={styles.faqListItemContent}>
                              {item.answer}
                            </div>
                          </div>
                          <div className={styles.faqLisItemAction}>
                            <button className="transparent">
                              <EditIcon />
                            </button>
                            <button
                              className="transparent"
                              onClick={(e) => handleDelete(item)}
                            >
                              <DeleteIcon />
                            </button>
                          </div>
                        </div>
                        {item.type === 'conflicted' && (
                          <div className={`${styles.faqLisItemWarning}`}>
                            <div
                              className={`${styles.faqLisItemWarningHeight} warning`}
                            >
                              <div className={styles.iconWrapper}>
                                <WarningIcon />
                                <span className={styles.warningText}>
                                  Causing a Conflict problem.
                                </span>
                              </div>
                              <div>
                                <a href="" className="action">
                                  View now
                                </a>
                              </div>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {activeTab === 1 && <div>Conflicting</div>}
            {activeTab === 2 && <div>Unanswered</div>}
          </div>
        </div>
      </div>
    </div>
  )
})
