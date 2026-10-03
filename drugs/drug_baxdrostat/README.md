<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;baxdrostat&quot;}]"></div>

# baxdrostat

- **generic name:** baxdrostat
- **ATC codes:** `C02KN02`
- **DrugBank:** [DB19090](https://go.drugbank.com/drugs/DB19090) · **PubChem:** not captured
- **molar mass:** 363.461 g/mol (C22H25N3O2) — DrugBank
- **groups:** investigational

## About

**Description.** Baxdrostat is under investigation in clinical trial NCT06344104 (A Phase III Study to Investigate the Efficacy and Safety of Baxdrostat in Asian Participants With Uncontrolled Hypertension on Two or More Medications Including Participants With Resistant Hypertension).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 06:40 | 1:22 | 0/0/0 | 1/0/0 | 0/0/0 | 2,068/138 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2025_CYP11B1_inhibition](drugs/drug_baxdrostat/pd_Zhang_2025_CYP11B1_inhibition.md) | 11-beta-hydroxylase inhibition ← baxdrostat (free plasma concentration; similarly BI689648, dexfadrostat, lorundrostat, LCI699) · direct Emax (saturable) effect | — | Zhang M et al., Prediction of pharmacokinetic/pharmacod…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1578117](https://doi.org/10.3389/fphar.2025.1578117) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2025_CYP11B2_inhibition](drugs/drug_baxdrostat/pd_Zhang_2025_CYP11B2_inhibition.md) | aldosterone synthase inhibition ← baxdrostat (free plasma concentration; similarly BI689648, dexfadrostat, lorundrostat, LCI699) · direct Emax (saturable) effect | — | Zhang M et al., Prediction of pharmacokinetic/pharmacod…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1578117](https://doi.org/10.3389/fphar.2025.1578117) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=baxdrostat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CYP11B2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Freeman_2024.pdf` | Freeman MW et al., Results from a Phase 1 Study Assessing…, Clinical pharmacology in dr… (2024) | popPK | 8 | [10.1002/cpdd.1371](https://doi.org/10.1002/cpdd.1371) | [38311833](https://pubmed.ncbi.nlm.nih.gov/38311833) | The paper is a Phase 1 PK study of baxdrostat, but the evidence text only provides qualitative descriptions and a single urinary excretion percentage, lacking specific numeric values for clearance, volume, or half-life. |
| `Taki_2026.pdf` | Taki Y et al., Baxdrostat versus osilodrostat: steroid…, Endocrine connections (2026) | pd | 4 | [10.1530/EC-25-0807](https://doi.org/10.1530/EC-25-0807) | [42307048](https://www.ncbi.nlm.nih.gov/pubmed/42307048) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T06:40:03.211023+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Amjad_2026 | not_relevant | 0 | 0 | The text is a title suggesting a review or perspective on integrating pharmacogenomics, but it does not report specific experimental data or fitted effect sizes for baxdrostat. |
| popPK | Falodia_2026 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis focusing on efficacy (blood pressure reduction) and safety, containing no pharmacokinetic parameters or disposition data for baxdrostat. |
| popPK | Freeman_2023 | relevant | 9 | 3 | The paper is a Phase 1 PK study of baxdrostat reporting half-life and renal clearance, but the detailed numeric PK parameters (CL, V, Cmax, AUC) are explicitly stated to be in Supplementary Table 1, which is not provided. |
| popPK | Freeman_2023_2 | irrelevant | 2 | 4 | The study is a drug-drug interaction trial where baxdrostat is a co-administered agent, and while some non-compartmental PK parameters (AUC, Cmax) for baxdrostat are present, the primary focus and detailed reporting are on metformin, lacking compartmental model parameters (CL, V, Q) for baxdrostat. |
| popPK | Freeman_2024 | relevant | 8 | 2 | The paper is a Phase 1 PK study of baxdrostat, but the evidence text only provides qualitative descriptions and a single urinary excretion percentage, lacking specific numeric values for clearance, volume, or half-life. |
| popPK | Huston_2025 | irrelevant | 2 | 0 | The paper is explicitly identified as a review that discusses evidence rather than reporting original quantitative PK parameters, and no numeric values are present in the provided text. |
| PD | Huston_2025 | not_relevant | 2 | 1 | The text is an abstract for a review article that discusses baxdrostat's PK/PD but does not present specific numeric PD parameters or extractable concentration-effect curves in the provided snippet. |
| popPK | Mohamed_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy (blood pressure reduction) and does not report any pharmacokinetic parameters for baxdrostat. |
| popPK | Mousavi_2026 | irrelevant | 1 | 0 | The paper is a narrative review of pharmacokinetics in diabetic nephropathy and does not report original quantitative PK parameter values for baxdrostat. |
| PD | Mousavi_2026 | not_relevant | 1 | 0 | The text is a review summary focusing on pharmacokinetics and qualitative effects in renal impairment, without reporting specific numeric PD parameters or concentration-effect curves for baxdrostat. |
| popPK | Shahzaib_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy and safety outcomes (blood pressure, aldosterone levels) and does not report any pharmacokinetic parameters for baxdrostat. |
| PD | Shahzaib_2026 | not_relevant | 2 | 1 | The paper is a network meta-analysis of clinical trial outcomes (blood pressure, aldosterone) and does not report pharmacokinetic data, concentration-effect curves, or formal pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | Sunnåker_2025 | irrelevant | 2 | 0 | The paper focuses on concentration-QTc modeling for safety assessment and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for baxdrostat. |
| popPK | Taki_2026 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| PD | Taki_2026 | not_relevant | 0 | 0 | The paper describes an in vitro study in human adrenocortical cells, not a clinical pharmacodynamic or exposure-response analysis in humans. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of efficacy and safety (blood pressure and aldosterone levels) that does not report any pharmacokinetic parameters for baxdrostat. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
