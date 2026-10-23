<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05D&quot;,&quot;href&quot;:&quot;atc/R05D.md&quot;},{&quot;label&quot;:&quot;gefapixant&quot;}]"></div>

# gefapixant

- **generic name:** gefapixant
- **ATC codes:** `R05DB29`
- **DrugBank:** [DB15097](https://go.drugbank.com/drugs/DB15097) · **PubChem:** not captured
- **molar mass:** 353.4 g/mol (C14H19N5O4S) — DrugBank
- **groups:** approved, investigational

## About

Gefapixant is a cough suppressant used to treat chronic cough. It is authorised in the European Union as a cough medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q94572860](https://www.wikidata.org/wiki/Q94572860) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

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
| 2026-10-07 22:27 | 1:51 | 0/0/0 | 0/0/0 | 0/0/0 | 35,152/598 | einfracz / qwen3.8-27b | 3 | 1/1 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nussbaum_2022.pdf` | Nussbaum JC et al., Effects of Renal Impairment on the Phar…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2094](https://doi.org/10.1002/jcph.2094) | [35656754](https://pubmed.ncbi.nlm.nih.gov/35656754) | The study is a clinical PK study of gefapixant, but the evidence only provides relative exposure folds and percentage changes in clearance, lacking absolute numeric values for CL, V, or t1/2 which are likely in the full text or supplementary figures not included. |

<sub>queue written 2026-10-07T22:26:01.283531+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Nussbaum_2022 | relevant | 10 | 2 | The study is a clinical PK study of gefapixant, but the evidence only provides relative exposure folds and percentage changes in clearance, lacking absolute numeric values for CL, V, or t1/2 which are likely in the full text or supplementary figures not included. |
| popPK | Nussbaum_2022_4 | irrelevant | 0 | 0 | no_text gate: only 174 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
