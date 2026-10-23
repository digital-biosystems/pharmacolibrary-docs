<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05B&quot;,&quot;href&quot;:&quot;atc/H05B.md&quot;},{&quot;label&quot;:&quot;paricalcitol&quot;}]"></div>

# paricalcitol

- **generic name:** paricalcitol
- **ATC codes:** `H05BX02`
- **DrugBank:** [DB00910](https://go.drugbank.com/drugs/DB00910) · **PubChem:** [CID 5281104](https://pubchem.ncbi.nlm.nih.gov/compound/5281104)
- **molar mass:** 416.6365 g/mol (C27H44O3) — DrugBank
- **groups:** approved, investigational

## About

Paricalcitol is a vitamin D analogue used to treat secondary hyperparathyroidism in patients with kidney disease or kidney failure. It is an approved medicine and is used in clinical practice, mainly in the care of patients with chronic renal insufficiency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q155746](https://www.wikidata.org/wiki/Q155746) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wu-Wong_2007_PAI_1](drugs/drug_paricalcitol/pd_Wu_Wong_2007_PAI_1.md) | plasminogen activator inhibitor-1 ← paricalcitol · direct sigmoid Emax (Hill) effect | — | Wu-Wong JR et al., Vitamin D analogs modulate the expressi…, Journal of vascular research (2007) | [10.1159/000097812](https://doi.org/10.1159/000097812) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wu-Wong_2007_THBS1](drugs/drug_paricalcitol/pd_Wu_Wong_2007_THBS1.md) | thrombospondin-1 ← paricalcitol · direct sigmoid Emax (Hill) effect | — | Wu-Wong JR et al., Vitamin D analogs modulate the expressi…, Journal of vascular research (2007) | [10.1159/000097812](https://doi.org/10.1159/000097812) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wu-Wong_2007_TM](drugs/drug_paricalcitol/pd_Wu_Wong_2007_TM.md) | thrombomodulin ← paricalcitol · direct sigmoid Emax (Hill) effect | — | Wu-Wong JR et al., Vitamin D analogs modulate the expressi…, Journal of vascular research (2007) | [10.1159/000097812](https://doi.org/10.1159/000097812) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wu-Wong_2011_VDR](drugs/drug_paricalcitol/pd_Wu_Wong_2011_VDR.md) | VDR expression ← paricalcitol · direct sigmoid Emax (Hill) effect | — | Wu-Wong JR et al., Differential effects of vitamin d recep…, Cardiovascular drugs and th… (2011) | [10.1007/s10557-011-6287-7](https://doi.org/10.1007/s10557-011-6287-7) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=paricalcitol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate, `UGT1A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CYP24A1 (substrate), VDR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:29 | 0:56 | 0/0/0 | 2/0/0 | 0/0/0 | 28,709/2,414 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Noertersheuser_2012.pdf` | Noertersheuser PA et al., Exposure-clinical response analysis of…, Journal of clinical pharmac… (2012) | popPK | 10 | [10.1177/0091270011412966](https://doi.org/10.1177/0091270011412966) | [21940716](https://pubmed.ncbi.nlm.nih.gov/21940716) | The abstract provides quantitative population PK parameters (oral clearance, bioavailability) for paricalcitol in humans, though specific volume or half-life values are not listed in the provided text. |

<sub>queue written 2026-10-07T10:28:53.860305+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Negri_2014 | not_relevant | 2 | 1 | The text is a general review discussing calcitriol resistance and VDR polymorphisms in the context of non-selective VDRAs, mentioning paricalcitol only as a potential alternative for resistant patients, but it does not report a specific pharmacogenomic effect on a PK or PD parameter of paricalcitol. |
| PGx | Papadimitriou_2023 | not_relevant | 0 | 0 | The paper discusses clinical efficacy (autoantibody reversion) and safety (calcium levels) but does not report pharmacogenomic data or genotype-drug interactions affecting paricalcitol PK/PD parameters. |
| PGx | Shay_2016 | not_relevant | 0 | 0 | The text is a table of contents for a conference and contains no specific data or findings regarding pharmacogenomics or paricalcitol. |
| popPK | Sprague_2016 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (iPTH levels) of phosphate binders on paricalcitol, not quantitative pharmacokinetic parameters (CL, V, etc.). |
| popPK | Wu-Wong_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of paricalcitol's effect on PAI-1 expression in vascular cells and does not report any pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Wu-Wong_2007 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of gene expression, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Wu-Wong_2011 | irrelevant | 0 | 0 | This is an in vitro mechanistic study measuring gene expression and enzyme activity, not pharmacokinetic parameters like clearance or volume. |
| popPK | Wu-Wong_2011_2 | irrelevant | 0 | 0 | The study investigates a novel VDR modulator (VS-105) and mentions paricalcitol only as a comparator, without reporting any pharmacokinetic parameters for paricalcitol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
