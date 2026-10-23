<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;iodine (131I) omburtamab&quot;}]"></div>

# iodine (131I) omburtamab

- **generic name:** iodine (131I) omburtamab
- **ATC codes:** `V10XA03`
- **DrugBank:** [DB17124](https://go.drugbank.com/drugs/DB17124) · **PubChem:** none
- **groups:** investigational

## About

Iodine (131I) omburtamab is an investigational radiolabelled antibody studied for treating neuroblastoma. It remains experimental and is not approved; a marketing application in the European Union was refused.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:08 | 0:20 | 0/0/0 | 0/0/0 | 0/0/0 | 6,568/176 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yerrabelli_2021.pdf` | Yerrabelli RS et al., IntraOmmaya compartmental radioimmunoth…, European journal of nuclear… (2021) | popPK | 9 | [10.1007/s00259-020-05050-z](https://doi.org/10.1007/s00259-020-05050-z) | [33047248](https://pubmed.ncbi.nlm.nih.gov/33047248) | The paper describes a compartmental PK model for 131I-omburtamab in humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text, likely residing in figures or supplementary data. |

<sub>queue written 2026-10-07 17:08 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper is a review discussing the concept of iodine allergy in nuclear medicine and does not report any pharmacodynamic or exposure-response data for omburtamab. |
| popPK | Prasad_2024 | relevant | 4 | 5 | The paper reports effective clearance times (35.9–44.2 hours) for 131I-omburtamab, which are quantitative disposition parameters, but it lacks a full compartmental PK model (CL, V, Q) and focuses primarily on radiation safety. |
| popPK | Yerrabelli_2021 | relevant | 9 | 2 | The paper describes a compartmental PK model for 131I-omburtamab in humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text, likely residing in figures or supplementary data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biodine_131i_omburtamab%5D&body=Drug%3A%20iodine_131i_omburtamab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_iodine_131i_omburtamab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
