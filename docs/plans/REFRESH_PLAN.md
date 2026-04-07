# Inbox Athletics Landing Page Refresh
## Comprehensive Designer Handoff Document

**Project Goal:** Refresh landing page to drive trial sign-ups and communicate trust, quality, and utility for student-athletes.

**Version:** 2.0 (Updated with Product Screenshots)  
**Date:** February 2026  
**Product Lead:** Michael  

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Layout & Structure](#4-layout--structure)
5. [Component Specifications](#5-component-specifications)
6. [Screenshot Integration Guide](#6-screenshot-integration-guide)
7. [Interactive Elements](#7-interactive-elements)
8. [Responsive Design](#8-responsive-design)
9. [Performance Requirements](#9-performance-requirements)
10. [Accessibility Requirements](#10-accessibility-requirements)
11. [Content Specifications](#11-content-specifications)
12. [Assets Provided](#12-assets-provided)
13. [Technical Specifications](#13-technical-specifications)
14. [Launch Checklist](#14-launch-checklist)
15. [A/B Testing Plan](#15-ab-testing-plan)
16. [Timeline](#16-timeline)

---

## 1. Brand Identity

### Voice & Tone

**Core Attributes:**
- **Empowering**, not patronizing
- **Confident**, not cocky  
- **Honest** about beta status (transparency builds trust)
- **Personal** (founder-led, building for our children)
- **Technical credibility** without jargon

**Target Audience Tone Balance:**
- **Athletes (14-18):** Confident, modern, not childish
- **Parents:** Professional, trustworthy, secure
- **Both:** Clear value, no hype

### Visual Brand Attributes

- **Warm** - Approachable, inviting (not cold/corporate)
- **Trustworthy** - Reliable, secure, professional
- **Modern** - Cutting-edge AI, not dated
- **Clean** - Organized (we solve chaos, can't look chaotic)
- **Youthful** - Age-appropriate without being juvenile

### Product UI Observations

From the provided screenshots, the existing product demonstrates:
- **Clean, spacious layouts** with generous white space
- **Purple/violet accent color** (#8B5CF6 range) for AI features and branding
- **Professional but approachable** interface design
- **Information density balanced with readability**
- **School/college-centric organization** (not just coach lists)
- **Sophisticated data visualization** (relationship health scores, progress indicators)

---

## 2. Color Palette

### Current Product Colors (From Screenshots)

**Primary Brand:**
- Navy blue logo text: `#1E3A8A` (approximate)
- Purple/Violet accents: `#8B5CF6` (violet-500) for AI features
- Background: Clean white `#FFFFFF`
- Subtle grays for secondary text and borders

### Recommended Landing Page Palette

**Primary: Trust Blue** (Main brand color)
```
Primary: #2563EB (Tailwind blue-600)
Hover: #1D4ED8 (blue-700)  
Light: #DBEAFE (blue-100)
```
**Usage:** Headers, primary brand elements, links, borders

**Secondary: Energy Coral** (CTA & Accent)
```
Primary: #F97316 (Tailwind orange-500)
Hover: #EA580C (orange-600)
Light: #FFEDD5 (orange-100)
```
**Usage:** Primary CTAs, emphasis, highlights

**Supporting: Success Green**
```
Primary: #10B981 (Tailwind emerald-500)
Light: #D1FAE5 (emerald-100)
```
**Usage:** Checkmarks, success states, positive indicators (as seen in product for "Positive" sentiment badges)

**AI Purple** (Matches Product)
```
Primary: #8B5CF6 (Tailwind violet-500)
Light: #EDE9FE (violet-100)
```
**Usage:** "AI Generated" badges, "Compose with AI" buttons, AI-specific features (already in product)

**Neutrals**

**Text:**
```
Primary: #1F2937 (gray-800)
Secondary: #6B7280 (gray-500)
Tertiary: #9CA3AF (gray-400)
```

**Backgrounds:**
```
Primary: #FFFFFF (white)
Secondary: #F9FAFB (gray-50)
Borders: #E5E7EB (gray-200)
```

### Color Application Map

| Element | Color | Rationale |
|---------|-------|-----------|
| Logo text | Navy #1E3A8A | Matches product branding |
| Primary CTA | Orange-500 bg, white text | High contrast, energy, action |
| Secondary CTA | Blue-600 border & text | Trust, less aggressive |
| Headlines | Gray-800 | Readable, not harsh black |
| Body text | Gray-700 | Comfortable reading |
| Links | Blue-600, underline on hover | Familiar, trustworthy |
| Success indicators | Emerald-500 | Positive, completion |
| AI badges | Violet-500 | Innovation, matches product |
| Beta badge | Violet-500 | Signals early/innovative |
| Trust badges | Blue-600 | Security, reliability |
| Status badges | Match product (Blue for "Reply Needed", Green for positive sentiment) |

### Color Psychology Rationale

**Trust Blue (#2563EB):**
- Email/communication association (Gmail blue territory)
- Warmer than navy, more approachable for teens
- Professional without being corporate
- Works for both parents and athletes

**Energy Coral (#F97316):**
- Differentiates from competitors (most use blue/green)
- Warmth = approachable, friendly
- High contrast with blue (excellent CTAs)
- Youth appeal without being childish

**AI Purple (#8B5CF6):**
- Already established in product as AI indicator
- Cutting-edge, innovative feel
- Differentiates AI features from standard functionality

**Why NOT:**
- ❌ Pure red (anxiety, danger in recruiting context)
- ❌ Corporate navy (too formal, not inviting)
- ❌ Bright green primary (too many competitors use it)

---

## 3. Typography

### Recommended Font Stack

**Option A: Inter + System Fonts** (Recommended)
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```

**Weights to include:**
- 400 (Regular) - Body text
- 500 (Medium) - Labels, emphasis
- 600 (Semibold) - Subheadings  
- 700 (Bold) - Headlines

**Why Inter:**
- Clean, modern, excellent readability
- Used by many tech products (feels current)
- Free and open-source
- Great web performance
- Matches the professional feel of your product UI

### Typography Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|---------------|---------------|--------|-------------|
| H1 (Hero) | 52-60px | 36-42px | 700 | 1.1 |
| H2 (Sections) | 36-42px | 28-32px | 600 | 1.2 |
| H3 (Features) | 24-28px | 20-24px | 600 | 1.3 |
| Body Large | 18-20px | 18px | 400 | 1.6 |
| Body | 16px | 16px | 400 | 1.6 |
| Small | 14px | 14px | 400 | 1.5 |
| Label/Badge | 12-14px | 12px | 500 | 1.4 |

**Critical Typography Notes:**
- Maintain 16px minimum body text on mobile (readability + prevents iOS zoom)
- Increase line height slightly on mobile for easier reading
- Use consistent weights: Don't mix 500 and 600 for same hierarchy level

---

## 4. Layout & Structure

### Page Architecture

**Single-page scroll with these sections:**

1. **Hero Section** - First impression, value prop, CTA
2. **Founder Story** - Authenticity, trust building
3. **Feature Showcase** - 3 expandable features with product screenshots
4. **How It Works** - 3-step process
5. **Social Proof** - Testimonials, trust badges
6. **Pricing** - Single plan, clear trial terms
7. **FAQ** - Accordion style, 5-6 core questions
8. **Final CTA** - Conversion reinforcement
9. **Footer** - Links, legal, contact

### Grid System

**Desktop (1280px+ container):**
- 12-column grid
- Max width: 1280px
- Container padding: 80-120px horizontal
- Section spacing: 120-160px vertical

**Tablet (768-1279px):**
- 8-column grid
- Container padding: 40-60px horizontal
- Section spacing: 80-100px vertical

**Mobile (<768px):**
- Single column
- Container padding: 20-24px horizontal
- Section spacing: 60-80px vertical

### Content Width Guidelines

**Text content max-width:** 65ch (characters) for readability  
**Feature sections:** Full-width with internal content max-width  
**Product screenshots:** Max 900-1000px wide, centered in section  
**Form elements:** Max 600px wide

---

## 5. Component Specifications

### 5.1 Hero Section

**Layout:**
- **Left 50%:** Headline, subhead, CTAs, trust elements
- **Right 50%:** Product screenshot showing organized dashboard

**Desktop Dimensions:**
- Height: 100vh or 700px minimum
- Content max-width: 560px (left side)
- Screenshot: 600-700px wide (right side)

**Mobile:**
- Stack vertically
- Headline first (full width)
- Screenshot second (full width, optimized)
- CTAs third (stacked or horizontal)

**Hero Screenshot Recommendation:**
Use **Screenshot 1** (Dashboard view) showing:
- Personalized greeting "Good morning, Izzy"
- "Your Next Actions" with pending coach replies
- "Discovered Schools" sidebar
- "Event Suggestions" and "Upcoming Events"
- Clean, organized interface vs. chaotic inbox

**Visual Treatment:**

**Option A: Split-screen comparison**
```
LEFT: Chaotic Gmail inbox (mock up or generic screenshot)
RIGHT: Screenshot 1 - Inbox Athletics dashboard
Transition: Subtle fade or slide animation (optional)
```

**Option B: Single hero screenshot with callouts**
```
Full-width Screenshot 1 with floating UI callouts:
→ "Pending replies flagged automatically"
→ "Schools organized, not scattered"  
→ "Upcoming events tracked"
```

**Recommendation:** Option B - Single clean screenshot with subtle callouts. Less cluttered, more modern.

**CTAs:**
- **Primary:** "Start Your 14-Day Trial" (Orange-500, 56px height)
- **Secondary:** "See How It Works" (Blue-600 outline, below primary)
- Spacing: 16px vertical between buttons

**Trust Elements Below CTAs:**
```
✓ No credit card required to start  
✓ Full access for 14 days  
✓ Cancel anytime, keep your data
```
- Checkmarks: Emerald-500, 20px
- Text: Gray-600, 14-16px
- Layout: Horizontal with adequate spacing, stack on narrow mobile

---

### 5.2 Founder Story Section

**Layout:**
- Photo: Left or centered top (200-250px)
- Content: Right or below
- Max-width: 800px, centered

**Photo Treatment:**
- Circular mask OR rounded corners (16px radius)
- Subtle drop shadow (optional: 0 4px 6px rgba(0,0,0,0.1))
- Color photo (shows warmth, humanity)

**Content:**

**Headline:** "We're building this for our children"
- H2 size (36-42px)
- Color: Blue-600
- Weight: 600

**Body Copy:**
```markdown
Hi, I'm [Your Name]. My wife [Wife's Name] and I were both Division I 
scholarship athletes. We've lived the recruiting grind.

Now our children are pursuing their own athletic dreams—and we're 
watching them struggle with the same chaos we did. **Spreadsheets to 
track coaches. Missed emails buried in their inbox. Jumping between 
five different websites trying to remember who said what.**

We kept asking: why doesn't a tool exist that actually helps athletes 
stay organized?

So we're building Inbox Athletics. Not for a market opportunity. 
**For our kids.** And for every athlete who deserves better than 
spreadsheet chaos.

We're in beta because we want to get this right—with your feedback, 
not despite it.

[Your Name] & [Wife's Name]  
Founders, Inbox Athletics
```

**Typography:**
- Body Large: 18-20px, line-height 1.6
- Bold emphasis: Weight 600 on key phrases
- Signature: Italic or script font (optional), 16px

**Trust Badges Below** (Optional):
- Icons + labels: "Former D1 Athletes", "Parents of Current Recruits", "Building in Public"
- Horizontal layout, 32px icons, subtle color
- Mobile: Stack if needed

---

### 5.3 Feature Showcase (Expandable Sections)

**Three Core Features:**
1. Unified Communications (Dashboard)
2. AI-Powered Messaging
3. School-Based CRM

**Default (Collapsed) State:**

```
┌──────────────────────────────────────────────────────┐
│ 📧 [Icon, 48px] Feature Headline (H3, 24-28px)      │
│                                                      │
│ One-sentence description (Body Large, 18-20px)      │
│                                                      │
│ [+ Learn More] (Link, Blue-600, 16px)               │
└──────────────────────────────────────────────────────┘
```

**Card Styling:**
- Width: Full container width
- Height: 100-120px (collapsed)
- Padding: 32-40px all sides
- Background: Alternate White / Gray-50
- Border: 1px Gray-200 OR no border with subtle shadow
- Hover: Background darken to Gray-100, cursor pointer
- Border-radius: 8-12px

**Expanded State:**

```
┌─────────────────────────────────────────────────────────────┐
│ 📧 [Icon] Feature Headline (H3)                             │
│                                                             │
│ ┌─────────────────┐  ┌─────────────────────────────────┐   │
│ │                 │  │ Full feature description        │   │
│ │  Screenshot     │  │ • Bullet points or paragraphs   │   │
│ │  (500-600px)    │  │ • Key benefits                  │   │
│ │                 │  │ • Use cases                     │   │
│ │                 │  │                                 │   │
│ └─────────────────┘  │ [Callout Box - Optional]        │   │
│                      │ Competitive positioning or      │   │
│                      │ technical detail                │   │
│                      └─────────────────────────────────┘   │
│                                                             │
│ [− Close] (Link, Blue-600, 16px)                            │
└─────────────────────────────────────────────────────────────┘
```

**Expanded Styling:**
- Height: Auto (expand to content)
- Screenshot: Left 45%, content right 50%, 5% gap
- Mobile: Stack screenshot above content
- Padding: 40-48px

**Animation:**
- Duration: 300ms
- Easing: ease-in-out
- Property: max-height + opacity (smooth reveal)
- Chevron icon rotation: 180° on expand

**Callout Box Styling:**
- Background: Blue-50 OR Violet-50 (for AI features)
- Border-left: 4px Blue-600 OR Violet-500
- Padding: 16-20px
- Border-radius: 6px
- Margin: 16px 0

---

### Feature 1: Unified Communications

**Collapsed Text:**
```
Headline: 📧 All your coach conversations, finally in one place

Description: Stop juggling Gmail, text messages, and social media. 
Everything synced in real-time, organized by the programs that matter 
to you.
```

**Expanded Content:**

**Screenshot to use:** Screenshot 1 (Dashboard)
- Shows "Your Next Actions" with coach messages
- "Discovered Schools" sidebar
- "Upcoming Events" panel
- Clean, organized interface

**Copy:**
```markdown
## All your coach conversations, finally in one place

**We live where recruiting already happens—in your email.** No new 
platform for coaches to join. No walled garden. Just better organization 
for the conversations you're already having.

**Every message synced in real-time**  
Connect directly to your email—when a coach writes, you see it instantly. 
Reply from Inbox Athletics or your email app. Everything stays in sync.

**Organized by school, not chaos**  
Messages grouped by programs. See your entire conversation history with 
a school's coaching staff at a glance. When recruiting coordinators 
change, your relationship history with that program stays intact.

**Never lose track**  
Pending responses flagged automatically. Follow-up reminders when you 
need them. No more "I forgot to reply" moments.
```

**Callout Box (Optional):**
```
💡 Unlike database services, we don't make you "access" coaches you 
already know. Import from your contacts, add manually, or let us find 
coaches in your existing email. Your contacts, your way.
```

---

### Feature 2: AI That Knows Your Story

**Collapsed Text:**
```
Headline: 🤖 Write better messages, faster—without sounding like a robot

Description: Context-aware AI that learns your story and helps you 
communicate confidently. Every suggestion personalized to your 
relationship with each coach.
```

**Expanded Content:**

**Screenshot to use:** Screenshot 2 or 3 (AI Message Composer)
- Shows "Compose with AI" interface
- Draft preview with "AI Generated" badge
- Multi-recipient capability (3 coaches shown)
- Structured input fields (goal, performance highlights, video links)

**Copy:**
```markdown
## Write better messages, faster—without sounding like a robot

**We don't blast the same message to 500 coaches.** Our AI helps you 
build real relationships with programs you actually care about—quality 
over quantity.

**Context that matters**  
AI considers your conversation history, upcoming events, and the coach's 
program. Not generic templates—personalized suggestions that sound like you.

**Professional tone, authentic voice**  
Write confidently without sounding stiff or fake. You're still you—just 
more polished.

**Smart follow-up timing**  
AI suggests when to follow up based on conversation momentum. No more 
"is it too soon to email again?"

**You're always in control**  
Review, edit, or rewrite any suggestion before sending. This is assistance, 
not autopilot.
```

**Comparison Table (Optional):**

| Mass Email Tools | Inbox Athletics |
|------------------|-----------------|
| Same message, 100 coaches | Personalized to each relationship |
| Generic templates | References your actual conversations |
| Coaches can tell it's AI | Sounds like you, refined |
| Volume over quality | Real relationships that matter |

---

### Feature 3: School-Based Organization

**Collapsed Text:**
```
Headline: 📊 Organize by program, not spreadsheets

Description: Track unlimited coaches per school. Build relationships 
with programs, not just individuals. See your entire recruiting pipeline 
at a glance.
```

**Expanded Content:**

**Screenshot to use:** Screenshot 6 or 7 (College Detail Page)
- Shows Brown University or NJIT detail view
- "AI Summary" of conversation thread
- "Relationship Health" score (45 - Warming)
- "Coaching Staff" with contact details
- "Suggested Next Steps" with priority labels
- Message thread history

**Copy:**
```markdown
## Ditch the recruiting spreadsheet forever

**Bring your own coaches—the programs you actually care about.** We're 
not a database you pay to access. You choose who to track, organize 
them your way, and own all your data.

**Track by program, not just people**  
Head coach, assistants, recruiting coordinator—all connected to the 
school. When coaching changes happen, your relationship history with 
that program stays intact.

**AI-powered relationship insights**  
Our unique "Relationship Health" score analyzes your communication 
patterns, response rates, and engagement to help you prioritize 
follow-ups and identify opportunities.

**Your recruiting pipeline**  
✓ Organize schools by reach/target/safety  
✓ Smart follow-up suggestions based on conversation momentum  
✓ Track conversation history and sentiment  
✓ See risks and opportunities at a glance

**Relationship timeline**  
Every email, event, phone call logged automatically. Never wonder 
"when did I last talk to them?" again.
```

**Stats Callout:**
```
Trial includes: 25 schools  
Premium: Unlimited schools

Most athletes recruit to 20-30 programs—plenty to evaluate if 
Inbox Athletics works for you.
```

---

### 5.4 How It Works Section

**Layout:**
- 3 steps, horizontal cards on desktop
- Vertical stack on mobile
- Visual progress indicator connecting steps (optional)

**Step Card Structure:**

```
┌────────────────────────────┐
│   ① ━━━━━━━━━━━━━━━━━━━   │  ← Step number badge
│                            │
│   Connect Your Email       │  ← H3 headline
│                            │
│   Sign in with Google or   │  ← Description
│   Apple. We'll sync your   │
│   email and start          │
│   organizing recruiting    │
│   messages immediately.    │
│                            │
│   ⏱️ 60 seconds            │  ← Time estimate
└────────────────────────────┘
```

**Dimensions:**
- Each card: 33.33% width on desktop (equal)
- Padding: 32px
- Min-height: 320px
- Background: White OR Gray-50 (alternate)
- Border: 1px Gray-200 OR subtle shadow

**Step Number Styling:**
- Circle: 60-72px diameter
- Background: Blue-600
- Text: White, 32px, bold
- OR Badge style: Rounded rectangle with "Step 1"

**Content:**

**Step 1: Connect Your Email**
```
Icon/Number: ① or email icon
Headline: Connect Your Email
Body: Sign in with Google or Apple. We'll sync your email and start 
organizing recruiting messages immediately.
Time: ⏱️ 60 seconds
```

**Step 2: Add Your Target Schools**
```
Icon/Number: ② or school icon
Headline: Add Your Target Schools  
Body: Import from your email contacts or add manually. Start with 
your top 5-10 programs. We'll help you discover coaches in your 
existing emails.
Time: ⏱️ 2-3 minutes
```

**Step 3: Start Communicating**
```
Icon/Number: ③ or message icon
Headline: Communicate with Confidence
Body: Compose your first message with AI assistance. Track responses. 
Get smart follow-up suggestions. Stay organized.
Time: ⏱️ You're up and running
```

**CTA Below Steps:**
- "Start Your 14-Day Trial" button
- Centered, Orange-500, large (56px height)
- Optional sub-text: "No credit card required"

**Progress Indicator (Optional):**
- Dotted line or arrow connecting step numbers
- Shows flow: Step 1 → Step 2 → Step 3
- Color: Gray-300 (subtle)

---

### 5.5 Social Proof Section

**Headline:**
```
Building with athletes, for athletes

We're in beta—which means you're not just using Inbox Athletics, 
you're helping shape it.
```

**Testimonials:**
- 3 testimonial cards
- Horizontal layout on desktop (equal width)
- Stack on mobile

**Testimonial Card Structure:**

```
┌────────────────────────────────────┐
│ "                                  │  ← Opening quote mark (decorative)
│                                    │
│ This is exactly what I needed      │  ← Quote (italic, 18px)
│ sophomore year. Wish I'd had       │
│ it then.                           │
│                                    │
│ — Sarah M., Soccer, Class of 2026  │  ← Attribution (14px, gray-600)
└────────────────────────────────────┘
```

**Card Styling:**
- Width: 300-350px (desktop), full-width (mobile)
- Padding: 32px
- Background: White
- Border: 1px Gray-200 OR subtle shadow
- Border-radius: 8px

**Quote Mark:**
- Large decorative quote: " or "
- Size: 48-60px
- Color: Gray-300
- Position: Top-left corner

**Testimonials:**

```
Testimonial 1:
"This is exactly what I needed sophomore year. Wish I'd had it then."
— Sarah M., Soccer, Class of 2026

Testimonial 2:
"Finally, I'm not losing track of which coaches emailed me back."
— Marcus T., Basketball, Class of 2027

Testimonial 3:
"My son is way more organized now. I can actually see what's happening 
without being the helicopter parent."
— Jennifer K., Parent
```

**Live Counter (Optional):**
```
Join [X] athletes already organizing their recruiting with Inbox Athletics.

*We're growing—help us reach 1,000 athletes by March 2026.*
```
- Number: Bold, Blue-600, 24-28px
- Body text: Regular, Gray-700, 16px
- Centered below testimonials

**Trust Badges:**

Grid layout: 2x2 or horizontal 4-across

```
🔒 FERPA Compliant
Your educational data is protected

🛡️ Zero Data Selling  
We never sell your information

✅ Parent Oversight
For athletes under 18

📧 You Control Sending
We never email without your permission
```

**Badge Styling:**
- Icon: 32-40px, Blue-600 or Emerald-500
- Title: 14-16px, Bold, Gray-800
- Description: 14px, Regular, Gray-600
- Layout: Icon left, text right, 16px gap

---

### 5.6 Pricing Section

**Layout:**
- Single pricing card, centered
- Max-width: 600px
- Prominent display (not hidden)

**Pricing Card Structure:**

```
┌─────────────────────────────────────────────────┐
│ 14-Day Free Trial                               │  ← Badge
│ Full access to everything. No credit card.      │
│                                                 │
│ Then $19.99/month                               │  ← Price (large)
│ Founding Member Pricing*                        │
│                                                 │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│                                                 │
│ Communication                                   │  ← Category
│ ✓ Connect your email                           │
│ ✓ Unified inbox for all coaches                │
│ ✓ Unlimited AI-assisted messages               │
│                                                 │
│ Organization                                    │
│ ✓ Unlimited schools and coaches                │
│ ✓ Personal recruiting CRM                      │
│ ✓ Relationship Health scoring                  │
│ ✓ Follow-up reminders                          │
│                                                 │
│ Events                                          │
│ ✓ Import your game schedule                    │
│ ✓ Track coach attendance                       │
│ ✓ Pre/post-event messaging                     │
│                                                 │
│ Support & More                                  │
│ ✓ Priority support                             │
│ ✓ Help shape our roadmap                       │
│ ✓ Price locked forever                         │
│                                                 │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│                                                 │
│ [Start Your 14-Day Trial]  ← CTA button        │
│                                                 │
│ 30-Day Money-Back Guarantee                    │
│ (Small, centered, gray-600)                    │
└─────────────────────────────────────────────────┘

*Founding member pricing: $19.99/month for life, even as 
we add features and raise prices for new users.
```

**Card Styling:**
- Width: 600px max, centered
- Padding: 48-56px
- Background: White OR very light Blue-50 (subtle)
- Border: 2px Blue-600 OR no border with strong shadow
- Border-radius: 12px

**Badge Styling:**
- "14-Day Free Trial": Violet-500 background, white text
- Padding: 8px 16px
- Border-radius: 20px (pill shape)
- Font: 14px, bold

**Price Display:**
- "$19.99/month": 36-42px, bold, Gray-900
- "Founding Member Pricing": 16px, Violet-600, italic

**Feature List:**
- Check icons: Emerald-500, 20px
- Text: 16px, Gray-700
- Spacing: 12px vertical between items
- Categories: 16px, bold, Gray-800, 24px margin top

**CTA Button:**
- "Start Your 14-Day Trial"
- Orange-500 background, white text
- Padding: 16px 48px
- Border-radius: 8px
- Font: 18px, bold
- Full width on mobile

**Expandable FAQs** (+ Common Questions):

Below pricing card, accordion-style reveal:

```
[+ Common Questions]  ← Click to expand

Expanded:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What happens after my trial?
On day 15, we'll charge $19.99/month. Cancel before then at no 
cost. Your account becomes read-only if you don't convert, but 
you can export your data anytime.

What's "founding member pricing"?
Lock in $19.99/month forever—even as we add features and raise 
prices for new users. Early believers get rewarded.

Can I cancel anytime?
Yes. Keep all your data. We'll even help you export it.
```

---

### 5.7 FAQ Section

**Headline:** Frequently Asked Questions

**Layout:**
- Accordion-style
- Show 5-6 core questions
- Expandable for more

**Accordion Item Structure:**

```
┌────────────────────────────────────────────────────┐
│ ▼ Is this another recruiting service I have to    │  ← Click to toggle
│    pay for?                                        │
├────────────────────────────────────────────────────┤
│ No. We don't maintain coach databases, run        │  ← Expanded state
│ showcases, or charge coaches to contact you...    │
│ (full answer text)                                 │
└────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│ ▶ Will coaches know I'm using AI?                 │  ← Collapsed state
└────────────────────────────────────────────────────┘
```

**Styling:**
- Full-width container, max-width: 900px, centered
- Each item: 100% width
- Padding: 20-24px
- Border-bottom: 1px Gray-200
- Background: White

**Interactive States:**
- Collapsed: Chevron right (▶) or down (▼), background white
- Expanded: Chevron down (▼) or up (▲), background Gray-50
- Hover: Background Gray-50, cursor pointer
- Animation: 200ms ease-in-out height transition

**Typography:**
- Question: Bold, Gray-800, 18-20px
- Answer: Regular, Gray-700, 16px, line-height 1.6
- Links in answers: Blue-600, underline on hover

**Core Questions (Always Visible):**

1. **Is this another recruiting service I have to pay for?**
   
   No. We don't maintain coach databases, run showcases, or charge coaches to contact you. We're a tool that helps you manage the relationships and communications you're already having. Your advisor gives you strategy; we help you execute with organization and follow-through.

2. **Will coaches know I'm using AI?**
   
   Your messages are sent from your email address, and you always review and edit before sending. AI is your writing assistant, not your ghostwriter. Coaches see a well-written email from you—that's it.

3. **What if my team uses TeamSnap or GameChanger?**
   
   Perfect! Import your schedule directly by pasting your calendar link. We'll bring in all your games and help you track which coaches are coming.

4. **What happens to my data if I cancel?**
   
   Export everything anytime—your contacts, message history, notes, everything. Your data belongs to you forever. We'll even help you export it in a format you can use elsewhere.

5. **Why should I trust a beta product?**
   
   We're in beta because we want to get this right with athlete feedback, not launch something "finished" that doesn't work. You get founding member pricing, direct access to our team, and influence over what we build. Plus, 30-day money-back guarantee removes all risk.

**Expandable Section** (View All FAQs):

```
[+ View All FAQs]  ← Expands to show 10-15 additional questions

Additional questions:
- I already have a recruiting advisor. Is this redundant?
- What if a coach changes schools?
- Do I need a specific email provider?
- Is my information secure?
- Can my parents see my account?
- What if I need more than 25 schools during trial?
- How is this different from other recruiting platforms?
- (etc...)
```

---

### 5.8 Final CTA Section

**Layout:**
- Centered content
- Max-width: 700px
- Background: Blue-50 OR White with top border (2px Blue-200)
- Padding: 80px vertical

**Structure:**

```
┌──────────────────────────────────────────────┐
│                                              │
│  Ready to take control of your recruiting?  │  ← H2
│                                              │
│  Join the student-athletes who are staying  │  ← Body Large
│  organized, communicating confidently, and  │
│  never missing an opportunity.              │
│                                              │
│  [Start Your Free Trial]  ← Large CTA       │
│                                              │
│  ✓ Founding member pricing                 │  ← Trust elements
│  ✓ 30-day money-back guarantee             │
│  ✓ Full access for 14 days                 │
│  ✓ Export your data anytime                │
│                                              │
└──────────────────────────────────────────────┘
```

**CTA Button:**
- Orange-500 background
- 60-64px height
- White text, bold, 18-20px
- Padding: 20px 56px
- Border-radius: 8px
- Hover: Orange-600, subtle lift shadow
- Mobile: Full width minus 32px padding

**Trust Elements:**
- Checkmarks: Emerald-500, 18px
- Text: Gray-700, 14-16px
- Layout: 2x2 grid on desktop, stack on mobile
- Spacing: 12px vertical between items

---

### 5.9 Footer

**Layout:**
- 4 columns on desktop
- Stack on mobile (single column)
- Background: Gray-50 OR White
- Top border: 1px Gray-200
- Padding: 60px vertical, standard horizontal

**Column Structure:**

**Column 1: Logo + Tagline**
```
[Inbox Athletics Logo]

Built by athletes, for athletes
```

**Column 2: Quick Links**
```
Product
- How It Works (scroll anchor)
- Pricing (scroll anchor)
- Features (scroll anchor)
```

**Column 3: Legal**
```
Legal
- Privacy Policy
- Terms of Service
- FERPA Compliance
```

**Column 4: Connect**
```
Connect
- support@inboxathletics.com
- @inboxathletics (Instagram)
- @inboxathletics (Twitter/X)
```

**Styling:**
- Column headers: 14px, bold, Gray-800
- Links: 14px, regular, Gray-600
- Link hover: Gray-900, underline
- Spacing: 12px between links

**Copyright (Centered, Bottom):**
```
© 2026 Inbox Athletics. Helping student-athletes own their recruiting journey.
```
- 14px, Gray-500, centered
- 32px margin top

---

## 6. Screenshot Integration Guide

### Provided Screenshots Analysis

**Screenshot 1: Dashboard (Hero Section)**
- **File:** `Screenshot_2026-02-07_at_11_49_24_AM.png`
- **Shows:** Main dashboard with "Your Next Actions", "Discovered Schools", "Event Suggestions", "Upcoming Events"
- **Use case:** Hero section right-side visual
- **Strengths:** Shows organized interface, personalization ("Good morning, Izzy"), clear action items
- **Crop recommendation:** Focus on "Your Next Actions" section (top half) for cleaner hero image

**Screenshot 2: AI Draft Preview**
- **File:** `Screenshot_2026-02-07_at_11_51_08_AM.png`
- **Shows:** Draft message to Appalachian State with "AI Generated" badge, performance highlights, video links
- **Use case:** Feature 2 (AI Assistant)
- **Strengths:** Shows AI-generated content, context fields, multi-step composition
- **Crop recommendation:** Full screenshot works, shows complete AI workflow

**Screenshot 3: Compose with AI (Event-Based)**
- **File:** `Screenshot_2026-02-07_at_11_50_59_AM.png`
- **Shows:** "Compose with AI" interface for post-game follow-up, recipient selection (3 schools), structured input fields
- **Use case:** Feature 2 (AI Assistant) or alternate view
- **Strengths:** Shows bulk personalized messaging, event context integration
- **Crop recommendation:** Full width, shows recipient cards at top

**Screenshot 4: Showcase Event Detail**
- **File:** `Screenshot_2026-02-07_at_11_50_30_AM.png`
- **Shows:** ECNL Texas showcase with 213 schools attending, expandable school cards with coach details
- **Use case:** Feature 4 (Event Management) or "More Features" section
- **Strengths:** Shows scale (213 schools), contact status badges ("All in contacts"), event metadata
- **Crop recommendation:** Focus on top portion with event details and 4-6 school cards

**Screenshot 5: Relationship Health Panel**
- **File:** `Screenshot_2026-02-07_at_11_50_06_AM.png`
- **Shows:** Relationship Health score (45 - Warming), detailed analysis, risks, suggested actions
- **Use case:** Feature 3 (School CRM) callout or detail
- **Strengths:** Shows AI-powered insights, sophisticated relationship tracking
- **Crop recommendation:** Full panel works, maybe slight crop on bottom

**Screenshot 6: College Detail (Brown University)**
- **File:** `Screenshot_2026-02-07_at_11_49_56_AM.png`
- **Shows:** Brown University page with AI Summary, Relationship Health (45), Coaching Staff, message thread
- **Use case:** Feature 3 (School-Based CRM)
- **Strengths:** Shows complete school view, AI summary, relationship insights, coaching staff, timeline
- **Crop recommendation:** Full height, excellent comprehensive view

**Screenshot 7: College Detail (NJIT)**
- **File:** `Screenshot_2026-02-07_at_11_49_33_AM.png`
- **Shows:** NJIT page with AI Summary, Coaching Staff (Ally Nick), message detail, suggested next steps
- **Use case:** Feature 3 (School-Based CRM) alternate or backup
- **Strengths:** Similar to Screenshot 6, shows "no relationship assessment yet" state
- **Crop recommendation:** Similar to Screenshot 6

### Screenshot Optimization Checklist

Before embedding in landing page, ensure:

- [ ] **Resolution:** Retina-ready (2x pixel density)
- [ ] **Format:** WebP with PNG fallback for browser compatibility
- [ ] **Compression:** Optimize without visible quality loss (TinyPNG or similar)
- [ ] **Alt text:** Descriptive for screen readers
- [ ] **Lazy loading:** Below-the-fold images load on scroll
- [ ] **Responsive images:** srcset for different screen sizes
- [ ] **Privacy:** Double-check no sensitive personal data visible
- [ ] **Annotations:** Add subtle UI callouts if using Option B hero approach

### Screenshot Placement Map

**Hero Section:**
- Primary: Screenshot 1 (Dashboard) - right side or full-width
- Alternative: Animated sequence showing chaos → organization

**Feature 1 (Unified Communications):**
- Primary: Screenshot 1 (Dashboard) - shows organized inbox
- Callout: "Discovered Schools" sidebar visible

**Feature 2 (AI Assistant):**
- Primary: Screenshot 2 (AI Draft) OR Screenshot 3 (Compose with AI)
- Shows: "AI Generated" badge, context fields
- Alternative: Side-by-side of input fields + generated draft

**Feature 3 (School-Based CRM):**
- Primary: Screenshot 6 (Brown University detail page)
- Callout overlay: Relationship Health panel (Screenshot 5)
- Shows: Complete program view, AI summary, timeline

**Feature 4 / Expandable Section (Event Management):**
- Primary: Screenshot 4 (Showcase event with school list)
- Shows: Event scale, coach tracking

### Design Treatment Recommendations

**Drop Shadows:**
```css
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
```
Use on screenshots to create depth and separation from background

**Browser Chrome (Optional):**
Add subtle browser window frame around screenshots for context:
```
┌─────────────────────────────────────┐
│ ○ ○ ○  inboxathletics.com          │  ← Browser bar
├─────────────────────────────────────┤
│                                     │
│     [Screenshot content]            │
│                                     │
└─────────────────────────────────────┘
```

**Device Mockups (Mobile):**
If showing mobile views, use iPhone frame mockup for familiarity

**Annotations (Hero):**
If using callout approach, style:
- Arrow: Blue-600, 2px stroke
- Label: White background, Blue-600 text, subtle shadow
- Font: 14px, medium weight

---

## 7. Interactive Elements

### 7.1 Buttons

**Primary CTA (Start Trial):**

```css
Background: #F97316 (Orange-500)
Text: White, bold, 16-18px
Padding: 16px 32px (desktop), 14px 28px (mobile)
Border-radius: 8px
Transition: all 200ms ease

Hover:
  Background: #EA580C (Orange-600)
  box-shadow: 0 6px 16px rgba(249, 115, 22, 0.3)
  transform: translateY(-2px)

Active:
  Background: #C2410C (Orange-700)
  transform: scale(0.98)

Focus:
  Outline: 3px solid rgba(249, 115, 22, 0.4)
  outline-offset: 2px
```

**Secondary CTA (Learn More, etc.):**

```css
Border: 2px solid #2563EB (Blue-600)
Text: #2563EB, bold, 16-18px
Background: Transparent
Padding: 14px 30px
Border-radius: 8px
Transition: all 200ms ease

Hover:
  Background: #DBEAFE (Blue-50)
  border-color: #1D4ED8 (Blue-700)

Active:
  Background: #BFDBFE (Blue-100)
  
Focus:
  Outline: 3px solid rgba(37, 99, 235, 0.4)
  outline-offset: 2px
```

**Link Buttons (in content):**

```css
Text: #2563EB (Blue-600), regular weight
Text-decoration: none
Transition: all 150ms ease

Hover:
  Text-decoration: underline
  color: #1D4ED8 (Blue-700)

Optional icon: → (right arrow)
  Margin-left: 4px
  Transition: transform 150ms ease
  
  Hover transform: translateX(4px)
```

### 7.2 Form Inputs (If Any)

**Text Input:**

```css
Border: 1px solid #D1D5DB (Gray-300)
Border-radius: 6px
Padding: 12px 16px
Font: 16px (prevent iOS zoom)
Background: White
Transition: all 200ms ease

Focus:
  Border: 2px solid #2563EB (Blue-600)
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1)
  outline: none

Error:
  Border: 2px solid #EF4444 (Red-500)
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1)

Success:
  Border: 2px solid #10B981 (Emerald-500)
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1)
```

**Placeholder:**

```css
Color: #9CA3AF (Gray-400)
Font-style: italic (optional)
```

### 7.3 Expandable Sections (Features, FAQs)

**Expand/Collapse Animation:**

```css
Duration: 300ms
Easing: cubic-bezier(0.4, 0, 0.2, 1)
Property: max-height, opacity

Collapsed state:
  max-height: 0
  opacity: 0
  overflow: hidden

Expanded state:
  max-height: [calculated or large value like 2000px]
  opacity: 1
  overflow: visible

Chevron icon:
  Transition: transform 200ms ease
  
  Collapsed: rotate(0deg) [or rotate(-90deg) if using ▶]
  Expanded: rotate(180deg) [or rotate(0deg) if using ▼]
```

**Hover State (Collapsed):**

```css
Background: #F9FAFB (Gray-50)
Cursor: pointer
Border-color: #2563EB (Blue-600) [optional]
```

### 7.4 Scroll Behavior

**Smooth Scroll (Anchor Links):**

```css
scroll-behavior: smooth;
```

```javascript
// Or with JS for more control:
element.scrollIntoView({ 
  behavior: 'smooth',
  block: 'start'
});
```

**Scroll Offset:**
Account for sticky nav (if present): offset by nav height + 20px padding

**Sticky Elements (Optional):**

**Sticky Navigation:**
```css
position: sticky;
top: 0;
z-index: 100;
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(10px);
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
```

**Sticky CTA (Mobile Bottom):**
```css
position: fixed;
bottom: 0;
left: 0;
right: 0;
z-index: 99;
padding: 16px;
background: white;
box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
```

### 7.5 Loading States (If Applicable)

**Button Loading:**

```css
[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading::after {
  content: "";
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 600ms linear infinite;
  display: inline-block;
  margin-left: 8px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## 8. Responsive Design

### Breakpoints

```css
/* Mobile First Approach */

/* Mobile Small */
@media (min-width: 320px) { }

/* Mobile Large */
@media (min-width: 480px) { }

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Desktop Large */
@media (min-width: 1280px) { }

/* Desktop XL */
@media (min-width: 1536px) { }
```

### Mobile-Specific Considerations

**Touch Targets:**
- Minimum 44x44px for all interactive elements (WCAG guideline)
- Increase padding on mobile buttons: 14px vertical minimum

**Font Sizes:**
- Keep body text at 16px (prevents iOS zoom on input focus)
- Reduce headline sizes by 25-30% from desktop
- Increase line-height slightly for easier reading

**Spacing:**
- Reduce section spacing by ~30% on mobile
- Decrease container padding to 20-24px
- Compress vertical rhythm while maintaining hierarchy

**Images:**
- Stack side-by-side layouts vertically
- Full-width screenshots on mobile (with padding)
- Optimize image sizes for mobile (smaller file sizes)

**Navigation:**
- Hamburger menu if nav is complex (optional)
- Sticky bottom CTA bar (optional but recommended)
- Smooth scroll to sections still works

### Tablet Considerations

**Hybrid Layouts:**
- Some elements can stay side-by-side (2-column)
- Others should stack (particularly large content blocks)
- Feature cards: 2-wide on tablet, 1-wide on mobile

**Touch Optimization:**
- Maintain 44px touch targets
- Hover states work on tablets with keyboard/mouse
- Consider touch-specific interactions (swipe, etc.) if needed

---

## 9. Performance Requirements

### Page Load Targets

**Core Web Vitals:**
- **LCP (Largest Contentful Paint):** < 2.5 seconds
- **FID (First Input Delay):** < 100 milliseconds
- **CLS (Cumulative Layout Shift):** < 0.1

**Lighthouse Score Targets:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Image Optimization

**Format:**
- Use WebP with PNG/JPG fallback
- SVG for logos and icons

**Compression:**
- Screenshots: 70-80% quality (balance size/quality)
- Use tools: TinyPNG, Squoosh, ImageOptim
- Target: < 200KB per screenshot on desktop, < 100KB mobile variant

**Lazy Loading:**
```html
<img src="hero.png" alt="Dashboard" loading="eager">
<img src="feature1.png" alt="Feature" loading="lazy">
```
- Eager load: Hero section images only
- Lazy load: Everything below the fold

**Responsive Images:**
```html
<img 
  src="dashboard-800.png" 
  srcset="
    dashboard-400.png 400w,
    dashboard-800.png 800w,
    dashboard-1200.png 1200w"
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1280px) 50vw,
    600px"
  alt="Inbox Athletics Dashboard">
```

### Font Loading

**Font-Display Strategy:**
```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
}
```

**Preload Critical Fonts:**
```html
<link rel="preload" href="/fonts/inter-regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-bold.woff2" as="font" type="font/woff2" crossorigin>
```

**Subset Fonts:**
- Include only Latin character set
- Load only weights used: 400, 500, 600, 700
- Omit unused styles (italic if not used)

### JavaScript Optimization

**Minimize JS:**
- Only use JS for essential interactivity (expand/collapse, smooth scroll)
- Prefer CSS animations where possible
- Defer non-critical scripts

```html
<script src="main.js" defer></script>
<script src="analytics.js" async></script>
```

**Code Splitting:**
- Load expandable section JS only when user interacts
- Lazy load analytics after page interactive

### CSS Optimization

**Critical CSS:**
- Inline critical above-the-fold CSS in <head>
- Load rest of CSS asynchronously

**Minification:**
- Minify all CSS and JS in production
- Remove unused CSS (PurgeCSS or similar)

### Third-Party Scripts

**Limit External Dependencies:**
- Analytics: PostHog or similar (1 script)
- No heavy frameworks unless necessary
- Self-host fonts when possible

**Async Loading:**
- Load analytics asynchronously
- Use resource hints for external resources:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://analytics.example.com">
```

---

## 10. Accessibility Requirements

### WCAG 2.1 Level AA Compliance

**Color Contrast:**
- Normal text (< 18px): 4.5:1 minimum
- Large text (18px+ or 14px+ bold): 3:1 minimum
- Interactive elements: 3:1 against background

**Test all text/background combinations:**
- Gray-700 on White: ✓ Pass (high contrast)
- Blue-600 on White: ✓ Pass  
- Orange-500 (CTA) white text: ✓ Pass
- Gray-500 on White: Check (may need Gray-600)

### Keyboard Navigation

**Tab Order:**
- Logical flow: Top to bottom, left to right
- Skip to main content link (optional but recommended)
- All interactive elements reachable via Tab

**Focus Indicators:**
```css
:focus {
  outline: 3px solid #2563EB;
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 3px solid #2563EB;
  outline-offset: 2px;
}
```

**Interactive Element Requirements:**
- Links: Must be focusable and activate on Enter
- Buttons: Focusable, activate on Enter and Space
- Expandable sections: Arrow keys to navigate (optional), Enter/Space to toggle

### Screen Reader Support

**Semantic HTML:**
```html
<header>
  <nav aria-label="Main navigation">
    ...
  </nav>
</header>

<main>
  <section aria-labelledby="features-heading">
    <h2 id="features-heading">Features</h2>
    ...
  </section>
</main>

<footer>
  ...
</footer>
```

**Alt Text Guidelines:**
- All images must have descriptive alt text
- Decorative images: `alt=""` (empty)
- Screenshots: Describe what's shown, not "screenshot of..."
  - Good: `alt="Dashboard showing pending coach replies and upcoming events"`
  - Bad: `alt="Screenshot of Inbox Athletics dashboard"`

**ARIA Labels:**

**Expandable Sections:**
```html
<button 
  aria-expanded="false" 
  aria-controls="feature-1-content"
  id="feature-1-button">
  Learn More
</button>

<div 
  id="feature-1-content" 
  aria-labelledby="feature-1-button"
  hidden>
  [Content]
</div>
```

**Navigation:**
```html
<nav aria-label="Primary">
  <a href="#features">Features</a>
  <a href="#pricing">Pricing</a>
</nav>
```

**Buttons vs Links:**
- Use `<button>` for actions (expand/collapse, submit)
- Use `<a>` for navigation (scroll to section, external link)

### Heading Hierarchy

**Strict Hierarchy (No Skipping):**
```
H1: Hero headline (only one per page)
  H2: Section headlines (Features, Pricing, FAQ)
    H3: Feature headlines, subsections
      H4: Small headings within features (if needed)
```

**Screen Reader Navigation:**
- Users navigate by headings
- Hierarchy must be logical and complete
- Don't skip levels (H2 → H4)

### Form Accessibility (If Applicable)

**Labels:**
```html
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required>
```

**Error Messages:**
```html
<input 
  type="email" 
  id="email" 
  aria-invalid="true"
  aria-describedby="email-error">
<span id="email-error" role="alert">
  Please enter a valid email address
</span>
```

**Required Fields:**
- Use `required` attribute
- Use `aria-required="true"`
- Visual indicator (asterisk or "required" text)

### Motion and Animation

**Respect User Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Safe Animations:**
- Avoid rapidly flashing content (seizure risk)
- Expandable sections: Provide instant option for reduced motion users
- Autoplay: None (static images only)

### Color Blindness Considerations

**Don't rely on color alone:**
- "REPLY NEEDED" status: Use text + color, not just blue background
- Success/error states: Use icons + color
- Links: Underline or other visual indicator, not just color

**Test with Simulators:**
- Chromatic Vision Simulator
- Browser dev tools color vision deficiency emulation

---

## 11. Content Specifications

### Copy Tone Guidelines

**Voice Characteristics:**
- Conversational but professional
- Active voice (not passive)
- Second person ("you") when addressing athlete
- First person ("we") when representing company

**Sentence Structure:**
- Average 15-20 words per sentence
- Vary sentence length for rhythm
- Short sentences for impact
- Longer sentences for explanation

**Paragraph Length:**
- 2-4 sentences per paragraph
- Break up long blocks of text
- Use white space generously

### Headline Hierarchy

**H1 (Hero):**
- 8-12 words maximum
- Clear benefit or outcome
- Active, empowering language
- Example: "Own your recruiting journey with confidence"

**H2 (Sections):**
- 4-8 words
- Can be questions or statements
- Should be scannable (meaningful at a glance)
- Example: "All your coach conversations, finally in one place"

**H3 (Features, Subsections):**
- 3-6 words
- Benefit-focused, not feature-focused
- Example: "Write better messages, faster" not "AI Message Generator"

### CTA Copy Best Practices

**Action-Oriented Verbs:**
- ✓ Start, Begin, Try, Get, Join, See
- ✗ Submit, Click Here, Learn More (vague)

**Specific, Not Generic:**
- ✓ "Start Your 14-Day Trial"
- ✗ "Get Started"

**Benefit-Driven (When Possible):**
- ✓ "Try Free for 14 Days"
- ✓ "See How It Works"

**Consistency:**
- Use same primary CTA throughout: "Start Your 14-Day Trial"
- Use same secondary CTA: "See How It Works"

### Formatting Guidelines

**Bold Emphasis:**
- Use sparingly for key points
- 1-2 bold phrases per paragraph maximum
- Bold full phrases, not random words
- Example: "**For our kids.** And for every athlete..."

**Italics:**
- Use for slight emphasis or internal thoughts
- Founder signature (optional)
- De-emphasis (fine print)

**Links:**
- Descriptive link text (not "click here")
- Example: "Read our [privacy policy]" not "[Click here] for privacy policy"
- Open external links in new tab: `target="_blank" rel="noopener"`

**Lists:**
- Use checkmarks (✓) for feature lists
- Use bullets for general lists
- Use numbers for sequential steps
- Keep parallel structure (all items start same way)

**Whitespace:**
- Generous padding around sections
- Line breaks between paragraphs
- Don't crowd content

---

## 12. Assets Provided

### Screenshots (7 Total)

**✅ Provided:**
1. Dashboard view (Dashboard_11_49_24)
2. AI Draft preview (Draft_11_51_08)
3. Compose with AI (Compose_11_50_59)
4. Showcase event detail (Showcase_11_50_30)
5. Relationship health panel (Relationship_11_50_06)
6. College detail - Brown (Brown_11_49_56)
7. College detail - NJIT (NJIT_11_49_33)

**Required Processing:**
- [ ] Optimize for web (WebP + PNG fallback)
- [ ] Create responsive sizes (400w, 800w, 1200w)
- [ ] Add descriptive alt text
- [ ] Apply subtle drop shadows in design
- [ ] Crop if needed for cleaner presentation

### Logo & Brand Assets

**Required from Client:**
- [ ] Logo (SVG format, full logo with text)
- [ ] Logo icon only (for favicon, mobile)
- [ ] Logo variants:
  - Full color on white background
  - Full color on dark background (if needed)
  - Monochrome version (optional)

**Favicon Sizes:**
- [ ] 32x32px (standard)
- [ ] 16x16px (browser tab)
- [ ] 180x180px (Apple touch icon)
- [ ] .ico format (multi-size)

### Founder Photo

**Specifications:**
- High resolution (minimum 800x800px)
- Professional but approachable
- Color photo preferred
- Circular crop or square with rounded corners

**Format:**
- [ ] JPG or PNG
- [ ] Optimized for web (< 200KB)

### Icons & Illustrations

**Feature Icons:**
- Use emoji (📧 📊 🤖) OR custom icons
- If custom icons:
  - SVG format
  - 48-64px size
  - Consistent style (outline or filled)
  - Brand colors (Blue-600 or Violet-500)

**Trust Badge Icons:**
- Lock: 🔒 (FERPA)
- Shield: 🛡️ (Zero data selling)
- Checkmark: ✅ (Parent oversight)
- Envelope: 📧 (You control sending)

**OR Custom SVG Icons:**
- [ ] Provided by designer
- Consistent 32-40px size
- Single color (Blue-600 or Emerald-500)

### Optional Assets

**Video (If Available):**
- Product demo or founder message
- Format: MP4, optimized for web
- Duration: 60-90 seconds maximum
- Hosted: YouTube or self-hosted
- Embed in hero or "How It Works" section

**Custom Illustrations:**
- Hero visual (chaos vs organization)
- 3-step process illustrations
- Empty state graphics (optional)

---

## 13. Technical Specifications

### Build Requirements

**Framework Options:**
- **Static HTML/CSS/JS** - Simple, fast, no framework needed
- **React** - If client prefers component-based
- **Next.js** - If SEO optimization is critical (SSR)
- **Astro** - Good middle ground (static but component-friendly)

**Recommendation:** Static HTML/CSS/JS or Astro for simplicity and performance

### Hosting

**Platform:** [To be determined by client]
- Options: Vercel, Netlify, AWS S3 + CloudFront, traditional hosting

**Requirements:**
- SSL certificate (HTTPS)
- CDN for asset delivery
- Compression (Gzip/Brotli)
- Caching headers configured

### Browser Support

**Target Browsers:**
- **Chrome/Edge:** Last 2 versions (95%+ users)
- **Safari:** Last 2 versions (MacOS + iOS)
- **Firefox:** Last 2 versions
- **Mobile Safari:** iOS 14+ (major demographic)
- **Chrome Mobile:** Android 10+

**Testing Priorities:**
1. Chrome (desktop + mobile) - highest traffic
2. Safari (desktop + iOS) - second highest, teen demographic
3. Firefox (desktop) - standards compliance
4. Edge (desktop) - enterprise/parent demographic

**Graceful Degradation:**
- Core functionality works without JS (if possible)
- Fallback fonts if web fonts fail to load
- Basic styling if CSS fails (semantic HTML)

### Analytics Integration

**PostHog (or Similar):**
```html
<script>
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init('[PROJECT_API_KEY]', {api_host: 'https://app.posthog.com'})
</script>
```

**Events to Track:**
- Page view (automatic)
- CTA clicks ("Start Trial" button)
- Feature expansion (which features users explore)
- Scroll depth (how far users read)
- FAQ interactions (which questions opened)
- Link clicks (external links, navigation)

### SEO Requirements

**Meta Tags:**
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Inbox Athletics - Own Your Recruiting Journey</title>
  <meta name="description" content="The communication platform built for student-athletes. Organize coach conversations, write better messages with AI, and manage your recruiting relationships.">
  
  <!-- Open Graph (Social Sharing) -->
  <meta property="og:title" content="Inbox Athletics - Own Your Recruiting Journey">
  <meta property="og:description" content="The communication platform built for student-athletes.">
  <meta property="og:image" content="https://inboxathletics.com/og-image.png">
  <meta property="og:url" content="https://inboxathletics.com">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Inbox Athletics - Own Your Recruiting Journey">
  <meta name="twitter:description" content="The communication platform built for student-athletes.">
  <meta name="twitter:image" content="https://inboxathletics.com/twitter-card.png">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://inboxathletics.com">
</head>
```

**Structured Data (JSON-LD):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Inbox Athletics",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "19.99",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "50"
  }
}
</script>
```

**Sitemap:**
- Create simple sitemap.xml
- Submit to Google Search Console

**Robots.txt:**
```
User-agent: *
Allow: /

Sitemap: https://inboxathletics.com/sitemap.xml
```

---

## 14. Launch Checklist

### Pre-Launch (Design Phase)

- [ ] All brand assets gathered (logo, photos, icons)
- [ ] Copy finalized and proofread
- [ ] Screenshots optimized for web
- [ ] Design mockups approved (desktop + mobile)
- [ ] All interactive states designed (hover, focus, active)
- [ ] Color palette confirmed and documented
- [ ] Typography finalized (fonts licensed/downloaded)

### Pre-Launch (Development Phase)

- [ ] All pages/sections developed
- [ ] Responsive design tested on real devices
- [ ] Cross-browser testing complete (Chrome, Safari, Firefox, Edge)
- [ ] Accessibility audit passed (WCAG AA)
- [ ] Performance optimized (Lighthouse 90+)
- [ ] All links functional (internal anchors, external links)
- [ ] Forms working (if applicable)
- [ ] Analytics tracking installed and tested
- [ ] SEO meta tags complete and accurate
- [ ] Favicon and app icons added
- [ ] 404 page designed and implemented
- [ ] Legal pages linked (Privacy Policy, Terms of Service)

### Pre-Launch (QA Phase)

**Functional Testing:**
- [ ] All CTAs lead to correct destinations
- [ ] Expandable sections open/close correctly
- [ ] Smooth scroll working properly
- [ ] Images load correctly (including lazy loading)
- [ ] Fonts display correctly
- [ ] No console errors in browser

**Responsive Testing:**
- [ ] Mobile (iPhone, Android) - test on physical devices
- [ ] Tablet (iPad, Android tablet)
- [ ] Desktop (1920x1080, 1440x900, 1280x800)
- [ ] Large desktop (2560x1440)
- [ ] Touch interactions work on touch devices
- [ ] Text readable on all screen sizes

**Accessibility Testing:**
- [ ] Keyboard navigation works (tab through all elements)
- [ ] Focus indicators visible
- [ ] Screen reader testing (NVDA, VoiceOver, JAWS - basic)
- [ ] Color contrast ratios meet WCAG AA
- [ ] Alt text present on all images
- [ ] Heading hierarchy correct

**Performance Testing:**
- [ ] Page load time < 2 seconds on 4G
- [ ] Lighthouse Performance score 90+
- [ ] Images optimized and compressed
- [ ] No render-blocking resources
- [ ] Fonts loading efficiently

**SEO Testing:**
- [ ] Meta tags complete and accurate
- [ ] Open Graph tags display correctly in social share preview
- [ ] Structured data valid (test with Google Rich Results Test)
- [ ] Canonical URL set
- [ ] Sitemap created and accessible

### Launch Day

- [ ] DNS configured and propagated
- [ ] SSL certificate active and verified
- [ ] Hosting/CDN configured correctly
- [ ] Redirects from old site (if applicable) working
- [ ] Analytics tracking verified (test events)
- [ ] Uptime monitoring enabled (Pingdom, UptimeRobot, etc.)
- [ ] Error tracking enabled (Sentry or similar)
- [ ] Backup created before going live
- [ ] Team notified of launch
- [ ] Social media announcement ready
- [ ] Support email monitoring active

### Post-Launch (Week 1)

- [ ] Monitor analytics for traffic patterns
- [ ] Check for errors in error tracking system
- [ ] Review page load times under real traffic
- [ ] Gather initial user feedback
- [ ] Fix any critical bugs immediately
- [ ] Monitor conversion rates (trial sign-ups)
- [ ] Check mobile vs desktop traffic split
- [ ] Review scroll depth and engagement metrics

### Post-Launch (Week 2-4)

- [ ] Analyze which features users engage with most
- [ ] Review FAQ interaction data
- [ ] Identify drop-off points in user journey
- [ ] A/B test variations (see section 15)
- [ ] Iterate on copy based on user feedback
- [ ] Optimize any slow-loading elements
- [ ] Review and respond to user feedback

---

## 15. A/B Testing Plan

### Testing Infrastructure

**Recommendation:** Use PostHog Feature Flags or Google Optimize

**Key Principle:** Test one element at a time for clear results

### Priority Tests (Launch Month)

**Test 1: Hero Headline** (Week 1-2)

**Hypothesis:** Empowerment messaging resonates better with athletes than problem-focused messaging

**Variants:**
- **A (Control):** "Own your recruiting journey with confidence"
- **B (Variant):** "Finally, recruiting communications that don't overwhelm"

**Success Metric:** 
- Primary: Scroll depth past hero (% of users scrolling to feature section)
- Secondary: Time on page, trial sign-up rate

**Sample Size:** Minimum 1,000 visitors per variant
**Duration:** 1-2 weeks

---

**Test 2: CTA Copy** (Week 2-3)

**Hypothesis:** Specific trial duration increases trust and click-through

**Variants:**
- **A (Control):** "Start Your 14-Day Trial"
- **B (Variant):** "Get Started Free"
- **C (Variant):** "Try Free for 14 Days"

**Success Metric:**
- Primary: CTA click-through rate
- Secondary: Trial sign-up conversion rate

**Sample Size:** Minimum 500 visitors per variant
**Duration:** 1 week

---

**Test 3: Feature Defaults** (Week 3-4)

**Hypothesis:** First feature expanded increases engagement with feature content

**Variants:**
- **A (Control):** All features collapsed by default
- **B (Variant):** First feature (Unified Communications) expanded by default

**Success Metric:**
- Primary: Feature engagement rate (% expanding at least one feature)
- Secondary: Time spent on page, scroll depth

**Sample Size:** Minimum 1,000 visitors per variant
**Duration:** 1 week

---

**Test 4: Social Proof Placement** (Week 4-5)

**Hypothesis:** Early credibility (founder story before features) increases trust and scroll depth

**Variants:**
- **A (Control):** Founder story after hero, before features
- **B (Variant):** Founder story after features, before pricing

**Success Metric:**
- Primary: Scroll depth to pricing section
- Secondary: Time on page, trial sign-up rate

**Sample Size:** Minimum 1,000 visitors per variant
**Duration:** 1-2 weeks

---

### Secondary Tests (Month 2+)

**Test 5: Pricing Display**
- A: Pricing shown immediately
- B: "See Pricing" CTA reveals pricing section
- Metric: Trial sign-up conversion rate

**Test 6: Screenshot Style**
- A: Plain screenshots with drop shadow
- B: Screenshots with browser chrome/device frame
- Metric: Engagement with feature sections

**Test 7: Testimonial Format**
- A: Text-only testimonials
- B: Testimonials with user photos (if available)
- Metric: Scroll depth, trust perception survey

**Test 8: Hero Visual**
- A: Single organized dashboard screenshot
- B: Split-screen chaos vs organized comparison
- Metric: Clarity perception, trial sign-up rate

---

### Testing Best Practices

**Statistical Significance:**
- Don't end tests early (wait for significance)
- Use 95% confidence level
- Minimum 1,000 visitors per variant (adjust based on traffic)

**Segmentation:**
- Consider testing separately for mobile vs desktop
- Parent vs athlete traffic (if distinguishable)
- Paid vs organic traffic

**Iteration:**
- Run only one test at a time (avoid interaction effects)
- Document all test results
- Implement winners, archive losers
- Continuous improvement mindset

---

## 16. Timeline

### Suggested 4-Week Sprint

**Week 1: Design & Assets**
- Day 1-2: Kickoff, review handoff doc, gather assets
- Day 3-5: Wireframes and layout design (desktop)
- Day 6-7: High-fidelity mockups (desktop), client review

**Week 2: Mobile Design & Refinement**
- Day 1-2: Mobile mockups (all breakpoints)
- Day 3-4: Interactive prototype (Figma or similar)
- Day 5-7: Client feedback, revisions, final approval

**Week 3: Development & Integration**
- Day 1-3: HTML/CSS build (desktop + responsive)
- Day 4-5: JavaScript (expandable sections, smooth scroll)
- Day 6-7: Screenshot integration, content population

**Week 4: Testing & Launch**
- Day 1-2: Cross-browser testing, accessibility audit
- Day 3-4: Performance optimization, bug fixes
- Day 5: Staging review with full team
- Day 6: Final QA checklist
- Day 7: Launch! 🚀

**Post-Launch:**
- Week 5: Monitor, gather feedback, fix critical bugs
- Week 6+: A/B testing, iteration, optimization

---

## Contact & Collaboration

**Product Lead:** Michael  
**Email:** [Your email]

**Designer:** [Designer name/contact]  
**Developer:** [Developer name/contact]

**Communication Channels:**
- Slack: [Channel name] for quick questions
- Email: Formal approvals and deliverables
- Meetings: Weekly check-ins during design/dev phase

**Feedback Process:**
- Design reviews: Figma comments + consolidated feedback doc
- Development reviews: Staging URL + GitHub issues (if applicable)
- Final approval: Sign-off checklist before launch

---

## Appendix

### Additional Resources

**Color Contrast Checker:**
- https://webaim.org/resources/contrastchecker/

**Accessibility Testing:**
- WAVE: https://wave.webaim.org/
- axe DevTools: Browser extension for accessibility auditing

**Performance Testing:**
- Lighthouse: Built into Chrome DevTools
- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/

**Image Optimization:**
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/

**Font Resources:**
- Inter Font: https://rsms.me/inter/
- Google Fonts: https://fonts.google.com/

**Inspiration:**
- Landing pages: https://landingfolio.com/
- SaaS pages: https://saaslandingpage.com/

---

## Document Version History

**Version 2.0** (February 2026)
- Added screenshot analysis and integration guide
- Updated color palette based on product UI
- Refined feature descriptions with product context
- Added relationship health score as differentiator
- Enhanced competitive positioning language

**Version 1.0** (February 2026)
- Initial comprehensive handoff document

---

**End of Handoff Document**

This document provides your designer with everything needed to create a high-quality landing page that accurately represents your product and drives trial sign-ups. The screenshots you provided show a polished, professional application—the landing page should match that quality and authenticity.

Good luck with the refresh! 🚀
