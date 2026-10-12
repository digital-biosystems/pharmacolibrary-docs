<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;sodium perborate&quot;}]"></div>

# sodium perborate

- **generic name:** sodium perborate
- **ATC codes:** `A01AB19`
- **DrugBank:** [DB13235](https://go.drugbank.com/drugs/DB13235) · **PubChem:** not captured
- **molar mass:** 59.82 g/mol (BHO3) — DrugBank
- **groups:** approved

## About

Sodium perborate is an antiseptic used for local oral treatment, for example in stomatological preparations for mouth conditions. It is an approved drug, though no European Union authorisation is recorded in the available facts.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415507](https://www.wikidata.org/wiki/Q415507) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 03:36 | 1:03 | 0/0/0 | 0/0/0 | 0/0/0 | 48,814/613 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/2 | 1/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Warne_1999.pdf` | Warne MS et al., Toxicity of laundry detergent component…, Ecotoxicology and environme… (1999) | pd | 4 | [10.1006/eesa.1999.1824](https://doi.org/10.1006/eesa.1999.1824) | [10571467](https://www.ncbi.nlm.nih.gov/pubmed/10571467) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T03:35:36.667774+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cebeci_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-cancer effects and does not report pharmacokinetic parameters. |
| popPK | Cebeci_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-cancer effects (apoptosis, cell cycle) and does not report any pharmacokinetic parameters. |
| PD | Cebeci_2025 | not_relevant | 3 | 1 | The study mentions treatment at IC50 concentrations but does not provide the numeric IC50 values, dose-response curves, or other quantitative PD parameters in the provided text. |
| popPK | Di_1996 | irrelevant | 0 | 0 | The study uses sodium perborate as a pro-oxidant stressor to measure tissue antioxidant capacity via luminescence, not to characterize the pharmacokinetics of sodium perborate. |
| popPK | Islek_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antileishmanial activity and does not report any pharmacokinetic parameters for sodium perborate. |
| popPK | Kinomoto_2001 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment of sodium perborate on periodontal ligament cells, not a pharmacokinetic study. |
| popPK | Omeroglu_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of anti-proliferative effects and transcriptomics, reporting no pharmacokinetic parameters. |
| popPK | Schröder_2002 | irrelevant | 0 | 0 | The paper is an environmental fate modeling study of boron and LAS in a river, not a pharmacokinetic study of sodium perborate in a biological system. |
| popPK | Warne_1999 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Warne_1999 | not_relevant | 0 | 0 | The paper focuses on the toxicity of laundry detergent components to cladocerans and does not report any pharmacodynamic or exposure-response relationship for sodium perborate. |
| popPK | Xiang_2020 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of bemarituzumab, not sodium_perborate. |
| PD | Xiang_2020 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis for bemarituzumab, not sodium perborate, and does not provide a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug in question. |
| popPK | Xiang_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for bemarituzumab, not sodium_perborate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
