<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;magnesium lactate&quot;}]"></div>

# magnesium lactate

- **generic name:** magnesium lactate
- **ATC codes:** `A12CC06`
- **DrugBank:** [DB14515](https://go.drugbank.com/drugs/DB14515) · **PubChem:** not captured
- **molar mass:** 202.445 g/mol (C6H10MgO6) — DrugBank
- **groups:** investigational, nutraceutical

## About

Magnesium lactate is a magnesium salt used as a mineral supplement to provide magnesium. It is classified as a nutraceutical and is available as a dietary supplement, though it also has investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q594836](https://www.wikidata.org/wiki/Q594836) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=magnesium_lactate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ATP1A1 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 09:53 | 0:20 | 0/0/0 | 0/0/0 | 0/0/0 | 10,934/272 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dogterom_2018.pdf` | Dogterom P et al., The absolute bioavailability and the ef…, Drug development and indust… (2018) | popPK | 8 | [10.1080/03639045.2018.1464020](https://doi.org/10.1080/03639045.2018.1464020) | [29638147](https://pubmed.ncbi.nlm.nih.gov/29638147) | The study reports bioavailability (AUC-based) for magnesium lactate but lacks specific compartmental PK parameters (CL, V, ka) in the provided text. |

<sub>queue written 2026-10-05T09:53:26.033946+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Almakaiev_2020 | irrelevant | 0 | 0 | The paper is a pharmaceutical compatibility study using DSC and FTIR, not a pharmacokinetic study, and contains no disposition parameters for magnesium lactate. |
| PD | Almakaiev_2020 | not_relevant | 0 | 0 | The paper investigates pharmaceutical compatibility (physical/chemical interactions) using DSC and FTIR, not pharmacodynamics or exposure-response relationships. |
| popPK | Dogterom_2018 | relevant | 8 | 2 | The study reports bioavailability (AUC-based) for magnesium lactate but lacks specific compartmental PK parameters (CL, V, ka) in the provided text. |
| popPK | Hassan_2000 | irrelevant | 0 | 0 | The paper is a study on ESR dosimetry materials and reports physical/chemical properties (G-values, radical lifetimes), not pharmacokinetic parameters for magnesium lactate. |
| PD | Hassan_2000 | not_relevant | 0 | 0 | The paper describes ESR dosimetry physics (radical formation, G-values, thermal stability) of magnesium lactate, not pharmacodynamic or exposure-response relationships in a biological system. |
| popPK | Hijano_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oxycodone, with magnesium lactate serving only as a co-administered agent to test for interactions, not as the subject drug. |
| popPK | Spasov_2013 | irrelevant | 0 | 0 | The study is a toxicological/pathological evaluation of magnesium salts in a nephrolithiasis model and does not report pharmacokinetic parameters (CL, V, ka, etc.) for magnesium lactate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
