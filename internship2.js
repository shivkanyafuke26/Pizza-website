    
        document.getElementById('navToggle').addEventListener('click', function () {
            var navbar = document.getElementById('navbar');
            if (navbar.style.right === '0px') {
                navbar.style.right = '-200px';
                this.style.right = '10px';
            } else {
                navbar.style.right = '0px';
                this.style.right = '200px'; // 250px width + 10px margin
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function () {
                document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            });
        });


        let currentReview = 0;
        let currentImage = 0;

        function showTab(tabs, index) {
            tabs.style.transform = `translateX(-${index * 100 / 3}%)`;
        }

        function nextReview() {
            const reviewTabs = document.getElementById('review-tabs');
            currentReview = (currentReview < reviewTabs.children.length - 1) ? currentReview + 1 : 0;
            showTab(reviewTabs, currentReview);
        }

        function nextImage() {
            const imageTabs = document.getElementById('image-tabs');
            currentImage = (currentImage < imageTabs.children.length - 1) ? currentImage + 1 : 0;
            showTab(imageTabs, currentImage);
        }

        setInterval(nextReview, 3000); // Change review every 3 seconds
        setInterval(nextImage, 3000); // Change image every 3 seconds
    
    