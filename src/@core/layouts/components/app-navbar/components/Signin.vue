<template>
  <li class="nav-item nav-signin">
    <router-link to="/login">
      SignIn
      <feather-icon
        icon="LogInIcon"
        size="20"
      />
    </router-link>
  </li>
</template>
<script>
export default {
  name: 'Signin',
}
</script>

<style lang="scss" scoped>
.nav-signin{
  padding: 0 15px;
  a{
    color: #666;
    font-size: 16px;
    font-weight: 500;
    &:hover{
      color: #796ef1;
    }
    svg{
      margin-right: 0;
      color: #796ef1;
    }
  }
}
</style>
