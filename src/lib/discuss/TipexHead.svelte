<script lang="ts">
    import {page} from "$app/stores";
    import {TIPEX_TITLE_STORE_ID, TIPEX_EDITOR_STATE_ID, tipexStore} from "$lib/discuss/tipexExtra";
    import {goto} from "$app/navigation";

    function toggleMaximizeWindow() {
        $tipexStore.editorMaximized = !$tipexStore.editorMaximized
        localStorage.setItem(TIPEX_EDITOR_STATE_ID, $tipexStore.editorMaximized ? 'true' : 'false');
    }

    function setContentTitle(event: Event) {
        localStorage.setItem(TIPEX_TITLE_STORE_ID, (event.target as HTMLInputElement).value);
    }
</script>

<div class="flex justify-between items-center p-4 border-b dark:border-neutral-800/70">
    <div class="w-12 h-12 rounded-full bg-neutral-300 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center">
        <iconify-icon icon="fa6-solid:comment"/>
    </div>
    <div class="flex flex-col w-full p-4 items-start gap-y-1">
        <div class="flex justify-between items-center w-full gap-3">
            <input class="bg-transparent text-xl font-medium dark:placeholder:text-gray-500/40 focus:outline-0 w-full"
                   bind:value={$tipexStore.discussionTitle}
                   on:input={setContentTitle}
                   name="title" placeholder="Discussion title..."/>
            <button
                    type="button"
                    on:click={toggleMaximizeWindow}
                    class="select-none rounded-lg
                                hover:dark:bg-gray-800/30
                                hover:bg-gray-100
                                w-7 h-7
                                focus:scale-90 duration-150
                                text-black dark:text-white
                                flex items-center justify-center">
                <iconify-icon
                        icon={$tipexStore.editorMaximized ? "fa6-regular:square-caret-down" : "fa6-regular:window-maximize"}/>
            </button>
            <button
                    on:click|stopPropagation={()=>{goto('/')}}
                    class="select-none rounded-lg
                                hover:dark:bg-gray-800/30
                                hover:bg-gray-100
                                w-7 h-7
                                focus:scale-90 duration-150
                                focus:text-red-800
                                focus:dark:text-red-200
                                text-black dark:text-white
                                flex items-center justify-center">
                <iconify-icon icon="fa6-solid:xmark"/>
            </button>
        </div>
        <div class="flex justify-between items-center w-full">
            <button on:click={()=>{$tipexStore.showTags = true}}
                    type="button"
                    class="border-dotted border-neutral-400 dark:border-neutral-700 border
                                rounded-lg px-2 text-sm font-light text-neutral-400 dark:text-neutral-700">
                Choose Tags
            </button>
        </div>
    </div>
</div>