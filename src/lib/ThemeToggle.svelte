<script lang="ts">
    import {onMount} from "svelte";
    import {scale} from "svelte/transition";

    export function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        document.cookie = `appearanceMode=${isDarkMode ? 'dark' : 'light'}; path=/; max-age=31536000`;
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    export let isDarkMode: boolean | undefined = undefined;
    onMount(() => {
        isDarkMode = document.documentElement.classList.contains('dark');
    });
</script>


{#if isDarkMode !== undefined}
    <button
            class="dark-mode-button group"
            class:isDarkMode
            in:scale
            on:click={toggleDarkMode}>
        <iconify-icon icon={isDarkMode ? 'fa-solid:moon' : 'fa-solid:sun'} class="group-active:animate-spin"/>
    </button>
{:else}
    <div class="h-7 w-7"/>
{/if}


<style lang="postcss">
    .dark-mode-button {
        @apply bg-white dark:bg-stone-800;
        @apply rounded-xl p-2;
        @apply shadow-lg;
        @apply h-7 w-7;
        @apply cursor-pointer;
        @apply transition-transform duration-100;
        @apply hover:scale-110;
        @apply flex items-center justify-center;
    }

    .dark-mode-button:not(.isDarkMode) {
        @apply active:text-blue-900;
    }

    .dark-mode-button.isDarkMode {
        @apply active:text-yellow-400;
    }
</style>
