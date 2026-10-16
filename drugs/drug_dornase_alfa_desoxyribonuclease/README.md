<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;dornase alfa (desoxyribonuclease)&quot;}]"></div>

# dornase alfa (desoxyribonuclease)

- **generic name:** dornase alfa (desoxyribonuclease)
- **ATC codes:** `R05CB13`
- **DrugBank:** [DB00003](https://go.drugbank.com/drugs/DB00003) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Dornase alfa is a mucolytic drug used to treat cystic fibrosis and has also been used for acute bronchitis. It is an approved medicine, used mainly in the management of cystic fibrosis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2067922](https://www.wikidata.org/wiki/Q2067922) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:58 | 3:58 | 0/0/0 | 1/0/0 | 0/0/0 | 134,082/1,796 | einfracz / qwen3.8-27b | 12 | 0/5 | 11/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Geller_1998_FEV1](drugs/drug_dornase_alfa_desoxyribonuclease/pd_Geller_1998_FEV1.md) | forced expiratory flow in 1 s biomarker turnover ← dornase alfa | — | Geller DE et al., Effect of smaller droplet size of dorna…, Pediatric pulmonology (1998) | [10.1002/(sici)1099-0496(199802)25:2&lt;83::aid-ppul2&gt;3.0.co;2-o](https://doi.org/10.1002/(sici)1099-0496(199802)25:2&lt;83::aid-ppul2&gt;3.0.co;2-o) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dornase_alfa_desoxyribonuclease).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DNASE1 (other).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 43 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amelina_2021 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study (biosimilarity trial) reporting pulmonary function endpoints (FEV1, FVC), not pharmacokinetic parameters (CL, V, etc.). |
| popPK | Baldo_2015 | irrelevant | 0 | 0 | The paper is a general review of approved enzyme therapies and does not report quantitative pharmacokinetic parameters for dornase alfa. |
| popPK | Hall_2021 | irrelevant | 0 | 0 | The paper is a review focusing on toxicology and pathology challenges of inhaled biologics, and it does not contain any quantitative pharmacokinetic parameters for dornase alfa. |
| PGx | Hardaker_2019 | not_relevant | 2 | 1 | The paper associates the F508del genotype with higher dornase alfa use and lung function metrics, but does not report a pharmacokinetic or pharmacodynamic effect of the genotype on the drug itself (e.g., it does not measure drug clearance or efficacy change attributable to the gene). |
| PGx | Jiang_2026 | not_relevant | 0 | 0 | The paper investigates dornase alfa as a therapeutic for heterotopic ossification and mentions genetic knockout of DNase1, but it does not report pharmacogenomic effects of a gene variant on the PK or PD parameters of dornase alfa. |
| popPK | McCoy_2021 | irrelevant | 0 | 0 | The paper is a computational study on drug repurposing for COVID-19 and contains no pharmacokinetic data or analysis for dornase alfa. |
| PGx | Sheikh_2025 | not_relevant | 0 | 0 | The study evaluates the efficacy of ETI (a CFTR modulator) on lung function and BMI, and only notes the concomitant use/discontinuation of dornase alfa; it does not report PK or PD parameters of dornase alfa. |
| PGx | Sheikh_2026 | not_relevant | 0 | 0 | The paper studies the efficacy of elexacaftor-tezacaftor-ivacaftor (ETI) and its impact on the need for dornase alfa, but does not report how genetic variants alter the pharmacokinetics or pharmacodynamics of dornase alfa itself. |
| PGx | Stamm_2024 | not_relevant | 0 | 0 | The paper reports on the engineering of a modified Dornase alfa molecule using PASylation technology to improve PK/PD, but it does not study the effect of human gene variants or genotypes on drug response. |
| popPK | Stern_2024 | irrelevant | 0 | 0 | This is an in vitro tissue engineering study using dornase alfa (Pulmozyme) as a decellularizing enzyme, not a pharmacokinetic study measuring drug disposition. |
| PGx | unknown_2023 | not_relevant | 0 | 0 | The text is a general clinical consensus statement for cystic fibrosis diagnosis and treatment; it does not report pharmacogenomic effects on the PK/PD parameters of dornase alfa. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
