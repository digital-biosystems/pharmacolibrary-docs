# encainide

- **generic name:** encainide
- **ATC codes:** `C01BC08`
- **DrugBank:** [DB01228](https://go.drugbank.com/drugs/DB01228)
- **groups:** approved, withdrawn

## About

**Description.** All drug products containing encainide hydrochloride. Encainide hydrochloride, formerly marketed as Enkaid capsules, was associated with increased death rates in patients who had asymptomatic heart rhythm abnormalities after a recent heart attack. The manufacturer of Enkaid capsules voluntarily withdrew the product from the US market on December 16, 1991.

**Indication.** Encainide is a class Ic antiarrhythmic agent which was used for management of irregular heartbeats, such as atrial fibrillation, atrial flutter, ventricular tachycardia, and ventricular fibrillation.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 09:49 | 18:49 | 0/0/0 | 1/0/0 | 0/0/0 | 113,149/10,915 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 5/1 | 4/3 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2023](drugs/drug_encainide/pd_Li_2023_Kv.md) | Li H et al., Encainide, a class Ic anti-arrhythmic a…, The Korean journal of physi… (2023) | [10.4196/kjpp.2023.27.4.399](https://doi.org/10.4196/kjpp.2023.27.4.399) |

## Coverage

- **PubMed hits:** 83 matched, 84 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Funck-Brentano_1989.pdf` | Funck-Brentano C et al., Effect of low dose quinidine on encaini…, The Journal of pharmacology… (1989) | popPK | 10 | not captured | [2496225](https://pubmed.ncbi.nlm.nih.gov/2496225) | The abstract explicitly reports quantitative pharmacokinetic parameters for encainide, including systemic clearance, nonrenal clearance, and elimination half-life, for both extensive and poor metabolizers. |
| `Bergstrand_1986.pdf` | Bergstrand RH et al., Encainide disposition in patients with…, Clinical pharmacology and t… (1986) | popPK | 9 | [10.1038/clpt.1986.140](https://doi.org/10.1038/clpt.1986.140) | [3087679](https://pubmed.ncbi.nlm.nih.gov/3087679) | The paper is a relevant PK study of encainide in renal failure, but the provided evidence contains only qualitative descriptions of changes (e.g., "significantly lower," "80% higher") without specific numeric parameter values for clearance, volume, or half-life. |
| `Jaillon_1990.pdf` | Jaillon P, Pharmacokinetics and metabolism of enca…, Cardiovascular drugs and th… (1990) | popPK | 9 | [10.1007/BF00357031](https://doi.org/10.1007/BF00357031) | [2125833](https://pubmed.ncbi.nlm.nih.gov/2125833) | The text explicitly reports quantitative pharmacokinetic parameters for encainide, including systemic clearance (1.8 l/min for EMs, 0.2 l/min for PMs), elimination half-life (2.5 h for EMs, 8-11 h for PMs), and oral bioavailability (30% for EMs, 88% for PMs). |
| `Roden_1986.pdf` | Roden DM et al., Disposition kinetics of encainide and m…, The American journal of car… (1986) | popPK | 9 | [10.1016/0002-9149(86)90097-4](https://doi.org/10.1016/0002-9149(86)90097-4) | [3092618](https://pubmed.ncbi.nlm.nih.gov/3092618) | The abstract provides specific quantitative pharmacokinetic parameters for encainide, including clearance (1.9 L/min), bioavailability (30%), and half-life (2.3 hours) for extensive metabolizers. |
| `Wang_1984.pdf` | Wang T et al., Influence of genetic polymorphism on th…, The Journal of pharmacology… (1984) | popPK | 9 | not captured | [6423808](https://pubmed.ncbi.nlm.nih.gov/6423808) | The study reports quantitative PK parameters (half-life, bioavailability) for encainide, but specific values for clearance and volume of distribution are not explicitly listed in the provided abstract text. |
| `Wensing_1991.pdf` | Wensing G et al., Pharmacokinetics of encainide in patien…, Cardiovascular drugs and th… (1991) | popPK | 9 | [10.1007/BF03029748](https://doi.org/10.1007/BF03029748) | [1909559](https://pubmed.ncbi.nlm.nih.gov/1909559) | The paper is a relevant PK study for encainide, but the provided evidence (abstract) contains only qualitative descriptions of parameter changes without specific numeric values. |
| `Quart_1986.pdf` | Quart BD et al., Drug interaction studies and encainide…, The American journal of car… (1986) | popPK | 8 | [10.1016/0002-9149(86)90112-8](https://doi.org/10.1016/0002-9149(86)90112-8) | [2875643](https://pubmed.ncbi.nlm.nih.gov/2875643) | The paper reports quantitative changes in clearance (66% reduction in renal impairment, 6-fold decrease in hepatic impairment) and concentration increases, but lacks absolute numeric values for CL, V, or half-life. |
| `Roden_1980.pdf` | Roden DM et al., Total suppression of ventricular arrhyt…, The New England journal of… (1980) | popPK | 8 | [10.1056/NEJM198004173021601](https://doi.org/10.1056/NEJM198004173021601) | [6767186](https://pubmed.ncbi.nlm.nih.gov/6767186) | The study reports pharmacokinetic data for encainide, including a specific half-life range (1.9-3.8 hours), but lacks other quantitative disposition parameters like clearance or volume of distribution. |
| `Dorian_1986.pdf` | Dorian P et al., Pharmacodynamic modeling of antiarrhyth…, Journal of cardiovascular p… (1986) | pd | 5 | [10.1097/00005344-198611000-00018](https://doi.org/10.1097/00005344-198611000-00018) | [2434749](https://www.ncbi.nlm.nih.gov/pubmed/2434749) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Follmer_1992.pdf` | Follmer CH et al., Differential block of cardiac delayed r…, Cardiovascular research (1992) | pd | 5 | [10.1093/cvr/26.11.1121](https://doi.org/10.1093/cvr/26.11.1121) | [1291091](https://www.ncbi.nlm.nih.gov/pubmed/1291091) | metadata signals extractable PD data (IC50) |
| `Follath_1991.pdf` | Follath F, Clinical pharmacology of antiarrhythmic…, Journal of cardiovascular p… (1991) | pd | 4 | not captured | [1723123](https://www.ncbi.nlm.nih.gov/pubmed/1723123) | metadata signals extractable PD data (concentration-effect) |
| `Sheldon_1994.pdf` | Sheldon RS et al., Class I antiarrhythmic drugs: allosteri…, The Journal of pharmacology… (1994) | pd | 4 | not captured | [8301556](https://www.ncbi.nlm.nih.gov/pubmed/8301556) | metadata signals extractable PD data (IC50) |
| `Buchert_1992.pdf` | Buchert E et al., Clinical implications of variable antia…, Pharmacogenetics (1992) | pgx | 5 | [10.1097/00008571-199202000-00002](https://doi.org/10.1097/00008571-199202000-00002) | [1302039](https://www.ncbi.nlm.nih.gov/pubmed/1302039) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-09T09:47:10.270565+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abi_1989 | not_relevant | 1 | 0 | The text is a qualitative review of class IC antiarrhythmic drugs and does not provide specific numeric PD parameters or concentration-effect data for encainide. |
| PGx | Arcavi_1993 | not_relevant | 2 | 0 | The text is a review introduction listing encainide as a drug with genetic polymorphism but does not report specific quantitative PK/PD effects or fitted parameters. |
| popPK | Bergstrand_1986 | relevant | 9 | 2 | The paper is a relevant PK study of encainide in renal failure, but the provided evidence contains only qualitative descriptions of changes (e.g., "significantly lower," "80% higher") without specific numeric parameter values for clearance, volume, or half-life. |
| PD | Bergstrand_1986 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic disposition of encainide in renal failure and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Boriani_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propafenone, with encainide mentioned only as a comparator drug in the introduction. |
| PD | Boriani_1990 | not_relevant | 1 | 0 | The paper focuses on propafenone PK/PD correlations with oxidative phenotype; encainide is only mentioned as a drug undergoing oxidative metabolism, with no data or parameters reported for it. |
| popPK | Bottorff_1989 | irrelevant | 0 | 0 | The study investigates encainide as a probe for drug-drug interactions with antipyrine, reporting no effect on antipyrine's pharmacokinetics rather than providing disposition parameters for encainide itself. |
| PD | Brown_1987 | not_relevant | 3 | 2 | The paper focuses on ACC-9358 and only provides a qualitative correlation (r-value) for ACC-9358, without reporting specific numeric PD parameters (Emax, EC50) or a dose-response curve for encainide. |
| PD | Bryson_1993 | not_relevant | 0 | 0 | The paper is a review of propafenone and does not report any pharmacodynamic or exposure-response data for encainide. |
| PGx | Buchert_1992 | not_relevant | 2 | 0 | The text is a general introduction discussing the potential for pharmacogenomic prediction in antiarrhythmics like encainide but does not report specific experimental data, effect sizes, or quantitative PK/PD changes. |
| popPK | Chase_1987 | irrelevant | 2 | 0 | The paper is a review article that summarizes general pharmacokinetic properties (e.g., bioavailability range) without reporting specific quantitative disposition parameters (CL, V, ka) or population-PK model values for encainide. |
| popPK | Distlerath_1984 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study characterizing a cytochrome P-450 enzyme and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for encainide. |
| PGx | Distlerath_1984 | not_relevant | 2 | 0 | The paper characterizes a CYP enzyme using encainide as a substrate assay but does not report pharmacogenomic effects on encainide PK/PD parameters. |
| PGx | Distlerath_1985 | not_relevant | 2 | 0 | The paper characterizes the enzyme (CYP2D6) responsible for encainide metabolism but does not report specific pharmacokinetic or pharmacodynamic parameter changes linked to genotypes. |
| popPK | Dorian_1986 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic modeling of a metabolite, not the pharmacokinetic disposition parameters of encainide itself. |
| PGx | Eichelbaum_1984 | not_relevant | 2 | 0 | The paper mentions encainide as a substrate affected by the PM phenotype but provides no specific PK/PD data, effect sizes, or quantitative parameters for encainide. |
| PD | Follath_1991 | not_relevant | 1 | 0 | The paper is a review discussing general variability in metabolism and dose requirements for antiarrhythmic drugs, without reporting specific numeric PD parameters or concentration-effect curves for encainide. |
| popPK | Fronc_1992 | irrelevant | 2 | 0 | The paper is a case report and literature review that discusses dosing adjustments qualitatively but does not report quantitative pharmacokinetic parameters (CL, V, ka) for encainide. |
| PD | Fronc_1992 | not_relevant | 2 | 1 | The text is a case report and literature review that qualitatively mentions the correlation between metabolite concentrations and electrophysiologic response but does not provide specific numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve in the provided abstract. |
| PD | Funck-Brentano_1989 | not_relevant | 3 | 2 | The paper reports PK changes and qualitative ECG effects (QRS prolongation) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for encainide. |
| popPK | Gillis_1984 | irrelevant | 2 | 1 | The paper is a review that provides only a qualitative description and a general half-life range (1-3h) for encainide, lacking specific quantitative disposition parameters like clearance or volume of distribution. |
| PD | Gomoll_1986 | not_relevant | 3 | 2 | The text provides qualitative efficacy data and relative potency comparisons (e.g., 7-11x quinidine) and specific effective doses (0.67 mg/kg), but it does not report a formal concentration-effect curve, Emax/EC50 parameters, or a PK/PD model fit. |
| popPK | Halvorsen_1991 | irrelevant | 2 | 0 | The study is a single-case report focusing on dialysis clearance rather than standard population PK parameters, and no specific numeric values for clearance, volume, or half-life are provided in the evidence. |
| PD | Hilleman_1992 | not_relevant | 1 | 0 | The study reports PK changes (AUC) and a qualitative lack of significant ECG effect, but provides no numeric PD parameters or concentration-effect relationship. |
| popPK | Jones_1995 | irrelevant | 0 | 0 | The paper is a case report on propafenone-induced amnesia and does not report quantitative pharmacokinetic parameters for encainide. |
| PGx | Kazierad_1989 | not_relevant | 2 | 5 | The paper reports a drug-drug interaction (diltiazem) and mentions genetic phenotypes (EM/PM) as context, but does not report a direct pharmacogenomic effect size or fitted parameter for encainide. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the mechanism of encainide on potassium channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Lucas_1990 | irrelevant | 0 | 0 | The paper is a review discussing electrophysiology and perioperative management without reporting original quantitative pharmacokinetic parameters for encainide. |
| popPK | Mann_1990 | irrelevant | 0 | 0 | The paper is a review of moricizine, and encainide is only mentioned as a comparator agent without any pharmacokinetic parameters reported for it. |
| popPK | Mehvar_2002 | irrelevant | 1 | 0 | The paper is a review discussing stereoselectivity in antiarrhythmics and does not report original quantitative pharmacokinetic parameter values for encainide. |
| PD | Mehvar_2002 | not_relevant | 1 | 0 | The text is a qualitative review discussing stereoselectivity in PK and PD generally, without providing specific numeric PD parameters or concentration-effect curves for encainide. |
| PD | Meyer_1982 | not_relevant | 1 | 0 | The text is a general review of pharmacogenetics that mentions encainide as a substrate for debrisoquine hydroxylase but provides no specific pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| PGx | Meyer_1982 | not_relevant | 2 | 0 | The paper mentions encainide as a substrate affected by debrisoquine hydroxylase polymorphism but provides no specific data, effect sizes, or quantitative PK/PD parameters for encainide. |
| popPK | Morganroth_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on dose-response for arrhythmia suppression and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Morganroth_1986 | not_relevant | 4 | 2 | The paper reports a qualitative dose-response relationship (10, 25, 50 mg) but the abstract does not provide specific numeric effect values (e.g., % suppression) or concentration data to derive PD parameters like Emax or EC50. |
| popPK | Morganroth_1986_2 | irrelevant | 0 | 0 | The paper is a review of efficacy and safety data for encainide in ventricular arrhythmias and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Morganroth_1986_2 | not_relevant | 3 | 2 | The text is a review of clinical trials that mentions defining the lower end of the dose-response curve but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect relationship. |
| popPK | Pottage_1983 | irrelevant | 0 | 0 | The paper is a qualitative review of class I antiarrhythmics that discusses encainide's complex disposition but provides no quantitative pharmacokinetic parameter values. |
| popPK | Quart_1986 | relevant | 8 | 4 | The paper reports quantitative changes in clearance (66% reduction in renal impairment, 6-fold decrease in hepatic impairment) and concentration increases, but lacks absolute numeric values for CL, V, or half-life. |
| popPK | Roden_1980 | relevant | 8 | 2 | The study reports pharmacokinetic data for encainide, including a specific half-life range (1.9-3.8 hours), but lacks other quantitative disposition parameters like clearance or volume of distribution. |
| popPK | Roden_1988 | irrelevant | 2 | 0 | The text is a qualitative review/abstract describing metabolic polymorphisms and general disposition characteristics without providing specific quantitative PK parameter values (CL, V, t1/2) for encainide. |
| popPK | Roden_1989 | irrelevant | 2 | 3 | The study reports pharmacokinetic parameters (clearance, half-life) for the metabolite MODE, not the parent drug encainide, which is only used as a comparator or probe. |
| PD | Sheldon_1994 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action (allosteric inhibition of batrachotoxinin binding) and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for encainide. |
| popPK | Svensson_1987 | irrelevant | 1 | 0 | The study focuses on encainide's effect on antipyrine metabolism (drug interaction) rather than reporting quantitative pharmacokinetic disposition parameters for encainide itself. |
| popPK | Thale_1985 | relevant | 4 | 2 | The study reports a terminal half-life (~75 min) and metabolite concentrations, but lacks explicit clearance, volume of distribution, or compartmental model parameters required for population PK extraction. |
| popPK | Tordjman_1987 | irrelevant | 2 | 0 | The text is a review summary that mentions a half-life but lacks quantitative disposition parameters (CL, V, Q, ka) or a compartmental model. |
| PD | Turgeon_1990 | not_relevant | 3 | 2 | The paper reports qualitative changes in QRS prolongation and arrhythmia suppression rates with drug interaction but does not provide a concentration-effect curve, Emax/EC50 parameters, or a formal PK/PD model fit. |
| PGx | Turgeon_1991 | not_relevant | 0 | 0 | The study concludes that the observed variability in encainide metabolism among extensive metabolizers is not determined by the CYP2D6 genotype, but rather by non-genetic factors. |
| PGx | Venkatakrishnan_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP2D6 inhibition by terbinafine affecting encainide, but does not report pharmacogenomic effects (gene variants) on encainide PK/PD. |
| popPK | Wang_1984 | relevant | 9 | 4 | The study reports quantitative PK parameters (half-life, bioavailability) for encainide, but specific values for clearance and volume of distribution are not explicitly listed in the provided abstract text. |
| popPK | Wensing_1991 | relevant | 9 | 0 | The paper is a relevant PK study for encainide, but the provided evidence (abstract) contains only qualitative descriptions of parameter changes without specific numeric values. |
| popPK | Woosley_1986 | irrelevant | 0 | 0 | The text is a general review discussing pharmacokinetic principles in heart failure and mentions encainide only as an example of an agent with minimal myocardial depression, without providing any specific quantitative PK parameters for it. |
| PD | Woosley_1986 | not_relevant | 1 | 0 | The text is a qualitative review discussing general PK changes in CHF and mentions encainide only in the context of minimal myocardial depression without providing any numeric PD parameters or concentration-effect data. |
| popPK | Woosley_1987 | irrelevant | 0 | 0 | The text is a general review discussing pharmacokinetic principles in CHF and mentions encainide only as an example of an agent with minimal myocardial depression, without providing any quantitative PK parameters. |
| PD | Woosley_1987 | not_relevant | 1 | 0 | The text is a qualitative review discussing general PK changes in CHF and mentions encainide only in the context of minimal myocardial depression without providing any numeric PD parameters or concentration-effect data. |
| popPK | Zhou_2009 | irrelevant | 0 | 0 | The paper is a review of CYP2D6 substrates and variants; while it mentions encainide metabolism qualitatively in Supplementary Figure 6, it does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for encainide. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The provided text consists only of a title and figure captions without any specific data, tables, or text describing the pharmacokinetic or pharmacodynamic effects of CYP2D6 polymorphisms on encainide. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_encainide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
