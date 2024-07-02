import React from 'react';
import images from '../../constants/images';
import "./Qualities.css";

const Qualities = () => {
  return (
    <section className='qualities section-p bg-md-black' id = "qualities">
        <div className='container'>
            <div className='qualities-content grid'>
                <div className='content-left'>
                    <div className='section-t text-center'>
                        <h3>Мы профи!</h3>
                        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptates deserunt, molestiae soluta cumque eum.</p>
                    </div>
                </div>

                <div className='content-right'>
                    <img src = {images.professionals_main_img} alt = "" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualities
