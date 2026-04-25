const STORAGE_KEY = "case-note-short-course-progress";
const MODEL = "gpt-5-mini";

const course = [
  {
    title: "Module 1: Terms",
    time: 18,
    objectives: [
      {
        time: 6,
        objective:
          "A case manager that manages case notes across multiple cases will be able to recognize the benefits of being able to take detailed case notes in an organized manner given an internal process for generating and recording case notes called a case note documentation process (CDP) that includes a system of engagement (SoE) and system of record (SoR).",
        absorb:
          "A CDP is the repeatable workflow that keeps notes consistent from first capture through final filing. It reduces missing details, duplicate work, and uncertainty about where each note belongs.",
        doSteps: [
          "List three benefits of organized case notes for a case manager who works across multiple cases.",
          "Draw a two-column workflow labeled SoE and SoR, then place CDP above both as the process that connects them.",
          "Write one sentence explaining how an organized CDP helps with timeliness, accuracy, or continuity of care."
        ]
      },
      {
        time: 5,
        objective:
          "Case manager without a SoE will be able to recognize this course covers one form of SoE that has to do with the first capture of the case note using OneNote so that it syncs from the field to the desktop where the draft can be finalized and entered into the SoR.",
        absorb:
          "In this course, OneNote is treated as a first-capture tool. It is useful because a draft can begin in the field, sync to the desktop, and then be cleaned up before entry into the official record.",
        doSteps: [
          "Describe the path a draft note takes from phone capture to desktop review to final SoR entry.",
          "Identify one risk of capturing notes only from memory at the end of the day.",
          "Write a short example of a rough field note that would still need cleanup before final entry."
        ]
      },
      {
        time: 7,
        objective:
          "Case manager will be able to distinguish between a case note draft held in a system of engagement (SoE) and a final case note in a system of record (SoR) given a CDP.",
        absorb:
          "The SoE is where work-in-progress notes can be captured and organized. The SoR is the official destination for final documentation that satisfies agency, program, or legal requirements.",
        doSteps: [
          "Create a two-row comparison for SoE draft and SoR final note.",
          "For each row, note its purpose, status, and whether it satisfies final documentation requirements.",
          "Review a sample note idea and decide whether it belongs in the SoE, the SoR, or both in sequence."
        ]
      }
    ]
  },
  {
    title: "Module 2: SoE - O365",
    time: 19,
    objectives: [
      {
        time: 7,
        objective:
          "New case manager with no experience with OneNote, but approval to track case notes with OneNote, will be able to summarize what OneNote is and how it is part of the O365 ecosystem that includes cloud storage and an enterprise license with a work computer that has a OneNote subscription.",
        absorb:
          "OneNote is a notebook application in the Microsoft 365 ecosystem. With an enterprise license, notebooks can sync through approved cloud storage so notes can move between a work computer and mobile device.",
        doSteps: [
          "Open Microsoft 365 or your work app list and confirm whether OneNote is available.",
          "Write a one-paragraph summary of OneNote as an approved case note draft workspace.",
          "Name the license, cloud storage, and device requirements that must be in place before using it for work notes."
        ]
      },
      {
        time: 6,
        objective:
          "Case manager will be able to open a new notebook in OneNote on their work machine, given their work provisions them with an O365 license that has OneNote access.",
        absorb:
          "A notebook is the top-level container for notes. Creating a dedicated notebook for case note drafts helps separate work documentation from unrelated personal or team notes.",
        doSteps: [
          "Open OneNote on the work computer.",
          "Create a new notebook with a clear work-approved name, such as Case Note Drafts.",
          "Confirm the notebook opens and is associated with the correct work account."
        ]
      },
      {
        time: 6,
        objective:
          "Case manager will be able to describe what a OneNote notebook is and where it is located on the file system on the computer given access to a work computer with OneNote.",
        absorb:
          "OneNote notebooks may appear in the desktop application while the underlying files are stored in an approved cloud location. Knowing the location helps confirm that sync and access are working as expected.",
        doSteps: [
          "Find the notebook's storage or sync location from OneNote's notebook information area.",
          "Record the approved account or cloud location connected to the notebook.",
          "Explain why knowing the location matters for access, syncing, and troubleshooting."
        ]
      }
    ]
  },
  {
    title: "Module 3: SoE - OneNote Desktop",
    time: 22,
    objectives: [
      {
        time: 8,
        objective:
          "Case manager with a new OneNote notebook will be able to recognize the notebook is full of sections that can be treated as cases. Create 2 new sections and right click them to rename them as case 1 and case 2.",
        absorb:
          "Sections are useful dividers inside a notebook. In a simple CDP, each section can represent a case so draft notes stay grouped before final entry.",
        doSteps: [
          "Open the new case note draft notebook.",
          "Create two sections.",
          "Rename the sections Case 1 and Case 2, then verify both are visible in the notebook."
        ]
      },
      {
        time: 6,
        objective:
          "Case manager will be able to sync data with the cloud from the desktop application. Syncing can sometimes take a few minutes and should also happen automatically.",
        absorb:
          "Sync keeps the desktop notebook and cloud copy aligned. Manual sync is a useful check when notes need to move between desktop and mobile without waiting for the next automatic sync.",
        doSteps: [
          "Add a short test note to Case 1.",
          "Use OneNote's sync option to force a manual sync.",
          "Wait a few minutes if needed, then confirm there is no sync error message."
        ]
      },
      {
        time: 8,
        objective:
          "Case manager with access to OneNote on a work computer and knowledge about where their notebook is saved in the cloud will be able to download the OneNote app via the iOS App Store on their iPhone.",
        absorb:
          "The mobile app extends the SoE into the field. Downloading the correct app and connecting it to the work account prepares the case manager to capture notes near the time of service.",
        doSteps: [
          "Open the App Store on the iPhone.",
          "Search for Microsoft OneNote and install it.",
          "Confirm the app is installed before signing in with the work account in the next module."
        ]
      }
    ]
  },
  {
    title: "Module 4: SoE - OneNote iOS",
    time: 16,
    objectives: [
      {
        time: 8,
        objective:
          "Case manager with the OneNote iOS application installed on their phone will be able to log in to OneNote iOS application using work email and access the notebook they created on their desktop.",
        absorb:
          "The mobile app must use the same work account as the desktop notebook. This account match is what allows the notebook created on the desktop to appear on the phone.",
        doSteps: [
          "Open OneNote on the iPhone.",
          "Sign in with the work email account.",
          "Open the case note draft notebook created on the desktop."
        ]
      },
      {
        time: 8,
        objective:
          "Case manager will be able to sync cases from the cloud on the iOS application given 2 sections were created in the notebook. Syncing can sometimes take a few minutes and should also happen automatically.",
        absorb:
          "Mobile sync confirms the SoE is available in the field. The two case sections created on desktop should appear on the phone after sync completes.",
        doSteps: [
          "Find Case 1 and Case 2 in the OneNote iOS notebook.",
          "Pull to refresh or use the app's sync behavior if the sections do not appear immediately.",
          "Add a small test draft to one section and confirm it later appears on the desktop."
        ]
      }
    ]
  },
  {
    title: "Module 5: SoE - iOS Shortcut",
    time: 26,
    objectives: [
      {
        time: 10,
        objective:
          "Case manager with the Add case note shortcut will be able to prioritize OneNote to the top of the list of apps to share the case note with by pressing the Add case note shortcut, entering a fake case note, scrolling all the way to the right of the application list, clicking the triple dots, pressing edit, finding OneNote and pressing the green plus icon and then moving it to the top of the list.",
        absorb:
          "The iOS share sheet can be arranged so OneNote is easy to reach. Prioritizing OneNote reduces friction when capturing a draft note quickly.",
        doSteps: [
          "Run the Add case note shortcut and enter a fake note.",
          "Open the share sheet, scroll to the end of the app row, and choose the more options control.",
          "Edit the app list, add OneNote, and move it near the top so it is easy to select next time."
        ]
      },
      {
        time: 6,
        objective:
          "Case manager with Add case note shortcut will be able to record a case note into the SoE.",
        absorb:
          "The shortcut is the fast capture entry point. A quick note shared into OneNote becomes a draft in the SoE until it is reviewed and finalized in the SoR.",
        doSteps: [
          "Run the Add case note shortcut.",
          "Enter a brief practice note with a case label, date, and key detail.",
          "Share the note to the correct OneNote case section and verify it appears there."
        ]
      },
      {
        time: 10,
        objective:
          "Case manager with OneNote application on their iPhone will be able to add a iOS shortcut called Add case note using the iOS Shortcut app by sliding down and searching for shortcuts, adding new, the first item should be Ask for Input and the second step should be Share.",
        absorb:
          "A simple shortcut can collect text and immediately open the share sheet. The two-step pattern is Ask for Input followed by Share.",
        doSteps: [
          "Open the Shortcuts app from iOS search.",
          "Create a new shortcut named Add case note.",
          "Add Ask for Input as the first action and Share as the second action, then save and test it."
        ]
      }
    ]
  },
  {
    title: "Module 6: SoR",
    time: 14,
    objectives: [
      {
        time: 7,
        objective:
          "Case manager with a CDP will be able to convert case note drafts held in the SoE into final case notes stored in SoR within a business day.",
        absorb:
          "The CDP is not complete until the draft becomes a final note in the SoR. A business-day expectation creates a clear deadline for review, cleanup, and entry.",
        doSteps: [
          "Choose one draft note from the SoE.",
          "Revise it into final case-note language with the required date, service, action, and outcome details.",
          "Enter it into the SoR within the expected business-day window."
        ]
      },
      {
        time: 7,
        objective:
          "Case manager will be able to describe how a case note draft in a SoE does not satisfy the requirement of entering final case notes into the SoR within the required time.",
        absorb:
          "A draft is helpful but not official. Program requirements are satisfied only when the final note is entered into the designated SoR on time.",
        doSteps: [
          "Write a two-sentence explanation of why an SoE draft is not the same as an SoR final note.",
          "Identify one consequence of leaving a draft in the SoE past the required timeline.",
          "Create a personal end-of-day check for moving drafts into the SoR."
        ]
      }
    ]
  }
];

const modulesContainer = document.querySelector("#modules");
const progressList = document.querySelector("#progressList");
const progressLabel = document.querySelector("#progressLabel");
const progressPercent = document.querySelector("#progressPercent");
const progressBar = document.querySelector("#progressBar");
const timeCompleted = document.querySelector("#timeCompleted");
const timeRemaining = document.querySelector("#timeRemaining");
const timeTotal = document.querySelector("#timeTotal");
const apiKeyInput = document.querySelector("#apiKey");

let completed = loadProgress();

function totalObjectives() {
  return course.reduce((sum, module) => sum + module.objectives.length, 0);
}

function totalCourseMinutes() {
  return course.reduce((moduleSum, module) => {
    const objectiveMinutes = module.objectives.reduce((sum, objective) => sum + objective.time, 0);
    return moduleSum + objectiveMinutes;
  }, 0);
}

function completedCourseMinutes() {
  return course.reduce((moduleSum, module, moduleIndex) => {
    const objectiveMinutes = module.objectives.reduce((sum, objective, objectiveIndex) => {
      return completed[objectiveId(moduleIndex, objectiveIndex)] ? sum + objective.time : sum;
    }, 0);
    return moduleSum + objectiveMinutes;
  }, 0);
}

function objectiveId(moduleIndex, objectiveIndex) {
  return `m${moduleIndex + 1}-lo${objectiveIndex + 1}`;
}

function moduleCompletedCount(moduleIndex) {
  return course[moduleIndex].objectives.filter((_, objectiveIndex) => {
    return completed[objectiveId(moduleIndex, objectiveIndex)];
  }).length;
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
}

function renderCourse() {
  modulesContainer.innerHTML = "";

  course.forEach((module, moduleIndex) => {
    const details = document.createElement("details");
    details.className = "module";
    details.open = moduleIndex === 0;

    const summary = document.createElement("summary");
    summary.innerHTML = `
      <div>
        <h3 class="module-title">${escapeHtml(module.title)}</h3>
        <div class="module-meta">${module.objectives.length} learning objectives - ${module.time} min</div>
      </div>
      <span class="summary-action" aria-hidden="true"></span>
    `;
    details.append(summary);

    const body = document.createElement("div");
    body.className = "module-body";

    module.objectives.forEach((objective, objectiveIndex) => {
      body.append(createObjective(module, moduleIndex, objective, objectiveIndex));
    });

    details.append(body);
    modulesContainer.append(details);
  });
}

function createObjective(module, moduleIndex, objective, objectiveIndex) {
  const id = objectiveId(moduleIndex, objectiveIndex);
  const article = document.createElement("article");
  article.id = id;
  article.className = "learning-objective";

  const doItems = objective.doSteps.map((step) => `<li>${escapeHtml(step)}</li>`).join("");

  article.innerHTML = `
    <div class="lo-header">
      <div>
        <h3 class="lo-heading">Learning Objective ${objectiveIndex + 1}</h3>
        <div class="lo-meta">${objective.time} min</div>
      </div>
      <label class="complete-toggle">
        <input type="checkbox" data-complete="${id}" ${completed[id] ? "checked" : ""}>
        Complete
      </label>
    </div>
    <div class="lo-sections">
      <section class="lo-section" aria-labelledby="${id}-absorb">
        <h4 id="${id}-absorb">Absorb</h4>
        <p class="objective-text">${formatObjective(objective.objective)}</p>
        <p>${escapeHtml(objective.absorb)}</p>
      </section>
      <section class="lo-section" aria-labelledby="${id}-do">
        <h4 id="${id}-do">Do</h4>
        <p class="do-note">Recommended steps to complete this objective:</p>
        <ol>${doItems}</ol>
      </section>
      <section class="lo-section" aria-labelledby="${id}-connect">
        <h4 id="${id}-connect">Connect</h4>
        <form class="connect-form" data-module-title="${escapeAttribute(module.title)}" data-objective="${escapeAttribute(objective.objective)}" data-absorb="${escapeAttribute(objective.absorb)}" data-do="${escapeAttribute(objective.doSteps.join(" "))}">
          <textarea name="question" placeholder="Ask a question about this objective"></textarea>
          <div class="connect-actions">
            <button class="ask-button" type="submit">Ask</button>
            <button class="clear-button" type="button">Clear</button>
          </div>
          <div class="answer" aria-live="polite">Your answer will appear here.</div>
        </form>
      </section>
    </div>
  `;

  return article;
}

function renderProgress() {
  progressList.innerHTML = "";

  course.forEach((module, moduleIndex) => {
    const wrapper = document.createElement("section");
    const completeCount = moduleCompletedCount(moduleIndex);
    wrapper.innerHTML = `
      <div class="progress-module-title">
        <span>${escapeHtml(module.title.replace(/^Module \d+:\s*/, ""))}</span>
        <span>${completeCount}/${module.objectives.length}</span>
      </div>
      <div class="progress-items"></div>
    `;

    const items = wrapper.querySelector(".progress-items");
    module.objectives.forEach((objective, objectiveIndex) => {
      const id = objectiveId(moduleIndex, objectiveIndex);
      const objectiveLabel = `LO ${objectiveIndex + 1}: ${shortenObjective(objective.objective)}`;
      const item = document.createElement("div");
      item.className = "progress-item";
      item.innerHTML = `
        <input type="checkbox" data-complete="${id}" aria-label="Mark ${escapeAttribute(objectiveLabel)} complete" ${completed[id] ? "checked" : ""}>
        <a href="#${id}">${escapeHtml(objectiveLabel)}</a>
      `;
      items.append(item);
    });

    progressList.append(wrapper);
  });

  const completedCount = Object.values(completed).filter(Boolean).length;
  const total = totalObjectives();
  const percent = total ? Math.round((completedCount / total) * 100) : 0;
  const totalMinutes = totalCourseMinutes();
  const completedMinutes = completedCourseMinutes();
  const remainingMinutes = totalMinutes - completedMinutes;

  progressLabel.textContent = `${completedCount} of ${total} complete`;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  timeCompleted.textContent = formatMinutes(completedMinutes);
  timeRemaining.textContent = formatMinutes(remainingMinutes);
  timeTotal.textContent = formatMinutes(totalMinutes);
}

function updateCompletion(id, value) {
  completed[id] = value;
  saveProgress();
  syncCompletionControls(id, value);
  renderProgress();
}

function syncCompletionControls(id, value) {
  document.querySelectorAll(`[data-complete="${CSS.escape(id)}"]`).forEach((checkbox) => {
    checkbox.checked = value;
  });
}

async function askOpenAI(form) {
  const apiKey = apiKeyInput.value.trim();
  const question = form.elements.question.value.trim();
  const answer = form.querySelector(".answer");
  const button = form.querySelector(".ask-button");

  if (!apiKey) {
    setAnswer(answer, "Enter an OpenAI API key at the top of the page first.", "error");
    apiKeyInput.focus();
    return;
  }

  if (!question) {
    setAnswer(answer, "Type a question for this learning objective.", "error");
    form.elements.question.focus();
    return;
  }

  button.disabled = true;
  button.textContent = "Asking...";
  setAnswer(answer, "Thinking...", "loading");

  const prompt = [
    "You are helping a case manager learn a short course on case note documentation.",
    "Answer in plain language. Keep the answer under 180 words unless the learner asks for a checklist.",
    "The Do steps are recommended practice steps for completing the learning objective.",
    "Use only the course context below unless the learner asks for a general explanation.",
    "",
    `Module: ${form.dataset.moduleTitle}`,
    `Learning objective: ${form.dataset.objective}`,
    `Absorb context: ${form.dataset.absorb}`,
    `Recommended Do steps: ${form.dataset.do}`,
    "",
    `Learner question: ${question}`
  ].join("\n");

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: MODEL,
        input: prompt
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message = data.error?.message || `OpenAI request failed with status ${response.status}.`;
      throw new Error(message);
    }

    setAnswer(answer, extractOutputText(data) || "I did not receive a text answer. Try rephrasing your question.");
  } catch (error) {
    setAnswer(answer, error.message || "The request could not be completed.", "error");
  } finally {
    button.disabled = false;
    button.textContent = "Ask";
  }
}

function extractOutputText(data) {
  if (data.output_text) {
    return data.output_text;
  }

  if (!Array.isArray(data.output)) {
    return "";
  }

  return data.output
    .flatMap((item) => item.content || [])
    .filter((content) => content.type === "output_text" && content.text)
    .map((content) => content.text)
    .join("\n\n");
}

function setAnswer(answer, text, state = "ready") {
  answer.textContent = text;
  answer.dataset.state = state;
}

function shortenObjective(objective) {
  const cleaned = objective
    .replace(/^A case manager that manages case notes across multiple cases will be able to /i, "")
    .replace(/^Case manager(?: with| without)?/i, "Case manager")
    .trim();

  return cleaned.length > 72 ? `${cleaned.slice(0, 69)}...` : cleaned;
}

function formatMinutes(minutes) {
  return `${minutes} min`;
}

function formatObjective(objective) {
  const actionVerbPattern =
    /(will be able to\s+)(recognize|distinguish|summarize|open|describe|sync|download|log in|prioritize|record|add|convert)\b/i;
  const match = objective.match(actionVerbPattern);

  if (!match || match.index === undefined) {
    return escapeHtml(objective);
  }

  const prefixStart = match.index;
  const prefix = match[1];
  const verb = match[2];
  const verbStart = prefixStart + prefix.length;
  const verbEnd = verbStart + verb.length;

  return [
    escapeHtml(objective.slice(0, verbStart)),
    `<strong>${escapeHtml(verb)}</strong>`,
    escapeHtml(objective.slice(verbEnd))
  ].join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("\n", " ");
}

document.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-complete]");
  if (!checkbox) {
    return;
  }

  updateCompletion(checkbox.dataset.complete, checkbox.checked);
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest(".connect-form");
  if (!form) {
    return;
  }

  event.preventDefault();
  askOpenAI(form);
});

document.addEventListener("click", (event) => {
  const clearButton = event.target.closest(".clear-button");
  if (!clearButton) {
    return;
  }

  const form = clearButton.closest(".connect-form");
  form.elements.question.value = "";
  setAnswer(form.querySelector(".answer"), "Your answer will appear here.");
});

renderCourse();
renderProgress();
