<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;valrubicin&quot;}]"></div>

# valrubicin

- **generic name:** valrubicin
- **ATC codes:** `L01DB09`
- **DrugBank:** [DB00385](https://go.drugbank.com/drugs/DB00385) · **PubChem:** [CID 454216](https://pubchem.ncbi.nlm.nih.gov/compound/454216)
- **molar mass:** 723.651 g/mol (C34H36F3NO13) — DrugBank
- **groups:** approved

## About

Valrubicin is an anticancer drug used to treat bladder cancer. It is an approved medicine, given as a topoisomerase inhibitor, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7912593](https://www.wikidata.org/wiki/Q7912593) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:56 | 3:50 | 0/0/0 | 1/1/0 | 0/0/0 | 92,326/6,426 | openai / gpt-6-luna | 7 | 2/0 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other organism</span> | [Sarma_2025_anti_leishmanial_activity_on_amastigotes](drugs/drug_valrubicin/pd_Sarma_2025_anti_leishmanial_activity_on_amastigotes.md) | anti-leishmanial activity on amastigotes ← valrubicin · inhibition effect | — | Sarma M et al., Identification of novel anti-leishmania…, FEBS letters (2025) | [10.1002/1873-3468.15016](https://doi.org/10.1002/1873-3468.15016) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other organism</span> | [Sarma_2025_anti_leishmanial_activity_on_promastigotes](drugs/drug_valrubicin/pd_Sarma_2025_anti_leishmanial_activity_on_promastigotes.md) | anti-leishmanial activity on promastigotes ← valrubicin · inhibition effect | — | Sarma M et al., Identification of novel anti-leishmania…, FEBS letters (2025) | [10.1002/1873-3468.15016](https://doi.org/10.1002/1873-3468.15016) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kumar_2026_cell_viability](drugs/drug_valrubicin/pd_Kumar_2026_cell_viability.md) | cell viability ← valrubicin · inhibition effect | — | Kumar H et al., FusionTarget: Computational framework f…, iScience (2026) | [10.1016/j.isci.2026.116076](https://doi.org/10.1016/j.isci.2026.116076) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=valrubicin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DNA (intercalation), TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Islam_2022 | irrelevant | 0 | 0 | This review reports no quantitative valrubicin disposition parameters. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | This is an in-silico drug-screening and cell-assay study with no quantitative valrubicin pharmacokinetic parameters. |
| PGx | Lau_2017 | not_relevant | 0 | 0 | The paper studies Sgsh genotype effects on disease phenotypes in mice and does not report valrubicin PK or PD parameters. |
| popPK | Smith_2019 | irrelevant | 0 | 0 | This computational study reports no valrubicin-specific pharmacokinetic parameter values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
