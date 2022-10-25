import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './addOrChangePersone.module.css';

const AddOrChangePersone = (props) => {
    const organisationsData = useSelector((state) => state.organisations.organisations.organisations)

    return (
        <div className={s.mainBox}>
            <div className={s.formBox}>
                <h3 className={s.formBox_title}>{props.title}</h3>
                <Formik
                    initialValues={{
                        firstName: props.firstName, lastName: props.lastName,
                        middleName: props.middleName, organisationId: props.organisationId,
                        email: props.email, id: props.id
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.firstName) {
                            errors.firstName = 'Обязательно';
                        } else if (
                            !/^[А-ЯЁA-Z]|[А-ЯЁA-Z][\x27а-яёa-z]{1,}$/i.test(values.firstName)
                        ) {
                            errors.firstName = 'Некорректная запись фамилии';
                        }

                        if (!values.lastName) {
                            errors.lastName = 'Обязательно';
                        } else if (
                            !/^[А-ЯЁA-Z]|[А-ЯЁA-Z][\x27а-яёa-z]{1,}$/i.test(values.lastName)
                        ) {
                            errors.lastName = 'Некорректная запись имени';
                        }

                        if (
                            !/^([А-ЯЁA-Z]|[А-ЯЁA-Z][\x27а-яёa-z]{1,}$)|()/i.test(values.middleName)
                        ) {
                            errors.middleName = 'Некорректная запись отчества';
                        }

                        if (!values.email) {
                            errors.email = 'Обязательно';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Неправильный Email';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        props.addOrChangePersone(values);
                        props.resetCard();
                    }}
                >
                    {(p) => (
                        <Form>
                            <div className={s.formBox_element}>
                                <div>
                                    Фамилия:
                                </div>
                                <div className={s.element}>
                                    <Field type="text" name="firstName" />
                                    <ErrorMessage name="firstName" component="div" />
                                </div>
                            </div>
                            <div className={s.formBox_element}>
                                <div>
                                    Имя:
                                </div>
                                <div className={s.element}>
                                    <Field type="text" name="lastName" />
                                    <ErrorMessage name="lastName" component="div" />
                                </div>
                            </div>
                            <div className={s.formBox_element}>
                                <div>
                                    Отчество:
                                </div>
                                <div className={s.element}>
                                    <Field type="text" name="middleName" />
                                    <ErrorMessage name="middleName" component="div" />
                                </div>
                            </div>
                            <div className={s.formBox_element}>
                                <div>
                                    Организация:
                                </div>
                                <div className={s.element}>
                                    <select disabled={props.visibilitySetting} name="organisationId" value={p.values.organisationId} onChange={p.handleChange} onBlur={p.handleBlur}>
                                        {p.values.organisationId === 'no' 
                                        ? <option key='no' value='no'></option>
                                        :organisationsData.map(el => {
                                            return (
                                                <option key={el.id} value={el.id}>{`${el.fullName} (${el.shortName})`}</option>
                                            )
                                        })}
                                    </select>
                                    <ErrorMessage disabled name="organisationId" component="div" />
                                </div>
                            </div>
                            <div className={s.formBox_element}>
                                <div>
                                    E-Mail:
                                </div>
                                <div className={s.element}>
                                    <Field type="email" name="email" />
                                    <ErrorMessage name="email" component="div" />
                                </div>
                            </div>
                            <div className={s.formBox_button}>
                                <button type="submit" >
                                    Ок
                                </button>
                                <button onClick={() => { props.resetCard() }}>
                                    Отмуна
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default AddOrChangePersone;