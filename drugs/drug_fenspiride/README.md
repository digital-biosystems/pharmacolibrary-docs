<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03B&quot;,&quot;href&quot;:&quot;atc/R03B.md&quot;},{&quot;label&quot;:&quot;fenspiride&quot;}]"></div>

# fenspiride

- **generic name:** fenspiride
- **ATC codes:** `R03BX01`, `R03DX03`
- **DrugBank:** [DB08979](https://go.drugbank.com/drugs/DB08979) · **PubChem:** [CID 3344](https://pubchem.ncbi.nlm.nih.gov/compound/3344)
- **molar mass:** 260.3315 g/mol (C15H20N2O2) — DrugBank
- **groups:** investigational

## About

Fenspiride is a bronchodilator that was classified for treating obstructive airway diseases. It is currently considered investigational and is not an approved treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q518027](https://www.wikidata.org/wiki/Q518027) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 14:20 | 4:49 | 0/0/0 | 0/0/0 | 0/0/0 | 35,919/5,899 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Montes_1993.pdf` | Montes B et al., Single dose pharmacokinetics of fenspir…, European journal of clinica… (1993) | popPK | 10 | [10.1007/BF00315501](https://doi.org/10.1007/BF00315501) | [7901024](https://pubmed.ncbi.nlm.nih.gov/7901024) | The study reports quantitative PK parameters (CL, Vd, t1/2, bioavailability) for fenspiride in humans with all values explicitly stated in the text. |

<sub>queue written 2026-10-07T14:18:28.838471+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Corlatti_2026 | irrelevant | 0 | 0 | The paper is a review of the phytochemistry and biological activities of the Helianthus genus (sunflowers) and does not mention fenspiride or report any pharmacokinetic parameters. |
| popPK | Jankowski_2002 | irrelevant | 0 | 0 | The text describes the pharmacological mechanisms of fenspiride (anti-inflammatory, antihistamine) but contains no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Laude_1995 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects (antitussive and antibronchoconstrictor actions) of fenspiride in guinea pigs and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Хайменова_2016 | not_relevant | 0 | 0 | The paper reports clinical efficacy of fenspiride in COPD/OA patients but contains no pharmacogenomic analysis or gene variant data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
