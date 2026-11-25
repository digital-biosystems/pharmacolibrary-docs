<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ribavirin&quot;}]"></div>

# ribavirin

- **generic name:** ribavirin
- **ATC codes:** `J05AB04`, `J05AP01`
- **DrugBank:** [DB00811](https://go.drugbank.com/drugs/DB00811) · **PubChem:** [CID 37542](https://pubchem.ncbi.nlm.nih.gov/compound/37542)
- **molar mass:** 244.2047 g/mol (C8H12N4O5) — DrugBank
- **groups:** approved, investigational

## About

Ribavirin is a nucleoside analogue antiviral used to treat hepatitis C and respiratory syncytial virus infections. It is usually given orally in capsules or tablets, though an inhaled form is also used for specific viral illnesses. As a World Health Organization essential medicine, it is widely available as a generic drug worldwide.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q421862](https://www.wikidata.org/wiki/Q421862), [Wikipedia](https://en.wikipedia.org/wiki/Ribavirin?oldid=1384048403) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ribavirin | parent | 244.205 | C8H12N4O5 | DrugBank | [37542](https://pubchem.ncbi.nlm.nih.gov/compound/37542) | Erameh_2026, Jin_2012, Mulder_2025, Wade_2006 |

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="112" viewBox="0 0 560 112" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="90" stroke="#ddd"/><text x="190.0" y="104" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="90" stroke="#ddd"/><text x="540.0" y="104" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Wade_2006 · CL</text><circle cx="293.8" cy="30.0" r="4" fill="#ef6c00"><title>Wade_2006 · CL: 19.8 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Mulder_2025 · CL</text><circle cx="337.6" cy="46.0" r="4" fill="#ef6c00"><title>Mulder_2025 · CL: 26.4 L/h</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Jin_2012 · CL/F</text><circle cx="287.6" cy="62.0" r="4" fill="#ef6c00"><title>Jin_2012 · CL/F: 19 L/h</title></circle><text x="184" y="82.0" font-size="11" text-anchor="end">Jin_2012 · CL/F</text><circle cx="288.5" cy="78.0" r="4" fill="#ef6c00"><title>Jin_2012 · CL/F: 19.12 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Jin_2012_mean_of_25_leverage_runs_cv](drugs/drug_ribavirin/Ribavirin_Jin2012_mean_of_25_leverage_runs_cv.md) | — | 1-compartment (no model) | 3 (+1 cov.) | Jin R et al., Population pharmacokinetics and pharmac…, The AAPS journal (2012) | [10.1208/s12248-012-9368-z](https://doi.org/10.1208/s12248-012-9368-z) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ population_mean_in_final_pk_model](drugs/drug_ribavirin/Ribavirin_Jin2012_population_mean_in_final_pk_model.md) | — | 1-compartment (no model) | 3 (+1 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: F, Vd, Tlag left at base-class defaults</sub> | [Mulder_2025_reference](drugs/drug_ribavirin/Ribavirin_Mulder2025_reference.md) | held back | 1-compartment, oral | 7 (+2 cov.) | Mulder MB et al., Development of a ribavirin dosing regim…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf183](https://doi.org/10.1093/jac/dkaf183) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q354 — no SI value to build from</sub> | [Wade_2006_reference](drugs/drug_ribavirin/Ribavirin_Wade2006_reference.md) | — | 2-compartment (no model) | 10 | Wade JR et al., Pharmacokinetics of ribavirin in patien…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2006.02704.x](https://doi.org/10.1111/j.1365-2125.2006.02704.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Erameh_2026_favipiravirparticipants](drugs/drug_ribavirin/Ribavirin_Erameh2026_favipiravirparticipants.md) | — | 2-compartment (no model) | 3 | Erameh C et al., Favipiravir for Lassa fever: an open-la…, Nature medicine (2026) | [10.1038/s41591-026-04402-w](https://doi.org/10.1038/s41591-026-04402-w) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ reference](drugs/drug_ribavirin/Ribavirin_Erameh2026_reference.md) | — | 2-compartment (no model) | 4 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [↳ ribavirinparticipants](drugs/drug_ribavirin/Ribavirin_Erameh2026_ribavirinparticipants.md) | — | 2-compartment (no model) | 3 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Tod_2005_Hb](drugs/drug_ribavirin/pd_Tod_2005_Hb.md) | haemoglobin ← ribavirin · direct Emax (saturable) effect | — | Tod M et al., Pharmacokinetic/pharmacodynamic and tim…, Clinical pharmacokinetics (2005) | [10.2165/00003088-200544040-00006](https://doi.org/10.2165/00003088-200544040-00006) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Jin_2012_SVR](drugs/drug_ribavirin/pd_Jin_2012_SVR.md) | sustained viral response ← ribavirin · categorical (graded) response model | — | Jin R et al., Population pharmacokinetics and pharmac…, The AAPS journal (2012) | [10.1208/s12248-012-9368-z](https://doi.org/10.1208/s12248-012-9368-z) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:36 | 0:04 | 4/3/0 | 2/0/0 | 0/0/0 | 3,935/172 | einfracz / qwen3.8-27b | 22 | 2/8 | 9/1 | 0 |

## Coverage

- **PubMed hits:** 284 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 7  ·  extracted 0  ·  needs review 4  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Erameh_2026 | not_relevant | 0 | 0 | The study compares favipiravir and ribavirin pharmacokinetics but does not investigate the impact of gene variants or genotypes on these parameters. |
| popPK | Gastine_2021 | irrelevant | 0 | 0 | This is a viral dynamics (SARS-CoV-2) model; ribavirin is only a co-administered antiviral covariate, with no ribavirin PK parameters reported. |
| popPK | Janowski_2020 | irrelevant | 0 | 0 | The study reports in vitro antiviral activity (EC50) rather than pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Janowski_2020 | not_relevant | 0 | 0 | The paper assesses the in vitro antiviral activity of ribavirin and favipiravir against astroviruses but contains no data on gene variants or pharmacogenomic effects on PK/PD. |
| PGx | Jin_2012 | not_relevant | 4 | 8 | The paper identifies IL-28B genotype as a predictor of sustained viral response (SVR), a clinical efficacy endpoint, rather than a pharmacokinetic or pharmacodynamic parameter of ribavirin itself. |
| popPK | Mogalian_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of velpatasvir and sofosbuvir; ribavirin is only a co-administered agent in the comparator arm and its specific PK parameters are not reported. |
| PGx | Mogalian_2018 | not_relevant | 0 | 0 | The paper reports effects of hepatic impairment status on the PK of velpatasvir and sofosbuvir; ribavirin is mentioned only as a study arm but its PK parameters are not reported or linked to genetic variants. |
| popPK | Polepally_2017 | irrelevant | 7 | 2 | While the study uses a population PK model for ribavirin, the evidence text only reports qualitative covariate significance and percentage AUC differences, lacking explicit quantitative parameter estimates (CL, V, ka). |
| PGx | Polepally_2017 | not_relevant | 0 | 0 | The study evaluates the impact of renal function (phenotype) on ribavirin pharmacokinetics, not gene variants or genotypes. |
| popPK | Riggs_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of albinterferon alfa-2b, and ribavirin is only mentioned as a co-administered agent without any reported pharmacokinetic parameters for ribavirin itself. |
| PGx | Riggs_2012 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of albinterferon alfa-2b, not ribavirin, and does not investigate pharmacogenomic variants affecting ribavirin PK/PD. |
| popPK | Rui_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new NNRTIs where ribavirin is used only as a positive control for in vitro antiviral efficacy, reporting no pharmacokinetic or disposition parameters for ribavirin. |
| PGx | Rui_2022 | not_relevant | 0 | 0 | The paper reports on novel compounds for anti-HIV/DENV activity and mentions ribavirin only as a positive control, with no data on pharmacogenomic effects on ribavirin's PK/PD parameters. |
| popPK | Salam_2022 | irrelevant | 3 | 2 | A systematic review of ribavirin in Lassa fever; no original PK parameters (CL, V, half-life) for ribavirin are reported — PK modelling values are cited from Preston et al and profiles live in Fig 1/Table 2 not provided. |
| popPK | Sanna_2020 | irrelevant | 0 | 0 | In-vitro antiviral drug-discovery study where ribavirin is only a reference comparator; no PK parameters for ribavirin are reported. |
| popPK | Suleiman_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of glecaprevir and pibrentasvir, with ribavirin mentioned only as an excluded component of the treatment regimen, so no ribavirin PK parameters are reported. |
| PGx | Suleiman_2020 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of Glecaprevir/Pibrentasvir, not ribavirin, and the regimen is explicitly described as ribavirin-free. |
| popPK | Tod_2005 | irrelevant | 9 | 0 | The paper reports quantitative PK/PD parameters (RT50 ~12 mg/kg/day) for ribavirin, so it is a relevant PK study; however, the specific CL/V/Q values are not present in the provided evidence and appear to be in the full model/supplementary data not included here. |
| PGx | Tod_2005 | not_relevant | 0 | 0 | The paper models the PD relationship between ribavirin exposure and anaemia, but it does not report any pharmacogenomic data (gene variants or genotypes) influencing these parameters. |
| popPK | Tonelli_2011 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral activity study where ribavirin is used only as a reference comparator, with no pharmacokinetic parameters reported. |
| PGx | Tonelli_2011 | not_relevant | 0 | 0 | The paper evaluates the antiviral activity of acridine derivatives against BVDV and only mentions ribavirin as a reference drug; it does not report any pharmacogenomic effects on ribavirin PK/PD. |
| popPK | Ueno_2018 | irrelevant | 0 | 0 | This is an exposure-response (efficacy) analysis of daclatasvir and asunaprevir; ribavirin is only mentioned as prior IFN/RBV treatment background, with no ribavirin PK parameters reported. |
| PGx | Wade_2006 | not_relevant | 0 | 0 | The study reports that lean body weight is the only significant covariate influencing ribavirin pharmacokinetics and explicitly excludes other factors (like race/genotype) due to lack of clinical significance, failing to report any pharmacogenomic effects. |
| popPK | Zeitlinger_2020 | irrelevant | 2 | 2 | This is a narrative review of antivirals for COVID-19; ribavirin appears only as a co-administered/comparator drug with no quantitative PK disposition parameters (CL, V, ka, half-life) reported for it. |
| popPK | Zhu_2018 | irrelevant | 0 | 0 | This is a population PK study of asunaprevir; ribavirin is only a co-administered drug in the QUAD regimen, with no ribavirin PK parameters reported. |
| popPK | de_2024 | irrelevant | 0 | 0 | The study is an in-vitro antiviral assay for a plant extract, using ribavirin only as a comparator to assess synergy, with no pharmacokinetic data. |
| PGx | de_2024 | not_relevant | 0 | 0 | The study investigates the antiviral activity of an algae extract against Zika virus and its synergy with ribavirin, but does not report any pharmacogenomic effects on ribavirin's PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bribavirin%5D&body=Drug%3A%20ribavirin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ribavirin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 15:50 UTC</sub>
