"use strict";(self.webpackChunkbelajar_webpack_code=self.webpackChunkbelajar_webpack_code||[]).push([[826],{720:(e,t,r)=>{const a=(...e)=>e.every((e=>"number"==typeof e&&!isNaN(e)));var n,o,s;r(185),n=new class{constructor(){this.error=document.querySelector("#error")}tampilkanErrorPenjumlahan=(e,t)=>{const r=e.reduce(((e,r,n)=>a(t[n])?e+"":e+`${r} itu bukan angka! `),"Silahkan masukkan angka yang benar: ");this.error.classList.remove("d-none"),this.error.innerText=r};sembunyikanError=()=>this.error.classList.add("d-none")},o=new class{constructor(){this.operand1=document.querySelector("#operand1"),this.operand2=document.querySelector("#operand2"),this.tombolTambah=document.querySelector("#tombol-tambah"),this.hasil=document.querySelector("#hasil")}getInput(){return[this.operand1.value,this.operand2.value]}setResult(e,t){this.hasil.innerText=e+t}onClick(e){this.tombolTambah.addEventListener("click",e)}},s=new class{constructor(){this.tombolJokes=document.querySelector("#jokes-receh"),this.modalBody=document.querySelector(".modal-body")}setModal(e){this.modalBody.innerHTML=e}onClick(e){this.tombolJokes.addEventListener("click",e)}},n.sembunyikanError(),o.onClick((()=>{n.sembunyikanError();const e=o.getInput(),t=((...e)=>e.map((e=>parseInt(e))))(...e);if(a(...t)){const[e,r]=t;o.setResult(e,r)}else o.setResult(""),n.tampilkanErrorPenjumlahan(e,t)})),s.onClick((()=>{fetch("https://candaan-api.vercel.app/api/text/random").then((e=>e.json())).then((e=>{s.setModal(e.data)}))}))}},e=>{e(e.s=720)}]);