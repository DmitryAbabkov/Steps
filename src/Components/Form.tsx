import React from 'react';

function Step() {
    return (
        <div className='container'>
            <form action="#" className='step__form'>
                <label> Дата (ДД.ММ.ГГ)
                    <input className='step__form' name='date'/>
                </label>
                <label>Пройдено км
                    <input className='step__form'/>
                </label>
                <button className='step__btn'>Ок</button>
            </form>
            <div className='step__result'>
                <div className='step__result-write'>
                    <div>Дата (ДД.ММ.ГГ)</div>
                    <div>Пройдено км</div>
                    <div>Действия</div>
                </div>
                <div className='step_item'>
                    <div className='step__item-date'>20.07.2019</div>
                    <div className='step__item-distance'>5.7</div>
                    <div className='step__item-action'></div>

                </div>
            </div>
        </div>
    );
}

export default Step;
