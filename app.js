document.getElementById("personalDataForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
   
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;
    var hobby = document.getElementById("hobby").value;
    
 
    var resultWindow = window.open("Resultados", "width=400,height=200");
  
    resultWindow.document.write("<h2>RESULDADOS</h2>");
    resultWindow.document.write("<h2>Bien hecho</h2>");
    resultWindow.document.write("<p><strong>Nombre:</strong> " + name + "</p>");
    resultWindow.document.write("<p><strong>Edad:</strong> " + age + "</p>");
    resultWindow.document.write("<p><strong>Ciudad donde vives:</strong> " + city + "</p>");
    resultWindow.document.write("<p><strong>Pasatiempo favorito:</strong> " + hobby + "</p>");
    
    resultWindow.document.write("<button onclick=\"window.location.href = 'confirm.html';\">Volver a ingresar datos</button>");
  });