<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;megestrol&quot;}]"></div>

# megestrol

- **generic name:** megestrol
- **ATC codes:** `G03AA04`, `G03AB01`, `G03AC05`, `G03DB02`, `G03FA08`, `G03FB04`, `L02AB01`
- **DrugBank:** [DB19378](https://go.drugbank.com/drugs/DB19378) · **PubChem:** not captured
- **molar mass:** 342.479 g/mol (C22H30O3) — DrugBank
- **groups:** approved

## About

Megestrol is a synthetic progestogen used as a hormonal contraceptive and to treat hormone-related conditions such as breast cancer, endometrial carcinoma, anorexia and cachexia. It remains an approved medicine and is used in various countries, mainly in oral hormonal therapy and cancer-related endocrine treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410513](https://www.wikidata.org/wiki/Q410513) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Guk_2017_reference](drugs/drug_megestrol/Megestrol_Guk2017_reference.md) | — | 1-compartment (no model) | 0 | Guk J et al., Quantitative Assessment of Food Effect…, Basic & clinical pharmacolo… (2017) | [10.1111/bcpt.12677](https://doi.org/10.1111/bcpt.12677) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=megestrol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PGR (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:53 | 0:40 | 0/1/0 | 0/0/0 | 0/0/0 | 18,379/1,078 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guk_2017.pdf` | Guk J et al., Quantitative Assessment of Food Effect…, Basic & clinical pharmacolo… (2017) | popPK | 10 | [10.1111/bcpt.12677](https://doi.org/10.1111/bcpt.12677) | [27639080](https://pubmed.ncbi.nlm.nih.gov/27639080) | The paper reports a population PK model for megestrol acetate with specific parameter values (e.g., recycling times, food effect ratios) present in the abstract, though standard parameters like CL and V are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T08:53:03.764122+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chen_2021 | not_relevant | 0 | 0 | The study reports on drug-drug interaction potential via CYP3A4 induction, not on how a specific genetic variant affects megestrol pharmacokinetics or pharmacodynamics. |
| popPK | Dorai_1991 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of lipolytic activity on rat adipocytes, not a pharmacokinetic study of megestrol. |
| PGx | House_2018 | not_relevant | 1 | 0 | The paper identifies enzymes involved in megestrol acetate metabolism but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| PGx | Palácová_2016 | not_relevant | 0 | 0 | The paper reviews management of menopausal symptoms in breast cancer but does not report pharmacogenomic effects on the PK or PD of megestrol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 08:53 UTC</sub>
