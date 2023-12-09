import {writable} from "svelte/store";

export const tipexStore = writable({
    htmlContent: '',
    discussionTitle: null,
    rulesEnabled: false,
    discussionPrevTitle: '',
    editorMaximized: false,
    showTags: false,
    discussCount: 1,
    discussEnabled: false,
    loaded: false,
} as {
    htmlContent: string | any,
    plainText: string | any,
    discussionTitle: string | any,
    rulesEnabled: boolean,
    discussionPrevTitle: string,
    editorMaximized: boolean,
    showTags: boolean,
    discussCount: number,
    discussEnabled: boolean,
    loaded: boolean,
});


export const TIPEX_CONTENT_STORE_ID = "tipex_html_content_";
export const TIPEX_PLAIN_TEXT_STORE_ID = "tipex_text_content_";
export const TIPEX_TITLE_STORE_ID = "tipex_title_content_";
export const TIPEX_EDITOR_STATE_ID = "tipex_window_state_";