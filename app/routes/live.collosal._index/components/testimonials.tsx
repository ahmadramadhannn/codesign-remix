import { SectionBadge, SectionTitle } from "~/routes/live.collosal/components";
import { TestimonialCard } from ".";
import { useState } from "react";

export function Testimonials() {

  return (
    <div className="flex flex-col gap-14 mt-24">
      <div className="w-3/6 mx-auto text-center">
        <SectionBadge content="testimonial" />
        <SectionTitle title="What do our clients say that we never let down?" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  )
}
