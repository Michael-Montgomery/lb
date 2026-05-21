import React, { useEffect } from 'react';
import './home.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import gallery from '../../data/gallery';
import { useNavigate } from 'react-router-dom';
import reviews from '../../data/reviews';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            <div style={{ padding: '20px', textAlign: 'center' }} className='home-intro-wrapper' id='home-intro'>
                <h1>LB Tile Company</h1><p>
                    Founded in 1982, LB  Tile Co has been delivering an array of custom home improvement services to its clients in the Mid-Atlantic. A family owned company now in it’s second generation, LB Tile Co is a trusted advisor and partner for your next project.

                    Specializing in custom tile work for bathrooms and kitchens, our team can also design and deliver your dream home or next renovation. Our mission is to provide superior craftsmanship and deliver exceptional results, with the same attention to projects since our first one, over 35 years ago!

                    Our services include, but are not limited to:

                    
                    {/* - Kitchen remodeling
                    - Bathroom remodeling
                    - Custom tile
                    - Flooring
                    - Home additions and general remodels
                    - Roofing

                    Contact us today to discuss your project. */}
                </p><ol>
                        <li>Kitchen remodeling</li>
                        <li>Bathroom remodeling</li>
                        <li>Custom tile</li>
                        <li>Flooring</li>
                        <li>Home additions and general remodels</li>
                        <li>Roofing</li>
                    </ol>
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