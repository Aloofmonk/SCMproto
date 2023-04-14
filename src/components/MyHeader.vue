<template>
	<div  class="nav-wrapper-flex">
		<div  class="left-nav-flex">
			<div class="nav logo">
				<img src="../images/scm.png" alt="">
			</div>

			<div @mouseover="showDiv1 = 'about'; showDiv3 = ''; showDiv4 = ''; showDiv5 = ''; showDiv2 = ''"  class="nav nav-link navigate about">About Us<font-awesome-icon class="caret" icon="caret-down" />
			</div>

			<div @mouseover="showDiv2 = 'services'; showDiv1 = ''; showDiv3 = ''; showDiv4 = ''; showDiv5 = ''"  class="nav nav-link navigate">Services<font-awesome-icon class="caret" icon="caret-down" />
			</div>

			<div @mouseover="showDiv3 = 'research'; showDiv2 = ''; showDiv1 = ''; showDiv4 = ''; showDiv5 = ''"  class="nav nav-link navigate">Research<font-awesome-icon class="caret" icon="caret-down" /></div>
			<div @mouseover="showDiv4 = 'contact'; showDiv2 = ''; showDiv1 = ''; showDiv3 = ''; showDiv5 = ''" class="nav-link last-nav navigate">Contact<font-awesome-icon class="caret" icon="caret-down" /></div>
		</div>
		<div class="right-nav-flex">
			<div @mouseover="showDiv5 = 'blog'; showDiv2 = ''; showDiv1 = ''; showDiv3 = ''; showDiv4 = ''" class="nav nav-link navigate">Blog<font-awesome-icon class="caret" icon="caret-down" /></div>
			<div @mouseover="showDiv1 = ''; showDiv2 = ''; showDiv3 = ''; showDiv4 = ''; showDiv5 = ''" class="nav nav-link navigate">Login</div>
			<div @mouseover="showDiv1 = ''; showDiv2 = ''; showDiv3 = ''; showDiv4 = ''; showDiv5 = ''" class="nav nav-link button navigate">Create free account</div>
			<div @mouseover="showDiv1 = ''; showDiv2 = ''; showDiv3 = ''; showDiv4 = ''; showDiv5 = ''" class="nav-search last-nav navigate"><font-awesome-icon class="search" icon="magnifying-glass" /></div>
		</div>
		
	</div>
	<div @mouseover="showDiv1 = 'about'" @mouseleave="hideDiv()" class="pop-up-nav my-style1" v-if="showDiv1">
	
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

	<div @mouseover="showDiv2 = 'services'" @mouseleave="hideDiv()" class="pop-up-nav my-style2" v-if="showDiv2">
		
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

	<div @mouseover="showDiv3 = 'research'" @mouseleave="hideDiv()" class="pop-up-nav my-style3" v-if="showDiv3">

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
	<div @mouseover="showDiv4 = 'contact'" @mouseleave="hideDiv()" class="pop-up-nav my-style4" v-if="showDiv4">

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

	<div @mouseover="showDiv5 = 'blog'" @mouseleave="hideDiv()" class="pop-up-nav my-style5" v-if="showDiv5">

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
		data() {
			return {
				showDiv1: '',
				showDiv2: '',
				showDiv3: '',
				showDiv4: '',
				showDiv5: '',
				hideTimeout: null
			};
		},
		methods: {
		hideDiv() {
			this.hideTimeout = setTimeout(() => {
				this.showDiv1 = '';
				this.showDiv2 = '';
				this.showDiv3 = '';
				this.showDiv4 = '';
				this.showDiv5 = '';
			}, -500); // Set the duration to 500 milliseconds
		},
		cancelHide() {
			clearTimeout(this.hideTimeout);
		}
	}
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
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
img{
	width: 200px;
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
	left: 260px;
	display: flex;
	flex-direction:column;
	align-items: center;
	background: rgba(255, 255, 255, 0.96);
	transition: all 0.3s ease-out;
	width: 400px;
	height: 280px;
	box-shadow: 0 0 5px rgb(159, 159, 159);
	border-radius: 3px;
}
.my-style2{
	position: fixed;
	top: 47px;
	left: 360px;
	display: flex;
	flex-direction:column;
	align-items: center;
	background: rgba(255, 255, 255, 0.96);
	transition: all 0.3s ease-out;
	width: 400px;
	height: 280px;
	box-shadow: 0 0 5px rgb(159, 159, 159);
	border-radius: 3px;
}
.my-style3{
	position: fixed;
	top: 47px;
	left: 450px;
	display: flex;
	flex-direction:column;
	align-items: center;
	background: rgba(255, 255, 255, 0.96);
	transition: all 0.3s ease-out;
	width: 400px;
	height: 280px;
	box-shadow: 0 0 5px rgb(159, 159, 159);
	border-radius: 3px;
}
.my-style4{
	position: fixed;
	top: 47px;
	left: 550px;
	display: flex;
	flex-direction:column;
	align-items: center;
	background: rgba(255, 255, 255, 0.96);
	transition: all 0.3s ease-out;
	width: 400px;
	height: 280px;
	box-shadow: 0 0 5px rgb(159, 159, 159);
	border-radius: 3px;
}
.my-style5{
	position: fixed;
	top: 47px;
	left: 600px;
	display: flex;
	flex-direction:column;
	align-items: center;
	background: rgba(255, 255, 255, 0.96);
	transition: all 0.3s ease-out;
	width: 400px;
	height: 280px;
	box-shadow: 0 0 5px rgb(159, 159, 159);
	border-radius: 3px;
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