<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pralsetinib&quot;}]"></div>

# pralsetinib

- **generic name:** pralsetinib
- **ATC codes:** `L01EX23`
- **DrugBank:** [DB15822](https://go.drugbank.com/drugs/DB15822) · **PubChem:** none
- **molar mass:** 533.612 g/mol (C27H32FN9O2) — DrugBank
- **groups:** approved, investigational

## About

Pralsetinib is a protein kinase inhibitor used to treat non-small-cell lung cancer. Its marketing authorisation in the European Union has been withdrawn, though it remains approved elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q97732199](https://www.wikidata.org/wiki/Q97732199) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Kassir_2024_PFS](drugs/drug_pralsetinib/pd_Kassir_2024_PFS.md) | PFS in patients with thyroid cancer ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Kassir_2024_PFS_2](drugs/drug_pralsetinib/pd_Kassir_2024_PFS_2.md) | PFS in patients with NSCLC ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Kassir_2024_grade_3_anemia](drugs/drug_pralsetinib/pd_Kassir_2024_grade_3_anemia.md) | grade ≥3 anemia ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Kassir_2024_grade_3_lymphopenia](drugs/drug_pralsetinib/pd_Kassir_2024_grade_3_lymphopenia.md) | grade ≥3 lymphopenia ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Kassir_2024_grade_3_pneumonia](drugs/drug_pralsetinib/pd_Kassir_2024_grade_3_pneumonia.md) | grade ≥3 pneumonia ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pralsetinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer/inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C8` inducer/inhibitor, `CYP2C9` inducer/inhibitor, `CYP2D6` substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer/inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer/inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate, `SLC22A6` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate, `ABCB11` inhibitor, `ABCG2` inhibitor/substrate, `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DDR1 (inhibitor), FGFR1 (inhibitor), FGFR2 (inhibitor), FLT3 (inhibitor), JAK1 (inhibitor), JAK2 (inhibitor), KDR (inhibitor), NTRK1 (inhibitor), NTRK3 (inhibitor), PDGFRB (inhibitor), RET (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:29 | 0:29 | 0/0/0 | 0/1/0 | 0/0/0 | 22,534/2,484 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jade_2023 | irrelevant | 0 | 0 | This is a computational drug-screening study and reports no pralsetinib pharmacokinetic parameters. |
| popPK | Kassir_2024 | irrelevant | 1 | 0 | This is a human exposure-response analysis and reports no quantitative pralsetinib disposition parameters in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpralsetinib%5D&body=Drug%3A%20pralsetinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pralsetinib/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
