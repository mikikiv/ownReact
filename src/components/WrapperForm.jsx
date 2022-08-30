import React from 'react'

function WrapperForm({ handleSubmit }) {
  return (
    <form>
      <div>
        <label htmlFor="url">Website</label>
        <input type="url" name="url" id="url" />
      </div>
      <div>
        <label htmlFor="element">ID/Class/Element</label>
        <input type="text" name="element" id="element" />
      </div>
      <label htmlFor="titleSwitch">Title Y/N</label>
      <input type="checkbox" name="titleSwitch" id="titleSwitch" />
      <button
        onClick={(e) =>
          handleSubmit([localStorage.length + 1, localStorage.length + 1])
        }
      >
        ID
      </button>
      <button onClick={() => handleSubmit('class')}>Class</button>
      <button onClick={() => handleSubmit('element')}>Element</button>
    </form>
  )
}

export default WrapperForm
