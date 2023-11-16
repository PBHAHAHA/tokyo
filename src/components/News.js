"use client"
import { useContext, useEffect } from "react";
import { TokyoContext } from "../Context";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import { getAllPosts } from "@/pages/api/posts";
import moment from "moment";

let news = [
  {
    id: 1,
    title: "如何使用Nextjs|NestJS|React搭建个人网站",
    image: "assets/img/news/1.jpg",
    author: "Pub",
    date: "2022-08-23",
  }
];
const getAllPostFunc = async () => {
  const res = await getAllPosts({
    page: 1,
    limit: 20
  })
  news = res.data.items
  news.forEach(item => {
    item.createdAt = moment(item.createdAt).format("YYYY-MM-DD")
  })
}


const News = () => {
  useEffect(() => {
    getAllPostFunc()
  },[])
  const { setNewsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"news"}>
      <div className="container">
        <div className="tokyo_tm_news w-full clear-both float-left h-auto pt-[100px] px-0 pb-[45px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName={"文章"} title={"最新文章"} />
            </div>
          </div>
          <ul className="ml-[-50px] list-none">
            {news.map((item) => (
              <li
                className="mb-[50px] float-left w-1/2 pl-[50px]"
                key={item.id}
              >
                <div className="list_inner w-full clear-both float-left h-auto relative">
                  <div className="image relative overflow-hidden">
                    <img
                      className="min-w-full opacity-0"
                      src="assets/img/thumbs/40-25.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                      data-img-url={item.image}
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <a
                      className="tokyo_tm_full_link"
                      href="#"
                      onClick={() => {
                        modalToggle(true);
                        setNewsModal(item);
                      }}
                    />
                  </div>
                  <div className="details w-full float-left px-[40px] pt-[30px] pb-[25px] bg-white transition-all duration-300">
                    <div className="extra flex items-center justify-between mb-[25px] relative">
                      <div className="short">
                        <p className="date font-montserrat text-[13px] text-[#767676]">
                          作者{" "}
                          <a
                            className="text-[#767676] transition-all duration-300 hover:text-black"
                            href="#"
                            onClick={() => {
                              modalToggle(true);
                              setNewsModal(item);
                            }}
                          >
                            {item.author}
                          </a>{" "}
                          <span className="relative">{item.createdAt}</span>
                        </p>
                      </div>
                    </div>
                    <h3 className="title mb-[10px] h-12">
                      <a
                        className="text-black text-[18px] font-semibold inline-block transition-all duration-300 hover:text-black"
                        href="#"
                        onClick={() => {
                          modalToggle(true);
                          setNewsModal(item);
                        }}
                      >
                        {item.title}
                      </a>
                    </h3>
                    <div className="tokyo_tm_read_more">
                      <a
                        href="#"
                        onClick={() => {
                          modalToggle(true);
                          setNewsModal(item);
                        }}
                      >
                        <span>更多</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};
export default News;
