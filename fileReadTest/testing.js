function isBrowserCompatible(){
  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
  } else {
    alert('The File APIs are not fully supported in this browser, unfortunately this makes this website non compatible, try updating please');
  }
}

function printFileDetails(fileDetails) {
  var output = '<li><strong>' + fileDetails.name + '</strong> </li>';
  document.getElementById('outputDiv').innerHTML = output;
}
