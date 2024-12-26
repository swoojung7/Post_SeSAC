<template>
    <div class="counter">
        <span class="count-display" :style="count_color">{{ count }}</span>
        <div class="pill-buttons">
            <b-button pill variant="danger" class="pill-button" @click="change_count(-10)">-10</b-button>
            <b-button pill variant="outline-danger" class="pill-button" @click="change_count(-1)">-1</b-button>
            <b-button pill class="pill-button" @click="reset_count()">Reset</b-button>
            <b-button pill variant="outline-success" class="pill-button" @click="change_count(+1)">+1</b-button>
            <b-button pill variant="success" class="pill-button" @click="change_count(+10)">+10</b-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0
        };
    },
    methods: {
        change_count(amount) {
            this.count += amount;
        },
        reset_count() {
            this.count = 0;
        }
    },
    computed: {
        count_color() {
            let color = 'black';
            if (this.count < 0) {
                color = `rgb(${Math.min(200, -this.count * 5)}, 0, 0)`;
            } else if (this.count > 0) {
                color = `rgb(0, ${Math.min(200, this.count * 5)}, 0)`;
            }
            return { color };
        }
    }
};
</script>

<style>
.counter {
    margin-top: 20px;
}

.pill-buttons {
    margin-top: 20px;
}

.pill-button {
    width: 100px;
    margin-right: 10px;
}

.pill-button:last-child {
    margin-right: 0;
}

.count-display {
    font-size: 40px;
    font-weight: bold;
}
</style>