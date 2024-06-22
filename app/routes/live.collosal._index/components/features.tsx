import { FeatureCard } from "."

export function Features() {
  return (
    <div className="grid gap-10 grid-cols-3 mt-10">
      <FeatureCard icon="design" featureName="Design" description="The project interface will be designed first, our favorite tool is Figma." />
      <FeatureCard icon="code" featureName="Develop" description="Transform design and write business logic here. Choose the technology you want." />
      <FeatureCard icon="ship" featureName="Ship" description="After the work is complete, we will send the project and all its assets to you." />
    </div>
  )
}
