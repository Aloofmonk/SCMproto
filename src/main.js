import { createApp } from 'vue'
import App from './App.vue'
import LazyYoutube from "vue-lazytube";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faMagnifyingGlass, faChevronRight, faCaretDown, faCircleInfo);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).component("LazyYoutube", LazyYoutube).mount("#app");