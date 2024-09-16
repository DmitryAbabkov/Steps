import React, {useRef} from 'react';

interface Entry {
    date: string;
    distance: string;
}

interface ItemTableProps {
    entries: Entry[];
}

const ItemTable: React.FC<ItemTableProps> = ({ entries }) => {
    const bd:Entry[] = [...entries];
    const mergedData:Entry[] = bd.reduce((acc:Entry[], current:Entry) => {
        const existing = acc.find(item => item.date === current.date);
        if (existing) {
            existing.distance += +current.distance;
        } else {
            acc.push({ ...current });
        }
        return acc;
    }, []);

    mergedData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const del = (e:any) => {
        e.target.parentNode.remove()
        const date:any = dataId.current;
        const dateDelete = date.innerText;
        let index = mergedData.findIndex(date => date.date == dateDelete);
        mergedData.splice(index, 1);
    }

    const dataId:React.MutableRefObject<null> = useRef(null);

    return (
        <div>
            {mergedData.map((item: Entry, key: number) => (
                <div key={key} className='step_item'>
                    <div className='step__item-date' ref={dataId}>{item.date}</div>
                    <div className='step__item-distance'>{item.distance}</div>
                    <div className='step__item-action' onClick={del}>✘</div>
                </div>

            ))}

        </div>
    );
}

export default ItemTable;
