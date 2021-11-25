// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  //   const [error, setError] = React.useState('')
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
      setUsername(event.target.value.toLowerCase());
  }

  //   function handleChange(event) {
  //     const username = event.target.value
  //     const isValid = username === username.toLowerCase()
  //     setError(isValid ? null : 'Username should be lowercase')
  //   }

//   const inputRef = React.useRef()

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userInput">Username:</label>
        <input
          id="userInput"
          type="text"
          value={username}
          onChange={handleChange}
        />
      </div>
      {/* <div role="alert" style={{color: 'red'}}>
        {error}
      </div> */}
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
