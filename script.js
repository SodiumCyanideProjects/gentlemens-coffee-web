document.title =
websiteData.brand.name;



// HEADER

document.getElementById("brand-name").textContent =
websiteData.brand.name;

document.getElementById("brand-subtitle").textContent =
websiteData.brand.subtitle;



// HERO


document.getElementById("logo").src =
websiteData.images.logo;


document.getElementById("hero").style.backgroundImage =

`
linear-gradient(
rgba(20,10,5,.65),
rgba(20,10,5,.65)
),
url('${websiteData.images.hero}')
`;



document.getElementById("slogan").textContent =
websiteData.brand.slogan;



document.getElementById("hero-text").textContent =
websiteData.brand.heroText;



document.getElementById("hero-button").textContent =
websiteData.brand.button;






// ABOUT


document.getElementById("about-title").textContent =
websiteData.about.title;



let aboutHTML = "";


websiteData.about.paragraphs.forEach(text=>{


aboutHTML += `<p>${text}</p>`;


});


document.getElementById("about-text").innerHTML =
aboutHTML;




document.getElementById("about-image1").src =
websiteData.images.about1;


document.getElementById("about-image2").src =
websiteData.images.about2;







// SERVICES


document.getElementById("services-title").textContent =
websiteData.services.title;



let servicesHTML="";



websiteData.services.items.forEach(service=>{


servicesHTML += `

<div class="service-card hidden">

<h3>${service.title}</h3>

<p>${service.text}</p>

</div>

`;

});



document.getElementById("services-container").innerHTML =
servicesHTML;







// CONTACT


document.getElementById("contact-title").textContent =
websiteData.contact.title;


document.getElementById("contact-intro").textContent =
websiteData.contact.intro;


document.getElementById("contact-company").textContent =
websiteData.contact.company;


document.getElementById("contact-phone").textContent =
"Tel.: " + websiteData.contact.phone;


document.getElementById("contact-email").textContent =
"E-mail: " + websiteData.contact.email;




document.getElementById("footer-text").textContent =
websiteData.contact.footer;









// ANIMACE

const elements =
document.querySelectorAll(".hidden");



const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}

else{

entry.target.classList.remove("show");

}


});


},{

threshold:.15

});



elements.forEach(element=>{

observer.observe(element);

});

window.addEventListener("load", ()=>{


    const loader = document.querySelector(".loader");


    setTimeout(()=>{

        loader.classList.add("hide");

    },1500);


});