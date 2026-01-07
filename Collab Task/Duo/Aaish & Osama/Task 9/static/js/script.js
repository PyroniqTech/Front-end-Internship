function loadPage(baseFile, content) {
  fetch(baseFile)
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const contentDiv = doc.querySelector("#content");
      if (contentDiv) {
        contentDiv.innerHTML = content;
      }

      document.body.innerHTML = doc.body.innerHTML;
    })
    .catch(err => console.error("Error loading base:", err));
}
 
document.addEventListener("click",(e) => {
   if (e.target.closest("#btn")){
    const menu = document.getElementById("menu");
    if (menu){

     menu.classList.toggle("hidden");
    
   }
 }});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
   if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = document.getElementById("subject").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email ||!subject || !message) {
      alert("❌ Please fill in all required fields.");
      return;
    }

    if (!email.match(emailPattern)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert("Message send Successfully! " + name + ".");
    form.reset(); 
  });
}});

document.addEventListener("DOMContentLoaded", function () {
  const team_form = document.getElementById("TeamForm");

   if (team_form) {
    team_form.addEventListener("submit", function (event) {
      event.preventDefault(); 

    const teamName = document.getElementById("teamName").value.trim();
    const department = document.getElementById("department").value.trim();
    const members = document.getElementById("members").value.trim();

    if (!teamName || !department || !members) {
      alert("❌ Please fill in all required fields.");
      return;
    }
     alert("Team " + teamName + " Created successfully! ");
     form.reset(); 
  });

  const memberModal = document.getElementById("memberModal");
  const memberList = document.getElementById("memberList");
  const closeModal = document.getElementById("closeModal");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-members")) {
      const teamCard = e.target.closest("div");
      const teamName = teamCard.querySelector("h3").textContent;
      const membersText = teamCard.querySelector("p").textContent;
      const membersData = teamCard.getAttribute("data-members");
      memberList.innerHTML = `<li>${teamName}</li> <li>${membersText}</li> <li>${membersData}</li>`;
     
      memberModal.classList.remove("hidden");
      memberModal.classList.add("flex");
    }
  });

  closeModal.addEventListener("click", () => {
    memberModal.classList.add("hidden");
  });
}});



// osama js
const tasks = [
      { title: "UI Design Update", desc: "Update login page layout", team: "Team Beta", priority: "High", status: "In Progress", deadline: "2025-10-20" },
      { title: "Backend API Fix", desc: "Resolve bug in task API", team: "Team Alpha", priority: "Medium", status: "Pending", deadline: "2025-10-18" },
      { title: "Testing Cycle 1", desc: "Run QA tests for sprint 5", team: "Team Gamma", priority: "Low", status: "Done", deadline: "2025-10-10" }
    ];

    const taskGrid = document.getElementById("taskGrid");
    const teamFilter = document.getElementById("teamFilter");
    const priorityFilter = document.getElementById("priorityFilter");
    const searchBar = document.getElementById("searchBar");

    
    function renderTasks() {
      const teamVal = teamFilter.value;
      const priorityVal = priorityFilter.value;
      const searchVal = searchBar.value.toLowerCase();

      taskGrid.innerHTML = "";
      tasks
        .filter(t =>
          (teamVal === "all" || t.team === teamVal) &&
          (priorityVal === "all" || t.priority === priorityVal) &&
          t.title.toLowerCase().includes(searchVal)
        )
        .forEach(t => {
          const card = document.createElement("div");
          card.className = "bg-slate-900 border border-blue-700 p-6 rounded-lg shadow hover:bg-slate-800 transition";
          card.innerHTML = `
            <h3 class="text-xl font-semibold text-blue-400">${t.title}</h3>
            <p class="text-blue-300 mt-2">${t.desc}</p>
            <p class="mt-3 text-sm text-blue-300">Team: <span class="text-blue-400">${t.team}</span></p>
            <p class="text-sm text-blue-300">Priority: <span class="text-blue-400">${t.priority}</span></p>
            <p class="text-sm text-blue-300">Deadline: <span class="text-blue-400">${t.deadline}</span></p>
            <p class="mt-2"><span class="text-sm px-2 py-1 rounded ${t.status === 'Done' ? 'bg-green-700 text-white' : t.status === 'In Progress' ? 'bg-yellow-600 text-white' : 'bg-red-700 text-white'}">${t.status}</span></p>
          `;
          taskGrid.appendChild(card);
        });
    }

    
    const taskForm = document.getElementById("taskForm");
    const taskMessage = document.getElementById("taskMessage");

    taskForm.addEventListener("submit", e => {
      e.preventDefault();
      const title = document.getElementById("taskTitle").value.trim();
      const desc = document.getElementById("taskDesc").value.trim();
      const deadline = document.getElementById("taskDeadline").value;
      const assigned = document.getElementById("taskAssigned").value.trim();
      const priority = document.getElementById("taskPriority").value;
      const status = document.getElementById("taskStatus").value;

      if (!title || !desc || !deadline || !assigned) {
        alert("Please fill all fields!");
        return;
      }

      tasks.push({ title, desc, team: assigned, priority, status, deadline });
      taskForm.reset();
      renderTasks();

      taskMessage.classList.remove("hidden");
      setTimeout(() => taskMessage.classList.add("hidden"), 2500);
    });

    
    [teamFilter, priorityFilter, searchBar].forEach(el => el.addEventListener("input", renderTasks));
    
    renderTasks();

     const dashboardData = {
      teams: 8,
      completed: 120,
      pending: 35,
      members: 24,
      avgProgress: "76%"
    };

    document.getElementById("cardTeams").textContent = dashboardData.teams;
    document.getElementById("cardCompleted").textContent = dashboardData.completed;
    document.getElementById("cardPending").textContent = dashboardData.pending;
    document.getElementById("cardMembers").textContent = dashboardData.members;
    document.getElementById("cardAvg").textContent = dashboardData.avgProgress;
   


      const data = {
      total: 100,
      completed: 65,
      teams: [
        { name: "Team Alpha", progress: 80 },
        { name: "Team Beta", progress: 50 },
        { name: "Team Gamma", progress: 70 },
        { name: "Team Delta", progress: 40 },
      ]
    };

    document.getElementById("totalTasks").textContent = data.total;
    document.getElementById("completedTasks").textContent = data.completed;
    document.getElementById("pendingTasks").textContent = data.total - data.completed;
    document.getElementById("avgProgress").textContent =
      Math.round(data.teams.reduce((sum, t) => sum + t.progress, 0) / data.teams.length) + "%";

    const teamContainer = document.getElementById("teamProgress");
    data.teams.forEach(team => {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="flex justify-between mb-2">
          <span class="font-medium text-blue-400">${team.name}</span>
          <span class="text-blue-300">${team.progress}%</span>
        </div>
        <div class="w-full bg-slate-800 rounded-full h-3">
          <div class="bg-blue-500 h-3 rounded-full transition-all" style="width:${team.progress}%"></div>
        </div>`;
      teamContainer.appendChild(div);
    });
    
    const completedPercent = (data.completed / data.total) * 100;
    document.getElementById("chartFill").style.transform = `rotate(${(completedPercent / 100) * 360}deg)`;
    document.getElementById("chartLabel").textContent = `${completedPercent.toFixed(1)}% Completed`;

