const targetNode = document.body;

handleResponse = function(message) {
    console.log(message.response);
}
  
handleError = function(error) {
    console.log(`Error: ${error}`);
}

notifyBackgroundPage = function () {
  var sending = browser.runtime.sendMessage({ });
  sending.then(handleResponse, handleError);  
}

const config = { attributes: false, childList: true, subtree: true };

const callback = function(mutationsList, observer) {

    for(const mutation of mutationsList) {

        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(element => {                        
                if (element.classList.contains("sas-container")) {
                  notifyBackgroundPage();
                }
            });

            mutation.removedNodes.forEach(element => {
                if (element.classList.contains("sas-container")) {
                  notifyBackgroundPage();
                }
            });

        }
    }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);