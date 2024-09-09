import { createContext, useContext, useEffect, useState } from "react"

const DataContext = createContext(null)

export const useData = () => useContext(DataContext)

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([])

  const fetchJson = async () => {
    try {
      const response = await fetch("/data_exemple1.JSON") 
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error)
    }
  }

  useEffect(() => {
    fetchJson()
  }, [])

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
