let input = document.getElementById('parolaInput');
let dataNascita = document.getElementById('input2');
let popup = document.getElementById('popup');
let nomeRegistrati = document.getElementById('nomeReg');
let emailRegistrati = document.getElementById('emailReg');
let contenuto = document.createElement('div');
let finestra;
let Pubblicità = document.getElementById('pubblicita');
let chiudiPubblicita = document.getElementById('chiudi');
let chiudiPop = document.getElementById('chiudi1');

window.addEventListener("DOMContentLoaded", (event) => {
    const registrazione = document.getElementById('reg');
    const button = document.getElementById('cerca');
    const TornareHome = document.getElementById('content');
    let load = document.getElementById('loader');

    if (registrazione) {
        registrazione.addEventListener('click', function () {

            if (nomeRegistrati.value === '' || emailRegistrati.value === '' || dataNascita.value === '') {
                alert('Per registrarti, devi compilare tutti i campi,Riprova');
            }
            else {
                popup.style.display = 'block';
                load.style.display = 'block';
                /*finestra.document.body.innerHTML='<p style="text-align: center; font-size:130%" id="cont"> Registrazione completata!</p><p style="text-align: center; font-size:130%;">Tornando alla Home</p>';*/
                setTimeout(function () {
                    /*finestra.close();*/
                    popup.style.display = 'none';
                    load.style.display = 'none';
                    window.location.href = 'Home.html';
                }, 1000);
                /*
                finestra = window.open("","_blank","width=500,height=400 ");
                contenuto.innerHTML='<body><p style="text-align: center; font-size:130%" id="cont"> Registrazione completata!</p><button  style=" margin-left:35%; font-size:120%; border-radius:15px; background-color: red; padding:10px 10px 10px;">Torna alla Home</button>';
                finestra.document.write(contenuto.innerHTML);
                finestra.style.display = 'block';
                */
            }
        });
    }
    if (TornareHome) {
        TornareHome.addEventListener('click', function () {
            location.href = "Home.html";
            popup.close();
            popup.style.display = 'none';
        });
    }


    if (Pubblicità) {
        setTimeout(function () {
            mostraPubblicita();
        }, 3000);
        function mostraPubblicita() {
            Pubblicità.style.display = 'block';

            Pubblicità.addEventListener('mouseover', function () {
                Pubblicità.style.opacity = '0.7';
                Pubblicità.style.cursor = "pointer";
            });
            Pubblicità.addEventListener('mouseout', function () {
                Pubblicità.style.opacity = '1';
            });
        }
        chiudiPubblicita.addEventListener('click', function () {
            Pubblicità.style.display = 'none';
        });

    }
    let bottonIscrizione = document.getElementById('bottonLetter');
    let iscrivitiNewsletter = document.getElementById('newPag');
    let contenutoNewsletter = document.getElementById('Contenuto');
    let inputNews = document.getElementById('input-new');
    let InserireEmail = document.getElementById('message-divv');
    let PubblicitaBody = document.getElementById('inscurire');
    function BodyOpacityOn() {
        PubblicitaBody.style.display = 'block';
    }

    if (iscrivitiNewsletter) {
        iscrivitiNewsletter.addEventListener('click', function () {
            contenutoNewsletter.style.display = "block";
            Pubblicità.style.display = "none";
            BodyOpacityOn();
        });

        bottonIscrizione.addEventListener('click', function (ev) {

            if (inputNews.value === "") {

                ev.preventDefault();
                InserireEmail.innerText = '! Devi inserire una email per iscriverti alla nostra Newsletter';
                InserireEmail.classList.remove('hidden');
                InserireEmail.style.display = 'block';

                InserireEmail.style.color = "white";
                InserireEmail.style.fontWeight = "bold";
                setTimeout(function () {
                    InserireEmail.style.display = 'none';
                }, 4000);
            }
            else {
                location.href = "sign-in.html";
            }
        });
        function BodyOpacityOff() {
            PubblicitaBody.style.display = 'none';
        }
        chiudiPop.addEventListener('click', function () {
            contenutoNewsletter.style.display = 'none';
            BodyOpacityOff();
        });
    }
    
    window.onload = function() {

        const headerFrame=document.getElementById('headerIframe').contentWindow.document;
        const footerFrame=document.getElementById('footerIframe').contentWindow.document;
        var url;
        const headerLinks = headerFrame.querySelectorAll('a');
        headerLinks.forEach(function(link) {
          link.addEventListener('click', function(evento) {
            evento.preventDefault();
            var url = link.getAttribute('href');
            window.location.href = url;
          });
        });
      

        const footerLinks = footerFrame.querySelectorAll('a');
        footerLinks.forEach(function(link) {
          link.addEventListener('click', function(evento) {
            evento.preventDefault();
            url = link.getAttribute('href');
            window.location.href = url;
          });
        });
      };
    let azioneBtn = document.querySelector('.tog-btn');
    let dropDown = document.querySelector('.dropdown_menu');
    if (azioneBtn) {
        azioneBtn.addEventListener('click', function () {
            dropDown.classList.toggle('aperto');
            dropDown.style.height = "900px";
        });
    }

    if (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            if (input.value === 'Auto' || input.value === 'Mercedes GT' || input.value === 'Mercedes amg c63s' || input.value === 'Mercedes GT Coupé4') {
                location.href = "Home.html";
                input.value = '';
            } else {
                alert('Devi inserire una macchina TechCar per trovarla, riprova');
                input.value = '';
            }
        });
    }
    let slideIniziale = 0;
    showSlides();
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("image-slide");
        let punto = document.getElementsByClassName("punto");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIniziale++;
        if (slideIniziale > slides.length) {
            slideIniziale = 1;
        }

        for (i = 0; i < punto.length; i++) {
            punto[i].className = punto[i].className.replace(" active", "");
        }
        slides[slideIniziale - 1].style.display = "block";
        punto[slideIniziale - 1].className += " active";
        setTimeout(showSlides, 2500);
    }

    function fadeInOnScroll() {
        var elements = document.querySelectorAll('.fade');

        elements.forEach(function (elemento) {
            var elementPosition = elemento.getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                elemento.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();




});
function resetinput() {
    dataNascita.value = '';
}