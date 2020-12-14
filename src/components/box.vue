<template>
  <div class="father">
        <button
            v-for="tab in tabs"
            v-bind:key="tab"
            v-bind:class="['tab-button', { active: currentTab === tab }]"
            v-on:click="currentTab = tab"
        >
            {{ tab }}
        </button>
        <component v-bind:is="currentTabComponent"></component>
  </div>
</template>
<script>
import tabHome from './tabHome'
import tabPosts from './tabPosts'
import tabArchive from './tabArchive'
export default {
    components: {
        tabHome,
        tabPosts,
        tabArchive
    },
    data () {
        return {
            currentTab: "Home",
            tabs: ["Home", "Posts", "Archive"]
        }
    },
    computed: {
           currentTabComponent: function() {
            return "tab-" + this.currentTab.toLowerCase();
          }
        }
}
</script>
