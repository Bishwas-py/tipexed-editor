<script lang="ts">
    import {tipexStore} from "$lib/discuss/tipexExtra";
</script>

<a class="bg-indigo-500 hover:bg-indigo-600
        dark:bg-indigo-600 dark:hover:bg-indigo-700
        text-white rounded-lg px-3 py-2
        flex justify-center items-center
        focus:scale-90 duration-200
        shadow-sm font-semibold text-sm whitespace-nowrap"
        href="/?discuss"
        aria-label="Start a discussion"
>
    Start a discussion
    <!-- count -->
    <span class="ml-1 text-xs text-indigo-200 dark:text-indigo-300">
        ({$tipexStore.discussCount})
    </span>
</a>