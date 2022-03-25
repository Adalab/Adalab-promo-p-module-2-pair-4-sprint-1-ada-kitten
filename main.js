'use strict';

const list = document.querySelector(".js-list");

const formElement = document.querySelector('.js-new-form');
//formElement.classList.remove('collapsed');
const listName = document.querySelector(".js-list");

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;


//gato1
const kittenName1 = "Anastacio";
const kittenImage1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenRace1 = "British Shorthair";
const kittenDesc1 = "Risueño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
//gato2
const kittenName2 = "Fiona";
const kittenImage2 = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenRace2 = "British Shorthair";
const kittenDesc2 = "Risueño, juguetón, cariñoso, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
//gato3
const kittenName3 = "Cielo";
const KittenImage3 = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenRace3 = "British Shorthair";
const kittenDesc3 = "Risueño, juguetón, cariñoso, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
if (formElement.classList.contains('collapsed')) {
  formElement.classList.remove("collapsed");
  
} else {
  formElement.classList.add("collapsed");
}
const find = document.querySelector(".js-plus");
const form = document.querySelector(".new-form");
find.addEventListener ("click",()=>{form.classList.toggle("collapsed")})
if( kittenDesc1.includes(descrSearchText) ) {
  listName.innerHTML += `<li class="card">
              <article>
                <img src =" ${kittenImage1}"
                />
                <h3 class="card_title">${kittenName1}</h3>
                <h4 class="card_race">${kittenRace1}</h4>
                <p class="card_description">
                ${kittenDesc1}
                </p>
              </article>
            </li>`;
  
 }
 if( kittenDesc2.includes(descrSearchText) ) {
  listName.innerHTML += `<li class="card"> 
  <article>
                <img src =" ${kittenImage2}"
                />
                <h3 class="card_title">${kittenName2}</h3>
                <h4 class="card_race">${kittenRace2}</h4>
                <p class="card_description">
                ${kittenDesc2}
                </p>
              </article>
            </li>`;
  
 }

 if( kittenDesc3.includes(descrSearchText) ) {
  listName.innerHTML += `<li class="card">
  <article>
                <img src =" ${KittenImage3}">
                
                <h3 class="card_title">${kittenName3}</h3>
                <h4 class="card_race">${kittenRace3}</h4>
                <p class="card_description">
                ${kittenDesc3}
                </p>
              </article>
            </li>`;
 
 }


  
  
  
  
  
  
  
 




