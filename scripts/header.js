document.head.innerHTML += `<link rel="stylesheet" type="text/css" href="styles/header.css" />`;

document.body.innerHTML = `
<div id="header">
    <a id="logo-link" href=""><h1 id="logo">WEC</h1></a>

    <a class="header-link" href="https://forms.gle/j7YPvQXZJwfX7JPd9" target="_blank">Book a tour</a>
</div>

${document.body.innerHTML}
`;