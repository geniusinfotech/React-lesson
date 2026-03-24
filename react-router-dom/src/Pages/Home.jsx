import React from "react";

const Home = () => {
  return (
    <>
      <section className="flex items-center justify-center h-screen w-full flex-col gap-y-2">
        <h1 className="text-9xl font-bold">Homepage</h1>
        <h1>Steps:</h1>
        <p>1. Install react router dom</p>
        <p>2. main.jsx == Wrap App with BrowserRouter </p>
        <p>3. App.jsx == Create a Route for all Pages </p>
        <p>4. App.jsx == Wrap All Route with Routes </p>
        <p>5. Convert: a tag == Link </p>
        <p>6. Convert: href == to </p>

      </section>
    </>
  );
};

export default Home;
