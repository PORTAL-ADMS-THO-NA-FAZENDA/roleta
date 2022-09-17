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
						text:'Teste 1',
            desc: "https://chat.whatsapp.com/CnPQDMbCkB7EzSDEnTzcB5"
					},
					{
						textFillStyle: '#ffffff',
						fillStyle: '#17325d',
						text:'Teste 2',
            desc: "https://chat.whatsapp.com/ChgHuJ1cb5aAlsAutfNnGy"
					},
					{
						textFillStyle: '#000000',
						fillStyle: '#ffffff ',
						text:'Teste 3',
            desc: "https://chat.whatsapp.com/C4JyGbUEkxy9WElwifcYb9"
					},
          {
						textFillStyle: '#ffffff',
						fillStyle: '#bea181',
						text:'Teste 4',
            desc: "https://chat.whatsapp.com/C4JyGbUEkxy9WElwifcYb9"
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
}
.modal-container {
        /* width: 90%; */
    width: 33%;
    height: 202px;
}
.modal-footer .modal-default-button {
      margin: 66px 0 0 0;
}
@media screen and (max-width: 600px) {
     .modal-container {
        width: 85%;
        padding: 20px 10px;
        font-size: 13px;
        
}  
.vue-winwheel .wheel-wrapper .btn.btn-play {
    width: 300px;
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
</style>