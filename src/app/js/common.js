/**
 * Парсит UTM-метки из URL и сохраняет в cookie на 30 дней
 */
function saveUtmToCookie() {
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const cookieMaxAge = 30 * 24 * 60 * 60; // 30 дней
  const hasUtm = utmKeys.some(key => params.has(key));

  if (!hasUtm) return;

  utmKeys.forEach(key => {
    const value = params.get(key);
    if (value) {
      document.cookie = `${key}=${encodeURIComponent(value)}; path=/; max-age=${cookieMaxAge}; SameSite=Lax`;
    }
  });
}

/**
 * Получает UTM-метки из cookie
 * @returns {Object|null} Объект с UTM-метками или null, если их нет
 */
function getUtmFromCookies() {
  const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
    const [name, ...valueParts] = cookie.split('=');
    acc[name] = decodeURIComponent(valueParts.join('='));
    return acc;
  }, {});

  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const utmData = {};
  let hasData = false;

  utmKeys.forEach(key => {
    if (cookies[key]) {
      utmData[key] = cookies[key];
      hasData = true;
    }
  });

  return hasData ? utmData : null;
}

// Инициализация UTM-меток при загрузке страницы
saveUtmToCookie();
