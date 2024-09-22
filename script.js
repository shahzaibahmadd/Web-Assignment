// Resume Data Object
const resumeData = {
    name: "Shahzaib Ahmad",
    title: "Student",
    description: "Welcome to my resume website where you can explore my work, skills, certifications, and more.",
    contactButtonText: "Contact Me",
    hardSkills: [
      "HTML, CSS, JavaScript",
      "PHP-Laravel",
      "Python, Django",
      "C++, C#, C"
    ],
    softSkills: [
      "Communication",
      "Teamwork",
      "Problem-solving"
    ],
    projects: [
      {
        name: "Portfolio Website",
        date: "March 2024",
        description: "Developed a responsive portfolio website to showcase my design and development projects."
      },
      {
        name: "E-Commerce Store",
        date: "January 2024",
        description: "Created an online store using WooCommerce, integrated with payment gateways and shipping modules."
      }
    ],
    certifications: [
      "Certified Web Developer - 2023",
      "JavaScript Mastery Certification - 2022",
      "Best Hackathon Project - XYZ Hackathon - 2021"
    ],
    education: [
      {
        degree: "Bachelor's in Computer Science",
        institution: "XYZ University",
        year: "2020 - 2024"
      },
      {
        degree: "Advanced Web Development",
        institution: "Udemy",
        year: "2022"
      }
    ],
    videoSource: "video.mp4",
    socialFeedPlaceholder: "Latest from Twitter, Instagram, etc."
  };
  
  // Populate Header
  document.getElementById("title").textContent = resumeData.title;
  document.getElementById("description").textContent = resumeData.description;
  document.getElementById("contact-btn").textContent = resumeData.contactButtonText;
  
  // Populate Skills
  const hardSkillsList = document.getElementById("hard-skills-list");
  const softSkillsList = document.getElementById("soft-skills-list");
  
  resumeData.hardSkills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    hardSkillsList.appendChild(li);
  });
  
  resumeData.softSkills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    softSkillsList.appendChild(li);
  });
  
  // Populate Projects
  const projectList = document.getElementById("project-list");
  
  resumeData.projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.name;
    projectDiv.appendChild(projectTitle);
  
    const projectDate = document.createElement("p");
    projectDate.textContent = `Date: ${project.date}`;
    projectDiv.appendChild(projectDate);
  
    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectDiv.appendChild(projectDescription);
  
    projectList.appendChild(projectDiv);
  });
  
  // Populate Certifications
  const certificationList = document.getElementById("certification-list");
  
  resumeData.certifications.forEach(certification => {
    const li = document.createElement("li");
    li.textContent = certification;
    certificationList.appendChild(li);
  });
  
  // Populate Education
  const educationList = document.getElementById("education-list");
  
  resumeData.education.forEach(edu => {
    const eduDiv = document.createElement("div");
    eduDiv.classList.add("degree");
  
    const eduDegree = document.createElement("h3");
    eduDegree.textContent = edu.degree;
    eduDiv.appendChild(eduDegree);
  
    const eduInstitution = document.createElement("p");
    eduInstitution.textContent = `Institution: ${edu.institution}`;
    eduDiv.appendChild(eduInstitution);
  
    const eduYear = document.createElement("p");
    eduYear.textContent = `Year: ${edu.year}`;
    eduDiv.appendChild(eduYear);
  
    educationList.appendChild(eduDiv);
  });
  
  
  
  // Populate Social Feed
  document.getElementById("social-feed").textContent = resumeData.socialFeedPlaceholder;
  