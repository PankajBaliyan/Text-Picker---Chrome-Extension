document.addEventListener("DOMContentLoaded", function () {
    let countButton = document.getElementById("countButton");
    let result = document.getElementById("result");

    countButton.addEventListener("click", async function () {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        let inputFields = await getInputElementIds(tab.id);
        let count = inputFields.length;
        let ids = inputFields.filter(Boolean);
        result.textContent = "Number of input fields: " + count;
        console.log("Number of input fields:", count);
        console.log("Input field IDs:", ids);

    });
});

async function getInputElementIds(tabId) {
    return new Promise((resolve) => {
        chrome.scripting.executeScript(
            {
                target: { tabId: tabId },
                function: fetchInputFields,
            },
            (result) => {
                let inputFields = result[0]?.result || [];
                resolve(inputFields.map((input) => input.id));
            }
        );
    });
}

function fetchInputFields() {
    let inputElements = Array.from(document.getElementsByTagName("input"));
    let inputFields = inputElements.map((input) => ({ id: input.id }));
    return inputFields;
}