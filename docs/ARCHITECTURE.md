# CalcMint Architecture

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- MDX
- Vercel

---

# Folder Structure

app/
components/
config/
content/
data/
docs/
lib/
public/

---

# Routing

/

/calculators

/calculators/[slug]

/guides

/guides/[slug]

/categories/[slug]

---

# Components

## Layout

- Navbar
- Footer
- Container

## Home

- Hero
- Featured Calculators
- Categories
- Why CalcMint
- Latest Guides
- Newsletter

## Calculator

- Calculator Form
- Result Card
- FAQ
- Formula
- Explanation

## Blog

- Guide Card
- TOC
- Author
- Related Posts

---

# Data Flow

User

↓

Calculator

↓

Validation

↓

Calculation

↓

Formatting

↓

Results

↓

Related Guides

---

# SEO

Every page includes:

- Metadata
- Canonical URL
- Open Graph
- JSON-LD
- Breadcrumb Schema
- FAQ Schema
- Sitemap
- Robots.txt