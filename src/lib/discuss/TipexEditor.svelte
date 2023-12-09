<script lang="ts">
    import {slide} from "svelte/transition";
    import {defaultExtensions, Tipex, tipexEditor} from "@friendofsvelte/tipex";
    import {Heading} from "@tiptap/extension-heading";

    import "@friendofsvelte/tipex/styles/Tipex.css";
    import "@friendofsvelte/tipex/styles/ProseMirror.css";
    import "@friendofsvelte/tipex/styles/EditLink.css";
    import "@friendofsvelte/tipex/styles/CodeBlock.css";

    import {onDestroy, onMount} from "svelte";
    import TipexControls from "$lib/discuss/TipexControls.svelte";
    import {
        TIPEX_CONTENT_STORE_ID,
        TIPEX_TITLE_STORE_ID,
        TIPEX_EDITOR_STATE_ID,
        tipexStore, TIPEX_PLAIN_TEXT_STORE_ID
    } from "$lib/discuss/tipexExtra";
    import TipexHead from "$lib/discuss/TipexHead.svelte";
    import TipexInit from "$lib/discuss/TipexInit.svelte";

    onDestroy(() => {
        if ($tipexEditor) {
            $tipexEditor.destroy();
        }
    })


    onMount(async () => {
        $tipexStore.discussionTitle = localStorage.getItem(TIPEX_TITLE_STORE_ID) || '';
        $tipexStore.editorMaximized = localStorage.getItem(TIPEX_EDITOR_STATE_ID) === "true";
        $tipexStore.htmlContent = localStorage.getItem(TIPEX_CONTENT_STORE_ID) || '';
        $tipexStore.plainText = localStorage.getItem(TIPEX_PLAIN_TEXT_STORE_ID) || '';
    });

    let extension = {
        ...defaultExtensions,
        heading: Heading.configure({
            levels: [2, 3, 4, 5, 6]
        })
    }

    $: $tipexStore.discussCount = ($tipexStore.discussionTitle || $tipexStore.plainText) ? 1 : 0;
</script>

{#if $tipexStore.discussEnabled}
    <div class="fixed duration-200 bottom-0 w-[90vw] {$tipexStore.editorMaximized ? 'sm:w-[80vw]' : 'sm:w-[70vw]'} z-50"
         transition:slide>
        <Tipex
                headComponent={TipexHead}
                controlElement={TipexControls}
                extensions={extension}
                htmlContent={$tipexStore.htmlContent}
                className="shadow border border-neutral-200 dark:border-neutral-800
                w-full {$tipexStore.editorMaximized ? 'h-[90vh]' : 'h-[60vh]'}"/>
    </div>
{/if}

{#if $tipexEditor}
    <TipexInit/>
{/if}

<style lang="postcss">
    :global(.tipex-editor) {
        @apply rounded-t-2xl rounded-b-none;
    }
</style>