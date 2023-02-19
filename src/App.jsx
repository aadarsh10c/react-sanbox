import React from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [ gender , setGender ] = React.useState( '' )

  function handleChange(e){
    console.log("clicked !!!")
    let newValue = e.target.value;
    setGender(newValue)
  }
  function handleSubmit( e ){
    e.preventDefault()
    alert( `form submitted ! new name: ${radio}`)
  } 
  return (
    <div className="App">
      Test:
      <form onSubmit={ handleSubmit } autoComplete>
        <div className="question">
            <input type="radio"
             id="Male"
             className="question__radio"
             value="Male"
             checked={gender === 'Male'}
             onChange={handleChange}
             />
           <label htmlFor="Male" className="question__label">
            Male
          </label>
        </div>
        <div className="question">

            <input type="radio"
             id='Female'
             className="question__radio"
             value="Female"
             checked={gender === 'Female'}
             onChange={handleChange}
             />
          <label htmlFor="Female" className="question__label">
          Female
          </label>            
        </div>
        <button type='submit'>Sumit</button>
      </form>
    </div>
  )
}

export default App
