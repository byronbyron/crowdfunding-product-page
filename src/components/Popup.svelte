<script>
    import { slide } from 'svelte/transition';
    import PledgeOptionList from './PledgeOptionList.svelte';

    import { backers, total } from '../stores/store.js';

    export let option = 0;
</script>

<div class="text-left">
    <h2 class="font-bold text-lg mb-6">Back this project</h2>

    <div class="leading-relaxed text-sm md:text-base text-dark-grey space-y-6">
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

        <PledgeOptionList option={option} />
    </div>
</div>
