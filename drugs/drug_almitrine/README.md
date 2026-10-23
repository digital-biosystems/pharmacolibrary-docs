<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;almitrine&quot;}]"></div>

# almitrine

- **generic name:** almitrine
- **ATC codes:** `R07AB07`
- **DrugBank:** [DB01430](https://go.drugbank.com/drugs/DB01430) · **PubChem:** [CID 33887](https://pubchem.ncbi.nlm.nih.gov/compound/33887)
- **molar mass:** 477.5522 g/mol (C26H29F2N7) — DrugBank
- **groups:** approved

## About

Almitrine is a respiratory stimulant drug used for breathing problems. It has been approved for use, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4733858](https://www.wikidata.org/wiki/Q4733858) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Winkelmann_1992_reference](drugs/drug_almitrine/Almitrine_Winkelmann1992_reference.md) | — | 1-compartment (no model) | 0 | Winkelmann BR et al., Acute and chronic effects of low dose a…, The European journal of med… (1992) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=almitrine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ATP1A1 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:40 | 1:12 | 0/1/0 | 0/0/0 | 0/0/0 | 149,374/10,953 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Winkelmann_1992.pdf` | Winkelmann BR et al., Acute and chronic effects of low dose a…, The European journal of med… (1992) | popPK | 8 |  | [1341206](https://pubmed.ncbi.nlm.nih.gov/1341206) | The study reports a specific quantitative PK parameter (terminal half-life of 32 +/- 29 days) and mentions a 3-compartment model, although other parameters like clearance and volume are not explicitly provided. |

<sub>queue written 2026-10-07 17:39 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Clerbaux_1985 | irrelevant | 0 | 0 | The study measures hemoglobin oxygen affinity and DPG levels, not quantitative pharmacokinetic parameters (CL, Vd, t1/2) of almitrine. |
| popPK | Dos_2023 | irrelevant | 0 | 0 | The study evaluates the in vivo efficacy of almitrine against Toxoplasma gondii in mice and in silico ADMET predictions, but does not report quantitative pharmacokinetic parameters (CL, V, ka) for almitrine. |
| popPK | Olievier_1987 | irrelevant | 1 | 0 | This is a pharmacodynamic study of ventilatory response in cats, not a pharmacokinetic study reporting disposition parameters for almitrine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balmitrine%5D&body=Drug%3A%20almitrine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_almitrine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 17:39 UTC</sub>
