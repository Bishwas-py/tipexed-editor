<script>
    import DiscussTab from "$lib/discuss/DiscussTab.svelte";
    import StartDiscussion from "$lib/discuss/StartDiscussion.svelte";
    import ThemeToggle from "$lib/ThemeToggle.svelte";
</script>

<div class="flex items-center justify-center w-full pt-9 gap-4 max-w-sm mx-auto">
    <StartDiscussion/>
    <ThemeToggle/>
</div>
<DiscussTab/>
