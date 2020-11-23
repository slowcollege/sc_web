<template>
    <div class="container">
        <yls-footer
                :obj="{'one':'current_page jd_tab_on','two':'current_page'}"></yls-footer>

    </div>
</template>

<script type="text/ecmascript-6">

    import footer from '../../components/sc_footer/sc_footer';
    export default {
        name: 'navbar',
        data() {
            return {


            }
        },
        components: {
            'yls-footer': footer,//tab组件
        },
        methods: {

        }
    }


</script>
<style scoped>
    .box{
        width: 100%;
        height: 100%;
    }
</style>
