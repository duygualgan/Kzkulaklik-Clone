import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore( {
    id: 'mainStore',
    state() {
        return {
            btn1: 'Üye Ol',
            btn2 : 'Giriş Yap',
        }
    }
});






