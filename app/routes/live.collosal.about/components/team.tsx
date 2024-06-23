import { TeamCard } from ".";

export function Team() {
  const team = [
    { id: "1", name: "Albert Flores", position: "Founder", pic: "team-1" },
    { id: "2", name: "Devon Lane", position: "Chief Technology Officer", pic: "team-2" },
    { id: "3", name: "Darrell Steward", position: "UI Designer", pic: "team-3" },
    { id: "4", name: "Marvin MCKinney", position: "Software Engineer", pic: "team-4" },
    { id: "5", name: "Floyd Miles", position: "System Analyst", pic: "team-5" },
    { id: "6", name: "Anottle Black", position: "Project Manager", pic: "team-6" }
  ]
  return (
    <div className="flex flex-col justify-center place-items-center gap-20 w-full mt-16">
      <div className="text-center grid gap-3 w-5/12">
        <p className="uppercase text-collosal-green font-semibold text-base">our team</p>
        <p className="font-bold text-3xl leading-relaxed">Meet the team! All creative people are here</p>
      </div>

      <div className="grid grid-cols-3 gap-10 w-full">
        {team.map((item) => (

          <TeamCard key={item.id} pic={item.pic} name={item.name} position={item.position} />
        ))}
      </div>
    </div>
  )
}
