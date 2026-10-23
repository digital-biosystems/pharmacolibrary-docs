<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;chlormezanone&quot;}]"></div>

# chlormezanone

- **generic name:** chlormezanone
- **ATC codes:** `M03BB02`
- **DrugBank:** [DB01178](https://go.drugbank.com/drugs/DB01178) · **PubChem:** [CID 2717](https://pubchem.ncbi.nlm.nih.gov/compound/2717)
- **molar mass:** 273.736 g/mol (C11H12ClNO3S) — DrugBank
- **groups:** approved, withdrawn

## About

Chlormezanone is a centrally acting muscle relaxant with anxiolytic effects that was used to treat spasticity and anxiety disorders. It has been withdrawn from the market and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5102983](https://www.wikidata.org/wiki/Q5102983) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=chlormezanone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TSPO (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:36 | 0:35 | 0/0/0 | 0/0/0 | 0/0/0 | 8,550/615 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gautier_1990.pdf` | Gautier V et al., [Pharmacokinetics of chlormezanone in h…, Therapie (1990) | popPK | 9 |  | [2399514](https://pubmed.ncbi.nlm.nih.gov/2399514) | The paper reports quantitative PK parameters (Cmax, Tmax, AUC, T1/2) for chlormezanone in healthy volunteers. |
| `Bernard_1991.pdf` | Bernard N et al., Pharmacokinetics of chlormezanone in el…, European journal of clinica… (1991) | popPK | 6 | [10.1007/BF00314993](https://doi.org/10.1007/BF00314993) | [1815974](https://pubmed.ncbi.nlm.nih.gov/1815974) | The paper describes a pharmacokinetic study of chlormezanone in humans, but the evidence only provides qualitative descriptions and half-lives without specific quantitative values for clearance (CL) or volume (V). |

<sub>queue written 2026-10-07 02:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bernard_1991 | relevant | 6 | 2 | The paper describes a pharmacokinetic study of chlormezanone in humans, but the evidence only provides qualitative descriptions and half-lives without specific quantitative values for clearance (CL) or volume (V). |
| popPK | Liu_2003 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channels (BKca) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for chlormezanone. |
| popPK | Saano_1990 | irrelevant | 0 | 0 | Chlormezanone is used as a co-administered muscle relaxant to probe the pharmacokinetics of paracetamol, which is the subject drug of the study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchlormezanone%5D&body=Drug%3A%20chlormezanone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chlormezanone/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
