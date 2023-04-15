<template>
	<div :class="{ 'navbar': true, 'navbar--hidden': isNavbarHidden }"  class="nav-wrapper-flex">
		<div  class="left-nav-flex">
			<div class="nav logo">
				<img src="https://media.licdn.com/dms/image/C4D0BAQE5AtzIBYNpmQ/company-logo_200_200/0/1550234297969?e=2147483647&v=beta&t=oovQkwIqOrgjvHSZvso3mOlRGBHFEcAJPubI_L_oHfM" alt="">
			</div>

			<div @mouseover="hideDiv1" @mouseenter="triggerOtherDiv()" class="nav nav-link navigate about">About Us<font-awesome-icon :class="[showDiv1 === true ? 'caret-twist' : '' ]" class="caret" icon="caret-down" />
			</div>

			<div @mouseover="hideDiv2" @mouseenter="triggerOtherDiv2()" class="nav nav-link navigate">Services<font-awesome-icon :class="[showDiv2 === true ? 'caret-twist' : '']" class="caret" icon="caret-down" />
			</div>

			<div @mouseover="hideDiv3" @mouseenter="triggerOtherDiv3()" class="nav nav-link navigate">Research<font-awesome-icon :class="[showDiv3 === true ? 'caret-twist' : '']" class="caret" icon="caret-down" /></div>

			<div @mouseover="hideDiv4" @mouseenter="triggerOtherDiv4()" class="nav-link last-nav navigate">Contact<font-awesome-icon :class="[showDiv4 === true ? 'caret-twist' : '']" class="caret" icon="caret-down" /></div>
		</div>
		<div class="right-nav-flex">
			<div @mouseover="hideDiv5" @mouseenter="triggerOtherDiv5()" class="nav nav-link navigate">Blog<font-awesome-icon :class="[showDiv5 === true ? 'caret-twist' : '']" class="caret" icon="caret-down" /></div>
			<div @mouseover="hideDiv()" class="nav nav-link navigate">Login</div>
			<div @mouseover="hideDiv()" class="nav nav-link button navigate">Create free account</div>
			<div @mouseover="hideDiv()" class="nav-search last-nav navigate"><font-awesome-icon class="search" icon="magnifying-glass" /></div>
		</div>
		
	</div>
	<div @mouseover="hideDiv1" @mouseleave="triggerHideDiv()" class="pop-up-nav my-style1" v-show="showDiv1">
	
		<div class="pop">

			<p>
				Corporate Information
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		<div class="pop">
			
			<p>
				Our Competence
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		<div class="pop">
			
			<p>
				Management Team
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		<div class="pop pop-bottom">
			
			<p>
				Board Of Directors
			</p>
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
	</div>

	<div @mouseover="hideDiv2" @mouseleave="triggerHideDiv()" class="pop-up-nav my-style2" v-if="showDiv2">
		
		<div class="pop">

			<p>
				Investment Banking
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		<div class="pop">
		
			<p>
				Asset Management 
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		
	</div>

	<div @mouseover="hideDiv3" @mouseleave="triggerHideDiv()" class="pop-up-nav my-style3" v-if="showDiv3">

		<div class="pop">

			<p>
				Daily Stock price
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		<div class="pop">
		
			<p>
				Macro Economic Reports
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		<div class="pop">
		
			<p>
				Daily Market Recap
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		<div class="pop pop-bottom">
		
			<p>
				Earnings Update
			</p>
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		
	</div>
	<div @mouseover="hideDiv4" @mouseleave="triggerHideDiv()" class="pop-up-nav my-style4" v-if="showDiv4">

		<div class="pop">

			<p>
				Contact
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		<div class="pop">
		
			<p>
				Whistle Blower
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		
	</div>

	<div @mouseover="hideDiv5" @mouseleave="triggerHideDiv()" class="pop-up-nav my-style5" v-if="showDiv5">

		<div class="pop">

			<p>
				SCM Retreat 2022
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		<div class="pop">
		
			<p>
				It's That time Of the Year ...
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		<div class="pop">
		
			<p>
				Interview With SCM Cheif ...
			</p> 
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		<div class="pop pop-bottom">
		
			<p>
				The Importance Of ...
			</p>
			<div class="icon"><font-awesome-icon class="chevron" icon="chevron-right" /></div>
		</div>
		
	</div>
	
</template>

<script>
	export default{
		name: 'MyHeader',
		props: {
			hide1: Function,
			hide2: Function,
			hide3: Function,
			hide4: Function,
			hide5: Function,
			hideDiv: Function,
			showDiv1: String,
			showDiv2: String,
			showDiv3: String,
			showDiv4: String,
			showDiv5: String,
		},
		data(){
			return{
				prevScrollPos: 0,
				isNavbarHidden: false,
			}
		},
		computed: {
			shouldHideNavbar() {
				this.triggerHideDiv()
				return this.prevScrollPos < window.pageYOffset;
			},
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll);
		},
		beforeUnmount() {
			window.removeEventListener('scroll', this.handleScroll);
		},
		methods: {
			handleScroll() {
				this.isNavbarHidden = this.shouldHideNavbar;
				this.prevScrollPos = window.pageYOffset;
			},
			triggerHideDiv() {
				this.$props.hideDiv();
			},
			triggerOtherDiv() {
				this.$props.hide1();
			},
			triggerOtherDiv2() {
				this.$props.hide2();
			},
			triggerOtherDiv3() {
				this.$props.hide3();
			},
			triggerOtherDiv4() {
				this.$props.hide4();
			},
			triggerOtherDiv5() {
				this.$props.hide5();
			},
			hideDiv1() {
				this.$emit('hide-div1');
			},
			hideDiv2() {
				this.$emit('hide-div2');
			},
			hideDiv3() {
				this.$emit('hide-div3');
			},
			hideDiv4() {
				this.$emit('hide-div4');
			},
			hideDiv5() {
				this.$emit('hide-div5');
			},
	},
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.navbar {
	position: fixed;
	width: 100%;
	z-index: 100;
	backdrop-filter: blur(100px);
	transition: transform 0.5s;
	background: rgba(255, 255, 255, 0.85);  
	box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.25);
	box-sizing: border-box;
}
.navbar--hidden {
  transform: translateY(-100px);
}
.nav-wrapper-flex{
	display: flex;
	justify-content: space-between;
	padding: 0px 40px;
	font-family: 'Poppins', sans-serif;
	font-size: 14px;
}
.left-nav-flex{
	display: flex;
	padding: 10px 0;
	align-items: center;
}
.right-nav-flex{
	display: flex;
	padding: 10px 0;
	align-items: center;
}
.nav{
	margin-right: 20px;
	cursor: pointer;
}
.logo{
	margin-right: 30px;
}
.navigate{
	transition: all 0.2s ease-out;
}
.navigate:hover{
	color: rgb(233, 42, 42);
}
.navigate:hover .caret{
	color: rgb(233, 42, 42);
	transform: rotate(-180deg);
}
.caret-twist{
	color: rgb(233, 42, 42);
	transform: rotate(-180deg);
}
img{
	width: 40px;
	cursor: pointer;
}
.last-nav{
	cursor: pointer;
}
.button{
	padding: 8px 18px;
	border-radius: 5px;
	color: white;
	background: rgb(245, 25, 25);
	transition: all 0.15s ease-in-out;
}
.button:hover{
	color: white;
	background: rgb(223, 13, 13);
	transform: translateY(-2px);
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
.pop:hover .chevron{
	background: rgb(233, 42, 42);
	color: white;
}
.search{
	font-size: 15px;
	padding: 5px;
	color: black;
	transition: all 0.15s ease-in-out;
}
.search:hover{
	background: rgb(247, 155, 155);
	border-radius: 2px;
}
.caret{
	margin-left: 8px;
	font-size: 11px;
	transition: all 0.3s ease-in-out;
}
.my-style1{
	position: fixed;
	top: 47px;
	left: 110px;
	display: flex;
	flex-direction:column;
	align-items: center;
	background: rgba(255, 255, 255, 0.86);
	backdrop-filter: blur(10px);
	transition: all 0.3s ease-out;
	width: 400px;
	height: 280px;
	box-shadow: 0 0 5px rgb(159, 159, 159);
	border-radius: 3px;
}
.my-style2{
	position: fixed;
	top: 47px;
	left: 210px;
	display: flex;
	flex-direction:column;
	align-items: center;
	background: rgba(255, 255, 255, 0.86);
	backdrop-filter: blur(10px);
	transition: all 0.3s ease-out;
	width: 400px;
	height: 280px;
	box-shadow: 0 0 5px rgb(159, 159, 159);
	border-radius: 3px;
}
.my-style3{
	position: fixed;
	top: 47px;
	left: 300px;
	display: flex;
	flex-direction:column;
	align-items: center;
	background: rgba(255, 255, 255, 0.86);
	backdrop-filter: blur(10px);
	transition: all 0.3s ease-out;
	width: 400px;
	height: 280px;
	box-shadow: 0 0 5px rgb(159, 159, 159);
	border-radius: 3px;
}
.my-style4{
	position: fixed;
	top: 47px;
	left: 400px;
	display: flex;
	flex-direction:column;
	align-items: center;
	background: rgba(255, 255, 255, 0.86);
	backdrop-filter: blur(10px);
	transition: all 0.3s ease-out;
	width: 400px;
	height: 280px;
	box-shadow: 0 0 5px rgb(159, 159, 159);
	border-radius: 3px;
}
.my-style5{
	position: fixed;
	top: 47px;
	left: 615px;
	display: flex;
	flex-direction:column;
	align-items: center;
	background: rgba(255, 255, 255, 0.86);
	backdrop-filter: blur(10px);
	transition: all 0.3s ease-out;
	width: 400px;
	height: 280px;
	box-shadow: 0 0 5px rgb(159, 159, 159);
	border-radius: 3px;
}
.pop-up-nav{
	z-index: 100000;
	font-family: 'Poppins', sans-serif;
	line-height: 1;
}
.pop{
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid black;
	width: 80%;
	padding-top: 20px;
	padding-bottom: 25px;
	padding-left: 10px;
	cursor: pointer;
}
.pop-bottom{
	border: none;
}
p{
	padding: 3px;
}
.icon{
	padding-top: 3px;
}
</style>