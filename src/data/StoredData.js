const historyArray = Object.entries(localStorage)
const StoredData = []
historyArray.map(function (item) {
  if (!isNaN(item[0])) {
    StoredData.push(item)
  }
})

export default StoredData
