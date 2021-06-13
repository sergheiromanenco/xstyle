const icons = document.querySelectorAll('.icon');

for (let key of icons) {
    key.addEventListener('mouseover', () => {
        key.classList.remove('rotateIn');
        setTimeout(() => {
            key.classList.add('rotateIn')},100);
    })
}

$(function () {
	$(window).scroll(function() {
	    $('.point, .review, .telegram, .join, .join-text, .list-column').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
})




//   ymaps.ready(init);
//     function init(){
//         var myMap = new ymaps.Map("map", {
//             center: [55.76, 37.64],
//             zoom: 7
//         });
//     }

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [46.979124376189944,28.893270603006364],
            zoom: 19
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #000; border-radius: 50px; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([46.979124376189944,28.893270603006364], {
            hintContent: 'Бокс №2',
            balloonContent: 'Вам сюда! Ждем вас!',
            iconContent: 'BestGrupMD'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/red-pointer.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -20],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [25, 31],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);
});