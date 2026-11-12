<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Crotamine&quot;}]"></div>

# Crotamine

- **generic name:** Crotamine
- **T3DB:** [T3D2542](http://www.t3db.ca/toxins/T3D2542) · **PubChem:** none

## About

Crotamine is a peptide toxin produced by the South American rattlesnake (Crotalus durissus terrificus). It acts on cell membrane's sodium channels and is slightly analgesic, as well as myotoxic.

- **Category:** Protein, Animal Toxin, Natural Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Crotamine is a peptide toxin produced by the South American rattlesnake (Crotalus durissus terrificus).
- **Mechanism of toxicity:** Crotamine specifically modifies voltage-sensitive sodium channels, it exhibits analgesic activity and causes severe muscle necrosis by a non-enzymatic mechanism. It also actively interacts with lipid membranes.
- **Health effects:** Crotamine is slightly analgesic and is myotoxic.
- **Acute toxicity:** LD50: 0.262 mg/kg (Intravenous, Mouse)
LD50: 0.216 mg/kg (Intraperitoneal, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2542">T3DB T3D2542</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 58740-15-1</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 13:42 | 1:14:44 | 0/0/0 | 0/0/0 | 0/0/0 | 1,807,011/38,584 | einfracz / qwen3.8-27b | 87 | 6/81 | 87/0 | 0 |

## Coverage

- **PubMed hits:** 404 matched, 238 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2019.pdf` | Wang X et al., Multi-level ecotoxicological effects of…, Chemosphere (2019) | pd | 5 | [10.1016/j.chemosphere.2018.12.001](https://doi.org/10.1016/j.chemosphere.2018.12.001) | [30572241](https://www.ncbi.nlm.nih.gov/pubmed/30572241) | metadata signals extractable PD data (EC50) |
| `Feng_2022.pdf` | Feng X et al., Inhibitory effects of traditional Chine…, Journal of ethnopharmacology (2022) | pgx | 7 | [10.1016/j.jep.2022.115358](https://doi.org/10.1016/j.jep.2022.115358) | [35551976](https://www.ncbi.nlm.nih.gov/pubmed/35551976) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Duran_2021.pdf` | Duran G et al., Predictive value of ERCC2, ABCC2 and MM…, Cancer chemotherapy and pha… (2021) | pgx | 5 | [10.1007/s00280-021-04330-1](https://doi.org/10.1007/s00280-021-04330-1) | [34309735](https://www.ncbi.nlm.nih.gov/pubmed/34309735) | metadata signals extractable PGX data (ABCC2) |
| `Zhu_2018.pdf` | Zhu J et al., Genotype-driven phase I study of weekly…, Radiotherapy and oncology :… (2018) | pgx | 5 | [10.1016/j.radonc.2017.11.026](https://doi.org/10.1016/j.radonc.2017.11.026) | [29273261](https://www.ncbi.nlm.nih.gov/pubmed/29273261) | metadata signals extractable PGX data (UGT1A1) |

<sub>queue written 2026-11-10 13:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2003 | irrelevant | 0 | 0 | The paper focuses on Choice Reaction Time in renal disease patients and contains no data regarding the substance crotamine or its toxicokinetic parameters. |
| popPK | Aiko_2007 | irrelevant | 0 | 0 | The paper concerns tumor regression in esophageal cancer patients and contains no mention of crotamine or its toxicokinetic parameters. |
| popPK | Akhatova_2021 | irrelevant | 0 | 0 | The paper is a review of HPV vaccine clinical trials and does not report toxicokinetic parameters for crotamine. |
| PGx | Alday-Montañez_2025 | not_relevant | 0 | 0 | The study focuses on miRNA biomarkers for endometriosis diagnosis and does not report on the pharmacokinetics or pharmacodynamics of crotamine. |
| popPK | Allen_1986 | irrelevant | 0 | 0 | The paper reports acute toxicity (LD50) and toxicity potentiation effects, but provides no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for crotamine. |
| popPK | Alzoubi_2010 | irrelevant | 0 | 0 | The paper describes radiation dosimetry for breast cancer treatment and does not involve crotamine or any toxicokinetic parameters. |
| popPK | Appelt_2013 | irrelevant | 0 | 0 | The paper reports radiation dose-response parameters for rectal cancer and does not mention crotamine or any toxicokinetic parameters for the substance. |
| popPK | Ardoin_2020 | irrelevant | 0 | 0 | The paper discusses sensory rejection thresholds for cricket powder in food and does not mention crotamine or any toxicokinetic parameters. |
| popPK | Audi_1994 | irrelevant | 0 | 0 | The paper focuses on [14C]-diazepam and pulmonary capillary transport in dogs, with no mention or data for crotamine. |
| PGx | Bacheva_2026 | not_relevant | 0 | 0 | The paper studies genetic effects on autonomic regulation and respiratory function in athletes and does not involve crotamine or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Bazaraa_2021 | irrelevant | 0 | 0 | The paper is a clinical study on pediatric shock and does not mention crotamine or report any toxicokinetic parameters for it. |
| popPK | Belle_2018 | irrelevant | 0 | 0 | The paper is an epidemiological study on glucocorticoids in childhood cancer survivors and contains no data for crotamine. |
| popPK | Benignus_1998 | irrelevant | 0 | 0 | The paper focuses on toluene toxicokinetics and behavioral effects; crotamine is not mentioned or studied. |
| popPK | Benignus_2007 | irrelevant | 0 | 0 | The paper studies the toxicokinetics and neurotoxicity of toluene, not crotamine. |
| popPK | Borja_2018 | irrelevant | 0 | 0 | The paper characterizes venom composition and acute toxicity (LD50, hemorrhagic activity) but does not report any toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for crotamine. |
| PGx | Bosia_2018 | not_relevant | 0 | 0 | The paper investigates the effect of metabolic syndrome and a genetic polymorphism on cognitive outcomes in schizophrenia, and does not report any pharmacokinetic or pharmacodynamic effect of a drug on crotamine. |
| popPK | Bourget_1984 | irrelevant | 0 | 0 | The paper reports steroid dynamics in rabbits and does not mention crotamine or provide any kinetic parameters for it. |
| PGx | Bretscher_2020 | not_relevant | 0 | 0 | The paper analyzes the effects of parasite (P. falciparum) genotypes on the duration of chemoprophylaxis from antimalarial drugs (artemether-lumefantrine and artesunate-amodiaquine), not human pharmacogenomics, and does not involve the drug crotamine. |
| popPK | Buchmann_2010 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamics of methylphenidate, not crotamine, and contains no data for the target substance. |
| popPK | Cabel_2021 | irrelevant | 0 | 0 | The paper investigates HPV circulating tumor DNA (ctDNA) in cervical cancer patients and does not report any toxicokinetic parameters for crotamine. |
| PGx | Cabel_2021 | not_relevant | 0 | 0 | The paper reports on the use of HPV ctDNA detection for monitoring response to chemoradiotherapy in cervical cancer and does not investigate pharmacokinetic or pharmacodynamic effects of gene variants on crotamine. |
| popPK | Campo_2012 | irrelevant | 0 | 0 | The paper focuses on PAHs (specifically Benzo[a]pyrene and its metabolite 1-hydroxypyrene) and does not contain any data for crotamine. |
| popPK | Cao_2009 | irrelevant | 0 | 0 | The paper studies mitoxantrone-induced apoptosis in tumor cells and immune response in mice, with no mention of crotamine or its toxicokinetics. |
| popPK | Cartechini_2020 | irrelevant | 0 | 0 | The paper is a radiotherapy treatment planning study comparing proton vs photon therapy for breast cancer and does not contain any data or kinetic parameters for crotamine. |
| popPK | Castro_2026 | irrelevant | 0 | 0 | The paper focuses on lactate kinetics in septic shock and does not contain any data or mention of crotamine. |
| PGx | Cebatoriene_2024 | not_relevant | 0 | 0 | The paper discusses gene variants associated with Age-Related Macular Degeneration and response to anti-VEGF therapies, not the pharmacogenomics of crotamine. |
| popPK | Chan_2005 | irrelevant | 0 | 0 | The paper is a diagnostic imaging study concerning breast cancer detection and contains no toxicokinetic data for crotamine. |
| popPK | Chargi_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of cisplatin in humans and does not mention crotamine. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper is a clinical dosimetry study for Wilms tumor radiotherapy and does not report any toxicokinetic parameters for crotamine. |
| popPK | Chera_2019 | irrelevant | 0 | 0 | The paper reports on the clearance kinetics of circulating tumor HPV DNA in cancer patients and does not contain any data regarding the toxicokinetics of crotamine. |
| popPK | Chhibber-Goel_2019 | irrelevant | 0 | 0 | The paper discusses artemisinin resistance in malaria and contains no data or parameters for the substance crotamine. |
| PGx | Chiorean_2012 | not_relevant | 0 | 0 | The paper investigates capecitabine and irinotecan, not crotamine. |
| PGx | Chiorean_2014 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of sorafenib, gemcitabine, and radiation therapy, and does not mention crotamine. |
| popPK | Christenson_2008 | irrelevant | 0 | 0 | The paper studies myocardial oxidative metabolism using [11C]acetate PET in heart failure patients and contains no data regarding crotamine. |
| popPK | Chua_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of radiotherapy-induced otitis media in nasopharyngeal carcinoma patients and does not mention crotamine or report any toxicokinetic parameters for it. |
| popPK | Cifric_2024 | irrelevant | 0 | 0 | The paper is a review on endoplasmic reticulum chaperones in immunogenic cell death and does not contain any toxicokinetic data or parameters for crotamine. |
| popPK | Cilla_2023 | irrelevant | 0 | 0 | The paper focuses on radiotherapy planning and secondary cancer risk assessment for breast cancer and does not contain any toxicokinetic data or parameters for crotamine. |
| popPK | Colis-Torres_2022 | irrelevant | 0 | 0 | The paper focuses on venom composition and antivenom neutralization efficacy, not on the toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) of crotamine. |
| PGx | Colis-Torres_2022 | not_relevant | 0 | 0 | The paper characterizes intraspecific variation in rattlesnake venom and antivenom efficacy, not pharmacogenomic effects of crotamine as a drug. |
| popPK | Coppock_2013 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and efficacy of the drug rapamycin in a mouse model of HPV-positive head and neck cancer, with no mention of crotamine. |
| PGx | Da_2020 | not_relevant | 0 | 0 | The paper investigates ipilimumab and cervical cancer biomarkers, not the pharmacokinetics or pharmacodynamics of crotamine. |
| PGx | Day_2025 | not_relevant | 0 | 0 | The paper investigates PET biomarkers for SLC6A8 mutations and does not involve the drug crotamine. |
| PGx | Debernardi_2022 | not_relevant | 0 | 0 | The paper studies crotamine's PK/PD parameters in relation to genetic variants, but the text provided is about HPV and anal cancer chemotherapy. |
| PGx | Desilets_2022 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for 5-fluorouracil, not crotamine. |
| PGx | Ding_2021 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics in nasopharyngeal carcinoma but does not mention the drug crotamine or any associated pharmacokinetic or pharmacodynamic parameters. |
| popPK | Dong_2026 | irrelevant | 0 | 0 | The paper concerns a synthetic TREM2 receptor (abbreviated CRT) and its therapeutic effects on inflammation, not the toxicokinetics of the substance crotamine. |
| PGx | Dreussi_2016 | not_relevant | 0 | 0 | The paper investigates pharmacogenetic biomarkers for rectal cancer patients treated with chemoradiotherapy (fluoropyrimidines/oxaliplatin) and does not mention or study the drug crotamine. |
| popPK | Duffner_1984 | irrelevant | 0 | 0 | The paper focuses on methotrexate clearance and CT abnormalities in children with CNS leukemia, with no mention of crotamine. |
| PGx | Duran_2021 | not_relevant | 0 | 0 | The paper reports clinical outcomes (survival/response) for platinum-based chemoradiotherapy, not PK/PD parameters for crotamine. |
| PGx | Eastman_2011 | not_relevant | 0 | 0 | The paper reports parasite resistance to piperaquine, not a pharmacogenomic effect on the PK/PD of crotamine. |
| PGx | Escalante-Santiago_2014 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of valproic acid and other antiepileptic drugs, not crotamine. |
| popPK | Fashe_2025 | irrelevant | 0 | 0 | The paper investigates the induction of CYP3A4 by pregnancy hormones and does not report toxicokinetic parameters for the specific substance crotamine. |
| PGx | Fashe_2025 | not_relevant | 0 | 0 | The paper investigates estrogen associations with CYP3A activity during pregnancy and does not involve the drug crotamine or any genetic variants affecting crotamine PK/PD. |
| popPK | Feng_2018 | irrelevant | 0 | 0 | The paper investigates the biological mechanism of programmed cell removal involving calreticulin, not the toxicokinetics of crotamine. |
| PGx | Feng_2022 | not_relevant | 0 | 0 | The paper studies the effect of traditional Chinese medicine on tacrolimus pharmacokinetics, not the effect of a genetic variant on crotamine. |
| popPK | Feng_2024 | irrelevant | 0 | 0 | The paper focuses on gold nano frameworks and imiquimod for cancer therapy and does not mention crotamine or report any toxicokinetic parameters for it. |
| popPK | Figueiredo_2018 | irrelevant | 0 | 0 | The paper is a surgical outcomes study on rectal cancer and does not contain any toxicokinetic data for crotamine. |
| popPK | Fong_2020 | irrelevant | 0 | 0 | The paper studies esophageal clearance issues in patients with nasopharyngeal carcinoma and does not involve the substance crotamine. |
| popPK | Fudim_2024 | irrelevant | 0 | 0 | The paper reports on the drug BAY 2413555, not crotamine. |
| PGx | Fujiwara_2027 | not_relevant | 0 | 0 | The paper focuses on machine learning models to predict cancer response in bladder cancer and does not involve the drug crotamine or any pharmacogenomic analysis. |
| popPK | Garg_2015 | irrelevant | 0 | 0 | The paper focuses on immunogenic cell death mechanisms and calreticulin expression in cancer models, containing no toxicokinetic data for crotamine. |
| PGx | Gebhardt_1995 | not_relevant | 0 | 0 | The paper studies the effects of pravastatin, not crotamine, and focuses on cellular resistance mechanisms in tumor cell lines, not pharmacogenomics in humans. |
| popPK | Gervaso_2024 | irrelevant | 0 | 0 | The paper investigates circulating tumor DNA (ctDNA) in rectal cancer patients and contains no data regarding the substance crotamine. |
| PGx | Gervaso_2024 | not_relevant | 0 | 0 | The paper investigates the prognostic value of circulating tumor DNA in rectal cancer treated with capecitabine, not the pharmacogenomics of crotamine. |
| popPK | Glynne-Jones_2014 | irrelevant | 0 | 0 | The paper is a clinical review on the use of pelvic MRI in rectal cancer and does not mention crotamine or report any toxicokinetic parameters. |
| popPK | Godley_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study on adolescent substance use disorder treatment outcomes and contains no data regarding the substance crotamine or its toxicokinetics. |
| popPK | Gonnelli_2024 | irrelevant | 0 | 0 | The paper discusses cisplatin and gold nanoarchitectures for cancer treatment and does not report any toxicokinetic parameters for crotamine. |
| PGx | Gotovdorj_2014 | not_relevant | 0 | 0 | The paper discusses the effect of TCDD on cisplatin resistance and transporter expression; it does not mention crotamine or any pharmacogenomic effects on crotamine's PK/PD. |
| popPK | Guirado_2008 | irrelevant | 0 | 0 | The paper is an epidemiological study on renal transplant outcomes and contains no data, parameters, or mentions of crotamine. |
| popPK | Gunther_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for curcumin, not crotamine, which is the required subject substance. |
| PGx | Hammann_2009 | not_relevant | 0 | 0 | The paper describes machine learning models for classifying CYP interactions of general drugs and does not mention crotamine or specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | Hanks_1999 | irrelevant | 0 | 0 | The paper discusses prostate cancer radiation therapy and does not mention crotamine or any toxicokinetic parameters. |
| popPK | Hartley_2003 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of darbepoetin alpha and erythropoietin, not crotamine. |
| popPK | Helfgott_2016 | irrelevant | 0 | 0 | The paper evaluates a police crisis response program and contains no toxicokinetic data for crotamine. |
| popPK | Hendeles_1985 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of theophylline, not crotamine. |
| popPK | Holoshitz_2010 | irrelevant | 0 | 0 | The paper discusses calreticulin's role in rheumatoid arthritis pathogenesis and does not involve crotamine or toxicokinetic parameters. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical trials for rectal cancer immunotherapy and contains no toxicokinetic parameters or data for crotamine. |
| popPK | Huang_2016 | irrelevant | 0 | 0 | The paper focuses on the immunological function of calnexin and calreticulin in crabs and does not report any toxicokinetic parameters for the substance crotamine. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | The paper is a clinical radiation oncology study focusing on dose-response and survival outcomes for lung cancer, with no mention of crotamine or its toxicokinetics. |
| PGx | Huang_2024_2 | not_relevant | 0 | 0 | The paper discusses UGT1A1 and MMR/MSI statuses but does not report pharmacokinetic or pharmacodynamic parameters for crotamine. |
| popPK | Huttinger_2025 | irrelevant | 0 | 0 | The paper is a clinical oncology study regarding HPV-associated cancer and does not mention crotamine or report any toxicokinetic parameters for it. |
| PGx | Hüttner_2014 | not_relevant | 0 | 0 | The paper investigates plant protein glycosylation and ERAD pathways, completely unrelated to human pharmacogenomics or crotamine. |
| popPK | Iheagwara_2021 | irrelevant | 0 | 0 | The paper is a clinical oncology study on endometrial cancer treatment outcomes and does not contain any toxicokinetic data for crotamine. |
| popPK | Ihnát_2025 | irrelevant | 0 | 0 | The paper focuses on circulating tumor cells in rectal cancer and contains no data regarding crotamine. |
| popPK | Ito_2019 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of amyloid-beta and cell-penetrating peptides, with no mention of crotamine. |
| PGx | Izzat_2009 | not_relevant | 0 | 0 | The paper investigates bile acid transport and the ASBT gene variant in rabbits but does not involve crotamine or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Jacob_2016 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for cardiotoxicity after radiation therapy in breast cancer patients and contains no data or kinetic parameters for crotamine. |
| popPK | Jeong_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of bethanechol in beagle dogs, not crotamine. |
| popPK | Jhawar_2025 | irrelevant | 0 | 0 | The paper reports clearance kinetics of circulating tumor HPV DNA (a biomarker), not the toxicokinetics of crotamine. |
| PGx | João_2025 | not_relevant | 0 | 0 | The paper reports on antimalarial resistance gene variants in Plasmodium parasites in Angola, not human pharmacogenomics for crotamine. |
| PGx | João_2026 | not_relevant | 0 | 0 | The paper discusses drug resistance in Plasmodium falciparum (parasite genetics) and does not mention crotamine or any human pharmacogenomic effect on its pharmacokinetics or pharmacodynamics. |
| popPK | Kales_2004 | irrelevant | 0 | 0 | The paper characterizes the calreticulin protein in rainbow trout and does not report any toxicokinetic parameters for crotamine. |
| popPK | Kang_2015 | irrelevant | 0 | 0 | The paper investigates a nanoparticle delivery system using a CRT peptide (crotamine) as a targeting ligand for anti-cancer therapy, focusing on biodistribution and efficacy rather than the quantitative toxicokinetic parameters (half-life, clearance, etc.) of crotamine itself as a subject substance. |
| popPK | Kataria_2023 | irrelevant | 0 | 0 | The paper studies lactate clearance in septic shock patients and contains no data on crotamine. |
| popPK | Kiesl_2024 | irrelevant | 0 | 0 | The paper is a simulation study on radiotherapy fractionation and secondary malignancy risk; it contains no toxicokinetic parameters for crotamine. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for zolpidem, not crotamine. |
| popPK | Kinoshita_2015 | irrelevant | 0 | 0 | The paper is a pathological study on rectal carcinoma margins and contains no data on crotamine or its toxicokinetics. |
| PGx | Knapp_2022 | not_relevant | 0 | 0 | The paper investigates ctDNA clearance as a biomarker for lung cancer recurrence following chemoradiation and does not discuss crotamine or its pharmacokinetics/pharmacodynamics. |
| popPK | Kotha_2022 | irrelevant | 0 | 0 | The paper is a clinical study on muscle-invasive bladder cancer treatment outcomes and does not contain any toxicokinetic parameters for crotamine. |
| PGx | Kozhevnikova_2022 | not_relevant | 0 | 0 | The paper studies pharmacogenomics of anti-VEGF therapy in AMD, not crotamine. |
| popPK | Kumar_2016 | irrelevant | 0 | 0 | The paper is a study on personality traits in crash-related trauma and contains no data on crotamine or its toxicokinetics. |
| PGx | Kushwah_2020 | not_relevant | 0 | 0 | The paper studies cisplatin-based chemoradiotherapy, not crotamine. |
| popPK | Lakmal_2024 | irrelevant | 0 | 0 | The paper reports surgical outcomes for colorectal cancer patients and contains no toxicokinetic data or mention of crotamine. |
| popPK | Lee_2022 | irrelevant | 0 | 0 | The paper focuses on radiation oncology dose-response relationships in cervical cancer and does not contain any toxicokinetic data for crotamine. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for a PROTAC drug (Alb-TAC/ARV-771), not for the substance crotamine. |
| popPK | Li_2008 | irrelevant | 0 | 0 | The paper investigates the clinical efficacy of a herbal tablet (Colquhounia root) for renal grafts and contains no data or kinetic parameters for crotamine. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a nanotherapeutic delivering paclitaxel and siRNA, not the toxicokinetic parameters of the substance crotamine. |
| popPK | Lin_2022 | irrelevant | 0 | 0 | The paper is a systematic review on resistance training for maximum strength and does not mention crotamine or provide any toxicokinetic parameters. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The paper investigates ctDNA kinetics in rectal cancer patients and does not involve crotamine or its toxicokinetic parameters. |
| PGx | Ling_2000 | not_relevant | 0 | 0 | The paper discusses imaging in radiotherapy and does not mention crotamine or pharmacogenomics. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper studies the toxic effects of clothianidin and prochloraz on earthworms and does not mention crotamine or report any of its kinetic parameters. |
| popPK | Lovato_2021 | irrelevant | 0 | 0 | The paper reports kinetic parameters for cortisol, not crotamine, and crotamine is not mentioned in the text. |
| popPK | Lu_2021 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for osimertinib and contains no mention of crotamine or its toxicokinetic parameters. |
| popPK | Lucido_2014 | irrelevant | 0 | 0 | The paper studies tumor clearance in a mouse model of HPV+ HNSCC and does not involve crotamine or report any toxicokinetic parameters for it. |
| PGx | Lunenburg_2018 | not_relevant | 0 | 0 | The paper concerns the drug crotamine, but the provided text discusses DPYD variants and fluoropyrimidines (5-FU/capecitabine) in chemoradiation therapy. |
| popPK | Luo_2018 | irrelevant | 0 | 0 | The paper is a review of radiotherapy for esophageal carcinoma and contains no data or parameters related to crotamine. |
| popPK | Lv_2019 | irrelevant | 0 | 0 | The paper focuses on EBV DNA kinetics in nasopharyngeal carcinoma patients and does not contain any toxicokinetic data for crotamine. |
| popPK | Lynch_2002 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for calreticulin S-domain, not crotamine. |
| PGx | Mahesh_2012 | not_relevant | 0 | 0 | The paper studies the mechanism of action of cryptotanshinone, not crotamine, and does not report any pharmacogenomic effects. |
| PGx | Maheswari_2021 | not_relevant | 0 | 0 | The paper discusses maize drought tolerance mechanisms and is unrelated to the pharmacogenomics of crotamine. |
| popPK | Martin-Romano_2019 | irrelevant | 0 | 0 | The paper is a population pharmacodynamic modeling study of neoadjuvant therapy for gastric cancer and does not report any toxicokinetic parameters for crotamine. |
| popPK | Mazonakis_2021 | irrelevant | 0 | 0 | The paper reports cancer risk estimates from radiation therapy and does not mention or provide any toxicokinetic parameters for crotamine. |
| popPK | Mei_2020 | irrelevant | 0 | 0 | The paper studies the chemo-immunotherapy of liposomal Mitoxantrone and Indoximod in mice, and contains no data, parameters, or mention of crotamine. |
| popPK | Migliorelli_2024 | irrelevant | 0 | 0 | The paper is a review of circulating HPV DNA clearance in cancer patients and contains no kinetic parameters for crotamine. |
| PGx | Miki_2012 | not_relevant | 0 | 0 | The study focuses on 5-fluorouracil and cisplatin, not crotamine, and reports toxicity prediction rather than specific PK/PD parameter changes. |
| PGx | Miotto_2015 | not_relevant | 0 | 0 | The paper reports pharmacogenomics of Plasmodium falciparum (parasite genes) regarding artemisinin resistance, not human pharmacogenomics for the drug crotamine. |
| popPK | Misra_2021 | irrelevant | 0 | 0 | The paper describes a clinical trial for gastric cancer involving cisplatin and capecitabine, with no mention or data regarding crotamine. |
| PGx | Mockute_2021 | not_relevant | 0 | 0 | The paper investigates gene variants associated with anti-VEGF treatment for AMD, not the drug crotamine. |
| popPK | Mofid_2022 | irrelevant | 0 | 0 | The paper reports oncological outcomes (survival and response rates) for bladder cancer patients treated with gemcitabine and platinum agents (cisplatin/carboplatin), and contains no toxicokinetic parameters or mention of crotamine. |
| popPK | Montagnese_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for golexanolone, not crotamine. |
| popPK | Moriya_2013 | irrelevant | 0 | 0 | The paper discusses surgical techniques and lymph node metastasis in rectal cancer and does not mention crotamine or report any toxicokinetic parameters. |
| popPK | Mu_2025 | irrelevant | 0 | 0 | The paper focuses on the immunological function of mannose-binding lectin (MBL) in Nile tilapia and contains no data regarding crotamine or its toxicokinetics. |
| popPK | Mueller_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for adavosertib, a Wee1 kinase inhibitor, and does not mention crotamine at all. |
| popPK | Muirhead_2015 | irrelevant | 0 | 0 | The paper focuses on a tumor control probability model for anal squamous cell carcinoma and does not report toxicokinetic parameters for crotamine. |
| popPK | Mukherjee_2025 | irrelevant | 0 | 0 | The paper studies esophageal cancer treatment and ctDNA kinetics, with no mention of crotamine or any toxicokinetic parameters for it. |
| popPK | Muren_2004 | irrelevant | 0 | 0 | The paper is a clinical radiotherapy study focusing on dose-volume histograms and normal tissue complication probability models for bladder cancer, with no mention of crotamine or toxicokinetic parameters. |
| popPK | Murray_2013 | irrelevant | 0 | 0 | The paper is a review of radiation-induced cancer risks in prostate cancer patients and contains no mention or data regarding the substance crotamine. |
| PGx | Müller_2020 | not_relevant | 0 | 0 | The paper discusses glucocorticoid receptor polymorphisms and muscle strength in Cushing's syndrome, which is unrelated to the pharmacokinetics or pharmacodynamics of crotamine. |
| popPK | Nakagomi_1984 | irrelevant | 0 | 0 | The paper studies iodinated contrast media and xenon in brain tumors, with no mention of crotamine. |
| popPK | Namorado_2024 | irrelevant | 0 | 0 | The paper reports exposure data for deoxynivalenol (DON), not crotamine. |
| popPK | Ní_2013 | irrelevant | 0 | 0 | The paper studies the protein calreticulin (CRT) in demyelination, not the toxin crotamine. |
| PGx | Okuno_2007 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of 5-FU and cisplatin for esophageal cancer, not crotamine. |
| popPK | Osei_2019 | irrelevant | 0 | 0 | The paper investigates radiation doses in cardiac catheterization patients and contains no data regarding crotamine toxicokinetics. |
| popPK | Osman_2017 | irrelevant | 0 | 0 | The paper investigates the immunological role of calreticulin in macrophage clearance of apoptotic cells and contains no toxicokinetic data for crotamine. |
| popPK | Ownby_1988 | irrelevant | 0 | 0 | The paper characterizes the physicochemical and immunological properties of myotoxins and reports LD50 values, but it does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, distribution volume) for crotamine. |
| PGx | Oyebola_2018 | not_relevant | 0 | 0 | The paper studies drug resistance in Plasmodium falciparum (malaria parasite), not the pharmacokinetics or pharmacodynamics of crotamine. |
| popPK | Palazzini_1990 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for naproxen, not crotamine. |
| popPK | Panahi_2024 | irrelevant | 0 | 0 | The paper is a review on extracellular vesicles and efferocytosis and does not mention crotamine or report any toxicokinetic parameters for it. |
| popPK | Pandya_2009 | irrelevant | 0 | 0 | The paper focuses on hemodynamic outcomes related to propofol and lidocaine administration during defibrillator implantation and does not mention or provide kinetic parameters for crotamine. |
| popPK | Peng_2001 | irrelevant | 0 | 0 | The paper concerns HCV diagnostics and contains no information regarding crotamine. |
| popPK | Peterson_2017 | irrelevant | 0 | 0 | The paper investigates chemotherapy toxicity in humans and contains no mention or kinetic data for crotamine. |
| popPK | Picano_2014 | irrelevant | 0 | 0 | The paper discusses fluoroscopy radiation risks in cardiology and contains no data regarding crotamine. |
| popPK | Ponnaiah_2020 | irrelevant | 0 | 0 | The paper describes an electrochemical sensor for detecting creatinine and does not contain any data regarding the substance crotamine. |
| popPK | Pouw_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a radiolabeled antibody (durvalumab) and contains no data on crotamine. |
| popPK | Pron_2014 | irrelevant | 0 | 0 | The paper reviews OCT monitoring strategies for anti-VEGF drugs and does not contain any data or kinetic parameters for crotamine. |
| popPK | Qiu_2010 | irrelevant | 0 | 0 | The paper concerns radiotherapy planning for breast cancer and contains no data on crotamine or its toxicokinetics. |
| popPK | Racka_2023 | irrelevant | 0 | 0 | The paper is a radiotherapy planning study comparing dose distribution techniques in breast cancer patients and does not contain any data on crotamine toxicokinetics. |
| popPK | Racka_2023_2 | irrelevant | 0 | 0 | The paper is a radiotherapy planning study for breast cancer and does not contain any data or parameters for the substance crotamine. |
| PGx | Raman_2026 | not_relevant | 0 | 0 | The paper analyzes malaria drug resistance markers in parasites, not human pharmacogenomics of crotamine. |
| popPK | Ratosa_2019 | irrelevant | 0 | 0 | The paper is a review of cardiotoxicity from mediastinal radiotherapy and does not mention crotamine or contain any toxicokinetic parameters. |
| PGx | Raturi_2020 | not_relevant | 0 | 0 | The paper investigates cisplatin pharmacogenomics, not crotamine. |
| popPK | Reck_2026 | irrelevant | 0 | 0 | The paper is a clinical trial report on NSCLC treatment outcomes and ctDNA biomarkers, with no mention of crotamine or any toxicokinetic parameters for it. |
| popPK | Renton_2017 | irrelevant | 0 | 0 | The paper is a systematic review on neurofeedback therapy for stroke rehabilitation and contains no data or parameters related to crotamine. |
| popPK | Ringe_2011 | irrelevant | 0 | 0 | The paper studies osteoporosis treatments (alfacalcidol and alendronate) in humans and contains no data on crotamine. |
| PGx | Rizzo_2024 | not_relevant | 0 | 0 | The paper discusses radiotherapy and pembrolizumab for urothelial carcinoma and contains no information regarding crotamine or pharmacogenomic effects on PK/PD parameters. |
| popPK | Rodrigues_2012 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| popPK | Rosolen_2023 | irrelevant | 0 | 0 | The paper studies the association between organophosphate flame retardant metabolites and cognitive development in children, and does not contain any kinetic parameters for crotamine. |
| PGx | Rovira-Vallbona_2023 | not_relevant | 0 | 0 | The paper studies malaria drug resistance and does not mention crotamine. |
| popPK | Ruben_2008 | irrelevant | 0 | 0 | The paper discusses radiotherapy dosimetry and cancer risk and does not contain any data regarding crotamine or its toxicokinetics. |
| popPK | Rusidanmu_2026 | irrelevant | 0 | 0 | The paper is a clinical oncology study on esophageal cancer treatment and does not contain any toxicokinetic data for crotamine. |
| popPK | Sammouri_2023 | irrelevant | 0 | 0 | The paper focuses on Human Papillomavirus (HPV) virome dynamics in cervical cancer and does not mention crotamine or report any kinetic parameters for it. |
| PGx | Sapkota_2019 | not_relevant | 0 | 0 | The paper investigates genetic associations with stroke risk in cancer survivors treated with radiation, not the pharmacogenomics of crotamine. |
| popPK | Schaffler_1989 | irrelevant | 0 | 0 | The paper focuses on quazepam and its metabolites, with no mention of crotamine or its kinetic parameters. |
| popPK | Schneider_2007 | irrelevant | 0 | 0 | The paper focuses on secondary cancer risk modeling after radiotherapy and does not mention or report any toxicokinetic parameters for crotamine. |
| popPK | Scott_1989 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for theophylline, not crotamine. |
| popPK | Segawa_1982 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters (partition coefficients, clearance) for xenon, not crotamine. |
| popPK | Segawa_1983 | irrelevant | 0 | 0 | The paper focuses on cerebral blood flow and xenon CT imaging in humans and contains no data regarding crotamine. |
| popPK | Semrau_2008 | irrelevant | 0 | 0 | The paper is an oncology clinical study regarding non-small cell lung cancer outcomes and does not mention crotamine or report any toxicokinetic parameters. |
| popPK | Shalev_2024 | irrelevant | 0 | 0 | The paper studies the retention of ophthalmic viscosurgical devices (OVDs) like HealonPro and Endocoat, not the toxicokinetics of crotamine. |
| PGx | Shien_2012 | not_relevant | 0 | 0 | The paper investigates cancer stem cell markers in NSCLC patients treated with docetaxel and cisplatin, not crotamine or its pharmacokinetics/pharmacodynamics. |
| popPK | Siu_2026 | irrelevant | 0 | 0 | The paper describes a clinical trial protocol for dostarlimab in head and neck cancer and does not contain any toxicokinetic data for crotamine. |
| popPK | Smyth_2016 | irrelevant | 0 | 0 | The paper is a review of microbeam radiotherapy effects in animals and contains no data or parameters for crotamine. |
| popPK | Smyth_2018 | irrelevant | 0 | 0 | The paper investigates radiation toxicity in mice and does not mention or measure the toxicokinetics of crotamine. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The paper studies the protein calreticulin (CRT) in the context of intervertebral disc degeneration, not the substance crotamine, and contains no toxicokinetic parameters. |
| popPK | Soong_2014 | irrelevant | 0 | 0 | The paper focuses on the immunological mechanism of imiquimod and HPV vaccination, with no data on the toxicokinetics of crotamine. |
| PGx | Spangaro_2018 | not_relevant | 0 | 0 | The paper focuses on the neurobiology of cognitive remediation and EAAT2 polymorphisms in schizophrenia, with no mention of crotamine. |
| popPK | Srivastava_2020 | irrelevant | 0 | 0 | The paper investigates human papillomavirus (HPV) clearance and patient outcomes, not the toxicokinetics of crotamine. |
| PGx | Stevenson_2013 | not_relevant | 0 | 0 | The paper compares the etiology and phenotypes of phenylketonuria and ADHD, and does not discuss crotamine or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Stiles_1991 | irrelevant | 0 | 0 | The paper describes a receptor binding assay and explicitly states that crotamine did not bind to the acetylcholine receptor, providing no toxicokinetic parameters (half-life, clearance, etc.). |
| popPK | Sugioka_2009 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of cyclosporine A, not crotamine. |
| popPK | Suzuki_2024 | irrelevant | 0 | 0 | The paper studies cisplatin pharmacokinetics in humans and does not contain any data regarding crotamine. |
| popPK | Swift_1985 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of loprazolam, not crotamine. |
| popPK | Tacnet-Delorme_2018 | irrelevant | 0 | 0 | The paper investigates the interaction between Proteinase 3 and C1q in apoptotic cell clearance and contains no data regarding crotamine. |
| popPK | Taibjee_2005 | irrelevant | 0 | 0 | The paper reports on laser treatment for psoriasis and contains no mention or data for crotamine. |
| popPK | Tamura_1983 | irrelevant | 0 | 0 | The paper studies cerebral blood flow using xenon enhancement and does not report any toxicokinetic parameters for crotamine. |
| PGx | Tan_2011 | not_relevant | 0 | 0 | The paper discusses the drug crotamine, not crotamine. |
| popPK | Tang_2025 | irrelevant | 0 | 0 | The paper studies the kinetics of tumor-derived HPV DNA (a biomarker) in cancer patients and does not report toxicokinetic parameters for the substance crotamine. |
| PGx | Tang_2026 | not_relevant | 0 | 0 | The paper is a narrative review of biomarkers for neoadjuvant therapy in rectal cancer and does not mention the drug crotamine. |
| popPK | Tarr_2010 | irrelevant | 0 | 0 | The paper investigates the mechanism of calreticulin release during apoptosis and does not contain any data or parameters regarding crotamine. |
| PGx | Tesniere_2010 | not_relevant | 1 | 5 | The paper discusses the immunogenic effects and clinical outcomes of oxaliplatin in relation to TLR4 variants, but crotamine is not mentioned and the PK/PD focus is on oxaliplatin, not crotamine. |
| popPK | Thor_2019 | irrelevant | 0 | 0 | The paper concerns radiation dose-volume tolerances for prostate cancer radiotherapy and contains no information regarding the substance crotamine. |
| popPK | Tomimaru_2020 | irrelevant | 0 | 0 | The paper focuses on the clinical outcomes of gemcitabine chemotherapy in pancreatic cancer patients and does not mention crotamine or report any toxicokinetic parameters for it. |
| popPK | Toomingas_2012 | irrelevant | 0 | 0 | The paper is an epidemiological study of eye symptoms in computer users and contains no toxicokinetic data for crotamine. |
| popPK | Useinova_2021 | irrelevant | 0 | 0 | The paper studies the hemodynamic effects of inosine in rabbits, and crotamine is not mentioned or measured in any capacity. |
| popPK | Van_2012 | irrelevant | 0 | 0 | The paper is a review of radiation oncology accuracy and contains no mention of crotamine or toxicokinetic parameters. |
| popPK | Veazey_2020 | irrelevant | 0 | 0 | The paper investigates the role of protein kinase D in airway barrier integrity and viral infection using a PKD inhibitor, and contains no data regarding the toxicokinetics of crotamine. |
| popPK | Vermeulen_1979 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of androgens (testosterone, androstenedione, dihydrotestosterone) in humans and does not mention crotamine. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The paper studies imidacloprid's effects on earthworms and contains no data, parameters, or mention of crotamine. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper studies the toxicokinetics/pharmacodynamics of Calreticulin, not crotamine. |
| popPK | Wang_2020_2 | irrelevant | 0 | 0 | The paper investigates the molecular dynamics of calreticulin (CRT) interactions with lipid bilayers and is unrelated to the toxicokinetics of crotamine. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper investigates the prognostic value of circulating tumor DNA (ctDNA) in esophageal cancer and contains no data regarding the toxicokinetics of crotamine. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper focuses on ctDNA and bTMB biomarkers for lung cancer survival prediction and does not contain any toxicokinetic data for crotamine. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper investigates the molecular mechanisms of Oroxylin A in liver fibrosis and does not mention crotamine or report any toxicokinetic parameters. |
| popPK | Washington_2025 | irrelevant | 0 | 0 | The paper discusses skeletal muscle injury and inflammation models generally and does not mention crotamine or any toxicokinetic parameters for it. |
| popPK | Wicker-Planquart_2020 | irrelevant | 0 | 0 | The paper investigates the binding kinetics of the scavenger receptor SR-F1 with ligands like C1q and AcLDL, and does not contain any toxicokinetic data for crotamine. |
| popPK | Wong_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for crocetin (CRT), not crotamine; the substances are chemically distinct. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The paper is a clinical study on esophageal cancer treatment outcomes and contains no data, kinetic parameters, or mention of the substance crotamine. |
| popPK | Yao_2026 | irrelevant | 0 | 0 | The paper is a review on capillary refill time in septic shock and contains no data on crotamine. |
| popPK | Ye_2024 | irrelevant | 0 | 0 | The paper studies the mechanism of *Toxoplasma gondii* (a parasite) on breast cancer cells and contains no data regarding the toxicokinetics of crotamine. |
| popPK | Yoon_2018 | irrelevant | 0 | 0 | The paper discusses lung cancer prognosis and staging (N2 status) and does not contain any data regarding the substance crotamine or its toxicokinetics. |
| popPK | Yoon_2026 | irrelevant | 0 | 0 | The paper reports clinical outcomes (CRT, BCVA) for faricimab in diabetic macular edema and does not contain any toxicokinetic parameters for crotamine. |
| popPK | Zavadovsky_2019 | irrelevant | 0 | 0 | The paper concerns the radiopharmaceutical 123I-MIBG and cardiac resynchronization therapy, with no mention of crotamine. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper focuses on radiation therapy planning for breast cancer and contains no information regarding the substance crotamine. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The paper investigates Ro 90-7501, not crotamine, and contains no kinetic data for crotamine. |
| PGx | Zhu_2018 | not_relevant | 1 | 5 | The paper concerns irinotecan and capecitabine, not crotamine. |
| popPK | Ziel_2015 | irrelevant | 0 | 0 | The paper is a clinical oncology study on lung cancer survival outcomes and contains no data regarding the substance crotamine or any toxicokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcrotamine%5D&body=Drug%3A%20crotamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_crotamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
