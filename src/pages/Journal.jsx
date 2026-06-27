import React from 'react'
import JournalCard from '../components/JournalCard'
import { journals } from '../data/journals'


const Journal = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">My Journals</h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Notes, tutorials, experiments, and lessons from my web development
            journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {journals.map((journal) => (
            <JournalCard
              key={journal.id}
              {...journal}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Journal