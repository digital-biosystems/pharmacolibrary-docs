<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10B&quot;,&quot;href&quot;:&quot;atc/V10B.md&quot;},{&quot;label&quot;:&quot;strontium (89Sr) chloride&quot;}]"></div>

# strontium (89Sr) chloride

- **generic name:** strontium (89Sr) chloride
- **ATC codes:** `V10BX01`
- **DrugBank:** [DB09498](https://go.drugbank.com/drugs/DB09498) · **PubChem:** not captured
- **groups:** approved

## About

Strontium-89 chloride is a bone-seeking radiopharmaceutical used to relieve pain from cancer that has spread to the bones. It is an approved medicine and is used in hospitals with nuclear medicine facilities for pain palliation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27262770](https://www.wikidata.org/wiki/Q27262770) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Blake_1986_reference](drugs/drug_strontium_89sr_chloride/Strontium89srChloride_Blake1986_reference.md) | — | 1-compartment (no model) | 0 | Blake GM et al., Sr-89 therapy: strontium kinetics in di…, European journal of nuclear… (1986) | [10.1007/BF00254749](https://doi.org/10.1007/BF00254749) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:45 | 1:44 | 0/1/0 | 0/0/0 | 0/0/0 | 13,061/3,664 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sips_1996.pdf` | Sips AJ et al., Intestinal absorption of strontium chlo…, British journal of clinical… (1996) | popPK | 9 | [10.1046/j.1365-2125.1996.33411.x](https://doi.org/10.1046/j.1365-2125.1996.33411.x) | [8799520](https://pubmed.ncbi.nlm.nih.gov/8799520) | The study reports quantitative PK parameters (bioavailability, absorption kinetics) for strontium chloride in humans, but specific numeric values for clearance, volume, or rate constants are not explicitly listed in the provided text. |
| `Blake_1986.pdf` | Blake GM et al., Sr-89 therapy: strontium kinetics in di…, European journal of nuclear… (1986) | popPK | 8 | [10.1007/BF00254749](https://doi.org/10.1007/BF00254749) | [3102236](https://pubmed.ncbi.nlm.nih.gov/3102236) | The study reports quantitative pharmacokinetic parameters (renal plasma clearance, retention rates, power law coefficients) for strontium-89 in human patients. |

<sub>queue written 2026-10-07T16:43:57.203070+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dahl_2001 | irrelevant | 2 | 0 | The paper discusses qualitative distribution and incorporation mechanisms of strontium in bone without reporting quantitative pharmacokinetic parameters (CL, V, ka) for strontium-89 chloride specifically. |
| popPK | Giammarile_2001 | irrelevant | 0 | 0 | The paper is a clinical review of pain palliation outcomes and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for strontium-89. |
| PD | Giammarile_2001 | not_relevant | 1 | 0 | The text is a qualitative review that explicitly states there is no clear dose-response relationship and provides no numeric PD parameters or concentration-effect data. |
| popPK | Sips_1996 | relevant | 9 | 4 | The study reports quantitative PK parameters (bioavailability, absorption kinetics) for strontium chloride in humans, but specific numeric values for clearance, volume, or rate constants are not explicitly listed in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:44 UTC</sub>
