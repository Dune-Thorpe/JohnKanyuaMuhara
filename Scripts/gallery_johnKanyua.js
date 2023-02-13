function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
            }
        }
}
function showPic(whichpic) {
                            if (!document.getElementById("placeholder")) return true;
                                let source = whichpic.getAttribute("href");
                                let placeholder = document.getElementById("placeholder");
                            if (placeholder.nodeName != "IMG") return true;
                                placeholder.setAttribute("src",source);
                            if (!document.getElementById("description")) return false;
                                let text = whichpic.getAttribute("title")? whichpic.getAttribute("title"):"And the truth shall have set you free...";
                                let description = document.getElementById("description");
                            if (description.firstChild.nodeType == 3) {
                                description.firstChild.nodeValue = text;
                            }
                                return false;
                        }

                        
    


function prepareLinks() {
                            if (!document.getElementsByTagName || !document.getElementById || !document.getElementById("galleryImg")) {
                                return false;
                            }
                            let galleryImg = document.getElementById("galleryImg");
                            let links = galleryImg.getElementsByTagName("a");
                            for (i=0; i<links.length; i++) {
                                links[i].onclick = function() {
                                return showPic(this);
                                }
                            }
                        }

                        addLoadEvent(prepareLinks)

function preparePlaceholder() {
                        if (!document.createElement) return false
                        if (!document.createTextNode) return false
                        if (!document.getElementById) return false
                        if (!document.getElementById("galleryImg")) return false
                        const placeholder = document.createElement("img")
                        placeholder.setAttribute("id","placeholder")
                        placeholder.setAttribute("src","assets/Images/John_01-1.jpg")
                        placeholder.setAttribute("alt","Down Memory Lane")
                        const description = document.createElement("p")
                        description.setAttribute("id","description")
                        let desctext = document.createTextNode("Click the small icon above for a detailed view")
                        description.appendChild(desctext)
                        const galleryImg = document.getElementById("galleryImg")
                        insertAfter(description,galleryImg)
                        insertAfter(placeholder,description)
                    }

                    addLoadEvent(preparePlaceholder)


