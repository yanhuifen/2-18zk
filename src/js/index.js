function render(el, data) {
    el.innerHTML = data.map(functon(item), function() {
        return `<p>${item.name}<p>`
    })
}