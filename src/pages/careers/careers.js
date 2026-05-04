import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header/header';
import './careers.css';
import { faDollarSign, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Footer from '../../components/footer/footer';
import emailjs from '@emailjs/browser';

const Careers = () => {


    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm(
          'service_l3i6sll',
          'template_rj5yw7c',
          e.target,
          '8zMjLYXj4OH59op-A'
        )
        .then(() => {
          console.log('Email sent successfully!');
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
        });
      };

    const [showForm, setShowForm] = useState(false);


    const handleApplyClick = () => {
        setShowForm(!showForm);
    };


    return (
        <div className="careers-page-wrapper">
            <Header />
            <h1>Careers</h1>
            <p className='careers-intro'>LB Tile is looking for tile installers and helpers to support our growing tile and remodeling business. Multiple full or part-time positions available. We offer competitive pay and an allowance for tools. Position is based in the Baltimore, MD area. Prior experience a plus but not required for certain positions – we are willing to train the right candidates.</p>
            <div className='pill-wrapper'><p className='comp'><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>$50K-$60k (hourly equivalent)</p>
                <p className='comp'> <FontAwesomeIcon icon={faSun}></FontAwesomeIcon> PTO offered</p>
                <p className='comp'>Monday - Friday (8 hour shifts)</p></div>
            {showForm ? null : <h3>Qualifications</h3>}
            <div className='qualifications-wrapper' style={{ height: showForm ? '0px' : 'auto', overflow: 'hidden' }}>

                <ul className='careers-qualifications-list'>
                    <li>Valid driver’s license and reliable transportation <span className='required-pill'>required</span></li>
                    <li>Ability to lift 50 lbs and work on your feet for extended periods of time <span className='required-pill'>required</span></li>
                    <li>Reliable transportation  <span className='required-pill'>required</span></li>
                    <li>Must be comfortable and capable of working independently  <span className='required-pill'>required</span></li>
                    <li>Good organizational and time management skills – must be able to keep work space clean and tidy and able to perform work on time <span className='required-pill'>required</span></li>
                    <li>Physical stamina to lift at least 100 pounds and carry heavy tools/equipment or move furniture when needed and in all kinds of weather <span className='required-pill'>required</span></li>
                    <li>Good mechanical skills to be able to properly use tools and light equipment <span className='required-pill'>required</span></li>
                    <li>Strong work ethic and attention to detail</li>
                    <li>Ability to work independently or as part of a team</li>
                    <li>Willingness to learn and take direction <span className='preferred-pill'>preferred</span></li>
                    <li>One year construction expperience <span className='preferred-pill'>preferred</span></li>
                </ul>

            </div>
            {showForm && <div className='apply-form-wrapper' style={{ height: showForm ? 'auto' : '0px' }}>
                <form onSubmit={sendEmail} className='careers-apply-form'>
                    <h2>Apply Now</h2>
                    <div>
                        {/* <label htmlFor="name">Name:</label> */}
                        <input type="text" id="name" name="name" placeholder='Name' required minLength={4} maxLength={35}/>
                    </div>
                    <div>
                        {/* <label htmlFor="email">Email:</label> */}
                        <input type="email" id="email" name="email" placeholder='Email' minLength={4} maxLength={35}/>
                    </div>
                    <div>
                        {/* <label htmlFor="phone">Phone:</label> */}
                        <input type="tel" id="phone" name="phone" placeholder='Phone' required/>
                    </div>

                    <div>
                        {/* <label htmlFor="license">Do you have a valid drivers license?</label> */}
                        <select id="license" name="has_dl" required>
                            <option value="">Do you have a valid drivers license?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        {/* <label htmlFor="transportation">Do you have a reliable transportation?</label> */}
                        <select id="transportation" name="has_transpo" required>
                            <option value="">Do you have reliable transportation?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        {/* <label htmlFor="experience">Do you have prior experience in construction and/or tile installation?</label> */}
                        <select id="experience" name="has_exp" required>
                            <option value="">Do you have prior experience in construction and/or tile installation?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        {/* <label htmlFor="schedule">Are you able to work in the Baltimore, MD area daily Monday-Friday?</label> */}
                        <select id="schedule" name="meets_sched_reqs" required>
                            <option value="">Are you able to work in the Baltimore, MD area daily Monday-Friday?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>}

            {!showForm && <div className='apply-btn-wrapper'>
                <button className='apply-now-button' onClick={handleApplyClick}>Apply Now</button>
            </div>}


            <div className='apply-form-wrapper'>


            </div>
                <Footer />
        </div>
    );
};

export default Careers;