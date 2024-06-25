import { Suspense, useEffect, useState } from "react";
import { author_fetcher, news_fetcher } from "../src/component/data_Fetcher";
import Header from "./layout/header/Header";
import News from "./layout/section/News";

function App() {
  const [authorJsonData, setauthorJsonData] = useState([]);
  const [newsJsonData, setnewsJsonData] = useState([]);

  useEffect(() => {
    author_fetcher(setauthorJsonData);
    news_fetcher(setnewsJsonData);
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex  flex-col overflow-hidden">
        <Header />

        <Suspense fallback={"Loading..."}>
          <div className=" flex flex-col w-full h-full overflow-auto">
            <div
              style={{
                backgroundImage: `url("https://t4.ftcdn.net/jpg/04/57/03/65/360_F_457036545_UODIgkNJuZ0wWgTjTtYonuvL4vLLwtbL.jpg")`,
              }}
              className="text-white h-[200px] shrink-0 w-full bg-slate-500 justify-center items-center flex mb-10"
            >
              <h1 className="text-[50px] border-4 px-10 ">NEWS ROOM</h1>
            </div>
            <News
              news_meta_data={newsJsonData}
              author_meta_data={authorJsonData}
            />
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default App;
