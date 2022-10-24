import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddPersone from '../add-persone/addPersone';
import PersoneCard from '../common/personeCard';
import s from './tableOfPersone.module.css';

import { setIsAddPersone, resetIsAddPersone } from '../../store/appState';
import { addPersoneAC } from '../../store/users';

const TableOfPersone = (props) => {
    const appStateData = useSelector((state) => state.appState);
    const usersData = useSelector((state) => state.users.users);
    const organisationsData = useSelector((state) => state.organisations.organisations.organisations);

    console.log(usersData)
    console.log('usersData')
    const dispatch = useDispatch();

    useEffect(()=>{}, [usersData])

    return (
        <div>
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
                <div className={s.box_button}>
                    {''}
                </div>
            </div>
            {usersData.map(el => {
                let OrgShortName;
                if (el.organisationId === 'no') {
                    OrgShortName = ''; //после создания карточки id компании небудет
                } else {
                    OrgShortName = organisationsData[el.organisationId - 1].shortName;
                }

                return (
                    <PersoneCard key={el.firstName}
                        firstName={el.firstName} lastName={el.lastName} middleName={el.middleName}
                        OrgShortName={OrgShortName} email={el.email}
                    />
                )
            })}
            <div onClick={() => dispatch(setIsAddPersone())} className={s.addPersoneButton}>
                Добавить пользователя
            </div>
            {
                appStateData.isAddPersone === false
                    ? null
                    : <AddPersone
                        resetCard={() => dispatch(resetIsAddPersone())}
                        addPersone={(data) => {
                            dispatch(addPersoneAC(data))
                        }}
                    />
            }

        </div>
    )
}

export default TableOfPersone