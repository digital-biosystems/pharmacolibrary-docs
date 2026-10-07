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
| <span class="pk-badge pk-badge--red">rejected</span> | [Kassir_2024_PFS](drugs/drug_pralsetinib/pd_Kassir_2024_PFS.md) | PFS in patients with thyroid cancer ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kassir_2024_PFS_2](drugs/drug_pralsetinib/pd_Kassir_2024_PFS_2.md) | PFS in patients with NSCLC ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kassir_2024_grade_3_anemia](drugs/drug_pralsetinib/pd_Kassir_2024_grade_3_anemia.md) | grade ≥3 anemia ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kassir_2024_grade_3_lymphopenia](drugs/drug_pralsetinib/pd_Kassir_2024_grade_3_lymphopenia.md) | grade ≥3 lymphopenia ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kassir_2024_grade_3_pneumonia](drugs/drug_pralsetinib/pd_Kassir_2024_grade_3_pneumonia.md) | grade ≥3 pneumonia ← pralsetinib · model not identified | — | Kassir N et al., Exposure-Response Relationships for Pra…, Journal of clinical pharmac… (2024) | [10.1002/jcph.2409](https://doi.org/10.1002/jcph.2409) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pralsetinib) page (add drugs there; the set becomes a link).

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
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
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
