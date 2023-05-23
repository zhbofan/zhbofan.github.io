var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})
offcanvasList.forEach(function (offcanvas) {
  offcanvas._element.addEventListener('hidden.bs.offcanvas', function () {
    if (offcanvas._backdrop) {
      offcanvas._backdrop.remove()
    }
  })
})