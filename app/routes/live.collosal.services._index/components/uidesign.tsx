import { SectionBadge, SectionTitle } from "~/routes/live.collosal/components";
import { Dot, UIDesignCard } from ".";
import { Link } from "@remix-run/react";

export function UIDesign() {
  return (
    <div className="grid grid-cols-2 items-center gap-5">
      <div className="rounded-md w-[429px] flex flex-col gap-8 h-[311px] bg-white/10 p-5">
        <div className="flex gap-3">
          <Dot color="red" />
          <Dot color="yellow" />
          <Dot color="green" />
        </div>
        <div className="grid grid-cols-4 gap-7">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 8 }, (item, index) => (
                <div key={index} className="w-5 h-5 bg-white/10 rounded-md"></div>
              ))}
            </div>
            <div className="bg-white/10 w-14 h-14 rounded-md">
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-5 border-2 border-[#44c7ff] h-[250px] bg-white/10 p-5">
            <div className="flex gap-5">
              <div className="w-4 h-4 rounded-md bg-white/10"></div>
              <div className="w-14 h-4 rounded-md bg-white/10"></div>
            </div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-3">
              {Array.from({ length: 3 }, (item, index) => (
                <div className={`bg-white/10 ${index == 0 ? "col-span-2" : ""} h-[87px] rounded-md`}></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 rounded-md bg-white/10"></div>
            <div className="w-14 h-5 rounded-md bg-white/10"></div>
            <div className="w-14 h-11 rounded-md bg-white/10"></div>
          </div>
        </div>
      </div>
      <div className="grid gap-12">
        <div className="flex flex-col gap-4">
          <SectionBadge
            content="ui design"
          />
          <SectionTitle
            title="Don't let your idea get caught by others, design a prototype for your idea"
          />
        </div>
        <p className="font-medium text-base text-white/40">Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes.</p>

        <div className="grid grid-cols-2 gap-3">
          <UIDesignCard
            icon="layout-design"
            title="Beautiful Design"
            content="Create a modern design for your idea."
          />
          <UIDesignCard
            icon="mouse-pointer"
            title="Card Name"
            content="Create vivid prototypes for your designs."
          />
        </div>
        <Link
          to="./development"
          prefetch="intent"
          className="flex gap-2 items-center place-content-end"
        >
          <p
            className="font-semibold text-base">
            Service Detail
          </p>
          <img src="/collosal/arrow-right.svg" />
        </Link>

      </div>
    </div>
  )
}
