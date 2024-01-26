<script lang="ts">
    import {tipexStore} from "$lib/discuss/tipexExtra";
</script>

<a class="btn btn-primary"
        href="/?discuss"
        aria-label="Start a discussion"
>
    Start a discussion
    <!-- count -->
    <span class="ml-1 text-xs text-indigo-200 dark:text-indigo-300">
        ({$tipexStore.discussCount})
    </span>
</a>