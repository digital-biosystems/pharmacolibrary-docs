<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;edoxudine&quot;}]"></div>

# edoxudine

- **generic name:** edoxudine
- **ATC codes:** `D06BB09`
- **DrugBank:** [DB13421](https://go.drugbank.com/drugs/DB13421) · **PubChem:** [CID 66377](https://pubchem.ncbi.nlm.nih.gov/compound/66377)
- **molar mass:** 256.258 g/mol (C11H16N2O5) — DrugBank
- **groups:** approved, withdrawn

## About

Edoxudine is an antiviral drug that was applied to the skin to treat herpes infections. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q987691](https://www.wikidata.org/wiki/Q987691) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Halim_2017_dengue_NS_3_helicase](drugs/drug_edoxudine/pd_Halim_2017_dengue_NS_3_helicase.md) | dengue NS-3 helicase · model not identified | — | Halim SA et al., Targeting Dengue Virus NS-3 Helicase by…, Frontiers in chemistry (2017) | [10.3389/fchem.2017.00088](https://doi.org/10.3389/fchem.2017.00088) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.00).">in vitro</span> | [Katona_2004_IC50](drugs/drug_edoxudine/pd_Katona_2004_IC50.md) | 5-FU IC50 ← edoxudine · inhibition effect | — | Katona C et al., [Potentiation of 5-fluorouracil efficac…, Magyar onkologia (2004) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=edoxudine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: TK1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:15 | 4:34 | 0/0/0 | 0/2/0 | 0/0/0 | 84,054/1,041 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheraghali_1994 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 5-ethyl-2'-deoxyuridine (EDU), not edoxudine. |
| popPK | EFSA_2023 | irrelevant | 0 | 0 | The paper is an EFSA re-evaluation of the risks of bisphenol A (BPA), a different chemical, and does not report pharmacokinetic parameters for edoxudine. |
| popPK | Halim_2017 | irrelevant | 0 | 0 | The paper is an in silico study targeting the Dengue virus NS-3 Helicase and does not involve edoxudine or report its pharmacokinetic parameters. |
| popPK | Kameneva_2022 | irrelevant | 0 | 0 | The paper is a developmental biology study on adrenal chromaffin cells and serotonin signaling in rodents, with no mention of edoxudine or pharmacokinetic parameters. |
| popPK | Kumar_2001 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro antiviral activity of uracil nucleoside analogues and does not contain any pharmacokinetic data for edoxudine. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper focuses on the cellular hierarchy and therapeutic targets (CDK6) of diffuse hemispheric gliomas, not the pharmacokinetics of edoxudine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
