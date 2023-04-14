<template>

  <div class="home image-carousel">
    <div class="first-half">

      
      <transition>
        <div class="background-img image-container">
          <img class="img" :src="currentImage" alt="carousel-image" :key="currentImage">
        </div>
      </transition>
      <div class="button-container">
        <button v-for="(images, index) in images" :key="index" :class="{ active: index === currentImageIndex }" @click="setCurrentImage(index)">
        </button>
      </div>
    </div>

    <div class="second-half">

      <p class="intro">Given our antecedent and capital market experience, about 50% of the companies quoted on the Nigerian Stock Exchange have our imprint. We have decades of experience in the provision of sound financial solution and advisory services. We boast of significant expertise in Investment Banking, Asset Management, Advisory Services and Research.</p>

      <div class="card-wrapper">
        <div class="card">
          <div class="image">
            <img class="card-img" src="https://img.capital.com/imgs/articles/662x308x0/shutterstock_1303625407.jpg" alt="">
          </div>
          <div class="text text-one">
            <h2>Investment Banking</h2>
            <p class="invest">Our Investment Banking team handles business advisory and capital issues in the form of equity or debt for various types of clients in various sectors of the economy.</p>
             <div class="link">

                <div class="read-more">Learn more</div><div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
              </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img class="card-img" src="https://www.ahcopa.org/uploads/1/3/3/7/133790784/published/34.jpg?1600115998" alt="">
          </div>
          <div class="text">
              <h2>Asset Management</h2>
              <p>SCM Capital Asset Management Limited is the full-service Asset Management subsidiary of SCM Capital Limited and is licensed by the Securities & Exchange Commission as a Fund / Portfolio Manager.</p>
               <div class="link">

                <div class="read-more">Learn more</div><div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
              </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img class="card-img" src="https://imageio.forbes.com/specials-images/imageserve/6182d1ac7ecd8640d0b82194/Magnifying-glass-and-business-growth-graph---financial/960x0.jpg?format=jpg&width=960" alt="">
          </div>
          <div class="text">
              <h2>Research</h2>
              <p class="research">The Research team provides independent advice based on disciplined, tested and forward looking research methods. Our experts have in-depth knowledge of global and local financial markets.</p>
              <div class="link">

                <div class="read-more">Learn more</div><div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="third-half">
      <div class="third-half-container">
        <div class="third-wrapper">
          <div class="about-us">
            <h2 class="section-h2">About Us</h2>
            <p class="about-p">The Company`s root as a premier investment bank in Nigeria date back over 50 years as NAL Merchant Bank Limited before it was packaged as a re-branding of the capital market competencies of the constituent banks that made up the Sterling Bank Group.</p>
            <div class="link">

              <div class="read-more">Learn more</div><div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
            </div>
          </div>
        </div>
        <div class="video-wrapper"><img class="video" src="https://www.scmcapitalng.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-12-at-2.42.06-PM.jpeg" alt=""></div>
      </div>
    </div>

    <div class="forth-half">
      <div class="Heading">
        <h2 class="forth-h2 section-h2">Have You Seen Our Latest Blog Posts?</h2>
      </div>
      <div class=" forth-wrapper">
        <div class="cards">
          <div class="image">
            <img class="forth-img" src="https://www.scmcapitalng.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-12-at-2.42.06-PM.jpeg" alt="">
          </div>
          <div class="text text-one">
            <h2>SCM Retreat 2022</h2>
            <p>A non-traditional business retreat led to a breakthrough solution. The serene environment fostered collaboration and innovative thinking. The impact of the solution reached beyond the attendees to transform lives and create a better future..</p>
             <div class="link">

                <div class="read-more">Learn more</div><div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
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
             <div class="link">

                <div class="read-more">Learn more</div><div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="image">
            <img class="forth-img" src="../images/smcchief.jpeg" alt="">
          </div>
          <div class="text text-one">
            <h2>Interview with Mrs Nwamara Nnaji – SCM Capital Chief Risk Officer...</h2>
            <p class="interview">Our Investment Banking team handles business advisory and capital issues in the form of equity or debt for various types of clients in various sectors of the economy.</p>
             <div class="link">

                <div class="read-more">Learn more</div><div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="image">
            <img class="forth-img" src="https://www.zambianguardian.com/wp-content/uploads/2022/07/shutterstock_1562999674-scaled-1.jpg" alt="">
          </div>
          <div class="text text-one">
            <h2>The Importance Of Market Analysis</h2>
            <p class="analysis">When it comes to investing, market analysis is not just important, it is essential. Without thorough analysis, you risk making uninformed decisions that could lead to costly mistakes. By taking the time to truly understand the market, you set yourself up for success and increase your chances of achieving your investment goals..</p>
            <div class="link">

                <div class="read-more">Learn more</div><div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
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
  data() {
    return {
      images: [
        'https://www.scmcapitalng.com/wp-content/uploads/2022/01/Banner-2-2022.jpg',
        'https://www.scmcapitalng.com/wp-content/uploads/2021/06/Banner-5-Walk-you.jpg',
        'https://www.scmcapitalng.com/wp-content/uploads/2022/01/Banner-3-2022.jpg',
        'https://www.scmcapitalng.com/wp-content/uploads/2020/12/Banner-6-min.jpg'
      ],
      currentImageIndex: 0,
      intervalId: null
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    }
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }, 3000);
    },
    stopCarousel() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    setCurrentImage(index) {
      this.currentImageIndex = index;
      this.stopCarousel();
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&family=Poppins&family=Roboto:wght@300&display=swap');

.home{
  padding-top: 68px;
  font-family: 'Lato', sans-serif;
}
p{
  line-height: 1.5;
}
.invest{
  padding-bottom: 25px;
}
.analysis{
  padding-bottom: 10px;
}
.time{
  padding-bottom: 30px;
}
.research{
  padding-bottom: 25px;
}
.interview{
  padding-bottom: 56px;
}
.background-img{
  box-shadow: 0px 0px 3px rgb(108, 108, 108);
}
.img{
  width: 100%;
  height: 520px;
}
.img.active{
  opacity: 1;
}

.button-container {
  position: relative;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.button-container button {
  margin: 0 5px;
  background-color: grey;
  padding: 5px 7px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  border: none;
}

.button-container button:focus {
  outline: none;
}

.button-container button.active {
  background-color: rgb(237, 29, 29);
}
.intro{
  font-family: 'Lato', sans-serif;
  width: 75%;
  text-align: center;
  margin-left: 10%;
  font-size: 22px;
  padding: 155px 0;
}
.card-wrapper{
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  background: #f7f8f8;
  padding: 155px 0;
}
.card{
  width: 400px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  background: white;
}
.text{
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 25px 30px;
}
.card-img{
  width: 400px;
}
.link{
  display: flex;
  width: 100px;
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
.link:hover .chevron{
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
}
.third-half{
  padding: 155px 0;
}
.third-half-container{
  display: flex;
  justify-content: center;
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
}
.video{
  width: 500px;
}
.video-wrapper{
  position: relative;
  left: -25px;
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
.section-h2{
  font-size: 45px;
}
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
}
.forth-wrapper{
  padding-left: 150px;
  display: grid;
  grid-template-columns: repeat(2, 500px);
  justify-items: center;
}
</style>

