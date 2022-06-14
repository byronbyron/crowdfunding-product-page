<script>
    import collapse from 'svelte-collapse'
    let open = false
</script>

<header class="header bg-black bg-[url('/image-hero-mobile.jpg')] md:bg-[url('/image-hero-desktop.jpg')] bg-no-repeat bg-center bg-cover h-[300px] md:h-[400px]">
    <div class="max-w-[1158px] mx-auto px-6 relative z-10">
        <nav class="flex items-center py-5 md:py-12">
            <a href="/" class="mr-auto block">
                <img src="./logo.svg" alt="Crowdfund" width="128" height="20">
            </a>

            <button class="text-white flex items-center justify-center w-12 h-12 -mr-4 md:hidden {open ? 'open' : ''}" type="button" on:click={() => open = !open}>
                <span class="sr-only">Menu</span><svg class="burger" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg><svg class="cross" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>
            </button>

            <div class="absolute top-full inset-x-6 z-50 rounded-xl shadow-2xl md:static md:!h-auto md:shadow-none md:rounded-none" use:collapse={{open}}>
                <div class="bg-white md:bg-transparent md:rounded-none">
                    <ul class="text-xl md:text-sm md:text-sm md:flex md:items-center md:space-x-8 md:p-1 md:-top-1">
                        <li><a href="#" class="block px-6 py-5 border-b md:text-white md:p-0 md:border-none">About</a></li>
                        <li><a href="#" class="block px-6 py-5 border-b md:text-white md:p-0 md:border-none">Discover</a></li>
                        <li><a href="#" class="block px-6 py-5 md:text-white md:p-0 md:border-none">Get Started</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <div class="overlay" use:collapse={{open}} style="overflow: hidden; transition: height 0.2s ease 0s; height: 0px;" on:click={() => open = !open}></div>
</header>
