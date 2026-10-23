<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03X&quot;,&quot;href&quot;:&quot;atc/G03X.md&quot;},{&quot;label&quot;:&quot;gestrinone&quot;}]"></div>

# gestrinone

- **generic name:** gestrinone
- **ATC codes:** `G03XA02`
- **DrugBank:** [DB11619](https://go.drugbank.com/drugs/DB11619) · **PubChem:** [CID 27812](https://pubchem.ncbi.nlm.nih.gov/compound/27812)
- **molar mass:** 308.4141 g/mol (C21H24O2) — DrugBank
- **groups:** approved

## About

Gestrinone is a synthetic steroid hormone (an antigonadotropin/progestin) that has been used as an oral contraceptive and in the treatment of gynaecological conditions such as endometriosis. It is an approved drug, but it does not appear to be authorised in the European Union and is used only in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3761406](https://www.wikidata.org/wiki/Q3761406) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Markiewicz_1992_alkaline_phosphatase_activity](drugs/drug_gestrinone/pd_Markiewicz_1992_alkaline_phosphatase_activity.md) | alkaline phosphatase activity ← gestrinone · direct sigmoid Emax (Hill) effect | — | Markiewicz L et al., Intrinsic estrogenicity of some progest…, The Journal of steroid bioc… (1992) | [10.1016/0960-0760(92)90224-7](https://doi.org/10.1016/0960-0760(92)90224-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gestrinone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (target), GNRHR (target), NR3C1 (target), PGR (target), SHBG (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:05 | 1:32 | 0/0/0 | 1/0/0 | 0/0/0 | 18,402/831 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fedele_1990 | irrelevant | 0 | 0 | The paper is a histological/ultrastructural study evaluating endometrial changes during gestrinone treatment and does not report any quantitative pharmacokinetic parameters. |
| popPK | Malavasi_2025 | irrelevant | 2 | 0 | This is a study protocol for a future clinical trial; it outlines plans to measure PK parameters but contains no reported quantitative disposition data, only background information on oral gestrinone half-life. |
| popPK | Markiewicz_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay measuring intrinsic estrogenicity (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Markiewicz_1994 | irrelevant | 0 | 0 | The paper reports in vitro bioassay data (EC50, efficacy) for receptor activity, not pharmacokinetic disposition parameters for gestrinone. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgestrinone%5D&body=Drug%3A%20gestrinone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gestrinone/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
