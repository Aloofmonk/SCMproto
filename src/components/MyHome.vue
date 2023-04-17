<template>

  <div @mouseover="triggerHideDiv()" class="home image-carousel">
    <div class="first-half">

      
      <transition-group name="fade" tag="div">
        <div class="background-img image-container" v-for="i in [currentIndex]" :key="i">
          <img class="img" :src="currentImg">
        </div>
      </transition-group>

      <div class="button-container">
        <button v-for="(images, index) in images" :key="index" :class="{ active: index === currentIndex }" @click="setCurrentImage(index)">
        </button>
      </div>
    </div>

    <div class="second-half">

      <div class="second-half-card">
        <h2 class="section-h2">Trusted by 200,000+ businesses</h2>
        <p class="header-p">Thousands of organizations of all sizes trust SCM Capital to grow their business.</p>

        <div class="card-wrapper">
          <div class="card">
            <div class="image">
              <img class="card-img" src="https://cdn-icons-png.flaticon.com/512/2529/2529036.png" alt="">
            </div>
            <div class="text text-one">
              <div class="h2-cont">

                <h2 class="text-h2">SCM Capital for </h2> 
                <h2 class="text-h2"> Investment Banking</h2>
              </div>
              <p class="invest">Our Investment Banking team handles business advisory and capital issues in the form of equity.</p>
               <div class="link">
  
                  <div class="read-more">Learn more</div>
                  <font-awesome-icon class="chevron" icon="chevron-right" />
                </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img class="card-img" src="https://cdn-icons-png.flaticon.com/512/3427/3427651.png" alt="">
            </div>
            <div class="text">
                <div class="h2-cont">

                  <h2 class="text-h2">SCM Capital for </h2> 
                  <h2 class="text-h2">Asset Management</h2>
                </div>
                <p>SCM Capital Asset Management Limited is the Asset Management subsidiary of SCM Capital Limited.</p>
                 <div class="link">
  
                  <div class="read-more">Learn more</div>
                  <font-awesome-icon class="chevron" icon="chevron-right" />
                </div>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img class="card-img" src="https://cdn-icons-png.flaticon.com/512/2362/2362314.png" alt="">
            </div>
            <div class="text">
                <div class="h2-cont">
                    <h2 class="text-h2">SCM Capital for </h2> 
                    <h2 class="text-h2">Research</h2>
                </div>
                <p class="research">The Research team provides independent advice based on disciplined, tested research methods.</p>
                <div class="link">
  
                  <div class="read-more">Learn more</div>
                  <font-awesome-icon class="chevron" icon="chevron-right" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="third-half">
      <h2 class="section-h2">Hello, Want To Know More About What We Do?</h2> 
      <p class="header-p">Familiarity is the very first step to every excellent relationship.</p>
      <div class="third-half-container">
        <div class="third-wrapper">
          <div class="about-us">
            <h2 >About Us</h2>
            <p class="about-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, repellendus possimus. Laboriosam eligendi assumenda recusandae velit cumque nisi aperiam tempora, at ut laborum nesciunt rerum odit, modi accusantium quod dignissimos voluptates a minima unde voluptatem, voluptas ab. Voluptatum eum iusto quaerat odio distinctio mollitia corrupti saepe eaque impedit! Maiores, dignissimos aperiam voluptates eligendi temporibus eius voluptate hic quas dolorem fugiat.</p>
            <div class="about-link link">

              <div class="read-more">Learn more</div><div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
            </div>
          </div>
        </div>
        <div class="video-wrapper"><video class="video" src="../images/welcome.mp4" controls>
          <source :src="videoSrc" type="video/mp4">
        </video></div>
      </div>
    </div>

    <div class="forth-half">
      <div class="Heading">
        <h2 class="forth-h2 section-h2">Have You Seen Our Latest Blog Posts?</h2>
        <p class="header-p">A range of published articles by our very own to get you up to speed on current happens.</p>
      </div>
      <div class=" forth-wrapper">
        <div class="cards">
          <div class="image">
            <img class="forth-img" src="https://static.vecteezy.com/system/resources/previews/003/857/439/original/happy-group-of-people-making-high-hands-business-team-concept-illustration-free-vector.jpg" alt="">
          </div>
          <div class="text text-one">
            <h2>SCM Retreat 2022</h2>
            <p class="retreat">A non-traditional business retreat led to a breakthrough solution. The serene environment fostered collaboration and innovative thinking...</p>
             <div class="forth-link ">

                <div class="read-more">Learn more</div>
                <font-awesome-icon class="chevron" icon="chevron-right" />
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="image">
            <img class="forth-img" src="../images/team.jpg" alt="">
          </div>
          <div class="text text-one">
            <h2>It's That Time Of The Year Again</h2>
            <p class="time">Our Investment Banking team handles business advisory and capital issues in the form of equity or debt for various types of clients in various sectors of the economy.</p>
             <div class="forth-link ">

                <div class="read-more">Learn more</div>
                <font-awesome-icon class="chevron" icon="chevron-right" />
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="image">
            <img class="forth-img" src="../images/smcchief.jpeg" alt="">
          </div>
          <div class="text text-one">
            <h2>SCM Capital Chief Risk Officer...</h2>
            <p class="interview">Our Investment Banking team handles business advisory and capital issues in the form of equity or debt for various types of clients in various sectors of the economy.</p>
             <div class="forth-link ">

                <div class="read-more">Learn more</div>
                <font-awesome-icon class="chevron" icon="chevron-right" />
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="image">
            <img class="forth-img" src="https://www.zambianguardian.com/wp-content/uploads/2022/07/shutterstock_1562999674-scaled-1.jpg" alt="">
          </div>
          <div class="text text-one">
            <h2>The Importance Of Market Analysis</h2>
            <p class="analysis">When it comes to investing, market analysis is not just important, it is essential. Without thorough analysis, you risk making uninformed decisions...</p>
            <div class="forth-link">

                <div class="read-more">Learn more</div>
                <font-awesome-icon class="chevron" icon="chevron-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyHome',
  components:{
  },
  props:{
    hideDiv: Function,
  },
  
  data() {
    return {
      images: [
        'https://assetmanagement.scmcapitalng.com/wp-content/uploads/2020/12/Banner-7-min.jpg',
        'https://assetmanagement.scmcapitalng.com/wp-content/uploads/2020/12/Banner-8-min.jpg',
        'https://www.scmcapitalng.com/wp-content/uploads/2020/12/Banner-4-min.jpg',
        'https://www.scmcapitalng.com/wp-content/uploads/2022/01/Banner-5-2022.jpg',
        'https://www.scmcapitalng.com/wp-content/uploads/2022/01/Banner-2-2022.jpg',
        'https://www.scmcapitalng.com/wp-content/uploads/2021/06/Banner-5-Walk-you.jpg',
        'https://www.scmcapitalng.com/wp-content/uploads/2022/01/Banner-3-2022.jpg',
        'https://www.scmcapitalng.com/wp-content/uploads/2020/12/Banner-6-min.jpg'
      ],
      timer: null,
      currentIndex: 0,
      videoSrc: '../images/welcome.mp4',
    }
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 4000);
    },
    
    stopCarousel() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    setCurrentImage(index) {
      this.currentIndex = index;
      this.stopCarousel();
    },
    triggerHideDiv() {
      this.$props.hideDiv();
    },
  },
  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&family=Poppins&family=Roboto:wght@300&display=swap');

.home{
  font-family: 'Lato', sans-serif;
}

/* .slide-enter-active,.slide-enter
 {
  overflow: hidden;
  visibility: visible;
  position: absolute;
  transform: translateX(100%);
} */

/* .slide-leave-to, .slide-leave-active {
  overflow: hidden;
  transition: all 1s ease-in;
  visibility: hidden;
  position: absolute;
  transform: translateX(-100%);
} */

.fade-leave-to,
.fade-leave-active {
  transition: all 2.5s ease-in;
  visibility: hidden;
  position: absolute;
  width:100%;
  opacity: 0;
}

.fade-enter,.fade-enter-active{
  visibility: visible;
  width:100%;
  opacity: 1;
}

.retreat{
  padding-bottom: 30px;
}
.analysis{
  padding-bottom: 30px;
}
.time{
  padding-bottom: 30px;
}
.interview{
  padding-bottom: 30px;
}
.first-half{
  background: #f7f8f8;
  padding-top: 68px;
  width: 100%;
  height: 600px;
  overflow-x: hidden;
}
.background-img{
  box-shadow: 0px 0px 4px rgb(108, 108, 108);
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  
}
.img{
  width: 100%;
  height: 480px;
  transition: transform 0.5s;
  overflow: hidden;
}

.button-container {
  position: absolute;
  left: 40%;
  bottom: 150px;
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  padding-bottom: 9px;
  margin-top: 10px;
  backdrop-filter: blur(50px);
  display: inline-block;
  border-radius: 5px;
  z-index: 1000000;
}

.button-container button {
  margin: 0 5px;
  background-color: rgba(0, 0, 0, 0.37);
  padding: 5px 7px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  border: none;
  transition: all .2s ease-in-out;
}
.button-container button:hover {
  background-color: rgba(255, 0, 0, 0.3);
}

.button-container button:focus {
  outline: none;
}

.button-container button.active {
  background-color: rgba(237, 29, 29, 0.8);
}
.intro{
  font-family: 'Lato', sans-serif;
  width: 75%;
  text-align: center;
  margin-left: 10%;
  font-size: 22px;
  padding-top: 50px;
  padding-bottom: 170px
}
.second-half-card{
  padding: 155px 0;
  background: #f7f8f8;
}

.second-h2{

  padding-bottom: 70px;
  padding-left: 100px;
}
.card-wrapper{
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  margin: 0px 90px;
  column-gap: 25px;
}
.card{
  width: 370px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  background: white;
  padding-top: 40px;
  padding-bottom: 40px;
}
.text-h2{
  text-align: left;
}

.text{
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 25px 30px;
  text-align: center;

}
.card-img{
  width: 80px;
  margin-left: 25px;
  margin-top: 20px;
}
.link{
  display: flex;
  width: 100px;
  padding-top: 10px;
}
.forth-link{
  display: flex;
  width: 100px;
  margin-left: 148px;
  padding-top: 10px;
}
.read-more{
  font-family: 'Roboto', sans-serif;
  justify-self: self-end;
  color: black;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  width: 80px;
}
.read-more:hover ~ .chevron{
  background: rgb(233, 42, 42);
  color: white;
}
.about-link:hover .chevron{
  background: rgb(233, 42, 42);
  color: white;
}
.chevron{
  display: inline;
  border: 0.12em solid rgb(233, 42, 42);
  width: 6px;
  padding: 0px 5px;
  border-radius: 50%;
  margin-left: 2px;
  color: rgb(233, 42, 42);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.chevron:hover{
  background: rgb(233, 42, 42);
  color: white;
}
.third-half{
  padding: 155px 0;
}
.third-half-container{
  display: flex;
  justify-content: center;
  padding-left: 155px;
}
.third-wrapper{
  padding: 30px;
  width: 650px;
  line-height: 2;
  background: #f7f8f8;
  height: 100%;
  box-shadow: 0 0 5px rgb(207, 206, 206);
}
.about-p{
  margin-bottom: 20px;
  color: #011B33;
}
p{
  color: #011B33;
  line-height: 1.5;
  text-align: left;
  text-align: justify;
}
.video{
  width: 600px;
}
.video-wrapper{
  position: relative;
  left: -300px;
  top: 90px;
  margin-top: 140px;
}
.forth-half{
  padding: 155px 0;
  background: #f7f8f8;
}
.forth-h2{
  padding: 0px 150px 70px 150px;
  width: 855px;
  font-weight: bolder;
}
.header-p{
  padding-left: 100px;
  padding-bottom: 70px;
  font-size: 20px;
}
.section-h2{
  padding-left: 100px;
  padding-bottom: 10px;
  width: 700px;
  font-size: 45px;
}
/* .section-h2{
} */
.forth-wrapper{
  gap: 50px;
}
.cards{
  width: 500px;
  box-shadow: 0 0 5px rgb(207, 206, 206);
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  background: white;
}
.forth-img{
  width: 500px;
  height: 320px
}
.forth-wrapper{
  padding-left: 150px;
  display: grid;
  grid-template-columns: repeat(2, 500px);
  justify-items: center;
}
</style>

