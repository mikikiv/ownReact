import React, { useState } from 'react'

function WrapperForm({ handleSubmit }) {
  const [url, setUrl] = useState('')
  const [element, setElement] = useState('')
  const [checked, setChecked] = useState(true)
  const [title, setTitle] = useState('Search')

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }
  const handleElementChange = (e) => {
    setElement(e.target.value)
  }
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleCheck = (e) => {
    setChecked(!checked)

    if (!checked) {
      e.target.value = true
    } else {
      e.target.value = false
    }
  }

  let includeTitle = checked === true ? title : ''
  let website = url + element + includeTitle

  return (
    <form>
      <div>
        <label htmlFor="url">Website</label>
        <input id="url" onChange={handleUrlChange} type="url" value={url} />
      </div>
      <div>
        <label htmlFor="element">ID/Class/Element</label>
        <input
          id="element"
          type="text"
          onChange={handleElementChange}
          value={element}
        />
      </div>
      <label htmlFor="titleSwitch">Title Y/N</label>
      <input
        id="titleyn"
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
      />
      <input
        id="title"
        type="text"
        onChange={handleTitleChange}
        placeholder="Search"
      />
      <button
        value="id"
        onClick={(e) => handleSubmit([localStorage.length + 1, website])}
      >
        ID
      </button>
      <button value="class" onClick={() => handleSubmit('class')}>
        Class
      </button>
      <button value="element" onClick={() => handleSubmit('element')}>
        Element
      </button>
    </form>
  )
}

export default WrapperForm
