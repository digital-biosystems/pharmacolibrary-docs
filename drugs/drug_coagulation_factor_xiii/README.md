<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor XIII&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;CoagulationFactorXiii_Dodds2005_reference&quot;,&quot;label&quot;:&quot;Dodds_2005_reference&quot;,&quot;href&quot;:&quot;drugs/drug_coagulation_factor_xiii/CoagulationFactorXiii_Dodds2005_reference.md&quot;,&quot;status&quot;:&quot;None \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# coagulation factor XIII

- **generic name:** coagulation factor XIII
- **ATC codes:** `B02BD07`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 20:19 | 25:49 | 0/0/0 | 0/1/0 | 0/0/0 | 475,951/11,581 | ollama / qwen3.8:27b-mtp-q8_0 | 27 | 8/19 | 25/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: not captured</sub> | [Dodds_2005_reference](drugs/drug_coagulation_factor_xiii/CoagulationFactorXiii_Dodds2005_reference.md) | Dodds MG et al., Population pharmacokinetics of recombin…, The AAPS journal (2005) | [10.1208/aapsj070370](https://doi.org/10.1208/aapsj070370) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Byrnes_2024](drugs/drug_coagulation_factor_xiii/pd_Byrnes_2024_FXIII_Act.md) | Byrnes JR et al., Reciprocal stabilization of coagulation…, Blood (2024) | [10.1182/blood.2023022042](https://doi.org/10.1182/blood.2023022042) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Byrnes_2024](drugs/drug_coagulation_factor_xiii/pd_Byrnes_2024_FXIII_Ag.md) | Byrnes JR et al., Reciprocal stabilization of coagulation…, Blood (2024) | [10.1182/blood.2023022042](https://doi.org/10.1182/blood.2023022042) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 537 matched, 91 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbondanzo_1988 | irrelevant | 0 | 0 | The paper is a clinical case report describing a patient with Factor XIII deficiency and does not contain any quantitative pharmacokinetic parameters or population-PK modeling data. |
| popPK | Akiyama_1995 | irrelevant | 0 | 0 | The paper is an immunohistochemical study of Factor XIIIa in brain tissue and contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Alesci_2023 | irrelevant | 0 | 0 | The study is a clinical cohort investigating correlations between FXIII activity and disease markers in systemic sclerosis, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Almokadem_2012 | irrelevant | 0 | 0 | The paper is a review of volociximab, a monoclonal antibody, and does not contain any pharmacokinetic data for coagulation_factor_xiii. |
| popPK | Ames_2005 | irrelevant | 0 | 0 | The study measures FXIII activity levels in a clinical cohort to assess disease association, not pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Andersen_1987 | irrelevant | 0 | 0 | The paper studies fibrin dissolution and synovial fluid composition, not the pharmacokinetics of coagulation factor XIII. |
| popPK | Anokhin_2017 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on the oligomerization state of Factor XIII using analytical ultracentrifugation and does not report any pharmacokinetic parameters. |
| PGx | Ansani_2018 | not_relevant | 0 | 0 | The paper investigates the prognostic value of FXIIIA levels and the F13A1 V34L genotype for mortality in AMI patients, but does not report a pharmacogenomic effect on the PK or PD of a specific drug. |
| popPK | Bazzan_2023 | irrelevant | 0 | 0 | The paper is an immunohistochemical study of Factor XIIIA expression in lung tissue related to inflammation in COPD, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Bhattarai_2024 | irrelevant | 0 | 0 | The paper is a genetic and mechanistic study on Alzheimer's disease focusing on fibronectin (FN1) and APOE, and does not contain any pharmacokinetic data for coagulation factor XIII. |
| popPK | Byrnes_2024 | relevant | 9 | 4 | The paper reports quantitative PK parameters (half-lives, AUC, compartmental model fits) for coagulation_factor_xiii, but specific clearance (CL) and volume (V) values are not explicitly listed in the text, likely residing in supplementary tables or figures. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper is a microbiology study on Streptococcus parasanguinis and has no relation to the pharmacokinetics of coagulation_factor_xiii. |
| popPK | Cheslyn-Curtis_1988 | irrelevant | 0 | 0 | The study investigates bacterial clearance and fibronectin levels in rabbits, not the pharmacokinetics of coagulation factor XIII. |
| popPK | Collen_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tissue-type plasminogen activator (t-PA) mutants, not coagulation factor XIII. |
| popPK | Desage_2023 | irrelevant | 1 | 0 | The study focuses on a recombinant Factor IX (FIX) fusion protein where Factor XIII is a component, not a study of Factor XIII pharmacokinetics as the subject drug, and no specific PK parameters for Factor XIII are reported. |
| popPK | Di_2025 | irrelevant | 0 | 0 | The paper is a perspective on TDP-43 in Alzheimer's disease and does not involve coagulation_factor_xiii or pharmacokinetic parameters. |
| popPK | Di_2025_2 | irrelevant | 0 | 0 | The paper describes an in vitro 3D model for erythropoiesis and does not involve coagulation_factor_xiii or any pharmacokinetic analysis. |
| PD | Dodds_2005 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for Factor XIII species (dimer, monomer, tetramer) but does not include a pharmacodynamic (PD) model or exposure-response analysis for a biological effect. |
| popPK | Dorgalaleh_2024 | irrelevant | 0 | 0 | The paper is a review of clinical and genetic aspects of Factor XIII deficiency and does not report any pharmacokinetic parameters. |
| popPK | Douglas_1986 | irrelevant | 0 | 0 | The paper is a review of phagocytic defects in monocytes/macrophages and does not contain any pharmacokinetic data for coagulation factor XIII. |
| popPK | Frey_2020 | irrelevant | 0 | 0 | The study is a clinical prognostic analysis of FXIII activity levels in myocardial infarction patients, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.). |
| popPK | Gapizov_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of an engineered fibronectin scaffold protein (JCL) and its fusions, not coagulation_factor_xiii. |
| popPK | Gerwin_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of LNA043 (an ANGPTL3 derivative), not coagulation_factor_xiii. |
| popPK | Ghansah_2024 | irrelevant | 0 | 0 | The study measures FXIII antigen and activity levels in plasma to assess deficiency etiology in myeloma patients, but does not report pharmacokinetic disposition parameters (CL, V, ka) or a PK model. |
| popPK | Gissel_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of coagulation dynamics under acidic conditions, not a pharmacokinetic study reporting disposition parameters for coagulation factor XIII. |
| popPK | Guth_1999 | irrelevant | 0 | 0 | The study measures coagulation factor XIII activity levels in hemofiltrate to assess protein loss, but does not report pharmacokinetic disposition parameters (CL, V, ka) for the drug. |
| popPK | Hashimoto_1983 | irrelevant | 0 | 0 | The study investigates plasma fibronectin levels in rats and does not involve coagulation_factor_xiii or its pharmacokinetics. |
| popPK | Hetz_2023 | irrelevant | 0 | 0 | The study focuses on the prevalence and clinical impact of acquired FXIII deficiency in trauma patients and in-vitro clot firmness, rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for FXIII. |
| popPK | Hung_2021 | irrelevant | 0 | 0 | The paper focuses on peptide ligands and liposomes for chronic pancreatitis and does not study coagulation_factor_xiii. |
| popPK | Hurják_2020 | relevant | 4 | 5 | The study reports in-vivo clearance data (concentrations over time) for FXIII-B in mice, but lacks a formal compartmental PK model or derived parameters like CL and V. |
| popPK | Jamil_2022 | irrelevant | 0 | 0 | The paper is a bioinformatic analysis of gene expression and transcription factors, not a pharmacokinetic study, and contains no PK parameters for coagulation_factor_xiii. |
| popPK | Jonckx_2017 | irrelevant | 0 | 0 | The study focuses on ocriplasmin, not coagulation_factor_xiii, and does not report PK parameters for the target drug. |
| popPK | Kaplan_1980 | irrelevant | 0 | 0 | The study investigates the effect of methylprednisolone on reticuloendothelial function in shock models and does not involve coagulation_factor_xiii or its pharmacokinetics. |
| popPK | Karaman_2021 | irrelevant | 0 | 0 | The paper is a clinical case study regarding the management of bleeding in a patient with Factor XIII deficiency and inhibitors, and it does not report any quantitative pharmacokinetic parameters or population-PK models. |
| popPK | Karimi_2009 | irrelevant | 0 | 0 | The paper is a review of Factor XIII deficiency and analytical assays, containing no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Katona_2014 | irrelevant | 0 | 0 | The study investigates the biochemical interaction and binding kinetics (Kd) of FXIII subunits, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the drug. |
| popPK | Kattula_2020 | irrelevant | 0 | 0 | The paper investigates the effect of a Factor XIII polymorphism on clot mass (mechanistic/hemostatic study) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Kiener_1986 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of fibronectin and Factor XIII is only a modulator/comparator, with no quantitative PK parameters (CL, V, etc.) reported for Factor XIII itself. |
| popPK | Kim_2023 | irrelevant | 0 | 0 | The paper investigates the mechanism of irisin in Alzheimer's disease and does not involve coagulation_factor_xiii or pharmacokinetic parameters. |
| popPK | Kitchens_1979 | irrelevant | 1 | 0 | The paper is a clinical review of Factor XIII deficiency that mentions a long half-life qualitatively but provides no quantitative pharmacokinetic parameters (CL, V, ka) or compartmental models. |
| popPK | Lautz_1979 | irrelevant | 0 | 0 | The paper is a clinical study on liver disease that measures coagulation factor XIII activity as a diagnostic marker, not a pharmacokinetic study reporting disposition parameters for the drug. |
| popPK | Le_2011 | irrelevant | 0 | 0 | The paper discusses sugar metabolism and virulence in enterobacteria and contains no information regarding coagulation_factor_xiii or its pharmacokinetics. |
| PD | Le_2011 | not_relevant | 0 | 0 | The paper discusses sugar metabolism and virulence in enterobacteria and contains no information regarding coagulation factor XIII or any pharmacodynamic modeling. |
| popPK | Le_2018 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of a Factor IX fusion protein, using Factor XIII only as a carrier component, and does not report quantitative PK parameters for Factor XIII itself. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of MT218 (a gadolinium-based MRI contrast agent), not coagulation_factor_xiii. |
| popPK | Loose_1981 | irrelevant | 0 | 0 | The paper is an immunotoxicology study on macrophage dysfunction in mice exposed to environmental chemicals and does not involve coagulation_factor_xiii or pharmacokinetic parameters. |
| popPK | Lorand_2019 | irrelevant | 0 | 0 | The paper is a review of transglutaminase diseases and mechanisms, containing no pharmacokinetic data or quantitative disposition parameters for coagulation factor XIII. |
| popPK | Lovejoy_2006 | relevant | 8 | 2 | The study reports PK parameters for coagulation_factor_xiii, but only the half-life (8.5 days) is explicitly provided in the text, lacking other quantitative disposition parameters like clearance or volume. |
| popPK | Maile_1995 | irrelevant | 0 | 0 | The paper is a histological study of the thyroid gland in marmosets and mentions Factor XIII only as an immunohistochemical marker for dendritic cells, containing no pharmacokinetic data. |
| popPK | Marco_2021 | irrelevant | 0 | 0 | The paper is a clinical case report on autoimmune acquired Factor XIII deficiency that reports hemostatic parameters (antigen levels, inhibitor titers) but contains no pharmacokinetic modeling or quantitative disposition parameters (CL, V, ka) for the drug. |
| popPK | Martín-Otal_2025 | irrelevant | 0 | 0 | The paper investigates CAR-T cell therapy targeting phosphatidylserine and does not report pharmacokinetic parameters for coagulation factor XIII. |
| popPK | Matranga_1995 | irrelevant | 0 | 0 | The paper is a biochemical study on fibronectin-like proteins in sea urchins and does not involve coagulation_factor_xiii or pharmacokinetics. |
| popPK | McCafferty_1983 | irrelevant | 0 | 0 | The study measures fibronectin levels, not pharmacokinetic parameters for coagulation factor XIII. |
| popPK | Mezei_2015 | irrelevant | 0 | 0 | The paper is a genetic association study investigating the link between FXIII polymorphisms and coronary artery disease risk, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Miloszewski_1970 | irrelevant | 2 | 0 | The evidence contains only the title "The half-life of factor XIII in vivo" with no quantitative parameter values, model details, or full text provided. |
| popPK | Mitchell_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on platelet function and clot retraction, not a pharmacokinetic study, and reports no disposition parameters for coagulation_factor_xiii. |
| popPK | Mohammed_2024 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on Factor XIII structure and substrate binding, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Muszbek_2017 | irrelevant | 0 | 0 | The paper describes diagnostic assays for Factor XIII activity and antigen levels, not pharmacokinetic disposition parameters. |
| popPK | Napoli_1978 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro activity of vitamin D3 analogs and does not involve coagulation_factor_xiii or pharmacokinetic parameters. |
| popPK | Nilsson_1972 | irrelevant | 0 | 0 | no_text gate: only 36 chars of text extracted (&lt; 400) |
| popPK | Oba_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on Piezo2 in diabetic kidney disease and does not involve coagulation_factor_xiii or pharmacokinetic parameters. |
| popPK | Oertel_2007 | irrelevant | 0 | 0 | The paper describes a fluorometric assay for measuring FXIII concentration (analytical method) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for the drug. |
| PD | Oertel_2007 | not_relevant | 0 | 0 | The paper describes a laboratory assay method for measuring FXIII concentration, not a pharmacodynamic or exposure-response relationship for a drug. |
| popPK | Okada_1985 | irrelevant | 0 | 0 | The paper is a mechanistic study on fibronectin incorporation into fibrin gels and does not report any pharmacokinetic parameters for coagulation factor XIII. |
| popPK | Orosz_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study on the cellular localization and function of Factor XIII in corneal keratocytes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Piccardi_2025 | irrelevant | 0 | 0 | The paper focuses on the interaction between mesothelin and an engineered protein, not the pharmacokinetics of coagulation factor XIII. |
| popPK | Ponce_2005 | irrelevant | 2 | 0 | The paper reports only a qualitative half-life range (5-7 days) without specific compartmental parameters (CL, V, Q) or a population PK model, and the detailed numeric data is not present in the provided evidence. |
| popPK | Ramakrishnan_2019 | irrelevant | 0 | 0 | The paper describes the engineering of a fibronectin domain binder for PD-L1 imaging and does not involve coagulation_factor_xiii or report any pharmacokinetic parameters. |
| popPK | Robertson_2022 | irrelevant | 0 | 0 | The paper is an in-vitro immunology study regarding T cell cytotoxicity and extracellular matrix, with no pharmacokinetic data for coagulation_factor_xiii. |
| popPK | Robinson_2000 | irrelevant | 0 | 0 | The study investigates the catalytic half-life of activated Factor XIII in thrombi (mechanistic/enzymatic), not the pharmacokinetic disposition parameters (CL, V, etc.) of the drug. |
| popPK | Sachan_2024 | irrelevant | 0 | 0 | The study evaluates the diagnostic accuracy of serum glycosylated fibronectin for preeclampsia and does not involve coagulation_factor_xiii or pharmacokinetic parameters. |
| popPK | Sang_2024 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of platelet FXIII-A retention and release, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Schmitz_2020 | irrelevant | 0 | 0 | The paper is a review of FXIII inhibitors and does not report pharmacokinetic parameters for coagulation_factor_xiii itself. |
| popPK | Schroeder_2016 | irrelevant | 0 | 0 | The paper is a review of the structure and function of Factor XIII and does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Schroeder_2020 | irrelevant | 0 | 0 | The paper is a review of laboratory diagnostic assays for coagulation factor XIII and does not report any pharmacokinetic parameters. |
| popPK | Sherman_1975 | irrelevant | 0 | 0 | The study focuses on the clearance of fibrinogen:fibrin complexes, not the pharmacokinetics of coagulation factor XIII itself. |
| popPK | Shi_2019 | irrelevant | 0 | 0 | The study investigates the expression of coagulation factor XIII in Alzheimer's disease mice using immunohistochemistry, not pharmacokinetic parameters. |
| popPK | Shi_2022 | irrelevant | 0 | 0 | The study focuses on pirfenidone derivatives and does not involve coagulation_factor_xiii. |
| popPK | Shibahara_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on post-stroke extracellular matrix remodeling in mice and does not involve coagulation_factor_xiii or pharmacokinetic parameters. |
| PGx | Shiotani_2010 | not_relevant | 0 | 0 | The paper is a review of genetic polymorphisms associated with aspirin-induced peptic ulcers and mentions coagulation factor XIII only as a potential factor in aspirin resistance, without reporting any pharmacokinetic or pharmacodynamic data for coagulation factor XIII. |
| PGx | Sidelmann_2000 | not_relevant | 0 | 0 | The paper is a general review of fibrin clot formation and lysis mechanisms, not a study reporting specific pharmacogenomic effects on PK/PD parameters of coagulation factor XIII. |
| popPK | Soltani_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Factor XIII-A's role in NET formation and does not report any pharmacokinetic parameters. |
| popPK | Son_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sulforaphane and sulforaphane N-acetylcysteine, not coagulation_factor_xiii. |
| popPK | Souri_2015 | irrelevant | 0 | 0 | The paper is a mechanistic study on fibrin cross-linking and does not report quantitative pharmacokinetic parameters for coagulation factor XIII. |
| popPK | Souri_2023 | irrelevant | 0 | 0 | The study is mechanistic/immunological, focusing on antibody cloning and inhibition mechanisms, and does not report quantitative pharmacokinetic parameters for coagulation_factor_xiii. |
| popPK | Souri_2023_2 | irrelevant | 0 | 0 | The study is mechanistic/in-vitro, focusing on antibody inhibition of FXIII activation and fibrin crosslinking, and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| popPK | Stenfors_1999 | irrelevant | 0 | 0 | The paper discusses immune mechanisms in the middle ear and does not involve coagulation_factor_xiii or pharmacokinetic parameters. |
| popPK | Syed_2024 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on protein structure and activity, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Tamaki_1995 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding coagulation_factor_xiii pharmacokinetics. |
| popPK | Tang_2021 | irrelevant | 0 | 0 | The paper is a review of Chinese medicines for diabetic nephropathy and does not report pharmacokinetic parameters for coagulation_factor_xiii. |
| popPK | Terri_2024 | irrelevant | 0 | 0 | The paper studies the pharmacological effects of the HDAC inhibitor MS-275 on ovarian cancer cell adhesion and does not involve coagulation_factor_xiii or report any pharmacokinetic parameters for it. |
| popPK | Ueyama_1978 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on fibroblast proliferation and fibrin crosslinking, not a pharmacokinetic study of coagulation_factor_xiii. |
| popPK | Vincent_1989 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of fibronectin, not coagulation_factor_xiii. |
| PGx | Wang_2014 | not_relevant | 0 | 0 | The paper investigates the association between the FXIIIVal34Leu polymorphism and Polycystic Ovary Syndrome (PCOS) susceptibility/metabolic markers, not the effect of the genotype on the pharmacokinetic or pharmacodynamic parameters of coagulation factor XIII as a drug. |
| popPK | Weller_1990 | irrelevant | 0 | 0 | The paper is a mechanistic study on the localization of Factor XIII in retinal membranes and does not report any pharmacokinetic parameters. |
| PD | Würtz_2012 | not_relevant | 1 | 0 | The paper is a review of aspirin pharmacogenetics that mentions coagulation factor XIII only as a gene involved in hemostasis, without reporting any PD or exposure-response data. |
| PGx | Würtz_2012 | not_relevant | 0 | 0 | The paper is a review of aspirin pharmacogenetics and only mentions coagulation factor XIII as a protein of importance for haemostasis in the context of aspirin response, without reporting any pharmacogenomic effect on the PK or PD of coagulation factor XIII itself. |
| popPK | Yahara_1994 | irrelevant | 0 | 0 | The study focuses on tissue-type plasminogen activator (t-PA) variants, not coagulation factor XIII. |
| popPK | Yamada_2024 | irrelevant | 0 | 0 | The study measures FXIII activity levels (coagulation function) rather than pharmacokinetic disposition parameters (clearance, volume, half-life) for FXIII as a drug. |
| popPK | Yan_2018 | irrelevant | 0 | 0 | The paper is a clinical review of acquired factor XIII deficiency and does not report any quantitative pharmacokinetic parameters or population-PK models. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on Dscam in crabs and does not involve the pharmacokinetics of coagulation_factor_xiii. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is a computational QSAR modeling study using Coagulation Factor XIII only as a target dataset for activity prediction, not a pharmacokinetic study reporting disposition parameters. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper describes a machine learning method (Topological Regression) for QSAR modeling on ChEMBL datasets and does not report any pharmacodynamic or exposure-response analysis for coagulation factor XIII. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a PET imaging probe (68Ga-NODAGA-BMS986192), not the drug coagulation_factor_xiii. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The paper is a multiomics study on RSV-induced lung injury and does not involve coagulation_factor_xiii or pharmacokinetic parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters regarding Factor XIII pharmacodynamics. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 20:18 UTC</sub>
