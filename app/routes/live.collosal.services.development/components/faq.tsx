import { SectionBadge, SectionTitle } from "~/routes/live.collosal/components";
import { FaqItem } from "."


export function Faq() {
  const faqItems = [
    { title: "How is the payment system?", description: "If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off." },
    {
      title: "Can I consult first?",
      description: "Of course you can consult us first. We are very happy to help your problems and provide our best solutions. You can contact us via the contact page."
    },
    {
      title: "What if the project stops halfway",
      description: "We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated."
    },
    {
      title: "Does it include servers and domains?",
      description: "You don't need to think about anything else, we have everything prepared. You just need to check your progress and make sure the features you want are the right one."
    },
    {
      title: "Will I get the source code?",
      description: "When the project is 100% complete, all the resources, such as design files, analysis diagrams, source code, etc. will be provided to you. You don't need to worry about this."
    },
    {
      title: "Is there a warranty?",
      description: "1 year warranty for our errors or mistakes. If you want to add a feature that is not included in the warranty, there is another fee per feature, and the price depends on the difficulty."
    }
  ]
  return (
    <div className="w-full mt-24">
      <div className="w-3/5 mx-auto text-center">
        <SectionBadge content="faq" />
        <SectionTitle title="Frequently asked questions, maybe the same as yours" />
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-20 mt-28">
        {faqItems.map((item, index) => (
          <FaqItem key={index} title={item.title} description={item.description} />
        ))}
      </div>
      <p className="mt-24 text-center text-base font-medium">Didn't find an answer? <span className="text-collosal-primary font-bold"> Do not hesitate to ask! </span></p>
    </div>
  )
}
