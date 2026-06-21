
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin, MessageCircle,
  FileText, GraduationCap, Award, Search, Filter, CheckCircle,
  Clock, Loader, Package, Truck, Star, ChevronRight, ChevronLeft,
  Users, Globe, BookOpen, Shield, ArrowLeft, Upload, Building,
  Target, Heart, Linkedin, Twitter, Facebook, Instagram,
  ArrowUpRight, Calendar, Briefcase, Check, AlertCircle, Info,
  BadgeCheck, ClipboardList, Send, ListChecks, HelpCircle, ChevronUp
} from "lucide-react";

// ─── Image assets ────────────────────────────────────────────────────────────
const IMGS = {
  hero: "https://images.unsplash.com/photo-1758270704524-596810e891b5?w=1400&h=800&fit=crop&auto=format",
  campus1: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&h=500&fit=crop&auto=format",
  campus2: "https://images.unsplash.com/photo-1741637335289-c99652d3155f?w=800&h=500&fit=crop&auto=format",
  campus3: "https://images.unsplash.com/photo-1622604647545-0cada2f34470?w=800&h=500&fit=crop&auto=format",
  meeting: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop&auto=format",
  consult: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop&auto=format",
  consult2: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=800&h=500&fit=crop&auto=format",
  certificate: "https://images.unsplash.com/photo-1638636241638-aef5120c5153?w=800&h=500&fit=crop&auto=format",
  documents: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&h=500&fit=crop&auto=format",
  graduation: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=800&h=500&fit=crop&auto=format",
  graduationGroup: "https://images.unsplash.com/photo-1633734973050-d6499a977c17?w=800&h=500&fit=crop&auto=format",
  office: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800&h=500&fit=crop&auto=format",
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
const navLinks = [
 
 
  { label: " Hoem", href: "/" },
   { label: "المنح الدراسية", href: "/scholarships" },
  { label: " الجمعات", href: "/admissions" },
 

   {
    label: "الخدمات", href: "#", children: [
      { label: "شهادة جامعية", href: "/cert-university" },
      { label: "شهادة سودانية", href: "/cert-sudanese" },
      { label: "شهادة أساس ومتوسط", href: "/cert-basic" },
    ]
  },
    { label: "تتبع الطلب", href: "/tracking" },
  { label: "من نحن", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b border-border shadow-sm`} dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-15">
          {/* Logo */}
       <Link to="/" className="flex flex-col items-center">
  <div className="text-[43px] font-bold leading-[0.8] text-[#8069A4]">
    U
  </div>

  <div className="text-sm font-semibold leading-none text-[#8069A4] -mt-1">
    UniGuide
  </div>
</Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-secondary transition-colors"
                  >
                    {link.label}
                    <ChevronDown size={14} />
                  </button>
                  {dropOpen && (
                    <div
                      onMouseEnter={() => setDropOpen(true)}
                      onMouseLeave={() => setDropOpen(false)}
                      className="absolute top-full right-0 mt-1 bg-white border border-border rounded-xl shadow-lg py-2 min-w-44 z-50"
                    >
                      {link.children.map((c) => (
                        <Link
                          key={c.href}
                          to={c.href}
                          onClick={() => setDropOpen(false)}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href!}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === link.href ? "bg-secondary text-primary" : "text-foreground hover:text-primary hover:bg-secondary"}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              to="/cert-university"
              className="hidden md:flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              قدم طلبك
              <ArrowLeft size={14} />
            </Link>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-secondary">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
    {/* Mobile menu */}
{open && (
  <div className="md:hidden bg-white border-t border-border pb-4">
    <div className="flex flex-col items-center text-center">

      {navLinks.map((link) =>
        link.children ? (
          <div key={link.label} className="w-full">

            <button
              onClick={() =>
                setMobileServicesOpen(!mobileServicesOpen)
              }
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-foreground"
            >
              {link.label}

              <ChevronDown
                size={16}
                className={`transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="bg-secondary/20">
                {link.children.map((c) => (
                  <Link
                    key={c.href}
                    to={c.href}
                    onClick={() => {
                      setOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="block py-3 text-sm text-center text-foreground hover:text-primary"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={link.href}
            to={link.href!}
            onClick={() => setOpen(false)}
            className="block w-full py-3 text-center text-sm font-medium text-foreground hover:text-primary"
          >
            {link.label}
          </Link>
        )
      )}

      <div className="w-full px-4 pt-3">
        <Link
          to="/cert-university"
          onClick={() => setOpen(false)}
          className="block bg-primary text-white text-sm font-semibold px-4 py-3 rounded-lg text-center"
        >
          قدم طلبك الآن
        </Link>
      </div>

    </div>
  </div>
)}
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0F2547] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
             
  {/* الاسم */}
  <div className="text-[27px] font-semibold leading-tight text-[#8069A4]">
    UniGuide
  </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              نساعد الطلاب السودانيين في الحصول على خدماتهم التعليمية بكفاءة واحترافية.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">الخدمات</h4>
            <ul className="space-y-2">
              {["شهادة جامعية", "الشهادة السودانية", "شهادة الأساس والمتوسط", "القبولات الجامعية", "المنح الدراسية"].map((s) => (
                <li key={s}><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">روابط سريعة</h4>
            <ul className="space-y-2">
              {["الرئيسية", "من نحن", "تتبع الطلب", "تواصل معنا", "الأسئلة الشائعة"].map((s) => (
                <li key={s}><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

        
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">© 2026 UniGuide للخدمات . جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 text-sm hover:text-white">سياسة الخصوصية</a>
            <a href="#" className="text-white/40 text-sm hover:text-white">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Section header helper ────────────────────────────────────────────────────
function SectionHeader({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      {label && (
        <span className="inline-block bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3" style={{ fontFamily: "Cairo, sans-serif" }}>
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}

// ─── Form components ─────────────────────────────────────────────────────────
function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function Input({ placeholder, type = "text" }: { placeholder: string; type?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
    />
  );
}

function Select({ options, placeholder }: { options: string[]; placeholder: string }) {
  return (
    <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none">
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function FileUpload({ label }: { label: string }) {
  return (
    <div className="border-2 border-dashed border-border rounded-lg p-5 text-center hover:border-primary/40 transition-colors cursor-pointer bg-input-background">
      <Upload size={20} className="text-muted-foreground mx-auto mb-2" />
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-xs text-muted-foreground/60 mt-1">PDF, JPG, PNG — بحد أقصى 5MB</p>
    </div>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function HomePage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const stats = [
    { value: "+5000", label: "طالب " },
    { value: "+8", label: " خبرة" },
    { value: "+20", label: "جامعة " },
   
  ];

  const services = [
    { icon: FileText, title: "الشهادة الجامعية", desc: "استخراج شهاداتك الجامعية الرسمية بكافة اللغات    .", href: "/cert-university", color: "bg-blue-50 text-blue-600" },
    { icon: Award, title: "الشهادة السودانية", desc: "نساعدك في الحصول على شهادة الثانوية    .", href: "/cert-sudanese", color: "bg-green-50 text-green-600" },
    { icon: BookOpen, title: "شهادة الأساس والمتوسط", desc: "استخراج وثائق المرحلتين الأساسية   .", href: "/cert-basic", color: "bg-purple-50 text-purple-600" },
    { icon: Building, title: "القبولات الجامعية", desc: "نرشدك ونساعدك في الحصول على قبول    .", href: "/admissions", color: "bg-orange-50 text-orange-600" },
    { icon: GraduationCap, title: "المنح الدراسية", desc: "ابحث عن المنح الدراسية المتاحة وقدم    .", href: "/scholarships", color: "bg-teal-50 text-teal-600" },
    { icon: Search, title: "تتبع الطلبات", desc: "تابع سير طلبك لحظة بلحظة    .", href: "/tracking", color: "bg-indigo-50 text-indigo-600" },
  ];

  const reasons = [
    { icon: Shield, title: "موثوقية عالية", desc: "نتعامل مع مؤسسات رسمية ووثائقك في أمان تام." },
    { icon: Clock, title: "سرعة الإنجاز", desc: "نضمن تسليم طلباتك في الوقت المحدد دون تأخير." },
    { icon: Users, title: "فريق متخصص", desc: "فريقنا مؤهل وذو خبرة واسعة في الشؤون الأكاديمية." },
    { icon: Globe, title: "تغطية واسعة", desc: "نتعامل مع جامعات ومؤسسات في أكثر من 30 دولة." },
    { icon: MessageCircle, title: "دعم مستمر", desc: "نحن معك على مدار الساعة للرد على استفساراتك." },
    { icon: CheckCircle, title: "ضمان النتائج", desc: "نضمن اكتمال طلبك أو نعيد لك المبلغ كاملاً." },
  ];

  const testimonials = [
    { name: "أحمد محمد علي", city: "الخرطوم", text: "خدمة ممتازة وسرعة في الإنجاز. تمكنت من الحصول على شهادتي الجامعية في غضون أسبوع واحد فقط.", rating: 5 },
    { name: "فاطمة إبراهيم", city: "أم درمان", text: "فريق محترف ومتعاون. ساعدوني في الحصول على قبول في جامعة تركية ومنحة دراسية كاملة.", rating: 5 },
    { name: "عمر عبد الله", city: "بورتسودان", text: "تعاملت معهم في استخراج شهادة الثانوية وكانت التجربة رائعة. التواصل سهل والخدمة سريعة.", rating: 5 },
    { name: "سارة يوسف", city: "مدني", text: "أنصح كل طالب سوداني يريد الدراسة في الخارج بالتواصل مع هذه الشركة. خبرتهم لا تُضاهى.", rating: 5 },
  ];

  const faqs = [
    { q: "كم يستغرق استخراج الشهادة الجامعية؟", a: "يستغرق استخراج الشهادة الجامعية من 3 إلى 7 أيام عمل حسب الجامعة ونوع الطلب." },
    { q: "هل تعملون مع جميع الجامعات السودانية؟", a: "نعم، نتعامل مع جميع الجامعات السودانية الحكومية والخاصة بالإضافة إلى مراكز التعليم العالي." },
    { q: "ما هي المستندات المطلوبة لاستخراج الشهادة السودانية؟", a: "تحتاج إلى: جواز السفر، صورة شخصية حديثة، رقم الجلوس، وسنة التخرج." },
    { q: "كيف يمكنني متابعة طلبي؟", a: "بعد تقديم طلبك ستحصل على رقم متابعة تستطيع من خلاله تتبع سير طلبك عبر صفحة تتبع الطلبات." },
    { q: "هل تقدمون خدمات المنح الدراسية الكاملة؟", a: "نعم، نقدم خدمات البحث عن المنح، مساعدة التقديم، وإعداد الأوراق المطلوبة بشكل احترافي." },
  ];

  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="relative bg-[#0F2547] overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img src={IMGS.hero} alt="طلاب في قاعة دراسية" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-accent/20 text-white text-sm font-semibold px-3 py-1 rounded-full mb-6">
              خدمات تعليمية موثوقة  
            </span>
            <h1 className="text-[20px] md:text-5xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: "Cairo, sans-serif" }}>
             كل بداية نجاح طالب دليل موثوق    
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              نساعدك في استخراج الشهادات الأكاديمية والقبولات الجامعية والمنح الدراسية بخبرة واحترافية.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/cert-university" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-2 rounded-[12px] hover:bg-white/90 transition-colors text-sm">
                قدم  الآن
                <ArrowLeft size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-[8px] hover:bg-white/20 transition-colors border border-white/20 text-sm">
                تواصل معنا
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img src={IMGS.campus2} alt="حرم جامعي" className="rounded-2xl shadow-2xl w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 grid grid-cols-3 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-4">

              <div className="text-[29px] font-extrabold text-primary mb-1" style={{ fontFamily: "Cairo, sans-serif" }}>{s.value}</div>
                                          <div className=" text-[21px] text-muted-foreground">{s.label}</div>

            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader label="خدماتنا" title="دليلك في مكان واحد" subtitle="نقدم مجموعة متكاملة من الخدمات التعليمية لمساعدتك في تحقيق أهدافك الأكاديمية" />
         <div className="grid grid-cols-2 gap-3">
  {services.map((s) => (
    <Link
      to={s.href}
      key={s.title}
      className="group bg-card rounded-[2px] p-2 border border-border hover:shadow-xl hover:border-primary/30 transition-all flex flex-col items-center text-center"
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${s.color}`}
      >
        <s.icon size={22} />
      </div>

      {/* Title */}
      <h3
        className="font-bold text-foreground text-base mb-2"
        style={{ fontFamily: "Cairo, sans-serif" }}
      >
        {s.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {s.desc}
      </p>

      {/* Link */}
      <span className="mt-auto inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
        تعرف أكثر <ArrowLeft size={14} />
      </span>
    </Link>
  ))}
</div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">لماذا نحن</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "Cairo, sans-serif" }}>
                نقدم لك التميز والموثوقية
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                منذ تأسيسنا عام 2012، حرصنا على تقديم خدمات تعليمية على أعلى مستوى من الاحترافية. ثقة الآلاف من الطلاب السودانيين خير دليل على جودتنا.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((r) => (
                  <div key={r.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <r.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm mb-0.5">{r.title}</div>
                      <div className="text-xs text-muted-foreground">{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={IMGS.consult} alt="استشارة تعليمية" className="rounded-2xl w-full h-52 object-cover shadow-md" />
              <img src={IMGS.campus1} alt="حرم جامعي" className="rounded-2xl w-full h-52 object-cover shadow-md mt-6" />
              <img src={IMGS.certificate} alt="شهادة" className="rounded-2xl w-full h-40 object-cover shadow-md" />
              <img src={IMGS.meeting} alt="اجتماع" className="rounded-2xl w-full h-40 object-cover shadow-md mt-6" />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-12 px-4">
  
  {/* Title */}
  <h2
    className="text-2xl font-bold text-center mb-6"
    style={{ fontFamily: "Cairo, sans-serif" }}
  >
    موقعنا على الخريطة
  </h2>

  {/* Map Card */}
  <div className="max-w-5xl mx-auto rounded-[10px] overflow-hidden shadow-lg border border-border">
    
    <iframe
      className="w-full h-[300px]"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps?q=Dokki,Cairo,Egypt&output=embed"
    ></iframe>

  </div>
</div>

      {/* Testimonials */}
      
      <section className="py-10 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    
    <SectionHeader label="آراء الطلاب" title="ماذا يقول طلابنا عنا" />

    {/* Slider Container */}
   <div className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
  
  {testimonials.map((t, i) => (
    <div
      key={i}
      className="w-[280px] sm:w-[320px] lg:w-[350px] flex-shrink-0 snap-start bg-card rounded-2xl p-6 border border-border shadow-sm"
    >
      
      {/* Stars */}
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
        "{t.text}"
      </p>

      {/* User */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-primary">
            {t.name[0]}
          </span>
        </div>

        <div>
          <div className="text-sm font-semibold text-foreground">
            {t.name}
          </div>
          <div className="text-xs text-muted-foreground">
            {t.city}
          </div>
        </div>
      </div>

    </div>
  ))}
</div>
  </div>
</section>

     

      {/* CTA band */}
      <section
  className="relative py-16 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://i.pinimg.com/736x/2f/94/7b/2f947bdffd8f9f954874f983ddfeabfa.jpg')",
  }}
>
  
  {/* Overlay عشان الكلام يبقى واضح */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
    
    <h2
      className="text-3xl font-bold text-white mb-3"
      style={{ fontFamily: "Cairo, sans-serif" }}
    >
      ابدأ رحلتك التعليمية اليوم
    </h2>

    <p className="text-white/80 mb-8">
      تواصل معنا الآن وسيقوم فريقنا المتخصص بمساعدتك في كل خطوة.
    </p>

    <div className="flex flex-wrap justify-center gap-3">
      
      <Link
        to="/cert-university"
        className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors text-sm"
      >
        قدم طلبك الآن <ArrowLeft size={16} />
      </Link>

      <a
        href="https://wa.me/249123456789"
        className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors text-sm"
      >
        <MessageCircle size={16} />
        واتساب
      </a>

    </div>
  </div>
</section>

      {/* Contact mini */}
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Phone, label: "اتصل بنا", value: "+249 12 345 6789", color: "text-primary" },
              { icon: MessageCircle, label: "واتساب", value: "+249 91 234 5678", color: "text-accent" },
              { icon: Mail, label: "البريد الإلكتروني", value: "info@noor-edu.sd", color: "text-primary" },
            ].map((c) => (
              <div key={c.label} className="bg-card rounded-2xl p-6 border border-border flex items-center gap-4">
                <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <c.icon size={20} className={c.color} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">{c.label}</div>
                  <div className="font-semibold text-foreground text-sm" dir="ltr">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* FAQ */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader label="الأسئلة الشائعة" title="الأسئلة لأكثر شيوعاً" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-right hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                  <ChevronDown size={16} className={`text-muted-foreground transition-transform shrink-0 ms-3 ${faqOpen === i ? "rotate-180" : ""}`} />
                </button>
                {faqOpen === i && (
                  <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── CERTIFICATE FORM PAGE wrapper ───────────────────────────────────────────
function CertFormPage({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <div className="bg-white border-b border-border py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">تقديم طلب</span>
          <h1 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "Cairo, sans-serif" }}>{title}</h1>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-card rounded-2xl border border-border shadow-sm p-8">
          {children}
          <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <Shield size={14} className="text-accent" />
              بياناتك محمية وآمنة بالكامل
            </p>
            <button className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm flex items-center gap-2">
              إرسال الطلب
              <ArrowLeft size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── UNIVERSITY CERTIFICATE PAGE ─────────────────────────────────────────────
function UniversityCertPage() {
  return (
    <CertFormPage
      title="طلب شهادة جامعية"
      subtitle="يرجى تعبئة جميع الحقول المطلوبة بدقة لضمان صحة الطلب"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField label="الاسم الرباعي" required>
          <Input placeholder="مثال: أحمد محمد علي إبراهيم" />
        </FormField>
        <FormField label="اسم الجامعة" required>
          <Select placeholder="اختر الجامعة" options={["جامعة الخرطوم", "جامعة أم درمان الإسلامية", "جامعة السودان للعلوم والتكنولوجيا", "جامعة النيلين", "جامعة الجزيرة", "جامعة كسلا", "أخرى"]} />
        </FormField>
        <FormField label="التخصص" required>
          <Input placeholder="مثال: الهندسة المدنية" />
        </FormField>
        <FormField label="الرقم الجامعي" required>
          <Input placeholder="مثال: 20191234" />
        </FormField>
        <FormField label="سنة الدخول" required>
          <Select placeholder="اختر السنة" options={Array.from({ length: 20 }, (_, i) => String(2024 - i))} />
        </FormField>
        <FormField label="سنة التخرج" required>
          <Select placeholder="اختر السنة" options={Array.from({ length: 20 }, (_, i) => String(2024 - i))} />
        </FormField>
        <FormField label="لغة الاستخراج" required>
          <Select placeholder="اختر اللغة" options={["العربية", "الإنجليزية", "كلاهما"]} />
        </FormField>
        <FormField label="نوع الخدمة" required>
          <Select placeholder="اختر الخدمة" options={["استخراج شهادة", "توثيق وتصديق", "ترجمة رسمية", "جميع الخدمات"]} />
        </FormField>
        <FormField label="صورة شخصية" required>
          <FileUpload label="ارفع صورة شخصية حديثة (خلفية بيضاء)" />
        </FormField>
        <FormField label="صورة جواز السفر" required>
          <FileUpload label="ارفع صورة من جواز السفر (الصفحة الرئيسية)" />
        </FormField>
      </div>
      <FormField label="ملاحظات إضافية">
        <textarea
          rows={3}
          placeholder="أي معلومات إضافية تود إضافتها..."
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none mt-1.5"
        />
      </FormField>
    </CertFormPage>
  );
}

// ─── SUDANESE CERTIFICATE PAGE ────────────────────────────────────────────────
function SudaneseCertPage() {
  return (
    <CertFormPage
      title="طلب الشهادة السودانية"
      subtitle="يرجى تعبئة جميع الحقول بدقة لاستخراج شهادة الثانوية السودانية"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField label="الاسم الرباعي" required>
          <Input placeholder="مثال: أحمد محمد علي إبراهيم" />
        </FormField>
        <FormField label="اسم الأم رباعياً" required>
          <Input placeholder="مثال: فاطمة أحمد علي عبدالله" />
        </FormField>
        <FormField label="اسم المدرسة" required>
          <Input placeholder="مثال: مدرسة الخرطوم الثانوية للبنين" />
        </FormField>
        <FormField label="رقم الجلوس" required>
          <Input placeholder="مثال: 123456789" />
        </FormField>
        <FormField label="سنة الشهادة" required>
          <Select placeholder="اختر السنة" options={Array.from({ length: 20 }, (_, i) => String(2024 - i))} />
        </FormField>
        <FormField label="المسار (المساق)" required>
          <Select placeholder="اختر المسار" options={["العلمي", "الأدبي", "التجاري", "الزراعي", "الصناعي"]} />
        </FormField>
        <FormField label="لغة الاستخراج" required>
          <Select placeholder="اختر اللغة" options={["العربية", "الإنجليزية", "كلاهما"]} />
        </FormField>
        <FormField label="نوع الخدمة" required>
          <Select placeholder="اختر الخدمة" options={["استخراج شهادة", "توثيق وتصديق", "ترجمة رسمية", "جميع الخدمات"]} />
        </FormField>
      </div>

      <div className="mt-5 p-4 rounded-xl border border-border bg-secondary/30">
        <h4 className="font-semibold text-foreground text-sm mb-3">بيانات شهادة الثامن (اختياري)</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField label="اسم المدرسة (ثامن)">
            <Input placeholder="اسم المدرسة" />
          </FormField>
          <FormField label="رقم الجلوس (ثامن)">
            <Input placeholder="رقم الجلوس" />
          </FormField>
          <FormField label="سنة الشهادة (ثامن)">
            <Select placeholder="اختر السنة" options={Array.from({ length: 20 }, (_, i) => String(2024 - i))} />
          </FormField>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <FormField label="صورة شخصية" required>
          <FileUpload label="ارفع صورة شخصية حديثة" />
        </FormField>
        <FormField label="صورة جواز السفر" required>
          <FileUpload label="ارفع صورة من جواز السفر" />
        </FormField>
      </div>
    </CertFormPage>
  );
}

// ─── BASIC CERTIFICATE PAGE ───────────────────────────────────────────────────
function BasicCertPage() {
  return (
    <CertFormPage
      title="طلب شهادة الأساس والمتوسط"
      subtitle="يرجى تعبئة جميع الحقول لاستخراج شهادة المرحلة الأساسية أو المتوسطة"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField label="نوع الشهادة" required>
          <Select placeholder="اختر نوع الشهادة" options={["شهادة المرحلة الأساسية (الثامن)", "شهادة المرحلة المتوسطة"]} />
        </FormField>
        <FormField label="الاسم الرباعي" required>
          <Input placeholder="مثال: أحمد محمد علي إبراهيم" />
        </FormField>
        <FormField label="اسم الأم رباعياً" required>
          <Input placeholder="مثال: فاطمة أحمد علي عبدالله" />
        </FormField>
        <FormField label="اسم المدرسة" required>
          <Input placeholder="اسم المدرسة" />
        </FormField>
        <FormField label="رقم الجلوس" required>
          <Input placeholder="رقم الجلوس" />
        </FormField>
        <FormField label="سنة الشهادة" required>
          <Select placeholder="اختر السنة" options={Array.from({ length: 20 }, (_, i) => String(2024 - i))} />
        </FormField>
        <FormField label="صورة شخصية" required>
          <FileUpload label="ارفع صورة شخصية حديثة" />
        </FormField>
        <FormField label="صورة جواز السفر" required>
          <FileUpload label="ارفع صورة من جواز السفر" />
        </FormField>
      </div>
    </CertFormPage>
  );
}

// ─── ADMISSIONS PAGE ──────────────────────────────────────────────────────────
function AdmissionsPage() {
  const [activeCountry, setActiveCountry] = useState("تركيا");
  const [activeMajor, setActiveMajor] = useState("الطب");
  const [showForm, setShowForm] = useState(false);

  const countries = [
    { name: "تركيا", universities: 28, flag: "🇹🇷" },
    { name: "ماليزيا", universities: 15, flag: "🇲🇾" },
    { name: "مصر", universities: 22, flag: "🇪🇬" },
    { name: "الأردن", universities: 12, flag: "🇯🇴" },
    { name: "المغرب", universities: 10, flag: "🇲🇦" },
    { name: "السعودية", universities: 18, flag: "🇸🇦" },
    { name: "الإمارات", universities: 14, flag: "🇦🇪" },
    { name: "روسيا", universities: 20, flag: "🇷🇺" },
  ];

  const universities = [
    { name: "جامعة إسطنبول", country: "تركيا", rank: 801, type: "حكومية", img: IMGS.campus1 },
    { name: "جامعة أنقرة", country: "تركيا", rank: 750, type: "حكومية", img: IMGS.campus2 },
    { name: "جامعة مالايا", country: "ماليزيا", rank: 70, type: "حكومية", img: IMGS.campus3 },
    { name: "جامعة القاهرة", country: "مصر", rank: 601, type: "حكومية", img: IMGS.campus1 },
    { name: "الجامعة الأردنية", country: "الأردن", rank: 501, type: "حكومية", img: IMGS.campus2 },
    { name: "جامعة محمد الخامس", country: "المغرب", rank: 801, type: "حكومية", img: IMGS.campus3 },
  ];

  const majors = ["الطب", "الهندسة", "الحاسوب", "الأعمال", "القانون", "التمريض", "الصيدلة", "العلوم"];

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <div className="bg-white border-b border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">ادرس في الخارج</span>
          <h1 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "Cairo, sans-serif" }}>القبولات الجامعية</h1>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">نساعدك في الحصول على قبول جامعي في أفضل الجامعات العالمية بسهولة وأمان</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Countries */}
        <h2 className="text-xl font-bold text-foreground mb-5" style={{ fontFamily: "Cairo, sans-serif" }}>الدول المتاحة</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {countries.map((c) => (
            <button
              key={c.name}
              onClick={() => setActiveCountry(c.name)}
              className={`p-4 rounded-xl border transition-all text-center ${activeCountry === c.name ? "border-primary bg-secondary text-primary shadow-sm" : "border-border bg-card text-foreground hover:border-primary/30"}`}
            >
              <div className="text-2xl mb-1">{c.flag}</div>
              <div className="text-xs font-semibold">{c.name}</div>
              <div className="text-xs text-muted-foreground">{c.universities} جامعة</div>
            </button>
          ))}
        </div>

        {/* Majors */}
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Cairo, sans-serif" }}>التخصصات</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {majors.map((m) => (
            <button
              key={m}
              onClick={() => setActiveMajor(m)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${activeMajor === m ? "bg-primary text-white border-primary" : "bg-card border-border text-foreground hover:border-primary/40"}`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Universities */}
        <h2 className="text-xl font-bold text-foreground mb-5" style={{ fontFamily: "Cairo, sans-serif" }}>الجامعات المتاحة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {universities.map((u) => (
            <div key={u.name} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-md transition-all">
              <img src={u.img} alt={u.name} className="w-full h-40 object-cover" />
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-foreground text-sm" style={{ fontFamily: "Cairo, sans-serif" }}>{u.name}</h3>
                  <span className="text-xs bg-secondary text-primary px-2 py-0.5 rounded-full">{u.type}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Globe size={12} />{u.country}</span>
                  <span className="flex items-center gap-1"><Award size={12} />ترتيب: {u.rank}+</span>
                </div>
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-primary text-white text-sm font-semibold py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  تقديم طلب
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        {showForm && (
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: "Cairo, sans-serif" }}>نموذج طلب القبول</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField label="الاسم الكامل" required><Input placeholder="الاسم الرباعي" /></FormField>
              <FormField label="الجنسية" required><Input placeholder="السودان" /></FormField>
              <FormField label="الدولة المفضلة" required>
                <Select placeholder="اختر الدولة" options={countries.map(c => c.name)} />
              </FormField>
              <FormField label="التخصص المطلوب" required>
                <Select placeholder="اختر التخصص" options={majors} />
              </FormField>
              <FormField label="المعدل التراكمي" required><Input placeholder="مثال: 85%" /></FormField>
              <FormField label="رقم الهاتف" required><Input placeholder="+249 ..." type="tel" /></FormField>
              <FormField label="شهادة الثانوية" required><FileUpload label="ارفع شهادة الثانوية" /></FormField>
              <FormField label="جواز السفر" required><FileUpload label="ارفع جواز السفر" /></FormField>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setShowForm(false)} className="px-5 py-2.5 rounded-lg border border-border text-sm text-muted-foreground hover:bg-secondary transition-colors">إلغاء</button>
              <button className="bg-primary text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm">إرسال الطلب</button>
            </div>
          </div>
        )}
        {!showForm && (
          <div className="text-center">
            <button onClick={() => setShowForm(true)} className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
              تقديم طلب قبول جامعي <ArrowLeft size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SCHOLARSHIP DATA ─────────────────────────────────────────────────────────
const SCHOLARSHIPS_DATA = [
  {
    id: "turkish-govt",
    name: "المنحة التركية الحكومية",
    country: "تركيا",
    flag: "🇹🇷",
    university: "جميع الجامعات الحكومية التركية",
    level: "بكالوريوس / ماجستير / دكتوراه",
    deadline: "٢٨ فبراير ٢٠٢٥",
    coverage: "كاملة",
    badge: "مميز",
    badgeColor: "bg-primary",
    cardAccent: "border-blue-200 bg-blue-50/40",
    headerBg: "bg-[#1A4B8C]",
    fundingPercent: 100,
    description: "المنحة الحكومية التركية (Türkiye Burslari) هي برنامج حكومي تقدمه الحكومة التركية لاستقطاب الطلاب الدوليين المتميزين من مختلف دول العالم للدراسة في أرقى الجامعات التركية الحكومية. تُعدّ هذه المنحة من أشمل المنح وأكثرها مرونة، إذ تتيح للطلاب اختيار تخصصاتهم المفضلة والالتحاق بمؤسسات أكاديمية ذات سمعة عالية على المستوى الدولي.",
    benefits: [
      "تغطية كاملة لرسوم الدراسة",
      "راتب شهري (بكالوريوس: ٧٠٠ ليرة — ماجستير: ٩٥٠ ليرة — دكتوراه: ١٤٠٠ ليرة)",
      "سكن في السكن الجامعي الحكومي",
      "تذكرة طيران ذهاباً وإياباً سنوياً",
      "تأمين صحي شامل",
      "دورة مكثفة في اللغة التركية لمدة عام",
    ],
    conditions: [
      "ألا يتجاوز عمر المتقدم ٢١ سنة للبكالوريوس، و٣٠ للماجستير، و٣٥ للدكتوراه",
      "أن يكون المتقدم من جنسية غير تركية",
      "الحصول على معدل لا يقل عن ٧٠٪ للبكالوريوس، و٧٥٪ للدراسات العليا",
      "لا يشترط إجادة اللغة التركية عند التقديم",
      "تقديم الطلب عبر المنصة الرسمية للمنحة في الموعد المحدد",
    ],
    faqs: [
      { q: "هل يمكنني التقديم على أكثر من جامعة؟", a: "نعم، تتيح لك المنحة اختيار ما يصل إلى ١٢ جامعة بترتيب الأولوية وفق رغبتك." },
      { q: "هل يُشترط إجادة اللغة التركية؟", a: "لا، توفر المنحة سنة تحضيرية لتعلم اللغة التركية قبل البدء بالدراسة الفعلية." },
      { q: "متى تبدأ الدراسة بعد قبول الطلب؟", a: "تبدأ الدراسة عادةً في سبتمبر من العام التالي للتقديم." },
      { q: "هل المنحة قابلة للتجديد؟", a: "نعم، تُجدَّد المنحة سنوياً بشرط الحفاظ على الأداء الأكاديمي الجيد." },
    ],
  },
  {
    id: "malaysia-um",
    name: "منحة جامعة مالايا",
    country: "ماليزيا",
    flag: "🇲🇾",
    university: "جامعة مالايا (UM)",
    level: "ماجستير / دكتوراه",
    deadline: "١٥ مارس ٢٠٢٥",
    coverage: "جزئية",
    badge: "جديد",
    badgeColor: "bg-accent",
    cardAccent: "border-green-200 bg-green-50/40",
    headerBg: "bg-[#1B6B3A]",
    fundingPercent: 70,
    description: "تقدم جامعة مالايا، إحدى أعرق الجامعات الآسيوية وأكثرها مرتبةً في تصنيف QS العالمي، منحاً جزئية للطلاب الدوليين الموهوبين في مجالات العلوم والتقنية والهندسة والرياضيات. تُتيح هذه المنحة للطالب بناء مسيرة أكاديمية متميزة في قلب كوالالمبور.",
    benefits: [
      "إعفاء ٧٠٪ من الرسوم الدراسية",
      "منحة بحثية شهرية تصل إلى ٢٠٠٠ رينغت ماليزي",
      "الوصول الكامل لمرافق الجامعة والمختبرات",
      "عضوية في مراكز البحث والتطوير",
      "دعم للنشر في المجلات العلمية المحكّمة",
    ],
    conditions: [
      "الحصول على درجة البكالوريوس بمعدل تراكمي لا يقل عن ٣.٢ من ٤",
      "تقديم خطة بحثية واضحة ومعتمدة من مشرف أكاديمي",
      "إجادة اللغة الإنجليزية بدرجة IELTS لا تقل عن ٦.٥",
      "ألا يكون الطالب حاملاً لمنحة أخرى في وقت التقديم",
    ],
    faqs: [
      { q: "هل يمكن التحويل إلى منحة كاملة لاحقاً؟", a: "نعم، بناءً على الأداء الأكاديمي الاستثنائي يمكن تحويل المنحة إلى كاملة بعد الفصل الأول." },
      { q: "ما هي التخصصات المتاحة؟", a: "STEM بشكل رئيسي: هندسة، حاسوب، علوم، طب، رياضيات." },
      { q: "هل يوجد سكن مدعوم؟", a: "تتوفر خيارات سكن بأسعار مخفضة داخل الحرم الجامعي." },
    ],
  },
  {
    id: "egypt-africa",
    name: "منحة مصر للطلاب الأفارقة",
    country: "مصر",
    flag: "🇪🇬",
    university: "جامعة القاهرة / جامعة عين شمس",
    level: "بكالوريوس",
    deadline: "١٠ أبريل ٢٠٢٥",
    coverage: "كاملة",
    badge: "",
    badgeColor: "",
    cardAccent: "border-amber-200 bg-amber-50/40",
    headerBg: "bg-[#7B4A00]",
    fundingPercent: 100,
    description: "تقدم جمهورية مصر العربية منحاً حكومية كاملة لأبناء الدول الأفريقية الشقيقة بهدف تعزيز التعاون الأكاديمي والثقافي. يُتاح للطالب الاختيار بين جامعة القاهرة أو جامعة عين شمس في مجموعة واسعة من التخصصات الأكاديمية.",
    benefits: [
      "إعفاء كامل من الرسوم الدراسية",
      "مخصص شهري للمعيشة",
      "سكن حكومي داخل الحرم الجامعي",
      "تأمين صحي أساسي",
      "تذكرة طيران في البداية والنهاية",
    ],
    conditions: [
      "أن يكون المتقدم حاملاً لجنسية دولة أفريقية",
      "الحصول على شهادة الثانوية بمعدل لا يقل عن ٧٥٪",
      "ألا يتجاوز عمر المتقدم ٢٣ سنة",
      "اجتياز مقابلة القبول مع الملحقية الثقافية المصرية",
    ],
    faqs: [
      { q: "ما لغة الدراسة؟", a: "معظم التخصصات تُدرَّس باللغة العربية، وبعض التخصصات كالطب والهندسة متاحة بالإنجليزية." },
      { q: "هل توجد تخصصات طبية؟", a: "نعم، تشمل المنحة تخصصات الطب البشري والصيدلة والتمريض." },
      { q: "كم مدة البكالوريوس؟", a: "تتراوح بين ٤ و٦ سنوات حسب التخصص." },
    ],
  },
  {
    id: "jordan-postgrad",
    name: "منحة الأردن للدراسات العليا",
    country: "الأردن",
    flag: "🇯🇴",
    university: "الجامعة الأردنية",
    level: "ماجستير",
    deadline: "٢٠ مايو ٢٠٢٥",
    coverage: "جزئية",
    badge: "",
    badgeColor: "",
    cardAccent: "border-purple-200 bg-purple-50/40",
    headerBg: "bg-[#4A2580]",
    fundingPercent: 60,
    description: "تمنح الجامعة الأردنية، إحدى أعرق المؤسسات الأكاديمية في المنطقة العربية، منحاً جزئية لطلاب الدراسات العليا القادمين من الدول الشقيقة. تتميز هذه المنحة بالمرونة العالية وإمكانية الجمع بين الدراسة والعمل البحثي الأكاديمي.",
    benefits: [
      "خصم ٦٠٪ على الرسوم الدراسية",
      "إمكانية العمل بوظيفة مساعد بحثي",
      "اشتراك مجاني في المكتبات الرقمية الأكاديمية",
      "دعم حضور المؤتمرات العلمية الدولية",
    ],
    conditions: [
      "بكالوريوس بمعدل لا يقل عن ٧٠٪ أو ما يعادلها",
      "خطاب توصية من أستاذين أكاديميين",
      "مقابلة شخصية مع لجنة القبول",
      "إتقان اللغة العربية أو الإنجليزية حسب التخصص",
    ],
    faqs: [
      { q: "هل تشمل المنحة تكاليف المعيشة؟", a: "المنحة جزئية وتغطي الرسوم فقط، وعلى الطالب توفير تكاليف المعيشة والسكن." },
      { q: "ما التخصصات الأكثر طلباً؟", a: "القانون والإدارة والهندسة والعلوم الإنسانية." },
    ],
  },
  {
    id: "morocco-govt",
    name: "المنحة المغربية الحكومية",
    country: "المغرب",
    flag: "🇲🇦",
    university: "جامعة محمد الخامس / جامعة الحسن الثاني",
    level: "بكالوريوس / ماجستير",
    deadline: "٣١ يناير ٢٠٢٥",
    coverage: "كاملة",
    badge: "مميز",
    badgeColor: "bg-primary",
    cardAccent: "border-red-200 bg-red-50/40",
    headerBg: "bg-[#8B0000]",
    fundingPercent: 100,
    description: "تُقدم المملكة المغربية منحاً حكومية شاملة للطلاب الأفارقة والعرب في إطار سياسة التعاون الجنوب-جنوب. وتُتيح هذه المنحة الدراسةَ في جامعات مغربية مرموقة تتبنّى معايير أكاديمية أوروبية من خلال نظام LMD الفرنسي.",
    benefits: [
      "إعفاء كامل من الرسوم الدراسية",
      "منحة معيشة شهرية ثابتة",
      "سكن جامعي مدعوم",
      "تأمين صحي شامل",
      "تذكرة طيران سنوية",
      "بطاقة المواصلات الطلابية",
    ],
    conditions: [
      "اجتياز شهادة الثانوية بامتياز (٨٠٪ فأكثر)",
      "التقديم عبر السفارة المغربية في بلد المتقدم",
      "إجادة اللغة الفرنسية أو العربية حسب التخصص",
      "عدم حمل جنسية مغربية",
    ],
    faqs: [
      { q: "هل يُشترط إجادة الفرنسية؟", a: "يعتمد ذلك على التخصص؛ بعض البرامج تُدرَّس بالعربية وبعضها بالفرنسية." },
      { q: "كيف أتقدم للمنحة؟", a: "يتم التقديم عبر السفارة المغربية أو عبر فريقنا الذي يتولى إجراءات التقديم كاملة." },
      { q: "هل المنحة متاحة لطلاب السودان؟", a: "نعم، المنحة مفتوحة للطلاب السودانيين ضمن الكوتا الأفريقية." },
    ],
  },
  {
    id: "uae-scholarship",
    name: "منحة دولة الإمارات",
    country: "الإمارات",
    flag: "🇦🇪",
    university: "جامعة الإمارات / جامعة خليفة",
    level: "بكالوريوس",
    deadline: "١٥ يونيو ٢٠٢٥",
    coverage: "كاملة",
    badge: "جديد",
    badgeColor: "bg-accent",
    cardAccent: "border-teal-200 bg-teal-50/40",
    headerBg: "bg-[#006400]",
    fundingPercent: 100,
    description: "ضمن مساعي دولة الإمارات لتعزيز التعليم الدولي، تُتيح جامعة الإمارات وجامعة خليفة منحاً تغطي الرسوم والإقامة للطلاب الدوليين المتميزين في مجالات التقنية والهندسة والعلوم. تتميز البيئة الدراسية بتوافر أحدث التقنيات والمختبرات.",
    benefits: [
      "رسوم دراسية صفرية",
      "سكن جامعي مجاني",
      "مخصص شهري للمعيشة",
      "تأمين صحي وتأشيرة إقامة",
      "برامج تدريب وتوظيف مع شركات إماراتية كبرى",
      "لابتوب وأدوات دراسية",
    ],
    conditions: [
      "معدل ثانوية لا يقل عن ٩٠٪ في الرياضيات والعلوم",
      "اجتياز اختبار SAT بدرجة ١٢٠٠ فأعلى أو ما يعادله",
      "إجادة اللغة الإنجليزية IELTS 6.0 أو TOEFL 80",
      "خطاب توصية أكاديمية من مدرسة الطالب",
    ],
    faqs: [
      { q: "هل يمكن التقديم بدون SAT؟", a: "في بعض الحالات يمكن الاستعاضة عن SAT بمقابلة أكاديمية تقييمية." },
      { q: "ما هي فرص التوظيف بعد التخرج؟", a: "الإمارات توفر سوق عمل ممتاز والجامعات لديها شراكات مع شركات عالمية." },
      { q: "هل تشمل المنحة الدكتوراه؟", a: "المنحة المتاحة حالياً للبكالوريوس فقط، مع إمكانية دراسة خيارات الدراسات العليا لاحقاً." },
    ],
  },
];

// ─── File upload item with state ──────────────────────────────────────────────
function UploadField({ label, required, hint }: { label: string; required?: boolean; hint?: string }) {
  const [uploaded, setUploaded] = useState(false);
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
        {hint && <span className="text-xs text-muted-foreground font-normal mr-1">({hint})</span>}
      </label>
      <label className={`flex items-center gap-3 rounded-xl border-2 border-dashed p-4 cursor-pointer transition-all ${uploaded ? "border-accent bg-accent/5" : "border-border bg-input-background hover:border-primary/40"}`}>
        <input type="file" className="hidden" onChange={() => setUploaded(true)} />
        {uploaded ? (
          <>
            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
              <BadgeCheck size={16} className="text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-accent">تم الرفع بنجاح</p>
              <p className="text-xs text-muted-foreground">اضغط لاستبدال الملف</p>
            </div>
          </>
        ) : (
          <>
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center shrink-0">
              <Upload size={15} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm text-foreground font-medium">ارفع الملف هنا</p>
              <p className="text-xs text-muted-foreground">PDF, JPG, PNG — بحد أقصى 10MB</p>
            </div>
          </>
        )}
      </label>
    </div>
  );
}

// ─── SCHOLARSHIPS LISTING PAGE ────────────────────────────────────────────────
function ScholarshipsPage() {
  const [search, setSearch] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const navigate = useNavigate();

  const filtered = SCHOLARSHIPS_DATA.filter(s =>
    (s.name.includes(search) || s.country.includes(search) || search === "") &&
    (filterCountry === "" || s.country === filterCountry) &&
    (filterLevel === "" || s.level.includes(filterLevel))
  );

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <div
  className="relative border-b border-border py-14 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.for9a.com/thumb/max-1140-auto-100-webp/t/17163-maheshkumar-painam-hf-lfqdomf8-unsplash.jpg')",
  }}
>
  {/* طبقة تعتيم */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* المحتوى */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
    <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
      فرص دراسية
    </span>

    <h1
      className="text-3xl md:text-4xl font-bold text-white mb-3"
      style={{ fontFamily: "Cairo, sans-serif" }}
    >
      المنح الدراسية المتاحة
    </h1>

    <p className="text-white/90 text-sm max-w-lg mx-auto">
      ابحث عن المنحة المناسبة لك، واطّلع على التفاصيل الكاملة قبل تقديم طلبك
      بمساعدة فريقنا المتخصص
    </p>
  </div>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Search + filter */}
       <div className="bg-card rounded-2xl border border-border p-5 mb-8 shadow-sm">
  <div className="flex gap-4">

    <select
      value={filterCountry}
      onChange={(e) => setFilterCountry(e.target.value)}
      className="w-48 px-4 py-2 rounded-lg border border-border bg-input-background text-sm"
    >
      <option value="">جميع الدول</option>
      {["تركيا", "ماليزيا", "مصر", "الأردن", "المغرب", "الإمارات"].map(c => (
        <option key={c}>{c}</option>
      ))}
    </select>

    <select
      value={filterLevel}
      onChange={(e) => setFilterLevel(e.target.value)}
      className="w-48 px-4 py-2 rounded-lg border border-border bg-input-background text-sm"
    >
      <option value="">جميع المستويات</option>
      {["بكالوريوس", "ماجستير", "دكتوراه"].map(l => (
        <option key={l}>{l}</option>
      ))}
    </select>

  </div>
</div>

        <p className="text-sm text-muted-foreground mb-6">{filtered.length} منحة متاحة</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s) => (
            <div key={s.id} className={`rounded-2xl border bg-card overflow-hidden hover:shadow-lg transition-all group ${s.cardAccent}`}>
              {/* Card top stripe */}
              <div className={`h-1.5 w-full ${s.headerBg}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{s.flag}</span>
                    <h3 className="font-bold text-foreground text-sm leading-snug" style={{ fontFamily: "Cairo, sans-serif" }}>{s.name}</h3>
                  </div>
                  {s.badge && (
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full shrink-0 text-white ${s.badgeColor}`}>
                      {s.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Building size={12} className="text-primary shrink-0" />
                    <span className="truncate">{s.university}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <GraduationCap size={12} className="text-primary shrink-0" />
                    <span>{s.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={12} className="text-primary shrink-0" />
                    <span>آخر موعد: {s.deadline}</span>
                  </div>
                </div>

                {/* Funding bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-muted-foreground">نسبة التمويل</span>
                    <span className={`text-xs font-bold ${s.coverage === "كاملة" ? "text-accent" : "text-orange-600"}`}>
                      {s.fundingPercent}٪ — {s.coverage}
                    </span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${s.coverage === "كاملة" ? "bg-accent" : "bg-orange-400"}`}
                      style={{ width: `${s.fundingPercent}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/scholarships/${s.id}`)}
                  className="w-full bg-primary text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  التقديم على المنحة
                  <ArrowLeft size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SCHOLARSHIP DETAIL & APPLICATION PAGE ────────────────────────────────────
function ScholarshipDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const scholarship = SCHOLARSHIPS_DATA.find(s => s.id === id);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  if (!scholarship) {
    return (
      <div dir="rtl" className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">لم يتم العثور على المنحة</p>
          <button onClick={() => navigate("/scholarships")} className="text-primary font-semibold hover:underline">العودة للمنح</button>
        </div>
      </div>
    );
  }

  const requiredDocs = [
    { label: "صورة جواز السفر", required: true, note: "ساري المفعول" },
    { label: "صورة شخصية", required: true, note: "خلفية بيضاء، حديثة" },
    { label: "الشهادة الثانوية", required: true, note: "مصدقة ومترجمة" },
    { label: "كشف الدرجات", required: true, note: "رسمي من المؤسسة التعليمية" },
    { label: "الشهادة الجامعية", required: false, note: "إن وجدت" },
    { label: "السيرة الذاتية (CV)", required: true, note: "لا تتجاوز صفحتين" },
    { label: "خطاب الدافع (Motivation Letter)", required: true, note: "٥٠٠ – ٨٠٠ كلمة" },
    { label: "خطاب التوصية", required: true, note: "من أستاذين أكاديميين" },
    { label: "شهادة اللغة الإنجليزية", required: false, note: "IELTS أو TOEFL — إن وجدت" },
  ];

  const steps = [
    { icon: Send, num: "01", title: "إرسال الطلب", desc: "تقديم النموذج مع كافة المستندات المطلوبة عبر منصتنا الإلكترونية." },
    { icon: ClipboardList, num: "02", title: "مراجعة المستندات", desc: "يقوم فريقنا المتخصص بمراجعة جميع وثائقك والتحقق من اكتمالها وصحتها." },
    { icon: ListChecks, num: "03", title: "تقييم الأهلية", desc: "نقيّم ملفك وفق معايير المنحة ونُعدّ تقييماً شاملاً لفرص قبولك." },
    { icon: Building, num: "04", title: "التقديم للجهة المانحة", desc: "نتولى التقديم الرسمي نيابةً عنك للجامعة أو الجهة المانحة للمنحة." },
    { icon: Award, num: "05", title: "استلام النتيجة", desc: "نُبلّغك بالنتيجة فور وصولها ونساعدك في إجراءات القبول والتسجيل." },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      {/* ── Hero header ── */}
      <div className={`${scholarship.headerBg} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate("/scholarships")}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ChevronRight size={16} />
            العودة   
          </button>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{scholarship.flag}</span>
                {scholarship.badge && (
                  <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${scholarship.badgeColor}`}>
                    {scholarship.badge}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2" style={{ fontFamily: "Cairo, sans-serif" }}>
                {scholarship.name}
              </h1>
              <p className="text-white/70 text-sm">{scholarship.university} — {scholarship.country}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 rounded-xl px-4 py-3 text-center min-w-28">
                <div className={`text-lg font-extrabold ${scholarship.coverage === "كاملة" ? "text-green-300" : "text-orange-300"}`}>
                  {scholarship.fundingPercent}٪
                </div>
                <div className="text-white/60 text-xs mt-0.5">نسبة التمويل</div>
              </div>
             
              <div className="bg-white/10 rounded-xl px-4 py-3 text-center min-w-28">
                <div className="text-lg font-extrabold text-white">{scholarship.level.split("/").length}</div>
                <div className="text-white/60 text-xs mt-0.5">مستويات متاحة</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left sticky summary card ── */}
          <div className="lg:col-span-1 order-first lg:order-last">
            <div className="sticky top-20 space-y-4">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                <h3 className="font-bold text-foreground text-base mb-4" style={{ fontFamily: "Cairo, sans-serif" }}>ملخص المنحة</h3>
                <ul className="space-y-3 mb-5">
                  {[
                    { label: "الدولة", value: `${scholarship.flag} ${scholarship.country}` },
                    { label: "الجامعة", value: scholarship.university },
                    { label: "المستوى", value: scholarship.level },
                    { label: "نسبة التمويل", value: `${scholarship.fundingPercent}٪ — ${scholarship.coverage}` },
                    { label: "آخر موعد", value: scholarship.deadline },
                  ].map(item => (
                    <li key={item.label} className="flex items-start justify-between gap-2">
                      <span className="text-xs text-muted-foreground shrink-0">{item.label}</span>
                      <span className="text-xs font-semibold text-foreground text-left">{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="h-px bg-border mb-4" />
                <a href="#application-form" className="w-full bg-primary text-white text-sm font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  قدّم طلبك الآن <ArrowLeft size={15} />
                </a>
                <p className="text-xs text-muted-foreground text-center mt-3 flex items-center justify-center gap-1.5">
                  <Shield size={11} className="text-accent" /> بياناتك محمية ومشفرة
                </p>
              </div>

              <div className="bg-secondary/50 rounded-2xl border border-border p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle size={15} className="text-accent" />
                  <span className="font-semibold text-foreground text-sm">تحتاج مساعدة؟</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">فريقنا جاهز للإجابة على أي سؤال حول هذه المنحة.</p>
                <a
                  href="https://wa.me/249123456789"
                  className="flex items-center justify-center gap-2 w-full bg-accent text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-accent/90 transition-colors"
                >
                  <MessageCircle size={14} />
                  تواصل عبر واتساب
                </a>
              </div>
            </div>
          </div>

          {/* ── Main content ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* § 1 — Scholarship info */}
            <section className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-secondary/30">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Info size={16} className="text-primary" />
                </div>
                <h2 className="font-bold text-foreground text-base" style={{ fontFamily: "Cairo, sans-serif" }}>معلومات المنحة</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">وصف المنحة</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{scholarship.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-3">المميزات</h4>
                  <ul className="space-y-2">
                    {scholarship.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} className="text-accent" />
                        </div>
                        <span className="text-sm text-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-3">شروط القبول</h4>
                  <ul className="space-y-2">
                    {scholarship.conditions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <AlertCircle size={11} className="text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* § 2 — Required documents */}
            <section className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-secondary/30">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText size={16} className="text-primary" />
                </div>
                <h2 className="font-bold text-foreground text-base" style={{ fontFamily: "Cairo, sans-serif" }}>المستندات المطلوبة</h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4">يرجى التأكد من جاهزية جميع المستندات التالية قبل البدء في التقديم.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {requiredDocs.map((doc, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border transition-colors ${doc.required ? "bg-white border-border" : "bg-secondary/30 border-border/60"}`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${doc.required ? "bg-primary/10" : "bg-border/40"}`}>
                        {doc.required
                          ? <BadgeCheck size={14} className="text-primary" />
                          : <Check size={14} className="text-muted-foreground" />
                        }
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${doc.required ? "text-foreground" : "text-muted-foreground"}`}>{doc.label}</div>
                        <div className="text-xs text-muted-foreground">{doc.note}</div>
                      </div>
                      {!doc.required && (
                        <span className="mr-auto text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded-full shrink-0">اختياري</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* § 3 — Application form */}
            <section id="application-form" className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm scroll-mt-24">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-secondary/30">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ClipboardList size={16} className="text-primary" />
                </div>
                <h2 className="font-bold text-foreground text-base" style={{ fontFamily: "Cairo, sans-serif" }}>نموذج التقديم</h2>
              </div>

              {submitted ? (
                <div className="p-10 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BadgeCheck size={30} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "Cairo, sans-serif" }}>تم إرسال طلبك بنجاح!</h3>
                  <p className="text-muted-foreground text-sm mb-1">سيتواصل معك فريقنا خلال ٢٤ ساعة لتأكيد استلام طلبك.</p>
                  <p className="text-muted-foreground text-sm mb-6">يمكنك متابعة حالة طلبك عبر صفحة تتبع الطلبات.</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link to="/tracking" className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors">
                      تتبع طلبي
                    </Link>
                    <button onClick={() => setSubmitted(false)} className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-secondary transition-colors">
                      تقديم طلب آخر
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 space-y-6">
                  {/* Personal info */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">١</span>
                      البيانات الشخصية
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField label="الاسم الرباعي" required><Input placeholder="مثال: أحمد محمد علي إبراهيم" /></FormField>
                      <FormField label="البريد الإلكتروني" required><Input placeholder="example@email.com" type="email" /></FormField>
                      <FormField label="رقم الهاتف / واتساب" required><Input placeholder="+249 ..." type="tel" /></FormField>
                      <FormField label="الدولة الحالية" required>
                        <Select placeholder="اختر الدولة" options={["السودان", "مصر", "الأردن", "تركيا", "ماليزيا", "الإمارات", "المملكة العربية السعودية", "أخرى"]} />
                      </FormField>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  {/* Academic info */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">٢</span>
                      البيانات الأكاديمية
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField label="الجامعة المطلوبة">
                        <Input placeholder={scholarship.university} />
                      </FormField>
                      <FormField label="التخصص المطلوب" required>
                        <Input placeholder="مثال: الهندسة المدنية" />
                      </FormField>
                      <FormField label="المعدل الأكاديمي" required>
                        <Select placeholder="اختر المعدل" options={["٩٠٪ فأكثر (امتياز)", "٨٠ – ٨٩٪ (جيد جداً)", "٧٠ – ٧٩٪ (جيد)", "٦٠ – ٦٩٪ (مقبول)"]} />
                      </FormField>
                      <FormField label="سنة التخرج المتوقعة" required>
                        <Select placeholder="اختر السنة" options={Array.from({ length: 8 }, (_, i) => String(2024 + i))} />
                      </FormField>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  {/* Document uploads */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-1 flex items-center gap-2">
                      <span className="w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">٣</span>
                      رفع المستندات
                    </h4>
                    <p className="text-xs text-muted-foreground mb-4 mr-7">الحقول المحددة بـ (*) إلزامية. تأكد من أن الملفات واضحة وقابلة للقراءة.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <UploadField label="جواز السفر" required note="الصفحة الرئيسية" />
                      <UploadField label="الصورة الشخصية" required note="خلفية بيضاء" />
                      <UploadField label="الشهادة الثانوية" required note="مصدقة" />
                      <UploadField label="كشف الدرجات" required note="رسمي" />
                      <UploadField label="السيرة الذاتية (CV)" required note="PDF فقط" />
                      <UploadField label="مستندات إضافية" note="اختياري" />
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  {/* Agreement */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div
                      onClick={() => setAgreed(!agreed)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${agreed ? "bg-primary border-primary" : "border-border group-hover:border-primary/50"}`}
                    >
                      {agreed && <Check size={11} className="text-white" />}
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      أقرّ بأن جميع المعلومات والوثائق المقدمة صحيحة وكاملة، وأفوّض شركة نور التعليم للتقديم على هذه المنحة نيابةً عني وفق الشروط والأحكام المعمول بها.
                    </span>
                  </label>

                  <button
                    onClick={() => agreed && setSubmitted(true)}
                    className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${agreed ? "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg" : "bg-secondary text-muted-foreground cursor-not-allowed"}`}
                  >
                    <Send size={15} />
                    إرسال طلب التقديم
                  </button>
                </div>
              )}
            </section>

            {/* § 4 — Application steps timeline */}
            <section className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-secondary/30">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ListChecks size={16} className="text-primary" />
                </div>
                <h2 className="font-bold text-foreground text-base" style={{ fontFamily: "Cairo, sans-serif" }}>خطوات التقديم</h2>
              </div>
              <div className="p-6">
                <div className="relative">
                  {/* vertical line */}
                  <div className="absolute right-[18px] top-6 bottom-6 w-px bg-border" />
                  <div className="space-y-0">
                    {steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-5 relative pb-6 last:pb-0">
                        <div className="flex flex-col items-center shrink-0 z-10">
                          <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                            <step.icon size={15} />
                          </div>
                        </div>
                        <div className="pt-1.5">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs font-bold text-muted-foreground">{step.num}</span>
                            <h4 className="font-bold text-foreground text-sm" style={{ fontFamily: "Cairo, sans-serif" }}>{step.title}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* § 5 — FAQ */}
            <section className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-secondary/30">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <HelpCircle size={16} className="text-primary" />
                </div>
                <h2 className="font-bold text-foreground text-base" style={{ fontFamily: "Cairo, sans-serif" }}>أسئلة شائعة حول هذه المنحة</h2>
              </div>
              <div className="p-6 space-y-2">
                {scholarship.faqs.map((faq, i) => (
                  <div key={i} className="rounded-xl border border-border overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-3.5 text-right hover:bg-secondary/50 transition-colors"
                    >
                      <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                      {activeFaq === i
                        ? <ChevronUp size={15} className="text-primary shrink-0 ms-3" />
                        : <ChevronDown size={15} className="text-muted-foreground shrink-0 ms-3" />
                      }
                    </button>
                    {activeFaq === i && (
                      <div className="px-5 pb-4 pt-2 text-sm text-muted-foreground leading-relaxed border-t border-border bg-secondary/20">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TRACKING PAGE ────────────────────────────────────────────────────────────
const STATUSES = [
  { key: "received", label: "تم استلام الطلب", icon: CheckCircle, desc: "تم استلام طلبك بنجاح وسيتم مراجعته قريباً" },
  { key: "review", label: "قيد المراجعة", icon: Search, desc: "يقوم فريقنا بمراجعة بياناتك والتحقق منها" },
  { key: "processing", label: "جاري التنفيذ", icon: Loader, desc: "طلبك قيد التنفيذ الفعلي لدى الجهة المعنية" },
  { key: "completed", label: "مكتمل", icon: Award, desc: "تم إنجاز طلبك بنجاح" },
  { key: "delivered", label: "تم التسليم", icon: Truck, desc: "تم تسليم وثائقك بنجاح" },
];

function TrackingPage() {
  const [trackId, setTrackId] = useState("");
  const [currentStep, setCurrentStep] = useState<number | null>(null);

  const handleTrack = () => {
    if (trackId.trim().length >= 4) {
      const seed = trackId.charCodeAt(0) + trackId.charCodeAt(trackId.length - 1);
      setCurrentStep(seed % 5);
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-background">
     <div
  className="relative py-20 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://i.pinimg.com/736x/b2/b9/7f/b2b97fab420adedeb0f6c43592a6105a.jpg')",
  }}
>
  {/* طبقة تعتيم */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
    <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
      تتبع الطلب
    </span>

    <h1
      className="text-3xl md:text-4xl font-bold text-white mb-2"
      style={{ fontFamily: "Cairo, sans-serif" }}
    >
      تتبع حالة طلبك
    </h1>

    <p className="text-white/80 text-sm">
      أدخل رقم طلبك لمعرفة حالته الحالية
    </p>
  </div>
</div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        {/* Search box */}
        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm mb-8">
          <label className="block text-sm font-semibold text-foreground mb-2">رقم الطلب</label>
          <div className="flex gap-3">
            <input
              value={trackId}
              onChange={(e) => setTrackId(e.target.value)}
              placeholder="مثال: NE-2024-00123"
              className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-input-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-right"
            />
            <button
              onClick={handleTrack}
              className="bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm flex items-center gap-2"
            >
              <Search size={16} />
              تتبع
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">يمكنك العثور على رقم الطلب في رسالة التأكيد التي وصلتك عند تقديم الطلب.</p>
        </div>

        {/* Status display */}
        {currentStep !== null && (
          <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">رقم الطلب</div>
                <div className="font-bold text-foreground" dir="ltr">{trackId.toUpperCase()}</div>
              </div>
              <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${currentStep >= 4 ? "bg-accent/10 text-accent" : "bg-blue-50 text-blue-600"}`}>
                {currentStep >= 4 ? "مكتمل" : "قيد التنفيذ"}
              </div>
            </div>

            <div className="space-y-1">
              {STATUSES.map((s, i) => {
                const done = i <= currentStep;
                const active = i === currentStep;
                return (
                  <div key={s.key} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-primary" : "bg-secondary"}`}>
                        <s.icon size={14} className={done ? "text-white" : "text-muted-foreground"} />
                      </div>
                      {i < STATUSES.length - 1 && (
                        <div className={`w-0.5 h-8 mt-1 ${i < currentStep ? "bg-primary" : "bg-border"}`} />
                      )}
                    </div>
                    <div className={`pt-1 pb-6 ${active ? "opacity-100" : done ? "opacity-80" : "opacity-40"}`}>
                      <div className={`text-sm font-semibold ${active ? "text-primary" : "text-foreground"}`}>{s.label}</div>
                      {active && <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Help box */}
        <div className="mt-6 bg-secondary/40 rounded-xl p-4 border border-border">
          <p className="text-sm text-muted-foreground">
            هل تحتاج مساعدة؟ تواصل معنا عبر{" "}
            <a href="https://wa.me/201130378500" className="text-accent font-semibold hover:underline">واتساب</a>
            {" "}أو اتصل على{" "}
            <a href="tel:+24912345678" className="text-primary font-semibold hover:underline" dir="ltr">+20 113 0378 500</a>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function AboutPage() {
  const team = [
    { name: "د. عمر عبدالرحمن", role: "المؤسس والرئيس التنفيذي", img: IMGS.consult },
    { name: "أ. نور الهدى محمد", role: "مديرة القبولات الجامعية", img: IMGS.consult2 },
    { name: "أ. خالد إبراهيم", role: "مستشار المنح الدراسية", img: IMGS.meeting },
    { name: "أ. سمية أحمد", role: "رئيسة قسم التوثيق", img: IMGS.consult },
  ];

  const values = [
    { icon: Shield, title: "الأمانة", desc: "نتعامل بشفافية ومصداقية تامة مع جميع عملائنا." },
    { icon: Star, title: "التميز", desc: "نسعى دائماً لتقديم أعلى معايير الجودة في كل خدماتنا." },
    { icon: Heart, title: "الاهتمام", desc: "نضع مصلحة الطالب في مقدمة أولوياتنا دائماً." },
    { icon: Globe, title: "الشمولية", desc: "ندعم الطلاب السودانيين في كل مكان حول العالم." },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-[#0F2547] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full mb-4">من نحن</span>
            <h1 className="text-[20px] font-extrabold text-white mb-4" style={{ fontFamily: "Cairo, sans-serif" }}>
               UniGuide للخدمات التعليمية
            </h1>
            <p className="text-white/70 leading-relaxed">
              منذ عام 2020 ونحن نخدم الطلاب السودانيين بخبرة واحترافية، حتى أصبحنا المرجع الأول للخدمات التعليمية في السودان وخارجه.
            </p>
          </div>
          <img src={IMGS.graduationGroup} alt="خريجون" className="rounded-2xl w-full h-64 object-cover shadow-xl opacity-80" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img src={IMGS.office} alt="مكتبنا" className="rounded-2xl w-full h-72 object-cover shadow-md" />
          <div>
            <span className="inline-block bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">قصتنا</span>
            <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "Cairo, sans-serif" }}>رحلة أكثر من 7 عاماً من الخدمة</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              بدأت UniGuide التعليم كفكرة بسيطة: مساعدة الطلاب السودانيين في الحصول على وثائقهم الأكاديمية بسهولة ويسر. اليوم، نفخر بخدمة أكثر من 5000 طالب في مختلف أنحاء العالم.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              توسعنا تدريجياً لنشمل خدمات القبولات الجامعية والمنح الدراسية، وأقمنا شراكات مع أكثر من 200 مؤسسة تعليمية عالمية لنوفر أفضل الفرص لطلابنا.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-5 mb-20">
          <div className="bg-card rounded-2xl border border-border p-7 hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <Target size={18} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "Cairo, sans-serif" }}>رؤيتنا</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              أن نكون المنصة التعليمية الرائدة في السودان وأفريقيا، ونساهم في بناء جيل متعلم ومؤهل قادر على المنافسة عالمياً.
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-7 hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-4">
              <Briefcase size={18} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "Cairo, sans-serif" }}>رسالتنا</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              تقديم خدمات تعليمية متكاملة بأعلى مستويات الجودة والموثوقية، مع الحرص التام على حقوق وبيانات طلابنا.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <SectionHeader label="قيمنا" title="المبادئ التي تقودنا" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <v.icon size={18} className="text-primary" />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-2">{v.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <SectionHeader label="فريقنا" title="الفريق المتخصص" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((m) => (
              <div key={m.name} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-md transition-all">
                <img src={m.img} alt={m.name} className="w-full h-40 object-cover object-top" />
                <div className="p-4 text-center">
                  <div className="font-bold text-foreground text-sm mb-0.5" style={{ fontFamily: "Cairo, sans-serif" }}>{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office images */}
        <div>
          <SectionHeader label="مقرنا" title="بيئة عمل احترافية" />
          <div className="grid grid-cols-3 gap-4">
            <img src={IMGS.meeting} alt="قاعة اجتماعات" className="rounded-2xl w-full h-48 object-cover shadow-sm col-span-2" />
            <img src={IMGS.documents} alt="ملفات" className="rounded-2xl w-full h-48 object-cover shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}


// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div dir="rtl" className="min-h-screen bg-background">
    <div className="relative h-[200px] overflow-hidden">
  {/* الصورة */}
  <img
    src="https://i.pinimg.com/1200x/c4/6f/17/c46f176087581c4589ea26cafe24a7fc.jpg"
    alt="Contact Us"
    className="w-full h-full object-cover"
  />

  {/* طبقة تغميق */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* النص فوق الصورة */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
      تواصل معنا
    </span>

    <h1
      className="text-4xl md:text-5xl font-bold text-white mb-4"
      style={{ fontFamily: "Cairo, sans-serif" }}
    >
      نحن هنا لمساعدتك
    </h1>

    <p className="text-white/90 text-lg max-w-2xl">
      تواصل معنا عبر أي وسيلة وسيرد عليك فريقنا في أسرع وقت
    </p>
  </div>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
          {[
            { icon: Phone, label: "اتصل بنا", value: "+20 113 0378 500", sub: "السبت - الخميس: 8 صباحاً - 6 مساءً", color: "text-primary", bg: "bg-blue-50" },
            { icon: MessageCircle, label: "واتساب", value: "+20 113 0378 500", sub: "متاح على مدار الساعة", color: "text-accent", bg: "bg-green-50" },
            { icon: Mail, label: "البريد الإلكتروني", value: "info@noor-edu.sd", sub: "نرد خلال 24 ساعة", color: "text-primary", bg: "bg-blue-50" },
          ].map((c) => (
            <div key={c.label} className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-md transition-all">
              <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                <c.icon size={22} className={c.color} />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">{c.label}</h3>
              <p className="font-semibold text-foreground text-sm mb-1" dir="ltr">{c.value}</p>
              <p className="text-xs text-muted-foreground">{c.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-card rounded-2xl border border-border p-7 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-5" style={{ fontFamily: "Cairo, sans-serif" }}>أرسل رسالة</h2>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Check size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">تم إرسال رسالتك!</h3>
                <p className="text-muted-foreground text-sm">سيقوم فريقنا بالرد عليك خلال 24 ساعة.</p>
                <button onClick={() => setSent(false)} className="mt-5 text-primary text-sm font-semibold hover:underline">إرسال رسالة أخرى</button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField label="الاسم" required><Input placeholder="اسمك الكامل" /></FormField>
                  <FormField label="رقم الهاتف" required><Input placeholder="+249 ..." type="tel" /></FormField>
                </div>
                <FormField label="البريد الإلكتروني"><Input placeholder="email@example.com" type="email" /></FormField>
                <FormField label="الموضوع" required>
                  <Select placeholder="اختر الموضوع" options={["استفسار عن خدمة", "متابعة طلب", "شكوى", "اقتراح", "أخرى"]} />
                </FormField>
                <FormField label="الرسالة" required>
                  <textarea
                    rows={4}
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                </FormField>
                <button
                  onClick={() => setSent(true)}
                  className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm"
                >
                  إرسال الرسالة
                </button>
              </div>
            )}
          </div>

          {/* Map + address */}
          <div className="space-y-5">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm h-64">
              <img
                src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&h=400&fit=crop&auto=format"
                alt="موقعنا"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-bold text-foreground text-sm mb-4">عنواننا</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground"> مصر القاهرة</div>
                    <div className="text-xs text-muted-foreground mt-0.5">فيصل – الأبيض – برج النصر</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-primary shrink-0" />
                  <div className="text-xs text-muted-foreground">السبت - الخميس: 8:00 ص - 6:00 م</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-bold text-foreground text-sm mb-4">تابعنا على</h3>
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, label: "فيسبوك", color: "bg-blue-50 text-blue-600" },
                  { icon: Twitter, label: "تويتر", color: "bg-sky-50 text-sky-600" },
                  { icon: Instagram, label: "إنستغرام", color: "bg-pink-50 text-pink-600" },
                  { icon: MessageCircle, label: "واتساب", color: "bg-green-50 text-green-600" },
                ].map(({ icon: Icon, label, color }) => (
                  <a key={label} href="#" className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center hover:opacity-80 transition-opacity`} title={label}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div
        className="min-h-screen bg-background text-foreground"
        dir="rtl"
        style={{ fontFamily: "Tajawal, Cairo, sans-serif" }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cert-university" element={<UniversityCertPage />} />
          <Route path="/cert-sudanese" element={<SudaneseCertPage />} />
          <Route path="/cert-basic" element={<BasicCertPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          <Route path="/scholarships/:id" element={<ScholarshipDetailPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
