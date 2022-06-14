<script>
    import Modal from 'svelte-simple-modal';
    import Popup from '../components/Popup.svelte';
    import Content from '../components/Content.svelte';
    import { modal } from '../stores/store.js';
</script>

<svelte:head>
    <title>Frontend Mentor | Crowdfunding product page</title>
    <meta name="description" content="Crowdfunding product page">
</svelte:head>

<Modal
    show={$modal}
    unstyled={true}
    classBg="fixed top-0 left-0 z-50 w-screen h-screen flex flex-col justify-center bg-black/50"
    classWindowWrap="relative max-h-full"
    classWindow="relative w-full max-w-[327px] md:max-w-[730px] max-h-[80vh] overflow-auto my-[120px] mx-auto text-black rounded-lg bg-white"
    classContent="relative px-6 py-7 md:p-12 overflow-auto"
    classCloseButton="flex w-12 h-12 absolute top-5 md:top-4 right-2 z-50 opacity-40 hover:opacity-100 focus:opacity-100 transition"
    styleCloseButton={{ background: "url('/icon-close-modal.svg') no-repeat center; background-size: 15px;" }}
>
    <Content />
</Modal>
