<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;clobetasone&quot;}]"></div>

# clobetasone

- **generic name:** clobetasone
- **ATC codes:** `D07AB01`, `S01BA09`, `S01CA11`
- **DrugBank:** [DB13158](https://go.drugbank.com/drugs/DB13158) · **PubChem:** [CID 71387](https://pubchem.ncbi.nlm.nih.gov/compound/71387)
- **molar mass:** 408.89 g/mol (C22H26ClFO4) — DrugBank
- **groups:** approved

## About

Clobetasone is a moderately potent topical corticosteroid used to treat inflammatory skin conditions, and is also used as an ophthalmological anti-inflammatory agent, alone or combined with antiinfectives. It is an approved medicine and remains in use, mainly in dermatological preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5134764](https://www.wikidata.org/wiki/Q5134764) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=clobetasone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: NR3C1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:03 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 17,803/462 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Suzuki_2015.pdf` | Suzuki G et al., Detection of glucocorticoid receptor ag…, The Science of the total en… (2015) | pd | 4 | [10.1016/j.scitotenv.2015.05.008](https://doi.org/10.1016/j.scitotenv.2015.05.008) | [25965047](https://www.ncbi.nlm.nih.gov/pubmed/25965047) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T21:03:04.898692+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hehir_1983 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| popPK | Lax_2022 | irrelevant | 0 | 0 | The paper is a systematic review of clinical trials evaluating the efficacy and safety of topical corticosteroid usage strategies for eczema, containing no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Rhodes_1997 | irrelevant | 0 | 0 | The study measures skin surface thickness and substantivity using fluorescence spectroscopy, not pharmacokinetic parameters like clearance or volume. |
| popPK | Suzuki_2015 | irrelevant | 0 | 0 | The study is an in vitro bioassay (GR-CALUX) assessing receptor agonistic potency in sewage effluents, not a pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
