<template>
  <div class="vuestic-tabs">
    <div>
      <nav class="nav nav-pills va-row">
        <div
          v-for="name in names"
          :key="name"
          class="nav-item col"
          :class="{active: name === currentActive}"
          @click="setActive(name)"
        >
          <span class="nav-link">
            <h5>{{ name }}</h5>
          </span>
        </div>
      </nav>
      <div class="track">
        <div :class="underscoreClass" />
      </div>
    </div>
    <vuestic-simple-select
      v-show="false"
      v-model="currentActive"
      class="simple-select"
      :options="names"
    />
    <div class="tab-content">
      <div
        v-for="name in names"
        :key="name"
        class="tab-pane"
        :class="{active: name === currentActive}"
      >
        <slot :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
// d-none and d-lg-flex were deleted, bug will be fixed in the nearest update
export default {
  name: 'VuesticTabs',
  props: ['names'],
  data() {
    return {
      currentActive: this.names[0]
    }
  },
  computed: {
    underscoreClass() {
      return 'underscore-' + this.names.length + '-' + this.names.indexOf(this.currentActive)
    }
  },
  methods: {
    setActive(name) {
      this.currentActive = name
    }
  }
}
</script>

<style lang="scss">
.vuestic-tabs {
  background-color: white;
  .simple-select {
    padding-top: 1.5rem;
  }
  .nav {
    margin: 0;
    padding-top: 2.25rem;
    .nav-item {
      flex-grow: 1;
      text-align: center;
      padding: 0;
      .nav-link {
        padding: 0;
        color: $gray;
        transition: all .3s ease;
      }
      &:hover {
        cursor: pointer;
        .nav-link {
          color: $vue-darkest-blue;
        }
      }
      &.active {
        .nav-link {
          color: $vue-darkest-blue;
        }
      }
    }
  }
  .track {
    overflow: hidden;
    width: 100%;
    height: .125rem;
    position: relative;
    div[class^='underscore-'] {
      background-color: $brand-primary;
      height: .125rem;
      position: absolute;
    }
    $koeff: 0.8;
    @for $all from 1 through 10 {
      $width: 1/$all;
      div[class^='underscore-#{$all}'] {
        width: $width * $koeff * 100%;
        transition: left .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      @for $place from 0 through $all {
        .underscore-#{$all}-#{$place} {
          left: ($place + (1 - $koeff)/2) * $width * 100%;
        }
      }
    }
  }
  .tab-content {
    padding-bottom: $tab-content-pb;
    padding-top: $tab-content-pt;
    > .tab-pane {
      width: 100%
    }
  }
}
</style>
