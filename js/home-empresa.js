//CUESTIONARIO DE VACANTES

//contenedor de vacantes 
const jobVacantsSection = $('#job-vacants-section');

// Esta función guarda el valor de la primer pregunta(select)
var question1 = $( "#question1" ) ;

const savingSelectedOption = ()=>{
   $( "#question1 option:selected" ).each(function() {
        question1 = $( this ).text() + " ";
        // console.log(question1);
        return question1;
    });
}
question1.change(savingSelectedOption);

// Esta función guarda los valores del resto de las preguntas
submitBtn = $ ( "#submit-btn" )
const savingAnswers = (e)=>{
    e.preventDefault();
    const question2 = $( "#question2" ).val();
    const question3 = $( "#question3").val();
    const question4 = $( "#question4").val();
    const question5 = $( "#question5").val();
    const question6 = $( "#question6").val();
    const question7 = $( "#question7").val();
paintingJobVacant(question2,question3,question4,question5,question6,question7);
};
submitBtn.click(savingAnswers);

//funcion que pinta la vacante 
const paintingJobVacant = (q2, q3, q4, q5, q6, q7) => {
   let template
    template += `<div class="card">
    <div class="card-header">
    <button type="button" class="btn btn-danger right">X</button>
    </div>
    <div class="card-body">
      <h5 class="card-title">TITLE</h5>
      <h6>Capacidades</h6>
      <p class="card-text">${q2}</p>
      <h6>Día a día</h6>
      <p class="card-text">${q3}</p>
      <h6>Valor</h6>
      <p class="card-text">${q4}</p>
      <h6>Sueldo y ezquema de pago</h6>
      <p class="card-text">${q5}</p>
      <h6>Prestaciones</h6>
      <p class="card-text">${q6}</p>
      <h6>Capacidades</h6>
      <p class="card-text">${q7}</p>
      <a href="#" class="btn btn-primary">Editar</a>
    </div>
  </div>`

  jobVacantsSection.html(template);
 }