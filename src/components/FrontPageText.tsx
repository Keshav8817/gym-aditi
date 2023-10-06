// src/FrontPageText.tsx

import React, { useEffect } from 'react';
import {BsArrowUpRight, BsToggleOn} from "react-icons/bs";
import video from  "../assets/v2.mp4";
import video1 from "../assets/exercise.mp4";
import video2 from "../assets/pushup.mp4";
import video3 from "../assets/video.mp4";

//import backgroundImage2 from  "../assets/banner-line.png";
//import backgroundImage3 from  "../assets/fitness-text.svg";
//import backgroundImage4 from  "../assets/journey.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';



const FrontPageText: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []); // Initialize AOS once when the component mounts

 
  return (
    <>

      <div className="mx-auto">

        {/* <section className='overflow-hidden dark:bg-gray-dark py-20 px-8'> */}

          <div className="bg-cover bg-center w-full h-full">
            <div className='overlay relative'>
            
              <video className='w-full h-full inset-0 object-cover opacity-50' src={video} autoPlay loop muted>
              </video>

              <div className="content absolute inset-0" style={{ zIndex: 1 }}>

                  <div className="flex items-center space-x-2">
                    <div className="flex-1 p-20"> 

                      <h1 className="text-blue-800 font-bold text-7xl text-border-gray tracking-wider uppercase">
                      <i><b> NOTHING BUT</b></i>
                      </h1>

                      <h1 className="text-blue-700 font-bold text-7xl mt-4">
                      <i><b>GAINS HERE</b></i>
                      </h1> 

                      <p className="text-x1 mt-4 text-gray-400">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                    
                      <button className="bg-transparent border border-white/80 text-white/80 hover:bg-white/80 hover:text-white px-5 py-2 rounded-full text-lg mx-2 my-4">
                          <b> Start Now </b>
                      </button>

                      <button onClick={BsToggleOn} className='border-white/80 text-white px-5'>
                          <b className='flex'>Learn More{<BsArrowUpRight style={{color: 'white'}} />}</b>
                      </button>


                      <div className="mt-12 uppercase text-white xl:mt-20">

                        <h4 className="text-xl font-extrabold tracking-[1px] mt-8 text-white"> <b>What You Get</b></h4>
                        
                        <div className="mt-7 grid gap-4 text-xs leading-4 tracking-[1px] sm:grid-cols-2 md:grid-cols-3">
                         
                          <div className='flex items-center gap-4 rounded-ray-dark py-4 px-6 bg-slate-700 rounded-full'>
                            <img src="/Images/clipboard.png" height={40} width={40} alt="image" />
                              <p>CUSTOMISED FITNESS PLAN</p>
                          </div>

                          <div className='flex items-center gap-4 rounded-ray-dark py-4 px-6 bg-slate-700 rounded-full'>
                            {/* {<GoChecklistst style={{color: 'white'}} />} */}
                            <img src="/Images/battery.png" height={40} width={40} color='white' alt="image" />
                              <p>KEEP YOU FEET AND STRONG</p>
                          </div>

                          <div className='flex items-center gap-4 rounded-ray-dark py-4 px-6 bg-slate-700 rounded-full'>
                            {/* {<GoChecklistst style={{color: 'white'}} />} */}
                            <img src="/Images/padlock.png" height={40} width={40} color='white' alt="image" />
                            <p>HIGH INTENSITY TRAINING</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 m-24 object-cover">
                      <div 
                        data-aos="fade-down-left"
                        //data-aos-anchor="#example-anchor"
                        //data-aos-offset="500"
                        data-aos-duration="1000"
                      >
                        <img
                          src="/Images/runner-girl.png"
                          alt="Image"
                          className="h-full aos-init aos-animate object-cover"
                          // data-aos="fade-left"
                          // data-aos-duration="1000"
                        />
                      </div>
                    </div> 
                  </div>
                </div>
              {/* </video> */}
            </div>
          </div>
        {/* </section> */}
          
        {/* section 2 --------------------------------------------------------------------------------- */}

        <section className="overflow-hidden py-14 bg-white dark:bg-gray-dark md:py-24 px-8">
          <div className="container">
            <div className="flex flex-col justify-between gap-x-4 lg:flex-row">
              <div className="font-semibold uppercase italic lg:w-1/2">
                <img
                  src="./Images/01.svg"
                  alt="loading"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="aos-init aos-animate"
                />
                <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                  <span className="text-black dark:text-white">our </span>
                  <span className="text-border-gray tracking-wider">popular </span>
                  <span className=" text-black/75 pr-4 ">classes</span>
                </h2>
                <p className="leading-loose">
                Our dedicated trainer and fitness experts can help you discover new training techniques
                 and exercises that offer a dynamic and efficient full-body workout.
                </p>
              </div>
              <div className="mt-10 text-center lg:mt-20 lg:ltr:text-left lg:rtl:text-right">
                <a
                  className="rounded-full border-2 border-black py-4 px-6 text-sm font-extrabold uppercase tracking-[4px]
                  text-black transition hover:bg-black hover:text-white dark:border-white
                    dark:text-white dark:hover:bg-white dark:hover:text-black">
                  more services
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group">
                <div className="overflow-hidden rounded-t-full bg-gradient-to-b from-gray/20 to-transparent p-1 pb-0 sm:h-96">
                  <img
                    src="./Images/service1.jpg"
                    alt=""
                    className="h-full w-full rounded-t-full object-cover transition duration-500 group-hover:scale-110 "
                  />
                  {/* object-cover transition duration-500 group-hover:scale-110 (img animation property for all 3 grps)*/}
                </div>
                <div className="mt-5 italic ">
                  <h5 className="text-lg font-black text-black dark:text-white">
                    Pilates Training
                  </h5>
                  <p className="mb-4 mt-2 font-semibold line-clamp-2">
                    Controlled movements that enhance your balance, core strength, flexibility.
                  </p>
                  <a
                    className=" text-sm font-extrabold uppercase text-secondary transition hover:text-primary">
                    read more
                  </a>
                </div>
              </div>

            {/* 2nd part */}

              <div className="group">
                <div className="overflow-hidden rounded-t-full  p-1 pb-0 sm:h-96">
                  <img
                    src="./Images/service2.jpg"
                    alt="loading"
                    className="h-full w-full rounded-t-full object-cover transition duration-500 group-hover:scale-110 "
                                                            
                  />
                </div>
                <div className="mt-5 italic">
                  <h5 className="text-lg font-black text-black dark:text-white">
                    Aerobic Training
                  </h5>
                  <p className="mb-4 mt-2 font-semibold line-clamp-2">
                    Physical activity that increases the heart rate and the body's use of oxygen.
                  </p>
                  <a
                    className="text-sm font-extrabold uppercase text-secondary transition hover:text-primary"
                  >
                    read more
                  </a>
                </div>
              </div>

              {/* 3rd part */}

              <div className="group">
                <div className="overflow-hidden rounded-t-full bg-gradient-to-b from-gray/20 to-transparent p-1 pb-0 sm:h-96">
                  <img
                    src="./Images/service3.jpg"
                    alt=""
                    className="h-full w-full rounded-t-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-5 italic">
                  <h5 className="text-lg font-black text-black dark:text-white">
                    CrossFit Workout
                  </h5>
                  <p className="mb-4 mt-2 font-semibold line-clamp-2">
                    Strength and conditioning workout that is made up of functional movement.
                  </p>
                  <a
                    className="text-sm font-extrabold uppercase text-secondary transition hover:text-primary"
                    // href="https://react.plurk.sbthemes.com/gym#"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 3 --------------------------------------------------------------------------------- */}

        <section className="overflow-hidden py-14 bg-white/80 md:py-24 px-8"> {/*px-8 */}
          <div className="container">
            <div className="grid items-center gap-5 lg:grid-cols-2 ">
              <div
                className="group overflow-hidden lg:order-2 lg:h-[500px] aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img
                  src="./Images/02-image.jpg"
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:rotate-6 group-hover:scale-125"
                />
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="font-semibold uppercase italic">
                  <img
                    src="./Images/02.svg"
                    alt=""
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="aos-init aos-animate"
                  />
                  <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                    <span className="text-black dark:text-white">why </span>
                    <span className="text-border-gray tracking-wider">choose </span>
                    <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-black/75">
                      Vector
                    </span>
                  </h2>
                  <p className="leading-loose">
                    Vector Gym feature progressive programs with world class fitness equipment,
                    trainers and nutrition counselors to help you your fitness further. 
                    We have the widest range of group fitness classes such Yoga, Aerobics, 
                    Zumba, Les Mills favorites & much more.
                  </p>
                </div>
                <div className="mt-10">
                  <a
                    className="rounded-full border-2 border-black py-4 px-6 text-sm font-extrabold uppercase tracking-[4px] text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                    // href="https://react.plurk.sbthemes.com/gym#"
                  >
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 4  bg-no-repeat---------------------------------------------------------------------------------*/}
    
        <section className="overflow-hidden py-14 bg-cover bg-center bg-white md:py-24 px-8">
          <div className="container">
            <div className="grid lg:grid-cols-2">
              <div
                className="relative h-[350px] aps-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div
                  className="relative h-[350px] aos-init aos-animate"
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <span className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></span>
                  <img
                    src="./Images/p1.webp"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <h5 className="absolute bottom-5 text-2xl font-black  italic text-white ltr:left-7 rtl:right-7">
                    BEST COACHES
                  </h5>
                </div>
              </div>

              <div
                className="relative h-[350px] aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div
                  className="relative h-[350px] aos-init aos-animate"
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >

                  <span className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></span>
                  <img
                    src="./Images/p3.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <h5 className="absolute bottom-5 text-2xl font-black italic text-white text-underlined ltr:left-7 rtl:right-7">
                    NICE PRICES
                  </h5>
                </div>
              </div>

            </div>
          </div>
        </section>   

    {/* section 5  --------------------------------------------------------------------------------- */}
        <section className="py-14 overflow-hidden bg-white/80 dark:bg-black md:py-24 px-8">
          <div className="container">
            {/* First Grid */}
            <div className="grid items-center lg:grid-cols-2">
              <div
                className="h-full lg:order-2 xl:h-[640px]"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                {/* <img
                  src="./Images/journey.jpg"
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:rotate-6 group-hover:scale-125"
                /> */}
                <video className="h-full w-full object-cover transition duration-500 group-hover:rotate-6 group-hover:scale-125" 
                autoPlay loop muted playsInline  src={video1} />
              </div>
              <div className="px-4 py-10 ltr:xl:mr-24 rtl:xl:ml-24">
                <div className="font-semibold uppercase italic lg:max-w-[610px] ltr:lg:ml-auto rtl:lg:mr-auto">
                  <img
                    src="./Images/03.svg"
                    alt="03"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="aos-init aos-animate"
                  />
                  <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                    <span className="text-black dark:text-white">JUMPSTART </span>
                    <span className="text-border-gray tracking-wider">YOUR </span>
                    <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text">
                      JOURNEY
                    </span>
                  </h2>
                  <p className="leading-loose line-clamp-5">
                  Our range of classes will inspire you to explore new training styles and techniques,
                  while keeping you motivated with other like-minded members.
                  We have a wide choice of classes that are a great complement to any training programme. 
                  </p>
                </div>
              </div>
            </div>

            {/* Second Grid */}
            <div className="grid items-center lg:grid-cols-2">
              <div className="order-2 px-4 py-10 ltr:xl:ml-24 rtl:xl:mr-24">
                <div className="font-semibold uppercase italic lg:max-w-[610px]">
                  <img
                    src="./Images/04.svg"
                    alt="04"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="aos-init aos-animate "
                  />
                  <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                    <span className="text-black dark:text-white">TRANSFORM </span>
                    <span className="text-border-gray tracking-wider">YOUR </span>
                    <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text">
                      FITNESS
                    </span>
                  </h2>
                  <p className="leading-loose line-clamp-5">
                    Vector offers unrivaled fitness programming.These classes are a great way to work the whole body and improve overall fitness. 
                    Personal workout stations allow for a safe and comfortable experience.
                    Small class sizes offer a greater level of instructor and group engagement.
                    Find motivation from training with others for an efficient and progressive workout. 
                    Offering interactive and energetic sessions


                  </p>
                </div>
              </div>
              <div
                className="h-full xl:h-[640px] aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {/* <img
                  src="./Images/p3.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                /> */}
                <video className="h-full w-full object-cover transition duration-500 group-hover:rotate-6 group-hover:scale-125" 
                autoPlay loop muted playsInline  src={video2} />
              </div>
            </div>

            {/* Third Grid */}
            <div className="grid items-center lg:grid-cols-2">
              <div
                className="h-full lg:order-2 xl:h-[640px] aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                {/* <img
                  src="./Images/evolve-togather.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                /> */}
                <video className="h-full w-full object-cover transition duration-500 group-hover:rotate-6 group-hover:scale-125" 
                autoPlay loop muted playsInline  src={video3} />
              </div>
              <div className="px-4 py-10 ltr:xl:mr-24 rtl:xl:ml-24">
                <div className="font-semibold uppercase italic lg:max-w-[610px] ltr:lg:ml-auto rtl:lg:mr-auto">
                  <img
                    src="./Images/05.svg"
                    alt="05"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className="aos-init aos-animate"
                  />
                  <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                    <span className="text-black dark:text-white">EVOLVE </span>
                    <span className="text-border-gray tracking-wider">TO</span>
                    <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-black">
                      GETHER
                    </span>
                  </h2>
                  <p className="leading-loose line-clamp-5">
                    You can push yourself further with Vector. 
                    Freestyle™ Group Training incorporates the latest equipment and trained fitness staff. 
                    These classes are a great way to work the whole body and improve overall fitness.
                    Our coaches are passionate and supportive, and our studio is outfitted with innovative
                    lighting and sound systems to fuel your workout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 6  --------------------------------------------------------------------------------- */}
        
        <section className="overflow-hidden py-14 uppercase italic bg-white md:py-24 px-8">
          <div className="container">
            <div className="font-semibold">
              <img
                src="./Images/06.svg"
                alt="06"
                data-aos="fade-down"
                data-aos-duration="1000"
                className="aos-init aos-animate"
              />
              <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                <span className="text-black dark:text-white">OUR </span>
                <span className="text-border-gray tracking-wider">FITNESS </span>
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text">
                  COACHES
                </span>
              </h2>
              <p className="leading-loose xl:w-1/2 text-slate-600">
                Vector Gym is more than another workout, it's a comprehensive approach to fitness.
              </p>
            </div>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              <div
                className="group relative flex h-[300px] items-end justify-center overflow-hidden bg-[rgba(119,128,161,0.1)] px-4 pt-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="./Images/coach-1.png"
                  alt="loading"
                  className="h-full object-cover object-top transition group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-4/5 bg-black py-2.5 px-5 ltr:left-0 rtl:right-0">
                  <h3 className="font-black text-white">harlan hagen</h3>
                  <span className="text-sm font-bold text-slate-400">Gym Fitness</span>
                </div>
              </div>
              <div
                className="group relative flex h-[300px] items-end justify-center overflow-hidden bg-[rgba(119,128,161,0.1)] px-4 pt-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="./Images/coach-2.png"
                  alt="loading"
                  className="h-full object-cover object-top transition group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-4/5 bg-black py-2.5 px-5 ltr:left-0 rtl:right-0">
                  <h3 className="font-black text-white">Susan Bonilla</h3>
                  <span className="text-sm font-bold text-slate-400">Aerobics</span>
                </div>
              </div>
              <div
                className="group relative flex h-[300px] items-end justify-center overflow-hidden bg-[rgba(119,128,161,0.1)] px-4 pt-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="./Images/coach-3.png"
                  alt="loading"
                  className="h-full object-cover object-top transition group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-4/5 bg-black py-2.5 px-5 ltr:left-0 rtl:right-0">
                  <h3 className="font-black text-white">Mike Gipson</h3>
                  <span className="text-sm font-bold text-slate-400">Pilates & Stretching</span>
                </div>
              </div>
              <div
                className="group relative flex h-[300px] items-end justify-center overflow-hidden bg-[rgba(119,128,161,0.1)] px-4 pt-6 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src="./Images/coach-4.png"
                  alt="loading"
                  className="h-full object-cover object-top transition group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-4/5 bg-black py-2.5 px-5 ltr:left-0 rtl:right-0">
                  <h3 className="font-black text-white">Judy Chu</h3>
                  <span className="text-sm font-bold text-slate-400">Weight Loss</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 7  ---------------------------------------------------------------------------------*/}
        
        {/* bg-[url(/assets/images/gym/counter-bg.png)] */}
        <section className="overflow-x-hidden bg-[url(/Images/gymeq.jpg)] bg-cover bg-center bg-no-repeat opacity-80 py-14 md:py-24 px-8">
          <div className="container">
            <div className="grid gap-y-10 gap-x-4 uppercase italic sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-5 text-center">
                <div className="text-5xl font-black text-white">
                  <span>10</span>
                </div>
                <p className="text-lg font-semibold text-white/80">Years of Expertise</p>
              </div>
              <div className="space-y-5 text-center">
                <div className="text-5xl font-black text-white">
                  <span>15</span>
                </div>
                <p className="text-lg font-semibold text-white/80">Professional Coaches</p>
              </div>
              <div className="space-y-5 text-center">
                <div className="text-5xl font-black text-white">
                  <span>20</span>
                </div>
                <p className="text-lg font-semibold text-white/80">Different Classes</p>
              </div>
              <div className="space-y-5 text-center">
                <div className="text-5xl font-black text-white">
                  <span>535</span>
                </div>
                <p className="text-lg font-semibold text-white/80">Club Members</p>
              </div>
            </div>
          </div>
        </section>

        {/* <section 8 ---------------------------------------------------------------------------------*/}
        <section className="overflow-hidden bg-gradient-to-t from-white/90 to-transparent py-14 italic dark:bg-gray-dark dark:from-transparent md:py-24 px-8">
          <div className="container flex">

            <div className="font-semibold uppercase px-8">
              <img
                src="./Images/07.svg"
                alt="07"
                data-aos="fade-down"
                data-aos-duration="1000"
                className="aos-init aos-animate"
              />
              <div
                data-aos="flip-up"
                className="group aos-init aos-animate"
                data-aos-duration="1000"
              >
                <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                  <span className="text-black dark:text-white">TOGETHER </span>
                  <span className="text-border-gray tracking-wider">we </span>
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-transparent text-black">
                    SUCCEED
                  </span>
                </h2>
              
                <p className="leading-loose xl:w-2/3">
                  A fitness movement that is worth breaking a sweat for !!
                  At Vector, we make group workouts fun, 
                  daily food healthy & tasty, mental fitness easy with yoga & meditation, 
                  and medical & lifestyle care hassle-free.
                  #BeBetterEveryDay
                </p>
              </div>
            </div>

            <div className='container px-10 '>
              <img
                src="./Images/succeed.png"
                alt="loading"
                data-aos="fade-down"
                data-aos-duration="1500"
                className="aos-init aos-animate"
              />
            </div>


          </div>
        </section>


        <section className="overflow-hidden py-14 bg-white md:py-24 px-8">
          <div className="container">
            <div className="font-semibold uppercase italic">
              <img
                src="./Images/08.svg"
                alt="08"
                data-aos="fade-down"
                data-aos-duration="1500"
                className="aos-init aos-animate"
              />
              <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                <span className="text-black dark:text-white">Articles </span>
                <span className="text-border-gray tracking-wider">&amp; </span>
                <span className=" bg-white bg-clip-text pr-4 text-black">
                  news
                </span>
              </h2>
              <p className="leading-loose xl:w-1/2">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
              </p>
            </div>
            <div className="mt-8 grid gap-y-10 gap-x-7 italic sm:grid-cols-2 md:mt-12 lg:grid-cols-3">

              {/* Repeat the following block for each news item */}
              <div
                className="group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="overflow-hidden sm:h-64">
                  <img
                    src="./Images/news1.jpg"
                    alt="NEWS"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="pt-5 font-extrabold">
                  <div 
                    data-aos="flip-left"
                    className="group aos-init aos-animate"
                    data-aos-duration="1000"
                  >
                    <div className="inline-block bg-gray/10 p-2.5 text-sm font-bold">
                      December 25, 2022
                    </div>
                    <a
                      className="my-3 block text-[22px] leading-9 text-black transition line-clamp-2 hover:text-secondary dark:text-white"
                      // href="https://react.plurk.sbthemes.com/gym#"
                    >
                      How to brace and breathe properly for weightlifting
                    </a>
                    <p className="mb-5 font-semibold line-clamp-3">
                      It has roots in a piece of classical Latin literature from 45 BC,
                      making it over 2000 years old.Unlock the secrets to achieving your peak physical performance
                      and surpassing your fitness goals.
                    </p>
                    <a
                      className="text-secondary transition hover:text-primary"
                      // href="https://react.plurk.sbthemes.com/gym#"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              {/* End of news item block */}
              <div
                className="group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="overflow-hidden sm:h-64">
                  <img
                    src="./Images/news2.jpg"
                    alt="NEWS"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="pt-5 font-extrabold">

                <div 
                  data-aos="flip-left"
                  className="group aos-init aos-animate"
                  data-aos-duration="1000"
                >                    
                    <div className="inline-block bg-gray/10 p-2.5 text-sm font-bold">
                      March 13, 2023
                    </div>
                    <a
                      className="my-3 block text-[22px] leading-9 text-black transition line-clamp-2 hover:text-secondary dark:text-white"
                      // href="https://react.plurk.sbthemes.com/gym#"
                    >
                     The Latest  Fitness Trends and Innovations
                    </a>
                    <p className="mb-5 font-semibold line-clamp-3">
                    Stay ahead of the curve with the latest fitness trends and innovations.
                    Explore emerging training methods, new equipment, 
                    and cutting-edge technologies that are revolutionizing the way we approach fitness. 
                    </p>
                    <a
                      className="text-secondary transition hover:text-primary"
                      // href="https://react.plurk.sbthemes.com/gym#"
                    >
                      Read More
                    </a>
                  </div>
                </div>  
              </div>


              <div
                className="group aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="overflow-hidden sm:h-64">
                  <img
                    src="./Images/news3.jpg"
                    alt="NEWS"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="pt-5 font-extrabold">
                  <div 
                    data-aos="flip-left"
                    className="group aos-init aos-animate"
                    data-aos-duration="1000"
                  >
                    <div className="inline-block bg-gray/10 p-2.5 text-sm font-bold">
                      June 05, 2023
                    </div>
                    <a
                      className="my-3 block text-[22px] leading-9 text-black transition line-clamp-2 hover:text-secondary dark:text-white"
                      // href="https://react.plurk.sbthemes.com/gym#"
                    >
                      How to Incorporate Exercise into a Busy Lifestyle
                    </a>
                    <p className="mb-5 font-semibold line-clamp-3">
                      From quick and efficient workouts that can be done anywhere, to creative ways to stay active during work breaks,
                     we will empower you to carve out precious moments for your physical well-being.
                     </p>
                    <a
                      className="text-secondary transition hover:text-primary"
                      // href="https://react.plurk.sbthemes.com/gym#"
                    >
                      Read More
                    </a>
                  </div>
                </div>  
              </div>
              {/* end of news */}


            </div>
          </div>
        </section>
    
        <footer className=" bg-white/90 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent">
          <div className="container">
            <div
              className="grid gap-y-10 gap-x-4 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:py-[100px] px-10">
              <div className="relative">
                <img
                  src="./Images/vectorGym.png"
                  alt="VECTOR"
                  className ="h-16 w-auto"/>
                <ul className ="mt-12 flex items-center gap-8">
                </ul>
                <div className='flex mr-5'>
                  <img
                    src="./Images/fb.png"
                    alt="facebook"
                    className ="text-black/80 h-7 w-auto "/>
                  <ul className ="mt-12 mr-5 flex gap-8">
                      
                  </ul>

                  <img
                    src="./Images/twit.png"
                    alt="twitter"
                    className ="text-black/80 h-7 w-auto "/>
                  <ul className ="mt-12 flex items-center gap-8">
                
                    <li>
                      <a><svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="currentColor"
                          // xmlns="http://www.w3.org/2000/svg"
                          className ="transition hover:scale-110 hover:text-secondary"
                        ></svg></a>
                        </li>
                  </ul>

                  <img
                    src="./Images/insta.png"
                    alt="instagram"
                    className ="text-black/80 h-7 w-auto "/>
                  <ul className ="mt-12 flex items-center gap-8">
                    <li>
                      <a 
                        ><svg
                          width="10"
                          height="20"
                          viewBox="0 0 10 20"
                          fill="none"
                          // xmlns="http://www.w3.org/2000/svg"
                          className="transition hover:scale-110 hover:text-secondary"
                        ></svg>
                        </a>
                    </li>
                    <li>
                      <a
                        ><svg
                          width="23"
                          height="18"
                          viewBox="0 0 23 18"
                          fill="none"
                          // xmlns="http://www.w3.org/2000/svg"
                          className="transition hover:scale-110 hover:text-secondary"
                        ></svg>
                        </a>
                    </li>
                    <li>
                      <a><svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="currentColor"
                          // xmlns="http://www.w3.org/2000/svg"
                          className ="transition hover:scale-110 hover:text-secondary"
                        ></svg></a>
                        </li>
                    </ul>
                  </div>


                <img
                  src="./Images/footer-shape.png"
                  alt="footer-shape"
                  className ="absolute bottom-0 right-0 sm:left-0"
                /><img
                  src="./Images/footer-shape-dark.png"
                  alt="footer-shape-dark"
                  className ="absolute bottom-0 right-0 hidden dark:block sm:left-0"
                />
              </div>
              
              <div>
                <ul className ="flex flex-col gap-3 font-bold">
                  <li
                    className ="mb-3 text-lg font-extrabold text-black dark:text-white"
                  >
                    Quick Menu
                  </li>
                  <li>
                    <a
                      className ="text-black/80 inline-block transition hover:scale-110 hover:text-secondary"
                      
                      >Home</a>
                  </li>
                  <li>
                    <a
                      className ="text-black/80 inline-block transition hover:scale-110 hover:text-secondary"
                      
                      >Membership</a>
                  </li>
                  <li>
                    <a
                      className ="text-black/80 inline-block transition hover:scale-110 hover:text-secondary"
                      
                      >Team</a>
                  </li>
                  <li>
                    <a
                      className ="text-black/80 inline-block transition hover:scale-110 hover:text-secondary"
                      
                      >About Us</a>
                  </li>
                  <li>
                    <a
                      className ="text-black/80 inline-block transition hover:scale-110 hover:text-secondary"
                      
                      >Contact Us</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className ="flex flex-col gap-3 font-bold">
                  <li
                    className ="mb-3 text-lg font-extrabold text-black dark:text-white"
                  >
                    Legal
                  </li>
                  <li>
                    <a
                      className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary"
                      
                      >Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a
                      className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary"
                      
                      >Privacy Policy</a>
                  </li>
                  <li>
                    <a
                      className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary"
          
                      >FAQs</a>
                  </li>
                  <li>
                    <a
                      className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary"
                      >Blog</a>
                  </li>
                </ul>
              </div>
              

              <div>
                <ul className="flex flex-col gap-3 font-bold">
                  <li
                    className="mb-3 text-lg font-extrabold text-black dark:text-white"
                  >
                    Information
                  </li>
                  <li className='text-black/80'>539 Nuevo Reese Ave, Fresno, CA 93722</li>
                  <li>
                    <a
                      href="tel:+(617) 489-2321"
                      className="text-black/80 inline-block transition hover:scale-110 hover:text-secondary"
                      >+(617) 489-2321</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div
            className="bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9] py-5 dark:border-t-2 dark:border-white/5 dark:bg-none"
          >
            <div className="container">
              <div
                className="text-black/80 items-center justify-between text-center font-bold dark:text-white md:flex"
              >
                <div>
                  <a
                    className="text-black/80 text-primary transition hover:text-secondary">@Vector Gym Pvt. Ltd.</a>
                </div>
                <div className='flex'>
                  Need help? Visit the Contact Us
                    {/* <a
                    className="text-black/80 text-secondary transition hover:text-primary"> Contact Us
                    </a> */}
                    <img
                    src="./Images/tele.png"
                    alt="telephone"
                    className =" text-black/80 h-5 w-auto"/>
                    
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
   </>
  );
};

export default FrontPageText;
