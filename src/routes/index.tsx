import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import { useEffect, useState } from 'react';
import init, { greet } from 'vite-rust-wasm';

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  const [heading, setHeading] = useState("");
  useEffect(() => {
    init().then(() => {
      const greeting = greet("Funtastic Vite + Rust + WebAssembly!");
      setHeading(greeting);
      console.log(greeting);
    });
  }, []);  
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p>
        Vite + Rust + WebAssembly
        </p>
        {heading && (
          <p className="text-2xl font-bold mt-4">
            {heading}
          </p>
        )}
        <a
          className="text-[#61dafb] hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
      </header>
    </div>
  )
}
