// const contactForm = document.querySelector('form');

// contactForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     const userName = document.getElementById('name').value;
//     alert('thanks for reaching out, ' + userName + ' Your message has been received.');
//     contactForm.reset();
// })
// // 1. Select the new elements
// const fetchBtn = document.getElementById('fetch-btn');
// const githubData = document.getElementById('github-data');

// // 2. Create the async function
// // Note: Replace 'octocat' with your actual GitHub username!
// async function getGitHubProfile() {
//     // Show a loading state
//     githubData.innerHTML = '<p>Loading data from GitHub...</p>';
    
//     try {
//         // 3. Await the network request
//         const response = await fetch('https://api.github.com/users/Abulkhoir-loruko-mi'); // <-- Put your username here
        
//         // 4. Await the JSON conversion
//         const data = await response.json();
        
//         // 5. Inject the new HTML dynamically using Template Literals (backticks)
//         githubData.innerHTML = `
//             <div class="github-card" style="display: flex; align-items: center; gap: 20px; margin-top: 15px;">
//                 <img src="${data.avatar_url}" alt="GitHub Avatar" style="width: 100px; border-radius: 50%;">
//                 <div>
//                     <h3>${data.name || data.login}</h3>
//                     <p><strong>Public Repos:</strong> ${data.public_repos}</p>
//                     <p><strong>Followers:</strong> ${data.followers}</p>
//                     <a href="${data.html_url}" target="_blank" style="color: #0056b3; text-decoration: none; font-weight: bold;">View Profile on GitHub</a>
//                 </div>
//             </div>
//         `;
//     } catch (error) {
//         // 6. Handle any errors gracefully
//         githubData.innerHTML = '<p>Oops! Something went wrong fetching the profile.</p>';
//         console.error(error);
//     }
// }

// // 7. Attach the function to the button click
// fetchBtn.addEventListener('click', getGitHubProfile);

// --- DARK MODE LOGIC ---
const themeToggleBtn = document.getElementById('theme-toggle');




// --- 1. INJECT PERSONAL BIO ---
document.getElementById('role-text').innerText = portfolioData.personal.role;
document.getElementById('bio-text').innerText = portfolioData.personal.bio;


// --- 2. INJECT SKILLS (Looping through an array) ---
const skillsList = document.getElementById('skills-list');
// We map over the array to wrap each skill in an <li> tag, then join them into one big string
skillsList.innerHTML = portfolioData.skills
    .map(skill => `<li class="skill-tag">${skill}</li>`)
    .join('');


// --- 4. INJECT BUSINESS INFO ---
document.getElementById('biz-name').innerText = portfolioData.business.name;
document.getElementById('biz-reg').innerText = portfolioData.business.registration;
document.getElementById('biz-desc').innerText = portfolioData.business.description;

const bizServices = document.getElementById('biz-services');
bizServices.innerHTML = portfolioData.business.services
    .map(service => `<li>${service}</li>`)
    .join('');

    // --- 5. HANDLE CONTACT FORM SUBMISSION ---
// const contactForm = document.querySelector('form');

// contactForm.addEventListener('submit', async function(event) {
//     event.preventDefault(); // Stop page reload

//     // Grab the values from the inputs
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Package the data into a JSON object
//     const payload = {
//         name: name,
//         email: email,
//         message: message
//     };

//     try {
//         // Change the button text to show it's working
//         const submitBtn = contactForm.querySelector('button');
//         submitBtn.innerText = "Sending...";

//         // Send the POST request to your Node.js server
//         const response = await fetch('http://localhost:3000/api/contact', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(payload) // Convert the JS object to a JSON string
//         });

//         const result = await response.json();
        
//         // Show success message and reset form
//         alert(result.reply);
//         contactForm.reset();
//         submitBtn.innerText = "Send Message";

//     } catch (error) {
//         console.error("Error sending message:", error);
//         alert("Failed to send message. Is the server running?");
//     }
// });





// --- 5. INJECT CREDENTIALS ---
document.getElementById('resume-btn').href = portfolioData.credentials.resumeLink;
const certBtn = document.getElementById('cert-btn');
certBtn.href = portfolioData.credentials.certificate.url;
// Dynamically update the button text to include the graduation date
certBtn.innerText = `View ${portfolioData.credentials.certificate.date} Certificate`;

// --- 6. INJECT SOCIALS ---
const socialsList = document.getElementById('socials-list');
socialsList.innerHTML = portfolioData.socials
    .map(social => `<a href="${social.url}" target="_blank" style="color: #1A365D; font-weight: bold; text-decoration: none;">${social.platform}</a>`)
    .join('');

// --- 7. UPDATE PROJECTS (Now with GitHub Links) ---
const projectsList = document.getElementById('projects-list');
projectsList.innerHTML = portfolioData.projects
    .map(project => `
        <div class="project-card" style="background-color: #ffffff; padding: 5px; margin-bottom: 15px; margin-top:15px;  border-radius: 8px; border-left: 4px solid #1A365D;border-right: 2px solid #1A365D; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h3 style="color: #1A365D; margin-bottom: 5px;">${project.title}</h3>
            <p style="color: #C05621; font-weight: bold; margin-bottom: 10px;">${project.role}</p>
            <p style="color: #2D3748; margin-bottom: 10px;">${project.description}</p>
            <p style="font-size: 0.9em; color: #555; margin-bottom: 15px;"><strong>Tech Stack:</strong> ${project.techStack.join(', ')}</p>
            
            ${/* This is a conditional statement. It only renders the button if a link exists in data.js */ ''}
            ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" style="padding: 5px 10px; background-color: #e2e8f0; color: #1A365D; text-decoration: none; border-radius: 4px; font-size: 0.9em; font-weight: bold;">View Source Code</a>` : ''}
        </div>
    `)
    .join('');

// --- 8. INJECT DIRECT CONTACT LINKS ---
// mailto: opens the default email client
document.getElementById('email-btn').href = `mailto:${portfolioData.contact.email}`;
// wa.me/ opens WhatsApp directly to the chat
document.getElementById('whatsapp-btn').href = `https://wa.me/${portfolioData.contact.whatsapp}`;
