<template>
  <div>

    <div id="chron-body">
      <div class="section" id="ourservices">
        <div class="row">
          <div class="col-8 mx-auto text-left">
            <h3>
              OUR Penso
            </h3>
            <h6>
              We turn family stories and legends
              into beautiful, timeless books.
            </h6>
          </div>
          <div class="col-8 mx-auto text-left">
            <h4 style="font-style: italic;">
              How much of your family history is written down?
            </h4>
            <h4>
              We turn decades of stories, experiences and memories into
              a beautiful, timeless book.  From family biographies to
              snapshots in time, Chronicle brings your family together and your history to life.
            </h4>
          </div>
        </div>
      </div>
      <div class="section" id="howitworks">
        <div class="row">
          <div class="col-12 col-lg-4 col-xl-6 mx-auto text-left">
            <h3>
              HOW IT WORKS
            </h3>
            <h6>
              Order a kit, record your stories, and we'll create
              your Chronicle!
            </h6>
            <h4 style="font-style: italic;">
              Everything you need, right out of the box.
            </h4>
            <h4>
              Inside your kit you'll find guiding instructions and playing
              cards that are easy and (dare we say) fun to navigate!

            </h4>
            <h4
              Created by our team of professional writers and artificial intelligence
              extraordinaires, they make sharing your stories simple.
            </h4>
            <h4>
              Add pictures, handwritten notes and memories to enhance your
              Chronicle!  Do it on your own, or with your family - and when you're
              done, your beautiful, timeless book will arrive within 3 weeks!
            </h4>
          </div>
          <div class="col mx-auto text-left">
            <div class="list-features">
              <div class="list-feat">
                <i>1</i>
                <p>
                  ORDER YOUR KIT
                  <span>We'll be your guide!</span>
                </p>
              </div>
              <div class="list-feat">
                <i>2</i>
                <p>
                  Tell us your story
                  <span>Solo or as a group activity!</span>
                </p>
              </div>
              <div class="list-feat">
                <i>3</i>
                <p>
                  ADD PICTURES & MEMORIES
                  <span>Feature specific moments in time</span>
                </p>
              </div>
              <div class="list-feat">
                <i>4</i>
                <p>Finish your book!
                <span>Submit, and we'll Chronicle your stories!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {

  name: 'home',
  computed: {
  },
  methods: {
  },
  data () {
    return {}
  },
  created () {
  }
}
</script>

<style scoped>

#chron-body {
  color: #000;
  background-color: #fff;
  padding-bottom: 200px;
}

#chron-spacer {
  color: #fff;
  background-color: #f6f8fb;
}
h1 {

}

h2 {
  font-family: Gibson, sans-serif;
  font-style: normal;
  font-weight: 600;
  color: rgba(0,0,0,.15);
  margin: 30px auto;
  font-size: 72px;
  line-height: 38px;
}
p {
  font-family: Gibson, sans-serif;
  font-size: 19px;
  font-weight: 300;
  font-style: normal;
  color: #222;
  line-height: 26px;
  display: block;
  margin: 0px auto 15px;
  padding: 0px;
}
.col-feat {
  padding: 0px 60px;
}
.col-feat h2 {
  font-family: Gibson, sans-serif;
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
  margin-bottom: 12px;
  width: 100%;
  color: #222;
  text-align: center !important;
}
.col-feat p {
  font-family: Gibson, sans-serif;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  color: #222;
  opacity: 1;
  line-height: 17px;
  display: block;
  margin: 0px auto 15px;
  padding: 0px;
}

.col-feat:not(:last-child)::before {
  position: absolute;
  content: "";
  width: 1px;
  height: 100%;
  right: 0px;
  opacity: 0.2;
  background: #222;
}

.list-features {
  padding: 25px 75px 75px;
}
.list-feat {
  width: 100%;
  padding-left: 50px;
  display: inline-flex;
}
.list-feat i {
  width: 55px;
  height: 55px;
  background-color: #ff424c;
  border-radius: 50%;
  margin-top: 32.5px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  text-transform: none;
  font-style: normal;
  padding-top: 15px;
}
.list-feat p {
  font-family: Gibson, sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  color: #222;
  opacity: 1;
  display: block;
  padding: 0px;
  line-height: 22px;
  text-align: left;
  margin: 37.5px 0px 50px 50px;
  text-transform: uppercase;
}
.list-feat span {
  font-family: Gibson, sans-serif;
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  color: #222;
  opacity: 1;
  display: block;
  padding: 0px;
  line-height: 22px;
  text-align: left;
  margin: 5px 0 0;;
  text-transform: none;
}

h3 {
  font-family: Gibson, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ff424c;
  margin: 25px 0;
  padding: 0px;
}
h3 span {
  font-family: Gibson, sans-serif;
  background-color: rgba(55, 126, 84, .35);
  border-radius: 5px;
  display: block;
  width: fit-content;
  padding: 1px 10px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: rgb(55, 126, 84);
  text-align: center;
}
h4 {
  font-family: Gibson, sans-serif;
  font-size: 22px;
  line-height: 28px;
  margin: 35px 0px 25px;
  font-style: normal;
  font-weight: 300;
  color: #222;
}
h5 {
  font-family: Gibson, sans-serif;
  margin: 35px 0px;
  font-size: 19px;
  line-height: 22px;
  font-style: normal;
  font-weight: 200;
  color: #222;
}

h6 {
  font-family: Gibson, sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #222;
  margin: 25px auto;
  font-size: 34px;
  line-height: 38px;

}


.signup-block {
  text-align: center;
  max-width: 550px;
  margin: auto;
}
.signup-block p {
  max-width: 100%;
}

.card-icon {
width: 48px;
height: 48px;
margin-bottom: 24px;
margin-top: 100px;
}

.chron-btn {

  font-family: Gibson, sans-serif;

  line-height: 1;
  box-sizing: border-box;
  min-width: 200px;
  font-weight: 500;
  z-index: 1;
  position: relative;
  color: rgb(255, 255, 255);
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 16px 14px 14px;
  border-radius: 5px;
  background: rgb(55, 126, 84);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(55, 126, 84);
  border-image: initial;
  margin: 40px auto;
  padding: 22px 20px 20px;
  font-size: 14px;
  text-align: center;

  width: fit-content;
}
.chron-btn:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  text-decoration: none;
  cursor: pointer;
}
.chron-btn.solid {
  background-color: #ff414c;
  border-color: #ff414c;
  color: #fff;
}
.chron-btn.solid:hover {
  text-decoration: underline;
  cursor: pointer;
}

.action-btn {
  font-family: Gibson, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  box-sizing: border-box;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgb(7, 17, 72);
  background: rgb(255, 255, 255);
  padding: 17px 31px 16px;
  border-radius: 30px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-image: initial;
  width: fit-content;
  margin: auto;
}
.action-btn.solid {
  background-color: #ff414c;
  border-color: #ff414c;
  color: #fff;
}
.action-btn:hover {
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
}

.spacer-text {
  margin: auto;
  font-size: 28px;
  color: #fff;
}
.chrontext-sm {
  font-size: 13px;
  font-weight: 600;
}

.section {
  padding: 125px 0 0;
}
.section.top {
  padding: 0;
}

.section-w-sm {
  padding-left: 75px;
  padding-right: 75px;
}

.section-w-xs {
  padding-left: 150px;
  padding-right: 150px;
}

.section-h-eq {
  padding-top: 75px;
  padding-bottom: 75px;
}

.bottom-bar {
  border-bottom: 1px solid rgba(7, 17, 72, .2);
  padding-bottom: 150px;
}

.icon-box {
width: 600px;
margin: auto;
text-align: center;
position: absolute;
left: calc(50% - 300px);
top: 100px;
}

.bg-spec {
    background-image: linear-gradient(90deg, #F6D6A8 25%, #F5BA55 25%, #F5BA55 50%, #F09741 50%, #F09741 75%, #327AB2 75%, #327AB2 100%);
}


.prices {
  box-shadow: rgb(227, 229, 230) 0px 0px 1.25rem 0px;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  padding: 15px 15px 60px;
  min-height: 500px;
}
.prices img {
  text-align: center;
  margin: 15px auto 60px;
  display: block;
  width: 80%;
}
.prices h3 {
  position: absolute;
  bottom: 0px;
  text-align: center;
  width: 100%;
  left: 0;
  font-size: 12px;
}
</style>
