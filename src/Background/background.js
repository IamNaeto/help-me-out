// src/background/background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
// background/background.js
let isAudioEnabled = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleAudio") {
    if (isAudioEnabled) {
      // Logic to disable audio
      // You can add your code here to disable audio
    } else {
      // Logic to enable audio
      // You can add your code here to enable audio
    }
    isAudioEnabled = !isAudioEnabled;
  }
});
