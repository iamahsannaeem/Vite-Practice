import React, { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  useEffect(() => {
    fetchData()
  }, [])
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3500/data")
      setData(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (formData.id) {
        await axios.put(`http://localhost:3500/data/${formData.id}`, formData)
        const updatedData = data.map((item) =>
          item.id === formData.id ? formData : item
        )
        setData(updatedData)
      } else {
        const response = await axios.post(
          "http://localhost:3500/data",
          formData
        )
        setData([...data, response.data])
      }
      setFormData({
        name: "",
        email: "",
      })
    } catch (error) {
      console.error("Error submitting data:", error)
    }
  }

  const handleEdit = (item) => {
    setFormData(item)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3500/data/${id}`)
      const newData = data.filter((item) => item.id !== id)
      setData(newData)
    } catch (error) {
      console.error("Error deleting data:", error)
    }
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-center mt-5">
        Record Manager
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center gap-4 w-[500px] mx-auto "
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={onChange}
          className="border border-gray-300 p-2 rounded-lg w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={onChange}
          className="border border-gray-300 p-2 rounded-lg w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded-lg"
        >
          {formData.id ? "Update" : "Add"}
        </button>
      </form>
      <ul className="mt-4">
        {data.map((item) => (
          <li
            key={item.id}
            className="border border-gray-300 p-2 rounded-lg w-[500px] mx-auto mb-2 flex justify-between items-center"
          >
            <div className="flex space-x-2">
              <p className="bg-green-200 px-3 rounded">{item.name}</p>
              <p className="bg-green-200 px-3 rounded">{item.email}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-yellow-500 text-white px-4 py-1 rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-4 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
