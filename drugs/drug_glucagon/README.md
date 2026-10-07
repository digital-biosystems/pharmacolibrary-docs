<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H04A&quot;,&quot;href&quot;:&quot;atc/H04A.md&quot;},{&quot;label&quot;:&quot;glucagon&quot;}]"></div>

# glucagon

- **generic name:** glucagon
- **ATC codes:** `H04AA01`
- **DrugBank:** [DB00040](https://go.drugbank.com/drugs/DB00040) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Glucagon is a pancreatic hormone used to treat severe low blood sugar in people with diabetes. It is an approved medicine, listed among WHO essential medicines, and products are authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q170617](https://www.wikidata.org/wiki/Q170617) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:54 | 1:46 | 0/0/0 | 0/0/0 | 0/0/0 | 168,042/4,175 | einfracz / qwen3.8-27b | 11 | 1/10 | 11/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glucagon) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GCGR (target), GLP1R (target), GLP2R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 361 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2016 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of saxagliptin, a DPP-4 inhibitor, and mentions glucagon only as a physiological hormone whose secretion is suppressed by the drug, not as the subject of PK analysis. |
| popPK | Barrett_2025 | irrelevant | 0 | 0 | The paper compares bariatric surgery and GLP-1 receptor agonists for obesity treatment and does not contain any pharmacokinetic data or parameters for glucagon. |
| popPK | Boland_2017 | irrelevant | 0 | 0 | The paper is a review on the plasticity of insulin production in beta-cells and does not report pharmacokinetic parameters for the drug glucagon. |
| popPK | Borlaug_2025 | irrelevant | 0 | 0 | The paper is a clinical trial analysis regarding the heart failure outcomes of tirzepatide and does not contain pharmacokinetic parameters for glucagon. |
| popPK | Eissing_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of finerenone, not glucagon. |
| popPK | Guo_2023 | irrelevant | 0 | 0 | The paper studies ecnoglutide, a GLP-1 analog, not the drug glucagon; PK parameters provided are for ecnoglutide in humans and rats. |
| popPK | Langeskov_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paracetamol and atorvastatin with semaglutide (a GLP-1 analogue), not the drug glucagon itself. |
| popPK | Liles_2024 | irrelevant | 0 | 0 | The study focuses on chemical stability, aggregation, and receptor agonism of glucagon conjugates, reporting no pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Long_2024 | irrelevant | 0 | 0 | The study investigates the clinical outcomes of semaglutide (a GLP-1 receptor agonist) in patients with renal failure, not the pharmacokinetics of glucagon. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for orforglipron (a GLP-1 receptor agonist), not the drug glucagon. |
| popPK | Overgaard_2021 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of semaglutide (a GLP-1 analogue), not the drug glucagon. |
| popPK | Pan_2022 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics and cardiovascular outcomes of GLP-1 receptor agonists and DPP-4 inhibitors, not glucagon. |
| popPK | Schneck_2024 | irrelevant | 0 | 0 | The study reports the population pharmacokinetics of tirzepatide, not glucagon. |
| popPK | Strathe_2023 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of semaglutide (a GLP-1 analogue), not the drug glucagon. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study focuses on the exposure-response of efsubaglutide alfa (a GLP-1 agonist), not the pharmacokinetics of the drug glucagon. |
| popPK | Wilding_2016 | irrelevant | 0 | 0 | The study analyzes the exposure-response relationship of liraglutide for weight management and does not report pharmacokinetic parameters for the drug glucagon. |
| popPK | Young_2005 | irrelevant | 0 | 0 | The text is a physiological review of glucagon secretion mechanisms and the inhibitory effects of amylin, containing no pharmacokinetic parameters (CL, V, t1/2, ka) for glucagon itself. |
| popPK | Yu_2024 | irrelevant | 0 | 0 | The study models the pharmacokinetics and nausea response of cotadutide, a dual GLP-1/glucagon receptor agonist, not the peptide hormone glucagon itself. |
| popPK | Yu_2025 | irrelevant | 0 | 0 | The study focuses on cotadutide (a GLP-1/glucagon receptor agonist) in CKD/T2DM patients, not the pharmacokinetics of native glucagon. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
