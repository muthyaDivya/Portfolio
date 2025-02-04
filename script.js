function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  }

  window.addEventListener('scroll', function () {
    const button = document.getElementById('floatingButton');
    if (window.scrollY > 200) {
      button.style.display = 'flex';
    } else {
      button.style.display = 'none';
    }
  });



//!   card video's controls

const rpsVideo = document.getElementById('rpsVideo');

    // Play the video on hover
    rpsVideo.addEventListener('mouseenter', () => {
      rpsVideo.play();
    });

    // Pause the video when the mouse leaves
    rpsVideo.addEventListener('mouseleave', () => {
        rpsVideo.pause();
    });

const quoteVideo = document.getElementById('quoteVideo');

    // Play the video on hover
    quoteVideo.addEventListener('mouseenter', () => {
      quoteVideo.play();
    });

    // Pause the video when the mouse leaves
    quoteVideo.addEventListener('mouseleave', () => {
        quoteVideo.pause();
    });

const numberVideo = document.getElementById('numberVideo');

    // Play the video on hover
    numberVideo.addEventListener('mouseenter', () => {
        numberVideo.play();
    });

    // Pause the video when the mouse leaves
    numberVideo.addEventListener('mouseleave', () => {
        numberVideo.pause();
    });

// ! code to download cv when 'Download CV' is clicked
const downloadCV = document.getElementById('downloadcv');
console.log(downloadCV);
downloadCV.addEventListener('click', () =>{
    const newLink = document.createElement('a');
    newLink.href = 'files/Readme.doc';
    newLink.download ='Readme.doc';
    console.log(newLink);
    // click on link automatically
    newLink.click();
});

    // ! Scroll to contact section when 'Contact Me' is clicked
const contactMe = document.getElementById('contactme');
const contact = document.getElementById('contact');
contactMe.addEventListener('click', () =>{
    contact.scrollIntoView({behavior:"smooth"})
});