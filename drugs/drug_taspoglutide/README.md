<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Taspoglutide&quot;}]"></div>

# Taspoglutide

- **generic name:** Taspoglutide
- **ATC codes:** not captured
- **DrugBank:** [DB14027](https://go.drugbank.com/drugs/DB14027) · **PubChem:** not captured
- **molar mass:** 3339.763 g/mol (C152H232N40O45) — DrugBank
- **groups:** investigational

## About

**Description.** Taspoglutide is a pharmaceutical drug, a glucagon-like peptide-1 agonist (GLP-1 agonist), under investigation for treatment of type 2 diabetes being codeveloped by Ipsen and Roche. In September 2010 Roche halted Phase III clinical trials due to incidences of serious hypersensitivity reactions and gastrointestinal side effects. As of May 2013 no new trials had been registered.

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB14027">DrugBank DB14027</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 21:26 | 4:18 | 0/0/0 | 0/2/0 | 0/0/0 | 111,915/1,286 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Li_2015_FPG](drugs/drug_taspoglutide/pd_Li_2015_FPG.md) | FPG ← taspoglutide · direct Emax (saturable) effect | — | Li HQ et al., Utilization of model-based meta-analysi…, Saudi pharmaceutical journa… (2015) | [10.1016/j.jsps.2014.11.008](https://doi.org/10.1016/j.jsps.2014.11.008) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Li_2015_HbA1c](drugs/drug_taspoglutide/pd_Li_2015_HbA1c.md) | HbA1c ← taspoglutide · direct Emax (saturable) effect | — | Li HQ et al., Utilization of model-based meta-analysi…, Saudi pharmaceutical journa… (2015) | [10.1016/j.jsps.2014.11.008](https://doi.org/10.1016/j.jsps.2014.11.008) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Li_2015_2_WT](drugs/drug_taspoglutide/pd_Li_2015_2_WT.md) | body weight loss ← taspoglutide · direct Emax (saturable) effect | — | Li HQ et al., The efficacy of placebo-adjusted taspog…, Die Pharmazie (2015) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=taspoglutide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GLP1R (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kalra_2016 | irrelevant | 0 | 0 | The paper is a general review of GLP-1 receptor agonists that mentions taspoglutide only in the search terms and does not provide any quantitative pharmacokinetic parameters for it. |
| PD | Kalra_2016 | not_relevant | 1 | 0 | The paper is a narrative review of GLP-1 receptor agonists that summarizes clinical trial outcomes (efficacy/safety) but does not report specific pharmacokinetic/pharmacodynamic modeling or numeric PD parameters (e.g., Emax, EC50) for taspoglutide. |
| popPK | Li_2015 | irrelevant | 2 | 1 | The paper is a pharmacodynamic (PD) model-based meta-analysis focusing on efficacy (FPG/HbA1c) rather than pharmacokinetic (PK) disposition parameters like clearance or volume. |
| popPK | Li_2015_2 | irrelevant | 2 | 0 | The study is a pharmacodynamic (PD) model of body weight loss, not a pharmacokinetic (PK) study, and does not report quantitative disposition parameters like clearance or volume for taspoglutide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
