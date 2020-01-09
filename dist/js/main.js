//  const navBar = document.querySelector('.navbar-toggler');

// function onClickNavBar(){
//     navBar.classList.toggle('change');
//     // document.getElementById("navbar-toggler").classList.toggle("change")
// }

$(document).ready(() => {

    //   magnific popup
    $('.magnificPop').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{ //show next photo 
            enabled: true
        }
        // other options
    });

    
    
    $(".navbar-toggler").click(function(){
        $('.navbar-toggler').toggleClass('change')
    })

    // Sticky navBar less padding i.e stop the nav bar from moving
    $(window).scroll(() =>{
        let position = $(this).scrollTop();
        // console.log(position);
        if(position > 678 ){
            let navbar = document.getElementById('navbar');
            navbar.style.background = 'rgba(115, 119, 119, 0.555)'
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');            
        }
        else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top'); 
        }
    });

     // smooth scroll Add smooth scrolling to all links
    $(".nav-item a, .arrow-link ").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;

        $('html, body').stop().animate({
            scrollTop: $(hash).offset().top
        }, 2000, function(){
    
            window.location.hash = hash;
        });
        } // End if
    });


    // $(".navbar").hide(); //Hide the navigation bar first

    // $(window).scroll(function () {  //Listen for the window's scroll event
    //     if (isScrolledAfterElement(".class")) { //if it has scrolled beyond the #content elment
    //         $('.navbar').fadeIn();  //Show the navigation bar
    //     } else {
    //         $('.navbar').fadeOut(); //Else hide it
    //     }
    // });

    // // JavaScript  function
    // //Function that returns true if the window has scrolled beyond the given element
    // function isScrolledAfterElement(elem) {
    //     var $elem = $(elem);
    //     var $window = $(window);

    //     var docViewTop = $window.scrollTop();
    //     var docViewBottom = docViewTop + $window.height();

    //     var elemTop = $elem.offset().top;

    //     return elemTop <= docViewBottom;
    // }
})

function page1Func(){ window.open("https://sushi-restaurant-web.herokuapp.com", '_blank')}
function page1GFunc(){ window.open("https://github.com/moelatt/NodeJS-MongoDb-Express-HTML-CSS-JS", '_blank') }

function page2Func(){ window.open("https://moelatt.github.io/reminder-with-data-base/", '_blank')}
function page2GFunc(){ window.open("https://github.com/moelatt/reminder-with-data-base", '_blank')}

function page3Func(){ window.open("https://moelatt.github.io/Car_Blog_HTML-CSS/",'_blank')}
function page3GFunc(){ window.open("https://github.com/moelatt/Car_Blog_HTML-CSS", '_blank')}

