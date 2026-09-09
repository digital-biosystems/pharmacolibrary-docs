# folic acid

- **generic name:** folic acid
- **ATC codes:** `B03AD01`, `B03AD02`, `B03AD03`, `B03AD04`, `B03AD05`, `B03AE01`, `B03AE02`, `B03BB01`, `V04CX02`
- **DrugBank:** [DB00158](https://go.drugbank.com/drugs/DB00158)
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

**Description.** Folic acid, also known as folate or Vitamin B9, is a member of the B vitamin family and an essential cofactor for enzymes involved in DNA and RNA synthesis. More specifically, folic acid is required by the body for the synthesis of purines, pyrimidines, and methionine before incorporation into DNA or protein. Folic acid is particularly important during phases of rapid cell division, such as infancy, pregnancy, and erythropoiesis, and plays a protective factor in the development of cancer. As humans are unable to synthesize folic acid endogenously, diet and supplementation is necessary to prevent deficiencies. For example, folic acid is present in green vegetables, beans, avocado, and some fruits.[L5744]

In order to function within the body, folic acid must first be reduced by the enzyme dihydrofolate reductase (DHFR) into the cofactors dihydrofolate (DHF) and tetrahydrofolate (THF). This important pathway, which is required for de novo synthesis of nucleic acids and amino acids, is disrupted by anti-metabolite therapies such as [DB00563] as they function as DHFR inhibitors to prevent DNA synthesis in rapidly dividing cells, and therefore prevent the formation of DHF and THF. When used in high doses such as for cancer therapy, or in low doses such as for Rheumatoid Arthritis or psoriasis, [DB00563] impedes the body's ability to create folic acid. This results in a deficiency of coenzymes and a resultant buildup of toxic substances that are responsible for numerous adverse side effects. As a result, supplementation with 1-5mg of folic acid is recommended to prevent deficiency and a number of side effects associated with MTX therapy including mouth ulcers and gastrointestinal irritation. [DB00650] (also known as folinic acid) supplementation is typically used for high-dose MTX regimens for the treatment of cancer. Levoleucovorin and leucovorin are analogs of tetrahydrofolate (THF) and are able to bypass DHFR reduction to act as a cellular replacement for the co-fact

**Indication.** Folic acid is indicated for the treatment of folic acid deficiency, megaloblastic anemia, and in anemias of nutritional origins, pregnancy, infancy, or childhood.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 13:20 | 12:18 | 0/1/0 | 2/0/0 | 0/0/0 | 131,056/3,597 | ollama / qwen3.8:27b-mtp-q8_0 | 25 | 1/0 | 16/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Crider_2019](drugs/drug_folic_acid/FolicAcid_Crider2019_reference.md) | Crider KS et al., Systematic Review and Bayesian Meta-ana…, Nutrients (2019) | [10.3390/nu11010071](https://doi.org/10.3390/nu11010071) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Focks_2010](drugs/drug_folic_acid/pd_Focks_2010_unknown.md) | Focks A et al., Mechanistic link between uptake of sulf…, Environmental toxicology an… (2010) | [10.1002/etc.172](https://doi.org/10.1002/etc.172) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhao_1997](drugs/drug_folic_acid/pd_Zhao_1997_5_formyltetrahydrofolate_EC50.md) | Zhao R et al., Impact of overexpression of the reduced…, The Journal of biological c… (1997) | [10.1074/jbc.272.34.21207](https://doi.org/10.1074/jbc.272.34.21207) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhao_1997](drugs/drug_folic_acid/pd_Zhao_1997_MTX_IC50.md) | Zhao R et al., Impact of overexpression of the reduced…, The Journal of biological c… (1997) | [10.1074/jbc.272.34.21207](https://doi.org/10.1074/jbc.272.34.21207) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhao_1997](drugs/drug_folic_acid/pd_Zhao_1997_folic_acid_EC50.md) | Zhao R et al., Impact of overexpression of the reduced…, The Journal of biological c… (1997) | [10.1074/jbc.272.34.21207](https://doi.org/10.1074/jbc.272.34.21207) |

## Coverage

- **PubMed hits:** 63 matched, 51 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Crider_2019.pdf` | Crider KS et al., Systematic Review and Bayesian Meta-ana…, Nutrients (2019) | popPK | 7 | [10.3390/nu11010071](https://doi.org/10.3390/nu11010071) | [30609688](https://pubmed.ncbi.nlm.nih.gov/30609688) | The evidence contains numeric steady-state ratios and time-to-steady-state estimates from a population PK model in the provided table, though traditional parameters like clearance or volume are not explicitly reported. |

<sub>queue written 2026-09-08T19:35:28.810632+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andriani_2023 | irrelevant | 0 | 0 | The paper is an epidemiological survey on malnutrition and does not report any pharmacokinetic parameters or modeling for folic acid. |
| popPK | Bailey_2023 | irrelevant | 0 | 0 | The paper describes a clinical intervention trial for diabetes preconception care and contains no pharmacokinetic data or parameters for folic acid. |
| popPK | Blencowe_2018 | irrelevant | 0 | 0 | The paper is an epidemiological modeling study on neural tube defect prevalence and folic acid fortification, containing no pharmacokinetic parameters or data for folic acid. |
| popPK | Bliznashka_2022 | irrelevant | 0 | 0 | The paper is a nutritional intervention trial assessing child growth outcomes and contains no pharmacokinetic data or modeling for folic acid. |
| popPK | Bwijo_2003 | irrelevant | 0 | 0 | The paper investigates genetic mutations in Plasmodium falciparum and in-vitro drug susceptibility, not the pharmacokinetics of folic acid. |
| PD | Bwijo_2003 | not_relevant | 3 | 2 | The paper reports in vitro EC50 values for pyrimethamine and SP, but these are pharmacological potency metrics for parasite isolates, not pharmacodynamic parameters (Emax, EC50, slope) describing the drug's effect on a host or population PK/PD model. |
| popPK | Cho_1997 | irrelevant | 0 | 0 | The paper describes an in-vitro immunological study of antibody-folate conjugates and does not report pharmacokinetic parameters for folic acid. |
| popPK | Cliffer_2025 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of iron-folic acid supplementation on anemia prevalence, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Duan_2025 | irrelevant | 0 | 0 | The study is a clinical trial on cognitive function where folic acid is a minor supplement ingredient, not the subject of pharmacokinetic analysis. |
| popPK | Eguchi_2004 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on antimicrobial agents in algae, not a pharmacokinetic study of folic acid. |
| PD | Eguchi_2004 | not_relevant | 0 | 0 | The paper reports EC50 values for antimicrobial agents (sulfa drugs, etc.) but only qualitatively mentions that folic acid reduces growth inhibition, providing no numeric PD parameters or dose-response data for folic acid itself. |
| popPK | Eriksen_2020 | irrelevant | 0 | 0 | Folic acid is only part of the comparator FeFol supplement and no folic_acid PK parameters are reported. |
| popPK | Findlay_1987 | irrelevant | 0 | 0 | The paper is a mechanistic enzymology study on protein dissociation and does not report pharmacokinetic parameters for folic acid. |
| PD | Findlay_1987 | not_relevant | 0 | 0 | The paper describes the structural dissociation of an enzyme in urea and the protective effect of folic acid on enzyme activity, but it does not report a pharmacodynamic exposure-response or dose-response relationship for folic acid as a drug with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Focks_2010 | irrelevant | 0 | 0 | The paper is a mechanistic toxicology study on sulfonamides inhibiting bacterial growth, not a pharmacokinetic study of folic acid. |
| popPK | Garcia_2008 | irrelevant | 0 | 0 | The study is a longitudinal epidemiological analysis of biomarker levels (folate, homocysteine) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Ghosh_2023 | irrelevant | 0 | 0 | The study evaluates hemoglobin diagnostic cut-offs and clinical biomarker responses to iron-folic acid supplementation, containing no pharmacokinetic parameters for folic acid. |
| popPK | Gosdin_2020 | irrelevant | 0 | 0 | The paper is a public health study on adherence to iron and folic acid supplementation, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Gosdin_2021 | irrelevant | 0 | 0 | The paper is a public health intervention study measuring clinical outcomes and contains no pharmacokinetic parameters or modeling for folic acid. |
| popPK | Gudimella_2021 | irrelevant | 0 | 0 | The paper describes the synthesis of carbon dots for imaging and antioxidant activity, with folic acid used only as a surface modifier for labeling, not as a subject of pharmacokinetic study. |
| PD | Gudimella_2021 | not_relevant | 0 | 0 | The paper reports the synthesis of carbon dots and their free radical scavenging activity (EC50), but does not report a pharmacodynamic or exposure-response relationship for folic acid itself. |
| popPK | Heusschen_2022 | irrelevant | 0 | 0 | The study measures clinical serum concentrations and deficiency rates for folic acid as a nutritional biomarker, not pharmacokinetic disposition parameters. |
| popPK | Hooijberg_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular folate homeostasis and MRP transporters, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Kedir_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing mental health outcomes of iron-folic acid supplementation and does not report any pharmacokinetic parameters for folic acid. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the drug MHY5396, using folic acid only as an agent to induce a kidney fibrosis model, not as the subject of PK analysis. |
| PD | Kim_2025 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters (EC50) for the novel compound MHY5396, not for folic acid; folic acid is only mentioned as a model inducer for renal fibrosis. |
| popPK | Klinov_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition and binding constants, not a pharmacokinetic study reporting disposition parameters for folic acid. |
| popPK | Latz_2006 | irrelevant | 0 | 0 | Folic acid is not the subject drug and was not administered in this study; all reported PK/PD parameters are for pemetrexed. |
| PD | Latz_2006 | not_relevant | 0 | 0 | The paper models the PD of pemetrexed (neutropenia), not folic acid; folic acid is only mentioned as a mitigation strategy for toxicity, with no PD parameters reported for it. |
| popPK | Latz_2006_2 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for pemetrexed, not folic acid, which is only mentioned as a co-administered supplement. |
| popPK | Latz_2009 | irrelevant | 0 | 0 | Folic acid is only a co-administered supplement to mitigate pemetrexed toxicity, and no pharmacokinetic parameters for folic acid are reported. |
| popPK | Lee_2010 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic analysis of drug interactions (trimetrexate and AG2034) where folic acid is only a medium component, not the subject of PK analysis. |
| popPK | Leil_2007 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of genetic variation in the FPGS gene and enzyme kinetics, not a pharmacokinetic study reporting disposition parameters for folic acid. |
| popPK | Li_2009 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the conjugate EC145, not for folic acid itself. |
| popPK | Linciano_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on thiadiazole inhibitors of Trypanosoma brucei pteridine reductase, and folic acid is only mentioned as a substrate or reversal agent, with no pharmacokinetic parameters reported. |
| PD | Linciano_2017 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (Ki) and parasite growth inhibition (EC50) for thiadiazole compounds, but does not report a pharmacodynamic or exposure-response relationship for folic acid itself. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of norcantharidin (NCTD) and its metabolite, using folic acid only as a targeting ligand for liposomes, not as the subject drug. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study focuses on heavy metal exposure and neural tube defects, mentioning folic acid only as a maternal supplement confounder with no pharmacokinetic data reported. |
| popPK | Ma_2016 | irrelevant | 0 | 0 | The study is a clinical trial assessing cognitive outcomes and biomarker levels, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Ma_2019 | irrelevant | 0 | 0 | The study is a clinical trial assessing cognitive and inflammatory outcomes, not a pharmacokinetic study, and reports no disposition parameters for folic acid. |
| popPK | Matias_2018 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of nutrient supplements on anemia and iron deficiency, not a pharmacokinetic study, and folic acid is only a component of the intervention. |
| popPK | Mould_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pralatrexate, with folic acid mentioned only as a pretreatment agent to mitigate toxicity, not as the subject drug for PK parameter estimation. |
| popPK | ODell_1989 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of receptor pharmacology in isolated cells, not a pharmacokinetic study, and folic acid is used only as a receptor antagonist. |
| PD | ODell_1989 | not_relevant | 0 | 0 | The paper is a voltage-clamp electrophysiology study of ion channels, not a pharmacokinetic/pharmacodynamic study of folic acid as a therapeutic drug; folic acid is mentioned only as a receptor antagonist in a functional assay. |
| popPK | Paemanee_2018 | irrelevant | 0 | 0 | The paper is an in-vitro virology study screening folic acid for anti-dengue activity, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Paemanee_2018 | not_relevant | 2 | 1 | The paper reports that folic acid had a slight proviral effect at specific concentrations (0.1 and 0.5 mM) but does not provide a dose-response curve, Emax, EC50, or other numeric PD parameters for folic acid. |
| popPK | Petrosova_2025 | irrelevant | 2 | 0 | The study focuses on the biodistribution and imaging potential of a radiolabeled folic acid conjugate in an animal model, and while it mentions a compartment model, no quantitative PK parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Rai_2008 | irrelevant | 0 | 0 | The paper describes the synthesis and antiviral activity of curcumin bioconjugates, with folic acid serving only as a structural component rather than the subject of a pharmacokinetic study. |
| popPK | Sato_2007 | irrelevant | 0 | 0 | The paper only discusses folic acid in the context of public health education and awareness surveys, with no pharmacokinetic data or parameters reported. |
| popPK | Schlatter_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of methotrexate, not folic acid, which is only mentioned as the drug class antagonist. |
| popPK | Singh_2010 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro antibacterial/antiviral activity of curcumin-folic acid conjugates, containing no pharmacokinetic data for folic acid. |
| PD | Singh_2010 | not_relevant | 0 | 0 | The paper reports MIC and EC50 values for curcumin bioconjugates (which contain folic acid as a ligand) in vitro, but does not report a pharmacodynamic model or exposure-response relationship for folic acid itself. |
| popPK | Thapar_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of antimalarial drugs, and folic acid is only mentioned as a component of the culture medium, not as the subject drug for PK analysis. |
| PD | Thapar_2003 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic interactions of atovaquone, proguanil, and cycloguanil; folic acid is only mentioned as a component of the culture medium (LPLF) to test the mechanism of action, and no exposure-response or dose-response relationship for folic acid itself is reported. |
| popPK | Verwei_2005 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of intestinal transport using Caco-2 cells, reporting permeability coefficients rather than in-vivo pharmacokinetic disposition parameters (CL, V, ka) for folic acid. |
| popPK | Yamashita_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of doxorubicin (DOX) in micelles, where folic acid is only a targeting ligand, not the subject drug. |
| popPK | Yan_2022 | irrelevant | 0 | 0 | This is an epidemiological case-control study reporting odds ratios for congenital heart disease risk, not a pharmacokinetic study, so no disposition parameters for folic acid are provided. |
| popPK | Zhao_1997 | irrelevant | 0 | 0 | The study focuses on the cellular transport kinetics of methotrexate (MTX) in murine leukemia cells, not the pharmacokinetic disposition parameters (CL, V, etc.) of folic acid. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_folic_acid`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
