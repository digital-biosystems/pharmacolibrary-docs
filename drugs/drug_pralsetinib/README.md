<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pralsetinib&quot;}]"></div>

# pralsetinib

- **generic name:** pralsetinib
- **ATC codes:** `L01EX23`
- **DrugBank:** [DB15822](https://go.drugbank.com/drugs/DB15822) · **PubChem:** not captured
- **molar mass:** 533.612 g/mol (C27H32FN9O2) — DrugBank
- **groups:** approved, investigational

## About

Pralsetinib is a protein kinase inhibitor used to treat non-small-cell lung cancer. Its marketing authorisation in the European Union has been withdrawn, though it remains approved elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q97732199](https://www.wikidata.org/wiki/Q97732199) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:29 | 0:29 | 0/0/0 | 0/1/0 | 0/0/0 | 22,534/2,484 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Kassir_2024_PFS](drugs/drug_pralsetinib/pd_Kassir_2024_PFS.md) | PFS in patients with thyroid cancer ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Kassir_2024_PFS_2](drugs/drug_pralsetinib/pd_Kassir_2024_PFS_2.md) | PFS in patients with NSCLC ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Kassir_2024_grade_3_anemia](drugs/drug_pralsetinib/pd_Kassir_2024_grade_3_anemia.md) | grade ≥3 anemia ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Kassir_2024_grade_3_lymphopenia](drugs/drug_pralsetinib/pd_Kassir_2024_grade_3_lymphopenia.md) | grade ≥3 lymphopenia ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Kassir_2024_grade_3_pneumonia](drugs/drug_pralsetinib/pd_Kassir_2024_grade_3_pneumonia.md) | grade ≥3 pneumonia ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pralsetinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer/inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C8` inducer/inhibitor, `CYP2C9` inducer/inhibitor, `CYP2D6` substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer/inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer/inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DDR1 (inhibitor), FGFR1 (inhibitor), FGFR2 (inhibitor), FLT3 (inhibitor), JAK1 (inhibitor), JAK2 (inhibitor), KDR (inhibitor), NTRK1 (inhibitor), NTRK3 (inhibitor), PDGFRB (inhibitor), RET (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jade_2023 | irrelevant | 0 | 0 | This is a computational drug-screening study and reports no pralsetinib pharmacokinetic parameters. |
| popPK | Kassir_2024 | irrelevant | 1 | 0 | This is a human exposure-response analysis and reports no quantitative pralsetinib disposition parameters in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
