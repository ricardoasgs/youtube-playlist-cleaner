function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deletePlaylistVideos() {
    const BUTTON_SELECTOR = '#primary ytd-playlist-video-renderer yt-icon-button.dropdown-trigger > button[aria-label]';
    const DELETE_MENU_SELECTOR = 'tp-yt-paper-listbox.style-scope.ytd-menu-popup-renderer';
    const DELETE_BUTTON_POSITION = 4

    let buttons = document.querySelectorAll(BUTTON_SELECTOR);

    for (let button of buttons) {
        button.click();
        await sleep(1000);

        let menu = document.querySelector(DELETE_MENU_SELECTOR);
        if (menu) {
            let deleteOption = menu.children[DELETE_BUTTON_POSITION-1];
            if (deleteOption) {
                deleteOption.click();
                await sleep(1000);
            }
        } else {
            console.error('Delete options menu not found.');
        }
    }
}

deletePlaylistVideos();
