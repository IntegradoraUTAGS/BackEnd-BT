//jsPDF
var vacantes = [
    { "firstName": "John", "lastName": "Doe" },
    { "firstName": "Anna", "lastName": "Smith" },
    { "firstName": "Peter", "lastName": "Jones" }
];

var doc = new jsPDF();
vacantes.forEach(function(vancante, i) {
    doc.text(20, 10 + (i * 10),
        "Carrera: " + employee.carreras +
        "Perfil: " + employee.firstName +
        "requiere: " + employee.lastName +
        "horario: " + employee.horario +
        "prestaciones: " + employee.prestaciones +
        "dirigidoA: " + employee.dirigido +
        "dirigidopersona: " + employee.dirigido.per +
        "sueldo: " + employee.sueldo +
        "idioma: " + employee.idioma +
        "Fecha Limite:" + employee.fechal +
        "Estado: " + employee.estado);
});

doc.save('vacante.pdf');