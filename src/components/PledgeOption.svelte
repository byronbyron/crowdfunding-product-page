<script>
    import { getContext } from 'svelte';

    import Popup from '../components/Popup.svelte';
    import PopupThanks from '../components/PopupThanks.svelte';

    import { backers, total } from '../stores/store.js';
    import pledgeStore from '../stores/pledgeStore.js';

    export let key = 0;
    export let id = 0;
    export let name = '';
    export let description = '';
    export let amount = 0;
    export let stock = 0;
    export let option = 0;

    let pledgeAmount = amount;

    let isOpen = false;

    if (option === id) isOpen = true;

    const { open, close } = getContext('simple-modal');

    const handlePledge = (id, pledgeAmount) => {
        pledgeStore.update(currentPledges => {
            let copiedPledges = [...currentPledges];
            let decrementedPledge = copiedPledges.find(pledge => pledge.id === id);

            if (Number(decrementedPledge.stock) === 0) return copiedPledges;

            decrementedPledge.stock--;

            return copiedPledges;
        })

        updatePledge();

        close(Popup);
        open(PopupThanks, { id: null }, { closeButton: false, classWindow: "relative w-full max-w-[327px] md:max-w-[540px] max-h-[80vh] overflow-auto my-[120px] mx-auto text-black rounded-lg bg-white transition" });
    }

    function updatePledge() {
        backers.update(n => n + 1);
        
        total.update(n => n + pledgeAmount);
    }

    function updatePledgeAmount(e) {
        pledgeAmount = e.target.valueAsNumber;
    }
</script>

<li class="shadow-sm rounded-lg {stock === 0 ? 'opacity-50 pointer-events-none' : ''}">
    <button class="toggle block text-left px-6 pt-4 pb-8 rounded-lg cursor-pointer md:pt-7 md:relative" class:open={isOpen} on:click={() => isOpen = !isOpen} data-option={option} data-id={id}>
        <span class="label-title">
            <span class="font-bold">{name}</span>
      
            {#if amount}
                <span class="block font-bold text-cyan">Pledge ${amount} or more</span>
            {/if}
        </span>

        <span class="block md:pl-10">{description}</span>

        {#if stock !== null}
            <span class="flex items-center mt-4 md:absolute md:top-2 md:right-6">
                <span class="font-bold text-xl text-black mr-2">{stock}</span> <span>left</span>
            </span>
        {/if}
    </button>

    {#if isOpen}
        <div class="p-6 border-t border-light">
            <div class="flex flex-col md:flex-row items-center gap-5 md:gap-0">
                {#if amount}
                    <p>Enter your pledge</p>
                {/if}

                <div class="flex justify-end ml-auto">
                    {#if amount}
                        <div class="money">
                            <input type="number" class="money font-bold text-sm text-black w-[100px] border-light rounded-full mr-4 pl-9 h-full" name="pledgeAmount_{id}" value={pledgeAmount} min="{amount}" on:change={updatePledgeAmount} on:keyup={e => e.key === 'Enter' && handlePledge(id, pledgeAmount)}>
                        </div>
                    {:else}
                        <input type="hidden" name="pledgeAmount_{id}" value={null}>
                    {/if}

                    <button type="button" class="text-sm py-3.5 px-6 rounded-full bg-cyan hover:bg-cyan-dark focus:bg-cyan-dark text-white font-medium transition" on:click={() => handlePledge(id, pledgeAmount)}>Continue</button>
                </div>
            </div>
        </div>
    {/if}
</li>
