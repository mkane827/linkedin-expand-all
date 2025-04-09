chrome.runtime.onMessage.addListener(() => {
  let iterations = 0;
  const intervalId = setInterval(() => {
    const buttons = getButtonsToClick();
    for (const button of buttons) {
      button.click();
    }
    if (buttons.length === 0 || ++iterations > 10) {
      clearInterval(intervalId);
    }
  }, 1000);
});

function getAllCommentLists() {
  return Array.from(document.querySelectorAll(".comments-comments-list"));
}

function getAllButtonsUnderElement(element) {
  return Array.from(element.querySelectorAll("button"));
}

function getAllCommentButtons() {
  return getAllCommentLists().flatMap(getAllButtonsUnderElement);
}

function getButtonsToClick() {
  return getAllCommentButtons().filter((button) => {
    const buttonText = button.textContent.trim().toLowerCase();
    return (
      "see previous replies" === buttonText ||
      "load more comments" === buttonText ||
      buttonText.includes("more replies") ||
      buttonText.includes("more")
    );
  });
}
