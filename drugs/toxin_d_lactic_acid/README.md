<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;D-Lactic acid&quot;}]"></div>

# D-Lactic acid

- **generic name:** D-Lactic acid
- **T3DB:** [T3D4307](http://www.t3db.ca/toxins/T3D4307) · **DrugBank:** [DB03066](https://go.drugbank.com/drugs/DB03066) · **PubChem:** [CID 61503](https://pubchem.ncbi.nlm.nih.gov/compound/61503)
- **groups:** experimental

## About

D-Lactic acid is the end product of the enzyme Glyoxalase II ([EC:3.1.2.6] hydroxyacyl-glutathione hydrolase) which converts the intermediate substrate S-lactoyl-glutathione to reduced glutathione and D-lactate. (OMIM 138790). The concentrated form is used internally to prevent gastrointestinal fermentation.

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4307">T3DB T3D4307</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 10326-41-7 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:341">ChEBI 341</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Fuglerud_2021_glucose_predictions](drugs/toxin_d_lactic_acid/pd_Fuglerud_2021_glucose_predictions.md) | glucose predictions ← Lactate · direct linear effect | — | Fuglerud SS et al., Investigation of the effect of clinical…, Journal of biophotonics (2021) | [10.1002/jbio.202000450](https://doi.org/10.1002/jbio.202000450) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Pasquale_2023_IOPcc](drugs/toxin_d_lactic_acid/pd_Pasquale_2023_IOPcc.md) | corneal-compensated intraocular pressure (IOPcc) ← lactate · direct linear effect | — | Pasquale LR et al., Metabolite and Lipid Biomarkers Associa…, Investigative ophthalmology… (2023) | [10.1167/iovs.64.11.11](https://doi.org/10.1167/iovs.64.11.11) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=d_lactic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: SLC16A1 (inhibitor), SLC16A1 (substrate), SLC16A3 (substrate), SLC16A7 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 21:45 | 1:32:01 | 0/0/0 | 1/1/0 | 0/0/0 | 2,642,352/59,499 | einfracz / qwen3.8-27b | 117 | 17/88 | 117/0 | 0 |

## Coverage

- **PubMed hits:** 2265 matched, 296 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_15 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lin_1998.pdf` | Lin RY et al., Human monocarboxylate transporter 2 (MC…, The Journal of biological c… (1998) | popPK | 9 | [10.1074/jbc.273.44.28959](https://doi.org/10.1074/jbc.273.44.28959) | [9786900](https://pubmed.ncbi.nlm.nih.gov/9786900) | The paper reports the apparent Km (25 microM) for a monocarboxylate transporter (MCT2) which transports lactate, providing a mechanistic kinetic parameter for the substance. |
| `Commander_2022.pdf` | Commander SJ et al., The relationship between simulated milr…, Cardiology in the young (2022) | pd | 5 | [10.1017/S1047951121003103](https://doi.org/10.1017/S1047951121003103) | [34350821](https://www.ncbi.nlm.nih.gov/pubmed/34350821) | metadata signals extractable PD data (exposure-response) |
| `Dai_2005.pdf` | Dai G et al., Terephthalic acid occupational exposure…, Environmental toxicology an… (2005) | pd | 5 | [10.1016/j.etap.2005.01.007](https://doi.org/10.1016/j.etap.2005.01.007) | [21783590](https://www.ncbi.nlm.nih.gov/pubmed/21783590) | metadata signals extractable PD data (Exposure-response) |
| `Folkesson_2012.pdf` | Folkesson KT et al., A human vascular model based on microdi…, Microcirculation (New York,… (2012) | pd | 5 | [10.1111/j.1549-8719.2012.00170.x](https://doi.org/10.1111/j.1549-8719.2012.00170.x) | [22332827](https://www.ncbi.nlm.nih.gov/pubmed/22332827) | metadata signals extractable PD data (sigmoid) |
| `Hong_2008.pdf` | Hong Y et al., Population exposure-response modeling o…, Journal of clinical pharmac… (2008) | pd | 5 | [10.1177/0091270008316884](https://doi.org/10.1177/0091270008316884) | [18372428](https://www.ncbi.nlm.nih.gov/pubmed/18372428) | metadata signals extractable PD data (exposure-response) |
| `Hoppe_2022.pdf` | Hoppe B et al., Safety, pharmacodynamics, and exposure-…, Kidney international (2022) | pd | 5 | [10.1016/j.kint.2021.08.015](https://doi.org/10.1016/j.kint.2021.08.015) | [34481803](https://www.ncbi.nlm.nih.gov/pubmed/34481803) | metadata signals extractable PD data (exposure-response) |
| `Ouellet_2016.pdf` | Ouellet D et al., Population pharmacokinetics and exposur…, Cancer chemotherapy and pha… (2016) | pd | 5 | [10.1007/s00280-016-2993-y](https://doi.org/10.1007/s00280-016-2993-y) | [26940938](https://www.ncbi.nlm.nih.gov/pubmed/26940938) | metadata signals extractable PD data (exposure-response) |
| `Schmid_2018.pdf` | Schmid U et al., Population pharmacokinetics of nintedan…, Pulmonary pharmacology & th… (2018) | pd | 5 | [10.1016/j.pupt.2017.11.004](https://doi.org/10.1016/j.pupt.2017.11.004) | [29133080](https://www.ncbi.nlm.nih.gov/pubmed/29133080) | metadata signals extractable PD data (exposure-response) |
| `Wei_2020.pdf` | Wei W et al., Polystyrene nanoplastics reshape the an…, Water research (2020) | pd | 5 | [10.1016/j.watres.2020.116041](https://doi.org/10.1016/j.watres.2020.116041) | [32574821](https://www.ncbi.nlm.nih.gov/pubmed/32574821) | metadata signals extractable PD data (exposure-response) |
| `Xu_2017.pdf` | Xu XS et al., Modeling the Relationship Between Expos…, Clinical pharmacokinetics (2017) | pd | 5 | [10.1007/s40262-016-0425-0](https://doi.org/10.1007/s40262-016-0425-0) | [27324190](https://www.ncbi.nlm.nih.gov/pubmed/27324190) | metadata signals extractable PD data (exposure-response) |
| `Yu_2020.pdf` | Yu Y et al., Talazoparib Exposure-Efficacy Analysis…, Journal of clinical pharmac… (2020) | pd | 5 | [10.1002/jcph.1623](https://doi.org/10.1002/jcph.1623) | [32468579](https://www.ncbi.nlm.nih.gov/pubmed/32468579) | metadata signals extractable PD data (Exposure-response) |
| `Crespo_2016.pdf` | Crespo M et al., The use of juvenile Solea solea as sent…, Environmental science and p… (2016) | pgx | 7 | [10.1007/s11356-016-7146-7](https://doi.org/10.1007/s11356-016-7146-7) | [27357707](https://www.ncbi.nlm.nih.gov/pubmed/27357707) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Danilevicz_2024.pdf` | Danilevicz CK et al., Pharmacological evaluation of a traditi…, Journal of ethnopharmacology (2024) | pgx | 7 | [10.1016/j.jep.2024.117806](https://doi.org/10.1016/j.jep.2024.117806) | [38278373](https://www.ncbi.nlm.nih.gov/pubmed/38278373) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Alashkar_2017.pdf` | Alashkar F et al., Persisting hyperbilirubinemia in patien…, European journal of haemato… (2017) | pgx | 5 | [10.1111/ejh.12927](https://doi.org/10.1111/ejh.12927) | [28692147](https://www.ncbi.nlm.nih.gov/pubmed/28692147) | metadata signals extractable PGX data (ABCB4) |
| `Liang_1992.pdf` | Liang HC et al., "Oxidative stress" response in liver of…, Biochemical and biophysical… (1992) | pgx | 5 | [10.1016/0006-291x(92)91853-i](https://doi.org/10.1016/0006-291x(92)91853-i) | [1540161](https://www.ncbi.nlm.nih.gov/pubmed/1540161) | metadata signals extractable PGX data (CYP1A1) |

<sub>queue written 2026-11-09 21:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Halim_2013 | irrelevant | 0 | 0 | The paper investigates heavy metal toxicity and oxidative stress biomarkers in snails, and "d_lactic_acid" is not the subject substance; LDH is an enzyme, not the kinetic substrate for the target chemical's disposition. |
| PGx | Acin-Albiac_2020 | not_relevant | 0 | 0 | The paper is a review on microbial phenomics and does not report pharmacogenomic effects on d-lactic acid PK/PD. |
| popPK | Ahmed_2023 | irrelevant | 0 | 0 | The paper is a bioinformatic study on phytochemicals targeting the enzyme Lactate Dehydrogenase A (LDHA), and contains no toxicokinetic parameters for the substance d-lactic acid. |
| popPK | Akash_2023 | irrelevant | 0 | 0 | The paper is a computational study on drug discovery against Babesia microti and does not report toxicokinetic parameters for d-lactic acid. |
| PGx | Alashkar_2017 | not_relevant | 0 | 0 | The paper discusses genetic variants in PNH patients but does not report pharmacogenomic effects on the PK/PD of d-lactic acid. |
| popPK | Alessandri_2024 | irrelevant | 0 | 0 | The paper investigates the neurological role of the lactate receptor HCAR1 in epilepsy using mice and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance) for lactic acid as a xenobiotic or subject substance. |
| PGx | Alexander_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of a ketogenic diet (specifically beta-hydroxybutyrate) on autoimmune disease, not the pharmacogenomics of d_lactic_acid. |
| PGx | Alexander_2024_2 | not_relevant | 0 | 0 | The paper investigates the protective effects of a ketogenic diet and beta-hydroxybutyrate on multiple sclerosis (EAE model) via gut microbiota modulation, with no focus on d-lactic acid or pharmacogenomics. |
| popPK | An_2025 | irrelevant | 0 | 0 | The paper studies calycosin's neuroprotective effects, and lactic acid is not mentioned as a subject substance for toxicokinetic analysis. |
| PGx | Anwar_2019 | not_relevant | 0 | 0 | The paper discusses oleic acid and silver nanoparticles against Acanthamoeba castellanii and does not involve d-lactic acid or any pharmacogenomic analysis. |
| popPK | Banaee_2019 | irrelevant | 0 | 0 | The paper focuses on the toxicity of chlorpyrifos and glyphosate in crayfish and does not report toxicokinetic parameters for d-lactic acid. |
| PGx | Barker_1994 | not_relevant | 0 | 0 | The paper studies oxidative stress effects on CYP1A1/2 expression in hepatocytes and does not report any pharmacokinetic or pharmacodynamic parameters for d-lactic acid. |
| popPK | Batsios_2026 | irrelevant | 0 | 0 | The paper focuses on the metabolic pathway of lactate production and its downstream biological effects (lactylation, tumor imaging) rather than the toxicokinetic parameters (disposition, clearance, half-life) of d-lactic acid. |
| popPK | Belenichev_2025 | irrelevant | 0 | 0 | The paper reports neuroprotective efficacy and biochemical markers (including lactate levels) in rats, but does not provide quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for D-lactic acid as a subject substance. |
| popPK | Benli_2015 | irrelevant | 0 | 0 | The paper studies the toxicity of etofenprox in crayfish, and lactic acid is mentioned only as a secondary metabolite/parameter, not as the subject substance with kinetic data. |
| popPK | Bijsterbosch_1983 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of cytosolic malate dehydrogenase, not d-lactic acid. |
| PGx | Bloor_1985 | not_relevant | 0 | 0 | The paper studies the effects of sodium nitroprusside and ATP on hemodynamics in dogs and mentions lactic acid as a metabolic marker of ischemia, but does not involve pharmacogenomics or d-lactic acid as a therapeutic agent. |
| popPK | Braun_2026 | irrelevant | 0 | 0 | The paper uses lactate as a chemical trigger for hydrogel formation in biomaterials and does not report any toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for lactic acid. |
| popPK | Breukink_2000 | irrelevant | 0 | 0 | The paper studies the binding thermodynamics of the peptide Nisin Z to lipid bilayers, not the toxicokinetic parameters of the substance d_lactic_acid. |
| popPK | Budha_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for tislelizumab (a monoclonal antibody), not d-lactic acid. |
| popPK | Byrley_2021 | irrelevant | 0 | 0 | The paper focuses on particle dosimetry for 3D printer emissions (ABS/PLA) and does not report toxicokinetic parameters for d-lactic acid. |
| popPK | Calello_2015 | irrelevant | 0 | 0 | The paper is a review on the treatment of metformin poisoning, where lactic acid is mentioned only as a clinical biomarker for acidosis, not as the subject of toxicokinetic analysis. |
| popPK | Cao_2024 | irrelevant | 0 | 0 | The paper models the toxicokinetics of Plasmodium vivax lactate dehydrogenase (PvLDH), a parasite enzyme biomarker, not the endogenous metabolite d-lactic acid. |
| popPK | Cao_2025 | irrelevant | 0 | 0 | The paper describes the fabrication, physicochemical properties (particle size, porosity, injectability), and local histological tissue response of PLLA microspheres, but reports no systemic toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for d-lactic acid. |
| PGx | Castagnoli_2019 | not_relevant | 0 | 0 | The paper investigates lactate as a metabolic biomarker for HER2 status and trastuzumab response, not as the drug itself; it does not report pharmacogenomic effects on the PK/PD of d-lactic acid. |
| PGx | Chen_2019 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (Artesunate and Adriamycin) in cell lines and does not report any pharmacogenomic effects (gene variants) on the PK/PD of d-lactic acid. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for maduramicin (MAD), not d-lactic acid. |
| popPK | Chung_2026 | irrelevant | 0 | 0 | The paper focuses on the mechanistic role of extracellular Enolase-1 in multiple myeloma and does not report any toxicokinetic parameters for D-lactic acid, which is only measured as a metabolic byproduct in cell cultures. |
| popPK | Commander_2022 | irrelevant | 0 | 0 | The paper studies milrinone pharmacokinetics and safety, where lactic acid is used only as a diagnostic marker for hypotension, not as the subject substance. |
| popPK | Correia_2022 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of metformin, and lactic acid is mentioned only as a clinical condition or marker, not as the subject substance for kinetic parameter extraction. |
| popPK | Cosson_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for crovalimab, not d-lactic acid. |
| popPK | Crass_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for pegcetacoplan, a complement C3 inhibitor, not for d-lactic acid. |
| popPK | Cregeen_1999 | irrelevant | 0 | 0 | The paper focuses on hydroxypyruvate reductase in the context of primary hyperoxaluria type 2 and mentions lactate dehydrogenase as a co-eluting protein, but it does not report toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for d-lactic acid. |
| PGx | Crespo_2016 | not_relevant | 0 | 0 | The paper discusses toxicology and biomarkers in fish and does not report pharmacogenomic effects on the PK/PD of L-lactic acid. |
| popPK | Cui_2025 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of gold-core polystyrene nanoplastics (AuPS-NPs), not d-lactic acid. |
| popPK | Dai_2005 | irrelevant | 0 | 0 | The study focuses on terephthalic acid (TPA) exposure, and d-lactic acid is not reported as a subject substance with kinetic parameters. |
| PGx | Dai_2021 | not_relevant | 0 | 0 | The study investigates the cardioprotective effects of a traditional Chinese medicine formula on the eNOS/iNOS pathway in rats, not the pharmacogenomics of d-lactic acid. |
| popPK | Dalakas_2001 | irrelevant | 0 | 0 | The paper discusses the mechanism of antiretroviral-induced mitochondrial toxicity and lactic acidosis but does not report quantitative toxicokinetic parameters (e.g., half-life, clearance) for d-lactic acid itself. |
| PGx | Danilevicz_2024 | not_relevant | 0 | 0 | The study investigates the safety and CYP inhibition of a plant extract, not the pharmacokinetics or pharmacodynamics of d-lactic acid, and contains no genetic variant analysis. |
| popPK | Davuluri_2020 | irrelevant | 0 | 0 | The paper evaluates the anthelmintic activity of plant extracts and mentions lactate dehydrogenase (LDH) as a biomarker, but does not report toxicokinetic parameters for d-lactic acid as the subject substance. |
| popPK | Dayasiri_2024 | irrelevant | 0 | 0 | The paper describes a clinical case of naphthalene poisoning; d-lactic acid is not the subject substance, and no toxicokinetic parameters for it are reported. |
| PGx | Denton_1987 | not_relevant | 0 | 0 | The paper studies cell toxicity and metabolism of MPTP, not the pharmacokinetics or pharmacodynamics of d_lactic_acid in relation to gene variants. |
| PGx | Dierksheide_2024 | not_relevant | 0 | 0 | The paper discusses genetic engineering in Bacillus subtilis and a loss-of-function mutation in the lactate dehydrogenase gene (ldh), which is unrelated to the pharmacokinetics or pharmacodynamics of the drug d-lactic acid. |
| popPK | Dings_2026 | irrelevant | 0 | 0 | The paper models the pharmacokinetics of cafedrine, theodrenaline, and ephedrine, and uses neonatal lactate only as a biomarker for acidosis, without reporting kinetic parameters for d-lactic acid itself. |
| popPK | Dreute_2025 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action of LDH and IDO1 inhibitors (GNE/BMS) in cancer cells and does not report toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for D-lactic acid itself. |
| PGx | Driedger_2019 | not_relevant | 0 | 0 | The study analyzes metabolic changes (lactate/glucose) in patients with Hepatitis C receiving DAAs but does not report any pharmacogenomic effects or association between genetic variants and pharmacokinetic/pharmacodynamic parameters of the drug. |
| PGx | Duffy_2008 | not_relevant | 0 | 0 | The paper is a general review of cancer biomarkers and does not discuss pharmacogenomics or PK/PD parameters for d_lactic_acid. |
| popPK | Dzik_2026 | irrelevant | 0 | 0 | The paper is a mechanistic ODE model of the tumor microenvironment where lactate serves as a signaling/metabolic variable, not the subject of toxicokinetic analysis for d-lactic acid. |
| popPK | El-Shenawy_2012 | irrelevant | 0 | 0 | The study investigates enzymatic biomarkers (lactate dehydrogenase) in land snails for heavy metal pollution, not the toxicokinetics of d-lactic acid itself. |
| popPK | El_2024 | irrelevant | 0 | 0 | The paper analyzes metabolites in Albizia species and their antiplasmodial activity, with no data on the toxicokinetics of lactic acid. |
| popPK | Elizondo-Vega_2017 | irrelevant | 0 | 0 | The paper is a review describing the molecular characteristics and regulation of monocarboxylate transporters, not a toxicokinetic study reporting quantitative disposition parameters (half-life, clearance, etc.) for lactic acid in an organism. |
| popPK | Estephan_2021 | irrelevant | 0 | 0 | The paper focuses on the physical properties of liposomes and curcumin as a probe molecule, providing no toxicokinetic parameters for d_lactic_acid. |
| PGx | Fan_2018 | not_relevant | 0 | 0 | The paper discusses riboflavin treatment for MADD, not d_lactic_acid pharmacokinetics or pharmacodynamics. |
| popPK | Felmlee_2017 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of GHB, with d_lactic_acid appearing only as a co-exposure used to test MCT saturation effects, rather than being the subject substance. |
| PGx | Feng_2024 | not_relevant | 0 | 0 | The paper describes the pathogenesis of B-cell lymphoma and the role of the LDHA gene, not pharmacogenomics of D-lactic acid. |
| popPK | Fischetti_2018 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of lamivudine (3TC), and lactic acid is only measured as a safety biomarker for toxicity, not as the subject substance for kinetic parameter extraction. |
| PGx | Flück_2024 | not_relevant | 0 | 0 | The paper investigates genetic influences on aerobic performance metrics (e.g., VO2max, lactate kinetics) in athletes, not on the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Folkesson_2012 | irrelevant | 0 | 0 | no_text gate: only 152 chars of text extracted (&lt; 400) |
| popPK | Freund_2024 | irrelevant | 0 | 0 | The paper is a diagnostic study measuring lactate concentrations in exhaled breath condensate to discriminate COPD status; it reports static levels for classification, not kinetic parameters (half-life, clearance, rate constants) for d_lactic_acid. |
| PGx | Frye_2024 | not_relevant | 0 | 0 | The paper reviews mitochondrial biomarkers in autism spectrum disorder and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of D-lactic acid as a drug. |
| PGx | Fu_2026 | not_relevant | 0 | 0 | The paper focuses on the oncogenic role of AARS1 in cancer progression and does not investigate the pharmacokinetics or pharmacodynamics of d-lactic acid. |
| popPK | Fudio_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and exposure-response modeling of lurbinectedin and doxorubicin; d_lactic_acid is not the subject of the study. |
| popPK | Garai_2022 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50) and oxidative stress biomarkers in worms, but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for lactic acid. |
| popPK | Garcia_1995 | irrelevant | 0 | 0 | The paper characterizes monocarboxylate transporters (MCT1/MCT2) in hamster and insect cells but does not report quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for d-lactic acid. |
| popPK | García-García_2019 | irrelevant | 0 | 0 | The paper reports controlled release kinetics for BMP-2 and 17β-estradiol from biomaterials, not toxicokinetic parameters for d-lactic acid. |
| popPK | Ge_2025 | irrelevant | 0 | 0 | The paper reports associations between metal exposure and myocardial enzyme levels in humans and does not contain any toxicokinetic parameters for d-lactic acid. |
| popPK | Gernand_2014 | irrelevant | 0 | 0 | The paper is a meta-analysis of carbon nanotube toxicity in rodents, and lactic acid appears only as an unmentioned or incidental biological marker (lactate dehydrogenase), not as the subject substance with kinetic parameters. |
| PGx | Gervasini_2017 | not_relevant | 0 | 0 | The paper investigates the impact of DHFR polymorphisms on Methotrexate (MTX) pharmacodynamics and dose requirements, not on d_lactic_acid. |
| popPK | Glusczak_2011 | irrelevant | 0 | 0 | The study measures plasma lactate levels (concentrations) as a biomarker of oxidative stress in fish exposed to glyphosate, but does not report any toxicokinetic parameters such as clearance, half-life, or rate constants for lactic acid. |
| popPK | Gordon_2020 | irrelevant | 0 | 0 | The paper discusses LDH isoenzymes as biomarkers for hemolysis in CF-LVAD patients and does not contain kinetic parameters for d-lactic acid. |
| PGx | Graziano_2017 | not_relevant | 0 | 0 | The paper investigates gene expression in cancer metabolism but does not report a pharmacokinetic or pharmacodynamic effect of a gene variant on the drug d_lactic_acid. |
| popPK | Grémain_2021 | irrelevant | 2 | 0 | The primary subject is caffeine toxicokinetics, and while lactate parameters are reported, they serve as toxicity markers (toxicodynamics) rather than describing the disposition of d_lactic_acid as a subject substance. |
| popPK | Guan_2023 | irrelevant | 0 | 0 | The paper describes a nanoparticle delivery system using poly(lactic acid-co-glycolic acid) as a carrier material, not the toxicokinetics of d-lactic acid as a subject substance. |
| popPK | Gérard_2015 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters (half-life) for amlodipine, not for d_lactic_acid, which is only mentioned as a biomarker (lactate level) in the clinical context. |
| popPK | Güngördü_2013 | irrelevant | 0 | 0 | The study measures LDH (an enzyme) as a biomarker in tadpoles exposed to textile dyes, and does not report kinetic parameters for lactic acid as a subject substance. |
| popPK | Hagiwara_1993 | irrelevant | 0 | 0 | The paper reports kinetic data for the drug cisplatin, while lactic acid oligomer microspheres are merely the delivery vehicle and not the subject substance. |
| popPK | Halestrap_1999 | irrelevant | 0 | 0 | The paper is a review of the MCT transporter family's structure and function, lacking quantitative toxicokinetic parameters (half-lives, clearance, etc.) for lactic acid. |
| popPK | Halestrap_2004 | irrelevant | 0 | 0 | The paper is a review of the SLC16 gene family and MCT transporters, describing structure and function, but does not report quantitative toxicokinetic parameters (half-life, clearance, etc.) for d_lactic_acid. |
| popPK | Halestrap_2013 | irrelevant | 0 | 0 | The paper is a review of the SLC16 gene family and monocarboxylate transporters, focusing on gene structure and disease roles rather than reporting quantitative toxicokinetic parameters (half-life, clearance, etc.) for d-lactic acid. |
| PGx | Hall_2023 | not_relevant | 0 | 0 | The paper investigates sports genetics (running performance) and does not report a pharmacokinetic or pharmacodynamic effect of a gene variant on the drug d-lactic acid. |
| popPK | Hamdam_2013 | irrelevant | 0 | 0 | The paper is a general review of safety pharmacology concepts and contains no specific toxicokinetic data or parameters for d_lactic_acid. |
| popPK | Hani_2021 | irrelevant | 0 | 0 | The paper uses lactate as an internal metabolic biomarker in zebra mussels to assess environmental health, but does not report toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for d-lactic acid as a subject substance. |
| popPK | Hansch_2000 | irrelevant | 0 | 0 | The paper reports QSAR parameters for phenol toxicity and uses lactate dehydrogenase release as a general biomarker for cell damage, containing no kinetic parameters for d_lactic_acid. |
| popPK | Hatami_2023 | irrelevant | 0 | 0 | The paper is a review of lactate metabolism and monocarboxylate transporters in cancer cells, containing no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for D-lactic acid as a subject substance. |
| PGx | He_2023 | not_relevant | 0 | 0 | The paper investigates mechanisms of chemoresistance in cancer cells and does not report pharmacogenomic effects on the PK/PD of d-lactic acid. |
| popPK | Hong_2008 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for metformin, not for d_lactic_acid, which is only measured as a biomarker of tolerability. |
| popPK | Hoppe_2022 | irrelevant | 0 | 0 | no_text gate: only 147 chars of text extracted (&lt; 400) |
| popPK | Huang_2024 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamics of risperidone, and lactic acid is not mentioned; only lactate dehydrogenase (LDH) appears as a covariate, which is a different substance. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper is a review discussing lactate dehydrogenase (LDH) as a biomarker in cancer, not the toxicokinetics of D-lactic acid. |
| popPK | Irurzun-Arana_2020 | irrelevant | 0 | 0 | The paper models the kinetics of lactate dehydrogenase (LDH, an enzyme) and other tumor biomarkers (MIA, S100B) as prognostic indicators for melanoma, not the toxicokinetics of D-lactic acid. |
| PGx | Israels_1976 | not_relevant | 0 | 0 | The paper discusses causes of lactic acidosis and metabolic disorders but does not report a pharmacogenomic effect on the PK or PD of d-lactic acid. |
| PGx | Jabri_2024 | not_relevant | 0 | 0 | The paper studies the antimicrobial efficacy of nanomaterials against Acanthamoeba and does not report pharmacogenomic effects on the PK/PD of d-lactic acid. |
| popPK | Jadán-Piedra_2019 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of mercury (Hg) and methylmercury (MeHg), not d-lactic acid, which is not mentioned as a subject substance in the text or evidence provided. |
| popPK | Jamil_2026 | irrelevant | 0 | 0 | The paper focuses on curcumin derivatives and does not report kinetic parameters for d_lactic_acid. |
| popPK | Jiang_2023 | irrelevant | 0 | 0 | The paper focuses on the separation and characterization of exopolysaccharides from lactic acid bacteria, not the toxicokinetics of lactic acid. |
| PGx | Jin_2019 | not_relevant | 0 | 0 | The paper investigates cancer metabolism and drug vulnerabilities (PHGDH inhibitors), but does not report pharmacogenomic effects on the PK or PD of d-lactic acid. |
| popPK | Juel_1999 | irrelevant | 0 | 0 | The paper focuses on the properties of membrane transporters (MCT1/MCT4) in skeletal muscle and does not report systemic toxicokinetic parameters (half-life, clearance, partition coefficients) for the substance in vivo. |
| popPK | Jurcovicova_2014 | irrelevant | 0 | 0 | The paper focuses on glucose transporters and the metabolic conversion of glucose to lactate in the brain, but does not report toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for lactic acid itself. |
| popPK | Kafeel_2025 | irrelevant | 0 | 0 | The paper is a review on adiponectin and its role in cancer metabolism, and does not report toxicokinetic parameters for d-lactic acid. |
| popPK | Kamiya_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pyrrolizidine alkaloid senkirkine, not d_lactic_acid. |
| popPK | Kasper_2018 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics and efficacy of cyclosporine A, and lactic acid is present only as a component of the polymer excipient (PLA), not as the subject substance with kinetic parameters. |
| PGx | Kim_2024 | not_relevant | 1 | 2 | The paper reports a case of Reye syndrome after naproxen use and mentions genetic polymorphisms (UGT, NAT2) as potential factors, but does not report pharmacogenomic effects on the PK or PD parameters of d_lactic_acid; d_lactic_acid is not the drug of interest here. |
| PGx | Kobayashi_2021 | not_relevant | 3 | 0 | The text is a review of MCT1/4 biology and cancer prognosis, not a study of pharmacokinetics or pharmacodynamics of L-lactic acid as a drug candidate, and it lacks specific quantitative pharmacogenomic effect sizes for PK/PD parameters. |
| PGx | Koka_2018 | not_relevant | 0 | 0 | The paper studies metabolic changes in cancer stem cells under hypoxia and does not report pharmacokinetic or pharmacodynamic effects of a specific drug (d-lactic acid) modulated by genetic variants. |
| popPK | Kovesi_1994 | irrelevant | 0 | 0 | The paper reports on Lactate Dehydrogenase (LDH) isoenzyme fractions as a diagnostic marker for leukemia, not on the toxicokinetic parameters (half-life, clearance, etc.) of the substance d-lactic acid. |
| popPK | Krishnamurthy_2021 | irrelevant | 0 | 0 | The paper discusses serum lactate dehydrogenase (LDH), an enzyme, not the toxicokinetics of D-lactic acid. |
| popPK | Kumar_2017 | irrelevant | 0 | 0 | The paper investigates oxidative stress biomarkers (enzymes like LDH, CAT, SOD) in fish and does not report toxicokinetic parameters for d-lactic acid. |
| popPK | Kumar_2021 | irrelevant | 0 | 0 | The paper studies metal bioaccumulation in fish and mentions lactate dehydrogenase (an enzyme) as a biomarker, but does not report toxicokinetic parameters for the substance lactic acid. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | The paper analyzes metal contamination and biochemical markers in shrimp, with no kinetic parameters for d-lactic acid. |
| popPK | Kumari_2023 | irrelevant | 0 | 0 | The paper discusses biomarkers in fish for general water pollution monitoring and does not report specific toxicokinetic parameters for d_lactic_acid. |
| popPK | Lachaux_2025 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics and toxicity of Lithium (Li) in *Dreissena polymorpha*, not lactic acid; lactic acid is only mentioned in the context of lactate dehydrogenase activity. |
| PGx | Laroute_2017 | not_relevant | 0 | 0 | The paper reviews the biodiversity of Lactococcus lactis and does not report any pharmacogenomic effects on PK/PD parameters of D-lactic acid. |
| PGx | Lebigot_2021 | not_relevant | 0 | 0 | The paper is a review of mitochondrial dysfunction syndromes and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Lewis_2023 | irrelevant | 0 | 0 | The paper reports kinetic parameters for metformin, while d-lactic acid (lactic acid) is only mentioned as a consequence of the overdose (acidosis), not as the subject of toxicokinetic analysis. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper investigates the hepatoprotective effects of biogenic selenium nanoparticles (SeNPs), not d_lactic_acid. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The paper studies the role of the enzyme PGK in shrimp WSSV infection and mentions lactate content changes but provides no toxicokinetic parameters for lactic acid. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper investigates lactic acid metabolism-related genes for cancer prognosis and does not study d-lactic acid as a drug with pharmacokinetic or pharmacodynamic parameters influenced by genotype. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on the role of ENO1 in macrophage polarization and mentions lactate only as a metabolic product affecting KLF4, providing no quantitative toxicokinetic parameters for d-lactic acid itself. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The paper reports kinetic parameters for 18F-FDG, not d-lactic acid; lactic acid is only mentioned as a metabolite detected via MRS. |
| PGx | Li_2026_3 | not_relevant | 0 | 0 | The study focuses on the effect of alginate on hyperuricemia and gut microbiota, with no mention of d_lactic_acid, genetic variants, or pharmacogenomic analysis. |
| PGx | Liang_1992 | not_relevant | 0 | 0 | The paper describes general changes in liver enzyme activities (LDH, CYPs, etc.) in mice due to a chromosomal deletion, and does not report any pharmacokinetic or pharmacodynamic effects of d-lactic acid. |
| popPK | Liao_2026 | irrelevant | 0 | 0 | The paper reports epidemiological associations between VOC metabolites and LDH enzyme levels, containing no toxicokinetic parameters (half-life, clearance, etc.) for d-lactic acid. |
| PGx | Lim_2021 | not_relevant | 0 | 0 | The paper describes a drug delivery system for siRNA and does not investigate the pharmacokinetics or pharmacodynamics of D-lactic acid. |
| PGx | Lin_2019 | not_relevant | 0 | 0 | The paper discusses the hepatoprotective effects of auriculatone sulfate on acetaminophen-induced liver injury, not the pharmacokinetics or pharmacodynamics of d_lactic_acid. |
| PGx | Lin_2025 | not_relevant | 0 | 0 | The paper investigates disease-drug interactions (RA altering PK) in mice, not pharmacogenomic effects (gene variants), and the drug is Fuzi alkaloids, not d_lactic_acid. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of rotigotine, a drug that metabolizes to lactic acid, but does not report kinetic parameters for lactic acid itself. |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The paper analyzes adverse reactions of anthracyclines in breast cancer patients but does not report pharmacogenomic effects on the PK or PD of d-lactic acid. |
| PGx | Liu_2022_2 | not_relevant | 0 | 0 | The study focuses on cancer biology and metabolic changes in cervical cancer cells, not the pharmacokinetics or pharmacodynamics of D-lactic acid as a drug. |
| popPK | Long_2024 | irrelevant | 0 | 0 | The paper focuses on the kinetics of the drug puerarin in poly(lactic acid) microspheres, not the toxicokinetics of d-lactic acid itself. |
| popPK | Lowy_1980 | irrelevant | 0 | 0 | The paper studies thiram toxicity in rats and measures lactate levels as a biomarker of metabolic response, but provides no kinetic parameters (half-life, clearance, etc.) for d-lactic acid. |
| PGx | Ma_2012 | not_relevant | 0 | 0 | The paper describes a 3D micro-perfusion tissue model for testing anticancer drug cytotoxicity and metabolism (TMZ/IFO), but does not report any pharmacogenomic effects on the PK/PD of d_lactic_acid. |
| popPK | Maciejewska_2024 | irrelevant | 0 | 0 | The paper models the growth of lactic acid bacteria (microorganisms) and Listeria monocytogenes in food, not the toxicokinetics of the chemical substance d_lactic_acid. |
| popPK | Martin_2025 | irrelevant | 0 | 0 | The study focuses on the physiological and cognitive effects of oral contraceptive ingestion on substrate metabolism, containing no kinetic parameters for lactic acid. |
| popPK | Massaro_1970 | irrelevant | 0 | 0 | The paper describes the enzymatic properties and tissue distribution of lactate dehydrogenase in horseshoe crabs, not the toxicokinetic disposition parameters of d_lactic_acid. |
| popPK | Meng_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for sodium danshensu (salvinanic acid), not d-lactic acid. |
| PGx | Meredith_2008 | not_relevant | 0 | 0 | The paper reviews the SLC16 transporter family and mentions the potential impact of SNPs on pharmacogenomics generally, but it does not report any specific data or findings on how a gene variant affects the PK or PD parameters of d-lactic acid. |
| popPK | Merezhinskaya_2009 | irrelevant | 0 | 0 | The paper is a review of Monocarboxylate Transporters (MCTs) and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, Kd) for d_lactic_acid as a subject substance in a physiological context. |
| PGx | Merkle_1992 | not_relevant | 0 | 0 | The paper studies endogenous LDH deficiency and embryonic lethality, not the pharmacokinetics or pharmacodynamics of the drug d_lactic_acid. |
| PGx | Merkle_1992_2 | not_relevant | 0 | 0 | The paper characterizes mutations in the Ldh-1 gene and their effects on enzyme stability and activity, but it does not investigate pharmacokinetic or pharmacodynamic parameters of the drug d-lactic_acid. |
| popPK | Merritt_1984 | irrelevant | 0 | 0 | The paper is a population genetics study of newts and contains no toxicokinetic parameters for lactic acid. |
| PGx | Milosavljevic_2021 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on psychiatric drugs (antidepressants and antipsychotics), not on d_lactic_acid. |
| popPK | Moreau_2022 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics and toxicity of 1,3-dichloropropene; d-lactic acid (lactate) is not the subject substance and likely appears only as a standard component of cell culture media or background metabolism. |
| PGx | Morim_2025 | not_relevant | 0 | 0 | The paper reports on a diagnostic sensor for L-lactate, not on the pharmacokinetics or pharmacodynamics of D-lactic acid or any drug, and contains no information on pharmacogenomics. |
| popPK | Morin_1983 | irrelevant | 0 | 0 | The paper discusses the enzymatic properties and identity of LDH isozymes (LDHk vs LDH5) and does not report toxicokinetic parameters (half-life, clearance, etc.) for lactic acid. |
| popPK | Morse_2013 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of GHB and ethanol in rats, using l-lactate only as an MCT inhibitor to treat GHB intoxication, not as the subject of kinetic analysis. |
| popPK | Mujika_2004 | irrelevant | 0 | 0 | The paper is a review of physiological changes during athletic tapering and does not report quantitative toxicokinetic parameters for lactic acid. |
| PGx | Murray_2018 | not_relevant | 0 | 0 | The paper discusses genetic adaptation to high-altitude hypoxia and metabolic changes (e.g., lactate levels, PPARA expression) but does not report pharmacokinetic or pharmacodynamic effects of d-lactic acid or any other drug. |
| popPK | Mégarbane_2003 | irrelevant | 0 | 0 | The paper is a review of cyanide poisoning treatments where lactic acid is only mentioned as a clinical indicator (lactic acidosis), with no kinetic parameters reported for lactic acid itself. |
| popPK | Nagano_2024 | irrelevant | 0 | 0 | The paper describes a method for visualizing lactate distribution in mouse testis tissue using MALDI-MSI, but it does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for d-lactic acid. |
| popPK | Nakase_2003 | irrelevant | 0 | 0 | The paper focuses on dexamethasone and IL-10 delivery via PDLLA microspheres in mice; d_lactic_acid is only mentioned as part of the polymer name (PDLLA) and no kinetic parameters for lactic acid are reported. |
| popPK | Nasrabadi_2025 | irrelevant | 0 | 0 | The paper reports mosquito attraction effective doses (ED50/ED90) for lactic acid, which is a behavioral/odorant response metric, not a toxicokinetic parameter of disposition (half-life, clearance, etc.). |
| popPK | Nelson_2026 | irrelevant | 0 | 0 | The paper studies sulfur dioxide exposure and IL-10 treatment; d_lactic_acid is not the subject substance and no kinetic parameters for it are reported. |
| popPK | Nguyen_2022 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for valproic acid (VPA), not d-lactic acid; lactate is only measured as a biomarker of toxicity. |
| popPK | Nzabanita_2025 | irrelevant | 0 | 0 | The paper reports metabolomic associations of lactic acid with heavy metals but provides no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for d_lactic_acid. |
| popPK | Omar_1996 | irrelevant | 0 | 0 | The paper is a study of enzyme histochemistry in a parasite and does not report toxicokinetic parameters for d-lactic acid. |
| PGx | Ording_1989 | not_relevant | 0 | 0 | The text describes the pathophysiology of malignant hyperthermia and does not discuss pharmacogenomic effects on the PK or PD of d_lactic_acid. |
| popPK | Ouellet_2016 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for trametinib, not d_lactic_acid. |
| popPK | Papakonstantinou_2021 | irrelevant | 0 | 0 | The paper is an in silico structural modeling and pharmacophore study of the MCT4 transporter protein, not a toxicokinetic study of d-lactic acid, and it reports no quantitative kinetic parameters (e.g., clearance, half-life, partition coefficients) for the substance itself. |
| popPK | Park_2016 | irrelevant | 0 | 0 | The study focuses on iron nanoparticles, and lactic acid is mentioned only as the substrate for the lactate dehydrogenase release assay (a biomarker of toxicity), not as the subject substance for toxicokinetic analysis. |
| popPK | Parker_1987 | irrelevant | 0 | 0 | The paper studies the kinetics of lactate dehydrogenase (LDH) isozymes, not d-lactic acid (lactate), which is a completely different chemical entity. |
| popPK | Pasquale_2023 | irrelevant | 0 | 0 | The paper is a cross-sectional metabolomic study examining associations between plasma metabolite levels (including lactate) and intraocular pressure/retina structure, containing no toxicokinetic parameters (e.g., clearance, half-life, partition coefficients) for lactic acid. |
| PGx | Patel_2023 | not_relevant | 0 | 0 | The paper discusses a simulation of diffusion effects on the pharmacokinetic modeling of hyperpolarized pyruvate imaging, not a pharmacogenomic effect on d-lactic acid. |
| popPK | Patel_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ADAMTS13 (an enzyme), not d_lactic_acid (lactate), which is only mentioned as a metabolic marker or implied context. |
| popPK | Petrosky_2015 | irrelevant | 0 | 0 | The paper reports enzyme activities in turtles and does not contain toxicokinetic parameters for d_lactic_acid. |
| PGx | Pretsch_1993 | not_relevant | 0 | 0 | The paper describes a mouse model of a genetic mutation affecting lactate dehydrogenase and hemolytic anemia, and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of d-lactic acid. |
| popPK | Raabová_2021 | irrelevant | 0 | 0 | The paper focuses on solid-phase extraction methods for pharmaceuticals and does not report toxicokinetic parameters for d_lactic_acid. |
| popPK | Redžović_2025 | irrelevant | 0 | 0 | The paper reports on enzyme activities (including LDH) in an amphipod as biomarkers of pollution stress, not toxicokinetic parameters for lactic acid. |
| PGx | Reina-Reina_2023 | not_relevant | 0 | 0 | The paper focuses on machine learning for predicting COVID-19 severity and does not discuss pharmacogenomics or the pharmacokinetics/pharmacodynamics of d_lactic_acid. |
| popPK | Rejeski_2023 | irrelevant | 0 | 0 | The paper is a clinical outcome study on body composition and CAR-T therapy in humans; it contains no toxicokinetic parameters for d_lactic_acid. |
| PGx | Remmel_2023 | not_relevant | 0 | 0 | The paper studies genetic associations with athletic performance and lactate clearance, but does not report pharmacogenomic effects on the PK or PD parameters of d_lactic_acid as a drug. |
| popPK | Ren_2021 | irrelevant | 0 | 0 | The paper focuses on cabazitaxel (a drug) delivered in a PEG-PLA nanoparticle, not the toxicokinetics of lactic acid as the subject substance. |
| popPK | Riff_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for lidocaine, not d_lactic_acid. |
| popPK | Rode_2018 | irrelevant | 0 | 0 | The paper studies the fabrication and physicochemical properties of poly(lactic acid) nanoparticles, not the toxicokinetic parameters of the d-lactic acid molecule itself. |
| popPK | Rubenstein_2018 | irrelevant | 0 | 0 | The paper studies lenalidomide pharmacokinetics and mentions lactate only as a metabolomic biomarker in CSF, providing no kinetic parameters for d_lactic_acid. |
| popPK | Sabourin_2016 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of cyanide, while lactic acid is only mentioned as a biomarker whose concentration changes due to the exposure, with no kinetic parameters reported for it. |
| popPK | Sadzuka_2008 | irrelevant | 0 | 0 | The study focuses on coproporphyrin I (CPI), and d_lactic_acid (lactate) is mentioned only as a component of a buffer where liposome formation failed. |
| popPK | Salazar_2014 | irrelevant | 0 | 0 | The paper studies interactions between packaging materials and food aroma compounds (flavoured oil emulsions), not the toxicokinetics of d_lactic_acid. |
| popPK | Sanghavi_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic and exposure-response parameters for the monoclonal antibody nivolumab, not for d_lactic_acid (or lactate). |
| popPK | Santos_2019 | irrelevant | 0 | 0 | The paper focuses on biochemical markers (enzymes like LDH) in gulls and does not report toxicokinetic parameters for d-lactic acid. |
| popPK | Saoca_2023 | irrelevant | 0 | 0 | The paper studies trace metals (Cd, Pb, Cr, Hg) in fish and does not report kinetic parameters for d-lactic acid. |
| popPK | Sathe_2025 | irrelevant | 0 | 0 | The paper focuses on sacituzumab govitecan (SG) and mentions lactate dehydrogenase (LDH) only as a covariate, not d-lactic acid, and does not report toxicokinetic parameters for d-lactic acid. |
| popPK | Saxena_2014 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of radiothallium (201Tl), using lactic acid only as an experimental agent to induce acidosis for decorporation, rather than measuring kinetic parameters for lactic acid itself. |
| popPK | Schmid_2018 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| popPK | Schäpertöns_2026 | irrelevant | 0 | 0 | The paper focuses on bioprocess optimization of NISTCHO cells, treating lactate as a metabolic byproduct rather than the subject substance for toxicokinetic parameter extraction. |
| popPK | Schönlein_2026 | irrelevant | 0 | 0 | The paper is a review on poly(l-lactic acid) as a piezoelectric biomaterial and does not report toxicokinetic parameters for d-lactic acid. |
| popPK | Sebo_2026 | irrelevant | 0 | 0 | The paper studies the mechanism of metformin and glucose disposal, mentioning lactate only as a downstream metabolite of glycolysis, without reporting kinetic parameters for d-lactic acid itself. |
| PGx | Shah_2024 | not_relevant | 0 | 0 | The paper describes in vivo glycerol metabolism and lipid biomarker differences in patients with glycerol kinase deficiency, not the pharmacokinetic or pharmacodynamic effects of the drug d-lactic acid. |
| PGx | Sharma_2021 | not_relevant | 0 | 0 | The paper investigates biomarkers for mitochondrial disease (MELAS) caused by the m.3243A&gt;G variant and does not involve the pharmacokinetics or pharmacodynamics of the drug d-lactic_acid. |
| popPK | Shikov_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for a glycopeptide fraction (GPF) from sea urchins, not for d-lactic-acid, which is not the subject substance. |
| popPK | Shimada_1997 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of cadmium and the effects of testosterone, not the kinetic parameters of lactic acid. |
| PGx | Shimonty_2024 | not_relevant | 0 | 0 | The paper investigates the role of FNDC5/irisin in bone metabolism and calcium homeostasis, not the pharmacokinetics or pharmacodynamics of the drug d-lactic acid. |
| popPK | Shiraishi_2022 | irrelevant | 0 | 0 | The paper is a clinical case report on mitochondrial myopathy that discusses lactic acid as a diagnostic biomarker (lactate/pyruvate ratio) rather than reporting quantitative toxicokinetic parameters (half-life, clearance, etc.) for D-lactic acid. |
| popPK | Shireman_2006 | irrelevant | 0 | 0 | The paper investigates MCP-1 expression in muscle injury in mice and does not report any toxicokinetic parameters for d-lactic acid. |
| PGx | Smutný_2018 | not_relevant | 0 | 0 | The paper investigates the toxicity of phytochemicals in hepatocyte models and does not involve d-lactic acid or any pharmacogenomic analysis of a drug. |
| popPK | Sonner_2015 | irrelevant | 0 | 0 | The paper is a review of microfluidic models for sweat biomarkers and mentions lactate only as an example of a small molecule without providing quantitative toxicokinetic parameters or specific values for d-lactic acid. |
| PGx | Spedding_2025 | not_relevant | 0 | 0 | The paper discusses ALS evolution, CMAH pseudogenes, and lactate metabolism in disease context, but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of the drug d-lactic acid. |
| popPK | Spiering_2002 | irrelevant | 0 | 0 | The paper focuses on the extraction and distribution of ergovaline and peramine in plants, with lactic acid mentioned only as an analytical reagent. |
| popPK | Spînu_2022 | irrelevant | 0 | 0 | The paper focuses on Bayesian modeling of developmental neurotoxicity using in vitro data for 88 compounds, with no toxicokinetic parameters reported for d-lactic acid. |
| PGx | Stacpoole_2026 | not_relevant | 4 | 1 | The paper mentions that DCA dosing was guided by GSTZ1 pharmacogenomics, but it does not report the quantitative PK/PD effect size (e.g., AUC, Cmax) or statistical difference of DCA (dichloroacetate) itself attributable to the variant; it reports the clinical efficacy of the drug (lactate reduction, motor scores) in the general population. |
| PGx | Stefano_2015 | not_relevant | 0 | 0 | The paper is a review of mitochondrial biology in cancer and does not report any pharmacogenomic effects on the PK or PD of d-lactic acid. |
| popPK | Stumpp_2009 | irrelevant | 0 | 0 | The paper studies wound healing after laser resurfacing and does not report toxicokinetic parameters for lactic acid. |
| popPK | Tan_2017 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of docetaxel and micelles, with lactic acid appearing only as a component of the polymer formulation and not as the subject substance. |
| popPK | Tanaka_2023 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of azathioprine (and its metabolite 6-mercaptopurine) in rats, with no data or parameters reported for d-lactic acid. |
| popPK | Tang_2026 | irrelevant | 0 | 0 | The paper investigates the enzymatic function of LDHB in fish cells under salinity stress and does not report any toxicokinetic parameters (half-life, clearance, etc.) for d-lactic acid as a subject substance. |
| PGx | Tavares_2020 | not_relevant | 0 | 0 | The paper studies toxicity of terbinafine in skin/liver models and does not involve the drug d_lactic_acid or any pharmacogenomic analysis. |
| popPK | Teomim_1999 | irrelevant | 0 | 0 | The paper focuses on the delivery kinetics of heparin using a polymer matrix where lactic acid is merely a structural material (poly(lactic acid)), not the subject toxicokinetic substance. |
| PGx | Terrin_2022 | not_relevant | 0 | 0 | The paper investigates the prevalence of migraine in mitochondrial disorders and its correlation with energy metabolism and genotype, but it does not report a pharmacokinetic or pharmacodynamic effect of d_lactic_acid. |
| popPK | Thiel_2022 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters (half-life, kel) for acetaminophen, not d-lactic acid, which is only measured as a biomarker of liver injury. |
| popPK | Thomas_2003 | irrelevant | 0 | 0 | The paper focuses on the radiobiology (RBE) of Polonium-210 and mentions lactate dehydrogenase (LDH) only as an assay for cell damage, not as a toxicokinetic subject. |
| popPK | Thresher_1983 | irrelevant | 0 | 0 | The paper describes the preparation of an affinity chromatography resin and reports the dissociation constant for heart lactate dehydrogenase binding to the ligand, not the toxicokinetics of d-lactic acid. |
| popPK | Tsuchiya_2003 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of nefiracetam and its metabolite M-18, not d_lactic_acid. |
| popPK | Ullah_2018 | irrelevant | 0 | 0 | The paper investigates the toxicity of Malathion in fish, and L-lactic acid is not the subject substance; it is not even mentioned in the provided text. |
| PGx | Ursulino_2026 | not_relevant | 0 | 0 | The paper reports diagnostic biomarkers (metabolite levels) and genetic predisposition for infection, not pharmacokinetic or pharmacodynamic changes of d-lactic acid due to genotypes. |
| popPK | Velho_2022 | irrelevant | 0 | 0 | The paper focuses on the extraction of polyphenols and vitamins using ethyl lactate-based systems and does not report any toxicokinetic parameters for d-lactic acid. |
| popPK | Vittecoq_2002 | irrelevant | 0 | 0 | The paper reports on mitochondrial damage and lactate accumulation as clinical signs in HIV patients, but does not provide quantitative toxicokinetic parameters (e.g., clearance, half-life) for d-lactic acid. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | The study investigates the toxicokinetics of gamma-hydroxybutyrate (GHB), using L-lactate as a transporter inhibitor rather than the subject substance. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the monoclonal antibody serplulimab, not d-lactic acid. |
| PGx | Wang_2025_2 | not_relevant | 0 | 0 | The paper studies the antidepressant effects of a probiotic strain in mice and mentions indole-3-lactic acid, but does not investigate pharmacogenomics or the PK/PD of d-lactic acid. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and safety of talazoparib and enzalutamide; d-lactic acid is not the subject, and "lactate dehydrogenase" is a biomarker, not the kinetic substance. |
| popPK | Wei_2020 | irrelevant | 0 | 0 | The paper investigates the effects of polystyrene nanoplastics on anaerobic granular sludge and does not report any toxicokinetic parameters for D-lactic acid. |
| popPK | Wei_2026 | irrelevant | 0 | 0 | The paper investigates FFAR4 in colorectal cancer using cell lines and mice; d-lactic acid is mentioned only as a metabolic byproduct of glycolysis, and no toxicokinetic parameters (half-life, clearance, etc.) are reported for it. |
| popPK | Weisser_2019 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of aluminium (Al), and lactic acid (lactate) is mentioned only as a different aluminium species for comparison, not as the subject substance. |
| PGx | Wu_2022 | not_relevant | 0 | 0 | The paper analyzes phenotype-genotype correlations in mitochondrial diseases (including lactate levels) but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of d_lactic_acid as a drug. |
| PGx | Xie_2023 | not_relevant | 0 | 0 | The paper discusses genetic associations with muscle lactic acid levels, but does not involve the administration of lactic acid as a drug nor report pharmacokinetic or pharmacodynamic parameters for a drug. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper is a clinical prognostic study on mortality in sepsis patients using the RAR biomarker, with no toxicokinetic parameters reported for d-lactic acid. |
| popPK | Xu_2017 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and exposure-response relationship of abiraterone acetate, not the toxicokinetics of d-lactic acid. |
| PGx | Xu_2025 | not_relevant | 0 | 0 | The paper reports the protective effects of taurochenodeoxycholic acid on aflatoxin B1 toxicity and mentions reduced D-lactate levels as a marker of intestinal barrier function, but it does not study D-lactic acid as a drug nor report any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Yanagi_2021 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for neopetasitenine and petasitenine, not d_lactic_acid. |
| popPK | Yang_2007 | irrelevant | 0 | 0 | The paper investigates biomarkers (Hsp70, LDH, MDA) for PAH exposure in coke oven workers and does not report any toxicokinetic parameters for d-lactic acid. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for iruplinalkib, not d-lactic acid. |
| popPK | Yang_2025_2 | irrelevant | 0 | 0 | The paper reports volume kinetic parameters for Ringer's lactate solution as a whole fluid, not for d_lactic_acid as a distinct chemical substance; d_lactic_acid is merely a component of the vehicle. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper focuses on indium exposure and does not report toxicokinetic parameters for d_lactic_acid. |
| popPK | Yaseen_2025 | irrelevant | 0 | 0 | The paper studies pesticide toxicity in fish and measures lactate dehydrogenase (an enzyme) levels, but contains no toxicokinetic parameters for the substance d_lactic_acid. |
| popPK | Younes_2020 | irrelevant | 0 | 0 | The paper is a safety re-evaluation of food additives (E 472a-f) where lactic acid is a hydrolysis product/comparator, and it explicitly states that ADME data are limited without reporting any specific kinetic parameters for d-lactic acid. |
| popPK | Yu_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and efficacy of talazoparib, and mentions lactate dehydrogenase only as a baseline biomarker, not lactic acid kinetic parameters. |
| popPK | Zaidi_2025 | irrelevant | 0 | 0 | The paper focuses on the drug brucine as an MCT-4 inhibitor in cancer cells, using lactate only as a metabolic marker or transport substrate rather than the subject of toxicokinetic analysis. |
| PGx | Zamani-Ahmadmahmudi_2021 | not_relevant | 0 | 0 | The paper studies the prognostic value of the RTN1 gene in lymphoma and does not mention d_lactic_acid or pharmacokinetics/pharmacodynamics. |
| PGx | Zamek-Gliszczynski_2018 | not_relevant | 1 | 0 | The paper discusses metformin pharmacogenetics but does not report any quantitative data on how specific gene variants alter the PK or PD of d-lactic acid. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper studies macrolide antibiotics in zebrafish and mentions lactate dehydrogenase (LDH) as a cytotoxicity assay marker, but contains no kinetic parameters for d-lactic acid. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug nedosiran, not for d_lactic_acid. |
| PGx | Zhao_2025 | not_relevant | 0 | 0 | The paper studies the effect of the probiotic L. plantarum LBK on hyperuricemia and gut microbiota, and does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of d-lactic acid. |
| popPK | Zheng_2023 | irrelevant | 0 | 0 | The paper is an epidemiological study on antibiotic exposure and cardiac enzymes, and 'lactic acid' is not the subject of any kinetic analysis. |
| popPK | Zheng_2023_2 | irrelevant | 0 | 0 | The paper studies the release kinetics of dexamethasone from polymers (including poly(lactic acid)) in an in vitro setting, and does not report any toxicokinetic parameters for d_lactic_acid. |
| PGx | Zhong_1990 | not_relevant | 0 | 0 | The paper discusses the subcellular localization and phosphorylation of lactate dehydrogenase in PC12 cells, which is unrelated to the pharmacokinetics or pharmacodynamics of d_lactic_acid. |
| popPK | Zhu_1994 | irrelevant | 0 | 0 | The paper studies the toxicokinetics of the insecticide MeISP, not d_lactic_acid. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The paper studies a herbal formula and its effect on pulmonary fibrosis, with lactate mentioned only as a byproduct of glycolysis in macrophages, not as the subject of toxicokinetic analysis. |
| PGx | Zong_2024 | not_relevant | 0 | 0 | The paper discusses AARS1 as a lactate sensor and its role in p53 lactylation in tumorigenesis, with no mention of d_lactic_acid pharmacokinetics or pharmacodynamics. |
| popPK | da_2023 | irrelevant | 0 | 0 | The paper describes the immediate tissue distribution of Poly-L-lactic acid (PLLA) particles, a polymer, via ultrasound imaging, and does not report toxicokinetic parameters for D-lactic acid itself. |
| PGx | du_1978 | not_relevant | 0 | 0 | The paper studies the biotransformation and toxicity of sodium nitroprusside (measuring cyanide and thiocyanate levels) and mentions lactate measurements in 17 patients, but it does not report a pharmacogenomic effect on a PK/PD parameter of d_lactic_acid. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bd_lactic_acid%5D&body=Drug%3A%20d_lactic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_d_lactic_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
