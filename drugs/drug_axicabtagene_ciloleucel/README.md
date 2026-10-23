<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;axicabtagene ciloleucel&quot;}]"></div>

# axicabtagene ciloleucel

- **generic name:** axicabtagene ciloleucel
- **ATC codes:** `L01XL03`, `L01XX70`
- **DrugBank:** [DB13915](https://go.drugbank.com/drugs/DB13915) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Axicabtagene ciloleucel is a cell and gene therapy anticancer medicine used to treat certain lymphomas, including diffuse large B-cell lymphoma and follicular lymphoma. It is authorised in the European Union and used in specialist care for these blood cancers.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:23 | 1:04 | 0/0/0 | 0/0/0 | 0/0/0 | 40,675/597 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/4 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chartier_2024.pdf` | Chartier M et al., Investigating the Influence of Covariat…, Clinical pharmacokinetics (2024) | popPK | 10 | [10.1007/s40262-024-01413-z](https://doi.org/10.1007/s40262-024-01413-z) | [39240498](https://pubmed.ncbi.nlm.nih.gov/39240498) | The paper describes a population cellular kinetic model for axicabtagene_ciloleucel, but the specific numeric parameter values (e.g., growth rates, clearance) are not present in the provided abstract text. |
| `Pomeroy_2026.pdf` | Pomeroy AE et al., A Pharmacologic Model Predicts that Tum…, Blood cancer discovery (2026) | popPK | 8 | [10.1158/2643-3230.BCD-25-0138](https://doi.org/10.1158/2643-3230.BCD-25-0138) | [41143460](https://pubmed.ncbi.nlm.nih.gov/41143460) | The paper describes a population PK/PD model for axicabtagene ciloleucel, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-07T23:23:12.505261+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altrock_2026 | irrelevant | 1 | 0 | The text is an editorial summary of a PK/PD modeling study but contains no quantitative pharmacokinetic parameter values (CL, V, etc.) for axicabtagene ciloleucel. |
| popPK | Chartier_2024 | relevant | 10 | 2 | The paper describes a population cellular kinetic model for axicabtagene_ciloleucel, but the specific numeric parameter values (e.g., growth rates, clearance) are not present in the provided abstract text. |
| popPK | Elsawy_2022 | irrelevant | 0 | 0 | The paper reports patient-reported outcomes (quality of life) for axicabtagene ciloleucel, not pharmacokinetic parameters. |
| popPK | Pomeroy_2026 | relevant | 8 | 0 | The paper describes a population PK/PD model for axicabtagene ciloleucel, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Scordo_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters (AUC) for the lymphodepleting chemotherapy agent fludarabine, not for the subject drug axicabtagene_ciloleucel. |
| popPK | Sánchez-Salinas_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for fludarabine (the lymphodepleting chemotherapy), not for axicabtagene_ciloleucel. |
| popPK | Varela-González-Aller_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for fludarabine (the lymphodepleting agent), not for axicabtagene_ciloleucel, which is only a covariate/comparator in the model. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
