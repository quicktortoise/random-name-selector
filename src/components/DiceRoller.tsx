import { useState } from 'react'
import { randomInt } from '../lib/random'

const BOUNDS_MIN = 1
const BOUNDS_MAX = 99

export function DiceRoller() {
  const [lowerBound, setLowerBound] = useState(1)
  const [upperBound, setUpperBound] = useState(6)
  const [result, setResult] = useState<number | null>(null)

  function roll() {
    if (lowerBound >= upperBound) {
      alert('Lower bound must be less than upper bound.')
      return
    }
    setResult(randomInt(lowerBound, upperBound))
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3">
        <label
          htmlFor="lower-bound"
          className="text-sm font-medium text-slate-600 dark:text-slate-400"
        >
          Lower bound
        </label>
        <input
          id="lower-bound"
          type="number"
          min={BOUNDS_MIN}
          max={BOUNDS_MAX}
          value={lowerBound}
          onChange={(e) => setLowerBound(Number(e.target.value))}
          className="w-20 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-800 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-teal-400 dark:focus:ring-teal-400"
        />
        <label
          htmlFor="upper-bound"
          className="text-sm font-medium text-slate-600 dark:text-slate-400"
        >
          Upper bound
        </label>
        <input
          id="upper-bound"
          type="number"
          min={BOUNDS_MIN}
          max={BOUNDS_MAX}
          value={upperBound}
          onChange={(e) => setUpperBound(Number(e.target.value))}
          className="w-20 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-800 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-teal-400 dark:focus:ring-teal-400"
        />
      </div>

      <button onClick={roll} className="btn-primary">Roll</button>

      {result !== null && (
        <p className="font-semibold text-teal-700 dark:text-teal-400">
          Result: <span>{result}</span>
        </p>
      )}
    </div>
  )
}
