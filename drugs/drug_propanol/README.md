<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;propanol&quot;}]"></div>

# propanol

- **generic name:** propanol
- **ATC codes:** `D08AX03`
- **DrugBank:** [DB03175](https://go.drugbank.com/drugs/DB03175) · **PubChem:** not captured
- **groups:** approved

## About

Propanol (propyl alcohol) is used as an antiseptic and disinfectant for the skin. It is an approved topical antiseptic, though it is not an authorised medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q14985](https://www.wikidata.org/wiki/Q14985) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:38 | 15:07 | 0/0/0 | 1/1/0 | 0/0/0 | 264,507/7,819 | einfracz / qwen3.8-27b | 19 | 7/7 | 17/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Hsieh_2006_DO](drugs/drug_propanol/pd_Hsieh_2006_DO.md) | DO production ← propanol · inhibition effect | — | Hsieh SH et al., The combined toxic effects of nonpolar…, Water research (2006) | [10.1016/j.watres.2006.03.026](https://doi.org/10.1016/j.watres.2006.03.026) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Di_2020_Botrytis_cinerea_mycelial_growth](drugs/drug_propanol/pd_Di_2020_Botrytis_cinerea_mycelial_growth.md) | Botrytis cinerea mycelial growth biomarker turnover ← 2-methyl-1-propanol | — | Di Francesco A et al., Bioactivity of volatile organic compoun…, World journal of microbiolo… (2020) | [10.1007/s11274-020-02947-7](https://doi.org/10.1007/s11274-020-02947-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=propanol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: LYZ (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 227 matched, 117 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ernstgård_2003.pdf` | Ernstgård L et al., Sex differences in the toxicokinetics o…, Toxicology and applied phar… (2003) | popPK | 10 | [10.1016/j.taap.2003.08.005](https://doi.org/10.1016/j.taap.2003.08.005) | [14644618](https://pubmed.ncbi.nlm.nih.gov/14644618) | The study is a PK/PK-population study of 2-propanol in humans, but the abstract only provides qualitative descriptions of differences (e.g., "smaller", "higher") without specific numeric parameter values like CL, Vd, or half-life times. |
| `Atluri_2003.pdf` | Atluri H et al., Disposition of short-chain aliphatic al…, Experimental eye research (2003) | popPK | 8 | [10.1016/s0014-4835(02)00311-1](https://doi.org/10.1016/s0014-4835(02)00311-1) | [12573660](https://pubmed.ncbi.nlm.nih.gov/12573660) | The study reports quantitative pharmacokinetic parameters (half-life, AUC, tmax, Cmax) for 1-propanol specifically in rabbit vitreous humor using non-compartmental analysis. |
| `Florek_2015.pdf` | Florek E et al., Influence of tobacco smoke exposure on…, Pharmacological reports : PR (2015) | popPK | 8 | [10.1016/j.pharep.2015.02.007](https://doi.org/10.1016/j.pharep.2015.02.007) | [26398386](https://pubmed.ncbi.nlm.nih.gov/26398386) | The study reports quantitative pharmacokinetic parameters for n-propanol in rats, but the specific numeric values are not explicitly listed in the provided text evidence. |

<sub>queue written 2026-10-07T07:36:34.148697+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arcanjo_2018 | irrelevant | 0 | 0 | The paper is a study on wastewater photocatalysis where 2-propanol is used solely as a chemical scavenger to inhibit hydroxyl radicals, not as a subject for pharmacokinetic analysis. |
| popPK | Barbhaiya_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitomycin C in dogs, not propanol. |
| popPK | Beckett_2022 | irrelevant | 0 | 0 | The paper studies the environmental emissions of 2-propanol from mattresses, not its pharmacokinetics in a biological subject. |
| popPK | Brito_2017 | irrelevant | 0 | 0 | The study investigates the pharmacological vasodilator mechanism of 2-nitro-1-phenyl-1-propanol in rat mesenteric vessels using myography, not the population pharmacokinetics of propanol. |
| popPK | Brouwer_2023 | irrelevant | 0 | 0 | The paper describes an occupational exposure study measuring airborne volatile organic compound concentrations (including 2-propanol) in nail technicians, not the pharmacokinetics of the drug propanol. |
| PGx | Chandra_2017 | not_relevant | 0 | 0 | The paper discusses the bioremediation of distillery sludge containing a specific isomer (1-phenyl-1-propanol) and does not report any pharmacokinetic or pharmacodynamic effects of a pharmacological propanol drug on gene variants or genotypes. |
| popPK | De_2000 | irrelevant | 0 | 0 | The paper reports in vitro anti-HIV activity of synthesized derivatives, not pharmacokinetic parameters for propanol. |
| popPK | Di_2020 | irrelevant | 0 | 0 | The study investigates the antifungal effects of volatile organic compounds (including 2-methyl-1-propanol) produced by Aureobasidium yeasts on Botrytis cinerea, which is a biological control study, not a pharmacokinetic study of propanol disposition in an organism. |
| PGx | Eder_2018 | not_relevant | 0 | 0 | The paper concerns the genetics of volatile compound production (propanol) in yeast fermentation, not pharmacogenomics or pharmacokinetics. |
| popPK | Ernstgård_2003 | relevant | 10 | 1 | The study is a PK/PK-population study of 2-propanol in humans, but the abstract only provides qualitative descriptions of differences (e.g., "smaller", "higher") without specific numeric parameter values like CL, Vd, or half-life times. |
| PGx | Ernstgård_2003 | not_relevant | 0 | 0 | The study explicitly states that there were no significant differences in toxicokinetics between subjects of different metabolic genotypes or phenotypes. |
| PGx | Fasan_2011 | not_relevant | 0 | 0 | The paper describes metabolic engineering of E. coli for biotransformation of propane to propanol, which is unrelated to human pharmacogenomics or the drug propanol. |
| popPK | Fitzsimmons_1997 | irrelevant | 0 | 0 | The study investigates the mechanism of Ca2+ release by palmitoyl-CoA in rat pancreatic acinar cells and uses propanol only as a solvent for chemical extraction, not as a pharmacokinetic subject. |
| popPK | Florek_2015 | relevant | 8 | 2 | The study reports quantitative pharmacokinetic parameters for n-propanol in rats, but the specific numeric values are not explicitly listed in the provided text evidence. |
| PGx | Florek_2015 | not_relevant | 0 | 10 | The study investigates the influence of tobacco smoke exposure and alcohol preference phenotype on the pharmacokinetics of ethanol, not a gene variant's effect on propanol. |
| popPK | Garcia_2005 | irrelevant | 0 | 0 | The study is a materials science investigation into dentin stiffness using propanol as a solvent, not a pharmacokinetic study. |
| popPK | Gomes_2024 | irrelevant | 0 | 0 | The paper describes the synthesis and cytotoxicity of copper complexes and contains no pharmacokinetic data or parameters for propanol. |
| popPK | Gorbatchuk_2001 | irrelevant | 0 | 0 | The paper investigates the binding of propanol vapors to solid trypsin protein, which is a mechanistic/physicochemical study, not a pharmacokinetic study of propanol disposition. |
| popPK | Hicks_2007 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of solabegron on bladder function in dogs, not the pharmacokinetics of propanol. |
| popPK | Holler_1993 | irrelevant | 0 | 0 | The paper studies phospholipase D activity in rat hippocampal slices where propanol is used as a reagent to generate labeled phosphatidylpropanol, not as a drug subject for PK analysis. |
| popPK | Hsieh_2006 | irrelevant | 0 | 0 | The paper reports toxicity data (EC50) in algae, not pharmacokinetic parameters (CL, V, etc.) for propanol. |
| popPK | Huy_2007 | irrelevant | 0 | 0 | The study focuses on the physicochemical mechanism of beta-hematin formation induced by alcohols, not on the pharmacokinetic disposition of propanol. |
| PGx | Iwase_2006 | not_relevant | 0 | 0 | The paper studies the effect of solvents (including 1-propanol) on CYP3A activity in vitro, not a pharmacogenomic effect on the pharmacokinetics of propanol. |
| popPK | Jackisch_1994 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding/pharmacology study of budipine and biperiden (one is a propanol derivative but not the drug propanol itself) and does not report pharmacokinetic parameters for propanol. |
| PGx | Jurin_2024 | not_relevant | 0 | 0 | The paper reports the synthesis and in vitro biological activity of hydantoin compounds, with no mention of pharmacogenomics or propanol. |
| PGx | Kampf_1999 | not_relevant | 0 | 0 | The study evaluates bactericidal activity of disinfectants against bacteria, not human pharmacokinetics or pharmacodynamics modulated by host genetics. |
| popPK | Kirchgessner_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization of the LXR agonist BMS-779788 in monkeys, not the pharmacokinetics of propanol. |
| PGx | Koyama_1993 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenetics of imipramine, not propanol. |
| PGx | Krul_1998 | not_relevant | 0 | 0 | The paper describes a method for analyzing caffeine metabolites to assess enzyme activities; it does not study pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of propanol. |
| PGx | Kröplin_1998 | not_relevant | 0 | 0 | The paper discusses thiopurine metabolism and TPMT activity, but does not report on the pharmacokinetics or pharmacodynamics of propanol. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The text contains only a list of primers and restriction sites, with no data on pharmacokinetics, pharmacodynamics, or propanol. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | The paper discusses the metabolism of propanol as a substrate in a cross-coupling reaction with Vitamin E mediated by CYP3A4, but does not report on genetic variants or pharmacogenomic effects on propanol's PK/PD parameters. |
| popPK | Macário_2018 | irrelevant | 0 | 0 | The paper studies the ecotoxicity of deep eutectic solvents in bacteria, not the pharmacokinetics of 1-propanol. |
| popPK | Maruyama_2012 | irrelevant | 0 | 0 | The study evaluates the pharmacological effects of ritobegron on bladder function and does not report pharmacokinetic parameters for propanol. |
| popPK | Marzo_2009 | irrelevant | 0 | 0 | The study reports the pharmacokinetics of isoxsuprine hydrochloride, not propanol. |
| PGx | Maurer_2000 | not_relevant | 0 | 0 | The paper investigates pharmacodynamic synergistic cytotoxicity in cell lines and does not report any pharmacogenomic effects or data on the drug propanol. |
| popPK | McKarns_1997 | irrelevant | 0 | 0 | The study is an in vitro mechanistic toxicity assessment (QSAR) of membrane integrity, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| PGx | Min_2016 | not_relevant | 0 | 0 | The paper does not report pharmacogenomic effects on propanol, but rather focuses on PBPK modeling for drug-drug interactions of sarpogrelate. |
| popPK | Misra_2007 | irrelevant | 0 | 0 | The paper describes the extraction of bioactive principles from Mucuna pruriens seeds, where n-propanol is used as an extraction solvent rather than being the subject of pharmacokinetic analysis. |
| popPK | Muir_1983 | irrelevant | 0 | 0 | The study is an in vitro toxicology assessment of industrial chemicals (including isopropanol) on rabbit ileum, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Nisoli_1994 | irrelevant | 0 | 0 | The paper studies the beta-3 adrenoceptor agonist SR 58611A in rat brown fat, and propanol is only part of a drug name (CGP 20712A) used as a non-selective antagonist; no PK parameters for propanol are reported. |
| PGx | Noble_2015 | not_relevant | 0 | 0 | The paper investigates sulfur metabolism and propanol production as a fermentation byproduct in yeast, not the pharmacokinetics or pharmacodynamics of the drug propanol. |
| PGx | Ohno_2004 | not_relevant | 0 | 0 | The paper studies the metabolism of carvedilol, not propanol, and focuses on enzyme identification/kinetics rather than genetic variant effects. |
| popPK | Ozakca_2007 | irrelevant | 0 | 0 | The paper is a pharmacological study of beta-adrenoceptors in rat gastric fundus and does not report pharmacokinetic parameters for propanol. |
| PGx | Palamanda_2000 | not_relevant | 0 | 0 | The paper is an in vitro study on the effect of organic solvents on CYP2C9 activity and does not report pharmacogenomic effects on propanol PK/PD. |
| PGx | Pettenuzzo_2026 | not_relevant | 0 | 0 | The paper investigates heat stress responses in grapevines (Vitis vinifera) and does not study the pharmacokinetics or pharmacodynamics of propanol in humans. |
| popPK | Przejczowska-Pomierny_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ibuprofen, not propanol (2-propanol is only used as a solvent). |
| popPK | Ramírez_2023 | irrelevant | 0 | 0 | The study measures environmental air concentrations of volatile organic compounds (including 2-propanol) in beauty salons, not the pharmacokinetic disposition of propanol in a biological system. |
| PGx | Rasmussen_1996 | not_relevant | 0 | 0 | The paper describes an analytical method for theophylline and does not discuss propanol or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Rasmussen_1996_2 | not_relevant | 0 | 0 | The paper studies caffeine metabolism and enzyme activity, not the pharmacokinetics or pharmacodynamics of propanol. |
| popPK | Rauma_2009 | irrelevant | 2 | 0 | The study focuses on dermal absorption and diffusion coefficients (D) for propanol in porcine skin, not systemic pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Rauma_2009_2 | irrelevant | 0 | 0 | The study focuses on dermal diffusion of various volatile chemicals including 2-propanol (isopropanol) using in-vitro methods, which is not a systemic pharmacokinetic study reporting disposition parameters for propanol (1-propanol). |
| popPK | Renard-Rooney_1997 | irrelevant | 0 | 0 | The paper investigates the mechanistic effects of 1-propanol on InsP3 receptors in permeabilized hepatocytes (in vitro/mechanistic), not its pharmacokinetics. |
| popPK | Rhyu_2006 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of black cohosh on opiate receptors in an in-vitro system, using 2-propanol only as a solvent, and does not report pharmacokinetic parameters for propanol. |
| PGx | Salustiano_2020 | not_relevant | 0 | 0 | The paper investigates glycosphingolipid biosynthesis in leukemia and does not involve propanol or pharmacogenomic effects on its PK/PD parameters. |
| PGx | Sasaki_2001 | not_relevant | 0 | 0 | The study focuses on the metabolism of roxatidine acetate, not propanol, and does not report any gene variant effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Sawada_1987 | irrelevant | 0 | 0 | The study investigates the growth inhibitory effects of ethanol, isopropanol, and propanol on E. coli bacteria (microbiology/toxicology), not the pharmacokinetics of propanol in a host organism. |
| popPK | Schaad_1988 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of ethanol and propanol effects on cAMP formation in mouse brain, not a pharmacokinetic study reporting disposition parameters for propanol. |
| PGx | Stott_1997 | not_relevant | 0 | 0 | The paper investigates the protective effect of diethyldithiocarbamate on 1,3-dichloro-2-propanol toxicity in rats, but does not report any pharmacogenomic effects (gene variant/genotype) on PK/PD parameters. |
| popPK | Suchomel_2023 | irrelevant | 0 | 0 | The paper is an antimicrobial efficacy study of hand rubs and does not report pharmacokinetic parameters for propanol. |
| popPK | Tan_2023 | irrelevant | 0 | 0 | The paper is an electrocatalysis study focused on chemical synthesis, not a pharmacokinetic study of the drug propanol. |
| PGx | Tomicic_2011 | not_relevant | 3 | 2 | The study investigates 1-methoxy-2-propanol (a solvent), not the drug propanol, and focuses on sex/hormonal differences with only a tendency observed for CYP2E1 polymorphisms on methyl ethyl ketone. |
| popPK | Varin_1986 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for carvedilol, not propanol. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | The paper describes a luminescent sensor for methanol and Fe(III) detection and mentions n-propanol only as a negative control for the sensor's selectivity, reporting no pharmacokinetic parameters. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper describes protein engineering of an enzyme for industrial stability and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of propanol in humans or animals. |
| popPK | Weight_1999 | irrelevant | 0 | 0 | The paper is a mechanistic review of alcohol effects on P2X receptors and does not report pharmacokinetic disposition parameters for propanol. |
| popPK | Weiss_1996 | irrelevant | 0 | 0 | The study investigates the effect of sympathomimetics (epinephrine, dopamine, dobutamine) on neutrophil oxygen radical production and does not involve propanol pharmacokinetics. |
| PGx | Wu_2017 | not_relevant | 0 | 0 | The paper describes the engineering of an enzyme (HheC) for biocatalysis, not a pharmacogenomic study of drug disposition or response in humans. |
| popPK | Wuest_2009 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of isoproterenol on detrusor muscle, not the pharmacokinetics of propanol. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The study is an in-vitro rumen fermentation experiment on nitroethane and nitropropanol, not a pharmacokinetic study on propanol (isopropanol/ethanol) in humans or animals. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper studies environmental fate and toxicity of C9 aromatics, not pharmacokinetics of propanol. |
| PGx | Zhu_2026 | not_relevant | 0 | 0 | The paper focuses on the fermentation of rice wine and physicochemical properties, not human pharmacogenomics or the pharmacokinetics of propanol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
