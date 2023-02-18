import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import data from './data.json';

let messages = {
  zh: {
    open:'打开网站',
    themeDark:'暗色',
    themeLight:'亮色',
  },
  en: {
    open:'GO TO',
    themeDark:'Dark',
    themeLight:'Light',
  },
};

data.forEach(element => {
  messages.zh[element['网站名称']] = {
    link: element['网址'],
    title: element['网站名称'],
    desc: element['网站简介']
  };
  messages.en[element['网站名称']] = {
    link: element['网址'],
    title: element['网站名称 en'],
    desc: element['网站简介 en']
  };
});

const i18n = createI18n({
  locale: navigator.language, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages,
});

createApp(App).use(i18n).mount('body');
