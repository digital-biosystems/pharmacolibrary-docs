<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;tiopronin&quot;}]"></div>

# tiopronin

- **generic name:** tiopronin
- **ATC codes:** `G04BX16`
- **DrugBank:** [DB06823](https://go.drugbank.com/drugs/DB06823) · **PubChem:** [CID 5483](https://pubchem.ncbi.nlm.nih.gov/compound/5483)
- **molar mass:** 163.19 g/mol (C5H9NO3S) — DrugBank
- **groups:** approved

## About

Tiopronin is a urological medicine used to treat cystinuria, a condition causing recurring kidney stones. It is an approved drug and is used in several countries, mainly as a second-line option when other measures are not enough.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414456](https://www.wikidata.org/wiki/Q414456) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Ambanelli_1982_positive_response](drugs/drug_tiopronin/pd_Ambanelli_1982_positive_response.md) | positive response ← tiopronin · model not identified | — | Ambanelli U et al., Clinical efficacy and adverse effects o…, Zeitschrift fur Rheumatolog… (1982) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Jiang_2018_TEAC](drugs/drug_tiopronin/pd_Jiang_2018_TEAC.md) | antioxidant capacity ← tiopronin · stimulation effect | — | Jiang J et al., Determination of antioxidant capacity o…, Talanta (2018) | [10.1016/j.talanta.2018.02.098](https://doi.org/10.1016/j.talanta.2018.02.098) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tiopronin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: MPO (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:12 | 0:21 | 0/0/0 | 0/2/0 | 0/0/0 | 24,452/641 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2008.pdf` | Liu FY et al., [Determination of tiopronin in rat plas…, Yao xue xue bao = Acta phar… (2008) | popPK | 5 |  | [18819478](https://pubmed.ncbi.nlm.nih.gov/18819478) | The study describes an HPLC method and mentions fitting data to a two-compartment model, but no quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) are present in the provided text. |

<sub>queue written 2026-10-07 09:12 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Goldsborough_2011 | not_relevant | 0 | 0 | The study focuses on drug-drug interactions and reversal of multidrug resistance via P-gp/MRP1 downregulation in cell lines, rather than pharmacogenomic effects on tiopronin's own PK/PD. |
| popPK | Liu_2008 | irrelevant | 5 | 0 | The study describes an HPLC method and mentions fitting data to a two-compartment model, but no quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) are present in the provided text. |
| popPK | Surrenti_1978 | irrelevant | 0 | 0 | The paper describes a therapeutic study on the antisteatosic effects of 2-MPG using liver biopsy and bile salt retention tests, with no quantitative pharmacokinetic parameters (CL, V, ka) reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btiopronin%5D&body=Drug%3A%20tiopronin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tiopronin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
