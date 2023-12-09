<script lang="ts">
    import TipexEditor from "$lib/discuss/TipexEditor.svelte";
    import ShowTags from "$lib/discuss/ShowTags.svelte";
    import {page} from "$app/stores";
    import {tipexStore} from "$lib/discuss/tipexExtra";

    $: $tipexStore.discussEnabled = $page.url.searchParams.has('discuss');
</script>

<div class="flex justify-center items-center relative">
    <TipexEditor/>
    <ShowTags/>
</div>

<style lang="postcss">
</style>