import React, { useState, useRef, useEffect } from "react";
import {
  AiOutlineSearch,
  AiOutlineShareAlt,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaPen } from "react-icons/fa";
import {
  MdClear,
  MdQrCodeScanner,
  MdPlace,
  MdAccessTimeFilled,
} from "react-icons/md";
import { BiSubdirectoryRight } from "react-icons/bi";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const secondaryCursor = useRef(null);
  const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;
      console.log("secondaryCursor", secondaryCursor.current.clientWidth);
      console.log("mouseX ---", mouseX - secondaryCursor.current.clientWidth / 2);
      positionRef.current.mouseX = mouseX;
      positionRef.current.mouseY = mouseY;
      if (mouseX < 800 && mouseY < 600) {
        mainCursor.current.style.transform = `translate3d(${mouseX
          }px, ${mouseY}px, 0)`;
      } else if (mouseX < 800 && mouseY > 600) {
        mainCursor.current.style.transform = `translate3d(${mouseX -
          mainCursor.current.clientWidth / mainCursor.current.clientWidth
          }px, ${mouseY - mainCursor.current.clientHeight}px, 0)`;
      } else if (mouseX > 800 && mouseY < 600) {
        mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth
          }px, ${mouseY -
          mainCursor.current.clientHeight / mainCursor.current.clientHeight
          }px, 0)`;
      } else if (mouseX > 800 && mouseY > 600) {
        mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth
          }px, ${mouseY - mainCursor.current.clientHeight}px, 0)`;
      }
    });

    return () => { };
  }, []);
  return (
    <div>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseOver={() => setIsHovering(true)}
        className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-hidden"}`}
      >
        <div className="search">
          <HiMenuAlt1 className="primary-color text-md" />
          <input type="text" placeholder="Tòa nhà IOT" />
          <AiOutlineSearch className="border-r-padding text-md" />
          <MdClear className="padding-sm text-md" />
        </div>
        <div className="map">
          <iframe
            className="map-images"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15335.273073324195!2d108.2290267!3d16.0749176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e88e673887f3965!2zSU9UTGluayDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1665218707882!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            title="iot"
            loading="lazy"
          ></iframe>
          <div className="map-title">
            <p className="map-title-bold">Tòa nhà IOTLink</p>
            <p className="map-title-gray">Địa điểm</p>
          </div>
        </div>
        <div className="info">
          <div className="info-item">
            <div className="icon-wrap">
              <BiSubdirectoryRight />
            </div>
            <p className="primary-color">Chỉ đường</p>
          </div>
          <div className="info-item">
            <div className="icon-wrap">
              <MdQrCodeScanner />
            </div>
            <p className="primary-color">Mã địa chỉ</p>
          </div>
          <div className="info-item">
            <div className="icon-wrap">
              <AiOutlineShareAlt />
            </div>
            <p className="primary-color">Chia sẽ</p>
          </div>
        </div>
        <div className="detail">
          <div className="detail-info padding-bottom">
            <div className="detail-info_item">
              <MdPlace className="detail-icon" />
              <p className="detail-des">
                63 Phan Đăng Lưu, Phường Thạch Thang, Quận Hải Châu, TP Đà Nẵng
              </p>
            </div>
            <div className="detail-info_item padding-top">
              <MdAccessTimeFilled className="detail-icon" />
              <p className="detail-des">
                <span className="detail-date">Ngày bắt đầu:</span> 24/11/2000
              </p>
            </div>
            <div className="detail-info_item padding-top">
              <MdAccessTimeFilled className="detail-icon" />
              <p className="detail-des">
                {" "}
                <span className="detail-date">Ngày kết thúc:</span> 29/11/2099
              </p>
            </div>
            <div className="btn-wrap">
              <button className="btn">
                <FaPen className="primary-color" /> <p>Đề xuất chỉnh sửa</p>
              </button>
            </div>
          </div>
          <div className="detail-category">
            <div className="detail-item border-t-padding">
              <img src="./images/detail.png" alt="" />
              <div className="detail-category_des">
                <p className="detail-date">
                  Công Ty Cổ Phần Đầu Tư Và Phát Triển Đô Thị Vạn Thịnh Phát
                </p>
                <p>
                  Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu,
                  Thành phố Đà Nẵng, Việt Nam
                </p>
              </div>
            </div>
            <div className="detail-item border-t-padding">
              <img src="./images/detail.png" alt="" />
              <div className="detail-category_des">
                <p className="detail-date">Nam Long Telecom Đà Nẵng</p>
                <p>
                  Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu,
                  Thành phố Đà Nẵng, Việt Nam
                </p>
              </div>
            </div>
            <div className="detail-item border-t-padding">
              <img src="./images/detail.png" alt="" />
              <div className="detail-category_des">
                <p className="detail-date">Công ty A</p>
                <p>
                  Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu,
                  Thành phố Đà Nẵng, Việt Nam
                </p>
              </div>
            </div>
            <div className="detail-item border-t-padding">
              <img src="./images/detail.png" alt="" />
              <div className="detail-category_des">
                <p className="detail-date">Công ty B</p>
                <p>
                  Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu,
                  Thành phố Đà Nẵng, Việt Nam
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="btn-open"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiFillCaretLeft /> : <AiFillCaretRight />}
        </button>
      </div>

      {!isHovering && (
        <div>
          <div className="main-cursor" ref={mainCursor}>
          </div>
          <div
            className="secondary-cursor"
            style={{ visibility: "hidden" }}
            ref={secondaryCursor}
          >
          </div>
        </div>
      )}


    </div>
  );
}
