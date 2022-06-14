<script>
    import { getContext } from 'svelte';
    const { close } = getContext('simple-modal');

    export let id = null;

    const closePopup = () => {
        close();
    }
</script>

<div class="text-center">
    <img src="/icon-check.svg" alt="" class="inline-block mt-1 mb-5 md:mt-0 md:w-[90px] md:mb-10">

    <h2 class="font-bold text-lg md:text-2xl mb-6">Thanks for your support!</h2>

    <p class="leading-relaxed text-sm text-dark-grey mb-8 md:text-base md:leading-loose">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser woldwide. You will get an email once our campaign is completed.</p>

    <button type="button" class="text-sm py-3.5 px-8 rounded-full bg-cyan hover:bg-cyan-dark focus:bg-cyan-dark text-white font-medium transition mb-2 md:mb-0" on:click={closePopup}>Got it!</button>
</div>
