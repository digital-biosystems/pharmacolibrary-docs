<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;mifamurtide&quot;}]"></div>

# mifamurtide

- **generic name:** mifamurtide
- **ATC codes:** `L03AX15`
- **DrugBank:** [DB13615](https://go.drugbank.com/drugs/DB13615) · **PubChem:** not captured
- **molar mass:** 1277.515 g/mol (C59H110N6NaO20P) — DrugBank
- **groups:** approved, investigational

## About

Mifamurtide is an immunostimulant medicine used to treat osteosarcoma. It is authorised in the European Union, but its use appears limited to this niche indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411175](https://www.wikidata.org/wiki/Q411175) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mifamurtide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: NOD2 (target), TLR4 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:45 | 0:17 | 0/0/0 | 0/0/0 | 0/0/0 | 16,552/354 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Venkatakrishnan_2012.pdf` | Venkatakrishnan K et al., A pharmacokinetic, pharmacodynamic, and…, European journal of clinica… (2012) | popPK | 8 | [10.1007/s00228-012-1262-1](https://doi.org/10.1007/s00228-012-1262-1) | [22460239](https://pubmed.ncbi.nlm.nih.gov/22460239) | Reports mifamurtide PK in humans with a half-life, but lacks explicit CL, V, or Q values in the evidence. |
| `Anderson_2014.pdf` | Anderson PM et al., Mifamurtide in metastatic and recurrent…, Pediatric blood & cancer (2014) | popPK | 7 | [10.1002/pbc.24686](https://doi.org/10.1002/pbc.24686) | [23997016](https://pubmed.ncbi.nlm.nih.gov/23997016) | Reports quantitative PK parameters for mifamurtide in humans, including half-life, but specific values for clearance and volume of distribution are described as being BSA-normalized or consistent with prior studies without explicit numeric values provided in the text. |
| `Venkatakrishnan_2014.pdf` | Venkatakrishnan K et al., Pharmacokinetics and pharmacodynamics o…, British journal of clinical… (2014) | popPK | 5 | [10.1111/bcp.12260](https://doi.org/10.1111/bcp.12260) | [24134181](https://pubmed.ncbi.nlm.nih.gov/24134181) | The study is a human PK trial for mifamurtide reporting AUC and stating clearance was not correlated, but it lacks explicit numeric values for CL, V, ka, or t1/2 required for model extraction. |

<sub>queue written 2026-10-06T22:45:41.566172+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_2014 | relevant | 7 | 4 | Reports quantitative PK parameters for mifamurtide in humans, including half-life, but specific values for clearance and volume of distribution are described as being BSA-normalized or consistent with prior studies without explicit numeric values provided in the text. |
| popPK | Gilabert-Oriol_2018 | irrelevant | 0 | 0 | The paper is a review of liposomal formulations for cancer therapy and does not report quantitative pharmacokinetic parameters for mifamurtide. |
| popPK | Venkatakrishnan_2012 | relevant | 8 | 3 | Reports mifamurtide PK in humans with a half-life, but lacks explicit CL, V, or Q values in the evidence. |
| popPK | Venkatakrishnan_2014 | relevant | 5 | 3 | The study is a human PK trial for mifamurtide reporting AUC and stating clearance was not correlated, but it lacks explicit numeric values for CL, V, ka, or t1/2 required for model extraction. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
