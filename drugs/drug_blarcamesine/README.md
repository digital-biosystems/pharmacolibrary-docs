<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;blarcamesine&quot;}]"></div>

# blarcamesine

- **generic name:** blarcamesine
- **ATC codes:** `N06DX06`
- **DrugBank:** [DB05592](https://go.drugbank.com/drugs/DB05592) · **PubChem:** not captured
- **molar mass:** 281.399 g/mol (C19H23NO) — DrugBank
- **groups:** investigational

## About

Blarcamesine is an investigational drug developed for dementia. It is not approved; a marketing application in the European Union was withdrawn, so it remains experimental.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25110485](https://www.wikidata.org/wiki/Q25110485) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:06 | 1:48 | 0/0/0 | 1/0/0 | 0/0/0 | 58,246/1,857 | ollama / glm-5.3-flash | 5 | 1/3 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span> | [Ette_2025_RSBQ](drugs/drug_blarcamesine/pd_Ette_2025_RSBQ.md) | Rett Syndrome Behaviour Questionnaire item-level scores / latent Rett syndrome severity ← blarcamesine (parent) and ANAVEX19-144 (active metabolite) · direct linear effect | — | Ette EI et al., The new big is small: Leveraging knowle…, British journal of clinical… (2025) | [10.1111/bcp.15843](https://doi.org/10.1111/bcp.15843) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Ette_2025_RSBQ_2](drugs/drug_blarcamesine/pd_Ette_2025_RSBQ_2.md) | Rett Syndrome Behaviour Questionnaire item-level scores / latent Rett syndrome severity (6-patient single-blind study) ← blarcamesine (parent) and ANAVEX19-144 (active metabolite) · direct linear effect | — | Ette EI et al., The new big is small: Leveraging knowle…, British journal of clinical… (2025) | [10.1111/bcp.15843](https://doi.org/10.1111/bcp.15843) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=blarcamesine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM1 (target), SIGMAR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Christ_2019 | irrelevant | 0 | 0 | This is an in vitro/C. elegans autophagy mechanism study of ANAVEX2-73 (blarcamesine) with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Ette_2025 | irrelevant | 3 | 1 | A population PK model of blarcamesine is mentioned but no numeric PK parameters (CL, V, ka, etc.) appear; parameter estimates are relegated to supplementary Table S1/Data S1, and the paper focuses on IRT efficacy modelling. |
| PGx | Hampel_2020 | not_relevant | 4 | 3 | Genomic variants (SIGMAR1, COMT) are linked to efficacy outcomes (MMSE/ADCS-ADL change), not to any PK or PD parameter of blarcamesine; PK data are only related to exposure-response, not genotype. |
| PGx | Kaufmann_2019 | not_relevant | 0 | 0 | Paper reports efficacy of blarcamesine in Mecp2-deficient mice, not any gene-variant effect on blarcamesine PK/PD parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | Blarcamesine (ANAVEX 2-73) is only mentioned as a sigma-1 agonist provided for in vitro cytotoxicity assays; no PK parameters for it appear, and the numeric lines concern other drugs. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
