<template>
    <div class="alert">
        <h2
          class="alert__title">{{ title }} <span>x</span></h2>
    </div>
</template>

<script>
    export default{
        data: function(){
            return{
                title:'Alert'
            }
        },

        props: ['type'],

        methods: {

        }
    }
</script>