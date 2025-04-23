import React, { useState, useRef, useEffect } from 'react'

function Popup( { selected, closePopUp } ) {
  const [isOpen, setIsOpen] = useState(false);

  const [showReadMore, setShowReadMore] = useState(false);

  const ref = useRef(null);

//   useEffect(() => {
//     if(ref.current) {
//         console.log(ref.current.scrollHeight, ref.current.clientHeight)
//         setShowReadMore(
//             ref.current.scrollHeight !== ref.current.clientHeight
//         )
//     }
//   }, [])

    var showChar = 300;
    var c = selected.Plot + '';

    if(selected.Plot.length > showChar && !showReadMore){
        c = c.substring(0, showChar).trim() + '...';
    }  
  
  return (
    <section className='popup'>
        <div className='content'>
            <h2>{selected.Title} <span> {selected.Year} </span></h2>
            <p className='rating'>Rating: {selected.imdbRating}</p>
            <div className='plot'>
                {/* <img src={selected.Poster} /> */}
                <p className={isOpen ? null : 'readMore'}>{c}
                    <a className='readButton' onClick={() => setShowReadMore(!showReadMore)}> 
                        {/* {showReadMore && (
                            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'read less...' : 'read more...'}</button>
                        )} */}
                        {showReadMore ? 'less' : 'more'}
                    </a>
                </p> 
            </div>

            <button className="close" onClick={closePopUp}>Close</button>
        </div>
    </section>
  )
}

export default Popup