<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;xipamide&quot;}]"></div>

# xipamide

- **generic name:** xipamide
- **ATC codes:** `C03BA10`
- **DrugBank:** [DB13803](https://go.drugbank.com/drugs/DB13803) · **PubChem:** none
- **molar mass:** 354.81 g/mol (C15H15ClN2O4S) — DrugBank
- **groups:** investigational

## About

Xipamide is a diuretic and antihypertensive drug used to treat high blood pressure and fluid retention. It is not an approved medicine today and is considered investigational, with no authorisation recorded in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q600951](https://www.wikidata.org/wiki/Q600951) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Diembeck_1982_reference](drugs/drug_xipamide/Xipamide_Diembeck1982_reference.md) | — | 1-compartment (no model) | 0 | Diembeck W et al., [Pharmacokinetics of xipamide and triam…, Arzneimittel-Forschung (1982) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:31 | 2:18 | 0/1/0 | 0/0/0 | 0/0/0 | 41,698/4,308 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Diembeck_1982.pdf` | Diembeck W et al., [Pharmacokinetics of xipamide and triam…, Arzneimittel-Forschung (1982) | popPK | 8 |  | [6891256](https://pubmed.ncbi.nlm.nih.gov/6891256) | The study reports quantitative pharmacokinetic parameters (terminal elimination half-life) for xipamide in healthy volunteers, assuming a two-compartment model. |

<sub>queue written 2026-10-06 17:28 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abd_2016 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for quantifying drug concentrations in bulk and dosage forms, containing no pharmacodynamic, exposure-response, or dose-response data. |
| PD | Abd_2023 | not_relevant | 0 | 0 | The paper describes analytical methods (spectrophotometry) for quantifying drug concentrations in mixtures, not pharmacodynamic or exposure-response relationships. |
| PD | Barakat_2023 | not_relevant | 0 | 0 | The paper describes a spectrofluorimetric analytical method for quantifying xipamide concentration, not a pharmacodynamic or exposure-response relationship. |
| PD | Fares_2022 | not_relevant | 0 | 0 | The paper describes analytical methods (UPLC and TLC) for quantifying xipamide and triamterene in dosage forms, containing no pharmacodynamic or exposure-response data. |
| PD | Hutcheon_1986 | not_relevant | 1 | 0 | The text is a qualitative review stating that responses generally follow concentration-time curves but provides no numeric PD parameters, dose-response data, or specific exposure-response analysis for xipamide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bxipamide%5D&body=Drug%3A%20xipamide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_xipamide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 17:28 UTC</sub>
