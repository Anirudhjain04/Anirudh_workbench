import React from 'react'
import { journals } from '../data/journals'
import JournalCard from './JournalCard'
import { Link } from 'react-router-dom'

const RecentJournal = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold">
          Recent Journal
        </h2>
        <p className="mt-4 text-gray-600 ">
          Here are some of my recent journals where I share my learnings and experiences in web development.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {journals.slice(0, 2).map((journal) => (
            <JournalCard
            key={journal.id}
            {...journal}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
          to="/journal"
          className="px-6 py-3 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition">
            View All Journal →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RecentJournal