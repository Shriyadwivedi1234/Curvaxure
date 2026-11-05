import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
//#region src/config/booking.ts
var industries = [
	{
		value: "construction",
		label: "Construction"
	},
	{
		value: "ecommerce",
		label: "E-commerce"
	},
	{
		value: "professional-services",
		label: "Professional services"
	},
	{
		value: "logistics",
		label: "Logistics"
	},
	{
		value: "other",
		label: "Other"
	}
];
var focusAreas = [
	{
		value: "increase-sales",
		label: "Increase sales"
	},
	{
		value: "improve-profitability",
		label: "Improve profitability"
	},
	{
		value: "control-project-costs",
		label: "Control project costs"
	},
	{
		value: "improve-marketing",
		label: "Improve marketing"
	},
	{
		value: "understand-customers",
		label: "Understand customers"
	},
	{
		value: "improve-operations",
		label: "Improve operations"
	},
	{
		value: "plan-future-growth",
		label: "Plan future growth"
	},
	{
		value: "other",
		label: "Something else"
	}
];
//#endregion
//#region src/pages/api/lead.ts
var lead_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var env = Object.assign({
	"ASSETS_PREFIX": void 0,
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SITE": "https://curvaxure.com",
	"SSR": true
}, { OS: "Windows_NT" });
var clean = (v, max) => String(v ?? "").trim().slice(0, max);
var esc = (s) => s.replace(/[&<>"']/g, (c) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
})[c]);
var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
var POST = async ({ request, redirect, clientAddress }) => {
	const f = await request.formData();
	if (clean(f.get("website"), 100)) return redirect("/thank-you", 303);
	const lead = {
		name: clean(f.get("name"), 120),
		email: clean(f.get("email"), 200).toLowerCase(),
		company: clean(f.get("company"), 160),
		industry: clean(f.get("industry"), 60),
		focus: clean(f.get("focus"), 60),
		plan: clean(f.get("plan"), 30),
		source: clean(f.get("source"), 40),
		message: clean(f.get("message"), 2e3)
	};
	if (!(lead.name.length >= 2 && EMAIL.test(lead.email) && lead.company.length >= 2 && industries.some((i) => i.value === lead.industry) && focusAreas.some((a) => a.value === lead.focus))) return redirect("/book-consultation?error=invalid", 303);
	if (env.TURNSTILE_SECRET_KEY) try {
		if (!(await (await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
			method: "POST",
			body: new URLSearchParams({
				secret: env.TURNSTILE_SECRET_KEY,
				response: clean(f.get("cf-turnstile-response"), 2048),
				remoteip: clientAddress
			})
		})).json()).success) return redirect("/book-consultation?error=spam", 303);
	} catch {
		return redirect("/book-consultation?error=server", 303);
	}
	try {
		const { error } = await createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } }).from("leads").insert(lead);
		if (error) throw error;
	} catch (e) {
		console.error("lead insert failed", e);
		return redirect("/book-consultation?error=server", 303);
	}
	try {
		if (env.RESEND_API_KEY && env.NOTIFY_EMAIL) {
			const rows = Object.entries(lead).map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><b>${k}</b></td><td>${esc(v) || "-"}</td></tr>`).join("");
			await new Resend(env.RESEND_API_KEY).emails.send({
				from: env.FROM_EMAIL ?? "Curvaxure <onboarding@resend.dev>",
				to: env.NOTIFY_EMAIL,
				replyTo: lead.email,
				subject: `New assessment request: ${lead.company}`,
				html: `<table>${rows}</table>`
			});
		}
	} catch (e) {
		console.error("notify failed", e);
	}
	return redirect("/thank-you", 303);
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/lead@_@ts
var page = () => lead_exports;
//#endregion
export { page };
