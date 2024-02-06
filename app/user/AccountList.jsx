const AccountList = () => {
  return (
    <div
      className="px-6 w-screen my-10 mx-12 md:mt-[21rem] lg:px-[100px] md:justify-end md:items-center hidden"
      id="list-main-section"
    >
      <div
        id="list-main-wrapper"
        className="flex flex-col justify-end w-full"
      >
        <div
          className="flex justify-between items-center lg:w-3/5 mb-4"
          id="list-main-flex-info"
        >
          <h6>
            Showing 4 of <span className="text-primary">257 Tours</span>
          </h6>
          <div className="flex gap-4">
            <div className="flex gap-1">
              <h6>Sort By Recommended</h6>

              <img
                src="public/vector.svg"
                alt=""
              />
            </div>

            <button
              className="flex gap-1"
              id="toggle-filter"
            >
              <h6>Filter</h6>
              <img
                src="public/vector.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div
          className="flex flex-col justify-start shadow-lg shadow-slate-300 items-center w-full gap-2 p-8"
          id="list-main-layout"
        ></div>
      </div>
    </div>
  );
};

export default AccountList;
