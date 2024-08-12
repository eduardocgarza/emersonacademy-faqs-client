import React, { useState } from "react";
import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

export default function NewsletterSection() {
  return (
    <section className="pb-20">
      <section className="mx-auto sm:w-2/3 lg:w-2/3 text-center">
        <header className="mb-6">
          <h2 className="text-4xl text-center font-bold mb-3">
            Get email updates
          </h2>
          <p className="text-md text-gray-800">
            Subscribe to our newsletter to get the latest updates on upcoming
            events, giveaways, and more.
          </p>
        </header>

        <div>
          <a
            className="w-full max-w-[500px] border border-gray-300 flex items-center rounded-full py-3 px-4 mb-4 mx-auto"
            href="https://emersonacademy.ck.page/b06daa109f"
            rel="noreferrer"
            target="_blank"
          >
            <EnvelopeIcon className="w-5 h-5 text-gray-400" />
            <span className="ml-3 text-sm text-gray-700 flex-1 text-left">
              Email
            </span>
            <span className="block">
              <ArrowRightIcon className="w-5 h-5 text-blue-600" />
            </span>
          </a>
          <div className="mx-auto max-w-screen-sm text-sm text-gray-500 newsletter-form-footer text-center">
            We care about the protection of your data.{" "}
            <a
              href="https://ai.emersonacademy.org/privacy"
              className="font-medium text-primary-600 dark:text-primary-500 hover:underline text-xs"
            >
              Read our Privacy Policy
            </a>
            .
          </div>
        </div>
      </section>
    </section>
  );
}
