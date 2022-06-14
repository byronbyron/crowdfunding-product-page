<script>
    import pledgeStore from '../stores/pledgeStore.js';
    import PledgeOption from '../components/PledgeOption.svelte';

    export let option = 0;
</script>

<ul class="space-y-6">
    {#each $pledgeStore as pledge, i}
        <PledgeOption
            id={pledge.id}
            name={pledge.name}
            description={pledge.description}
            amount={pledge.amount}
            stock={pledge.stock}
            option={option}
        />
    {/each}
</ul>
