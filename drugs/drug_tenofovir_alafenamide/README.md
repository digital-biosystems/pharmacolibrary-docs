<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tenofovir alafenamide&quot;}]"></div>

# tenofovir alafenamide

- **generic name:** tenofovir alafenamide
- **ATC codes:** `J05AF13`, `J05AR17`, `J05AR19`, `J05AR20`, `J05AR29`
- **DrugBank:** [DB09299](https://go.drugbank.com/drugs/DB09299) · **PubChem:** [CID 9574768](https://pubchem.ncbi.nlm.nih.gov/compound/9574768)
- **molar mass:** 476.474 g/mol (C21H29N6O5P) — DrugBank
- **groups:** approved, investigational

## About

The medication is taken by mouth in tablet form and is well absorbed orally. It is authorized in the European Union and widely used in various regions for these viral infections.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q22075912](https://www.wikidata.org/wiki/Q22075912), [Wikipedia](https://en.wikipedia.org/wiki/Tenofovir_alafenamide?oldid=1378903226) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tenofovir alafenamide | parent | 476.474 | C21H29N6O5P | DrugBank | [9574768](https://pubchem.ncbi.nlm.nih.gov/compound/9574768) | Beliveau_2026, Kawuma_2023 |
| tenofovir | metabolite | 287.2 | — | the paper | — | Beliveau_2026, Kawuma_2023 |
| tenofovir diphosphate | metabolite | 447.174 | C9H16N5O10P3 | PubChem | [5481180](https://pubchem.ncbi.nlm.nih.gov/compound/5481180) | Beliveau_2026 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q76 — no SI value to build from</sub> | [Beliveau_2026_overall](drugs/drug_tenofovir_alafenamide/TenofovirAlafenamide_Beliveau2026_overall.md) | — | general linear (no model) | 1 | Beliveau M et al., Population pharmacokinetics of tenofovi…, Scientific reports (2026) | [10.1038/s41598-026-48746-2](https://doi.org/10.1038/s41598-026-48746-2) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="not_reviewed" data-sim="no"></span><span class="pk-badge pk-badge--neutral">not_reviewed</span> | [↳ estimate](drugs/drug_tenofovir_alafenamide/TenofovirAlafenamide_Beliveau2026_estimate.md) | — | general linear (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="not_reviewed" data-sim="no"></span><span class="pk-badge pk-badge--neutral">not_reviewed</span> | [↳ group_1one_taf_implant](drugs/drug_tenofovir_alafenamide/TenofovirAlafenamide_Beliveau2026_group_1one_taf_implant.md) | — | general linear (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="not_reviewed" data-sim="no"></span><span class="pk-badge pk-badge--neutral">not_reviewed</span> | [↳ group_2_aone_taf_implant](drugs/drug_tenofovir_alafenamide/TenofovirAlafenamide_Beliveau2026_group_2_aone_taf_implant.md) | — | general linear (no model) | 0 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="not_reviewed" data-sim="no"></span><span class="pk-badge pk-badge--neutral">not_reviewed</span> | [↳ group_2_ctwo_taf_implants](drugs/drug_tenofovir_alafenamide/TenofovirAlafenamide_Beliveau2026_group_2_ctwo_taf_implants.md) | — | general linear (no model) | 1 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Kawuma_2023_reference](drugs/drug_tenofovir_alafenamide/TenofovirAlafenamide_Kawuma2023_reference.md) | — | general linear (no model) | 1 | Kawuma AN et al., Population pharmacokinetics of tenofovi…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12955](https://doi.org/10.1002/psp4.12955) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Vegas_2025_CD4](drugs/drug_tenofovir_alafenamide/pd_Vegas_2025_CD4.md) | CD4+ T cell count ← tenofovir alafenamide/tenofovir (TAF/TFV) · direct sigmoid Emax (Hill) effect | — | Vegas Rodriguez A et al., Integrated Population Pharmacokinetic-p…, The AAPS journal (2025) | [10.1208/s12248-025-01136-4](https://doi.org/10.1208/s12248-025-01136-4) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Vegas_2025_HIV_RNA](drugs/drug_tenofovir_alafenamide/pd_Vegas_2025_HIV_RNA.md) | HIV-RNA (viral load) ← tenofovir alafenamide/tenofovir (TAF/TFV) · direct sigmoid Emax (Hill) effect | — | Vegas Rodriguez A et al., Integrated Population Pharmacokinetic-p…, The AAPS journal (2025) | [10.1208/s12248-025-01136-4](https://doi.org/10.1208/s12248-025-01136-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:18 | 0:04 | 1/1/4 | 2/0/0 | 0/0/0 | 4,061/165 | einfracz / qwen3.8-27b | 8 | 2/6 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 54 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 6  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Beliveau_2026 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics of TAF via subdermal implants and does not analyze the impact of gene variants or genotypes on drug disposition. |
| popPK | Blanco_2026 | irrelevant | 0 | 0 | This is a biomarker/inflammation study in HIV patients; tenofovir alafenamide is only part of a treatment regimen, with no PK parameters reported. |
| popPK | Bourgi_2026 | irrelevant | 0 | 0 | The study analyzes weight change as an adverse outcome and does not report any pharmacokinetic parameters (clearance, volume, etc.) for tenofovir alafenamide. |
| PGx | Bourgi_2026 | not_relevant | 0 | 0 | The paper analyzes weight gain associated with TAF and INSTIs but does not report any effect of a specific gene variant or genotype on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Bártolo_2019 | irrelevant | 0 | 0 | The paper is an in vitro virology study evaluating antiviral potency (EC50) against HIV-2 isolates, not a pharmacokinetic study with disposition parameters. |
| PGx | Bártolo_2019 | not_relevant | 0 | 0 | The paper evaluates the antiviral activity of TAF against HIV-2 viral isolates and resistance mutations in the virus, not human host pharmacogenomic variants affecting TAF pharmacokinetics or pharmacodynamics. |
| popPK | Di_2026 | irrelevant | 3 | 1 | The paper is a narrative review discussing the clinical pharmacology of the BIC/FTC/TAF regimen, and while Table 1 lists basic PK parameters (Vd, T1/2) for TAF, it lacks quantitative clearance (CL), intercompartmental clearance (Q), or compartmental/population-PK model parameters required for extraction. |
| PGx | Di_2026 | not_relevant | 0 | 0 | The paper discusses general pharmacokinetic and pharmacodynamic properties of the BIC/FTC/TAF regimen but does not report specific pharmacogenomic effects (gene variant/genotype impacts) on TAF parameters. |
| popPK | Garrett_2018 | relevant | 9 | 2 | The paper describes the development of a population pharmacokinetic model for tenofovir alafenamide in humans, but the specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract. |
| PGx | Garrett_2018 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic/pharmacodynamic model for dosing strategies in healthy women but contains no data or analysis regarding gene variants or genotypes. |
| popPK | Ibrahim_2020 | irrelevant | 0 | 0 | The study analyzes renal safety (eGFR slopes) and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for tenofovir alafenamide. |
| PGx | Ibrahim_2020 | not_relevant | 0 | 0 | The study analyzes renal safety outcomes (eGFR slopes) and does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Imaz_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bictegravir (BIC) in genital/rectal tissues, with tenofovir alafenamide (TAF) serving only as a co-administered drug in the regimen, not the subject of PK parameter modeling. |
| PGx | Imaz_2021 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics of bictegravir and HIV RNA decay in genital/rectal tissues, but does not investigate the impact of any gene variant or genotype on these parameters. |
| popPK | Ji_2024 | relevant | 10 | 0 | The abstract describes a population PK study for TAF but does not contain specific numeric parameter values (CL, V, etc.) in the provided text. |
| PGx | Ji_2024 | not_relevant | 0 | 0 | The paper reports population PK parameters for TAF/TFV and mentions meal state and sex as covariates, but does not investigate or report any pharmacogenomic (genetic variant) effects. |
| popPK | Kably_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rilpivirine, not tenofovir alafenamide, which is only mentioned as part of the background regimen. |
| PGx | Kably_2025 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of rilpivirine in pregnant women, not the effect of a gene variant on tenofovir alafenamide PK/PD. |
| popPK | Kalčic_2021 | irrelevant | 0 | 0 | The study is a drug discovery paper reporting synthetic methods and in-vitro antiviral potency (EC50/IC50) of novel prodrugs, not population pharmacokinetic parameters for tenofovir alafenamide. |
| PGx | Kalčic_2021 | not_relevant | 0 | 0 | The paper reports the discovery of novel prodrugs of tenofovir with enhanced activity and uptake, but does not investigate the influence of a gene variant/genotype on the pharmacokinetic or pharmacodynamic parameters of the drug. |
| popPK | Karabay_2025 | irrelevant | 0 | 0 | This is a retrospective safety/metabolic outcomes study with no PK parameters (CL, V, ka, half-life, or population-PK model) for tenofovir alafenamide; mixed-effects models are statistical, not pharmacokinetic. |
| popPK | Li_2022 | relevant | 4 | 5 | The paper is a review that includes quantitative PK parameters (AUC, Cmax, Tmax) for tenofovir alafenamide and its active metabolite tenofovir in humans, but it is not a primary PK study. |
| PGx | Li_2022 | not_relevant | 0 | 0 | The paper is a general review of approved HIV RT inhibitors and does not investigate the effect of specific gene variants or genotypes on the pharmacokinetics or pharmacodynamics of tenofovir alafenamide. |
| popPK | Ma_2018 | irrelevant | 0 | 0 | The study focuses on antiviral efficacy and EC50 values rather than pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| PGx | Ma_2018 | not_relevant | 0 | 0 | The paper discusses the in vitro-in vivo translation of antiviral efficacy based on intracellular TFV-DP levels but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Njenda_2018 | irrelevant | 0 | 0 | The study is an in-vitro virological and biochemical assay measuring inhibitory potency (EC50), not pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Njenda_2018 | not_relevant | 0 | 0 | The paper investigates antiretroviral potency and pharmacodynamics across HIV subtypes, but does not report pharmacogenomic effects of human gene variants on PK or PD parameters. |
| popPK | Schafer_2022 | irrelevant | 0 | 0 | The study reports metabolic outcomes (weight, cholesterol) following a switch in antiretroviral therapy, not pharmacokinetic parameters for tenofovir alafenamide. |
| PGx | Schafer_2022 | not_relevant | 0 | 0 | The paper investigates metabolic side effects (weight, cholesterol) of switching from TDF to TAF in HIV patients but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Serrano-Villar_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing inflammatory and metabolic outcomes, not a pharmacokinetic study, and reports no quantitative PK parameters for tenofovir alafenamide. |
| PGx | Serrano-Villar_2026 | not_relevant | 0 | 0 | The study reports clinical and metabolic outcomes of switching ART regimens but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of tenofovir alafenamide. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of bictegravir, not tenofovir alafenamide, which is only mentioned as a component of the fixed-dose combination. |
| PGx | Sun_2026 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of bictegravir, not tenofovir alafenamide, and does not investigate pharmacogenomic factors. |
| popPK | Vegas_2025 | relevant | 6 | 2 | A population PKPD model includes tenofovir alafenamide PK among five ARVs, but the PK parameter values are only described in supplementary material 1 and no TAF-specific numeric PK parameters appear in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btenofovir_alafenamide%5D&body=Drug%3A%20tenofovir_alafenamide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tenofovir_alafenamide/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 17:36 UTC</sub>
