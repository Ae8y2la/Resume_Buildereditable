// Elements
var addSkillBtn = document.getElementById('addSkillBtn');
var skillsList = document.getElementById('skillsList');
var addEducationBtn = document.getElementById('addEducationBtn');
var educationList = document.getElementById('educationList');
var addExperienceBtn = document.getElementById('addExperienceBtn');
var experienceList = document.getElementById('experienceList');
var generateResumeBtn = document.getElementById('generateResumeBtn');
var generatedResume = document.getElementById('generatedResume');
var profilePicInput = document.getElementById('profilePic');
var skills = [];
var education = [];
var experience = [];
// Skills Section
addSkillBtn.addEventListener('click', function () {
    var skillInput = document.querySelector('.skill-input');
    var skill = skillInput.value.trim();
    if (skill) {
        skills.push(skill);
        updateSkillsList();
        skillInput.value = ''; // Clear input
    }
});
var updateSkillsList = function () {
    skillsList.innerHTML = '';
    skills.forEach(function (skill, index) {
        var skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = "".concat(skill, " <button type=\"button\" onclick=\"removeSkill(").concat(index, ")\">X</button>");
        skillsList.appendChild(skillItem);
    });
};
window.removeSkill = function (index) {
    skills.splice(index, 1);
    updateSkillsList();
};
// Education Section
addEducationBtn.addEventListener('click', function () {
    var educationInput = document.querySelector('.education-input');
    var edu = educationInput.value.trim();
    if (edu) {
        education.push(edu);
        updateEducationList();
        educationInput.value = ''; // Clear input
    }
});
var updateEducationList = function () {
    educationList.innerHTML = '';
    education.forEach(function (edu, index) {
        var eduItem = document.createElement('div');
        eduItem.className = 'education-item';
        eduItem.innerHTML = "".concat(edu, " <button type=\"button\" onclick=\"removeEducation(").concat(index, ")\">X</button>");
        educationList.appendChild(eduItem);
    });
};
window.removeEducation = function (index) {
    education.splice(index, 1);
    updateEducationList();
};
// Experience Section
addExperienceBtn.addEventListener('click', function () {
    var experienceInput = document.querySelector('.experience-input');
    var exp = experienceInput.value.trim();
    if (exp) {
        experience.push(exp);
        updateExperienceList();
        experienceInput.value = ''; // Clear input
    }
});
var updateExperienceList = function () {
    experienceList.innerHTML = '';
    experience.forEach(function (exp, index) {
        var expItem = document.createElement('div');
        expItem.className = 'experience-item';
        expItem.innerHTML = "".concat(exp, " <button type=\"button\" onclick=\"removeExperience(").concat(index, ")\">X</button>");
        experienceList.appendChild(expItem);
    });
};
window.removeExperience = function (index) {
    experience.splice(index, 1);
    updateExperienceList();
};
// Generate Resume
generateResumeBtn.addEventListener('click', function () {
    var _a;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var summary = document.getElementById('summary').value;
    var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePicURL = "";
    if (profilePicFile) {
        profilePicURL = URL.createObjectURL(profilePicFile);
    }
    generatedResume.innerHTML = "\n    <div>\n      <img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" style=\"max-width: 150px; border-radius: 50%;\"><br>\n      <h3>").concat(name, "</h3>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <p><strong>Summary:</strong> ").concat(summary, "</p>\n      <p><strong>Skills:</strong> ").concat(skills.join(', '), "</p>\n      <p><strong>Education:</strong> ").concat(education.join(', '), "</p>\n      <p><strong>Experience:</strong> ").concat(experience.join(', '), "</p>\n    </div>\n  ");
});
