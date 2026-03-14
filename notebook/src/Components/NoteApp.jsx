import React from "react";

const NoteApp = () => {
  return (
    <>
      <section className="flex items-center justify-center">
        {/* Add Task */}
        <div className="w-1/2 h-screen flex items-center justify-center">
          <form className="bg-[#222] rounded-xl p-6">
            <h1 className="text-center text-3xl font-bold text-amber-600">
              Create Your Notes
            </h1>
            <input
              type="text"
              className="bg-[#555] px-4 py-2 outline-none text-white rounded-md block my-4 w-96 focus:ring-2 focus:ring-amber-600"
              placeholder="Heading"
            />
            <textarea
              rows="5"
              className="bg-[#555] px-4 py-2 outline-none text-white rounded-md block my-4 w-96 focus:ring-2 focus:ring-amber-600"
              placeholder="Topics...."
            ></textarea>
            <input
              type="submit"
              value="Create Note"
              className="w-96 px-4 py-2 bg-amber-600 active:scale-95 active:bg-amber-100 active:text-amber-600 rounded-md"
            />
          </form>
        </div>

        {/* create note */}
        <div className="w-1/2 h-screen border-l-6 border-white">
          Notes == create a single note for your task
        </div>
      </section>
    </>
  );
};

export default NoteApp;
