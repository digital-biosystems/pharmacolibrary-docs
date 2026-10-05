<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;dantron, incl. combinations&quot;}]"></div>

# dantron, incl. combinations

- **generic name:** dantron, incl. combinations
- **ATC codes:** `A06AG03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:21 | 2:22 | 0/0/0 | 0/0/0 | 0/0/0 | 65,049/1,712 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 2/6 | 7/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 0 matched, 27 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akuzawa_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of DNA modification by anthraquinones, not a pharmacokinetic study of dantron. |
| popPK | Anderson_2020 | irrelevant | 0 | 0 | The paper studies the photodegradation and self-healing of anthraquinone derivatives in PMMA, not the pharmacokinetics of dantron. |
| popPK | Balachandran_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on cancer signaling pathways and does not report pharmacokinetic parameters for dantron (danthron). |
| popPK | Case_1977 | irrelevant | 0 | 0 | The paper reports acute and chronic toxicity (LD50) data, not pharmacokinetic disposition parameters. |
| popPK | Chen_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of danthron's effect on autophagy and cancer cell viability, reporting no pharmacokinetic parameters. |
| popPK | Cheng_2017 | irrelevant | 0 | 0 | Dantron is used only as an internal standard for a chemical analysis method, not as a subject drug for pharmacokinetic study. |
| popPK | Dai_2024 | irrelevant | 0 | 0 | The paper is a network pharmacology and in vitro mechanistic study on Alzheimer's disease, not a pharmacokinetic study, and contains no PK parameters for dantron. |
| popPK | Gattuso_1994 | irrelevant | 0 | 0 | The paper is a review of adverse effects of laxatives and antidiarrhoeals, containing no pharmacokinetic data or quantitative disposition parameters for dantron. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study on super-enhancers in hepatocellular carcinoma where Danthron is used only as a cytotoxicity agent in cell assays and tumor growth models, with no pharmacokinetic parameters reported. |
| popPK | Leng-Peschlow_1993 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (faecal weight, water content, aldosterone levels) rather than quantitative pharmacokinetic parameters (CL, V, ka) for dantron. |
| popPK | Ma_2021 | irrelevant | 0 | 0 | The study focuses on the mechanistic effects of danthron on obesity and MAFLD in mice and in vitro, without reporting any quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Moreau_1985 | irrelevant | 2 | 1 | The study reports only excretion fractions (percent of dose) in rats, not quantitative PK parameters like clearance, volume, or half-life. |
| popPK | Ni_2026 | irrelevant | 0 | 0 | The study investigates the mechanistic anti-inflammatory and antioxidant effects of danthron in a colitis model and cell lines, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Rolta_2021 | irrelevant | 0 | 0 | The study is an in silico molecular docking simulation of phytocompounds against a viral protein and does not report any pharmacokinetic parameters for dantron. |
| popPK | Rosengren_1975 | irrelevant | 0 | 0 | The paper describes a clinical protocol for bowel cleansing using Dantron as a laxative, but does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Schaltegger_1985 | irrelevant | 0 | 0 | The paper describes the chemical oxidation pathways of dithranol (dantron) in vitro, not pharmacokinetic parameters. |
| popPK | Shi_2021 | irrelevant | 0 | 0 | The study focuses on the mechanistic effects of danthron on atherosclerosis and foam cell formation, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Sund_1987 | irrelevant | 2 | 0 | The study reports excretion data (dose fractions, ratios) and metabolite identification but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Wang_1987 | irrelevant | 0 | 0 | The study is an in-vitro permeation study of anthralin and its degradation products (danthron/dianthrone), not a pharmacokinetic study of dantron. |
| popPK | Wölfle_1990 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of tumor promotion and cell proliferation, not a pharmacokinetic study. |
| popPK | Xing_2001 | irrelevant | 0 | 0 | The paper is a review of adverse effects of laxatives and mentions danthron only in the context of hepatotoxicity, providing no pharmacokinetic parameters. |
| popPK | Yousif_2023 | irrelevant | 0 | 0 | The paper is an in-silico molecular docking and dynamics study focusing on binding affinity to CDK4/6 and aromatase, containing no pharmacokinetic data for dantron. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | The study focuses on the molecular mechanism of danthron as an RXR antagonist and in vivo efficacy in mice, reporting no pharmacokinetic parameters. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper is a computational study on drug-drug interaction prediction and in-vitro efficacy, containing no pharmacokinetic parameters for dantron. |
| popPK | Zhou_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of AMPK activation and lipid/glucose metabolism in cell lines, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | unknown_1990 | irrelevant | 0 | 0 | no_text gate: only 47 chars of text extracted (&lt; 400) |
| popPK | unknown_2021 | irrelevant | 0 | 0 | The paper is a methodological description of the Report on Carcinogens process and contains no pharmacokinetic data for dantron. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
