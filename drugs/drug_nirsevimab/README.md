<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;nirsevimab&quot;}]"></div>

# nirsevimab

- **generic name:** nirsevimab
- **ATC codes:** `J06BD08`
- **DrugBank:** [DB16258](https://go.drugbank.com/drugs/DB16258) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Nirsevimab is a monoclonal antibody used to protect against respiratory syncytial virus (RSV) infection. It is authorised in the European Union and is a relatively new, approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q111535760](https://www.wikidata.org/wiki/Q111535760) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:44 | 1:27 | 0/1/0 | 0/0/0 | 0/0/0 | 85,740/3,692 | einfracz / qwen3.8-27b | 8 | 1/3 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Clegg_2024_reference](drugs/drug_nirsevimab/Nirsevimab_Clegg2024_reference.md) | — | 1-compartment (no model) | 0 | Clegg L et al., Population Pharmacokinetics of Nirsevim…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2401](https://doi.org/10.1002/jcph.2401) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Clegg_2024.pdf` | Clegg L et al., Population Pharmacokinetics of Nirsevim…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2401](https://doi.org/10.1002/jcph.2401) | [38294353](https://pubmed.ncbi.nlm.nih.gov/38294353) | The abstract provides the specific typical clearance value (3.4 mL/day) for a 5 kg infant and describes the population PK model structure. |

<sub>queue written 2026-10-14T22:43:18.764224+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Giannini_2025 | irrelevant | 0 | 0 | This is a dynamic transmission modeling study estimating hospitalization impact, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for nirsevimab. |
| popPK | Giannini_2026 | irrelevant | 0 | 0 | This is a dynamic transmission and epidemiological modeling study focused on the population-level impact of RSV immunization programs, not a pharmacokinetic study of nirsevimab. |
| popPK | Petrone_2026 | irrelevant | 0 | 0 | The paper is an observational study assessing clinical effectiveness (bronchiolitis/hospitalization reduction) and does not report any pharmacokinetic parameters (CL, V, half-life, etc.) for nirsevimab. |
| popPK | Simões_2023 | relevant | 8 | 1 | The paper describes a population pharmacokinetic analysis for nirsevimab, but the specific numeric parameter values (CL, V, Q) are not provided in the text; only the exposure target (AUC 12.8 days × mg/mL) and a reference to the model in the appendix are present. |
| popPK | Voirin_2022 | irrelevant | 0 | 0 | This is a mathematical transmission model analyzing the epidemiological impact of nirsevimab, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:43 UTC</sub>
