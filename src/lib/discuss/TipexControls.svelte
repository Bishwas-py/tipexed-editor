<script lang="ts">
    import {tipexEditor} from "@friendofsvelte/tipex";
    import {rulesText, rulesTitle} from "$lib/notes/dicuss";
    import {tipexStore} from "$lib/discuss/tipexExtra";

    function toggleShowRules() {
        if ($tipexEditor) {
            if ($tipexStore.rulesEnabled) {
                $tipexEditor.commands.setContent($tipexStore.htmlContent)
                $tipexStore.discussionTitle = $tipexStore.discussionPrevTitle;
                $tipexStore.rulesEnabled = false;
            } else {
                $tipexEditor.commands.setContent(rulesText)
                $tipexStore.discussionPrevTitle = $tipexStore.discussionTitle;
                $tipexStore.discussionTitle = rulesTitle;
                $tipexStore.rulesEnabled = true;
            }
        }
    }
</script>


{#if $tipexEditor}
    <div class="tipex-controller">
        <div class="tipex-controller-wrapper">
            <div class="tipex-basic-controller-wrapper">
                {#each {length: 5} as _, index}
                    {@const level = index + 2}
                    <button
                            on:click={() => $tipexEditor?.chain().focus().toggleHeading({ level }).run()}
                            class="tipex-edit-button"
                            class:active={$tipexEditor?.isActive('heading', { level })}
                    >
                        H{level}
                    </button>
                {/each}


                <button
                        on:click={() => $tipexEditor?.chain().focus().setParagraph().run()}
                        class="tipex-edit-button"
                        class:active={$tipexEditor?.isActive('paragraph')}
                >
                    <iconify-icon icon="fa6-solid:paragraph"/>
                </button>

                <button
                        on:click={() => $tipexEditor?.chain().focus().toggleBold().run()}
                        class="tipex-edit-button"
                        class:active={$tipexEditor?.isActive('bold')}
                >
                    <iconify-icon icon="fa6-solid:bold"/>
                </button>

                <button
                        on:click={() => $tipexEditor?.chain().focus().toggleItalic().run()}
                        class="tipex-edit-button"
                        class:active={$tipexEditor?.isActive('italic')}
                >
                    <iconify-icon icon="fa6-solid:italic"/>
                </button>

                <button
                        on:click={() => $tipexEditor?.chain().focus().toggleCode().run()}
                        class="tipex-edit-button"
                        class:active={$tipexEditor?.isActive('code')}
                >
                    <iconify-icon icon="fa6-solid:code"/>
                </button>

            </div>

            <div class="flex gap-2 text-xs">
                <button type="button"
                        class="focus:ring focus:ring-blue-500
                        active:scale-90 duration-150
                        flex flex-row gap-2 justify-between items-center rounded-lg px-2 h-7"
                        on:click={toggleShowRules}>
                    <iconify-icon
                            class="flex items-center justify-center rounded"
                            icon={!$tipexStore.rulesEnabled ? "fa6-solid:align-left" : "fa6-solid:xmark"}/>
                    <span class="hidden sm:flex">
                            {!$tipexStore.rulesEnabled ? "Show" : "Hide"} rules
                     </span>
                </button>

                <button type="submit"
                        class="focus:ring focus:ring-green-500 bg-green-500 dark:bg-green-600 text-white dark:text-white
                            border border-green-300 dark:border-green-800 flex flex-row gap-2 justify-between items-center
                            active:scale-90 duration-150
                            rounded-lg px-3 h-7">
                        <span class="hidden md:flex">
                            Post discussion
                        </span>
                    <iconify-icon
                            class="flex items-center justify-center rounded"
                            icon="fa6-solid:paper-plane"/>
                </button>
            </div>
        </div>
    </div>
{/if}


<style lang="postcss">
    .tipex-controller {
        @apply flex flex-col justify-between items-center md:flex-row gap-2 sticky
        bottom-0 z-10 py-2 px-3 rounded-none
        bg-neutral-100 dark:bg-neutral-900;
    }

    .tipex-controller-wrapper {
        @apply flex gap-3 flex-wrap justify-between w-full;
    }

    .tipex-basic-controller-wrapper {
        @apply flex gap-2;
    }

    .tipex-edit-button {
        @apply bg-neutral-100 dark:bg-neutral-800/80
        text-neutral-700 text-xs
        dark:text-gray-200 rounded-md flex justify-center items-center
        p-0 h-7 w-7 border-0 transition-colors duration-100 cursor-pointer;
    }

    .tipex-edit-button.active {
        @apply dark:bg-gray-700 bg-neutral-100 shadow-lg;
    }
</style>