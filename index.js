        // TOGGLE NAVBAR

        // const menuBtn = document.querySelector(".nav-menu-btn");
        // const closeBtn = document.querySelector(".nav-close-btn");
        // const navigationBtn = document.querySelector(".navigation");

        // menuBtn.addEventListener("click", () => {
        //     menuBtn.classList.toggle("active");
        //     navigationBtn.classList.toggle("active");
        // });

        // TOGGLE NAVBAR

        const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".navigation");

        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
        });

        // STICKY NAVBAR
        // NAVIGATION BAR EFFECTS ON SCROLL

        window.addEventListener("scroll", function () {
            const header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        });

        // PORTFOLIO SECTION - MODAL

        const portfolioModals = document.querySelectorAll(".portfolio-modal");
        const imgCards = document.querySelectorAll(".img-card");
        const portfolioCloseBtns= document.querySelectorAll(".portfolio-close-btn");

        var portfolioModal = function(modalClick){
            portfolioModals[modalClick].classList.add("active");
        }
        
        imgCards.forEach((imgCard, i) => {
            imgCard.addEventListener("click", () => {
                portfolioModal(i);
            });
        });

        portfolioCloseBtns.forEach((portfolioCloseBtn) => {
            portfolioCloseBtn.addEventListener("click", () => {
            portfolioModals.forEach((portfolioModalView) => {
                    portfolioModalView.classList.remove("active");
                });
            });
        });