import React from "react";
import { useParams, Link } from "react-router-dom";
import { journals } from "../data/journals";

const JournalDetail = () => {
  const { slug } = useParams();

  const journal = journals.find((journal) => journal.slug === slug);

  if (!journal) {
    return <h1>Journal Not Found</h1>;
  }

  const { title, description, date, tags, image, content, takeaways } = journal;

  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-24">
        <Link
          to="/journal"
          className="text-gray-600 hover:text-black transition"
        >
          ← Back to Journal
        </Link>
        <h1 className="text-5xl font-bold mt-10">{title}</h1>
        <p className="mt-6 text-xl text-gray-600">{description}</p>
        {image && (
          <section className="max-w-5xl mx-auto px-6 pt-8 pb-12">
            <img
              src={image}
              alt={title}
              className="w-full h-56 sm:h-72 md:h-96 lg:h-[500px] object-cover rounded-2xl border border-gray-200 shadow-sm"
            />
          </section>
        )}
        <div className="flex flex-wrap items-center gap-3 mt-6 text-gray-500 text-sm">
          <span>{date}</span>
          <span className="text-black text-xl leading-none">•</span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {content.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold border-b-2 border-black inline-block pb-2">
            Journal
          </h2>
          <div className="mt-10 space-y-12">
            {content.map((item) => (
              <div key={item.heading}>
                <h3 className="text-2xl font-semibold">{item.heading}</h3>
                <p className="mt-4 text-lg text-gray-600 leading-8">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="text-center py-16 border-t border-gray-200">
        <h2 className="text-2xl font-bold">Enjoyed this journal?</h2>

        <p className="mt-4 text-gray-600">
          Explore more notes, articles, and technical write-ups.
        </p>

        <Link
          to="/journal"
          className="inline-block mt-8 px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition"
        >
          Browse All Journals →
        </Link>
      </div>
    </>
  );
};

export default JournalDetail;
