import { TestimonialLogo } from ".";

export function Testimonial() {
  return (
    <div className="border-t border-b border-white/10 flex place-content-center gap-12 items-center mt-3 p-10">
      <TestimonialLogo name="github" />
      <TestimonialLogo name="forbes" />
      <TestimonialLogo name="google" />
      <TestimonialLogo name="microsoft" />
      <TestimonialLogo name="facebook" />
    </div>
  )
}
