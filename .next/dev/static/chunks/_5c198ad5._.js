(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatNumber",
    ()=>formatNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatNumber(n, digits = 2) {
    if (n === null || n === undefined || Number.isNaN(n)) return "-";
    const abs = Math.abs(n);
    if (abs >= 1000) return n.toFixed(0);
    if (abs >= 10) return n.toFixed(digits);
    if (abs >= 1) return n.toFixed(digits);
    return n.toFixed(Math.max(digits, 3));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[transform,background,box-shadow,color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-[0_10px_40px_-12px_color-mix(in_oklch,var(--primary)_55%,transparent)] hover:brightness-110",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
            outline: "border border-border bg-transparent hover:bg-secondary/60 text-foreground",
            ghost: "hover:bg-secondary/60 text-foreground",
            destructive: "bg-destructive text-destructive-foreground hover:brightness-110",
            link: "text-primary underline-offset-4 hover:underline",
            emerald: "bg-accent text-accent-foreground hover:brightness-110 shadow-[0_10px_40px_-12px_color-mix(in_oklch,var(--accent)_55%,transparent)]"
        },
        size: {
            default: "h-10 px-5 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-12 rounded-md px-8 text-base",
            xl: "h-14 rounded-lg px-10 text-base",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 43,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://mtxcvftldflpwnetqrds.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10eGN2ZnRsZGZscHduZXRxcmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMTEyMzgsImV4cCI6MjA5Mjg4NzIzOH0.rH8uY6WEh_rGt2eNqtJJtZWcoB3pZk8bSl61_8Go5Sk"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteNav",
    ()=>SiteNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const LINKS = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/predictor",
        label: "Predictor"
    },
    {
        href: "/dashboard",
        label: "Dashboard"
    },
    {
        href: "/insights",
        label: "Insights"
    },
    {
        href: "/chat",
        label: "Chat"
    }
];
function SiteNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteNav.useEffect": ()=>{
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
            supabase.auth.getUser().then({
                "SiteNav.useEffect": ({ data })=>{
                    setEmail(data.user?.email ?? null);
                }
            }["SiteNav.useEffect"]);
            const { data: sub } = supabase.auth.onAuthStateChange({
                "SiteNav.useEffect": (_ev, session)=>{
                    setEmail(session?.user?.email ?? null);
                }
            }["SiteNav.useEffect"]);
            return ({
                "SiteNav.useEffect": ()=>sub.subscription.unsubscribe()
            })["SiteNav.useEffect"];
        }
    }["SiteNav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteNav.useEffect": ()=>{
            const onScroll = {
                "SiteNav.useEffect.onScroll": ()=>setScrolled(window.scrollY > 12)
            }["SiteNav.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "SiteNav.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["SiteNav.useEffect"];
        }
    }["SiteNav.useEffect"], []);
    async function signOut() {
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        await supabase.auth.signOut();
        router.push("/");
        router.refresh();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("sticky top-0 z-40 w-full transition-all duration-300", scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-xl" : "bg-transparent"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-lg shadow-primary/30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/site-nav.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/site-nav.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-serif text-lg font-semibold tracking-tight",
                            children: "MetalCycle"
                        }, void 0, false, {
                            fileName: "[project]/components/site-nav.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site-nav.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden items-center gap-1 md:flex",
                    children: LINKS.map((link)=>{
                        const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-md px-3 py-1.5 text-sm transition-colors", active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"),
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/components/site-nav.tsx",
                            lineNumber: 76,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/site-nav.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: email ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden text-xs text-muted-foreground md:inline",
                                children: email
                            }, void 0, false, {
                                fileName: "[project]/components/site-nav.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: signOut,
                                "aria-label": "Sign out",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-nav.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/site-nav.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                variant: "ghost",
                                size: "sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/auth/login",
                                    children: "Sign in"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-nav.tsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/site-nav.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                asChild: true,
                                size: "sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/auth/sign-up",
                                    children: "Get started"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-nav.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/site-nav.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/components/site-nav.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/site-nav.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site-nav.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(SiteNav, "k/maOEkwKT4qF2dHTl+VEB7Wx/E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SiteNav;
var _c;
__turbopack_context__.k.register(_c, "SiteNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Hero() {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Hero.useEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        defaults: {
                            ease: "power3.out"
                        }
                    });
                    tl.from(".hero-eyebrow", {
                        y: 20,
                        opacity: 0,
                        duration: 0.6
                    }).from(".hero-title-line", {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.08
                    }, "-=0.3").from(".hero-sub", {
                        y: 20,
                        opacity: 0,
                        duration: 0.6
                    }, "-=0.4").from(".hero-cta", {
                        y: 16,
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.08
                    }, "-=0.3").from(".hero-stat", {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                        stagger: 0.1
                    }, "-=0.2").from(".hero-visual", {
                        scale: 0.92,
                        opacity: 0,
                        duration: 1.1,
                        ease: "power2.out"
                    }, "-=1.2");
                    // Floating ember animation
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".ember", {
                        y: -20,
                        x: "random(-10, 10)",
                        opacity: 0,
                        duration: "random(3, 6)",
                        repeat: -1,
                        ease: "sine.inOut",
                        stagger: {
                            each: 0.4,
                            from: "random",
                            repeat: -1
                        }
                    });
                    // Parallax on mouse move
                    const onMove = {
                        "Hero.useEffect.ctx.onMove": (e)=>{
                            const x = (e.clientX / window.innerWidth - 0.5) * 12;
                            const y = (e.clientY / window.innerHeight - 0.5) * 12;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".hero-visual", {
                                x,
                                y,
                                duration: 0.8,
                                ease: "power2.out"
                            });
                        }
                    }["Hero.useEffect.ctx.onMove"];
                    window.addEventListener("mousemove", onMove);
                    return ({
                        "Hero.useEffect.ctx": ()=>window.removeEventListener("mousemove", onMove)
                    })["Hero.useEffect.ctx"];
                }
            }["Hero.useEffect.ctx"], rootRef);
            return ({
                "Hero.useEffect": ()=>ctx.revert()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: rootRef,
        className: "relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/landing/hero.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-10 right-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/landing/hero.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-primary/10 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/landing/hero.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/landing/hero.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 -z-10",
                children: Array.from({
                    length: 18
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ember absolute h-1 w-1 rounded-full bg-primary/80 shadow-[0_0_12px_rgba(234,120,52,0.8)]",
                        style: {
                            left: `${i * 53 % 100}%`,
                            top: `${40 + i * 27 % 55}%`
                        }
                    }, i, false, {
                        fileName: "[project]/components/landing/hero.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/landing/hero.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-3 w-3 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/landing/hero.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    "Expert system for metals & circularity"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/landing/hero.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hero-title-line block",
                                        children: "From ore to"
                                    }, void 0, false, {
                                        fileName: "[project]/components/landing/hero.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hero-title-line block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent",
                                            children: "circular impact"
                                        }, void 0, false, {
                                            fileName: "[project]/components/landing/hero.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/landing/hero.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hero-title-line block text-foreground/80",
                                        children: "in one click."
                                    }, void 0, false, {
                                        fileName: "[project]/components/landing/hero.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/landing/hero.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-sub mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty",
                                children: "MetalCycle predicts the full life-cycle footprint of 20 metals across 42 parameters. Enter what you know — our expert system intelligently estimates the rest."
                            }, void 0, false, {
                                fileName: "[project]/components/landing/hero.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        size: "lg",
                                        className: "hero-cta",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/predictor",
                                            children: [
                                                "Run a prediction",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "ml-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/landing/hero.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/landing/hero.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/landing/hero.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        size: "lg",
                                        variant: "outline",
                                        className: "hero-cta",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/auth/sign-up",
                                            children: "Create account"
                                        }, void 0, false, {
                                            fileName: "[project]/components/landing/hero.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/landing/hero.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/landing/hero.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8",
                                children: [
                                    {
                                        label: "Metals supported",
                                        value: "20"
                                    },
                                    {
                                        label: "Parameters modeled",
                                        value: "42"
                                    },
                                    {
                                        label: "Production routes",
                                        value: "65+"
                                    }
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-stat",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-xs uppercase tracking-wider text-muted-foreground",
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/landing/hero.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 font-serif text-3xl font-semibold text-foreground",
                                                children: s.value
                                            }, void 0, false, {
                                                fileName: "[project]/components/landing/hero.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, s.label, true, {
                                        fileName: "[project]/components/landing/hero.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/landing/hero.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/landing/hero.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-visual relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-primary/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/hero-mining.jpg",
                                    alt: "Molten copper flowing in an industrial mining facility",
                                    fill: true,
                                    priority: true,
                                    sizes: "(min-width: 1024px) 40vw, 90vw",
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/hero.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/hero.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-6 left-6 right-6 rounded-xl border border-border/60 bg-card/90 p-4 backdrop-blur-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-xs text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Live prediction · Copper"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/landing/hero.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1 text-accent",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "h-1.5 w-1.5 rounded-full bg-accent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/landing/hero.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 19
                                                        }, this),
                                                        "streaming"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/landing/hero.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/landing/hero.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 grid grid-cols-3 gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] uppercase tracking-wider text-muted-foreground",
                                                            children: "GWP"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/landing/hero.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-serif text-xl font-semibold",
                                                            children: "4.32"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/landing/hero.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "kg CO₂/kg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/landing/hero.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/landing/hero.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] uppercase tracking-wider text-muted-foreground",
                                                            children: "Circularity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/landing/hero.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-serif text-xl font-semibold text-accent",
                                                            children: "0.71"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/landing/hero.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "index"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/landing/hero.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/landing/hero.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] uppercase tracking-wider text-muted-foreground",
                                                            children: "Recycled"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/landing/hero.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-serif text-xl font-semibold",
                                                            children: "62%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/landing/hero.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "content"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/landing/hero.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/landing/hero.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/landing/hero.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/landing/hero.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/landing/hero.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/landing/hero.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/landing/hero.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/landing/hero.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(Hero, "Bbi/gSzGuaeygbnzN31K04tsrQ0=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/lca/schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Complete schema for the 42-column LCA predictor backend.
 * Derived from: https://huggingface.co/spaces/khushal-grover2005/LCA_predictor
 */ __turbopack_context__.s([
    "ALL_PRODUCTION_ROUTES",
    ()=>ALL_PRODUCTION_ROUTES,
    "APPLICATIONS",
    ()=>APPLICATIONS,
    "CARBON_INTENSITY_CATEGORIES",
    ()=>CARBON_INTENSITY_CATEGORIES,
    "CIRCULAR_FLOW_TYPES",
    ()=>CIRCULAR_FLOW_TYPES,
    "CO2_CAPTURE",
    ()=>CO2_CAPTURE,
    "END_OF_LIFE_SCENARIOS",
    ()=>END_OF_LIFE_SCENARIOS,
    "ENERGY_MIX",
    ()=>ENERGY_MIX,
    "FIELDS_BY_KEY",
    ()=>FIELDS_BY_KEY,
    "FIELD_GROUPS",
    ()=>FIELD_GROUPS,
    "LCA_FIELDS",
    ()=>LCA_FIELDS,
    "LIFE_CYCLE_STAGES",
    ()=>LIFE_CYCLE_STAGES,
    "METALS",
    ()=>METALS,
    "PATHWAY_TYPES",
    ()=>PATHWAY_TYPES,
    "PRODUCTION_ROUTES_BY_METAL",
    ()=>PRODUCTION_ROUTES_BY_METAL,
    "RECOMMENDED_ACTIONS",
    ()=>RECOMMENDED_ACTIONS,
    "REGIONS",
    ()=>REGIONS,
    "ROUTE_TYPES",
    ()=>ROUTE_TYPES,
    "TRANSPORT_MODES",
    ()=>TRANSPORT_MODES,
    "getRoutesForMetal",
    ()=>getRoutesForMetal
]);
const METALS = [
    "Aluminium",
    "Antimony",
    "Cadmium",
    "Chromium",
    "Cobalt",
    "Copper",
    "Gold",
    "Iron",
    "Lead",
    "Lithium",
    "Magnesium",
    "Manganese",
    "Nickel",
    "Platinum",
    "Silver",
    "Steel",
    "Tin",
    "Titanium",
    "Tungsten",
    "Zinc"
];
const REGIONS = [
    "Africa",
    "Asia",
    "Australia",
    "Europe",
    "Global",
    "Middle East",
    "North America",
    "South America"
];
const ENERGY_MIX = [
    "Coal-Dominant",
    "Gas-Dominant",
    "Hydro-Dominant",
    "Hydro/Renewables",
    "Mixed",
    "Nuclear-Heavy",
    "Renewables-Heavy",
    "Solar/Wind",
    "Unknown"
];
const TRANSPORT_MODES = [
    "Rail",
    "Road",
    "Sea",
    "Air",
    "Pipeline",
    "Multi-modal"
];
const END_OF_LIFE_SCENARIOS = [
    "Recycled",
    "Reused",
    "Landfilled",
    "Incinerated",
    "Remanufactured",
    "Open Dump",
    "Downcycled"
];
const CARBON_INTENSITY_CATEGORIES = [
    "Low",
    "Medium",
    "High",
    "Very High",
    "Ultra High"
];
const ROUTE_TYPES = [
    "Primary",
    "Secondary",
    "Hybrid"
];
const LIFE_CYCLE_STAGES = [
    "Extraction",
    "Refining",
    "Smelting",
    "Manufacturing",
    "Use-Phase",
    "End-of-Life",
    "Full-Cycle"
];
const PATHWAY_TYPES = [
    "Linear",
    "Circular",
    "Hybrid",
    "Regenerative"
];
const CIRCULAR_FLOW_TYPES = [
    "Closed-Loop",
    "Open-Loop",
    "Cascade",
    "None"
];
const CO2_CAPTURE = [
    "Yes",
    "No",
    "Partial"
];
const RECOMMENDED_ACTIONS = [
    "Increase Recycled Content",
    "Switch Energy Source",
    "Optimize Transport",
    "Improve Process Efficiency",
    "Extend Product Lifespan",
    "Adopt Circular Design",
    "Reduce Process Temperature",
    "Capture Process Emissions"
];
const APPLICATIONS = [
    "Aerospace",
    "Agriculture",
    "Architecture",
    "Automotive",
    "Batteries",
    "Building & Construction",
    "Catalysts",
    "Chemicals",
    "Construction",
    "Consumer Electronics",
    "Defense",
    "Electrical Wiring",
    "Electronics",
    "Energy Storage",
    "Food Packaging",
    "Green Energy",
    "Healthcare",
    "Heavy Machinery",
    "Industrial Equipment",
    "Jewelry",
    "Machinery",
    "Marine",
    "Medical Devices",
    "Military",
    "Mining Equipment",
    "Oil & Gas",
    "Packaging",
    "Pharmaceuticals",
    "Plating & Coatings",
    "Power Generation",
    "Railways",
    "Renewable Energy",
    "Shipbuilding",
    "Solar Panels",
    "Sports Equipment",
    "Steel Alloys",
    "Structural",
    "Telecommunications",
    "Tools",
    "Transportation",
    "Utilities",
    "Wind Turbines",
    "Wiring"
];
const PRODUCTION_ROUTES_BY_METAL = {
    Aluminium: [
        "Primary - Bayer-Hall-Heroult",
        "Primary - Inert Anode",
        "Secondary - Recycled Scrap",
        "Hybrid - Mixed Route"
    ],
    Antimony: [
        "Primary - Volatilization Roasting",
        "Primary - Iron Precipitation",
        "Secondary - Recycled from Batteries"
    ],
    Cadmium: [
        "Primary - By-product of Zinc",
        "Secondary - Battery Recycling"
    ],
    Chromium: [
        "Primary - Aluminothermic Reduction",
        "Primary - Electrolytic",
        "Secondary - Stainless Scrap Recycling"
    ],
    Cobalt: [
        "Primary - Hydrometallurgical",
        "Primary - Pyrometallurgical",
        "Secondary - Battery Recycling",
        "Secondary - Superalloy Scrap"
    ],
    Copper: [
        "Primary - Pyrometallurgical",
        "Primary - Hydrometallurgical (SX-EW)",
        "Secondary - Recycled Scrap",
        "Hybrid - Mixed Route"
    ],
    Gold: [
        "Primary - Cyanidation",
        "Primary - Amalgamation",
        "Secondary - E-waste Recycling",
        "Secondary - Jewelry Recycling"
    ],
    Iron: [
        "Primary - Blast Furnace",
        "Primary - Direct Reduction",
        "Secondary - Scrap-based EAF"
    ],
    Lead: [
        "Primary - Smelting",
        "Secondary - Battery Recycling"
    ],
    Lithium: [
        "Primary - Brine Extraction",
        "Primary - Hard Rock (Spodumene)",
        "Secondary - Battery Recycling"
    ],
    Magnesium: [
        "Primary - Pidgeon Process",
        "Primary - Electrolytic",
        "Secondary - Recycled Scrap"
    ],
    Manganese: [
        "Primary - Electrolytic",
        "Primary - Thermal",
        "Secondary - Scrap Recycling"
    ],
    Nickel: [
        "Primary - Pyrometallurgical",
        "Primary - Hydrometallurgical",
        "Secondary - Stainless Scrap",
        "Secondary - Battery Recycling"
    ],
    Platinum: [
        "Primary - PGM Refining",
        "Secondary - Catalytic Converter Recycling",
        "Secondary - Industrial Scrap"
    ],
    Silver: [
        "Primary - Parkes Process",
        "Primary - Cyanidation",
        "Secondary - E-waste Recycling",
        "Secondary - Photographic Recycling"
    ],
    Steel: [
        "Primary - Basic Oxygen Furnace",
        "Primary - Direct Reduction + EAF",
        "Secondary - Electric Arc Furnace",
        "Hybrid - Mixed Route"
    ],
    Tin: [
        "Primary - Smelting",
        "Secondary - Solder Recycling"
    ],
    Titanium: [
        "Primary - Kroll Process",
        "Primary - Hunter Process",
        "Secondary - Aerospace Scrap"
    ],
    Tungsten: [
        "Primary - Hydrometallurgical",
        "Secondary - Hardmetal Recycling"
    ],
    Zinc: [
        "Primary - Electrolytic",
        "Primary - Pyrometallurgical",
        "Secondary - Galvanized Scrap Recycling"
    ]
};
const ALL_PRODUCTION_ROUTES = Array.from(new Set(Object.values(PRODUCTION_ROUTES_BY_METAL).flat())).sort();
const LCA_FIELDS = [
    // ── Identity (required) ──
    {
        key: "metal",
        label: "Metal",
        group: "identity",
        kind: "categorical",
        options: METALS,
        required: true,
        description: "The target metal for life-cycle analysis."
    },
    {
        key: "production_route",
        label: "Production Route",
        group: "identity",
        kind: "categorical",
        dependsOn: "metal",
        required: true,
        description: "Manufacturing pathway. Options depend on the selected metal."
    },
    {
        key: "year",
        label: "Year",
        group: "identity",
        kind: "integer",
        min: 1990,
        max: 2030,
        step: 1,
        description: "Reference year for the analysis.",
        placeholder: "2024"
    },
    {
        key: "region",
        label: "Region",
        group: "identity",
        kind: "categorical",
        options: REGIONS,
        description: "Geographic region of production."
    },
    {
        key: "application",
        label: "Application",
        group: "identity",
        kind: "categorical",
        options: APPLICATIONS,
        description: "End-use application of the metal."
    },
    {
        key: "route_type",
        label: "Route Type",
        group: "identity",
        kind: "categorical",
        options: ROUTE_TYPES,
        description: "Primary, secondary, or hybrid production."
    },
    {
        key: "life_cycle_stage",
        label: "Life-Cycle Stage",
        group: "identity",
        kind: "categorical",
        options: LIFE_CYCLE_STAGES,
        description: "Which life-cycle stage is being assessed."
    },
    // ── Process parameters ──
    {
        key: "energy_mj_per_kg",
        label: "Energy Use",
        group: "process",
        kind: "number",
        unit: "MJ/kg",
        min: 0,
        max: 500,
        description: "Energy consumed per kg of metal produced."
    },
    {
        key: "energy_mix",
        label: "Energy Mix",
        group: "process",
        kind: "categorical",
        options: ENERGY_MIX,
        description: "Dominant energy source of production."
    },
    {
        key: "process_temperature_celsius",
        label: "Process Temperature",
        group: "process",
        kind: "number",
        unit: "°C",
        min: 0,
        max: 3000,
        description: "Peak process temperature."
    },
    {
        key: "batch_size_tonnes",
        label: "Batch Size",
        group: "process",
        kind: "number",
        unit: "tonnes",
        min: 0,
        max: 100000,
        description: "Typical production batch size."
    },
    {
        key: "facility_age_years",
        label: "Facility Age",
        group: "process",
        kind: "number",
        unit: "years",
        min: 0,
        max: 150,
        description: "Age of the production facility."
    },
    {
        key: "material_efficiency_score",
        label: "Material Efficiency Score",
        group: "process",
        kind: "number",
        min: 0,
        max: 100,
        description: "0–100 score for material usage efficiency."
    },
    {
        key: "waste_generated_kg_per_kg",
        label: "Waste Generated",
        group: "process",
        kind: "number",
        unit: "kg/kg",
        min: 0,
        max: 100,
        description: "Kg of waste per kg of metal produced."
    },
    {
        key: "co2_capture_used",
        label: "CO₂ Capture Used",
        group: "process",
        kind: "categorical",
        options: CO2_CAPTURE,
        description: "Whether CO₂ capture technology is applied."
    },
    // ── Transport ──
    {
        key: "transport_mode",
        label: "Transport Mode",
        group: "transport",
        kind: "categorical",
        options: TRANSPORT_MODES,
        description: "Dominant mode of transport."
    },
    {
        key: "transport_distance_km",
        label: "Transport Distance",
        group: "transport",
        kind: "number",
        unit: "km",
        min: 0,
        max: 50000,
        description: "Distance transported from source to use."
    },
    {
        key: "transport_gwp_kg_co2_per_kg",
        label: "Transport GWP",
        group: "transport",
        kind: "number",
        unit: "kg CO₂/kg",
        min: 0,
        max: 100,
        description: "Greenhouse-gas impact from transport."
    },
    // ── Environmental impacts ──
    {
        key: "gwp_kg_co2_per_kg",
        label: "GWP (Primary)",
        group: "environmental",
        kind: "number",
        unit: "kg CO₂/kg",
        min: 0,
        max: 500,
        description: "Global warming potential per kg."
    },
    {
        key: "upstream_gwp_kg_co2",
        label: "Upstream GWP",
        group: "environmental",
        kind: "number",
        unit: "kg CO₂/kg",
        min: 0,
        max: 500,
        description: "Embedded emissions before gate."
    },
    {
        key: "downstream_gwp_kg_co2",
        label: "Downstream GWP",
        group: "environmental",
        kind: "number",
        unit: "kg CO₂/kg",
        min: 0,
        max: 500,
        description: "Emissions after the factory gate."
    },
    {
        key: "benchmark_gwp_for_metal",
        label: "Benchmark GWP",
        group: "environmental",
        kind: "number",
        unit: "kg CO₂/kg",
        min: 0,
        max: 500,
        description: "Industry benchmark for this metal."
    },
    {
        key: "emission_reduction_vs_primary_pct",
        label: "Emission Reduction vs Primary",
        group: "environmental",
        kind: "number",
        unit: "%",
        min: -100,
        max: 100,
        description: "Negative = worse than primary route."
    },
    {
        key: "carbon_intensity_category",
        label: "Carbon Intensity",
        group: "environmental",
        kind: "categorical",
        options: CARBON_INTENSITY_CATEGORIES,
        description: "Qualitative carbon intensity bucket."
    },
    {
        key: "water_use_l_per_kg",
        label: "Water Use",
        group: "environmental",
        kind: "number",
        unit: "L/kg",
        min: 0,
        max: 10000,
        description: "Freshwater consumption per kg."
    },
    {
        key: "so2_kg_per_kg",
        label: "SO₂ Emissions",
        group: "environmental",
        kind: "number",
        unit: "kg/kg",
        min: 0,
        max: 10,
        description: "Sulfur dioxide emitted per kg of metal."
    },
    {
        key: "acidification_potential",
        label: "Acidification Potential",
        group: "environmental",
        kind: "number",
        min: 0,
        max: 100,
        description: "Relative acidification score."
    },
    {
        key: "eutrophication_potential",
        label: "Eutrophication Potential",
        group: "environmental",
        kind: "number",
        min: 0,
        max: 100,
        description: "Relative eutrophication score."
    },
    {
        key: "human_toxicity_score",
        label: "Human Toxicity Score",
        group: "environmental",
        kind: "number",
        min: 0,
        max: 100,
        description: "Relative human-toxicity impact."
    },
    {
        key: "abiotic_depletion_score",
        label: "Abiotic Depletion",
        group: "environmental",
        kind: "number",
        min: 0,
        max: 100,
        description: "Relative non-renewable resource depletion."
    },
    // ── Circularity ──
    {
        key: "recycled_content_pct",
        label: "Recycled Content",
        group: "circularity",
        kind: "number",
        unit: "%",
        min: 0,
        max: 100,
        description: "Share of recycled input material."
    },
    {
        key: "global_recycling_rate_pct",
        label: "Global Recycling Rate",
        group: "circularity",
        kind: "number",
        unit: "%",
        min: 0,
        max: 100,
        description: "Current global end-of-life recycling rate."
    },
    {
        key: "eol_recovery_pct",
        label: "End-of-Life Recovery",
        group: "circularity",
        kind: "number",
        unit: "%",
        min: 0,
        max: 100,
        description: "Material recovered at end of life."
    },
    {
        key: "end_of_life_scenario",
        label: "End-of-Life Scenario",
        group: "circularity",
        kind: "categorical",
        options: END_OF_LIFE_SCENARIOS,
        description: "Most likely end-of-life pathway."
    },
    {
        key: "reuse_potential_score",
        label: "Reuse Potential",
        group: "circularity",
        kind: "number",
        min: 0,
        max: 100,
        description: "0–100 reuse potential."
    },
    {
        key: "typical_lifespan_years",
        label: "Typical Lifespan",
        group: "circularity",
        kind: "number",
        unit: "years",
        min: 0,
        max: 200,
        description: "Average product lifespan."
    },
    {
        key: "circularity_index",
        label: "Circularity Index",
        group: "circularity",
        kind: "number",
        min: 0,
        max: 1,
        step: 0.01,
        description: "Composite circularity score (0–1)."
    },
    {
        key: "pathway_type",
        label: "Pathway Type",
        group: "circularity",
        kind: "categorical",
        options: PATHWAY_TYPES,
        description: "Linear, circular, hybrid or regenerative."
    },
    {
        key: "circular_flow_type",
        label: "Circular Flow Type",
        group: "circularity",
        kind: "categorical",
        options: CIRCULAR_FLOW_TYPES,
        description: "Type of closed/open material loop."
    },
    // ── Economic / meta ──
    {
        key: "unit_price_usd_per_kg",
        label: "Unit Price",
        group: "economic",
        kind: "number",
        unit: "USD/kg",
        min: 0,
        max: 1_000_000,
        description: "Market price per kg."
    },
    {
        key: "data_completeness_score",
        label: "Data Completeness",
        group: "meta",
        kind: "number",
        min: 0,
        max: 1,
        step: 0.01,
        description: "0–1 score reflecting input completeness."
    },
    {
        key: "recommended_action",
        label: "Recommended Action",
        group: "meta",
        kind: "categorical",
        options: RECOMMENDED_ACTIONS,
        description: "Suggested improvement lever."
    }
];
const FIELD_GROUPS = [
    {
        key: "identity",
        label: "Identity",
        description: "What is being analyzed."
    },
    {
        key: "process",
        label: "Process",
        description: "Production process parameters."
    },
    {
        key: "transport",
        label: "Transport",
        description: "Logistics and distribution."
    },
    {
        key: "environmental",
        label: "Environmental",
        description: "Emissions and impact categories."
    },
    {
        key: "circularity",
        label: "Circularity",
        description: "Recycling, reuse, and end-of-life."
    },
    {
        key: "economic",
        label: "Economic",
        description: "Price and market signals."
    },
    {
        key: "meta",
        label: "Meta",
        description: "Completeness and recommendations."
    }
];
function getRoutesForMetal(metal) {
    if (!metal) return [];
    return PRODUCTION_ROUTES_BY_METAL[metal] ?? [];
}
const FIELDS_BY_KEY = Object.fromEntries(_c1 = LCA_FIELDS.map(_c = (f)=>[
        f.key,
        f
    ]));
_c2 = FIELDS_BY_KEY;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FIELDS_BY_KEY$Object.fromEntries$LCA_FIELDS.map");
__turbopack_context__.k.register(_c1, "FIELDS_BY_KEY$Object.fromEntries");
__turbopack_context__.k.register(_c2, "FIELDS_BY_KEY");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/metals-strip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MetalsStrip",
    ()=>MetalsStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lca$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/lca/schema.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function MetalsStrip() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MetalsStrip.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "MetalsStrip.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".metal-chip", {
                        opacity: 0,
                        y: 16,
                        stagger: 0.03,
                        duration: 0.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".metals-row",
                            start: "top 85%"
                        }
                    });
                }
            }["MetalsStrip.useEffect.ctx"], ref);
            return ({
                "MetalsStrip.useEffect": ()=>ctx.revert()
            })["MetalsStrip.useEffect"];
        }
    }["MetalsStrip.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "border-y border-border/60 bg-card/30 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xs uppercase tracking-[0.2em] text-muted-foreground",
                    children: "20 metals covered"
                }, void 0, false, {
                    fileName: "[project]/components/landing/metals-strip.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "metals-row mt-6 flex flex-wrap justify-center gap-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$lca$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METALS"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "metal-chip rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary",
                            children: m
                        }, m, false, {
                            fileName: "[project]/components/landing/metals-strip.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/landing/metals-strip.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/landing/metals-strip.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/landing/metals-strip.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(MetalsStrip, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = MetalsStrip;
var _c;
__turbopack_context__.k.register(_c, "MetalsStrip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/glowing-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlowingCard",
    ()=>GlowingCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function GlowingCard({ children, className }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50", "before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100", "before:bg-[radial-gradient(400px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(234,120,52,0.15),transparent_80%)]", className),
        onMouseMove: (e)=>{
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ref.current.style.setProperty("--mouse-x", `${x}px`);
            ref.current.style.setProperty("--mouse-y", `${y}px`);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-xl bg-linear-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, void 0, false, {
                fileName: "[project]/components/ui/glowing-card.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/glowing-card.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/glowing-card.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(GlowingCard, "QMBuJFIdzLIeqBcFwhMf246mjOM=");
_c = GlowingCard;
var _c;
__turbopack_context__.k.register(_c, "GlowingCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/features.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Features",
    ()=>Features
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$recycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Recycle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/recycle.js [app-client] (ecmascript) <export default as Recycle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$glowing$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/glowing-card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const FEATURES = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        title: "Expert-system imputation",
        body: "Leave any of the 42 fields empty. Our conditional imputation engine estimates them from similar metal profiles and flags every value it filled in."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: "Strict validation",
        body: "Every value is range-checked before submission. Transport distance can't be negative, percentages stay within 0–100, and routes must match the chosen metal."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"],
        title: "Full GWP breakdown",
        body: "Upstream, process, transport, and downstream emissions — all in kg CO₂ per kg of metal, benchmarked against industry baselines."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$recycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Recycle$3e$__["Recycle"],
        title: "Circularity scoring",
        body: "Composite circularity index, recycled content, end-of-life recovery, and reuse potential — scored from 0 to 1 so you can compare routes fairly."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
        title: "Sankey visualisation",
        body: "See the material flow from extraction to end-of-life. Ideal for reporting and identifying leakage points in your supply chain."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        title: "Recommended actions",
        body: "Each prediction ships with a concrete improvement lever — switch energy source, increase recycled content, or shorten transport distance."
    }
];
function Features() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Features.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Features.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".feature-card", {
                        y: 40,
                        opacity: 0,
                        duration: 0.7,
                        stagger: 0.08,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".feature-grid",
                            start: "top 80%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".feature-heading", {
                        y: 20,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".feature-heading",
                            start: "top 85%"
                        }
                    });
                }
            }["Features.useEffect.ctx"], ref);
            return ({
                "Features.useEffect": ()=>ctx.revert()
            })["Features.useEffect"];
        }
    }["Features.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative py-20 md:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "feature-heading mx-auto max-w-2xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-1.5 w-1.5 rounded-full bg-accent"
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/features.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                "How it works"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/landing/features.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl",
                            children: "An expert system, not a black box."
                        }, void 0, false, {
                            fileName: "[project]/components/landing/features.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-lg text-muted-foreground text-pretty",
                            children: "Built on a curated dataset of metal life-cycle profiles. Every estimate is auditable and every recommendation is traceable."
                        }, void 0, false, {
                            fileName: "[project]/components/landing/features.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/landing/features.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "feature-grid mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
                    children: FEATURES.map((f)=>{
                        const Icon = f.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$glowing$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlowingCard"], {
                            className: "feature-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/landing/features.tsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/features.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-5 font-serif text-xl font-semibold",
                                    children: f.title
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/features.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm leading-relaxed text-muted-foreground",
                                    children: f.body
                                }, void 0, false, {
                                    fileName: "[project]/components/landing/features.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, f.title, true, {
                            fileName: "[project]/components/landing/features.tsx",
                            lineNumber: 102,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/landing/features.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/landing/features.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/landing/features.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(Features, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Features;
var _c;
__turbopack_context__.k.register(_c, "Features");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/landing/cta.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTA",
    ()=>CTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function CTA() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CTA.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "CTA.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".cta-content > *", {
                        y: 30,
                        opacity: 0,
                        duration: 0.7,
                        stagger: 0.08,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".cta-content",
                            start: "top 80%"
                        }
                    });
                }
            }["CTA.useEffect.ctx"], ref);
            return ({
                "CTA.useEffect": ()=>ctx.revert()
            })["CTA.useEffect"];
        }
    }["CTA.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "py-20 md:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-2xl border border-border bg-card/80 p-10 md:p-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0 -z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/metal-sample.jpg",
                                alt: "",
                                fill: true,
                                sizes: "100vw",
                                className: "object-cover opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/components/landing/cta.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-card via-card/80 to-card/40"
                            }, void 0, false, {
                                fileName: "[project]/components/landing/cta.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/landing/cta.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cta-content max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl",
                                children: "Ready to measure what you're making?"
                            }, void 0, false, {
                                fileName: "[project]/components/landing/cta.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-lg text-muted-foreground text-pretty",
                                children: "Run your first prediction in under a minute. No setup required — just pick a metal and a route, and let the expert system handle the rest."
                            }, void 0, false, {
                                fileName: "[project]/components/landing/cta.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        size: "lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/predictor",
                                            children: [
                                                "Launch predictor",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "ml-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/landing/cta.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/landing/cta.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/landing/cta.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        asChild: true,
                                        size: "lg",
                                        variant: "outline",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/auth/sign-up",
                                            children: "Create free account"
                                        }, void 0, false, {
                                            fileName: "[project]/components/landing/cta.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/landing/cta.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/landing/cta.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/landing/cta.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/landing/cta.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/landing/cta.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/landing/cta.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(CTA, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = CTA;
var _c;
__turbopack_context__.k.register(_c, "CTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_5c198ad5._.js.map