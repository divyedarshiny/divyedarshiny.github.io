$(document).ready(function() {
  const skills = ['Programming Languages: Java, C, Python', 'Web Development: HTML, CSS, Bootstrap, JavaScript', 'Database Management: PostgreSQL', 'Version Control: Git', 'IDEs: Visual Studio Code, IntelliJ IDEA, PyCharm'];
  
  const skillsList = document.getElementById('skills-list');
  
  skills.forEach(skill => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      skillsList.appendChild(skillItem);
  });
  $(document).ready(function() {
    const projects = [
      {
        title: 'GenTech-Chronicle',
        description: 'GenTech Chronicle is a blog application developed using Django, designed for readers to explore articles on various topics, including general and technical content. Readers can access and read blogs authored by the dedicated writer. This application provides a user-friendly interface to navigate and enjoy the provided content.',
      },
      {
        title: 'CybeRover',
        description: 'CybeRover is a dynamic chatbot application developed using Java and Spring Boot.',
      },
      {
        title: 'Personal portfolio website',
        description: 'Created a personal portfolio website using HTML, CSS, and JavaScript to showcase my skills, projects, and professional background.',
      },
    ];
  
    const projectsList = document.getElementById('projects-list');
  
    projects.forEach(project => {
      const projectItem = document.createElement('li');
      projectItem.innerHTML = `<strong>${project.title}</strong>: ${project.description}`;
      projectsList.appendChild(projectItem);
    });
  });
  
  
  $(document).scroll(function(){
      var $nav = $("#mainNavbar");
      $nav.toggleClass("scrolled",$(this).scrollTop() > $nav.height());
  });
});
