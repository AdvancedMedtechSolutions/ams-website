export function indexInParent(node) {
    var children = node.parentNode.childNodes;
    var num = 0;
    for (var i=0; i<children.length; i++) {
         if (children[i]==node) {return num;}
         if (children[i].nodeType==1) {num++;}
    }
    return -1;
}

export function splitLines(container, opentag, closingtag) {
    var spans = container.children,
        top = 0,
        tmp = '';

    container.innerHTML = container.textContent.replace(/\S+/g, '<n>$&</n>');      
    for (let i = 0; i < spans.length; i++) {
        var rect = spans[i].getBoundingClientRect().top;
        if (top < rect){
            tmp += closingtag + opentag;
        }
        top = rect;
        tmp += spans[i].textContent + ' ';
    }
    container.innerHTML = tmp += closingtag;
}