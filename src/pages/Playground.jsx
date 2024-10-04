import { useParams } from "react-router-dom";

const Playground = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
      {/* header */}
      <div className="bg-gray-700 w-full h-[4rem] text-center py-4">
        <i class="fa-brands fa-codepen text-white text-4xl"></i>
      </div>
      {/* code */}
      <div className="flex w-[100vw] h-[90vh]">
        {/* editor */}
        <div className="bg-gray-700 w-[65%]"></div>
        <div className="flex flex-col w-[35%]">
          {/* input */}
          <div className="flex flex-col gap-1 h-1/2">
            <div className="shadow-md w-full">
              <div className="mx-auto py-3 px-2 w-[95%] flex justify-between">
                <h1 className="font-semibold tracking-wide text-slate-600">
                  Input:
                </h1>
                <div>
                  <label
                    htmlFor="file"
                    className="flex flex-row gap-3 items-center cursor-pointer"
                  >
                    <i class="fa-solid fa-download text-slate-600"></i>
                    <p className="text-sm text-slate-600">Import Input</p>
                  </label>
                  <input className="hidden" type="file" id="file" />
                </div>
              </div>
            </div>
            <div className="h-full">
              <textarea
                className="px-2 outline-none resize-none w-full h-full"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
          {/* output */}
          <div className="flex flex-col gap-1 h-1/2">
            <div className="shadow-md border-t-2 w-full">
              <div className="mx-auto py-3 px-2 w-[95%] flex justify-between">
                <h1 className="font-semibold tracking-wide text-slate-600">
                  output:
                </h1>
                <div>
                  <button className="flex flex-row gap-3 items-center">
                    <i class="fa-solid fa-upload text-slate-600"></i>
                    <p className="text-sm text-slate-600">Export Output</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="h-full">
              <textarea
                className="px-2 outline-none resize-none w-full h-full"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playground;
