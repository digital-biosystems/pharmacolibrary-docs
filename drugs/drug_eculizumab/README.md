<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;eculizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eculizumab_Cosson2025_reference&quot;,&quot;label&quot;:&quot;Cosson_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Cosson2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Badri2021_reference&quot;,&quot;label&quot;:&quot;Badri_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Badri2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Gatault2015_reference&quot;,&quot;label&quot;:&quot;Gatault_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Gatault2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Monteleone2021_mean&quot;,&quot;label&quot;:&quot;Monteleone_2021_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Monteleone2021_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Monteleone2021_median&quot;,&quot;label&quot;:&quot;Monteleone_2021_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Monteleone2021_median.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Singh2021_mean&quot;,&quot;label&quot;:&quot;Singh_2021_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Singh2021_mean.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Singh2021_median&quot;,&quot;label&quot;:&quot;Singh_2021_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Singh2021_median.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# eculizumab

- **generic name:** eculizumab
- **ATC codes:** `L04AA25`, `L04AJ01`
- **DrugBank:** [DB01257](https://go.drugbank.com/drugs/DB01257) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Eculizumab, a monoclonal antibody that inhibits complement, is used to treat conditions such as paroxysmal nocturnal hemoglobinuria, myasthenia gravis, and hemolytic-uremic syndrome. It is authorised in the European Union, where it is used for rare blood and immune-related disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421617](https://www.wikidata.org/wiki/Q421617) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:56 | 5:37 | 1/4/6 | 3/0/0 | 0/0/0 | 440,016/31,043 | einfracz / qwen3.8-27b | 13 | 1/12 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: partial</span> | [Cosson_2025_reference](drugs/drug_eculizumab/Eculizumab_Cosson2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Cosson V et al., Pharmacokinetic characterization and ex…, British journal of clinical… (2025) | [10.1111/bcp.16394](https://doi.org/10.1111/bcp.16394) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Badri_2021_reference](drugs/drug_eculizumab/Eculizumab_Badri2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Badri P et al., Pharmacokinetic and Pharmacodynamic Pro…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00940-9](https://doi.org/10.1007/s40262-020-00940-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Gatault_2015_reference](drugs/drug_eculizumab/Eculizumab_Gatault2015_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Gatault P et al., Therapeutic drug monitoring of eculizum…, mAbs (2015) | [10.1080/19420862.2015.1086049](https://doi.org/10.1080/19420862.2015.1086049) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Monteleone_2021_mean](drugs/drug_eculizumab/Eculizumab_Monteleone2021_mean.md) | ▶ model + simulator | 2-compartment, IV | 8 | Monteleone JPR et al., Eculizumab Pharmacokinetics and Pharmac…, Frontiers in neurology (2021) | [10.3389/fneur.2021.696385](https://doi.org/10.3389/fneur.2021.696385) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Monteleone_2021_median](drugs/drug_eculizumab/Eculizumab_Monteleone2021_median.md) | ▶ model + simulator | 2-compartment, IV | 8 | Monteleone JPR et al., Eculizumab Pharmacokinetics and Pharmac…, Frontiers in neurology (2021) | [10.3389/fneur.2021.696385](https://doi.org/10.3389/fneur.2021.696385) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.105). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Singh_2021_mean](drugs/drug_eculizumab/Eculizumab_Singh2021_mean.md) | ▶ model + simulator | 2-compartment, IV | 7 | Singh P et al., Eculizumab Pharmacokinetics and Pharmac…, Frontiers in neurology (2021) | [10.3389/fneur.2021.696387](https://doi.org/10.3389/fneur.2021.696387) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.095). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Singh_2021_median](drugs/drug_eculizumab/Eculizumab_Singh2021_median.md) | ▶ model + simulator | 2-compartment, IV | 8 | Singh P et al., Eculizumab Pharmacokinetics and Pharmac…, Frontiers in neurology (2021) | [10.3389/fneur.2021.696387](https://doi.org/10.3389/fneur.2021.696387) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chen_2026_reference](drugs/drug_eculizumab/Eculizumab_Chen2026_reference.md) | — | 2-compartment (no model) | 3 | Chen J et al., Population PK-PD Modeling of Danicopan…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70209](https://doi.org/10.1002/psp4.70209) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Le_2024_reference](drugs/drug_eculizumab/Eculizumab_Le2024_reference.md) | — | 1-compartment (no model) | 4 | Le Tilly O et al., Eculizumab dose tapering should take in…, British journal of clinical… (2024) | [10.1111/bcp.16019](https://doi.org/10.1111/bcp.16019) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ter_2023_reference](drugs/drug_eculizumab/Eculizumab_Ter2023_reference.md) | — | 1-compartment (no model) | 3 (+1 cov.) | Ter Avest M et al., Proposal for individualized dosing of e…, Nephrology, dialysis, trans… (2023) | [10.1093/ndt/gfac056](https://doi.org/10.1093/ndt/gfac056) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ter_2025_reference](drugs/drug_eculizumab/Eculizumab_Ter2025_reference.md) | — | 2-compartment (no model) | 5 (+1 cov.) | Ter Avest M et al., Model-Informed Precision Dosing of Ecul…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01536-x](https://doi.org/10.1007/s40262-025-01536-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Lee_2024_TCA](drugs/drug_eculizumab/pd_Lee_2024_TCA.md) | terminal complement activity biomarker turnover ← eculizumab | — | Lee H et al., Population pharmacokinetic, pharmacodyn…, European journal of clinica… (2024) | [10.1007/s00228-024-03703-8](https://doi.org/10.1007/s00228-024-03703-8) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Ter_2023_CP_activity](drugs/drug_eculizumab/pd_Ter_2023_CP_activity.md) | classical pathway activity ← eculizumab · direct sigmoid Emax (Hill) effect | model (no simulator) | Ter Avest M et al., Proposal for individualized dosing of e…, Nephrology, dialysis, trans… (2023) | [10.1093/ndt/gfac056](https://doi.org/10.1093/ndt/gfac056) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Ter_2025_CP](drugs/drug_eculizumab/pd_Ter_2025_CP.md) | classical pathway activity ← eculizumab · direct sigmoid Emax (Hill) effect | model (no simulator) | Ter Avest M et al., Model-Informed Precision Dosing of Ecul…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01536-x](https://doi.org/10.1007/s40262-025-01536-x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=eculizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: C5 (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 16 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 11  ·  extracted 1  ·  needs_review 6  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Badri_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of cemdisiran, with eculizumab used only as a co-administered comparator agent for which no quantitative PK parameters are reported. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The study reports population PK parameters for danicopan, not eculizumab; eculizumab is only mentioned as background therapy/comparator. |
| popPK | Cosson_2025 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of crovalimab, not eculizumab, which is only a comparator or prior therapy. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is a retrospective real-world clinical trial focusing on efficacy and safety (MG-ADL/QMG scores), reporting no pharmacokinetic parameters (CL, V, half-life, etc.) for eculizumab. |
| popPK | Peffault_2020 | relevant | 4 | 6 | The study primarily models ravulizumab PK, but provides specific numeric steady-state concentrations (Cmax, Ctrough) and a cited terminal half-life for eculizumab in the text. |
| popPK | Thomas_2023 | irrelevant | 0 | 0 | The paper is a clinical case series reporting on therapeutic outcomes (LDH, creatinine) and demographics, containing no pharmacokinetic parameters (CL, V, t1/2) or PK modeling for eculizumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:51 UTC</sub>
