import React from "react";
import {
  CalendarDaysIcon,
  CheckCircleIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";

export default function CourseItem(params) {
  const { course } = params;

  const formattedListedPrice = `$${course.listedPrice}`;
  const formattedDiscountedPrice = `$${course.discountedPrice}`;
  const formattedDateTime = `${course.date}, ${course.time}`;

  return (
    <a
      href={course.url}
      className="w-full relative"
      target="_blank"
      rel="noreferrer"
    >
      {/* Arrow Left */}

      <header
        className={`overflow-hidden h-[275px] rounded-2xl mb-2 relative hover:shadow-md duration-250 transition ease-in-out ${
          course.featured ? "border-[8px] border-yellow-300 shadow-lg" : ""
        }`}
      >
        {course.label && (
          <div
            className={`absolute px-3 py-1 top-3 right-3 rounded-xl text-[12px] shadow-xl ${
              course.discountedPrice == 0
                ? "bg-blue-600 text-white"
                : "bg-yellow-300 text-gray-800"
            }`}
          >
            {course.label}
          </div>
        )}
        <img
          src={course.previewImage}
          alt={course.title}
          className="block w-full h-full object-cover"
        />
      </header>
      <section>
        <header className="mb-1">
          <h2 className="text-[12.5px] bg-gray-100 text-gray-700 rounded-full inline-block px-3 py-0.5 mb-1">
            {course.title}
          </h2>
          <h2 className="text-[15px] leading-[125%] font-semibold">
            {course.secondary}
          </h2>
        </header>

        <article className="mb-1">
          <div className="flex items-center gap-x-1">
            <CalendarDaysIcon className="w-4 h-4 text-gray-600" />
            <p className="text-[13.5px] text-gray-500">{formattedDateTime}</p>
          </div>
          <a
            className="flex items-center gap-x-1 text-gray-600 hover:text-gray-800"
            href={course.locationURL}
            target="_blank"
            rel="noreferrer"
          >
            <MapPinIcon className="w-4 h-4" />
            <p className="text-[13.5px]">{course.location}</p>
          </a>
        </article>

        <article className="mb-2">
          <div>
            {course.discountedPrice > 0 ? (
              <div className="flex gap-x-2">
                <p className="text-sm">From {formattedDiscountedPrice}</p>
                <p className="text-[13.5px] line-through text-gray-600">
                  List: {formattedListedPrice}
                </p>
              </div>
            ) : (
              <div className="flex items-center">
                <CheckCircleIcon className="w-4 h-4 text-blue-600" />
                <p className="ml-1 text-[13.5px] text-gray-600">Free event</p>
              </div>
            )}
          </div>
        </article>

        {course.published && (
          <footer className="flex gap-x-2 mb-2">
            {course.workshop ? (
              <button className="bg-yellow-300 hover:bg-yellow-400 transition duration-500 ease-in-out rounded-full text-gray-900 text-xs px-3 py-1.5">
                View workshop
              </button>
            ) : (
              <button className="bg-white hover:bg-gray-50 transition duration-500 ease-in-out border border-blue-600 text-blue-600 rounded-full text-xs px-3 py-1.5">
                View event
              </button>
            )}
            {course.workshop && (
              <a
                className="bg-white border hover:bg-gray-50 border-blue-500 transition duration-500 ease-in-out rounded-full text-gray-900 text-xs px-3 py-1.5"
                href={course.curriculumURL}
                target="_blank"
                rel="noreferrer"
              >
                Curriculum
              </a>
            )}
          </footer>
        )}
      </section>
    </a>
  );
}
