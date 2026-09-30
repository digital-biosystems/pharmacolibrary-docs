<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;nedosiran&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nedosiran_Zhang2025_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nedosiran/Nedosiran_Zhang2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# nedosiran

- **generic name:** nedosiran
- **ATC codes:** `A16AX25`
- **DrugBank:** [DB17635](https://go.drugbank.com/drugs/DB17635) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Nedosiran is an RNA interference targeting hepatic lactate dehydrogenase, the enzyme responsible for the conversion of glyoxylate to oxalate.[A261690] Oxalate, particularly calcium oxalate, precipitation is the main cause of kidney stones formation; therefore, blocking the production of oxalate can help alleviate renal symptoms.[A261685]

Nedosiran was approved by the FDA on October 2<sup>nd</sup>, 2023, under the brand name RIVFLOZA to lower urinary oxalate levels in children 9 years of age and older and adults with primary hyperoxaluria type 1 (PH1) and relatively preserved kidney function. This approval is based on the favorable results from the pivotal phase 2 PHYOX<sup>TM</sup>2 and interim data from the ongoing phase 3 PHYOX<sup>TM</sup>3 clinical trials.[L48325]

**Indication.** RIVFLOZA is indicated to lower urinary oxalate levels in children 9 years of age and older and adults with primary hyperoxaluria type 1 (PH1) and relatively preserved kidney function, e.g., eGFR ≥ 30 mL/min/1.73 m<sup>2</sup>.[L48320]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 03:07 | 6:51 | 0/0/1 | 2/0/0 | 0/0/0 | 84,310/26,347 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.885). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q66, Q22, Q61 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2025_reference](drugs/drug_nedosiran/Nedosiran_Zhang2025_reference.md) | — | 3-compartment (no model) | 10 | Zhang S et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01540-1](https://doi.org/10.1007/s40262-025-01540-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.304). The first reading is what the record holds.">cross-check: disputed</span> | [Hoppe_2022_mmol](drugs/drug_nedosiran/pd_Hoppe_2022_mmol.md) | Uox ← nedosiran · indirect response — drug inhibits the production of Uox | — | Hoppe B et al., Safety, pharmacodynamics, and exposure-…, Kidney international (2022) | [10.1016/j.kint.2021.08.015](https://doi.org/10.1016/j.kint.2021.08.015) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span> | [Zhang_2025_Uox_Cr](drugs/drug_nedosiran/pd_Zhang_2025_Uox_Cr.md) | spot urine oxalate-to-creatinine ratio ← nedosiran · indirect response — drug inhibits the production of spot urine oxalate-to-creatinine ratio | — | Zhang S et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01540-1](https://doi.org/10.1007/s40262-025-01540-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nedosiran) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…administered nedosiran dose is excreted unchanged into the urine within 24 hours of dosing…”</sub> | prose |

<sub>Actors without a tissue in the table: LDHA (antisense oligonucleotide).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Amrite_2023.pdf` | Amrite A et al., Safety, Pharmacokinetics, and Exposure-…, Clinical pharmacology in dr… (2023) | pd | 5 | [10.1002/cpdd.1320](https://doi.org/10.1002/cpdd.1320) | [37605486](https://www.ncbi.nlm.nih.gov/pubmed/37605486) | metadata signals extractable PD data (Exposure-Response) |
| `Zhang_2024.pdf` | Zhang S et al., Nedosiran population pharmacokinetic an…, British journal of clinical… (2024) | pd | 5 | [10.1111/bcp.16194](https://doi.org/10.1111/bcp.16194) | [39113219](https://www.ncbi.nlm.nih.gov/pubmed/39113219) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-09-30T03:00:56.444901+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amrite_2023 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PGx | Gupta_2022 | not_relevant | 0 | 0 | The text discusses the treatment of primary hyperoxaluria type 1 and mentions pyridoxine response based on genotype, but it does not report any pharmacogenomic effects on the PK or PD parameters of nedosiran. |
| popPK | Hoppe_2022 | relevant | 8 | 2 | The paper describes a population PK/PD model for nedosiran, but specific quantitative parameter values (CL, V, Q) are not present in the provided text, with key data referenced in Supplementary Tables and Figures. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | no_text gate: only 176 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 14:45 UTC</sub>
