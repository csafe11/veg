<template>
  <div class="container mx-auto mt-10">
    <div class=" cim row my-25 text-center text-5xl md:text-9xl">
        <div class="column">
<div>Receptek</div>

        </div>
    </div>
    <!-- Rugalmas Grid rendszer -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="flex">
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col">
          <a href="#">
            <NuxtImg class="aspect-3/2 object-cover w-full" src="/cover8.jpg" />
          </a>
          <div class="p-5 flex flex-col flex-grow">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far.
            </p>
            <div class="mt-auto">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-lg font-medium text-black bg-transparent rounded-lg hover:bg-yellow-100 focus:ring-4 focus:outline-none focus:ring-yellow-100 dark:bg-yellow-100 dark:hover:bg-yellow-100 dark:focus:yellow-100"
              >
                KIPRÓBÁLOM
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Másik kártya -->
      <div class="flex">
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col">
        
            <NuxtImg class="aspect-3/2 object-cover w-full" src="/cover8.jpg" />
         
          <div class="p-5 flex flex-col flex-grow">
          
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
         
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far.
            </p>
            <div class="mt-auto">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Harmadik kártya -->
      <div class="flex">
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col">
          <a href="#">
            <NuxtImg class="aspect-3/2 object-cover w-full" src="cover8.jpg" />
          </a>
          <div class="p-5 flex flex-col flex-grow">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far.
            </p>
            <div class="mt-auto">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

 .cim {
   font-family: "Monsieur La Doulaise", cursive;
  font-weight: 400;
  font-style: normal;  
  color: rgb(221, 19, 107);
 
        } 

</style>
