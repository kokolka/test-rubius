import React, { useState, useEffect } from 'react';
import s from './personeCard.module.css';
import deleteIcon from '../../../img/deleteIcon.png';
import changeIcon from '../../../img/changeIcon.png';

const PersoneCard = (props) => {
    let [isActive, toggleIsActive] = useState(false)
    let [isDelete, toggleIsDelete] = useState(false)


    useEffect(() => {
        if(props.isMultiDelete === false){
            toggleIsDelete(false);
        }
    }, [props.isMultiDelete])

    let a;
    if (isActive === false) {
        a = `${s.box}`;
    } else {
        a = `${s.box} ${s.active}`;
    }

    return (
        <div className={s.main_box}>
            <div
                tabIndex={1}
                onFocus={(e) => {
                    if (e.currentTarget === e.target) {
                        toggleIsActive(true)
                    }
                }}
                onBlur={(e) => {
                    if (e.currentTarget === e.target) {
                        toggleIsActive(false)
                    }
                }}
                className={a}>
                <div className={s.box_element}>
                    {`${props.firstName} ${props.lastName} ${props.middleName}`}
                </div>
                <div className={s.box_element}>
                    {`${props.OrgShortName}`}
                </div>
                <div className={s.box_element}>
                    {`${props.email}`}
                </div>
                <div className={s.box_button}>
                    <div onClick={() => { props.changeCard() }}>
                        <img src={changeIcon} alt="change" />
                    </div>
                    {props.isMultiDelete
                        ? <div>
                            {isDelete
                                ? <div onClick={()=>{
                                    toggleIsDelete(false);
                                }}>{'Y'}</div>
                                : <div onClick={()=>{
                                    toggleIsDelete(true);
                                    props.addUsersOnDelete();
                                }}>{'O'}</div>
                            }
                        </div>
                        : <div onClick={() => { props.deletCard() }}>
                            <img src={deleteIcon} alt="delete" />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PersoneCard;