import * as styles from './button.module.css'
import React from 'react'

export const Button = ({children}) => {
    return <button type = "submit" className = {styles.button}>{children}</button>
}