document.addEventListener('DOMContentLoaded', () => {
    // Populate Education Section
    const educationList = document.getElementById('education-list').querySelector('ul');
    educationData.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class="education">
          <h4>${item.degree}</h4>
          <h4>${item.duration}</h4>
        </div>
        <span>${item.school}</span>
      `;
      educationList.appendChild(listItem);
    });
  
    // Populate Skills Section
    const skillsList = document.getElementById('skills-list');
    skills.forEach(category => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = `${category.name.toLowerCase().replace(/ /g, '-')}-skills`;
      categoryDiv.innerHTML = `
        <h4>${category.name}</h4>
        <ul class="list">
          ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
      `;
      skillsList.appendChild(categoryDiv);
    });
  
    //Populate Experience Section
    const experienceList = document.getElementById('experience-list');
    experience.forEach(item => {
      const experienceDiv = document.createElement('div');
      experienceDiv.className = 'experience';
      experienceDiv.innerHTML = `
        <h4 class="company">${item.company}</h4>
        <div class="experience-header">
          <h4>${item.role}</h4>
          <h4>${item.duration}</h4>
        </div>
        <ul>
          ${item.duties.map(duty => `<li>${duty.description}</li>`).join('')}
        </ul>
      `;
      experienceList.appendChild(experienceDiv);
    });
  
    // Populate Projects Section
    const projectsList = document.getElementById('projects-list').querySelector('ol');
    projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'project';
      projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
        <p><strong>Achievements:</strong></p>
        <ul>
          ${project.achievements.map(achievement => `<li>${achievement.description}</li>`).join('')}
        </ul>
        <p><strong>Link:</strong>
        <a href="${project.link}" target="_blank">${project.title} Code</a></p>
      `;
      projectsList.appendChild(projectDiv);
    });
  });
  