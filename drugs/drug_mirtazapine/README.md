<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;mirtazapine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mirtazapine_Yan2026_reference&quot;,&quot;label&quot;:&quot;Yan_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_mirtazapine/Mirtazapine_Yan2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# mirtazapine

- **generic name:** mirtazapine
- **ATC codes:** `N06AX11`
- **DrugBank:** [DB00370](https://go.drugbank.com/drugs/DB00370)
- **groups:** approved, investigational

## About

**Description.** Mirtazapine is a tetracyclic _piperazino-azepine_ antidepressant agent that was initially approved for the treatment of major depressive disorder (MDD) in the Netherlands in 1994.[A177946] This drug was first manufactured by Organon Inc., and received FDA approval in 1997 for the treatment of major depressive disorder.[T595, L6157] The effects of this drug may be observed as early as 1 week after beginning therapy.[A178144,L6160]

In addition to its beneficial effects in depression, mirtazapine has been reported to be efficacious in the off-label management of various other conditions.  It may improve the symptoms of neurological disorders, reverse weight loss caused by medical conditions, improve sleep, and prevent nausea and vomiting after surgery.[A177811]

**Indication.** This drug is indicated for the treatment of major depressive disorder and its associated symptoms.[FDA label]

Mirtazapine has been used off-label for a variety of conditions including panic disorder, generalized anxiety disorder, dysthymia, tension headaches, hot flushes, post-traumatic stress disorder (PTSD), sleep disorders, substance abuse disorders, and sexual disorders, among others.[A177811,A177946]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 11 | 3/0 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Yan_2026_reference](drugs/drug_mirtazapine/Mirtazapine_Yan2026_reference.md) | Yan H et al., Optimizing Mirtazapine Initial Dosing:…, Drug design, development an… (2026) | [10.2147/DDDT.S601238](https://doi.org/10.2147/DDDT.S601238) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mirtazapine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>“…this drug is rapid and complete.[A177826, FDA label] Due to first pass metabolism in the l…”</sub> | prose |
| absorption | small intestine | <sub>“…to first pass metabolism in the liver and metabolism in the gut wall, absolute bioavailabi…”</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…It is 75% eliminated in the urine and 15% eliminated in the feces.[A177826]…”</sub> | prose |
| excretion | kidney | <sub>“…This drug is mainly excreted by the kidney. It is 75% eliminated in the urine and 15% elim…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor/substrate | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: 5HT3 serotonin receptor (target), ADRA1A (target), ADRA2A (target), HRH1 (target), HTR2A (target), HTR2C (target), OPRK1 (target).</sub>

## Coverage

- **PubMed hits:** 18 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Furukawa_2018 | irrelevant | 0 | 0 | This is an efficacy meta-analysis and not a pharmacokinetic study; no mirtazapine PK parameters are reported. |
| popPK | Munk_2011 | irrelevant | 4 | 2 | This is a PET brain imaging study of radiolabeled mirtazapine binding, not a disposition/PK parameter paper, and the actual numeric values are not shown in the included evidence (likely in tables/supplement). |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_mirtazapine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
