<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;delavirdine&quot;}]"></div>

# delavirdine

- **generic name:** delavirdine
- **ATC codes:** `J05AG02`
- **DrugBank:** [DB00705](https://go.drugbank.com/drugs/DB00705) · **PubChem:** [CID 5625](https://pubchem.ncbi.nlm.nih.gov/compound/5625)
- **molar mass:** 456.561 g/mol (C22H28N6O3S) — DrugBank
- **groups:** approved, withdrawn

## About

It is taken orally in tablet form, which results in good absorption from the gut. The drug has been discontinued because it performed less effectively than alternatives and required frequent daily dosing.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q370244](https://www.wikidata.org/wiki/Q370244), [Wikipedia](https://en.wikipedia.org/wiki/Delavirdine?oldid=1358099674) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| delavirdine | parent | 456.561 | C22H28N6O3S | DrugBank | [5625](https://pubchem.ncbi.nlm.nih.gov/compound/5625) | Smith_2005 |
| N-delavirdine | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Smith_2005_reference](drugs/drug_delavirdine/Delavirdine_Smith2005_reference.md) | — | parent + metabolite (no model) | 5 | Smith PF et al., Population pharmacokinetics of delavird…, Clinical pharmacokinetics (2005) | [10.2165/00003088-200544010-00004](https://doi.org/10.2165/00003088-200544010-00004) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Cheng_1997_ERMBT](drugs/drug_delavirdine/pd_Cheng_1997_ERMBT.md) | erythromycin breath test ← delavirdine · direct Emax (saturable) effect | — | Cheng CL et al., Steady-state pharmacokinetics of delavi…, Clinical pharmacology and t… (1997) | [10.1016/S0009-9236(97)90133-8](https://doi.org/10.1016/S0009-9236(97)90133-8) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:23 | 2:18 | 0/1/0 | 1/0/0 | 0/0/0 | 3,847/170 | einfracz / qwen3.8-27b | 12 | 4/6 | 11/1 | 0 |

## Coverage

- **PubMed hits:** 127 matched, 103 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baker_2006 | irrelevant | 0 | 0 | The study is a clinical trial investigating QT interval effects of drug interactions and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for delavirdine. |
| PGx | Baker_2006 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (DDI) on the QT interval involving delavirdine, but it does not investigate the effect of any gene variant, genotype, or pharmacogenomic phenotype on delavirdine's pharmacokinetics or pharmacodynamics. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study reporting in vitro antiviral efficacy (EC50/IC50) of new NNRTIs, not a pharmacokinetic study of delavirdine. |
| PGx | Chen_2012 | not_relevant | 0 | 0 | The paper is a drug discovery study evaluating new NNRTI compounds and mentions delavirdine only as a reference standard for potency, containing no pharmacogenomic data or PK/PD parameters linked to genetic variants. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | The paper describes the discovery and anti-HIV activity (in vitro) of new compounds, using delavirdine only as a reference/comparator drug with no pharmacokinetic data. |
| PGx | Chen_2013 | not_relevant | 0 | 0 | The paper describes the discovery and in vitro antiviral activity of new NNRTIs, reporting no pharmacogenomic effects on delavirdine's PK or PD. |
| popPK | Chen_2016 | irrelevant | 0 | 0 | The paper is a structural optimization and in-vitro antiviral activity study where delavirdine is only used as a comparator drug, with no pharmacokinetic parameters reported. |
| PGx | Chen_2016 | not_relevant | 0 | 0 | The paper describes the structure-activity relationship and in vitro antiviral efficacy of novel NNRTI derivatives, not the impact of a gene variant on the pharmacokinetics or pharmacodynamics of delavirdine. |
| popPK | Cheng_1997 | relevant | 8 | 2 | The study reports steady-state pharmacokinetics of delavirdine in humans, including qualitative trends for clearance and half-life, but specific quantitative parameter values (numeric CL, V, ka) are not listed in the abstract evidence provided. |
| PGx | Cheng_1997 | not_relevant | 0 | 0 | The study investigates dose-dependent pharmacokinetics and CYP3A inhibition in a small sample of HIV patients without evaluating specific genetic variants (pharmacogenomics) that influence drug disposition. |
| popPK | Clotet_1999 | irrelevant | 0 | 0 | The paper discusses viral resistance mutations and pharmacodynamics (IC50) for NNRTIs, including delavirdine, but contains no pharmacokinetic disposition parameters. |
| PGx | Clotet_1999 | not_relevant | 0 | 0 | The paper discusses viral resistance mutations (K103N) and their effect on drug potency (IC50) for efavirenz/delavirdine, not human pharmacogenomics affecting PK or PD parameters. |
| popPK | Costa_2016 | irrelevant | 0 | 0 | The study evaluates the in-vitro antileishmanial activity (IC50 values) of delavirdine, not its pharmacokinetic parameters. |
| PGx | Costa_2016 | not_relevant | 0 | 0 | The study evaluates antileishmanial activity of antiretroviral drugs, not pharmacogenomic effects on PK/PD. |
| popPK | Davey_1996 | irrelevant | 2 | 0 | The study focuses on efficacy and safety in a clinical trial, and the abstract only qualitatively mentions "good oral bioavailability" without reporting specific quantitative PK parameters like clearance or half-life. |
| PGx | Davey_1996 | not_relevant | 0 | 0 | The paper evaluates pharmacokinetics and efficacy in HIV patients but does not report any pharmacogenomic effects (gene variants) on delavirdine parameters. |
| popPK | Fichtenbaum_2002 | irrelevant | 0 | 0 | The paper is a review discussing drug-drug interactions and metabolic pathways, providing no original quantitative pharmacokinetic parameters for delavirdine. |
| PGx | Fichtenbaum_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving delavirdine (CYP3A4 inhibition) but does not report pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Freimuth_1996 | irrelevant | 0 | 0 | The text describes the mechanism of action and in vitro microbiological activity (IC50 values) of delavirdine but contains no pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| PGx | Freimuth_1996 | not_relevant | 0 | 0 | The paper describes general in vitro mechanism and microbiology of delavirdine without reporting any pharmacogenomic effects on PK/PD parameters. |
| popPK | Genin_1996 | irrelevant | 0 | 0 | The paper focuses on the synthesis, structure-activity relationships, and metabolic stability of novel BHAP analogs, not on the pharmacokinetic parameters of delavirdine itself. |
| PGx | Genin_1996 | not_relevant | 0 | 0 | The paper discusses chemical synthesis and metabolic stability of drug analogs, not the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of delavirdine. |
| popPK | Gill_2001 | irrelevant | 0 | 0 | The paper is a safety review of saquinavir; delavirdine is mentioned only as a CYP3A4 inhibitor causing a drug-drug interaction, with no PK parameters for delavirdine reported. |
| PGx | Gill_2001 | not_relevant | 0 | 0 | The paper reviews the safety and pharmacokinetics of saquinavir, mentioning delavirdine only as a drug interaction partner, without reporting any pharmacogenomic effects on delavirdine. |
| popPK | Grasela_2005 | irrelevant | 0 | 0 | The paper is a qualitative review of challenges in pharmacometrics and model-based drug development, containing no quantitative pharmacokinetic parameters for delavirdine or any other specific drug. |
| PGx | Grasela_2005 | not_relevant | 0 | 0 | The paper discusses general challenges and infrastructure for model-based drug development and does not contain specific data regarding delavirdine or pharmacogenomic effects. |
| popPK | Haubrich_2007 | irrelevant | 0 | 0 | The study determines phenotypic drug susceptibility cut-points (IC50 fold changes) and virologic response correlations, not pharmacokinetic parameters like clearance or volume. |
| PGx | Haubrich_2007 | not_relevant | 0 | 0 | The paper reports phenotypic susceptibility cut-points based on viral response, not pharmacogenomic effects (genotype/phenotype) on PK/PD parameters. |
| popPK | Hecht_2015 | irrelevant | 0 | 0 | In-vitro cytotoxicity study of NNRTIs; delavirdine only has an EC50 (171 μmol/l), no PK disposition parameters. |
| popPK | Hesse_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2B6 inhibition and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for delavirdine. |
| PGx | Hesse_2001 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibitory potency of antiretrovirals on CYP2B6 but does not report any pharmacogenomic effects (gene variants/genotypes) on the PK or PD of delavirdine. |
| popPK | Huang_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of BILR 355, not delavirdine. |
| PGx | Huang_2009 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of BILR 355, not delavirdine, and does not report any pharmacogenomic effects. |
| popPK | Huang_2015 | irrelevant | 0 | 0 | This is a medicinal chemistry study reporting antiviral potency (EC50) of new NNRTIs, not a pharmacokinetic study of delavirdine. |
| PGx | Huang_2015 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro efficacy of novel NNRTIs, comparing them to delavirdine, but does not investigate pharmacogenomics or genetic effects on PK/PD. |
| popPK | Joly_2000 | irrelevant | 0 | 0 | The paper is a general review of NNRTIs discussing mechanism, resistance, and side effects without providing any quantitative pharmacokinetic parameters for delavirdine. |
| PGx | Joly_2000 | not_relevant | 0 | 0 | The text discusses NNRTI mechanisms, resistance mutations in the viral genome, and general adverse effects, but does not report any host pharmacogenomic effects on delavirdine pharmacokinetics or pharmacodynamics. |
| popPK | Justesen_2003 | irrelevant | 2 | 2 | The study is a drug-drug interaction trial where delavirdine is the substrate, but only a specific time-point concentration (C12h) is reported, not compartmental parameters (CL, V, ka) or a population-PK model. |
| PGx | Justesen_2003 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction (amprenavir-induced delavirdine clearance), not a pharmacogenomic effect (gene variant/genotype) on the drug's parameters. |
| PGx | Justesen_2004 | not_relevant | 0 | 0 | Dose-dependent PK of delavirdine with amprenavir; no gene variant/genotype/phenotype effects reported. |
| popPK | Levin_2010 | irrelevant | 0 | 0 | The paper is a case report on a diltiazem-fentanyl interaction where delavirdine is only mentioned as an example of a CYP3A4 inhibitor, with no PK parameters provided. |
| PGx | Levin_2010 | not_relevant | 1 | 0 | The paper discusses a drug-drug interaction between diltiazem and fentanyl, and only mentions delavirdine in a general list of other CYP3A4 inhibitors without presenting any data on its pharmacokinetics or pharmacogenomics. |
| popPK | Li_2013 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on synthetic derivatives, using delavirdine only as a comparator for antiviral activity, with no PK data reported. |
| PGx | Li_2013 | not_relevant | 0 | 0 | The paper reports the synthesis and antiviral activity of new NNRTI candidates, comparing them to delavirdine, but does not investigate pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of delavirdine itself. |
| popPK | Li_2016 | irrelevant | 0 | 0 | This is a medicinal chemistry study focusing on the synthesis and antiviral activity of novel NNRTIs, not a pharmacokinetic study of delavirdine. |
| PGx | Li_2016 | not_relevant | 0 | 0 | The paper reports novel HIV NNRTIs and their activities against viral strains, with no data on pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of delavirdine. |
| PGx | Li_2021 | not_relevant | 0 | 0 | Delavirdine is a CYP3A4 inhibitor in a DDI study, not a gene variant/genotype/phenotype effect. |
| popPK | Liedtke_2009 | irrelevant | 0 | 0 | The paper is a review of warfarin interactions and delavirdine is only mentioned as having anticipated interactions with no reported cases or PK parameters. |
| PGx | Liedtke_2009 | not_relevant | 0 | 0 | The paper reviews warfarin interactions and does not report pharmacogenomic effects on the PK or PD of delavirdine. |
| popPK | Liu_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study evaluating anti-HIV activity in cell and enzymatic assays, reporting no pharmacokinetic parameters for delavirdine, which is only used as a reference comparator. |
| PGx | Liu_2014 | not_relevant | 0 | 0 | The paper reports in vitro anti-HIV activity of novel compounds, not a pharmacogenomic effect on the PK/PD of delavirdine. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | Delavirdine is only used as a reverse transcriptase inhibitor in a mechanistic experiment; no PK parameters for it are reported. |
| popPK | Ma_2005 | irrelevant | 2 | 0 | This is a review article summarizing interactions, and the provided evidence contains no original quantitative pharmacokinetic parameter values (CL, V, etc.) for delavirdine. |
| PGx | Ma_2005 | not_relevant | 0 | 0 | The paper discusses CYP-mediated drug-drug interactions, not the impact of genetic variants on PK/PD parameters. |
| popPK | Mannu_2011 | irrelevant | 0 | 0 | The study is an in silico computational docking analysis of CYP3A4 binding modes and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for delavirdine. |
| PGx | Mannu_2011 | not_relevant | 0 | 0 | The paper is a computational molecular docking study focused on drug-drug interactions and CYP3A4 binding, containing no data on gene variants or genotypes. |
| popPK | Michalets_2000 | irrelevant | 0 | 0 | The paper is a review of drug interactions with cisapride, and delavirdine is mentioned only as a CYP3A4 inhibitor/co-administered drug without any population-pharmacokinetic parameters reported. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving cisapride and delavirdine, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Ming_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro biological activities (EC50/IC50) of delavirdine hybrids as NNRTIs, reporting no pharmacokinetic disposition parameters. |
| PGx | Ming_2023 | not_relevant | 0 | 0 | The paper reports on the design and synthesis of new chemical hybrids and their in vitro biological activities, containing no pharmacogenomic data regarding how gene variants affect delavirdine's PK or PD. |
| popPK | Mundy_2012 | irrelevant | 0 | 0 | The study is a nested case-control analysis of fracture risk in HIV patients, not a pharmacokinetic study, and reports no PK parameters for delavirdine. |
| PGx | Mundy_2012 | not_relevant | 0 | 0 | The paper investigates fracture risk associated with antiretroviral drug exposure in a general HIV population and does not report any pharmacogenomic effects or gene-variant-specific changes in pharmacokinetics or pharmacodynamics. |
| popPK | Nugent_1998 | irrelevant | 0 | 0 | The paper is a mechanistic/virology study evaluating the antiviral activity of pyrimidine thioethers against HIV-1 RT, not a pharmacokinetic study of delavirdine. |
| PGx | Nugent_1998 | not_relevant | 0 | 0 | The paper describes the synthesis and activity of novel HIV inhibitors, not a pharmacogenomic effect on delavirdine PK/PD. |
| popPK | Pinna_2001 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro anti-HIV activity of delavirdine analogues, but does not report pharmacokinetic parameters for delavirdine itself. |
| PGx | Pinna_2001 | not_relevant | 0 | 0 | The paper reports the synthesis and anti-HIV activity of delavirdine analogues but contains no pharmacogenomic data or gene-drug interactions. |
| popPK | Poppe_1997 | irrelevant | 0 | 0 | The paper focuses on the antiviral activity of PNU-140690; delavirdine is mentioned only as a comparator drug for resistance and synergy, with no pharmacokinetic parameters reported for it. |
| PGx | Poppe_1997 | not_relevant | 0 | 0 | The paper describes a new HIV protease inhibitor (PNU-140690) and its activity against strains resistant to delavirdine, but it does not report any pharmacogenomic effects on delavirdine's PK or PD. |
| popPK | Quan_2003 | irrelevant | 0 | 0 | The study is an in-vitro analysis of enzyme sensitivity (IC50) in a cell-free assay, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Quan_2003 | not_relevant | 0 | 0 | The paper reports on viral genotype (HIV subtypes/mutations) and drug resistance, not human pharmacogenomics affecting the PK/PD of delavirdine. |
| popPK | Ribone_2012 | irrelevant | 0 | 0 | The paper is a structure-activity relationship (SAR) study on HIV-1 reverse transcriptase inhibitors where delavirdine is used only as a comparator for potency (EC50), not for pharmacokinetic parameter estimation. |
| PGx | Ribone_2012 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro activity of novel HIV-1 RT inhibitors, comparing them to delavirdine, but does not investigate any pharmacogenomic effects or PK/PD parameters related to delavirdine. |
| popPK | Romero_1996 | irrelevant | 0 | 0 | The paper describes the identification and structure-activity relationships of HIV-1 reverse transcriptase inhibitors, not the pharmacokinetics of delavirdine. |
| PGx | Romero_1996 | not_relevant | 0 | 0 | The paper reports the discovery of new HIV-1 reverse transcriptase inhibitors to treat delavirdine-resistant variants, not the pharmacogenomics of delavirdine. |
| popPK | Schmith_2019 | irrelevant | 0 | 0 | This is a buprenorphine concentration-QT study; delavirdine is only mentioned as a co-administered CYP inhibitor, with no PK parameters for delavirdine. |
| popPK | Schotland_2018 | irrelevant | 0 | 0 | This is a pharmacovigilance/adverse-event prediction study with no delavirdine PK parameters; delavirdine is not even mentioned. |
| popPK | Shao_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay evaluating the mode of action of reverse transcriptase inhibition, not a pharmacokinetic study. |
| PGx | Shao_1998 | not_relevant | 0 | 0 | The paper describes in vitro mode of action assays for NNRTIs and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Shao_2003 | irrelevant | 0 | 0 | The paper describes an in vitro phenotypic drug susceptibility assay measuring IC50 values, not pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| PGx | Shao_2003 | not_relevant | 0 | 0 | The paper describes a method for phenotypic drug susceptibility testing of HIV RT enzymes (genotypes of the virus), not human pharmacogenomic variants affecting drug PK/PD. |
| popPK | Sharma_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PXR agonism, and delavirdine is used only as a comparator drug with no pharmacokinetic parameters reported. |
| PGx | Sharma_2013 | not_relevant | 0 | 0 | The paper investigates PXR agonism of NNRTIs in vitro and does not report pharmacogenomic effects on the PK or PD of delavirdine. |
| popPK | Sharma_2015 | irrelevant | 0 | 0 | The study investigates in vitro receptor activation mechanisms of NNRTIs and does not report pharmacokinetic parameters for delavirdine. |
| PGx | Sharma_2015 | not_relevant | 0 | 0 | The paper investigates receptor activation mechanisms of NNRTIs on CAR splice variants and does not report pharmacogenomic effects on PK or PD parameters of delavirdine. |
| PGx | Smith_2005 | not_relevant | 0 | 0 | The study analyzes population pharmacokinetics with covariates like race and sex, but does not report specific gene variants or pharmacogenomic data. |
| popPK | Taylor_2001 | irrelevant | 2 | 0 | This is a narrative review discussing the disposition of antiretroviral drugs in seminal plasma, and it lacks original quantitative PK parameter values (CL, V, ka) for delavirdine specifically. |
| PGx | Taylor_2001 | not_relevant | 0 | 0 | The paper is a review on antiretroviral distribution in seminal plasma and does not report pharmacogenomic effects on delavirdine pharmacokinetics. |
| popPK | Tian_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel NNRTIs where delavirdine is used only as a reference comparator for antiviral activity, with no pharmacokinetic data reported. |
| PGx | Tian_2014 | not_relevant | 0 | 0 | The paper is a medicinal chemistry study on novel NNRTI compounds and does not investigate any pharmacogenomic effect on delavirdine's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tran_2001 | irrelevant | 3 | 0 | The paper is a clinical review that describes qualitative pharmacokinetic properties and drug interactions of delavirdine but does not contain any specific quantitative disposition parameter values (e.g., numerical CL, V, or t1/2). |
| PGx | Tran_2001 | not_relevant | 0 | 0 | The paper reviews general pharmacokinetics and drug-drug interactions for delavirdine but does not discuss pharmacogenomic effects of specific gene variants or genotypes. |
| popPK | Uckun_1999 | irrelevant | 0 | 0 | The paper reports in-vitro IC50 values for antiviral activity, not pharmacokinetic parameters. |
| PGx | Uckun_1999 | not_relevant | 0 | 0 | The paper describes the in vitro antiviral activity of novel HIV inhibitors and does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of delavirdine. |
| popPK | Vanangamudi_2023 | irrelevant | 2 | 2 | This is a review of NNRTI design; delavirdine is only mentioned as an approved drug with a half-life (1.17 h) cited from literature, not a PK study of delavirdine itself. |
| popPK | Venkatachalam_2000 | irrelevant | 0 | 0 | The paper reports in vitro anti-HIV activity (IC50 values) for new NNRTI compounds with delavirdine as a comparator, and contains no pharmacokinetic data. |
| PGx | Venkatachalam_2000 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro anti-HIV activity of new NNRTI compounds, with no mention of pharmacogenomics, gene variants, or pharmacokinetics. |
| popPK | Venkatachalam_2001 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study focusing on anti-HIV activity and cytotoxicity, with no pharmacokinetic parameters for delavirdine (which is only used as a comparator). |
| PGx | Venkatachalam_2001 | not_relevant | 0 | 0 | The paper reports the discovery of new HIV drugs, not a pharmacogenomic effect of delavirdine. |
| popPK | Voorman_1998 | irrelevant | 0 | 0 | The study describes in vitro microsomal metabolism and mechanism-based inactivation of CYP3A, not quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for delavirdine. |
| PGx | Voorman_1998 | not_relevant | 0 | 0 | The paper describes the mechanism of CYP3A inactivation by delavirdine but does not link this to specific gene variants/genotypes affecting a PK or PD parameter. |
| popPK | Voorman_1998_2 | irrelevant | 1 | 0 | The paper reports in-vitro metabolic parameters (Km, Vmax, intrinsic clearance) for microsomal enzymes, not in-vivo pharmacokinetic disposition parameters (CL, V, ka) or a population PK model. |
| PGx | Voorman_1998_2 | not_relevant | 2 | 5 | The paper characterizes CYP enzymes (CYP3A4/2D6) responsible for metabolism using pooled or inter-individual liver microsomes, but does not report a specific gene variant/genotype association with a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Voorman_2001 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study examining cytochrome P450 inhibition in human liver microsomes, reporting enzyme kinetics (Ki, Km, Vmax) rather than in-vivo pharmacokinetic disposition parameters. |
| PGx | Voorman_2001 | not_relevant | 0 | 0 | The paper characterizes the drug-drug interaction potential of delavirdine (CYP inhibition) but does not report any pharmacogenomic variants or their effects on pharmacokinetics or pharmacodynamics. |
| popPK | Wan_2015 | irrelevant | 0 | 0 | Medicinal chemistry paper on novel NNRTI hybrids; delavirdine appears only as an in-vitro potency comparator (EC50), with no PK/disposition parameters. |
| popPK | Wang_2014 | irrelevant | 0 | 0 | This is a medicinal chemistry study evaluating the in vitro anti-HIV activity of new NNRTI compounds, using delavirdine only as a comparator drug for EC50 values rather than studying its pharmacokinetics. |
| PGx | Wang_2014 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro antiviral activity of novel NNRTIs, comparing them to delavirdine, but does not investigate the effect of human genetic variants on delavirdine's pharmacokinetics or pharmacodynamics. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | This is a comprehensive review article covering multiple NNRTIs, not an original study reporting specific quantitative PK parameters for delavirdine. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper is a review of NNRTIs generally and does not report specific pharmacogenomic effects on PK or PD parameters. |
| popPK | Weiss_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of BCRP inhibition by anti-HIV drugs and does not report quantitative pharmacokinetic parameters (e.g., CL, V, t1/2) for delavirdine. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | The study investigates the modulation of BCRP transporters by antiretroviral drugs in vitro but does not report any pharmacogenomic effects of gene variants on the PK/PD of delavirdine. |
| popPK | Witvrouw_2000 | irrelevant | 0 | 0 | The study is an in-viro evaluation of viral breakthrough after drug removal and does not report any pharmacokinetic parameters (CL, V, etc.) for delavirdine. |
| PGx | Witvrouw_2000 | not_relevant | 0 | 0 | The paper studies in vitro viral replication and drug resistance mechanisms, not pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | The study evaluates in-vitro antiviral susceptibility (EC50) of HIV-2/SIV to delavirdine, not pharmacokinetic parameters. |
| PGx | Witvrouw_2004 | not_relevant | 0 | 0 | The paper reports intrinsic viral susceptibility to delavirdine in HIV-2/SIV strains, not the effect of a human gene variant on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Yang_2013 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro antiviral activity of novel NNRTIs, with delavirdine used only as a comparator agent. |
| PGx | Yang_2013 | not_relevant | 0 | 0 | The paper reports the synthesis and antiviral activity of novel NNRTIs, comparing them to delavirdine, but does not investigate pharmacogenomic effects on delavirdine's pharmacokinetics or pharmacodynamics. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | The study focuses on the design and in-vitro anti-HIV activity of new compounds, using delavirdine only as a control agent for potency comparison without reporting any pharmacokinetic parameters. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The paper reports the in vitro anti-HIV activity of novel NNRTI derivatives against HIV-1 variants, not human pharmacogenomic effects on the PK or PD of delavirdine. |
| popPK | Zhan_2009 | irrelevant | 0 | 0 | The paper reports in vitro biological activity (inhibitory potency) of novel HIV-1 RT inhibitors compared to delavirdine, containing no pharmacokinetic parameters. |
| PGx | Zhan_2009 | not_relevant | 0 | 0 | The paper describes the synthesis of new HIV-1 RTIs and compares their in vitro potency to delavirdine, but does not report any pharmacogenomic effects on delavirdine's PK or PD parameters. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro biological evaluation (EC50) of novel HIV-1 inhibitors, with delavirdine used only as a comparator, and reports no pharmacokinetic parameters. |
| PGx | Zhang_2011 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro biological evaluation of novel HIV-1 inhibitors, comparing their activity to delavirdine, but does not investigate any pharmacogenomic effects on the PK or PD of delavirdine. |
| popPK | Zhou_2004 | irrelevant | 0 | 0 | The paper is a review on CYP3A4 mechanism-based inhibitors that mentions delavirdine as an example but does not report quantitative PK parameters for delavirdine. |
| PGx | Zhou_2004 | not_relevant | 0 | 0 | The paper reviews CYP3A4 mechanism-based inhibition and does not report on pharmacogenomic variants affecting delavirdine's PK/PD. |
| popPK | Zhou_2005 | irrelevant | 0 | 0 | The paper is a review of CYP3A4 mechanism-based inhibition where delavirdine is mentioned only as an example of an inhibitor, with no PK parameters provided. |
| PGx | Zhou_2005 | not_relevant | 1 | 0 | The paper mentions delavirdine as a drug that inhibits CYP3A4, but it does not report how genetic variants affect the pharmacokinetic or pharmacodynamic parameters of delavirdine itself. |
| popPK | Zhou_2007 | irrelevant | 0 | 0 | The paper is a review discussing mechanism-based inhibition of CYP3A4 and mentions delavirdine only as an example of an inhibitor, without reporting any quantitative pharmacokinetic parameters for delavirdine. |
| PGx | Zhou_2007 | not_relevant | 0 | 0 | The paper discusses mechanism-based inhibition of CYP3A4 by delavirdine as a drug-drug interaction, not the effect of a gene variant on delavirdine's PK/PD. |
| popPK | Zhou_2008 | irrelevant | 0 | 0 | The paper is a general review of CYP3A4 drug interactions and does not report any quantitative pharmacokinetic disposition parameters for delavirdine. |
| PGx | Zhou_2008 | not_relevant | 0 | 0 | The paper discusses CYP3A4 drug-drug interactions (inhibition/induction) and mentions delavirdine only as a CYP3A4 inhibitor, not as a drug whose PK/PD is altered by a genetic variant. |
| popPK | von_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 inhibition, not a pharmacokinetic study reporting quantitative disposition parameters for delavirdine. |
| PGx | von_2001 | not_relevant | 0 | 0 | The paper reports in vitro drug-drug interactions (CYP inhibition) involving delavirdine but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdelavirdine%5D&body=Drug%3A%20delavirdine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_delavirdine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 19:15 UTC</sub>
