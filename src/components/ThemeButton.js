import React, { useEffect } from 'react'
import styles from '../styles/ThemeButton.module.css'

function ThemeButton() {
  const handleChange = (event) => {
    const root = document.documentElement
    const themeId = event.target.id

    if (themeId === styles['purple']) {
      root.style.setProperty('--color-accent-300', '#d8b4fe')
      root.style.setProperty('--color-accent-600', '#a855f7')
      root.style.setProperty('--color-accent-900', '#581c87')
    } else if (themeId === styles['red']) {
      root.style.setProperty('--color-accent-300', '#fb7185')
      root.style.setProperty('--color-accent-600', '#e11d48')
      root.style.setProperty('--color-accent-900', '#9f1239')
    } else if (themeId === styles['green']) {
      root.style.setProperty('--color-accent-300', '#bef264')
      root.style.setProperty('--color-accent-600', '#84cc16')
      root.style.setProperty('--color-accent-900', '#365314')
    } else if (themeId === styles['blue']) {
      root.style.setProperty('--color-accent-300', '#60a5fa')
      root.style.setProperty('--color-accent-600', '#2563eb')
      root.style.setProperty('--color-accent-900', '#1e3a8a')
    } else if (themeId === styles['orange']) {
      root.style.setProperty('--color-accent-300', '#fb923c')
      root.style.setProperty('--color-accent-600', '#ea580c')
      root.style.setProperty('--color-accent-900', '#7c2d12')
    }

    localStorage.setItem('ngo-theme', themeId)
  }

  useEffect(() => {
    const themeId = localStorage.getItem('ngo-theme')
    if (themeId) {
      const root = document.documentElement
      const themeElement = document.getElementById(themeId)

      if (themeElement) {
        themeElement.classList.add('active-theme')

        if (themeId === styles['purple']) {
          root.style.setProperty('--color-accent-300', '#d8b4fe')
          root.style.setProperty('--color-accent-600', '#a855f7')
          root.style.setProperty('--color-accent-900', '#581c87')
        } else if (themeId === styles['red']) {
          root.style.setProperty('--color-accent-300', '#fb7185')
          root.style.setProperty('--color-accent-600', '#e11d48')
          root.style.setProperty('--color-accent-900', '#9f1239')
        } else if (themeId === styles['green']) {
          root.style.setProperty('--color-accent-300', '#bef264')
          root.style.setProperty('--color-accent-600', '#84cc16')
          root.style.setProperty('--color-accent-900', '#365314')
        } else if (themeId === styles['blue']) {
          root.style.setProperty('--color-accent-300', '#60a5fa')
          root.style.setProperty('--color-accent-600', '#2563eb')
          root.style.setProperty('--color-accent-900', '#1e3a8a')
        } else if (themeId === styles['orange']) {
          root.style.setProperty('--color-accent-300', '#fb923c')
          root.style.setProperty('--color-accent-600', '#ea580c')
          root.style.setProperty('--color-accent-900', '#7c2d12')
        }
      }
    }
  }, [])

  return (
    <>
      <div
        id={styles['purple']}
        className={styles['theme-icons']}
        onClick={handleChange}
      ></div>
      <div
        id={styles['red']}
        className={styles['theme-icons']}
        onClick={handleChange}
      ></div>
      <div
        id={styles['green']}
        className={styles['theme-icons']}
        onClick={handleChange}
      ></div>
      <div
        id={styles['blue']}
        className={styles['theme-icons']}
        onClick={handleChange}
      ></div>
      <div
        id={styles['orange']}
        className={styles['theme-icons']}
        onClick={handleChange}
      ></div>
    </>
  )
}

export default ThemeButton
