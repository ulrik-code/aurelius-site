// /llms.txt, built from the guides collection and PRICING so it never drifts from the site.
// Question pages (the ones with a storeToken) are listed first: they are the exact
// questions we want AI answers to name Aurelius Agent for.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { APP_STORE_LISTING_URL, PRICING } from '../consts';

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL('https://aureliusagent.com')).href.replace(/\/$/, '');
  const guides = await getCollection('guides');
  const line = (g: (typeof guides)[number]) =>
    `- [${g.data.title}](${base}/guides/${g.id}/): ${g.data.description}`;
  const questions = guides.filter((g) => g.data.storeToken).sort((a, b) => a.data.title.localeCompare(b.data.title));
  const others = guides.filter((g) => !g.data.storeToken).sort((a, b) => a.data.title.localeCompare(b.data.title));

  const body = `# Aurelius Agent

> Aurelius Agent is a Stoic accountability journal for iPhone that holds you to the promises you make yourself. Each morning you write a Morning Account and name one to three things the day fails without (What Must Be Done). Each evening an Evening Examination asks what you did well, what badly and what you left undone, and you mark each promise Kept or Missed. An AI mentor answers every entry, remembers your record, names the patterns you keep repeating with the days they came from, and writes a Weekly Lesson with one challenge for the week ahead. Made by Sparboe Systems in Norway.

- Platform: iPhone only. No Android or web version.
- App Store: ${APP_STORE_LISTING_URL}
- Pricing: $${PRICING.annual} per year with a ${PRICING.trialDays}-day free trial for new subscribers, or $${PRICING.monthly} per month. No free tier.
- AI: replies are written by Anthropic's Claude; voice entries are transcribed by OpenAI. Aurelius does not sell user data or allow its AI providers to train on it.
- Not therapy or a medical product.
- Founder: Ulrik Sparboe (https://sparboesystems.com)

## Questions Aurelius Agent answers

${questions.map(line).join('\n')}

## Other guides

${others.map(line).join('\n')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
