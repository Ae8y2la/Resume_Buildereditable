// Elements
const addSkillBtn = document.getElementById('addSkillBtn') as HTMLButtonElement;
const skillsList = document.getElementById('skillsList') as HTMLElement;
const addEducationBtn = document.getElementById('addEducationBtn') as HTMLButtonElement;
const educationList = document.getElementById('educationList') as HTMLElement;
const addExperienceBtn = document.getElementById('addExperienceBtn') as HTMLButtonElement;
const experienceList = document.getElementById('experienceList') as HTMLElement;
const generateResumeBtn = document.getElementById('generateResumeBtn') as HTMLButtonElement;
const generatedResume = document.getElementById('generatedResume') as HTMLElement;
const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;

let skills: string[] = [];
let education: string[] = [];
let experience: string[] = [];

// Skills Section
addSkillBtn.addEventListener('click', () => {
  const skillInput = document.querySelector('.skill-input') as HTMLInputElement;
  const skill = skillInput.value.trim();
  if (skill) {
    skills.push(skill);
    updateSkillsList();
    skillInput.value = ''; // Clear input
  }
});

const updateSkillsList = () => {
  skillsList.innerHTML = '';
  skills.forEach((skill, index) => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `${skill} <button type="button" onclick="removeSkill(${index})">X</button>`;
    skillsList.appendChild(skillItem);
  });
};

(window as any).removeSkill = (index: number) => {
  skills.splice(index, 1);
  updateSkillsList();
};

// Education Section
addEducationBtn.addEventListener('click', () => {
  const educationInput = document.querySelector('.education-input') as HTMLInputElement;
  const edu = educationInput.value.trim();
  if (edu) {
    education.push(edu);
    updateEducationList();
    educationInput.value = ''; // Clear input
  }
});

const updateEducationList = () => {
  educationList.innerHTML = '';
  education.forEach((edu, index) => {
    const eduItem = document.createElement('div');
    eduItem.className = 'education-item';
    eduItem.innerHTML = `${edu} <button type="button" onclick="removeEducation(${index})">X</button>`;
    educationList.appendChild(eduItem);
  });
};

(window as any).removeEducation = (index: number) => {
  education.splice(index, 1);
  updateEducationList();
};

// Experience Section
addExperienceBtn.addEventListener('click', () => {
  const experienceInput = document.querySelector('.experience-input') as HTMLInputElement;
  const exp = experienceInput.value.trim();
  if (exp) {
    experience.push(exp);
    updateExperienceList();
    experienceInput.value = ''; // Clear input
  }
});

const updateExperienceList = () => {
  experienceList.innerHTML = '';
  experience.forEach((exp, index) => {
    const expItem = document.createElement('div');
    expItem.className = 'experience-item';
    expItem.innerHTML = `${exp} <button type="button" onclick="removeExperience(${index})">X</button>`;
    experienceList.appendChild(expItem);
  });
};

(window as any).removeExperience = (index: number) => {
  experience.splice(index, 1);
  updateExperienceList();
};

// Generate Resume
generateResumeBtn.addEventListener('click', () => {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;

  const profilePicFile = profilePicInput.files?.[0];
  
  let profilePicURL = "";
  if (profilePicFile) {
    profilePicURL = URL.createObjectURL(profilePicFile);
  }

  generatedResume.innerHTML = `
    <div>
      <img src="${profilePicURL}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%;"><br>
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Summary:</strong> ${summary}</p>
      <p><strong>Skills:</strong> ${skills.join(', ')}</p>
      <p><strong>Education:</strong> ${education.join(', ')}</p>
      <p><strong>Experience:</strong> ${experience.join(', ')}</p>
    </div>
  `;
});

