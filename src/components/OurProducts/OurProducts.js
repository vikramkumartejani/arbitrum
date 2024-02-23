import React from "react";
import Video1 from '../../assets/orbit.mp4'
import Logo from '../../assets/logo-white.svg'

const OurProducts = () => {
  return (
    <div id="products" className="overflow-hidden pt-26 bg-black dark:bg-white">
      <a
        className="ml-16 mt-4 flex items-center gap-2 lg:ml-24  "
        href="#products"
      >
        <p className="flex items-center text-sm text-white dark:text-black">Our Products</p>
        <div className="hash relative ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
             className="h-3 w-3 opacity-75"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
            ></path>
          </svg>
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 rounded bg-black-15-on-white-rgb px-1 py-1 text-xs leading-none dark:bg-white-20-on-black-rgb hidden">
            Copied!
          </span>
        </div>
      </a>
      <p className="leading-extra-tight text-white dark:text-black mb-10 pl-4 pr-16 pt-4 text-3xl lg:max-w-[900px] lg:text-4xl">
        With a powerful suite of Layer 2 scaling solutions, Arbitrum is shaping
        the future of Ethereum.  <span className="text-white/60 dark:text-black/60"> Arbitrum technology makes it possible for projects to leverage
          Ethereum's security to build next-gen apps.
        </span>
      </p>
      <div className="mb-20 grid gap-[2px] px-4 lg:grid-cols-4 lg:px-[1px]">
        {/* Product 1 */}
        <a href="/" className="bg-bg_3 lg:dark:bg-bg_4 dark:bg-arbitrum-one-blue rounded-md">
          <div className="relative h-full overflow-hidden rounded-md p-4 text-white lg:hover:text-white   lg:hover:mix-blend-screen lg:hover:invert bg-arbitrum-one-blue lg:hover:bg-arbitrum-one-blue dark:lg:hover:bg-arbitrum-one-blue lg:bg-black/5 lg:text-black dark:lg:bg-white/10 dark:lg:text-white">
             <video className="relative -ml-3 -mt-2 h-[100px] w-[100px] lg:h-[140px] lg:w-[140px ]" width="140" height="140" poster={Logo} loop playsinline preload="none" aria-hidden="true">
              <source type="video/mp4" src={Video1} />
             </video>
            <div className="absolute left-0 top-0 h-full w-full"></div>
            <h3 className="mt-4 text-xl font-medium leading-none lg:mt-28 lg:text-3xl  text-white lg:dark:text-black">
              Rollup
            </h3>
            <p className="my-4 text-sm lg:opacity-60  text-white lg:dark:text-black">
              Arbitrum's market-leading rollup technology uses fraud proofs to
              leverage Ethereum's security and reduce transaction fees by an
              order of magnitude, making scalability possible.
            </p>
            <span
              className="inline-block border-b border-current py-[3px]  text-white lg:dark:text-black font-mono text-xs leading-none lg:mt-auto lg:border-dashed lg:opacity-60"
             >
              Learn more
            </span>
          </div>
        </a>
        {/* Product 2 */}
        <a href="/rollup" className="bg-bg_3 lg:dark:bg-bg_4 dark:bg-arbitrum-nova-orange rounded-md">
          <div className="relative h-full overflow-hidden rounded-md p-4 text-white lg:hover:text-white bg-arbitrum-nova-orange lg:hover:mix-blend-screen lg:hover:invert   lg:hover:bg-arbitrum-nova-orange dark:lg:hover:bg-arbitrum-nova-orange lg:bg-black/5 lg:text-black dark:lg:bg-white/10 dark:lg:text-white">
            {/* Replace with your product video component */}
            <video className="relative -ml-3 -mt-2 h-[100px] w-[100px] lg:h-[140px] lg:w-[140px ]" width="140" height="140" poster={Logo} loop playsinline preload="none" aria-hidden="true">
              <source type="video/mp4" src={Video1} />
             </video>
            <div className="absolute left-0 top-0 h-full w-full"></div>
            <h3 className="mt-4 text-xl font-medium leading-none lg:mt-28 lg:text-3xl  lg:text-white text-black  dark:text-black">
            AnyTrust
            </h3>
            <p className="my-4 text-sm lg:opacity-60  lg:text-white text-black dark:text-black">
            Designed for apps that require low transaction  costs, AnyTrust chains rely on a Data Availability Committee that settles on Ethereum, making  secure web3 gaming and social finally possible.
            </p>
            <span
              className="inline-block border-b border-current py-[3px]  lg:text-white text-black dark:text-black font-mono text-xs leading-none lg:mt-auto lg:border-dashed lg:opacity-60"
             >
              Learn more
            </span>
          </div>
        </a>
        {/* Product 3 */}
        <a href="/rollup" className="bg-bg_3 lg:dark:bg-bg_4 dark:bg-arbitrum-orbit-blue rounded-md">
          <div className="relative h-full overflow-hidden rounded-md p-4 text-white lg:hover:text-white bg-arbitrum-orbit-blue lg:hover:mix-blend-screen lg:hover:invert lg:hover:bg-arbitrum-orbit-blue dark:lg:hover:bg-arbitrum-orbit-blue lg:bg-black/5 lg:text-black dark:lg:bg-white/10 dark:lg:text-white">
            {/* Replace with your product video component */}
            <video className="relative -ml-3 -mt-2 h-[100px] w-[100px] lg:h-[140px] lg:w-[140px ]" width="140" height="140" poster={Logo} loop playsinline preload="none" aria-hidden="true">
              <source type="video/mp4" src={Video1} />
             </video>
            <div className="absolute left-0 top-0 h-full w-full"></div>
            <h3 className="mt-4 text-xl font-medium leading-none lg:mt-28 lg:text-3xl lg:text-white text-black  dark:text-black">
            Orbit
            </h3>
            <p className="my-4 text-sm lg:opacity-60  lg:text-white text-black dark:text-black">
            Orbit chains are fully permissionless, with dedicated throughput, increased gas fee reliability, and more. Launch your own Orbit chain now.
             </p>
            <span
              className="inline-block border-b border-current py-[3px]  lg:text-white text-black dark:text-black font-mono text-xs leading-none lg:mt-auto lg:border-dashed lg:opacity-60"
             >
              Learn more
            </span>
          </div>
        </a>
        {/* Product 4 */}
        <a href="/" className="bg-bg_3 lg:dark:bg-bg_4 dark:bg-arbitrum-one-blue rounded-md">
          <div className="relative h-full overflow-hidden rounded-md p-4 text-white lg:hover:text-white   lg:hover:mix-blend-screen lg:hover:invert bg-arbitrum-stylus-pink lg:hover:bg-arbitrum-stylus-pink dark:lg:hover:bg-arbitrum-one-blue lg:bg-black/5 lg:text-black dark:lg:bg-white/10 dark:lg:text-white">
             <video className="relative -ml-3 -mt-2 h-[100px] w-[100px] lg:h-[140px] lg:w-[140px ]" width="140" height="140" poster={Logo} loop playsinline preload="none" aria-hidden="true">
              <source type="video/mp4" src={Video1} />
             </video>
            <div className="absolute left-0 top-0 h-full w-full"></div>
            <h3 className="mt-4 text-xl font-medium leading-none lg:mt-28 lg:text-3xl  text-white lg:dark:text-black">
              Stylus
            </h3>
            <p className="my-4 text-sm lg:opacity-60  text-white lg:dark:text-black">
            Deploy apps to Arbitrum chains using your favorite programming languages including Rust, C, and C++, while staying fully interoperable with the Ethereum Virtual Machine.
            </p>
            <span
              className="inline-block border-b border-current py-[3px]  text-white lg:dark:text-black font-mono text-xs leading-none lg:mt-auto lg:border-dashed lg:opacity-60"
             >
              Learn more
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default OurProducts;
