<script>
    import { getContext } from 'svelte';

    import Popup from '../components/Popup.svelte';
    import PledgeList from '../components/PledgeList.svelte';

    import { backers, total } from '../stores/store.js';

    let totalBackers = 0;
    let totalAmount = 0;
    let bookmark = false;
    
    $: percentage = Math.floor(100 / 100000 * $total);

    backers.subscribe(value => {
        totalBackers = Number(value).toLocaleString();
    });

    total.subscribe(value => {
        totalAmount = Number(value).toLocaleString();
    });

    const { open } = getContext('simple-modal');

    const showModal = () => {
        open(Popup);
    }
</script>

<div class="px-6 pb-16">
    <div class="max-w-[327px] md:max-w-[730px] mx-auto space-y-6">
        <div class="bg-white px-6 md:px-12 pt-[3.25rem] md:pt-[3.375rem] pb-10 md:pb-12 -mt-14 md:-mt-[5.75rem] relative rounded-lg text-center border border-[#f2f2f2]">
            <svg class="absolute -top-7 left-1/2 -translate-x-1/2" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fill-rule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></svg>

            <h1 class="font-bold leading-tight text-xl md:text-[1.75rem] px-6 mb-4 md:mb-3.5">Mastercraft Bamboo Monitor Riser</h1>
            
            <p class="leading-relaxed text-sm md:text-base text-dark-grey">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

            <div class="flex items-center justify-center mt-6 md:mt-9 md:justify-between">
                <button type="button" class="py-4 px-10 mr-2 rounded-full bg-cyan hover:bg-cyan-dark focus:bg-cyan-dark text-white font-medium min-w-[214px] md:min-w-[204px] transition" on:click={showModal}>Back this project</button>

                <button type="button" class="group rounded-full text-white md:flex md:items-center md:bg-[#f4f4f4] md:text-dark-grey md:font-bold md:pr-6" on:click={() => bookmark = !bookmark}><svg class="group-hover:opacity-60 transition {bookmark ? 'group-hover:opacity-100' : ''}" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill={bookmark ? '#147B74' : '#2F2F2F'} cx="28" cy="28" r="28"/><path fill={bookmark ? '#ffffff' : '#b1b1b1'} d="M23 19v18l5-5.058L33 37V19z"/></g></svg><span class="sr-only md:not-sr-only md:pl-4 {bookmark ? 'text-cyan-dark' : ''}">{bookmark ? 'Bookmarked' : 'Bookmark'}</span></button>
            </div>
        </div>

        <div class="bg-white px-6 pt-8 pb-10 md:p-12 rounded-lg text-center md:text-left border border-[#f2f2f2]">
            <div class="md:flex md:gap-x-12">
                <div class="md:w-1/3">
                    <p class="mb-6 pb-6 md:mb-0 md:pb-0 divider"><strong class="font-bold text-3xl md:text-[2rem] block mb-2.5">${totalAmount}</strong> <span class="text-sm md:text-[0.9375rem] text-dark-grey block">of $100,000 backed</span></p>
                </div>

                <div class="md:w-1/3">
                    <p class="mb-6 pb-6 md:mb-0 md:pb-0 divider"><strong class="font-bold text-3xl md:text-[2rem] block mb-2.5">{totalBackers}</strong> <span class="text-sm md:text-[0.9375rem] text-dark-grey block">total backers</span></p>
                </div>

                <div class="md:w-1/3">
                    <p><strong class="font-bold text-3xl md:text-[2rem] block mb-2.5">56</strong> <span class="text-sm md:text-[0.9375rem] text-dark-grey block">days left</span></p>
                </div>
            </div>

            <div class="w-full h-3 bg-[#f4f4f4] rounded-full mt-7 md:mt-9 overflow-hidden">
                <div class="h-full bg-cyan rounded-full" style="width: {percentage}%;"></div>
            </div>
        </div>

        <div class="bg-white px-6 pt-10 pb-10 md:p-12 rounded-lg border border-[#f2f2f2]">
            <h2 class="font-bold leading-tight text-lg mb-6 md:text-xl md:-mt-1 md:mb-8">About this project</h2>

            <p class="leading-relaxed text-sm text-dark-grey mb-6 md:mb-8 md:leading-loose md:text-base">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

            <p class="leading-relaxed text-sm text-dark-grey mb-6 md:mb-10 md:leading-loose md:text-base">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>

            <PledgeList />
        </div>
    </div>
</div>
