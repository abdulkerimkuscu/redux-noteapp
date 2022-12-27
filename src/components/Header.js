import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findNote } from '../redux/notes/notesSlice';

function Header() {
    const dispatch = useDispatch();
    const search = useSelector(state => state.notes.search) 
    
  return (
    <div className='header'>
        <h2>✍🏻 Notes App ✍🏻</h2>
        <input type="search"
        className='search'
        placeholder='Search Notes'
        value={search}
        onChange={(e)=> dispatch(findNote(e.target.value))}
         />
    </div>
  )
}

export default Header