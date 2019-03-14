<template>
  <div class="demo-container">
    <div class="demo-container__item">
      anchor position
      <div class="anchor">
        bottom right
        <vuestic-popup
          v-model="anchorBottomRight"
          anchor="bottom right"
        >
          bottom right
        </vuestic-popup>
      </div>
      <div class="anchor">
        center middle
        <vuestic-popup
          v-model="anchorCenterMiddle"
          anchor="center middle"
        >
          center middle
        </vuestic-popup>
      </div>
      <div class="anchor">
        top left
        <vuestic-popup
          v-model="anchorTopLeft"
          anchor="top left"
        >
          top left
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      self position
      <div class="anchor">
        bottom right
        <vuestic-popup
          v-model="selfBottomRight"
          self="bottom right"
        >
          bottom right
        </vuestic-popup>
      </div>
      <div class="anchor">
        center middle
        <vuestic-popup
          v-model="selfCenterMiddle"
          self="center middle"
        >
          center middle
        </vuestic-popup>
      </div>
      <div class="anchor">
        top left
        <vuestic-popup
          v-model="selfTopLeft"
          self="top left"
        >
          top left
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      anchor click
      <div class="anchor">
        true
        <vuestic-popup
          v-model="anchorClickTrue"
          :anchor-click="true"
        >
          anchor click true
        </vuestic-popup>
      </div>
      <div class="anchor">
        false
        <vuestic-popup
          v-model="anchorClickFalse"
          :anchor-click="false"
        >
          anchor click false
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      no focus
      <div class="anchor">
        true
        <input type="text">
        <vuestic-popup
          v-model="noFocusTrue"
          :no-focus="true"
        >
          <input type="text" placeholder="no focus">
        </vuestic-popup>
      </div>
      <div class="anchor">
        false
        <input type="text">
        <vuestic-popup
          v-model="noFocusFalse"
          :no-focus="false"
        >
          <input type="text" placeholder="no focus">
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      no refocus (test doesn't work)
      <div class="anchor">
        true
        <vuestic-popup
          v-model="noRefocusTrue"
          :no-refocus="true"
        >
          <input type="text" placeholder="no refocus">
        </vuestic-popup>
      </div>
      <div class="anchor">
        false
        <vuestic-popup
          v-model="noRefocusFalse"
          :no-refocus="false"
        >
          <input type="text" placeholder="no refocus">
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      max height
      <div class="anchor">
        true
        <vuestic-popup
          v-model="maxHeightUnset"
        >
          <p v-for="n in 30" :key="n">
            {{ n }} item
          </p>
        </vuestic-popup>
      </div>
      <div class="anchor">
        true
        <vuestic-popup
          v-model="maxHeightSet"
          max-height="100px"
        >
          <p v-for="n in 30" :key="n">
            {{ n }} item
          </p>
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      touch position
      <div class="anchor">
        true
        <vuestic-popup
          v-model="touchPosition"
          touch-position
        >
          disable
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      fit
      <div class="anchor">
        true
        <vuestic-popup
          v-model="fitUnset"
          :fit="false"
        >
          <p v-for="n in 4" :key="n">
            {{ n }}
          </p>
        </vuestic-popup>
      </div>
      <div class="anchor">
        true
        <vuestic-popup
          v-model="fitSet"
          :fit="true"
        >
          <p v-for="n in 4" :key="n">
            {{ n }}
          </p>
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      disable
      <div class="anchor">
        true
        <vuestic-popup
          v-model="disable"
          disable
        >
          disable
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      offset
      <div class="anchor">
        true
        <vuestic-popup
          v-model="offset"
          :offset="[14, -114]"
        >
          offset
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      cover
      <div class="anchor">
        true
        <vuestic-popup
          v-model="cover"
          cover
        >
          cover cover cover cover cover
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      persistent
      <div class="anchor">
        true
        <vuestic-popup
          v-model="persistent"
          persistent
        >
          persistent
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      keep on screen
      <div class="anchor">
        true
        <vuestic-popup
          v-model="keepOnScreen"
          keep-on-screen
        >
          keep on screen
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      Event test {{ eventTest }}
      <button @click="$refs.eventTest.show('eventTest text')">
        Show
      </button>
      <button @click="$refs.eventTest.hide('eventTest text')">
        Hide
      </button>
      <button @click="$refs.eventTest.toggle('eventTest text')">
        Toggle
      </button>
      <div class="anchor">
        true
        <vuestic-popup
          ref="eventTest"
          v-model="eventTest"
          persistent
          @show="event => log('show event', event)"
          @hide="event => log('hide event', event)"
        >
          keep on screen
        </vuestic-popup>
      </div>
    </div>
    <div class="demo-container__item">
      close overlay
      <div class="anchor">
        true
        <vuestic-popup
          v-model="closeOverlay"
        >
          <test-component v-close-overlay>
            Close
          </test-component>
        </vuestic-popup>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticPopup from './VuesticPopup.vue'
import { logMixin } from '../../mixins/logMixin'
import { closeOverlay } from '../../directives/closeOverlay'

export default {
  directives: {
    'close-overlay': closeOverlay
  },
  components: {
    VuesticPopup,
    TestComponent: {
      render(h) {
        return h('div', 'Test component')
      }
    }
  },
  mixins: [logMixin],
  data() {
    return {
      anchorBottomRight: false,
      anchorCenterMiddle: false,
      anchorTopLeft: false,
      selfBottomRight: false,
      selfCenterMiddle: false,
      selfTopLeft: false,
      anchorClickTrue: false,
      anchorClickFalse: false,
      noFocusTrue: false,
      noFocusFalse: false,
      noRefocusTrue: false,
      noRefocusFalse: false,
      maxHeightSet: false,
      maxHeightUnset: false,
      touchPosition: false,
      fitUnset: false,
      fitSet: false,
      disable: false,
      offset: false,
      cover: false,
      persistent: false,
      keepOnScreen: false,
      closeOverlay: false,
      eventTest: false
    }
  }
}
</script>

<style scoped>
.anchor {
  width: 50px;
  height: 50px;
  border: solid 1px red;
  background-color: #4ae387;
}
</style>
