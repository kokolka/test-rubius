import React from 'react';
import s from './personeCard.module.css'

const PersoneCard = (props) =>{
    return(
        <div className={s.main_box}>
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
                <div onClick={() => {props.changeCard()}}>
                    Change card
                </div>
                <div onClick={() => {props.deletCard()}}>
                    Delete card
                </div>
            </div>
        </div>
    )
}

export default PersoneCard;