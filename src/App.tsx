import './App.scss';

import { useState } from 'react';

import UnicodeResult from './UnicodeResult';

function App() {
  const [inputCharacters, setInputCharacters] = useState<string[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Unicode Encoder</div>
        <div className="github">
          <a href="https://github.com/hsgw/unicode_encoder_app">Github</a>
        </div>
      </header>
      <main>
        <div className="description">
          <h1>Converts characters into Unicode codepoints.</h1>
          <p>Type to convert.</p>
        </div>
        <div className="input">
          <input
            type="text"
            className="textInput"
            placeholder="Input charactors"
            onChange={(e) => {
              setInputCharacters([...e.currentTarget.value]);
            }}
          ></input>
        </div>
        <div className="result">
          {inputCharacters[0] ? (
            inputCharacters.map((c, i) => (
              <UnicodeResult key={i.toString() + c} char={c} />
            ))
          ) : (
            <div className="noResult">Nothing.</div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
