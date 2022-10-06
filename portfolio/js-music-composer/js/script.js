let newNoteData = [
  [
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
  ],
  [
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
  ],
  [
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
  ],
  [
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
  ],
  [
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
  ],
];

let noteData = [
  [
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
  ],
  [
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
  ],
  [
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
  ],
  [
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
  ],
  [
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
    {
      t: {
        sum: 0,
        notes: [],
      },
      b: {
        sum: 0,
        notes: [],
      },
    },
  ],
];

let draft = {};
let hasDraft = true;
try {
  draft = JSON.parse(localStorage.getItem("draft"));
  noteData = draft.notes;
} catch {
  // Set Fur Elise as default
  draft = {
    title: "Fur Elise",
    notes: [
      [
        {
          t: {
            sum: 1,
            notes: [
              { type: "4", key: "e5", accidental: "", rest: "" },
              { type: "4", key: "d5", accidental: "s", rest: "" },
              { type: "4", key: "e5", accidental: "", rest: "" },
              { type: "4", key: "d5", accidental: "s", rest: "" },
            ],
          },
          b: {
            sum: 1,
            notes: [{ type: "1", key: "d3", accidental: "", rest: "1" }],
          },
        },
        {
          t: {
            sum: 1,
            notes: [
              { type: "4", key: "e5", accidental: "", rest: "" },
              { type: "4", key: "b4", accidental: "", rest: "" },
              { type: "4", key: "d5", accidental: "", rest: "" },
              { type: "4", key: "c5", accidental: "", rest: "" },
            ],
          },
          b: {
            sum: 1,
            notes: [{ type: "1", key: "d3", accidental: "", rest: "1" }],
          },
        },
        {
          t: {
            sum: 1,
            notes: [
              { type: "2", key: "a4", accidental: "", rest: "" },
              { type: "2", key: "b4", accidental: "", rest: "1" },
            ],
          },
          b: {
            sum: 1,
            notes: [
              { type: "2", key: "a3", accidental: "", rest: "" },
              { type: "2", key: "f3", accidental: "", rest: "1" },
            ],
          },
        },
        {
          t: {
            sum: 1,
            notes: [
              { type: "4", key: "c4", accidental: "", rest: "" },
              { type: "4", key: "e4", accidental: "", rest: "" },
              { type: "4", key: "a4", accidental: "", rest: "" },
              { type: "4", key: "b4", accidental: "", rest: "" },
            ],
          },
          b: {
            sum: 1,
            notes: [
              { type: "2", key: "d3", accidental: "", rest: "1" },
              { type: "4", key: "f3", accidental: "", rest: "1" },
              { type: "4", key: "e3", accidental: "", rest: "" },
            ],
          },
        },
      ],
      [
        {
          t: {
            sum: 1,
            notes: [
              { type: "2", key: "e5", accidental: "", rest: "1" },
              { type: "4", key: "e4", accidental: "", rest: "" },
              { type: "4", key: "g4", accidental: "s", rest: "" },
            ],
          },
          b: {
            sum: 1,
            notes: [{ type: "1", key: "d3", accidental: "", rest: "1" }],
          },
        },
        {
          t: {
            sum: 1,
            notes: [
              { type: "4", key: "b4", accidental: "", rest: "" },
              { type: "4", key: "c5", accidental: "", rest: "" },
              { type: "2", key: "c5", accidental: "", rest: "1" },
            ],
          },
          b: {
            sum: 1,
            notes: [
              { type: "4", key: "d3", accidental: "", rest: "1" },
              { type: "4", key: "a3", accidental: "", rest: "" },
              { type: "2", key: "c3", accidental: "", rest: "1" },
            ],
          },
        },
        {
          t: {
            sum: 0.25,
            notes: [{ type: "4", key: "e4", accidental: "", rest: "" }],
          },
          b: {
            sum: 0.25,
            notes: [{ type: "4", key: "e3", accidental: "", rest: "1" }],
          },
        },
        {
          t: {
            sum: 1,
            notes: [
              { type: "4", key: "e5", accidental: "", rest: "" },
              { type: "4", key: "d5", accidental: "s", rest: "" },
              { type: "4", key: "e5", accidental: "", rest: "" },
              { type: "4", key: "d5", accidental: "s", rest: "" },
            ],
          },
          b: {
            sum: 1,
            notes: [{ type: "1", key: "d3", accidental: "", rest: "1" }],
          },
        },
      ],
      [
        {
          t: {
            sum: 1,
            notes: [
              { type: "4", key: "e5", accidental: "", rest: "" },
              { type: "4", key: "b4", accidental: "", rest: "" },
              { type: "4", key: "d5", accidental: "", rest: "" },
              { type: "4", key: "c5", accidental: "", rest: "" },
            ],
          },
          b: {
            sum: 1,
            notes: [{ type: "1", key: "b2", accidental: "", rest: "1" }],
          },
        },
        {
          t: {
            sum: 1,
            notes: [
              { type: "2", key: "a4", accidental: "", rest: "" },
              { type: "2", key: "c5", accidental: "", rest: "1" },
            ],
          },
          b: {
            sum: 1,
            notes: [
              { type: "2", key: "a3", accidental: "", rest: "" },
              { type: "2", key: "f3", accidental: "", rest: "1" },
            ],
          },
        },
        {
          t: {
            sum: 1,
            notes: [
              { type: "4", key: "c4", accidental: "", rest: "" },
              { type: "4", key: "e4", accidental: "", rest: "" },
              { type: "4", key: "a4", accidental: "", rest: "" },
              { type: "4", key: "b4", accidental: "", rest: "" },
            ],
          },
          b: {
            sum: 1,
            notes: [
              { type: "2", key: "d3", accidental: "", rest: "1" },
              { type: "4", key: "d3", accidental: "", rest: "1" },
              { type: "4", key: "e3", accidental: "", rest: "" },
            ],
          },
        },
        {
          t: {
            sum: 1,
            notes: [
              { type: "2", key: "g4", accidental: "", rest: "1" },
              { type: "4", key: "e4", accidental: "", rest: "" },
              { type: "4", key: "c5", accidental: "", rest: "" },
            ],
          },
          b: {
            sum: 1,
            notes: [{ type: "1", key: "b2", accidental: "", rest: "1" }],
          },
        },
      ],
      [
        {
          t: {
            sum: 1,
            notes: [
              { type: "4", key: "b4", accidental: "", rest: "" },
              { type: "4", key: "a4", accidental: "", rest: "" },
              { type: "2", key: "c5", accidental: "", rest: "1" },
            ],
          },
          b: {
            sum: 1,
            notes: [
              { type: "4", key: "c3", accidental: "", rest: "1" },
              { type: "4", key: "a3", accidental: "", rest: "" },
              { type: "2", key: "d3", accidental: "", rest: "1" },
            ],
          },
        },
        { t: { sum: 0, notes: [] }, b: { sum: 0, notes: [] } },
        { t: { sum: 0, notes: [] }, b: { sum: 0, notes: [] } },
        { t: { sum: 0, notes: [] }, b: { sum: 0, notes: [] } },
      ],
      [
        { t: { sum: 0, notes: [] }, b: { sum: 0, notes: [] } },
        { t: { sum: 0, notes: [] }, b: { sum: 0, notes: [] } },
        { t: { sum: 0, notes: [] }, b: { sum: 0, notes: [] } },
        { t: { sum: 0, notes: [] }, b: { sum: 0, notes: [] } },
      ],
    ],
  };
}

let metaData = {
  fileName: "Draft Score",
};
let bpm = 1000;
let animateReq;

$(document).ready(function () {
  let debug = $("#console");
  let page = $("#page");
  let toolbar = $("#toolbar");
  let btnNew = $("#btn-new");
  let btnSave = $("#btn-save");
  let btnOpen = $("#btn-open");
  let preview = $("#btn-preview");
  let lastVisit = $("#last-visit");
  let selected = {
    el: null,
    staffId: null,
    barId: null,
    clef: null,
    noteId: null,
  };
  let promptNodes = {
    prompt: $("#prompt"),
    close: $("#prompt-close"),
    title: $("#prompt-title"),
    text: $("#prompt-text"),
    button: $("#prompt-button"),
  };
  let alertNodes = {
    alert: $("#alert"),
    close: $("#alert-close"),
    title: $("#alert-title"),
    button: $("#alert-button"),
  };
  let loadNodes = {
    load: $("#load"),
    close: $("#load-close"),
    title: $("#load-title"),
    button: $("#load-button"),
    list: $("#load-list"),
  };
  let metaNodes = {
    title: $("#meta-title"),
  };

  $(window).on("unload", function () {
    let now = new Date();
    localStorage.setItem(
      "lastVisit",
      `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()} `
    );
  });

  let lastVisitDate = localStorage.getItem("lastVisit");
  if (lastVisitDate) {
    lastVisit.text(lastVisitDate);
  }

  /** Create UI */
  page.html(page.html() + createStaffRows(noteData.length));

  let memo = {
    "notes-0-t0": document.getElementById("notes-0-t0"),
    "notes-0-b0": document.getElementById("notes-0-b0"),
    "notes-0-t1": document.getElementById("notes-0-t1"),
    "notes-0-b1": document.getElementById("notes-0-b1"),
    "notes-0-t2": document.getElementById("notes-0-t2"),
    "notes-0-b2": document.getElementById("notes-0-b2"),
    "notes-0-t3": document.getElementById("notes-0-t3"),
    "notes-0-b3": document.getElementById("notes-0-b3"),

    "notes-1-t0": document.getElementById("notes-1-t0"),
    "notes-1-b0": document.getElementById("notes-1-b0"),
    "notes-1-t1": document.getElementById("notes-1-t1"),
    "notes-1-b1": document.getElementById("notes-1-b1"),
    "notes-1-t2": document.getElementById("notes-1-t2"),
    "notes-1-b2": document.getElementById("notes-1-b2"),
    "notes-1-t3": document.getElementById("notes-1-t3"),
    "notes-1-b3": document.getElementById("notes-1-b3"),

    "notes-2-t0": document.getElementById("notes-2-t0"),
    "notes-2-b0": document.getElementById("notes-2-b0"),
    "notes-2-t1": document.getElementById("notes-2-t1"),
    "notes-2-b1": document.getElementById("notes-2-b1"),
    "notes-2-t2": document.getElementById("notes-2-t2"),
    "notes-2-b2": document.getElementById("notes-2-b2"),
    "notes-2-t3": document.getElementById("notes-2-t3"),
    "notes-2-b3": document.getElementById("notes-2-b3"),

    "notes-3-t0": document.getElementById("notes-3-t0"),
    "notes-3-b0": document.getElementById("notes-3-b0"),
    "notes-3-t1": document.getElementById("notes-3-t1"),
    "notes-3-b1": document.getElementById("notes-3-b1"),
    "notes-3-t2": document.getElementById("notes-3-t2"),
    "notes-3-b2": document.getElementById("notes-3-b2"),
    "notes-3-t3": document.getElementById("notes-3-t3"),
    "notes-3-b3": document.getElementById("notes-3-b3"),

    "notes-4-t0": document.getElementById("notes-4-t0"),
    "notes-4-b0": document.getElementById("notes-4-b0"),
    "notes-4-t1": document.getElementById("notes-4-t1"),
    "notes-4-b1": document.getElementById("notes-4-b1"),
    "notes-4-t2": document.getElementById("notes-4-t2"),
    "notes-4-b2": document.getElementById("notes-4-b2"),
    "notes-4-t3": document.getElementById("notes-4-t3"),
    "notes-4-b3": document.getElementById("notes-4-b3"),
  };

  if (hasDraft) {
    document.getElementById("meta-title").value = draft.title;
    loadSavedData(draft.notes);
  }

  function uiPrompt(title, callback) {
    promptNodes.prompt.fadeIn();
  }
  function uiLoad(data) {
    loadNodes.list.html(data);
    loadNodes.load.css("display", "flex").hide().fadeIn();
  }
  function uiAlert(title) {
    alertNodes.title.text(title);
    alertNodes.alert.css("display", "flex").hide().fadeIn();
  }
  loadNodes.list.delegate("li button", "click", function (e) {
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem("saved"));
    } catch {
      saved = {};
    }
    if (!saved) {
      saved = {};
    }
    let key = e.target.dataset.key;
    document.getElementById("meta-title").value = key;
    let data = saved[key];
    loadSavedData(data);
  });
  loadNodes.close.on("click", function () {
    loadNodes.load.fadeOut();
  });
  alertNodes.close.on("click", function () {
    alertNodes.alert.fadeOut();
  });
  alertNodes.button.on("click", function () {
    alertNodes.alert.fadeOut();
  });

  /** Delegate events */
  toolbar.find(".note-control").each(function (i, el) {
    el.addEventListener("dragstart", handleNoteDragStart);
  });
  page.delegate(".hitareas .bar .hitarea", "dragover", handleStaffDragOver);
  page.delegate(".hitareas .bar .hitarea", "dragleave", handleStaffDragLeave);
  page.delegate(".hitareas .bar .hitarea", "drop", handleStaffDrop);
  page.delegate(".hitareas .bar .notes .note", "click", handleClickNote);
  $(window).on("click", handleClickOutside);
  $(window).on("keyup", function (e) {
    if (e.keyCode === 46) {
      let noteWeight = 1 / selected.noteType;
      noteData[selected.staffId][selected.barId][selected.clef].sum -=
        noteWeight;
      noteData[selected.staffId][selected.barId][selected.clef].notes.splice(
        selected.noteId,
        1
      );
      updateBar(selected.staffId, selected.clef, selected.barId);
      selected = {
        el: null,
        staffId: null,
        barId: null,
        clef: null,
        noteId: null,
        noteType: null,
      };
    }
  });
  preview.on("click", runPreview);
  btnNew.on("click", function () {
    document.getElementById("meta-title").value = "New Music";
    noteData = newNoteData;
    loadSavedData(noteData);
  });
  btnOpen.on("click", function () {
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem("saved"));
    } catch {
      saved = {};
    }
    if (!saved) {
      saved = {};
    }
    let fileList = Object.keys(saved);
    let htmlStr = "";
    for (let i = 0; i < fileList.length; i++) {
      let file = fileList[i];
      htmlStr += `<li><button data-key="${file}">${file}</button></li>`;
    }
    uiLoad(htmlStr);
  });
  btnSave.on("click", function () {
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem("saved"));
    } catch {
      saved = {};
    }
    if (!saved) {
      saved = {};
    }
    saved[document.getElementById("meta-title").value] = noteData;
    localStorage.setItem("saved", JSON.stringify(saved));
    uiAlert("Your document was saved");
  });

  function loadSavedData(data) {
    noteData = data;
    for (let staffId = 0; staffId < data.length; staffId++) {
      let staff = data[staffId];
      for (let barId = 0; barId < staff.length; barId++) {
        let bar = staff[barId];
        updateBar(staffId, "t", barId);
        updateBar(staffId, "b", barId);
      }
    }
  }

  /**
   * Sync the bar DOM with the JSON data
   * @param {*} staffId
   * @param {*} clef
   * @param {*} barId
   */
  function updateBar(staffId, clef, barId) {
    let data = noteData[staffId][barId][clef];
    let notes = memo[`notes-${staffId}-${clef}${barId}`];
    notes.innerHTML = "";
    for (let i = 0; i < data.notes.length; i++) {
      let note = data.notes[i];
      let newNote = document.createElement("div");
      newNote.className = `note note-${note.type}${note.accidental} key-${
        note.key
      } ${note.rest ? "note-rest rest-" + note.type : ""}`;
      newNote.dataset.staffId = staffId;
      newNote.dataset.barId = barId;
      newNote.dataset.clef = clef;
      newNote.dataset.noteId = i;
      newNote.dataset.noteType = note.type;
      newNote.dataset.noteRest = note.rest;
      notes.appendChild(newNote);
    }
  }

  function handleClickOutside() {
    $(".hitareas .notes .note.selected").each(function (i, el) {
      el.classList.remove("selected");
      selected = {
        el: null,
        staffId: null,
        barId: null,
        clef: null,
        noteId: null,
        noteType: null,
      };
    });
  }

  /**
   * Drag note from toolbar
   * @param {*} e
   */
  function handleNoteDragStart(e) {
    let data = {
      type: e.currentTarget.dataset.noteType,
      accidental: e.currentTarget.dataset.noteAccidental,
      rest: e.currentTarget.dataset.noteRest,
    };
    e.dataTransfer.setData("text", JSON.stringify(data));
    // e.dataTransfer.setData(
    //   "accidental",
    //   e.currentTarget.dataset.noteAccidental
    // );
    // e.dataTransfer.setData("rest", e.currentTarget.dataset.noteRest);
  }

  function handleClickNote(e) {
    e.preventDefault();
    e.stopPropagation();
    $(".hitareas .notes .note.selected").each(function (i, el) {
      el.classList.remove("selected");
    });
    selected = {
      ...e.currentTarget.dataset,
    };
    e.currentTarget.classList.add("selected");
  }

  /**
   * Hover note on staff
   * @param {*} e
   */
  function handleStaffDragOver(e) {
    e.preventDefault();
    e.target.classList.add("dragover");
  }
  function handleStaffDragLeave(e) {
    e.preventDefault();
    e.target.classList.remove("dragover");
  }

  /**
   * Drop note to staff
   * @param {*} e
   * @returns
   */
  function handleStaffDrop(e) {
    e.preventDefault();
    e.target.classList.remove("dragover");
    let dragData = e.originalEvent.dataTransfer.getData("text");
    dragData = JSON.parse(dragData);
    let noteType = dragData.type ? dragData.type : "";
    let accidental = dragData.accidental ? dragData.accidental : "";
    let rest = dragData.rest ? dragData.rest : "";
    let key = e.target.dataset.key;
    let barId = e.target.dataset.barId;
    let clef = e.target.dataset.clef;
    let staffId = e.target.dataset.staffId;

    let noteWeight = 1 / noteType;

    if (noteData[staffId][barId][clef].sum + noteWeight > 1) {
      return;
    }
    // console.log(rest);
    noteData[staffId][barId][clef].sum =
      noteData[staffId][barId][clef].sum + noteWeight;
    noteData[staffId][barId][clef].notes.push({
      type: noteType, // whole, half etc.
      key: key,
      accidental: accidental,
      rest: rest,
    });
    localStorage.setItem(
      "draft",
      JSON.stringify({
        title: document.getElementById("meta-title").value,
        notes: noteData,
      })
    );
    updateBar(staffId, clef, barId);
  }

  function runPreview() {
    var trebleSequence = [];
    var bassSquence = [];

    // Create the sequence
    for (let i = 0; i < noteData.length; i++) {
      for (let j = 0; j < noteData[i].length; j++) {
        let barData = noteData[i][j];
        for (let ti = 0; ti < barData.t.notes.length; ti++) {
          let note = barData.t.notes[ti];
          let keyFile = `${note.key}${note.accidental}`;
          if (note.accidental && note.key.indexOf("e") === 0) {
            // E sharp -> convert to F
            keyFile = keyFile.replace("e", "f");
            keyFile = keyFile.replace("s", "");
          }
          trebleSequence.push({
            audio: note.rest ? null : new Audio(`audio/${keyFile}.mp3`),
            delay: (1 / note.type) * bpm,
          });
        }
        for (let bi = 0; bi < barData.b.notes.length; bi++) {
          let note = barData.b.notes[bi];
          let keyFile = `${note.key}${note.accidental}`;
          if (note.accidental && note.key.indexOf("e") === 0) {
            // E sharp -> convert to F
            keyFile = keyFile.replace("e", "f");
            keyFile = keyFile.replace("s", "");
          }
          bassSquence.push({
            audio: note.rest ? null : new Audio(`audio/${keyFile}.mp3`),
            delay: (1 / note.type) * bpm,
          });
        }
      }
    }

    // Play the music
    let tInterval = 500;
    let bInterval = 500;
    for (let i = 0; i < trebleSequence.length; i++) {
      let audioData = trebleSequence[i];
      setTimeout(function () {
        audioData.audio && audioData.audio.play();
        // if (i === trebleSequence.length - 1) {
        //   window.cancelAnimationFrame(animateReq);
        // }
      }, tInterval);
      tInterval += audioData.delay;
    }
    for (let i = 0; i < bassSquence.length; i++) {
      let audioData = bassSquence[i];
      setTimeout(function () {
        audioData.audio && audioData.audio.play();
      }, bInterval);
      bInterval += audioData.delay;
    }
    cancelAnimationFrame(animateReq);
    animate();
  }
});
