<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01A&quot;,&quot;href&quot;:&quot;atc/H01A.md&quot;},{&quot;label&quot;:&quot;corticotropin&quot;}]"></div>

# corticotropin

- **generic name:** corticotropin
- **ATC codes:** `H01AA01`
- **DrugBank:** [DB01285](https://go.drugbank.com/drugs/DB01285) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Corticotropin (ACTH) is a pituitary hormone used as a medication, including for conditions such as multiple sclerosis and infantile epileptic encephalopathy. It is an approved drug, also approved for veterinary use, with some investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q185690](https://www.wikidata.org/wiki/Q185690) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:13 | 1:45 | 0/0/0 | 1/0/2 | 0/0/0 | 109,130/4,863 | einfracz / qwen3.8-27b | 8 | 3/5 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [van_2014_Ucp1_mRNA](drugs/drug_corticotropin/pd_van_2014_Ucp1_mRNA.md) | Ucp1 mRNA ← ACTH · direct Emax (saturable) effect | — | van den Beukel JC et al., Direct activating effects of adrenocort…, FASEB journal : official pu… (2014) | [10.1096/fj.14-254839](https://doi.org/10.1096/fj.14-254839) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Bindellini_2025_cortisol_production](drugs/drug_corticotropin/pd_Bindellini_2025_cortisol_production.md) | cortisol production ← ACTH · direct sigmoid Emax (Hill) effect | — | Bindellini D et al., Predicting Residual 21-Hydroxylase Enzy…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70086](https://doi.org/10.1002/psp4.70086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lönnebo_2007_Cortisol](drugs/drug_corticotropin/pd_L_nnebo_2007_Cortisol.md) | Cortisol ← ACTH · disease-progression model | — | Lönnebo A et al., An integrated model for the effect of b…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02867.x](https://doi.org/10.1111/j.1365-2125.2007.02867.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=corticotropin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CRH (target), CYP24A1 (inducer), CYP27B1 (inducer), HSD3B2 (inducer), MC2R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 227 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bernardini_1990 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on TNF-alpha effects on CRH/ACTH secretion, not a pharmacokinetic study of corticotropin disposition. |
| popPK | Bindellini_2025 | irrelevant | 1 | 0 | The study focuses on ACTH (adrenocorticotropic hormone) and cortisol pharmacokinetics/dynamics for congenital adrenal hyperplasia, not the pharmacokinetics of the administered drug corticotropin. |
| popPK | Boston_1999 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on receptor pharmacology in cell lines and does not report population pharmacokinetic parameters for corticotropin. |
| popPK | Candas_1988 | irrelevant | 1 | 0 | The study analyzes the pharmacokinetics of corticotropin-releasing factor (CRF), not the drug corticotropin (ACTH). |
| popPK | Chronopoulos_2026 | irrelevant | 0 | 0 | The study models the pharmacokinetics of ACTH (adrenocorticotropic hormone), not corticotropin (which is the injectable preparation of ACTH used as a drug). |
| popPK | Davis_2004 | irrelevant | 1 | 0 | The study evaluates the pharmacokinetics of Urocortin-1 (the administered drug), while corticotropin (ACTH) is only a measured endogenous response, not the subject drug. |
| popPK | Enyeart_1996 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation of ion channels in bovine cells, not a pharmacokinetic study of corticotropin (ACTH). |
| popPK | Heldwein_1996 | irrelevant | 0 | 0 | The study is an in-vitro receptor signaling/mechanistic study, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for corticotropin. |
| popPK | Honda_2025 | irrelevant | 0 | 0 | The study measures corticotropin-releasing hormone (CRH) as a biomarker of environmental exposure (PM2.5), not the pharmacokinetics of the drug corticotropin (ACTH). |
| popPK | Lönnebo_2007 | irrelevant | 0 | 0 | The study models the pharmacokinetics of budesonide and the pharmacodynamics of ACTH/cortisol, but does not report disposition parameters for corticotropin (the subject drug). |
| popPK | Nikaj_2025 | irrelevant | 0 | 0 | The study investigates the hypothalamic-pituitary-adrenal (HPA) axis response to stress in patients with AVP deficiency, focusing on ACTH and cortisol levels, rather than the pharmacokinetics of the drug corticotropin. |
| popPK | Plotsky_1991 | irrelevant | 0 | 0 | The study investigates the neuroendocrine modulation of ACTH secretion by activin-A, not the pharmacokinetic disposition parameters (clearance, volume, half-life) of corticotropin as a drug. |
| popPK | Poupouzas_2025 | irrelevant | 0 | 0 | The study investigates glucocorticoid receptor isoform expression in immune cells of critically ill patients and does not report pharmacokinetic parameters for corticotropin. |
| popPK | Raun_1998 | irrelevant | 0 | 0 | The paper describes the pharmacology of ipamorelin (a growth hormone secretagogue) and its effect on ACTH/cortisol, but does not report pharmacokinetic parameters for corticotropin. |
| popPK | Rendle_2015 | irrelevant | 0 | 0 | The study investigates the stability of ACTH concentrations in stored plasma samples (a diagnostic/analytical handling study) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Villanueva_1986 | irrelevant | 0 | 0 | The study measures cortisol pharmacokinetics after exogenous ACTH stimulation in women, not the pharmacokinetics of corticotropin (ACTH) itself as the subject drug. |
| popPK | You_2024 | irrelevant | 0 | 0 | The study models the circadian rhythms of ACTH and cortisol, not the pharmacokinetic disposition parameters (clearance, volume, etc.) of corticotropin. |
| popPK | van_2014 | irrelevant | 0 | 0 | The study investigates the mechanism of ACTH (adrenocorticotropic hormone) on brown adipose tissue, not the pharmacokinetic disposition parameters (CL, V, etc.) of corticotropin. |
| popPK | van_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of remoxipride, not corticotropin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
