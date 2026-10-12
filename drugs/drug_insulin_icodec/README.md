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
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> | [Eto_2025_GIR](drugs/drug_insulin_icodec/pd_Eto_2025_GIR.md) | glucose infusion rate ← insulin_icodec · delayed effect through an effect compartment | — | Eto T et al., Pharmacological characteristics of once…, Journal of diabetes investi… (2025) | [10.1111/jdi.14384](https://doi.org/10.1111/jdi.14384) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Lingvay_2025_SMBG](drugs/drug_insulin_icodec/pd_Lingvay_2025_SMBG.md) | prebreakfast self-measured blood glucose ← insulin_icodec · delayed effect through an effect compartment | — | Lingvay I et al., Pharmacokinetic/Pharmacodynamic Modelin…, Endocrine practice : offici… (2025) | [10.1016/j.eprac.2024.11.009](https://doi.org/10.1016/j.eprac.2024.11.009) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
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
