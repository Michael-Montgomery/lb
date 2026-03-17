import React from 'react';
import './home.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import gallery from '../../data/gallery';
import { useNavigate } from 'react-router-dom';
import reviews from '../../data/reviews';

const Home = () => {

    const navigate = useNavigate();


    const handleGetQuoteClick = () => {
        navigate('/contact');
    };

    const handleViewGalleryClick = () => {
        navigate('/gallery');
    };





    return (
        <>
            <Header />
            <div className='home-hero-wrapper'></div>
            <div style={{ padding: '20px', textAlign: 'center' }} className='home-intro-wrapper'>
                <h1>LB Tile Company</h1><p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <ul>
                    <li>
                        <button className='home-cta-button' onClick={handleGetQuoteClick}>Get a Quote</button>
                    </li>
                    <li>
                        <button className='home-cta-button' onClick={handleViewGalleryClick}>View Gallery</button>
                    </li>
                </ul>
            </div>
            <div className='featured-projects-wrapper'>
                <h2>Featured Projects</h2>
                <ul className='featured-projects-list'>
                    {
                        gallery.filter(item => item.featured).map((item, index) => (
                            <li key={index} className="featured-project-item">
                                <img src={item.imgUrl} alt={item.title} />
                                <div className="featured-project-info">
                                    {/* <h3>{item.title}</h3> */}
                                    {/* <p>{item.description}</p> */}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='cx-reviews-wrapper'>
                <h2>What Our Clients are Saying</h2>
                <div className='cx-review-item'>
                    
                    <ul className='cx-reviews-list'>
                        {reviews.map((review, index) => (
                            <li key={index} className="review-item">
                                <div>
                                    <p>"{review.review}"</p>
                                    <span>- {review.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;