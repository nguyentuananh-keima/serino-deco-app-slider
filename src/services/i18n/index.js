import Vue from 'vue';
import VueI18Next from 'vue-i18n';

Vue.use(VueI18Next);

const messages = {};
const defaultLanguage = 'en';

function importAllTranslate(context) {
  context.keys().forEach((file) => {
    const key = file.split('/')[1];
    messages[key] = context(file);
  });
}

importAllTranslate(require.context('../../../public/locales', true, /\.json$/));

function getLanguage() {
  const html = document.querySelector('html');
  const hrefLang = html.getAttribute('hreflang');
  if (hrefLang && messages[hrefLang]) return hrefLang;
  if (html.lang && messages[html.lang]) return html.lang;
  return defaultLanguage;
}

const i18n = new VueI18Next({
  locale: getLanguage(),
  messages,
  fallbackLng: defaultLanguage,
  keySeparator: false,
});

export default i18n;
