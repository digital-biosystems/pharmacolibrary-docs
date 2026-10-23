<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J07A&quot;,&quot;href&quot;:&quot;atc/J07A.md&quot;},{&quot;label&quot;:&quot;tetanus toxoid&quot;}]"></div>

# tetanus toxoid

- **generic name:** tetanus toxoid
- **ATC codes:** `J07AM01`, `J07AM51`
- **DrugBank:** [DB10583](https://go.drugbank.com/drugs/DB10583) · **PubChem:** none
- **groups:** approved, investigational

## About

Tetanus toxoid is a vaccine used to prevent tetanus, an infection caused by Clostridium tetani. It is widely used worldwide and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5861101](https://www.wikidata.org/wiki/Q5861101) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chilimuri_2021_S1](drugs/drug_tetanus_toxoid/pd_Chilimuri_2021_S1.md) | SARS-CoV-2 Spike (S1) protein antibodies ← tetanus_toxoid · model not identified | — | Chilimuri S et al., BNT162b2 mRNA Vaccine Interference with…, The American journal of cas… (2021) | [10.12659/AJCR.933003](https://doi.org/10.12659/AJCR.933003) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:21 | 9:52 | 0/0/0 | 1/0/0 | 0/0/0 | 164,531/2,215 | einfracz / qwen3.8-27b | 30 | 1/4 | 29/1 | 0 |

## Coverage

- **PubMed hits:** 300 matched, 86 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Borgognone_2022 | irrelevant | 0 | 0 | The paper is a study on gut microbiome signatures in HIV patients and mentions tetanus-toxoid only as a comparator example of prior vaccination, with no pharmacokinetic data. |
| PGx | Brüggemann_2004 | not_relevant | 0 | 0 | The paper analyzes the genome sequence of the bacterium Clostridium tetani and does not report on human pharmacogenomics or PK/PD parameters of tetanus toxoid. |
| PGx | Desombere_1995 | not_relevant | 0 | 0 | The paper focuses on the immune mechanism of non-response to the Hepatitis B vaccine and uses tetanus toxoid only as a control for general immune function, without reporting pharmacogenomic effects on its PK/PD parameters. |
| PGx | Fanger_1997 | not_relevant | 0 | 0 | The paper investigates T-cell activation mechanisms and immune response variability, not pharmacokinetics or pharmacodynamics of tetanus toxoid as a drug. |
| popPK | Oguti_2022 | relevant | 4 | 6 | The study reports a quantitative half-life (28.7 days) for anti-tetanus toxoid antibodies in infants, which represents the decay kinetics of the specific immune response to the drug antigen, but it is not a standard PK study of the drug molecule itself (e.g., no clearance or volume of distribution for the toxin/toxoid). |
| popPK | Pool_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of anti-thymocyte globulin (ATGAM), not tetanus toxoid; tetanus is only mentioned incidentally regarding B-cell specificity. |
| PGx | Tamir_2007 | not_relevant | 0 | 0 | The paper concerns dendritic cell vaccination for colorectal cancer and does not involve tetanus toxoid or pharmacogenomic effects on its PK/PD. |
| PGx | Wit_2005 | not_relevant | 0 | 0 | The paper describes the efficacy of dendritic cell-based immunization with various antigens (including tetanus toxoid) in mice, focusing on immune response polarization, rather than investigating pharmacokinetic or pharmacodynamic parameters of tetanus toxoid in humans based on gene variants. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btetanus_toxoid%5D&body=Drug%3A%20tetanus_toxoid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tetanus_toxoid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
