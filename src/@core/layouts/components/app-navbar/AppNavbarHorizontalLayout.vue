<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>
    <!-- Right Col -->
    <b-navbar-nav class="nav align-items-center ml-auto">
      <Signin />
      <cart-dropdown />
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BLink, BNavbarNav,
} from 'bootstrap-vue'
import Signin from './components/Signin.vue'
import CartDropdown from './components/CartDropdown.vue'

export default {
  components: {
    BLink,
    Signin,
    // Navbar Components
    BNavbarNav,
    CartDropdown,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },

}
</script>
