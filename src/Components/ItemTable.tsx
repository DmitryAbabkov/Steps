import React, {useRef} from 'react';

interface Entry {
    date: string;
    distance: string;
}

interface ItemTableProps {
    entries: Entry[];
}

const ItemTable: React.FC<ItemTableProps> = ({ entries }) => {
    const dataId: React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const bd:Entry[] = [...entries];
    const mergedData:Entry[] = bd.reduce((acc:Entry[], current:Entry) => {
        const existing = acc.find(item => item.date === current.date);
        if (existing) {
            existing.distance = String(+existing.distance + Number(current.distance));
        } else {
            acc.push({ ...current });
        }
        return acc;
    }, []);

    mergedData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const del = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget.parentNode as Element;
        if(el) {
            el.remove()
        }
        const date: HTMLDivElement | null  = dataId.current;
        if(date) {
            const dateDelete = date.innerText;
            let index = mergedData.findIndex(date => date.date == dateDelete);
            mergedData.splice(index, 1);
        }
    }


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
