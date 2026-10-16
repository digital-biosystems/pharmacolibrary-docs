<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;phenazocine&quot;}]"></div>

# phenazocine

- **generic name:** phenazocine
- **ATC codes:** `N02AD02`
- **DrugBank:** [DB13606](https://go.drugbank.com/drugs/DB13606) · **PubChem:** not captured
- **molar mass:** 321.464 g/mol (C22H27NO) — DrugBank
- **groups:** experimental

## About

Phenazocine is an opioid analgesic of the benzomorphan class, used for pain relief. It is currently regarded as an experimental drug and is not in widespread clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7181332](https://www.wikidata.org/wiki/Q7181332) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:39 | 0:02 | 0/0/0 | 0/0/0 | 0/0/0 | 5,794/100 | einfracz / qwen3.8-27b | 5 | 5/0 | 4/1 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phenazocine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: OPRD1 (inhibitor), OPRK1 (inhibitor), OPRM1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `King_1983.pdf` | King CT et al., Benzomorphan interactions with acetylch…, European journal of pharmac… (1983) | pd | 4 | [10.1016/0014-2999(83)90564-2](https://doi.org/10.1016/0014-2999(83)90564-2) | [6309536](https://www.ncbi.nlm.nih.gov/pubmed/6309536) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T05:39:31.029558+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Heyman_1989 | irrelevant | 0 | 0 | The study is a pharmacological investigation of antinociception modulation in mice and does not report any pharmacokinetic parameters for phenazocine. |
| PD | Heyman_1989 | not_relevant | 3 | 0 | The paper describes a qualitative leftward shift in the dose-response curve for phenazocine (and others) but does not provide numeric PD parameters or extractable concentration-effect data in the text. |
| popPK | King_1983 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study reporting IC50 values, not a pharmacokinetic study with disposition parameters. |
| popPK | Matsuno_1999 | irrelevant | 0 | 0 | The paper is a review of sigma-receptor agonists' effects on learning and memory, and does not report pharmacokinetic parameters for phenazocine. |
| popPK | Noda_1999 | irrelevant | 0 | 0 | The paper is a review of sigma receptor pharmacology and stress models, and does not report pharmacokinetic parameters for phenazocine. |
| popPK | SMITH_1961 | irrelevant | 0 | 0 | The paper is a clinical study evaluating the efficacy and safety of phenazocine in children, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Sheldon_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of opioid receptor modulation on bladder motility and does not report any pharmacokinetic parameters for phenazocine. |
| PD | Sheldon_1989 | not_relevant | 4 | 2 | The paper reports qualitative dose-response interactions (displacement/potentiation) for phenazocine but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve for phenazocine specifically. |
| popPK | Tierney_1989 | irrelevant | 0 | 0 | The paper is a clinical case report regarding respiratory arrest in a patient with sleep apnea, and contains no pharmacokinetic parameters or quantitative disposition data for phenazocine. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetics for postoperative nausea and vomiting and does not mention phenazocine or report any pharmacokinetic parameters. |
| PD | Weibel_2020 | not_relevant | 0 | 0 | The paper is a network meta-analysis of antiemetics for PONV and does not mention phenazocine or report any pharmacodynamic or exposure-response parameters. |
| popPK | Wolozin_1982 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study of ketocyclazocine and other opiates, not a pharmacokinetic study of phenazocine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
