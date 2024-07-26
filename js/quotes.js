const quotes = [
    {
        img: "img_00.png",
        quote: "아무것도 안하지만",
        lastword: "왠지 잘될 것 같은 내 인생",
    },
    {
        img: "img_01.png",
        quote: "나 정도면 귀여운 실수",
        lastword: "더 한 사람도 많으니 기죽지 말자",
    },
    {
        img: "img_02.png",
        quote: "지금까지 버텨온 당신",
        lastword: "짱! 고생 많았어요",
    },
    {
        img: "img_03.png",
        quote: "당신.. 지금 불안한가? 명심하세요 결국 이기는 사람은..",
        lastword: "끝까지 버텨낸 사람이라는 것을...",
    },
    {
        img: "img_04.png",
        quote:  `천문학자가 된다고 했는데.. 되었을까? 사실 그건 중요한게 아닐지도 모르겠다
        바라던 모습이 되어있지 않더라도 포기하지 않고 걸어가는 그 모습도 멋있다고`,
        lastword: "다시 만난다면 꼭 이야기해 줘야지",
    },
    {
        img: "img_05.png",
        quote: `여기서 밤하늘을 올려다보면 진짜 멋있어
넓은 우주 앞에선 내가 가진 고민과 걱정이 사소해지는 느낌이라..`,
        lastword: "마음이 편안해져",
    },
    {
        img: "img_06.png",
        quote: `사랑이란 무엇일까 고민하며 일주일을 보내보았어
서로의 눈높이에 맞춰 구부러진 허리와, 미소, 뒤따라가던 강아지의 신난 엉덩이, 다정하게 사진 찍어주는 연인, 살랑거리는 바람과 나무의 그림자, 눈을 감으면 느껴지는 햇살, 친구들의 웃음소리`,
        lastword: "사랑, 우리 주변에 가득하더라",
    },
    {
        img: "img_07.png",
        quote: "냄새가 나... 냄새가 나!",
        lastword: "봄 냄새!!",
    },
];

const img = document.querySelector("#random-img");
const quote = document.querySelector("#quote span:first-child");
const lastword = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

img.src = `images/${randomQuote.img}`;
quote.innerText = randomQuote.quote;
lastword.innerText = randomQuote.lastword;