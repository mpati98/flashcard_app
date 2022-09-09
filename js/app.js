const term = document.querySelector(".term");
const checkBtn = document.querySelector(".check");
const nextBtn = document.querySelector(".next");
const definition = document.querySelector(".definition")

words = {
    Hello: "Xin chào",
    Goodbye: "Tạm biệt",
    'I choose you': "Tớ chọn cậu"
}

data = Object.entries(words)

function getRandomTerm(){
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`
}

checkBtn.addEventListener('click', function(){
    definition.style.display = "block";
})

nextBtn.addEventListener('click', function(){
    definition.style.display = "none";
    getRandomTerm();
})
