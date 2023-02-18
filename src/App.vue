<script setup>
import { ref } from 'vue';
import json from './data.json';
import { darkTheme } from 'naive-ui';
// import { t } from 'vue-i18n';
console.log(json);
var a = ref(json);
var theme = ref(null);

function switchTheme() {
  (theme.value === null) ? theme.value = darkTheme : theme.value = null;
}

function openWeb(link) {
  window.open(link);
}

function switchLang(lang) {
  (lang.slice(0, 1) === 'zh') ? lang = 'en' : lang = 'zh';
}
</script>

<template>
  <n-config-provider :theme="theme">
    <n-layout>
      <n-layout-header>
        <n-space justify="space-between" align="end" style="padding: 16px;">
          <n-space>
            <n-gradient-text type="success" :size="24">
              CNection 资源推荐
            </n-gradient-text>
          </n-space>
          <n-space>
            <n-button quaternary @click="($i18n.locale.slice(0, 2) === 'zh') ? $i18n.locale = 'en' : $i18n.locale = 'zh'">
              {{ ($i18n.locale.slice(0, 2) === 'zh') ? 'English' : '简体中文' }}
            </n-button>
            <n-button quaternary @click="switchTheme()">{{ (theme === null) ? $t('themeDark') : $t('themeLight') }}</n-button>
          </n-space>
        </n-space>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px; display:flex; flex-flow: row wrap;">
        <n-card class="cards" v-for="item in a">
          <template #header>{{ $t(item['网站名称'] + '.title') }}</template>
          {{ $t(item['网站名称'] + '.desc') }}
          <template #footer>
            <n-button style="float: right;" quaternary type="primary" @click="openWeb(item['网址'])">{{$t('open')}}</n-button>
          </template>
        </n-card>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.cards {
  flex: 1 1 340px;
  margin: 16px 8px 0 8px
}
</style>
