const App = () => {
  return (
    <>
      <main className=" max-w-2xl mx-auto flex gap-16 px-4 ">
        <div className=" py-8">
          <h1 className=" py-8 text-4xl font-bold uppercase">
            Genrate a video <br /> form a URL with power of AI
          </h1>
          <form className=" border-2 rounded-full flex overflow-hidden">
            <input
              type="url"
              placeholder="https//......."
              className=" bg-transparent text-white  px-4 py-2 grow"
            />
            <button type="submit" className=" bg-white text-black px-4">
              Create&nbsp;Videos
            </button>
          </form>
        </div>
        <div className=" p-8">
          <div className=" bg-gray-200 w-[240px] h-[380px]">ab</div>
        </div>
      </main>
    </>
  );
};

export default App;
