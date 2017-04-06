	$(function() {

		var html = $('#test').html();

		var data = {
			title: 'Удовиченко Андрей Игоревич',
			text1: 'Мой номер телефона:',
			tel: '+380447777777',
			text2: 'Кратко о себе:',
			text3: 'Мой профиль ВКонтакте:',
			article: 'Обожаю грызть кости',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, necessitatibus in ratione reprehenderit assumenda amet pariatur debitis dolor minus eligendi voluptas, odio consequuntur, repellendus quo repudiandae consequatur quisquam harum sequi.',
			image: '',
			link: '',
		};

		var content = tmpl(html, data);

		$('body').append(content);

	});
