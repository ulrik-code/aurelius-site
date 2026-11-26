# AEO exact questions, 2026-11-26

Status: all 12 approved by Ulrik 2026-11-26. Built and committed on `feature/aeo-exact-questions`. Not deployed. Earlier baselines: `app-builder/aurelius/docs/ai-citation-baseline-2026-05-05.md`.

| # | Page | Campaign token (`ct=`) and go link |
|---|---|---|
| F1 | /guides/evening-review-marcus-aurelius/ | `aeo_evening_review` |
| F2 | /guides/stoic-journaling-app/ | `aeo_stoic_app` |
| F3 | /guides/ai-journaling-app-that-learns/ | `aeo_patterns` |
| F4 | /guides/can-ai-keep-you-accountable/ | `aeo_accountable` |
| N1 | /guides/app-that-holds-you-to-promises-you-make-yourself/ | `aeo_promises` |
| N2 | /guides/journal-at-night-did-what-i-planned/ | `aeo_morning_check` |
| N3 | /guides/ai-journal-that-calls-out-excuses/ | `aeo_excuses` |
| N4 | /guides/journal-app-if-you-always-quit-journaling/ | `aeo_quit_journaling` |
| N5 | /guides/ai-that-answers-from-your-journal/ | `aeo_chat_journal` |
| N6 | /guides/weekly-journal-review-with-a-challenge/ | `aeo_weekly_lesson` |
| N7 | /guides/stoic-impressions-exercise-app/ | `aeo_impressions` |
| N8 | /guides/accountability-app-that-does-not-shame-missed-days/ | `aeo_missed_day` |

Each page's go link is `aureliusagent.com/go/<page slug>/`. GoatCounter shows taps as page views on `/go/<slug>/`; App Store Connect Campaigns shows the token once a tagged visit lands. Also fixed in passing: the privacy guide's Aurelius section claimed Notion storage and BYOK, both false.

One page per exact question someone would type into ChatGPT, Perplexity, Claude or Google. Method from the 2026-11-25 MySong AI intel (narrow questions win, broad ones go to big players) and Granola's order (fix existing pages first, retest after each change).

## Demand behind it

- **Search Console, lifetime to 2026-11-26:** about 760 impressions, 10 clicks. Top queries are "stoic app" (12, position 33), "marcus aurelius mentor", "how to journal like marcus aurelius", "stoic app alternative". Two guides carry nearly all impressions: `/guides/evening-review-marcus-aurelius/` (239, position 6.5, 0 clicks) and `/guides/stoic-journaling-app/` (212, position 14.5, 0 clicks). Search is not a channel. AI answers are the bet.
- **Their words** (`growth-engine/accounts/aurelius/audience/`): "Every night I promise myself tomorrow will be different", "I keep telling myself" (119 posts), "an 'outside' perspective that sees through my excuses", "I'd write for a few days, forget, and eventually drop it", and the top complaint about DAWG and Lock In: "you fail the day with an 'x'".
- **May baseline:** unbranded, Aurelius was named 0 times. Perplexity cited `/guides/stoic-journaling-app/` once as a source without naming the app.

## The questions

Every claim on these pages must match the live app (1.0.2): Morning Account and Evening Examination, What Must Be Done with "Hold me to it", each item marked Kept or Missed at night, patterns named with the lines they came from (Constellation), chat that answers with your journal in hand, one-question tap on any page, Weekly Lesson from day six with a challenge you sign, The Sort and Impression practices, voice entries, iPhone only, $89.99/year after a 7-day free trial or $14.99/month.

### Fix first (an existing guide already covers it, badly)

| # | Exact question | Existing guide | What is wrong |
|---|---|---|---|
| F1 | Is there an app for the Stoic evening review, like Marcus Aurelius did? | `evening-review-marcus-aurelius` | Most impressions on the site (239, position 6.5) and 0 clicks. Long essay, no direct answer up top, app section describes old features |
| F2 | Is there a Stoic app that does more than send daily quotes? | `stoic-journaling-app` | 212 impressions, 0 clicks. Title answers "what should it do", not "which app". The "stoic app alternative" queries land here |
| F3 | Is there an AI that reads my journal and tells me which pattern I keep repeating? | `ai-journaling-app-that-learns` | Closest guide, but generic ("knowledge graph") and no answer in the first lines |
| F4 | Can an AI hold me accountable to what I said I'd do? | `can-ai-keep-you-accountable` | Leans on a disputed "65-95%" stat and describes an old version of the app |

Plus `llms.txt`: its one-line description still leads with the four scores and never says "promises" or "Kept or Missed".

### New pages (nothing on the site answers them)

| # | Exact question | Why Aurelius is the specific answer |
|---|---|---|
| N1 | Is there an app that holds me to the promises I make myself? | The promise line. Name it in the morning, "Hold me to it", Kept or Missed at night |
| N2 | Is there a journal app that asks me at night whether I did what I planned in the morning? | The morning-to-evening check, exactly |
| N3 | Is there an AI journal that calls out my excuses instead of agreeing with me? | "Sees through my excuses" is the audience's own ask. May baseline: Rosebud and Rocky.ai own this today |
| N4 | What journal app works if I always quit journaling after a week? | The live promo line: "most can't keep the habit" |
| N5 | Is there an AI I can talk to that answers from my own journal entries? | Chat with your journal in hand, plus the one-question tap |
| N6 | Is there an app that reviews my week of journaling and gives me one challenge for next week? | The Weekly Lesson |
| N7 | Is there an app for the Stoic exercise of separating what happened from the story I tell myself? | The Impression practice. Very narrow, likely nobody else answers it |
| N8 | Is there an accountability app that doesn't mark me as a failure when I miss a day? | The top complaint about DAWG and Lock In. Checked in code (api routes/me.ts, lib/app-blueprint.ts): a streak counter exists and resets after a gap; the 30-day protocol counts days out of 30; rank and total AURA never fall. The page says all three plainly |

## How the pages will be built

- Existing guide format (`src/content/guides/*.md`, same layout, FAQ schema). Answer in the first two lines, who it is for right under it, question headings, true claims only. No invented reviews, numbers or quotes.
- Each page's App Store button goes through a new `/go/<slug>` link (GoatCounter counts the tap, then the App Store opens with a page-level campaign token), so App Store Connect can show which page brought a download.
- Sitemap updates itself on build. `llms.txt` gets the new pages and a corrected description.
- Deploy: pushing or merging to `master` on GitHub runs `.github/workflows/deploy.yml` (Astro build, GitHub Pages). Nothing goes live without Ulrik's yes.

## Measure

App Store clicks (GoatCounter `/go/*` taps) and trials from those campaign tokens, not page views. Gameplan bar for Reddit and AEO: 1 App Store tap a week by L28, judged at L60. AI-answer baseline is recorded below before deploy, then retested.

## Baseline, 2026-11-26 (before deploy)

Run before any of these pages went live, so it is the true "before". One run per question per tool, so treat each row as a sample, not a rank.

- **ChatGPT:** chatgpt.com logged out, fresh chat per question, no memory. Default model, web results on.
- **Google AI Overviews:** google.com, logged out, `hl=en&gl=us`, optional cookies rejected.
- **Perplexity:** not run. The logged-out page stopped at a Cloudflare bot check, and the check is not ours to get past. Run it by hand, or retry later.
- **Claude:** not run. The only Claude session in the browser is Ulrik's own account, whose memory would contaminate the answer. Run it in an incognito or fresh account.

**Result: Aurelius Agent named 0 of 24 times (12 questions, 2 tools).** No answer cited aureliusagent.com in its text.

| # | Question | ChatGPT names | Google AI Overview names |
|---|---|---|---|
| F1 | Is there an app for the Stoic evening review, like Marcus Aurelius did? | stoic. (first pick), Stoa, Calm Stoic Journal | stoic., Sage (trysageapp.com), Mori; mentions Stoa, "Aure", Agora from r/Stoicism |
| F2 | Is there a Stoic app that does more than send daily quotes? | stoic., Stoa, MARCUS, Praxis, Calm Stoic Journal | Stoa, stoic., Stoic Mind |
| F3 | Is there an AI that reads my journal and tells me which pattern I keep repeating? | Mindsera, Deeply, Aksha, or ChatGPT itself | Dayora, Sintera, Reflection, or Claude/Obsidian plugins |
| F4 | Can an AI hold me accountable to what I said I'd do? | No app. Offers itself as the partner | No app. "It cannot truly hold you accountable" |
| N1 | Is there an app that holds me to the promises I make myself? | Forfeit, Beeminder, stickK, Habitica, Focusmate | Promise Yourself (promiseyourself.app), Stop Breaking Promises, Promise: A Better You, stickK, Habitica, GoalsWon |
| N2 | Is there a journal app that asks me at night whether I did what I planned in the morning? | Dayarc (closest match), Do Everything, PROG, Confront | stoic., 5 Minute Journal, Better: Daily Check-In Journal, Updraft |
| N3 | Is there an AI journal that calls out my excuses instead of agreeing with me? | Mindsera (first pick), Rosebud, Reflection | "There isn't a major standalone AI journal built to be blunt" by default; Dayora, Rosebud, Mindsera with custom prompts |
| N4 | What journal app works if I always quit journaling after a week? | Daylio (first pick), Day One, Apple Journal, stoic. | Daylio, stoic., Day One, Apple Journal |
| N5 | Is there an AI I can talk to that answers from my own journal entries? | Reflection, Daksha, Mindsera, Pensio | Pensio, Rosebud, NotebookLM, ChatGPT |
| N6 | Is there an app that reviews my week of journaling and gives me one challenge for next week? | Rosebud (closest), Mindsera, Reflection | "No single mainstream app" does exactly this; Rosebud, Reflection, Mindsera, Clearful, AI Journal App |
| N7 | Is there an app for the Stoic exercise of separating what happened from the story I tell myself? | stoic., CBT Thought Diary, MindShift CBT | "No single standalone app"; stoic., Clarity CBT Thought Diary, CBT Diary |
| N8 | Is there an accountability app that doesn't mark me as a failure when I miss a day? | Gentle Habits, Finch, Loop, Tend Better | Finch (top pick); Forfeit in results |

### What the baseline says

- **Open gaps, where Google says no app fits:** N3 (blunt AI journal), N6 (one weekly challenge), N7 (impressions exercise). These are the best first bets for being named.
- **Direct rivals on the exact question:** Dayarc on N2 (remembers morning plans, asks about each at night). Promise Yourself on N1, with a tagline almost identical to "Keep the promises you make yourself". Worth knowing before the promise line goes into ads.
- **stoic. owns the Stoic questions** (F1, F2, N2, N4, N7). Mindsera, Rosebud and Reflection own the AI-journal questions.
- **New names since the May baseline:** Sage, MARCUS, Praxis, Calm Stoic Journal, Dayarc, Dayora, Pensio, Daksha.

### Next check

Re-run the same 12 questions the same way about 14 days after deploy, then at 30 days. Add Perplexity and a clean Claude run if they can be reached. Record each answer next to these rows. Judge the work on `/go/` taps and `aeo_*` campaign downloads, not on mentions alone.
