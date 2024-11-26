const App = () => {
  return (
    <>
      <main className=" max-w-2xl mx-auto flex gap-16 px-4 ">
        <div className=" py-4">
          <h1 className=" py-8 text-4xl font-bold uppercase">
            <span className="text-5xl">URL to Video</span>
            <br />
            <span className="bg-gradient-to-br from-emerald-300 from-30% to-sky-300 bg-clip-text text-transparent">
              with power of AI
            </span>
          </h1>
          <form className="  grid gap-2 ">
            <input
              type="url"
              placeholder="https//......."
              className=" border-2 rounded-full bg-transparent text-white  px-4 py-2 grow"
            />
            <button
              type="submit"
              className=" bg-emerald-500 border-2 rounded-full text-white px-4 py-2"
            >
              Create&nbsp;Videos
            </button>
          </form>
        </div>
        <div className=" p-4">
          <div className=" bg-gray-200 w-[240px] h-[380px]">ab</div>
        </div>
      </main>
    </>
  );
};

export default App;
