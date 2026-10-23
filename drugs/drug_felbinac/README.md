<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M02A&quot;,&quot;href&quot;:&quot;atc/M02A.md&quot;},{&quot;label&quot;:&quot;felbinac&quot;}]"></div>

# felbinac

- **generic name:** felbinac
- **ATC codes:** `M02AA08`
- **DrugBank:** [DB07477](https://go.drugbank.com/drugs/DB07477) · **PubChem:** [CID 3332](https://pubchem.ncbi.nlm.nih.gov/compound/3332)
- **molar mass:** 212.2439 g/mol (C14H12O2) — DrugBank
- **groups:** investigational

## About

Felbinac is a non-steroidal anti-inflammatory drug applied to the skin to relieve joint and muscular pain. It is not an approved medicine in major databases, where it is listed only as investigational, though topical products are available in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3742067](https://www.wikidata.org/wiki/Q3742067) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=felbinac).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CTSL (unknown), PTGS1 (modulator), PTGS2 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:44 | 0:13 | 0/0/0 | 0/0/0 | 0/0/0 | 8,182/282 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Higaki_2002.pdf` | Higaki K et al., Estimation of intradermal disposition k…, International journal of ph… (2002) | popPK | 5 | [10.1016/s0378-5173(02)00084-4](https://doi.org/10.1016/s0378-5173(02)00084-4) | [12052698](https://pubmed.ncbi.nlm.nih.gov/12052698) | Felbinac is one of 10 comparator drugs in a mechanistic rat skin penetration study; no specific PK parameters (CL, V, t1/2) for felbinac are reported, only a relative contribution percentage. |
| `Tanaka_2016.pdf` | Tanaka S et al., Prediction of fetal ductus arteriosus c…, International journal of cl… (2016) | popPK | 5 | [10.5414/CP202532](https://doi.org/10.5414/CP202532) | [27285464](https://pubmed.ncbi.nlm.nih.gov/27285464) | The paper uses felbinac as one of multiple NSAIDs in a PK/PD model to predict fetal toxicity, and no specific numeric PK parameter values for felbinac are present in the provided text. |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 |  | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07 01:44 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Higaki_2002 | irrelevant | 5 | 2 | Felbinac is one of 10 comparator drugs in a mechanistic rat skin penetration study; no specific PK parameters (CL, V, t1/2) for felbinac are reported, only a relative contribution percentage. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA-A receptor binding and does not report pharmacokinetic parameters for felbinac. |
| popPK | Tanaka_2016 | irrelevant | 5 | 0 | The paper uses felbinac as one of multiple NSAIDs in a PK/PD model to predict fetal toxicity, and no specific numeric PK parameter values for felbinac are present in the provided text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfelbinac%5D&body=Drug%3A%20felbinac%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_felbinac/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
