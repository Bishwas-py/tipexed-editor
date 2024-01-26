<script>
    import DiscussTab from "$lib/discuss/DiscussTab.svelte";
    import StartDiscussion from "$lib/discuss/StartDiscussion.svelte";
    import ThemeToggle from "@friendofsvelte/toggle";
    import "@friendofsvelte/toggle/styles/Toggle.css";
</script>

<div class="flex items-center justify-center w-full pt-9 gap-4 max-w-sm mx-auto">
    <StartDiscussion/>
    <a href="/redirected-flash-path" class="btn btn-secondary">Show Toast Messages</a>
    <ThemeToggle className=""/>
</div>
<DiscussTab/>


