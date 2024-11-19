import * as styles from './form.module.css';
import { initialValues, schemas } from './FormData';
import { Formik, Form } from 'formik';
import { Input } from '../input/Input'
import { Button } from '../button/Button'
import React from 'react';

export const CustomForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schemas.custom}
            onSubmit={() => console.log("Success")}>
            <Form className={styles.form}>
                <Input
                    label="Имя"
                    name="firstName"
                    id="firstName"
                    placeholder="Введите имя" />
                <Input
                    label="Фамилия"
                    name="lastName"
                    id="lastName"
                    placeholder="Введите фамилию" />
                <Input
                    label="Почта"
                    name="email"
                    id="email"
                    placeholder="Введите почту" />
                <Button>Отправить</Button>
            </Form>
        </Formik>
    )
}