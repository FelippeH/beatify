document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector('.search'); 
    const mainPage = document.querySelector('#result-artist'); 
    const resPlaylist = document.querySelector('.main-page'); 

    function requestApi(searchTerm) {
        const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
        fetch(url)
            .then((response) => response.json()) 
            .then((result) => displayResults(result));
    }

    function displayResults(result) {
        resPlaylist.classList.add('hidden');
        const artistName = document.getElementById('artist-name');
        const artistImage = document.getElementById('artist-img');

        result.forEach(element => {
            artistName.innerText = element.name;
            artistImage.src = element.urlImg;
        });
        resultArtitst.classList.remove('hidden');
    }

    document.addEventListener('input', () => {
        if (!searchInput) return;

        const searchTerm = searchInput.value ? searchInput.value.toLowerCase() : '';
        
        if (searchTerm === '') {
            if (mainPage) mainPage.classList.add('hidden');
            if (resPlaylist) resPlaylist.classList.add('hidden');
            return;
        }
        
        requestApi(searchTerm);
    });
});
