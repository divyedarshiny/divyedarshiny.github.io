const skills = ['Java', 'Python', 'Javascript', 'HTML & CSS', 'C'];

const skillsList = document.getElementById('skills-list');

skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
});

$(function() {
  $(document).scroll(function(){
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled",$(this).scrollTop() > $nav.height());
  });
});
