function personalGreeting(name: string) {
    let welcomeSpan = document.getElementById('welcome-text');

    welcomeSpan.innerText = "Hello " + name;
}



personalGreeting("Ken");