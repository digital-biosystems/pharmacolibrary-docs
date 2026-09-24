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
| 2026-09-24 00:52 | 2:55 | 0/1/0 | 0/0/0 | 0/0/0 | 38,960/6,548 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.556). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Yan_2026_reference](drugs/drug_mirtazapine/Mirtazapine_Yan2026_reference.md) | Yan H et al., Optimizing Mirtazapine Initial Dosing:…, Drug design, development an… (2026) | [10.2147/DDDT.S601238](https://doi.org/10.2147/DDDT.S601238) |

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

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grasmäder_2004.pdf` | Grasmäder K et al., Population pharmacokinetic analysis of…, European journal of clinica… (2004) | popPK | 10 | [10.1007/s00228-004-0737-0](https://doi.org/10.1007/s00228-004-0737-0) | [15289959](https://pubmed.ncbi.nlm.nih.gov/15289959) | The paper is a population PK study of mirtazapine, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence, only a relative change in clearance is mentioned. |

<sub>queue written 2026-09-24T00:49:37.099137+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blumenthal_2014 | irrelevant | 0 | 0 | The study is an electronic health records analysis of weight gain associated with antidepressants and does not report any pharmacokinetic parameters for mirtazapine. |
| popPK | Cardon-Dunbar_2017 | irrelevant | 0 | 0 | The study focuses on pramipexole pharmacokinetics in an overdose case, with mirtazapine only mentioned as a co-ingested substance without any PK parameters reported for it. |
| popPK | Furukawa_2018 | irrelevant | 0 | 0 | This is an efficacy meta-analysis and not a pharmacokinetic study; no mirtazapine PK parameters are reported. |
| popPK | Grasmäder_2004 | relevant | 10 | 0 | The paper is a population PK study of mirtazapine, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence, only a relative change in clearance is mentioned. |
| popPK | Munk_2011 | irrelevant | 4 | 2 | This is a PET brain imaging study of radiolabeled mirtazapine binding, not a disposition/PK parameter paper, and the actual numeric values are not shown in the included evidence (likely in tables/supplement). |
| popPK | Nowakowska_1999 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in rats and does not report any pharmacokinetic parameters for mirtazapine. |
| popPK | Park_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor interaction, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Pawlyk_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of mirtazapine on thermoregulation in rats and does not report any pharmacokinetic parameters. |
| popPK | Puzhko_2021 | irrelevant | 0 | 0 | The paper is a prescribing pattern study and does not report any pharmacokinetic parameters for mirtazapine. |
| popPK | Schneier_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for PTSD treatment and does not report any pharmacokinetic parameters for mirtazapine. |
| popPK | Ueno_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing dosing strategies for depression and does not report any pharmacokinetic parameters for mirtazapine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 13:36 UTC</sub>
