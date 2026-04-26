const STORAGE_KEY = "case-note-short-course-progress";
const CREDENTIAL_ID = "openai-api-key";
const MODEL = "gpt-5-mini";
const COACHING_EMPTY_MESSAGE =
  "Your coaching response will appear here. Your coach will tell you when to mark this learning objective as complete";

const docs = {
  createNotebook: {
    title: "Create a new notebook - Microsoft Support",
    url: "https://support.microsoft.com/en-us/office/create-a-new-notebook-5db754d4-165d-4eb0-82a0-6e30ea13aa0a"
  },
  organizeNotes: {
    title: "Organize your notes - Microsoft Support",
    url: "https://support.microsoft.com/en-us/office/organize-your-notes-c3c8b098-7f9c-4c2a-a0dc-ebb83bc76364"
  },
  createSection: {
    title: "Create a new section - Microsoft Support",
    url: "https://support.microsoft.com/en-us/office/create-a-new-section-43356c5d-05c0-4a6b-990a-58ed45eef34a"
  },
  syncNotebook: {
    title: "Sync a notebook in OneNote - Microsoft Support",
    url: "https://support.microsoft.com/en-us/office/sync-a-notebook-in-onenote-1986c4cf-7716-4c78-b7e7-479be30992c7"
  },
  oneNoteOffline: {
    title: "Work offline in OneNote for iPhone or iPad - Microsoft Support",
    url: "https://support.microsoft.com/en-us/office/work-offline-in-microsoft-onenote-for-ipad-or-iphone-d75e8b4d-fd37-4fd7-afbf-4ec285fe76c3"
  },
  oneNoteIphone: {
    title: "Microsoft OneNote for iPhone - Microsoft Support",
    url: "https://support.microsoft.com/en-us/office/microsoft-onenote-for-iphone-b93a0ea8-1285-4d31-a7c5-86a849731902"
  },
  signInOneNote: {
    title: "Sign in to OneNote for iPad or iPhone - Microsoft Support",
    url: "https://support.microsoft.com/en-gb/office/sign-in-to-onenote-for-ipad-or-iphone-d28f78bf-3f33-495a-806c-150aa2a8148d"
  },
  shareToOneNote: {
    title: "Share content with OneNote for iPhone or iPad - Microsoft Support",
    url: "https://support.microsoft.com/en-us/office/share-content-from-other-apps-with-onenote-for-iphone-or-ipad-f21123c3-2b5f-4fc6-bc75-62fecd284824"
  },
  deleteOneNoteIos: {
    title: "Delete pages, sections, or notebooks in OneNote for iPhone or iPad - Microsoft Support",
    url: "https://support.microsoft.com/en-us/office/delete-pages-sections-or-notebooks-in-onenote-for-ipad-or-iphone-a1450df9-b8a5-4078-a5ff-5818e133214f"
  },
  oneNoteAppStore: {
    title: "Microsoft OneNote on the App Store",
    url: "https://apps.apple.com/us/app/microsoft-onenote/id410395246"
  },
  shortcutsGuide: {
    title: "Shortcuts User Guide - Apple Support",
    url: "https://support.apple.com/en-us/HT209055"
  },
  askForInput: {
    title: "Use Ask for Input in Shortcuts - Apple Support",
    url: "https://support.apple.com/en-euro/guide/shortcuts/apd68b5c9161/ios"
  },
  actionConnections: {
    title: "Action connections in Shortcuts - Apple Support",
    url: "https://support.apple.com/guide/shortcuts/action-connections-apda850ab0e1/ios"
  }
};

const media = {
  appsOnIos: {
    title: "Required iPhone apps",
    src: "public/apps-on-ios.JPEG",
    alt: "iPhone screen showing Shortcuts and OneNote app icons.",
    caption: "Shortcuts captures the draft text. OneNote stores the draft in the system of engagement."
  },
  syncDesktopMenu: {
    title: "OneNote desktop sync status",
    src: "public/sync-desktop-1.png",
    alt: "OneNote desktop notebook menu with Notebook Sync Status highlighted.",
    caption: "On desktop, use the notebook menu to open sync status and check whether changes are moving through the cloud."
  },
  syncDesktopNow: {
    title: "Sync this notebook now",
    src: "public/sync-desktop-2.png",
    alt: "OneNote desktop sync status window with Sync Now highlighted.",
    caption: "Sync Now pushes local desktop changes up to the cloud and pulls newer cloud changes back down."
  },
  syncPhone: {
    title: "OneNote iPhone syncing",
    src: "public/syncing-on-phone.PNG",
    alt: "OneNote iPhone notebook list showing a sync spinner.",
    caption: "The mobile app checks the cloud copy and updates the phone with available notebook, section, and page changes."
  }
};

const course = [
  {
    title: "Module 1: Terms",
    description:
      "Defines the shared language for the course: CDP, SoE, and SoR. These terms make the later setup steps easier to connect to documentation requirements.",
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
        ],
        checkQuestion:
          "In your own words, what are two benefits of a CDP, and how do the SoE and SoR fit into it?",
        links: [docs.syncNotebook]
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
        ],
        checkQuestion:
          "Describe the path a OneNote draft takes from field capture to desktop finalization and SoR entry.",
        links: [docs.shareToOneNote, docs.syncNotebook]
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
        ],
        checkQuestion:
          "What is the difference between a draft in the SoE and a final note in the SoR?",
        links: [docs.syncNotebook]
      }
    ]
  },
  {
    title: "Module 2: SoE - O365",
    description:
      "Sets up the Microsoft 365 and OneNote foundation. This turns the SoE idea from Module 1 into an approved workspace that can sync through a work account.",
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
        ],
        checkQuestion:
          "How would you explain OneNote's role in O365 and approved cloud storage to a new case manager?",
        links: [docs.oneNoteIphone, docs.syncNotebook]
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
        ],
        checkQuestion:
          "What steps confirm you created a new OneNote notebook with the correct work account?",
        links: [docs.createNotebook]
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
        ],
        checkQuestion:
          "Where is a OneNote notebook stored or synced, and why should a case manager know that location?",
        links: [docs.createNotebook, docs.syncNotebook]
      }
    ]
  },
  {
    title: "Module 3: SoE - OneNote Desktop",
    description:
      "Builds the desktop notebook structure and verifies cloud sync. This is where the case note draft workspace becomes organized enough to support field-to-desktop work.",
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
        ],
        checkQuestion:
          "How can OneNote sections be used as cases, and what should the two practice sections be named?",
        links: [docs.organizeNotes, docs.createSection]
      },
      {
        time: 6,
        objective:
          "Case manager will be able to sync data with the cloud from the desktop application. Syncing can sometimes take a few minutes and should also happen automatically.",
        absorb:
          "Sync keeps the desktop notebook and cloud copy aligned. When you sync, OneNote uploads new local changes to the cloud and downloads newer cloud changes back to the desktop. Manual sync is a useful check when notes need to move between desktop and mobile without waiting for the next automatic sync.",
        doSteps: [
          "Add a short test note to Case 1.",
          "Right-click the notebook, open Notebook Sync Status, and choose Sync Now for the notebook.",
          "Wait a few minutes if needed, then confirm there is no sync error message."
        ],
        checkQuestion:
          "Explain what happens when OneNote desktop syncs with the cloud, and how you would manually start that sync.",
        links: [docs.syncNotebook],
        media: [media.syncDesktopMenu, media.syncDesktopNow]
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
        ],
        checkQuestion:
          "Which app should be installed from the iOS App Store, and why is it needed for the SoE?",
        links: [docs.oneNoteAppStore, docs.oneNoteIphone],
        media: [media.appsOnIos]
      }
    ]
  },
  {
    title: "Module 4: SoE - OneNote iOS",
    description:
      "Connects the phone to the same notebook used on desktop. This extends the SoE into the field while keeping the cloud copy as the bridge between devices.",
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
        ],
        checkQuestion:
          "How do you sign in to OneNote on iPhone so the desktop notebook is available?",
        links: [docs.signInOneNote, docs.oneNoteIphone],
        media: [media.appsOnIos]
      },
      {
        time: 8,
        objective:
          "Case manager will be able to sync cases from the cloud on the iOS application given 2 sections were created in the notebook. Syncing can sometimes take a few minutes and should also happen automatically.",
        absorb:
          "Mobile sync confirms the SoE is available in the field. OneNote compares the phone with the cloud copy: it downloads sections and pages created on desktop, and it uploads phone edits so the desktop can receive them later.",
        doSteps: [
          "Find Case 1 and Case 2 in the OneNote iOS notebook.",
          "Open the notebook list and allow OneNote to refresh from the cloud. If needed, close and reopen the notebook after a few minutes.",
          "Add a small test draft to one section and confirm it later appears on the desktop."
        ],
        checkQuestion:
          "Explain what phone sync does with the cloud and how you would confirm Case 1 and Case 2 arrived on the phone.",
        links: [docs.syncNotebook, docs.oneNoteOffline],
        media: [media.syncPhone]
      }
    ]
  },
  {
    title: "Module 5: SoE - iOS Shortcut",
    description:
      "Creates a fast capture path on the phone. The shortcut reduces friction so field notes can enter the SoE quickly and be finalized later.",
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
        ],
        checkQuestion:
          "How do you move OneNote near the top of the iOS share sheet for the Add case note shortcut?",
        links: [docs.shareToOneNote],
        media: [media.appsOnIos]
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
        ],
        checkQuestion:
          "Describe how you would use Add case note to capture a draft into the SoE.",
        links: [docs.shareToOneNote, docs.syncNotebook]
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
        ],
        checkQuestion:
          "What two actions make up the Add case note shortcut, and what does each action do?",
        links: [docs.shortcutsGuide, docs.askForInput, docs.actionConnections],
        media: [media.appsOnIos]
      }
    ]
  },
  {
    title: "Module 6: SoR",
    description:
      "Completes the documentation process by moving from draft to official record. It also closes the loop by cleaning up the SoE once the final note is safely in the SoR.",
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
        ],
        checkQuestion:
          "What steps convert a SoE draft into a final SoR case note within a business day?",
        links: [docs.syncNotebook]
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
        ],
        checkQuestion:
          "Why does a draft in the SoE not satisfy the requirement for final SoR documentation?",
        links: [docs.syncNotebook]
      },
      {
        time: 6,
        objective:
          "Case manager who has entered final case note into SoR will be able to acknowledge they must delete or archive the draft case note in the SoE to prevent clutter.",
        absorb:
          "Once the final note is in the SoR, the SoE draft should not keep competing with the official record. Deleting or archiving the draft prevents duplicate-looking notes, stale drafts, and visual clutter in the capture workspace.",
        doSteps: [
          "Confirm the final case note is saved in the SoR.",
          "Return to the matching draft in the SoE.",
          "Delete or archive the draft according to local policy, then confirm the active case section is clear of completed drafts."
        ],
        checkQuestion:
          "After final SoR entry, what should happen to the matching SoE draft, and why?",
        links: [docs.deleteOneNoteIos, docs.organizeNotes]
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
const resetStateButton = document.querySelector("#resetState");
const apiKeyForm = document.querySelector("#apiKeyForm");
const apiKeyInput = document.querySelector("#apiKey");
const apiStatus = document.querySelector("#apiStatus");
const mediaModal = document.querySelector("#mediaModal");
const mediaTitle = document.querySelector("#mediaTitle");
const mediaImage = document.querySelector("#mediaImage");
const mediaCaption = document.querySelector("#mediaCaption");
const mediaClose = document.querySelector("#mediaClose");

let completed = loadProgress();

function totalObjectives() {
  return course.reduce((sum, module) => sum + module.objectives.length, 0);
}

function completedObjectiveCount() {
  return course.reduce((sum, module, moduleIndex) => {
    const moduleCount = module.objectives.filter((_, objectiveIndex) => {
      return completed[objectiveId(moduleIndex, objectiveIndex)];
    }).length;
    return sum + moduleCount;
  }, 0);
}

function moduleMinutes(module) {
  return module.objectives.reduce((sum, objective) => sum + objective.time, 0);
}

function totalCourseMinutes() {
  return course.reduce((sum, module) => sum + moduleMinutes(module), 0);
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

function objectiveRef(moduleIndex, objectiveIndex) {
  return `CDP-M${String(moduleIndex + 1).padStart(2, "0")}-LO${String(objectiveIndex + 1).padStart(2, "0")}`;
}

function getObjectiveById(id) {
  for (let moduleIndex = 0; moduleIndex < course.length; moduleIndex += 1) {
    const objectiveIndex = course[moduleIndex].objectives.findIndex((_, index) => objectiveId(moduleIndex, index) === id);
    if (objectiveIndex !== -1) {
      return {
        module: course[moduleIndex],
        moduleIndex,
        objective: course[moduleIndex].objectives[objectiveIndex],
        objectiveIndex,
        ref: objectiveRef(moduleIndex, objectiveIndex)
      };
    }
  }

  return null;
}

function moduleCompletedCount(moduleIndex) {
  return course[moduleIndex].objectives.filter((_, objectiveIndex) => {
    return completed[objectiveId(moduleIndex, objectiveIndex)];
  }).length;
}

function isModuleComplete(moduleIndex) {
  return moduleCompletedCount(moduleIndex) === course[moduleIndex].objectives.length;
}

function firstIncompleteModuleIndex(startIndex = 0) {
  for (let index = startIndex; index < course.length; index += 1) {
    if (!isModuleComplete(index)) {
      return index;
    }
  }

  return -1;
}

function loadProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return Object.fromEntries(Object.entries(parsed).filter((entry) => entry[1] === true));
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
}

function resetState() {
  const shouldReset = window.confirm("Reset all saved course progress?");
  if (!shouldReset) {
    return;
  }

  completed = {};
  localStorage.removeItem(STORAGE_KEY);
  renderCourse();
  renderProgress();
}

function renderCourse() {
  modulesContainer.innerHTML = "";
  const openModuleIndex = Math.max(firstIncompleteModuleIndex(), 0);

  course.forEach((module, moduleIndex) => {
    const details = document.createElement("details");
    details.className = "module";
    details.dataset.moduleIndex = String(moduleIndex);
    details.open = moduleIndex === openModuleIndex && !isModuleComplete(moduleIndex);

    const summary = document.createElement("summary");
    summary.innerHTML = `
      <div class="module-summary-text">
        <h3 class="module-title">${escapeHtml(module.title)}</h3>
        <p class="module-description">${escapeHtml(module.description)}</p>
        <div class="module-meta">
          <span data-module-status></span>
          <span>${module.objectives.length} learning objectives</span>
          <span>${formatMinutes(moduleMinutes(module))}</span>
        </div>
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

  updateModuleStates();
}

function createObjective(module, moduleIndex, objective, objectiveIndex) {
  const id = objectiveId(moduleIndex, objectiveIndex);
  const ref = objectiveRef(moduleIndex, objectiveIndex);
  const article = document.createElement("article");
  const isComplete = Boolean(completed[id]);
  article.id = id;
  article.className = `learning-objective${isComplete ? " is-complete is-collapsed" : ""}`;
  article.dataset.loId = id;
  article.dataset.moduleIndex = String(moduleIndex);

  const bodyId = `${id}-body`;
  const doItems = objective.doSteps.map((step) => `<li>${escapeHtml(step)}</li>`).join("");

  article.innerHTML = `
    <div class="lo-header">
      <button class="lo-toggle" type="button" aria-expanded="${isComplete ? "false" : "true"}" aria-controls="${bodyId}">
        <span class="lo-ref">${ref}</span>
        <span class="lo-title">Learning Objective ${objectiveIndex + 1}</span>
        <span class="lo-meta">${formatMinutes(objective.time)} - <span data-lo-status>${isComplete ? "Complete" : "In progress"}</span></span>
      </button>
      <label class="complete-toggle">
        <input type="checkbox" data-complete="${id}" ${isComplete ? "checked" : ""}>
        Complete
      </label>
    </div>
    <div id="${bodyId}" class="lo-body">
      <div class="lo-sections">
        <section class="lo-section" aria-labelledby="${id}-absorb">
          <h4 id="${id}-absorb">Absorb</h4>
          <p class="objective-text">${formatObjective(objective.objective)}</p>
          <p>${escapeHtml(objective.absorb)}</p>
          ${renderResources(objective)}
        </section>
        <section class="lo-section" aria-labelledby="${id}-do">
          <h4 id="${id}-do">Do</h4>
          <p class="do-note">Recommended steps to complete this objective:</p>
          <ol>${doItems}</ol>
        </section>
        <section class="lo-section" aria-labelledby="${id}-connect">
          <h4 id="${id}-connect">Connect</h4>
          <p class="check-question"><strong>Check question:</strong> ${escapeHtml(objective.checkQuestion)}</p>
          <form class="connect-form" data-lo-id="${id}">
            <textarea name="question" placeholder="Answer the check question or ask for coaching"></textarea>
            <div class="connect-actions">
              <button class="ask-button" type="submit">Check answer</button>
              <button class="clear-button" type="button">Clear</button>
            </div>
            <div class="answer" aria-live="polite">${COACHING_EMPTY_MESSAGE}</div>
          </form>
        </section>
      </div>
    </div>
  `;

  return article;
}

function renderResources(objective) {
  const links = objective.links || [];
  const images = objective.media || [];

  if (!links.length && !images.length) {
    return "";
  }

  const linkItems = links
    .map((link) => `<li><a href="${escapeAttribute(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.title)}</a></li>`)
    .join("");

  const imageButtons = images
    .map((item) => {
      return `
        <button class="media-button" type="button" data-media-src="${escapeAttribute(item.src)}" data-media-title="${escapeAttribute(item.title)}" data-media-alt="${escapeAttribute(item.alt)}" data-media-caption="${escapeAttribute(item.caption)}">
          View image: ${escapeHtml(item.title)}
        </button>
      `;
    })
    .join("");

  return `
    <div class="resources">
      <h5>Helpful resources</h5>
      ${links.length ? `<ul class="resource-list">${linkItems}</ul>` : ""}
      ${images.length ? `<div class="media-buttons">${imageButtons}</div>` : ""}
    </div>
  `;
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
      const ref = objectiveRef(moduleIndex, objectiveIndex);
      const objectiveLabel = `${ref}: ${shortenObjective(objective.objective)}`;
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

  const completedCount = completedObjectiveCount();
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
  const context = getObjectiveById(id);
  if (!context) {
    return;
  }

  if (value) {
    completed[id] = true;
  } else {
    delete completed[id];
  }

  saveProgress();
  syncCompletionControls(id, value);
  setObjectiveState(id, value);
  renderProgress();
  updateModuleStates();

  if (value && isModuleComplete(context.moduleIndex)) {
    advanceFromCompletedModule(context.moduleIndex);
  }

  if (!value) {
    openModule(context.moduleIndex);
    setObjectiveCollapsed(id, false);
  }
}

function syncCompletionControls(id, value) {
  document.querySelectorAll(`[data-complete="${cssEscape(id)}"]`).forEach((checkbox) => {
    checkbox.checked = value;
  });
}

function setObjectiveState(id, isComplete) {
  const objective = document.querySelector(`[data-lo-id="${cssEscape(id)}"]`);
  if (!objective) {
    return;
  }

  objective.classList.toggle("is-complete", isComplete);
  const status = objective.querySelector("[data-lo-status]");
  if (status) {
    status.textContent = isComplete ? "Complete" : "In progress";
  }

  if (isComplete) {
    setObjectiveCollapsed(id, true);
  }
}

function setObjectiveCollapsed(id, isCollapsed) {
  const objective = document.querySelector(`[data-lo-id="${cssEscape(id)}"]`);
  if (!objective) {
    return;
  }

  objective.classList.toggle("is-collapsed", isCollapsed);
  const toggle = objective.querySelector(".lo-toggle");
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(!isCollapsed));
  }
}

function updateModuleStates() {
  course.forEach((module, moduleIndex) => {
    const details = document.querySelector(`[data-module-index="${moduleIndex}"]`);
    if (!details) {
      return;
    }

    const completedCount = moduleCompletedCount(moduleIndex);
    const remainingCount = module.objectives.length - completedCount;
    const status = details.querySelector("[data-module-status]");
    details.classList.toggle("is-complete", remainingCount === 0);

    if (status) {
      status.textContent = remainingCount === 0 ? "Module complete" : `${remainingCount} ${pluralize("LO", remainingCount)} left`;
    }
  });
}

function advanceFromCompletedModule(moduleIndex) {
  const completedModule = document.querySelector(`[data-module-index="${moduleIndex}"]`);
  if (completedModule) {
    completedModule.open = false;
  }

  const nextModuleIndex = firstIncompleteModuleIndex(moduleIndex + 1);
  if (nextModuleIndex === -1) {
    return;
  }

  openModule(nextModuleIndex);
  const nextModule = document.querySelector(`[data-module-index="${nextModuleIndex}"]`);
  if (nextModule) {
    nextModule.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function openModule(moduleIndex) {
  const module = document.querySelector(`[data-module-index="${moduleIndex}"]`);
  if (module) {
    module.open = true;
  }
}

async function askOpenAI(form) {
  const context = getObjectiveById(form.dataset.loId);
  const apiKey = apiKeyInput.value.trim();
  const question = form.elements.question.value.trim();
  const answer = form.querySelector(".answer");
  const button = form.querySelector(".ask-button");

  if (!context) {
    setAnswer(answer, "This learning objective context could not be loaded.", "error");
    return;
  }

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
  setAnswer(answer, `Reviewing your response for ${context.ref}...`, "loading");

  const prompt = buildPrompt(context, question);

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
    rememberApiKeyInBrowser();
  } catch (error) {
    setAnswer(answer, error.message || "The request could not be completed.", "error");
  } finally {
    button.disabled = false;
    button.textContent = "Check answer";
  }
}

function buildPrompt(context, question) {
  const links = (context.objective.links || []).map((link) => `${link.title}: ${link.url}`).join("\n");
  const mediaContext = (context.objective.media || []).map((item) => `${item.title}: ${item.caption}`).join("\n");

  return [
    "You are a supportive course coach for a case manager learning case note documentation.",
    "Assume the learner is over 60, is not technically savvy, and may feel intimidated by learning new apps and workflows.",
    "They may rely on older work habits and prior experience. Honor that experience first, then connect it gently to the new skill.",
    "Use warm encouragement, short sentences, and step-by-step guidance. Avoid jargon unless you immediately explain it.",
    "Do not sound patronizing. Treat hesitation as normal and solvable.",
    "Your task is to help the learner achieve the specific learning objective below.",
    "Treat the learner's message as either an answer to the verification question or a request for coaching.",
    "If the learner's answer sufficiently demonstrates the learning objective, say that it meets the objective and explicitly tell them they may mark the LO complete.",
    "If the answer is incomplete or incorrect, do not tell them to mark it complete. Reassure them, name one thing they already have right, explain what is missing, coach them through the next step, and ask one focused follow-up question.",
    "If the learner asks a question instead of answering, answer it calmly and then guide them back to the verification question.",
    "Keep the response plain-language and usually under 180 words unless a checklist is needed.",
    "The Do steps are recommended practice steps, not a separate submission requirement.",
    "",
    `LO reference: ${context.ref}`,
    `Module: ${context.module.title}`,
    `Module description: ${context.module.description}`,
    `Learning objective: ${context.objective.objective}`,
    `Verification question: ${context.objective.checkQuestion}`,
    `Absorb context: ${context.objective.absorb}`,
    `Recommended Do steps: ${context.objective.doSteps.join(" ")}`,
    links ? `Helpful documentation links:\n${links}` : "Helpful documentation links: none listed",
    mediaContext ? `Available image context:\n${mediaContext}` : "Available image context: none listed",
    "",
    `Learner response: ${question}`
  ].join("\n");
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

async function loadApiCredential() {
  if (!window.PasswordCredential || !navigator.credentials) {
    return;
  }

  try {
    const credential = await navigator.credentials.get({
      password: true,
      mediation: "optional"
    });

    if (credential && credential.id === CREDENTIAL_ID && credential.password) {
      apiKeyInput.value = credential.password;
      setApiStatus("API key loaded from this browser's password manager.");
    }
  } catch {
    setApiStatus("");
  }
}

async function rememberApiKeyInBrowser() {
  const apiKey = apiKeyInput.value.trim();
  if (!apiKey || !window.PasswordCredential || !navigator.credentials || !window.isSecureContext) {
    return;
  }

  try {
    const credential = new PasswordCredential({
      id: CREDENTIAL_ID,
      name: "OpenAI API key",
      password: apiKey
    });
    await navigator.credentials.store(credential);
    setApiStatus("API key offered to this browser's password manager.");
  } catch {
    setApiStatus("");
  }
}

function setApiStatus(message) {
  if (apiStatus) {
    apiStatus.textContent = message;
  }
}

function openMediaModal(button) {
  mediaTitle.textContent = button.dataset.mediaTitle || "Image";
  mediaImage.src = button.dataset.mediaSrc || "";
  mediaImage.alt = button.dataset.mediaAlt || "";
  mediaCaption.textContent = button.dataset.mediaCaption || "";

  if (typeof mediaModal.showModal === "function") {
    mediaModal.showModal();
  } else {
    mediaModal.setAttribute("open", "");
  }
}

function closeMediaModal() {
  if (typeof mediaModal.close === "function") {
    mediaModal.close();
  } else {
    mediaModal.removeAttribute("open");
  }

  mediaImage.removeAttribute("src");
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
    /(will be able to\s+)(acknowledge|recognize|distinguish|summarize|open|describe|sync|download|log in|prioritize|record|add|convert)\b/i;
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

function pluralize(word, count) {
  return count === 1 ? word : `${word}s`;
}

function cssEscape(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(value);
  }

  return String(value).replace(/["\\]/g, "\\$&");
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
  const progressLink = event.target.closest(".progress-item a");
  if (progressLink) {
    const id = progressLink.getAttribute("href").replace("#", "");
    const context = getObjectiveById(id);
    if (context) {
      openModule(context.moduleIndex);
      setObjectiveCollapsed(id, false);
    }
    return;
  }

  const toggle = event.target.closest(".lo-toggle");
  if (toggle) {
    const objective = toggle.closest(".learning-objective");
    setObjectiveCollapsed(objective.dataset.loId, !objective.classList.contains("is-collapsed"));
    return;
  }

  const clearButton = event.target.closest(".clear-button");
  if (clearButton) {
    const form = clearButton.closest(".connect-form");
    form.elements.question.value = "";
    setAnswer(form.querySelector(".answer"), COACHING_EMPTY_MESSAGE);
    return;
  }

  const mediaButton = event.target.closest(".media-button");
  if (mediaButton) {
    openMediaModal(mediaButton);
  }
});

apiKeyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  rememberApiKeyInBrowser();
});

apiKeyInput.addEventListener("change", () => {
  rememberApiKeyInBrowser();
});

mediaClose.addEventListener("click", closeMediaModal);

resetStateButton.addEventListener("click", resetState);

mediaModal.addEventListener("click", (event) => {
  if (event.target === mediaModal) {
    closeMediaModal();
  }
});

renderCourse();
renderProgress();
loadApiCredential();
