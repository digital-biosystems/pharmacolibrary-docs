<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;sargramostim&quot;}]"></div>

# sargramostim

- **generic name:** sargramostim
- **ATC codes:** `L03AA09`
- **DrugBank:** [DB00020](https://go.drugbank.com/drugs/DB00020) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sargramostim, a granulocyte-macrophage colony-stimulating factor, is an immunostimulant used in cancers such as breast cancer, melanoma, and lymphomas, and is authorised in the European Union for acute radiation syndrome. It remains in use, with an authorised product in the European Union, though its use appears limited to specific indications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3950557](https://www.wikidata.org/wiki/Q3950557) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sargramostim).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CSF2RA (target), CSF2RB (target), IL3RA (target), SDC2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:12 | 1:28 | 0/0/0 | 0/0/0 | 0/0/0 | 55,147/777 | einfracz / qwen3.8-27b | 4 | 0/1 | 3/1 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 17 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Stute_1995.pdf` | Stute N et al., Pharmacokinetics of recombinant human g…, Journal of pharmaceutical s… (1995) | popPK | 10 | [10.1002/jps.2600840708](https://doi.org/10.1002/jps.2600840708) | [7562431](https://pubmed.ncbi.nlm.nih.gov/7562431) | The paper is a primary pharmacokinetic study of sargramostim in children reporting quantitative parameters such as systemic clearance and half-life with specific numeric values in the abstract. |

<sub>queue written 2026-10-06T23:11:56.356780+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cornely_2021 | irrelevant | 0 | 0 | no_text gate: only 181 chars of text extracted (&lt; 400) |
| popPK | Desai_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the chimeric anti-GD2 antibody ch14.18, not for sargramostim, which is only listed as a concomitant medication. |
| popPK | Marachelian_2016 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of dinutuximab (ch14.18), with sargramostim serving only as a co-administered supportive agent without reported PK parameters. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data for sargramostim. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
