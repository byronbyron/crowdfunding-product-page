<script>
    import { writable } from 'svelte/store';
    import Modal, { bind } from 'svelte-simple-modal';
    import Popup from '../components/Popup.svelte';
    const modal = writable(null);
    const showModal = () => modal.set(bind(Popup, { message: "It's a modal!" }));
</script>

<svelte:head>
    <title>Frontend Mentor | Crowdfunding product page</title>
    <meta name="description" content="Crowdfunding product page">
</svelte:head>

<div class="px-6 pb-16">
    <div class="max-w-[730px] mx-auto space-y-6">
        <div class="bg-white px-6 md:px-12 pt-[3.25rem] md:pt-[3.375rem] pb-10 md:pb-12 -mt-14 md:-mt-[5.75rem] relative rounded-lg text-center border border-[#f2f2f2]">
            <svg class="absolute -top-7 left-1/2 -translate-x-1/2" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fill-rule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></svg>

            <h1 class="font-bold leading-tight text-xl md:text-[1.75rem] px-6 mb-4 md:mb-3.5">Mastercraft Bamboo Monitor Riser</h1>
            
            <p class="leading-relaxed text-sm md:text-base text-dark-grey">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

            <div class="flex items-center justify-center mt-6 md:mt-9 md:justify-between">
                <Modal show={$modal}>
                  <button type="button" class="py-4 px-10 mr-2 rounded-full bg-cyan hover:bg-cyan-dark focus:bg-cyan-dark text-white font-medium min-w-[214px] md:min-w-[204px] transition" on:click={showModal}>Back this project</button>
                </Modal>

                <button type="button" class="group rounded-full text-white md:flex md:items-center md:bg-[#f4f4f4] md:text-dark-grey md:font-bold md:pr-6"><svg class="group-hover:opacity-60 transition" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg><span class="sr-only md:not-sr-only md:pl-4">Bookmark</span></button>
            </div>
        </div>

        <div class="bg-white px-6 pt-8 pb-10 md:p-12 rounded-lg text-center md:text-left border border-[#f2f2f2]">
            <div class="md:flex md:gap-x-12">
                <div class="md:w-1/3">
                    <p class="mb-6 pb-6 md:mb-0 md:pb-0 divider"><strong class="font-bold text-3xl md:text-[2rem] block mb-2.5">$89,914</strong> <span class="text-sm md:text-[0.9375rem] text-dark-grey block">of $100,000 backed</span></p>
                </div>

                <div class="md:w-1/3">
                    <p class="mb-6 pb-6 md:mb-0 md:pb-0 divider"><strong class="font-bold text-3xl md:text-[2rem] block mb-2.5">5,007</strong> <span class="text-sm md:text-[0.9375rem] text-dark-grey block">total backers</span></p>
                </div>

                <div class="md:w-1/3">
                    <p><strong class="font-bold text-3xl md:text-[2rem] block mb-2.5">56</strong> <span class="text-sm md:text-[0.9375rem] text-dark-grey block">days left</span></p>
                </div>
            </div>

            <div class="w-full h-3 bg-[#f4f4f4] rounded-full mt-7 md:mt-9 progress">
                <div class="h-full bg-cyan rounded-full" style="width: 78.5%;"></div>
            </div>
        </div>

        <div class="bg-white px-6 pt-10 pb-10 rounded-lg border border-[#f2f2f2]">
            <h2 class="font-bold leading-tight text-lg mb-6">About this project</h2>

            <p class="leading-relaxed text-sm text-dark-grey mb-6">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

            <p class="leading-relaxed text-sm text-dark-grey mb-6">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>

            <ul class="space-y-6">
                <li class="p-6 md:p-8 md:pt-10 rounded-lg border border-[#d7d7d7]">
                    <div class="md:flex">
                        <h3 class="font-bold text-sm md:text-lg mb-1 md:mr-auto">Bamboo Stand</h3>
                        <h4 class="font-bold text-sm md:text-base mb-6 text-cyan">Pledge $25 or more</h4>
                    </div>
                    
                    <p class="leading-relaxed md:leading-loose text-sm md:text-base text-dark-grey mb-6">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                    
                    <div class="md:flex">
                        <p class="flex items-center mb-6 md:mb-0 md:mr-auto"><strong class="text-3xl mr-2">101</strong> <span class="text-dark-grey">left</span></p>
                        
                        <button type="button" class="text-sm py-3.5 px-10 rounded-full bg-cyan hover:bg-cyan-dark focus:bg-cyan-dark text-white font-medium transition">Select Reward</button>
                    </div>
                </li>

                <li class="p-6 md:p-8 md:pt-10 rounded-lg border border-[#d7d7d7]">
                    <div class="md:flex">
                        <h3 class="font-bold text-sm md:text-lg mb-1 md:mr-auto">Black Edition Stand</h3>
                        <h4 class="font-bold text-sm md:text-base mb-6 text-cyan">Pledge $75 or more</h4>
                    </div>
                    
                    <p class="leading-relaxed md:leading-loose text-sm md:text-base text-dark-grey mb-6">You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                    
                    <div class="md:flex">
                        <p class="flex items-center mb-6 md:mb-0 md:mr-auto"><strong class="text-3xl mr-2">64</strong> <span class="text-dark-grey">left</span></p>
                        
                        <button type="button" class="text-sm py-3.5 px-10 rounded-full bg-cyan hover:bg-cyan-dark focus:bg-cyan-dark text-white font-medium transition">Select Reward</button>
                    </div>
                </li>

                <li class="p-6 md:p-8 md:pt-10 rounded-lg border border-[#d7d7d7] opacity-40 pointer-events-none">
                    <div class="md:flex">
                        <h3 class="font-bold text-sm md:text-lg mb-1 md:mr-auto">Mahogany Special Edition</h3>
                        <h4 class="font-bold text-sm md:text-base mb-6 text-cyan">Pledge $200 or more</h4>
                    </div>
                    
                    <p class="leading-relaxed md:leading-loose text-sm md:text-base text-dark-grey mb-6">You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                    
                    <div class="md:flex">
                        <p class="flex items-center mb-6 md:mb-0 md:mr-auto"><strong class="text-3xl mr-2">0</strong> <span class="text-dark-grey">left</span></p>
                        
                        <button type="button" class="text-sm py-3.5 px-10 rounded-full bg-dark-grey text-white font-medium transition" disabled>Out of Stock</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
