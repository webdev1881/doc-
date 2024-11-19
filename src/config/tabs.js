import HtmlContent from '../views/Html.vue'
import CssContent from '../views/Css.vue'
import TypeScriptContent from '../views/TypeScript.vue'
import JS from '@/views/JS.vue'
import JSob from '@/views/JSob.vue'
import JS_Promises from '@/views/JS_Promises.vue'
import REACT from '@/views/REACT.vue'
import JSstring from '@/views/JSstring.vue'
import GIT from '@/views/GIT.vue'
import Br_storage from '@/views/Br_storage.vue'

export const tabs = [
    // {id: 'hr',title: '————————————'},
    {
        id: 'html',
        title: 'HTML',
        component: HtmlContent,
    },
    {
        id: 'css',
        title: 'CSS',
        component: CssContent,
    },
    { id: Math.random().toString(), title: '————————————' },
    {
        id: 'Br_storage',
        title: 'Browser storage',
        component: Br_storage,
    },
    { id: Math.random().toString(), title: '————————————' },
    {
        id: 'typescript',
        title: 'TypeScript',
        component: TypeScriptContent,
    },
    { id: Math.random().toString(), title: '————————————' },
    {
        id: 'js',
        title: 'JS - переменные',
        component: JS,
    },
    {
        id: 'JSstring',
        title: 'JS - Строка (методы)',
        component: JSstring,
    },
    {
        id: 'jsob',
        title: 'JS - Обьекты (методы)',
        component: JSob,
    },
    {
        id: 'jsPRO',
        title: 'JS - Promises',
        component: JS_Promises,
    },
    {
        id: 'REACT',
        title: 'REACT - ',
        component: REACT,
    },
    { id: Math.random().toString(), title: '————————————' },
    {
        id: 'GIT',
        title: 'GIT',
        component: GIT,
    },
]