<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;dosulepin&quot;}]"></div>

# dosulepin

- **generic name:** dosulepin
- **ATC codes:** `N06AA16`
- **DrugBank:** [DB09167](https://go.drugbank.com/drugs/DB09167) · **PubChem:** [CID 5284550](https://pubchem.ncbi.nlm.nih.gov/compound/5284550)
- **molar mass:** 295.44 g/mol (C19H21NS) — DrugBank
- **groups:** approved, investigational

## About

Dosulepin is a tricyclic antidepressant used to treat depression. It is given orally in forms such as tablets and capsules, and is well absorbed by mouth.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27116967](https://www.wikidata.org/wiki/Q27116967), [Wikipedia](https://en.wikipedia.org/wiki/Dosulepin?oldid=1367472996) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dothiepin | parent | 295.44 | C19H21NS | DrugBank | [5284550](https://pubchem.ncbi.nlm.nih.gov/compound/5284550) | Maguire_1981, Yu_1986 |
| dothiepin S-oxide | metabolite | 311.443 | C19H21NOS | PubChem | [5365233](https://pubchem.ncbi.nlm.nih.gov/compound/5365233) | Maguire_1981, Yu_1986 |
| N-desmethyl dothiepin S-oxide | metabolite | 297.416 | C18H19NOS | PubChem | [6450308](https://pubchem.ncbi.nlm.nih.gov/compound/6450308) | Yu_1986 |
| northiaden (N-desmethyldothiepin) | metabolite | 281.417 | C18H19NS | PubChem | [1715123](https://pubchem.ncbi.nlm.nih.gov/compound/1715123) | Maguire_1981, Yu_1986 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Maguire_1981_reference](drugs/drug_dosulepin/Dosulepin_Maguire1981_reference.md) | — | general linear (no model) | 7 | Maguire KP et al., Metabolism and pharmacokinetics of doth…, British journal of clinical… (1981) | [10.1111/j.1365-2125.1981.tb01235.x](https://doi.org/10.1111/j.1365-2125.1981.tb01235.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Yu_1986_reference](drugs/drug_dosulepin/Dosulepin_Yu1986_reference.md) | — | general linear (no model) | 2 | Yu DK et al., Pharmacokinetics of dothiepin in humans…, Journal of pharmaceutical s… (1986) | [10.1002/jps.2600750612](https://doi.org/10.1002/jps.2600750612) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:27 | 0:03 | 0/2/0 | 0/0/0 | 0/0/0 | 4,056/163 | einfracz / qwen3.8-27b | 4 | 3/1 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 3  ·  **relevant:** 0
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Attia_2012 | irrelevant | 0 | 0 | The paper reports in vitro CYP metabolic kinetics (Km, Vmax) for dothiepin (a chemically distinct tricyclic antidepressant, not dosulepin) and does not provide in vivo pharmacokinetic parameters for dosulepin. |
| PGx | Attia_2012 | not_relevant | 0 | 0 | The study investigates the metabolism of dothiepin, not dosulepin. |
| popPK | Bareggi_1990 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dothiepin, not the subject drug dosulepin, and provides no quantitative data for dosulepin. |
| PGx | Bareggi_1990 | not_relevant | 0 | 0 | The study compares PK between age groups (young vs. elderly) and does not involve pharmacogenomics or genetic variants. |
| popPK | Crampton_1980 | irrelevant | 1 | 1 | The study measures dothiepin (S-5-hydroxy-meprobamate), which is a distinct chemical entity from dosulepin, even though both are tricyclic antidepressants; no pharmacokinetic parameters for dosulepin are reported. |
| PGx | Crampton_1980 | not_relevant | 0 | 0 | The paper describes a new analytical method for measuring dothiepin in plasma and reports standard PK parameters (half-life, volume of distribution) in a small study, but does not report any pharmacogenomic effects or genotype-phenotype associations affecting PK or PD. |
| popPK | El_2021 | irrelevant | 0 | 0 | Dosulepin (dothiepin) is used only as an internal standard in an LC-MS/MS method for pantoprazole/amitriptyline; no dosulepin PK parameters are reported. |
| popPK | Elama_2018 | irrelevant | 0 | 0 | The paper describes analytical methods for quantifying the drug in dosage forms, not a pharmacokinetic study of the drug's disposition in a biological system. |
| PD | Elama_2018 | not_relevant | 0 | 0 | The paper describes analytical methods for drug quantification and contains no pharmacodynamic or exposure-response data. |
| PGx | Elama_2018 | not_relevant | 0 | 0 | The paper describes analytical methods for drug quantification and contains no information on pharmacogenomics or genotype-based effects. |
| popPK | Hippisley-Cox_2001 | irrelevant | 0 | 0 | The paper is an epidemiological case-control study assessing the risk of ischaemic heart disease associated with dosulepin use, not a pharmacokinetic study. |
| PD | Hippisley-Cox_2001 | not_relevant | 3 | 2 | The paper reports a clinical dose-response association (odds ratios for IHD vs. dose/prescriptions) but lacks pharmacokinetic data or formal pharmacodynamic parameters (Emax, EC50) required for PD modeling. |
| PGx | Hippisley-Cox_2001 | not_relevant | 0 | 0 | The paper is a case-control epidemiological study investigating the association between dosulepin use and ischaemic heart disease risk; it does not examine pharmacogenomic effects or report any PK/PD parameters. |
| popPK | Howell_2009 | irrelevant | 0 | 0 | The paper is an in-vitro binding study of liposomes and does not report population pharmacokinetic parameters (CL, V, etc.) for dosulepin. |
| PD | Howell_2009 | not_relevant | 0 | 0 | The paper describes in vitro binding of drugs to liposomes for overdose treatment and does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for dosulepin. |
| PGx | Howell_2009 | not_relevant | 0 | 0 | The paper investigates in vitro binding of dosulepin to liposomes for overdose treatment and does not involve gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Kitzlerová_2003 | irrelevant | 0 | 0 | The study investigates the correlation between dosulepine plasma levels and ECG parameters, reporting no pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Kitzlerová_2003 | not_relevant | 0 | 0 | The paper investigates the correlation between dosulepine plasma levels and heart electric field parameters (pharmacodynamics) but does not mention gene variants, genotypes, or pharmacogenomics. |
| popPK | Kopanski_1983 | irrelevant | 0 | 0 | The study focuses on receptor sensitivity (adenylate cyclase) and does not report pharmacokinetic disposition parameters for dosulepin. |
| PGx | Kopanski_1983 | not_relevant | 0 | 0 | The paper investigates the effects of antidepressants on adrenergic receptor sensitivity in rat brain slices (animal study) and does not report pharmacogenomic effects on human PK or PD parameters for dosulepin. |
| popPK | Li_1979 | irrelevant | 0 | 0 | The paper describes an HPLC method for tricyclic neuroleptics (specifically flupenthixol, doxepin, etc.) and does not report pharmacokinetic parameters for dosulepin. |
| PGx | Li_1979 | not_relevant | 0 | 0 | The paper describes an HPLC method for thioxanthene isomers (dothiepin, not dosulepin) and mentions pharmacokinetic implications of adsorption, but reports no pharmacogenomic effects on PK/PD parameters. |
| popPK | Maguire_1981 | irrelevant | 3 | 0 | The paper reports pharmacokinetic parameters for dothiepin, which is a distinct drug from dosulepin, and no quantitative data for dosulepin is present. |
| PGx | Maguire_1981 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of dothiepin in healthy volunteers but does not report any data on genetic variants or genotype differences affecting PK parameters. |
| popPK | Maguire_1983 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dothiepin, not dosulepin, which is a different tricyclic antidepressant. |
| PGx | Maguire_1983 | not_relevant | 0 | 0 | The paper describes pharmacokinetics based on demographic factors (sex/age) and patient status, but does not report any gene variant, genotype, or pharmacogenomic effect on PK parameters. |
| popPK | Meert_2010 | irrelevant | 1 | 0 | The paper is a clinical case report focused on Brugada-like ECG patterns and toxicity mechanisms, lacking quantitative pharmacokinetic parameters (CL, V, etc.) for dosulepin. |
| PGx | Meert_2010 | not_relevant | 0 | 0 | The paper is a case report on drug toxicity and ECG changes, with no report of pharmacogenomic effects on PK or PD parameters. |
| popPK | Milani_2020 | irrelevant | 0 | 0 | The paper is an in-vitro study on UGT2B10 phenotyping that mentions dothiepin (the enantiomer of dosulepin) only as a substrate, without reporting quantitative PK parameters like clearance or volume for the drug in vivo. |
| PGx | Milani_2020 | not_relevant | 5 | 5 | The text identifies dothiepin (not dosulepin) as a substrate and describes an in vitro methodology for UGT2B10 phenotyping, but does not report specific pharmacokinetic changes or genetic associations for dosulepin. |
| popPK | Moharir_2024 | relevant | 5 | 0 | The paper reports population-PK parameters (Cmax, t1/2, AUC) for dosulepin in animal models, but no specific numeric values are provided in the text or evidence. |
| PD | Moharir_2024 | not_relevant | 2 | 1 | The paper reports qualitative improvements in pharmacodynamic behavior (FST/TST) and PK parameters (Cmax, AUC) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response/dose-response curve for dosulepin. |
| PGx | Moharir_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic and pharmacodynamic changes induced by deuterium reinforcement (chemical modification) of dosulepin, not by genetic variants or genotypes. |
| popPK | Ogura_1983 | relevant | 9 | 0 | The study is a pharmacokinetic analysis of dothiepin (dosulepin) in humans, but the provided evidence contains only qualitative descriptions (higher levels, longer T1/2) without specific numeric parameter values. |
| PGx | Ogura_1983 | not_relevant | 0 | 0 | The study compares age groups (young vs. elderly) rather than genetic variants and does not mention dosulepin (dothiepin is the drug studied). |
| popPK | Pounder_1994 | irrelevant | 2 | 2 | The study is a postmortem redistribution and forensic degradation study on dothiepin (not dosulepin), focusing on drug levels in blood and tissues rather than reporting quantitative population pharmacokinetic parameters like clearance or volume of distribution for dosulepin. |
| PGx | Pounder_1994 | not_relevant | 0 | 0 | The paper discusses postmortem redistribution and degradation of dothiepin (doxepin/dothiepin) in forensic contexts but contains no information regarding pharmacogenomics, gene variants, or genotypes affecting PK/PD parameters. |
| popPK | Presley_2013 | irrelevant | 0 | 0 | The paper is a review of case reports on the clinical use of intravenous lipid emulsion for toxicity treatment and contains no pharmacokinetic disposition parameters for dosulepin. |
| PD | Presley_2013 | not_relevant | 0 | 0 | The paper is a review of case reports regarding the use of intravenous lipid emulsion as a rescue therapy for drug toxicity; it does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for dosulepin. |
| PGx | Presley_2013 | not_relevant | 0 | 0 | The paper is a review of case reports regarding the use of intravenous lipid emulsion to treat drug toxicity and does not report pharmacogenomic effects on PK/PD parameters for dosulepin. |
| popPK | Saito_2020 | irrelevant | 0 | 0 | The study investigates the in vitro chemical degradation of amoxapine and other TCAs in artificial gastric juice, and does not report pharmacokinetic parameters for dosulepin. |
| PGx | Saito_2020 | not_relevant | 0 | 0 | The paper investigates the chemical degradation of amoxapine in artificial gastric juice and does not involve gene variants or pharmacogenomic effects on PK/PD parameters for dosulepin. |
| popPK | Thanacoody_2005 | irrelevant | 0 | 0 | The text describes the mechanisms and clinical manifestations of cardiovascular toxicity from tricyclic antidepressant poisoning and does not report any pharmacokinetic parameters (CL, V, etc.) for dosulepin. |
| PD | Thanacoody_2005 | not_relevant | 1 | 0 | The text is a qualitative review of cardiovascular toxicity mechanisms and clinical predictors (ECG changes) without reporting any numeric concentration-effect or dose-response parameters for dosulepin. |
| PGx | Thanacoody_2005 | not_relevant | 0 | 0 | The paper discusses cardiovascular toxicity mechanisms and ECG changes of dosulepin overdose, but contains no information on gene variants affecting PK/PD parameters. |
| popPK | Wever_2026 | irrelevant | 0 | 0 | Retrospective study of psychotropic drug interventions after bariatric surgery; no dosulepin patients and no PK parameters reported. |
| popPK | Yu_1986 | irrelevant | 0 | 0 | The study is conducted on dothiepin, which is a different chemical entity (isomer/analog) from dosulepin, and thus does not provide pharmacokinetic data for the target drug. |
| PGx | Yu_1986 | not_relevant | 0 | 0 | The study investigates dose-proportionality of dothiepin in healthy men and does not report any pharmacogenomic effects or gene variant analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdosulepin%5D&body=Drug%3A%20dosulepin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dosulepin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 21:27 UTC</sub>
