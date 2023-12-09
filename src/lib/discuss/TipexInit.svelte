<script lang="ts">
    import {tipexEditor} from "@friendofsvelte/tipex";
    import {TIPEX_CONTENT_STORE_ID, TIPEX_PLAIN_TEXT_STORE_ID, tipexStore} from "$lib/discuss/tipexExtra";

    if ($tipexEditor) {
        $tipexEditor.on('create', (content) => {
            content.editor.commands.setContent($tipexStore.htmlContent)
        });

        $tipexEditor.on('update', (content) => {
            console.log("hey")
            if (!$tipexStore.rulesEnabled) {
                localStorage.setItem(TIPEX_CONTENT_STORE_ID, content.editor.getHTML());
                localStorage.setItem(TIPEX_PLAIN_TEXT_STORE_ID, content.editor.getText());
                $tipexStore.htmlContent = content.editor.getHTML();
                $tipexStore.plainText = content.editor.getText();
            }
        });
    }
</script>