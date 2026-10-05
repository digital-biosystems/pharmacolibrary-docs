<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11C&quot;,&quot;href&quot;:&quot;atc/A11C.md&quot;},{&quot;label&quot;:&quot;dihydrotachysterol&quot;}]"></div>

# dihydrotachysterol

- **generic name:** dihydrotachysterol
- **ATC codes:** `A11CC02`
- **DrugBank:** [DB01070](https://go.drugbank.com/drugs/DB01070) · **PubChem:** [CID 5311071](https://pubchem.ncbi.nlm.nih.gov/compound/5311071)
- **molar mass:** 398.6642 g/mol (C28H46O) — DrugBank
- **groups:** approved, withdrawn

## About

Dihydrotachysterol, a vitamin D analogue, was used to treat chronic renal insufficiency and hyperparathyroidism. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q155685](https://www.wikidata.org/wiki/Q155685) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:02 | 0:41 | 0/0/0 | 0/0/0 | 0/0/0 | 17,808/909 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 2/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dihydrotachysterol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: VDR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abitbol_1990 | irrelevant | 0 | 0 | The study focuses on growth and anthropometric measurements in children with renal insufficiency, not the pharmacokinetic parameters of dihydrotachysterol. |
| popPK | Belldina_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cysteamine, not dihydrotachysterol. |
| PD | Belldina_2003 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for cysteamine, not dihydrotachysterol. |
| popPK | Caplan_1990 | irrelevant | 0 | 0 | The paper is a clinical case report regarding hypercalcemia management and does not report any pharmacokinetic parameters for dihydrotachysterol. |
| PD | Caplan_1990 | not_relevant | 1 | 0 | The paper is a clinical case report describing qualitative dose adjustments and clinical outcomes (hypercalcemia) without providing any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Chan_1994 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing growth outcomes and renal function, not a pharmacokinetic study, and contains no PK parameters for dihydrotachysterol. |
| PD | Chan_1994 | not_relevant | 1 | 0 | The paper reports clinical outcomes (growth, GFR decline) and compares two drugs, but it does not provide a concentration-effect or dose-response curve with numeric PD parameters (e.g., EC50, Emax) for dihydrotachysterol. |
| popPK | FRITSCH_1961 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | FRITSCH_1961 | not_relevant | 0 | 0 | The paper reports histological findings in rat kidneys following overdose, which is a qualitative toxicological observation rather than a quantitative pharmacodynamic or exposure-response analysis. |
| popPK | Fox_1984 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of calcitonin, using dihydrotachysterol only as a tool to induce hypercalcemia. |
| popPK | Gasser_1990 | irrelevant | 0 | 0 | The paper is a review of calcium antagonists that mentions dihydrotachysterol only as a cause of cardiac necrosis, without reporting any pharmacokinetic parameters. |
| PD | Gasser_1990 | not_relevant | 1 | 0 | The text is a review discussing the general pharmacology of calcium antagonists and mentions dihydrotachysterol only as a cause of calcium overload, without providing any specific exposure-response data or numeric PD parameters. |
| popPK | Heyburn_1977 | irrelevant | 1 | 0 | The paper is a clinical retrospective study comparing therapeutic efficacy and mentions "biological half-life" qualitatively, but provides no quantitative pharmacokinetic parameters (CL, V, ka) or PK model for dihydrotachysterol. |
| popPK | Jalbert_2018 | irrelevant | 0 | 0 | This is a clinical case report of dihydrotachysterol intoxication that discusses qualitative half-life but does not report quantitative pharmacokinetic parameters (CL, V, etc.). |
| PD | Jalbert_2018 | not_relevant | 1 | 0 | The paper is a case report describing a single instance of dihydrotachysterol intoxication without any quantitative pharmacodynamic modeling, dose-response analysis, or numeric PD parameters. |
| popPK | Jensterle_2010 | irrelevant | 0 | 0 | This is a clinical case report on the treatment of dihydrotachysterol intoxication, not a pharmacokinetic study, and it does not report quantitative disposition parameters (CL, V, etc.). |
| popPK | Koytchev_1994 | irrelevant | 4 | 2 | The study reports bioavailability (AUC) but lacks explicit quantitative disposition parameters like clearance, volume, or half-life. |
| PD | Koytchev_1994 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic bioavailability data (AUC) and does not measure or model any pharmacodynamic effect or exposure-response relationship. |
| popPK | Mak_1985 | irrelevant | 0 | 0 | The study is a clinical trial on phosphate binders where dihydrotachysterol is only a co-administered agent with unchanged dosage, and no pharmacokinetic parameters are reported. |
| PD | Mak_1985 | not_relevant | 0 | 0 | The paper is a clinical trial comparing phosphate binders where dihydrotachysterol dosage was held constant, and it reports no exposure-response or dose-response analysis for dihydrotachysterol. |
| popPK | Marone_1983 | irrelevant | 0 | 0 | The study investigates renal tubular reabsorption of calcium in dogs, using dihydrotachysterol only as a maintenance therapy for hypocalcemia, and does not report pharmacokinetic parameters for the drug. |
| popPK | Peterson_1991 | irrelevant | 0 | 0 | The paper is a clinical case report on the treatment of hypoparathyroidism in cats and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for dihydrotachysterol. |
| PD | Peterson_1991 | not_relevant | 0 | 0 | The paper describes clinical management of hypoparathyroidism in cats using calcium and vitamin D, with no mention of dihydrotachysterol or any pharmacodynamic modeling. |
| popPK | Schilling_1997 | irrelevant | 0 | 0 | The paper is a clinical survey and retrospective study on the management of hypoparathyroidism, reporting treatment preferences and correlations with serum levels, but it does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for dihydrotachysterol. |
| popPK | Soehnlen_2011 | irrelevant | 0 | 0 | The study is an antimicrobial screening assay for Mycoplasma bovis where dihydrotachysterol is a test compound, not a pharmacokinetic study. |
| popPK | Stamp_1981 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing vitamin D analogs for osteomalacia and does not report pharmacokinetic parameters for dihydrotachysterol. |
| PD | Stamp_1981 | not_relevant | 2 | 1 | The paper reports relative potency ratios (dose-response comparison) for dihydrotachysterol but lacks specific concentration-effect data, Emax/EC50 parameters, or a formal PK/PD model. |
| popPK | Stroehlein_2021 | irrelevant | 0 | 0 | The paper is a systematic review of vitamin D supplementation for COVID-19 and does not report pharmacokinetic parameters for dihydrotachysterol. |
| PD | Stroehlein_2021 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials for vitamin D in COVID-19 and does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for dihydrotachysterol. |
| popPK | Taylor_1988 | irrelevant | 4 | 2 | The study reports qualitative pharmacokinetic observations (peak time, percentage decline) but lacks quantitative compartmental parameters (CL, V, ka) required for population PK modeling. |
| popPK | Thomson_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lisinopril, not dihydrotachysterol. |
| PD | Thomson_1989 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of lisinopril, not dihydrotachysterol, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Ziegler_1975 | irrelevant | 0 | 0 | The paper is a clinical case report on vitamin D and dihydrotachysterol poisoning focusing on hypercalcemia management, with no pharmacokinetic parameters or quantitative disposition data reported. |
| PD | Ziegler_1975 | not_relevant | 0 | 0 | The text is a clinical case report on toxicity and management, containing no pharmacokinetic or pharmacodynamic data, concentration-effect curves, or numeric PD parameters. |
| popPK | van_1982 | irrelevant | 0 | 0 | The study focuses on fluoride disposition and bone density changes, using dihydrotachysterol only as a co-administered agent without reporting its pharmacokinetic parameters. |
| PD | van_1982 | not_relevant | 3 | 2 | The paper reports a qualitative threshold effect for sodium fluoride (bone fluoride content &gt;= 0.20%) but does not provide numeric PD parameters (Emax, EC50, etc.) or a quantitative concentration-effect curve for dihydrotachysterol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
