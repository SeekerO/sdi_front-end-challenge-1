import React from "react";
import lalamove from "../../assets/tmp-lalamove-partnership.webp";
import lauchestoyota from "../../assets/tmsph-launches-toyota-rentacar.webp";
import midafood from "../../assets/tmsph-ls-midafood.jpeg";
import moment from "moment";
import { PiShareFatLight } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPaginate from "react-paginate";
const News = ({ news_meta_data, author_meta_data }) => {
  const displayImagesURL = (url) => {
    if (url.includes("lalamove-partnership")) return lalamove;
    if (url.includes("launches-toyota-rentacar")) return lauchestoyota;
    if (url.includes("ls-midafood")) return midafood;
  };

  const getAuthorName = (id) => {
    const author = author_meta_data.find((data) => data.id === id);
    return author ? author.name : "Unknown Author";
  };

  const removeAlphaCar = (inputString) => {
    return inputString.replace(/&#x3B1;Car/g, "");
  };

  return (
    <div className="h-full w-full  flex flex-col">
      <div className=" px-10 flex flex-col gap-10 items-center ">
        {news_meta_data?.map((data, index) => (
          <div
            key={data.id}
            className=" flex flex-col justify-start w-[50vw] p-3 rounded-sm bg-white shadow-md "
          >
            <img
              src={displayImagesURL(data.image_url)}
              className=" h-[500px]"
            />

            <div className="flex border-b-2 border-slate-200 justify-between -mt-30">
              <div className="flex flex-col items-center bg-red-600 h-20 w-20 font-normal text-white -mt-14 ml-3 mb-10 justify-center transform -skew-y-6 rotate-6">
                <span className="text-[30px]">
                  {moment(new Date(data.created_at)).format("D")}
                </span>
                <span className="font-thin -mt-2">
                  {moment(new Date(data.created_at)).format("MMM")}
                </span>
                <div className="border-solid border-transparent border-l-white  border-b-white h-0 w-0 border-4 -rotate-90 ml-[60px]" />
              </div>
              <label className="flex items-center gap-1 text-[11px] mr-2 font-semibold hover:text-blue-500 cursor-pointer">
                <PiShareFatLight />
                SHARE
              </label>
            </div>
            <div className=" bg-white bottom-0 flex flex-col gap-2px-5 pb-10 mt-2 ">
              <span className="text-red-500 font-semibold text-[14px]">
                {getAuthorName(data.author_id)}
              </span>
              <span className="text-slate-700 font-bold text-[25px]">
                {removeAlphaCar(data.title)}
              </span>
              <span className="mt-2 text-slate-700">{removeAlphaCar(data.body)}</span>
              <span className="mt-10  text-[10px] underline font-bold underline-offset-2 text-slate-700">
                READ ARTICLE
              </span>
            </div>
          </div>
        ))}
        <div className=" mb-10">
          <ReactPaginate
            previousLabel={<IoIosArrowBack />}
            nextLabel={<IoIosArrowForward />}
            breakLabel={"..."}
            pageCount={50}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={"flex space-x-2 items-center"}
            pageClassName={"pagination_buttons"}
            pageLinkClassName={"text-red-500"}
            previousClassName={"pagination_buttons"}
            previousLinkClassName={"text-red-500"}
            nextClassName={"pagination_buttons"}
            nextLinkClassName={"text-red-500"}
            breakClassName={"pagination_buttons"}
            breakLinkClassName={"text-red-500"}
            activeClassName={"bg-red-500 text-white"}
            activeLinkClassName={"text-white"}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
