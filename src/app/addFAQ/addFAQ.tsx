'use client'

import React, { useState } from 'react'
import { observer } from 'mobx-react'

import {
  DeleteIconRound,
  CloseIcon,
  PlusIcon,
  UploadIcon,
} from 'src/icons/icon'
import listStore from 'src/stores/ListStore'

import styles from './addFAQ.module.css'

const AddFAQ = observer(() => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const initialValue = { id: 1, value: '' }
  const [formulaList, setFormulaList] = useState([initialValue])
  const [answer, setAnswer] = useState('')

  const handleAddFAQ = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSave = () => {
    listStore.addItem({
      title: formulaList.map((item) => item.value).join(','),
      answer,
      type: 'normal',
    })

    setFormulaList([initialValue])
    setAnswer('')

    setIsModalOpen(false)
  }

  const handlePlus = () => {
    const newItem = {
      id: formulaList.length + 1,
      value: '',
    }
    setFormulaList([...formulaList, newItem])
  }

  const handleDelete = (id: number) => {
    const updatedData = formulaList.filter((item) => item.id !== id)

    if (updatedData.length === 0 || !updatedData.length) {
      setFormulaList([])
    } else {
      setFormulaList(updatedData)
    }
  }

  const handleInputChange = (id: number, newValue: string) => {
    const updatedData = formulaList.map((item) => {
      if (item.id === id) {
        return { ...item, value: newValue }
      } else {
        return item
      }
    })
    setFormulaList(updatedData)
  }

  const handleAnswerChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setAnswer(e.target.value)
  }

  return (
    <div>
      <button className="button highlight button-icon">
        <UploadIcon />
        <span onClick={handleAddFAQ}>Add FAQ</span>
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalWrapper}>
            <div className={styles.modalTitle}>
              <div className={styles.modalTitleText}>Add FAQ</div>
              <div className="close-button">
                <button className="transparent" onClick={closeModal}>
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div className={styles.modelContent}>
              <div className="top">
                <h3 className={styles.formulationsText}>Formulationa</h3>
                <div className={styles.formuList}>
                  <ul>
                    {formulaList.map((formula, index) => {
                      return (
                        <li key={index}>
                          <input
                            type="text"
                            placeholder={`Formulation ${index + 1}`}
                            onChange={(e) =>
                              handleInputChange(formula.id, e.target.value)
                            }
                            value={formula.value}
                          />
                          <button
                            className={`transparent ${styles.formuDeleteIcon}`}
                            onClick={(e) => handleDelete(formula.id)}
                          >
                            <DeleteIconRound />
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                  <div className={styles.plusIconWrapper}>
                    <button
                      className={`transparent ${styles.plusIcon}`}
                      onClick={handlePlus}
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div>
                <h3 className={styles.answerHeader}>Answer (markdown)</h3>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    placeholder="Enter"
                    onChange={handleAnswerChange}
                  />
                </div>
              </div>
            </div>

            <div className={styles.modalAction}>
              <button className="button highlight" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
})

export default AddFAQ
