const date = new Date();
openmesbot(0);

function step(st, txt) {
	$('.step[data=' + st + ']').text(txt);
}
function openmesbot(id) {
	if (typeof id == 'string') {
		$('.chatcont').append('<div class="message meshide mesbot" data-mesbot="end"><div class="mesimg"></div><div class="mescont"><div class="mestext">' + id + '</div></div></div>');
		botprint('end', 300, 1500);
	} else if (d['mesbot'][id] !== undefined) {
		if (d['mesbot'][id]['type'] !== undefined) {
			if (d['mesbot'][id]['type'] == 'text') {
				if (d['mesbot'][id]['text'] !== undefined) {
					var text = d['mesbot'][id]['text'];

					if (text.indexOf('{country}') + 1) {
						var txt = $('.step[data=country2]').text();
						if (txt == 'Нет нужной страны') txt = 'в разные страны';
						text = text.replace(new RegExp('{country}', 'g'), txt);
					}

					if (text.indexOf('{categories}') + 1) {
						var txt = $('.step[data=house]').text();
						text = text.replace(new RegExp('{categories}', 'g'), txt);
					}

					$('.chatcont').css('height', $('.chatcont').outerHeight() + 'px');

					$('.chatcont').append(
						`<div class="message meshide mesbot" data-mesbot="${id}"><div class="mesimg"></div><div class="mescont"><div class="mestext">${text}<div class="message-date">${date.getHours()}:${
							date.getMinutes() < 10 ? 0 + date.getMinutes().toString() : date.getMinutes()
						}</div></div></div>`
					);

					if (d['mesbot'][id]['buts'] !== undefined) {
						for (var i = 0; d['mesbot'][id]['buts'][i]; i++) {
							if (i == 0) $('.message[data-mesbot=' + id + '] .mescont').append('<div class="butslink butslinkhide"></div>');

							var number = '';
							var step = '';
							var goal = '';
							var usertext = '';
							var retmes = '';
							var margin = 10;

							if (d['mesbot'][id]['step'] !== undefined) {
								step = ' data-step="' + d['mesbot'][id]['step'] + '"';
							}
							if (d['mesbot'][id]['goal'] !== undefined) {
								goal = ' data-goal="' + d['mesbot'][id]['goal'] + '"';
							}

							if (d['mesbot'][id]['buts'][i]['number'] == true) number = ' butnumber';

							if (d['mesbot'][id]['buts'][i]['usertext'] !== undefined) usertext = ' data-usertext="' + d['mesbot'][id]['buts'][i]['usertext'] + '"';

							if (d['mesbot'][id]['buts'][i]['retmes'] !== undefined) retmes = ' data-retmes="' + d['mesbot'][id]['buts'][i]['retmes'] + '"';

							if (d['mesbot'][id]['margin'] !== undefined && d['mesbot'][id]['margin'] != 0) {
								margin = d['mesbot'][id]['margin'];
							}

							if (d['mesbot'][id]['buts'][i]['text'] !== undefined) {
								$('.message[data-mesbot=' + id + '] .mescont .butslink').append(
									'<div class="butlink' +
										number +
										'" data-stepbot="' +
										d['mesbot'][id]['stepbot'] +
										'" data-mesbot="' +
										id +
										'"' +
										usertext +
										step +
										goal +
										retmes +
										' style="margin-right:' +
										margin +
										'px;">' +
										d['mesbot'][id]['buts'][i]['text'] +
										'</div>'
								);
							}
						}
					}

					botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['buts']);
				}
			}

			if (d['mesbot'][id]['type'] == 'build') {
				if (d['mesbot'][id]['text'] !== undefined) {
					var text = d['mesbot'][id]['text'];

					$('.chatcont').css('height', $('.chatcont').outerHeight() + 'px');

					$('.chatcont').append(
						`<div class="message meshide mesbot" data-mesbot="${id}"><div class="mesimg"></div><div class="mescont"><div class="mestext">${text}<div class="message-date">${date.getHours()}:${
							date.getMinutes() < 10 ? 0 + date.getMinutes().toString() : date.getMinutes()
						}</div></div></div>`
					);

					if (d['mesbot'][id]['buts'] !== undefined) {
						for (var i = 0; d['mesbot'][id]['buts'][i]; i++) {
							if (i == 0) $('.message[data-mesbot=' + id + '] .mescont').append('<div class="butslink butslinkhide"></div>');

							var number = '';
							var step = '';
							var goal = '';
							var usertext = '';
							var retmes = '';
							var margin = 10;

							if (d['mesbot'][id]['step'] !== undefined) {
								step = ' data-step="' + d['mesbot'][id]['step'] + '"';
							}
							if (d['mesbot'][id]['goal'] !== undefined) {
								goal = ' data-goal="' + d['mesbot'][id]['goal'] + '"';
							}

							if (d['mesbot'][id]['buts'][i]['number'] == true) number = ' butnumber';

							if (d['mesbot'][id]['buts'][i]['usertext'] !== undefined) usertext = ' data-usertext="' + d['mesbot'][id]['buts'][i]['usertext'] + '"';

							if (d['mesbot'][id]['buts'][i]['retmes'] !== undefined) retmes = ' data-retmes="' + d['mesbot'][id]['buts'][i]['retmes'] + '"';

							if (d['mesbot'][id]['margin'] !== undefined && d['mesbot'][id]['margin'] != 0) {
								margin = d['mesbot'][id]['margin'];
							}

							if (d['mesbot'][id]['buts'][i]['text'] !== undefined) {
								$('.message[data-mesbot=' + id + '] .mescont .butslink').append(
									'<div class="butlink' +
										number +
										'" data-stepbot="' +
										d['mesbot'][id]['stepbot'] +
										'" data-mesbot="' +
										id +
										'"' +
										usertext +
										step +
										goal +
										retmes +
										' style="margin-right:' +
										margin +
										'px;">' +
										d['mesbot'][id]['buts'][i]['text'] +
										'</div>'
								);
							}
						}
					}

					botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['buts']);
				}
			}

			if (d['mesbot'][id]['type'] == 'square') {
				if (d['mesbot'][id]['text'] !== undefined) {
					var text = d['mesbot'][id]['text'];

					var build = $('.step[data=build]').text();

					$('.chatcont').css('height', $('.chatcont').outerHeight() + 'px');

					$('.chatcont').append(
						`<div class="message meshide mesbot" data-mesbot="${id}"><div class="mesimg"></div><div class="mescont"><div class="mestext">${text}<div class="message-date">${date.getHours()}:${
							date.getMinutes() < 10 ? 0 + date.getMinutes().toString() : date.getMinutes()
						}</div></div></div>`
					);

					if (d['mesbot'][id]['buts'] !== undefined) {
						// Определяем какие ID кнопок показывать в зависимости от build
						var allowedIds = [];
						if (build === 'Баня') {
							allowedIds = ['bath_small', 'bath_medium'];
						} else if (build === 'Дом') {
							allowedIds = ['home_medium', 'home_large'];
						} else {
							allowedIds = d['mesbot'][id]['buts'].map((but) => but.id); // Все ID
						}

						// Фильтруем кнопки по разрешенным ID
						var filteredButtons = d['mesbot'][id]['buts'].filter((but) => allowedIds.includes(but.id));

						for (var i = 0; i < filteredButtons.length; i++) {
							var button = filteredButtons[i];

							if (i == 0) $('.message[data-mesbot=' + id + '] .mescont').append('<div class="butslink butslinkhide"></div>');

							var number = '';
							var step = '';
							var goal = '';
							var usertext = '';
							var retmes = '';
							var margin = 10;

							if (d['mesbot'][id]['step'] !== undefined) {
								step = ' data-step="' + d['mesbot'][id]['step'] + '"';
							}
							if (d['mesbot'][id]['goal'] !== undefined) {
								goal = ' data-goal="' + d['mesbot'][id]['goal'] + '"';
							}

							if (button['number'] == true) number = ' butnumber';

							if (button['usertext'] !== undefined) usertext = ' data-usertext="' + button['usertext'] + '"';

							if (button['retmes'] !== undefined) retmes = ' data-retmes="' + button['retmes'] + '"';

							if (d['mesbot'][id]['margin'] !== undefined && d['mesbot'][id]['margin'] != 0) {
								margin = d['mesbot'][id]['margin'];
							}

							if (button['text'] !== undefined) {
								$('.message[data-mesbot=' + id + '] .mescont .butslink').append(
									'<div class="butlink' +
										number +
										'" data-stepbot="' +
										d['mesbot'][id]['stepbot'] +
										'" data-mesbot="' +
										id +
										'"' +
										usertext +
										step +
										goal +
										retmes +
										' style="margin-right:' +
										margin +
										'px;">' +
										button['text'] +
										'</div>'
								);
							}
						}
					}

					botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['buts']);
				}
			}

			if (d['mesbot'][id]['type'] == 'house') {
				if (d['mesbot'][id]['text'] !== undefined) {
					var text = d['mesbot'][id]['text'];

					if (text.indexOf('{variants}') + 1) {
						var txt = $('.step[data=build]').text();
						if (txt == 'Баня') txt = 'Выберете баню для рассчета стоимости';
						else if (txt == 'Дом') txt = 'Выберете дом для рассчета стоимости';
						text = text.replace(new RegExp('{variants}', 'g'), txt);
					}

					var square = $('.step[data=square]').text();

					$('.chatcont').css('height', $('.chatcont').outerHeight() + 'px');

					$('.chatcont').append(
						`<div class="message meshide mesbot" data-mesbot="${id}">
             <div class="mesimg"></div>
               <div class="mescont">
                <div class="mestext">${text}<div class="message-date">${date.getHours()}:${
							date.getMinutes() < 10 ? 0 + date.getMinutes().toString() : date.getMinutes()
						}</div></div>
             <div class="mesbot-inner">
            <div class="autoslink  autoslink3 butslinkhide"></div>
            <div class="message-date">${date.getHours()}:${date.getMinutes() < 10 ? 0 + date.getMinutes().toString() : date.getMinutes()}</div>
            </div>
          </div></div>`
					);

					// Определяем фильтр по площади (сопоставляем с group_id)
					var targetGroupId;
					if (square === 'до 110 м2') {
						targetGroupId = 'small_baths'; // бани до 110 м2
					} else if (square === 'от 110 м2') {
						targetGroupId = 'medium_baths'; // бани от 110 м2
					} else if (square === 'от 200 до 300 м2') {
						targetGroupId = 'medium_homes'; // дома от 200 до 300 м2
					} else if (square === 'от 300 м2') {
						targetGroupId = 'large_homes'; // дома от 300 м2
					} else {
						targetGroupId = null;
					}

					var filterFunction;
					if (targetGroupId) {
						filterFunction = function (item) {
							return item.group_id === targetGroupId;
						};
					} else {
						filterFunction = function (item) {
							return true; // показываем все
						};
					}

					for (var i = 0; d['mesbot'][id]['categories'][i]; i++) {
						var filteredItems = d['mesbot'][id]['categories'][i]['items'].filter(filterFunction);

						for (var j = 0; j < filteredItems.length; j++) {
							var item = filteredItems[j];

							var step = '';
							var goal = '';
							var usertext = '';
							var link = '';

							if (d['mesbot'][id]['step'] !== undefined) {
								step = ' data-step="' + d['mesbot'][id]['step'] + '"';
							}
							if (d['mesbot'][id]['goal'] !== undefined) {
								goal = ' data-goal="' + d['mesbot'][id]['goal'] + '"';
							}

							if (item['link'] !== undefined) {
								link = ' data-link="' + item['link'] + '"';
							}

							if (d['mesbot'][id]['categories'][i]['name'] !== undefined) {
								usertext = ' data-usertext="' + item['fullname'] + '"';
							}

							var price = '&nbsp;';
							var gift = '';
							var profit = '';
							var diameter = '';
							var meterage = '';

							if (item['price'] !== undefined) {
								price = item['price'];
							}

							if (item['gift'] !== undefined) {
								gift = item['gift'];
							}

							if (item['profit'] !== undefined) {
								profit = item['profit'];
							}

							if (item['diameter'] !== undefined) {
								diameter = item['diameter'];
							}

							if (item['meterage'] !== undefined) {
								meterage = item['meterage'];
							}

							if (item['name'] !== undefined) {
								$('.message[data-mesbot=' + id + '] .mescont .autoslink').append(
									`<div class="autolink" data-stepbot="${d['mesbot'][id]['stepbot']}" data-mesbot="${id}" data-price="${price}"
                        ${link} 
                        ${usertext} 
                        ${step} 
                        ${goal}>
                        
                        <div class="goodmark"></div>
                        <div class="imghome" style="background-image:url(${item['img']})"></div>
                        <div class="homename">${item['name']}</div>
                        <div class="homeprice">${price}</div>
                        ${item['profit'] ? `<div class="profit">${item['profit']}</div>` : ''}
                        <div class="infoHouse">
                            ${item['diameter'] ? `<div class="diameter">Диаметр бревна кедра: <span>${item['diameter']}</span></div>` : ''}
                            ${item['meterage'] ? `<div class="meterage">Метраж: <span>${item['meterage']}</span></div>` : ''}
                        </div>
            
                        ${item['gift'] ? `<div class="gift">${item['gift']}</div>` : ''}
                      </div>`
								);
							}
						}
					}

					botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['buts']);
				}
			}

			if (d['mesbot'][id]['type'] == 'phone') {
				var text = d['mesbot'][id]['text'];
				if (d['mesbot'][id]['stepbot'] !== undefined) var stepbot = d['mesbot'][id]['stepbot'];
				else var stepbot = 0;

				if (text.indexOf('{country}') + 1) {
					var txt = $('.step[data=country2]').text();
					if (txt == 'Нет нужной страны') txt = 'в разные страны';
					text = text.replace(new RegExp('{country}', 'g'), txt);
				}

				$('.chatcont').css('height', $('.chatcont').outerHeight() + 'px');

				// $(".chatcont").append('<div class="message meshide mesbot" data-mesbot="' + id + '" data-stepbot="' + stepbot + '"><div class="mesimg"></div><div class="mescont"><div class="mestext">' + text + '</div><div class="butslink butslinkhide"><div class="descagree">Продолжая, вы соглашаетесь с <a href="https://callkeeper.ru/docs/personal_data.pdf" target="_blank">политикой конфиденциальности</a></div><input class="inptext inpphone" type="text" placeholder="+7 (___) ___-__-__"><div class="divbutphone"><button class="butphone">Все верно?</button><div class="error errorphone"></div></div></div></div></div>');
				// $(".inpphone").inputmask("+7 (999) 999-99-99");

				$('.chatcont').append(
					`<div class="message meshide mesbot" data-mesbot="${id}" data-stepbot="${stepbot}"><div class="mesimg"></div><div class="mescont"><div class="mestext">${text}<div class="message-date">${date.getHours()}:${
						date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes()
					}</div>
						</div><div class="butslink butslinkhide"><input class="inptext inpname" type="text" placeholder="Ваше имя"><input class="inptext inpphone" type="tel" placeholder="+7 (___) ___-__-__">
						<div class="name_inperror"">Нецензурное слово! Введите имя.</div>
            <div class="divbutphone"><div class="recall-call__time service__inp"><div class="recall-btn btn active" data-time="now">Позвонить сейчас</div><div class="recall-btn btn" data-time="someday">По времени</div></div><button class="butphone">Узнать стоимость</button><label class="cash1" style="margin-top:10px"><input class="checkbox__choose" id="agree" type="checkbox" checked><span class="agreement-policy" id="policyLabel">Даю <a href="https://angarskie-terema.ru/consent_to_data_processing" target="_blank">согласие</a> на обработку персональных данных</span><div class="policy-error-message" style="display:none;"></div></label><div class="error errorphone"></div></div></div></div></div>`
				);

				//  <div class="user-status">
				//       <label class="user-status__label">
				//         <input class="user-status__input" checked type="radio" name="user-status" value="Физ.лицо">
				//         <span>Я физ.лицо</span>
				//       </label>
				//       <label class="user-status__label">
				//         <input class="user-status__input" type="radio" name="user-status" value="Юр.лицо">
				//         <span>Я юр.лицо</span>
				//       </label>
				//     </div>

				// let now = new Date().getHours();

				// let day = new Date().getDay();

				// function weekdays() {
				//   $(".divbutphone").before(
				//     `<div class="recall-call__time service__inp"><div class="recall-btn btn active" data-time="now">Позвонить сейчас</div><div class="recall-btn btn" data-time="someday">По времени</div></div>`
				//   );
				// }
				// function weekends() {
				//   $(".divbutphone").before(
				//     `<input class="service__inp inpstyle call-input-time inptime inptext" type="text" name="call-time" required placeholder="Когда позвонить?">`
				//   );
				// }
				// if (day >= 1 && day <= 5) {
				//   if (now >= 9 && now <= 19) {
				//     weekdays();
				//   } else {
				//     weekends();
				//   }
				// } else if (day == 6) {
				//   if (now >= 9 && now <= 17) {
				//     weekdays();
				//   } else {
				//     weekends();
				//   }
				// } else if (day == 7) {
				//   if (now >= 10 && now <= 16) {
				//     weekdays();
				//   } else {
				//     weekends();
				//   }
				// }

				$('.inpphone').inputmask('+7 (999) 999-99-99');

				botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep']);
			}
			if (d['mesbot'][id]['type'] == 'cupon') {
				if (d['mesbot'][id]['text'] !== undefined) {
					var text = d['mesbot'][id]['text'];

					if (text.indexOf('{country}') + 1) {
						var txt = $('.step[data=country2]').text();
						if (txt == 'Нет нужной страны') txt = 'разные страны';
						text = text.replace(new RegExp('{country}', 'g'), txt);
					}

					$('.chatcont').css('height', $('.chatcont').outerHeight() + 'px');

					$('.chatcont').append(
						'<div class="message meshide mesbot" data-mesbot="' +
							id +
							'"><div class="mesimg"></div><div class="mescont"><div class="mestext">' +
							text +
							'<br><img class="cupon" src="img/cupon1000.png"></div></div></div>'
					);

					botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['buts']);
				}
			}
			if (d['mesbot'][id]['type'] == 'thanks') {
				if (d['mesbot'][id]['text'] !== undefined) {
					var text = d['mesbot'][id]['text'];

					if (text.indexOf('{country}') + 1) {
						var txt = $('.step[data=country2]').text();
						if (txt == 'Нет нужной страны') txt = 'разные страны';
						text = text.replace(new RegExp('{country}', 'g'), txt);
					}

					$('.chatcont').css('height', $('.chatcont').outerHeight() + 'px');

					$('.chatcont').append(
						'<div class="message meshide mesbot" data-mesbot="' +
							id +
							'"><div class="mesimg"></div><div class="mescont"><div class="mestext thanks"><div class="icosuccess"></div><div class="smshead">Спасибо!</div><div class="smsdesc">' +
							text +
							'</div><div class="descss">Подписывайтесь на нас в соцсетях</div><div class="blockss"><a href="https://vk.com/alohatour" target="_blank"><div class="ssitem ss1"></div></a><a href="tg://resolve?domain=Alohaturbot" target="_blank"><div class="ssitem ss4"></div></a><a href="https://www.instagram.com/alohatur.ru/" target="_blank"><div class="ssitem ss3"></div></a></div></div></div></div>'
					);

					botprint(id, d['mesbot'][id]['noscroll'], d['mesbot'][id]['sleep'], d['mesbot'][id]['stepbot'], d['mesbot'][id]['buts']);
				}
			}
		}
	}
}

function openmesuser(mesbot, text, stepbot, retmes) {
	var minusc = 0;
	var tt = 1;

	$('.chatcont').css('height', $('.chatcont').outerHeight() + 'px');
	if ($('.message[data-mesbot=' + mesbot + ']').nextAll('.message').length > 0) {
		$('.message[data-mesbot=' + mesbot + ']')
			.nextAll('.message')
			.addClass('meshide2');
		tt = 300;
	}
	setTimeout(function () {
		if ($('.meshide2').length > 0) {
			$('.meshide2').each(function () {
				minusc += $(this).outerHeight(true);
				$(this).remove();
			});
		}

		$('.chatcont').append(
			`<div class="message meshide mesuser" data-mesret="${mesbot}"><div class="mescont"><div class="mestext">${text}<div class="message-date">${date.getHours()}:${
				date.getMinutes() < 10 ? 0 + date.getMinutes().toString() : date.getMinutes()
			}<span class="mesuser-check"></span></div></div></div></div>`
		);

		setTimeout(function () {
			var hmes = $('.message[data-mesret=' + mesbot + ']').outerHeight(true);
			$('.meshide').removeClass('meshide');

			var hchat = $('.chatcont').outerHeight() + hmes - minusc;
			$('.chatcont').css('height', hchat);

			setTimeout(function () {
				$('.chatcont').css('height', 'auto');
				$('html, body').stop().animate({ scrollTop: document.body.scrollHeight }, 1000);

				setTimeout(function () {
					if (stepbot !== undefined && retmes === undefined) {
						openmesbot(stepbot);
					}
					if (retmes !== undefined) {
						openmesbot(retmes);
					}
				}, 200);
			}, 100);
		}, 10);
	}, tt);
}

function chatscroll(scrl) {
	if (scrl === undefined || scrl == 'false') {
		setTimeout(function () {
			$('.chatcont').css('height', 'auto');
			$('html, body').stop().animate({ scrollTop: document.body.scrollHeight }, 1000);
			setTimeout(function () {
				$('.butlink').removeClass('butlinkdisable');
			}, 200);
		}, 100);
	} else if (scrl != 'true') {
		setTimeout(function () {
			$('.chatcont').css('height', 'auto');
			$('html, body').stop().animate({ scrollTop: document.body.scrollHeight }, scrl);
			setTimeout(function () {
				$('.butlink').removeClass('butlinkdisable');
			}, scrl);
		}, 100);
	} else {
		$('.chatcont').css('height', 'auto');
		$('.butlink').removeClass('butlinkdisable');
	}
}

function botprint(id, noscroll, sleep, stepbot, buts) {
	if (sleep === undefined) sleep = 2000;

	$('.butlink').addClass('butlinkdisable');
	setTimeout(function () {
		$('.message[data-mesbot=' + id + ']').before('<div class="alenaprint">Вера печатает ...</div>');
		setTimeout(function () {
			$('.alenaprint').addClass('alenaprintshow');
			if (noscroll != 'true') $('html, body').stop().animate({ scrollTop: document.body.scrollHeight }, 300);
			setTimeout(function () {
				$('.alenaprint').addClass('hideop');
				setTimeout(function () {
					$('.alenaprint').remove();
				}, 300);

				var hmes = $('.message[data-mesbot=' + id + ']').outerHeight(true);
				$('.meshide').removeClass('meshide');
				setTimeout(function () {
					$('.message[data-mesbot=' + id + ']')
						.find('.butslinkhide')
						.removeClass('butslinkhide');
				}, 400);

				var hchat = $('.chatcont').outerHeight() + hmes;
				$('.chatcont').css('height', hchat);

				setTimeout(function () {
					if (stepbot !== undefined && buts === undefined) {
						openmesbot(stepbot);
					}
				}, 400);

				chatscroll(noscroll);
			}, sleep);
		}, 10);
	}, 10);
}

$(document).on('click', '.butlink', function () {
	if (!$(this).hasClass('butlinkdisable') && !$(this).hasClass('butlinkdisable2')) {
		$(this).closest('.butslink').find('.butlink').addClass('butlinkdisable');
		var mesbot = parseInt($(this).attr('data-mesbot'));
		var stepbot = parseInt($(this).attr('data-stepbot'));
		var type = $(this).attr('data-type');
		var goal = $(this).attr('data-goal');
		var retmes = $(this).attr('data-retmes');

		if (goal !== undefined && goal != "") {
		  ym(106621732, "reachGoal", goal);
		}

		$(this).parent().find('.butlink').removeClass('butlinkact');
		$(this).addClass('butlinkact');

		var txt = $(this).attr('data-usertext');
		if (type == 'country') {
			var val = $(this).attr('data-usertext');
			var country = $(this).attr('data-countr2');
		} else {
			var val = $(this).text();
			$(this).parent().find('.butlink').removeClass('butlinkact');
			$(this).addClass('butlinkact');
		}
		if ($(this).attr('data-mesbot') == 2 && $(this).attr('data-usertext') == 'Не знаю / Не определился') {
			$('.step[data=options]').text('Не выбраны');
		} else openmesuser(mesbot, txt, stepbot);

		var st = $(this).attr('data-step');
		step(st, val);
		if (st == 'country') step('country2', country);
	}
});

function checkStatus() {
	if ($('.user-status__input:checked').val() === 'Юр.лицо') {
		if ($('.other-detail') && $('.other-detail').val().length >= 3) {
			$('.other-detail').removeClass('inperror');
			$('.butphone').removeClass('disabled');
			return true;
		} else {
			$('.other-detail').addClass('inperror');
			$('.butphone').addClass('disabled');
			return false;
		}
	}
}

$(document).on('input', '.other-detail', function (e) {
	checkStatus();
});

$(document).on('input', '.inpname', function (e) {
	if (e.target.value.length < 2) {
		$(e.target).addClass('inperror');
	} else {
		$(e.target).removeClass('inperror');
	}
});

$(document).on('input', '.inpphone', function (e) {
	let phoneVal = e.target.value.replace(/\D+/g, '');

	if (
		phoneVal.length > 10 &&
		phoneVal.indexOf('00000') == -1 &&
		phoneVal.indexOf('11111') == -1 &&
		phoneVal.indexOf('22222') == -1 &&
		phoneVal.indexOf('33333') == -1 &&
		phoneVal.indexOf('44444') == -1 &&
		phoneVal.indexOf('55555') == -1 &&
		phoneVal.indexOf('66666') == -1 &&
		phoneVal.indexOf('77777') == -1 &&
		phoneVal.indexOf('88888') == -1 &&
		phoneVal.indexOf('99999') == -1
	) {
		$(e.target).removeClass('inperror');
	} else {
		$(e.target).addClass('inperror');
	}
});

$(document).on('click', '.butphone', function () {
	var agreeChecked = $('#agree').is(':checked');

	if (!agreeChecked) {
		$('#policyLabel').addClass('policy-error');
		// $('.policy-error-message').text('Пожалуйста, согласитесь с политикой конфиденциальности').show();
		return;
	} else {
		$('#policyLabel').removeClass('policy-error');
		// $('.policy-error-message').hide().text('');
	}

	checkStatus();
	const elem = $(this);
	$('.errorphone').hide().html('');
	$('.inpphone').removeClass('inperror');
	$(this).html('Все верно?').removeAttr('style');

	if ($(this).hasClass('butphoneshow')) {
		if (!$(this).hasClass('butlinkdisable') && !$(this).hasClass('butlinkdisable2')) {
			let phone = elem.closest('.butslink').find('.inpphone');
			let phoneVal = phone.val();
			let phoneNum = phone.val().replace(/\D+/g, '');
			let phoneLen = phoneNum.length;
			let name = elem.closest('.butslink').find('.inpname');
			let nameVal = name.val();

			var regex =
				/(?<![а-яё])(?:(?:(?:у|[нз]а|(?:хитро|не)?вз?[ыьъ]|с[ьъ]|(?:и|ра)[зс]ъ?|(?:о[тб]|п[оа]д)[ьъ]?|(?:\S(?=[а-яё]))+?[оаеи-])-?)?(?:[её](?:б(?!о[рй]|рач)|п[уа](?:ц|тс))|и[пб][ае][тцд][ьъ]|[её]банут[еы]|хуй|пошли|нахпошли).*?|(?:(?:н[иеа]|(?:ра|и)[зс]|[зд]?[ао](?:т|дн[оа])?|с(?:м[еи])?|а[пб]ч|в[ъы]?|пр[еи])-?)?ху(?:[яйиеёю]|л+и(?!ган)).*?|бл(?:[эя]|еа?)(?:[дт][ьъ]?)?|\S*?(?:п(?:[иеё]зд|ид[аое]?р|ед(?:р(?!о)|[аое]р|ик)|охую)|бля(?:[дбц]|тс)|[ое]ху[яйиеё]|хуйн|жоопу).*?|(?:о[тб]?|про|на|вы)?м(?:анд(?:[ауеыи](?:л(?:и[сзщ])?[ауеиы])?|ой|[ао]в.*?|юк(?:ов|[ауи])?|е[нт]ь|ища)|уд(?:[яаиое].+?|е?н(?:[ьюия]|ей))|[ао]л[ао]ф[ьъ](?:[яиюе]|[еёо]й))|елд[ауые].*?|ля[тд]ь|(?:[нз]а|по)х|жоопу|нахпошли)(?![а-яё])/i;

			// Проверяем имя на запрещенные слова
			var nameHasMatWord = regex.test(nameVal) ? true : false;
			if (nameHasMatWord) {
				$('.name_inperror').addClass('active');
				return;
			} else {
				$('.name_inperror').removeClass('active');
			}

			if (!phoneVal || phoneLen < 11) {
				phone.addClass('inperror');
			} else {
				if (
					phoneNum.indexOf('00000') == -1 &&
					phoneNum.indexOf('11111') == -1 &&
					phoneNum.indexOf('22222') == -1 &&
					phoneNum.indexOf('33333') == -1 &&
					phoneNum.indexOf('44444') == -1 &&
					phoneNum.indexOf('55555') == -1 &&
					phoneNum.indexOf('66666') == -1 &&
					phoneNum.indexOf('77777') == -1 &&
					phoneNum.indexOf('88888') == -1 &&
					phoneNum.indexOf('99999') == -1
				) {
					if (!elem.hasClass('disabled')) {
						$('.butphone').css('width', $('.butphone').outerWidth()).addClass('disabled').html('<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>');

						sendorder();
					}
				} else {
					$('.inpname').addClass('inperror');
					$('.inpphone').addClass('inperror');
					$('.other-detail').addClass('inperror');
				}
			}
		}
	}
});

$(document).on('click', '.butcode', function () {
	$('.errorsms').hide().text('');
	if (!$(this).hasClass('butblock')) {
		$(this).addClass('butblock');

		var code = $('.inpcode').val();
		var codereal = $(this).attr('data-code');

		if (code == codereal) {
			sendorder();
			butdisable();

			$('.repeatsms').addClass('hideop');

			var el = $(this);
			var w = el.outerWidth();
			var winp = $('.inpcode').outerWidth() - 100 + w;
			var marl = 0 - $('.inpcode').outerWidth();
			el.css('width', w + 'px');
			el.find('span').addClass('hideop');
			setTimeout(function () {
				el.addClass('butcodeok');

				var wbody = parseInt(window.innerWidth);
				if (wbody > 670)
					el.css('width', winp + 'px')
						.css('margin-left', marl + 'px')
						.css('margin-right', '50px');
				else el.css('width', winp + 50 + 'px').css('margin-left', marl + 'px');

				setTimeout(function () {
					$('.blocksms').removeClass('blockshow');
					setTimeout(function () {
						opensuccess();
						// $(".chat, h1").css("opacity", "1");
						// $('body, html').scrollTop($(document).height());
						//
						// setTimeout(function(){
						//     var stepbot = $(".butphone").closest(".message").attr("data-stepbot");
						//     openmesbot(stepbot);
						// }, 300);
					}, 500);
				}, 500);
			}, 100);
		} else {
			$(this).removeClass('butblock');
			$('.errorsms').show().text('Неверный код');
		}
	}
});

function hchat() {
	let hbody = parseInt(window.innerHeight);
	let h1 = $('h1').outerHeight(true);
	let logo = 0;
	let subTitle = 0;
	if (window.innerWidth > 460) {
		logo = $('.logophone').outerHeight(true);
	}
	{
		logo = $('.header__mobile').outerHeight(true);
	}

	if ($('.title_descr').length) {
		subTitle = $('.title_descr').outerHeight(true);
	}
	const minHeight = hbody - h1 - logo - subTitle;

	$('.chat').css('min-height', minHeight + 'px');
}
setTimeout(function () {
	hchat();
}, 200);
hchat();
$(window).resize(function () {
	var ww = $('.widthwin').text();
	if (window.innerWidth != ww) {
		$('.widthwin').text(window.innerWidth);
		hchat();
		blockcenter($('.blocksms'));
		blockcenter($('.blocksuccess'));
	}
});

setInterval(function () {
	$('.alenaprint').each(function () {
		var txt = $(this).text();
		var lastIndex = txt.lastIndexOf(' ');
		ttt = txt.substring(0, lastIndex);
		point = txt.substring(lastIndex).trim();

		if (point == '...') $(this).text(ttt + ' .');
		if (point == '..') $(this).text(ttt + ' ...');
		if (point == '.') $(this).text(ttt + ' ..');
	});
}, 200);

$('body').on('keyup', '.inpphone', function () {
	if ($(this).val() != '') {
		if ($('.inpphone').val().replace(/\D+/g, '').indexOf('78') == 0) {
			$('.inpphone').val($('.inpphone').val().replace(/\D+/g, '').slice(2));
		}
		if ($(this).val() != '') {
			$('.butphone').addClass('butphoneshow');
		}
	} else {
		$('.butphone').removeClass('butphoneshow');
	}
});

// Форма с кодом при загрузке
// setTimeout(function(){
//     // sendsms();
//
//     $(".chat, h1").fadeOut(300);
//
//     setTimeout(function(){
//         opensuccess();
//         // $(".blocksms").show();
//         // setTimeout(function(){
//         //     $(".blocksms").addClass("blockshow");
//         //     blockcenter($(".blocksms"));
//         // }, 10);
//     }, 300);
// }, 500);

function blockcenter(el) {
	var w = el.outerWidth();
	var h = el.outerHeight();
	el.css('margin-top', '-' + Math.round(h / 2) + 'px').css('margin-left', '-' + Math.round(w / 2) + 'px');
}

function sendsms() {
	var sms = parseInt(getCookie('sms'));
	if (isNaN(sms)) sms = 0;
	if (sms < 5) {
		$('.repeatsms').html('<div class="repeatword">Повторная отправка через:</div><div class="repeattimer" s="21">00 : 21</div>');
	}

	sms++;

	document.cookie = 'sms=' + sms + '; max-age=3600';

	var phone = $('.inpphone').val();

	if (phone == '' || phone === undefined) phone = $('.inpchangephone').val();
	$('.inpchangephone').val(phone);

	$('.chat, h1, .title_descr').css('opacity', '0');

	$('.smsdesc span').text(phone);

	setTimeout(function () {
		$('.chat, h1, .title_descr').hide();
		$('.blocksms').show();
		setTimeout(function () {
			$('.blocksms').addClass('blockshow');
			blockcenter($('.blocksms'));
		}, 100);
	}, 500);

	$.ajax({
		url: 'sms.php',
		data: {
			phone: phone,
		},
		type: 'POST',
		datatype: 'JSON',
		success: function (data) {
			data = JSON.parse(data);
			$('.butcode').attr('data-code', data.code);
		},
		error: function () {
			console.log('error');
		},
	});
}

function repeatsms() {
	var phone = $('.inpphone').val();

	$.ajax({
		url: 'sms.php',
		data: {
			phone: phone,
		},
		type: 'POST',
		datatype: 'JSON',
		success: function (data) {
			data = JSON.parse(data);
			$('.butcode').attr('data-code', data.code);
		},
		error: function () {
			console.log('error');
		},
	});
}

function sendorder() {
	var type_request = 'Заявка с чата';
	var token = $('.step[data=token]').text();
	var name = $('.inpname').val();
	var phone = $('.inpphone').val();
	var build = $('.step[data=build]').text();
	var square = $('.step[data=square]').text();
	var house = $('.step[data=house]').text();
	// let status = $('.user-status__input:checked').val();
	var callTime = $('input[name="call-time"]').length ? $('input[name="call-time"]').val() : 'Сейчас';

	var mw_u_type = $('input[name=mw_u_type]').val();
	var mw_u_source = $('input[name=mw_u_source]').val();
	var mw_u_medium = $('input[name=mw_u_medium]').val();
	var mw_u_campaign = $('input[name=mw_u_campaign]').val();
	var mw_u_content = $('input[name=mw_u_content]').val();
	var mw_u_term = $('input[name=mw_u_term]').val();
	var mw_u_entrance_point = $('input[name=mw_u_entrance_point]').val();
	var mw_u_visits = $('input[name=mw_u_visits]').val();
	var mw_u_pages = $('input[name=mw_u_pages]').val();
	var mw_u_data = $('input[name=mw_u_data]').val();
	var mw_u_current_url = $('input[name=mw_u_current_url]').val();
	var mw_u_referer = $('input[name=mw_u_referer]').val();
	var mw_u_ip = $('input[name=mw_u_ip]').val();
	var mw_u_user_agent = $('input[name=mw_u_user_agent]').val();
	var mw_u_gid = $('input[name=mw_u_gid]').val();
	var mw_u_yid = $('input[name=mw_u_yid]').val();
	var mw_u_roistat = $('input[name=mw_u_roistat]').val();
	var mw_u_ct = $('input[name=mw_u_ct]').val();

	var city_ip = $('input[name=city_ip]').val();
	var region_ip = $('input[name=region_ip]').val();
	var country_ip = $('input[name=country_ip]').val();

	$.ajax({
		url: 'order.php',
		data: {
			type_request: type_request,
			token: token,
			name: name,
			phone: phone,
			question1: build,
			question2: square,
			question3: house,
			callTime: callTime,
			mw_u_type: mw_u_type,
			mw_u_source: mw_u_source,
			mw_u_medium: mw_u_medium,
			mw_u_campaign: mw_u_campaign,
			mw_u_content: mw_u_content,
			mw_u_term: mw_u_term,
			mw_u_entrance_point: mw_u_entrance_point,
			mw_u_visits: mw_u_visits,
			mw_u_pages: mw_u_pages,
			mw_u_data: mw_u_data,
			mw_u_current_url: mw_u_current_url,
			mw_u_referer: mw_u_referer,
			mw_u_ip: mw_u_ip,
			mw_u_user_agent: mw_u_user_agent,
			mw_u_gid: mw_u_gid,
			mw_u_yid: mw_u_yid,
			mw_u_roistat: mw_u_roistat,
			mw_u_ct: mw_u_ct,
			city_ip: city_ip,
			region_ip: region_ip,
			country_ip: country_ip,
		},
		type: 'POST',
		datatype: 'JSON',
		success: function (data) {
			data = JSON.parse(data);
			if (data.success == true) {
				// timer();
				ym(106621732, 'reachGoal', 'spasibo');
				const url = new URL(window.location.origin + '/thanks.php'); 
				url.search = window.location.search;
				window.location.assign(url);
				// opensuccess();
				
				$('.butphone').removeAttr('style').html('Отправить').removeClass('disabled');
			} else {
				$('.butphone').removeAttr('style').html('Отправить').removeClass('disabled');
				$('.errorphone').show().html('Неверный номер');
				$('.inpphone').addClass('inperror');
			}
		},
		error: function () {
			$('.butphone').removeAttr('style').html('Все верно?');
			console.log('error');
		},
	});
}

setInterval(function () {
	if ($('.repeattimer').length > 0) {
		var s = parseInt($('.repeattimer').attr('s')) - 1;
		if (s > 0) {
			if (s < 10) var s1 = '0' + s;
			else var s1 = s;

			$('.repeattimer')
				.attr('s', s)
				.text('00 : ' + s1);
		} else {
			$('.repeatsms').html('<button class="butrepeat">Отправить код повторно</button>');
		}
	}
}, 1000);

$(document).on('click', '.butrepeat', function () {
	if (!$(this).hasClass('butblock')) {
		$(this).addClass('butblock');

		repeatsms();

		var sms = parseInt(getCookie('sms'));
		if (isNaN(sms)) sms = 0;
		if (sms < 5) {
			$('.repeatsms').html('<div class="repeatword">Повторная отправка через:</div><div class="repeattimer" s="21">00 : 21</div>');
		} else $('.repeatsms').html('');

		sms++;

		document.cookie = 'sms=' + sms + '; max-age=3600';
	}
});

$(document).on('keydown', '.inpcode', function (e) {
	if (e.keyCode === 13) {
		$('.butcode').click();
	}
});
$(document).on('keydown', '.inpphone', function (e) {
	if (e.keyCode === 13) {
		$('.butphone').click();
	}
});

function opensuccess() {
	$('.chat, h1, .title_descr').css('opacity', '0');
	$('.blocksms').removeClass('blockshow');
	setTimeout(function () {
		$('.chat, h1, .title_descr').hide();
		$('.blocksuccess').show();
		// let now = new Date().getHours();

		// let day = new Date().getDay();

		// if (day >= 1 && day <= 5) {
		// 	if (now >= 9 && now <= 19) {
		// 		$('.blocksuccess').find('.smshead').html('Ваша заявка принята!<br> Мы скоро свяжемся с Вами');
		// 	} else {
		// 		$('.blocksuccess').find('.smshead').html('Ваша заявка принята!<br> В рабочее время мы свяжемся с Вами');
		// 	}
		// } else if (day == 6) {
		// 	if (now >= 9 && now <= 17) {
		// 		$('.blocksuccess').find('.smshead').html('Ваша заявка принята!<br> Мы скоро свяжемся с Вами');
		// 	} else {
		// 		$('.blocksuccess').find('.smshead').html('Ваша заявка принята!<br> В рабочее время мы свяжемся с Вами');
		// 	}
		// } else if (day == 7) {
		// 	if (now >= 10 && now <= 16) {
		// 		$('.blocksuccess').find('.smshead').html('Ваша заявка принята!<br> Мы скоро свяжемся с Вами');
		// 	} else {
		// 		$('.blocksuccess').find('.smshead').html('Ваша заявка принята!<br> В рабочее время мы свяжемся с Вами');
		// 	}
		// }

		setTimeout(function () {
			$('.blocksuccess').addClass('blockshow');
			blockcenter($('.blocksuccess'));
		}, 10);
	}, 200);
}

$('.gradient').addClass('gradientshow');
$('h1, .title_descr').addClass('h1show1');
setTimeout(function () {
	$('.logophone').addClass('logophoneshow');
	$('h1, .title_descr').addClass('h1show2');
	$('.chat').addClass('chatshow');
	setTimeout(function () {
		$('.main').removeClass('mainshow');
	}, 700);
}, 500);

$(document).on('click', '.butlinkshow', function () {
	$(this).closest('.butslink').find('.buthide').removeClass('buthide');
	$(this).remove();
});

$(document).on('click', '.changenumber', function () {
	$('.blockcode').css('height', $('.blockcode').outerHeight());
	$('.contcode').addClass('conthide');
	setTimeout(function () {
		$('.contphone').show();
		setTimeout(function () {
			$('.contcode').hide();
			$('.contphone').addClass('contshow');
			$('.blockcode').removeAttr('style');
		}, 10);
	}, 200);
	$(this).addClass('linkhide');
});

$('.inpchangephone').inputmask('+7 (999) 999-99-99');

$(document).on('click', '.butchangephone', function () {
	$('.errorsms').hide().text('');
	var phone = $('.inpchangephone').val();
	if (phone != '') {
		$('.inpphone').val(phone);
		sendsms();

		$('.blockcode').css('height', $('.blockcode').outerHeight());
		$('.contphone').addClass('conthide');
		setTimeout(function () {
			$('.contcode').show();
			setTimeout(function () {
				$('.contphone').hide();
				$('.contcode').addClass('contshow');
				$('.blockcode').removeAttr('style');
			}, 10);
		}, 200);
		$('.changenumber').removeClass('linkhide');
	} else $('.errorsms').show().text('Введите номер телефона');
});

function butdisable() {
	$('.butlink').addClass('butlinkdisable2');
	$('.butphone').addClass('butlinkdisable2');
	$('.datepicker').addClass('datepickerdisable');
	$('.inpphone').prop('checked', true);
}

function getCookie(name) {
	var matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options) {
	options = options || {};

	var expires = options.expires;

	if (typeof expires == 'number' && expires) {
		var d = new Date();
		d.setTime(d.getTime() + expires * 1000);
		expires = options.expires = d;
	}
	if (expires && expires.toUTCString) {
		options.expires = expires.toUTCString();
	}

	value = encodeURIComponent(value);

	var updatedCookie = name + '=' + value;

	for (var propName in options) {
		updatedCookie += '; ' + propName;
		var propValue = options[propName];
		if (propValue !== true) {
			updatedCookie += '=' + propValue;
		}
	}

	document.cookie = updatedCookie;
}

$(document).on('click', '.autobut', function () {
	var idgood = $(this).closest('.autolink').attr('id');
	$('.bg').stop().fadeIn(200);
	$('.wingood').addClass('wingoodshow');
	$('.contgood').removeClass('contgoodshow').removeClass('contgoodshowz');
	$('.contgood.cg' + idgood)
		.addClass('contgoodshow')
		.addClass('contgoodshowz');
});

$(document).mouseup(function (e) {
	var div = $('.wingood, .goodarr');
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.wingood').removeClass('wingoodshow');
		$('.contgood').removeClass('contgoodshow').removeClass('contgoodshowz');
		$('.bg').stop().fadeOut(200);
	}
});

$(document).on('click', '.winclose', function () {
	$('.wingood').removeClass('wingoodshow');
	$('.contgood').removeClass('contgoodshow').removeClass('contgoodshowz');
	$('.bg').stop().fadeOut(200);
});

$(document).on('click', '.goodarr1', function () {
	var el0 = $('.contgoodshowz');
	var el = $('.contgoodshowz').prev();
	if (el.length == 0) el = $('.contgood:last-child');
	$(el0).removeClass('contgoodshowz');
	$(el).addClass('contgoodshow').addClass('contgoodshowz');
	setTimeout(function () {
		if (!el0.hasClass('contgoodshowz')) $(el0).removeClass('contgoodshow');
	}, 200);
});

$(document).on('click', '.goodarr2', function () {
	var el0 = $('.contgoodshowz');
	var el = $('.contgoodshowz').next();
	if (el.length == 0) el = $('.contgood:first-child');
	$(el0).removeClass('contgoodshowz');
	$(el).addClass('contgoodshow').addClass('contgoodshowz');
	setTimeout(function () {
		if (!el0.hasClass('contgoodshowz')) $(el0).removeClass('contgoodshow');
	}, 200);
});

$(document).on('click', '.autolink', function (e) {
	var div = $('.priceinfo');
	if (!div.is(e.target)) {
		$('.autolink').removeClass('goodchoice').addClass('goodopac');
		$(this).removeClass('goodopac').addClass('goodchoice');
		$('.wingood').removeClass('wingoodshow');
		$('.contgood').removeClass('contgoodshow').removeClass('contgoodshowz');
		$('.bg').stop().fadeOut(200);

		var step = $(this).attr('data-step');
		var usertext = $(this).attr('data-usertext');
		var goal = $(this).attr('data-goal');
		var mesbot = parseInt($(this).attr('data-mesbot'));
		var stepbot = parseInt($(this).attr('data-stepbot'));

		if ($(this).attr('data-link')) {
			$('.btn_redir').attr('href', $(this).attr('data-link'));
		}

		$('.step[data=' + step + ']').text(usertext);
		ym(106621732, 'reachGoal', goal);

		openmesuser(mesbot, usertext, stepbot);
	} else $('.autolink').not($(this)).removeClass('act');
});

$(document).on('click', '.priceinfo', function () {
	if ($(this).closest('.autolink').hasClass('act')) $(this).closest('.autolink').removeClass('act');
	else $(this).closest('.autolink').addClass('act');
});

$(document).mouseup(function (e) {
	// событие клика по веб-документу
	var div = $('.priceinfo'); // тут указываем ID элемента
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.autolink').removeClass('act');
	}
});

$(document).on('click', '.button-info', function () {
	$('.button-info').not($(this)).removeClass('act').find('.priceinfoblock').stop().fadeOut(200);
	if ($(this).hasClass('act')) $(this).removeClass('act');
	else $(this).addClass('act');
	$(this).find('.priceinfoblock').stop().fadeToggle(200);
});

$(document).mouseup(function (e) {
	// событие клика по веб-документу
	var div = $('.button-info'); // тут указываем ID элемента
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.button-info').removeClass('act');
		$('.button-info .priceinfoblock').stop().fadeOut(200);
	}
});

function timer() {
	var time_redir = 3;
	$('.time_redir').text(time_redir);
	let timer_redir = setInterval(function () {
		if (time_redir != 0) {
			time_redir--;
			$('.time_redir').text(time_redir);
		} else {
			window.location.replace($('.btn_redir').attr('href'));
			clearInterval(timer_redir);
		}
	}, 1000);
}

// $(document).on('click', '.chatheader .advantage, .purchase__btn', function (e) {
// 	let id = $(this).attr('id');

// 	if ($(this).hasClass('purchase__btn')) {
// 		$('.blockpopup').attr('data-branch', 'purchase');
// 		$('.blockpopup__chat-msg.msgpopup').hide();
// 		$('.blockpopup__chat-msg.msgPurchase').show();
// 		$('.blockpopup').addClass('blockpopup-nocredit');
// 	} else if (id == 1) {
// 		$('.blockpopup').attr('data-branch', 'popup1');
// 		$('.blockpopup__chat-msg.msgpopup').show();
// 		$('.blockpopup__chat-msg.msgPurchase').hide();
// 	} else if (id == 2) {
// 		$('.blockpopup').attr('data-branch', 'popup2');
// 		$('.blockpopup__chat-msg.msgpopup').show();
// 		$('.blockpopup__chat-msg.msgPurchase').hide();
// 	} else if (id == 3) {
// 		$('.blockpopup').attr('data-branch', 'popup3');
// 		$('.blockpopup__chat-msg.msgpopup').show();
// 		$('.blockpopup__chat-msg.msgPurchase').hide();
// 	} else {
// 		$('.blockpopup').attr('data-branch', 'popup');
// 		$('.blockpopup__chat-msg.msgpopup').show();
// 		$('.blockpopup__chat-msg.msgPurchase').hide();
// 	}

// 	var div = $('.button-info');
// 	if (!div.is(e.target) && div.has(e.target).length === 0) {
// 		$('.blockpopup__bg').addClass('blockpopup__bg-show');
// 		$('.popup_phone').val('');
// 		$('.butpopup').text('Отправить');
// 		setTimeout(function () {
// 			$('.blockpopup').addClass('blockpopup__show');
// 			$('.blockpopup__bg').addClass('blockpopup__bg-show2');
// 		}, 10);
// 		$('.popup_phone').inputmask('+7 (999) 999-99-99');
// 	}
// });

$('.blockpopup__close').click(function () {
	$('.blockpopup-nocredit').removeClass('blockpopup-nocredit');
	$('.blockpopup').removeClass('blockpopup__show');
	$('.blockpopup__bg').removeClass('blockpopup__bg-show2');
	$('.popup__thanks').removeClass('popup__thanks-show');
	setTimeout(function () {
		$('.blockpopup__bg').removeClass('blockpopup__bg-show');
		$('.popup__thanks-bg').removeClass('popup__thanks-bg-show');
	}, 300);
});

$(document).on('mouseup', '.blockpopup__bg, .popup__thanks-bg', function (e) {
	var div = $('.blockpopup');
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.blockpopup').removeClass('blockpopup__show');
		$('.blockpopup__bg').removeClass('blockpopup__bg-show2');
		$('.popup__thanks-bg').removeClass('popup__thanks-bg-show');
		setTimeout(function () {
			$('.popup__thanks').removeClass('popup__thanks-show');
			$('.blockpopup__bg').removeClass('blockpopup__bg-show');
		}, 300);
	}
});

$(document).on('click', '.butpopup', function () {
	const elem = $(this);
	$('.popup_name').removeClass('inperror');
	$('.popup_phone').removeClass('inperror');
	$(this).html('Отправить').removeAttr('style');
	var phone = $('.popup_phone').val();
	var name = $('.popup_name').val();
	var phone2 = $('.popup_phone').val().replace(/\D+/g, '');
	var count = phone2.length;
	var agreeChecked = $('#agree').is(':checked');

	if (!agreeChecked) {
		$('#policyLabel').addClass('policy-error');
		// $('.policy-error-message').text('Пожалуйста, согласитесь с политикой конфиденциальности').show();
		return;
	} else {
		$('#policyLabel').removeClass('policy-error');
		// $('.policy-error-message').hide().text('');
	}

	var regex =
		/(?<![а-яё])(?:(?:(?:у|[нз]а|(?:хитро|не)?вз?[ыьъ]|с[ьъ]|(?:и|ра)[зс]ъ?|(?:о[тб]|п[оа]д)[ьъ]?|(?:\S(?=[а-яё]))+?[оаеи-])-?)?(?:[её](?:б(?!о[рй]|рач)|п[уа](?:ц|тс))|и[пб][ае][тцд][ьъ]|[её]банут[еы]|хуй|пошли|нахпошли).*?|(?:(?:н[иеа]|(?:ра|и)[зс]|[зд]?[ао](?:т|дн[оа])?|с(?:м[еи])?|а[пб]ч|в[ъы]?|пр[еи])-?)?ху(?:[яйиеёю]|л+и(?!ган)).*?|бл(?:[эя]|еа?)(?:[дт][ьъ]?)?|\S*?(?:п(?:[иеё]зд|ид[аое]?р|ед(?:р(?!о)|[аое]р|ик)|охую)|бля(?:[дбц]|тс)|[ое]ху[яйиеё]|хуйн|жоопу).*?|(?:о[тб]?|про|на|вы)?м(?:анд(?:[ауеыи](?:л(?:и[сзщ])?[ауеиы])?|ой|[ао]в.*?|юк(?:ов|[ауи])?|е[нт]ь|ища)|уд(?:[яаиое].+?|е?н(?:[ьюия]|ей))|[ао]л[ао]ф[ьъ](?:[яиюе]|[еёо]й))|елд[ауые].*?|ля[тд]ь|(?:[нз]а|по)х|жоопу|нахпошли)(?![а-яё])/i;

	// Проверяем имя на запрещенные слова
	var nameHasMatWord = regex.test(name) ? true : false;
	if (nameHasMatWord) {
		$('.name_inperror').addClass('active');
		return;
	} else {
		$('.name_inperror').removeClass('active');
	}

	if (phone != '' && count == 11 && name != '') {
		if (
			phone2.indexOf('00000') == -1 &&
			phone2.indexOf('11111') == -1 &&
			phone2.indexOf('22222') == -1 &&
			phone2.indexOf('33333') == -1 &&
			phone2.indexOf('44444') == -1 &&
			phone2.indexOf('55555') == -1 &&
			phone2.indexOf('66666') == -1 &&
			phone2.indexOf('77777') == -1 &&
			phone2.indexOf('88888') == -1 &&
			phone2.indexOf('99999') == -1
		) {
			if (!elem.hasClass('disabled')) {
			}
			elem.css('width', $('.butphone').outerWidth()).addClass('disabled').html('<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>');
			sendorderform();
		} else $('.popup_phone').addClass('inperror');
	} else if (phone == '') {
		$('.popup_phone').addClass('inperror');
	} else if (name == '') {
		$('.popup_name').addClass('inperror');
	}
});
$('.popup_phone').inputmask('+7 (999) 999-99-99');

function sendorderform() {
	var type_request = 'Заявка с блока выгод';
	// if ($(".blockpopup").attr("data-branch") == "popup") {
	//   type_request = "Заявка с блока выгод";
	// } else if ($(".blockpopup").attr("data-branch") == "purchase") {
	//   type_request = "Блок под выгодами";
	// } else if ($(".blockpopup").attr("data-branch") == "popup1") {
	//   type_request = "Зимняя резина в подарок!";
	// } else if ($(".blockpopup").attr("data-branch") == "popup2") {
	//   type_request = "Гарантия до 7 лет / 200 000 км";
	// } else if ($(".blockpopup").attr("data-branch") == "popup3") {
	//   type_request = "Выгодный Трейд-Ин";
	// }
	// else {
	//   type_request = "Заявка с блока преимуществ";
	// }
	var token = $('.step[data=token]').text();
	var name = $('.popup_name').val();
	var phone = $('.popup_phone').val();

	var mw_u_type = $('input[name=mw_u_type]').val();
	var mw_u_source = $('input[name=mw_u_source]').val();
	var mw_u_medium = $('input[name=mw_u_medium]').val();
	var mw_u_campaign = $('input[name=mw_u_campaign]').val();
	var mw_u_content = $('input[name=mw_u_content]').val();
	var mw_u_term = $('input[name=mw_u_term]').val();
	var mw_u_entrance_point = $('input[name=mw_u_entrance_point]').val();
	var mw_u_visits = $('input[name=mw_u_visits]').val();
	var mw_u_pages = $('input[name=mw_u_pages]').val();
	var mw_u_data = $('input[name=mw_u_data]').val();
	var mw_u_current_url = $('input[name=mw_u_current_url]').val();
	var mw_u_referer = $('input[name=mw_u_referer]').val();
	var mw_u_ip = $('input[name=mw_u_ip]').val();
	var mw_u_user_agent = $('input[name=mw_u_user_agent]').val();
	var mw_u_gid = $('input[name=mw_u_gid]').val();
	var mw_u_yid = $('input[name=mw_u_yid]').val();
	var mw_u_roistat = $('input[name=mw_u_roistat]').val();
	var mw_u_ct = $('input[name=mw_u_ct]').val();

	var city_ip = $('input[name=city_ip]').val();
	var region_ip = $('input[name=region_ip]').val();
	var country_ip = $('input[name=country_ip]').val();

	$.ajax({
		url: 'order.php',
		data: {
			type_request: type_request,
			token: token,
			phone: phone,
			name: name,
			mw_u_type: mw_u_type,
			mw_u_source: mw_u_source,
			mw_u_medium: mw_u_medium,
			mw_u_campaign: mw_u_campaign,
			mw_u_content: mw_u_content,
			mw_u_term: mw_u_term,
			mw_u_entrance_point: mw_u_entrance_point,
			mw_u_visits: mw_u_visits,
			mw_u_pages: mw_u_pages,
			mw_u_data: mw_u_data,
			mw_u_current_url: mw_u_current_url,
			mw_u_referer: mw_u_referer,
			mw_u_ip: mw_u_ip,
			mw_u_user_agent: mw_u_user_agent,
			mw_u_gid: mw_u_gid,
			mw_u_yid: mw_u_yid,
			mw_u_roistat: mw_u_roistat,
			mw_u_ct: mw_u_ct,
			city_ip: city_ip,
			region_ip: region_ip,
			country_ip: country_ip,
		},
		type: 'POST',
		datatype: 'JSON',
		success: function (data) {
			data = JSON.parse(data);
			if (data.success == true) {
				if ($('.blockpopup').hasClass('blockpopup-nocredit')) {
					// ym(000000000, "reachGoal", "nocredit"); не был
				} else {
					//ym(000000000, 'reachGoal', 'actions');
					//ym(000000000, 'reachGoal', 'actions');
				}
				actionPopupSuccess();
				$('.butpopup').html('Отправить').removeAttr('style').removeClass('disabled');
			} else {
				$('.butpopup').html('Отправить').removeAttr('style').removeClass('disabled');
				$('.popup_phone').addClass('inperror');
			}
		},
		error: function () {
			$('.butphone').removeAttr('style').html('Все верно?').removeClass('disabled');
			console.log('error');
		},
	});
}

$(document).on('focus', '.popup_phone', function () {
	$(this).removeClass('inperror');
});

$('body').on('keyup', '.popup_phone', function () {
	if ($(this).val() != '') {
		if ($('.popup_phone').val().replace(/\D+/g, '').indexOf('78') == 0) {
			$('.popup_phone').val($('.popup_phone').val().replace(/\D+/g, '').slice(2));
		}
		if ($(this).val() != '') {
			$('.butpopup').addClass('butpopupshow');
		}
	} else {
		$('.butpopup').removeClass('butpopupshow');
	}
});

function actionPopupSuccess() {
	$('.blockpopup').removeClass('blockpopup__show');
	$('.popup__thanks-bg').addClass('popup__thanks-bg-show');
	setTimeout(function () {
		$('.popup__thanks').addClass('popup__thanks-show');
	}, 20);
}

$(document).on('scroll', window, function () {
	if ($(window).scrollTop() > $('.message[data-mesbot="0"]').offset().top) {
		$('.fixed__bot').addClass('act');
	} else {
		$('.fixed__bot').removeClass('act');
	}
});
function timeInputFunc() {
	let timeInput = document.createElement('input');
	timeInput.className = 'service__inp inpstyle call-input-time inptime inptext';
	timeInput.type = 'text';
	timeInput.name = 'call-time';
	timeInput.setAttribute('required', '');
	timeInput.placeholder = 'Когда позвонить?';
	document.querySelector('.recall-call__time').after(timeInput);
}

$(document).on('click', '.recall-btn', function (e) {
	const actionType = $(this).attr('data-time');
	$(this).parent().find('.recall-btn').removeClass('active');
	$(this).addClass('active');
	if (actionType === 'someday') {
		if (!$('.call-input-time').length) timeInputFunc();
	} else if (actionType === 'now' && $('.call-input-time').length) {
		$('.call-input-time').remove();
	}
});

$(document).on('click', '.moreOptions-btn', function () {
	const elem = $(this);
	const wrapper = $('.moreOptions-list');
	const optionsArr = d['mesbot'][3]['autoOptions'];

	const title = elem.siblings().find('.agreement-label').text();
	elem.addClass('active');
	$('.moreOptions-bg').addClass('show');
	$('.moreOptions-title span').text(title);
	setTimeout(function () {
		$('.moreOptions').addClass('show');
		$('.moreOptions-bg').addClass('show2');
	}, 10);

	//   if(!elem.hasClass("active")) {
	//     elem.addClass("active");
	//     elem.closest(".options-item").siblings().find(".moreOptions-btn").removeClass("active")
	//     elem.closest(".butslinkk").find(".moreOptions").slideDown(300);
	//   } else {
	//     elem.removeClass("active");
	//     elem.closest(".butslinkk").find(".moreOptions").slideUp(300);
	//   }
	const id = $(this).attr('data-option-id');

	// Очищаем wrapper и создаём ul
	wrapper.empty();
	const ul = $('<ul></ul>'); // создаём <ul>

	optionsArr.forEach((item) => {
		item['options'].forEach((options) => {
			const arrId = item['autoId'] + '-' + options['id'];
			if (id === arrId) {
				options['moreOptions'].forEach((moreOptions) => {
					const li = $('<li></li>');
					li.text(moreOptions);
					ul.append(li); // добавляем <li> в <ul>
				});
			}
		});
	});

	wrapper.append(ul); // вставляем <ul> в wrapper
});

$('.moreOptions-close').click(function () {
	$('.moreOptions').removeClass('show');
	$('.moreOptions-bg').removeClass('show2');
	$('.moreOptions-btn').removeClass('active');
	setTimeout(function () {
		$('.moreOptions-bg').removeClass('show');
	}, 300);
});

$(document).on('mouseup', '.moreOptions-bg', function (e) {
	var div = $('.moreOptions');
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.moreOptions').removeClass('show');
		$('.moreOptions-bg').removeClass('show2');
		$('.moreOptions-btn').removeClass('active');
		setTimeout(function () {
			$('.moreOptions-bg').removeClass('show');
		}, 300);
	}
});

$(document).on('change', '.user-status__input', function () {
	let value = $(this).val();

	if (value === 'Юр.лицо' && this.checked) {
		otherDetailBlock();
	} else {
		$('.other-detail__wrap').remove();
		$('.user-status__msg').remove();
	}
});

function otherDetailBlock() {
	let msgBlock = document.createElement('div');
	msgBlock.className = 'user-status__msg mestext';
	msgBlock.innerHTML = 'Укажите пожалуйста ИНН или название организации';
	document.querySelector('.message[data-mesbot="8"] .user-status').after(msgBlock);
	let detailBlock = document.createElement('div');
	detailBlock.className = 'other-detail__wrap';
	document.querySelector('.message[data-mesbot="8"] .user-status__msg').after(detailBlock);
	let detailInput = document.createElement('input');
	detailInput.className = 'other-detail';
	detailInput.type = 'text';
	detailInput.name = 'other-detail';
	detailInput.setAttribute('required', '');
	detailInput.placeholder = 'Ваш ИНН';
	document.querySelector('.other-detail__wrap').append(detailInput);
}

$('.button-info').click(function (e) {
	e.stopPropagation();

	const id = e.target.closest('.advantage').id;

	if (id == 3) {
		return;
	}

	$('.blockpopup').removeClass('blockpopup__show');
	$('.disclaimer-bg').addClass('disclaimer-bg-show');

	const content = e.target.querySelector('.button-info__content').textContent;

	$('.disclaimer-popup__text').html(content);

	setTimeout(function () {
		$('.disclaimer-popup').addClass('disclaimer-popup-show');
	}, 20);
});

$(document).on('click', '.priceinfo', function () {
	$('.blockpopup').removeClass('blockpopup__show');
	$('.disclaimer-bg').addClass('disclaimer-bg-show');
	const disclaimerText = 'Тест';

	$('.disclaimer-popup__text').html(disclaimerText);
	setTimeout(function () {
		$('.disclaimer-popup').addClass('disclaimer-popup-show');
	}, 20);
});

$('.blockpopup__close').click(function () {
	$('.blockpopup').removeClass('blockpopup__show');
	$('.disclaimer-bg').removeClass('disclaimer-bg-show');
	setTimeout(function () {
		$('.disclaimer-popup').removeClass('disclaimer-popup-show');
	}, 300);
});

$(document).on('mouseup', '.disclaimer-bg', function (e) {
	var div = $('.disclaimer-popup');
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.blockpopup').removeClass('blockpopup__show');
		$('.disclaimer-bg').removeClass('disclaimer-bg-show');
		setTimeout(function () {
			$('.disclaimer-popup').removeClass('disclaimer-popup-show');
		}, 300);
	}
});

$(document).on('click', '.header__mobile-btn', function () {
	$('.header').fadeIn(300);
	setTimeout(() => {
		$('.header').addClass('header__show');
	}, 1);
});

// Закрытие по кнопке "close"
$(document).on('click', '.header__close', function () {
	closeHeader();
});

// Закрытие по клику вне .header-inner
$(document).on('click', function (e) {
	if (!$(e.target).closest('.header-inner').length && $('.header').hasClass('header__show')) {
		closeHeader();
	}
});

// Функция для закрытия .header
function closeHeader() {
	$('.header').removeClass('header__show');
	setTimeout(() => {
		$('.header').fadeOut(300);
	}, 1);
}

$('.title-disclaimer').click(function (e) {
	e.stopPropagation();
	$('.disclaimer-wrap').fadeIn(300).addClass('disclaimer_active');

	const id = $(this).closest('.advantage').attr('id');

	if (id === '1')
		$('.disclaimer-modal__inner').html(
			`В рамках Концепции по развитию производства и использования электрического автомобильного транспорта в Российской Федерации в 2026 г. МИНПРОМТОРГ предоставляет государственную субсидию** на приобретение электромобилей EVOLUTE в размере 35%, но не более 925 000 рублей от стоимости. Субсидия предоставляется кредитным организациям по договорам автокредитования и лизинга** в целях возмещения части затрат по таким договорам, связанных с уплатой первоначального взноса либо затрат на списание основного долга.<br>Правила предоставления субсидии кредитным организациям регламентируется Постановлением Правительства РФ от 16.04.2015 N 364 "О предоставлении из федерального бюджета субсидий российским кредитным организациям на возмещение выпадающих доходов по кредитам, выданным российскими кредитными организациями в 2015 - 2017 годах физическим лицам на приобретение автомобилей, и возмещение части затрат по кредитам, выданным в 2018 - 2023 годах физическим лицам на приобретение автомобилей" (с изменениями и дополнениями) и Постановлением Правительства РФ от 08.05.2020 N 649 "Об утверждении Правил предоставления субсидий из федерального бюджета на возмещение потерь в доходах российских лизинговых организаций при предоставлении лизингополучателю скидки по уплате авансового платежа по договорам лизинга колесных транспортных средств, заключенным в 2018 - 2023 годах" (с изменениями и дополнениями).<br>Предложение распространяется на новые автомобили Новый EVOLUTE i-JOY, Обновленный EVOLUTE i-SPACE, EVOLUTE i-SKY, EVOLUTE i-JET и действует в салонах официальных дилеров марки EVOLUTE до 31.01.2026 (включительно). Параметры программы: валюта кредита - рубли РФ; срок кредита - 12-84 мес.; сумма кредита - от 100 000 до 10 000 000 руб.)`
		);
	if (id === '2') $('.disclaimer-modal__inner').html(``);
	if (id === '3') $('.disclaimer-modal__inner').html(``);
});

$(document).on('click', '.disclaimer-modal__close', function () {
	$('.disclaimer-wrap').fadeOut(300).removeClass('disclaimer_active');
});

$(document).mouseup(function (e) {
	// событие клика по веб-документу
	var div = $('.disclaimer-modal'); // тут указываем ID элемента
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.disclaimer-wrap').removeClass('disclaimer_active').fadeOut(300);
	}
});

//чтобы по тыку конф. снять ошибку
$(document).on('change', '#agree', function () {
	if ($(this).is(':checked')) {
		$('#policyLabel').removeClass('policy-error');
		// $('.policy-error-message').hide().text('');
	}
});

//чтобы по тыку конф. снять ошибку
$(document).on('input', '.popup_name, .inpname', function () {
	$('.name_inperror').removeClass('active');
});
