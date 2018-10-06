<template>
  <div>
    <header>
      <slot name="header"/>
    </header>
    <aside>
      <slot name="sidebar"/>
    </aside>
    <main>
      <slot/>
    </main>
    <footer>
      <slot name="footer"/>
    </footer>
  </div>
</template>

<script>
export default {
  name: `DefaultLayout`,
  data() {
    return {
      sidebarOpen: false,
    }
  },
  methods: {
    openSidebar() {
      this.sidebarOpen = true
    },
    closeSidebar() {
      this.sidebarOpen = false
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
  },
}
</script>
