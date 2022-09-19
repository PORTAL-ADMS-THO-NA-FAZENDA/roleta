<template>
<div>
    <vue-winwheel :segments="options" />
    </div>  
</template>

<script>
import VueWinwheel from '@robsonash/vue-winwheel-reversion/vue-winwheel'
export default {
  components:{
    VueWinwheel
    
  },
  data(){
    return{
      showModal: false,
      pageTitle: "Vue-Wheel",
      wheelSize: 400,
      btnColor: "",
      btnText: "",
      lineWidth: 3,
      duration: 5,
      spin: 5,
      options:[
					{
						textFillStyle: '#ffffff',
						fillStyle: '#3d532f ',
						text:'Leoninos',
            desc: " https://chat.whatsapp.com/KQ1fgi8yAZm7DPW74w2DWR"
					},
					{
						textFillStyle: '#ffffff',
						fillStyle: '#17325d',
						text:'Ex do Thomaz',
            desc: "https://chat.whatsapp.com/KoenuM2uGrBDKLUJ6iAJCI"
					},
          {
						textFillStyle: '#ffffff',
						fillStyle: '#bea181',
						text:'Daniel fazendeiro',
            desc: "https://chat.whatsapp.com/GAe8RFIvGR58hdmbKVDpo0"
					},

				]
    }
  },
  methods: {
}
}
</script>

<style>
.vue-winwheel .wheel-wrapper .btn.btn-play {
    width: 600px;
    letter-spacing: unset!important;
}
.modal-container {
        /* width: 90%; */
    width: 33%;
    height: 202px;
}
.modal-footer .modal-default-button {
      margin: 66px 0 0 0;
}
@media screen and (max-width: 730px) {
  .vue-winwheel .wheel-wrapper .btn.btn-play {
    padding: 0px 0px!important;
  }
    .vue-winwheel .wheel-wrapper .button-wrapper {
  
}
}
@media screen and (max-width: 600px) {
    .modal-container {
        width: 85%;
        padding: 20px 10px;
        font-size: 13px;
        
}  

.vue-winwheel .wheel-wrapper .btn.btn-play {
    width: 300px;
        padding: 0px 21px!important;
} 
}
@media screen and (max-width: 500px) {
     .modal-container {
        
        font-size: 10px;
} 

}
.modal-default-button{
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #3f51b5;
    color: white;
    width: 149px;
    height: 35px;
    border-radius: 10px;
    background: #e91e63;
}
.vue-winwheel .wheel-wrapper .btn.btn-play {
  display: inline-table;
}
.modal-default-button {
  cursor: pointer;
}
.modal-header {
  font-size: 30px;
  font-weight: bold;
  color: #364c2e!important;
}
.modal-body button{
  box-sizing: border-box;
  cursor: pointer;
  padding: 30px;
  border-radius: 10px;
  border: 5px solid #ff8800;
  background: #ff8800; 
  transition: all ease 0.3s;
}
.modal-body button:hover,
.modal-body button:focus {
    box-shadow: 0 0 0 3px #fcd3a1, 0 0 0 4px #ff8800;
}
.modal-body button:active {
    box-shadow: 0 0 0 3px #ff8800, 0 0 0 4px #ff8800;
}
/* button {
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 20px;
    background: #118fff;
    border-radius: 5px;
    color: #001988;
    border: 5px solid #118fff;
    transition: all ease 0.3s;
} */

.modal-body button a{
  color: white;
  font-size: 20px;
  text-decoration: none;
}
@media only screen and (max-width: 418px) {
 .vue-winwheel .wheel-wrapper::before {
  left: 172px!important;
 }
  .vue-winwheel .canvas-wrapper:after {
  left: 178px!important;
 }
}
 @media only screen and (max-width: 417px) {
 .vue-winwheel .wheel-wrapper::before {
      left: 169px!important;
 }
  .vue-winwheel .canvas-wrapper:after {
              left: 176px!important;
 } 
} 

 @media only screen and (max-width: 417px) {
 #app h1 img {
          margin-left: 6px;
 } 
 .vue-winwheel .wheel-wrapper .button-wrapper {
      margin-left: 82px!important;
 }
 }
 @media only screen and (max-width: 416px) {
 #app h1 img {
      margin-left: 20px;
 } 
 }
 @media only screen and (max-width: 391px) {
 #app h1 img {
      margin-left: 30px;
 } 
 }
 @media only screen and (min-device-width: 359px) and (max-width: 376px) {
 #app h1 img {
      margin-left: 65px;
 } 
 .vue-winwheel .wheel-wrapper .button-wrapper {
      margin-left: 82px;
 }
 }
</style>