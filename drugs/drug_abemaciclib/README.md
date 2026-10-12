<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;abemaciclib&quot;}]"></div>

# abemaciclib

- **generic name:** abemaciclib
- **ATC codes:** `L01EF03`
- **DrugBank:** [DB12001](https://go.drugbank.com/drugs/DB12001) · **PubChem:** [CID 46220502](https://pubchem.ncbi.nlm.nih.gov/compound/46220502)
- **molar mass:** 506.606 g/mol (C27H32F2N8) — DrugBank
- **groups:** approved, investigational

## About

Abemaciclib is a CDK inhibitor used to treat breast cancer. It is an approved medicine and is authorised in the European Union for breast cancer.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q23901483](https://www.wikidata.org/wiki/Q23901483) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| abemaciclib (abemaciclib; doxorubicin; liposomal doxorubicin) | parent | 506.606 | C27H32F2N8 | DrugBank | [46220502](https://pubchem.ncbi.nlm.nih.gov/compound/46220502) | Chigutsa_2020, Fleisher_2021, Tate_2018 |
| M2 (LSN2839567) | metabolite | — (mass units only) | — | — | — | — |
| M20 (LSN3106726) | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:26 | 12:23 | 0/6/2 | 2/0/0 | 0/0/0 | 243,336/60,799 | openai / gpt-6-luna | 5 | 0/5 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C1_half_life_beta failed (ratio 1.4156)</sub><br><sub>route_to: `human_review`</sub> | [Tate_2018_base](drugs/drug_abemaciclib/Abemaciclib_Tate2018_base.md) | — | 1-compartment (no model) | 5 | Tate SC et al., A Population Pharmacokinetic and Pharma…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0559-8](https://doi.org/10.1007/s40262-017-0559-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C1_half_life_beta failed (ratio 1.4481)</sub><br><sub>route_to: `human_review`</sub> | [Tate_2018_final](drugs/drug_abemaciclib/Abemaciclib_Tate2018_final.md) | — | 1-compartment (no model) | 5 (+1 cov.) | Tate SC et al., A Population Pharmacokinetic and Pharma…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0559-8](https://doi.org/10.1007/s40262-017-0559-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.406). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Chigutsa_2020_estimate_see](drugs/drug_abemaciclib/Abemaciclib_Chigutsa2020_estimate_see.md) | — | general linear (no model) | 13 (+6 cov.) | Chigutsa E et al., Development and Application of a Mechan…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12544](https://doi.org/10.1002/psp4.12544) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chigutsa_2020_external_validation_with_phase_iii_data](drugs/drug_abemaciclib/Abemaciclib_Chigutsa2020_external_validation_with_phase_iii.md) | — | general linear (no model) | 8 (+2 cov.) | Chigutsa E et al., Development and Application of a Mechan…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12544](https://doi.org/10.1002/psp4.12544) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chigutsa_2020_nca_200_mg](drugs/drug_abemaciclib/Abemaciclib_Chigutsa2020_nca_200_mg.md) | — | general linear (no model) | 8 (+1 cov.) | Chigutsa E et al., Development and Application of a Mechan…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12544](https://doi.org/10.1002/psp4.12544) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chigutsa_2020_semimechanistic_model_development](drugs/drug_abemaciclib/Abemaciclib_Chigutsa2020_semimechanistic_model_development.md) | — | general linear (no model) | 8 (+2 cov.) | Chigutsa E et al., Development and Application of a Mechan…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12544](https://doi.org/10.1002/psp4.12544) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.176). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chigutsa_2020_variability_a_a_see](drugs/drug_abemaciclib/Abemaciclib_Chigutsa2020_variability_a_a_see.md) | — | general linear (no model) | 10 (+3 cov.) | Chigutsa E et al., Development and Application of a Mechan…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12544](https://doi.org/10.1002/psp4.12544) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Fleisher_2021_reference](drugs/drug_abemaciclib/Abemaciclib_Fleisher2021_reference.md) | — | general linear (no model) | 3 | Fleisher B et al., In vitro to Clinical Translation of Com…, Breast cancer (Dove Medical… (2021) | [10.2147/BCTT.S292161](https://doi.org/10.2147/BCTT.S292161) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span> | [Chigutsa_2026_Tumor_size_sum_of_longest_diameters_of_target_lesions](drugs/drug_abemaciclib/pd_Chigutsa_2026_Tumor_size_sum_of_longest_diameters_of_target_.md) | Tumor size (sum of longest diameters of target lesions) ← abemaciclib · delayed effect through transit (transduction) compartments | — | Chigutsa E et al., Longitudinal Tumor Size and Survival Mo…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70212](https://doi.org/10.1002/cpt.70212) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Fleisher_2021_Cells_invitro](drugs/drug_abemaciclib/pd_Fleisher_2021_Cells_invitro.md) | in vitro cancer cell viability ← abemaciclib (ABE) · delayed effect through transit (transduction) compartments | — | Fleisher B et al., In vitro to Clinical Translation of Com…, Breast cancer (Dove Medical… (2021) | [10.2147/BCTT.S292161](https://doi.org/10.2147/BCTT.S292161) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span> | [Fleisher_2021_cell_viability](drugs/drug_abemaciclib/pd_Fleisher_2021_cell_viability.md) | percent cellular viability (MDA-MB-231) ← abemaciclib (ABE) · direct sigmoid Emax (Hill) effect | — | Fleisher B et al., In vitro to Clinical Translation of Com…, Breast cancer (Dove Medical… (2021) | [10.2147/BCTT.S292161](https://doi.org/10.2147/BCTT.S292161) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span> | [Fleisher_2021_cell_viability_2](drugs/drug_abemaciclib/pd_Fleisher_2021_cell_viability_2.md) | percent cellular viability (MDA-MB-468) ← abemaciclib (ABE) · direct sigmoid Emax (Hill) effect | — | Fleisher B et al., In vitro to Clinical Translation of Com…, Breast cancer (Dove Medical… (2021) | [10.2147/BCTT.S292161](https://doi.org/10.2147/BCTT.S292161) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span> | [Fleisher_2021_pRb](drugs/drug_abemaciclib/pd_Fleisher_2021_pRb.md) | pRb protein expression (fold change from control) ← abemaciclib (ABE) · delayed effect through transit (transduction) compartments | — | Fleisher B et al., In vitro to Clinical Translation of Com…, Breast cancer (Dove Medical… (2021) | [10.2147/BCTT.S292161](https://doi.org/10.2147/BCTT.S292161) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Chigutsa_2026_PFS](drugs/drug_abemaciclib/pd_Chigutsa_2026_PFS.md) | Progression-free survival ← abemaciclib · time-to-event model | — | Chigutsa E et al., Longitudinal Tumor Size and Survival Mo…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70212](https://doi.org/10.1002/cpt.70212) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=abemaciclib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CDK4 (inhibitor), CDK6 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 8  ·  extracted 0  ·  needs_review 2  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chigutsa_2026 | irrelevant | 2 | 0 | The paper uses a previously published abemaciclib population-PK model but provides no numeric disposition parameter values here. |
| popPK | Nørgaard_2024 | irrelevant | 0 | 0 | This is an in-vitro DDI study and reports no quantitative abemaciclib disposition parameters. |
| popPK | Ranjan_2023 | irrelevant | 0 | 0 | This is an in-vitro antileishmanial study and reports no abemaciclib disposition parameters. |
| popPK | Vaidya_2025 | irrelevant | 0 | 0 | Abemaciclib is only an AI-screened antiviral candidate; no pharmacokinetic disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:15 UTC</sub>
