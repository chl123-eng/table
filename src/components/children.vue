<template>
    <transition>
        <div id="div2">
            <button class="close-btn">关闭遮罩</button>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'children',
    props: ["flag"],
    methods: {
        // showBox() {
        //     var winHeight = document.documentElement.clientHeight
        //     var div_one = document.getElementById("div1");
        //     div_one.style.height = winHeight;
        //     div_one.addClass("coverAniamtion")

        // }
    }

};
</script>

<style lang="scss">
#div1 {
    width: 100%;
    height: 100px;
    background: red;
    position: fixed;
    top: 0;
    left: 0;
    /* transform: scale(0,0); */
}

#div2 {
    width: 300px;
    height: 200px;
    background: red;
    top: 50%;
    left: 50%;

    margin-top: -100px;
    margin-left: -150px;
}

.coverAniamtion {
    animation: name 2s both;
}

@keyframes name {
    from{
        transform: scale(0,0)
    }
    to {
        transform: scale(1,1);
    }
}
</style>
