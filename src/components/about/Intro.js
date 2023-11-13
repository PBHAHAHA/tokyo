import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      {/* <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/slider/1.jpg" alt="image" />
      </div> */}
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Pub</h3>
        <span>前端开发者</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          你好，我叫Pub，是一名前端开发工程师，已经有4.5年的时间。至今已经有两段工作经历
        </p>
        <ul>
          对自我的一点评价：
          <li>能独立承担小程序和管理系统 Web 项目的开发与前端管控工作。</li>
          <li>有前端工程化的能力，能够参与推动团队的工程化建设。</li>
          <li>
            对技术保持高度的敏感性和关注度，熟悉产品开发流程，能有效的参与产品的需求沟通和协作。
          </li>
        </ul>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  地址:
                </span>
                <span>成都</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  邮箱:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="314709923@qq.com"
                  >
                    314709923@qq.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  微信:
                </span>
                <span>
                  <a className="text-[#767676] transition-all duration-300 hover:text-black">
                    w314709923x
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <div className="tokyo_tm_button" data-position="left">
              <a href="assets/img/cv/1.jpg" download>
                <span>下载我的详细简历</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Intro;
