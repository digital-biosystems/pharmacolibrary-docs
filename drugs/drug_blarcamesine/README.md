<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;blarcamesine&quot;}]"></div>

# blarcamesine

- **generic name:** blarcamesine
- **ATC codes:** `N06DX06`
- **DrugBank:** [DB05592](https://go.drugbank.com/drugs/DB05592) · **PubChem:** none
- **molar mass:** 281.399 g/mol (C19H23NO) — DrugBank
- **groups:** investigational

## About

Blarcamesine is an investigational drug developed for dementia. It is not approved; a marketing application in the European Union was withdrawn, so it remains experimental.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25110485](https://www.wikidata.org/wiki/Q25110485) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ette_2025_RSBQ](drugs/drug_blarcamesine/pd_Ette_2025_RSBQ.md) | Rett Syndrome Behaviour Questionnaire item-level scores / latent Rett syndrome severity ← blarcamesine (parent) and ANAVEX19-144 (active metabolite) · direct linear effect | — | Ette EI et al., The new big is small: Leveraging knowle…, British journal of clinical… (2025) | [10.1111/bcp.15843](https://doi.org/10.1111/bcp.15843) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Ette_2025_RSBQ_2](drugs/drug_blarcamesine/pd_Ette_2025_RSBQ_2.md) | Rett Syndrome Behaviour Questionnaire item-level scores / latent Rett syndrome severity (6-patient single-blind study) ← blarcamesine (parent) and ANAVEX19-144 (active metabolite) · direct linear effect | — | Ette EI et al., The new big is small: Leveraging knowle…, British journal of clinical… (2025) | [10.1111/bcp.15843](https://doi.org/10.1111/bcp.15843) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=blarcamesine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM1 (target), SIGMAR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:06 | 1:48 | 0/0/0 | 1/0/0 | 0/0/0 | 58,246/1,857 | ollama / glm-5.3-flash | 5 | 1/3 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Christ_2019 | irrelevant | 0 | 0 | This is an in vitro/C. elegans autophagy mechanism study of ANAVEX2-73 (blarcamesine) with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Ette_2025 | irrelevant | 3 | 1 | A population PK model of blarcamesine is mentioned but no numeric PK parameters (CL, V, ka, etc.) appear; parameter estimates are relegated to supplementary Table S1/Data S1, and the paper focuses on IRT efficacy modelling. |
| PGx | Hampel_2020 | not_relevant | 4 | 3 | Genomic variants (SIGMAR1, COMT) are linked to efficacy outcomes (MMSE/ADCS-ADL change), not to any PK or PD parameter of blarcamesine; PK data are only related to exposure-response, not genotype. |
| PGx | Kaufmann_2019 | not_relevant | 0 | 0 | Paper reports efficacy of blarcamesine in Mecp2-deficient mice, not any gene-variant effect on blarcamesine PK/PD parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | Blarcamesine (ANAVEX 2-73) is only mentioned as a sigma-1 agonist provided for in vitro cytotoxicity assays; no PK parameters for it appear, and the numeric lines concern other drugs. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bblarcamesine%5D&body=Drug%3A%20blarcamesine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_blarcamesine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
