$(document).ready(function() {
  const skills = ['Programming Languages: Java, C, Python', 'Web Development: HTML, CSS, Bootstrap, JavaScript', 'Database Management: PostgreSQL', 'Version Control: Git', 'IDEs: Visual Studio Code, IntelliJ IDEA, PyCharm'];
  
  const skillsList = document.getElementById('skills-list');
  
  skills.forEach(skill => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      skillsList.appendChild(skillItem);
  });

  projects.forEach(project => {
    const projectItem = document.createElement('li');
    projectItem.textContent = project;
    projectsList.appendChild(projectItem);
});

  
  $(document).scroll(function(){
      var $nav = $("#mainNavbar");
      $nav.toggleClass("scrolled",$(this).scrollTop() > $nav.height());
  });
});
