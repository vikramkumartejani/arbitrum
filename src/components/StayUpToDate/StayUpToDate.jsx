import React from 'react';

const StayUpToDate = () => {
  return (
    <div className="bg-black dark:bg-white lg:p-10 p-4">
      <div className="lg:p-5 p-2 text-white dark:text-black lg:mx-auto lg:max-w-7xl lg:px-24 lg:pb-7 lg:pt-12 relative rounded overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-full bg-bg_400 dark:bg-bg_500 dark:brightness-[140%] brightness-[140%] "></div>
        <div className="absolute left-0 top-0 h-full w-full bg-grains-bottom bg-cover bg-bottom bg-no-repeat opacity-10"></div>
        <div className="relative">
          <div className="mb-40 flex items-center lg:mb-30">
            <span className="mr-5 h-[9px] w-[9px] rounded-full bg-white shadow-dot-light-mode dark:bg-black dark:shadow-dot-dark-mode absolute left-4 lg:absolute lg:-ml-24"></span>
            <h6 className="text-sm ml-16 lg:ml-0">Stay up to date</h6>
          </div>
          <p className="mb-36 max-w-[360px] text-lg font-medium lg:mb-20 px-3">Be the first to know about the latest updates and launches.</p>
          <div className="flex flex-col items-start gap-2 lg:w-64 mb-6 px-3">
            <form className="relative inline-flex w-full rounded border border-border_color_2 bg-black/10 backdrop-blur dark:border-white/10 dark:text-white/45 ">
              <input type="email" placeholder="Email" className="grow rounded-l bg-transparent py-3 pl-4 text-sm  dark:placeholder:text-black dark:placeholder:text-white/45 placeholder:text-white/60 hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-0" required="" name="email" />
              <button type="submit" className="rounded-r px-[17.5px] dark:text-black text-white/60  focus-visible:bg-white/10 focus-visible:outline-0  hover:bg-white/10">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" height="16" width="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StayUpToDate;
