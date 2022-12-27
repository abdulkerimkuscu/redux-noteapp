
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../redux/notes/notesSlice';

function NoteList() {
    const items = useSelector(state => state.notes.items);
    const searchText = useSelector(state => state.notes.search);
    const dispatch = useDispatch();

    const filtered = items.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(searchText.toLowerCase())
        );
    });
  return (
    <div className="notes">
    {
        filtered.map(item => (
            <div key={item.id} className="note" style={{ backgroundColor: `${item.color}` }}>
                {item.title}
                <button className="delete-note" onClick={() => dispatch(deleteNote(item.id))}><i className="fa-solid fa-trash"></i></button> <br /> <hr />
                <div>
                    {item.note}
                </div>
            </div>
        ))
    }
</div>
  )
}

export default NoteList

