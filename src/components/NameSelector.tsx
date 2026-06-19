import { useEffect, useRef, useState } from 'react'

const MIN_NAMES = 2

export function NameSelector() {
  const [names, setNames] = useState<string[]>(['', ''])
  const [result, setResult] = useState<string | null>(null)
  const [history, setHistory] = useState<string[]>([])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const shouldFocusLast = useRef(false)

  useEffect(() => {
    if (shouldFocusLast.current) {
      shouldFocusLast.current = false
      inputRefs.current[names.length - 1]?.focus()
    }
  }, [names.length])

  function handleChange(index: number, value: string) {
    setNames((prev) => prev.map((n, i) => (i === index ? value : n)))
  }

  function addName() {
    shouldFocusLast.current = true
    setNames((prev) => [...prev, ''])
  }

  function removeName() {
    if (names.length <= MIN_NAMES) {
      alert('Cannot remove the last two entries.')
      return
    }
    setNames((prev) => prev.slice(0, -1))
  }

  function selectName() {
    const emptyIndex = names.findIndex((n) => n.trim() === '')
    if (emptyIndex !== -1) {
      alert('All name fields must be filled in before selecting.')
      return
    }
    const randomIndex = Math.floor(Math.random() * (names.length * 5) + 1) % names.length
    const selected = names[randomIndex]
    setResult(selected)
    setHistory((prev) => [...prev, selected])
  }

  function clearHistory() {
    setHistory([])
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Names</p>
        <ul className="space-y-1.5">
          {names.map((name, i) => (
            <li key={i}>
              <input
                ref={(el) => { inputRefs.current[i] = el }}
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') selectName() }}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-teal-400 dark:focus:ring-teal-400"
              />
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 pt-1">
          <button onClick={addName} className="btn-secondary">Add</button>
          <button onClick={removeName} className="btn-secondary">Remove</button>
          <button onClick={selectName} className="btn-primary">Select Name</button>
        </div>
      </div>

      {result !== null && (
        <div>
          <p className="font-semibold text-teal-700 dark:text-teal-400">
            Result: <span>{result}</span>
          </p>
        </div>
      )}

      <div className="space-y-2">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">History</p>
        {history.length === 0 ? (
          <p className="text-sm text-slate-400 dark:text-slate-500">No selections yet.</p>
        ) : (
          <ol className="list-decimal space-y-0.5 pl-5">
            {history.map((name, i) => (
              <li key={i} className="text-sm text-slate-700 dark:text-slate-300">
                {name}
              </li>
            ))}
          </ol>
        )}
        {history.length > 0 && (
          <button onClick={clearHistory} className="btn-secondary mt-1">
            Clear History
          </button>
        )}
      </div>
    </div>
  )
}
