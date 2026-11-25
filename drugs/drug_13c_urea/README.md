<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;13C-urea&quot;}]"></div>

# 13C-urea

- **generic name:** 13C-urea
- **ATC codes:** `V04CX05`
- **DrugBank:** [DB09510](https://go.drugbank.com/drugs/DB09510) · **PubChem:** none
- **groups:** approved, investigational

## About

Carbon-13 urea is a diagnostic agent used to detect Helicobacter infections. It is administered orally in various forms, including powders, tablets, and solutions. Products containing this agent are authorised in the European Union for breath tests and Helicobacter infections.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27114855](https://www.wikidata.org/wiki/Q27114855), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Isomoto_2003_NA](drugs/drug_13c_urea/pd_Isomoto_2003_NA.md) | Eradiation status of H.pylori infection ← NA · model not identified | — | Isomoto H et al., High-dose rabeprazole-amoxicillin versu…, Alimentary pharmacology & t… (2003) | [10.1046/j.1365-2036.2003.01659.x](https://doi.org/10.1046/j.1365-2036.2003.01659.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 16:23 | 0:03 | 0/0/0 | 0/1/0 | 0/0/0 | 4,077/169 | einfracz / qwen3.8-27b | 46 | 4/36 | 46/0 | 0 |

## Coverage

- **PubMed hits:** 1405 matched, 88 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adamek_1994 | irrelevant | 0 | 0 | 13c-urea is used as a diagnostic probe in a breath test to monitor H. pylori eradication, not as the subject of a pharmacokinetic parameter study. |
| PGx | Adamek_1994 | not_relevant | 0 | 0 | The study compares routes of administration for amoxicillin/omeprazole and reports H. pylori eradication rates using a 13C-urea breath test as a diagnostic tool, but it does not investigate pharmacogenomic variants or their effects on the PK/PD of the drug. |
| popPK | Auttajaroon_2019 | irrelevant | 0 | 0 | The study uses the 13C-urea breath test as a diagnostic tool for Helicobacter pylori eradication, not as a subject for pharmacokinetic modeling. |
| PGx | Auttajaroon_2019 | not_relevant | 1 | 1 | The 13C-urea breath test is used as a diagnostic endpoint for eradication, not as a PK/PD parameter for the drug 13c_urea, and CYP2C19 genotype had no effect on cure rates. |
| popPK | Axon_1997 | irrelevant | 0 | 0 | The study uses the 13C-urea breath test as a diagnostic tool for H. pylori infection, not as a pharmacokinetic study of 13C-urea itself. |
| PGx | Axon_1997 | not_relevant | 0 | 0 | The paper investigates the efficacy of ranitidine and clarithromycin regimens for H. pylori eradication using the 13C-urea breath test as a diagnostic tool, not as a drug for which pharmacogenomic effects on PK/PD are being studied. |
| popPK | Bamgboye_2026 | irrelevant | 0 | 0 | The paper models topiramate (a 13C-labeled formulation), not 13c_urea; no 13c_urea parameters are reported. |
| popPK | Bell_2026 | irrelevant | 0 | 0 | This is a population-PK study of pirtobrutinib, a different drug; 13c_urea is not mentioned. |
| popPK | Bigard_1998 | irrelevant | 0 | 0 | The 13C-urea is used solely as a diagnostic probe in the breath test, with no pharmacokinetic parameters (CL, V, etc.) reported. |
| PGx | Bigard_1998 | not_relevant | 0 | 0 | The paper reports on the efficacy of drug dosages for H. pylori eradication using the 13C-urea breath test as a diagnostic tool, not on pharmacogenomic effects on the PK/PD of 13C-urea itself. |
| popPK | Blackman_2026 | irrelevant | 0 | 0 | This is a population-PK study of methotrexate, not 13c_urea; no 13c_urea parameters appear. |
| popPK | Cendrós_2025 | irrelevant | 0 | 0 | The paper is a population PK study of enflicoxib (and its pyrazol metabolite) in dogs, not of 13c_urea; 13c_urea does not appear as the subject drug. |
| PGx | Chang_2019 | not_relevant | 2 | 5 | 13C-urea is only a diagnostic breath-test substrate, not a therapy with PK/PD parameters; CYP2C19 genotype showed no significant effect on eradication (a PD outcome of other drugs), and no fitted pharmacogenomic effect on 13C-urea is reported. |
| PGx | Chang_2020 | not_relevant | 3 | 2 | CYP2C19 genotyping is mentioned only as a baseline characteristic; no genotype effect on 13C-urea breath test outcome or any PK/PD parameter is reported. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | This is a population-PK study of rivaroxaban, not 13c_urea; no 13c_urea parameters are reported. |
| PGx | Chotivitayatarakorn_2017 | not_relevant | 3 | 4 | CYP2C19 genotyping is reported only as eradication rates (PD outcome of therapy), not as an effect on a PK/PD parameter of 13C-urea itself. |
| popPK | Chuang_2007 | irrelevant | 0 | 0 | The study uses 13C-urea breath testing as a diagnostic method to assess H. pylori eradication success, rather than reporting pharmacokinetic parameters (CL, V, etc.) for 13C-urea itself. |
| PGx | Chuang_2007 | not_relevant | 0 | 0 | The paper investigates the effect of vitamin C on H. pylori eradication using 13C-urea breath test as an outcome measure, but does not report any pharmacogenomic effects on the PK or PD parameters of 13C-urea itself. |
| popPK | Cloud_1998 | irrelevant | 0 | 0 | The paper studies rabeprazole for acid-peptic diseases and mentions [13C]urea only as a diagnostic test for H. pylori, not as a pharmacokinetic subject. |
| PGx | Cloud_1998 | not_relevant | 0 | 0 | The paper describes clinical efficacy of rabeprazole and notes that H. pylori status (measured by 13C-urea breath test) was not affected by treatment; it does not report pharmacogenomic effects on 13C-urea PK/PD. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | This is a systematic review of tigecycline population PK; 13c_urea is not the subject drug and no 13c_urea parameters appear. |
| popPK | Darwish_2026 | irrelevant | 0 | 0 | This is a population PK study of remlifanserin, a different drug; 13c_urea is not the subject (the "urea" in its chemical name is unrelated). |
| popPK | Delchier_1996 | irrelevant | 0 | 0 | 13C-urea is used solely as a diagnostic tool for H. pylori eradication, with no pharmacokinetic parameters reported. |
| PGx | Delchier_1996 | not_relevant | 0 | 0 | The paper reports clinical eradication rates of H. pylori based on drug regimen, not a pharmacogenomic effect on PK/PD parameters. |
| popPK | Ellenrieder_1998 | irrelevant | 0 | 0 | 13C-urea is used as a diagnostic probe in a breath test for H. pylori eradication, not as the subject of a pharmacokinetic parameter study. |
| PGx | Ellenrieder_1998 | not_relevant | 0 | 0 | The study compares different drug dosages and reports eradication rates, containing no data on genetic variants affecting PK/PD. |
| popPK | Franceschi_2016 | irrelevant | 0 | 0 | The 13C-urea breath test is used as a diagnostic test for H. pylori eradication, not as a subject for pharmacokinetic parameter estimation. |
| PGx | Franceschi_2016 | not_relevant | 0 | 0 | The paper compares H. pylori eradication efficacy of different antibiotic regimens and does not report pharmacogenomic effects on the PK/PD of 13C-urea. |
| popPK | Fresquet-Molina_2025 | irrelevant | 0 | 0 | This is a systematic review of vancomycin population PK models; 13c_urea is not the subject drug and no 13c_urea parameters appear. |
| popPK | Furuta_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of omeprazole and uses [13C]urea only as a diagnostic agent for H. pylori status, not as the subject drug for PK parameter extraction. |
| PGx | Furuta_1999 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of omeprazole, not 13c_urea; the 13c_urea test was only used as a diagnostic marker for H. pylori status. |
| popPK | Furuta_2001 | irrelevant | 0 | 0 | 13C-urea is used as a diagnostic agent in a breath test, not as a subject of pharmacokinetic analysis |
| PGx | Furuta_2001 | not_relevant | 3 | 6 | The study measures treatment efficacy (cure rate) rather than a specific PK or PD parameter of 13C-urea, and 13C-urea is used as a diagnostic test, not a drug being administered. |
| popPK | Furuta_2010 | irrelevant | 0 | 0 | 13C-urea is used only as a diagnostic probe for H. pylori eradication; no pharmacokinetic parameters are reported. |
| PGx | Furuta_2010 | not_relevant | 0 | 0 | The study uses the 13C-urea breath test as a diagnostic endpoint to confirm H. pylori eradication and does not report pharmacokinetic or pharmacodynamic parameters of the 13C-urea substrate itself. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The paper concerns population PK of mycophenolate sodium/MPA in renal transplant recipients; 13c_urea is not the subject drug and no parameters for it appear. |
| popPK | Gao_2026 | irrelevant | 0 | 0 | This is a systematic review of population-PK models for meropenem in pediatric patients; 13c_urea is not the subject drug and no 13c_urea parameters appear. |
| popPK | Gasbarrini_1998 | irrelevant | 0 | 0 | The study uses the 13C-urea breath test as a diagnostic tool for H. pylori infection and does not report pharmacokinetic parameters (clearance, volume, etc.) for 13C-urea itself. |
| PGx | Gasbarrini_1998 | not_relevant | 0 | 0 | The paper reports the prevalence of H. pylori infection in diabetes patients using 13C-urea as a diagnostic test, not the pharmacokinetics or pharmacodynamics of 13C-urea as a drug influenced by genetic variants. |
| popPK | Gasbarrini_1999 | irrelevant | 0 | 0 | 13C-urea is used solely as a diagnostic agent in the breath test for Helicobacter pylori, with no pharmacokinetic parameters reported. |
| PGx | Gasbarrini_1999 | not_relevant | 0 | 0 | The study compares H. pylori eradication rates in IDDM patients vs controls, which is a clinical outcome difference associated with a disease state, not a pharmacogenomic effect of a gene variant on the PK/PD of 13C-urea (used here as a diagnostic test, not a drug). |
| popPK | Gasbarrini_2000 | irrelevant | 0 | 0 | The study uses 13C-urea as a diagnostic agent for H. pylori infection, not as the subject drug for pharmacokinetic analysis, and no PK parameters are reported. |
| PGx | Gasbarrini_2000 | not_relevant | 0 | 0 | The paper evaluates eradication efficacy of H. pylori regimens in diabetic patients using the 13C-urea breath test as a diagnostic tool, not as a study of pharmacokinetics or pharmacodynamics of 13C-urea itself, and contains no pharmacogenomic analysis. |
| popPK | Geeratragool_2025 | irrelevant | 0 | 0 | The study uses 13C-urea as a diagnostic probe (breath test) for H. pylori eradication assessment and does not report pharmacokinetic disposition parameters for 13C-urea. |
| PGx | Geeratragool_2025 | not_relevant | 1 | 0 | The paper mentions the 13C-urea test as a diagnostic tool for H. pylori eradication and CYP genotypes as non-impactful factors on antibiotic efficacy, but it does not report pharmacogenomic effects on the PK/PD of the 13C-urea test itself. |
| popPK | Gormsen_2008 | irrelevant | 0 | 0 | 13C-urea is used as a tracer for ureagenesis, not as the subject drug for population-PK parameter estimation. |
| PGx | Gormsen_2008 | not_relevant | 0 | 0 | The paper uses 13C-urea as a tracer to measure ureagenesis in response to free fatty acids and does not investigate pharmacogenomic variants affecting its PK/PD. |
| popPK | Graham_1999 | irrelevant | 0 | 0 | This study uses 13C-urea as a diagnostic probe for Helicobacter pylori infection (urea breath test) and does not report population pharmacokinetic parameters (CL, V, etc.) for 13C-urea itself. |
| PGx | Graham_1999 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic factors affecting the 13C-urea test (gastric emptying) but does not report any effect of a gene variant or genotype on these parameters. |
| popPK | Hoffman_1999 | irrelevant | 0 | 0 | The 13C-urea is used only as a diagnostic breath test to confirm H. pylori infection, not as the subject of a pharmacokinetic study. |
| PGx | Hoffman_1999 | not_relevant | 0 | 0 | The paper is a clinical trial on the efficacy of an H. pylori eradication regimen and does not investigate pharmacogenomic effects on PK or PD parameters. |
| popPK | Hu_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rabeprazole, and 13C-urea is only used as a diagnostic test for H. pylori status, not as the subject drug for PK parameter extraction. |
| PGx | Hu_2005 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of rabeprazole (not 13C-urea), and 13C-urea is only used as a diagnostic test for H. pylori. |
| popPK | Husheng_2026 | irrelevant | 0 | 0 | This is a review of vancomycin population PK; 13c_urea is not the subject drug and no 13c_urea parameters appear. |
| popPK | Isomoto_2003 | irrelevant | 0 | 0 | The study uses 13C-urea only as a diagnostic probe for Helicobacter pylori infection and does not report pharmacokinetic parameters (CL, V, etc.) for 13C-urea. |
| PGx | Isomoto_2003 | not_relevant | 0 | 0 | The paper reports treatment outcomes (eradication rates) and notes that CYP2C19 genotype did not influence the outcome, but it does not report a pharmacokinetic or pharmacodynamic parameter of the 13C-urea test itself. |
| popPK | Jolley_2007 | irrelevant | 0 | 0 | The study is a diagnostic evaluation of H. pylori infection using 13C-urea as a probe, reporting accuracy/sensitivity/specificity rather than pharmacokinetic parameters like clearance or volume. |
| PGx | Jolley_2007 | not_relevant | 0 | 0 | The paper describes a diagnostic test for H. pylori and does not investigate the effect of genetic variants on the pharmacokinetics or pharmacodynamics of 13C-urea. |
| popPK | Ju_2025 | irrelevant | 0 | 0 | This is a population-PK review/repository of rifampicin, a different drug; no 13c_urea parameters appear. |
| popPK | Krumbiegel_2000 | irrelevant | 0 | 0 | The study uses urea (labeled with 15N and referenced as 13C) as a diagnostic probe for H. pylori infection and gastric emptying, not as a drug subject for pharmacokinetic parameter estimation (CL, V, etc.). |
| PGx | Krumbiegel_2000 | not_relevant | 0 | 0 | The paper investigates the effect of food intake on the H. pylori diagnostic test using urea, not pharmacogenomic variants affecting PK/PD. |
| popPK | Labenz_1997 | irrelevant | 0 | 0 | The study uses the 13C-urea breath test as a diagnostic tool for Helicobacter pylori infection and does not report any pharmacokinetic parameters for 13C-urea. |
| PGx | Labenz_1997 | not_relevant | 0 | 0 | The paper does not report any pharmacogenomic effects or genetic variants influencing the PK/PD of 13C-urea. |
| popPK | Lee_2010 | irrelevant | 0 | 0 | The paper uses [13C] urea as a diagnostic probe for H. pylori infection, not as a drug for which pharmacokinetic parameters are being estimated. |
| PGx | Lee_2010 | not_relevant | 5 | 3 | The study reports clinical efficacy (eradication rates) as the endpoint, not specific pharmacokinetic (PK) or pharmacodynamic (PD) parameter changes (e.g., Cmax, AUC, pH) directly modulated by genotype, and found no difference by phenotype. |
| popPK | Lei_2026 | irrelevant | 0 | 0 | The paper is a population-PK study of meropenem (with pyridoxic acid as a biomarker), not of 13c_urea; no 13c_urea parameters appear anywhere. |
| popPK | Li_2026 | irrelevant | 0 | 0 | 13c_urea is not a study drug; "urea" appears only as a covariate correlated with dabigatran CL/F, and all PK parameters concern probe drugs (MDZ, DAB, statins), with many values in supplementary tables. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The paper is a PopPK/PBPK study of remimazolam, not 13c_urea; 13c_urea does not appear as the subject drug. |
| popPK | Mario_2003 | irrelevant | 0 | 0 | The study investigates the efficacy of rabeprazole for H. pylori eradication and uses 13C-urea only as a diagnostic test, not as the subject of pharmacokinetic analysis. |
| PGx | Mario_2003 | not_relevant | 0 | 0 | The paper studies the efficacy of rabeprazole in H. pylori eradication and does not investigate the pharmacokinetics or pharmacodynamics of 13C urea in relation to genetic variants. |
| popPK | Miki_2003 | irrelevant | 0 | 0 | The study uses 13C-urea as a diagnostic agent in the breath test for H. pylori, not as the subject of pharmacokinetic analysis. |
| PGx | Miki_2003 | not_relevant | 0 | 0 | The paper does not report pharmacokinetic or pharmacodynamic parameters for 13C-urea, but rather uses it as a diagnostic test to assess the clinical efficacy (eradication rate) of H. pylori treatment regimens. |
| popPK | Miwa_2000 | irrelevant | 0 | 0 | The study evaluates the efficacy of proton pump inhibitor regimens for H. pylori using [13C]urea only as a diagnostic test, not as a subject drug for pharmacokinetic analysis. |
| PGx | Miwa_2000 | not_relevant | 0 | 0 | The paper is a clinical trial comparing PPI dosages for H. pylori eradication and uses the 13C-urea breath test only as a diagnostic tool for cure, without reporting pharmacogenomic effects on PK/PD parameters of the urea itself. |
| PGx | Niu_2022 | not_relevant | 2 | 2 | CYP2C19 genotype frequencies are reported only descriptively in treatment-failure patients, with no effect of genotype on any PK/PD parameter of the 13C urea breath test or eradication outcome. |
| popPK | Ozdil_2010 | irrelevant | 0 | 0 | The study investigates CYP2C19 polymorphism effects on H. pylori eradication using 13C-urea only as a diagnostic breath test agent, not as a subject drug for pharmacokinetic parameter extraction. |
| PGx | Ozdil_2010 | not_relevant | 2 | 10 | The study reports the effect of CYP2C19 genotype on H. pylori eradication success (clinical outcome) using 13C-urea breath test as a diagnostic tool, but does not report how genotype changes the PK (e.g., 13CO2 excretion kinetics) or PD parameters of the 13C-urea probe itself. |
| PGx | Poonyam_2019 | not_relevant | 2 | 3 | 13C-urea is only a diagnostic breath-test substrate; CYP2C19 genotype affects PPI-based eradication success, not any PK/PD parameter of 13C-urea itself. |
| PGx | Prapitpaiboon_2015 | not_relevant | 0 | 0 | 13C urea is only a diagnostic breath-test substrate; CYP2C19 genotype is linked to H. pylori eradication rates, not to any PK/PD parameter of 13c_urea. |
| popPK | Qiao_2026 | irrelevant | 0 | 0 | The paper is a population-PK study of imipenem, not 13c_urea; 13c_urea appears only as a lab analyte (urea nitrogen) and no 13c_urea PK parameters are reported. |
| popPK | Renou_2026 | irrelevant | 0 | 0 | This is a population PK study of cabotegravir in HIV patients; 13c_urea is not mentioned at all. |
| popPK | Rino_2003 | irrelevant | 0 | 0 | The study focuses on H. pylori eradication efficacy and amoxicillin dosage optimization, using 13C-urea only as a diagnostic breath test agent without reporting its pharmacokinetic parameters. |
| PGx | Rino_2003 | not_relevant | 0 | 0 | The study evaluates H. pylori eradication rates based on amoxicillin dosage adjustments (mg/kg) but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Rudi_2002 | irrelevant | 0 | 0 | The study uses the 13C urea breath test as a diagnostic tool for H. pylori eradication and does not report pharmacokinetic parameters (CL, V, etc.) for 13C urea. |
| PGx | Rudi_2002 | not_relevant | 0 | 0 | The paper investigates H. pylori eradication rates based on bacterial genotypes, not the pharmacokinetic or pharmacodynamic effects of 13C-urea based on host pharmacogenomic variants. |
| popPK | Saporta_2026 | irrelevant | 0 | 0 | The drug studied is meropenem in mice; 13c_urea appears only as a BAL urea correction tool for ELF concentrations, not as the subject drug. |
| popPK | Savarino_1999 | irrelevant | 0 | 0 | The paper describes the use of 13C-urea as a diagnostic probe for Helicobacter pylori infection, not as a pharmacokinetic subject with disposition parameters. |
| PGx | Savarino_1999 | not_relevant | 0 | 0 | The paper describes the mechanism and instrumentation of the 13C urea breath test for diagnosing H. pylori, but does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the tracer. |
| popPK | Savarino_2000 | irrelevant | 0 | 0 | The study evaluates [13C]urea as a diagnostic probe for Helicobacter pylori, focusing on isotope mass spectrometry and diagnostic accuracy, not pharmacokinetic disposition parameters. |
| PGx | Savarino_2000 | not_relevant | 0 | 0 | The study compares analytical devices (IRMS vs LARA) for [13C]urea breath test accuracy and contains no pharmacogenomic data. |
| popPK | Savarino_2001 | irrelevant | 0 | 0 | The study uses 13C-urea as a diagnostic probe for H. pylori infection and reports diagnostic accuracy, not pharmacokinetic disposition parameters. |
| PGx | Savarino_2001 | not_relevant | 0 | 0 | The paper evaluates the impact of ranitidine (an H2-antagonist) on the diagnostic accuracy of the 13C-urea breath test, not the pharmacokinetics or pharmacodynamics of 13C-urea itself, nor any pharmacogenomic interaction. |
| popPK | Schellekens_2009 | irrelevant | 2 | 0 | 13C-urea is used as a marker substance to assess the release of other dosage forms, and no specific quantitative disposition parameters (CL, V, t1/2) for 13C-urea itself are reported in the evidence. |
| PGx | Schellekens_2009 | not_relevant | 0 | 0 | The paper is a proof-of-concept study on the suitability of 13C-urea as a marker for colon-targeted dosage forms in healthy volunteers and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Schouwenburg_2026 | irrelevant | 0 | 0 | The paper reports population PK of cefuroxime, not 13c_urea; 13c_urea is not the subject drug anywhere in the evidence. |
| PGx | Srinarong_2014 | not_relevant | 0 | 0 | 13C-urea is only a diagnostic breath-test substrate; CYP2C19 genotyping concerns lansoprazole, not urea PK/PD. |
| popPK | Sukkamolsantiporn_2025 | irrelevant | 0 | 0 | The paper is a clinical trial for H. pylori eradication using vonoprazan, where 13C-urea is used solely as a diagnostic probe for the breath test, not as a drug subject to pharmacokinetic modeling. |
| PGx | Sukkamolsantiporn_2025 | not_relevant | 0 | 0 | The paper uses 13C-urea only as a diagnostic test (urea breath test) to confirm H. pylori eradication, not as the administered drug of interest, and does not report pharmacokinetic or pharmacodynamic parameters of 13C-urea affected by genotype. |
| popPK | Tanigawara_1999 | irrelevant | 0 | 0 | The study uses the 13C-urea breath test as a diagnostic tool to assess H. pylori eradication, not to measure the pharmacokinetic disposition parameters of 13C-urea itself. |
| PGx | Tanigawara_1999 | not_relevant | 0 | 0 | The study evaluates omeprazole, not 13c_urea. |
| popPK | Tavill_1975 | relevant | 5 | 0 | The study describes the compartmental dynamics of exogenous [13C]urea in an isolated rat liver perfusion system, but the specific quantitative PK parameters (rate constants) are not listed as numeric values in the provided text, likely residing in the figures or model fit tables not included. |
| PGx | Tavill_1975 | not_relevant | 0 | 0 | The paper focuses on mathematical modeling of hepatic albumin and urea synthesis dynamics using radioactive tracers in a rat model and does not report any pharmacogenomic effects. |
| popPK | Togawa_2005 | irrelevant | 0 | 0 | The 13C-urea is used strictly as a diagnostic probe in a breath test for H. pylori, not as a subject drug for pharmacokinetic modeling. |
| PGx | Togawa_2005 | not_relevant | 3 | 10 | The study reports clinical efficacy (eradication rates) stratified by CYP2C19 genotype but does not report quantitative changes in PK or PD parameters of 13C-urea. |
| popPK | Tsyplakova_2025 | irrelevant | 0 | 0 | The paper models mycophenolic acid (MPA) pharmacokinetics; 13c_urea is not the subject drug (urea appears only as a covariate), so no 13c_urea parameters exist. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a population-PK model library for polymyxin B, a different drug; 13c_urea is not the subject and no parameters for it appear. |
| popPK | Wassef_2026 | irrelevant | 0 | 0 | The paper is a population-PK study of cefazolin, not 13c_urea; 13c_urea is not the subject drug and no parameters for it are reported. |
| popPK | Wen_2026 | irrelevant | 0 | 0 | The paper models salbutamol, not 13c_urea; urea appears only as a BAL dilution-correction method, so no 13c_urea PK parameters exist here. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The paper reports PopPK parameters for contezolid, a different drug; 13c_urea is not mentioned at all. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not 13c_urea. |
| PGx | Xajil-Ramos_2026 | not_relevant | 0 | 0 | The study reports pharmacogenomic effects on the PK of tacrolimus, not 13c_urea. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | This is a population-PK review/modeling paper of daptomycin, not 13c_urea; no 13c_urea parameters appear anywhere. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters (CL, V1, V2, Q) for polymyxin B, not for 13c_urea, which is not mentioned at all. |
| popPK | Xu_2026_2 | irrelevant | 0 | 0 | The paper is a population-PK study of vancomycin in children; 13c_urea appears only as a covariate (serum urea), not as the subject drug. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetics for polymyxin B, not 13c_urea. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of polymyxin B (not 13C_urea) and does not report any pharmacogenomic (gene variant/genotype) effects on PK or PD parameters. |
| popPK | Yaşar_2010 | irrelevant | 0 | 0 | The study evaluates the efficacy of probiotics in H. pylori eradication using 13C-urea as a diagnostic test, not as a pharmacokinetic subject. |
| PGx | Yaşar_2010 | not_relevant | 0 | 0 | The paper studies the clinical efficacy of probiotics in H. pylori eradication, not the pharmacokinetics or pharmacodynamics of 13C-urea. |
| popPK | Ye_2026 | irrelevant | 0 | 0 | The 13C-urea is used as a diagnostic probe for H. pylori infection, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Ye_2026 | not_relevant | 0 | 0 | The study focuses on risk stratification for gastric cancer using H. pylori virulence factors and clinical features; it does not report pharmacogenomic effects on the PK or PD of the 13C-urea probe. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The 13C-urea breath test is used solely as a diagnostic tool for Helicobacter pylori infection, not as a pharmacokinetic study of urea disposition. |
| PGx | Zhang_2015 | not_relevant | 0 | 0 | The study uses 13C-urea as a diagnostic test for H. pylori infection, not as a drug to assess pharmacokinetic or pharmacodynamic effects of genetic variants. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is a systematic review of imipenem population PK; 13c_urea is not the subject drug (only mentioned as a measured lab analyte), so no 13c_urea parameters exist. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B13c_urea%5D&body=Drug%3A%2013c_urea%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_13c_urea/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
