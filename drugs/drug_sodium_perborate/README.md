<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;sodium perborate&quot;}]"></div>

# sodium perborate

- **generic name:** sodium perborate
- **ATC codes:** `A01AB19`
- **DrugBank:** [DB13235](https://go.drugbank.com/drugs/DB13235) · **PubChem:** none
- **molar mass:** 59.82 g/mol (BHO3) — DrugBank
- **groups:** approved

## About

Sodium perborate is an antiseptic used for local oral treatment, for example in stomatological preparations for mouth conditions. It is an approved drug, though no European Union authorisation is recorded in the available facts.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415507](https://www.wikidata.org/wiki/Q415507) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sodium_perborate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 03:36 | 1:03 | 0/0/0 | 0/0/0 | 0/0/0 | 48,814/613 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/2 | 1/1 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Warne_1999.pdf` | Warne MS et al., Toxicity of laundry detergent component…, Ecotoxicology and environme… (1999) | pd | 4 | [10.1006/eesa.1999.1824](https://doi.org/10.1006/eesa.1999.1824) | [10571467](https://www.ncbi.nlm.nih.gov/pubmed/10571467) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04 03:35 UTC</sub>

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_perborate%5D&body=Drug%3A%20sodium_perborate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sodium_perborate/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
