'use client'

import React, { useState } from 'react'

import { DeleteIconRound, CloseIcon, PlusIcon } from 'src/icons/icon'

import styles from './addFAQ.module.css'

const AddFAQ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formulaList, setFormulaList] = useState([
    { id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
  ])

  const handleAddFAQ = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSave = () => {
    setIsModalOpen(false)
  }

  const handlePlus = () => {
    const newItem = {
      id: formulaList.length + 1,
      value: `Item ${formulaList.length + 1}`,
    }
    setFormulaList([...formulaList, newItem])
  }

  const handleDelete = (id: number) => {
    const updatedData = formulaList.filter((item) => item.id !== id)
    setFormulaList(updatedData)
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

  return (
    <div>
      <span onClick={handleAddFAQ}>Add FAQ</span>

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
                  <input type="text" placeholder="Enter" />
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
}

export default AddFAQ
