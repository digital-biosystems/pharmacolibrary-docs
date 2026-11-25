<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05A&quot;,&quot;href&quot;:&quot;atc/D05A.md&quot;},{&quot;label&quot;:&quot;methoxsalen&quot;}]"></div>

# methoxsalen

- **generic name:** methoxsalen
- **ATC codes:** `D05AD02`, `D05BA02`
- **DrugBank:** [DB00553](https://go.drugbank.com/drugs/DB00553) · **PubChem:** [CID 4114](https://pubchem.ncbi.nlm.nih.gov/compound/4114)
- **molar mass:** 216.192 g/mol (C12H8O4) — DrugBank
- **groups:** approved, investigational

## About

Methoxsalen is a psoralen derivative used to treat conditions such as psoriasis, eczema, vitiligo, and certain skin lymphomas when combined with ultraviolet light exposure. It is typically given orally, applied topically, or used via extracorporeal circulation. The medication is approved and used in clinical practice for these dermatological and oncological conditions.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q408570](https://www.wikidata.org/wiki/Q408570), [Wikipedia](https://en.wikipedia.org/wiki/Methoxsalen?oldid=1353659867) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Lim_2026_skin_cancer](drugs/drug_methoxsalen/pd_Lim_2026_skin_cancer.md) | skin cancer ← methoxsalen · time-to-event model | — | Lim W et al., IARC Group 1 Pharmaceuticals and Associ…, Cancer research and treatme… (2026) | [10.4143/crt.2024.1201](https://doi.org/10.4143/crt.2024.1201) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:33 | 0:04 | 0/0/0 | 1/0/0 | 0/0/0 | 9,170/177 | einfracz / qwen3.8-27b | 4 | 1/0 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 55 matched, 55 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lake_1995.pdf` | Lake BG et al., Metabolism of coumarin by precision-cut…, Xenobiotica; the fate of fo… (1995) | pd | 4 | [10.3109/00498259509061839](https://doi.org/10.3109/00498259509061839) | [7618341](https://www.ncbi.nlm.nih.gov/pubmed/7618341) | metadata signals extractable PD data (IC50) |
| `Li_2015.pdf` | Li JL et al., PTP1B inhibitors from stems of Angelica…, Bioorganic & medicinal chem… (2015) | pd | 4 | [10.1016/j.bmcl.2015.04.003](https://doi.org/10.1016/j.bmcl.2015.04.003) | [25891102](https://www.ncbi.nlm.nih.gov/pubmed/25891102) | metadata signals extractable PD data (IC50) |
| `Lv_2024.pdf` | Lv Z et al., Spectrum-effect relationship study betw…, Biomedical chromatography :… (2024) | pd | 4 | [10.1002/bmc.5847](https://doi.org/10.1002/bmc.5847) | [38368628](https://www.ncbi.nlm.nih.gov/pubmed/38368628) | metadata signals extractable PD data (IC50) |
| `Tantcheva-Poór_2001.pdf` | Tantcheva-Poór I et al., Liver cytochrome P450 CYP1A2 is markedl…, The British journal of derm… (2001) | pgx | 7 | [10.1046/j.1365-2133.2001.04233.x](https://doi.org/10.1046/j.1365-2133.2001.04233.x) | [11422031](https://www.ncbi.nlm.nih.gov/pubmed/11422031) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Sellers_2000.pdf` | Sellers EM et al., Mimicking gene defects to treat drug de…, Annals of the New York Acad… (2000) | pgx | 5 | [10.1111/j.1749-6632.2000.tb06685.x](https://doi.org/10.1111/j.1749-6632.2000.tb06685.x) | [10911933](https://www.ncbi.nlm.nih.gov/pubmed/10911933) | metadata signals extractable PGX data (CYP2D6*10) |

<sub>queue written 2026-11-24 01:33 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alsharari_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nicotine, with methoxsalen used only as a CYP inhibitor, and does not report any pharmacokinetic parameters for methoxsalen itself. |
| PGx | Alsharari_2014 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of nicotine in the presence of a methoxsalen drug interaction, not the effect of genetic variants on methoxsalen's PK/PD. |
| popPK | Arora_1976 | irrelevant | 0 | 0 | The study focuses on the factors influencing methoxsalen phototoxicity (timing, concentration, UVA dose) rather than reporting pharmacokinetic parameters like clearance, volume, or half-life. |
| PGx | Arora_1976 | not_relevant | 0 | 0 | The paper discusses methoxsalen phototoxicity in vitiligo but does not report any genetic variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Bond_1981 | irrelevant | 2 | 0 | This is a review article discussing the therapy generally; it lacks original quantitative pharmacokinetic parameter values (CL, V, etc.) for methoxsalen. |
| PGx | Bond_1981 | not_relevant | 0 | 0 | The paper is a general review of PUVA therapy and does not report any gene variants or genotypes affecting pharmacokinetics or pharmacodynamics. |
| popPK | Di_2009 | irrelevant | 0 | 0 | The paper is a review of CYP2A6 structure and function, and methoxsalen is only mentioned as a mechanism-based inhibitor, with no pharmacokinetic parameters reported. |
| PGx | Di_2009 | not_relevant | 0 | 0 | The paper mentions methoxsalen only as a mechanism-based inhibitor of CYP2A6 in the context of enzyme review, not as a drug whose pharmacokinetics or pharmacodynamics are being studied for pharmacogenomic effects. |
| popPK | Diffey_1986 | irrelevant | 0 | 0 | The paper focuses on the accuracy of UVA dosimetry meters in PUVA therapy and does not contain any pharmacokinetic data, parameters, or models for methoxsalen. |
| PGx | Diffey_1986 | not_relevant | 0 | 0 | The paper discusses the accuracy of UVA dosimeters in PUVA therapy and does not report any genetic variants affecting the pharmacokinetics or pharmacodynamics of methoxsalen. |
| popPK | Ehrsson_1979 | relevant | 4 | 0 | The study is a PK study of methoxsalen, but the provided evidence contains no numeric parameter values (e.g., clearance, half-life, AUC values) and states that the data were fitted to a model without listing the resulting constants. |
| PGx | Ehrsson_1979 | not_relevant | 0 | 0 | The study investigates the effect of food on methoxsalen pharmacokinetics in healthy subjects, not the effect of genetic variants or genotypes. |
| popPK | Gu_1998 | irrelevant | 0 | 0 | The study focuses on the metabolic activation of acetaminophen and DCBN by CYP enzymes, where methoxsalen (5- and 8-methoxsalen) is used only as an inhibitor, not as the subject of pharmacokinetic analysis. |
| PGx | Gu_1998 | not_relevant | 0 | 0 | The study investigates the role of CYP enzymes in the activation of acetaminophen and DCBN, using methoxsalen only as an inhibitor, and does not report pharmacogenomic effects on methoxsalen's PK or PD. |
| popPK | Guillon_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry and in-vitro pharmacology study reporting synthesis and bioactivity (IC50, DNA binding) without any pharmacokinetic or population parameter models. |
| PGx | Guillon_2018 | not_relevant | 0 | 0 | The paper reports the synthesis and activity of a chemical analog of methoxsalen, not a pharmacogenomic effect. |
| popPK | Ibbotson_2001 | irrelevant | 4 | 1 | The study reports single-timepoint serum concentrations (Cmax) but lacks quantitative disposition parameters (CL, V, t1/2) or a compartmental/population PK model. |
| PGx | Ibbotson_2001 | not_relevant | 0 | 0 | The paper investigates dose-response relationships but does not report any pharmacogenomic effects of gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Jakovljevic_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of celery/parsley juices on other drugs and CYP450 levels, not the pharmacokinetic parameters (CL, V, etc.) of methoxsalen itself. |
| PGx | Jakovljevic_2002 | not_relevant | 0 | 0 | The study examines the effect of dietary plants (celery/parsley) on drug metabolism, not the effect of a human gene variant/genotype on the PK or PD of methoxsalen. |
| popPK | Kharasch_2000 | irrelevant | 0 | 0 | Methoxsalen is used only as a mechanism-based inhibitor to probe CYP2A6 activity, not as the subject drug for which PK parameters are being characterized. |
| PGx | Kharasch_2000 | not_relevant | 0 | 0 | The paper investigates the effect of the CYP2A6 inhibitor methoxsalen on the pharmacokinetics of halothane, but it does not report how a genetic variant or genotype alters the PK/PD of methoxsalen itself. |
| popPK | Koulu_1982 | irrelevant | 0 | 0 | The study focuses on the biological effect of methoxsalen (Langerhans cell depletion) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Koulu_1982 | not_relevant | 0 | 0 | The study examines the dose-response and time-course of Langerhans cell depletion in humans but does not investigate the influence of genetic variants or genotypes. |
| popPK | Lake_1995 | irrelevant | 0 | 0 | The study investigates the metabolism of coumarin in vitro, using methoxsalen only as an enzyme inhibitor, with no pharmacokinetic parameters for methoxsalen itself reported. |
| PGx | Lake_1995 | not_relevant | 0 | 0 | The paper studies coumarin metabolism and reports that methoxsalen inhibits coumarin 7-hydroxylase in vitro, but it does not report a pharmacogenomic effect on the PK/PD of methoxsalen itself. |
| popPK | Li_1997 | irrelevant | 0 | 0 | The study focuses on CYP2A6 catalytic activity using coumarin as a substrate, with methoxsalen used only as a competitive inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Li_1997 | not_relevant | 0 | 0 | The paper compares CYP2A6 activity using coumarin as a substrate; methoxsalen is used only as a CYP2A6 inhibitor, not as the drug of interest. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The paper is a pharmacological study on PTP1B inhibition and molecular docking, not a pharmacokinetic study, and methoxsalen is only a tested compound. |
| PGx | Li_2015 | not_relevant | 0 | 0 | The paper reports the isolation of compounds and their PTP1B inhibitory activity in vitro, with no mention of genetic variants or pharmacokinetic/pharmacodynamic parameters in humans. |
| popPK | Lindelöf_1992 | irrelevant | 0 | 0 | The paper is a epidemiological study comparing carcinogenic potential of PUVA treatments and contains no pharmacokinetic data. |
| PGx | Lindelöf_1992 | not_relevant | 0 | 0 | The paper compares the carcinogenic potential of different PUVA regimens (trioxsalen vs. methoxsalen) but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Lowe_1987 | irrelevant | 1 | 0 | The study focuses on the comparative clinical efficacy of two dosage forms for psoriasis treatment and lacks original quantitative pharmacokinetic parameter reports for the subject drug. |
| PGx | Lowe_1987 | not_relevant | 0 | 0 | The study compares two dosage forms of methoxsalen and does not investigate gene variants or genotypes. |
| popPK | Man_2003 | irrelevant | 0 | 0 | The study focuses on the clinical time course of PUVA erythema (minimal phototoxic dose) rather than quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| PGx | Man_2003 | not_relevant | 0 | 0 | The paper describes the time course of PUVA erythema after methoxsalen immersion but does not report any genetic variants or pharmacogenomic influences on PK/PD parameters. |
| popPK | Micheal_2021 | relevant | 7 | 4 | The study is a bioequivalence PK study for methoxsalen in humans that reports non-compartmental parameters (AUC, Cmax, t1/2) in the text, but lacks compartmental model parameters like clearance (CL) or volume (V). |
| PGx | Micheal_2021 | not_relevant | 0 | 0 | The paper assesses bioequivalence between two formulations of methoxsalen but does not report on pharmacogenomic effects or genetic variants. |
| popPK | Minoda_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of halothane metabolism and lipid peroxidation, using methoxsalen only as a CYP2A6 inhibitor rather than as the subject of pharmacokinetic analysis. |
| PGx | Minoda_2001 | not_relevant | 0 | 0 | The paper studies the metabolism of halothane and uses methoxsalen only as an inhibitor, not as the subject of pharmacogenomic analysis. |
| popPK | Momtaz-T_1984 | irrelevant | 0 | 0 | The paper is a review of therapeutic approaches and dosimetry for PUVA, containing no original pharmacokinetic modeling or quantitative disposition parameters. |
| PGx | Momtaz-T_1984 | not_relevant | 0 | 0 | The paper discusses general strategies to improve PUVA efficacy and safety but contains no pharmacogenomic data or gene-specific effects. |
| popPK | Mäenpää_1993 | irrelevant | 0 | 0 | The study investigates methoxsalen as an inhibitor of CYP2A6/Cyp2a-5 enzyme activity (in vitro/in vivo enzyme kinetics) rather than measuring its pharmacokinetic disposition parameters. |
| PGx | Mäenpää_1993 | not_relevant | 0 | 0 |  |
| popPK | Ono_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic evaluation of CYP450 inhibition where methoxsalen serves only as an inhibitor probe, not a subject drug for pharmacokinetic modeling. |
| PGx | Ono_1996 | not_relevant | 0 | 0 | The paper uses methoxsalen as an inhibitor probe to evaluate CYP450 enzyme specificity, rather than reporting pharmacogenomic effects on methoxsalen's own PK/PD parameters. |
| popPK | Palacharla_2019 | irrelevant | 0 | 0 | The study uses methoxsalen solely as an in vitro inhibitor/phenotyping tool for enzymes and does not report any pharmacokinetic disposition parameters for methoxsalen itself. |
| PGx | Palacharla_2019 | not_relevant | 0 | 0 | The paper evaluates methoxsalen as an enzyme inhibitor in vitro and does not report any pharmacogenomic effects on its PK or PD. |
| popPK | Parrish_1977 | irrelevant | 0 | 0 | The paper is a clinical study on the efficacy of photochemotherapy for psoriasis and does not report any pharmacokinetic parameters (e.g., clearance, volume of distribution) for methoxsalen. |
| PGx | Parrish_1977 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing methoxsalen doses and placebo but contains no data on gene variants or pharmacogenomics. |
| popPK | Petrozzi_1978 | irrelevant | 0 | 0 | The paper is a clinical report on the efficacy of PUVA therapy for psoriasis and does not contain any pharmacokinetic parameter estimates (CL, V, ka, etc.) for methoxsalen. |
| PGx | Petrozzi_1978 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a treatment protocol using substitute equipment and higher drug doses, but does not investigate or report any association between gene variants/genotypes and methoxsalen's pharmacokinetics or pharmacodynamics. |
| popPK | Petrozzi_1979 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of phototherapy for psoriasis and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for methoxsalen. |
| PGx | Petrozzi_1979 | not_relevant | 0 | 0 | The paper reports clinical efficacy of methoxsalen treatment for psoriasis but does not investigate any gene variants or genotypes. |
| popPK | Rheeders_2006 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetic changes in cyclosporine (AUC, Cmax) caused by methoxsalen co-administration, and does not report quantitative disposition parameters (CL, V, t1/2) for methoxsalen itself. |
| PGx | Rheeders_2006 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction affecting cyclosporine's pharmacokinetics when co-administered with methoxsalen, not a pharmacogenomic effect on methoxsalen itself. |
| popPK | Rodríguez-Morató_2017 | irrelevant | 0 | 0 | The study investigates the biotransformation of tyrosol to hydroxytyrosol, using methoxsalen only as an inhibitor for CYP2A6, and reports no pharmacokinetic parameters for methoxsalen itself. |
| PGx | Rodríguez-Morató_2017 | not_relevant | 0 | 0 | The paper focuses on the biotransformation of dietary tyrosol into hydroxytyrosol, not the pharmacokinetics or pharmacodynamics of the drug methoxsalen. |
| popPK | Sellers_2000 | irrelevant | 0 | 0 | Methoxsalen is mentioned only as a CYP2A6 inhibitor used to mimic a gene defect in a review of drug dependence mechanisms, not as the subject of a pharmacokinetic study. |
| PGx | Sellers_2000 | not_relevant | 0 | 0 | The paper discusses methoxsalen only as an inhibitor of CYP2A6 in the context of treating tobacco dependence, and does not report pharmacokinetic or pharmacodynamic parameters of methoxsalen itself or its effects modified by gene variants. |
| PGx | Shephard_1999 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of 8-methoxypsoralen during extracorporeal photopheresis in a general population but does not report any pharmacogenomic effects (gene variants or genotypes) on PK or PD parameters. |
| popPK | Takeuchi_2006 | irrelevant | 0 | 0 | This is a carcinogenicity study investigating the inhibitory effects of methoxsalen on lung tumor development, and it does not report any quantitative pharmacokinetic parameters (e.g., CL, Vd, t1/2) for methoxsalen. |
| PGx | Takeuchi_2006 | not_relevant | 0 | 0 | The paper reports on the tumor-suppressive effects of methoxsalen on CYP-mediated metabolism and is not a pharmacogenomic study of a PK or PD parameter for a drug subject to genetic influence. |
| popPK | Tantcheva-Poór_2001 | irrelevant | 0 | 0 | The study measures caffeine clearance (a probe drug) to assess CYP1A2 enzyme activity, not the pharmacokinetic parameters of methoxsalen itself. |
| PGx | Tantcheva-Poór_2001 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (inhibition of CYP1A2 by methoxsalen) rather than a pharmacogenomic effect (genotype/phenotype) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Tsui_2013 | irrelevant | 0 | 0 | The text is a clinical practice guideline regarding phototherapy safety and dosage preparation, containing no pharmacokinetic parameters or disposition data. |
| PGx | Tsui_2013 | not_relevant | 0 | 0 | The text provides practical tips for phototherapy and psoralen dosing/concentration calculations but contains no information regarding gene variants, genotypes, or their impact on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Wollina_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antibody binding to skin after UV exposure and is not a pharmacokinetic study of methoxsalen. |
| PGx | Wollina_1988 | not_relevant | 0 | 0 | The paper studies the effect of UV-A and methoxsalen on antibody binding in skin tissue, not the impact of genetic variants on the pharmacokinetics or pharmacodynamics of methoxsalen. |
| popPK | Yamaguchi_2023 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of CYP2A6 inhibition, where methoxsalen serves only as a reference compound, and no pharmacokinetic disposition parameters are reported. |
| PGx | Yamaguchi_2023 | not_relevant | 0 | 0 | The paper discusses methoxsalen only as a reference compound for CYP2A6 inhibition and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Zhang_2001 | irrelevant | 0 | 0 | This is an in vitro mechanistic study evaluating methoxsalen as a CYP2A6 inhibitor, reporting no population pharmacokinetic parameters. |
| PGx | Zhang_2001 | not_relevant | 0 | 0 | The study evaluates methoxsalen as a CYP inhibitor in vitro but does not report a pharmacogenomic effect (gene variant) on its PK/PD parameters. |
| popPK | unknown_2006 | irrelevant | 0 | 0 | The paper is a clinical review of extracorporeal photophoresis for CTCL and GvHD, using methoxsalen as a photosensitizer, and contains no pharmacokinetic modeling or quantitative disposition parameters. |
| PGx | unknown_2006 | not_relevant | 0 | 0 | The paper is a review of extracorporeal photophoresis for CTCL and cGvHD and does not discuss pharmacogenomics or genetic variants affecting methoxsalen PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethoxsalen%5D&body=Drug%3A%20methoxsalen%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methoxsalen/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
