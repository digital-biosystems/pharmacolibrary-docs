<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;nirsevimab&quot;}]"></div>

# nirsevimab

- **generic name:** nirsevimab
- **ATC codes:** `J06BD08`
- **DrugBank:** [DB16258](https://go.drugbank.com/drugs/DB16258) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Nirsevimab is a monoclonal antibody used to protect against respiratory syncytial virus (RSV) infection. It is authorised in the European Union and is a relatively new, approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q111535760](https://www.wikidata.org/wiki/Q111535760) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Clegg_2024_reference](drugs/drug_nirsevimab/Nirsevimab_Clegg2024_reference.md) | — | 1-compartment (no model) | 0 | Clegg L et al., Population Pharmacokinetics of Nirsevim…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2401](https://doi.org/10.1002/jcph.2401) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:41 | 2:02 | 0/1/0 | 0/0/0 | 0/0/0 | 62,703/2,008 | einfracz / qwen3.8-27b | 8 | 1/3 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Clegg_2024.pdf` | Clegg L et al., Population Pharmacokinetics of Nirsevim…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2401](https://doi.org/10.1002/jcph.2401) | [38294353](https://pubmed.ncbi.nlm.nih.gov/38294353) | The abstract provides the specific typical clearance value (3.4 mL/day) for a 5 kg infant, although other specific parameters like volume of distribution and half-life are not explicitly stated in the provided text. |

<sub>queue written 2026-10-07T14:40:40.197070+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Giannini_2025 | irrelevant | 0 | 0 | This is a mathematical transmission modeling study evaluating the public health impact of nirsevimab administration, not a pharmacokinetic study, and it contains no quantitative PK parameters like clearance or volume. |
| popPK | Giannini_2026 | irrelevant | 0 | 0 | The paper is a dynamic transmission modeling study evaluating immunization programs, not a pharmacokinetic study, and does not report quantitative PK parameters (CL, V, ka, etc.) for nirsevimab. |
| popPK | Petrone_2026 | irrelevant | 0 | 0 | The paper is an observational study evaluating the clinical effectiveness of nirsevimab in preventing bronchiolitis, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Simões_2023 | irrelevant | 4 | 1 | The paper is a pooled efficacy analysis that references a population PK model and an AUC target (12.8 days × mg/mL), but it does not report the specific quantitative disposition parameters (CL, V, Q, ka) or the model structure in the provided text, which are likely in the appendix or original PK publications. |
| popPK | Voirin_2022 | irrelevant | 0 | 0 | This is an epidemiological transmission model assessing the population-level impact of nirsevimab on RSV incidence, not a pharmacokinetic study, and it does not report any quantitative disposition parameters (CL, V, half-life, etc.) for nirsevimab. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 14:40 UTC</sub>
