import React, {useRef, useState} from 'react';
import Table from "./Table";
import ItemTable from "./ItemTable";

function Form() {
    const [stateDate, setStateDate] = useState('');
    const [stateDistance, setStateDistance] = useState('');
    const [entries, setEntries] = useState([]);

    const enterStep = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // @ts-ignore
        setEntries( prevEntries => [...prevEntries, { date: stateDate, distance: stateDistance }]);
        setStateDate('')
        setStateDistance('')
    }

    const handlerDate:React.ChangeEventHandler<HTMLInputElement> = (e:React.ChangeEvent<HTMLInputElement>) => {
        setStateDate(e.target.value)
    }
    const handlerDistance:React.ChangeEventHandler<HTMLInputElement> = (e:React.ChangeEvent<HTMLInputElement>) => {
        setStateDistance(e.target.value)
    }
    return (
        <div className='container'>
            <form action="#" onSubmit={enterStep} className='step__form' >
                <label> Дата (ДД.ММ.ГГ)
                    <input type='date' className='step__form' value={stateDate} onChange={handlerDate} name='date'/>
                </label>
                <label>Пройдено км
                    <input type='number' className='step__form' value={stateDistance} onChange={handlerDistance} name='distance'/>
                </label>
                <button className='step__btn' type='submit'>Ок</button>
            </form>
            <div className='step__result'>
                <Table/>
                <ItemTable entries={entries}/>
            </div>
        </div>
    );
}

export default Form;
