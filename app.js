const img = document.querySelector("img");
const text = document.querySelector("p");
const personName = document.querySelector("h2");
const job = document.querySelector("span");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const info = [
  {
    photo: "./images/image-tanya.jpg",
    name: "Tanya Sinclair",
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now.
          I couldn’t recommend this course enough. I’m now in the job of my dreams and so
          excited about the future. ”`,
    job: "UX Designer"
  },
  {
    photo: "./images/image-john.jpg",
    name: "John Tarkpor",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course.
          The depth the instructors go into is incredible. I now feel so confident about
          starting up as a professional developer. ”`,
    job: "Junior Front-end developer"
  }
];

function init() {
  info.forEach((person, index) => {
    if (index === 0) {
      img.src = person.photo;
      text.textContent = person.text;
      personName.textContent = person.name;
      job.textContent = person.job;
      console.log(img.src, text.textContent, personName.textContent, job.textContent)
    }
  })
}

init();



nextBtn.addEventListener("click", () => {

  display();
});

prevBtn.addEventListener("click", () => {
  display();
});

function display() {
  const next = info.filter(el => {
    return el.name !== personName.textContent;
  });
  const [{ photo: photoNext, name: nameNext, text: textNext, job: jobNext }] = next;
  img.src = photoNext;
  text.textContent = textNext;
  personName.textContent = nameNext;
  job.textContent = jobNext;
}