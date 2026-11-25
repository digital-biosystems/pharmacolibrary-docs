<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;budipine&quot;}]"></div>

# budipine

- **generic name:** budipine
- **ATC codes:** `N04BX03`
- **DrugBank:** [DB13502](https://go.drugbank.com/drugs/DB13502) · **PubChem:** none
- **molar mass:** 293.454 g/mol (C21H27N) — DrugBank
- **groups:** experimental

## About

Budipine is an antiparkinson agent used to treat Parkinson's disease. It is an experimental drug not currently in clinical use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q28128](https://www.wikidata.org/wiki/Q28128) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:10 | 0:04 | 0/0/0 | 0/0/0 | 0/0/0 | 3,355/178 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jackisch_1994.pdf` | Jackisch R et al., The antiparkinsonian drugs budipine and…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)00528-1](https://doi.org/10.1016/0014-2999(94)00528-1) | [7851484](https://www.ncbi.nlm.nih.gov/pubmed/7851484) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-11-23 19:10 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jackisch_1994 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on NMDA receptor binding, not a pharmacokinetic study of budipine disposition. |
| PGx | Jackisch_1994 | not_relevant | 0 | 0 | The paper describes the mechanism of action of budipine on NMDA receptors in vitro and does not involve any genetic variants or pharmacogenomic analysis. |
| popPK | Lelas_1999 | irrelevant | 0 | 0 | Budipine is used as a CYP2D6 inhibitor/comparator drug, not the subject of a pharmacokinetic study. |
| PGx | Lelas_1999 | not_relevant | 3 | 8 | The study investigates CYP2D6 inhibition using drug inhibitors (budipine) in animals, not human genetic variants or genotypes affecting PK/PD. |
| popPK | Ramamoorthy_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of CYP2D6 alleles where budipine is used only as a probe inhibitor, not as the subject of a pharmacokinetic parameter study. |
| PGx | Ramamoorthy_2001 | not_relevant | 0 | 0 | Budipine is mentioned only as an inhibitor in a binding assay, not as the substrate undergoing PK/PD evaluation, and the paper focuses on CYP2D6 substrate metabolism. |
| popPK | Tomkins_1997 | irrelevant | 0 | 0 | Budipine is used as a CYP2D1 inhibitor to study amphetamine pharmacology; no PK parameters are reported for budipine itself. |
| popPK | Tomkins_1997_2 | irrelevant | 0 | 0 | Budipine is used only as a CYP2D1 inhibitor (comparator/agent) to study hydrocodone metabolism; no PK parameters for budipine are reported. |
| PGx | Tomkins_1997_2 | not_relevant | 0 | 0 | The paper uses budipine as a CYP2D1 inhibitor to study hydrocodone metabolism, rather than reporting a pharmacogenomic effect on budipine's own PK or PD. |
| popPK | Uhr_2005 | irrelevant | 4 | 2 | The study reports organ distribution ratios (brain/plasma) rather than standard compartmental PK parameters (CL, V, Q) for budipine, and lacks the specific numeric concentration values needed for extraction. |
| PGx | Uhr_2005 | not_relevant | 0 | 0 | The study is an in-vivo mouse genetic study (knockout) examining the role of P-gp in budipine distribution, not a human pharmacogenomic study linking specific genotypes to PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbudipine%5D&body=Drug%3A%20budipine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_budipine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
