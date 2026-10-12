<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;parsaclisib&quot;}]"></div>

# parsaclisib

- **generic name:** parsaclisib
- **ATC codes:** `L01EM05`
- **DrugBank:** [DB14867](https://go.drugbank.com/drugs/DB14867) · **PubChem:** not captured
- **molar mass:** 432.88 g/mol (C20H22ClFN6O2) — DrugBank
- **groups:** investigational

## About

Parsaclisib is an investigational PI3K inhibitor anticancer drug. Its marketing application in the European Union was withdrawn, so it is not authorised there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q76802661](https://www.wikidata.org/wiki/Q76802661) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:18 | 0:53 | 0/0/0 | 1/0/0 | 0/0/0 | 46,960/4,565 | openai / gpt-6-luna | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kunieda_2025_cell_viability_of_SU_DHL_6_cells](drugs/drug_parsaclisib/pd_Kunieda_2025_cell_viability_of_SU_DHL_6_cells.md) | cell viability of SU-DHL-6 cells ← parsaclisib · inhibition effect | — | Kunieda K et al., A long-lasting PI3Kδ inhibitor zandelis…, American journal of cancer… (2025) | [10.62347/JCGQ1004](https://doi.org/10.62347/JCGQ1004) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kunieda_2025_cell_viability_of_WSU_FSCCL_cells](drugs/drug_parsaclisib/pd_Kunieda_2025_cell_viability_of_WSU_FSCCL_cells.md) | cell viability of WSU-FSCCL cells ← parsaclisib · inhibition effect | — | Kunieda K et al., A long-lasting PI3Kδ inhibitor zandelis…, American journal of cancer… (2025) | [10.62347/JCGQ1004](https://doi.org/10.62347/JCGQ1004) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hamadani_2023 | irrelevant | 0 | 0 | This human safety and efficacy study reports no quantitative pharmacokinetic disposition parameters. |
| popPK | Kunieda_2025 | irrelevant | 0 | 0 | Parsaclisib is an in-vitro comparator, and no quantitative disposition parameters are reported for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
