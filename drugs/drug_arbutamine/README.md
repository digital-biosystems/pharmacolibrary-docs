<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;arbutamine&quot;}]"></div>

# arbutamine

- **generic name:** arbutamine
- **ATC codes:** `C01CA22`
- **DrugBank:** [DB01102](https://go.drugbank.com/drugs/DB01102) · **PubChem:** [CID 60789](https://pubchem.ncbi.nlm.nih.gov/compound/60789)
- **molar mass:** 317.3795 g/mol (C18H23NO4) — DrugBank
- **groups:** approved

## About

Arbutamine is a cardiotonic beta-adrenergic agonist, a cardiac stimulant used for heart conditions. It has approved status, but no European Union authorisation is recorded, so it appears to be only limited in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4784959](https://www.wikidata.org/wiki/Q4784959) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=arbutamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 04:27 | 0:11 | 0/0/0 | 0/0/0 | 0/0/0 | 7,668/157 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abou-Mohamed_1996.pdf` | Abou-Mohamed G et al., Characterization of the adrenergic acti…, Cardiovascular drugs and th… (1996) | pd | 4 | [10.1007/BF00051129](https://doi.org/10.1007/BF00051129) | [8723169](https://www.ncbi.nlm.nih.gov/pubmed/8723169) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-10-06T04:26:59.463860+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abou-Mohamed_1996 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Abou-Mohamed_1996 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Cramer_1995 | irrelevant | 0 | 0 | The study focuses on the safety and efficacy of arbutamine for myocardial stress testing (pharmacodynamics/diagnostic utility) and does not report quantitative pharmacokinetic parameters such as clearance or volume. |
| PD | Cramer_1995 | not_relevant | 2 | 1 | The paper reports clinical efficacy (sensitivity) and time-to-maximum effects for two dosing regimens but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Kisanuki_2001 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of myocardial viability using arbutamine as a diagnostic agent, reporting no pharmacokinetic parameters. |
| popPK | Nagarajan_1996 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of arbutamine's cardiovascular effects in dogs, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Valcke_1997 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic modeling and control algorithms for heart rate response, not pharmacokinetic disposition parameters (CL, V, etc.) for arbutamine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
