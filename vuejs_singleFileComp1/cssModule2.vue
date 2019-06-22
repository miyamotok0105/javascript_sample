<template>
    <div>
        <p :class="a.red">
            red
        </p>
        <p :class="b.blue">
            blue
        </p>
    </div>
</template>

<script>
    export default {
        created () {

        }
    }
</script>

<style module="a">
    .red {
        color: red;
    }
    .bold {
        font-weight: bold;
    }
</style>

<style module="b">
    .blue {
        color: blue;
    }
    .bold {
        font-weight: bold;
    }
</style>
