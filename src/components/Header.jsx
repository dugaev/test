import React, { useState } from 'react'
import { CiLogin } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import Modal from './Modal';
import logoImg from '../assets/logo2.png'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleOpenModal = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitModal = (data) => {
    setFormData(data);
    setIsModalOpen(false);
  };

  return (
    <div className='p-2 bg-slate-700 flex justify-center flex-row border-b-blue-500 border-b-4'>
      {/* <p className='border rounded-full pt-5 bg-white p-3'>LOGO</p> */}
      <img src={logoImg} alt="logoImage" className='rounded-lg h-[70px] w-[90px]' />
      <div className=' flex flex-row justify-between gap-[400px] p-3 '>
        <p className='text-gray-400 w-fit  pl-2 text-[14px]'>Портал оренди та прокату <br /> товарів та послуг</p>
        <div className='flex flex-row gap-[20px]'>
          <button className='flex flex-row gap-[5px] pt-[12px] text-white rounded-full  px-5 text-[13px] bg-orange-500' onClick={handleOpenModal}>
            Здати в оренду 
            <FaPlus className='mt-[5px]'/> 
          </button>
          <button className='flex flex-row gap-[5px] text-gray-400 rounded-full p-2 pl-5 pr-5 text-[17px]'> 
            <CiLogin className='mt-[5px]' />
            Увійти
          </button>
        </div>
      </div>
      <div className='h-[50px] bg-gray-400 w-px my-2'></div>
      <div className='flex'>
        <select className='bg-transparent text-gray-400 rounded ml-4 mr-4 cursor-pointer'>
          <option value='ukr'>UA</option>
          <option value='en'>EN</option>
        </select>
        <select className='bg-transparent text-gray-400 rounded cursor-pointer'>
          <option className='bg-transparent text-gray-400' value='uah'>UAH</option>
          <option className='bg-transparent text-gray-400' value='usd'>USD</option>
        </select>
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal} onSubmit={handleSubmitModal} />
      )}
    </div>
  );
}

export default Header;