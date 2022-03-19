import React from 'react';
import style from '../../css/style.module.scss'

const Card = () => {
  return (
    <>
        <div className={style["search__box--content"]}>
            <div className={style["search__box--column"]}>
                <div className={style["card"]}></div>
            </div>
            <div className={style["search__box--column"]}>
                <div className={style["card"]}></div>
            </div>
            <div className={style["search__box--column"]}>
                <div className={style["card"]}></div>
            </div>
        </div>

        <div className={style["search__box--content"]}>
            <div className={style["search__box--column"]}>
                <div className={style["card"]}></div>
            </div>
            <div className={style["search__box--column"]}>
                <div className={style["card"]}></div>
            </div>
            <div className={style["search__box--column"]}>
                <div className={style["card"]}></div>
            </div>
        </div>  
    </>
  )
}

export default Card