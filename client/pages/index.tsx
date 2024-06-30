import React from "react";

const index = () => {
  return (
    <>
      <div className="my-8 px-4 md:mx-32 w-full h-full">
        <div className="flex justify-center mt-3 p-5">
          <input
            type="text"
            className="border border-grey p-2 rounded-md focus:outline-none focus:border-blue"
            placeholder="room name"
          />
          <button className="bg-blue border text-white rounded-md p-2 md:ml-4">
            create room
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
