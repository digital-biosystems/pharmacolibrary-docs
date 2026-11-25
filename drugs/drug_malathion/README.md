<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03A&quot;,&quot;href&quot;:&quot;atc/P03A.md&quot;},{&quot;label&quot;:&quot;malathion&quot;}]"></div>

# malathion

- **generic name:** malathion
- **ATC codes:** `P03AX03`
- **DrugBank:** [DB00772](https://go.drugbank.com/drugs/DB00772) · **PubChem:** [CID 4004](https://pubchem.ncbi.nlm.nih.gov/compound/4004)
- **molar mass:** 330.358 g/mol (C10H19O6PS2) — DrugBank
- **groups:** approved

## About

Malathion is an organophosphate insecticide used to treat lice infestation. It is given topically in forms such as lotion, emulsion, or shampoo. The drug is approved for use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q423005](https://www.wikidata.org/wiki/Q423005), [Wikipedia](https://en.wikipedia.org/wiki/Malathion?oldid=1383855862) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">other organism</span> | [Aldridge_2017_LD](drugs/drug_malathion/pd_Aldridge_2017_LD.md) | mortality (dose-response to topical malathion) ← malathion · model not identified | — | Aldridge RL et al., Permethrin and malathion LD90 values fo…, Medical and veterinary ento… (2017) | [10.1111/mve.12236](https://doi.org/10.1111/mve.12236) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Laetz_2009_AChE](drugs/drug_malathion/pd_Laetz_2009_AChE.md) | brain acetylcholinesterase activity (% of carrier control) ← malathion · direct sigmoid Emax (Hill) effect | — | Laetz CA et al., The synergistic toxicity of pesticide m…, Environmental health perspe… (2009) | [10.1289/ehp.0800096](https://doi.org/10.1289/ehp.0800096) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Liu_2019_AChE](drugs/drug_malathion/pd_Liu_2019_AChE.md) | acetylcholinesterase (AChE) inhibition ← malathion · inhibition effect | — | Liu L et al., Three-dimensional (3D) brain microphysi…, PloS one (2019) | [10.1371/journal.pone.0224657](https://doi.org/10.1371/journal.pone.0224657) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sinha_1995_chlorophyll_content](drugs/drug_malathion/pd_Sinha_1995_chlorophyll_content.md) | chlorophyll content ← malathion · direct sigmoid Emax (Hill) effect | — | Sinha S et al., Modulation of cadmium uptake and toxici…, Environmental monitoring an… (1995) | [10.1007/BF00547127](https://doi.org/10.1007/BF00547127) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:51 | 0:04 | 0/0/0 | 2/2/0 | 0/0/0 | 3,661/174 | einfracz / qwen3.8-27b | 36 | 1/27 | 35/1 | 0 |

## Coverage

- **PubMed hits:** 253 matched, 113 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abass_2009 | irrelevant | 0 | 0 | The study is an in-vitro assessment of cytochrome P450 enzyme inhibition (mechanistic), not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for malathion. |
| PGx | Abass_2009 | not_relevant | 0 | 0 | The paper evaluates CYP inhibition potential of pesticides in human microsomes without reporting any effects of gene variants or genotypes on PK/PD parameters. |
| PGx | Abuelmaali_2013 | not_relevant | 2 | 5 | kdr L1014F association is reported only for DDT/pyrethroids; no genotype effect on malathion mortality or PK/PD parameter is quantified. |
| PGx | Ahmad_2016 | not_relevant | 1 | 1 | This is an insecticide resistance study in mosquitoes; kdr genotypes are linked to deltamethrin survival, not to any PK/PD parameter of malathion in a pharmacogenomic sense. |
| popPK | Akgür_1999 | irrelevant | 0 | 0 | The study measures biomarker enzyme activities (PON1 and AChE) to assess toxicity sensitivity, not quantitative pharmacokinetic parameters (CL, V, ka) for malathion. |
| PGx | Akgür_1999 | not_relevant | 6 | 3 | The study measures baseline enzyme activities correlated with PON1 phenotype in an exposed group, but does not report a change in specific PK or PD parameters (like AUC or IC50) of malathion resulting from the genotype. |
| PGx | Al-Saeed_2024 | not_relevant | 2 | 3 | Study examines essential oil effects on CYP1A2 expression and malathion toxicity biomarkers, not a gene variant/genotype effect on malathion PK/PD parameters. |
| popPK | Alharbi_2017 | irrelevant | 1 | 0 | Malathion is used solely as a negative control/comparator chemical in a study focused on chlorpyrifos and P-glycoprotein inhibition, and no quantitative PK parameters for malathion are reported. |
| PGx | Alharbi_2017 | not_relevant | 0 | 0 | The study investigates chemosensitization of malathion and chlorpyrifos by oil sands water in fish, not a genetic variant (pharmacogenomic) effect. |
| popPK | Ashauer_2010 | relevant | 8 | 3 | The study reports quantitative toxicokinetic parameters (uptake/elimination rate constants, bioaccumulation factors) for malathion in *Gammarus pulex*, but the specific numeric values for malathion are not explicitly listed in the provided abstract text, which only gives ranges for all 14 compounds. |
| PGx | Ashauer_2010 | not_relevant | 0 | 0 | The paper reports toxicokinetics in a freshwater invertebrate and does not investigate genetic variants or pharmacogenomic effects. |
| popPK | Ashauer_2012 | relevant | 6 | 2 | First-order toxicokinetic model with uptake/elimination/biotransformation rate constants fitted for malathion in Gammarus pulex, but the numeric parameter values are in tables/figures/SI not included in the evidence. |
| popPK | Barua_2026 | irrelevant | 0 | 0 | This is a review of AI/ML toxicity prediction tools; malathion appears only as a toxic-exposure example (rat, 2100 mg/kg immunotoxicity) with no PK parameters. |
| popPK | Belden_2001 | irrelevant | 0 | 0 | The study measures acetylcholinesterase activity in midges (toxicity/mode of action) and does not report pharmacokinetic parameters for malathion. |
| PGx | Belden_2001 | not_relevant | 0 | 0 | The paper describes a chemical interaction (co-exposure to atrazine) rather than a pharmacogenomic effect driven by a genetic variant or genotype. |
| popPK | Bisht_2021 | irrelevant | 0 | 0 | The study measures resistance (LC50) in ticks, not pharmacokinetic parameters for malathion. |
| PGx | Bisht_2021 | not_relevant | 0 | 0 | The study evaluates pesticide resistance profiles and enzyme activities in ticks but does not report human pharmacogenomic effects on malathion PK or PD parameters. |
| popPK | Bourguet_1996 | irrelevant | 0 | 0 | The study investigates resistance mechanisms in mosquitoes (Culex pipiens) and does not report pharmacokinetic parameters for malathion. |
| PGx | Bourguet_1996 | not_relevant | 5 | 2 | The paper describes a phenotypic change (insensitive AChE) affecting insecticide susceptibility, but it does not quantify specific pharmacokinetic or pharmacodynamic parameters (e.g., EC50, AUC, clearance) in a way that fits the standard pharmacogenomic effect size criteria for malathion. |
| PGx | Boussougou-Sambe_2024 | not_relevant | 0 | 0 | Malathion susceptibility is reported only as phenotypic mortality (100%), with no gene variant/genotype linked to any PK/PD parameter of malathion. |
| popPK | Buratti_2005 | irrelevant | 1 | 1 | The study is an in-vitro mechanistic investigation of malathion bioactivation kinetics (Kmapp) in human liver microsomes, not a systemic pharmacokinetic study reporting clearance, volume, or half-life parameters. |
| PGx | Buratti_2005 | not_relevant | 0 | 0 | The paper does not report pharmacogenomic effects of genetic variants on PK/PD parameters for malathion. |
| popPK | Buratti_2006 | irrelevant | 1 | 0 | The study reports in vitro intrinsic clearance (CLi) values for CYP3A isoforms metabolizing malathion, which is mechanistic data rather than population pharmacokinetic disposition parameters in a biological system. |
| PGx | Buratti_2006 | not_relevant | 0 | 0 | The study compares the catalytic activity of different CYP3A isoforms (CYP3A4, 3A5, 3A7) on malathion, which is a developmental physiology/isozyme comparison, not an analysis of how a specific human gene variant (genotype) alters pharmacokinetic or pharmacodynamic parameters in individuals. |
| popPK | Calaf_2021 | irrelevant | 0 | 0 | The paper investigates the carcinogenic mechanisms of malathion in rat models and cell lines, reporting no quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PGx | Calaf_2021 | not_relevant | 0 | 0 | The paper discusses the carcinogenic effects of malathion and other substances in breast cancer models, focusing on cell proliferation and enzymatic activity (acetylcholinesterase), but it does not investigate pharmacogenomic effects on pharmacokinetic (PK) or pharmacodynamic (PD) parameters of malathion. |
| popPK | Carver_1989 | irrelevant | 2 | 0 | This is an in-vitro/in-extracorporeal study using isolated porcine skin flaps to model percutaneous absorption, lacking standard systemic disposition parameters (CL, V, t1/2) for the drug in a living subject. |
| PGx | Carver_1989 | not_relevant | 0 | 0 | The study examines general percutaneous absorption in an ex vivo porcine skin model and does not report any genetic variant effects on pharmacokinetic parameters. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The study concerns herbicide resistance mechanisms in a weed species where malathion is used only as a non-reversing comparator/inhibitor, with no PK data for malathion itself. |
| PGx | Chen_2020 | not_relevant | 0 | 0 | The paper investigates herbicide resistance in a weed, and malathion is used only as a negative control P450 inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Chiba_2013 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition (IC50/Ki) rather than a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life. |
| PGx | Chiba_2013 | not_relevant | 1 | 5 | The paper reports in vitro inhibition of hOCT2 by malathion but does not link a specific gene variant or genotype to changes in malathion's PK or PD parameters. |
| popPK | Cutti_2021 | irrelevant | 0 | 0 | This study investigates herbicide resistance mechanisms in plants and uses malathion only as an inhibitor to identify the resistance mechanism; it does not report pharmacokinetic parameters for malathion. |
| PGx | Cutti_2021 | not_relevant | 2 | 1 | The paper investigates herbicide cross-resistance in plants using malathion as a CYP inhibitor, not a pharmacogenomic effect of a gene variant on malathion's PK/PD parameters in a human or animal context. |
| popPK | EFSA_2026 | irrelevant | 0 | 0 | EFSA QPS list update on microorganisms; no malathion PK parameters or any pharmacokinetic data present. |
| PGx | Estep_2025 | not_relevant | 6 | 7 | Malathion LD50s are reported per kdr genotype, but the paper explicitly shows no genotype effect (RR &lt; 3, strains not distinct), so no pharmacogenomic effect on malathion PK/PD is demonstrated. |
| popPK | Georgopoulos_2009 | irrelevant | 0 | 0 | The paper focuses on a computational framework for exposure reconstruction using chlorpyrifos and does not report pharmacokinetic parameters for malathion. |
| PGx | Georgopoulos_2009 | not_relevant | 0 | 0 | The paper focuses on exposure reconstruction for chlorpyrifos, not malathion, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Gilot-Delhalle_1983 | irrelevant | 0 | 0 | The study assesses mutagenicity in yeast (Schizosaccharomyces pombe) and contains no pharmacokinetic data or quantitative disposition parameters for malathion. |
| PGx | Gilot-Delhalle_1983 | not_relevant | 0 | 0 | The study tests mutagenicity in yeast and does not involve human gene variants affecting PK/PD. |
| popPK | Goldner_2013 | irrelevant | 0 | 0 | The paper is an epidemiological study on thyroid disease and pesticide exposure, not a pharmacokinetic study, and contains no PK parameters for malathion. |
| PGx | Goldner_2013 | not_relevant | 0 | 0 | The paper reports an association between pesticide use and hypothyroidism, not a pharmacogenomic effect of a gene variant on the PK/PD of malathion. |
| popPK | González-Torralva_2021 | irrelevant | 0 | 0 | This is a plant herbicide-resistance study; malathion is only used as a P450 inhibitor co-treatment, with no PK parameters for malathion. |
| PGx | González-Torralva_2021 | not_relevant | 0 | 0 | Malathion is used only as a P450 inhibitor tool to probe trifluralin resistance in weeds; no gene variant effect on malathion PK/PD is reported. |
| popPK | González-Torralva_2023 | irrelevant | 0 | 0 | The study investigates quizalofop resistance in weedy rice and uses malathion only as a metabolism inhibitor probe, reporting no pharmacokinetic parameters. |
| PGx | González-Torralva_2023 | not_relevant | 0 | 0 | The paper focuses on quizalofop resistance in rice; malathion is mentioned only as a non-effective metabolism inhibitor in an assay, not as the drug of interest with a reported pharmacogenomic effect on its PK/PD. |
| popPK | González-Torralva_2024 | irrelevant | 0 | 0 | Malathion is used only as a P450 inhibitor probe in a weed resistance study; no pharmacokinetic parameters for malathion are reported. |
| PGx | González-Torralva_2024 | not_relevant | 0 | 0 | The paper focuses on herbicide resistance mutations (Ile1781Leu, Ile2041Asn) in ACCase genes of Johnsongrass; malathion is only used as an enzyme inhibitor in a toxicity assay to test for metabolism, not as the primary drug subject to pharmacogenomic analysis. |
| PGx | Hayd_2020 | not_relevant | 2 | 5 | Kdr genotyping is linked to pyrethroid (deltamethrin) resistance; malathion mortality is reported by population/year but no genotype effect on a malathion PK/PD parameter is established. |
| popPK | Horn_2023 | irrelevant | 0 | 0 | The study is an in vitro mechanistic toxicity investigation of oximes and organophosphates, reporting no pharmacokinetic disposition parameters for malathion. |
| PGx | Horn_2023 | not_relevant | 0 | 0 | The study investigates in vitro hepatotoxicity of oximes and pesticides but does not report any gene variants or genotypes affecting malathion PK/PD. |
| PGx | Ibrahim_2019 | not_relevant | 0 | 0 | Malathion susceptibility is only reported as population-level mortality; no gene variant/genotype effect on malathion PK/PD parameters is assessed. |
| popPK | Imran_2024 | irrelevant | 0 | 0 | The study investigates the association of GSTP1 polymorphism with chloropyrifos toxicity and malathion exposure is mentioned only as a context or comparator without reporting any pharmacokinetic parameters. |
| PGx | Imran_2024 | not_relevant | 0 | 0 | The study investigates the association between GSTP1 polymorphism and chloropyrifos toxicity/bioaccumulation, not malathion, and does not report quantitative changes in PK/PD parameters for malathion. |
| popPK | Johnson_1987 | irrelevant | 0 | 0 | The study is a mechanistic investigation of acetylcholinesterase inhibition constants and does not report pharmacokinetic parameters like clearance, volume, or half-life. |
| PGx | Johnson_1987 | not_relevant | 0 | 0 | The paper compares species (fish vs. rodents) rather than investigating genetic variants or genotypes within a species. |
| popPK | Jones_2010 | irrelevant | 0 | 0 | This is a structural biology and homology modeling study focusing on CYP450 enzymes and ligand docking; it contains no quantitative pharmacokinetic parameters (CL, V, t1/2) for malathion. |
| PGx | Jones_2010 | not_relevant | 1 | 0 | The paper reports homology modeling of Drosophila P450 enzymes and structural complementarity, but does not report empirical pharmacokinetic or pharmacodynamic changes caused by specific genotypes. |
| PGx | Josse_2014 | not_relevant | 2 | 3 | No gene variant/genotype/phenotype effect on malathion PK/PD; only chemical impurity interactions and CYP transcript changes in vitro. |
| popPK | Jover_1994 | irrelevant | 0 | 0 | The study focuses on in vitro cytotoxicity and IC50 values, not on the pharmacokinetic disposition parameters (clearance, volume, half-life) of malathion. |
| PGx | Jover_1994 | not_relevant | 0 | 0 | The paper evaluates general cytotoxicity of chemicals in cell cultures and does not report any gene variant or genotype effects on pharmacokinetic or pharmacodynamic parameters of malathion. |
| PGx | Kerah-Hinzoumbé_2008 | not_relevant | 2 | 3 | Malathion susceptibility only reported as full mortality with no genotype-linked PK/PD effect; kdr genotyping relates to pyrethroids, not malathion. |
| popPK | Key_2006 | irrelevant | 0 | 0 | The study is an ecotoxicological assay in shrimp focusing on acetylcholinesterase inhibition and mortality, not pharmacokinetic parameters for malathion. |
| PGx | Key_2006 | not_relevant | 0 | 0 | The paper analyzes toxicological correlations between acetylcholinesterase inhibition and mortality in shrimp life stages, not pharmacogenomic effects of gene variants on drug PK/PD parameters. |
| popPK | Kreutz_2026 | irrelevant | 0 | 0 | PBPK/IVIVE platform comparison for DNT chemicals; malathion is not the subject drug and no malathion PK parameters appear in the evidence. |
| popPK | Krstić_2008 | irrelevant | 0 | 0 | The study is an in-vitro enzyme inhibition assay reporting kinetic constants (KI, IC50) for acetylcholinesterase, not population pharmacokinetic parameters (CL, V, ka) for malathion. |
| PGx | Krstić_2008 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics of AChE by malathion and its metabolites, but it does not report any pharmacogenomic effects (gene variants/genotypes) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Laetz_2009 | irrelevant | 0 | 0 | This is a toxicity study of AChE inhibition in salmon exposed to pesticide mixtures; no PK disposition parameters (CL, V, ka, half-life, compartmental model) for malathion are reported. |
| popPK | Laetz_2013 | irrelevant | 0 | 0 | The study focuses on neurobehavioral toxicity and acetylcholinesterase inhibition in fish, not pharmacokinetic disposition parameters. |
| PGx | Laetz_2013 | not_relevant | 0 | 0 | The study focuses on ecological toxicology and pesticide mixtures in salmon, not on human pharmacogenomics or genetic variations affecting malathion's PK/PD. |
| popPK | Lahr_2001 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50/EC50) of malathion to aquatic invertebrates, not pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Lahr_2001 | not_relevant | 0 | 0 | The paper studies acute insecticide toxicity in aquatic invertebrates, not pharmacogenomics of malathion in humans. |
| popPK | Lan_2022 | irrelevant | 0 | 0 | The study investigates herbicide resistance in black-grass and uses malathion only as a metabolic inhibitor to assess the mechanism of herbicide resistance, not as the subject drug for PK analysis. |
| PGx | Lan_2022 | not_relevant | 1 | 1 | The paper focuses on herbicide resistance in black-grass and mentions malathion only as a P450 inhibitor in a mechanistic study of clodinafop-propargyl metabolism, not as a drug of interest for PK/PD analysis. |
| popPK | Losso_2004 | irrelevant | 0 | 0 | The study is an ecotoxicity assay (embryotoxicity in mussels) reporting EC50 values, not a pharmacokinetic study with quantitative disposition parameters (CL, V, ka, etc.). |
| PGx | Losso_2004 | not_relevant | 0 | 0 | The paper reports environmental toxicity in bivalves, not pharmacogenomic effects of human gene variants on malathion PK/PD. |
| popPK | Lu_2020 | irrelevant | 0 | 0 | The paper focuses on the molecular mechanisms of malathion resistance in fruit flies (Bactrocera dorsalis) and does not report population pharmacokinetic parameters or quantitative disposition metrics. |
| PGx | Lu_2020 | not_relevant | 3 | 2 | The paper reports a functional difference in detoxification capability between alleles, but it does not quantify specific pharmacokinetic (e.g., clearance, AUC) or pharmacodynamic (e.g., EC50) parameters of malathion exposure in a pharmacogenomic context. |
| popPK | Lu_2020_2 | irrelevant | 0 | 0 | The study investigates herbicide resistance in plants using malathion as a cytochrome P450 inhibitor, not the pharmacokinetics of malathion. |
| PGx | Lu_2020_2 | not_relevant | 0 | 0 | The paper studies herbicide resistance in plants and uses malathion as a CYP inhibitor probe, not to measure PK/PD of malathion in humans or based on a specific genetic variant of the host. |
| popPK | Lund_2000 | irrelevant | 0 | 0 | The study is a toxicology assay measuring acetylcholinesterase inhibition in grass shrimp embryos, not a pharmacokinetic study reporting disposition parameters for malathion. |
| PGx | Lund_2000 | not_relevant | 0 | 0 | The study assesses toxicity in shrimp embryos and contains no human pharmacogenomic data regarding genetic variants affecting malathion PK or PD. |
| popPK | Luong_2022 | irrelevant | 0 | 0 | The study is a toxicological/mechanistic study in Drosophila assessing tissue-specific P450 expression and resistance, without reporting quantitative pharmacokinetic parameters (CL, V, ka, etc.) for malathion. |
| PGx | Luong_2022 | not_relevant | 2 | 3 | The study focuses on the spatial distribution of P450 enzyme activity in Drosophila tissues rather than reporting specific pharmacokinetic or pharmacodynamic parameter changes linked to a defined human or specific genetic variant for malathion. |
| PGx | Menze_2016 | not_relevant | 2 | 5 | Paper reports malathion susceptibility (mortality) in mosquitoes but no gene variant/genotype effect on malathion PK/PD parameters. |
| PGx | Messenger_2017 | not_relevant | 2 | 3 | Malathion mortality is reported as a resistance phenotype over time/sites, but no genotype (e.g., kdr) effect on malathion response is analyzed; kdr was only tested against DDT and deltamethrin. |
| PGx | Niang_2016 | not_relevant | 1 | 3 | Malathion susceptibility is reported only as population-level mortality (full susceptibility), with no genotype/kdr effect on malathion PK or PD parameters. |
| popPK | PENNELL_1964 | irrelevant | 0 | 0 | The paper studies dieldrin resistance inheritance in mosquitoes and malathion is only mentioned as a non-cross-resistant comparator. |
| PGx | PENNELL_1964 | not_relevant | 0 | 0 | The paper reports genetic resistance to dieldrin in mosquitoes, explicitly noting no cross-resistance to malathion, and does not study human pharmacogenomics or malathion PK/PD. |
| popPK | Pala_1991 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of calmodulin activity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Pala_1991 | not_relevant | 0 | 0 | The paper studies in vitro effects of malathion on calmodulin activity and does not report any genetic or pharmacogenomic modulation of pharmacokinetic or pharmacodynamic parameters. |
| PGx | Pandian_2020 | not_relevant | 0 | 0 | Malathion is used only as a CYP-inhibitor tool to probe tembotrione metabolism in sorghum; no pharmacokinetic or pharmacodynamic parameter of malathion itself is reported. |
| popPK | Pandian_2021 | irrelevant | 0 | 0 | The study focuses on herbicide resistance in sorghum where malathion is used as a CYP inhibitor, not as the subject drug for PK analysis. |
| PGx | Pandian_2021 | not_relevant | 3 | 5 | The study focuses on a single-gene trait for metabolic resistance to chlorsulfuron in sorghum, using malathion only as a CYP inhibitor for mechanism elucidation rather than studying malathion's own PK/PD parameters or the effect of a gene variant on malathion's handling. |
| popPK | Pandian_2023 | irrelevant | 0 | 0 | The study focuses on mesotrione resistance in sorghum, using malathion only as a CYP inhibitor for mechanistic assays, not as the subject of PK analysis. |
| PGx | Pandian_2023 | not_relevant | 1 | 0 | The paper investigates mesotrione resistance in sorghum and uses malathion as a P450 inhibitor to test metabolic pathways, but does not report pharmacokinetic or pharmacodynamic parameters for malathion itself. |
| popPK | Panozzo_2017 | irrelevant | 0 | 0 | The study investigates herbicide resistance mechanisms in sorghum and uses malathion only as a P450 inhibitor co-treatment, providing no pharmacokinetic data for malathion. |
| PGx | Panozzo_2017 | not_relevant | 0 | 0 | The paper investigates herbicide resistance mechanisms (ALS gene variants) in sorghum and malathion's role in metabolite resistance, but does not report pharmacogenomic effects on malathion's PK/PD parameters. |
| popPK | Paporisch_2017 | irrelevant | 0 | 0 | Malathion is used only as a P450 inhibitor to study herbicide metabolism in plants, not as the subject of a pharmacokinetic study. |
| PGx | Paporisch_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of herbicide metabolism in sweet corn, not human pharmacogenomics; malathion is used as an experimental P450 inhibitor to test the mechanism, not as the drug of interest for which PK/PD parameters are being measured in relation to genotype. |
| PGx | Pinto_2019 | not_relevant | 2 | 3 | Reports malathion susceptibility in mosquito populations and kdr mutations, but no genotype-linked effect on a malathion PK/PD parameter. |
| popPK | Printes_2004 | irrelevant | 0 | 0 | The study measures acute toxicity (EC50) and enzyme inhibition (AChE activity) in *Daphnia magna*, not pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Printes_2004 | not_relevant | 0 | 0 | The study evaluates the toxicological relationship between acetylcholinesterase inhibition and immobility in Daphnia magna exposed to malathion, but does not assess pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Pöch_1990 | irrelevant | 0 | 0 | The study focuses on dose-response curves and combined toxicity interactions in mice, not on the quantitative pharmacokinetic parameters (clearance, volume, half-life) of malathion. |
| PGx | Pöch_1990 | not_relevant | 0 | 0 | The paper evaluates combined toxicology of malathion and parathion but does not report any gene variant or pharmacogenomic effect on PK/PD parameters. |
| PGx | Safi_2019 | not_relevant | 0 | 0 | Insecticide resistance study in mosquitoes; no gene variant effect on malathion PK/PD parameters in a pharmacogenomic sense. |
| popPK | Schiffman_1995 | irrelevant | 0 | 0 | The study investigates the effect of malathion on taste electrophysiology in gerbils, not its pharmacokinetics. |
| PGx | Schiffman_1995 | not_relevant | 0 | 0 | The paper studies the effects of malathion on taste responses in gerbils, not the effect of a gene variant on malathion's pharmacokinetics or pharmacodynamics. |
| popPK | Seibert_2002 | irrelevant | 0 | 0 | The study investigates in vitro protein binding effects on cytotoxic potency (EC50) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for malathion. |
| PGx | Seibert_2002 | not_relevant | 0 | 0 | The paper investigates the impact of medium protein concentration (albumin) on the nominal effective concentrations of chemicals, which is a general physicochemical property, not a pharmacogenomic effect mediated by human gene variants. |
| popPK | Shrestha_2021 | irrelevant | 0 | 0 | The study is an epidemiological analysis of olfactory impairment associated with pesticide use and contains no pharmacokinetic parameters for malathion. |
| PGx | Shrestha_2021 | not_relevant | 0 | 0 | The paper reports epidemiological associations between pesticide exposure and olfactory impairment, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Simaremare_2019 | irrelevant | 0 | 0 | This is a biomonitoring exposure study of organophosphate and pyrethroid insecticides in blood/urine; malathion is not the subject drug and no PK disposition parameters are reported. |
| popPK | Singh_1981 | irrelevant | 0 | 0 | The paper describes a genetic selection experiment for insecticide resistance in Drosophila, containing no pharmacokinetic disposition parameters (CL, V, t1/2, etc.) for malathion. |
| PGx | Singh_1981 | not_relevant | 0 | 0 | The paper reports on evolutionary selection for malathion resistance in Drosophila and describes resistance as a polygenic trait with dominance effects, but it does not report specific pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Sinha_1995 | irrelevant | 0 | 0 | The study investigates ecotoxicology in plants (Spirodela polyrrhiza) and reports no pharmacokinetic parameters for malathion. |
| PGx | Sinha_1995 | not_relevant | 0 | 0 | The paper studies toxicological interactions in a plant species (Spirodela polyrrhiza) and does not involve pharmacogenomics or human/animal pharmacokinetics. |
| popPK | Soumaila_2017 | irrelevant | 0 | 0 | The study reports insecticide susceptibility and resistance mechanisms in mosquitoes, not quantitative pharmacokinetic parameters (CL, V, etc.) for malathion. |
| PGx | Soumaila_2017 | not_relevant | 0 | 0 | The study investigates insecticide resistance in mosquitoes, not the pharmacogenomics of malathion in humans. |
| popPK | Sudhakar_2024 | irrelevant | 0 | 0 | The paper studies the herbicide tembotrione in wheat, and malathion is used only as a P450 inhibitor/probe, not as the subject of a pharmacokinetic study. |
| PGx | Sudhakar_2024 | not_relevant | 0 | 0 | The paper studies the metabolism of tembotrione in wheat, where malathion is used merely as a P450 inhibitor to test for enzyme involvement; it does not report the pharmacogenomic effect of a variant on malathion's own PK/PD. |
| popPK | Sun_2017 | irrelevant | 0 | 0 | Malathion is only used as a P450 inhibitor probe in a maize herbicide-safener study; no PK parameters for malathion are reported. |
| popPK | Sun_2017_2 | irrelevant | 0 | 0 | The study reports LC50 values (toxicity) in Drosophila, not pharmacokinetic disposition parameters (CL, V, t1/2) for malathion. |
| popPK | Tessier_2000 | irrelevant | 0 | 0 | The study examines sublethal behavioral and toxicological effects (net anomalies, AChE inhibition) in caddisfly larvae, not pharmacokinetic disposition parameters. |
| PGx | Tessier_2000 | not_relevant | 0 | 0 | The paper studies sublethal toxic effects (net anomalies) of malathion on caddisfly larvae, not pharmacogenomic effects on PK/PD parameters in humans or animals. |
| popPK | Tietze_1993 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50) values for an insect species, not quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Tietze_1993 | not_relevant | 0 | 0 | The paper reports acute toxicity of malathion on mosquito larvae but does not investigate gene variants or genotypes affecting pharmacokinetic or pharmacodynamic parameters. |
| popPK | Toumi_2015 | irrelevant | 0 | 0 | This is an ecotoxicology study on Daphnia magna reporting toxicity endpoints (EC50, LOEC) and biomarkers (AChE), not pharmacokinetic parameters like clearance, volume, or half-life. |
| PGx | Toumi_2015 | not_relevant | 2 | 8 | The study compares ecotoxicological sensitivity (EC50, AChE inhibition) across different clonal strains of *Daphnia magna*, which is an ecological/toxicological study, not a pharmacogenomic investigation of specific gene variants affecting PK/PD in a clinical or pharmacokinetic context. |
| PGx | Unlu_2024 | not_relevant | 2 | 3 | kdr genotype is only correlated with pyrethroid mortality; malathion resistance is reported phenotypically without any genotype/phenotype effect on a PK/PD parameter. |
| popPK | Van_2021 | irrelevant | 0 | 0 | The study reports toxicity EC50 values in Daphnia magna, not pharmacokinetic parameters such as clearance or volume. |
| PGx | Van_2021 | not_relevant | 0 | 0 | The paper discusses ecological cross-tolerance in Daphnia magna, not pharmacogenomic effects of human genetic variants on malathion PK/PD. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | Malathion is used only as a mechanism inhibitor to rule out CYP450 involvement in herbicide resistance; no PK parameters are reported. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The study discusses the genetic basis of herbicide resistance in weeds, not the pharmacokinetics/pharmacodynamics of the drug malathion in humans. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | This is an insecticide resistance study (bioassay/LC50) in mosquitoes, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper describes insecticide resistance in mosquitoes via bioassays and does not report pharmacogenomic effects on PK/PD parameters in humans. |
| popPK | Willens_2006 | irrelevant | 1 | 0 | The study is an in vitro mechanistic experiment measuring cutaneous flux/absorption in diffusion cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Willens_2006 | not_relevant | 0 | 0 | The study investigates in vitro percutaneous absorption kinetics in amphibians using whole skin samples, not pharmacogenomic variations affecting PK or PD parameters in a human or specific genetic context. |
| popPK | Williams_1990 | irrelevant | 4 | 0 | The paper describes a modeling framework for percutaneous absorption using porcine skin flaps; while malathion is a tested compound, the evidence provides no specific quantitative PK parameter values (CL, V, ka, etc.) for it. |
| PGx | Williams_1990 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic model for percutaneous absorption in pigs and does not investigate gene variants or pharmacogenomic effects. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | This is a QSAR/ecotoxicity (LC50/EC50) data article, not a pharmacokinetic study; no PK parameters for malathion are reported. |
| popPK | Yeh_2006 | irrelevant | 0 | 0 | The paper is an ecotoxicology study measuring toxicity endpoints (EC50, NOEC) in algae, not a pharmacokinetic study of malathion. |
| PGx | Yeh_2006 | not_relevant | 0 | 0 | The paper reports environmental toxicity assays on algae and compares test methods, containing no information on gene variants, genotypes, or pharmacogenomic effects on the PK/PD of malathion. |
| popPK | Yen_2025 | irrelevant | 0 | 0 | This is an epidemiological study assessing neurocognitive associations with insecticide metabolites, not a pharmacokinetic study reporting disposition parameters for malathion. |
| PGx | Yen_2025 | not_relevant | 0 | 0 | The study reports epidemiological associations between pesticide metabolites and neurocognitive performance, not pharmacogenomic effects of gene variants on the pharmacokinetics or pharmacodynamics of malathion. |
| popPK | Yunta_2019 | irrelevant | 0 | 0 | The paper describes in vitro P450 enzyme metabolism of malathion in mosquitoes, not a population pharmacokinetic study with disposition parameters. |
| PGx | Yunta_2019 | not_relevant | 0 | 0 | The study examines insect P450 metabolism of malathion, not human pharmacogenomics affecting PK/PD. |
| popPK | Zhao_2017 | irrelevant | 0 | 0 | This is a developmental toxicity study reporting LC50/EC50 values for malathion in fish, not a pharmacokinetic study reporting disposition parameters like CL, V, or ka. |
| PGx | Zhao_2017 | not_relevant | 0 | 0 | The paper reports developmental toxicity in fish exposed to pollutants, not pharmacogenomic effects on human PK/PD parameters. |
| popPK | Zhao_2017_2 | irrelevant | 0 | 0 | The study investigates herbicide resistance mechanisms in a weed species and uses malathion as a diagnostic probe/inhibitor, not as a subject drug for PK analysis. |
| PGx | Zhao_2017_2 | not_relevant | 2 | 5 | The paper reports herbicide resistance in weeds involving CYP450-mediated metabolism, but it does not report human pharmacogenomic effects on PK/PD parameters for malathion. |
| popPK | de_2022 | irrelevant | 0 | 0 | Ecotoxicology/risk-quotient study of pesticide water standards; only LC50 toxicity values, no PK disposition parameters for malathion. |
| popPK | dos_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of oximes reactivating AChE, reporting no pharmacokinetic parameters (CL, V, t1/2) for malathion. |
| PGx | dos_2010 | not_relevant | 0 | 0 | The paper evaluates oxime reactivation efficacy on mouse AChE but does not report the effect of human gene variants or genotypes on malathion PK/PD parameters. |
| popPK | unknown_1996 | irrelevant | 0 | 0 | The study focuses on acute toxicity (LC50) and biochemical mechanisms (enzyme activity/inhibition) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) for malathion. |
| PGx | unknown_1996 | not_relevant | 0 | 0 | The study examines interspecies variation in fish susceptibility and the role of enzyme inhibitors, but does not report a specific gene variant, genotype, or human pharmacogenomic effect on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmalathion%5D&body=Drug%3A%20malathion%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_malathion/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
