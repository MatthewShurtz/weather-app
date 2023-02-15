function createHeader (text) {
    const header = document.createElement('h1')
    header.textContent = text
    return header
}

export default createHeader