const miNombre = 'Anibal Montero';
//document.getElementById('cabecera').innerHTML = 'CABECERA';
document.querySelector('header').innerHTML = 'ENCABEZADO';
document.getElementById(
  'footer'
).innerHTML = `Footer - Copyright \u00A9 ${miNombre}`;
