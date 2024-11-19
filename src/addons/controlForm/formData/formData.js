import * as Yup from 'yup';

const regx = {
    name : /^[A-Z-a-z0-9_-]{3,16}$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
}

const firstName = Yup.string()
.matches(regx.name, "Кириллица или латиница от 3 до 16 символов")
.required("Введите имя")

const lastName = Yup.string()
.matches(regx.name, "Кириллица или латиница от 3 до 16 символов")
.required("Введите фамилию")

const email = Yup.string()
.matches(regx.email, "Введите почту типа example@mail.ru")
.required("Введите почту")

export const schemas = {
    custom : Yup.object().shape( {
        firstName,
        lastName,
        email
    })
}

export const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
}
