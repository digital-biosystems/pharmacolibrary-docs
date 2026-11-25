<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;Casirivimab&quot;}]"></div>

# Casirivimab

- **generic name:** Casirivimab
- **ATC codes:** `J06BD07`
- **DrugBank:** [DB15941](https://go.drugbank.com/drugs/DB15941) · **PubChem:** none
- **groups:** approved, investigational

## About

Casirivimab is an antiviral monoclonal antibody. It is given by intravenous or subcutaneous injection. The drug is currently investigational.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q99329744](https://www.wikidata.org/wiki/Q99329744), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Jansen_2026_reference](drugs/drug_casirivimab/Casirivimab_Jansen2026_reference.md) | — | 2-compartment (no model) | 3 | Jansen E et al., Characterization of the VHH-Fc construc…, PLoS medicine (2026) | [10.1371/journal.pmed.1004609](https://doi.org/10.1371/journal.pmed.1004609) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Lin_2024_reference](drugs/drug_casirivimab/Casirivimab_Lin2024_reference.md) | — | 2-compartment (no model) | 6 (+5 cov.) | Lin KJ et al., Population Pharmacokinetics of Casirivi…, Pharmaceutical research (2024) | [10.1007/s11095-024-03764-5](https://doi.org/10.1007/s11095-024-03764-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Wilhelm_2022_NT50_2](drugs/drug_casirivimab/pd_Wilhelm_2022_NT50_2.md) | SARS-CoV-2 Omicron BA.2 neutralisation ← casirivimab/imdevimab · inhibition effect | — | Wilhelm A et al., Limited neutralisation of the SARS-CoV-…, EBioMedicine (2022) | [10.1016/j.ebiom.2022.104158](https://doi.org/10.1016/j.ebiom.2022.104158) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Wilhelm_2022_NT50_3](drugs/drug_casirivimab/pd_Wilhelm_2022_NT50_3.md) | SARS-CoV-2 parental B/FFM5 neutralisation ← casirivimab/imdevimab · inhibition effect | — | Wilhelm A et al., Limited neutralisation of the SARS-CoV-…, EBioMedicine (2022) | [10.1016/j.ebiom.2022.104158](https://doi.org/10.1016/j.ebiom.2022.104158) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Rao_2021_viral_load](drugs/drug_casirivimab/pd_Rao_2021_viral_load.md) | SARS-CoV-2 viral load (nasopharyngeal swab) ← casirivimab (REGEN-COV nAb cocktail) · direct Emax (saturable) effect | — | Rao R et al., A Quantitative Systems Pharmacology Mod… (2021) | [10.1101/2021.12.07.21267277](https://doi.org/10.1101/2021.12.07.21267277) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Rao_2023_viral_load](drugs/drug_casirivimab/pd_Rao_2023_viral_load.md) | SARS-CoV-2 viral load ← casirivimab (REGEN-COV, with imdevimab) · direct Emax (saturable) effect | — | Rao R et al., A quantitative systems pharmacology mod…, NPJ systems biology and app… (2023) | [10.1038/s41540-023-00269-6](https://doi.org/10.1038/s41540-023-00269-6) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Stadler_2023_efficacy](drugs/drug_casirivimab/pd_Stadler_2023_efficacy.md) | Protection from symptomatic COVID-19 infection ← casirivimab/imdevimab (total antibody concentration, sum of both antibody components) · direct sigmoid Emax (Hill) effect | — | Stadler E et al., Monoclonal antibody levels and protecti…, Nature communications (2023) | [10.1038/s41467-023-40204-1](https://doi.org/10.1038/s41467-023-40204-1) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Wilhelm_2022_NT50](drugs/drug_casirivimab/pd_Wilhelm_2022_NT50.md) | SARS-CoV-2 Omicron BA.1 neutralisation ← casirivimab/imdevimab · inhibition effect | — | Wilhelm A et al., Limited neutralisation of the SARS-CoV-…, EBioMedicine (2022) | [10.1016/j.ebiom.2022.104158](https://doi.org/10.1016/j.ebiom.2022.104158) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:25 | 0:04 | 0/2/0 | 2/4/0 | 0/0/0 | 3,800/149 | einfracz / qwen3.8-27b | 32 | 4/20 | 32/0 | 0 |

## Coverage

- **PubMed hits:** 96 matched, 43 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ballotta_2022 | not_relevant | 0 | 0 | Case report of casirivimab/imdevimab efficacy in CLL patients; no gene variant/genotype effect on PK or PD parameters reported. |
| PGx | Boeckel_2022 | not_relevant | 0 | 0 | Case series of mAb clinical use in hematologic patients; no gene variant/genotype effects on casirivimab PK/PD parameters reported. |
| popPK | Copin_2021 | irrelevant | 0 | 0 | The paper focuses on viral escape, neutralization potency, and resistance selection, not on the pharmacokinetic disposition parameters (CL, V, half-life) of casirivimab. |
| PGx | Copin_2021 | not_relevant | 0 | 0 | The paper investigates viral mutations and resistance to monoclonal antibodies, not human pharmacogenomic effects on PK/PD parameters. |
| popPK | Gonzalez-Bocco_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sotrovimab, not casirivimab. |
| PGx | Gonzalez-Bocco_2025 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of sotrovimab, not casirivimab, and does not report a pharmacogenomic effect (gene variant/genotype) on a PK/PD parameter. |
| popPK | Hettle_2022 | irrelevant | 0 | 0 | The paper is a clinical case series focusing on the management of persistent viral infection, not a pharmacokinetic study, and reports no quantitative disposition parameters (CL, V, t1/2) for casirivimab. |
| PGx | Hettle_2022 | not_relevant | 0 | 0 | The paper describes clinical outcomes of casirivimab treatment in immunocompromised patients but does not report pharmacokinetic or pharmacodynamic parameters or any pharmacogenomic effects based on gene variants. |
| popPK | Hirsch_2022 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy outcomes (infection rates, symptoms) for SARS-CoV-2 neutralizing antibodies, and does not report any quantitative pharmacokinetic parameters (CL, V, t1/2) for casirivimab. |
| PGx | Hirsch_2022 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials assessing the efficacy and safety of monoclonal antibodies, and it contains no data on pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Huygens_2023 | irrelevant | 0 | 0 | The study reports population PK parameters for convalescent plasma and hyperimmune globulins (polyclonal antibodies), not for the specific monoclonal antibody drug casirivimab. |
| PGx | Huygens_2023 | not_relevant | 0 | 0 | The study describes population PK of convalescent plasma and immunoglobulins and identifies covariates like weight and treatment type, but it does not investigate the impact of a specific gene variant or genotype on these PK/PD parameters. |
| popPK | Huygens_2024 | irrelevant | 0 | 0 | The study reports clinical outcomes and viral clearance times, not pharmacokinetic parameters such as clearance, volume, or half-life for the drug. |
| PGx | Huygens_2024 | not_relevant | 0 | 0 | The study reports clinical outcomes of casirivimab in immunocompromised patients but does not investigate the impact of human genetic variants on PK or PD parameters. |
| PGx | Iwasaki_2024 | not_relevant | 0 | 0 | Case report of COVID-19 treatment with no gene variant/genotype effect on casirivimab PK/PD parameters. |
| popPK | Jansen_2026 | irrelevant | 0 | 0 | The paper reports PK of rimteravimab (XVR011), not casirivimab, which is only mentioned as a comparator antibody. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper is a review on plant-derived compounds for COVID-19 and mentions casirivimab only as a comparator, containing no PK data. |
| PGx | Liu_2024 | not_relevant | 0 | 0 | The paper is a review of plant-derived compounds for COVID-19 treatment and does not report any pharmacogenomic effects on casirivimab. |
| PGx | Norton_2024 | not_relevant | 0 | 0 | Paper reports PK of casirivimab in pregnancy but no gene variant/genotype/phenotype effects on PK or PD parameters. |
| PGx | Perrotta_2024 | not_relevant | 0 | 0 | The paper examines vaccination status and clinical outcomes with mAbs, not gene variant/genotype effects on casirivimab PK/PD parameters. |
| popPK | Rao_2021 | irrelevant | 3 | 1 | This is a QSP disease model; casirivimab PK is only a one-compartment description matched to NCA parameters (Cmax, CDay28, half-life) whose numeric values reside in supplementary material/figures not provided. |
| popPK | Rao_2023 | irrelevant | 2 | 1 | This is a QSP model of COVID-19 viral dynamics; casirivimab (REGEN-COV) is only a simulated treatment with PD parameters, no PK disposition parameters (CL, V, half-life) reported, and numeric values live in supplementary figures. |
| PGx | Schilling_2023 | not_relevant | 1 | 1 | Genotyping refers to SARS-CoV-2 variants, not host pharmacogenomics; no gene variant effect on casirivimab PK/PD is reported. |
| popPK | Schilling_2024 | irrelevant | 0 | 0 | This is a viral clearance (SARS-CoV-2 RNA) pharmacometric trial of molnupiravir vs nirmatrelvir; casirivimab is only mentioned as a trial arm with results reported elsewhere, and no casirivimab PK parameters (CL, V, half-life) appear. |
| PGx | Schilling_2024 | not_relevant | 0 | 0 | No pharmacogenomic effects on casirivimab PK/PD are reported; the paper compares antiviral clearance rates without genotype/variant analyses. |
| popPK | Sheward_2022 | irrelevant | 0 | 0 | The paper is an in-vitro neutralization study reporting IC50 values for antibody activity against viral variants, not pharmacokinetic disposition parameters for casirivimab. |
| PGx | Sheward_2022 | not_relevant | 0 | 0 | The paper assesses the neutralization sensitivity of the SARS-CoV-2 omicron variant to monoclonal antibodies, which is a virological/immunological study, not a pharmacogenomic study of human gene variants affecting drug PK/PD. |
| popPK | Stadler_2023 | irrelevant | 3 | 3 | This is an efficacy/immunocorrelate modeling paper, not a PK study; only a rough antibody half-life (~28.9 days for the casirivimab/imdevimab combination) is mentioned, with no CL/V/compartmental parameters, and detailed values live in supplementary tables not provided. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | The study focuses on the in vitro neutralization activity of a new antibody cocktail (HB27/H89Y), with casirivimab mentioned only as a comparator in escape mutation assays; no pharmacokinetic parameters for casirivimab are reported. |
| PGx | Sun_2023 | not_relevant | 0 | 0 | The paper focuses on viral resistance and neutralization efficacy of antibody cocktails, containing no pharmacogenomic data or human PK/PD analysis. |
| PGx | Taha_2021 | not_relevant | 0 | 0 | Case report of REGN-COV2 efficacy in antibody-deficient patients; no gene variant/genotype effects on PK/PD parameters reported. |
| PGx | Tatham_2024 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on casirivimab PK/PD are reported; only viral variant efficacy and plasma concentrations in mice. |
| popPK | Tran_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters (CL, Vc, Vp, Q, t1/2) for the antimalarial antibody CIS43LS, not casirivimab; casirivimab is not the subject drug. |
| popPK | Weinreich_2021 | relevant | 8 | 4 | Reports casirivimab half-life and some concentration points, but full PK parameters (CL, V) are not explicitly listed in the provided text. |
| PGx | Weinreich_2021 | not_relevant | 0 | 0 | The paper is a clinical trial of REGEN-COV efficacy and safety, containing no data on genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Widera_2021 | irrelevant | 0 | 0 | The paper is an in-vitro neutralization assay study evaluating the efficacy of monoclonal antibodies against SARS-CoV-2 variants, not a pharmacokinetic study. |
| PGx | Widera_2021 | not_relevant | 0 | 0 | The paper describes the effect of a viral mutation (SARS-CoV-2 E484K) on the neutralization activity of monoclonal antibodies, not a human pharmacogenomic effect on PK/PD. |
| popPK | Wilhelm_2022 | irrelevant | 0 | 0 | This is an in vitro virology study measuring the neutralization activity (viral escape) of casirivimab against SARS-CoV-2 variants, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Wilhelm_2022 | not_relevant | 1 | 0 | The paper assesses viral escape from monoclonal antibodies due to viral mutations, not pharmacogenomic effects of human gene variants on drug PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcasirivimab%5D&body=Drug%3A%20casirivimab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_casirivimab/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 16:00 UTC</sub>
