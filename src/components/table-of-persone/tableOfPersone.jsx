import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddOrChangePersone from '../add-or-change-persone/addOrChangePersone';
import PersoneCard from './one-persone/personeCard';
import s from './tableOfPersone.module.css';

import {
    setIsAddPersone, resetIsAddPersone,
    setIsDeletePersone, resetIsDeletePersone,
    setIsChangePersone, resetIsChangePersone,
    setIsMultiDeletePersone, resetIsMultiDeletePersone
} from '../../store/appState';
import { 
    addPersoneAC, changeParsoneAC, deletePersoneAC, 
    addUsersOnDelete, reserUsersOnDelete 
} from '../../store/users';
import DeleteWindows from '../delete-windows/deleteWindows';
import Paginator from '../common/paginator';

const TableOfPersone = (props) => {
    let [deleteId, setDeleteId] = useState(null);
    let [changeData, setChangeData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        middleName: '',
        organisationId: '',
        email: ''
    });
    let [numberPage, setNumberPage] = useState(1);

    const appStateData = useSelector((state) => state.appState);
    const usersData = useSelector((state) => state.users.users);
    const organisationsData = useSelector((state) => state.organisations.organisations.organisations);

    const dispatch = useDispatch();

    let amountPage = Math.ceil(usersData.length / 10); //число страниц в паджинаторе
    useEffect(() => {
        amountPage = Math.ceil(usersData.length / 10);
        if (amountPage === 1) {
            setNumberPage(1);
        }
    }, [usersData]);

    let cardsPersons = usersData.map(el => {
        let OrgShortName;
        if (el.organisationId === 'no') {
            OrgShortName = ''; //после создания карточки id компании небудет
        } else {
            let nomberId;
            if (typeof el.organisationId !== 'number') {
                nomberId = Number(el.organisationId);
            } else {
                nomberId = el.organisationId;
            }
            OrgShortName = organisationsData[nomberId - 1].shortName;
        }
        return (
            <PersoneCard
                isMultiDelete={appStateData.isMultiDeletePersone}
                key={`${el.firstName}${el.lastName}${el.middleName}${el.email}`}
                firstName={el.firstName} lastName={el.lastName} middleName={el.middleName}
                OrgShortName={OrgShortName} email={el.email}
                deletCard={() => {
                    dispatch(setIsDeletePersone())
                    setDeleteId(el.id)
                }}
                changeCard={() => {
                    dispatch(setIsChangePersone())
                    setChangeData({
                        id: el.id,
                        firstName: el.firstName,
                        lastName: el.lastName,
                        middleName: el.middleName,
                        organisationId: el.organisationId,
                        email: el.email
                    })
                }}
                addUsersOnDelete={() => dispatch(addUsersOnDelete(el.id))}
            />
        )
    })

    let cardsPersonsOnPage = []
    for (let i = 0; i < cardsPersons.length; i++) {
        if (i < (10 * numberPage) && i >= ((numberPage - 1) * 10)) {
            //console.log(i)
            cardsPersonsOnPage.push(cardsPersons[i]);
        }
    }

    return (
        <div className={s.wrapper}>
            <button onClick={() => dispatch(setIsAddPersone())} className={s.addPersoneButton}>
                Добавить пользователя
            </button>
            <div className={s.main_box}>
                <div className={s.box_element}>
                    {`ФИО`}
                </div>
                <div className={s.box_element}>
                    {`Организация`}
                </div>
                <div className={s.box_element}>
                    {`E-Mail`}
                </div>
                <div className={s.box_button} >
                    {appStateData.isMultiDeletePersone
                    ?<div className={s.box_button__sel} >
                        <button onClick={() => {
                            dispatch(setIsDeletePersone());
                            setDeleteId('no');
                        }}>Удалить</button>
                        <button onClick={() => {
                            dispatch(resetIsMultiDeletePersone());
                            dispatch(reserUsersOnDelete());
                        }}>Отмена</button>
                    </div>
                    :<button onClick={() => {
                        dispatch(setIsMultiDeletePersone())
                    }}>
                        Множественное удаление
                    </button>}
                </div>
            </div>
            {
                cardsPersonsOnPage
            }
            <div>
                {
                    amountPage > 1
                        ? <Paginator amountPage={amountPage} setNumberPage={(el) => setNumberPage(el)} />
                        : null
                }
            </div>
            {
                appStateData.isDeletePersone === false
                    ? null
                    : <DeleteWindows
                        DeleteAction={() => {
                            dispatch(deletePersoneAC(deleteId));
                            dispatch(resetIsDeletePersone());
                        }}
                        resetStateDelete={() => {
                            dispatch(resetIsDeletePersone())
                        }}
                    />
            }
            {
                appStateData.isChangePersone === false
                    ? null
                    : <AddOrChangePersone
                        // visibilitySetting если true, то селектор не работает
                        visibilitySetting={false}
                        title={'Изменение данных пользователя'}
                        //organisationId присваивается no в случае регистрации
                        organisationId={changeData.organisationId}
                        firstName={changeData.firstName} lastName={changeData.lastName}
                        middleName={changeData.middleName} email={changeData.email}
                        id={changeData.id}
                        resetCard={() => {
                            dispatch(resetIsChangePersone())
                        }}
                        addOrChangePersone={(data) => {
                            dispatch(changeParsoneAC(data))
                        }}
                    />
            }
            {
                appStateData.isAddPersone === false
                    ? null
                    : <AddOrChangePersone
                        // visibilitySetting если true, то селектор не работает
                        visibilitySetting={true}
                        title={'Создание пользователя'}
                        //organisationId присваивается no в случае регистрации
                        organisationId={'no'}
                        firstName={''} lastName={''} middleName={''} email={''} id={''}
                        resetCard={() => {
                            dispatch(resetIsAddPersone())
                        }}
                        addOrChangePersone={(data) => {
                            dispatch(addPersoneAC(data))
                        }}
                    />
            }
        </div>
    )
}

export default TableOfPersone