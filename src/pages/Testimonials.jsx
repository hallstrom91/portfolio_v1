import React from "react";
import { useTranslation } from "react-i18next";
import "../css/Fonts.css";

import { FaUserGraduate } from "react-icons/fa6";
import { BsChatSquareQuoteFill } from "react-icons/bs";

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = t("data.testimonials", { returnObjects: true });
  console.log(testimonials);
  return (
    <>
      <section
        id="testimonials"
        className="bg-gradient-to-b from-slate-600 to-slate-500 pt-10"
      >
        <div className="container px-5 py-10 mx-auto text-center">
          <FaUserGraduate className="inline-block mb-4" size={40} />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12 anta-regular underline">
            {t("translation.testimonials.title")}
          </h1>
          <div className="flex flex-wrap m-4">
            {testimonials.map((testimonial) => (
              <div className="p-4 md:w-1/2 w-full" key={testimonial.id}>
                <div className="h-full bg-gray-900 bg-opacity-40 p-8 rounded">
                  <BsChatSquareQuoteFill className="block w-8 text-white mb-4 text-[30px]" />
                  <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                  <div className="inline-flex items-center">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-white">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-500 text-sm uppercase">
                        {testimonial.company}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
