<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Creatine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Creatine_Alraddadi2018_reference&quot;,&quot;label&quot;:&quot;Alraddadi_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_creatine/Creatine_Alraddadi2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Creatine

- **generic name:** Creatine
- **T3DB:** [T3D4290](http://www.t3db.ca/toxins/T3D4290) · **DrugBank:** [DB00148](https://go.drugbank.com/drugs/DB00148) · **PubChem:** [CID 586](https://pubchem.ncbi.nlm.nih.gov/compound/586)
- **groups:** approved, investigational, nutraceutical

## About

Creatine is an amino acid that occurs in vertebrate tissues and in urine. In muscle tissue, creatine generally occurs as phosphocreatine. Creatine is excreted as creatinine in the urine. …

- **Category:** Drug, Household Toxin, Food Toxin, Natural Toxin, Animal Toxin
- **Sources and uses:** For nutritional supplementation, also for treating dietary shortage or imbalance
- **Mechanism of toxicity:** In the muscles, a fraction of the total creatine binds to phosphate - forming creatine phosphate. The reaction is catalysed by creatine kinase, and the result is phosphocreatine (PCr). …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4290">T3DB T3D4290</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 57-00-1 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:16919">ChEBI 16919</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| creatine | parent | 131.135 | C4H9N3O2 | PubChem | [586](https://pubchem.ncbi.nlm.nih.gov/compound/586) | Alraddadi_2018 |

## Start here

> **Alraddadi_2018_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> adult male Sprague-Dawley rats, n = 4. [Run it in the simulator](drugs/toxin_creatine/Creatine_Alraddadi2018_reference.md?tab=Simulation) · [record](drugs/toxin_creatine/Creatine_Alraddadi2018_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: T1_tmax</sub><br><sub>blocking: T1_cmax</sub> | [Alraddadi_2018_reference](drugs/toxin_creatine/Creatine_Alraddadi2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 8 | Alraddadi EA et al., Absolute Oral Bioavailability of Creati…, Pharmaceutics (2018) | [10.3390/pharmaceutics10010031](https://doi.org/10.3390/pharmaceutics10010031) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A5** | `Q22` · CL | metabolism | [Tuleutayeva_2023](drugs/toxin_creatine/pgx_Tuleutayeva_2023_CYP3A5_Q22.md) | Tuleutayeva RY et al., Candidate Genes for Prediction of Effic…, Twin research and human gen… (2023) | [10.1017/thg.2023.28](https://doi.org/10.1017/thg.2023.28) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **MDR1** | `Q22` · CL | transport | [Tuleutayeva_2023](drugs/toxin_creatine/pgx_Tuleutayeva_2023_MDR1_Q22.md) | Tuleutayeva RY et al., Candidate Genes for Prediction of Effic…, Twin research and human gen… (2023) | [10.1017/thg.2023.28](https://doi.org/10.1017/thg.2023.28) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **SLCO1B1** | `Q22` · CL | transport | [Tuleutayeva_2023](drugs/toxin_creatine/pgx_Tuleutayeva_2023_SLCO1B1_Q22.md) | Tuleutayeva RY et al., Candidate Genes for Prediction of Effic…, Twin research and human gen… (2023) | [10.1017/thg.2023.28](https://doi.org/10.1017/thg.2023.28) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=creatine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC22A5` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` metabolism | PGx paper |
| metabolism | liver | `CYP3A5` metabolism, `SLCO1B1` transport | PGx paper |
| metabolism | small intestine | `CYP3A5` metabolism | PGx paper |
| excretion | kidney | `SLC22A5` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CKB (target), CKM (target), CKMT1A (target), CKMT2 (target), GAMT (product), MDR1 (transport), SLC6A8 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 12:27 | 2:18:02 | 1/0/0 | 0/0/0 | 0/0/3 | 1,621,646/98,026 | einfracz / qwen3.8-27b | 84 | 11/63 | 84/0 | 0 |

## Coverage

- **PubMed hits:** 670 matched, 205 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adham_2011 | irrelevant | 0 | 0 | The paper studies the effects of heavy metal pollution on the physiology of a gerbil (Meriones libycus) and mentions creatine kinase (an enzyme) only as a biomarker, not creatine (the substrate) as a subject of toxicokinetic analysis. |
| popPK | Ajayi_2026 | irrelevant | 0 | 0 | The paper investigates phenanthrene-induced toxicity and the protective effects of Aspilia africana; creatinine is measured only as a biomarker of renal function, not as the subject substance for toxicokinetic analysis. |
| popPK | Alderman_2017 | irrelevant | 0 | 0 | The paper focuses on the toxicological effects of diluted bitumen on sockeye salmon proteomes, mentioning creatine kinase only as a protein biomarker of damage, not providing any kinetic parameters for creatine. |
| PGx | Anaya-Segura_2016 | not_relevant | 0 | 0 | The paper focuses on carrier detection for Duchenne Muscular Dystrophy using miR-206 and STRs, not on pharmacogenomics or creatine pharmacokinetics/pharmacodynamics. |
| popPK | Andrés_1989 | irrelevant | 0 | 0 | The paper reports on the developmental transition of isozymes for the enzyme creatine phosphokinase (CK), not the toxicokinetic parameters (half-life, clearance, etc.) of the substance creatine itself. |
| popPK | Apurba_2023 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating a dietary supplement for osteoarthritis and reports biomarker levels (including CK-MM) as diagnostic indicators, containing no kinetic parameters (half-life, clearance, etc.) for creatine. |
| popPK | Araoud_2012 | irrelevant | 0 | 0 | The paper measures creatine kinase (an enzyme) and creatinine (a metabolite) as biomarkers of pesticide exposure, but does not report kinetic parameters for creatine itself. |
| popPK | Austin_1981 | irrelevant | 0 | 0 | The paper reports activities of the enzyme creatine kinase (CK), not kinetic parameters (half-life, clearance, etc.) for the substance creatine. |
| popPK | Baldin_2026 | irrelevant | 0 | 0 | The paper studies 2,4-D exposure in humans, and creatine is only mentioned as creatine kinase (an enzyme) or urinary creatinine (a normalizing analyte), not as the subject substance for toxicokinetic analysis. |
| PGx | Bhattarai_2023 | not_relevant | 1 | 0 | The paper reports atorvastatin-induced rhabdomyolysis due to liver cirrhosis and mentions CYP3A4 activity decline, but does not report a specific gene variant/genotype associated with a creatine PK/PD parameter. |
| popPK | Bhavnani_2015 | irrelevant | 0 | 0 | The paper studies daptomycin PK/PD in humans and only mentions creatine phosphokinase (CPK) as a safety endpoint, not creatine toxicokinetics. |
| PGx | Brosnan_2007 | not_relevant | 0 | 0 | The paper is a review on methyl balance metabolism and only briefly mentions mutations affecting creatine synthesis in a general context, without reporting specific pharmacogenomic effects on the PK/PD of creatine as a drug or supplement. |
| PGx | Cao_2024 | not_relevant | 0 | 0 | The paper analyzes the correlation between serum cardiovascular markers (like BNP and cTnT) and clinical factors (age, gender, PCT) in COVID-19 patients, but does not involve pharmacogenomics or the pharmacokinetics/pharmacodynamics of creatine. |
| PGx | Carr_2019 | not_relevant | 0 | 0 | The paper reports on statin-induced myopathy and pharmacokinetics of statins (e.g., simvastatin), not creatine. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of Paclitaxel (PTX), and creatine kinase-MB is only measured as a biomarker for cardiac toxicity, not as a substance with kinetic parameters. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper studies mercury toxicity in silver carp and mentions creatine kinase activity as a biomarker, but does not report toxicokinetic parameters for creatine itself. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for maduramicin, while creatine is only mentioned as a measured biochemical marker (creatinine/creatine kinase) for toxicity assessment, not as the subject substance. |
| popPK | Christensen_2012 | irrelevant | 0 | 0 | The paper focuses on bisphenol A (BPA) pharmacokinetics, using creatine only as a urinary internal standard for normalization (μg/g creatine), not as the subject substance. |
| PGx | Clare_2019 | not_relevant | 0 | 0 | The paper is a review of one-carbon metabolism and epigenetics, and while it mentions creatine synthesis, it does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of creatine. |
| PGx | Coats_2018 | not_relevant | 0 | 0 | The study analyzes protein expression profiles in myocardial tissue of patients with hypertrophic cardiomyopathy and does not report pharmacokinetic or pharmacodynamic effects of the drug creatine influenced by genetic variants. |
| PGx | DU_2021 | not_relevant | 0 | 0 | The paper reports a colchicine-induced adverse event in a patient with chronic kidney disease and discusses CYP3A4 inhibitors, but does not report a pharmacogenomic effect (gene variant/genotype) on the pharmacokinetics or pharmacodynamics of creatine. |
| popPK | Dagenais_2009 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of lidocaine and phenol in Proliferol, and mentions creatine kinase (an enzyme) rather than kinetic parameters for the substance creatine. |
| PGx | Dai_2021 | not_relevant | 0 | 0 | The study investigates the cardioprotective effects of a Chinese medicine formula on rats and measures creatine kinase as a marker of injury, but does not analyze the pharmacokinetics or pharmacodynamics of the drug creatine or involve genetic variants. |
| popPK | Dallazen_2023 | irrelevant | 0 | 0 | The paper reports cardiac biomarkers (creatinine, CK-MB) and T1 mapping parameters, but contains no toxicokinetic data for the substance creatine. |
| PGx | Dounavi_2024 | not_relevant | 0 | 0 | The paper studies brain creatine concentrations in relation to dementia risk, not the pharmacokinetics/pharmacodynamics of creatine as a drug affected by genetic variants. |
| popPK | ElFar_2022 | irrelevant | 0 | 0 | The paper is a review of spirulina (Arthrospira platensis) delivery methods and contains no kinetic parameters for creatine. |
| popPK | Ernstgård_2010 | irrelevant | 0 | 0 | The paper reports toxicokinetics for HFC-245fa, not creatine; creatine kinase is merely a biochemical marker. |
| popPK | Espín_2015 | irrelevant | 0 | 0 | The paper focuses on lead exposure and delta-aminolevulinic acid dehydratase (δALAD) activity in birds, mentioning creatine kinase only as a secondary biomarker without providing kinetic parameters for creatine itself. |
| popPK | Ezuruike_2022 | irrelevant | 0 | 0 | The paper uses creatinine (a metabolite) as a marker for fetal GFR and renal function, not creatine as the subject substance. |
| PGx | Fan_2018 | not_relevant | 0 | 0 | The paper reports a genetic variant in ETFDH affecting riboflavin metabolism/responsiveness in MADD, not a pharmacogenomic effect on creatine PK/PD. |
| popPK | Fauquier_2008 | irrelevant | 0 | 0 | The paper reports the tissue distribution of the enzyme creatine kinase (CK) activity in pinnipeds, not the toxicokinetic parameters of the substance creatine itself. |
| PGx | Feng_2025 | not_relevant | 0 | 0 | The paper focuses on antibiotic resistance mechanisms and combination therapy efficacy against bacteria, not the pharmacokinetics or pharmacodynamics of creatine. |
| popPK | Fikry_2017 | irrelevant | 0 | 0 | The paper studies the therapeutic effects of mesenchymal stem cells on methotrexate-induced cardiac fibrosis, and while it mentions measuring "creatine kinase" (an enzyme), it does not report any kinetic parameters (half-life, clearance, etc.) for the substance creatine itself. |
| PGx | Floyd_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of statins, not creatine. |
| PGx | Friedman_1989 | not_relevant | 0 | 0 | The paper describes the developmental expression of endogenous creatine kinase isoforms in the lens and does not investigate the effect of genetic variants on the pharmacokinetics or pharmacodynamics of creatine as a pharmaceutical agent. |
| PGx | Frye_2024 | not_relevant | 0 | 0 | The paper is a review of mitochondrial biomarkers in autism spectrum disorder and does not report pharmacogenomic effects on the PK or PD of creatine. |
| popPK | Gao_2010 | irrelevant | 0 | 0 | The paper investigates the thermostability of creatine kinase (an enzyme), not the toxicokinetic parameters of creatine (the substrate). |
| popPK | Garcia_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and toxicology of statins (simvastatin and pravastatin), using creatine kinase (CK) only as a biomarker for muscle toxicity, not as the subject substance for kinetic analysis. |
| popPK | Ge_2025 | irrelevant | 0 | 0 | The paper investigates the association between metal exposure and myocardial enzyme levels (including Creatine Kinase), but does not report toxicokinetic parameters for creatine as a substance. |
| popPK | Gonzalez_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of side effect prevalence in randomized controlled trials and does not report quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution for creatine. |
| popPK | Gordji-Nejad_2026 | irrelevant | 0 | 0 | The paper is a cognitive performance study that reports behavioral outcomes (reaction times, task scores) but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for creatine. |
| PGx | Gowda_2023 | not_relevant | 0 | 0 | The paper describes a genetic disorder involving the ANTXR2 gene and mentions normal creatine phosphokinase levels as a routine test, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the drug creatine. |
| popPK | Graeber_1984 | irrelevant | 0 | 0 | The paper analyzes the tissue distribution of the enzyme creatine phosphokinase (CPK), not the kinetic parameters of the small molecule substance creatine. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | The paper focuses on alkaloid partitioning in Aconitum, and creatine appears only as a biological marker (creatine kinase) for toxicity, not as the subject substance for kinetic analysis. |
| PGx | Gutiérrez-Hellín_2024 | not_relevant | 0 | 0 | The paper is a narrative review of creatine supplementation benefits in various populations and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Hamburg_1991 | irrelevant | 0 | 0 | The paper focuses on creatine kinase isoenzymes as diagnostic markers for tissue injury, not on the toxicokinetic parameters of creatine itself. |
| popPK | Hanif_2016 | irrelevant | 0 | 0 | The paper reports an analytical method for detecting creatinine, and creatine appears only as an interferent in the analysis, with no kinetic parameters provided. |
| PGx | Hierholzer_2025 | not_relevant | 0 | 0 | The paper describes a case of phosphoglycerate kinase deficiency and reports elevated creatine kinase levels (a lab marker), but does not discuss the pharmacokinetics or pharmacodynamics of creatine supplementation or the drug creatine. |
| popPK | Hildebrand_1996 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of palladium, and creatine is only mentioned as a target of enzyme inhibition (creatine kinase), not as the subject substance with kinetic parameters. |
| popPK | Hossain_2026 | irrelevant | 0 | 0 | The paper is a review on thermogenesis mechanisms that mentions creatine only as part of a metabolic futile cycle, providing no quantitative toxicokinetic parameters for creatine. |
| popPK | Hu_2022 | irrelevant | 0 | 0 | The paper is a network pharmacology study on saikogenin G for depression and does not report toxicokinetic parameters for creatine. |
| PGx | Huang_2022 | not_relevant | 0 | 0 | The paper reports a metabolic disease (SAH hydrolase deficiency) and dietary management effects on metabolites, not a pharmacogenomic effect on the PK or PD of the drug creatine. |
| popPK | Isono_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for methotrexate (MTX), using creatinine clearance only as a covariate to estimate renal function, not as the subject substance. |
| PGx | Jain_2022 | not_relevant | 0 | 0 | The paper is a systematic review of therapeutic interventions in Friedreich ataxia and mentions creatine as an intervention, but does not report any pharmacogenomic analysis linking gene variants to the pharmacokinetics or pharmacodynamics of creatine. |
| PGx | Kaiser_2019 | not_relevant | 0 | 0 | The paper studies Gq signaling in the heart and uses a creatine kinase promoter for expression, but does not report the pharmacokinetics or pharmacodynamics of the substance creatine. |
| PGx | Kemper_2026 | not_relevant | 0 | 0 | The paper discusses DMD newborn screening and treatments, but does not report a pharmacogenomic effect on the PK or PD parameters of creatine. |
| PGx | Khan_2016 | not_relevant | 2 | 1 | The paper focuses on population genetics, haplotype diversity, and natural selection signatures of the GATM gene, rather than reporting direct changes in pharmacokinetic or pharmacodynamic parameters of creatine due to specific genotypes. |
| PGx | Kido_2015 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction causing rhabdomyolysis in a single patient without reporting specific gene variant effects on creatine's PK/PD parameters. |
| popPK | Kim_2021 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for diclofenac sodium salt, not creatine. |
| PGx | Klont_1994 | not_relevant | 0 | 1 | The study investigates the effect of dantrolene on muscle metabolism (including creatine/creatine phosphate levels) in pigs with different halothane genotypes, but it does not report the PK or PD parameters of the compound creatine itself. |
| PGx | Krishna_2023 | not_relevant | 0 | 0 | The study examines metabolic alterations due to diet and genotype in mdx mice, not the pharmacokinetic or pharmacodynamic effects of the drug creatine. |
| popPK | Krivošová_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for venlafaxine, a drug, and mentions creatine kinase only as a biomarker for rhabdomyolysis, not as the subject substance. |
| PGx | Kwon_2017 | not_relevant | 0 | 0 | The paper is about colchicine and statins, not creatine; it discusses myopathy and does not report pharmacogenomic effects on PK/PD of creatine. |
| popPK | Lacerda_2019 | irrelevant | 0 | 0 | The paper studies chromium exposure and measures creatine kinase (an enzyme) activity, not the toxicokinetic parameters of the substance creatine. |
| popPK | Langa_2026 | irrelevant | 0 | 0 | The paper studies the toxicokinetics and toxicity of 3-chloromethcathinone, not creatine; creatine appears only as a biomarker or is not the subject substance. |
| popPK | Leblond_2023 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of fluvastatin and celecoxib, not creatine; creatine phosphokinase (CPK) is mentioned only as a biomarker for toxicity. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The paper studies creatine transporter deficiency (SLC6A8 variants) affecting brain creatine metabolism, but does not report the pharmacokinetics or pharmacodynamics of creatine as a drug/administered supplement. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper investigates gene therapy for Duchenne muscular dystrophy in mice and does not report toxicokinetic parameters for creatine. |
| PGx | Lin_2022 | not_relevant | 0 | 0 | The paper investigates the drug Shexiang Tongxin Dropping Pill (STDP) and its interaction with CYP2C19 on clopidogrel response, not the pharmacokinetic or pharmacodynamic parameters of creatine. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of aconitine, mesaconitine, and hypaconitine, while creatine kinase is only mentioned as a biomarker for cardiotoxicity. |
| PGx | Lin_2025 | not_relevant | 0 | 0 | The paper studies pharmacokinetics of aconitine in Fuzi, not creatine, and focuses on disease-driven enzyme suppression rather than a specific gene variant effect. |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The paper reports general adverse effects of anthracyclines (including creatine kinase changes) but contains no analysis of gene variants or genotypes affecting pharmacokinetics or pharmacodynamics. |
| popPK | Lucas_2025 | irrelevant | 0 | 0 | The paper measures serum creatinine (a breakdown product of creatine used as a kidney function biomarker) but does not report toxicokinetic parameters (half-life, clearance, etc.) for creatine itself. |
| PGx | Maio_2024 | not_relevant | 0 | 0 | The paper describes a genetic neuromuscular disorder (CIAO1 loss of function) and does not report on the pharmacokinetics or pharmacodynamics of the supplement/drug creatine. |
| PGx | Maslub_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of atorvastatin, not creatine. |
| popPK | Matsushita_1987 | irrelevant | 0 | 0 | The paper investigates creatine kinase (an enzyme) expression in rat muscles, not the toxicokinetics of the metabolite creatine. |
| popPK | Matsuyama_2002 | irrelevant | 0 | 0 | The paper reports CPK levels (an enzyme marker) and solubilities for HMG-CoA reductase inhibitors, but does not report pharmacokinetic parameters for creatine itself. |
| PGx | McEwan_2023 | not_relevant | 0 | 0 | The paper discusses colchicine, not creatine. |
| PGx | Medeiros_2025 | not_relevant | 2 | 5 | The paper reviews gene expression changes associated with kidney disease and creatine exposure using bioinformatics, but does not report pharmacogenomic effects (genotype -&gt; PK/PD change) for the drug creatine. |
| popPK | Mickelson_1985 | irrelevant | 0 | 0 | The paper characterizes creatine kinase (an enzyme) isozymes and their tissue distribution, rather than reporting toxicokinetic parameters for creatine itself. |
| PGx | Mladenovska_2017 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics for atorvastatin, not creatine. |
| popPK | Montes-Nieto_2013 | irrelevant | 0 | 0 | The paper is a proteomic study of adipose tissue where creatine kinase is identified as a protein, but no toxicokinetic parameters for the substance creatine are reported. |
| popPK | Moran_2015 | irrelevant | 0 | 0 | The paper discusses a genetic disorder involving thyroid hormone receptors and mentions elevated creatine kinase as a symptom, but it does not report any quantitative kinetic parameters for creatine itself. |
| popPK | Morel_1996 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of glycol ethers (EGME/EGBE) and alcohols in rats, using urinary creatine/creatinine ratio only as a biomarker for testicular toxicity rather than studying creatine's disposition. |
| popPK | Mousaviyon_2025 | irrelevant | 0 | 0 | The paper studies the effects of crude oil wastewater on fish, measuring creatine phosphokinase (an enzyme) as a biomarker, rather than measuring the toxicokinetics of creatine itself. |
| popPK | Mujika_2004 | irrelevant | 0 | 0 | The paper is a review of physiological changes during tapering and mentions creatine kinase as a marker of muscle damage, but provides no kinetic parameters (half-life, clearance, etc.) for the substance creatine. |
| PGx | Mukkera_2021 | not_relevant | 0 | 0 | The paper is a case report on dermatomyositis treatment and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of creatine. |
| PGx | Murphy_2022 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on statins (atorvastatin/rosuvastatin), not creatine. |
| popPK | Napierska_2009 | irrelevant | 0 | 0 | The paper measures creatine kinase (an enzyme) as a biomarker in flounder, not the toxicokinetics of the substance creatine. |
| PGx | Nguyen_2018 | not_relevant | 0 | 0 | The paper is a review of risk factors for statin-induced myopathy, not a pharmacogenomic study on creatine's PK/PD parameters. |
| popPK | Nie_2025 | irrelevant | 0 | 0 | The paper reports reference intervals for heavy metals (Pb, As, Hg, Cd) in humans, using creatine solely as a normalization factor for urine samples, and provides no kinetic parameters for creatine itself. |
| PGx | Ording_1989 | not_relevant | 0 | 0 | The paper describes the pathophysiology of malignant hyperthermia, not the pharmacogenomic effects on PK/PD parameters of creatine. |
| PGx | Ostojic_2026 | not_relevant | 2 | 1 | The paper is a narrative review hypothesizing mechanisms of genetic influence on creatine responsiveness but does not report specific experimental data or fitted effect sizes linking genotypes to PK/PD parameters. |
| PGx | Paladi_2025 | not_relevant | 0 | 0 | The paper reports MRS measurements of hippocampal metabolites in healthy subjects genotyped for ApoE4 (excluded if positive), but does not investigate the effect of genetics on the pharmacokinetics or pharmacodynamics of the drug creatine. |
| popPK | Paltrinieri_2010 | irrelevant | 0 | 0 | The paper focuses on creatine kinase (CK) isoenzymes, not the toxicokinetics of creatine itself. |
| popPK | Parthasarathi_1996 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of vincristine, and creatine is only mentioned via the enzyme creatine phosphokinase, which is not the subject substance. |
| popPK | Petrosky_2015 | irrelevant | 0 | 0 | The paper measures tissue activity of the enzyme creatine kinase (CK), which is a biomarker, and does not report kinetic parameters (half-life, clearance, partition coefficients) for the substrate creatine itself. |
| popPK | Petty_1991 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and efficacy of MDL 74270 (an alpha-tocopherol analogue), not creatine; creatine phosphokinase is only mentioned as a serum marker for infarct size. |
| popPK | Poapolathep_2010 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for deoxynivalenol (DON), while creatine phosphokinase (CPK) is only measured as a biomarker enzyme, not the subject substance. |
| PGx | Prieto-Peña_2025 | not_relevant | 0 | 0 | The paper investigates genetic risk factors for statin-induced myopathy (an adverse outcome) rather than a pharmacokinetic or pharmacodynamic parameter of the drug creatine (or statins). |
| popPK | Quest_1997 | irrelevant | 0 | 0 | The paper studies the myristoylation and lipid association of the enzyme creatine kinase in sea urchins, not the toxicokinetic parameters (half-life, clearance, etc.) of creatine itself. |
| PGx | Ranjbarvaziri_2021 | not_relevant | 0 | 0 | The paper investigates metabolic changes in hypertrophic cardiomyopathy and does not report a pharmacogenomic effect on a PK or PD parameter of creatine. |
| popPK | Robert_1991 | irrelevant | 0 | 0 | The paper focuses on the expression of creatine kinase isozymes in Xenopus laevis, not on the toxicokinetics of creatine. |
| popPK | Robert_1991_2 | irrelevant | 0 | 0 | The paper focuses on the molecular biology and tissue localization of creatine kinase (CK) isozymes in Xenopus laevis, not on the toxicokinetic parameters of creatine itself. |
| popPK | Roth_1989 | irrelevant | 0 | 0 | The paper measures creatine kinase (an enzyme) in rat serum, not the kinetic parameters of the substance creatine. |
| popPK | Sanetra_2021 | irrelevant | 0 | 0 | The paper measures creatine kinase (CK) levels as a marker of myocardial injury, not the pharmacokinetics of the substance creatine. |
| popPK | Sanhajariya_2021 | irrelevant | 1 | 0 | The paper investigates the toxicokinetics of snake venom and the pharmacodynamics of creatine kinase (an enzyme/biomarker), not the toxicokinetic parameters of the substance creatine itself. |
| PGx | Schneider_2019 | not_relevant | 0 | 0 | The paper reports evolutionary selection pressure on the slc6a8 gene in salmonids, not a pharmacogenomic study of a drug's PK/PD. |
| popPK | Schut_1999 | irrelevant | 0 | 0 | The paper is a review on heterocyclic amines produced from creatine pyrolysis, containing no kinetic parameters for creatine itself. |
| PGx | Scott_2004 | not_relevant | 0 | 0 | The paper reviews Rosuvastatin, not creatine, and does not report pharmacogenomic effects on creatine PK/PD parameters. |
| PGx | Sharif_2025 | not_relevant | 0 | 0 | The study focuses on the drug rosuvastatin, not creatine. |
| PGx | Sharma_2021 | not_relevant | 0 | 0 | The paper focuses on biomarkers for a mitochondrial disease (m.3243A&gt;G variant) and does not study pharmacokinetics or pharmacodynamics of creatine supplementation. |
| PGx | Shaukat_2003 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (simvastatin/fluconazole) causing rhabdomyolysis, not a pharmacogenomic effect on creatine PK/PD. |
| popPK | Shireman_2006 | irrelevant | 0 | 0 | Creatine appears only as an analytical marker (creatine kinase) for muscle injury, not as the subject substance for toxicokinetic parameter measurement. |
| popPK | Silvestre_2010 | irrelevant | 0 | 0 | The paper focuses on proteomic changes in sturgeon larvae due to heat and selenium stress, where creatine kinase is merely a detected protein, not a kinetic parameter for creatine disposition. |
| PGx | Sindoni_2016 | not_relevant | 0 | 0 | The paper discusses hypothyroid myopathy and creatine kinase levels, not the pharmacokinetics or pharmacodynamics of creatine as a drug or the effect of genetic variants on these parameters. |
| PGx | Sinn_2022 | not_relevant | 0 | 0 | The paper investigates the enzymatic activity of AGMAT/GDAH on guanidino acid substrates, not the pharmacokinetics or pharmacodynamics of creatine as a drug. |
| PGx | Skryabin_2021 | not_relevant | 1 | 1 | The paper discusses a pharmacogenetic effect (CYP2D6) on the PK/PD of olanzapine, not the drug creatine. |
| popPK | Starostinetsky-Malonek_2023 | irrelevant | 0 | 0 | The paper reports serum chemistry (including creatine kinase, not creatine) and hematology for sharks, containing no toxicokinetic parameters for creatine. |
| PGx | Steeghs_1995 | not_relevant | 0 | 0 | The paper characterizes the mouse ubiquitously expressed mitochondrial creatine kinase gene and its inactivation, but does not study a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of creatine as a drug. |
| PGx | Steinmeyer_2023 | not_relevant | 0 | 0 | The paper discusses drug-induced myopathies and mentions creatine kinase (a biomarker), but does not report pharmacogenomic effects on the PK/PD of the supplement creatine. |
| popPK | Sun_2021 | irrelevant | 0 | 0 | The paper reports on the kinetics of ustiloxin A (a fungal toxin), using creatine only as an internal standard or normalization metric (mg/mg creatine). |
| popPK | Taeger_2023 | irrelevant | 0 | 0 | The paper assesses PAH exposure in firefighters using 1-hydroxypyrene as a biomarker, using creatinine only for adjustment, and does not report kinetic parameters for creatine itself. |
| popPK | Takagi_2001 | irrelevant | 0 | 0 | The paper discusses the enzyme creatine kinase (CK) and its isozymes as clinical diagnostic markers, not the toxicokinetics of the substrate creatine. |
| popPK | Tamayo_2022 | irrelevant | 0 | 0 | The paper studies arsenic metabolism kinetics and genetics; creatine is mentioned only as an abbreviation (DMA for dimethylarsinic acid is contrasted with it, but creatine itself is not a subject of kinetic analysis) or as a co-intervention in a trial name, with no kinetic parameters reported for creatine. |
| popPK | Tanaka_2023 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for azathioprine and its metabolite 6-MP in rats, while creatine appears only as a standard biochemical analyte (creatine phosphokinase/creatinine) in the methods. |
| popPK | Ternant_2017 | irrelevant | 2 | 2 | The paper models the kinetics of Creatine Kinase (CK) and CK-MB (enzymes released during myocardial injury), not the small molecule creatine itself, and contains no kinetic parameters for creatine. |
| popPK | Thangarajh_2019 | irrelevant | 0 | 0 | The paper is a metabolomic biomarker study in mdx mice that reports relative intensity changes and statistical associations for creatine, but provides no quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution). |
| popPK | Thiebot_2026 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for hexahydrocannabinol (HHC) and its metabolites, while creatine is only mentioned as a biomarker (creatine kinase) for rhabdomyolysis. |
| popPK | Tonomura_2009 | irrelevant | 0 | 0 | The paper focuses on biomarkers of myotoxicity (such as creatine kinase) in rats treated with carbofuran or isoproterenol, and does not report toxicokinetic parameters for creatine itself. |
| popPK | Topp_1977 | irrelevant | 0 | 0 | The paper studies SV40-transformed mouse teratocarcinoma cell lines and measures creatine phosphokinase activity, but contains no kinetic parameters for creatine itself. |
| PGx | Toso_2023 | not_relevant | 0 | 0 | The study is a clinical trial protocol investigating the anti-inflammatory efficacy of colchicine in ACS patients, with no focus on pharmacogenomic effects on creatine or other pharmacokinetic parameters. |
| popPK | Tsikas_2010 | irrelevant | 0 | 0 | The paper describes an analytical method for creatinine and notes that creatine interferes with the measurement, but it does not report kinetic parameters for creatine itself. |
| PGx | Ulland_2017 | not_relevant | 2 | 2 | Paper studies the effect of the drug cyclocreatine on microglial function in the context of TREM2 genetic variants, but it does not report changes in the pharmacokinetic or pharmacodynamic parameters of endogenous creatine or its standard clinical use. |
| popPK | Walters_2019 | irrelevant | 0 | 0 | The paper studies vigabatrin tissue distribution, with creatine appearing only as a measured endogenous metabolite that showed no significant kinetic changes or parameters reported. |
| popPK | Wang_2013 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of mycophenolic acid-glucosamine conjugates, not creatine. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the antibiotic omadacycline, not creatine (which is mentioned only as a covariate for clearance calculation). |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and dosing of teicoplanin, a antibiotic, and does not report kinetic parameters for creatine. |
| PGx | Watanabe_2021 | not_relevant | 0 | 0 | The paper investigates the interaction between statins and selenocysteine lyase genotype on creatine metabolism and oxidative stress, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of creatine itself. |
| popPK | Watson_2015 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of Zinc Oxide nanoparticles (ZnO ENPs), not creatine; creatine phosphokinase is only mentioned as a liver injury biomarker. |
| popPK | Wijerathna_2019 | irrelevant | 0 | 0 | The paper studies colchicine toxicokinetics and uses creatinine only as a biomarker for kidney function, not as the subject substance for kinetic parameter extraction. |
| popPK | Wright_2001 | irrelevant | 0 | 0 | The paper focuses on estimating Glomerular Filtration Rate (GFR) using 51Cr-EDTA clearance and serum creatinine, with no kinetic parameters reported for creatine itself. |
| popPK | Wrobeln_2020 | irrelevant | 0 | 0 | The paper focuses on perfluorocarbon-based artificial oxygen carriers; creatine is only mentioned via Creatine Kinase (CK) enzyme levels as a biomarker for organ damage, not as a subject substance for kinetic parameter extraction. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The paper is an epidemiological study on environmental greenness exposure and cardiovascular outcomes; creatine kinase is mentioned only as a biomarker, not as the subject of toxicokinetic analysis. |
| popPK | Wyss_2000 | irrelevant | 1 | 0 | This is a general review of creatine metabolism and physiology without reporting specific quantitative toxicokinetic parameters (like half-life or clearance) for the substance in the provided text. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper focuses on chlorfenapyr poisoning, and "creatine kinase" is a laboratory biomarker (enzyme), not the substance creatine, so no toxicokinetic parameters for creatine are reported. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug axatilimab, and mentions creatine phosphokinase (CPK) only as a pharmacodynamic biomarker, not as the subject substance for kinetic analysis. |
| popPK | Yano_1998 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for acetazolamide, and creatine clearance is used only as a covariate for renal function, not as the subject of kinetic study. |
| popPK | Ye_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for daptomycin, not creatine; creatine is only mentioned in the context of monitoring creatine phosphokinase (a side effect marker). |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug lacosamide, and creatinine clearance is used only as a covariate for renal function, not as the subject substance. |
| popPK | Zeng_2021 | irrelevant | 0 | 0 | The paper is an epidemiological metabolomics study identifying creatine as a biomarker of cadmium nephrotoicity, but it does not report quantitative kinetic parameters (half-life, clearance, etc.) for creatine. |
| popPK | Zhai_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for hydroxychloroquine, not creatine; creatine is only mentioned as a renal function index in the context of dosing formulas. |
| popPK | Zheng_2023 | irrelevant | 0 | 0 | The paper measures antibiotic exposure in urine and analyzes associations with abnormal cardiac enzyme profiles (including creatine kinase), but it contains no kinetic parameters (such as half-life, clearance, or rate constants) for the substance creatine itself, treating "creatine kinase" only as a biomarker of cardiac health. |
| popPK | Zhou_2016 | irrelevant | 0 | 0 | The paper analyzes the exposure-response relationship for sonidegib (a Hedgehog pathway inhibitor), and creatine phosphokinase is mentioned only as a biomarker for safety, not as the subject substance for kinetic parameter determination. |
| PGx | Zhou_2024 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions between statins and quinolones regarding adverse reactions, and does not discuss creatine pharmacokinetics or pharmacogenomic effects on creatine parameters. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The paper measures creatine kinase-MB (an enzyme) as a cardiac safety biomarker, not the kinetics of the substance creatine itself. |
| PGx | Zhou_2026_2 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction causing myopathy in atorvastatin/almonertinib, not a pharmacogenomic effect on creatine. |
| PGx | van_1991 | not_relevant | 0 | 0 | The paper describes gene targeting in mouse embryonic stem cells to study creatine kinase gene expression and isoenzyme formation, not the pharmacokinetics or pharmacodynamics of creatine as a drug. |
| PGx | van_1994 | not_relevant | 0 | 0 | The paper investigates the physiological role of the creatine kinase enzyme in mouse muscle energy metabolism, not the pharmacokinetic or pharmacodynamic effects of creatine as a drug supplement influenced by human genotypes. |
| PGx | van_1994_2 | not_relevant | 0 | 0 | The paper reports on the phenotypic consequences of gene knockout in mice (energy metabolism, muscle function), not a pharmacogenomic effect of a genotype on the PK/PD of creatine as a drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcreatine%5D&body=Drug%3A%20creatine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_creatine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-10 10:50 UTC</sub>
