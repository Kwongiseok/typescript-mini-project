"use strict";
const imageBtn = document.getElementById("imageBtn");
const videoBtn = document.getElementById("videoBtn");
const noteBtn = document.getElementById("noteBtn");
const taskBtn = document.getElementById("taskBtn");
const modal = document.getElementById("modal-wrapper");
const closeModal = document.getElementById("closeModal");
const card_list = (document.getElementById("card__list"));
const add = document.getElementById("modal__submit");
const form = document.getElementById("modal__submit");
const body = (document.getElementById("body-input"));
const title = (document.getElementById("title-input"));
let case_type = "";
const handleModalImageBtn = () => {
    if (modal) {
        body ? (body.innerText = "URL") : null;
        modal.style.display = "flex";
        case_type = "image";
    }
};
const handleModalVideoBtn = () => {
    if (modal) {
        body ? (body.innerText = "URL") : null;
        modal.style.display = "flex";
        case_type = "video";
    }
};
const handleModalNote = () => {
    if (modal) {
        body ? (body.innerText = "Body") : null;
        modal.style.display = "flex";
        case_type = "note";
    }
};
const handleModalTask = () => {
    if (modal) {
        body ? (body.innerText = "Body") : null;
        modal.style.display = "flex";
        case_type = "task";
    }
};
imageBtn === null || imageBtn === void 0 ? void 0 : imageBtn.addEventListener("click", handleModalImageBtn);
videoBtn === null || videoBtn === void 0 ? void 0 : videoBtn.addEventListener("click", handleModalVideoBtn);
noteBtn === null || noteBtn === void 0 ? void 0 : noteBtn.addEventListener("click", handleModalNote);
taskBtn === null || taskBtn === void 0 ? void 0 : taskBtn.addEventListener("click", handleModalTask);
closeModal === null || closeModal === void 0 ? void 0 : closeModal.addEventListener("click", () => {
    if (modal)
        modal.style.display = "none";
});
class image_motion {
    constructor(title, body, card_list) {
        this.title = title;
        this.body = body;
        this.card_list = card_list;
        this.new_div = document.createElement("div");
        this.new_div.className = "body__card";
    }
    make() {
        const new_img = document.createElement("img");
        new_img.src = this.body;
        new_img.className = "card__img";
        const card__body = document.createElement("div");
        card__body.className = "card__body";
        const title = document.createElement("span");
        title.className = "card__title";
        title.innerText = this.title;
        const delBtn = document.createElement("button");
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
class video_motion {
    constructor(title, body, card_list) {
        this.title = title;
        this.body = body;
        this.card_list = card_list;
        this.new_div = document.createElement("div");
        this.new_div.className = "body__card";
    }
    make() {
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
const handleAdd = (case_type, title, body, card_list) => {
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
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleAdd(case_type, title.value, body.value, card_list);
});
