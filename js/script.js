const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider img");
const sliderWidth = sliderItems[0].offsetWidth;
let currentIndex = 0;
let isPaused = false;

function nextSlide() {
    if (!isPaused) {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        const offset = -currentIndex * sliderWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }
}

function prevSlide() {
    if (!isPaused) {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        const offset = -currentIndex * sliderWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }
}

function startSlider() {
    setInterval(nextSlide, 2000); // Move to the next slide every 2 seconds
}

startSlider();

function togglePause() {
    isPaused = !isPaused;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        prevSlide();
    } else if (event.key === "ArrowRight") {
        nextSlide();
    }
});
// blogpages from here its been added
// const blogList = document.querySelector(".blog-list");

// // Load blogs from local storage on page load
// window.addEventListener("load", () => {
//     const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
//     blogs.forEach((blog) => {
//         addNewBlog(blog.title, blog.description);
//     });
// });

// function showBlogForm() {
//     const title = prompt("Enter the title for the new blog:");
//     const description = prompt("Enter the description for the new blog:");

//     if (title && description) {
//         addNewBlog(title, description);

//         // Save blogs to local storage
//         const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
//         blogs.push({ title, description });
//         localStorage.setItem("blogs", JSON.stringify(blogs));
//     }
// }

// function addNewBlog(title, description) {
//     const blogItem = document.createElement("div");
//     blogItem.classList.add("blog-item");

//     const deleteButton = document.createElement("span");
//     deleteButton.textContent = "Delete";
//     deleteButton.classList.add("delete-button");
//     deleteButton.onclick = function() {
//         blogList.removeChild(blogItem);

//         // Remove blog from local storage
//         const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
//         const updatedBlogs = blogs.filter((blog) => blog.title !== title);
//         localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
//     };

//     const blogTitle = document.createElement("h3");
//     blogTitle.textContent = title;

//     const blogDescription = document.createElement("p");
//     blogDescription.textContent = description;

//     blogItem.appendChild(deleteButton);
//     blogItem.appendChild(blogTitle);
//     blogItem.appendChild(blogDescription);

//     blogList.appendChild(blogItem);
// }

// Define variables for the modal container and its content
var modal = null;
var modalContent = null;

function openModal(projectCard) {
    // If the modal doesn't exist, create it
    if (!modal) {
        createModal();
    }

    // Get project card details
    var title = projectCard.querySelector('h3').innerText;
    var description = projectCard.querySelector('p').innerText;
    var imageSrc = projectCard.querySelector('.project-image').style.backgroundImage.slice(4, -1).replace(/['"]/g, '');

    // Get additional data attributes
    var link = projectCard.dataset.link;
    var additionalInfo = projectCard.dataset.additionalInfo;

    // Set the modal content based on the project card details and data attributes
    modalContent.innerHTML = `
        <span class="close-btn" onclick="closeModal()">&times;</span>
        <h3>${title}</h3>
        <div class="modal-image" style="background-image: url(${imageSrc});"></div>
        <p>${description}</p>
        <p>${additionalInfo}</p>
        <a href="${link}" target="_blank">Visit Project Website</a>
        <!-- Add more project details as needed -->
    `;

    // Display the modal
    modal.style.display = 'block';
}


function createModal() {
    // Create the modal container
    modal = document.createElement('div');
    modal.className = 'modal';

    // Create the modal content container
    modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modal);
}

function closeModal() {
    // Hide the modal
    modal.style.display = 'none';
}