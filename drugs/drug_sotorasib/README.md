<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;sotorasib&quot;}]"></div>

# sotorasib

- **generic name:** sotorasib
- **ATC codes:** `L01XX73`
- **DrugBank:** [DB15569](https://go.drugbank.com/drugs/DB15569) · **PubChem:** not captured
- **molar mass:** 560.606 g/mol (C30H30F2N6O3) — DrugBank
- **groups:** approved, investigational

## About

Sotorasib is an anticancer medicine used to treat non-small-cell lung cancer. It is an approved antineoplastic agent and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q75175937](https://www.wikidata.org/wiki/Q75175937) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

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
| 2026-10-06 21:41 | 0:07 | 0/0/0 | 0/0/0 | 0/0/0 | 28,483/259 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nagase_2025.pdf` | Nagase M et al., Population Pharmacokinetics of Sotorasi…, The AAPS journal (2025) | popPK | 10 | [10.1208/s12248-024-01013-6](https://doi.org/10.1208/s12248-024-01013-6) | [39806205](https://pubmed.ncbi.nlm.nih.gov/39806205) | The paper describes a population PK model for sotorasib, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-06T21:41:52.503876+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hossain_2025 | irrelevant | 2 | 2 | The paper presents a novel mass spectrometry method for covalent drug development using sotorasib as a validation case, reporting qualitative mechanism of action and target engagement metrics, but it does not provide quantitative population-pharmacokinetic parameters (CL, Vd, Q, ka) for sotorasib. |
| popPK | Modest_2025 | irrelevant | 0 | 0 | This is a clinical trial reporting patient-reported outcomes (quality of life) and does not contain pharmacokinetic parameters such as clearance or volume. |
| popPK | Nagase_2025 | relevant | 10 | 2 | The paper describes a population PK model for sotorasib, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
