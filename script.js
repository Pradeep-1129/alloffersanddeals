document.addEventListener("DOMContentLoaded", () => {
    
    // ---- DOM Node Element Query Bindings ----
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const scrollToTop = document.getElementById("scrollToTop");
    const leadForm = document.getElementById("leadForm");
    const navLinks = document.querySelectorAll(".mobile-nav a");

    /**
     * 1. Mobile Responsive Toggle Drawer Menu Engine Controls
     */
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle("open");
            mobileMenu.classList.toggle("active");
        });

        // Autoclose side menu tray when a section target tracking layout element link gets clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("open");
                mobileMenu.classList.remove("active");
            });
        });

        // Close side menu if user hits background areas on body workspace canvas fields
        document.addEventListener("click", (e) => {
            if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove("open");
                mobileMenu.classList.remove("active");
            }
        });
    }

    /**
     * 2. Smooth Scroll To Top Button Mechanics with Offset Visibility Triggering
     */
    if (scrollToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollToTop.style.display = "flex";
                // Delay small frame iteration to permit smooth visual hardware acceleration fade in transitions
                setTimeout(() => {
                    scrollToTop.style.opacity = "1";
                }, 10);
            } else {
                scrollToTop.style.opacity = "0";
                setTimeout(() => {
                    if (window.scrollY <= 300) {
                        scrollToTop.style.display = "none";
                    }
                }, 300);
            }
        });

        scrollToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /**
     * 3. Contact Input Validation Suite Controls
     */
    if (leadForm) {
        leadForm.addEventListener("submit", (e) => {
            let isFormValid = true;
            
            // Query input nodes checked within structural layout fields
            const requiredFields = leadForm.querySelectorAll("input[required]");

            requiredFields.forEach(field => {
                const parentGroup = field.parentElement;
                
                // Inspect verification attributes
                if (!field.value.trim()) {
                    isFormValid = false;
                    parentGroup.classList.add("invalid");
                } else {
                    parentGroup.classList.remove("invalid");
                    
                    // Specific dynamic format structural syntax verification step checks if handling user email field properties
                    if (field.type === "email") {
                        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailPattern.test(field.value.trim())) {
                            isFormValid = false;
                            parentGroup.classList.add("invalid");
                        }
                    }
                }
            });

            // Halt processing if input errors remain active on structural groups
            if (!isFormValid) {
                e.preventDefault();
            } else {
                // Prevent routing logic inside mock test frame to simulate asynchronous dispatch operations 
                e.preventDefault();
                alert("Thank you! Your inquiry message was processed successfully.");
                leadForm.reset();
            }
        });

        // Realtime removal of failure flags as users re-type within inputs
        leadForm.querySelectorAll("input").forEach(input => {
            input.addEventListener("input", () => {
                const parentGroup = input.parentElement;
                if (input.value.trim()) {
                    parentGroup.classList.remove("invalid");
                }
            });
        });
    }
});