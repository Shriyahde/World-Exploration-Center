document.head.innerHTML += `<link rel="stylesheet" type="text/css" href="/styles/header.css" />`

document.body.innerHTML = `
<div id="header">
    <a id="logo-link" href="/World-Exploration-Center/"><h1 id="logo">WEC</h1></a>

    <a class="header-link" href="/World-Exploration-Center/book-a-tour">Book a tour</a>
</div>

${document.body.innerHTML}
`;