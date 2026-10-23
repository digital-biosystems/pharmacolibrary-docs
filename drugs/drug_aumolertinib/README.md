<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;aumolertinib&quot;}]"></div>

# aumolertinib

- **generic name:** aumolertinib
- **ATC codes:** `L01EB11`
- **DrugBank:** [DB16640](https://go.drugbank.com/drugs/DB16640) · **PubChem:** not captured
- **molar mass:** 525.657 g/mol (C30H35N7O2) — DrugBank
- **groups:** investigational

## About

Aumolertinib is an EGFR tyrosine kinase inhibitor studied for the treatment of non-small-cell lung cancer. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105317437](https://www.wikidata.org/wiki/Q105317437) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Ao_2022_cell_viabilities](drugs/drug_aumolertinib/pd_Ao_2022_cell_viabilities.md) | cell viabilities ← aumolertinib · inhibition effect | — | Ao L et al., Sequence-dependent synergistic effect o…, Journal of experimental & c… (2022) | [10.1186/s13046-022-02369-3](https://doi.org/10.1186/s13046-022-02369-3) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:33 | 0:59 | 0/0/0 | 1/0/0 | 0/0/0 | 89,309/3,948 | openai / gpt-6-luna | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ao_2022 | irrelevant | 2 | 0 | Mouse drug concentrations were measured, but no quantitative disposition parameter values are provided. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | This human case report studies furmonertinib, while aumolertinib is only mentioned and no aumolertinib disposition parameters are reported. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | This is a cancer efficacy study and reports no quantitative pharmacokinetic disposition parameters for aumolertinib. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | This human case report gives an almonertinib dose but reports no quantitative pharmacokinetic disposition parameters. |
| popPK | Zhang_2021 | irrelevant | 3 | 6 | Mouse PK exposure values (Cmax, tmax, and AUC) are present, but no qualifying disposition parameters or compartmental model are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
