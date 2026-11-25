<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;boceprevir&quot;}]"></div>

# boceprevir

- **generic name:** boceprevir
- **ATC codes:** `J05AP03`
- **DrugBank:** [DB08873](https://go.drugbank.com/drugs/DB08873) · **PubChem:** [CID 10324367](https://pubchem.ncbi.nlm.nih.gov/compound/10324367)
- **molar mass:** 519.6767 g/mol (C27H45N5O5) — DrugBank
- **groups:** approved, withdrawn

## About

Boceprevir is an antiviral protease inhibitor indicated for chronic hepatitis C and liver cirrhosis. The drug is administered orally in capsule form, with subcutaneous routes also listed for use. Boceprevir has been withdrawn from the market in the European Union because newer therapies offer superior treatment outcomes.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q410551](https://www.wikidata.org/wiki/Q410551), [Wikipedia](https://en.wikipedia.org/wiki/Boceprevir?oldid=1330664316) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.00).">in vitro</span> | [Gammeltoft_2021_percent_residual_infectivity](drugs/drug_boceprevir/pd_Gammeltoft_2021_percent_residual_infectivity.md) | percent residual infectivity ← boceprevir · direct sigmoid Emax (Hill) effect | — | Gammeltoft KA et al., Hepatitis C Virus Protease Inhibitors S…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02680-20](https://doi.org/10.1128/AAC.02680-20) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hunyady_2015_2_SVR](drugs/drug_boceprevir/pd_Hunyady_2015_2_SVR.md) | Sustained viral response ← boceprevir · stimulation effect | — | Hunyady B et al., [Not Available], Orvosi hetilap 156 Suppl (2015) | [10.1556/OH.2015.30107](https://doi.org/10.1556/OH.2015.30107) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Laouénan_2014_VL](drugs/drug_boceprevir/pd_Laou_nan_2014_VL.md) | HCV RNA viral load (viral production blocking effectiveness) ← boceprevir · direct Emax (saturable) effect | — | Laouénan C et al., Using pharmacokinetic and viral kinetic…, Antimicrobial agents and ch… (2014) | [10.1128/AAC.02611-14](https://doi.org/10.1128/AAC.02611-14) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Alugubelli_2022_Sub3_hydrolysis_rate](drugs/drug_boceprevir/pd_Alugubelli_2022_Sub3_hydrolysis_rate.md) | fluorescent product formation biomarker turnover ← boceprevir | — | Alugubelli YR et al., A systematic exploration of boceprevir-…, European journal of medicin… (2022) | [10.1016/j.ejmech.2022.114596](https://doi.org/10.1016/j.ejmech.2022.114596) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:51 | 0:01 | 0/0/0 | 4/0/0 | 0/0/0 | 202/62 | einfracz / qwen3.8-27b | 30 | 4/22 | 29/1 | 0 |

## Coverage

- **PubMed hits:** 391 matched, 130 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aloia_2015 | irrelevant | 0 | 0 | The study reports in-vitro virological efficacy (EC50) and resistance mutations, not pharmacokinetic disposition parameters (CL, V, ka). |
| PGx | Aloia_2015 | not_relevant | 0 | 0 | The study investigates viral resistance mutations in a cell culture model, not human pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Alugubelli_2022 | irrelevant | 0 | 0 | The paper is an in-vitro structural and mechanistic study of boceprevir-based MPro inhibitors, reporting IC50 and crystallographic data but no quantitative pharmacokinetic disposition parameters (CL, V, t1/2, etc.) for boceprevir. |
| PGx | Alugubelli_2022 | not_relevant | 0 | 0 | The paper reports in vitro and in vivo antiviral potency of boceprevir analogs against SARS-CoV-2, not the effect of genetic variants on the PK or PD of the drug itself. |
| popPK | Ascione_2012 | irrelevant | 0 | 0 | The paper is a perspective review discussing clinical efficacy and general pharmacology without reporting specific quantitative population pharmacokinetic parameters (CL, V, etc.) for boceprevir. |
| PGx | Ascione_2012 | not_relevant | 0 | 0 | The paper is a review that discusses the general pharmacokinetics of boceprevir and CYP3A4/5 drug interactions, but it does not report pharmacogenomic findings based on gene variants or genotypes. |
| popPK | Back_2013 | irrelevant | 0 | 0 | The paper is a review discussing the importance of drug-drug interactions in the DAA era without reporting original quantitative PK parameters or specific values for boceprevir. |
| PGx | Back_2013 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions with boceprevir via CYP3A4, but does not report pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Balaraju_2015 | irrelevant | 0 | 0 | The paper focuses on the synthesis and anti-HCV activity of new pyranone carboxamide analogs, mentioning boceprevir only as a current treatment comparator, with no pharmacokinetic data provided. |
| PGx | Balaraju_2015 | not_relevant | 0 | 0 | The paper focuses on the synthesis of new drug candidates and their anti-HCV activity, without reporting any pharmacogenomic effects on boceprevir's PK or PD parameters. |
| popPK | Barritt_2012 | irrelevant | 0 | 0 | The paper is a review of triple therapy efficacy and management guidelines, containing no quantitative pharmacokinetic parameters for boceprevir. |
| PGx | Barritt_2012 | not_relevant | 0 | 0 | The paper is a general clinical review discussing treatment strategies and adherence for hepatitis C and does not report any pharmacogenomic associations with boceprevir. |
| popPK | Bepari_2021 | irrelevant | 0 | 0 | In silico virtual screening study for SARS-CoV-2 3CL-PRO inhibitors; boceprevir is not the subject and no measured PK parameters for it appear. |
| popPK | Berman_2009 | irrelevant | 1 | 0 | The paper is a review focusing on mechanism of action and resistance, with no quantitative pharmacokinetic parameters reported for boceprevir. |
| PGx | Berman_2009 | not_relevant | 0 | 0 | The paper is a general review of boceprevir's mechanism of action and viral resistance, with no mention of pharmacogenomic variants affecting PK or PD. |
| PGx | Bernabucci_2014 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on boceprevir PK/PD parameters are reported; only clinical predictors of SVR. |
| popPK | Beuschlein_2024 | irrelevant | 0 | 0 | This is a clinical guideline on glucocorticoid-induced adrenal insufficiency with no boceprevir PK parameters; no quantitative disposition values for boceprevir appear. |
| popPK | Bondada_2013 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study reporting synthesis and in vitro structure-activity relationships of boceprevir analogs, not a pharmacokinetic study. |
| PGx | Bondada_2013 | not_relevant | 0 | 0 | The paper reports the synthesis of analogs and their in vitro activity (EC50) against a target, but it does not report on how human gene variants affect the pharmacokinetics or pharmacodynamics of boceprevir. |
| popPK | Burger_2013 | irrelevant | 2 | 0 | The paper is a review of clinical management and drug-drug interactions, and it does not contain quantitative pharmacokinetic parameter values for boceprevir. |
| PGx | Burger_2013 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and CYP3A4 metabolism, but does not report pharmacogenomic effects of specific gene variants on boceprevir PK/PD parameters. |
| popPK | Canini_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and viral kinetics of danoprevir, not boceprevir (which is only mentioned as a comparator/context). |
| PGx | Canini_2015 | not_relevant | 0 | 0 | The paper reports on danoprevir (not boceprevir) and does not report pharmacogenomic effects (gene variants) on its PK/PD parameters. |
| popPK | Canini_2016 | irrelevant | 0 | 0 | The study focuses on viral kinetics for danoprevir and mericitabine, not the pharmacokinetics of boceprevir. |
| PGx | Canini_2016 | not_relevant | 0 | 0 | The paper describes pharmacokinetic/dynamic modelling of HCV viral kinetics for a combination of danoprevir and mericitabine, but does not mention boceprevir or any pharmacogenomic effects. |
| popPK | Canini_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of setrobuvir, not boceprevir. |
| PGx | Canini_2018 | not_relevant | 0 | 0 | The paper investigates viral genetic subtypes (HCV 1a/1b), not human patient genotypes (pharmacogenomics), and does not analyze boceprevir. |
| popPK | Chu_2013 | irrelevant | 0 | 0 | The study reports in vitro enzyme and transporter inhibition/transport data, not in vivo pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Chu_2013 | not_relevant | 0 | 0 | The paper focuses on in vitro drug-drug interaction potential of boceprevir, specifically regarding drug-metabolizing enzymes and transporters, and does not investigate the effect of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Coilly_2015 | irrelevant | 0 | 0 | The paper is a narrative review discussing clinical management and efficacy outcomes (SVR rates) in transplant patients, containing no quantitative pharmacokinetic parameters or PK models for boceprevir. |
| PGx | Coilly_2015 | not_relevant | 0 | 0 | The provided text is a general narrative about HCV treatment and boceprevir in transplant patients; it does not report specific pharmacogenomic variants or genotype-dependent effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Coppola_2015 | not_relevant | 0 | 0 | Review of HCV treatment in HIV coinfection with no pharmacogenomic PK/PD data for boceprevir. |
| PGx | Cusato_2015 | not_relevant | 0 | 0 | The paper reports pharmacogenetic effects (CYP24A1 SNP) on telaprevir concentrations, not on boceprevir. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | This is a FAERS pharmacovigilance study of antipsychotic sedation; boceprevir is only mentioned as a CYP3A4 inhibitor, with no PK parameters for it. |
| popPK | Faisal_2014 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of hepatitis C treatment reporting virological response rates and side effects, with no pharmacokinetic parameter values for boceprevir. |
| PGx | Faisal_2014 | not_relevant | 0 | 0 | The paper reports clinical outcomes (SVR) and drug-drug interactions (dose adjustments for immunosuppressants) but contains no information on pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of boceprevir. |
| PGx | Farhat_2022 | not_relevant | 0 | 0 | In silico docking study of apigenin analogues vs SARS-CoV-2 Mpro; no gene variant effect on boceprevir PK/PD parameters. |
| popPK | Ferenci_2012 | irrelevant | 0 | 0 | The paper is a clinical review discussing virologic response guidelines (e.g., SVR rates, treatment duration) and does not report any pharmacokinetic parameters for boceprevir. |
| PGx | Ferenci_2012 | not_relevant | 2 | 0 | The paper discusses IL28B polymorphism's effect on response to peginterferon/ribavirin therapy; boceprevir is only mentioned as a timeline for virologic response criteria, with no pharmacogenomic impact on its PK/PD reported. |
| popPK | Foote_2011 | irrelevant | 2 | 0 | This is a narrative review that describes the pharmacokinetic profile qualitatively (linear, rapidly absorbed) but does not provide quantitative disposition parameters like clearance, volume, or half-life. |
| PGx | Foote_2011 | not_relevant | 0 | 0 | The paper is a general review of the pharmacology and clinical efficacy of boceprevir and does not report pharmacogenomic effects of gene variants on its PK or PD parameters. |
| popPK | Gallay_2012 | irrelevant | 0 | 0 | The paper is a review on cyclophilin inhibitors as anti-HCV agents and does not report population pharmacokinetic parameters for boceprevir. |
| PGx | Gallay_2012 | not_relevant | 0 | 0 | The paper discusses the clinical use of boceprevir (Incivek) but focuses on treatment response and HCV genotypes, not on pharmacogenomics affecting its PK/PD parameters. |
| popPK | Gammeltoft_2021 | irrelevant | 0 | 0 | The paper is an in-vitro virology study evaluating the antiviral efficacy (EC50, CC50) of boceprevir against SARS-CoV-2, and does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Gammeltoft_2021 | not_relevant | 0 | 0 | The study evaluates the in vitro antiviral efficacy of HCV protease inhibitors against SARS-CoV-2 and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Garnock-Jones_2012 | irrelevant | 2 | 0 | The paper is a narrative review focusing on clinical efficacy and tolerability, and the provided evidence does not contain specific quantitative population-pharmacokinetic parameters (e.g., CL, V, t1/2) for boceprevir. |
| PGx | Garnock-Jones_2012 | not_relevant | 0 | 0 | The paper reviews the clinical efficacy and tolerability of boceprevir but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Gentile_2014 | irrelevant | 0 | 0 | The paper is a review of MK-5172 (simeprevir), not boceprevir, and contains no quantitative PK parameters for boceprevir. |
| PGx | Gentile_2014 | not_relevant | 0 | 0 | The text discusses the pharmacokinetics and efficacy of MK-5172 (parbuprevir) and does not report pharmacogenomic effects on the PK/PD parameters of boceprevir. |
| popPK | Gentile_2014_2 | irrelevant | 0 | 0 | The paper is a review of ABT-450 (paritaprevir), mentioning boceprevir only as a current comparator therapy without reporting any specific pharmacokinetic parameters for boceprevir. |
| PGx | Gentile_2014_2 | not_relevant | 0 | 0 | The paper reviews the pharmacokinetics and pharmacodynamics of ABT-450 (a drug different from boceprevir) and mentions boceprevir only as a comparator, without reporting any gene-variant-based effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Gentile_2014_3 | irrelevant | 0 | 0 | The paper is a review focused on the pharmacokinetics of dasabuvir, mentioning boceprevir only as a previously launched comparator agent without providing original PK parameters for boceprevir. |
| PGx | Gentile_2014_3 | not_relevant | 0 | 0 | The paper is a review of dasabuvir and does not report pharmacogenomic effects of gene variants on the PK/PD of boceprevir. |
| popPK | Ghahremanpour_2020 | irrelevant | 0 | 0 | The study reports in-vitro enzymatic inhibition (IC50) of SARS-CoV-2 protease by boceprevir, not pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Ghahremanpour_2020 | not_relevant | 0 | 0 | The paper reports the inhibitory activity (IC50) of boceprevir against SARS-CoV-2 Mpro, but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | González-Colominas_2015 | irrelevant | 0 | 0 | The study focuses on drug-drug interaction prevalence and adherence in HCV patients, reporting no quantitative pharmacokinetic parameters for boceprevir. |
| PGx | González-Colominas_2015 | not_relevant | 0 | 0 | The paper reports on drug-drug interactions (DDIs) and adherence, not pharmacogenomic effects of genetic variants on PK/PD parameters. |
| PGx | González-Grande_2016 | not_relevant | 0 | 0 | Review of HCV treatment landscape with no pharmacogenomic data on boceprevir PK/PD parameters. |
| popPK | Gordon_2015 | irrelevant | 0 | 0 | The study is a real-world safety and efficacy analysis reporting adverse events and virologic response, containing no pharmacokinetic parameters. |
| PGx | Gordon_2015 | not_relevant | 0 | 0 | The paper reports real-world safety and clinical outcomes (adverse events, SVR) but does not analyze pharmacokinetic or pharmacodynamic parameters in the context of pharmacogenomic variants. |
| popPK | Goyzueta-Mamani_2021 | irrelevant | 0 | 0 | In silico docking study of plant metabolites against SARS-CoV-2 targets; no boceprevir PK parameters reported. |
| popPK | Guedj_2011 | irrelevant | 0 | 0 | The paper is a viral kinetic modeling study for telaprevir and does not report PK parameters for boceprevir. |
| PGx | Guedj_2011 | not_relevant | 0 | 0 | The paper discusses viral kinetics for telaprevir, not boceprevir, and does not report any pharmacogenomic effects. |
| popPK | Guedj_2012 | irrelevant | 0 | 0 | The study focuses on viral kinetic modeling of silibinin's anti-HCV activity and does not report pharmacokinetic parameters (CL, V, etc.) for boceprevir. |
| PGx | Guedj_2012 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of silibinin (not boceprevir) on HCV viral kinetics and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Guedj_2012_2 | irrelevant | 0 | 0 | The study investigates the viral kinetics of mericitabine, not the pharmacokinetics of boceprevir. |
| PGx | Guedj_2012_2 | not_relevant | 0 | 0 | The paper studies the viral kinetics of mericitabine, not boceprevir, and does not report pharmacogenomic effects. |
| popPK | Hayes_2015 | irrelevant | 0 | 0 | The paper is a review of HCV treatments and does not report any quantitative pharmacokinetic parameters for boceprevir. |
| PGx | Hayes_2015 | not_relevant | 0 | 0 | The text is a general review of HCV treatments and does not discuss pharmacogenomics or specific PK/PD effects of gene variants on boceprevir. |
| popPK | He_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of chlorcyclizine, while boceprevir is only mentioned as a comparator drug for in vitro antiviral synergy. |
| PGx | He_2015 | not_relevant | 0 | 0 | The paper describes the antiviral activity of chlorcyclizine against HCV and its synergy with other drugs, but does not investigate the pharmacogenetics or pharmacogenomics of boceprevir or any other specific drug. |
| popPK | Howe_2014 | irrelevant | 0 | 0 | The paper is a clinical analysis of treatment efficacy and resistance variants, reporting no pharmacokinetic parameters for boceprevir. |
| PGx | Howe_2014 | not_relevant | 0 | 0 | The paper examines HCV viral genetic variants (NS3/4A) and host IL28B genotype effects on efficacy (SVR), not pharmacogenomic effects on the drug's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hu_2018 | irrelevant | 0 | 0 | This is a machine-learning study of digoxin dosing appropriateness; boceprevir is not mentioned and no PK parameters for it appear. |
| PGx | Hullegie_2016 | not_relevant | 0 | 0 | No pharmacogenomic analysis or gene variant effects on boceprevir PK/PD parameters are reported. |
| PGx | Hunyady_2015 | not_relevant | 0 | 0 | Hungarian HCV treatment policy overview; no pharmacogenomic effects on boceprevir PK/PD parameters reported. |
| popPK | Hunyady_2015_2 | irrelevant | 0 | 0 | The paper is a review of hepatitis C treatment policies and socioeconomic factors in Hungary, containing no pharmacokinetic data or parameters for boceprevir. |
| PGx | Hunyady_2015_2 | not_relevant | 0 | 0 | The text describes the epidemiology and healthcare policy for Hepatitis C treatment in Hungary, mentioning boceprevir's efficacy, but does not report any pharmacogenomic data or gene-variant effects on PK/PD parameters. |
| popPK | Ilyas_2014 | irrelevant | 0 | 0 | This is a review article discussing treatment strategies and mechanisms for hepatitis C, and it does not report any quantitative pharmacokinetic parameters for boceprevir. |
| PGx | Ilyas_2014 | not_relevant | 0 | 0 | The text is a general overview of hepatitis C therapies and mentions boceprevir only in a historical context; it contains no pharmacogenomic data or PK/PD parameters. |
| popPK | Karageorgopoulos_2014 | irrelevant | 2 | 0 | This is a review article summarizing drug-drug interactions without providing original quantitative pharmacokinetic parameter values for boceprevir. |
| PGx | Karageorgopoulos_2014 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) between antiretrovirals and HCV drugs, not pharmacogenomic effects (gene variants/genotypes). |
| PGx | Kim_2014 | not_relevant | 0 | 0 | Review of HCV DAAs; no pharmacogenomic effect on boceprevir PK/PD parameters reported. |
| popPK | Lakhera_2022 | irrelevant | 0 | 0 | The paper is an in-silico molecular docking study of feverfew phytoconstituents against SARS-CoV-2 proteases, with no pharmacokinetic data for boceprevir. |
| PGx | Lakhera_2022 | not_relevant | 0 | 0 | The paper studies the antiviral properties of Parthenolide against SARS-CoV-2 and contains no mention of boceprevir or pharmacogenomics. |
| popPK | Lam_2012 | irrelevant | 0 | 0 | This is a clinical review of efficacy and safety without quantitative population pharmacokinetic parameters or compartmental model values. |
| PGx | Lam_2012 | not_relevant | 0 | 0 | The paper is a general review of boceprevir's pharmacology, efficacy, and safety, and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Laouénan_2014 | irrelevant | 2 | 3 | This is a PK-viral kinetic modeling study of HCV response; boceprevir PK is only a constant trough-concentration (Css) model with no disposition parameters (CL, V, ka, half-life with volume), and the reported values are viral kinetic (c, δ, EC50) rather than drug disposition parameters. |
| popPK | Laouénan_2015 | irrelevant | 0 | 0 | The study focuses on the PK/PD of ribavirin and pegylated interferon to model hemoglobin and platelet changes; boceprevir is only a co-administered drug in the cohort, and no pharmacokinetic parameters (CL, V, etc.) for boceprevir itself are reported. |
| PGx | Laouénan_2015 | not_relevant | 0 | 0 | The paper focuses on PK/PD modeling for Ribavirin and Peg-IFN to manage anemia and thrombocytopenia, and does not report any pharmacogenomic effects or genetic variants affecting boceprevir pharmacokinetics or pharmacodynamics. |
| popPK | Larrat_2015 | irrelevant | 0 | 0 | The paper investigates the prevalence of genetic resistance variants and clinical treatment outcomes, providing no quantitative pharmacokinetic or disposition parameters for boceprevir. |
| PGx | Larrat_2015 | not_relevant | 2 | 10 | The paper reports HCV viral resistance-associated variants, not human pharmacogenomic variants affecting drug PK/PD. |
| popPK | Lee_2015 | irrelevant | 0 | 0 | The paper reports PK parameters for a cholesterol-conjugated RNA aptamer against HCV NS5B, not for boceprevir, which is only mentioned as background. |
| popPK | Lens_2014 | irrelevant | 0 | 0 | The paper is a review of hepatitis C treatment options and does not report any pharmacokinetic parameters for boceprevir. |
| PGx | Lens_2014 | not_relevant | 0 | 0 | The text is a general review of hepatitis C treatment regimens and adverse effects, containing no discussion of pharmacogenomics, gene variants, or their influence on PK/PD parameters. |
| popPK | Lenz_2010 | irrelevant | 0 | 0 | The paper describes an in vitro resistance profile for TMC435, with boceprevir mentioned only in the context of specific mutations observed after its exposure, containing no pharmacokinetic parameters. |
| PGx | Lenz_2010 | not_relevant | 0 | 0 | The paper describes viral resistance mutations to TMC435, not human pharmacogenomic effects on boceprevir. |
| PGx | Lim_2015 | not_relevant | 0 | 0 | Paper reports HCV RNA response-guided therapy rules for boceprevir, with no gene variant/genotype effects on PK or PD parameters. |
| PGx | Loo_2019 | not_relevant | 0 | 0 | Boceprevir only mentioned as prior failed treatment; no pharmacogenomic effect on PK/PD parameters reported. |
| popPK | Loustaud-Ratti_2015 | irrelevant | 0 | 0 | The study reports eGFR changes (renal function) and does not provide any pharmacokinetic parameters (CL, V, ka, etc.) for boceprevir. |
| PGx | Loustaud-Ratti_2015 | not_relevant | 0 | 0 | The study analyzes eGFR changes (renal function) associated with telaprevir and boceprevir but does not report any pharmacogenomic effects or gene variants. |
| popPK | Ma_2020 | irrelevant | 0 | 0 | The study reports in vitro enzymatic inhibition constants (IC50, KI) of boceprevir against SARS-CoV-2 protease, not pharmacokinetic disposition parameters. |
| PGx | Ma_2020 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity against SARS-CoV-2 and does not report any pharmacogenomic effects on the PK/PD parameters of boceprevir. |
| popPK | Maasoumy_2016 | irrelevant | 0 | 0 | This is a review article discussing diagnostics and treatment strategies for Hepatitis C, with no pharmacokinetic parameters reported for boceprevir. |
| PGx | Maasoumy_2016 | not_relevant | 0 | 0 | The paper discusses response-guided therapy and HCV RNA monitoring, not pharmacogenomic variants affecting PK/PD parameters of boceprevir. |
| popPK | Mauss_2013 | irrelevant | 0 | 0 | This is a qualitative review of drug-drug interactions and does not contain original quantitative pharmacokinetic parameters or compartmental model values for boceprevir. |
| PGx | Mauss_2013 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions and CYP3A4 pharmacokinetics, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Muir_2011 | irrelevant | 0 | 0 | The paper is a review of telaprevir and does not report any pharmacokinetic parameters for boceprevir. |
| PGx | Muir_2011 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics and resistance of Telaprevir, not pharmacogenomic effects on Boceprevir. |
| popPK | Narayanan_2014 | irrelevant | 0 | 0 | The study evaluates the adverse event profile and efficacy of boceprevir as a comparator, containing no pharmacokinetic disposition parameters or model estimates. |
| PGx | Narayanan_2014 | not_relevant | 0 | 0 | The paper compares adverse event profiles of two drug regimens and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Okella_2022 | irrelevant | 0 | 0 | This is an in-silico ADMET/docking study of antimicrobial peptides from catfish, not a PK study of boceprevir; no boceprevir disposition parameters are reported. |
| PGx | Pan_2012 | not_relevant | 0 | 0 | Review abstract with no pharmacogenomic PK/PD data for boceprevir. |
| popPK | Pathak_2017 | irrelevant | 0 | 0 | This is a pharmacophore/docking drug-repurposing study for DENV NS3 protease; boceprevir is only a screened candidate with in-vitro EC50 data, no PK parameters. |
| popPK | Pathak_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study on SARS-CoV-2 protease inhibition and does not report pharmacokinetic parameters for boceprevir. |
| PGx | Pathak_2021 | not_relevant | 0 | 0 | The paper investigates drug repurposing for SARS-CoV-2 and does not contain any pharmacogenomic data or genetic variants affecting boceprevir's pharmacokinetics or pharmacodynamics. |
| popPK | Rehman_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic and anti-HCV activity study where boceprevir is used only as a docking standard/comparator, with no pharmacokinetic parameters reported. |
| PGx | Rehman_2018 | not_relevant | 0 | 0 | The paper evaluates the antiviral activity of Nymphaea alba extracts against HCV and uses boceprevir only as a reference for molecular docking, reporting no pharmacogenomic effects on its PK or PD parameters. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The paper is a review/tutorial on slow reversible binding PK/PD models using candesartan and other drugs as examples; it does not contain pharmacokinetic parameters for boceprevir. |
| PGx | Ren_2022 | not_relevant | 0 | 0 | The paper is a general modeling tutorial and review concerning slow reversible binding kinetics, with no mention of boceprevir or any gene variant/genotype effects. |
| popPK | Risner_2020 | irrelevant | 0 | 0 | In vitro SARS-CoV-2 drug screening study; boceprevir is not studied and no PK disposition parameters for it appear. |
| popPK | Rizza_2011 | irrelevant | 0 | 0 | The text is a general overview/review that mentions favorable pharmacokinetic profiles but does not report any quantitative disposition parameters (CL, V, half-life, etc.) for boceprevir. |
| PGx | Rizza_2011 | not_relevant | 0 | 0 | The text provides a general overview of boceprevir's indication, metabolism, and clinical efficacy, but contains no mention of gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Rotella_2013 | irrelevant | 1 | 0 | This is a narrative review of drug discovery and clinical development that does not report quantitative pharmacokinetic parameter values (such as clearance, volume, or half-life) for boceprevir. |
| PGx | Rotella_2013 | not_relevant | 0 | 0 | The text is a general review of boceprevir's discovery and development, focusing on its mechanism of action and clinical efficacy, without reporting any specific pharmacogenomic effects on PK or PD parameters. |
| popPK | Saab_2015 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study for hepatitis C treatment in liver transplant recipients, reporting viral load and safety outcomes, but it contains no pharmacokinetic parameters (CL, V, t1/2, etc.) for boceprevir. |
| PGx | Saab_2015 | not_relevant | 0 | 0 | The paper reports clinical outcomes and safety in liver transplant recipients but does not analyze the impact of specific gene variants or genotypes on boceprevir's pharmacokinetics or pharmacodynamics. |
| popPK | Samrat_2022 | irrelevant | 0 | 0 | The paper focuses on in vitro viral protease inhibition and molecular docking; boceprevir is used only as a positive control for enzymatic activity, not as a subject of pharmacokinetic analysis. |
| PGx | Samrat_2022 | not_relevant | 0 | 0 | The paper studies allosteric inhibitors of SARS-CoV-2 3CLpro and mentions boceprevir only as a reference compound, with no data on pharmacogenomic effects on its PK or PD. |
| popPK | Serfaty_2014 | irrelevant | 0 | 0 | The paper is a clinical review discussing efficacy and treatment strategies, containing no pharmacokinetic parameters. |
| PGx | Serfaty_2014 | not_relevant | 0 | 0 | The text discusses clinical treatment strategies and efficacy outcomes (virological response) but does not report any pharmacokinetic or pharmacodynamic changes driven by specific gene variants or genotypes. |
| popPK | Shankar_2013 | irrelevant | 4 | 0 | The paper is a review summarizing pharmacokinetic properties and clinical trials, but the provided evidence contains no quantitative disposition parameters (CL, V, ka, etc.) or specific numeric values. |
| PGx | Shankar_2013 | not_relevant | 0 | 0 | The paper reviews general pharmacokinetics and clinical trials of boceprevir without reporting any pharmacogenomic effects (gene variants influencing PK/PD). |
| popPK | Sheridan_2013 | irrelevant | 0 | 0 | This is a review article focusing on the clinical association between lipids and treatment response to HCV therapy; it contains no quantitative pharmacokinetic parameters for boceprevir. |
| PGx | Sheridan_2013 | not_relevant | 0 | 0 | The paper is a review of HCV and lipid metabolism; it does not report pharmacogenomic effects (gene variants) on boceprevir PK or PD parameters. |
| popPK | Shivarov_2026 | irrelevant | 0 | 0 | FAERS pharmacovigilance study of ibrutinib co-exposures; no boceprevir PK parameters reported. |
| popPK | Silva_2013 | irrelevant | 2 | 0 | The paper reports antiviral potency (Ki, EC50, IC50) and clinical virological response (HCV RNA decrease) rather than quantitative pharmacokinetic disposition parameters (CL, V, Q, ka). |
| PGx | Silva_2013 | not_relevant | 0 | 0 | The paper evaluates the antiviral activity of boceprevir against HCV genotypes 2/3 (pathogen characteristics) and reports clinical efficacy (HCV RNA reduction) and in vitro potency, but does not report a pharmacogenomic effect (host gene variant) on the drug's PK or PD parameters. |
| PGx | Sukeepaisarnjaroen_2015 | not_relevant | 3 | 5 | IL28B genotype is associated with SVR (virologic response), not with a PK/PD parameter of boceprevir itself. |
| popPK | Sulkowski_2013 | irrelevant | 0 | 0 | The paper is a review of HCV therapy in HIV-infected patients and discusses drug interactions and efficacy, but it does not report quantitative pharmacokinetic parameters for boceprevir. |
| PGx | Sulkowski_2013 | not_relevant | 0 | 0 | The text is an introduction discussing the clinical context and potential drug interactions of boceprevir in HIV/HCV co-infection, but it does not report any pharmacogenomic studies or gene-variant-specific effects on PK/PD parameters. |
| popPK | Sultanik_2015 | irrelevant | 0 | 0 | The paper investigates immune biomarkers (phospho-STAT1) for treatment response and does not report any pharmacokinetic parameters for boceprevir. |
| PGx | Sultanik_2015 | not_relevant | 2 | 5 | The paper investigates IFN-alpha sensitivity (phospho-STAT1) as a biomarker for treatment response, not the impact of a gene variant on the pharmacokinetic or pharmacodynamic parameters of boceprevir itself. |
| popPK | Susser_2009 | irrelevant | 0 | 0 | The study focuses on viral resistance mutations and phenotypic IC50 values, not the pharmacokinetic disposition parameters (CL, V, etc.) of boceprevir. |
| PGx | Susser_2009 | not_relevant | 0 | 0 | The paper describes viral mutations (resistance to boceprevir) in HCV, not human host gene variants affecting the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Takehara_2014 | irrelevant | 0 | 0 | The paper is a review of simeprevir and only mentions boceprevir as a first-generation comparator without providing any pharmacokinetic parameter values for it. |
| PGx | Takehara_2014 | not_relevant | 0 | 0 | The paper discusses simeprevir for hepatitis C and does not report any pharmacogenomic effects on the PK or PD of boceprevir. |
| popPK | Talavera_2014 | irrelevant | 1 | 0 | This is a review article focusing on drug-drug interaction management for boceprevir and telaprevir, and it does not report original quantitative pharmacokinetic parameter values (such as clearance or volume) for the subject drug. |
| PGx | Talavera_2014 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions involving CYP3A4 and P-gp, not pharmacogenomic variants affecting boceprevir PK/PD. |
| popPK | Tan_2023 | irrelevant | 0 | 0 | This is an in silico QSAR/docking study of USP7 inhibitors; boceprevir is only mentioned as an example of a covalent drug, with no PK parameters for it. |
| popPK | Trembling_2012 | irrelevant | 2 | 0 | The paper is a general review of boceprevir's pharmacology and efficacy without reporting specific quantitative population-PK parameter values in the provided text. |
| PGx | Trembling_2012 | not_relevant | 0 | 0 | The paper is a general review of boceprevir's pharmacology and clinical efficacy, focusing on HCV genotype response rates rather than human genetic variants (pharmacogenomics) affecting PK or PD parameters. |
| popPK | Upton_2014 | irrelevant | 0 | 0 | The paper is a methodological review on population pharmacodynamic modeling and mentions boceprevir only as an example of efficacy modeling, without reporting any quantitative pharmacokinetic parameters (CL, V, etc.) for boceprevir. |
| PGx | Upton_2014 | not_relevant | 0 | 0 | The paper is a general review of pharmacodynamic modeling methods and does not report any pharmacogenomic effects on PK or PD parameters for boceprevir or any other specific drug. |
| popPK | Venkatraman_2009 | irrelevant | 1 | 0 | The paper focuses on structure-activity relationships of HCV NS3 inhibitors, mentioning boceprevir only as a reference compound without providing its specific quantitative pharmacokinetic parameter values. |
| PGx | Venkatraman_2009 | not_relevant | 0 | 0 | The paper describes the structure-activity relationship and drug discovery of HCV NS3 protease inhibitors, comparing potency and general PK, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Vinaixa_2013 | irrelevant | 0 | 0 | The text is a clinical review discussing efficacy and safety, containing no quantitative pharmacokinetic parameters. |
| PGx | Vinaixa_2013 | not_relevant | 0 | 0 | The paper is a general review of boceprevir treatment progress and safety; it does not report pharmacogenomic effects or any PK/PD parameter analysis linked to genetic variants. |
| popPK | Welsch_2012 | irrelevant | 0 | 0 | The study focuses on viral fitness and resistance mechanisms (EC50) rather than pharmacokinetic parameters of boceprevir. |
| PGx | Welsch_2012 | not_relevant | 0 | 0 | The paper investigates resistance caused by mutations in the HCV viral genome, not human pharmacogenomic variants affecting drug metabolism or target sensitivity. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for furaprevir, not boceprevir. |
| PGx | Xu_2025 | not_relevant | 0 | 0 | The paper studies furaprevir, not boceprevir, and reports that genetic polymorphisms had no statistically significant effect on pharmacokinetics. |
| popPK | Younossi_2014 | irrelevant | 0 | 0 | The study is a health economic/cost-effectiveness analysis and does not report pharmacokinetic parameters for boceprevir. |
| PGx | Younossi_2014 | not_relevant | 0 | 0 | The paper reports a cost-effectiveness analysis of treatment regimens for chronic hepatitis C and does not discuss pharmacogenomics, gene variants, or specific PK/PD parameters of boceprevir. |
| popPK | Zappulo_2020 | irrelevant | 1 | 0 | This is a review of DCV-TRIO (daclatasvir/asunaprevir/beclabuvir), and boceprevir is only listed in the abbreviations, not the subject of the PK study. |
| PGx | Zappulo_2020 | not_relevant | 0 | 0 | The paper is a review of a different drug combination (asunaprevir + beclabuvir + daclatasvir) and does not report pharmacogenomic data for boceprevir. |
| popPK | Zitzmann_2026 | irrelevant | 0 | 0 | The paper focuses on the viral kinetics of Hepatitis C Virus (HCV) in patients treated with bemnifosbuvir and ruzasvir, and does not report pharmacokinetic parameters (CL, V, etc.) for boceprevir. |
| PGx | Zitzmann_2026 | not_relevant | 0 | 0 | The paper analyzes the pharmacodynamics of bemnifosbuvir and ruzasvir, not boceprevir, and focuses on viral kinetics rather than genetic pharmacogenomic effects. |
| popPK | deLemos_2014 | irrelevant | 0 | 0 | The paper is a narrative review of hepatitis C treatment history and does not report any quantitative pharmacokinetic parameters for boceprevir. |
| PGx | deLemos_2014 | not_relevant | 0 | 0 | The text is a general overview of HCV treatment history and does not report specific pharmacogenomic effects on boceprevir's PK or PD parameters. |
| popPK | de_2014 | irrelevant | 2 | 0 | This is a review article summarizing pharmacokinetic considerations, but no specific quantitative parameter values for boceprevir are present in the provided evidence text. |
| PGx | de_2014 | not_relevant | 0 | 0 | The paper is a review of general pharmacokinetic and pharmacodynamic properties of HCV drugs, not a study reporting specific pharmacogenomic effects of gene variants on these parameters. |
| popPK | unknown_2012 | irrelevant | 0 | 0 | The text is a clinical review focusing on efficacy and safety outcomes (sustained virological response, adverse events) and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for boceprevir. |
| PGx | unknown_2012 | not_relevant | 0 | 0 | The paper reports general clinical outcomes and PK interactions (CYP3A4 inhibition) but contains no data on specific gene variants or genotypes affecting PK/PD. |
| popPK | unknown_2012_2 | irrelevant | 0 | 0 | The paper is a clinical review of telaprevir efficacy and safety, with no quantitative pharmacokinetic parameters for boceprevir. |
| PGx | unknown_2012_2 | not_relevant | 0 | 0 | The text is a clinical review comparing the efficacy and adverse effects of boceprevir and telaprevir, and does not report any pharmacogenomic data or genotype-specific PK/PD parameters. |
| popPK | unknown_2014 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PGx | unknown_2014 | not_relevant | 0 | 0 | The document is a general clinical practice guideline for HCV management and does not contain primary pharmacogenomic data linking gene variants to PK/PD parameters of boceprevir. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bboceprevir%5D&body=Drug%3A%20boceprevir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_boceprevir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
