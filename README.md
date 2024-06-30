# youtube-playlist-cleaner

`youtube-playlist-cleaner` is a simple script that automates the process of deleting videos from a YouTube playlist. This JavaScript script uses page element selectors to identify and click on the delete buttons of videos in a playlist.

## Features

- **Automation**: Automatically deletes all videos from a YouTube playlist.
- **Ease of Use**: Simply run the script in the browser console while on the playlist page you want to clean.
- **Customization**: Ability to adjust selectors and wait times as needed.

## How to Use

1. Open your browser and go to the YouTube playlist page you want to clean.
2. Open Developer Tools (usually by pressing `F12` or `Ctrl+Shift+I`).
3. Go to the "Console" tab.
4. Copy the code contained in the `deletePlaylistVideos.js` script and paste it into the console, then press `Enter`.

## Note

- The selectors used in the script may change if YouTube updates the page structure. In that case, you will need to adjust the selectors (`BUTTON_SELECTOR`, `DELETE_MENU_SELECTOR` and `DELETE_BUTTON_POSITION`) using Developer Tools to find the new element paths.
- The wait time (`sleep`) can be adjusted as needed to ensure actions are completed before the script continues.

## Contribution

Contributions are welcome! Feel free to open issues and pull requests in the repository to improve the script.
