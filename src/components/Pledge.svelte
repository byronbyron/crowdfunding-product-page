<script>
    import { getContext } from 'svelte';

    import Popup from '../components/Popup.svelte';

    export let id = 0;
    export let name = '';
    export let description = '';
    export let amount = 0;
    export let stock = 0;
    export let details = {};

    const { open } = getContext('simple-modal');
    
    const showModal = () => {
        open(Popup, { option: id });
    }
</script>

<li class="p-6 md:px-8 md:pt-9 md:pb-8 rounded-lg border border-[#d7d7d7] {stock === 0 ? 'opacity-40 pointer-events-none' : ''}">
    <div class="md:flex">
        <h3 class="font-bold text-sm md:text-lg mb-1 md:mr-auto md:-mt-1">{name}</h3>
        <h4 class="font-bold text-sm md:text-[0.9375rem] mb-6 text-cyan">Pledge ${amount} or more</h4>
    </div>
    
    <p class="leading-relaxed md:leading-loose text-sm md:text-base text-dark-grey mb-6">{description}</p>
    
    <div class="md:flex">
        <p class="flex items-center mb-6 md:mb-0 md:mr-auto"><strong class="text-3xl mr-2">{stock}</strong> <span class="text-dark-grey">left</span></p>
        
        <button type="button" class="text-sm py-3.5 px-10 md:px-8 md:w-[155px] rounded-full bg-cyan hover:bg-cyan-dark focus:bg-cyan-dark text-white font-medium transition {stock === 0 ? 'bg-dark-grey' : ''}" on:click={showModal}>{stock === 0 ? 'Out of stock' : 'Select Reward'}</button>
    </div>
</li>
