<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V06D&quot;,&quot;href&quot;:&quot;atc/V06D.md&quot;},{&quot;label&quot;:&quot;fructose&quot;}]"></div>

# fructose

- **generic name:** fructose
- **ATC codes:** `V06DC02`
- **DrugBank:** [DB04173](https://go.drugbank.com/drugs/DB04173) · **PubChem:** [CID 439553](https://pubchem.ncbi.nlm.nih.gov/compound/439553)
- **molar mass:** 180.1559 g/mol (C6H12O6) — DrugBank
- **groups:** approved, investigational

## About

Fructose is a carbohydrate nutrient. It is given orally or by intravenous injection. It is an approved substance used as a general nutrient.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27462479](https://www.wikidata.org/wiki/Q27462479), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="monkey" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Pettit_1976_reference](drugs/drug_fructose/Fructose_Pettit1976_reference.md) | — | 1-compartment (no model) | 0 | Pettit GW et al., Oral fructose tolerance, gastric emptyi…, Archives internationales de… (1976) | [10.3109/13813457609078567](https://doi.org/10.3109/13813457609078567) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.60).">human + animal</span> | [Kuhre_2014_GLP_1active](drugs/drug_fructose/pd_Kuhre_2014_GLP_1active.md) | GLP-1 secretion from GLUTag cells (relative GLP-1active levels) ← fructose · direct sigmoid Emax (Hill) effect | — | Kuhre RE et al., Fructose stimulates GLP-1 but not GIP s…, American journal of physiol… (2014) | [10.1152/ajpgi.00372.2013](https://doi.org/10.1152/ajpgi.00372.2013) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:25 | 0:04 | 0/1/0 | 1/0/0 | 0/0/0 | 4,175/159 | einfracz / qwen3.8-27b | 6 | 3/3 | 5/1 | 0 |

## Coverage

- **PubMed hits:** 184 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdussalam_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amiodarone in rats; fructose is only a component of the high-calorie diet used to induce obesity and is not the subject drug. |
| PGx | Abdussalam_2018 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of amiodarone, not fructose, and reports effects of a high-fat/high-fructose diet on drug metabolism rather than a pharmacogenomic effect on fructose. |
| popPK | Baugh_2023 | irrelevant | 0 | 0 | The study measures whole-body metabolic response (respiratory exchange ratio and substrate oxidation) to a small carbohydrate load using indirect calorometry, rather than reporting pharmacokinetic parameters (CL, V, ka) for fructose. |
| PGx | Baugh_2023 | not_relevant | 0 | 0 | The paper evaluates a metabolic chamber and the metabolic response to carbohydrates, not a pharmacogenomic effect of fructose. |
| popPK | Cavichi_2023 | irrelevant | 0 | 0 | This is a phytochemical/nutritional composition study of a wild plant; fructose appears only as a plant sugar content, with no PK parameters. |
| popPK | Choe_2003 | irrelevant | 0 | 0 | This is an in-vitro enzyme kinetics study of fructose-1,6-bisphosphatase, not a pharmacokinetic study of fructose; no PK parameters for fructose are reported. |
| popPK | Cui_2024 | irrelevant | 0 | 0 | The paper investigates the mechanistic role of Piezo channels in hypertension where fructose is used only as a dietary inducer of the disease model, not as a subject drug for pharmacokinetic analysis. |
| PGx | Cui_2024 | not_relevant | 0 | 0 | The study investigates the role of Piezo1 channels in blood pressure regulation using fructose as a dietary intervention to induce hypertension, not as a drug subject to pharmacogenomic analysis. |
| popPK | Di_2008 | irrelevant | 0 | 0 | The subject drug is metoprolol, and fructose is used only as a dietary agent to induce hypertension, so no pharmacokinetic parameters for fructose are reported. |
| PGx | Di_2008 | not_relevant | 0 | 10 | The study investigates the effect of a dietary phenotype (fructose feeding) on drug response, not a genetic variant (pharmacogenomics). |
| popPK | Faber_1992 | irrelevant | 0 | 0 | The paper is a review on maternofetal water transfer in sheep where fructose is mentioned only as a solute contributing to osmotic pressure, not as a subject drug for PK parameter estimation. |
| PGx | Faber_1992 | not_relevant | 0 | 0 | The paper discusses water transfer across the ovine placenta and does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of fructose. |
| popPK | Hsu_1997 | irrelevant | 0 | 0 | The study investigates cardiac mechanics and diabetic cardiomyopathy in rats using a fructose diet as a metabolic model, not the pharmacokinetics of fructose itself. |
| PGx | Hsu_1997 | not_relevant | 0 | 0 | The paper studies the effect of a fructose diet on cardiac mechanics in rats to model diabetic cardiomyopathy; it does not investigate the pharmacokinetics or pharmacodynamics of fructose as a drug, nor does it report any pharmacogenomic effects. |
| popPK | Katakam_1998 | irrelevant | 0 | 0 | The study investigates the effects of a fructose-rich diet on endothelial function and blood pressure, not the pharmacokinetics of fructose. |
| PGx | Katakam_1998 | not_relevant | 0 | 0 | The study investigates the physiological effects of a fructose-rich diet on blood pressure and endothelial function, not the pharmacokinetics or pharmacodynamics of fructose itself modulated by genetic variants. |
| popPK | Kelley-Loughnane_2002 | irrelevant | 0 | 0 | The paper describes in vitro enzyme kinetics (kcat, Km) of fructose-1,6-bisphosphatase, not the pharmacokinetics of fructose as a drug in a biological system. |
| PGx | Kelley-Loughnane_2002 | not_relevant | 0 | 0 | The study focuses on the kinetic characterization of a bacterial enzyme and does not report pharmacogenomic effects on the PK or PD of fructose. |
| popPK | Kiger_2001 | irrelevant | 2 | 2 | The paper models the pharmacokinetics of the boron atom (10B) from the BPA-F complex, not the disposition of fructose itself. |
| PGx | Kiger_2001 | not_relevant | 0 | 0 | The paper describes a general pharmacokinetic model for boronophenylalanine-fructose but does not report any effects of gene variants, genotypes, or genotypes on PK/PD parameters. |
| popPK | Kreuzberg_1978 | irrelevant | 0 | 0 | This is an in-vitro enzymatic kinetics study focusing on phosphofructokinase interaction, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Kreuzberg_1978 | not_relevant | 0 | 0 | The paper studies enzyme kinetics in yeast, not human pharmacogenomics of fructose. |
| popPK | Kuhre_2014 | irrelevant | 0 | 0 | This is a gut hormone secretion study (GLP-1, GIP, etc.) using fructose as an oral stimulus; no PK disposition parameters (CL, V, half-life, PK model) for fructose are reported. |
| popPK | Kulkarni_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rosiglitazone, not fructose; fructose is only used as a dietary component to induce the disease model. |
| PGx | Kulkarni_2016 | not_relevant | 0 | 10 | The study investigates the effect of a disease state (NAFLD) on the pharmacokinetics of rosiglitazone, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of fructose. |
| PGx | Pettit_1976 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic model for fructose in monkeys but does not investigate the influence of any gene variants or genotypes. |
| popPK | Semnani-Azad_2020 | irrelevant | 0 | 0 | This is a dietary epidemiology meta-analysis of fructose-containing foods and metabolic syndrome risk, with no pharmacokinetic parameters for fructose. |
| popPK | Walker_2012 | irrelevant | 0 | 0 | This is an enzyme-kinetics study of phosphofructokinase in a parasite, not a pharmacokinetic study of fructose; no disposition parameters for fructose are reported. |
| popPK | Wei_2022 | irrelevant | 0 | 0 | The paper focuses on the evolution and bioinformatics analysis of the GFPT enzyme family, not the pharmacokinetics of fructose. |
| PGx | Wei_2022 | not_relevant | 0 | 0 | The paper focuses on the evolutionary analysis of the GFPT protein family and contains no data on pharmacokinetics or pharmacodynamics of fructose. |
| popPK | Wu_2009 | irrelevant | 0 | 0 | The paper describes a biological fuel cell device using fructose as a substrate for electrochemical oxidation, not a pharmacokinetic study of fructose disposition in biological systems. |
| PGx | Wu_2009 | not_relevant | 0 | 0 | The paper describes a biological fuel cell using fructose as a fuel substrate, not a pharmacokinetic or pharmacodynamic study of fructose in a biological system involving gene variants. |
| popPK | Yang_2014 | irrelevant | 1 | 0 | The subject drug is 18F-FBPA-Fr (a boronophenylalanine analog), not fructose; fructose is only part of the chemical name of the analog. |
| PGx | Yang_2014 | not_relevant | 0 | 0 | The study examines pharmacokinetics in a specific rat strain without analyzing the impact of specific genetic variants or genotypes on drug parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfructose%5D&body=Drug%3A%20fructose%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fructose/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 00:25 UTC</sub>
