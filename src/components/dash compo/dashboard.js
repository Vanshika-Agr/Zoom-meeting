import React from 'react'
// import Sidebar from '../Sidebar'
// import Change from './Change'
const Dashboard=()=>{
  const plans = [
    {
        name: "AGENDA",
        price: 12,
        features: [
            "Host Name: Avishi Agrawal",
            "Meeting Id: 101",
            "Date: 24/08/23",
            "Time: 1:00 am",
            "Institution Name: GLA University",
            "Participant limit: 100",
            "Meeting Link: ",

        ],
    },
    {
        name: "Startup",
        price: 35,
        features: [
          "Host Name: Raju Pandit",
          "Meeting Id: 101",
          "Date: 24/08/23",
          "Time: 8:00 pm",
          "Institution Name: GLA University",
          "Participant limit: 100",
          "Meeting Link: ",
        ],
    },
    {
        name: "Enterprise",
        price: 60,
        features: [
          "Host Name: XYZ",
          "Meeting Id: 101",
          "Date: 24/08/23",
          "Time: 9:00 am",
          "Institution Name: GLA University",
          "Participant limit: 50",
          "Meeting Link: ",
        ],
    },
];
      return (
          <section className="py-14 bg-[url('https://img.freepik.com/free-vector/white-minimal-hexagons-background_79603-1452.jpg?w=1060&t=st=1695528415~exp=1695529015~hmac=bb7cc8429d2e7505442e8895c751a3eefcf5f87ac19ae08c72f619d0be864aed')]">
        {/* <Sidebar></Sidebar> */}
              <div className="max-w-screen-xl mt-[-2rem] mx-auto px-4 text-gray-600 md:pl-[6rem] ">
                  <div className='relative max-w-xl mx-auto sm:text-center'>
                      <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                          Scheduled Meetings
                      </h3>
                      <div className='mt-3 max-w-xl'>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                          </p>
                      </div>
                  </div>
                  <div className='mt-10 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3 '>
                      {
                          plans.map((item, idx) => (
                              <div key={idx} className='relative flex-1 flex items-stretch flex-col p-[1rem] rounded-xl border-2 shadow-xl '>
                                  <div>
                                      <span className='text-indigo-600 font-medium'>
                                          {item.name}
                                      </span>
                                      {/* <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                          ${item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                      </div> */}
                                  </div>
                                  <ul className='py-6 space-y-2'>
                                      {
                                          item.features.map((featureItem, idx) => (
                                              <li key={idx} className='flex items-center gap-5'>
                                                  {/* <svg
                                                      xmlns='http://www.w3.org/2000/svg'
                                                      className='h-5 w-5 text-indigo-600'
                                                      viewBox='0 0 20 20'
                                                      fill='currentColor'>
                                                      <path
                                                          fill-rule='evenodd'
                                                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                          clip-rule='evenodd'></path>
                                                  </svg> */}
                                                  {featureItem}
                                              </li>
                                          ))
                                      }
                                  </ul>
                                  <div className="flex-1 flex items-end">
                                      <button className='px-3 py-2 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                        Attend meeting
                                      </button>
                                  </div>
                              </div>
                          ))
                      }
                  </div>
              </div>
          </section>
      );
  };

export default Dashboard
