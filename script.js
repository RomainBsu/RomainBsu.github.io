window.addEventListener('beforeunload', function() {
    // Disable scroll restoration
    history.scrollRestoration = 'manual';
  });

const image_presentation = document.getElementsByClassName("imageidentite")[0].getElementsByTagName("img")[0];
image_presentation.addEventListener("click", function() {
    image_presentation.classList.add("flip-animation");
    image_presentation.addEventListener("animationend", function() {
        image_presentation.classList.remove("flip-animation");
    }, { once: true });
});

window.addEventListener("load", function() {
    var elements = document.querySelectorAll(".presentation");
    elements.forEach(function(element) {
      element.classList.add("show");
    });
  });

$(window).scroll(function() {
    $(".timeline").each(function() {
        var position = $(this).offset().top;
        var scrollPosition = $(window).scrollTop() + $(window).height();
    
        if (scrollPosition > position) {
          $(this).addClass("show");
        }
      });
    $(".competences").each(function() {
        var position = $(this).offset().top;
        var scrollPosition = $(window).scrollTop() + $(window).height();
    
        if (scrollPosition > position) {
          $(".skillrow").addClass("show");
          $(".skillarrow").addClass("show");
          $(".skillrowpercent").addClass("show");
        }
    });
});

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var target = $(this.getAttribute('href'));
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
      }
    });
  });

  let open = false;
  const firmenich = document.getElementsByClassName("firmenich")[0];
  const nokia = document.getElementsByClassName("nokia")[0];
  const fnac = document.getElementsByClassName("fnac")[0];
  const firmenichp = document.getElementsByClassName("firmenichinfo")[0];
  const nokiap = document.getElementsByClassName("nokiainfo")[0];
  const fnacp = document.getElementsByClassName("fnacinfo")[0];
  
  firmenich.style.transition = "0.3s ease";
  nokia.style.transition = "0.3s ease";
  fnac.style.transition = "0.3s ease";
  document.getElementById("img1").style.transition = "0.3s ease";
  document.getElementById("title1").style.transition = "0.3s ease";
  document.getElementById("img2").style.transition = "0.3s ease";
  document.getElementById("title2").style.transition = "0.3s ease";
  document.getElementById("img3").style.transition = "0.3s ease";
  document.getElementById("title3").style.transition = "0.3s ease";
  
  let previousCategory = "";
  
  

  const smallScreenAnimation = function() {
    resetCategories();
    firmenich.addEventListener("click", function() {
      if (previousCategory === "firmenich") {
        resetCategories();
      } else {
        open = true;
        firmenich.classList.add('hover-effect');
        firmenich.style.width = "90%";
        firmenich.style.backgroundImage = "none";
        firmenich.style.filter = "brightness(100%)";
  
        firmenich.style.display = "block";
        firmenichp.style.visibility = "visible";
        firmenichp.style.display = "flex";
  
        nokia.style.width = "90%";
        nokia.style.backgroundImage = "url(nokia_background.jpg)";
        nokia.style.display = "flex";
        nokiap.style.visibility = "hidden";
        nokiap.style.display = "none";
        nokia.style.filter = "";
        nokia.classList.remove('hover-effect');
  
        fnac.style.width = "90%";
        fnac.style.backgroundImage = "url(fnac_background.jpg)";
        fnac.style.display = "flex";
        fnacp.style.visibility = "hidden";
        fnacp.style.display = "none";
        fnac.style.filter = "";
        fnac.classList.remove('hover-effect');
        previousCategory = "firmenich";
      }
    });
    
    nokia.addEventListener("click", function() {
      if (previousCategory === "nokia") {
        resetCategories();
      } else {
        open = true;
        firmenich.style.display = "flex";
        firmenich.style.width = "90%";
        firmenich.style.backgroundImage = "url(firmenich_image.jpg)";
        firmenichp.style.visibility = "hidden";
        firmenichp.style.display = "none";
        firmenich.style.filter = "";
        firmenich.classList.remove('hover-effect');
  
  
        nokia.classList.add('hover-effect');
        nokia.style.width = "90%";
        nokia.style.backgroundImage = "none";
        nokia.style.filter = "brightness(100%)";
        nokia.style.display = "block";
        nokiap.style.visibility = "visible";
        nokiap.style.display = "flex";
  
        fnac.style.width = "90%";
        fnac.style.backgroundImage = "url(fnac_background.jpg)";
        fnacp.style.visibility = "hidden";
        fnacp.style.display = "none";
        fnac.style.display = "flex";
        fnac.style.filter = "";
        fnac.classList.remove('hover-effect');
        previousCategory = "nokia";
      }
    });
    
    fnac.addEventListener("click", function() {
      if (previousCategory === "fnac") {
        resetCategories();
      } else {
        open = true;
        firmenich.style.filter = "";
        firmenich.style.display = "flex";
        firmenich.style.width = "90%";
        firmenich.style.backgroundImage = "url(firmenich_image.jpg)";
        firmenichp.style.visibility = "hidden";
        firmenichp.style.display = "none";
        firmenich.classList.remove('hover-effect');
        
        nokia.style.width = "90%";
        nokia.style.backgroundImage = "url(nokia_background.jpg)";
        nokiap.style.visibility = "hidden";
        nokiap.style.display = "none";
        nokia.style.display = "flex";
        nokia.style.filter = "";
        nokia.classList.remove('hover-effect');
  
        fnac.classList.add('hover-effect');
        fnac.style.filter = "brightness(100%)";
        fnac.style.width = "90%";
        fnac.style.backgroundImage = "none";
        fnac.style.display = "block";
        previousCategory = "fnac";
        fnacp.style.visibility = "visible ";
        fnacp.style.display = "flex";
      }
    });
    
    function resetCategories() {
      open = false;
      firmenich.style.display = "flex";
      firmenich.style.width = "90%";
      firmenich.style.backgroundImage = "url(firmenich_image.jpg)";
      nokia.style.display = "flex";
      nokia.style.width = "90%";
      nokia.style.backgroundImage = "url(nokia_background.jpg)";
      fnac.style.display = "flex";
      fnac.style.width = "90%";
      fnac.style.backgroundImage = "url(fnac_background.jpg)";
      previousCategory = "";
      firmenichp.style.visibility = "hidden";
      nokiap.style.visibility = "hidden";
      fnacp.style.visibility = "hidden";
      firmenichp.style.display = "none";
      nokiap.style.display = "none";
      fnacp.style.display = "none";
      document.getElementById("title1").style.height = "20%";
      document.getElementById("img1").style.width = "auto";
      document.getElementById("title2").style.height = "20%";
      document.getElementById("img2").style.width = "auto";
      document.getElementById("title3").style.height = "20%";
      document.getElementById("img3").style.width = "auto";
      document.getElementById("img3").style.height = "auto";
      firmenich.classList.remove('hover-effect');
      nokia.classList.remove('hover-effect');
      fnac.classList.remove('hover-effect');
      firmenich.style.filter = "";
      nokia.style.filter = "";
      fnac.style.filter = "";
    }
    if(open == true){
      open = false;
    }
    else{
      resetCategories();
    }
  };
  
  const mediumScreenAnimation = function() {
    resetCategories();
    firmenich.addEventListener("click", function() {
      if (previousCategory === "firmenich") {
        resetCategories();
      } else {
        open = true;
        firmenich.classList.add('hover-effect');
        firmenich.style.width = "70%";
        firmenich.style.backgroundImage = "none";
        firmenich.style.filter = "brightness(100%)";
  
        firmenich.style.display = "block";
        firmenichp.style.visibility = "visible";
        firmenichp.style.display = "flex";
  
        nokia.style.backgroundImage = "url(nokia_background.jpg)";
        nokia.style.width = "10%";
        nokia.style.display = "flex";
        nokiap.style.visibility = "hidden";
        nokiap.style.display = "none";
        nokia.style.filter = "";
        nokia.classList.remove('hover-effect');
  
        fnac.style.backgroundImage = "url(fnac_background.jpg)";
        fnac.style.width = "10%";
        fnac.style.display = "flex";
        fnacp.style.visibility = "hidden";
        fnacp.style.display = "none";
        fnac.style.filter = "";
        fnac.classList.remove('hover-effect');
        previousCategory = "firmenich";
    
        
        document.getElementById("img1").style.width = "auto";
        document.getElementById("img1").style.height = "auto";
  
        document.getElementById("img2").style.width = "100%";
        document.getElementById("title2").style.height = "10%";
  
        document.getElementById("img3").style.width = "50%";
        document.getElementById("img3").style.height = "80%";
        document.getElementById("title3").style.height = "10%";
      }
    });
    
    nokia.addEventListener("click", function() {
      if (previousCategory === "nokia") {
        resetCategories();
      } else {
        open = true;
        firmenich.style.display = "flex";
        firmenich.style.width = "10%";
        firmenich.style.backgroundImage = "url(firmenich_image.jpg)";
        firmenichp.style.visibility = "hidden";
        firmenichp.style.display = "none";
        firmenich.style.filter = "";
        firmenich.classList.remove('hover-effect');
  
  
        nokia.classList.add('hover-effect');
        nokia.style.width = "70%";
        nokia.style.backgroundImage = "none";
        nokia.style.filter = "brightness(100%)";
        nokia.style.display = "block";
        nokiap.style.visibility = "visible";
        nokiap.style.display = "flex";
  
        fnac.style.backgroundImage = "url(fnac_background.jpg)";
        fnac.style.width = "10%";
        fnacp.style.visibility = "hidden";
        fnacp.style.display = "none";
        fnac.style.display = "flex";
        fnac.style.filter = "";
        fnac.classList.remove('hover-effect');
        previousCategory = "nokia";
  
        document.getElementById("img2").style.width = "auto";
        document.getElementById("img2").style.height = "auto";
  
        document.getElementById("img1").style.width = "100%";
        document.getElementById("title1").style.height = "10%";
  
        document.getElementById("img3").style.width = "50%";
        document.getElementById("img3").style.height = "80%";
        document.getElementById("title3").style.height = "10%";
      }
    });
    
    fnac.addEventListener("click", function() {
      if (previousCategory === "fnac") {
        resetCategories();
      } else {
        open = true;
        firmenich.style.filter = "";
        firmenich.style.display = "flex";
        firmenich.style.width = "10%";
        firmenich.style.backgroundImage = "url(firmenich_image.jpg)";
        firmenichp.style.visibility = "hidden";
        firmenichp.style.display = "none";
        firmenich.classList.remove('hover-effect');
        
        nokia.style.backgroundImage = "url(nokia_background.jpg)";
        nokia.style.width = "10%";
        nokiap.style.visibility = "hidden";
        nokiap.style.display = "none";
        nokia.style.display = "flex";
        nokia.style.filter = "";
        nokia.classList.remove('hover-effect');
  
        fnac.classList.add('hover-effect');
        fnac.style.filter = "brightness(100%)";
        fnac.style.width = "70%";
        fnac.style.backgroundImage = "none";
        fnac.style.display = "block";
        previousCategory = "fnac";
        fnacp.style.visibility = "visible ";
        fnacp.style.display = "flex";
  
        document.getElementById("img3").style.width = "80px";
        document.getElementById("img3").style.height = "80px";
  
        document.getElementById("img1").style.width = "100%";
        document.getElementById("title1").style.height = "10%";
  
        document.getElementById("img2").style.width = "100%";
        document.getElementById("title2").style.height = "10%";
  
        document.getElementById("title3").style.height = "10%";
      }
    });
    
    function resetCategories() {
      open = false;
      firmenich.style.display = "flex";
      firmenich.style.width = "400px";
      firmenich.style.backgroundImage = "url(firmenich_image.jpg)";
      nokia.style.display = "flex";
      nokia.style.width = "400px";
      nokia.style.backgroundImage = "url(nokia_background.jpg)";
      fnac.style.display = "flex";
      fnac.style.width = "400px";
      fnac.style.backgroundImage = "url(fnac_background.jpg)";
      previousCategory = "";
      firmenichp.style.visibility = "hidden";
      nokiap.style.visibility = "hidden";
      fnacp.style.visibility = "hidden";
      firmenichp.style.display = "none";
      nokiap.style.display = "none";
      fnacp.style.display = "none";
      document.getElementById("title1").style.height = "20%";
      document.getElementById("img1").style.width = "auto";
      document.getElementById("title2").style.height = "20%";
      document.getElementById("img2").style.width = "auto";
      document.getElementById("title3").style.height = "20%";
      document.getElementById("img3").style.width = "auto";
      document.getElementById("img3").style.height = "auto";
      firmenich.classList.remove('hover-effect');
      nokia.classList.remove('hover-effect');
      fnac.classList.remove('hover-effect');
      firmenich.style.filter = "";
      nokia.style.filter = "";
      fnac.style.filter = "";
    }
    if(open == true){
      open = false;
    }
    else{
      resetCategories();
    }
  };
  
  const largeScreenAnimation = function() {
    resetCategories();
    firmenich.addEventListener("click", function() {
      if (previousCategory === "firmenich") {
        resetCategories();
      } else {
        open = true;
        firmenich.classList.add('hover-effect');
        firmenich.style.width = "1200px";
        firmenich.style.backgroundImage = "none";
        firmenich.style.filter = "brightness(100%)";
  
        firmenich.style.display = "block";
        firmenichp.style.visibility = "visible";
        firmenichp.style.display = "flex";
  
        nokia.style.width = "150px";
        nokia.style.backgroundImage = "url(nokia_background.jpg)";
        nokia.style.display = "flex";
        nokiap.style.visibility = "hidden";
        nokiap.style.display = "none";
        nokia.style.filter = "";
        nokia.classList.remove('hover-effect');
  
        fnac.style.width = "150px";
        fnac.style.backgroundImage = "url(fnac_background.jpg)";
        fnac.style.display = "flex";
        fnacp.style.visibility = "hidden";
        fnacp.style.display = "none";
        fnac.style.filter = "";
        fnac.classList.remove('hover-effect');
        previousCategory = "firmenich";
    
        
        document.getElementById("img1").style.width = "auto";
        document.getElementById("img1").style.height = "auto";
  
        document.getElementById("img2").style.width = "100%";
        document.getElementById("title2").style.height = "10%";
  
        document.getElementById("img3").style.width = "50%";
        document.getElementById("img3").style.height = "80%";
        document.getElementById("title3").style.height = "10%";
      }
    });
    
    nokia.addEventListener("click", function() {
      if (previousCategory === "nokia") {
        resetCategories();
      } else {
        open = true;
        firmenich.style.display = "flex";
        firmenich.style.width = "150px";
        firmenich.style.backgroundImage = "url(firmenich_image.jpg)";
        firmenichp.style.visibility = "hidden";
        firmenichp.style.display = "none";
        firmenich.style.filter = "";
        firmenich.classList.remove('hover-effect');
  
  
        nokia.classList.add('hover-effect');
        nokia.style.width = "1200px";
        nokia.style.backgroundImage = "none";
        nokia.style.filter = "brightness(100%)";
        nokia.style.display = "block";
        nokiap.style.visibility = "visible";
        nokiap.style.display = "flex";
  
        fnac.style.width = "150px";
        fnac.style.backgroundImage = "url(fnac_background.jpg)";
        fnacp.style.visibility = "hidden";
        fnacp.style.display = "none";
        fnac.style.display = "flex";
        fnac.style.filter = "";
        fnac.classList.remove('hover-effect');
        previousCategory = "nokia";
  
        document.getElementById("img2").style.width = "auto";
        document.getElementById("img2").style.height = "auto";
  
        document.getElementById("img1").style.width = "100%";
        document.getElementById("title1").style.height = "10%";
  
        document.getElementById("img3").style.width = "50%";
        document.getElementById("img3").style.height = "80%";
        document.getElementById("title3").style.height = "10%";
      }
    });
    
    fnac.addEventListener("click", function() {
      if (previousCategory === "fnac") {
        resetCategories();
      } else {
        open = true;
        firmenich.style.filter = "";
        firmenich.style.display = "flex";
        firmenich.style.width = "150px";
        firmenich.style.backgroundImage = "url(firmenich_image.jpg)";
        firmenichp.style.visibility = "hidden";
        firmenichp.style.display = "none";
        firmenich.classList.remove('hover-effect');
        
        nokia.style.width = "150px";
        nokia.style.backgroundImage = "url(nokia_background.jpg)";
        nokiap.style.visibility = "hidden";
        nokiap.style.display = "none";
        nokia.style.display = "flex";
        nokia.style.filter = "";
        nokia.classList.remove('hover-effect');
  
        fnac.classList.add('hover-effect');
        fnac.style.filter = "brightness(100%)";
        fnac.style.width = "1200px";
        fnac.style.backgroundImage = "none";
        fnac.style.display = "block";
        previousCategory = "fnac";
        fnacp.style.visibility = "visible ";
        fnacp.style.display = "flex";
  
        document.getElementById("img3").style.width = "80px";
        document.getElementById("img3").style.height = "80px";
  
        document.getElementById("img1").style.width = "100%";
        document.getElementById("title1").style.height = "10%";
  
        document.getElementById("img2").style.width = "100%";
        document.getElementById("title2").style.height = "10%";
  
        document.getElementById("title3").style.height = "10%";
      }
    });
    
    function resetCategories() {
      open = false;
      firmenich.style.display = "flex";
      firmenich.style.width = "500px";
      firmenich.style.backgroundImage = "url(firmenich_image.jpg)";
      nokia.style.display = "flex";
      nokia.style.width = "500px";
      nokia.style.backgroundImage = "url(nokia_background.jpg)";
      fnac.style.display = "flex";
      fnac.style.width = "500px";
      fnac.style.backgroundImage = "url(fnac_background.jpg)";
      previousCategory = "";
      firmenichp.style.visibility = "hidden";
      nokiap.style.visibility = "hidden";
      fnacp.style.visibility = "hidden";
      firmenichp.style.display = "none";
      nokiap.style.display = "none";
      fnacp.style.display = "none";
      document.getElementById("title1").style.height = "20%";
      document.getElementById("img1").style.width = "auto";
      document.getElementById("title2").style.height = "20%";
      document.getElementById("img2").style.width = "auto";
      document.getElementById("title3").style.height = "20%";
      document.getElementById("img3").style.width = "auto";
      document.getElementById("img3").style.height = "auto";
      firmenich.classList.remove('hover-effect');
      nokia.classList.remove('hover-effect');
      fnac.classList.remove('hover-effect');
      firmenich.style.filter = "";
      nokia.style.filter = "";
      fnac.style.filter = "";
    }
    if(open == true){
      resetCategories();
    }
    else{
      resetCategories();
    }
  };
  

const updateAnimation = function() {
  const screenWidth = window.innerWidth;
  open = false;
    if (screenWidth <= 1410) {
      smallScreenAnimation();
    } else if (screenWidth <= 1540) {
      mediumScreenAnimation();
    } else {
      largeScreenAnimation();
    }
};

window.addEventListener('load', updateAnimation);
window.addEventListener('resize', updateAnimation);

function showProject(projectId) {
  let allProjects = document.getElementsByClassName("affichageprojets")[0].getElementsByClassName("project");

  Array.from(allProjects).forEach(project => {
    project.style.display = "none";
  });

  let projectElement = document.getElementsByClassName(projectId)[0];

  if (projectElement) {
    console.log(projectElement);
    if (projectElement.style.display === "" || projectElement.style.display === "none") {
      projectElement.style.display = "flex";
    } else {
      projectElement.style.display = "none";
    }
  }
}