<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;patritumab deruxtecan&quot;}]"></div>

# patritumab deruxtecan

- **generic name:** patritumab deruxtecan
- **ATC codes:** `L01FX36`
- **DrugBank:** [DB21996](https://go.drugbank.com/drugs/DB21996) · **PubChem:** not captured
- **groups:** investigational

## About

Patritumab deruxtecan is an investigational antibody-drug conjugate being studied as an anticancer treatment. It is not yet approved; it remains in clinical development and is not authorised for routine use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| DXd | metabolite | — (mass units only) | — | — | — | — |
| DXd-conjugated antibody | metabolite | 150000 | — | the paper | — | Lu_2023 |
| unconjugated DXd | metabolite | 493.5 | — | the paper | — | Lu_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:54 | 3:12 | 0/2/0 | 0/0/1 | 0/0/0 | 88,107/7,220 | einfracz / qwen3.8-27b | 3 | 1/2 | 2/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lu_2023_reference](drugs/drug_patritumab_deruxtecan/PatritumabDeruxtecan_Lu2023_reference.md) | — | general linear (no model) | 9 (+3 cov.) | Lu Y et al., Population Pharmacokinetics of Patritum…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2137](https://doi.org/10.1002/jcph.2137) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Xu_2025_reference](drugs/drug_patritumab_deruxtecan/PatritumabDeruxtecan_Xu2025_reference.md) | — | general linear (no model) | 0 | Xu Y et al., Integrated Two-Analyte Population Pharm…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01521-4](https://doi.org/10.1007/s40262-025-01521-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2025_AE_leading_to_dose_reduction](drugs/drug_patritumab_deruxtecan/pd_Li_2025_AE_leading_to_dose_reduction.md) | Adverse Events Leading to Dose Reduction ← DXd · time-to-event model | — | Li L et al., Exposure-Response Relationships in Pati…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3674](https://doi.org/10.1002/cpt.3674) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2025_AE_leading_to_treatment_discontinuation](drugs/drug_patritumab_deruxtecan/pd_Li_2025_AE_leading_to_treatment_discontinuation.md) | Adverse Events Leading to Treatment Discontinuation ← DXd · time-to-event model | — | Li L et al., Exposure-Response Relationships in Pati…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3674](https://doi.org/10.1002/cpt.3674) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2025_Grade_2_nausea_or_vomiting](drugs/drug_patritumab_deruxtecan/pd_Li_2025_Grade_2_nausea_or_vomiting.md) | Grade ≥ 2 Nausea or Vomiting ← anti-HER3-ac-DXd · categorical (graded) response model | — | Li L et al., Exposure-Response Relationships in Pati…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3674](https://doi.org/10.1002/cpt.3674) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2025_Grade_3_TEAE](drugs/drug_patritumab_deruxtecan/pd_Li_2025_Grade_3_TEAE.md) | Grade ≥ 3 Treatment-Emergent Adverse Events (TEAEs) ← DXd · categorical (graded) response model | — | Li L et al., Exposure-Response Relationships in Pati…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3674](https://doi.org/10.1002/cpt.3674) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2025_Grade_3_neutrophil_count_decrease](drugs/drug_patritumab_deruxtecan/pd_Li_2025_Grade_3_neutrophil_count_decrease.md) | Grade ≥ 3 Neutrophil Count Decrease ← DXd · categorical (graded) response model | — | Li L et al., Exposure-Response Relationships in Pati…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3674](https://doi.org/10.1002/cpt.3674) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2025_Grade_3_platelet_count_decrease](drugs/drug_patritumab_deruxtecan/pd_Li_2025_Grade_3_platelet_count_decrease.md) | Grade ≥ 3 Platelet Count Decrease ← DXd · categorical (graded) response model | — | Li L et al., Exposure-Response Relationships in Pati…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3674](https://doi.org/10.1002/cpt.3674) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2025_ILD](drugs/drug_patritumab_deruxtecan/pd_Li_2025_ILD.md) | Any Grade Adjudicated Drug-Related Interstitial Lung Disease (ILD) ← anti-HER3-ac-DXd · time-to-event model | — | Li L et al., Exposure-Response Relationships in Pati…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3674](https://doi.org/10.1002/cpt.3674) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2025_ORR](drugs/drug_patritumab_deruxtecan/pd_Li_2025_ORR.md) | Objective Response Rate (ORR) ← anti-HER3-ac-DXd · categorical (graded) response model | — | Li L et al., Exposure-Response Relationships in Pati…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3674](https://doi.org/10.1002/cpt.3674) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Li_2025_SAE](drugs/drug_patritumab_deruxtecan/pd_Li_2025_SAE.md) | Serious Adverse Events (SAEs) ← DXd · categorical (graded) response model | — | Li L et al., Exposure-Response Relationships in Pati…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3674](https://doi.org/10.1002/cpt.3674) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Li_2025 | irrelevant | 1 | 0 | The paper is an exposure-response analysis that uses PK data generated from a separate population PK model, and it does not report quantitative PK parameter estimates (e.g., clearance, volume, half-life) for patritumab_deruxtecan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:51 UTC</sub>
