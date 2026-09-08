# dextran

- **generic name:** dextran
- **ATC codes:** `B05AA05`
- **DrugBank:** [DB09255](https://go.drugbank.com/drugs/DB09255)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Dextran is a polysaccharide that differs from others in that its glucose units are joined together 1:6 glucoside links. The main chain of glucose has short branches at frequent intervals which are probably joined by 1:3 and 1:4 glucoside links. The chains can be composed of about 200,000 glucose units.[A32011] Many bacteria, like _Leuconostoc_, can synthesize dextran from sucrose, and this activity is used commercially to obtain dextran.[T121]

Dextran 40 is a sterile, nonpyrogenic preparation of low molecular weight dextran (average mol. wt. 40,000) in 5% Dextrose Injection or 0.9% Sodium Chloride Injection. It is administered by intravenous infusion.

Dextran 75 is a complex branched glucan with an average molecular weight 75000 Daltons. It is produced from certain bacteria that with α-1,6 glycosidic linkages between glucose molecules and α-1,3 linkages between branches. When labelled with technetium Tc99m, dextran 75 is intravenously administered as an imaging agent to detect and diagnose conditions in the vascular compartment such as pericardial effusion or ventricular aneurysm.

**Indication.** Dextran is used as the restoration of blood mass during surgical interventions if there is hypovolemia due to trauma or dehydration. It is as well used after the presence of hemorrhage in cases of blood loss to a level inferior to 15% of the blood mass, if compatibility test cannot be completed or when blood lots need to be tested for pathogen detection. Dextran is also used for the prevention of profound postoperative venous thrombosis.[L1455]

Dextran as well presents ophthalmic applications as solutions or ointments for the temporary relief of xerophthalmia or minor ocular irritations.[L1461]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-07 06:59 | 18:29 | 0/1/0 | 0/0/0 | 0/0/0 | 130,846/5,123 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 1/17 | 19/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Schwarz_1981](drugs/drug_dextran/Dextran_Schwarz1981_reference.md) | Schwarz JA et al., Pharmacokinetics of low molecular (mono…, International journal of cl… (1981) | — |

## Coverage

- **PubMed hits:** 240 matched, 60 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schwarz_1981.pdf` | Schwarz JA et al., Pharmacokinetics of low molecular (mono…, International journal of cl… (1981) | popPK | 10 | not captured | [6171533](https://pubmed.ncbi.nlm.nih.gov/6171533) | The text explicitly reports quantitative pharmacokinetic parameters for dextran 1, including renal clearance (137 ml/min), total clearance (187 ml/min), and half-life (1.9 h). |
| `Gerstin_1992.pdf` | Gerstin EH et al., Heparin, dextran and trypan blue allost…, The Journal of pharmacology… (1992) | pd | 4 | not captured | [1281880](https://www.ncbi.nlm.nih.gov/pubmed/1281880) | metadata signals extractable PD data (EC50) |
| `Wehl_2026.pdf` | Wehl I et al., Characterization of human intestinal or…, Drug metabolism and disposi… (2026) | pgx | 7 | [10.1016/j.dmd.2026.100308](https://doi.org/10.1016/j.dmd.2026.100308) | [42190309](https://www.ncbi.nlm.nih.gov/pubmed/42190309) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yang_2024.pdf` | Yang Y et al., Circadian time-dependent effects of exp…, British journal of pharmaco… (2024) | pgx | 7 | [10.1111/bph.16440](https://doi.org/10.1111/bph.16440) | [38862812](https://www.ncbi.nlm.nih.gov/pubmed/38862812) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-07T13:07:52.946630+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brambillasca_2024 | irrelevant | 0 | 0 | The paper uses FITC-dextran as a diagnostic probe to quantify macropinocytosis in cancer cells, not as a subject drug for pharmacokinetic analysis. |
| PD | Brambillasca_2024 | not_relevant | 0 | 0 | The paper uses dextran as a fluorescent tracer to quantify macropinocytosis, not as a drug, and reports no exposure-response or dose-response relationship for dextran. |
| popPK | Brooks_2021 | irrelevant | 2 | 0 | Dextran is used as a diagnostic tracer to measure vascular permeability (Ktrans) rather than being the subject drug for which population pharmacokinetic parameters (CL, V, etc.) are reported. |
| PGx | Carpentier_2024 | not_relevant | 0 | 0 | The paper discusses dextran as a component of a hydrogel matrix for organoid culture, not as a drug subject to pharmacogenomic analysis. |
| PGx | Chen_2011 | not_relevant | 0 | 0 | The paper investigates the effect of a methyl-deficient diet on DSS-induced colitis severity and inflammatory markers, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper describes the construction of artificial protocells using dextran derivatives as structural polyelectrolytes, not a pharmacokinetic study of dextran as a drug. |
| popPK | Eljack_2022 | irrelevant | 0 | 0 | The paper is a review on nanoparticle design for chemoresistance reversal and does not report pharmacokinetic parameters for dextran. |
| PD | Eljack_2022 | not_relevant | 0 | 0 | The paper is a review on nanoparticle design for chemoresistance reversal and does not report specific pharmacodynamic or exposure-response data for dextran. |
| popPK | Engel_2014 | irrelevant | 0 | 0 | The paper investigates the mechanism of Factor XII autoactivation using dextran sulfate as a surface activator, not the pharmacokinetics of dextran as a drug. |
| PGx | Foerster_2022 | not_relevant | 0 | 0 | The paper is a review on autophagy and intestinal barrier function; it does not report pharmacogenomic effects on the PK/PD of dextran. |
| popPK | Futaki_2023 | irrelevant | 2 | 0 | The study uses fluorescein isothiocyanate dextran (FD-4) as a diagnostic tracer/probe to evaluate microneedle delivery, and no quantitative PK parameter values are present in the provided evidence. |
| PGx | Gadaleta_2020 | not_relevant | 0 | 0 | The paper investigates the therapeutic effects of FGF19 on intestinal inflammation and microbiota, using dextran sodium sulfate (DSS) only as a chemical inducer of colitis, not as a drug subject to pharmacogenomic analysis. |
| PGx | Gao_2017 | not_relevant | 0 | 0 | The paper investigates the effect of gut microbiota on CYP3A and P-gp expression in a colitis model, not the effect of a host gene variant on the pharmacokinetics or pharmacodynamics of dextran. |
| PGx | Gao_2018 | not_relevant | 0 | 0 | The paper investigates the regulation of UGT1A1 expression by gut microbiota in a colitis model, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Gerstin_1992 | irrelevant | 0 | 0 | The study investigates the allosteric modulation of muscarinic receptors by dextran in vitro, not the pharmacokinetic disposition parameters of dextran. |
| PGx | Gu_2018 | not_relevant | 0 | 0 | The paper studies the therapeutic effect of a GLP-2 analog in a DSS-induced colitis model, not the pharmacokinetics or pharmacodynamics of dextran itself, nor any pharmacogenomic interaction. |
| PGx | Hirano_2026 | not_relevant | 0 | 0 | The paper studies the role of osteopontin in dextran sulfate sodium (DSS)-induced colitis, where DSS is a chemical irritant used to model disease, not a therapeutic drug subject to pharmacokinetic or pharmacodynamic analysis. |
| PGx | Hu_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of omeprazole in a disease model (ulcerative colitis induced by dextran sulfate sodium), not the pharmacogenomics of dextran itself. |
| popPK | Jin_2016 | irrelevant | 0 | 0 | The study focuses on the anti-inflammatory mechanisms of paeonol, and dextran sulfate sodium is used only as a disease model inducer, not as the subject drug for pharmacokinetic analysis. |
| PD | Jin_2016 | not_relevant | 0 | 0 | The paper studies paeonol and its metabolites, not dextran; the mention of dextran sulfate sodium (DSS) is only as an agent to induce colitis in the animal model, not as the drug of interest for PD analysis. |
| PGx | Kaczmarek_2024 | not_relevant | 0 | 0 | The paper studies the immunosuppressive properties of cyclic peptides and uses dextran sulfate only as an agent to induce colitis in a mouse model; it does not report pharmacogenomic effects on the PK/PD of dextran. |
| PGx | Kang_2020 | not_relevant | 0 | 0 | The paper investigates the role of the LACC1 gene in immune response and bacterial clearance, using dextran sodium sulfate only as a chemical inducer of colitis, not as a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| PGx | Kim_2023 | not_relevant | 0 | 0 | The paper investigates ICG fluorescence endoscopy for colon cancer detection; dextran sulfate sodium is used only as a chemical inducer of colitis in the mouse model, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Kincaid_1996 | irrelevant | 0 | 0 | The paper uses dextran amine as a tracer for anatomical labeling in a neuroscience study, not as a subject drug for pharmacokinetic analysis. |
| popPK | Kobuchi_2023 | irrelevant | 0 | 0 | Dextran sulfate sodium is used only as a model inducer for colitis, not as the subject drug for pharmacokinetic analysis. |
| PD | Kobuchi_2023 | not_relevant | 4 | 2 | The paper describes a PK/PD model for uracil-tegafur (5-FU), not dextran; dextran sulfate sodium is only used as a vehicle/inducer for the cancer model, and no PD parameters for dextran are reported. |
| PGx | Kong_2025 | not_relevant | 0 | 0 | The paper studies the therapeutic effect of a polysaccharide on dextran sulfate sodium-induced colitis, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| PGx | Li_2014 | not_relevant | 0 | 0 | The paper investigates the role of COMMD1 in colitis pathogenesis using dextran sodium sulfate as a disease inducer, not as a therapeutic drug, and does not report pharmacokinetic or pharmacodynamic parameters of dextran. |
| PGx | Liao_2025 | not_relevant | 0 | 0 | The paper studies the effect of tanshinone IIA on intestinal permeability using dextran as a tracer, not the pharmacokinetics or pharmacodynamics of dextran itself, and contains no pharmacogenomic analysis. |
| PGx | Liu_2018 | not_relevant | 0 | 0 | The paper investigates the mechanism of imperatorin in a dextran sulphate sodium-induced colitis model, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| PGx | Lloyd_2022 | not_relevant | 0 | 0 | The paper studies the effect of dextran on dopamine diffusion in a DAT knockout model, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| PGx | Mao_2021 | not_relevant | 0 | 0 | The paper investigates the role of decorin deficiency in colon cancer metastasis using dextran sodium sulfate as a chemical inducer of colitis, not as a therapeutic drug subject to pharmacogenomic analysis. |
| popPK | McLaren_1993 | irrelevant | 1 | 0 | Dextran is used only as a reference marker to determine diffusional loss of fluorescein, not as the subject drug for PK parameter estimation. |
| PGx | Mittapalli_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of dasatinib, and dextran is only used as a passive tracer to assess blood-brain barrier permeability, not as the drug of interest. |
| PGx | Morrison_2021 | not_relevant | 0 | 0 | The paper studies the chemopreventive effects of a plant extract in a cancer model where dextran sulfate sodium is used as a chemical inducer of colitis, not as a drug subject to pharmacogenomic analysis. |
| popPK | Naguib_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meperidine, using dextran 70 only as a vehicle/comparator, and does not report PK parameters for dextran itself. |
| popPK | Nomura_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mitomycin C-dextran conjugates (a prodrug), not dextran itself as the subject drug. |
| PGx | Nopwinyoowong_2022 | not_relevant | 0 | 0 | The paper investigates the effect of a natural product on CYP enzyme expression in a disease model, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Onishi_2018 | irrelevant | 0 | 0 | The paper focuses on the control theory and anticancer activity of a dextran-paclitaxel conjugate, not on the pharmacokinetic parameters of dextran itself. |
| PGx | Park_2022 | not_relevant | 0 | 0 | The paper investigates the role of the IPMK gene in dextran sulfate sodium (DSS)-induced colitis, where dextran is a chemical irritant, not a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| popPK | Rajadhyaksha_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a protein therapeutic (scFv) delivered via hydrogels, with dextran serving only as a polymer component of the delivery system rather than the subject drug. |
| popPK | Ranta_2006 | irrelevant | 1 | 0 | The paper is a review of pharmacokinetic modeling for transscleral drug delivery and uses FITC-dextran only as a probe molecule for simulation, not as the subject drug for which population PK parameters are reported. |
| PGx | Runwal_2025 | not_relevant | 0 | 0 | The paper investigates the effect of iron overload on blood-brain barrier proteins, not the pharmacogenomics of dextran. |
| popPK | Rüdiger_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling in podocytes, not a pharmacokinetic study, and reports no disposition parameters for dextran. |
| PGx | Schäfer_2023 | not_relevant | 0 | 0 | The paper investigates the effect of a gene variant on susceptibility to dextran sodium sulfate-induced colitis, not the pharmacokinetics or pharmacodynamics of dextran as a drug. |
| PGx | Shimizu_2025 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of eggshell membrane and its effects on DSS-induced colitis, but does not report any pharmacogenomic effects on the PK/PD of dextran. |
| PGx | Sliva_2012 | not_relevant | 0 | 0 | The paper studies the effect of a mushroom extract on colon cancer in mice, where dextran sodium sulfate is used only as a tool to induce inflammation, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Tschurtschenthaler_2017 | not_relevant | 0 | 0 | The paper discusses Crohn's disease pathogenesis and ATG16L1 variants, not the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Tuvaanjav_2016 | irrelevant | 0 | 0 | The study focuses on the isolation and antiviral activity of plant polysaccharides, using dextran sulfate only as a comparator for antiviral potency, with no pharmacokinetic data reported. |
| PD | Tuvaanjav_2016 | not_relevant | 3 | 2 | The paper reports a single EC50 value for dextran sulfate as a reference standard in an antiviral assay, but does not provide a dose-response curve, multiple data points, or a PK/PD model for dextran. |
| PGx | Vagnerová_2024 | not_relevant | 0 | 0 | The paper investigates the effects of butyrate on gene expression in the colon, not the pharmacokinetics or pharmacodynamics of dextran. |
| PGx | Vázquez-Arreguín_2019 | not_relevant | 0 | 0 | The paper investigates the role of the Oct1 transcription factor in colon regeneration and cancer, using dextran sodium sulfate (DSS) only as a chemical injury agent, not as a drug subject to pharmacogenomic analysis. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper investigates the therapeutic effects of a Chinese medicine on a dextran sodium sulfate-induced disease model, not the pharmacokinetics or pharmacodynamics of dextran itself, and contains no pharmacogenomic data. |
| PGx | Wehl_2026 | not_relevant | 0 | 0 | The paper describes an in vitro cell culture model for drug metabolism and does not report any pharmacogenomic effects on dextran pharmacokinetics or pharmacodynamics. |
| PGx | Wu_2016 | not_relevant | 0 | 0 | The paper investigates the effect of isoliquiritigenin on gut microbiota and cancer incidence in a mouse model, not the pharmacokinetics or pharmacodynamics of dextran. |
| popPK | Yamamoto_1991 | irrelevant | 0 | 0 | The paper studies the pharmacological effects of a plant extract, using dextran only as an agent to induce paw edema in an inflammation model, not as the subject drug for PK analysis. |
| PD | Yamamoto_1991 | not_relevant | 0 | 0 | The paper studies a plant extract (Ageratum conyzoides), not the drug dextran; dextran is only mentioned as an agent to induce paw edema in a negative control experiment. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The study investigates the effect of dextran sodium sulfate-induced colitis on theophylline pharmacokinetics, not the pharmacogenomics of dextran itself. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper investigates the anti-inflammatory mechanism of patchouli alcohol in DSS-induced colitis, not the pharmacokinetics or pharmacodynamics of dextran itself. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper discusses the structural modification of the enzyme dextransucrase to improve its stability, not the pharmacogenomics of dextran as a drug. |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | The paper investigates gene expression in ulcerative colitis and the effect of butyrate on DSS-induced colitis, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of dextran. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dextran`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
