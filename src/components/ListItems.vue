<script setup>
    import { defineProps } from 'vue'
    const props = defineProps(['items', 'remove'])
</script>

<template>
    <div class="header">
        <h4>LIST</h4>
    </div>
    <div class="body" v-if="props.items.length > 0">
        <ul v-bind:key="todo.date" v-for="todo in props.items">
            <li class="scale-in-center">
                <div class="left">{{todo.radio}}</div>
                <div class="right">
                    <p>{{todo.text}}</p>
                    <div class="btn">
                        <button class="remove" @click="() => props.remove(todo)">Delete</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="body" v-else>
        <p>There are no items yet.</p>
    </div>
</template>

<style scoped>
    .body, .header {
        width: 500px;
        margin: 0 auto;
    }

    .body p {
        margin-top: 10px;
        background-color: transparent;
        text-align: center;
        font-weight: bold;
    }
    
    .header {
        background-color: rgba(0, 255, 255, 0.521);
        height: 50px;
        font-size: 2rem;
        line-height: 50px;
    }
    .header h4 {
        text-align: center;
        background: transparent;
        margin-bottom: 8px;
        letter-spacing: 4px;
    }
    .body { 
        height: 200px;
        backdrop-filter: blur(20px);
        padding: 20px;
        overflow-y: scroll;
    }

    .body ul {
        background-color: transparent;
    }

    .body ul li {
        margin-bottom: 10px;
        height: 40px;
        display: grid;
        grid-template-columns: 15% 85%;
    }

    .body ul li .left {
        background-color: rgb(0, 255, 115);
        color: black;
        font-weight: bold;
        display: grid;
        place-content: center;
    }

    .body ul li .right {
        padding: 5px 10px;
        display: grid;
        grid-template-columns: 80% 20%;
        place-content: center;
    }

    .body ul li .right p {
        text-align: start;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .body ul li .right .btn {
        display: flex;
        justify-content: end;
    }

    .body ul li .right .btn .remove {
        background-color: transparent;
        border: 2px solid aqua;
        padding: 2px 5px;
        cursor: pointer;
        transition: .3s ease;
        font-weight: bold;
    }

    .body ul li .right .btn .remove:hover {
        background-color: aqua;
        color: black
    }

    .scale-in-center{animation:scale-in-center .5s cubic-bezier(.25,.46,.45,.94) both}

    @keyframes scale-in-center{
        0%{ transform:scale(0);opacity:1 }
        100%{ transform:scale(1);opacity:1 }
    }

    @media screen and (max-width: 650px) {
        .body, .header {
            width: calc(100% - 40px);
            margin: 0 20px;
        }

        .body {
            padding: 5px;
        }

         .body ul li {
            margin: 10px 0;
            display: grid;
            grid-template-columns: 15% 85%;
        }

        .body ul li .right {
            grid-template-columns: 70% 30%;
        }

        .body ul li .right p {
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    
</style>