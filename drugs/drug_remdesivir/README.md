# remdesivir

- **generic name:** remdesivir
- **ATC codes:** `J05AB16`
- **DrugBank:** [DB14761](https://go.drugbank.com/drugs/DB14761)
- **groups:** approved, investigational

## About

**Description.** Severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) is the causative agent of coronavirus disease 2019 (COVID-19), which is a respiratory disease that is capable of progressing to viral pneumonia and acute respiratory distress syndrome (ARDS); COVID-19 can be fatal. Like other RNA viruses, SARS-CoV-2 depends on an RNA-dependent RNA polymerase (RdRp) enzyme complex for genomic replication, which can be inhibited by a class of drugs known as nucleoside analogues.[A222398]

Remdesivir (GS-5734) is an adenosine triphosphate analogue first described in the literature in 2016 as a potential treatment for Ebola.[A191379, A222393] Broad antiviral activity of remdesivir is suggested by its mechanism of action,[A222398] and to date, it has demonstrated _in vitro_ activity against the _Arenaviridae_, _Flaviviridae_, _Filoviridae_, _Paramyxoviridae_, _Pneumoviridae_, and _Coronaviridae_ viral families.[A222393] Remdesivir activity against the _Coronaviridae_ family was first demonstrated in 2017,[A191382] leading to considerable interest in remdesivir as a possible treatment for COVID-19.[A191427, A198810] Remdesivir was confirmed as a non-obligate chain terminator of RdRp from SARS-CoV-2 and the related SARS-CoV and MERS-CoV,[A222398] and has been investigated in multiple COVID-19 clinical trials.[L12174, L12177]

After initially being granted an FDA Emergency Use Authorization (EUA) on May 1st, 2020,[L13236] remdesivir was fully approved by the FDA for the treatment of COVID-19 on October 22, 2020.[L18438] Remdesivir is currently marketed under the trademark name VEKLURY by Gilead Sciences Inc.[L18438] Remdesivir was also approved by the European Commission on July 3, 2020.[L39640] Remdesivir in combination with [baricitinib] for the treatment of COVID-19, was granted an FDA Emergency Use Authorization on November 19, 2020.[L22619]

**Indication.** Remdesivir is indicated for the treatment of adult and pediatric patients 28 days of age and older and weighing at least 3 kg for coronavirus disease 2019 (COVID-19) infection requiring hospitalization. It is also indicated for the treatment of non-hospitalized patients with mild-to-moderate COVID-19, who are at high risk for progression to severe COVID-19, including hospitalization or death.[L18438, L48056]

Remdesivir was originally granted FDA Emergency Use Authorization (EUA) [L12609] on May 1, 2020, for use in adults and children with suspected or confirmed COVID-19 in a hospital setting with an SpO2 ≤94%.[L13239] Following the FDA approval, this EUA was revised to cover hospitalized pediatric patients between 3.5 and 40 kg, as well as those under 12 years of age that weigh at least 3.5 kg, with suspected or laboratory-confirmed COVID-19.[L13236, L39645]

Under both the on-label and EUA indications, patients not needing invasive mechanical ventilation or extracorporeal membrane oxygenation (ECMO) should be treated for 5 days (including the loading dose on day 1) and may be extended up to 10 days if they do not show improvement. Patients requiring invasive mechanical ventilation or ECMO should be treated for 10 days.[L13239, L18438]

In Europe, remdesivir is approved for the treatment patients ≥4 weeks of age and weighing ≥3 kg with pneumonia requiring supplemental oxygen (low- or high-flow oxygen or other non-invasive ventilation at start of treatment), or who do not require supplemental oxygen and who are at increased risk of progressing to severe COVID-19.[L39645]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 15:05 | 30:15 | 5/0/7 | 4/2/0 | 0/0/3 | 951,429/61,112 | ollama / qwen3.8:27b-mtp-q8_0 | 44 | 29/12 | 36/8 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abouellil_2023](drugs/drug_remdesivir/Remdesivir_Abouellil2023_gs_441524.md) | Abouellil A et al., A population pharmacokinetic model of r…, Naunyn-Schmiedeberg's archi… (2023) | [10.1007/s00210-022-02292-6](https://doi.org/10.1007/s00210-022-02292-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abouellil_2023](drugs/drug_remdesivir/Remdesivir_Abouellil2023_gs_704277.md) | Abouellil A et al., A population pharmacokinetic model of r…, Naunyn-Schmiedeberg's archi… (2023) | [10.1007/s00210-022-02292-6](https://doi.org/10.1007/s00210-022-02292-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abouellil_2023](drugs/drug_remdesivir/Remdesivir_Abouellil2023_remdesivir.md) | Abouellil A et al., A population pharmacokinetic model of r…, Naunyn-Schmiedeberg's archi… (2023) | [10.1007/s00210-022-02292-6](https://doi.org/10.1007/s00210-022-02292-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Morrisette_2020](drugs/drug_remdesivir/Remdesivir_Morrisette2020_reference.md) | Morrisette T et al., The Pharmacokinetic and Pharmacodynamic…, Infectious diseases and the… (2020) | [10.1007/s40121-020-00325-2](https://doi.org/10.1007/s40121-020-00325-2) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sukeishi_2022](drugs/drug_remdesivir/Remdesivir_Sukeishi2022_reference.md) | Sukeishi A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12736](https://doi.org/10.1002/psp4.12736) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Humeniuk_2021](drugs/drug_remdesivir/Remdesivir_Humeniuk2021_reference.md) | Humeniuk R et al., Pharmacokinetic, Pharmacodynamic, and D…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-00984-5](https://doi.org/10.1007/s40262-021-00984-5) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Leegwater_2022](drugs/drug_remdesivir/Remdesivir_Leegwater2022_reference.md) | Leegwater E et al., Population Pharmacokinetics of Remdesiv…, Antimicrobial agents and ch… (2022) | [10.1128/aac.00254-22](https://doi.org/10.1128/aac.00254-22) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Roberts_2025](drugs/drug_remdesivir/Remdesivir_Roberts2025_reference.md) | Roberts DM et al., Population Pharmacokinetic Modelling of…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01496-2](https://doi.org/10.1007/s40262-025-01496-2) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tamura_2023](drugs/drug_remdesivir/Remdesivir_Tamura2023_reference.md) | Tamura R et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12936](https://doi.org/10.1002/psp4.12936) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C2_reference failed (ratio None)</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2025](drugs/drug_remdesivir/Remdesivir_Zhang2025_parameters_for_a_renal_impaired_patient.md) | Zhang S et al., Pharmacokinetic simulations for remdesi…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1488961](https://doi.org/10.3389/fphar.2025.1488961) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C2_reference failed (ratio None)</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2025](drugs/drug_remdesivir/Remdesivir_Zhang2025_parameters_for_healthy_control_zhang_et.md) | Zhang S et al., Pharmacokinetic simulations for remdesi…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1488961](https://doi.org/10.3389/fphar.2025.1488961) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C2_reference failed (ratio None)</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2025](drugs/drug_remdesivir/Remdesivir_Zhang2025_parameters_for_severe_renal_impaired_pa.md) | Zhang S et al., Pharmacokinetic simulations for remdesi…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1488961](https://doi.org/10.3389/fphar.2025.1488961) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hedskog_2023](drugs/drug_remdesivir/pd_Hedskog_2023_EC50.md) | Hedskog C et al., Viral Resistance Analyses From the Remd…, The Journal of infectious d… (2023) | [10.1093/infdis/jiad270](https://doi.org/10.1093/infdis/jiad270) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hsu_2021](drugs/drug_remdesivir/pd_Hsu_2021_IFA.md) | Hsu HY et al., Remdesivir and Cyclosporine Synergistic…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.706901](https://doi.org/10.3389/fphar.2021.706901) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hsu_2021](drugs/drug_remdesivir/pd_Hsu_2021_MRC_5_cells.md) | Hsu HY et al., Remdesivir and Cyclosporine Synergistic…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.706901](https://doi.org/10.3389/fphar.2021.706901) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hsu_2021](drugs/drug_remdesivir/pd_Hsu_2021_plaque_formation.md) | Hsu HY et al., Remdesivir and Cyclosporine Synergistic…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.706901](https://doi.org/10.3389/fphar.2021.706901) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pitts_2022](drugs/drug_remdesivir/pd_Pitts_2022_Nsp12.md) | Pitts J et al., Remdesivir and GS-441524 Retain Antivir…, Antimicrobial agents and ch… (2022) | [10.1128/aac.00222-22](https://doi.org/10.1128/aac.00222-22) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Woodall_2025](drugs/drug_remdesivir/pd_Woodall_2025_resp.md) | Woodall M et al., Efficient &lt;i&gt;in vitro&lt;/i&gt; a…, Antimicrobial agents and ch… (2025) | [10.1128/aac.01233-24](https://doi.org/10.1128/aac.01233-24) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gidari_2022](drugs/drug_remdesivir/pd_Gidari_2022_unknown.md) | Gidari A et al., Nelfinavir: An Old Ally in the COVID-19…, Microorganisms (2022) | [10.3390/microorganisms10122471](https://doi.org/10.3390/microorganisms10122471) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Hsu_2021](drugs/drug_remdesivir/pd_Hsu_2021_IL_6.md) | Hsu HY et al., Remdesivir and Cyclosporine Synergistic…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.706901](https://doi.org/10.3389/fphar.2021.706901) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Pitts_2022](drugs/drug_remdesivir/pd_Pitts_2022_plaque_reduction.md) | Pitts J et al., Remdesivir and GS-441524 Retain Antivir…, Antimicrobial agents and ch… (2022) | [10.1128/aac.00222-22](https://doi.org/10.1128/aac.00222-22) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Romano_2021](drugs/drug_remdesivir/pd_Romano_2021_VI.md) | Romano F et al., Model-Informed Repurposing of Medicines…, Pharmaceutics (2021) | [10.3390/pharmaceutics13081299](https://doi.org/10.3390/pharmaceutics13081299) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Romano_2021](drugs/drug_remdesivir/pd_Romano_2021_viral_inhibition.md) | Romano F et al., Model-Informed Repurposing of Medicines…, Pharmaceutics (2021) | [10.3390/pharmaceutics13081299](https://doi.org/10.3390/pharmaceutics13081299) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **SLCO1B1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Nies_2021](drugs/drug_remdesivir/pgx_Nies_2021_SLCO1B1_Q100.md) | Nies AT et al., Interaction of Remdesivir with Clinical…, Pharmaceutics (2021) | [10.3390/pharmaceutics13030369](https://doi.org/10.3390/pharmaceutics13030369) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Tuteja_2022](drugs/drug_remdesivir/pgx_Tuteja_2022_CYP2C19_Q100.md) | Tuteja S et al., Pharmacogenetic variants and risk of re…, Clinical and translational… (2022) | [10.1111/cts.13313](https://doi.org/10.1111/cts.13313) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 658 matched, 79 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 12  ·  extracted 5  ·  needs_review 7  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agarwal_2020 | not_relevant | 0 | 0 | The paper is a WHO guideline on corticosteroids for COVID-19 and does not discuss remdesivir or pharmacogenomics. |
| PGx | Ambrus_2021 | not_relevant | 0 | 0 | The paper investigates in vitro transporter interactions of remdesivir but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Badary_2021 | not_relevant | 2 | 0 | The paper is a review that lists potential gene-drug interactions for remdesivir (CYP2C8, CYP2D6, CYP3A4, OATP1B1) but does not report specific quantitative pharmacokinetic or pharmacodynamic effect sizes or fitted parameters. |
| PGx | Boshier_2022 | not_relevant | 0 | 0 | The paper investigates viral evolution and resistance in SARS-CoV-2, not human pharmacogenomics or PK/PD parameters of remdesivir. |
| PGx | Brown_2022 | not_relevant | 0 | 0 | The paper reports clinical outcomes of remdesivir in antibody-deficient patients but does not report pharmacokinetic or pharmacodynamic parameters or specific gene variant effects on drug handling. |
| PGx | Deb_2021 | not_relevant | 0 | 0 | The paper reports in silico PBPK simulations of remdesivir PK in special populations (age, weight, organ impairment) and drug-drug interactions, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Diantini_2023 | not_relevant | 0 | 0 | The paper is a review of plant-based drugs for COVID-19 and does not report pharmacogenomic effects on remdesivir PK/PD parameters. |
| PGx | Esposito_2022 | not_relevant | 0 | 0 | The paper is a review of pediatric COVID-19 therapies and does not report any pharmacogenomic effects on remdesivir PK/PD. |
| PGx | Fricke-Galindo_2021 | not_relevant | 2 | 1 | The paper is a review describing potential pharmacogenetic variants for various drugs, including remdesivir, but does not report specific quantitative PK/PD effects or fitted effect sizes for remdesivir. |
| popPK | Gallo_2021 | relevant | 9 | 3 | The paper presents a PBPK model for remdesivir with quantitative parameters, but the specific numeric values for clearance and volume are located in Supplementary Tables (S1-S3) which are not included in the provided evidence. |
| popPK | Gastine_2021 | irrelevant | 0 | 0 | The paper models SARS-CoV-2 viral dynamics and pharmacodynamics, not the pharmacokinetics of remdesivir. |
| popPK | Gidari_2022 | irrelevant | 0 | 0 | The study is an in-vitro virology assay measuring antiviral efficacy (EC50/EC90) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for remdesivir. |
| PGx | Gidari_2022 | not_relevant | 0 | 0 | The paper investigates the in vitro antiviral activity of nelfinavir, molnupiravir, and remdesivir against SARS-CoV-2 variants, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Harfoot_2025 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study of a peptide (D-3006) where remdesivir is only used as a comparator for synergy testing, with no pharmacokinetic parameters reported. |
| PD | Harfoot_2025 | not_relevant | 0 | 0 | The paper focuses on the antiviral activity of the peptide D-3006; remdesivir is only used as a comparator in combination assays without any reported exposure-response or dose-response PD parameters for remdesivir itself. |
| popPK | Hedskog_2023 | irrelevant | 0 | 0 | The paper is a virologic resistance analysis of SARS-CoV-2 Nsp12 mutations and does not report any pharmacokinetic parameters for remdesivir. |
| PD | Hedskog_2023 | not_relevant | 3 | 2 | The paper reports in vitro phenotypic EC50 fold-changes for specific viral mutations, which is a resistance/susceptibility analysis rather than a pharmacodynamic exposure-response or dose-response relationship for the drug in the clinical context. |
| PGx | Hershan_2024 | not_relevant | 0 | 0 | The paper is a general review of repurposed antiviral drugs for SARS-CoV-2 and does not report specific pharmacogenomic effects on remdesivir PK/PD parameters. |
| popPK | Hsu_2021 | irrelevant | 0 | 0 | The paper is an in-vitro virology study reporting EC50 values for antiviral activity, not a pharmacokinetic study with disposition parameters. |
| PD | Humeniuk_2021 | not_relevant | 2 | 1 | The paper is a review focusing on PK, dose selection rationale, and drug interactions; it mentions a concentration-QT analysis but does not provide numeric PD parameters (Emax, EC50) or an extractable exposure-response curve in the provided text. |
| PGx | Kasarla_2022 | not_relevant | 0 | 0 | The study investigates herb-drug interactions involving CYP450 enzymes but does not report any pharmacogenomic effects (gene variants) on remdesivir PK or PD parameters. |
| PGx | Lim_2023 | not_relevant | 0 | 0 | The paper is a review discussing CYP2C9 downregulation in COVID-19 and general drug interactions, but it does not report specific pharmacogenomic effects of gene variants on remdesivir PK/PD parameters. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | The study focuses on a novel NSP14 inhibitor (C10) and only mentions remdesivir as a comparator for antiviral efficacy, providing no pharmacokinetic parameters for remdesivir. |
| PD | Luo_2025 | not_relevant | 0 | 0 | The paper focuses on a novel NSP14 inhibitor (C10) and only mentions remdesivir as a comparator for EC50 values in cell assays, without providing a PK/PD model or exposure-response analysis for remdesivir. |
| PD | Morrisette_2020 | not_relevant | 0 | 0 | The paper is a review of hydroxychloroquine PK/PD and does not report any pharmacodynamic or exposure-response data for remdesivir. |
| PGx | Nies_2021 | not_relevant | 2 | 1 | The study assesses remdesivir's interaction with hepatic uptake transporters (OATP1B1 variants) in vitro, concluding they are not relevant for hepatocellular uptake, but it does not report a pharmacogenomic effect on a PK or PD parameter in humans. |
| popPK | Néant_2023 | irrelevant | 0 | 0 | The study models SARS-CoV-2 viral kinetics and clinical scores, treating remdesivir only as an antiviral efficacy parameter (epsilon) rather than reporting pharmacokinetic disposition parameters (CL, V, etc.) for the drug. |
| PGx | Onyango_2023 | not_relevant | 0 | 0 | The paper is a systematic review of in silico drug discovery methods and does not report pharmacogenomic effects on remdesivir PK/PD. |
| popPK | Pitts_2022 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral susceptibility study reporting EC50 values, not a pharmacokinetic study with disposition parameters. |
| popPK | Romano_2021 | relevant | 8 | 2 | The paper describes a population PK model for remdesivir (via metabolite GS-441524) in macaques/humans, but the specific numeric parameter estimates are explicitly stated to be in Supplementary Materials (Tables S1-S4) which are not provided in the evidence. |
| popPK | Schiffer_2026 | irrelevant | 0 | 0 | The paper is a review of antiviral clinical trial simulation modeling and does not report specific quantitative pharmacokinetic parameters for remdesivir. |
| PD | Schiffer_2026 | not_relevant | 1 | 0 | The paper is a general review of antiviral clinical trial simulation methodologies and does not report specific numeric PD parameters or exposure-response data for remdesivir. |
| PD | Singh_2020 | not_relevant | 1 | 0 | The paper is a general review of drug repurposing for COVID-19 and does not report specific pharmacodynamic models, exposure-response relationships, or numeric PD parameters for remdesivir. |
| PGx | Soares_2025 | not_relevant | 0 | 0 | The paper is a general review of antiviral strategies and limitations for SARS-CoV-2 and does not report specific pharmacogenomic effects on remdesivir PK/PD parameters. |
| PD | Sukeishi_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for GS-441524 (the active metabolite of remdesivir) but does not include any pharmacodynamic (PD) modeling, exposure-response analysis, or dose-response relationship with numeric PD parameters. |
| PD | Susi_2025 | not_relevant | 1 | 0 | The paper is a general review of feline therapeutics that only qualitatively describes the mechanism of action of remdesivir without providing any numeric pharmacodynamic parameters or exposure-response data. |
| PGx | Takahashi_2020 | not_relevant | 0 | 0 | The paper is a review that explicitly states no pharmacogenomic variants were identified for remdesivir. |
| PD | Tamura_2023 | not_relevant | 1 | 0 | The paper reports a population PK model and a Cox proportional hazard analysis for clinical outcomes, but explicitly states that exposure (AUC) was unrelated to recovery or liver enzyme elevation, providing no numeric PD parameters (Emax, EC50, etc.) or concentration-effect curve. |
| popPK | Torabfam_2025 | irrelevant | 0 | 0 | The study focuses on quercetin derivatives as antiviral agents, and remdesivir is only mentioned in the introduction as a literature comparator without any pharmacokinetic data. |
| PD | Torabfam_2025 | not_relevant | 0 | 0 | The paper investigates quercetin derivatives (QPABA, QPP) and does not report any pharmacodynamic or exposure-response data for remdesivir. |
| popPK | Usman_2023 | irrelevant | 0 | 0 | The paper is a general review of pharmacometrics in low- and middle-income countries and does not report any specific pharmacokinetic parameters for remdesivir. |
| PD | Usman_2023 | not_relevant | 0 | 0 | The paper is a general narrative review on pharmacometrics in LMICs and does not report specific PK/PD data or numeric parameters for remdesivir. |
| PGx | Wanounou_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between nirmatrelvir/ritonavir and antiseizure medications, with no mention of pharmacogenomic effects on remdesivir. |
| popPK | Woodall_2025 | irrelevant | 0 | 0 | The study is an in-vitro virology assay reporting antiviral efficacy (EC50) and synergy, not pharmacokinetic disposition parameters (CL, V, t1/2) for remdesivir. |
| PGx | Yan_2023 | not_relevant | 0 | 0 | The paper is a review discussing the mechanisms of action and metabolic pathways of remdesivir, molnupiravir, and nirmatrelvir, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic (PK) model for remdesivir and its metabolites but does not report any pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Zhao_2021 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study for new SARS-CoV-2 RdRp inhibitors, and remdesivir is used only as a comparator agent with no pharmacokinetic parameters reported. |
| PD | Zhao_2021 | not_relevant | 0 | 0 | The paper investigates novel 2-((1H-indol-3-yl)thio)-N-phenyl-acetamides as SARS-CoV-2 RdRp inhibitors and does not report any pharmacodynamic or exposure-response data for remdesivir. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_remdesivir`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
