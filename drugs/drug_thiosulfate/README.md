<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;thiosulfate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Thiosulfate_Petric2023_reference&quot;,&quot;label&quot;:&quot;Petric_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_thiosulfate/Thiosulfate_Petric2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# thiosulfate

- **generic name:** thiosulfate
- **ATC codes:** `V03AB06`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Thiosulfate is an antidote primarily used to treat cyanide poisoning. It is used in medical settings as a treatment for acute poisoning.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q339866](https://www.wikidata.org/wiki/Q339866), [Wikipedia](https://en.wikipedia.org/wiki/Sodium_thiosulfate?oldid=1384523091) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Shea_1984_reference](drugs/drug_thiosulfate/Thiosulfate_Shea1984_reference.md) | — | 1-compartment (no model) | 2 | Shea M et al., Kinetics of sodium thiosulfate, a cispl…, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.53](https://doi.org/10.1038/clpt.1984.53) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Petric_2023_reference](drugs/drug_thiosulfate/Thiosulfate_Petric2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Petric Z et al., Clinical Pharmacology of Vinpocetine: P…, Pharmaceutics (2023) | [10.3390/pharmaceutics15102502](https://doi.org/10.3390/pharmaceutics15102502) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 07:51 | 0:04 | 1/1/0 | 0/0/0 | 0/0/0 | 4,227/181 | einfracz / qwen3.8-27b | 29 | 5/24 | 28/1 | 0 |

## Coverage

- **PubMed hits:** 112 matched, 92 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albadry_2024 | irrelevant | 0 | 0 | This is a liver histology/CYP zonation study; thiosulfate appears only as a staining reagent, with no PK parameters. |
| PGx | Arrington_2025 | not_relevant | 0 | 0 | Microbial ecology paper on hydrocarbon metabolism; thiosulfate is a metabolic substrate, not a drug, and no pharmacogenomic PK/PD effects are reported. |
| popPK | Ashun_2022 | irrelevant | 0 | 0 | This study uses thiosulfate as a substrate for a bacterial bioassay to assess heavy metal toxicity, not as a drug for pharmacokinetic analysis. |
| PGx | Ashun_2022 | not_relevant | 0 | 0 | The paper describes a bioassay for water toxicity assessment and does not report any pharmacogenomic effects on thiosulfate pharmacokinetics or pharmacodynamics. |
| popPK | Atwal_2016 | irrelevant | 0 | 0 | The paper is a review of Molybdenum cofactor deficiency where thiosulfate is identified as a toxic metabolite accumulating due to enzyme deficiency, not as a drug subject to pharmacokinetic characterization. |
| PGx | Atwal_2016 | not_relevant | 0 | 0 | The paper reviews molybdenum cofactor deficiency and PMP treatment, mentioning thiosulfate accumulation as a disease marker, but does not report pharmacogenomic effects on the PK/PD of thiosulfate as a drug. |
| popPK | Azabou_2007 | irrelevant | 0 | 0 | The paper describes the isolation and metabolic characterization of a sulfate-reducing bacterium using thiosulfate as a substrate, not a pharmacokinetic study of thiosulfate. |
| PGx | Azabou_2007 | not_relevant | 0 | 0 | The paper describes the isolation and characterization of a sulfate-reducing bacterium, not a pharmacogenomic study of thiosulfate in humans or animals. |
| PGx | Baek_2010 | not_relevant | 0 | 0 | Case report of exchange transfusion for cyanide poisoning; no gene variant/genotype effects on thiosulfate PK/PD reported. |
| popPK | Baskin_1992 | irrelevant | 3 | 0 | The paper is a review that discusses pharmacokinetics qualitatively but does not provide any specific numeric disposition parameters (e.g., CL, Vd, t1/2) for thiosulfate in the provided evidence. |
| PGx | Baskin_1992 | not_relevant | 0 | 0 | The paper reviews the general pharmacokinetics and pharmacodynamics of thiosulfate but does not report a pharmacogenomic effect of a gene variant on a PK or PD parameter. |
| popPK | Bhattacharya_2014 | irrelevant | 0 | 0 | The paper reports toxicological and biochemical effects of cyanogens in rats, with thiosulfate mentioned only as a marker of enzyme activity (thiosulfate-sulfur transferase), not as the subject drug for PK parameter estimation. |
| PGx | Bhattacharya_2014 | not_relevant | 0 | 0 | The paper investigates the toxicity of cyanogens and the antidotal effect of alpha-ketoglutarate in rats, with no analysis of genetic variants affecting the pharmacokinetics or pharmacodynamics of thiosulfate. |
| popPK | Biglione_2024 | irrelevant | 0 | 0 | The paper is a retrospective clinical outcome review for calciphylaxis treatment and does not report any pharmacokinetic parameters for thiosulfate. |
| PGx | Biglione_2024 | not_relevant | 0 | 0 | The paper investigates clinical outcomes (mortality/wound healing) of adding hyperbaric oxygen to thiosulfate therapy, containing no data on pharmacogenomics, pharmacokinetics, or pharmacodynamics of thiosulfate. |
| popPK | Billaut-Laden_2006 | irrelevant | 0 | 0 | The paper is a genetic study on thiosulfate sulfurtransferase (TST) polymorphisms, not a pharmacokinetic study of thiosulfate drug disposition. |
| popPK | Brouwers_2008 | irrelevant | 0 | 0 | This is a PK study of cisplatin/oxaliplatin platinum retention; thiosulfate is only used ex vivo to release Pt from proteins, with no thiosulfate disposition parameters. |
| popPK | Brouwers_2009 | irrelevant | 0 | 0 | The paper investigates the clinical outcome of neuropathy, not the pharmacokinetics of thiosulfate, and thiosulfate is only mentioned as a potential determinant variable without any PK parameter reporting. |
| PGx | Brouwers_2009 | not_relevant | 0 | 0 | The study investigates clinical outcomes (neuropathy) and factors like cumulative dose, but does not report a pharmacogenomic effect on a PK or PD parameter of thiosulfate. |
| popPK | Campagne_2019 | irrelevant | 0 | 0 | This is a population-PK study of cyclophosphamide and its metabolites in mice; sodium thiosulfate appears only as a reagent, with no thiosulfate PK parameters reported. |
| popPK | Curry_1997 | irrelevant | 0 | 0 | The study measures red cell cyanide concentrations to assess toxicity prevention, not the pharmacokinetic disposition parameters (CL, V, half-life) of thiosulfate itself. |
| PGx | Curry_1997 | not_relevant | 0 | 0 | The paper describes a preclinical animal study on cyanide toxicity prevention and contains no mention of gene variants, genotypes, or pharmacogenomics. |
| popPK | Dawson_2005 | irrelevant | 0 | 0 | The study characterizes the rat Na+-sulfate cotransporter and its interaction with thiosulfate as an inhibitor in an in-vitro system, rather than measuring pharmacokinetic disposition parameters for thiosulfate. |
| PGx | Dawson_2005 | not_relevant | 0 | 0 | The paper characterizes the rat Na+-sulfate cotransporter gene (slc13a4) and transport kinetics, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of thiosulfate. |
| popPK | De_2004 | irrelevant | 0 | 0 | The paper focuses on the toxicity of wastewater treatment polymers (DADMAC and PAM) in Ceriodaphnia dubia, and thiosulfate is only mentioned as a failed treatment method, not as a subject of pharmacokinetic study. |
| PGx | De_2004 | not_relevant | 0 | 0 | The paper focuses on the ecotoxicity of wastewater polymers in diamond mine effluent and mentions thiosulfate only as a failed neutralization agent, containing no pharmacogenomic data. |
| popPK | Doolittle_2014 | irrelevant | 2 | 0 | The paper is a review discussing the development of a two-compartment model for sodium thiosulfate in brain tumor patients, but it does not provide the specific numeric PK parameter values (CL, V, etc.) in the text provided. |
| PGx | Doolittle_2014 | not_relevant | 0 | 0 | The paper discusses the clinical use of thiosulfate for platinum-induced toxicity prevention using a pharmacokinetic model, but it does not report any pharmacogenomic effects (gene variant/genotype/phenotype) on thiosulfate parameters. |
| PGx | Dossa_2026 | not_relevant | 0 | 0 | Paper is about flowering induction in yam; silver thiosulfate is a plant chemical treatment, not a drug with PK/PD parameters. |
| popPK | Drew_1983 | irrelevant | 0 | 0 | The paper discusses hydroxocobalamin as an antidote for cyanide toxicity and mentions thiosulfate only as a comparator in treatment regimens, without providing any pharmacokinetic parameter data. |
| PGx | Drew_1983 | not_relevant | 0 | 0 | The text discusses the use of OHB12 and sodium thiosulfate as antidotes for cyanide toxicity but contains no information on pharmacogenomics or gene variants affecting PK/PD. |
| popPK | Driggers_2016 | irrelevant | 0 | 0 | The paper is a structural biology study on cysteine dioxygenase where thiosulfate is used only as a competitive inhibitor to determine binding mode, not for pharmacokinetic analysis. |
| PGx | Driggers_2016 | not_relevant | 0 | 0 | The paper describes structural insights into Cysteine Dioxygenase and inhibitor binding, not the pharmacokinetics or pharmacodynamics of sodium thiosulfate in relation to human gene variants. |
| popPK | EFSA_2026 | irrelevant | 0 | 0 | EFSA QPS safety assessment of microorganisms; no thiosulfate PK parameters or any pharmacokinetic data present. |
| popPK | Eom_2024 | irrelevant | 0 | 0 | This is an in-vitro bacterial ecotoxicity test using thiosulfate as a microbial substrate, not a pharmacokinetic study of thiosulfate disposition. |
| popPK | Fajana_2026 | irrelevant | 0 | 0 | The study evaluates the antioxidant and antihypertensive properties of Ficus exasperata leaf extracts and contains no data regarding thiosulfate or its pharmacokinetics. |
| PGx | Fajana_2026 | not_relevant | 0 | 0 | The paper evaluates the antihypertensive and antioxidant properties of Ficus exasperata extracts and does not investigate thiosulfate pharmacokinetics/pharmacodynamics or any gene-based effects. |
| PGx | Farese_2011 | not_relevant | 0 | 0 | The study reports general pharmacokinetics of thiosulfate but does not investigate any genetic variants or pharmacogenomic effects. |
| popPK | Freeman_1985 | irrelevant | 1 | 0 | Thiosulfate is used only as a therapeutic co-administered agent to test prevention of acetonitrile toxicity, not as the subject of pharmacokinetic parameterization. |
| PGx | Freeman_1985 | not_relevant | 0 | 0 | The paper focuses on the toxicological interaction between acetonitrile and acetone in rats, not the pharmacogenomics of thiosulfate. |
| popPK | Friederich_1995 | irrelevant | 0 | 0 | The paper is a review of sodium nitroprusside (SNP) and only mentions thiosulfate in the context of its metabolic pathway and toxicity risks, providing no pharmacokinetic parameters for thiosulfate. |
| PGx | Friederich_1995 | not_relevant | 0 | 0 | The text discusses the clinical management and toxicity of sodium nitroprusside and the need for thiosulfate stores, but does not report any pharmacogenomic studies or specific gene variants affecting the pharmacokinetics or pharmacodynamics of thiosulfate. |
| popPK | Gandara_1990 | irrelevant | 0 | 0 | The paper is a narrative review of chemoprotective agents for cisplatin toxicity and does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for thiosulfate. |
| PGx | Gandara_1990 | not_relevant | 0 | 0 | The paper is a review of cisplatin rescue agents and does not report pharmacogenomic effects on thiosulfate PK/PD parameters. |
| popPK | Gao_2013 | irrelevant | 0 | 0 | The study focuses on the isolation of antifouling compounds from a fungus, using sodium thiosulfate only as a reagent to remove sulfur compounds, not as the subject of pharmacokinetic analysis. |
| PGx | Gao_2013 | not_relevant | 0 | 0 | The paper describes chemical isolation of antifouling compounds from a fungus using sodium thiosulfate as a reagent, and reports no pharmacogenomic or PK/PD data for thiosulfate. |
| PGx | Gladkov_2025 | not_relevant | 0 | 0 | Microbial ecology study of a compost biofertilizer; thiosulfate only mentioned as a bacterial metabolic pathway, no drug PK/PD or pharmacogenomic data. |
| popPK | Graeme_1999 | relevant | 7 | 2 | Study reports pharmacokinetic data (AUC) for thiosulfate in gravid ewes, but specific distribution parameters (CL, V, Q) are not explicitly extracted or presented as a full compartmental model in the provided text. |
| PGx | Graeme_1999 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of thiosulfate in pregnant ewes but does not involve any genetic variants or pharmacogenomic factors. |
| popPK | Gretarsdottir_2020 | irrelevant | 0 | 0 | The paper describes the synthesis and catalytic detoxification of cyanide by molybdenum complexes, with no pharmacokinetic study of thiosulfate in a biological subject. |
| PGx | Gretarsdottir_2020 | not_relevant | 0 | 0 | The paper describes the synthesis of new molybdenum compounds to catalyze thiosulfate-cyanide reactions in vitro and does not report on human pharmacogenomics or PK/PD parameters. |
| popPK | Guo_2023 | irrelevant | 0 | 0 | The paper investigates bladder cancer biomarkers (TST gene) and does not contain pharmacokinetic data for the drug thiosulfate. |
| PGx | Guo_2023 | not_relevant | 0 | 0 | The study investigates a metabolic gene signature for bladder cancer prognosis and is unrelated to thiosulfate pharmacogenomics. |
| popPK | Hashemabadi_2014 | irrelevant | 0 | 0 | The study is a botanical experiment on cut flowers using silver thiosulfate as a preservative, not a pharmacokinetic study. |
| PGx | Hashemabadi_2014 | not_relevant | 0 | 0 | The paper discusses the use of silver thiosulfate to extend vase life in cut flowers, not human pharmacokinetics or pharmacogenomics of thiosulfate. |
| popPK | Hebbar_2005 | irrelevant | 0 | 0 | The study investigates the toxicogenomics of resveratrol in rats and only mentions thiosulfate sulfurtransferase as a gene marker, not the pharmacokinetics of the drug thiosulfate. |
| PGx | Hebbar_2005 | not_relevant | 0 | 0 | The paper studies the toxicogenomics of resveratrol in rats and mentions thiosulfate sulfurtransferase gene expression, but does not report a pharmacogenomic effect on the PK or PD of thiosulfate as a drug. |
| popPK | Howell_1991 | irrelevant | 0 | 0 | The paper is a clinical trial reporting efficacy and toxicity of cisplatin with thiosulfate as a protective agent, not a pharmacokinetic study of thiosulfate. |
| PGx | Howell_1991 | not_relevant | 0 | 0 | The paper reports clinical trial outcomes for cisplatin and thiosulfate but contains no data on genetic variants or their effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Höbel_1978 | irrelevant | 0 | 0 | The study focuses on organ toxicity (histology) rather than pharmacokinetic parameters, and thiosulfate is used as a protective agent/comparator rather than the subject of PK modeling. |
| PGx | Höbel_1978 | not_relevant | 0 | 0 | The paper investigates organ toxicity in rabbits and contains no data on gene variants or pharmacogenomic effects on pharmacokinetics. |
| popPK | Johanning_1995 | irrelevant | 0 | 0 | This is a retrospective review of sodium nitroprusside dosing practices and does not report any pharmacokinetic parameters for thiosulfate. |
| PGx | Johanning_1995 | not_relevant | 0 | 0 | The paper is a retrospective study on clinical administration protocols for sodium nitroprusside and thiosulfate and does not report on gene variants or pharmacogenomic effects. |
| popPK | Joshi_2019 | irrelevant | 0 | 0 | The paper is a review of the enzyme CysK and cysteine biosynthesis, containing no pharmacokinetic data for thiosulfate. |
| PGx | Joshi_2019 | not_relevant | 0 | 0 | The paper discusses the biological functions of the CysK enzyme in bacteria and potential therapeutic targets, containing no data on thiosulfate pharmacokinetics or pharmacogenomics. |
| popPK | Kenakin_1976 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology experiment in guinea pig ileum using sodium thiosulfate as a reagent to reverse amine effects, not a pharmacokinetic study of thiosulfate disposition. |
| PGx | Kenakin_1976 | not_relevant | 0 | 0 | The paper describes an in vitro physiological interaction between sodium thiosulfate and beta-haloalkylamines on guinea pig ileum contractions and contains no information on gene variants, genotypes, or pharmacogenomics. |
| popPK | Kurihara_1993 | irrelevant | 0 | 0 | Sodium thiosulfate (STS) is used as a rescue agent/probe to assess platinum distribution, and only AUC ratios relative to platinum are reported; no quantitative disposition parameters (CL, V, ka, etc.) for thiosulfate itself are provided. |
| PGx | Kurihara_1993 | not_relevant | 0 | 0 | The paper studies the interaction between cisplatin and thiosulfate, not the effect of a gene variant or genotype on thiosulfate's pharmacokinetics or pharmacodynamics. |
| popPK | Lewis_2023 | irrelevant | 0 | 0 | The paper discusses the pharmacology of a psychedelic analog (2-bromo-LSD), not the pharmacokinetics of thiosulfate. |
| PGx | Lewis_2023 | not_relevant | 0 | 0 | The paper investigates the pharmacology of 2-Br-LSD, not thiosulfate, and does not report pharmacogenomic effects. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study of cisplatin ototoxicity and UPR pathways using ISRIB, and while thiosulfate is mentioned in the introduction as a comparator with safety concerns, no pharmacokinetic parameters for thiosulfate are reported. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of cisplatin ototoxicity and the protective effect of ISRIB, with no analysis of pharmacogenomic variants affecting thiosulfate PK or PD. |
| popPK | Li_2024_2 | irrelevant | 0 | 0 | The paper studies cisplatin ototoxicity and mechanisms of ISRIB, using thiosulfate only as a comparator in cell viability assays without reporting any pharmacokinetic parameters for thiosulfate. |
| PGx | Li_2024_2 | not_relevant | 0 | 0 | The paper investigates the mechanism of cisplatin ototoxicity and the protective effects of ISRIB, not the pharmacokinetics or pharmacodynamics of thiosulfate. |
| popPK | Lin_2021 | irrelevant | 0 | 0 | The paper is an agronomic study on blueberry budbreak using potassium thiosulfate as a defoliant, not a pharmacokinetic study of thiosulfate. |
| PGx | Lin_2021 | not_relevant | 0 | 0 | The paper studies agricultural applications of thiosulfate on blueberry plants, not human pharmacogenomics. |
| popPK | Malmström_1993 | irrelevant | 1 | 0 | The paper describes a clinical treatment trial using thiosulfate as a protective agent (antidote) for cisplatin and does not report any pharmacokinetic parameters or models for thiosulfate. |
| PGx | Malmström_1993 | not_relevant | 0 | 0 | The paper reports clinical outcomes and toxicity of a chemotherapy regimen but does not investigate any pharmacogenomic effects or gene variants affecting the PK/PD of thiosulfate. |
| popPK | Markovich_2005 | irrelevant | 0 | 0 | This is a mechanistic and genomic study of a sulfate transporter where thiosulfate is used only as an inhibitor, with no pharmacokinetic parameters reported. |
| PGx | Markovich_2005 | not_relevant | 0 | 0 | The paper characterizes the SLC13A4 transporter and mentions thiosulfate as a competitive inhibitor, but it does not report any pharmacogenomic effect of a human gene variant on thiosulfate's PK or PD parameters. |
| popPK | Markovich_2008 | irrelevant | 0 | 0 | The study is an in-vitro functional characterization of a zebrafish sulfate transporter where thiosulfate is used as an inhibitor, not as the subject drug for pharmacokinetic modeling. |
| PGx | Markovich_2008 | not_relevant | 0 | 0 | The paper characterizes a transporter in zebrafish and mentions thiosulfate only as an inhibitor, not as a drug subject to pharmacogenomic analysis of its PK/PD. |
| popPK | Moffett_2008 | irrelevant | 0 | 0 | The study focuses on sodium nitroprusside toxicity and explicitly excludes patients who received sodium thiosulfate, providing no PK data for thiosulfate. |
| PGx | Moffett_2008 | not_relevant | 0 | 0 | The paper studies sodium nitroprusside toxicity and excludes patients who received sodium thiosulfate; it contains no pharmacogenomic data regarding thiosulfate. |
| PGx | Mondal_2022 | not_relevant | 0 | 0 | Microbial thermotolerance study of Paracoccus; thiosulfate is a growth medium component, not a drug, and no pharmacogenomic PK/PD effects are reported. |
| popPK | Neuwelt_1998 | irrelevant | 1 | 0 | This is a clinical trial evaluating the otoprotective efficacy of sodium thiosulfate, reporting audiologic outcomes rather than pharmacokinetic parameters (CL, V, etc.) for thiosulfate. |
| PGx | Neuwelt_1998 | not_relevant | 0 | 0 | The paper reports a clinical pharmacodynamic effect (otoprotection) of thiosulfate but does not investigate any gene variant or genotype (pharmacogenomics) influencing PK or PD. |
| popPK | ONeill_2012 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on vascular calcification, not a pharmacokinetic study, and reports no disposition parameters like clearance or volume for thiosulfate. |
| PGx | ONeill_2012 | not_relevant | 0 | 0 | The paper describes in vitro chemical mechanisms of thiosulfate on vascular calcification and contains no information regarding gene variants or pharmacogenomics. |
| popPK | Olson_2018 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of hydrogen sulfide metabolism by superoxide dismutase, and thiosulfate is only mentioned as an ineffective electron donor control, with no pharmacokinetic parameters reported. |
| PGx | Olson_2018 | not_relevant | 0 | 0 | The paper studies the enzyme-mediated metabolism of hydrogen sulfide, not the pharmacogenomics of thiosulfate pharmacokinetics or pharmacodynamics. |
| popPK | Olson_2020 | irrelevant | 0 | 0 | The paper investigates the chemical mechanism of green tea polyphenols oxidizing hydrogen sulfide to thiosulfate in vitro, and does not perform pharmacokinetic modeling of thiosulfate as a drug. |
| PGx | Olson_2020 | not_relevant | 0 | 0 | The paper investigates the catalytic oxidation of H2S to thiosulfate by green tea polyphenols in vitro, not a pharmacogenomic effect on thiosulfate pharmacokinetics or pharmacodynamics. |
| popPK | Ozols_1985 | irrelevant | 0 | 0 | The paper is a clinical oncology study on cisplatin treatment where thiosulfate is mentioned only as a potential protective agent, with no pharmacokinetic parameters reported. |
| PGx | Ozols_1985 | not_relevant | 0 | 0 | The paper discusses high-dose cisplatin therapy and mentions thiosulfate only as a potential protective agent, but it does not report any pharmacogenomic effects on thiosulfate's PK or PD parameters. |
| popPK | Pascal_2023 | irrelevant | 0 | 0 | The paper describes a bioinformatics algorithm for gut microbiome metabolism and contains no pharmacokinetic data for thiosulfate. |
| PGx | Pascal_2023 | not_relevant | 0 | 0 | The paper analyzes gut microbiome metabolic pathways and is unrelated to the pharmacogenomics or pharmacokinetics of thiosulfate. |
| popPK | Patel_1986 | irrelevant | 0 | 0 | The paper describes the clinical use of thiosulfate as a treatment for sodium nitroprusside toxicity and does not report any pharmacokinetic parameters (clearance, volume, half-life) for thiosulfate. |
| PGx | Patel_1986 | not_relevant | 0 | 0 | The paper discusses the toxicity of sodium nitroprusside and its treatment with sodium thiosulfate, but it does not report any pharmacogenomic effects (gene variants, genotypes, or phenotypes) on the PK or PD parameters of thiosulfate or any other drug. |
| popPK | Petric_2023 | irrelevant | 0 | 0 | This is a population PK study of vinpocetine's metabolite apovincaminic acid (AVA), not thiosulfate; thiosulfate does not appear anywhere in the paper. |
| popPK | Piantadosi_1983 | irrelevant | 0 | 0 | The study assesses the protective effects of sodium thiosulfate on cyanide-induced cytochrome redox changes in rats, but does not report pharmacokinetic parameters (clearance, volume, etc.) for thiosulfate. |
| PGx | Piantadosi_1983 | not_relevant | 0 | 0 | The paper investigates the physiological response to cyanide and the effects of thiosulfate in rats but does not involve gene variants or pharmacogenomics. |
| PGx | Portmann_2026 | not_relevant | 1 | 0 | GALNT3 deletion affects disease (FGF-23/phosphate) biology; sodium thiosulfate only mentioned as topical treatment in a cited case, with no genotype effect on its PK/PD parameters. |
| popPK | Qambrani_2014 | irrelevant | 0 | 0 | The study uses thiosulfate as a substrate in a bacterial biosensor for toxicity assessment, not as a pharmacokinetic subject drug. |
| PGx | Qambrani_2014 | not_relevant | 0 | 0 | The paper describes a biosensor for chromium toxicity using bacteria and does not report any pharmacogenomic effects on the PK/PD of thiosulfate as a drug. |
| popPK | Rai_2026 | irrelevant | 0 | 0 | The paper describes a fluorescence probe for Alzheimer's disease and does not study the pharmacokinetics of thiosulfate. |
| PGx | Rai_2026 | not_relevant | 0 | 0 | The paper studies a novel NIRF probe (I-43) for Alzheimer's disease, not the drug thiosulfate, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Reysenbach_2000 | irrelevant | 0 | 0 | This is a microbiology study on deep-sea hydrothermal vents where thiosulfate is mentioned only as a sulfur compound metabolized by bacteria, not as a pharmacological subject. |
| PGx | Reysenbach_2000 | not_relevant | 0 | 0 | The paper concerns microbial ecology at a hydrothermal vent and mentions thiosulfate only as a sulfur compound in metabolic pathways, unrelated to human pharmacogenomics. |
| popPK | Ringdahl_1984 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of oxotremorine analogues on muscarinic receptors in guinea pig ileum, using thiosulfate only as a chemical scavenger, and contains no pharmacokinetic data for thiosulfate. |
| PGx | Ringdahl_1984 | not_relevant | 0 | 0 | The paper studies muscarinic receptor agonists (BM 123 and BM 130) and does not report any pharmacogenomic effect on thiosulfate. |
| popPK | Robbins_1994 | irrelevant | 0 | 0 | The study focuses on the clinical treatment of cancer with cisplatin, using thiosulfate only as a neutralizing agent, and does not report any pharmacokinetic parameters for thiosulfate. |
| PGx | Robbins_1994 | not_relevant | 0 | 0 | The paper describes a clinical outcome of a drug infusion technique using thiosulfate and contains no pharmacogenomic data regarding gene variants affecting PK or PD parameters. |
| popPK | Romano_2013 | irrelevant | 0 | 0 | This is a comparative genomic study of bacterial isolates, not a pharmacokinetic study of the drug thiosulfate. |
| PGx | Romano_2013 | not_relevant | 0 | 0 | The paper analyzes bacterial genomes in Yellowstone and mentions thiosulfate metabolism in a bacterium, unrelated to human pharmacogenomics. |
| popPK | Saidi_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on benzofuran-hybrids as anti-inflammatory agents, not a pharmacokinetic study of thiosulfate. |
| PGx | Saidi_2026 | not_relevant | 0 | 0 | The paper describes the design and testing of novel anti-inflammatory compounds and contains no information on thiosulfate or pharmacogenomic effects. |
| popPK | Sarfraz_2023 | irrelevant | 0 | 0 | This is a PK study of metoprolol in rabbits, not thiosulfate; no thiosulfate parameters appear. |
| popPK | Schubert_2004 | irrelevant | 0 | 0 | The study investigates the mechanism of sodium nitroprusside-induced vasodilation in rat arteries and uses thiosulfate only as a control to rule out cyanide inactivation, without reporting any pharmacokinetic parameters for thiosulfate. |
| PGx | Schubert_2004 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of sodium nitroprusside on potassium channels in rat arteries and mentions sodium thiosulfate only as a negative control to rule out cyanide involvement; it does not report a pharmacogenomic effect on thiosulfate PK/PD. |
| PGx | Shea_1984 | not_relevant | 0 | 0 | The paper reports standard population pharmacokinetics of sodium thiosulfate in 8 subjects but does not assess the impact of any gene variant or genotype on PK parameters. |
| popPK | Singh_2011 | relevant | 5 | 2 | The paper reports simulation-based dosing strategies based on pharmacokinetic principles for thiosulfate, but specific numeric PK parameters (CL, V) are not explicitly listed in the evidence, only dose ranges and exposure equivalence assumptions. |
| PGx | Singh_2011 | not_relevant | 0 | 0 | The study investigates simulation-based sodium thiosulfate dosing strategies based on hemodialysis regimens and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Stanoiu_2025 | irrelevant | 0 | 0 | This is a phytochemistry/encapsulation study of Inonotus obliquus extracts with no thiosulfate PK data or parameters. |
| popPK | Sylvester_1983 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of cyanide and its metabolite thiocyanate in dogs, with thiosulfate acting as a catalyst/comparator agent rather than being the subject of PK modeling itself. |
| PGx | Sylvester_1983 | not_relevant | 0 | 0 | The study examines the effect of thiosulfate on cyanide PK in dogs and does not involve any gene variants or pharmacogenomics. |
| popPK | Tayebi_2026 | irrelevant | 0 | 0 | This is a lipid-lowering/hepatoprotection study of basil-enriched oil in mice; thiosulfate is not mentioned and no PK parameters for it exist. |
| popPK | Tegeder_2003 | irrelevant | 2 | 2 | The study measures cisplatin as the subject drug, with thiosulfate acting only as a co-administered neutralizer/comparator for which only Cmax and AUC ratios are reported, not full disposition parameters like CL or V. |
| PGx | Tegeder_2003 | not_relevant | 0 | 0 | The paper compares cisplatin delivery methods (perfusion vs. embolization) and reports PK parameters, but contains no data on genetic variants or pharmacogenomics. |
| popPK | Thomas_2026 | irrelevant | 0 | 0 | This is a PROTAC proteomics/degradation study with no thiosulfate pharmacokinetic parameters; "half-life" refers to protein half-lives in cell culture, not drug disposition. |
| popPK | Vijayakumar_2024 | irrelevant | 0 | 0 | This is a study of EGFR inhibitors (afatinib, zorifertinib) for noise-induced hearing loss; thiosulfate is not the subject drug and no thiosulfate PK parameters appear. |
| popPK | Xu_1994 | irrelevant | 0 | 0 | The paper studies sulfite resistance in yeast (Saccharomyces cerevisiae) and uses thiosulfate only as a reagent to stop mutagenesis, not as a drug for PK analysis. |
| PGx | Xu_1994 | not_relevant | 0 | 0 | The paper focuses on yeast genetics and sulfite resistance, not human pharmacogenomics of thiosulfate PK/PD. |
| popPK | Yamakita_2002 | irrelevant | 0 | 0 | The study is a clinical case report on an adrenal adenoma where sodium thiosulfate was used solely as a diagnostic loading agent to measure potassium clearance, not as the subject drug for pharmacokinetic analysis. |
| PGx | Yamakita_2002 | not_relevant | 0 | 0 | The paper reports a case of pre-clinical Cushing's syndrome where sodium thiosulfate was used as a diagnostic probe (loading test) for potassium clearance, and does not investigate the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of thiosulfate. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The study investigates dhurrin metabolism and salt tolerance in sorghum plants, using sodium thiosulfate only as a pharmacological tool to inhibit cyanide detoxification, with no pharmacokinetic parameters reported. |
| PGx | Yang_2026 | not_relevant | 0 | 0 | The paper investigates plant physiology (sorghum germination and dhurrin metabolism) and uses thiosulfate as a reagent, not as a drug in a human pharmacogenomic study. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | Sugarcane transcriptomics study; thiosulfate sulfurtransferase is a plant gene, no drug PK/PD pharmacogenomic effect. |
| popPK | Zhao_2011 | irrelevant | 0 | 0 | The paper describes the isolation and characterization of a purple sulfur bacterium that uses thiosulfate as an electron donor, not the pharmacokinetics of thiosulfate. |
| PGx | Zhao_2011 | not_relevant | 0 | 0 | The paper describes the characterization of a purple sulfur bacterium and its metabolic use of thiosulfate as an electron donor, not the pharmacokinetics or pharmacodynamics of thiosulfate in humans or other animals related to genetic variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bthiosulfate%5D&body=Drug%3A%20thiosulfate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_thiosulfate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 07:50 UTC</sub>
