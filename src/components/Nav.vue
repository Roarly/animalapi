<template>
<div class="text-gray-700 bg-blue-400">
    <div class="container flex items-center justify-between py-4 mx-auto">
        <h1 class="text-2xl font-light tracking-tight">Cool<span class="font-semibold">Candy</span>
        </h1>
        <nav>
            <ul class="flex ">
                <router-link to="/"><li class="px-5 py-4 bg-gray-300 rounded-l-2xl hover:cursor-pointer hover:bg-slate-500 hover:text-white">Home</li></router-link>
                <router-link to="/about"><li class="px-5 py-4 bg-gray-400 hover:cursor-pointer hover:bg-slate-500 hover:text-white">About</li></router-link>
                <router-link to="/hello"><li class="px-5 py-4 bg-gray-300 hover:cursor-pointer hover:bg-slate-500 hover:text-white">Candy</li></router-link>
                <router-link to="/order"><li class="px-5 py-4 bg-gray-400 rounded-r-2xl hover:cursor-pointer hover:bg-slate-500 hover:text-white">Checkout</li></router-link>
            </ul>
        </nav>
    </div>
</div>
</template>