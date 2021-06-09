<template>
  <div class="container">
    <input
      type="text"
      v-bind:value="name"
      v-on:input="name = $event.target.value"
    >
    <hr>
    <!--   transition opacity animation uses classes .slide-*     -->

    <transition name="slide">
      <h2 v-show="showHeader"
          class="alert alert-success"
      >
        Hello, {{ name }}!
      </h2>
    </transition>
    <button class="btn"
            v-on:click="showHeader = !showHeader"
            v-bind:class="btnClass"
            ref="btnShowHide"
            id="btnShowHide"
    >
      {{ btnText }}
    </button>
    <hr>
    <h2> Ваш доход: {{ totalSum }}</h2>
    <hr>
    <app-progress
      v-bind:val="nums.length"
      v-bind:max="maxNumbers"
    >
    </app-progress>
    <hr>
    <h2>Ваша удача</h2>
    <app-progress
      v-bind:val="totalSum"
      v-bind:max="maxNumbers * 5"
    >
    </app-progress>
    <hr>
    <input type="text" name="number" id="number"
           v-model="numCaption" placeholder="Название"
    >
    <button class="btn btn-success"
            v-on:click="addLine"
            v-bind:disabled="done"
            id="btnRandom"
    >
      Добавить рандом
    </button>
    <ul id="listRandom" class="list-group">
      <li class="list-group-item"
          v-for="log in logs"
      >
        {{ log }}
      </li>
    </ul>
  </div>
</template>

<script>
import progress from './components/progress'

export default {
  data() {
    return {
      name: `Elia`,
      showHeader: true,
      numCaption: null,
      logs: [],
      nums: [],
      maxNumbers: 10
    }
  },
  /* Methods is called everytime if something changed in template
  in which these methods is included */
  methods: {
    addLine() {
      const rnd = Math.floor(Math.random() * 11) - 5
      this.logs.push(`${this.numCaption ? this.numCaption : ''} ${rnd}`)
      this.nums.push(rnd)
      this.numCaption = null
    }
  },
  /* Computed properties called only if they values is changed */
  computed: {
    totalSum() {
      return this.nums.reduce((s, i) => s + i, 0)
    },
    btnText() {
      return !this.showHeader ? 'Показать' : 'Скрыть'
    },
    btnClass() {
      return !this.showHeader ? 'btn-primary' : 'btn-danger'
    },
    done() {
      return this.nums.length >= this.maxNumbers
    }
  },

  components: {
    AppProgress: progress
  }
}
</script>

<style scoped>
.container {
  margin: 5px 5px 5px;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  transition: opacity 0.5s;
}

.slide-leave-active {
  transition: opacity 0.5s;
}

.slide-leave-to {
  opacity: 0;
}
</style>
