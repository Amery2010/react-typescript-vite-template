import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center">
        <a
          className="font-medium text-[#747bff] hover:text-[#535bf2] dark:text-[#646cff]"
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="h-36 p-6 transition-[filter_300] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2rem_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a
          className="font-medium text-[#747bff] hover:text-[#535bf2] dark:text-[#646cff]"
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="h-36 animate-[spin_20s_linear_infinite] p-6 transition-[filter_300] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2rem_#646cffaa]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="p-8 text-5xl font-bold">Vite + React</h1>
      <div className="p-8">
        <button
          className="cursor-pointer rounded-lg border border-solid border-transparent bg-[#f9f9f9] px-5 py-2.5 font-medium transition-[border-color] duration-300 hover:border-[#646cff] dark:bg-[#1a1a1a]"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="my-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
