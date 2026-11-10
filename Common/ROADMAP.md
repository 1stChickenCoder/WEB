# Lộ trình 12 tháng: Từ "biết dùng React" đến kỹ sư Web vững nền tảng

> Dành cho: FE dev ~1 năm kinh nghiệm React, muốn vững FE trước rồi sang BE.
> Thời lượng: 2–3 giờ/ngày, ~6 ngày/tuần (~15 giờ/tuần, ~700 giờ/năm).
> Trọng tâm: **logic viết hàm & thuật toán, thiết kế hệ thống, quy trình xây web hoàn chỉnh, bảo mật, deploy** và **tự code được khi không có AI**.

---

## 0. Triết lý của lộ trình

1. **Nền tảng trước, framework sau.** Framework thay đổi vài năm một lần; JavaScript, HTTP, trình duyệt, SQL, mạng máy tính thì không. AI viết được code React, nhưng người hiểu *tại sao* code chạy (hoặc không chạy) mới là người được trả lương cao.
2. **Tự xây lại thứ mình đang dùng.** Tự viết `map/reduce`, router, state store, mini-React, HTTP server, rate limiter... Hiểu bằng cách làm, không phải đọc.
3. **Mỗi tháng có một dự án mốc (milestone).** Kiến thức chỉ "dính" khi được dùng trong sản phẩm thật.
4. **Viết ra những gì đã học.** Mỗi tuần một file `NOTES.md` tự tổng kết bằng lời của bạn. Không giải thích lại được = chưa hiểu.

### Quy tắc dùng AI (rất quan trọng)

| Giai đoạn | Được dùng AI? |
|---|---|
| Đọc đề, nghĩ lời giải, viết code lần đầu | ❌ Không. Tự làm ít nhất **45 phút** trước khi được tra cứu |
| Bí sau 45 phút | ⚠️ Tra tài liệu chính thống (MDN, docs) trước. Nếu hỏi AI thì chỉ hỏi **gợi ý hướng**, không xin code |
| Sau khi đã có lời giải chạy được | ✅ Dùng AI làm *reviewer*: "Code này có edge case nào sai? Có cách nào tối ưu hơn?" |
| Công việc hằng ngày ở công ty | ✅ Dùng thoải mái, nhưng phải đọc hiểu từng dòng trước khi commit |

Tắt Copilot/autocomplete AI trong thư mục repo này (VS Code: `"github.copilot.enable": { "*": false }` trong `.vscode/settings.json`).

### Khung một buổi học 2–3 giờ

| Thời lượng | Việc |
|---|---|
| 30–45 phút | Đọc lý thuyết (tài liệu trong tuần) |
| 60–90 phút | Làm bài tập / dự án (không AI) |
| 15–30 phút | Chạy test, refactor, ghi `NOTES.md` |

Mỗi tuần nghỉ 1 ngày. Nếu bị chậm, **kéo dài tuần đó** thay vì bỏ qua; hiểu sâu quan trọng hơn đúng tiến độ.

---

## Tổng quan 12 tháng

| Tháng | Chủ đề | Dự án mốc |
|---|---|---|
| **GIAI ĐOẠN 1: FRONTEND CHUYÊN SÂU** | | |
| 1 | JavaScript cốt lõi & tư duy viết hàm | Thư viện tiện ích `mini-lodash` có test đầy đủ |
| 2 | Cấu trúc dữ liệu & giải thuật + TypeScript | Bộ 60 bài thuật toán + `ts-utils` có kiểu chặt |
| 3 | Trình duyệt, mạng, Web Platform (không framework) | SPA bằng Vanilla JS: router + state store tự viết |
| 4 | React chuyên sâu & testing | `mini-react` (tự viết) + app React có test |
| 5 | Kiến trúc FE, hiệu năng, Next.js | Dashboard Next.js đạt Core Web Vitals "Good" |
| 6 | Bảo mật FE + **Capstone FE** | Sản phẩm FE hoàn chỉnh, deploy, có CI |
| **GIAI ĐOẠN 2: BACKEND & HỆ THỐNG** | | |
| 7 | Backend nền tảng với Node.js/TypeScript | REST API từ HTTP thuần → framework |
| 8 | Cơ sở dữ liệu: PostgreSQL, Redis | Thiết kế & tối ưu DB cho app đặt lịch |
| 9 | Xác thực, phân quyền, bảo mật BE | Auth service: session, JWT, OAuth2, RBAC |
| 10 | Thiết kế hệ thống (System Design) | 6 bản thiết kế + tự xây URL shortener có cache, queue |
| 11 | DevOps: Linux, Docker, CI/CD, cloud, giám sát | Pipeline deploy tự động lên VPS/cloud |
| 12 | **Capstone Fullstack** + chuẩn bị phỏng vấn | Sản phẩm fullstack production-ready + portfolio |

**Tại sao Node.js cho BE?** Bạn đã giỏi JS/TS, nên dồn sức vào *khái niệm BE* (HTTP, DB, auth, scale) thay vì học ngôn ngữ mới. Khi đã hiểu khái niệm, chuyển sang Python/Java chỉ mất vài tuần. Tháng 12 có phần tùy chọn làm lại 1 service bằng Python (FastAPI) hoặc Java (Spring Boot).

---

## GIAI ĐOẠN 1: FRONTEND CHUYÊN SÂU (Tháng 1–6)

### Tháng 1: JavaScript cốt lõi & tư duy viết hàm

Mục tiêu: viết hàm đúng, đủ edge case, dễ đọc; hiểu JS chạy thế nào bên dưới.

| Tuần | Nội dung | Bài tập chính |
|---|---|---|
| 1 | Quy trình giải bài toán, hàm thuần, Big-O, thao tác mảng/chuỗi, viết test với `node:test` | 9 hàm (`myReduce`, `chunk`, `groupBy`, `twoSum`, `deepEqual`, phân tích log...) |
| 2 | Scope, closure, hoisting, `this`, `call/apply/bind`, higher-order function | `debounce`, `throttle`, `memoize`, `once`, `curry`, `compose/pipe`, tự viết `bind` |
| 3 | Prototype, class, kế thừa, immutability, object model, `Map/Set/WeakMap` | Tự viết `EventEmitter`, `LRUCache`, `deepClone` (xử lý vòng lặp tham chiếu) |
| 4 | Event loop, microtask/macrotask, Promise, async/await, xử lý lỗi | Tự viết `MyPromise`, `promiseAll/Race/AllSettled`, `retry` với backoff, `asyncPool` giới hạn đồng thời |

- **Tài liệu:** [javascript.info](https://javascript.info) (Phần 1 toàn bộ), [You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS) (Scope & Closures, Objects & Classes), MDN, video *What the heck is the event loop anyway?* (Philip Roberts), [Loupe](http://latentflip.com/loupe) để quan sát event loop.
- **Dự án mốc:** `mini-lodash`: gom tất cả hàm của tháng thành một package có README, test coverage ≥ 90%, publish được lên npm (tùy chọn).
- **Tự kiểm tra:** Giải thích được không cần tài liệu: closure là gì & ví dụ thực tế trong React; vì sao `setTimeout(fn, 0)` chạy sau `Promise.resolve().then(fn)`.

### Tháng 2: Cấu trúc dữ liệu & giải thuật + TypeScript

Mục tiêu: nhìn bài toán là nhận ra "dạng" của nó; ước lượng được độ phức tạp.

| Tuần | Nội dung | Bài tập |
|---|---|---|
| 1 | Hash map, two pointers, sliding window, prefix sum | 15 bài LeetCode Easy/Medium theo chủ đề |
| 2 | Stack, queue, linked list, đệ quy, backtracking | 15 bài + tự viết `Stack`, `Queue`, `LinkedList` |
| 3 | Cây (BST, duyệt cây), đồ thị (BFS/DFS), heap, binary search, sắp xếp (merge/quick) | 15 bài + bài tập thực tế: render cây thư mục, tìm đường trong grid |
| 4 | TypeScript chuyên sâu: generics, narrowing, utility types, conditional/mapped types, `infer` | Viết lại `mini-lodash` bằng TS strict; giải 15 bài [type-challenges](https://github.com/type-challenges/type-challenges) (easy + medium) |

- **Tài liệu:** [NeetCode Roadmap](https://neetcode.io/roadmap) (làm theo thứ tự), *Grokking Algorithms* (Aditya Bhargava), [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/), *Effective TypeScript* (Dan Vanderkam).
- **Quy tắc:** Mỗi bài thuật toán ghi lại: dạng bài, ý tưởng 1 câu, độ phức tạp thời gian/bộ nhớ. Bài nào không tự giải được → làm lại sau 3 ngày và sau 1 tuần.
- **Dự án mốc:** Repo `algorithms/` 60 bài có test + bảng tổng kết dạng bài.

### Tháng 3: Trình duyệt, mạng, Web Platform (không framework)

Mục tiêu: hiểu thứ React đang che giấu.

| Tuần | Nội dung |
|---|---|
| 1 | Mạng: DNS, TCP, TLS, HTTP/1.1 vs 2 vs 3, header, cache (`Cache-Control`, `ETag`), cookie, CORS. Dùng DevTools Network & `curl -v` |
| 2 | Trình duyệt hoạt động thế nào: parse HTML/CSS, DOM/CSSOM, render tree, layout, paint, composite; reflow/repaint; event (bubbling, capturing, delegation) |
| 3 | CSS chuyên sâu: cascade, specificity, box model, flexbox, grid, stacking context, responsive; Accessibility (ARIA, keyboard, semantic HTML) |
| 4 | Web API: `fetch`, `AbortController`, History API, Web Storage, IndexedDB, Web Worker, Intersection Observer; Web Components |

- **Tài liệu:** [How Browsers Work](https://web.dev/articles/howbrowserswork), [High Performance Browser Networking](https://hpbn.co) (miễn phí), [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP), [web.dev Learn CSS](https://web.dev/learn/css), [Josh Comeau CSS](https://www.joshwcomeau.com/), [web.dev Learn Accessibility](https://web.dev/learn/accessibility).
- **Dự án mốc:** SPA "Quản lý chi tiêu" **không dùng framework**: tự viết router (History API), state store (pattern pub/sub), component render bằng template, lưu IndexedDB, chạy offline, đạt Lighthouse Accessibility ≥ 95.

### Tháng 4: React chuyên sâu & testing

| Tuần | Nội dung |
|---|---|
| 1 | React bên trong: virtual DOM, reconciliation, Fiber, render vs commit, batching; **tự viết mini-React** (createElement, render, diff, useState) |
| 2 | Hooks chuyên sâu: quy tắc hooks & lý do, `useEffect` đúng cách (và khi nào *không* cần), `useRef`, `useMemo/useCallback` khi nào thật sự cần, custom hooks, Concurrent features (`useTransition`, Suspense) |
| 3 | Quản lý state: local vs server state, Context và vấn đề re-render, Zustand/Redux Toolkit (hiểu pattern), TanStack Query (cache, invalidation, optimistic update), form (React Hook Form + Zod) |
| 4 | Testing: kim tự tháp test, Vitest, React Testing Library, MSW mock API, Playwright E2E, TDD cơ bản |

- **Tài liệu:** [react.dev](https://react.dev) (đọc lại toàn bộ, đặc biệt *You Might Not Need an Effect*), [Build your own React](https://pomb.us/build-your-own-react/) (Rodrigo Pombo), blog [Dan Abramov - overreacted.io](https://overreacted.io), [TkDodo blog](https://tkdodo.eu/blog/) (React Query), [Testing Library docs](https://testing-library.com/), Kent C. Dodds *Testing JavaScript*.
- **Dự án mốc:** (1) `mini-react` chạy được app Todo; (2) App "Kanban board" React có drag-drop, TanStack Query, test coverage ≥ 80%, 3 test E2E.

### Tháng 5: Kiến trúc FE, hiệu năng, Next.js

| Tuần | Nội dung |
|---|---|
| 1 | Hiệu năng: Core Web Vitals (LCP, INP, CLS), đo bằng Lighthouse/Performance tab, tối ưu ảnh, font, bundle, lazy loading, virtualization danh sách dài |
| 2 | Build tool: module system (ESM/CJS), bundler làm gì (tree-shaking, code splitting), Vite vs webpack; tự viết mini-bundler đơn giản |
| 3 | Chiến lược render: CSR, SSR, SSG, ISR, streaming, React Server Components; Next.js App Router, caching, Server Actions |
| 4 | Kiến trúc ứng dụng lớn: cấu trúc thư mục theo feature, design system, monorepo (pnpm workspaces/Turborepo), micro-frontend (khi nào nên/không nên), quy ước code, ADR (Architecture Decision Record) |

- **Tài liệu:** [web.dev Performance](https://web.dev/learn/performance), [Next.js docs](https://nextjs.org/docs), [patterns.dev](https://www.patterns.dev) (miễn phí), [Minipack](https://github.com/ronami/minipack) (mini bundler).
- **Dự án mốc:** Dashboard Next.js (ví dụ: thống kê dữ liệu công khai), có SSR + streaming, ≥ 3 ADR giải thích quyết định, Core Web Vitals đều "Good".

### Tháng 6: Bảo mật Frontend + Capstone FE

| Tuần | Nội dung |
|---|---|
| 1 | OWASP Top 10, XSS (stored/reflected/DOM), CSP, Trusted Types, `dangerouslySetInnerHTML`, sanitize; CSRF & SameSite cookie; clickjacking; supply-chain (npm audit, lockfile) |
| 2 | Auth phía client: cookie `HttpOnly` vs localStorage, luồng OAuth2 PKCE, refresh token, bảo vệ route; CORS hiểu đúng |
| 3–4 | **Capstone FE**: sản phẩm hoàn chỉnh theo quy trình thật (xem mục "Quy trình xây dựng một web hoàn chỉnh") |

- **Tài liệu:** [OWASP Top 10](https://owasp.org/www-project-top-ten/), [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/), [PortSwigger Web Security Academy](https://portswigger.net/web-security) (miễn phí, có lab thực hành tấn công: làm các lab XSS, CSRF, CORS, Clickjacking).
- **Capstone FE:** Một sản phẩm bạn tự chọn (gợi ý: app học từ vựng có spaced repetition, hoặc trang thương mại nhỏ dùng API giả lập). Yêu cầu: PRD 1 trang, wireframe, ADR, TypeScript strict, test, CI (lint + test + build), deploy (Vercel/Netlify), CSP header, Lighthouse ≥ 90 cả 4 mục.

**Mốc kiểm tra giữa năm:** Phỏng vấn thử FE (thầy hỏi, bạn trả lời): JS core, React internals, browser, performance, security + 2 bài code live không AI.

---

## GIAI ĐOẠN 2: BACKEND & HỆ THỐNG (Tháng 7–12)

### Tháng 7: Backend nền tảng với Node.js

| Tuần | Nội dung |
|---|---|
| 1 | Node.js runtime: event loop của Node, libuv, stream, buffer, file system; **HTTP server bằng module `http` thuần** (tự parse route, body, query) |
| 2 | Thiết kế REST API: resource, method, status code, idempotency, pagination, filtering, versioning, OpenAPI; Fastify/Express, middleware |
| 3 | Kiến trúc BE: layered (controller/service/repository), dependency injection, validation (Zod), xử lý lỗi tập trung, logging có cấu trúc (pino), config theo môi trường |
| 4 | Test BE: unit, integration (Supertest), test với DB thật trong Docker; GraphQL & WebSocket (tổng quan, khi nào dùng) |

- **Tài liệu:** [Node.js docs](https://nodejs.org/docs/latest/api/), [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices), [Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines), [Fastify docs](https://fastify.dev/docs/latest/).
- **Dự án mốc:** API "Quản lý thư viện sách": phiên bản 1 bằng `http` thuần, phiên bản 2 bằng Fastify + TS; có OpenAPI docs, test integration.

### Tháng 8: Cơ sở dữ liệu

| Tuần | Nội dung |
|---|---|
| 1 | SQL chuyên sâu với PostgreSQL: JOIN, subquery, CTE, window function, aggregate. Luyện ≥ 40 câu query |
| 2 | Mô hình hóa dữ liệu: ERD, chuẩn hóa (1NF–3NF), khi nào phi chuẩn hóa, quan hệ 1-n/n-n, migration |
| 3 | Index (B-tree, composite, covering), `EXPLAIN ANALYZE`, transaction, ACID, isolation level, lock, race condition (đặt chỗ trùng!) |
| 4 | ORM vs query builder (Prisma/Drizzle/Kysely), N+1 query, connection pool; Redis: cache-aside, TTL, invalidation, rate limit counter; NoSQL (MongoDB) khi nào dùng |

- **Tài liệu:** [PostgreSQL Tutorial](https://www.postgresqltutorial.com/), [SQLBolt](https://sqlbolt.com/), [Use The Index, Luke](https://use-the-index-luke.com/) (miễn phí), *Designing Data-Intensive Applications* chương 1–3, 7 (Martin Kleppmann), [Redis University](https://university.redis.io/).
- **Dự án mốc:** Backend "Đặt lịch khám/đặt phòng": schema chuẩn, chống đặt trùng bằng transaction/lock, seed 1 triệu dòng và tối ưu query chậm từ giây xuống mili-giây (ghi lại trước/sau).

### Tháng 9: Xác thực, phân quyền, bảo mật Backend

| Tuần | Nội dung |
|---|---|
| 1 | Mật khẩu: hashing (bcrypt/argon2), salt; session-cookie vs JWT (ưu/nhược thật sự), refresh token rotation, logout & thu hồi |
| 2 | OAuth2 & OpenID Connect (đăng nhập Google), SSO tổng quan; phân quyền RBAC/ABAC, multi-tenant |
| 3 | OWASP API Security Top 10: BOLA/IDOR, mass assignment, injection (SQL/NoSQL/command), SSRF, rate limiting, brute-force, quản lý secret, HTTPS/TLS |
| 4 | Thực hành tấn công & vá: làm lab PortSwigger (SQLi, Auth, Access control, SSRF), tự pentest dự án tháng 8 và viết báo cáo |

- **Tài liệu:** [OWASP API Security Top 10](https://owasp.org/API-Security/), [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/), [The Copenhagen Book](https://thecopenhagenbook.com/) (hướng dẫn auth rất tốt), [oauth.com](https://www.oauth.com/), PortSwigger Academy.
- **Dự án mốc:** Auth service tự viết (không dùng thư viện auth "trọn gói"): đăng ký, xác thực email, đăng nhập, quên mật khẩu, 2FA TOTP, OAuth Google, RBAC, rate limit, audit log.

### Tháng 10: Thiết kế hệ thống

| Tuần | Nội dung |
|---|---|
| 1 | Nền tảng: scale dọc/ngang, load balancer, stateless, CDN, cache nhiều tầng, ước lượng (back-of-the-envelope), SLA/SLO |
| 2 | Dữ liệu phân tán: replication, sharding, CAP/PACELC, consistency model, message queue (RabbitMQ/Kafka/BullMQ), event-driven, idempotency, outbox pattern |
| 3 | Luyện thiết kế: URL shortener, rate limiter, chat realtime, news feed, upload file lớn, hệ thống thông báo (mỗi bài: yêu cầu → ước lượng → API → data model → kiến trúc → điểm nghẽn) |
| 4 | Frontend system design: thiết kế autocomplete, infinite feed, Google Docs-like editor, design system; monolith vs microservices; tự xây URL shortener có Redis cache + queue thống kê click |

- **Tài liệu:** [System Design Primer](https://github.com/donnemartin/system-design-primer), *System Design Interview* Vol 1 & 2 (Alex Xu), [ByteByteGo](https://bytebytego.com/), *Designing Data-Intensive Applications* (đọc tiếp), [GreatFrontEnd System Design](https://www.greatfrontend.com/front-end-system-design-playbook).
- **Dự án mốc:** 6 tài liệu thiết kế (có sơ đồ) + URL shortener chạy thật, load test bằng k6, ghi lại số liệu.

### Tháng 11: DevOps & Deploy

| Tuần | Nội dung |
|---|---|
| 1 | Linux & mạng thực hành: shell, process, permission, SSH, systemd, firewall; Nginx (reverse proxy, TLS với Let's Encrypt, gzip, cache) |
| 2 | Docker: image, layer, multi-stage build, Docker Compose, network, volume; tối ưu image; bảo mật container |
| 3 | CI/CD với GitHub Actions: lint → test → build → deploy; môi trường dev/staging/prod; secret; migration DB khi deploy; zero-downtime (blue-green, rolling) |
| 4 | Cloud & vận hành: VPS vs PaaS vs serverless; AWS cơ bản (EC2, S3, RDS, IAM) hoặc tương đương; logging, metrics, tracing (OpenTelemetry), alert, backup & khôi phục |

- **Tài liệu:** [Linux Journey](https://linuxjourney.com/), [Docker docs: Get started](https://docs.docker.com/get-started/), [GitHub Actions docs](https://docs.github.com/actions), [The Twelve-Factor App](https://12factor.net/), [roadmap.sh/devops](https://roadmap.sh/devops).
- **Dự án mốc:** Deploy app tháng 8–9 lên VPS: Docker Compose (app + Postgres + Redis + Nginx), HTTPS, CI/CD tự động khi merge `main`, backup DB hằng ngày, dashboard giám sát.

### Tháng 12: Capstone Fullstack & chuẩn bị nhảy việc

| Tuần | Nội dung |
|---|---|
| 1–3 | **Capstone Fullstack** theo đầy đủ quy trình (bên dưới). Gợi ý: nền tảng đặt lịch cho tiệm nhỏ, app quản lý chi tiêu nhóm, hoặc mini-LMS |
| 4 | Chuẩn bị phỏng vấn: CV & portfolio, kể chuyện dự án (STAR), phỏng vấn thử: coding (không AI), FE/BE kiến thức, system design. (Tùy chọn) viết lại 1 service bằng Python FastAPI hoặc Java Spring Boot |

- **Capstone yêu cầu:** monorepo FE (Next.js) + BE (Node/TS), PostgreSQL + Redis, auth đầy đủ, ≥ 1 tác vụ nền qua queue, realtime (WebSocket/SSE) ở ít nhất 1 tính năng, test (unit + integration + E2E), CI/CD, deploy HTTPS, giám sát, tài liệu kiến trúc + ADR, checklist bảo mật OWASP đã qua.

---

## Quy trình xây dựng một web hoàn chỉnh (áp dụng cho mọi dự án mốc)

1. **Yêu cầu:** PRD 1 trang: vấn đề, người dùng, tính năng bắt buộc/không bắt buộc, chỉ số thành công.
2. **Thiết kế:** user flow, wireframe (Figma/giấy), data model (ERD), API contract (OpenAPI), kiến trúc (sơ đồ), ADR cho các quyết định lớn.
3. **Lập kế hoạch:** chia task thành GitHub Issues, mỗi issue ≤ 1 ngày làm.
4. **Phát triển:** nhánh theo tính năng, commit nhỏ & rõ ràng ([Conventional Commits](https://www.conventionalcommits.org/)), PR có mô tả, tự review trước khi merge.
5. **Chất lượng:** lint, format, type-check, test tự động chạy trong CI.
6. **Bảo mật:** checklist OWASP, quét dependency, secret không nằm trong code.
7. **Deploy:** môi trường staging → production, có thể rollback.
8. **Vận hành:** log, metrics, alert, backup.
9. **Tổng kết:** retrospective: làm tốt gì, sai gì, lần sau đổi gì.

---

## Đánh giá tiến độ

- **Hằng tuần:** nộp bài qua Pull Request (xem [README](./README.md)), thầy review.
- **Cuối mỗi tháng:** bài kiểm tra ngắn (câu hỏi lý thuyết + 1 bài code không AI trong 45 phút) và review dự án mốc.
- **Tháng 6 và tháng 12:** phỏng vấn thử.

Sau 12 tháng, bạn sẽ có: ~150 bài thuật toán, ~10 thư viện/công cụ tự viết lại, 8 dự án mốc, 2 capstone deploy thật, 6 tài liệu system design, và quan trọng nhất là **khả năng tự giải quyết vấn đề khi không có AI**.
