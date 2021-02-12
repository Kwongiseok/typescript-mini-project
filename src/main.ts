const imageBtn: HTMLElement | null = document.getElementById("imageBtn");
const videoBtn: HTMLElement | null = document.getElementById("videoBtn");
const noteBtn: HTMLElement | null = document.getElementById("noteBtn");
const taskBtn: HTMLElement | null = document.getElementById("taskBtn");
const modal: HTMLElement | null = document.getElementById("modal-wrapper");
const closeModal: HTMLElement | null = document.getElementById("closeModal");
const card_list: HTMLUListElement = <HTMLUListElement>(
  document.getElementById("card__list")
);
const add: HTMLElement | null = document.getElementById("modal__submit");
const form: HTMLElement | null = document.getElementById("modal__submit");
const body: HTMLInputElement | null = <HTMLInputElement>(
  document.getElementById("body-input")
);
const title: HTMLInputElement | null = <HTMLInputElement>(
  document.getElementById("title-input")
);
let case_type: string = "";
const handleModalImageBtn = (): void => {
  if (modal) {
    body ? (body.innerText = "URL") : null;
    modal.style.display = "flex";
    case_type = "image";
  }
};
const handleModalVideoBtn = (): void => {
  if (modal) {
    body ? (body.innerText = "URL") : null;
    modal.style.display = "flex";
    case_type = "video";
  }
};
const handleModalNote = (): void => {
  if (modal) {
    body ? (body.innerText = "Body") : null;
    modal.style.display = "flex";
    case_type = "note";
  }
};

const handleModalTask = (): void => {
  if (modal) {
    body ? (body.innerText = "Body") : null;
    modal.style.display = "flex";
    case_type = "task";
  }
};
imageBtn?.addEventListener("click", handleModalImageBtn);
videoBtn?.addEventListener("click", handleModalVideoBtn);
noteBtn?.addEventListener("click", handleModalNote);
taskBtn?.addEventListener("click", handleModalTask);
closeModal?.addEventListener("click", () => {
  if (modal) modal.style.display = "none";
});

interface motion {
  title: string;
  body: string;
  make(): void;
}

class image_motion implements motion {
  new_div: HTMLDivElement;
  constructor(
    public title: string,
    public body: string,
    private card_list: HTMLUListElement
  ) {
    this.new_div = document.createElement("div");
    this.new_div.className = "body__card";
  }
  make(): void {
    const new_img: HTMLImageElement = document.createElement("img");
    new_img.src = this.body;
    new_img.className = "card__img";
    const card__body: Element = document.createElement("div");
    card__body.className = "card__body";
    const title: HTMLSpanElement = document.createElement("span");
    title.className = "card__title";
    title.innerText = this.title;
    const delBtn: HTMLButtonElement = document.createElement("button");
    delBtn.className = "card__delete";
    delBtn.innerText = "X";
    delBtn.addEventListener("click", () => {
      this.card_list.removeChild(this.new_div);
    });
    this.new_div.appendChild(new_img);
    this.new_div.appendChild(card__body);
    card__body.appendChild(title);
    card__body.appendChild(delBtn);
    this.card_list.appendChild(this.new_div);
  }
}

class video_motion implements motion {
  new_div: HTMLDivElement;
  constructor(
    public title: string,
    public body: string,
    private card_list: HTMLUListElement
  ) {
    this.new_div = document.createElement("div");
    this.new_div.className = "body__card";
  }
  make(): void {
    const iframe = document.createElement("iframe");
    iframe.width = "1100";
    iframe.height = "315";
    iframe.src = this.body;
    iframe.allowFullscreen;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    const card__body = document.createElement("div");
    card__body.className = "card__body";
    const title = document.createElement("span");
    title.innerText = this.title;
    const delBtn = document.createElement("button");
    delBtn.className = "card__delete";
    delBtn.innerText = "X";
    this.new_div.appendChild(iframe);
    this.new_div.appendChild(card__body);
    card__body.appendChild(title);
    card__body.appendChild(delBtn);
    this.card_list.appendChild(this.new_div);
    delBtn.addEventListener("click", () => {
      this.card_list.removeChild(this.new_div);
    });
  }
}

const handleAdd = (
  case_type: string,
  title: string,
  body: string,
  card_list: HTMLUListElement
) => {
  switch (case_type) {
    case "image":
      const imageMotion = new image_motion(title, body, card_list);
      imageMotion.make();
      break;
    case "video":
      const videoMotion = new video_motion(title, body, card_list);
      videoMotion.make();
      break;
  }
};

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  handleAdd(case_type, title.value, body.value, card_list);
});
