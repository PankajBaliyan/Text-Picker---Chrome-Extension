chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "copyText",
    title: "Copy and Log Selected Text",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info) {
  if (info.menuItemId === "copyText") {
    let selectedText = info.selectionText;
    console.log("Selected text:", selectedText);
  }
});
