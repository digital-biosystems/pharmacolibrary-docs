# hydroxyethylstarch

- **generic name:** hydroxyethylstarch
- **ATC codes:** `B05AA07`
- **DrugBank:** [DB09106](https://go.drugbank.com/drugs/DB09106)
- **groups:** approved, investigational

## About

**Description.** Hydroxyethyl starch (HES/HAES) is a nonionic starch derivative. Hydroxyethyl starches (HES) are synthetic colloids commonly used for fluid resuscitation to replace intravascular volume.
HES is a general term and can be sub-classified according to average molecular weight, molar substitution, concentration, C2/C6 ratio and Maximum Daily Dose.

**Indication.** An intravenous solution of hydroxyethyl starch is used to prevent shock following severe blood loss caused by trauma, surgery, or other issues.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-07 14:35 | 25:17 | 4/0/0 | 0/2/0 | 0/0/0 | 609,501/35,624 | ollama / qwen3.8:27b-mtp-q8_0 | 50 | 8/42 | 49/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Asskali_1999](drugs/drug_hydroxyethylstarch/Hydroxyethylstarch_Asskali1999_reference.md) | Asskali F et al., [The accumulation of different substitu…, Anasthesiologie, Intensivme… (1999) | [10.1055/s-1999-208](https://doi.org/10.1055/s-1999-208) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Haefliger_2025](drugs/drug_hydroxyethylstarch/Hydroxyethylstarch_Haefliger2025_reference.md) | Haefliger D et al., Individualization of piperacillin dosag…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf007](https://doi.org/10.1093/jac/dkaf007) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Singh_2022](drugs/drug_hydroxyethylstarch/Hydroxyethylstarch_Singh2022_reference.md) | Singh D et al., A Phase 1 study of the long-acting anti…, British journal of clinical… (2022) | [10.1111/bcp.15002](https://doi.org/10.1111/bcp.15002) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Yamakage_2012](drugs/drug_hydroxyethylstarch/Hydroxyethylstarch_Yamakage2012_reference.md) | Yamakage M et al., Pharmacokinetics and safety of 6 % hydr…, Journal of anesthesia (2012) | [10.1007/s00540-012-1430-6](https://doi.org/10.1007/s00540-012-1430-6) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Singh_2022](drugs/drug_hydroxyethylstarch/pd_Singh_2022_blood_eosinophil_count.md) | Singh D et al., A Phase 1 study of the long-acting anti…, British journal of clinical… (2022) | [10.1111/bcp.15002](https://doi.org/10.1111/bcp.15002) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zecchin_2026](drugs/drug_hydroxyethylstarch/pd_Zecchin_2026_blood_eosinophil_count.md) | Zecchin C et al., Straight to Phase III: Model-Informed A…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70183](https://doi.org/10.1002/cpt.70183) |

## Coverage

- **PubMed hits:** 236 matched, 113 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Asskali_1999.pdf` | Asskali F et al., [The accumulation of different substitu…, Anasthesiologie, Intensivme… (1999) | popPK | 10 | [10.1055/s-1999-208](https://doi.org/10.1055/s-1999-208) | [10542895](https://pubmed.ncbi.nlm.nih.gov/10542895) | The study reports quantitative pharmacokinetic parameters (half-lives, clearance) for hydroxyethylstarch in healthy volunteers, with specific numeric values provided in the text. |
| `Yamakage_2012.pdf` | Yamakage M et al., Pharmacokinetics and safety of 6 % hydr…, Journal of anesthesia (2012) | popPK | 10 | [10.1007/s00540-012-1430-6](https://doi.org/10.1007/s00540-012-1430-6) | [22729229](https://pubmed.ncbi.nlm.nih.gov/22729229) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-lives) for hydroxyethylstarch derived from a two-compartment model, with all numeric values explicitly present in the text. |
| `Lehmann_2007.pdf` | Lehmann G et al., Bioequivalence comparison between hydro…, Drugs in R&D (2007) | popPK | 9 | [10.2165/00126839-200708040-00003](https://doi.org/10.2165/00126839-200708040-00003) | [17596109](https://pubmed.ncbi.nlm.nih.gov/17596109) | The study reports quantitative non-compartmental pharmacokinetic parameters (AUC, CL, t1/2) for hydroxyethylstarch formulations in humans, with specific numeric values provided in the text. |
| `Wilkes_2002.pdf` | Wilkes NJ et al., Hydroxyethyl starch in balanced electro…, Anesthesia and analgesia (2002) | popPK | 9 | [10.1097/00000539-200203000-00011](https://doi.org/10.1097/00000539-200203000-00011) | [11867371](https://pubmed.ncbi.nlm.nih.gov/11867371) | The study is a PK study of HES reporting a half-life, but specific quantitative parameters like clearance and volume are not explicitly listed in the provided text. |
| `Couto_2022.pdf` | Couto M et al., Comparison of two pharmacokinetic-pharm…, British journal of anaesthe… (2022) | pd | 5 | [10.1016/j.bja.2021.12.010](https://doi.org/10.1016/j.bja.2021.12.010) | [35120713](https://www.ncbi.nlm.nih.gov/pubmed/35120713) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Hu_2025.pdf` | Hu J et al., Pregnane X receptor attenuates gold nan…, Aquatic toxicology (Amsterd… (2025) | pd | 4 | [10.1016/j.aquatox.2025.107399](https://doi.org/10.1016/j.aquatox.2025.107399) | [40339275](https://www.ncbi.nlm.nih.gov/pubmed/40339275) | metadata signals extractable PD data (EC50) |
| `Saeed_1987.pdf` | Saeed M et al., Inhibition of vasoactive agents by perf…, Life sciences (1987) | pd | 4 | [10.1016/0024-3205(87)90286-4](https://doi.org/10.1016/0024-3205(87)90286-4) | [2437426](https://www.ncbi.nlm.nih.gov/pubmed/2437426) | metadata signals extractable PD data (EC50) |
| `Zhang_2024.pdf` | Zhang Z et al., Hexestrol, an estrogen receptor agonist…, Journal of virology (2024) | pd | 4 | [10.1128/jvi.00714-24](https://doi.org/10.1128/jvi.00714-24) | [38809021](https://www.ncbi.nlm.nih.gov/pubmed/38809021) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-07T14:10:41.082012+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Adler_2008 | not_relevant | 0 | 0 | The paper focuses on establishing a developmental toxicity test method using 5-fluorouracil and retinoic acid, and does not mention hydroxyethylstarch or report any PD parameters for it. |
| popPK | Alrahahleh_2024 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study of vancomycin in neonates and does not report any parameters for hydroxyethylstarch. |
| PD | Alrahahleh_2024 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (PopPK) model selection for vancomycin in neonates and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Auguet_2020 | not_relevant | 0 | 0 | The paper investigates Notch signaling in NAFLD and does not mention hydroxyethylstarch or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Balakina_2016 | not_relevant | 0 | 0 | The paper studies the effect of flavonoids on gene expression in rats intoxicated with carbon tetrachloride and does not involve hydroxyethylstarch or pharmacogenomics. |
| PGx | Barbet_2012 | not_relevant | 0 | 0 | The paper analyzes ABC gene expression in stem cells and does not mention hydroxyethylstarch or any pharmacokinetic/pharmacodynamic parameters. |
| PD | Boldt_2005 | not_relevant | 1 | 0 | The text is a general review of plasma substitutes and HES properties without reporting any specific numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Boyd_2019 | irrelevant | 0 | 0 | The study focuses on biomarkers of kidney injury and does not report pharmacokinetic parameters for hydroxyethylstarch. |
| popPK | Boyd_2021 | irrelevant | 0 | 0 | The study evaluates urine biomarkers of acute kidney injury in dogs and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for hydroxyethylstarch. |
| popPK | Boyd_2022 | irrelevant | 0 | 0 | The study focuses on coagulation and inflammation biomarkers in dogs, not pharmacokinetic parameters (CL, V, etc.) for hydroxyethylstarch. |
| popPK | Brescia_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on doxorubicin cardiotoxicity in stem cell cultures and does not involve hydroxyethylstarch pharmacokinetics. |
| PD | Brescia_2026 | not_relevant | 0 | 0 | The paper investigates doxorubicin cardiotoxicity in cell cultures and does not contain any data, analysis, or mention of hydroxyethylstarch. |
| PGx | Burkert_2008 | not_relevant | 0 | 0 | The paper investigates side population phenotypes in gastrointestinal cancer cells and is unrelated to hydroxyethylstarch pharmacokinetics or pharmacodynamics. |
| PGx | Chiappara_2022 | not_relevant | 0 | 0 | The paper investigates the effect of cigarette smoke on the Notch-1 pathway in lung cancer and does not mention hydroxyethylstarch or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Choi_2021 | irrelevant | 2 | 0 | The paper is a theoretical review explaining volume kinetics principles and model structures, and while it references a study involving HES, it does not report specific quantitative PK parameter values (CL, V, etc.) for hydroxyethylstarch in the provided text. |
| PD | Choi_2021 | not_relevant | 0 | 0 | The paper describes volume kinetics (PK of fluids) using compartmental models but does not report a pharmacodynamic (exposure-response) model or numeric PD parameters (e.g., Emax, EC50) for hydroxyethylstarch. |
| popPK | Courlet_2023 | irrelevant | 0 | 0 | The paper models tumor growth dynamics in melanoma patients receiving immunotherapy and does not study hydroxyethylstarch pharmacokinetics. |
| PD | Courlet_2023 | not_relevant | 0 | 0 | The paper models tumor dynamics for immunotherapy (ICIs) and does not contain any data or analysis for hydroxyethylstarch. |
| popPK | Couto_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rocuronium bromide, not hydroxyethylstarch. |
| PD | Couto_2022 | not_relevant | 0 | 0 | The paper focuses on rocuronium bromide, not hydroxyethylstarch. |
| popPK | Dings_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cafedrine/theodrenaline and ephedrine, not hydroxyethylstarch. |
| PD | Dings_2026 | not_relevant | 0 | 0 | The paper analyzes the pharmacodynamics of cafedrine/theodrenaline and ephedrine, not hydroxyethylstarch. |
| PD | Ellan_2019 | not_relevant | 0 | 0 | The paper studies mushroom extracts against dengue virus, not hydroxyethylstarch. |
| popPK | Fu_2008 | irrelevant | 0 | 0 | The paper describes a gene expression system in embryonic stem cells and does not involve hydroxyethylstarch or pharmacokinetic parameters. |
| PD | Fu_2008 | not_relevant | 0 | 0 | The paper describes a gene expression system in stem cells and reports dose-response parameters for doxycycline, not a pharmacodynamic relationship for hydroxyethylstarch. |
| popPK | Garcia-Mauriño_2025 | irrelevant | 0 | 0 | The paper is a microbiome study investigating associations between gut bacteria and respiratory infections, containing no pharmacokinetic data for hydroxyethylstarch. |
| popPK | Gay_2025 | irrelevant | 0 | 0 | The paper is a neuroimaging study on glymphatic function in football players and does not involve hydroxyethylstarch or pharmacokinetic parameters. |
| popPK | Girisa_2021 | irrelevant | 0 | 0 | The paper is a review on curcuminoids for oral diseases and does not involve hydroxyethylstarch or pharmacokinetic parameters. |
| PD | Girisa_2021 | not_relevant | 0 | 0 | The paper is a review on curcuminoids for oral diseases and does not mention hydroxyethylstarch or report any pharmacodynamic parameters. |
| PD | Gleich_2021 | not_relevant | 0 | 0 | The paper concerns mepolizumab, not hydroxyethylstarch, and reports clinical outcomes (flare rates, eosinophil counts) without a formal PK/PD model or numeric exposure-response parameters. |
| popPK | Goutelle_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of busulfan, not hydroxyethylstarch. |
| PD | Goutelle_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of busulfan and does not contain any pharmacodynamic (PD) or exposure-response analysis for hydroxyethylstarch or any other drug. |
| popPK | Haefliger_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperacillin, not hydroxyethylstarch. |
| PD | Haefliger_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) and dosing optimization of piperacillin, not hydroxyethylstarch, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Heitzmann_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of daptomycin, not hydroxyethylstarch. |
| PD | Heitzmann_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of daptomycin and compares two TDM tools; it does not report a pharmacodynamic (PD) model or exposure-response relationship for hydroxyethylstarch. |
| popPK | Holcomb_2023 | irrelevant | 0 | 0 | The paper is a biomechanical study on head acceleration in youth football and contains no pharmacokinetic data for hydroxyethylstarch. |
| popPK | Holcomb_2025 | irrelevant | 0 | 0 | The paper is a biomechanical study on head kinematics in youth football and does not involve hydroxyethylstarch or pharmacokinetics. |
| PD | Hu_2021 | not_relevant | 0 | 0 | The paper focuses on the formulation of albendazole (ABZ) and reports bioavailability and efficacy improvements, but it does not contain any data, analysis, or parameters for hydroxyethylstarch. |
| popPK | Hu_2025 | irrelevant | 0 | 0 | The paper investigates the role of the pregnane X receptor in zebrafish hatching after gold nanoparticle exposure and does not involve hydroxyethylstarch or pharmacokinetic parameters. |
| PD | Hu_2025 | not_relevant | 0 | 0 | The paper studies gold nanoparticles in zebrafish, not hydroxyethylstarch, and does not report a pharmacodynamic model for the target drug. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on long-term opioid use in arthritis patients and does not contain any pharmacokinetic data for hydroxyethylstarch. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper investigates factors associated with long-term opioid use in arthritis patients and does not contain any pharmacodynamic or exposure-response analysis for hydroxyethylstarch. |
| PGx | Jalnapurkar_2019 | not_relevant | 0 | 0 | The paper discusses mesenchymal stromal cells and hematopoietic stem cell engraftment, with no mention of hydroxyethylstarch or pharmacogenomics. |
| popPK | Jørgensen_2024 | irrelevant | 0 | 0 | The paper is a clinical trial regarding physical therapy for patellofemoral pain and does not involve hydroxyethylstarch or pharmacokinetics. |
| PD | Kabała-Dzik_2018 | not_relevant | 0 | 0 | The paper investigates the cytotoxic effects of flavonoids on breast cancer cells and does not mention hydroxyethylstarch or report any pharmacodynamic parameters for it. |
| PGx | Kato_2021 | not_relevant | 0 | 0 | The paper studies the chemopreventive effects of luteolin on pancreatic cancer and the DPYD/STAT3 pathway, not the pharmacokinetics or pharmacodynamics of hydroxyethylstarch. |
| PGx | Katoh_2006 | not_relevant | 0 | 0 | The paper focuses on the HHIP gene family and signaling pathways in vascular remodeling and cancer, with no mention of hydroxyethylstarch or its pharmacokinetic/pharmacodynamic parameters. |
| PD | Kim_2022 | not_relevant | 0 | 0 | The paper investigates the antioxidant and anti-inflammatory properties of Sargassum macrocarpum extracts, not hydroxyethylstarch. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of recombinant ADAMTS-1 on muscle regeneration and does not involve hydroxyethylstarch. |
| PGx | Koltsova_2011 | not_relevant | 0 | 0 | The paper describes the characterization of human embryonic stem cell lines and does not involve hydroxyethylstarch or pharmacogenomic effects on its PK/PD. |
| popPK | Kuchimanchi_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 2-hydroxyethyl succinimide (HES), a metabolite of diroximel fumarate, not the drug hydroxyethylstarch. |
| PD | Kuchimanchi_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for diroximel fumarate metabolites, but contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Kuijk_2022 | irrelevant | 0 | 0 | The paper is a genomics study on chemotherapy-induced mutations in stem cells and does not contain any pharmacokinetic data for hydroxyethylstarch. |
| PD | Kuijk_2022 | not_relevant | 0 | 0 | The paper investigates the mutagenic effects of chemotherapy (Oxaliplatin/5-FU) and radiotherapy on stem cells, not hydroxyethylstarch, and does not report pharmacodynamic exposure-response parameters. |
| popPK | Lanoiselée_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cefuroxime, not hydroxyethylstarch. |
| PD | Lanoiselée_2020 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of cefuroxime, not hydroxyethylstarch, and does not report any pharmacodynamic or exposure-response parameters. |
| PD | Li_2024 | not_relevant | 0 | 0 | The paper studies albendazole, not hydroxyethylstarch, and does not report specific numeric PD parameters for the target drug. |
| PD | Lian_2017 | not_relevant | 0 | 0 | The paper investigates the mechanism of multidrug resistance reversal by AP-2α in gastric cancer cells and does not report any pharmacodynamic or exposure-response relationship for hydroxyethylstarch. |
| PD | Luo_2024 | not_relevant | 2 | 1 | The paper reports a qualitative pharmacodynamic effect (uric acid reduction) and PK data for luteolin, but does not provide an exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50) for hydroxyethyl starch or the formulation. |
| popPK | László_2017 | irrelevant | 0 | 0 | The study is a hemodynamic comparison of fluid resuscitation volumes and does not report pharmacokinetic parameters (CL, V, ka) for hydroxyethylstarch. |
| popPK | Lê_2023 | irrelevant | 0 | 0 | The paper describes a dynamic nuclear polarization (dDNP) probe for hyperpolarized MRI and does not involve hydroxyethylstarch or pharmacokinetic parameters. |
| PD | Lê_2023 | not_relevant | 0 | 0 | The paper describes a physics/engineering technique for Dynamic Nuclear Polarization (DNP) and NMR instrumentation, containing no pharmacodynamic or exposure-response data for hydroxyethylstarch. |
| popPK | M_2019 | irrelevant | 0 | 0 | The paper is a survey on pharmacology academician capacity building and contains no pharmacokinetic data for hydroxyethylstarch. |
| PD | M_2019 | not_relevant | 0 | 0 | The paper is a survey on the capacity of pharmacology academicians to provide drug information services and contains no pharmacokinetic or pharmacodynamic data for hydroxyethylstarch. |
| PD | Mahboobi_2009 | not_relevant | 0 | 0 | The paper reports in vitro biochemical and cellular IC50 values for novel imatinib hybrids, not a pharmacodynamic or exposure-response relationship for hydroxyethylstarch. |
| PD | Mahmoud_2025 | not_relevant | 0 | 0 | The paper investigates the nephroprotective effects of hesperidin-loaded bilosomes against methotrexate-induced toxicity and does not contain any data, analysis, or mention of hydroxyethylstarch. |
| PGx | Mao_2013 | not_relevant | 0 | 0 | The paper investigates paclitaxel resistance in breast cancer, not hydroxyethylstarch pharmacokinetics or pharmacodynamics. |
| popPK | Marks_2022 | irrelevant | 0 | 0 | The paper studies head acceleration in youth football and does not involve hydroxyethylstarch or pharmacokinetics. |
| PGx | Matsuda_2001 | not_relevant | 0 | 0 | The paper is a general perspective on inborn errors of metabolism and postgenome medicine, with no mention of hydroxyethylstarch or specific pharmacokinetic/pharmacodynamic parameters. |
| popPK | Mink_2025 | irrelevant | 0 | 0 | The paper is a biomechanics study on head acceleration in auto racing and contains no pharmacokinetic data for hydroxyethylstarch. |
| popPK | Morath_2021 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of renal safety outcomes (AKI, mortality) and does not report pharmacokinetic parameters such as clearance, volume, or half-life for hydroxyethylstarch. |
| popPK | Muir_2026 | irrelevant | 2 | 0 | The paper is a review of fluid dynamics and hemodynamics that mentions hydroxyethylstarch only in the context of safety warnings and general fluid classification, without reporting specific quantitative pharmacokinetic parameters for the drug. |
| PD | Muir_2026 | not_relevant | 0 | 0 | The paper is a review of fluid physiology and volume kinetics models, containing no specific pharmacodynamic or exposure-response analysis for hydroxyethylstarch. |
| PD | Nabil-Adam_2020 | not_relevant | 0 | 0 | The paper studies a marine sponge extract (Hyrtios aff. erectus), not the drug hydroxyethylstarch, and reports in vitro bioassay data rather than pharmacodynamic modeling. |
| PD | Nazdar_2024 | not_relevant | 0 | 0 | The paper investigates the protective effects of herbal extracts against aflatoxin B1 toxicity in cell lines and does not involve hydroxyethylstarch or any pharmacodynamic modeling of a drug. |
| popPK | Okutomi_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bupivacaine, with hydroxyethylstarch serving only as a co-administered fluid, so no PK parameters for hydroxyethylstarch are reported. |
| popPK | Owen_2025 | irrelevant | 0 | 0 | The paper is a sports medicine study on head acceleration events in rugby and does not involve hydroxyethylstarch or pharmacokinetics. |
| popPK | Parmley_2025 | irrelevant | 0 | 0 | The paper is a sports science study on head acceleration events in rugby league and contains no pharmacokinetic data for hydroxyethylstarch. |
| PD | Patra_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of Beauvericin, not hydroxyethylstarch. |
| popPK | Pelland_2026 | irrelevant | 0 | 0 | The paper investigates the relationship between head impacts and gut microbiome composition in football players and does not involve hydroxyethylstarch or pharmacokinetic parameters. |
| popPK | Pereira_2019 | irrelevant | 0 | 0 | The paper describes in vitro activity of thiazole derivatives against Schistosoma mansoni and does not involve hydroxyethylstarch or pharmacokinetic parameters. |
| PD | Pereira_2019 | not_relevant | 0 | 0 | The paper investigates aryl-thiazole derivatives against Schistosoma mansoni, not hydroxyethylstarch. |
| popPK | Perron_2018 | irrelevant | 0 | 0 | The paper describes a small-molecule screening study for cancer treatment and does not involve hydroxyethylstarch or pharmacokinetic parameters. |
| PD | Perron_2018 | not_relevant | 0 | 0 | The paper discusses small-molecule inhibitors (JI051/JI130) of Hes1/PHB2, not hydroxyethylstarch, and does not report a pharmacodynamic model for the target drug. |
| popPK | Ravix_2025 | irrelevant | 0 | 0 | The paper is a numerical verification of a Bayesian PK software tool using virtual populations and does not report pharmacokinetic parameters for hydroxyethylstarch. |
| PD | Ravix_2025 | not_relevant | 0 | 0 | The paper is a numerical verification of a Bayesian PK prediction software (Tucuxi) using virtual populations and does not report any pharmacodynamic or exposure-response data for hydroxyethylstarch. |
| popPK | Ravix_2026 | irrelevant | 0 | 0 | The study focuses on vancomycin pharmacokinetics in neonates and does not involve hydroxyethylstarch. |
| PD | Ravix_2026 | not_relevant | 0 | 0 | The paper focuses on vancomycin PK and TDM strategies in neonates and does not contain any data or analysis regarding hydroxyethylstarch. |
| popPK | Reppel_2004 | irrelevant | 0 | 0 | The paper studies cardiomyocyte electrophysiology and is unrelated to hydroxyethylstarch pharmacokinetics. |
| PD | Reppel_2004 | not_relevant | 0 | 0 | The paper reports pharmacological effects of isoproterenol and carbachol on stem cell-derived cardiomyocytes, not hydroxyethylstarch. |
| popPK | Reynolds_2015 | irrelevant | 1 | 0 | The study focuses on hemodynamic responses (MAP) in a shock model rather than the pharmacokinetic disposition parameters (CL, V, t1/2) of hydroxyethylstarch itself. |
| popPK | Roe_2024 | irrelevant | 0 | 0 | The paper is a sports science study on head accelerations in rugby players and contains no pharmacokinetic data for hydroxyethylstarch. |
| popPK | Saeed_1987 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasoactive agent inhibition, not a pharmacokinetic study, and hydroxyethylstarch is used only as a comparator agent. |
| popPK | Santak_1997 | irrelevant | 0 | 0 | The study focuses on nitric oxide production kinetics using a nitrate tracer, and hydroxyethylstarch is only mentioned as a fluid used for hemodynamic support, not as the subject of pharmacokinetic analysis. |
| popPK | Scalabrin_2026 | irrelevant | 0 | 0 | The paper is an ophthalmology study on diabetic macular edema treated with faricimab and contains no pharmacokinetic data for hydroxyethylstarch. |
| popPK | Schramm_2007 | relevant | 9 | 3 | The paper is a pharmacokinetic study of hydroxyethylstarch in pigs using a two-compartment model, but the specific numeric values for clearance, volume, and half-life are contained in Table 3, which is not included in the provided evidence. |
| PGx | Schwartz_2014 | not_relevant | 0 | 0 | The paper is a review on pluripotent stem cell-derived hepatocyte-like cells and does not report pharmacogenomic effects on hydroxyethylstarch PK/PD. |
| PD | Schäfer_2010 | not_relevant | 0 | 0 | The paper studies the dose-response of TNF-alpha, not hydroxyethylstarch; HAES is only used as a resuscitation fluid without any PD analysis or numeric parameters reported for it. |
| PGx | Sha_2017 | not_relevant | 0 | 0 | The paper studies the induction of stem-like characteristics in lung cancer cells using small molecule compounds and does not mention hydroxyethylstarch or pharmacogenomics. |
| popPK | Sillé_2026 | irrelevant | 0 | 0 | The paper is a review on AI-driven untargeted metabolomics and mass spectrometry quantification methods, containing no pharmacokinetic data or parameters for hydroxyethylstarch. |
| PD | Sillé_2026 | not_relevant | 0 | 0 | The paper is a review on AI-driven metabolomics and exposure quantification methods; it does not report any pharmacodynamic or exposure-response data for hydroxyethylstarch. |
| popPK | Singh_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the monoclonal antibody GSK3511294, not hydroxyethylstarch. |
| PGx | Singh_2025 | not_relevant | 0 | 0 | The paper focuses on identifying haemochromatosis patients using electronic health record codes and does not report pharmacokinetic or pharmacodynamic effects of hydroxyethylstarch. |
| popPK | Smith_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for mepolizumab, not hydroxyethylstarch. |
| PD | Sondeen_2016 | not_relevant | 0 | 0 | The paper studies tranexamic acid (TXA), not hydroxyethylstarch, and reports no exposure-response or dose-response relationship for hydroxyethylstarch. |
| popPK | Song_2022 | irrelevant | 0 | 0 | The paper focuses on the enzymatic synthesis and biological activity of hydroxyequol derivatives, not the pharmacokinetics of hydroxyethylstarch. |
| PD | Song_2022 | not_relevant | 0 | 0 | The paper studies the synthesis and biological activity of isoflavonoid derivatives (hydroxyequols), not the pharmacodynamics of hydroxyethylstarch. |
| PD | Sousa_2021 | not_relevant | 0 | 0 | The paper reports IC50 values for a magnetic nanocomposite (HES MNCs) loaded with a bioactive, not a pharmacodynamic or exposure-response relationship for hydroxyethyl starch itself. |
| popPK | Stevens_2023 | irrelevant | 0 | 0 | The paper is a systematic review on nanoparticle-mediated delivery of flavonoids and does not involve hydroxyethylstarch or report any pharmacokinetic parameters for it. |
| PD | Stevens_2023 | not_relevant | 0 | 0 | The paper is a systematic review on flavonoid nanoparticles and has no content regarding hydroxyethylstarch or any pharmacodynamic modeling. |
| PD | Tacchini_2015 | not_relevant | 0 | 0 | The paper analyzes phytochemicals from plant extracts (Boerhaavia diffusa and Curculigo orchioides) and does not involve hydroxyethylstarch or any pharmacodynamic modeling of that drug. |
| popPK | Thoma_2023 | irrelevant | 0 | 0 | The paper is a protocol for a study on rifampicin pharmacokinetics and CDSS implementation, and does not report any data for hydroxyethylstarch. |
| PD | Thoma_2023 | not_relevant | 0 | 0 | The paper is a protocol for a population pharmacokinetic (PK) study of rifampicin and does not report any pharmacodynamic (PD) or exposure-response data for hydroxyethylstarch. |
| popPK | Thoma_2024 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of rifampicin for tuberculosis treatment and does not study hydroxyethylstarch. |
| PD | Thoma_2024 | not_relevant | 0 | 0 | The paper is a protocol for a population pharmacokinetic (popPK) model of rifampicin and does not involve hydroxyethylstarch or report any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Ulbrich_1989 | irrelevant | 0 | 0 | The paper is a nutritional study on nitrogen utilization in lambs and does not involve hydroxyethylstarch or pharmacokinetic parameters. |
| PD | Vecchia_2022 | not_relevant | 0 | 0 | The paper studies the gastroprotective effects of a plant extract (Sonchus oleraceus), not hydroxyethylstarch, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| PD | Verstovsek_2006 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for AMN107 and imatinib, not hydroxyethylstarch. |
| popPK | Wali_2026 | irrelevant | 0 | 0 | The paper is a review of natural kinase inhibitors in lung cancer and does not mention hydroxyethylstarch or report any pharmacokinetic parameters for it. |
| PD | Wali_2026 | not_relevant | 0 | 0 | The paper is a review of natural kinase inhibitors in lung cancer and does not mention hydroxyethylstarch or report any pharmacodynamic parameters. |
| popPK | Wall_2026 | irrelevant | 0 | 0 | The paper is an ophthalmology study on diabetic retinal disease and contains no pharmacokinetic data for hydroxyethylstarch. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper investigates the neuroprotective effects of Astragalin in Parkinson's disease models and does not mention hydroxyethylstarch or report any pharmacodynamic/exposure-response parameters. |
| popPK | Wilkes_2002 | relevant | 9 | 2 | The study is a PK study of HES reporting a half-life, but specific quantitative parameters like clearance and volume are not explicitly listed in the provided text. |
| PGx | Xu_2025 | not_relevant | 0 | 0 | The study describes the pharmacokinetics of hydroxyethyl starch in rats but does not investigate any gene variants or pharmacogenomic effects. |
| PD | Yang_2018 | not_relevant | 0 | 0 | The paper describes an analytical method (lateral flow strip) for detecting hexoestrol residues in fish, not a pharmacodynamic study of hydroxyethylstarch or any drug's biological effect. |
| popPK | Yiew_2020_2 | irrelevant | 0 | 0 | The paper is a review of volume kinetics for IV fluids and does not report specific quantitative pharmacokinetic parameters for hydroxyethylstarch. |
| PD | Yiew_2020_2 | not_relevant | 1 | 0 | The paper is a review of volume kinetics (PK) for fluids and does not report specific pharmacodynamic (exposure-response) parameters or numeric effect curves for hydroxyethylstarch. |
| popPK | Zecchin_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of depemokimab and mepolizumab (anti-IL-5 biologics), not hydroxyethylstarch. |
| PGx | Zhang_2023 | not_relevant | 0 | 0 | The paper discusses PCSK9 monoclonal antibodies and their relationship with hyperglycemic adverse events, not hydroxyethylstarch. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper reports antiviral activity (IC50) for hexestrol against Lassa virus, not pharmacodynamic parameters for hydroxyethylstarch. |
| PGx | Zhao_2026 | not_relevant | 0 | 0 | The paper describes a novel antiviral agent for SARS-CoV-2 and does not mention hydroxyethylstarch or any pharmacogenomic effects. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | The paper is a collection of abstracts regarding hematopoietic stem cell transplantation outcomes and does not contain any pharmacokinetic data for hydroxyethylstarch. |
| PD | unknown_2022 | not_relevant | 0 | 0 | The text consists of abstract titles from a conference meeting and does not contain any pharmacodynamic or exposure-response data for hydroxyethylstarch. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_hydroxyethylstarch`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
