import React from 'react'
import { FaTimes } from 'react-icons/fa'

function HistoryItems({ children }) {
  return (
    <>
      {children.map(function (item) {
        return (
          <li key={item[0]}>
            {item[1]}
            {/* for when we are ready to delete these items
              <button style={{ margin: '6px' }}>
                <FaTimes />
              </button> */}
          </li>
        )
      })}
    </>
  )
}

export default HistoryItems
