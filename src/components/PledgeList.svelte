<script>
    import pledgeStore from '../stores/pledgeStore.js';
    import Pledge from '../components/Pledge.svelte';
</script>

<ul class="space-y-6">
    {#each $pledgeStore.slice(1) as pledge}
        <Pledge
            id={pledge.id}
            name={pledge.name}
            description={pledge.description}
            amount={pledge.amount}
            stock={pledge.stock}
        />
    {/each}
</ul>