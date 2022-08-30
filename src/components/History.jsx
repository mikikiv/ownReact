import HistoryItems from './HistoryItems'

function History({ children }) {
  return (
    <ul>
      <HistoryItems>{children}</HistoryItems>
    </ul>
  )
}

export default History
