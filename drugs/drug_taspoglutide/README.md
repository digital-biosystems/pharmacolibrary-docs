<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Taspoglutide&quot;}]"></div>

# Taspoglutide

- **generic name:** Taspoglutide
- **ATC codes:** none (no WHO ATC code)
- **DrugBank:** [DB14027](https://go.drugbank.com/drugs/DB14027) · **PubChem:** none
- **molar mass:** 3339.763 g/mol (C152H232N40O45) — DrugBank
- **groups:** investigational

## About

**Description.** Taspoglutide is a pharmaceutical drug, a glucagon-like peptide-1 agonist (GLP-1 agonist), under investigation for treatment of type 2 diabetes being codeveloped by Ipsen and Roche. In September 2010 Roche halted Phase III clinical trials due to incidences of serious hypersensitivity reactions and gastrointestinal side effects. As of May 2013 no new trials had been registered.

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB14027">DrugBank DB14027</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Li_2015_FPG](drugs/drug_taspoglutide/pd_Li_2015_FPG.md) | FPG ← taspoglutide · direct Emax (saturable) effect | — | Li HQ et al., Utilization of model-based meta-analysi…, Saudi pharmaceutical journa… (2015) | [10.1016/j.jsps.2014.11.008](https://doi.org/10.1016/j.jsps.2014.11.008) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Li_2015_HbA1c](drugs/drug_taspoglutide/pd_Li_2015_HbA1c.md) | HbA1c ← taspoglutide · direct Emax (saturable) effect | — | Li HQ et al., Utilization of model-based meta-analysi…, Saudi pharmaceutical journa… (2015) | [10.1016/j.jsps.2014.11.008](https://doi.org/10.1016/j.jsps.2014.11.008) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Li_2015_2_WT](drugs/drug_taspoglutide/pd_Li_2015_2_WT.md) | body weight loss ← taspoglutide · direct Emax (saturable) effect | — | Li HQ et al., The efficacy of placebo-adjusted taspog…, Die Pharmazie (2015) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=taspoglutide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GLP1R (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 21:26 | 4:18 | 0/0/0 | 0/2/0 | 0/0/0 | 111,915/1,286 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kalra_2016 | irrelevant | 0 | 0 | The paper is a general review of GLP-1 receptor agonists that mentions taspoglutide only in the search terms and does not provide any quantitative pharmacokinetic parameters for it. |
| PD | Kalra_2016 | not_relevant | 1 | 0 | The paper is a narrative review of GLP-1 receptor agonists that summarizes clinical trial outcomes (efficacy/safety) but does not report specific pharmacokinetic/pharmacodynamic modeling or numeric PD parameters (e.g., Emax, EC50) for taspoglutide. |
| popPK | Li_2015 | irrelevant | 2 | 1 | The paper is a pharmacodynamic (PD) model-based meta-analysis focusing on efficacy (FPG/HbA1c) rather than pharmacokinetic (PK) disposition parameters like clearance or volume. |
| popPK | Li_2015_2 | irrelevant | 2 | 0 | The study is a pharmacodynamic (PD) model of body weight loss, not a pharmacokinetic (PK) study, and does not report quantitative disposition parameters like clearance or volume for taspoglutide. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btaspoglutide%5D&body=Drug%3A%20taspoglutide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_taspoglutide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
