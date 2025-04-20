import React, { useState } from 'react'
import axios from 'axios'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'

function App() {

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const apiUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=cb12994e";

  const search = (e) => {
    if (e.key === "Enter"){
      axios(apiUrl + "&s=" + state.s).then(({data}) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s}
    });
  }

  const openPopUp = id => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopUp = () => {
    setState(prevState => {
      return { ...prevState, selected: {}}
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Mazen's Movie Database</h1>
      </header>

      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopUp={openPopUp} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopUp}/> : false}
      </main>
    </div>
  );
}

export default App;
