const bonTouch = document.getElementById('bonTouch');
const formulair = document.getElementById('formulair');
const formAjoute = document.forms['formAjoute']


  formAjoute.addEventListener('submit',function(event){
     event.preventDefault();
    let array = ['image','Fullname','post', 'Nationalite','Prix']
  let IsValide = true;
  array.forEach(ell =>{
     if(formAjoute.elements[ell].value == ''){
        formAjoute.elements[ell].classList.add('border-red')
        IsValide =false
     }else{
        formAjoute.elements[ell].classList.add('border-gray-300')
     }
  })

  if(IsValide){
      bonTouch.innerHTML += `<div class="w-30  h-47 bg-blue-950 border-blue-500 rounded-b-sm">
            <img src="1244-1760996162.png" alt="photo de joueur" >
            <div class="bg-white">${formAjoute.elements['Fullname'].value}</div>
            <div class="bg-amber-400 rounded-[50%] w-8 h-8 content-center font-bold absolute top-0 left-0">${formAjoute.elements['post'].value}</div>
            <div class="bg-red-600">${formAjoute.elements['Nationalite'].value}</div>
            <div class="bg-blue-400">${formAjoute.elements['Prix'].value} M$</div>

         </div>`

         formulair.classList.add('hidden')
  }
    
  })

  const afiche_modul = document.getElementById("afiche_modul")

  afiche_modul.addEventListener("click",()=>{
    formulair.classList.remove('hidden')
  })