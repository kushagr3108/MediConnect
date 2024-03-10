import React from 'react'
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg}/>
                    <div className='absolute z-20 bottom-4 w-200px md:w-[300px] right-[-30%] md:right[-7%] lg:right-[22%]'>
                        <img src={aboutCardImg}/>
                    </div>
                </div>

                {/* ======about content======= */}

                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Proud to be one of the nation's best</h2>
                    <p className='text__para'>For 30 years in a row U.S news and World have recognized us as one of the best public hospitals in the nation and #1 in Texas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum quod tempore, ipsa aliquid at similique veniam nisi pariatur et neque, magnam saepe officiis omnis perferendis architecto libero temporibus odio. </p>

                    <p className='text__para mt-[30px] '>Our best is something we strive for each day. Caring for our patients - not looking back at what we accomplished but towards what we can do tomorrow. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, eaque, nihil veniam corrupti quos placeat rem molestiae voluptatibus quam odit, quo illo reiciendis obcaecati provident! Nam ipsa praesentium repellendus numquam.</p>

                    <Link to="/"><button className='btn'>Learn more</button></Link>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About