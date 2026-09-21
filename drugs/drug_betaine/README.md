<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A09A&quot;,&quot;href&quot;:&quot;atc/A09A.md&quot;},{&quot;label&quot;:&quot;betaine&quot;}]"></div>

# betaine

- **generic name:** betaine
- **ATC codes:** `A09AB02`, `A16AA06`
- **DrugBank:** [DB06756](https://go.drugbank.com/drugs/DB06756)
- **groups:** approved, investigational, nutraceutical

## About

**Description.** Betaine is a methyl group donor that functions in the normal metabolic cycle of methionine. It is a naturally occurring choline derivative commonly ingested through diet, with a role in regulating cellular hydration and maintaining cell function.[A252235,A252240] Homocystinuria is an inherited disorder that leads to the accumulation of homocysteine in plasma and urine. Currently, no treatments are available to correct the genetic causes of homocystinuria. However, in order to normalize homocysteine levels, patients can be treated with vitamin B6 ([pyridoxine]), vitamin B12 ([cobalamin]), [folate] and specific diets.[L43115] Betaine reduces plasma homocysteine levels in patients with homocystinuria.[L43105] Although it is present in many food products, the levels found there are insufficient to treat this condition. The FDA and EMA have approved the product Cystadane (betaine anhydrous, oral solution) for the treatment of homocystinuria,[L43105,L43115] and the EMA has approved the use of Amversio (betaine anhydrous, oral powder).[L43110]

**Indication.** Betaine is indicated for the treatment of homocystinuria in pediatric and adult patients to decrease elevated homocysteine blood levels.[L43105] Included within the category of homocystinuria are deficiencies or defects in cystathionine beta-synthase (CBS), 5,10-methylenetetrahydrofolate reductase (MTHFR), and cobalamin cofactor metabolism (cbl).[L43105]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-14 14:34 | 9:13 | 0/0/0 | 1/3/0 | 0/0/0 | 2,086/286 | ollama / qwen3.8:27b-mtp-q8_0 | 57 | 0/0 | 56/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Rehman_2022](drugs/drug_betaine/pd_Rehman_2022_AChE_inhibition.md) | Rehman S et al., The Insight of In Silico and In Vitro e…, PloS one (2022) | [10.1371/journal.pone.0264074](https://doi.org/10.1371/journal.pone.0264074) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Badal_2025](drugs/drug_betaine/pd_Badal_2025_unknown.md) | Badal S et al., Novel Afro-Caribbean Prostate Cancer Mo…, Cancer research communicati… (2025) | [10.1158/2767-9764.CRC-25-0254](https://doi.org/10.1158/2767-9764.CRC-25-0254) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Matthews_2002](drugs/drug_betaine/pd_Matthews_2002_HCY.md) | Matthews A et al., An indirect response model of homocyste…, British journal of clinical… (2002) | [10.1046/j.1365-2125.2002.01620.x](https://doi.org/10.1046/j.1365-2125.2002.01620.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rankovic_2023](drugs/drug_betaine/pd_Rankovic_2023_unknown.md) | Rankovic A et al., Serum metabolomic analysis of the dose-…, PloS one (2023) | [10.1371/journal.pone.0280734](https://doi.org/10.1371/journal.pone.0280734) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=betaine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>“…aine is catabolized mainly in the mitochondria of liver and kidney cells. The transmethyla…”</sub> | prose |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |
| excretion | kidney | <sub>“…low elimination rate and assuming 100% bioavailability, the renal clearance of betaine is…”</sub> | prose |

<sub>Actors without a tissue in the table: BHMT (substrate), PRODH (inhibitor), SLC6A12 (substrate).</sub>

## Coverage

- **PubMed hits:** 357 matched, 121 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Che_2024.pdf` | Che Y et al., Preparation of betaine injection and it…, Basic & clinical pharmacolo… (2024) | popPK | 8 | [10.1111/bcpt.13966](https://doi.org/10.1111/bcpt.13966) | [38009574](https://pubmed.ncbi.nlm.nih.gov/38009574) | The study reports pharmacokinetic parameters for betaine, but the specific numeric values are not present in the provided evidence text. |
| `Cheng_2024.pdf` | Cheng R et al., Time-dependent hormesis transfer from f…, Environmental research (2024) | pd | 5 | [10.1016/j.envres.2024.118418](https://doi.org/10.1016/j.envres.2024.118418) | [38316386](https://www.ncbi.nlm.nih.gov/pubmed/38316386) | metadata signals extractable PD data (EC50) |
| `Neufeld_1995.pdf` | Neufeld DS et al., Basolateral transport of taurine in epi…, The Journal of experimental… (1995) | pd | 5 | [10.1242/jeb.198.2.465](https://doi.org/10.1242/jeb.198.2.465) | [7699315](https://www.ncbi.nlm.nih.gov/pubmed/7699315) | metadata signals extractable PD data (sigmoid) |
| `Zhou_2022.pdf` | Zhou JJ et al., Saline short-term shock and rapid recov…, Chemosphere (2022) | pd | 5 | [10.1016/j.chemosphere.2022.135687](https://doi.org/10.1016/j.chemosphere.2022.135687) | [35842050](https://www.ncbi.nlm.nih.gov/pubmed/35842050) | metadata signals extractable PD data (IC50) |
| `Danaceau_2000.pdf` | Danaceau JP et al., Mixture interactions of glutamate and b…, Journal of comparative phys… (2000) | pd | 4 | [10.1007/s003590050007](https://doi.org/10.1007/s003590050007) | [10659043](https://www.ncbi.nlm.nih.gov/pubmed/10659043) | metadata signals extractable PD data (EC50) |
| `Dawson_1997.pdf` | Dawson KM et al., Organic osmolytes and embryos: substrat…, Biology of reproduction (1997) | pd | 4 | [10.1095/biolreprod56.6.1550](https://doi.org/10.1095/biolreprod56.6.1550) | [9166709](https://www.ncbi.nlm.nih.gov/pubmed/9166709) | metadata signals extractable PD data (EC50) |
| `MacLean_2019.pdf` | MacLean GE et al., Zellweger spectrum disorder patient-der…, Journal of cellular biochem… (2019) | pd | 4 | [10.1002/jcb.27591](https://doi.org/10.1002/jcb.27591) | [30362618](https://www.ncbi.nlm.nih.gov/pubmed/30362618) | metadata signals extractable PD data (EC50) |
| `Bernard_2024.pdf` | Bernard DJ et al., SLC25A48 influences plasma levels of ch…, Molecular genetics and meta… (2024) | pgx | 5 | [10.1016/j.ymgme.2024.108518](https://doi.org/10.1016/j.ymgme.2024.108518) | [39047301](https://www.ncbi.nlm.nih.gov/pubmed/39047301) | metadata signals extractable PGX data (SLC25A48) |
| `Liu_2015.pdf` | Liu EP et al., Whole Blood PCR Amplification with Pfu…, Genetic testing and molecul… (2015) | pgx | 5 | [10.1089/gtmb.2015.0018](https://doi.org/10.1089/gtmb.2015.0018) | [26360116](https://www.ncbi.nlm.nih.gov/pubmed/26360116) | metadata signals extractable PGX data (CYP2C9*3) |

<sub>queue written 2026-09-14T14:32:18.204177+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2023 | not_relevant | 0 | 0 | The paper studies plant physiology (maize) and nickel toxicity, not human pharmacogenomics or betaine pharmacokinetics. |
| PGx | Ahmad_2020 | not_relevant | 0 | 0 | The paper studies plant physiology (Vicia faba) and arsenic toxicity, not human pharmacogenomics or betaine pharmacokinetics. |
| popPK | Al_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of betaine combinations in rats, reporting biomarkers and histology rather than pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Al_2025 | not_relevant | 2 | 0 | The study is a comparative efficacy trial in rats using fixed doses of combinations; it reports mean biomarker levels but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50) for betaine. |
| popPK | BEST_1950 | irrelevant | 0 | 0 | The paper title indicates a study on dose-response curves for potency estimation, which is pharmacodynamic rather than pharmacokinetic, and no PK parameters are present. |
| popPK | Badal_2025 | irrelevant | 0 | 0 | The paper is an in-vitro cytotoxicity study reporting IC50 values for betaine in prostate cancer cell lines, not a pharmacokinetic study with disposition parameters. |
| PGx | Bernard_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of choline (an endogenous metabolite), not betaine, and does not report on drug PK/PD parameters. |
| popPK | Borden_1995 | irrelevant | 0 | 0 | The paper is a molecular biology study on transporter cloning and in-vitro binding kinetics, not a pharmacokinetic study reporting disposition parameters for betaine. |
| PD | Borden_1995 | not_relevant | 3 | 5 | The paper reports an IC50 for betaine as an inhibitor of a transporter in a cell-based assay, which is a pharmacological potency parameter but not a pharmacodynamic exposure-response relationship for betaine as a therapeutic agent. |
| popPK | Bustos_2023 | irrelevant | 0 | 0 | The paper is a computational study on capsaicin analogues targeting TRPV1 channels and does not involve the drug betaine. |
| PD | Bustos_2023 | not_relevant | 0 | 0 | The paper focuses on the computational design and in silico prediction of capsaicin analogues targeting TRPV1, reporting binding energies and pharmacokinetic descriptors, but contains no experimental pharmacodynamic data, exposure-response analysis, or numeric PD parameters for betaine. |
| popPK | Che_2024 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for betaine, but the specific numeric values are not present in the provided evidence text. |
| PD | Che_2024 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic effects (suppression of pressure and hypertrophy) but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters like Emax or EC50. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper investigates biological aging and mentions betaine as a metabolite associated with aging, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The paper title indicates a study on personal care product components and hormesis, with no evidence of betaine pharmacokinetics or quantitative disposition parameters. |
| PD | Cheng_2024 | not_relevant | 0 | 0 | The paper focuses on toxicological hormesis of personal care product mixtures and does not report pharmacodynamic or exposure-response relationships for betaine. |
| popPK | Choudhary_2024 | irrelevant | 0 | 0 | The paper is a study on microalgal bioremediation and biofuel production, where betaine is mentioned only as a stress metabolite, not as a subject drug for pharmacokinetic analysis. |
| PD | Choudhary_2024 | not_relevant | 0 | 0 | The paper is a bioremediation study on microalgae and does not report pharmacodynamic or exposure-response relationships for the drug betaine. |
| popPK | Collinsová_2003 | irrelevant | 0 | 0 | The paper focuses on the identification of enzyme inhibitors for betaine: homocysteine S-methyltransferase (BHMT) and reports IC50 values, not pharmacokinetic parameters for betaine. |
| PD | Collinsová_2003 | not_relevant | 3 | 2 | The paper reports a single IC50 value for a specific inhibitor of BHMT, which is a pharmacological potency metric, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug betaine itself. |
| popPK | Danaceau_2000 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on squid neurons, not a pharmacokinetic study, and contains no PK parameters for betaine. |
| PD | Danaceau_2000 | not_relevant | 0 | 0 | The paper investigates electrophysiological interactions in squid olfactory neurons, which is a basic neuroscience study, not a pharmacokinetic/pharmacodynamic (PK/PD) analysis of betaine as a drug in a clinical or toxicological context. |
| PGx | Darko_2017 | not_relevant | 0 | 0 | The paper investigates plant physiology and salt stress responses in wheat-barley lines, not human pharmacogenomics or drug pharmacokinetics. |
| popPK | Dawson_1997 | irrelevant | 0 | 0 | The paper focuses on the protective effects of organic osmolytes on mouse zygotes and does not report pharmacokinetic parameters for betaine. |
| PD | Dawson_1997 | not_relevant | 0 | 0 | The paper investigates the protective effects of organic osmolytes (including betaine) on mouse zygotes under high osmolarity, but it does not report a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters (e.g., EC50, Emax) for betaine. |
| popPK | Dhar_1994 | irrelevant | 0 | 0 | The paper focuses on the synthesis and evaluation of GABA uptake inhibitors, with betaine mentioned only as a substrate for the BGT-1 transporter, and contains no pharmacokinetic parameters for betaine. |
| PD | Dhar_1994 | not_relevant | 0 | 0 | The paper reports in vitro binding/uptake inhibition data (IC50) for a novel GABA transporter inhibitor, not a pharmacodynamic exposure-response or dose-response relationship for betaine. |
| popPK | Dos_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study on the leishmanicidal effects of mesoionic salts (a subclass of betaines) and contains no pharmacokinetic parameters for the drug betaine. |
| PGx | Emamverdian_2023 | not_relevant | 0 | 0 | The paper studies the effect of sodium nitroprusside on bamboo plants under heavy metal stress, not the pharmacogenomics of betaine in humans. |
| PGx | Feng_2011 | not_relevant | 0 | 0 | The paper investigates genetic variation in the endogenous enzyme BHMT and its effect on homocysteine metabolism, not the pharmacokinetics or pharmacodynamics of the drug betaine. |
| PGx | Filipowicz_2010 | not_relevant | 0 | 0 | The paper reports a clinical trial evaluating the efficacy of betaine as an adjunct therapy for Hepatitis C, but it does not investigate the effect of gene variants on the pharmacokinetics or pharmacodynamics of betaine. |
| popPK | Freeman_2018 | irrelevant | 0 | 0 | The paper focuses on the synthesis and release kinetics of camptothecin prodrugs using a betaine-based polymer scaffold, not the pharmacokinetics of betaine as a drug. |
| popPK | French_2023 | irrelevant | 0 | 0 | The study focuses on proline betaine (stachydrine) as a dietary biomarker for citrus intake, not the pharmacokinetics of betaine (trimethylglycine), and reports no PK parameters. |
| popPK | Gagneul_2007 | irrelevant | 0 | 0 | The paper is a plant physiology study on osmotic adaptation in *Limonium latifolium* and does not report pharmacokinetic parameters for betaine. |
| PGx | Ganu_2013 | not_relevant | 0 | 0 | The paper describes splicing variants and expression of the BHMT gene in pigs, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| popPK | Garcia_2008 | irrelevant | 0 | 0 | The paper studies the environmental fate and toxicity of amphoteric surfactants (alkyl betaines), not the pharmacokinetics of the drug betaine. |
| PD | Garcia_2008 | not_relevant | 0 | 0 | The paper reports environmental toxicity (EC50) of surfactants, not pharmacodynamic exposure-response relationships for a drug. |
| PGx | Gaur_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of betaine on DNA methylation in rheumatoid arthritis synovial fibroblasts, not the effect of genetic variants on betaine's pharmacokinetics or pharmacodynamics. |
| popPK | Gong_2023 | irrelevant | 0 | 0 | The study is a cohort analysis of metabolite levels and fetal growth associations, not a pharmacokinetic study, and reports no disposition parameters for betaine. |
| popPK | Gould_2024 | irrelevant | 0 | 0 | The paper is a metabolomic analysis of wound exudate composition and does not report pharmacokinetic parameters (CL, V, etc.) for betaine. |
| PD | Gould_2024 | not_relevant | 0 | 0 | The paper is a metabolomic profiling study of wound exudates that identifies betaine as a metabolite but does not report any pharmacodynamic, exposure-response, or dose-response analysis or numeric PD parameters for betaine. |
| PGx | Goyal_2023 | not_relevant | 0 | 0 | The paper studies plant physiology and biostimulants in Brassica, not human pharmacogenomics or betaine pharmacokinetics. |
| PGx | Griffin_2007 | not_relevant | 0 | 0 | The paper studies the effect of orotic acid on metabolite levels (including betaine) in rats, not the pharmacokinetics or pharmacodynamics of betaine as a drug, nor does it report a pharmacogenomic effect on betaine's PK/PD. |
| popPK | Grison_2022 | irrelevant | 0 | 0 | The study is a metabolomic analysis of uranium exposure in rats where betaine is identified as a biomarker/metabolite, not a pharmacokinetic study of betaine as a subject drug. |
| PD | Grison_2022 | not_relevant | 0 | 0 | The paper studies the effects of uranium exposure on metabolites (including betaine) but does not report a pharmacodynamic model or numeric dose-response parameters for betaine itself. |
| popPK | Grunewald_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of osmolyte transport in cell lines and does not report pharmacokinetic parameters for betaine. |
| PGx | Guo_2019 | not_relevant | 0 | 0 | The paper studies drought tolerance in zoysiagrass and the gene BADH (betaine aldehyde dehydrogenase), which is unrelated to the pharmacokinetics or pharmacodynamics of the drug betaine. |
| PGx | Gupta_2021 | not_relevant | 0 | 0 | The paper reports a clinical case of a metabolic disorder and mentions betaine as a treatment, but it does not report any pharmacogenomic data or changes in PK/PD parameters of betaine based on genotype. |
| PGx | Hartiala_2016 | not_relevant | 0 | 0 | The paper reports genetic associations with endogenous plasma betaine levels and CAD risk, not the pharmacokinetics or pharmacodynamics of betaine as an administered drug. |
| PGx | He_2024 | not_relevant | 0 | 0 | The paper investigates the association between a gene variant and cancer risk, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The study is an epidemiological cohort analysis of the association between serum betaine levels and blood pressure/hypertension risk, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Juan_2022 | not_relevant | 0 | 0 | The paper is a clinical case report describing the treatment of a metabolic disorder with betaine, but it does not report any pharmacokinetic or pharmacodynamic parameters of betaine or how genetic variants affect them. |
| popPK | Kawano_2018 | irrelevant | 0 | 0 | The study focuses on in vitro enzymatic inhibition (IC50) and molecular modeling of tyrosine betaine analogues, reporting no pharmacokinetic parameters for betaine. |
| PGx | Khan_2025 | not_relevant | 0 | 0 | The paper studies plant physiology and transcriptomics in Rhododendron under heat stress, not human pharmacogenomics or drug PK/PD. |
| PGx | Kitano_2004 | not_relevant | 0 | 0 | The paper is a review on conditionally immortalized syncytiotrophoblast cell lines for studying the blood-placenta barrier and does not report pharmacogenomic effects on betaine PK/PD parameters. |
| popPK | Koistinen_2025 | irrelevant | 0 | 0 | The paper is a metabolomics study analyzing plasma metabolite levels associated with glucose metabolism, not a pharmacokinetic study reporting disposition parameters for betaine. |
| PGx | Li_2019 | not_relevant | 0 | 0 | The study investigates the efficacy of folate therapy, not the pharmacokinetics or pharmacodynamics of betaine. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The study is an in-vitro drug screening using patient-derived organoids and cell lines, reporting IC50 values for cytotoxicity rather than pharmacokinetic disposition parameters (CL, V, etc.) for betaine. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The paper is a plant metabolomics study analyzing betaine content in Peganum harmala, not a pharmacokinetic study of betaine as a drug. |
| PD | Li_2021 | not_relevant | 0 | 0 | The paper is a plant metabolomics study comparing chemical profiles of Peganum harmala from different geographical origins; it does not report pharmacodynamic or exposure-response relationships for betaine. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper analyzes gene expression and metabolites related to egg yolk formation in chickens, not pharmacogenomic effects on the PK/PD of betaine. |
| popPK | Li_2025_2 | irrelevant | 0 | 0 | The study is an epidemiological cohort analysis investigating the association between serum betaine levels and hyperuricemia risk, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is an environmental exposure analysis of quaternary ammonium compounds in dust and urine, not a pharmacokinetic study of betaine, and contains no PK parameters. |
| popPK | Lie_2020 | irrelevant | 0 | 0 | The paper is a pharmacological study of a BGT1 inhibitor (SBV2-114) and does not report pharmacokinetic parameters for betaine. |
| PD | Lie_2020 | not_relevant | 0 | 0 | not captured |
| PGx | Liu_2015 | not_relevant | 0 | 0 | The paper describes a PCR method for genotyping and mentions betaine only as a chemical inhibitor of the polymerase, not as a drug subject to pharmacogenomic analysis. |
| PGx | Louck_2025 | not_relevant | 0 | 0 | The paper reports a GWAS of circulating betaine levels in a general population, not a pharmacokinetic or pharmacodynamic effect of betaine as a drug. |
| popPK | METAYER_1952 | irrelevant | 0 | 0 | The paper focuses on the preparation and pharmacodynamic properties of betaine esters, not pharmacokinetic disposition parameters for betaine itself. |
| PD | METAYER_1952 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric pharmacodynamic parameters, concentration-effect curves, or dose-response data for betaine. |
| popPK | MacLean_2019 | irrelevant | 0 | 0 | The paper concerns peroxisome function in Zellweger spectrum disorder and does not report pharmacokinetic parameters for betaine. |
| PD | MacLean_2019 | not_relevant | 0 | 0 | The paper investigates the effect of flavonoids on betaine metabolism in Zellweger spectrum disorder fibroblasts, not the pharmacodynamic response to betaine itself. |
| PGx | MacLean_2019 | not_relevant | 0 | 0 | The paper discusses flavonoids in Zellweger spectrum disorder, not betaine. |
| PGx | Makonya_2025 | not_relevant | 0 | 0 | The paper studies the effect of glycine betaine as a plant biostimulant on raspberry heat tolerance, not the pharmacokinetics or pharmacodynamics of betaine in humans or animals influenced by genetic variants. |
| popPK | McNamara_2020 | irrelevant | 0 | 0 | The paper is a review of food intake biomarkers where betaine (proline betaine) is used as a diagnostic marker for citrus consumption, not as a subject drug for pharmacokinetic parameter estimation. |
| PD | McNamara_2020 | not_relevant | 1 | 0 | The paper is a review of food intake biomarkers and mentions proline betaine (betaine) only in the context of classifying citrus consumption using ROC curves, without reporting any pharmacodynamic or exposure-response parameters. |
| PGx | Mendes_2021 | not_relevant | 0 | 0 | The paper investigates genetic polymorphisms in one-carbon metabolism and their association with DNA methylation and Down syndrome risk, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| PGx | Mills_2012 | not_relevant | 0 | 0 | The paper investigates genetic associations with omphalocele risk, not the pharmacokinetics or pharmacodynamics of betaine. |
| PGx | Mondal_2022 | not_relevant | 0 | 0 | The paper investigates microbial thermal endurance and mentions glycine-betaine as an environmental solute, but does not report pharmacogenomic effects on the PK or PD of betaine as a drug. |
| popPK | Mufti_2024 | irrelevant | 0 | 0 | The study focuses on antiviral activity and in-vitro assays, and while it mentions pharmacokinetic analysis, no quantitative PK parameters (CL, V, etc.) for betaine are reported in the evidence. |
| PGx | Najafi_2020 | not_relevant | 0 | 0 | The paper investigates the effect of sulfur nanoparticles on lettuce plants, not the pharmacogenomics of betaine in humans. |
| popPK | Nam_2025 | irrelevant | 0 | 0 | The paper is a study on green extraction methods using betaine as a solvent component, not a pharmacokinetic study of betaine. |
| PD | Nam_2025 | not_relevant | 0 | 0 | The paper focuses on the optimization of extraction methods using betaine as a solvent component, not on the pharmacodynamic or exposure-response relationship of betaine as a drug. |
| popPK | Neufeld_1995 | irrelevant | 0 | 0 | The paper focuses on taurine transport in gills and does not involve betaine pharmacokinetics. |
| PD | Neufeld_1995 | not_relevant | 0 | 0 | The paper focuses on the basolateral transport of taurine in gill epithelial cells and does not mention betaine or report any pharmacodynamic or exposure-response relationships. |
| popPK | Noh_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 7-O-Succinyl Macrolactin A (SMA), not betaine. |
| PD | Noh_2017 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetics (PK) and allometric scaling to determine a first-in-man dose; it does not report a pharmacodynamic (PD) model or numeric exposure-response parameters (e.g., Emax, EC50) for betaine or SMA. |
| PGx | Ohnishi_2019 | not_relevant | 0 | 0 | The paper investigates betaine as a therapeutic agent and identifies a genetic variant (CHDH rs35518479) associated with CHDH expression, but it does not report a pharmacogenomic effect on the pharmacokinetic or pharmacodynamic parameters of betaine itself. |
| PGx | Orenbuch_2019 | not_relevant | 0 | 0 | The paper investigates the effect of MTHFR genotype on autism-like behavior and C1 metabolite levels, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| popPK | PATANIA_1961 | irrelevant | 0 | 0 | The provided evidence contains only the title of a paper on pharmacodynamic characteristics, with no quantitative pharmacokinetic parameters or data for betaine. |
| PD | PATANIA_1961 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric pharmacodynamic parameters, concentration-effect curves, or dose-response data for betaine. |
| PGx | Palomares_2022 | not_relevant | 0 | 0 | The paper investigates the association between gene variants and IVF clinical outcomes (pregnancy success/loss), not the pharmacokinetic or pharmacodynamic parameters of betaine. |
| popPK | Park_2017 | irrelevant | 0 | 0 | The study is a pharmacodynamic/physiological assessment of betaine supplementation in ducks, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Park_2017 | not_relevant | 3 | 2 | The study reports qualitative dose-response trends (improvements in body weight and SCFA at 700-1300 ppm) but does not provide numeric PD parameters (e.g., Emax, EC50) or a fitted concentration-effect curve. |
| PGx | Pellanda_2013 | not_relevant | 0 | 0 | The paper investigates BHMT expression in liver cancer and does not report pharmacokinetic or pharmacodynamic parameters of betaine as a drug. |
| popPK | Petty_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological characterization of a betaine transporter in squid neurons, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Popović_2017 | not_relevant | 0 | 0 | The paper studies plant physiology (poplar tissue culture) and water stress responses, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of betaine as a drug. |
| popPK | Rankovic_2023 | irrelevant | 0 | 0 | The study is a metabolomic analysis of serum concentrations in cats, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for betaine. |
| popPK | Rehman_2022 | irrelevant | 0 | 0 | The paper is an in-silico and in-vitro study on acetylcholinesterase inhibition and does not report any pharmacokinetic parameters for betaine. |
| PGx | Ren_2019 | not_relevant | 0 | 0 | The paper investigates the effect of a gene variant on the efficacy of folate therapy, not on the pharmacokinetic or pharmacodynamic parameters of betaine. |
| PGx | Ren_2026 | not_relevant | 0 | 0 | The paper investigates plant-microbe interactions and disease resistance in peanuts, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of betaine as a drug. |
| PGx | Rhodes_1987 | not_relevant | 0 | 0 | The paper describes a mass spectrometry method for detecting betaines in plants (Zea mays) and does not involve human pharmacogenomics or drug PK/PD parameters. |
| PGx | Sadre-Marandi_2018 | not_relevant | 0 | 0 | The paper is a mathematical modeling study of one-carbon metabolism and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| PGx | Saha_2022 | not_relevant | 0 | 0 | The paper studies plant physiology (rice) and the effect of salt stress on glycine betaine accumulation, not human pharmacogenomics or drug pharmacokinetics. |
| popPK | Salehi_2021 | irrelevant | 0 | 0 | The paper focuses on a mass transport model for drug dissolution using betaine chloride as a pH modifier, not on the pharmacokinetic parameters of betaine itself. |
| PGx | Schwahn_2004 | not_relevant | 2 | 5 | The paper studies the effect of a genetic variant (Cbs) on the efficacy of betaine (lowering homocysteine), which is a pharmacodynamic effect, but it does not report pharmacokinetic parameters (like AUC, clearance) of betaine itself, nor does it fit a specific pharmacogenomic effect size model for a PK parameter. |
| popPK | Senesi_2013 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on muscle differentiation and does not report pharmacokinetic parameters for betaine. |
| PGx | Shelke_2019 | not_relevant | 0 | 0 | The paper studies salt tolerance in soybean plants and mentions glycine betaine as a plant osmolyte, not the pharmacokinetics or pharmacodynamics of betaine as a drug in humans. |
| popPK | Sherman_1995 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of betaine's effect on strychnine-induced allodynia, reporting ED50 values rather than pharmacokinetic parameters. |
| PGx | Singh_2011 | not_relevant | 0 | 0 | The paper investigates the association between BHMT gene polymorphisms and coronary artery disease risk, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| PGx | Singh_2021 | not_relevant | 0 | 0 | The paper studies salt stress responses in lentil plants, not human pharmacogenomics or betaine pharmacokinetics. |
| popPK | Singh_2021_2 | irrelevant | 0 | 0 | The paper describes the isolation and in-vitro bioactivity of a novel dipeptide (serine-glycine-betaine), not the pharmacokinetics of the drug betaine. |
| PGx | Sita_2021 | not_relevant | 0 | 0 | The paper studies plant physiology and heat stress in lentils, not human pharmacogenomics or the pharmacokinetics of betaine. |
| PGx | Soliman_2019 | not_relevant | 0 | 0 | The paper studies plant physiology (eggplant response to nickel stress and nitric oxide) and does not involve human pharmacogenomics or the drug betaine. |
| PGx | Stepien_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes and safety of betaine treatment in cobalamin-related remethylation disorders, but does not report pharmacokinetic or pharmacodynamic parameters or pharmacogenomic effects. |
| popPK | Stratton_2022 | irrelevant | 0 | 0 | The study is a sports performance trial examining the ergogenic effects of pre-workout supplements, not a pharmacokinetic study, and reports no disposition parameters for betaine. |
| popPK | Sumito_2020 | irrelevant | 0 | 0 | The paper focuses on the design of cell-penetration peptide surfactants where "betaine" refers to a specific peptide sequence motif, not the pharmacokinetic study of the drug betaine. |
| PGx | Sun_2022 | not_relevant | 0 | 0 | The paper investigates the effect of castration on beef marbling and liver metabolites (including betaine) in cattle, not the pharmacokinetics or pharmacodynamics of betaine as a drug in humans. |
| popPK | Swantara_2022 | irrelevant | 0 | 0 | The paper is a study on the anticancer activity of plant extracts, and betaine is only mentioned as one of the identified compounds, with no pharmacokinetic data reported. |
| PD | Swantara_2022 | not_relevant | 0 | 0 | The paper reports the anticancer activity of a plant extract (Annona squamosa) and identifies betaine as one of several compounds present, but it does not perform any pharmacodynamic or exposure-response analysis specifically for betaine. |
| PGx | Takeda_2023 | not_relevant | 0 | 0 | The paper studies pharmacogenomics of pemetrexed, not betaine. |
| popPK | Tan_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on dietary intake and mortality, not a pharmacokinetic study, and contains no PK parameters for betaine. |
| PD | Tan_2025 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study analyzing the association between dietary intake and mortality risk using Cox regression, not a pharmacodynamic or exposure-response study with numeric PD parameters. |
| popPK | Teslić_2022 | irrelevant | 0 | 0 | The paper is a food chemistry study on extracting ellagic acid using betaine as a solvent component, not a pharmacokinetic study of betaine. |
| PD | Teslić_2022 | not_relevant | 0 | 0 | The paper focuses on the extraction and hydrolysis of ellagic acid from raspberry seeds using betaine-based solvents, reporting no pharmacokinetic or pharmacodynamic data for betaine itself. |
| popPK | Trentin_2025 | irrelevant | 0 | 0 | The paper is a study on the bioactivity and chemical profiling of a microalga, where betaine lipids are identified as metabolites, but it contains no pharmacokinetic data for the drug betaine. |
| PD | Trentin_2025 | not_relevant | 0 | 0 | The paper reports bioactivity screening (IC50/EC50) of crude algal extracts, not a pharmacodynamic or exposure-response relationship for the specific drug betaine. |
| PGx | Tzeng_1999 | not_relevant | 0 | 0 | The paper uses betaine as a reagent in a PCR assay for genetic screening, not as a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| PGx | Verkerke_2024 | not_relevant | 0 | 0 | The paper investigates the role of the SLC25A48 transporter in mitochondrial choline metabolism and reports that genetic loss (knockout) or SNPs affect betaine levels, but it does not report a pharmacokinetic or pharmacodynamic effect of betaine as a drug. |
| PGx | Vieira_2020 | not_relevant | 0 | 0 | The paper reports a clinical case of MTHFR deficiency treated with betaine, but it does not analyze how the genotype affects the pharmacokinetic or pharmacodynamic parameters of betaine itself. |
| PGx | Ward_2021 | not_relevant | 0 | 0 | The paper investigates the association between MTHFR genotypes and insulin resistance (HOMA-IR) in schizophrenia patients, not the pharmacokinetics or pharmacodynamics of betaine. |
| PGx | Wasim_2022 | not_relevant | 0 | 0 | The paper reports genetic mutations causing a metabolic disease (homocystinuria) and mentions betaine as a treatment, but it does not analyze how specific gene variants affect the pharmacokinetics or pharmacodynamics of betaine itself. |
| PGx | Xian_2024 | not_relevant | 0 | 0 | The paper investigates the causal relationship between serum betaine levels and active tuberculosis using Mendelian Randomization, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| popPK | Xing_2025 | irrelevant | 0 | 0 | The paper is a case-control epidemiological study measuring plasma metabolite levels (including betaine) as biomarkers for asthenozoospermia, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Xing_2025 | not_relevant | 2 | 1 | The study is an epidemiological case-control analysis reporting odds ratios for metabolite levels (including betaine) and asthenozoospermia, not a pharmacodynamic exposure-response or dose-response analysis with PD parameters. |
| popPK | YOUNG_1956 | irrelevant | 0 | 0 | The paper is a dose-response study comparing lipotropic agents, not a pharmacokinetic study reporting quantitative disposition parameters for betaine. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The paper investigates the role of lncRNA H19 in alcohol-associated liver disease and methionine metabolism, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| PGx | Yeroshkina_2023 | not_relevant | 2 | 0 | The paper is a theoretical review discussing the clinical potential of betaine and BHMT gene variants, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes or fitted effect sizes. |
| popPK | Yin_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and metabolomics of Cistanche deserticola extract for constipation, where betaine is merely a quantified component of the extract, not the subject of a pharmacokinetic analysis. |
| PD | Yin_2024 | not_relevant | 0 | 0 | The paper reports qualitative pharmacodynamic effects and mechanistic pathways (metabolomics/western blot) for a plant extract but does not provide numeric concentration-effect or dose-response parameters for betaine. |
| PGx | Zampieri_2012 | not_relevant | 0 | 0 | The paper investigates the association between gene polymorphisms and Down syndrome risk, not the pharmacokinetics or pharmacodynamics of betaine. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper is a metabolomics and anti-inflammatory activity study where betaine is identified as a constituent compound, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper title indicates a study on anammox performance in saline shock, which is unrelated to betaine pharmacokinetics. |
| PD | Zhou_2022 | not_relevant | 0 | 0 | The paper discusses anammox performance under saline shock and does not involve the drug betaine or any pharmacodynamic modeling. |
| PGx | Zhu_2024 | not_relevant | 0 | 0 | The paper is a review on the association between one-carbon metabolism nutrients (including betaine) and diabetes risk, not a pharmacogenomic study of betaine's PK/PD parameters. |
| popPK | da_2017 | irrelevant | 0 | 0 | The paper is a lipidomic study of seaweed lipids (including betaine lipids like DGTS/MGTS) and their bioactivity, not a pharmacokinetic study of the drug betaine. |
| popPK | da_2021 | irrelevant | 0 | 0 | The paper is a lipidomics study of seaweed polar lipids (including betaine lipids like DGTS/MGTS) and does not report pharmacokinetic parameters for the drug betaine. |
| PD | da_2021 | not_relevant | 0 | 0 | The paper characterizes the lipid composition of seaweed and reports IC50 values for crude extracts, but does not report a pharmacodynamic or exposure-response relationship for the specific drug betaine. |
| popPK | Łątka_2024 | irrelevant | 0 | 0 | The paper is an in-vitro study on BGT1 transporter inhibitors and does not report pharmacokinetic parameters for betaine. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_betaine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
