import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import { FiAlignLeft } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Autosuggest from "react-autosuggest";

const Navbar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [showDateRange, setShowDateRange] = useState(false);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const cities = [
    "Київ",
    "Харків",
    "Одеса",
    "Дніпро",
    "Донецьк",
    "Запоріжжя",
    "Львів",
    "Кривий Ріг",
    "Нікополь",
    "Маріуполь",
    "Вінниця",
    "Херсон",
    "Полтава",
    "Чернігів",
    "Черкаси",
    "Житомир",
    "Суми",
    "Рівне",
    "Хмельницький",
    "Тернопіль",
    "Ужгород",
    "Івано-Франківськ",
    "Кам&apos;янець-Подільський",
    "Кропивницький",
    "Миколаїв",
    "Херсон",
    "Хмельницький",
    "Чернівці",
    "Біла Церква",
    "Севастополь",
  ];

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : cities.filter(
          (city) => city.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const handleDropdownClick = () => {
    setShowDateRange(!showDateRange);
  };

  const handleDateRangeSelect = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setDateRange(dates);
    setShowDateRange(false);
  };

  const handleDateChange = (dates) => {
    if (dates && dates[0] && dates[1]) {
      const [start, end] = dates;
      setInputValue(
        `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`
      );
    }
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Де шукати?",
    value,
    onChange: onChange,
  };

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  return (
    <div className="flex flex-row text-center justify-center bg-slate-700 pt-[30px] p-3 shadow-lg">
      <div className="bg-slate-700 p-3">
        <div className="border-blue-500 border-4 bg-white p-2 rounded-xl flex flex-row">
          <div className="flex flex-row gap-[10px]">
            <FaSearch className="text-gray-400 mt-[12px] " />
            <input
              type="text"
              placeholder="Я хочу орендувати"
              className="w-full outline-none"
            />
          </div>
          <div className="h-6 bg-gray-400 w-px my-2"></div>
          <div className="flex flex-row gap-[10px] ml-4">
            <FiAlignLeft className="text-gray-400 mt-[12px]" />
            <input
              type="text"
              placeholder="Спосіб оренди"
              onClick={handleDropdownClick}
            />
          </div>
          <div className="h-6 bg-gray-400 w-px my-2"></div>
          <div className="flex flex-row gap-[10px] ml-4 relative mr-[40px] z-50">
            <FaCalendarAlt
              className="text-gray-400 mt-[12px] cursor-pointer"
              onClick={handleDropdownClick}
            />
            <p
              className="text-gray-400 mt-[7px] cursor-pointer"
              onClick={handleDropdownClick}
            >
              Період оренди
            </p>
            {showDateRange && (
              <div className="block z-50 mt-[50px]">
                <DatePicker
                  selected={startDate}
                  onChange={(dates) => {
                    handleDateChange(dates);
                    handleDateRangeSelect(dates);
                  }}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                  onClose={() => setShowDateRange(false)}
                />
              </div>
            )}
          </div>
          <div className="h-6 bg-gray-400 w-px my-2"></div>
          <div className="flex flex-row gap-[10px] ml-4 mt-[7px] focus:outline-none">
            <IoLocationOutline className="text-gray-400 mt-[5px]" />
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={(suggestion) => suggestion}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              className="focus:outline-none"
            />
          </div>
        </div>
      </div>
      <button className="absolute bg-blue-500 h-[65px] mt-[12px] pl-3 pr-3 right-[300px] rounded-xl">
        Пошук
      </button>
    </div>
  );
};

export default Navbar;
