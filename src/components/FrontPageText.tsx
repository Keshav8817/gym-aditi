// src/FrontPageText.tsx
import {BsArrowUpRight, BsToggleOn} from "react-icons/bs";


const FrontPageText: React.FC = () => {

  return (
    <>
    <div className="flex items-center space-x-2 mx-5">
        <div className="flex-1 p-20"> 

            <h1 className="text-blue-600 font-bold text-6xl">
            <i>NOTHING BUT</i>
            </h1>
            <h1 className="text-red-600 font-bold text-6xl mt-4">
            <i>GAINS HERE.</i>
            </h1>

            <p className="text-x1 mt-4 text-gray-500">Accumsan vulputate sed id blandit duis pellentesque nullam diam purus. Quisque diam pharetra</p>
            
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

      <div className="flex-1">
        {/* image */}
        <img
          src="/Images/runner-girl.png"
          alt="Image Description"
          className="w-full h-100 m-9"
        />
      </div>
    </div>

        {/* section 2 */}

    <section className="bg-white py-14 dark:bg-gray-dark md:py-24 px-8">
      <div className="container">
        <div className="flex flex-col justify-between gap-x-4 lg:flex-row">
          <div className="font-semibold uppercase italic lg:w-1/2">
            <img
              src="./Images/01.svg"
              alt="loading"
            //   data-aos="fade-down"
            //   data-aos-duration="1500"
              className="aos-init aos-animate"
            />
            <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
              <span className="text-black dark:text-white">our </span>
              <span className="text-border-gray tracking-wider">popular </span>
              <span className=" text-black/75 pr-4 ">classes</span>
            </h2>
            <p className="leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
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
                className="h-full w-full rounded-t-full "
              />
              {/* object-cover transition duration-500 group-hover:scale-110 (img animation property for all 3 grps)*/}
            </div>
            <div className="mt-5 italic">
              <h5 className="text-lg font-black text-black dark:text-white">
                Pilates Training
              </h5>
              <p className="mb-4 mt-2 font-semibold line-clamp-2">
                Controlled movements that enhance your balance, core strength, flexibility.
              </p>
              <a
                className="text-sm font-extrabold uppercase text-secondary transition hover:text-primary">
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
                className="h-full w-full rounded-t-full "
                                                        
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
                className="h-full w-full rounded-t-full "
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

            {/* section 3 */}

    <section className="py-14 bg-white/80 md:py-20 px-8">
      <div className="container">
        <div className="grid items-center gap-5 lg:grid-cols-2">
          <div
            className="group overflow-hidden lg:order-2 lg:h-[500px] aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src="./Images/02-image.jpg"
              alt=""
              className="h-full w-full object-cover transition duration-500 "
            />
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="font-semibold uppercase italic">
              <img
                src="./Images/02.svg"
                alt=""
                data-aos="fade-down"
                data-aos-duration="1500"
                className="aos-init aos-animate"
              />
              <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                <span className="text-black dark:text-white">why </span>
                <span className="text-border-gray tracking-wider">choose </span>
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-black/75">
                  plurk
                </span>
              </h2>
              <p className="leading-loose">
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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

        {/* section 4 */}

    <section className="bg-white bg-cover bg-center bg-no-repeat py-14 md:py-20 px-12">
      <div className="container">
        <div className="grid lg:grid-cols-2">
          <div
            className="relative h-[350px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></span>
            <img
              src="./Images/p1.webp"
              alt=""
              className="h-full w-full object-cover"
            />
            <h5 className="absolute bottom-5 text-2xl font-black  italic text-black ltr:left-7 rtl:right-7">
              BEST COACHES
            </h5>
          </div>

          <div
            className="relative h-[350px] aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></span>
            <img
              src="./Images/practise2.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <h5 className="absolute bottom-5 text-2xl font-black italic text-black text-underlined ltr:left-7 rtl:right-7">
              NICE PRICES
            </h5>
          </div>
        </div>
      </div>
    </section>   

    {/* section 5 */}
    <section className="overflow-x-hidden bg-white/80 dark:bg-black px-8">
      <div className="container">
        {/* First Grid */}
        <div className="grid items-center lg:grid-cols-2">
          <div
            className="h-full lg:order-2 xl:h-[640px]"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img
              src="./Images/journey.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="px-4 py-10 ltr:xl:mr-24 rtl:xl:ml-24">
            <div className="font-semibold uppercase italic lg:max-w-[610px] ltr:lg:ml-auto rtl:lg:mr-auto">
              <img
                src="./Images/03.svg"
                alt=""
                data-aos="fade-down"
                data-aos-duration="1500"
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
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                alt=""
                data-aos="fade-down"
                data-aos-duration="1500"
                className="aos-init aos-animate"
              />
              <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                <span className="text-black dark:text-white">TRANSFORM </span>
                <span className="text-border-gray tracking-wider">YOUR </span>
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text">
                  FITNESS
                </span>
              </h2>
              <p className="leading-loose line-clamp-5">
                4 rooms, 5 unique workouts, 1 location. plurk offers unrivaled fitness programming. Personal workout stations allow for a safe and comfortable experience. Small class sizes offer a greater level of instructor and group engagement.
              </p>
            </div>
          </div>
          <div
            className="h-full xl:h-[640px] aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img
              src="./Images/p3.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Third Grid */}
        <div className="grid items-center lg:grid-cols-2">
          <div
            className="h-full lg:order-2 xl:h-[640px] aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img
              src="./Images/evolve-togather.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="px-4 py-10 ltr:xl:mr-24 rtl:xl:ml-24">
            <div className="font-semibold uppercase italic lg:max-w-[610px] ltr:lg:ml-auto rtl:lg:mr-auto">
              <img
                src="./Images/05.svg"
                alt=""
                data-aos="fade-down"
                data-aos-duration="1500"
                className="aos-init aos-animate"
              />
              <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                <span className="text-black dark:text-white">EVOLVE </span>
                <span className="text-border-gray tracking-wider">TO</span>
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-black">
                  GATHER
                </span>
              </h2>
              <p className="leading-loose line-clamp-5">
                You can push yourself further with plurk. Our coaches are passionate and supportive, and our studio is outfitted with innovative lighting and sound systems to fuel your workout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* section 6 */}
    
    <section className="py-14 uppercase italic bg-white md:py-20 px-12">
      <div className="container">
        <div className="font-semibold">
          <img
            src="./Images/06.svg"
            alt=""
            data-aos="fade-down"
            data-aos-duration="1500"
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
            plurk is more than another workout, it's a comprehensive approach to fitness.
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

    {/* section 7 */}
    
    {/* bg-[url(/assets/images/gym/counter-bg.png)] */}
    <section className="bg-black bg-cover bg-center bg-no-repeat py-14 md:py-20">
      <div className="container">
        <div className="grid gap-y-10 gap-x-4 uppercase italic sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5 text-center">
            <div className="text-5xl font-black text-white">
              <span>10</span>
            </div>
            <p className="text-lg font-semibold text-slate-700">Years of Expertise</p>
          </div>
          <div className="space-y-5 text-center">
            <div className="text-5xl font-black text-white">
              <span>15</span>
            </div>
            <p className="text-lg font-semibold text-slate-700">Professional Coaches</p>
          </div>
          <div className="space-y-5 text-center">
            <div className="text-5xl font-black text-white">
              <span>20</span>
            </div>
            <p className="text-lg font-semibold text-slate-700">Different Classes</p>
          </div>
          <div className="space-y-5 text-center">
            <div className="text-5xl font-black text-white">
              <span>535</span>
            </div>
            <p className="text-lg font-semibold text-slate-700">Club Members</p>
          </div>
        </div>
      </div>
    </section>

    {/* <section 8 */}
    <section className="bg-gradient-to-t from-white/80 to-transparent py-14 italic dark:bg-gray-dark dark:from-transparent md:py-20 px-20">
      <div className="container">
        <div className="font-semibold uppercase">
          <img
            src="./Images/07.svg"
            alt=""
            data-aos="fade-down"
            data-aos-duration="1500"
            className="aos-init aos-animate"
          />
          <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
            <span className="text-black dark:text-white">TOGETHER </span>
            <span className="text-border-gray tracking-wider">we </span>
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-transparent text-black">
              SUCCEED
            </span>
          </h2>
          <p className="leading-loose xl:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12">
          {/* Swiper component goes here */}
        </div>
      </div>
    </section>
    



   </>
  );
};

export default FrontPageText;
