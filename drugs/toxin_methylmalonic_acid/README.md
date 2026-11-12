<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Methylmalonic acid&quot;}]"></div>

# Methylmalonic acid

- **generic name:** Methylmalonic acid
- **T3DB:** [T3D4404](http://www.t3db.ca/toxins/T3D4404) · **DrugBank:** [DB04183](https://go.drugbank.com/drugs/DB04183) · **PubChem:** [CID 487](https://pubchem.ncbi.nlm.nih.gov/compound/487)
- **groups:** experimental

## About

Methylmalonic acid is a malonic acid derivative which is a vital intermediate in the metabolism of fat and protein. Abnormalities in methylmalonic acid metabolism lead to methylmalonic aciduria. This metabolic disease is attributed to a block in the enzymatic conversion of methylmalonyl CoA to succinyl CoA.

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.
- **Mechanism of toxicity:** Methylmalonic acid is a vital intermediate in the metabolism of fat and protein. Abnormalities in methylmalonic acid metabolism lead to methylmalonic aciduria. …
- **Health effects:** Chronically high levels of methylmalonic acid are associated with at least 5 inborn errors of metabolism including: Malonyl CoA decarboxylase deficiency, Malonic Aciduria, Methylmalonate Semialdehyde Dehydrogenase Deficiency, Methylmalonic Aciduria and Methylmalonic Aciduria Due to Cobalamin-Related Disorders.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4404">T3DB T3D4404</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 516-05-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:30860">ChEBI 30860</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methylmalonic_acid | metabolite | 118.088 | C4H6O4 | PubChem | [487](https://pubchem.ncbi.nlm.nih.gov/compound/487) | Vernon_2014 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Vernon_2014_reference](drugs/toxin_methylmalonic_acid/MethylmalonicAcid_Vernon2014_reference.md) | — | 1-compartment (no model) | 2 | Vernon HJ et al., A detailed analysis of methylmalonic ac…, Journal of inherited metabo… (2014) | [10.1007/s10545-014-9730-7](https://doi.org/10.1007/s10545-014-9730-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zhu_2025_all_cause_mortality](drugs/toxin_methylmalonic_acid/pd_Zhu_2025_all_cause_mortality.md) | all-cause mortality ← methylmalonic_acid · time-to-event model | — | Zhu P et al., The Role of Methylmalonic Acid in the R…, Food science & nutrition (2025) | [10.1002/fsn3.70841](https://doi.org/10.1002/fsn3.70841) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zhu_2025_low_muscle_mass](drugs/toxin_methylmalonic_acid/pd_Zhu_2025_low_muscle_mass.md) | low muscle mass ← methylmalonic_acid · categorical (graded) response model | — | Zhu P et al., The Role of Methylmalonic Acid in the R…, Food science & nutrition (2025) | [10.1002/fsn3.70841](https://doi.org/10.1002/fsn3.70841) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Toth_2008_MMA](drugs/toxin_methylmalonic_acid/pd_Toth_2008_MMA.md) | fasting methylmalonic acid levels biomarker turnover ← methylmalonic_acid | — | Toth C et al., Neuropathy as a potential complication…, Movement disorders : offici… (2008) | [10.1002/mds.22137](https://doi.org/10.1002/mds.22137) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 06:42 | 25:53 | 0/1/0 | 1/1/0 | 0/0/0 | 355,388/16,507 | einfracz / qwen3.8-27b | 37 | 3/18 | 36/1 | 0 |

## Coverage

- **PubMed hits:** 190 matched, 126 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vernon_2014.pdf` | Vernon HJ et al., A detailed analysis of methylmalonic ac…, Journal of inherited metabo… (2014) | popPK | 10 | [10.1007/s10545-014-9730-7](https://doi.org/10.1007/s10545-014-9730-7) | [24961826](https://pubmed.ncbi.nlm.nih.gov/24961826) | The paper reports quantitative plasma clearance (103 ml/min) and volume of distribution (0.48 L/kg) for methylmalonic acid. |

<sub>queue written 2026-11-11 06:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdrabo_2020 | not_relevant | 0 | 0 | The paper investigates the genetic etiology of methylmalonic acidemia, which is an inborn error of metabolism/endogenous metabolite disorder, not a pharmacogenomic study of a drug's pharmacokinetics or pharmacodynamics. |
| popPK | Adebamowo_2026 | irrelevant | 0 | 0 | The paper is an exposure/biomarker study on HPV trajectories using vaginal metabolomics and does not report any quantitative toxicokinetic parameters (half-life, clearance, volume of distribution, etc.) for methylmalonic acid. |
| popPK | Ahokas_1981 | irrelevant | 0 | 0 | The paper studies the kinetic parameters of alpha-amino isobutyric acid (AIB), not methylmalonic acid, which is the subject of interest. |
| popPK | Armstrong_2021 | irrelevant | 0 | 0 | The paper describes a therapeutic intervention in cell-based models and reports dose-dependent reductions in biomarker levels, but it does not report any quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for methylmalonic acid. |
| popPK | Aslamy_2024 | irrelevant | 0 | 0 | The paper is an epidemiological association study of branched short-chain fatty acids (isobutyrate, isovalerate, methylbutyrate) and glucose homeostasis, and does not report quantitative toxicokinetic parameters for methylmalonic acid. |
| PGx | Awashra_2026 | not_relevant | 2 | 2 | The paper discusses methylmalonic acid as a biomarker for B-vitamin status and reviews nutrigenomic interactions, but it does not report a pharmacogenomic effect on the PK/PD of methylmalonic acid as a drug. |
| popPK | Bauwens_2012 | irrelevant | 0 | 0 | The paper studies radioiodinated derivatives of malonic acid as SPECT tracers, not methylmalonic acid itself. |
| popPK | Bovée_1978 | irrelevant | 0 | 0 | The paper describes renal transport defects in dogs using glucose, phosphate, and other amino acids, but contains no kinetic parameters for methylmalonic acid. |
| popPK | Bufka_2026 | irrelevant | 0 | 0 | This is a clinical review of Vitamin B12 deficiency and elevated concentrations in children; it mentions methylmalonic acid only as a diagnostic biomarker and provides no quantitative toxicokinetic parameters (half-life, clearance, etc.) for methylmalonic acid. |
| PGx | Caldeira-Araújo_2019 | not_relevant | 0 | 0 | The paper investigates the impact of genotype on homocysteine and biomarkers in healthy pediatric populations, but does not report pharmacokinetic or pharmacodynamic effects of a specific drug on methylmalonic acid. |
| popPK | Calvert_1996 | irrelevant | 0 | 0 | The paper studies the transport of lysine and other amino acids in rat mammary tissue, with no mention of methylmalonic acid. |
| PGx | Carrillo-Carrasco_2012 | not_relevant | 0 | 0 | This paper is a clinical review of an inborn metabolic error (cblC deficiency) and does not report the pharmacokinetic or pharmacodynamic profile of a drug (methylmalonic acid) altered by a gene variant. |
| PGx | Caterino_2025 | not_relevant | 0 | 0 | The paper studies the metabolic profile and vitamin B12 treatment in mouse models of 22q11.2 deletion syndrome, not the pharmacokinetics or pharmacodynamics of a drug called 'methylmalonic_acid'. |
| popPK | Chen_2010 | irrelevant | 2 | 2 | The paper reports blood MMA concentrations and qualitative stabilization patterns in patients, but does not provide quantitative kinetic parameters such as half-life, clearance, or rate constants. |
| PGx | Chen_2023 | not_relevant | 0 | 0 | The paper describes a case of methylmalonic acidemia (a metabolic disorder) but does not report the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Cheng_2022 | not_relevant | 0 | 0 | The paper describes a metabolic disorder (cobalamin C defect) causing methylmalonic acid accumulation due to a genetic defect, not the pharmacogenomics of a drug's PK/PD parameters. |
| PGx | Forny_2016 | not_relevant | 0 | 0 | The paper reports on mouse models of methylmalonic aciduria (a metabolic disease) and cobalamin treatment, not the pharmacogenomics of a drug called methylmalonic acid. |
| PGx | Fox_1987 | not_relevant | 0 | 0 | The paper describes a newborn screening program for metabolic disorders and does not report pharmacogenomic effects on the PK or PD of methylmalonic acid as a drug. |
| PGx | Geisel_2003 | not_relevant | 2 | 8 | The paper studies genetic effects on biomarkers (homocysteine, vitamin B12, MMA) in a physiological/disease context, not the pharmacokinetics or pharmacodynamics of the drug methylmalonic acid. |
| popPK | Gernez_2023 | irrelevant | 0 | 0 | The paper is a review on nitrous oxide (N2O) toxicity, and methylmalonic acid is mentioned only as a secondary biomarker for diagnosis, not as the subject of toxicokinetic parameterization. |
| popPK | Gimsing_1989 | irrelevant | 0 | 0 | The paper uses methylmalonic acid excretion as a diagnostic marker for vitamin B12 status in a clinical population but does not report quantitative toxicokinetic parameters (e.g., clearance, half-life, partition coefficients) for the substance. |
| popPK | Gouveia_2025 | irrelevant | 0 | 0 | The paper studies glucose and insulin kinetics in dairy cattle and does not report any toxicokinetic parameters for methylmalonic acid. |
| popPK | Gómez_1998 | irrelevant | 0 | 0 | Methylmalonic acid is used as a chelating agent to study the kinetics of aluminum, not as the subject substance for its own toxicokinetic parameters. |
| popPK | Henning_2000 | irrelevant | 0 | 0 | The paper reports steady-state plasma concentrations of methylmalonic acid as a metabolite marker in renal patients, not quantitative kinetic parameters (half-life, clearance, etc.) for methylmalonic acid as the subject substance. |
| popPK | Herrmann_2005 | irrelevant | 1 | 0 | The paper is a clinical study reporting changes in metabolite concentrations (MMA) following B-vitamin treatment in dialysis patients, but it contains no quantitative toxicokinetic parameters (half-life, clearance, Vd, etc.) for methylmalonic acid. |
| popPK | Hurkmans_2026 | irrelevant | 0 | 0 | The paper studies the detection of macro-vitamin B12 via PEG precipitation and mentions methylmalonic acid (MMA) only as a diagnostic biomarker for B12 deficiency, reporting no kinetic parameters (half-life, clearance, etc.) for MMA. |
| PGx | Hyndman_2003 | not_relevant | 0 | 0 | The paper investigates the effect of MTHFR genotype on homocysteine and MMA levels in the context of vitamin B12/folate treatment, not the pharmacokinetics or pharmacodynamics of methylmalonic acid as a drug. |
| popPK | Infante_2013 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of the drugs pazopanib and pemetrexed, mentioning methylmalonic acid only as a biomarker for B12 metabolism with no kinetic parameters reported. |
| popPK | Ipcioglu_2008 | irrelevant | 0 | 0 | Methylmalonic acid is measured only as a co-marker in an observational study of homocysteine, with no kinetic parameters for methylmalonic acid reported. |
| PGx | Kaur_2021 | not_relevant | 0 | 0 | The paper reports genetic causes of a metabolic disease (accumulation of methylmalonic acid due to MMACHC defects) rather than a pharmacogenomic effect of a gene variant on the PK/PD parameters of methylmalonic acid as a drug. |
| popPK | Kirschner_2021 | irrelevant | 0 | 0 | The paper focuses on short-chain fatty acids (acetate, propionate, butyrate, isovalerate, valerate) and does not mention or measure methylmalonic acid. |
| popPK | Kyaw_2013 | irrelevant | 0 | 0 | The paper investigates the effect of nicotine on levodopa pharmacokinetics and does not report any kinetic parameters for methylmalonic acid. |
| popPK | Köse_2026 | irrelevant | 0 | 0 | The paper reports concentrations of methylmalonic acid in patients with methylmalonic acidemia in response to diet and antibiotics, but it does not provide kinetic parameters (half-life, clearance, Vd, rate constants) for the disposition of exogenous methylmalonic acid. |
| popPK | Lambert_1997 | irrelevant | 0 | 0 | The paper measures plasma methylmalonic acid concentrations in patients with alcoholic cirrhosis as a biomarker of B12 deficiency, but reports no kinetic parameters (half-life, clearance, rate constants, etc.) for methylmalonic acid. |
| popPK | Li_2007 | irrelevant | 1 | 2 | The study measures plasma methylmalonic acid concentrations as a biomarker of vitamin B12 status in cancer patients, but reports no kinetic parameters (such as half-life, clearance, or rate constants) for methylmalonic acid itself. |
| PGx | Li_2009 | not_relevant | 0 | 0 | The paper discusses the association between vitamin B12 metabolism genes and birth defects, but does not report a pharmacokinetic or pharmacodynamic effect of a gene variant on methylmalonic acid as a drug parameter. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper describes the mechanistic role of methylmalonic acid in skeletal aging and therapeutic reversal but does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Masaki_2006 | irrelevant | 0 | 0 | The paper reports kinetic parameters for propranolol and its ester derivative, not for methylmalonic acid. |
| PGx | Matmat_2022 | not_relevant | 0 | 0 | The paper reviews ocular manifestations and genetic variants in cobalamin metabolism disorders, but does not report pharmacokinetic or pharmacodynamic effects of a specific drug in relation to methylmalonic acid. |
| PGx | Molloy_2016 | not_relevant | 0 | 0 | The paper studies endogenous metabolite levels (MMA) and genetic polymorphisms in metabolic enzymes, not the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Moreno-Garcia_2014 | not_relevant | 0 | 0 | The paper describes a mouse model of a genetic metabolic disorder (cblC) and reports changes in metabolite levels (methylmalonic acid), but it does not report a pharmacokinetic or pharmacodynamic effect of a drug. |
| popPK | Mould_2009 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of pralatrexate, using methylmalonic acid (MMA) only as a biomarker/covariate for toxicity and metabolic status, not as the subject substance for kinetic parameter extraction. |
| popPK | Nagarajan_2005 | irrelevant | 0 | 0 | The paper describes a clinical case study of treatment outcomes (reduction in concentration) but does not report quantitative toxicokinetic parameters such as half-life, clearance rate constants, or volume of distribution for methylmalonic acid. |
| popPK | Nakajima_2007 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 3-[125I]iodo-alpha-methyl-L-tyrosine, not methylmalonic acid. |
| PGx | Nakamura_2002 | not_relevant | 1 | 2 | The study reports on homocysteine levels and methylmalonic acid as biomarkers of B12 status, not the PK/PD of a pharmacological agent. |
| popPK | Olivieri_2026 | irrelevant | 0 | 0 | The paper is a clinical guideline for diagnosis and management that mentions methylmalonic acid only as a biomarker to be monitored, without reporting any quantitative toxicokinetic parameters. |
| PGx | Oussalah_2017 | not_relevant | 0 | 0 | The paper analyzes the association between a TCN2 polymorphism and methylmalonic acid (a metabolic biomarker), but does not report pharmacokinetic or pharmacodynamic parameters for a drug therapy. |
| popPK | Pang_2025 | irrelevant | 1 | 1 | The paper reports kinetic parameters for 18F-ML-10 (a radiolabeled analogue of methylmalonic acid), which is a different substance than unlabeled methylmalonic acid. |
| PGx | Paz_2023 | not_relevant | 0 | 0 | The paper analyzes the developmental craniofacial phenotypes of a zebrafish model of methylmalonic acidemia, focusing on chondrocyte intercalation and independent of cobalamin binding, rather than measuring PK/PD parameters of the metabolite itself in a pharmacogenomic context. |
| PGx | Paz_2023_2 | not_relevant | 0 | 0 | The paper studies the role of the MMACHC gene in craniofacial development in zebrafish, not the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Pillai_2021 | not_relevant | 0 | 0 | The paper describes a genetic disorder (Cobalamin J disease) and its clinical outcome, but does not report the effect of a gene variant on the pharmacokinetic or pharmacodynamic parameters of a specific drug. |
| PGx | Pollini_2020 | not_relevant | 1 | 1 | The paper reports a case of comorbid methylmalonic acidemia (cblC defect) and multiple sclerosis, but methylmalonic acid is a metabolite, not a drug, so the changes in MMA levels reflect metabolic pathology rather than a pharmacogenomic effect on the PK/PD of a drug. |
| PGx | Pupavac_2016 | not_relevant | 0 | 0 | The paper discusses diagnostic value of NGS panels for cobalamin metabolism disorders and does not report pharmacogenomic effects on PK/PD parameters of methylmalonic acid. |
| popPK | Saudubray_1979 | irrelevant | 2 | 5 | The paper reports a qualitative observation that renal clearance of methylmalonic acid is low (15-45 ml/min) to justify a treatment protocol, but it is not a kinetic study and provides no specific quantitative parameters for the substance itself as the subject of investigation. |
| PGx | Sawlan_2025 | not_relevant | 0 | 0 | The paper is a clinical case series discussing the treatment and metabolic outcomes (MMA levels) of TC II deficiency, but it does not model or report a pharmacokinetic or pharmacodynamic effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of methylmalonic acid as a drug. |
| PGx | Scalais_2019 | not_relevant | 0 | 0 | The paper reports the treatment of metabolic disorders with hydroxocobalamin, not the pharmacokinetic or pharmacodynamic effect of a drug on methylmalonic acid levels. |
| popPK | Schröder_1991 | irrelevant | 0 | 0 | The paper investigates maternal-fetal transfer of water, glucose, and amino acids in guinea pigs and does not mention or measure methylmalonic acid. |
| popPK | Snyder_2001 | irrelevant | 0 | 0 | The paper focuses on cholinesterase substrates and butyrylcholinesterase activity, with no mention of methylmalonic acid. |
| popPK | Stabler_1999 | irrelevant | 0 | 0 | The paper is a cross-sectional epidemiological study measuring biomarker concentrations (MMA, homocysteine) in humans to correlate with clinical outcomes, without reporting any toxicokinetic parameters like half-life, clearance, or rate constants. |
| popPK | Suo_2026 | irrelevant | 0 | 0 | The paper investigates immunomodulation by Akkermansia muciniphila and does not contain toxicokinetic parameters for methylmalonic acid. |
| popPK | Tao_2024 | irrelevant | 0 | 0 | The paper is a review of the ethnobotany and pharmacology of the plant Peucedanum decursivum and does not report any toxicokinetic parameters for methylmalonic acid. |
| PGx | Underhill_2013 | not_relevant | 0 | 0 | The paper describes a genetic mutation (MUT) causing a metabolic disease (methylmalonic acidemia) and its response to a cofactor, not the effect of a gene on the pharmacokinetics or pharmacodynamics of methylmalonic acid as a drug. |
| PGx | Visentin_2016 | not_relevant | 2 | 5 | The paper tests for associations between genetic variants and MMA levels but finds no significant association, thus not reporting a pharmacogenomic effect. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper is a clinical case series describing the phenotype and treatment response in cblC disease patients, but it does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of methylmalonic acid (which is a biomarker, not a drug). |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on the mechanistic role of methylmalonic acid in cancer metastasis and epigenetic regulation, reporting no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Wang_2026_2 | irrelevant | 1 | 0 | The paper reports associations between serum MMA concentrations and cardiac outcomes in a human cohort and mechanistic insights in mice, but it does not provide specific quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants, or PBPK parameters) for methylmalonic acid. |
| PGx | Watkins_2022 | not_relevant | 0 | 0 | The paper describes inherited metabolic defects (genetics of cobalamin metabolism) rather than the pharmacogenomic effect of gene variants on the pharmacokinetics or pharmacodynamics of methylmalonic acid. |
| PGx | Weinstock_2025 | not_relevant | 0 | 0 | The paper describes a case of vitamin B12 deficiency causing metabolic changes, not a pharmacogenomic effect of a gene variant on the PK or PD of methylmalonic acid as a drug. |
| popPK | Whelan_1979 | irrelevant | 0 | 0 | The paper is a clinical case report describing metabolic acidosis and excretion patterns without providing quantitative pharmacokinetic parameters (e.g., half-life, clearance rate constants, volume of distribution). |
| PGx | Whelan_1979 | not_relevant | 0 | 0 | The paper describes clinical outcomes and metabolic parameters in patients with a genetic disease (methylmalonic acidemia) who were unresponsive to Vitamin B12, but it does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of the compound methylmalonic acid. |
| PGx | Wilcken_1977 | not_relevant | 0 | 0 | The paper describes a genetic enzyme deficiency causing metabolic disease, not a pharmacogenomic effect on the PK/PD of a specific drug treatment. |
| popPK | Xiao_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study analyzing the association between diet quality and the prevalence of high MMA in CKD patients, reporting no quantitative toxicokinetic parameters (e.g., clearance, half-life) for methylmalonic acid. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper reports the genetic cause of methylmalonic acidemia (a disease) but does not analyze the pharmacokinetics or pharmacodynamics of methylmalonic acid as a drug. |
| PGx | van_2014 | not_relevant | 0 | 0 | The study investigates the association between genetics and arterial stiffness (PWV), not the pharmacokinetics or pharmacodynamics of methylmalonic acid as a drug. |
| popPK | van_2018 | irrelevant | 2 | 0 | The paper reports a statistical correction model for MMA concentrations based on eGFR and vitamin B12 levels, rather than quantitative toxicokinetic parameters (such as half-life, clearance rates, or partition coefficients) for methylmalonic acid disposition. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethylmalonic_acid%5D&body=Drug%3A%20methylmalonic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methylmalonic_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 06:36 UTC</sub>
