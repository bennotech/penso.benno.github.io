<template>
  <div>
    <div id="navbar">
      <div class="benno-container xl">

        <router-link to="/" class="title pull-left">
          Penso
        </router-link>

        <div class="pull-right" style="padding-top: 14px;">
          <div class="item dropdown">
            <a class="item-btn" href="#ourservices">
              Our Services
            </a>
          </div>
          <div class="item dropdown">
            <a class="item-btn" href="#howitworks">
              How It Works
            </a>
          </div>
          <div class="item dropdown">
            <a class="item-btn" href="#about">
              About
            </a>
          </div>
          <div class="item dropdown">
            <a class="item-btn outlined" href="#signup">
              Penso
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'benno-navbarnew',
  computed: {
  },
  data () {
    return {
      showDropdown: false,
      scrollPosition: null
    }
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#navbar {
  position: fixed;
  width: 100%;
  background-color: #f6f8fb;
  z-index: 99;
  height: 100px;
  padding: 10px 0;
}

.title {
  display: inline-block;
  font-size: 24px;
  font-weight: 600;
  padding: 26px 0 0;
  color: #313131;
}

.title:hover {
  text-decoration: none;
}

#chron-home {
  color: #000;
  background-color: #f6f8fb;
  padding: 150px 0 100px;
  height: 375px;
}

.section {
  padding: 100px 0 25px;
}
.section.top {
  padding: 0;
}

p {
  font-family: Gibson, sans-serif;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  color: #222;
  line-height: 26px;
  display: block;
  margin: 0px auto 15px;
  padding: 0px;
}

h2 {
  font-family: Gibson, sans-serif;
  font-style: normal;
  font-weight: 600;
  color: rgba(0,0,0,.15);
  margin: 30px auto;
  font-size: 72px;
  line-height: 72px;
}


.item {
  font-family: Gibson, sans-serif;
  display: inline-block;
  box-sizing: border-box;
  z-index: 2;
  height: 100%;
  vertical-align: middle;
  font-weight: 500;
  margin: 20px;
}


.item-btn {
  font-family: Gibson, sans-serif;
  position: relative;
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #313131;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0;
  background: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  overflow: hidden;
}

.item-btn:hover {
  text-decoration: none;
  color: rgba(254, 68, 80, 1);
}

.item-btn.outlined {
  background: rgba(0,0,0,.05);
  border-radius: 24px;
  padding: 16px 20px;
  cursor: pointer;
}
.item-btn.outlined:hover {
  background: rgba(254, 68, 80, 1);
  color: #fff;
}
</style>
