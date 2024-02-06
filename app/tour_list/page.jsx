import PackageListItem from "./PackageListItem";
import ListOptions from "./ListOptions";
import PackageFilterItems from "./PackageFilterItems";
import ButtonBlock from "@ui/ButtonBlock";
import { Suspense } from "react";

export default async function TourList() {

  const res = await fetch("https://www.gokamind.com/MedusaTurApi/all_tour", {
    next: { tags: ["tour_collection"] },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    connection: "keep-alive",

    // limit:10,filter:{},sort:{}
    body: JSON.stringify({
      page: "1",
    }),
  });
  const data = await res.json();
  const all_tour = data.data[0];
  const tour_images = data.data[1];
  const tour_locations = data.data[2];
  const tour_categories = data.data[3];

  return (
    <>
      <section
        id="list-main-section"
        className="w-screen flex"
      >
        <PackageFilterItems />
        <div
          id="list-main-wrapper"
          className="flex flex-col justify-end desktop:w-[60%] mx-2 flex-grow overflow-auto bg-white"
        >
          <Suspense fallback={<p>Loading feed...</p>}>
            <ListOptions />
          </Suspense>

          <div>
            <div
              className="flex flex-col justify-start shadow-lg shadow-slate-300 items-center w-full gap-2 p-8"
              id="list-main-layout"
            >
              <Suspense fallback={<p>Loading feed...</p>}>
                <PackageListItem all_tour={all_tour}/>
              </Suspense>
            </div>
          </div>

          <ButtonBlock />
        </div>
      </section>
    </>
  );
}
