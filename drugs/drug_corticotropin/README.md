<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01A&quot;,&quot;href&quot;:&quot;atc/H01A.md&quot;},{&quot;label&quot;:&quot;corticotropin&quot;}]"></div>

# corticotropin

- **generic name:** corticotropin
- **ATC codes:** `H01AA01`
- **DrugBank:** [DB01285](https://go.drugbank.com/drugs/DB01285) · **PubChem:** none
- **groups:** approved, investigational, vet_approved

## About

Corticotropin (ACTH) is a pituitary hormone used as a medication, including for conditions such as multiple sclerosis and infantile epileptic encephalopathy. It is an approved drug, also approved for veterinary use, with some investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q185690](https://www.wikidata.org/wiki/Q185690) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [van_2014_Ucp1_mRNA](drugs/drug_corticotropin/pd_van_2014_Ucp1_mRNA.md) | Ucp1 mRNA ← ACTH · direct Emax (saturable) effect | — | van den Beukel JC et al., Direct activating effects of adrenocort…, FASEB journal : official pu… (2014) | [10.1096/fj.14-254839](https://doi.org/10.1096/fj.14-254839) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Bindellini_2025_cortisol_production](drugs/drug_corticotropin/pd_Bindellini_2025_cortisol_production.md) | cortisol production ← ACTH · direct sigmoid Emax (Hill) effect | — | Bindellini D et al., Predicting Residual 21-Hydroxylase Enzy…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70086](https://doi.org/10.1002/psp4.70086) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Lönnebo_2007_Cortisol](drugs/drug_corticotropin/pd_L_nnebo_2007_Cortisol.md) | Cortisol ← ACTH · disease-progression model | — | Lönnebo A et al., An integrated model for the effect of b…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02867.x](https://doi.org/10.1111/j.1365-2125.2007.02867.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=corticotropin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CRH (target), CYP24A1 (inducer), CYP27B1 (inducer), HSD3B2 (inducer), MC2R (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:13 | 1:45 | 0/0/0 | 3/0/0 | 0/0/0 | 109,130/4,863 | einfracz / qwen3.8-27b | 8 | 3/5 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 227 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcorticotropin%5D&body=Drug%3A%20corticotropin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_corticotropin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
