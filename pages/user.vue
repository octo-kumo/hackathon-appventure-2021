<template>
  <div id="base" class="flex flex-col space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6">
      <div class="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50">
        <div class="flex flex-col space-y-6 md:h-full md:justify-between">
          <div class="flex justify-between">
                            <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                Main Account
                            </span>
            <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                Available Funds
                            </span>
          </div>
          <div class="flex gap-2 md:gap-4 justify-between items-center">
            <div class="flex flex-col space-y-4">
              <h2 class="text-gray-800 font-bold tracking-widest leading-tight">Su Shi's Saving Account</h2>
              <div class="flex items-center gap-4">
                <p class="text-lg text-gray-600 tracking-wider">**** **** *321</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
            <h2 class="text-lg md:text-xl xl:text-3xl text-gray-700 font-black tracking-wider">
              <span class="md:text-xl">$</span>
              92,817.45
            </h2>
          </div>
          <div class="flex gap-2 md:gap-4">
            <a href="#"
               class="bg-blue-600 px-5 py-3 w-full text-center md:w-auto rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-800">
              Top-up
            </a>
            <a href="#"
               class="bg-blue-50 px-5 py-3 w-full text-center md:w-auto rounded-lg text-blue-600 text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white">
              View Purchase History
            </a>
          </div>
        </div>
      </div>
      <div
        class="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col justify-between">
        <div class="flex flex-col">
          <p class="text-white font-bold">Security</p>
          <p class="mt-1 text-xs md:text-sm text-gray-50 font-light leading-tight max-w-sm">
            We encrypt your information with military grade encryption, the same kind that will be used to send ICBMs
            across the oceans. You can trust us with your banking information.
          </p>
        </div>
        <div class="flex justify-between items-end">
          <a href="#"
             class="bg-blue-800 px-4 py-3 rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white">
            Learn More
          </a>
          <img src="/assets/shield.png" alt="calendar" class="w-auto h-24 object-cover">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: "User"
  }),
}
</script>
