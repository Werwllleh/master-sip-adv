<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="<?= $config['SEO_DESCRIPTION'] ?>">
    <meta name="keywords" content="Ангарские терема">
    <link rel="icon" href="./img/favicon.png" type="image/x-icon">

    <title><?= $config['TITLE'] ?></title>

    <link href="css/style.css?<?= filemtime($_SERVER['DOCUMENT_ROOT'] . "/css/style.css"); ?>" rel="stylesheet" type="text/css" />
    <link href="css/stylemobile.css?<?= filemtime($_SERVER['DOCUMENT_ROOT'] . "/css/stylemobile.css"); ?>" rel="stylesheet" type="text/css" />

</head>

<body>

    <div class="fixed-crossbrowser-background"></div>
    <!-- <div class="gradient"></div> -->

    <div class="header__mobile">
        <div class="header__mobile-logo">
            <img src="./img/logo.svg" alt="Ангарские терема-logo">
        </div>
        <a class="header__mobile-tel" href="tel:<?= $config['PHONE'][0] ?>" class="header__mobile-tel">
            <?= $config['PHONE'][1] ?>
        </a>
        <button class="header__mobile-btn"><span></span></button>
    </div>

    <div class="header logophone">
        <div class="header-inner">
            <button class="header__close">
                <img src="./img/close-menu.svg" alt="">
            </button>

            <div class="main mainshow">
                <div class="header-wrapper">
                    <div class="logogrid">
                        <div class="logo">
                            <div class="logo-home">
                                <img src="./img/logo.svg" alt="Ангарские терема-logo">
                            </div>
                        </div>
                        <div class="logotext"><?= $config['HEADER_DEALERSHIP'] ?></div>
                    </div>
                    <div class="phone phone_mw"><a href="tel:<?= $config['PHONE'][0] ?>"><?= $config['PHONE'][1] ?></a><span><?= $config['ADDRESS'] ?></span>
                    </div>
                    <div class="policy-mob">
                        <a href="https://angarskie-terema.ru/privacy" target="_blank">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="main mainshow">
        <div class="sale">
            <h1><?= $config['H1'] ?></h1>
            <div class="title_descr"><?= $config['DESCRIPTION'] ?></div>
            <!-- <span class="priceinfo"></span> -->
        </div>
        <div class="chat">
            <div class="chatheader">
                <div class="advantages">
                    <div class="advantage" id="1">
                        <div class="advantageimg ai1"></div>
                        <div class="advantagetext">
                            <?= $config['ADVANTAGES'][0] ?>
                            <span class="title-disclaimer"></span>
                        </div>
                    </div>
                    <div class="advantage" id="2">
                        <div class="advantageimg ai2"></div>
                        <div class="advantagetext">
                            <?= $config['ADVANTAGES'][1] ?>
                        </div>
                    </div>
                    <div class="advantage" id="3">
                        <div class="advantageimg ai3"></div>
                        <div class="advantagetext">
                            <?= $config['ADVANTAGES'][2] ?><br>Бесплатные парковки
                        </div>
                    </div>
                </div>
            </div>
            <div class="purchase">
                <div class="purchase__btn"></div>
            </div>
            <div class="chatcont"></div>
        </div>
        <div class="fixed__bot">
            <div class="fixed__botitem">
                <div class="mesimg"></div>
                <div class="bot__stats">
                    <div class="bot__name">Вера</div>
                    <div class="bot__post">онлайн-консультант</div>
                </div>
                <a class="fixed__phone" href="tel:<?= $config['PHONE'][0] ?>">
                    <div class="fixed__btn">
                        <span class="fixed__text">Позвонить:</span>
                        <span class="fixed__ph phone_mw"><?= $config['PHONE'][1] ?></span>
                    </div>
                </a>
            </div>
        </div>

        <div class="blocksuccess">
            <div class="icosuccess"></div>
            <div class="smshead">Спасибо за заявку!</div>
            <!-- <div class="smsdesc">Через <span class="time_redir">5</span>&nbsp;секунд отправим Вам: Каталог наших премиальных бань и&nbsp;домов из&nbsp;кедра</div> -->
            <!-- <div class="blockbutton"> -->
            <!-- <a href="https://angarskie-terema.ru/projecty" class="primary-btn btn_redir" target="_blank">Получить каталог</a> -->
        </div>

        <a href="https://chatlanding.ru/?utm_source=referral&amp;utm_medium=clients&amp;utm_campaign=<?= $url; ?>" target="_blank">
            <div class="copyright">
                <span>
                    <b>MEDIA</b>WORKS
                </span>
            </div>
        </a>
    </div>
    </div>
    <div class="moreOptions-bg">
        <div class="moreOptions">
            <div class="moreOptions-close"></div>
            <div class="moreOptions-title"><span></span></div>
            <div class="moreOptions-list"></div>
        </div>
    </div>
    <div class="blockpopup__bg">
        <div class="blockpopup">
            <div class="blockpopup__close"></div>
            <div class="blockpopup__add chatheader">
                <div class="blockpopup__add-img"></div>
                <div class="blockpopup__add-text">
                    <div class="konsul__name">Вера</div>
                    <div class="konsul_pos">Онлайн-консультант Ангарские терема</div>
                </div>
            </div>
            <div class="blockpopup__chat">
                <div class="msgpopup"></div>
                <div class="blockpopup__chat-msg msgpopup mestext">Здравствуйте!</br> Напишите свой номер и я подробно
                    расскажу обо всех доступных преимуществах от Ангарские терема.</div>
                <div class="blockpopup__chat-msg mestext msgPurchase">Здравствуйте!</br> Напишите свой номер и я подробно
                    расскажу обо всех доступных преимуществах от Ангарские терема.</div>
                <div class="msgpopup butslink">
                    <input class="inptext popup_name" type="text" placeholder="Ваше имя">
                    <input class="inptext popup_phone" type="tel" placeholder="+7 (___) ___-__-__">
                    <div class="name_inperror"">Нецензурное слово! Введите имя.</div>
                    <div class=" divbutphone"><button class="butpopup">Отправить</button>
                        <label class="cash1" style="margin-top:10px">
                            <input class="checkbox__choose" id="agree" type="checkbox" checked>
                            <span class="agreement-policy" id="policyLabel">
                                Даю <a href="https://angarskie-terema.ru/consent_to_data_processing" target="_blank">согласие</a> на обработку персональных данных
                            </span>
                            <div class="policy-error-message" style="display:none;"></div>
                        </label>
                        <div class="error errorphone"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="popup__thanks-bg">
        <div class="popup__thanks">
            <div class="blockpopup__close"></div>
            <div class="popup__thanks-img icosuccess"></div>
            <div class="popup__thanks-title smshead">Спасибо!</div>
            <div class="popup__thanks-desc smsdesc">Ваша заявка принята <br> Мы скоро свяжемся с Вами.</div>
        </div>
    </div>

    <div class="disclaimer-bg">
        <div class="disclaimer-popup">
            <div class="blockpopup__close"></div>
            <div class="disclaimer-popup__text">
            </div>
        </div>
    </div>

    <div class="disclaimer-wrap">
        <div class="disclaimer-inner">
            <div class="disclaimer-modal">
                <div class="disclaimer-modal__close"></div>
                <div class="disclaimer-modal__inner"></div>
            </div>
        </div>
    </div>


    <div class="salon__address">
        <?php for ($i = 0; $i < count($config['COMPANY_INFO']); $i++) : ?>
            <?php if (isset($config['COMPANY_INFO'][$i])) : ?>
                <?= $config['COMPANY_INFO'][$i] ?><br>
            <?php endif; ?>
        <?php endfor; ?>
        <a href="https://angarskie-terema.ru/privacy" target="_blank">Политика конфиденциальности</a>
    </div>


    <div class="cookie-block" id="cookieBlock">
        <button class="cookie-close" aria-label="Закрыть"><img src="./img/close-cookie.svg" alt="Закрыть"></button>
        <div class="cookie-text">
            Мы используем cookie согласно <a href="https://angarskie-terema.ru/consent_to_data_processing" target="_blank">политике</a>. Управлять cookie можно в настройках браузера.
            <!-- <a class="cookie-link">Подробнее</a> -->
        </div>
        <button class="cookie-ok">Принять</button>
    </div>

    <script>
        window.addEventListener('DOMContentLoaded', function() {
            const cookieBlock = document.getElementById('cookieBlock');
            if (localStorage.getItem('cookieAccepted') === 'true') {
                cookieBlock.style.display = 'none';
            } else {
                setTimeout(function() {
                    cookieBlock.classList.add('cookie-visible');
                }, 500);
            }
            document.querySelector('.cookie-ok').onclick = function() {
                cookieBlock.style.display = 'none';
                localStorage.setItem('cookieAccepted', 'true');
            };
            document.querySelector('.cookie-close').onclick = function() {
                cookieBlock.style.display = 'none';
            };
        });
    </script>


    <div class="widthwin"></div>

    <div class="step" data="token"><?= $site['token']; ?></div>
    <div class="step" data="build"></div>
    <div class="step" data="square"></div>
    <div class="step" data="house"></div>

    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery.inputmask.bundle.min.js"></script>
    <script type="text/javascript" src="js/chat.js?<?= filemtime($_SERVER['DOCUMENT_ROOT'] . "/js/chat.js"); ?>">
    </script>
    <script type="text/javascript" src="js/script1.js?<?= filemtime($_SERVER['DOCUMENT_ROOT'] . "/js/script1.js"); ?>">
    </script>

    <form method="post" action="">
        <input type="hidden" name="mw_u_type" value="">
        <input type="hidden" name="mw_u_source" value="" />
        <input type="hidden" name="mw_u_medium" value="" />
        <input type="hidden" name="mw_u_campaign" value="" />
        <input type="hidden" name="mw_u_content" value="" />
        <input type="hidden" name="mw_u_term" value="" />
        <input type="hidden" name="mw_u_entrance_point" value="" />
        <input type="hidden" name="mw_u_visits" value="" />
        <input type="hidden" name="mw_u_pages" value="" />
        <input type="hidden" name="mw_u_data" value="" />
        <input type="hidden" name="mw_u_current_url" value="" />
        <input type="hidden" name="mw_u_referer" value="" />
        <input type="hidden" name="mw_u_ip" value="<? echo getIP(); ?>" />
        <input type="hidden" name="mw_u_user_agent" value="" />
        <input type="hidden" name="mw_u_gid" value="" />
        <input type="hidden" name="mw_u_yid" value="" />
        <input type="hidden" name="mw_u_roistat" value="" />
        <input type="hidden" name="mw_u_ct" value="" />
        <input type="hidden" name="city_ip" value="<?= $region->city->name_ru; ?>" />
        <input type="hidden" name="region_ip" value="<?= $region->region->name_ru; ?>" />
        <input type="hidden" name="country_ip" value="<?= $region->country->name_ru; ?>" />
    </form>

</body>

</html>