document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "вы Серый Страж — одним из последних воинов древнего ордена защитников. Древний враг человечества вернулся, королевство охвачено войной, и судьба избрала вас для того, чтобы объединить разрозненные земли и навсегда уничтожить архидемона. Погрузитесь в темный и героический фэнтезийный мир со своей уникальной историей, который оживает стараниями лучших художников игровой индустрии.",
        "вы Хоук, беженец, что стремится спастись из кишащих порождениями тьмы земель Ферелдена и стать Защитником Киркволла. Обретите влияние и примите участие в эпических баталиях, которые определят судьбу цивилизации. Ваше восхождение к власти начинается. Как вы займете свое место в истории?",
        "Катаклизм погрузил в хаос земли Тедаса. Небо затмевают драконы, бросая тень на землю, объятую ужасом. Маги вступили в решительную борьбу против своих угнетателей-храмовников. Страны идут друг на друга войной. Именно вам предстоит, возглавив Инквизицию, восстановить порядок и дать отпор поборникам хаоса.",
        "Объедините Стражу Завесы и бросьте вызов богам. Станьте лидером, в которого верят."
    ];

    const heads = [
        "Dragon Age Origins",
        "Dragon Age II",
        "Dragon Age Inquisition",
        "Dragon Age The Veilguard"
    ]

    const backgrounds = [
        "url('image/backgrounds/back2.webp')",
        "url('image/backgrounds/back5.jpg')",
        "url('image/backgrounds/back3.jpeg')",
        "url('image/backgrounds/back4.jpeg')"
    ];

    const currentText = document.getElementById('text-container');
    const currentHead = document.getElementById('text-head');
    const slide = document.getElementById('slide');

    let currentIndex = 0;

    function changeSlide() {
        currentText.textContent = texts[currentIndex];
        currentHead.textContent = heads[currentIndex];
        slide.style.backgroundImage = backgrounds[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    setInterval(changeSlide, 10000);

    changeSlide();
});






document.addEventListener('DOMContentLoaded', function() {
    const newsCards = document.querySelectorAll('.new-card');
    const newsContent = document.getElementById('news-content');
    const genres = [
        "ММО",
        "РПГ",
        "МОБА"
    ]
    
    let selectedCard = null;


    newsCards.forEach(card => {
        card.addEventListener('click', function() {
            const newsId = this.getAttribute('data-news-id');
            const genre = genres[newsId];

            const newPhoto = this.querySelector('img').cloneNode(true);
            const newsText = this.querySelector('.new-text').cloneNode(true);

            let newSpan = document.createElement('span');
            newSpan.textContent = `${genre}`;
            newSpan.className = 'genre-span';

            let newLink = document.createElement('a');
            newLink.href = `http://127.0.0.1:5500/second-project/${newsId}`;
            newLink.textContent = 'Перейти к статье';

            if (newsId === '1') {
                newSpan.style.backgroundColor = 'green';
            }
            else if (newsId ==='2'){
                newSpan.style.backgroundColor = 'red'
            }

            newsContent.innerHTML = '';
            newsContent.appendChild(newPhoto);
            newsContent.appendChild(newsText);
            newsContent.appendChild(newLink);
            newsContent.appendChild(newSpan);

            if (selectedCard) {
                selectedCard.classList.remove('selected');
                selectedCard.style.pointerEvents = 'auto';
            }

            this.classList.add('selected');
            this.style.pointerEvents = 'none';
            selectedCard = this;
        });
    });
});



document.addEventListener('DOMContentLoaded', function(){
    const translation = [
        "https://rutube.ru/play/embed/6659895b911819c1f7c5f66e8269d352/",
        "https://rutube.ru/play/embed/7a6a3ad8a100989a8f6445e7191d7f1b/",
        "https://rutube.ru/play/embed/fcf576cf4c896f12ccac63cff1dbe08d/",
        "https://rutube.ru/play/embed/66f1117d0b587faae8ac54e66bec43a2/",
        "https://rutube.ru/play/embed/be3ffa23a9a87fdaaa9d3d527f5991e7/",
        "https://rutube.ru/play/embed/ae5ae45d2c031a36a1c9d449ab769edc/"
    ]

    const newCommands = document.querySelectorAll('.commands');
    let selectedTranslation = null;

    newCommands.forEach(command =>{
        command.addEventListener('click', function(){
            const comId = this.getAttribute('id');
            const trans = translation[comId];
            let first = document.getElementById('0'); 
            let currentTransl = document.getElementById('translation-selected')
            currentTransl.src = trans;
            if(selectedTranslation){
                selectedTranslation.classList.remove('selected');
                selectedTranslation.style.pointerEvents= 'auto' ;
            }
            first.classList.remove('selected');
            this.classList.add('selected');
            this.style.pointerEvents = 'none';
            selectedTranslation = this;
        })
    })
});





document.addEventListener('DOMContentLoaded', function(){

    const previews = [
        "image/preview/morrowind.webp",
        "image/preview/warcraft3.jpeg",
    ]

    const descriptions = [
        "MORROWIND получил поддержу ИИ",
        "Blizzard делают ремастер Warcraft 3"
    ]

    const data = [
        "13.03.2024",
        "30.01.2025"
    ]

    const comments = [
        10,
        21,
    ]


    let selectedNews = null;

    const previewContent = document.getElementById('preview')

    const sort =  document.querySelector('.sort')

    const descriptionNews= document.getElementById('description-tab')

    if(sort){
        const sortLink = document.querySelectorAll('ul.sort a')
        sortLink.forEach(zxc =>{
            zxc.addEventListener('click', function(){
                const genreId = this.getAttribute('data-sort-id')
                currentPreview = previews[genreId];
                currentDescription = descriptions[genreId];
                currentData = data[genreId];
                currentComment = comments[genreId];
        
                console.log('kopa');
                console.log(genreId);
                console.log(currentPreview);
                console.log(currentDescription);
        
                previewContent.src=currentPreview;
                descriptionNews.textContent = currentDescription; 
            });    
        });
    }
});