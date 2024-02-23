import React from 'react'

const ByTheNumber = () => {
    return (
        <>
            <div class="relative py-2 lg:py-20 lg:pb-12 bg-black dark:bg-white">
                <div class="flex justify-around h-[300px] w-full m-auto max-w-[1341px]">
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 hidden sm:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 hidden lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 hidden lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 hidden lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 hidden lg:block"></div>
                </div>
                <div class="mx-auto mb-14 px-2 pb-2 lg:mb-10 lg:p-0 " id="numbers">
                    <div class="lg:grid lg:grid-cols-12">
                        <a class="flex items-center gap-2 lg:block mb-6 ml-8 mt-0 text-sm lg:col-span-7 lg:col-start-3 lg:ml-28" href="#numbers">
                            <p class="flex items-center text-sm text-white dark:text-black">By the Numbers</p>
                        </a>
                    </div>
                    <div class="lg:grid lg:grid-cols-12 lg:items-end">
                        <p class="mb-8 text-3xl leading-extra-tight lg:col-span-8 lg:col-start-3 lg:mx-2 lg:mb-0 lg:text-4xl text-white dark:text-black">The numbers don't lie — Arbitrum chains lead the industry
                            <span class="text-white/60 dark:text-black/60"> thanks to the talented and passionate community.</span></p>
                    </div>
                </div>
                <div className="lg:flex lg:justify-center grid grid-cols-2 max-w-[1341px] m-auto gap-4 px-2 lg:gap-[3px]">
                    <div class="rounded-md w-full lg:max-w-[234px] px-2 pb-4 pt-2 dark:bg-bg_2 bg-white/10 lg:col-span-2 lg:col-start-10">
                        <div class="mb-18 min-h-[106px] rounded bg-black px-2 pb-4 pt-2 text-xl leading-tighter dark:bg-white lg:min-h-[140px] lg:text-2xl xl:min-h-[160px] xl:text-3xl">
                            <p class="text-white dark:text-black">2.05M</p><p class="text-white/60 dark:text-black/60">ETH Saved</p>
                        </div>
                        <div class="mx-2 mt-[5rem] flex flex-col items-start gap-2 lg:flex-row lg:items-end lg:justify-between">
                            <p class="text-sm font-medium leading-tighter text-white/60 dark:text-black/60">Updated<br />February 1, 2023</p>
                            <a target="_blank" href="/" class="border-b border-dashed border-current text-xs leading-tighter text-white/60 dark:text-black/60 hover:text-white  dark:hover:text-black">Source</a>
                        </div>
                    </div>
                    <div class="rounded-md w-full lg:max-w-[234px] px-2 pb-4 pt-2 dark:bg-bg_2 bg-white/10 lg:col-span-2 lg:col-start-10">
                        <div class="mb-18 min-h-[106px] rounded bg-black px-2 pb-4 pt-2 text-xl leading-tighter dark:bg-white lg:min-h-[140px] lg:text-2xl xl:min-h-[160px] xl:text-3xl">
                            <p class="text-white dark:text-black">671K</p><p class="text-white/60 dark:text-black/60">Active Wallets</p>
                        </div>
                        <div class="mx-2 mt-[5rem] flex flex-col items-start gap-2 lg:flex-row lg:items-end lg:justify-between">
                            <p class="text-sm font-medium leading-tighter text-white/60 dark:text-black/60">Updated<br />February 1, 2023</p>
                            <a target="_blank" href="/" class="border-b border-dashed border-current text-xs leading-tighter text-white/60 dark:text-black/60 hover:text-white  dark:hover:text-black">Source</a>
                        </div>
                    </div>
                    <div class="rounded-md w-full lg:max-w-[234px] px-2 pb-4 pt-2 dark:bg-bg_2 bg-white/10 lg:col-span-2 lg:col-start-10">
                        <div class="mb-18 min-h-[106px] rounded bg-black px-2 pb-4 pt-2 text-xl leading-tighter dark:bg-white lg:min-h-[140px] lg:text-2xl xl:min-h-[160px] xl:text-3xl">
                            <p class="text-white dark:text-black">$11.24B</p><p class="text-white/60 dark:text-black/60">Total Value Locked</p>
                        </div>
                        <div class="mx-2 mt-[5rem] flex flex-col items-start gap-2 lg:flex-row lg:items-end lg:justify-between">
                            <p class="text-sm font-medium leading-tighter text-white/60 dark:text-black/60">Updated<br />February 1, 2023</p>
                            <a target="_blank" href="/" class="border-b border-dashed border-current text-xs leading-tighter text-white/60 dark:text-black/60 hover:text-white  dark:hover:text-black">Source</a>
                        </div>
                    </div>
                    <div class="rounded-md w-full lg:max-w-[234px] px-2 pb-4 pt-2 dark:bg-bg_2 bg-white/10 lg:col-span-2 lg:col-start-10">
                        <div class="mb-18 min-h-[106px] rounded bg-black px-2 pb-4 pt-2 text-xl leading-tighter dark:bg-white lg:min-h-[140px] lg:text-2xl xl:min-h-[160px] xl:text-3xl">
                            <p class="text-white dark:text-black">49.29%</p><p class="text-white/60 dark:text-black/60">L2 Market Share</p>
                        </div>
                        <div class="mx-2 mt-[5rem] flex flex-col items-start gap-2 lg:flex-row lg:items-end lg:justify-between">
                            <p class="text-sm font-medium leading-tighter text-white/60 dark:text-black/60">Updated<br />February 1, 2023</p>
                            <a target="_blank" href="/" class="border-b border-dashed border-current text-xs leading-tighter text-white/60 dark:text-black/60 hover:text-white  dark:hover:text-black">Source</a>
                        </div>
                    </div>
                    <div class="rounded-md w-full lg:max-w-[234px] px-2 pb-4 pt-2 dark:bg-bg_2 bg-white/10 lg:col-span-2 lg:col-start-10">
                        <div class="mb-18 min-h-[106px] rounded bg-black px-2 pb-4 pt-2 text-xl leading-tighter dark:bg-white lg:min-h-[140px] lg:text-2xl xl:min-h-[160px] xl:text-3xl">
                            <p class="text-white dark:text-black">628M</p><p class="text-white/60 dark:text-black/60">Total Transactions</p>
                        </div>
                        <div class="mx-2 mt-[5rem] flex flex-col items-start gap-2 lg:flex-row lg:items-end lg:justify-between">
                            <p class="text-sm font-medium leading-tighter text-white/60 dark:text-black/60">Updated<br />February 1, 2023</p>
                            <a target="_blank" href="/" class="border-b border-dashed border-current text-xs leading-tighter text-white/60 dark:text-black/60 hover:text-white  dark:hover:text-black">Source</a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-around h-[300px] w-full m-auto max-w-[1440px]">
                <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 hidden sm:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 hidden lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 hidden lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 hidden lg:block"></div>
                    <div class=" w-[1px] bg-bg_300 dark:bg_300 opacity-1 hidden lg:block"></div>
                </div>
            </div>
        </>
    )
}

export default ByTheNumber;