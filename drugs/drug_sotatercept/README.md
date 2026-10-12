<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;sotatercept&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sotatercept_AitOudhia2024_reference&quot;,&quot;label&quot;:&quot;Ait-Oudhia_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sotatercept

- **generic name:** sotatercept
- **ATC codes:** `C02KX06`
- **DrugBank:** [DB12118](https://go.drugbank.com/drugs/DB12118) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sotatercept is a fusion-protein medication used to treat pulmonary arterial hypertension. It is an approved drug and is used for pulmonary hypertension, classified among antihypertensives for pulmonary arterial hypertension.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q103815273](https://www.wikidata.org/wiki/Q103815273) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:32 | 2:12 | 1/0/0 | 1/1/0 | 0/0/0 | 88,057/7,733 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.579), gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Ait-Oudhia_2024_reference](drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+3 cov.) | Ait-Oudhia S et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13166](https://doi.org/10.1002/psp4.13166) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.556). The first reading is what the record holds.">cross-check: disputed</span> | [Ait-Oudhia_2025_6MWD](drugs/drug_sotatercept/pd_Ait_Oudhia_2025_6MWD.md) | 6-minute walk distance ← sotatercept · direct Emax (saturable) effect | — | Ait-Oudhia S et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3524](https://doi.org/10.1002/cpt.3524) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> | [Ait-Oudhia_2025_PVR](drugs/drug_sotatercept/pd_Ait_Oudhia_2025_PVR.md) | pulmonary vascular resistance ← sotatercept · direct linear effect | model (no simulator) | Ait-Oudhia S et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3524](https://doi.org/10.1002/cpt.3524) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Ait-Oudhia_2025_Hgb](drugs/drug_sotatercept/pd_Ait_Oudhia_2025_Hgb.md) | hemoglobin ← sotatercept · direct sigmoid Emax (Hill) effect | model (no simulator) | Ait-Oudhia S et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3524](https://doi.org/10.1002/cpt.3524) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Ait-Oudhia_2025_NT_proBNP](drugs/drug_sotatercept/pd_Ait_Oudhia_2025_NT_proBNP.md) | time to NT‐proBNP &lt; 300 pg/mL ← sotatercept · time-to-event model | — | Ait-Oudhia S et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3524](https://doi.org/10.1002/cpt.3524) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Sherman_2013_hemoglobin](drugs/drug_sotatercept/pd_Sherman_2013_hemoglobin.md) | hemoglobin biomarker turnover ← sotatercept | — | Sherman ML et al., Multiple-dose, safety, pharmacokinetic,…, Journal of clinical pharmac… (2013) | [10.1002/jcph.160](https://doi.org/10.1002/jcph.160) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sotatercept).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ACVR1B (binder), ACVR2A (binder), GDF11 (binder), MSTN (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Ait-Oudhia_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling and does not report pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Ait-Oudhia_2025 | irrelevant | 3 | 1 | The paper describes exposure-response (E-R) and PK/PD models for efficacy and safety endpoints but does not report the structural population PK parameters (CL, V, Q, ka) or a standalone population PK model for sotatercept. |
| PGx | Bose_2019 | not_relevant | 0 | 0 | The paper is a review of myelofibrosis treatments and does not mention sotatercept, genetic variants, or pharmacokinetic parameters. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy that does not report any quantitative pharmacokinetic parameters for sotatercept. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain any specific data, analysis, or numeric parameters for sotatercept. |
| popPK | Coyne_2019 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes (hemoglobin, bone density, vascular calcification) but contains no pharmacokinetic parameters or disposition data for sotatercept. |
| PGx | Miranda_2025 | not_relevant | 0 | 0 | The paper states that BMPR2 genetic variant status was not associated with significant differences in treatment effects, reporting a lack of pharmacogenomic effect rather than describing a specific PK/PD parameter modification. |
| popPK | Rothman_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of imatinib, not sotatercept. |
| popPK | Sherman_2013 | relevant | 8 | 2 | The paper is a PK study of sotatercept reporting a terminal half-life, but lacks other quantitative disposition parameters like clearance or volume of distribution in the provided text. |
| PGx | Yoshida_2026 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for sotatercept in pulmonary arterial hypertension and does not report any pharmacogenomic data or associations between genetic variants and PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:30 UTC</sub>
