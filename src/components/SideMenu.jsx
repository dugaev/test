import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import RatingStars from "./RatingStars";

const SideMenu = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [showMoreSubcategories, setShowMoreSubcategories] = useState(false);

  const toggleMoreSubcategories = () => {
    setShowMoreSubcategories(!showMoreSubcategories);
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
    setShowSubcategories(false);
  };

  const toggleSubcategories = () => {
    setShowSubcategories(!showSubcategories);
  };

  return (
    <div className="w-fit bg-white px-4">
      <div className="">
        <button
          onClick={toggleCategories}
          className="flex gap-[5px] items-center w-full bg-white text-blue-500  font-semibold py-2  rounded-md"
        >
          <FaChevronRight
            className={`transition-transform duration-300 transform ${
              showCategories ? "rotate-180" : ""
            }`}
          />
          Всі категорії
        </button>
        {showCategories && (
          <button className="text-gray-400 ml-[40px]">Нерухомість</button>
        )}

        <div className="ml-2 mt-2">
          <button
            onClick={toggleSubcategories}
            className="flex justify-between gap-[130px] bg-white text-gray-400 uppercase  py-2  rounded-md"
          >
            Підкатегорії
            <FaChevronRight
              className={`transition-transform duration-300 transform mt-[4px] ${
                showSubcategories ? "rotate-90" : ""
              }`}
            />
          </button>
          {showSubcategories && (
            <div className="flex flex-col items-start mt-2 ">
              <button className="  text-blue-500  text-[14px] font-bold   py-2">
                Квартири
              </button>
              <button className="  text-blue-500  text-[14px] font-bold py-2">
                Будинки
              </button>
              <button className="  text-blue-500  text-[14px] font-bold py-2">
                Апартаменти
              </button>
              <button className="  text-blue-500  text-[14px] font-bold py-2">
                Кімнати
              </button>
              <button className="  text-blue-500  text-[14px] font-bold py-2">
                Комерційна нерухомість
              </button>
              {showMoreSubcategories ? (
                <>
                  <button className="text-blue-500 text-[14px] font-bold py-2">
                    Будинки
                  </button>
                  <button className="text-blue-500  text-[14px] font-bold py-2">
                    Кімнати
                  </button>
                  <button className="text-blue-500  text-[14px] font-bold py-2">
                    Апартаменти
                  </button>
                </>
              ) : (
                <button
                  onClick={toggleMoreSubcategories}
                  className="flex items-center text-blue-500 py-2 cursor-pointer"
                >
                  Ще
                  <FaChevronDown
                    className={`transition-transform duration-300 transform mt-[4px] ${
                      showMoreSubcategories ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <h2 className="uppercase text-gray-400 ">Ціна оренди (грн)</h2>
        <div className="flex flex-row gap-[25px] mt-7 ">
          <input
            type="text"
            placeholder="min"
            className="w-[110px] bg-gray-200 outline-none py-3 px-7"
            
          />
          <div className="h-10 bg-gray-400 w-px my-2"></div>
          <input
            type="text"
            placeholder="max"
            className="w-[110px] bg-gray-200 outline-non py-3 px-5"
            style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
          />
        </div>
      </div>
      <RatingStars />
    </div>
  );
};

export default SideMenu;
