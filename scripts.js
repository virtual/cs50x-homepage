document.addEventListener('DOMContentLoaded', (event) => {
    let grid = document.querySelectorAll(".image-grid.homepage-grid > div");
    if (grid) {
       loadImages(grid, 'artists', 'jpg');
    }
    todaysDate = new Date();
    todaysDate.setHours(0, 0, 0, 0);
    pickedDatestr = "19-Nov-2021"
    var pickedDate = new Date(Date.parse(pickedDatestr.replace(/-/g, " ")));
    if (pickedDate <= todaysDate) {
        let alert = document.querySelector(".alert.d-none");
        let fgrid = document.querySelectorAll(".image-grid.image-smile > div");
        if (fgrid) {
            loadImages(fgrid, 'f3');
        }
        if (alert) {
            alert.classList.remove("d-none");
        }
    }
});

function loadImages(grid, path, ext="png") {
    let i = 0;
    for (const griditem of grid) {
        if (griditem.classList.contains('active')) { 
            griditem.dataset.imgid = i;
            griditem.dataset.imgpath = path;
            i++;

            griditem.addEventListener('click', function(event) {
                showImg(this, griditem.dataset.imgid, griditem.dataset.imgpath, ext)
            });
        }
    }
} 
function showImg(el, id, path, ext) {
    el.style.backgroundImage = `url('./resources/images/${path}/${id}.${ext}')`;
}