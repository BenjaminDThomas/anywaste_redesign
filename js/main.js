/* ─────────────────────────────────────────────────────────────
   AnyWaste – main.js
   ───────────────────────────────────────────────────────────── */

/* ── DOM refs ─────────────────────────────────────────────── */
const desktopMenus       = Array.from(document.querySelectorAll('.has-menu'));
const desktopMenuButtons = Array.from(document.querySelectorAll('.nav-menu-button'));
const mobileMenuButton   = document.querySelector('.mobile-menu-button');
const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop');
const mobileMenu         = document.querySelector('.mobile-menu');
const mobileSubmenuBtns  = Array.from(document.querySelectorAll('.mobile-submenu-toggle'));
const scrollTopButton    = document.querySelector('.scroll-top');
const hero               = document.querySelector('.hero');
const cursor             = document.querySelector('.custom-cursor');
const cursorDot          = document.querySelector('.custom-cursor__dot');
const cursorLabel        = document.querySelector('.custom-cursor__label');
const announcementBar    = document.querySelector('#announcement-bar');
const announcementClose  = document.querySelector('.announcement-bar__close');
const siteHeader         = document.querySelector('.site-header');

/* chatbot */
const chatbot            = document.querySelector('.chatbot');
const chatbotLauncher    = document.querySelector('.chatbot-launcher');
const chatbotCloseBtn    = document.querySelector('.chatbot__close');
const chatbotExpandBtn   = document.querySelector('.chatbot__expand');
const chatbotMinBtn      = document.querySelector('.chatbot__minimise');
const chatbotMessages    = document.querySelector('.chatbot__messages');
const chatbotForm        = document.querySelector('.chatbot__form');
const chatbotInput       = document.querySelector('#chatbot-input');
const suggestionBtns     = Array.from(document.querySelectorAll('.chatbot__suggestions button'));
const supportBtn         = document.querySelector('.chatbot__support-btn');
const endChatModal       = document.querySelector('.chatbot__end-modal');
const endChatConfirm     = document.querySelector('.chatbot__end-confirm');
const endChatCancel      = document.querySelector('.chatbot__end-cancel');

/* ── FAQ data ─────────────────────────────────────────────── */
const FAQ = [
	{
		keys: ['hi', 'hello', 'hey', 'start'],
		answer: 'Hi! Welcome to AnyWaste — the digital platform making waste management simpler, smarter, and fully compliant. I can help with questions about our services, how the platform works, pricing, compliance, your account, or our team. What would you like to know?'
	},
	{
		keys: ['what', 'anywaste', 'platform', 'system', 'does', 'company', 'about', 'offer', 'service', 'tell'],
		answer: 'AnyWaste is a cloud-based waste management platform that digitises the entire waste lifecycle — from booking and collections through to compliance paperwork and reporting. It eliminates paper-based Duty of Care documents, lets you allocate drivers in real time, track every collection from producer to recycler, generate regulatory reports at the touch of a button, and manage customer quotations through one online portal. It\'s designed for waste producers, recyclers, carriers, and brokers — all in one connected system.'
	},
	{
		keys: ['how', 'works', 'get started', 'register', 'sign up'],
		answer: 'Getting started is straightforward. First, register for your free account at app.anywaste.com and tell us about your business — add your waste permits and company details. Once set up, customers can request collections, recyclers arrange collection times, and everything flows automatically through the platform. You can manage bookings, track live collections, communicate with drivers via the app, and generate compliance reports — all without a single piece of paper.'
	},
	{
		keys: ['who', 'for', 'customer', 'type', 'sector'],
		answer: 'AnyWaste is built for four core customer types. Waste Producers — businesses like retailers, construction firms, schools, and offices — use it to organise collections quickly and stay compliant. Waste Carriers manage their entire collections process, driver allocation, and routing in one place. Recyclers get better visibility over incoming waste, reducing time and paperwork. Waste Brokers can coordinate multiple carriers and recyclers from a single dashboard without losing oversight. We also serve construction sites, councils, healthcare, retail chains, and WEEE/battery recycling operations.'
	},
	{
		keys: ['duty of care', 'doc', 'compliance', 'legal', 'regulatory', 'reporting', 'documentation', 'paperwork'],
		answer: 'Duty of Care compliance is at the heart of AnyWaste. The platform generates digital Duty of Care documents and waste transfer notes automatically — stored securely online so they\'re always accessible for audits. Drivers can sign documents digitally on any device, even offline, with signatures uploaded when reconnected. Monthly and quarterly regulatory reports can be submitted to the Environment Agency at the touch of a button. Every collection is fully traceable, and our Legal Compliance Strategist Jonathan Bell ensures the platform stays aligned with UK environmental law and international waste trading directives.'
	},
	{
		keys: ['collection', 'track', 'driver', 'route', 'job', 'booking', 'schedule'],
		answer: 'Collections are managed end-to-end through the platform. You can set up, amend, and track collections in real time — from the initial booking through to delivery at the recycling facility. Drivers log in on any portable device, see their daily collections list, and each completed step automatically updates all relevant dashboards. Waste producers can see live job status, carriers can communicate with drivers on the go, and brokers can monitor multiple operations simultaneously. Every collection is tracked from waste producer to recycler and beyond.'
	},
	{
		keys: ['construction', 'demolition', 'site', 'skip', 'roro', 'hazardous'],
		answer: 'For construction and demolition, AnyWaste Global offers skips, RoRos, and Wait & Load options with fast UK-wide delivery. We handle hazardous materials including asbestos, contaminated soils, and paints with full traceability and compliant disposal. On-site waste segregation systems help maximise recycling rates, and we provide bespoke Site Waste Management Plans (SWMPs) to help meet legal requirements and green accreditations. Dedicated project managers are available for complex multi-site operations, with real-time reporting and audit-ready documentation throughout.'
	},
	{
		keys: ['retail', 'hospitality', 'restaurant', 'hotel', 'shop', 'wheelie', 'bin', 'food waste'],
		answer: 'For retail and hospitality businesses — from independent shops to hotel chains — we offer flexible wheelie bin collections from 240L to 1100L, on daily, weekly, or fortnightly schedules. We manage mixed recycling, glass, food, and general waste streams with full Duty of Care documentation stored in your online account. There\'s one point of contact for all your waste needs, fast setup with no long-term tie-ins, and the service is ideal for multi-site operators and franchises.'
	},
	{
		keys: ['weee', 'electrical', 'electronic', 'it', 'computer', 'laptop', 'fridge', 'recycl'],
		answer: 'AnyWaste Global provides fully compliant WEEE (Waste Electrical and Electronic Equipment) recycling for offices, universities, retailers, construction sites, and public sector organisations. We collect PCs, laptops, monitors, servers, fridges, TVs, telecoms equipment, power tools, and more. Our service includes nationwide collection with fully licensed carriers, certified data destruction and hard drive wiping, asset tracking, and recycling documentation for compliance purposes. WEEE is one of the fastest-growing waste streams in the UK — let us manage your e-waste end-to-end.'
	},
	{
		keys: ['battery', 'lithium', 'lead acid', 'ev', 'electric vehicle'],
		answer: 'AnyWaste Global offers fully compliant battery collection and recycling for all sectors. We collect lithium-ion (laptops, e-bikes, power tools), lead-acid and car batteries, NiCd and NiMH batteries, button cells, and industrial or EV battery packs on request. Our service uses an Approved Battery Exporter (ABE) network, ADR-compliant transport, bulk battery bins for your premises, and provides recycling certificates and audit trails. We serve tool retailers, electronics shops, car dealers, solar firms, data centres, EV networks, and schools.'
	},
	{
		keys: ['broker', 'brokerage', 'supplier', 'nationwide'],
		answer: 'As a fully independent waste brokerage, AnyWaste Global connects businesses across the UK with trusted, compliant waste providers. We handle bin collections, skip hire, and site clearances nationwide, manage supplier relationships, negotiate pricing, resolve disputes, and deliver monthly reporting dashboards with custom KPIs. Our brokerage model suits construction contractors, property developers, retail chains, councils, schools, and healthcare organisations. We offer flexible contracts with multi-supplier resilience and access to our vetted national service network.'
	},
	{
		keys: ['vision', 'mission', 'values', 'purpose'],
		answer: 'AnyWaste\'s vision is to create a global online system that disrupts traditional waste collection — simplifying licensed waste management to reduce waste crime, fly-tipping, and fraud, while creating a positive environmental impact. Our mission is to help win the fight against climate change, encourage correct recycling and reuse globally, and bring full transparency to customers, waste producers, Environmental Protection Agencies, and producer compliance. Our values are: Visionary — leading from the front and thinking differently; Collaborative — working together toward common goals; Nurturing — caring for our people, relationships, and brand; Enterprising — using initiative and agility; and Authentic — staying transparent and honest in everything we do.'
	},
	{
		keys: ['team', 'founder', 'ceo', 'damian', 'staff', 'leadership'],
		answer: 'AnyWaste Global is led by CEO and Founder Damian Lambkin, an environmental entrepreneur with 22 years\' experience in recycling, WEEE, batteries, food waste, and producer compliance globally. The leadership team includes Isabel Knight (CIO) — a former Credit Suisse Director responsible for $500M in assets; Peter Burrluck (CTO) — an IT specialist with 20+ years in waste management; Jonathan Bell as Legal Compliance Strategist specialising in environmental law; Rt Hon. George Eustice (Board Advisor) — former UK Environment Secretary; Andrew Tapson (CFO) — former ING Lease CEO; Rohan Wills (Head of Business Development) focusing on international growth, battery recycling, and circular economy; and Owen Hodge (Head of Product) with 15+ years in software development.'
	},
	{
		keys: ['global impact', 'sustainability', 'environment', 'un', 'sdg', 'climate', 'circular economy'],
		answer: 'AnyWaste works within multiple UN Sustainable Development Goals (UNSDGs) and the IRIS+ international impact measurement framework. The platform tracks hazardous and non-hazardous waste, helps avoid landfill through recycling and reuse alternatives, ensures all waste companies are licensed and accountable (preventing rogue traders), supports waste water treatment compliance, and provides a single global data collection point for accurate waste reporting. AnyWaste\'s goal is to help businesses move toward zero waste through smart segregation, digital traceability, and carbon reporting — making the world measurably cleaner and safer.'
	},
	{
		keys: ['feature', 'benefit', 'dashboard', 'analytics', 'report', 'data'],
		answer: 'The AnyWaste platform includes a live dashboard showing all requests, pending, live, and closed collections in real time. Key features include: digital Duty of Care with secure online storage; monthly and quarterly regulatory reporting; online quotation and enquiry management; driver app for any portable device; automated dashboard updates as each collection step completes; a Data Dashboard for an overview of collections, activity, and payments; and an internationally audit-able system for Environmental Protection Agencies. The platform eliminates all paper-based administration while giving full transparency across your entire operation.'
	},
	{
		keys: ['price', 'cost', 'quote', 'pricing', 'free'],
		answer: 'You can register for a free account at app.anywaste.com to get started. For tailored pricing on collections, skip hire, WEEE recycling, battery disposal, or brokerage services, contact the team directly — call +44 0203 855 2018 or email Collections@anywaste.com. Pricing is transparent with no hidden extras, and contracts are flexible with no long-term tie-ins for most services.'
	},
	{
		keys: ['support', 'help', 'issue', 'problem', 'contact'],
		answer: 'For support or sales enquiries, call the AnyWaste team on +44 0203 855 2018 or email Collections@anywaste.com. You can also log in to your account at app.anywaste.com for platform help. The team is UK-based and focused on being your single point of contact for all waste management needs.'
	},
	{
		keys: ['login', 'register', 'account', 'app', 'sign in'],
		answer: 'Log in or register your free account at app.anywaste.com. The platform supports separate logins for waste producers, recyclers, carriers, brokers, and drivers — each with a tailored dashboard and feature set for their role.'
	},
	{
		keys: ['social', 'linkedin', 'facebook', 'twitter', 'youtube', 'news'],
		answer: 'Follow AnyWaste on LinkedIn, Facebook, Twitter, and YouTube for the latest news, platform updates, and industry insights. Find all links at the bottom of anywaste.com, or visit the News section of the website.'
	}
];

function getChatbotReply(raw) {
	const norm = raw.toLowerCase();

	let bestEntry = null;
	let bestScore = 0;

	for (const entry of FAQ) {
		const matchCount = entry.keys.filter(k => norm.includes(k)).length;
		if (matchCount > bestScore) {
			bestScore = matchCount;
			bestEntry = entry;
		}
	}

	/* Only return a match if at least one keyword was found */
	if (bestScore > 0 && bestEntry) return bestEntry.answer;

	return "I can help with questions about AnyWaste's platform, waste services, compliance, collections, WEEE recycling, battery disposal, our team, or getting started. Try asking about any of those topics, or call us on +44 0203 855 2018.";
}

/* ── Custom cursor ────────────────────────────────────────── */
let cursorPointerX = 0, cursorPointerY = 0;
let cursorRenderX  = 0, cursorRenderY  = 0;
let cursorFrame    = null;

const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);
const isCoarse = () => window.matchMedia('(pointer:coarse)').matches;

function getCursorText(el) {
	if (!el) return 'Explore';
	const explicit = el.getAttribute('data-cursor') || el.getAttribute('aria-label');
	if (explicit) return explicit;
	const text = el.textContent.replace(/\s+/g, ' ').trim();
	return text ? text.slice(0, 32) : 'Explore';
}

function renderCursor() {
	if (!cursor) return;
	cursorRenderX += (cursorPointerX - cursorRenderX) * 0.22;
	cursorRenderY += (cursorPointerY - cursorRenderY) * 0.22;
	const rect   = cursor.getBoundingClientRect();
	const active = cursor.classList.contains('is-active');
	const x = clamp(cursorRenderX + (active ? 16 : 0), 8, window.innerWidth  - rect.width  - 8);
	const y = clamp(cursorRenderY + (active ? -18 : 0), 8, window.innerHeight - rect.height - 8);
	cursor.style.transform = `translate3d(${x}px,${y}px,0)`;
	const moving =
		Math.abs(cursorPointerX - cursorRenderX) > 0.25 ||
		Math.abs(cursorPointerY - cursorRenderY) > 0.25;
	cursorFrame = moving ? requestAnimationFrame(renderCursor) : null;
}

document.addEventListener('pointermove', e => {
	if (isCoarse()) return;
	cursorPointerX = e.clientX;
	cursorPointerY = e.clientY;
	cursor?.classList.add('is-visible');
	if (!cursorFrame) cursorFrame = requestAnimationFrame(renderCursor);
});

document.addEventListener('pointerover', e => {
	if (isCoarse()) { cursor?.classList.remove('is-active'); return; }
	const t = e.target.closest('a,button,input');
	if (!t) { cursor?.classList.remove('is-active'); return; }
	if (cursorLabel) cursorLabel.textContent = getCursorText(t);
	cursor?.classList.add('is-active');
});

document.addEventListener('pointerleave', () =>
	cursor?.classList.remove('is-visible', 'is-active')
);

document.addEventListener('pointerdown', () => {
	cursorDot?.animate(
		[{ transform: 'scale(1)' }, { transform: 'scale(0.82)' }, { transform: 'scale(1)' }],
		{ duration: 160, easing: 'ease-out' }
	);
});

/* ── Announcement bar ─────────────────────────────────────── */
announcementClose?.addEventListener('click', () => {
	announcementBar?.setAttribute('hidden', '');
	document.body.classList.add('announcement-closed');
	updateScrollButton();
});

/* ── Navbar: hide on scroll down, show on scroll up ──────── */
let lastScrollY   = window.scrollY;
let scrollTicking = false;

function handleNavScroll() {
	const current  = window.scrollY;
	const delta    = current - lastScrollY;
	const scrolled = current > 80;
	if      (delta > 4  && scrolled) siteHeader?.classList.add('nav-hidden');
	else if (delta < -4)             siteHeader?.classList.remove('nav-hidden');
	lastScrollY   = current;
	scrollTicking = false;
}

window.addEventListener('scroll', () => {
	if (!scrollTicking) {
		requestAnimationFrame(handleNavScroll);
		scrollTicking = true;
	}
}, { passive: true });

/* ── Desktop dropdowns: hover-driven ─────────────────────── */
function closeDesktopMenus(except) {
	desktopMenus.forEach(menu => {
		const btn = menu.querySelector('.nav-menu-button');
		const on  = menu === except;
		menu.dataset.open = String(on);
		btn.setAttribute('aria-expanded', String(on));
	});
}

desktopMenus.forEach(menu => {
	let timer = null;
	menu.addEventListener('mouseenter', () => {
		clearTimeout(timer);
		closeDesktopMenus(menu);
	});
	menu.addEventListener('mouseleave', () => {
		timer = setTimeout(() => closeDesktopMenus(null), 120);
	});
});

/* Keyboard / click accessibility fallback */
desktopMenuButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		const parent = btn.closest('.has-menu');
		const isOpen = parent.dataset.open === 'true';
		closeDesktopMenus(isOpen ? null : parent);
	});
});

document.addEventListener('click', e => {
	if (!e.target.closest('.has-menu')) closeDesktopMenus(null);
});

/* ── Mobile menu ──────────────────────────────────────────── */
let mobileBackdropTimer = null;

function setMobileMenuState(isOpen) {
	if (!mobileMenuButton || !mobileMenu || !mobileMenuBackdrop) return;
	clearTimeout(mobileBackdropTimer);
	mobileBackdropTimer = null;

	mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
	mobileMenu.classList.toggle('is-open', isOpen);
	mobileMenu.setAttribute('aria-hidden', String(!isOpen));
	document.body.classList.toggle('menu-open', isOpen);

	if (isOpen) {
		mobileMenuBackdrop.hidden = false;
		mobileMenuBackdrop.classList.add('is-visible');
	} else {
		mobileMenuBackdrop.classList.remove('is-visible');
		mobileBackdropTimer = setTimeout(() => {
			mobileMenuBackdrop.hidden = true;
			mobileBackdropTimer = null;
		}, 200);
	}
}

/* Hamburger is the sole toggle — acts as close when open */
mobileMenuButton?.addEventListener('click', () => {
	setMobileMenuState(mobileMenuButton.getAttribute('aria-expanded') !== 'true');
});

mobileMenuBackdrop?.addEventListener('click', () => setMobileMenuState(false));

mobileMenu?.querySelectorAll('a').forEach(a =>
	a.addEventListener('click', () => setMobileMenuState(false))
);

mobileSubmenuBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		const isOpen = btn.getAttribute('aria-expanded') === 'true';
		mobileSubmenuBtns.forEach(b => b.setAttribute('aria-expanded', 'false'));
		btn.setAttribute('aria-expanded', String(!isOpen));
	});
});

/* ── Scroll-to-top ────────────────────────────────────────── */
function updateScrollButton() {
	if (!scrollTopButton || !hero) return;
	const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
	const progress  = maxScroll > 0 ? window.scrollY / maxScroll : 0;
	const threshold = hero.offsetTop + hero.offsetHeight * 0.78;
	scrollTopButton.style.setProperty('--scroll-progress', `${progress * 360}deg`);
	scrollTopButton.classList.toggle('is-visible', window.scrollY > threshold);
}

window.addEventListener('scroll', updateScrollButton, { passive: true });
window.addEventListener('resize', updateScrollButton);
scrollTopButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
updateScrollButton();

/* ── Text-rise animation (no layout shift, no duplication) ── */
function setupTextRiseAnimation() {
	const targets = document.querySelectorAll(
		'.nav-list a, .nav-menu-button, .login-link, .announcement-bar a, ' +
		'.button, .mobile-menu a, .chatbot__suggestions button, ' +
		'.chatbot__form button, .chatbot__support-btn'
	);

	targets.forEach(el => {
		if (el.dataset.textRiseReady === 'true') return;

		const directText = Array.from(el.childNodes)
			.filter(n => n.nodeType === Node.TEXT_NODE)
			.map(n => n.textContent)
			.join(' ')
			.replace(/\s+/g, ' ')
			.trim();

		if (!directText) return;

		if (!el.dataset.cursor) el.dataset.cursor = directText;
		el.dataset.textRiseReady = 'true';

		/* Remove raw text nodes */
		Array.from(el.childNodes)
			.filter(n => n.nodeType === Node.TEXT_NODE)
			.forEach(n => n.remove());

		/* Stacked wrapper — both spans share the same grid cell */
		const wrap = document.createElement('span');
		wrap.className = 'text-rise__wrap';
		wrap.setAttribute('aria-hidden', 'true');

		const curr = document.createElement('span');
		curr.className   = 'text-rise__current';
		curr.textContent = directText;

		const hov = document.createElement('span');
		hov.className   = 'text-rise__hover';
		hov.textContent = directText;

		wrap.append(curr, hov);
		el.prepend(wrap);

		if (!el.querySelector('.sr-only')) {
			const lbl = document.createElement('span');
			lbl.className   = 'sr-only';
			lbl.textContent = directText;
			el.append(lbl);
		}

		el.classList.add('text-rise');
	});
}

setupTextRiseAnimation();

/* ── Chatbot state ────────────────────────────────────────── */
let chatIsExpanded   = false;
let chatIsMinimised  = false;

function appendMessage(content, sender, isTyping = false) {
	if (!chatbotMessages) return null;
	const li = document.createElement('li');
	li.className = `chatbot__message chatbot__message--${sender}`;
	if (isTyping) {
		li.innerHTML = '<span class="chatbot__typing"><span></span><span></span><span></span></span>';
	} else {
		li.textContent = content;
	}
	chatbotMessages.appendChild(li);
	chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
	return li;
}

function handleChatSubmission(raw) {
	const msg = raw.trim();
	if (!msg) return;
	appendMessage(msg, 'user');
	const typing = appendMessage('', 'bot', true);
	const reply  = getChatbotReply(msg);
	setTimeout(() => {
		if (typing) typing.textContent = reply;
		chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
	}, 650);
}

chatbotForm?.addEventListener('submit', e => {
	e.preventDefault();
	if (!chatbotInput) return;
	handleChatSubmission(chatbotInput.value);
	chatbotInput.value = '';
});

suggestionBtns.forEach(btn =>
	btn.addEventListener('click', () =>
		handleChatSubmission(btn.dataset.prompt || btn.textContent || '')
	)
);

supportBtn?.addEventListener('click', () =>
	handleChatSubmission('support help contact phone')
);

/* Open / close chatbot */
function setChatbotOpen(open) {
	chatbot?.classList.toggle('is-open', open);
	chatbot?.setAttribute('aria-hidden', String(!open));
	chatbotLauncher?.classList.toggle('is-hidden', open);
	chatbotLauncher?.setAttribute('aria-expanded', String(open));
	if (open) chatbotInput?.focus({ preventScroll: true });
}

chatbotLauncher?.addEventListener('click', () => {
	/* If minimised, restore panel */
	if (chatIsMinimised) {
		chatIsMinimised = false;
		chatbotLauncher.classList.remove('is-minimised');
		chatbot?.classList.remove('is-minimised');
		/* Ensure panel is open */
		chatbot?.classList.add('is-open');
		chatbot?.setAttribute('aria-hidden', 'false');
		chatbotLauncher.classList.add('is-hidden');
		chatbotLauncher.setAttribute('aria-expanded', 'true');
		chatbotInput?.focus({ preventScroll: true });
		return;
	}
	/* Normal open */
	chatIsExpanded = false;
	chatbot?.classList.remove('is-expanded');
	setChatbotOpen(true);
});

/* ── Expand: makes panel taller ─────────────────────────── */
const EXPAND_ICON = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`;
const SHRINK_ICON = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/></svg>`;
const MIN_LINE    = `<svg width="12" height="2" viewBox="0 0 12 2" fill="currentColor" aria-hidden="true"><rect width="12" height="2" rx="1"/></svg>`;

chatbotExpandBtn?.addEventListener('click', () => {
	if (chatIsMinimised) return; /* guard */
	chatIsExpanded = !chatIsExpanded;
	chatbot?.classList.toggle('is-expanded', chatIsExpanded);
	if (chatbotExpandBtn) {
		chatbotExpandBtn.setAttribute('aria-label', chatIsExpanded ? 'Shrink chat' : 'Expand chat');
		chatbotExpandBtn.innerHTML = chatIsExpanded ? SHRINK_ICON : EXPAND_ICON;
	}
});

/* ── Minimise: hide panel, show launcher as restore ──────── */
chatbotMinBtn?.addEventListener('click', () => {
	/* Exit expand first */
	if (chatIsExpanded) {
		chatIsExpanded = false;
		chatbot?.classList.remove('is-expanded');
		if (chatbotExpandBtn) { chatbotExpandBtn.setAttribute('aria-label', 'Expand chat'); chatbotExpandBtn.innerHTML = EXPAND_ICON; }
	}
	chatIsMinimised = true;
	/* Hide the panel */
	chatbot?.classList.add('is-minimised');
	chatbot?.setAttribute('aria-hidden', 'true');
	chatbot?.classList.remove('is-open');
	/* Show launcher so user can click to restore */
	chatbotLauncher?.classList.remove('is-hidden');
	chatbotLauncher?.classList.add('is-minimised');
	chatbotLauncher?.setAttribute('aria-expanded', 'false');
});

/* ── Close: show confirmation modal ───────────────────────── */
chatbotCloseBtn?.addEventListener('click', () => {
	endChatModal?.classList.add('is-visible');
});

endChatConfirm?.addEventListener('click', () => {
	endChatModal?.classList.remove('is-visible');
	/* Reset all state */
	chatIsExpanded  = false;
	chatIsMinimised = false;
	chatbot?.classList.remove('is-expanded', 'is-minimised');
	chatbotLauncher?.classList.remove('is-minimised');
	if (chatbotExpandBtn) { chatbotExpandBtn.setAttribute('aria-label', 'Expand chat'); chatbotExpandBtn.innerHTML = EXPAND_ICON; }
	if (chatbotMinBtn)    { chatbotMinBtn.setAttribute('aria-label', 'Minimise chat'); chatbotMinBtn.innerHTML = MIN_LINE; }
	/* Reset messages */
	if (chatbotMessages) {
		chatbotMessages.innerHTML = '<li class="chatbot__message chatbot__message--bot">Hi! 👋 How can I help you today? Ask me about collections, compliance, or anything AnyWaste related.</li>';
	}
	setChatbotOpen(false);
});

endChatCancel?.addEventListener('click', () => {
	endChatModal?.classList.remove('is-visible');
});

/* Escape: dismiss modal first, then collapse expanded → restore minimised → close */
window.addEventListener('keydown', e => {
	if (e.key !== 'Escape') return;
	if (endChatModal?.classList.contains('is-visible')) {
		endChatModal.classList.remove('is-visible');
		return;
	}
	setMobileMenuState(false);
	closeDesktopMenus(null);
	if (chatIsExpanded) {
		chatIsExpanded = false;
		chatbot?.classList.remove('is-expanded');
		if (chatbotExpandBtn) { chatbotExpandBtn.setAttribute('aria-label', 'Expand chat'); chatbotExpandBtn.innerHTML = EXPAND_ICON; }
	} else if (chatIsMinimised) {
		chatIsMinimised = false;
		chatbot?.classList.remove('is-minimised');
		chatbotLauncher?.classList.remove('is-minimised');
		setChatbotOpen(true);
	} else {
		chatbotLauncher?.classList.remove('is-minimised');
		setChatbotOpen(false);
	}
});