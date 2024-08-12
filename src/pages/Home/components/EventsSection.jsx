import React from "react";
import { ALL_COURSES } from "../../../data/courses";
import CourseItem from "../../../components/products/CourseItem";
import mascotEm from "../../../assets/mascot-em.png";


export default function EventsSection() {
  return (
    <section className="py-6 mt-20 mb-10">
      <header className="mb-20 text-center">
        <h2 className="text-4xl text-center font-semibold mb-4">
          Upcoming events
        </h2>
        <p className="text-sm text-gray-800">
          Here are some of the upcoming events that we&lsquo;ll be hosting
          around Vancouver
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-8 mb-16">
        {ALL_COURSES.map((courseItem, index) => (
          <CourseItem key={index} course={courseItem} />
        ))}
      </section>
      <footer className="text-center">
        <img
          src={mascotEm}
          alt="One of Emerson's two mascots, Em"
          className="block w-[300px] mx-auto mb-4"
        />
        <h3 className="text-2xl text-center font-semibold mb-4">
          Looking for more events?
        </h3>
        <p className="text-sm text-gray-800 mb-3 sm:w-2/3 lg:w-1/3 mx-auto leading-6">
          The events you saw above are just a few of the upcoming events we
          have... To see all of our events, click the button below to view
          Emerson's event calendar.
        </p>
        <a
          href="https://events.emersonacademy.org"
          target="_blank"
          rel="noreferrer"
          className="inline-block mx-auto bg-yellow-300 hover:bg-yellow-400 transition duration-500 ease-in-out rounded-full text-gray-900 text-sm px-4 py-2"
        >
          View all events
        </a>
      </footer>
    </section>
  );
}
