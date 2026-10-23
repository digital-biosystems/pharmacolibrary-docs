<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02A&quot;,&quot;href&quot;:&quot;atc/G02A.md&quot;},{&quot;label&quot;:&quot;carboprost&quot;}]"></div>

# carboprost

- **generic name:** carboprost
- **ATC codes:** `G02AD04`
- **DrugBank:** [DB19356](https://go.drugbank.com/drugs/DB19356) · **PubChem:** none
- **molar mass:** 368.514 g/mol (C21H36O5) — DrugBank
- **groups:** approved

## About

Carboprost is a prostaglandin used as a uterotonic and abortifacient, for example to induce abortion or control bleeding after childbirth. It is an approved drug, though it does not appear to have central European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5038067](https://www.wikidata.org/wiki/Q5038067) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:07 | 0:23 | 0/0/0 | 0/0/0 | 0/0/0 | 13,785/503 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morrison_2016.pdf` | Morrison JJ et al., In vitro contractile effects of agents…, European journal of pharmac… (2016) | pd | 5 | [10.1016/j.ejphar.2016.07.025](https://doi.org/10.1016/j.ejphar.2016.07.025) | [27423315](https://www.ncbi.nlm.nih.gov/pubmed/27423315) | metadata signals extractable PD data (EC50) |
| `Gong_1994.pdf` | Gong QY et al., Effects of endothelin-1 on isolated ute…, Zhongguo yao li xue bao = A… (1994) | pd | 4 |  | [8010105](https://www.ncbi.nlm.nih.gov/pubmed/8010105) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07 08:07 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Balki_2015 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on myometrial contractility that reports no pharmacokinetic parameters (clearance, volume, half-life, etc.) for carboprost. |
| popPK | Crankshaw_2017 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic experiment investigating myometrial contractions, and carboprost is used only as a co-administered agonist, with no pharmacokinetic parameters reported. |
| popPK | Dagraca_2013 | irrelevant | 0 | 0 | The study evaluates the rate of postpartum hemorrhage as a clinical outcome and does not measure or report any pharmacokinetic parameters for carboprost. |
| popPK | Gong_1989 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of endothelin on porcine coronary arteries and does not investigate the pharmacokinetics of carboprost. |
| popPK | Gong_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of uterine contractility using carboprost as a comparator, containing no pharmacokinetic parameters. |
| popPK | Morrison_2016 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of contractile effects, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2) for carboprost. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcarboprost%5D&body=Drug%3A%20carboprost%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_carboprost/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
