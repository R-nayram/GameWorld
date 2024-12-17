// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').replace('.html', '');
        if (targetId === 'index') {
            window.location.href = 'index.html';
        } else {
            window.location.href = ${targetId}.html;
        }
    });
});

// Active Navigation Link Highlight
window.addEventListener('load', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').replace('.html', '');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Fade-In Effect for Visible Sections
const fadeInSections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Adjust this value to control when the animation starts
});

fadeInSections.forEach(section => observer.observe(section));

// Back-to-Top Button Smooth Scroll (if applicable)
const backToTopButton = document.querySelector('.btn[href="#top"]');
if (backToTopButton) {
    backToTopButton.addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Video Upload and Preview Functionality
const videoUploadInput = document.getElementById('videoUpload');
const videoPreview = document.getElementById('videoPreview');
const uploadForm = document.getElementById('uploadForm');

if (videoUploadInput && videoPreview && uploadForm) {
    videoUploadInput.addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (file) {
            const fileURL = URL.createObjectURL(file);
            videoPreview.src = fileURL;
            videoPreview.style.display = 'block';
        }
    });

    uploadForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const videoFile = videoUploadInput.files[0];
        const description = document.getElementById('description').value;

        if (!videoFile) {
            alert('Please select a video file.');
            return;
        }

        alert(Trailer "${videoFile.name}" uploaded successfully!);

        // Add backend integration here to handle video upload.
    });
}