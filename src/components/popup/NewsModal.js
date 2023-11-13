import { TokyoContext } from "@/src/Context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";
const NewsModal = () => {
  const { newsModal, setNewsModal } = useContext(TokyoContext);
  return (
    <ModalContainer nullValue={setNewsModal}>
      <div className="image relative overflow-hidden">
        {/* <img
          className="min-w-full opacity-0"
          src="assets/img/thumbs/40-25.jpg"
          alt="image"
        /> */}
        <div
          className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
          data-img-url={newsModal.image}
          style={{ backgroundImage: `url(${newsModal.image})` }}
        />
        <a className="tokyo_tm_full_link" href="#" />
      </div>
      <div className="details w-full float-left px-[40px] pt-[30px] pb-[25px] bg-white transition-all duration-300">
        <div className="extra flex items-center justify-between mb-[25px] relative">
          <div className="short">
            <p className="date font-montserrat text-[13px] text-[#767676]">
              By{" "}
              <a
                className="text-[#767676] transition-all duration-300 hover:text-black"
                href="#"
              >
                {newsModal.author}
              </a>{" "}
              <span className="relative">{newsModal.date}</span>
            </p>
          </div>
        </div>
        <h3 className="title text-center mb-[10px] leading-[1.4]">{newsModal.title}</h3>
      </div>
      {/* News Popup Start */}
      <div className="main_content w-full float-left">
        <div className="descriptions w-full float-left">
        1.原型和原型链
        </div>
      </div>
      {/* /News Popup End */}
    </ModalContainer>
  );
};
export default NewsModal;
