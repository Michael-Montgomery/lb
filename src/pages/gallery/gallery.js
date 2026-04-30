import React, { useState } from 'react';
import Header from '../../components/header/header';
import './gallery.css';
import gallery from '../../data/gallery';
import Footer from '../../components/footer/footer';

const Gallery = () => {

const [galleryDisplayList, setGalleryDisplayList] = useState(gallery);


const filterGallery = (e, isDropdown) => {
    console.log(e.target.value.innerText || e.target.value);
    let category = typeof(e.target.value) === 'string' ? e.target.value : e.target.innerText
    
    // e.target.innerText || e.target.value;
    if (category === 'All') {
        setGalleryDisplayList(gallery);
    } else {
        const filteredList = gallery.filter(item => item.category === category);
        setGalleryDisplayList(filteredList);
    }
};


    return (
        <div className="gallery">
            <Header />
           <ul className='gallery-topics-list'>
            <li onClick={(e) => {
                filterGallery(e);
            }}>All</li>
            <li onClick={(e) => {
                filterGallery(e);
            }}>Kitchen</li>
            <li onClick={(e) => {
                filterGallery(e);
            }}>Bathroom</li>
            {/* <li onClick={(e) => {
                filterGallery(e);
            }}>Fireplace</li>
            <li onClick={(e) => {
                filterGallery(e);
            }}>Outdoor</li> */}
            <li onClick={(e) => {
                filterGallery(e);
            }}>Other</li>
           </ul>
           <select onChange={(e) => {
                filterGallery(e);
           }} className='gallery-topics-dropdown'>
            <option value="All">All</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Fireplace">Fireplace</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Commercial">Commercial</option>
           </select>
           {/* <hr></hr> */}
              <div className='gallery-images-wrapper'>
                <ul className='gallery-images-list'>
                {galleryDisplayList.map((item, index) => (
                // <div className='gallery-image' style={{backgroundImage: `url(${item.imgUrl})`}} key={index}></div>
                <li key={index} className="gallery-image-item">
                    <div className='gallery-image' style={{backgroundImage: `url(${item.imgUrl})`}} key={index}></div>
                </li>
                ))}
</ul>
              </div>
              <Footer />
        </div>
    );
};

export default Gallery;