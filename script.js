"use strict";

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    picture: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    picture: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    picture: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    picture: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    picture: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    picture: "barbara-ramos-graphic-designer.jpg",
  },
];

const row = document.querySelector(".row");

for (const key in team) {
  console.log(team[key]);
  singleMember(team[key]);
}

function singleMember(member) {
  const col = document.createElement("div");
  col.classList.add("col-4", "my-4");
  const info = `
  <div class="card">
    <img src="img/${member.picture}">
    <div class="card-body">
      <h4 class="card-text">${member.name}</h4>
      <p>${member.role}</p>
    </div>
  </div>
  `;
  col.innerHTML = info;
  row.appendChild(col);
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const newMember = {
    name: document.getElementById("name").value,
    role: document.getElementById("role").value,
    picture: document.getElementById("picture").files[0].name,
  };

  team.push(newMember);
  singleMember(newMember);
});
