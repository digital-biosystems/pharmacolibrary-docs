<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfaphenazole&quot;}]"></div>

# sulfaphenazole

- **generic name:** sulfaphenazole
- **ATC codes:** `J01ED08`
- **DrugBank:** [DB06729](https://go.drugbank.com/drugs/DB06729) · **PubChem:** [CID 5335](https://pubchem.ncbi.nlm.nih.gov/compound/5335)
- **molar mass:** 314.362 g/mol (C15H14N4O2S) — DrugBank
- **groups:** approved

## About

Sulfaphenazole is a long-acting sulfonamide antibiotic used to treat bacterial infections. It is an approved antibacterial for systemic use, though it is not widely used today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6577293](https://www.wikidata.org/wiki/Q6577293) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:14 | 0:17 | 0/0/0 | 0/0/1 | 0/0/0 | 19,096/1,132 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schmider_1997_mestranol_demethylation_activity](drugs/drug_sulfaphenazole/pd_Schmider_1997_mestranol_demethylation_activity.md) | mestranol demethylation activity ← sulfaphenazole · direct Emax (saturable) effect | — | Schmider J et al., Biotransformation of mestranol to ethin…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb04781.x](https://doi.org/10.1002/j.1552-4604.1997.tb04781.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Prabhu_2002 | irrelevant | 0 | 0 | The study focuses on troglitazone metabolism, and sulfaphenazole is only used as a CYP inhibitor tool compound, with no PK parameters reported for it. |
| popPK | Schejbal_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of CYP2C9 enzyme kinetics where sulfaphenazole is used only as an inhibitor, not as the subject of a pharmacokinetic study. |
| popPK | Schmider_1997 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assay investigating CYP2C9 inhibition of mestranol metabolism using sulfaphenazole as a tool compound, not a pharmacokinetic study of sulfaphenazole disposition. |
| popPK | Řemínek_2013 | irrelevant | 0 | 0 | The study is an in vitro methodological paper using sulfaphenazole as a probe inhibitor for CYP2C9, not a pharmacokinetic study of sulfaphenazole disposition. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
