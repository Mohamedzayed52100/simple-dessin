let heading = document.getElementsByClassName('Accordion');
var i;
for (i = 0; i < heading.length; i++) {
    heading[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var dec = this.nextElementSibling;
        if (dec.style.maxHeight) {
            dec.style.maxHeight = null
        } else {
            dec.style.maxHeight = dec.scrollHeight + 'px  '
        }
    })
}