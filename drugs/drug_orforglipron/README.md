<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Orforglipron&quot;}]"></div>

# Orforglipron

- **generic name:** Orforglipron
- **ATC codes:** not captured
- **DrugBank:** [DB18964](https://go.drugbank.com/drugs/DB18964) · **PubChem:** not captured
- **molar mass:** 882.974 g/mol (C48H48F2N10O5) — DrugBank
- **groups:** investigational

## About

**Description.** Orforglipron is under investigation in clinical trial NCT06010004 (A Long-term Safety Study of Orforglipron (LY3502970) in Participants With Type 2 Diabetes).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 17:14 | 4:59 | 0/0/0 | 1/1/0 | 0/0/0 | 172,550/2,805 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 4/10 | 12/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Guo_2025_Weight](drugs/drug_orforglipron/pd_Guo_2025_Weight.md) | weight reduction ← orforglipron · direct Emax (saturable) effect | — | Guo H et al., Comparative efficacy and safety of GLP-…, Obesity pillars (2025) | [10.1016/j.obpill.2025.100162](https://doi.org/10.1016/j.obpill.2025.100162) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Pratt_2023_2_QTcF](drugs/drug_orforglipron/pd_Pratt_2023_2_QTcF.md) | QTcF ← orforglipron · direct linear effect | — | Pratt E et al., Orforglipron (LY3502970), a novel, oral…, Diabetes, obesity & metabol… (2023) | [10.1111/dom.15150](https://doi.org/10.1111/dom.15150) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=orforglipron) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GLP1R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 7  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Emara_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of efficacy and safety outcomes (weight, HbA1c) and does not report pharmacokinetic parameters such as clearance or volume. |
| PD | Emara_2026 | not_relevant | 3 | 2 | The paper is a meta-analysis reporting pooled mean differences for dose subgroups (dose-response trend) but does not provide individual-level concentration-effect data, PK/PD modeling, or specific PD parameters like Emax or EC50. |
| popPK | Frias_2023 | irrelevant | 0 | 0 | The paper is a Phase 2 efficacy and safety study reporting HbA1c and body weight changes, with no quantitative pharmacokinetic parameters (CL, V, ka, etc.) provided. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of pharmacodynamic efficacy (weight reduction) and safety, not a pharmacokinetic study, and does not report PK parameters like clearance or volume for orforglipron. |
| popPK | Hageen_2026 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy outcomes (weight and glycemic control) and does not report pharmacokinetic parameters. |
| PD | Hageen_2026 | not_relevant | 3 | 2 | The paper is a network meta-analysis reporting dose-response trends (mean differences and odds ratios) across discrete doses, but it does not provide a pharmacodynamic model, concentration-effect relationship, or specific PD parameters like Emax or EC50. |
| popPK | Hageen_2026_2 | irrelevant | 0 | 0 | The paper is a network meta-analysis of gastrointestinal and hepatic safety outcomes (adverse events and enzyme levels), not a pharmacokinetic study, and reports no PK parameters. |
| PD | Hageen_2026_2 | not_relevant | 3 | 2 | The paper is a network meta-analysis reporting dose-response trends for adverse events and enzyme changes (ORs/MDs) but does not provide pharmacodynamic parameters (Emax, EC50) or concentration-effect relationships. |
| popPK | Ismaiel_2025 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of gastrointestinal adverse events, not a pharmacokinetic study, and contains no PK parameters for orforglipron. |
| PD | Ismaiel_2025 | not_relevant | 1 | 0 | The paper is a systematic review and network meta-analysis of adverse event risks (relative risks) and does not report pharmacokinetic or pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters like Emax or EC50. |
| popPK | Jamal_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of efficacy and safety outcomes (HbA1c, weight, BP) and does not report pharmacokinetic parameters. |
| PD | Jamal_2026 | not_relevant | 2 | 1 | The paper is a meta-analysis reporting pooled mean differences for dose groups, but it does not provide a pharmacodynamic model, concentration-effect relationship, or specific numeric PD parameters (e.g., Emax, EC50) for orforglipron. |
| popPK | Li_2026 | irrelevant | 2 | 0 | The paper focuses on the discovery of new analogs (17-P1, 24-P1) using orforglipron as a reference, and does not report quantitative compartmental PK parameters (CL, V, Q, ka) for orforglipron itself. |
| PD | Li_2026 | not_relevant | 3 | 2 | The paper reports in vitro potency (EC50) and qualitative in vivo efficacy (glucose lowering) for analogs, but does not provide an exposure-response or dose-response analysis with numeric PD parameters for Orforglipron itself. |
| PGx | Malluhi_2026 | not_relevant | 0 | 0 | The paper is a narrative review on ocular safety and pharmacokinetic exposure of GLP-1 RAs, and it does not report any pharmacogenomic effects on PK or PD parameters for orforglipron. |
| PGx | Morse_2026 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) involving enzyme/transporter precipitants, not pharmacogenomic effects (gene variants/genotypes). |
| popPK | Niazi_2026 | irrelevant | 0 | 0 | The paper is a review of oral peptide delivery that mentions orforglipron only as a small molecule GLP-1 agonist in the context of competitive landscape, without providing any specific pharmacokinetic parameters for it. |
| PD | Niazi_2026 | not_relevant | 1 | 0 | The paper is a review on oral peptide delivery strategies and mentions orforglipron only as an emerging small molecule GLP-1 agonist without providing any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for it. |
| popPK | Nong_2026 | irrelevant | 0 | 0 | This is a network meta-analysis of clinical efficacy and safety outcomes (weight loss, adverse events) for obesity drugs, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Nong_2026 | not_relevant | 1 | 0 | The paper is a systematic review and network meta-analysis of clinical outcomes (weight loss) for obesity drugs, not a pharmacokinetic/pharmacodynamic modeling study; it does not report exposure-response relationships or numeric PD parameters (e.g., Emax, EC50) for orforglipron. |
| PD | Pratt_2023 | not_relevant | 3 | 1 | The abstract reports qualitative dose-dependent effects (weight loss, glucose reduction) but does not provide numeric PD parameters (Emax, EC50) or a formal concentration-effect model. |
| popPK | Pratt_2023_2 | relevant | 8 | 4 | The study reports non-compartmental PK parameters (tmax, half-life) for orforglipron in humans, but detailed numeric values for Cmax and AUC are in Table S1 which is not provided. |
| popPK | Tantoush_2026 | irrelevant | 0 | 0 | This is a systematic review and network meta-analysis of efficacy and safety outcomes (HbA1c, weight, adverse events), not a pharmacokinetic study reporting disposition parameters. |
| PD | Tantoush_2026 | not_relevant | 3 | 2 | The paper is a network meta-analysis reporting mean differences in clinical outcomes (HbA1c, weight) across fixed doses, but it does not provide a pharmacodynamic model, concentration-effect curve, or specific PD parameters (Emax, EC50) for orforglipron. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
