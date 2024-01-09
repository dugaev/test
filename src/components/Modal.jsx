import React, { useState } from 'react';

const Modal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');


  const handleSave = () => {
    const data = {
      city,
      address,
    };
    onSubmit(data);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const formData = {
      title,
      description,
      price,
      image,
    };
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose}>Закрити</button>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Заголовок" value={title} onChange={handleTitleChange} />
          <input type="text" placeholder="Підпис" value={description} onChange={handleDescriptionChange} />
          <input type="text" placeholder="Ціна" value={price} onChange={handlePriceChange} />
          <div>
          <label>Назва міста:</label>
          <input type='text' value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div>
          <label>Адреса:</label>
          <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {image && <img src={image} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
          <button type="submit">Зберегти</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
