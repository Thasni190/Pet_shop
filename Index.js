
// Toggle menu in nav Bar
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });


//   carousel
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    let index = 0;

    function showSlide(i) {
        items.forEach((item, idx) => {
            item.classList.toggle("hidden", idx !== i);
        });
    }

    document.getElementById("prevBtn").addEventListener("click", function () {
        index = (index - 1 + items.length) % items.length;
        showSlide(index);
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        index = (index + 1) % items.length;
        showSlide(index);
    });

    showSlide(index);
});




// View More In Our Services
document.getElementById("view-more-btn").addEventListener("click", function () {
    var extraServices = document.getElementById("extra-services");
    if (extraServices.classList.contains("hidden")) {
        extraServices.classList.remove("hidden");
        this.textContent = "View Less";
    } else {
        extraServices.classList.add("hidden");
        this.textContent = "View More";
    }
});




// click AboutUs & Service section
function showAboutUs() {
    console.log("click about");
    
    document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth' });
}

function showService(){
    console.log("click service");
    document.getElementById('serviceSection').scrollIntoView({behavior:'smooth'})
    
}