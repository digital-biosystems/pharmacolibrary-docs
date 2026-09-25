<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Orforglipron&quot;}]"></div>

# Orforglipron

- **generic name:** Orforglipron
- **ATC codes:** not captured
- **DrugBank:** [DB18964](https://go.drugbank.com/drugs/DB18964)
- **groups:** investigational

## About

**Description.** Orforglipron is under investigation in clinical trial NCT06010004 (A Long-term Safety Study of Orforglipron (LY3502970) in Participants With Type 2 Diabetes).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-26 21:00 | 12:36 | 0/0/0 | 0/2/0 | 0/0/0 | 158,755/10,531 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 4/8 | 11/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Guo_2025](drugs/drug_orforglipron/pd_Guo_2025_weight_reduction.md) | Guo H et al., Comparative efficacy and safety of GLP-…, Obesity pillars (2025) | [10.1016/j.obpill.2025.100162](https://doi.org/10.1016/j.obpill.2025.100162) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Sonne_2026](drugs/drug_orforglipron/pd_Sonne_2026_cAMP.md) | Sonne N et al., Generation and characterisation of a hu…, EBioMedicine (2026) | [10.1016/j.ebiom.2026.106121](https://doi.org/10.1016/j.ebiom.2026.106121) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=orforglipron) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GLP1R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of weight reduction efficacy, not a pharmacokinetic study, and does not report PK parameters like clearance or volume for orforglipron. |
| popPK | Hageen_2026_2 | irrelevant | 0 | 0 | The paper is a network meta-analysis of safety outcomes (GI adverse events and liver/pancreatic enzymes) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life for orforglipron. |
| PD | Hageen_2026_2 | not_relevant | 3 | 2 | The paper is a network meta-analysis reporting dose-response trends for adverse events and enzyme changes (ORs/MDs) but does not provide pharmacodynamic parameters (Emax, EC50) or concentration-effect relationships. |
| popPK | Ismaiel_2025 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of gastrointestinal adverse events, not a pharmacokinetic study, and contains no PK parameters for orforglipron. |
| PD | Ismaiel_2025 | not_relevant | 1 | 0 | The paper is a systematic review and network meta-analysis of adverse event risks (relative risks) and does not report pharmacokinetic or pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters like Emax or EC50. |
| PGx | Morse_2026 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) involving enzyme/transporter inhibitors and inducers, but does not report pharmacogenomic effects based on gene variants or genotypes. |
| popPK | Niazi_2026 | irrelevant | 0 | 0 | The paper is a review of oral peptide delivery that mentions orforglipron only as a small molecule GLP-1 agonist in the context of competitive landscape, without reporting any quantitative PK parameters for it. |
| PD | Niazi_2026 | not_relevant | 1 | 0 | The paper is a review on oral peptide delivery strategies and mentions orforglipron only as an emerging small molecule GLP-1 agonist without providing any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for it. |
| popPK | Nong_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy and safety outcomes (weight loss, adverse events) for obesity drugs, not a pharmacokinetic study, and contains no PK parameters for orforglipron. |
| PD | Nong_2026 | not_relevant | 1 | 0 | The paper is a systematic review and network meta-analysis of clinical outcomes (weight loss) for obesity drugs, not a pharmacokinetic/pharmacodynamic modeling study; it does not report exposure-response relationships or numeric PD parameters (e.g., Emax, EC50) for orforglipron. |
| popPK | Ohwaki_2026 | relevant | 6 | 4 | The study reports non-compartmental PK parameters (tmax, t1/2) for orforglipron, but lacks compartmental model parameters (CL, V, Q, ka) and detailed numeric tables for Cmax/AUC are likely in supplementary material. |
| PD | Pratt_2023 | not_relevant | 3 | 1 | The abstract reports qualitative dose-dependent effects (weight loss, glucose reduction) but does not provide numeric PD parameters (Emax, EC50) or a formal concentration-effect model. |
| popPK | Pratt_2023_2 | relevant | 8 | 4 | The paper reports PK parameters for orforglipron, but specific numeric values for Cmax, AUC, and CL are in Table S1 (supplementary), while only tmax and half-life ranges are provided in the main text. |
| popPK | Tantoush_2026 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis focusing on efficacy and safety outcomes (weight, HbA1c, adverse events) rather than pharmacokinetic parameters. |
| PD | Tantoush_2026 | not_relevant | 3 | 2 | The paper is a network meta-analysis reporting mean differences in clinical outcomes (HbA1c, weight) across fixed doses, but it does not provide a pharmacodynamic model, concentration-effect curve, or specific PD parameters (Emax, EC50) for orforglipron. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
