import { useState } from 'react'
import { NameSelector } from './components/NameSelector'
import { DiceRoller } from './components/DiceRoller'

type Tab = 'names' | 'dice'

const tabs: { id: Tab; label: string }[] = [
  { id: 'names', label: 'Name Selector' },
  { id: 'dice', label: 'Dice Roller' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('names')

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto w-full max-w-md px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Random Name Selector
        </h1>

        <div className="mb-6 flex rounded-lg border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={[
                'flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                activeTab === tab.id
                  ? 'bg-teal-600 text-white dark:bg-teal-500'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100',
              ].join(' ')}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          {activeTab === 'names' ? <NameSelector /> : <DiceRoller />}
        </div>
      </div>
    </div>
  )
}
