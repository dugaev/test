import React, { useState } from 'react';
import Map from './Map';
import { FaMapMarked } from 'react-icons/fa';
import SideMenu from './SideMenu';
import Modal from './Modal';

const Main = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleSelectApartment = (apartment) => {
    setSelectedApartment(apartment);
  };

  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  };
  const handleFormSubmit = (formData) => {
    setSelectedApartment(formData); // Оновлення selectedApartment з новими даними
    setShowModal(false); // Закриття модального вікна
  };
  

  return (
    <div className='flex flex-row -z-50'>
      <div className='flex flex-col w-[25%] bg-white'>
        <div className='p-6  bg-gray-200'>
          <button className='flex flex-row gap-[10px] bg-blue-500 text-[14px] px-[30px] py-[10px] items-center text-white rounded-full'>
            Переглянути список
            <FaMapMarked />
          </button>
        </div>
        <div>
          <SideMenu />
        </div>
      </div>
      <Map onSelectApartment={handleSelectApartment} />
      <div className='cards bg-gray-200 p-4 w-[25%]'>
        <div className='bg-white mx-1 px-4 py-5 rounded-lg' >
        {selectedApartment && (
          <div>
            <img src={selectedApartment.image} alt={selectedApartment.title} className="w-[250px] h-[350px]" />
            <h1 className='text-2xl mt-2 font-bold mb-5'>{selectedApartment.title}</h1>
            <p> {selectedApartment.description}</p>
            <p>Price: {selectedApartment.price}</p>
          </div>
        )}
        </div>
      </div>
      {showModal && (
        <Modal onClose={closeModal} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Main;
