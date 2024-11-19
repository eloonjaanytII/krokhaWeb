import * as styles from './input.module.css';
import {Field, ErrorMessage as Error} from 'formik';
import React from 'react';

export const Input = ({id, label, name, placeholder}) => {
    return (
        <div className={styles.input_container}>
            <label htmlFor={id}>{label}</label>
            <Field name = {name} id = {id} placeholder = {placeholder}/>
            <Error name = {name}>{(error) => <span>{error}</span>}</Error>
        </div>
    )
}