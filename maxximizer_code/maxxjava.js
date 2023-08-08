 let slideIndex = 1;

        function moveSlide(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            const slides = document.getElementsByClassName("slide");
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
            }
        }

        // Show the first slide on page load
        showSlides(slideIndex);

        // Function to toggle magnification effect
        function toggleMagnify(img) {
            if (img.classList.contains("magnify")) {
                img.classList.remove("magnify");
                img.classList.add("demagnify");
            } else {
                img.classList.remove("demagnify");
                img.classList.add("magnify");
            }
        }
