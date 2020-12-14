<template>
  <div class="blog-post">
        <button
            v-for="tab in tabs"
            v-bind:key="tab"
            v-bind:class="['tab-button', { active: currentTab === tab }]"
            v-on:click="currentTab = tab"
        >
        {{ tab }}
      </button>
    </div>
</template>
<script>
export default {
    props: ['value'],
    data () {
        return {}
    }
}
</script>