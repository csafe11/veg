<template>
    <nav class="border-gray-200 bg-yellow-50 dark:bg-gray-800 md:max-lg:flex dark:border-gray-700 md:text-5xl">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between sm-auto mx-auto p-4">
    <div class="w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 md:max-lg:flex rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li class="py-2 px-3">
          <NuxtLink to="/" exact-active-class="active-link" active-class="active-link" class="block py-3 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</NuxtLink>
        </li>
        <li class="py-2 px-3">
          <NuxtLink to="/receptek" exact-active-class="active-link" active-class="active-link" class="block py-3 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Receptek</NuxtLink>
        </li>
        <li class="py-2 px-3">
          <NuxtLink to="/about" exact-active-class="active-link" active-class="active-link" class="block py-3 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NuxtLink>
        </li>
        <li class="py-2 px-3">
          <NuxtLink to="/alapanyagok" exact-active-class="active-link" active-class="active-link" class="block py-3 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Alapanyagok</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>


<style scoped>
/* Alap link stílus */
.nav-link {
  display: block;
  padding: 8px 12px;
  color: #4a4a4a;
  transition: color 0.3s, background-color 0.3s;
}

/* Aktív link kiemelése */
.active-link {
  color: #d3d008;
 /* background-color: #ffeba9; */
  border-radius: 4px;
  
}

nav {
    background-color: #E8D3C7;
    font-family: "Cormorant", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>