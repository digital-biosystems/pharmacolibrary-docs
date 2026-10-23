<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05B&quot;,&quot;href&quot;:&quot;atc/D05B.md&quot;},{&quot;label&quot;:&quot;acitretin&quot;}]"></div>

# acitretin

- **generic name:** acitretin
- **ATC codes:** `D05BB02`
- **DrugBank:** [DB00459](https://go.drugbank.com/drugs/DB00459) · **PubChem:** [CID 5284513](https://pubchem.ncbi.nlm.nih.gov/compound/5284513)
- **molar mass:** 326.4293 g/mol (C21H26O3) — DrugBank
- **groups:** approved, investigational

## About

Acitretin is a retinoid medicine used to treat psoriasis, including severe forms such as acropustulosis. It is an approved, systemically used antipsoriatic, prescribed under medical supervision and carrying a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q341500](https://www.wikidata.org/wiki/Q341500) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wu_2021_BKPyV](drugs/drug_acitretin/pd_Wu_2021_BKPyV.md) | BKPyV loads ← acitretin · inhibition effect | — | Wu Z et al., Acitretin and Retinoic Acid Derivatives…, Journal of virology (2021) | [10.1128/JVI.00127-21](https://doi.org/10.1128/JVI.00127-21) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Feld_2026_NAB](drugs/drug_acitretin/pd_Feld_2026_NAB.md) | net antiviral benefit ← acitretin · inhibition effect | — | Feld P et al., Positive net antiviral benefit of bexar…, Antiviral research (2026) | [10.1016/j.antiviral.2026.106398](https://doi.org/10.1016/j.antiviral.2026.106398) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Tippmann_2009_ADAM10_promoter_activity](drugs/drug_acitretin/pd_Tippmann_2009_ADAM10_promoter_activity.md) | ADAM10 promoter activity ← acitretin · stimulation effect | — | Tippmann F et al., Up-regulation of the alpha-secretase AD…, FASEB journal : official pu… (2009) | [10.1096/fj.08-121392](https://doi.org/10.1096/fj.08-121392) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=acitretin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: RARA (target), RARB (target), RARG (target), RBP1 (target), RXRA (target), RXRB (target), RXRG (target), Retinoic acid receptor RXR (target), STAT3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:02 | 0:59 | 0/0/0 | 1/2/0 | 0/0/0 | 13,832/5,075 | openai / gpt-6-luna | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Feld_2026 | irrelevant | 0 | 0 | Acitretin is an in-vitro antiviral comparator, with no quantitative pharmacokinetic parameters reported. |
| popPK | Hausauer_2015 | irrelevant | 0 | 0 | This is a human case report of acitretin treatment and provides no quantitative pharmacokinetic parameters. |
| popPK | Ling_1999 | irrelevant | 0 | 0 | This dosing review provides no quantitative pharmacokinetic disposition parameters. |
| popPK | Tippmann_2009 | irrelevant | 0 | 0 | This is a mechanistic study with no quantitative acitretin disposition parameters. |
| popPK | Vahlquist_1995 | irrelevant | 0 | 0 | This clinical lipid-management study reports no quantitative pharmacokinetic parameters for acitretin. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | This is an in-vitro antiviral study and reports no acitretin disposition parameters. |
| popPK | van_1989 | irrelevant | 0 | 0 | This is a clinical dose-response report and gives no quantitative pharmacokinetic disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
