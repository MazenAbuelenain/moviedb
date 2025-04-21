import React, { useState, useRef, useEffect } from 'react'

function Popup( { selected, closePopUp } ) {
  const [isOpen, setIsOpen] = useState(false);

  const [showReadMoreButton, setShowReadMoreButton] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    if(ref.current) {
        setShowReadMoreButton(
            console.log(ref.current.scrollHeight, ref.current.clientHeight),
            ref.current.scrollHeight !== ref.current.clientHeight
        )
    }
  }, [])
  
  
  return (
    <section className='popup'>
        <div className='content'>
            <h2>{selected.Title} <span> {selected.Year} </span></h2>
            <p className='rating'>Rating: {selected.imdbRating}</p>
            <div className='plot'>
                <img src={selected.Poster} />
                <p>{selected.Plot}</p>
                {showReadMoreButton && (
                    <button className='readMore' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'read less...' : 'read more...'}</button>
                )} 
            </div>

            <button className="close" onClick={closePopUp}>Close</button>
        </div>
    </section>
  )
}

export default Popup