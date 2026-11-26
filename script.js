
// ==========================================
// 1. SUPABASE STORAGE
// ==========================================

const STORAGE = "https://vikvlpfypktxirssafgm.supabase.co/storage/v1/object/public/portfolio-images/";

const profileImage = STORAGE + "1770251835383.png";
const cvFile = STORAGE + "Mohamed%20Ehab%20saad.pdf";

// ==========================================
// 2. SERVICES
// ==========================================

const services = [
 {
  title:"تنظيف البيانات (Data Cleaning)",
  desc:"تنظيم البيانات، التعامل مع القيم المفقودة والمتكررة، توحيد الصيغ، وتجهيزها للتحليل.",
  price:"يبدأ من 300 جنيه",
  pro:"سعر مخصص حسب حجم وتعقيد البيانات",
  tags:["Excel","Data Quality"]
 },
 {
  title:"تحليل البيانات باستخدام Excel",
  desc:"تحليل وصفي، Pivot Tables، استخراج مؤشرات، وتقديم نتائج تساعد على فهم الأداء.",
  price:"يبدأ من 450 جنيه",
  pro:"تحليل متقدم + تقرير مفصل بسعر مخصص",
  tags:["Excel","Analysis"]
 },
 {
  title:"Dashboard تفاعلية",
  desc:"لوحة مؤشرات مرئية تشمل KPIs ورسومًا وفلاتر حسب طبيعة البيانات.",
  price:"يبدأ من 700 جنيه",
  pro:"Dashboard متقدمة متعددة الصفحات بسعر مخصص",
  tags:["Excel","Power BI"]
 },
 {
  title:"تقرير تحليل بيانات",
  desc:"تقرير منظم يشرح أهم النتائج والاتجاهات والملاحظات والتوصيات.",
  price:"يبدأ من 400 جنيه",
  pro:"تقرير احترافي موسع مع عرض تقديمي بسعر مخصص",
  tags:["Reporting","Insights"]
 },
 {
  title:"تحليل بيانات استبيان",
  desc:"ترميز وتنظيم الإجابات وتحليل النتائج وعرضها بصريًا.",
  price:"يبدأ من 500 جنيه",
  pro:"تحليل إحصائي متقدم بسعر مخصص",
  tags:["Statistics","Survey"]
 }
];

// ==========================================
// 3. PROJECTS
// ==========================================

const projects = [
 {
  title:"تحليل مبيعات متجر تجزئة",
  problem:"صاحب المتجر لا يعرف المنتجات الأعلى مبيعًا ولا الفترات الأقوى ولا توزيع المبيعات.",
  solution:"تنظيف بيانات المبيعات وتحليل الإيرادات والمنتجات والفترات والمناطق.",
  outcome:"لوحة مؤشرات تشمل إجمالي المبيعات، الوحدات، متوسط الطلب، واتجاهات الأداء.",
  tools:["Excel","Sales Analysis","Dashboard"],
  img:STORAGE+"Project_01_Dashboard_Preview.png",
  file:STORAGE+"Project_01_Sales_Data_Analysis.xlsx"
 },
 {
  title:"تنظيف وتجهيز البيانات",
  problem:"وجود بيانات تحتاج إلى تنظيم وتحسين الجودة قبل التحليل.",
  solution:"تنظيف البيانات وتجهيزها ومعالجة مشكلات الجودة.",
  outcome:"بيانات منظمة وجاهزة للتحليل.",
  tools:["Excel","Data Cleaning","Data Quality"],
  img:STORAGE+"Project_02_Data_Quality_Preview.png",
  file:STORAGE+"Project_02_Data_Cleaning_Preparation.xlsx"
 },
 {
  title:"تحليل أداء الأعمال",
  problem:"الحاجة إلى متابعة مؤشرات أداء الأعمال بصورة واضحة.",
  solution:"تحليل بيانات الأداء وتصميم لوحة مؤشرات.",
  outcome:"Dashboard لمتابعة أداء الأعمال.",
  tools:["Excel","Business Analysis","Dashboard"],
  img:STORAGE+"Project_03_Dashboard_Preview.png",
  file:STORAGE+"Project_03_Business_Performance_Dashboard.xlsx"
 }
];

// ==========================================
// 4. TRAINING AND CERTIFICATES
// ==========================================

const trainings = [
 {
  title:"اسم التدريب الأول",
  org:"الجهة المنظمة",
  date:"التاريخ",
  desc:"اكتب هنا ما تعلمته وتطبيقات التدريب."
 },
 {
  title:"اسم التدريب الثاني",
  org:"الجهة المنظمة",
  date:"التاريخ",
  desc:"اكتب هنا وصف التدريب وأبرز المهارات."
 }
];

const certs = [
 {
  title:"اسم الشهادة",
  org:"الجهة المانحة",
  date:"التاريخ",
  desc:"اكتب تفاصيل الشهادة أو رابط التحقق."
 },
 {
  title:"اسم الشهادة",
  org:"الجهة المانحة",
  date:"التاريخ",
  desc:"اكتب التفاصيل هنا."
 }
];

// ==========================================
// 5. GENERAL SETTINGS
// ==========================================

const $ = s => document.querySelector(s);

const app = $("#app");
const register = $("#register");
const welcome = $("#welcome");

let profile = JSON.parse(localStorage.getItem("da_profile") || "null");
let active = "home";

$("#year").textContent = new Date().getFullYear();

// ==========================================
// 6. LOGIN AND REGISTRATION
// ==========================================

function enter() {
 if (profile) {
  welcome.classList.add("hidden");
  register.classList.add("hidden");
  app.classList.remove("hidden");
  show("home");
 } else {
  welcome.classList.remove("hidden");
  register.classList.remove("hidden");
  app.classList.add("hidden");
 }
}

$("#registerForm").addEventListener("submit", e => {
 e.preventDefault();

 profile = Object.fromEntries(new FormData(e.target));

 localStorage.setItem("da_profile", JSON.stringify(profile));

 enter();
});

$("#logoutBtn").onclick = () => {
 localStorage.removeItem("da_profile");

 profile = null;

 enter();

 window.scrollTo({
  top:0,
  behavior:"smooth"
 });
};

// ==========================================
// 7. NAVIGATION
// ==========================================

$("#menuBtn").onclick = () => {
 $("#nav").classList.toggle("show");
};

document.body.addEventListener("click", e => {
 const b = e.target.closest("[data-view]");

 if (b) {
  show(b.dataset.view);
  $("#nav").classList.remove("show");
 }
});

function show(view) {
 active = view;

 $("#contentView").innerHTML = "";

 $("#homeView").classList.toggle("hidden", view !== "home");

 const titles = {
  home:[
   "اختار القسم اللي يهمك",
   "كل جزء من خدمات تحليل البيانات في مكانه."
  ],
  services:[
   "الخدمات",
   "اختر الخدمة المناسبة، أو اطلب نسخة Pro بنطاق مخصص."
  ],
  projects:[
   "المشاريع",
   "نماذج توضح المشكلة، طريقة التحليل، وما الذي يمكن أن تقدمه النتائج."
  ],
  about:[
   "نبذة عني",
   "تعرف على خلفيتي وأدواتي وطريقة عملي."
  ],
  training:[
   "التدريبات",
   "ورش العمل والتدريبات المرتبطة بتحليل البيانات."
  ],
  certificates:[
   "الشهادات",
   "الشهادات والدورات التي أكملتها."
  ],
  orders:[
   "طلباتي",
   "طلباتك المسجلة ومعلومات التواصل والتسليم."
  ]
 };

 $("#pageTitle").textContent = titles[view]?.[0] || "";
 $("#pageSubtitle").textContent = titles[view]?.[1] || "";

 if (view === "services") renderServices();
 if (view === "projects") renderProjects();
 if (view === "about") renderAbout();
 if (view === "training") renderList(trainings);
 if (view === "certificates") renderList(certs);
 if (view === "orders") renderOrders();

 window.scrollTo({
  top:$("#app").offsetTop - 80,
  behavior:"smooth"
 });
}

// ==========================================
// 8. SERVICES DISPLAY
// ==========================================

function renderServices() {
 let html = services.map((s,i) => `
  <article class="item-card">

   <span class="pill">${s.tags.join(" • ")}</span>

   <h3>${s.title}</h3>

   <p>${s.desc}</p>

   <div class="price">${s.price}</div>

   <p>
    <span class="pill pro">Pro</span>
    ${s.pro}
   </p>

   <button onclick="requestService(${i},false)">
    اطلب الخدمة
   </button>

   <button onclick="requestService(${i},true)">
    طلب Pro
   </button>

  </article>
 `).join("");

 $("#contentView").innerHTML = `
  <div class="content-grid">${html}</div>

  <div class="notice">
   الأسعار استرشادية وقابلة للتعديل بعد مراجعة حجم البيانات ونطاق العمل.
   سيتم تأكيد السعر والمدة قبل البدء.
  </div>
 `;
}

// ==========================================
// 9. SERVICE REQUEST
// ==========================================

function requestService(i, pro) {
 let s = services[i];

 let item = {
  service:s.title + (pro ? " — Pro" : ""),
  price:pro ? s.pro : s.price
 };

 $("#contentView").innerHTML = `
  <div class="item-card wide">

   <h3>طلب ${item.service}</h3>

   <p>${s.desc}</p>

   <form class="order-form" id="orderForm">

    <label>
     وصف المطلوب
     <textarea
      name="details"
      placeholder="اكتب تفاصيل البيانات والمطلوب والموعد المتوقع..."
      required
     ></textarea>
    </label>

    <label>
     طريقة التواصل
     <select name="contact">
      <option>WhatsApp</option>
      <option>البريد الإلكتروني</option>
     </select>
    </label>

    <button class="primary">
     تسجيل الطلب
    </button>

   </form>

  </div>
 `;

 $("#orderForm").onsubmit = e => {
  e.preventDefault();

  let orders = JSON.parse(localStorage.getItem("da_orders") || "[]");

  let form = new FormData(e.target);

  orders.push({
   id:Date.now(),
   service:item.service,
   price:item.price,
   details:form.get("details"),
   contact:form.get("contact"),
   status:"بانتظار مراجعة الطلب",
   date:new Date().toLocaleDateString("ar-EG")
  });

  localStorage.setItem("da_orders", JSON.stringify(orders));

  show("orders");
 };
}

// ==========================================
// 10. PROJECTS DISPLAY WITH SUPABASE IMAGES
// ==========================================

function renderProjects() {

 let html = projects.map(p => `
  <article class="item-card">

   <img
    src="${p.img}"
    alt="${p.title}"
    loading="lazy"
    style="width:100%;height:220px;object-fit:cover;border-radius:12px;margin-bottom:15px;"
    onerror="this.style.display='none'"
   >

   <span class="pill">
    ${p.tools.join(" • ")}
   </span>

   <h3>${p.title}</h3>

   <p>
    <b>المشكلة:</b>
    ${p.problem}
   </p>

   <p>
    <b>منهج التحليل:</b>
    ${p.solution}
   </p>

   <p>
    <b>النتيجة / التقرير:</b>
    ${p.outcome}
   </p>

   <a
    href="${p.file}"
    target="_blank"
    rel="noopener"
    download
    style="display:inline-block;margin-top:12px;"
   >
    تحميل ملف المشروع Excel
   </a>

  </article>
 `).join("");

 $("#contentView").innerHTML = `
  <div class="content-grid">
   ${html}
  </div>
 `;
}

// ==========================================
// 11. ABOUT ME WITH PROFILE IMAGE AND PDF
// ==========================================

function renderAbout() {

 $("#contentView").innerHTML = `
  <div class="about-layout">

   <div class="profile-placeholder">

    <img
     src="${profileImage}"
     alt="Mohamed Ehab Saad"
     style="width:100%;height:100%;min-height:280px;object-fit:cover;border-radius:15px;"
    >

   </div>

   <article class="item-card">

    <h3>محمد إيهاب سعد سالم | Data Analyst</h3>

    <p>
     أساعد في تحويل البيانات الخام إلى معلومات واضحة
     تدعم اتخاذ القرار، من خلال تنظيف البيانات وتحليلها
     وتصميم لوحات مؤشرات وتقارير.
    </p>

    <p>
     أعمل باستخدام أدوات مثل Microsoft Excel،
     وأتوسع في Power BI وSQL.
     خلفيتي الأكاديمية في الرياضيات العامة بكلية التربية
     تمنحني أساسًا في الرياضيات والإحصاء والاحتمالات.
    </p>

    <h4>الأدوات والمهارات</h4>

    <span class="pill">Excel</span>
    <span class="pill">Power BI</span>
    <span class="pill">SQL</span>
    <span class="pill">Statistics</span>
    <span class="pill">Data Cleaning</span>
    <span class="pill">Data Visualization</span>

    <div style="margin-top:20px;">

     <a
      href="${cvFile}"
      target="_blank"
      rel="noopener"
     >
      عرض السيرة الذاتية PDF
     </a>

    </div>

   </article>

  </div>
 `;
}

// ==========================================
// 12. TRAINING AND CERTIFICATES DISPLAY
// ==========================================

function renderList(items) {

 $("#contentView").innerHTML = `
  <div class="content-grid">

   ${items.map(x => `
    <article class="item-card">

     <span class="pill">${x.date}</span>

     <h3>${x.title}</h3>

     <p>${x.org}</p>

     <p>${x.desc}</p>

     <p class="notice">
      أضف هنا رابط، صورة، أو ملف إثبات عند توافره.
     </p>

    </article>
   `).join("")}

  </div>
 `;
}

// ==========================================
// 13. ORDERS DISPLAY
// ==========================================

function renderOrders() {

 let orders = JSON.parse(localStorage.getItem("da_orders") || "[]");

 let cards = orders.map(o => `
  <div class="order">

   <b>${o.service}</b>

   <p>${o.details}</p>

   <small>
    ${o.date} • ${o.contact}
   </small>

   <p class="status">
    ${o.status}
   </p>

  </div>
 `).join("");

 $("#contentView").innerHTML = `
  <div class="item-card">

   <h3>أهلًا ${profile?.name || "بك"}</h3>

   <p>
    بيانات التواصل:
    ${profile?.phone || ""}
    •
    ${profile?.email || ""}
   </p>

   ${cards || `
    <div class="empty">
     لا توجد طلبات مسجلة حتى الآن.
     يمكنك استعراض الخدمات وتسجيل طلب.
    </div>
   `}

   <div class="notice">
    هذه مساحة تجريبية تعمل على نفس الجهاز والمتصفح.
    لتسليم ملفات خاصة لكل عميل وتسجيل دخول حقيقي
    يلزم Backend وقاعدة بيانات وتخزين آمن.
   </div>

   <button onclick="show('services')">
    استعراض الخدمات
   </button>

  </div>
 `;
}

// ==========================================
// 14. START WEBSITE
// ==========================================

enter();
