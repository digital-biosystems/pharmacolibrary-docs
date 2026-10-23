<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01B&quot;,&quot;href&quot;:&quot;atc/H01B.md&quot;},{&quot;label&quot;:&quot;carbetocin&quot;}]"></div>

# carbetocin

- **generic name:** carbetocin
- **ATC codes:** `H01BB03`
- **DrugBank:** [DB01282](https://go.drugbank.com/drugs/DB01282) · **PubChem:** [CID 16681432](https://pubchem.ncbi.nlm.nih.gov/compound/16681432)
- **molar mass:** 988.161 g/mol (C45H69N11O12S) — DrugBank
- **groups:** approved, investigational

## About

Carbetocin is an oxytocic drug, a synthetic peptide analogue of oxytocin used to stimulate uterine contractions. It is an approved medicine, though it does not appear to have a centralised authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5037853](https://www.wikidata.org/wiki/Q5037853) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.00).">human + animal</span> | [Cherepanov_2023_uterine_contraction_AUC](drugs/drug_carbetocin/pd_Cherepanov_2023_uterine_contraction_AUC.md) | uterine contraction AUC ← carbetocin · direct sigmoid Emax (Hill) effect | — | Cherepanov SM et al., Two oxytocin analogs, N-(p-fluorobenzyl…, PloS one (2023) | [10.1371/journal.pone.0281363](https://doi.org/10.1371/journal.pone.0281363) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=carbetocin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: OXTR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:08 | 0:25 | 0/0/0 | 1/0/0 | 0/0/0 | 33,796/969 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cherepanov_2023 | irrelevant | 0 | 0 | The paper is an ex-vivo pharmacodynamics study measuring uterine contraction, not a pharmacokinetic study; carbetocin is used only as a comparator. |
| popPK | Cole_2016 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of uterine contractility and reports no pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Drew_2020 | irrelevant | 1 | 0 | The study is a clinical dose-finding trial focused on efficacy (ED90) and does not report pharmacokinetic parameters like clearance or volume. |
| popPK | Engstrøm_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and uterotonic activity, not a pharmacokinetic study. |
| popPK | Morrison_2016 | irrelevant | 0 | 0 | This is an in vitro pharmacological study measuring uterine contractility, not a pharmacokinetic study reporting disposition parameters like clearance or volume for carbetocin. |
| popPK | Steckler_2012 | irrelevant | 1 | 0 | The study reports PK parameters for oxytocin, not carbetocin, and carbetocin is only used in ex vivo pharmacodynamic comparisons. |
| popPK | Yayou_2013 | irrelevant | 0 | 0 | This is a behavioral pharmacology study in cattle measuring cortisol and social behavior, not a pharmacokinetic study reporting disposition parameters like clearance or volume for carbetocin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcarbetocin%5D&body=Drug%3A%20carbetocin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_carbetocin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
