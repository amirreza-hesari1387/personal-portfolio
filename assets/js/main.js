const translations = {
  en: {
    navAbout:"About",navSkills:"Skills",navProjects:"Projects",navContact:"Contact",
    availability:"OPEN TO LEARNING & OPPORTUNITIES",hello:"HELLO, I'M",role:"Web Designer & Developer",
    intro:"I build clean, responsive websites and enjoy turning ideas into useful digital experiences. Currently learning, experimenting, and growing one project at a time.",
    seeWork:"Explore my work",getInTouch:"Get in touch",based:"Based in Iran",currentlyBuilding:"Currently building my next idea",
    heroCaption:"A little code. A lot of curiosity.",scroll:"SCROLL TO EXPLORE",aboutLabel:"A LITTLE ABOUT ME",
    aboutTitle:'Curious mind.<br><span class="muted-heading">Practical builder.</span>',
    aboutText:"I'm Amirreza, a computer student interested in web development and digital products. I have hands-on experience working with WordPress and I'm strengthening my frontend foundations with HTML, CSS, and JavaScript.",
    aboutText2:"I like understanding how things work, improving details, and building projects that help me learn by doing.",githubProfile:"Visit my GitHub profile",
    skillsLabel:"TOOLS & TECHNOLOGIES",skillsTitle:'What I work with<span class="accent">.</span>',skillsNote:"A growing toolkit — learning never stops.",
    wordpressDesc:"Website building & content management",htmlDesc:"Semantic structure & accessible markup",cssDesc:"Responsive layouts & visual styling",jsDesc:"Building interactive web experiences",gitDesc:"Version control & project collaboration",
    handsOn:"Hands-on experience",learning:"Learning & practicing",beginner:"Beginner",skillDisclaimer:"Skill indicators are personal estimates, not formal certifications.",
    projectsLabel:"SELECTED WORK",projectsTitle:'Things I\'ve been<br><span class="muted-heading">working on.</span>',projectsCount:"PROJECTS",
    wordpressProject:"WORDPRESS PROJECT",petDesc:"A pet products e-commerce website built with WordPress and WooCommerce.",petPreview:"Everything for your pet",
    hapDesc:"An online pet store built with WordPress and WooCommerce.",hapPreview:"A happy place for pets",fruitDesc:"An online store for fruit products, built with WordPress and WooCommerce.",fruitPreview:"Fruit products, made easy",
    contactLabel:"LET'S CONNECT",contactKicker:"HAVE A PROJECT IN MIND?",contactTitle:'Let\'s make something<br><span>meaningful.</span>',
    contactText:"I'm always happy to connect, learn, and talk about ideas.",sayHello:"Say hello on GitHub",
    footerText:"Designed & built with curiosity.",backTop:"BACK TO TOP"
  },
  fa: {
    navAbout:"درباره من",navSkills:"مهارت‌ها",navProjects:"پروژه‌ها",navContact:"ارتباط",
    availability:"آماده یادگیری و فرصت‌های جدید",hello:"سلام، من",role:"طراح و توسعه‌دهنده وب",
    intro:"من وب‌سایت‌های تمیز و واکنش‌گرا می‌سازم و از تبدیل ایده‌ها به تجربه‌های دیجیتال کاربردی لذت می‌برم. این روزها در حال یادگیری، تجربه‌کردن و پیشرفت با هر پروژه هستم.",
    seeWork:"دیدن پروژه‌ها",getInTouch:"ارتباط با من",based:"ساکن ایران",currentlyBuilding:"در حال ساخت ایده بعدی",
    heroCaption:"کمی کد، کلی کنجکاوی.",scroll:"برای کشف بیشتر اسکرول کنید",aboutLabel:"کمی درباره من",
    aboutTitle:'ذهنی کنجکاو.<br><span class="muted-heading">سازنده‌ای عمل‌گرا.</span>',
    aboutText:"من امیررضا هستم؛ دانشجوی کامپیوتر و علاقه‌مند به توسعه وب و محصولات دیجیتال. تجربه عملی کار با وردپرس دارم و در حال تقویت پایه‌های فرانت‌اند با HTML، CSS و JavaScript هستم.",
    aboutText2:"دوست دارم سازوکار چیزها را بفهمم، جزئیات را بهتر کنم و با ساخت پروژه، یادگیری را به تجربه واقعی تبدیل کنم.",githubProfile:"مشاهده پروفایل گیت‌هاب",
    skillsLabel:"ابزارها و تکنولوژی‌ها",skillsTitle:'با چه چیزهایی کار می‌کنم<span class="accent">؟</span>',skillsNote:"جعبه‌ابزارم در حال رشد است؛ یادگیری متوقف نمی‌شود.",
    wordpressDesc:"ساخت وب‌سایت و مدیریت محتوا",htmlDesc:"ساختار معنایی و کدنویسی استاندارد",cssDesc:"چیدمان واکنش‌گرا و استایل‌دهی",jsDesc:"ساخت تجربه‌های تعاملی وب",gitDesc:"کنترل نسخه و مدیریت پروژه",
    handsOn:"تجربه عملی",learning:"در حال یادگیری و تمرین",beginner:"مقدماتی",skillDisclaimer:"درصدها تخمینی و بر اساس ارزیابی شخصی هستند، نه مدرک رسمی.",
    projectsLabel:"پروژه‌های منتخب",projectsTitle:'پروژه‌هایی که<br><span class="muted-heading">روی آن‌ها کار کرده‌ام.</span>',projectsCount:"پروژه",
    wordpressProject:"پروژه وردپرسی",petDesc:"فروشگاه اینترنتی محصولات حیوانات خانگی با وردپرس و ووکامرس.",petPreview:"همه‌چیز برای پت شما",
    hapDesc:"فروشگاه اینترنتی محصولات حیوانات خانگی با وردپرس و ووکامرس.",hapPreview:"دنیایی شاد برای پت‌ها",fruitDesc:"فروشگاه اینترنتی محصولات میوه‌ای با وردپرس و ووکامرس.",fruitPreview:"محصولات میوه‌ای، ساده و آسان",
    contactLabel:"در ارتباط باشیم",contactKicker:"ایده یا پروژه‌ای در ذهن دارید؟",contactTitle:'بیایید چیزی<br><span>ارزشمند بسازیم.</span>',
    contactText:"از آشنایی، یادگیری و گفت‌وگو درباره ایده‌های جدید استقبال می‌کنم.",sayHello:"ارتباط از طریق گیت‌هاب",
    footerText:"با کنجکاوی طراحی و ساخته شده است.",backTop:"بازگشت به بالا"
  }
};

const languageButton = document.querySelector(".language-toggle");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });
  languageButton.textContent = language === "en" ? "فا" : "EN";
  languageButton.setAttribute("aria-label", language === "en" ? "تغییر زبان به فارسی" : "Switch language to English");
  try { localStorage.setItem("portfolio-language", language); } catch {}
}

let initialLanguage = "en";
try {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (savedLanguage === "fa" || savedLanguage === "en") initialLanguage = savedLanguage;
} catch {}
setLanguage(initialLanguage);

languageButton.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "en" ? "fa" : "en");
});

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
