import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount,decrementByAmount,reset } from './features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-80 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Redux Counter</h1>

        <div className="text-5xl font-semibold text-purple-700 mb-8">{count}</div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition"
          >
            −1
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition"
          >
            +1
          </button>
          <button
            onClick={() => dispatch(decrementByAmount(5))}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded-lg transition"
          >
            −5
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
          >
            +5
          </button>
        </div>

        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
