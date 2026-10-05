<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin icodec&quot;}]"></div>

# insulin icodec

- **generic name:** insulin icodec
- **ATC codes:** `A10AE07`
- **DrugBank:** [DB16693](https://go.drugbank.com/drugs/DB16693) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Insulin icodec is an ultralong-acting basal insulin analogue used to treat diabetes, mainly type 2 diabetes. It is authorised in the European Union and is an approved, once-weekly injectable insulin for diabetes care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q111982305](https://www.wikidata.org/wiki/Q111982305) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:30 | 1:22 | 0/0/0 | 0/2/0 | 0/0/0 | 48,070/1,047 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/2 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Eto_2025_GIR](drugs/drug_insulin_icodec/pd_Eto_2025_GIR.md) | glucose infusion rate ← insulin_icodec · delayed effect through an effect compartment | — | Eto T et al., Pharmacological characteristics of once…, Journal of diabetes investi… (2025) | [10.1111/jdi.14384](https://doi.org/10.1111/jdi.14384) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Lingvay_2025_SMBG](drugs/drug_insulin_icodec/pd_Lingvay_2025_SMBG.md) | prebreakfast self-measured blood glucose ← insulin_icodec · delayed effect through an effect compartment | — | Lingvay I et al., Pharmacokinetic/Pharmacodynamic Modelin…, Endocrine practice : offici… (2025) | [10.1016/j.eprac.2024.11.009](https://doi.org/10.1016/j.eprac.2024.11.009) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=insulin_icodec) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |

<sub>Actors without a tissue in the table: IDE (substrate), IGF1R (target), INSR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Eto_2025 | relevant | 8 | 2 | The study reports PK parameters for insulin icodec, but specific numeric values for clearance, volume, or half-life are located in supplementary tables (Table S5) and figures not provided in the evidence. |
| popPK | Hubálek_2024 | irrelevant | 4 | 2 | The paper is primarily a mechanistic study on disulphide bond stability and crystal structure, reporting only a terminal half-life (~50h) in minipigs without providing a compartmental model or quantitative clearance/volume parameters. |
| PD | Hubálek_2024 | not_relevant | 0 | 0 | The paper focuses on the structural stability and degradation mechanisms (thiol-disulphide exchange) of insulin icodec, not on pharmacodynamic modeling or exposure-response relationships. |
| popPK | Hövelmann_2024 | relevant | 10 | 0 | The title confirms the study is about the PK of insulin icodec, but the provided evidence contains no numeric parameter values. |
| popPK | Lingvay_2025 | irrelevant | 2 | 0 | The paper describes a PK/PD model for insulin icodec but does not report specific quantitative PK parameters (CL, V, ka) in the text, referring instead to supplemental materials for model details. |
| popPK | Nishimura_2021 | relevant | 9 | 2 | The paper is a primary source for insulin icodec PK/PD properties including a half-life of 196 hours, but specific compartmental parameters (CL, V, Q) are not explicitly listed in the provided text and are likely in supplementary material or figures. |
| popPK | Pham_2025 | relevant | 4 | 3 | The paper is a review that reports some quantitative PK parameters (half-life 196 h, tmax 16 h, AUC ratios) for insulin icodec, but it lacks a full compartmental model (CL, V, Q, ka) and relies on summarized values from primary trials. |
| popPK | Pieber_2023 | relevant | 10 | 0 | The title confirms the study is about the PK/PD of insulin icodec, but the provided evidence contains no numeric parameter values. |
| PD | Pieber_2023 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or data required to verify the presence of numeric PD parameters or exposure-response relationships. |
| popPK | Plum-Mörschel_2023 | relevant | 9 | 4 | The study reports a compartmental PK model for insulin icodec in humans, but the specific numeric parameter values (CL, V, ka) are located in the Online Resource (Supplementary Material) which is not included in the evidence. |
| popPK | Rosenstock_2022 | irrelevant | 0 | 0 | The paper is a review of investigational once-weekly insulins and does not report original quantitative pharmacokinetic parameters for insulin icodec. |
| PD | Rosenstock_2022 | not_relevant | 1 | 0 | The text is a narrative review discussing the molecular strategies and clinical development status of once-weekly insulins, without reporting specific pharmacodynamic models, exposure-response analyses, or numeric PD parameters. |
| PGx | Rosenstock_2022 | not_relevant | 0 | 0 | The paper is a review of once-weekly insulin development and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Rosenstock_2024 | irrelevant | 0 | 0 | The paper is a prescribing information document for insulin degludec (TRESIBA), not insulin icodec, and contains no PK parameters for the target drug. |
| PD | Rosenstock_2024 | not_relevant | 0 | 0 | The provided text is the prescribing information for insulin degludec (Tresiba), not insulin icodec, and contains no numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Tou_2026 | irrelevant | 2 | 0 | The study focuses on a novel insulin analog (LPJT-026) with insulin icodec serving only as a comparator, and no specific quantitative PK parameters (CL, V, ka) for insulin icodec are reported in the evidence. |
| PD | Tou_2026 | not_relevant | 2 | 1 | The paper reports qualitative PK/PD profiles (duration of effect, mortality rates) and PK parameters (AUC, t1/2) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect relationship for insulin icodec. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
