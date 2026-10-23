<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;roquinimex&quot;}]"></div>

# roquinimex

- **generic name:** roquinimex
- **ATC codes:** `L03AX02`
- **DrugBank:** [DB11366](https://go.drugbank.com/drugs/DB11366) · **PubChem:** [CID 54676478](https://pubchem.ncbi.nlm.nih.gov/compound/54676478)
- **molar mass:** 308.337 g/mol (C18H16N2O3) — DrugBank
- **groups:** experimental

## About

Roquinimex (Linomide) is an immunostimulant that was investigated as an immunologic adjuvant and angiogenesis inhibitor for immune-related conditions such as multiple sclerosis. It remains experimental and is not an approved medicine; trials were halted after serious cardiovascular side effects.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q964482](https://www.wikidata.org/wiki/Q964482) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=roquinimex).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL2 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:05 | 0:42 | 0/0/0 | 0/0/0 | 0/0/0 | 25,093/826 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tuvesson_2000.pdf` | Tuvesson H et al., Identification of cytochrome P4503A as…, Xenobiotica; the fate of fo… (2000) | pgx | 7 | [10.1080/004982500433327](https://doi.org/10.1080/004982500433327) | [11055268](https://www.ncbi.nlm.nih.gov/pubmed/11055268) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06 23:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arad_1996 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics and mechanism of action of linomide (LS-2616), not the pharmacokinetics of roquinimex. |
| popPK | Hartoft-Nielsen_2001 | irrelevant | 0 | 0 | The study investigates the immunological effect of Linomide on autoimmune thyroiditis in NOD mice and does not involve roquinimex or pharmacokinetic parameters. |
| popPK | Kleinau_1989 | irrelevant | 0 | 0 | The paper studies the drug Linomide (roquinimex) in a pharmacodynamic/immunological context (arthritis model) and contains no pharmacokinetic data. |
| popPK | Miller_1997 | irrelevant | 0 | 0 | The paper is a review of multiple sclerosis therapies that does not mention roquinimex or report any pharmacokinetic parameters. |
| popPK | Morecki_1997 | irrelevant | 0 | 0 | The paper studies the immunological effects of linomide (not roquinimex) on antibody responses in mice, with no pharmacokinetic data. |
| popPK | Ostraat_1998 | irrelevant | 0 | 0 | The paper focuses on the immunological effects of leflunomide and cyclosporin A in a rat cardiac transplantation model and does not mention roquinimex or report any pharmacokinetic parameters for it. |
| popPK | Peltoniemi_2002 | irrelevant | 0 | 0 | The study investigates the immunomodulatory effects of Linomide on Semliki Forest virus infection in mice, not the pharmacokinetics of roquinimex. |
| popPK | Peltoniemi_2004 | irrelevant | 0 | 0 | The study investigates the immunomodulatory effects of roquinimex on cytokine expression in mice, not its pharmacokinetic disposition parameters. |
| PGx | Tuvesson_2000 | not_relevant | 2 | 0 | The paper identifies CYP3A4 as the metabolizing enzyme but does not report a specific genetic variant or polymorphism affecting PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Broquinimex%5D&body=Drug%3A%20roquinimex%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_roquinimex/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
