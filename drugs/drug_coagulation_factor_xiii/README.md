<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;coagulation factor XIII&quot;}]"></div>

# coagulation factor XIII

- **generic name:** coagulation factor XIII
- **ATC codes:** `B02BD07`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Coagulation factor XIII is a blood clotting factor used to treat bleeding due to factor XIII deficiency. It is classified as a blood coagulation factor hemostatic in the ATC system and remains in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423712](https://www.wikidata.org/wiki/Q423712) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 18:11 | 6:36 | 0/0/1 | 0/0/0 | 0/0/0 | 218,363/6,434 | ollama / qwen3.8:27b-mtp-q8_0 | 25 | 8/19 | 23/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>STALE — current validate: not captured</sub> | [Dodds_2005_reference](drugs/drug_coagulation_factor_xiii/CoagulationFactorXiii_Dodds2005_reference.md) | — | — (no model) | 0 | Dodds MG et al., Population pharmacokinetics of recombin…, The AAPS journal (2005) | [10.1208/aapsj070370](https://doi.org/10.1208/aapsj070370) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 537 matched, 91 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ponce_2005.pdf` | Ponce RA et al., Preclinical safety and pharmacokinetics…, Toxicologic pathology (2005) | popPK | 8 | [10.1080/01926230490966247](https://doi.org/10.1080/01926230490966247) | [16036868](https://pubmed.ncbi.nlm.nih.gov/16036868) | The study reports pharmacokinetics for recombinant human factor XIII in cynomolgus monkeys, including a circulating half-life of 5-7 days, but lacks detailed compartmental parameters (CL, V) in the provided text. |

<sub>queue written 2026-10-05T18:10:17.627957+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbondanzo_1988 | irrelevant | 0 | 0 | The paper is a clinical case report describing a patient with Factor XIII deficiency and does not contain any quantitative pharmacokinetic parameters or population-PK modeling data. |
| popPK | Akiyama_1995 | irrelevant | 0 | 0 | The study is an immunohistochemical analysis of Factor XIIIa distribution in brain tissue, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Alesci_2023 | irrelevant | 0 | 0 | The study is a clinical cohort analysis of FXIII activity levels and correlations with disease markers, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Almokadem_2012 | irrelevant | 0 | 0 | The paper is a review of volociximab, a monoclonal antibody, and does not contain any pharmacokinetic data for coagulation_factor_xiii. |
| popPK | Ames_2005 | irrelevant | 0 | 0 | The study measures FXIII activity levels in patients with antiphospholipid syndrome but does not report pharmacokinetic parameters (CL, V, ka, etc.) for FXIII as a drug. |
| popPK | Andersen_1987 | irrelevant | 0 | 0 | The paper investigates fibrin dissolution and synovial fluid composition, not the pharmacokinetics of coagulation factor XIII. |
| popPK | Anokhin_2017 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of Factor XIII oligomerization state using analytical ultracentrifugation and does not report pharmacokinetic parameters. |
| PGx | Ansani_2018 | not_relevant | 0 | 0 | The paper investigates the prognostic value of FXIIIA levels and the F13A1 V34L genotype for mortality in AMI patients, but does not report a pharmacogenomic effect on the PK or PD of a specific drug. |
| popPK | Bazzan_2023 | irrelevant | 0 | 0 | The study is an immunohistochemical analysis of Factor XIIIA expression in lung tissue for COPD, not a pharmacokinetic study of the drug coagulation_factor_xiii. |
| popPK | Bhattarai_2024 | irrelevant | 0 | 0 | The paper investigates fibronectin (FN1) and APOE in Alzheimer's disease and does not study the pharmacokinetics of coagulation factor XIII. |
| popPK | Byrnes_2024 | relevant | 9 | 4 | The paper reports quantitative PK parameters (half-lives, AUC, compartmental model fits) for coagulation_factor_xiii, but specific clearance (CL) and volume (V) values are not explicitly listed in the text, likely residing in supplementary tables or figures. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper is a microbiology study on Streptococcus parasanguinis and has no relation to coagulation_factor_xiii pharmacokinetics. |
| popPK | Cheslyn-Curtis_1988 | irrelevant | 0 | 0 | The study investigates bacterial clearance and fibronectin levels in rabbits, not the pharmacokinetics of coagulation factor XIII. |
| popPK | Collen_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tissue-type plasminogen activator (t-PA) mutants, not coagulation factor XIII. |
| popPK | Desage_2023 | irrelevant | 1 | 0 | The study focuses on a recombinant Factor IX (FIX) fusion protein where Factor XIII is a component, not a study of Factor XIII pharmacokinetics as the subject drug, and no specific PK parameters for Factor XIII are reported. |
| popPK | Di_2025 | irrelevant | 0 | 0 | The paper is a perspective on TDP-43 in Alzheimer's disease and contains no pharmacokinetic data for coagulation factor XIII. |
| popPK | Di_2025_2 | irrelevant | 0 | 0 | The paper describes an in vitro model for erythropoiesis and red blood cell generation, with no mention of coagulation factor XIII or its pharmacokinetics. |
| PD | Dodds_2005 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for Factor XIII species (dimer, monomer, tetramer) but does not include a pharmacodynamic (PD) model or exposure-response analysis for a biological effect. |
| popPK | Dorgalaleh_2024 | irrelevant | 0 | 0 | The paper is a clinical review of heterozygous Factor XIII deficiency focusing on genetics and clinical manifestations, containing no pharmacokinetic parameters. |
| popPK | Douglas_1986 | irrelevant | 0 | 0 | The paper is a review of phagocytic defects in monocytes/macrophages and does not contain pharmacokinetic data for coagulation factor XIII. |
| popPK | Frey_2020 | irrelevant | 0 | 0 | The study measures FXIII activity as a biomarker for cardiac remodelling after myocardial infarction and does not report pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Gapizov_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of an engineered fibronectin scaffold protein (JCL) and its albumin-binding fusions, not coagulation factor XIII. |
| popPK | Gerwin_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of LNA043 (an ANGPTL3 derivative), not coagulation factor XIII. |
| popPK | Ghansah_2024 | irrelevant | 0 | 0 | The study measures static FXIII antigen and activity levels in plasma to diagnose deficiency, but does not report pharmacokinetic parameters (clearance, volume, half-life) or a PK model. |
| popPK | Gissel_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of coagulation dynamics under acidic conditions, not a pharmacokinetic study reporting disposition parameters for coagulation factor XIII. |
| popPK | Guth_1999 | irrelevant | 0 | 0 | The study measures coagulation factor XIII activity levels in hemofiltrate to assess protein loss, but does not report pharmacokinetic disposition parameters (CL, V, ka) for the drug. |
| popPK | Hashimoto_1983 | irrelevant | 0 | 0 | The study investigates plasma fibronectin levels in rats, not the pharmacokinetics of coagulation factor XIII. |
| popPK | Hetz_2023 | irrelevant | 0 | 0 | The study measures FXIII activity levels and clot firmness in trauma patients but does not report pharmacokinetic parameters (CL, V, ka) for exogenous FXIII dosing. |
| popPK | Hung_2021 | irrelevant | 0 | 0 | The study focuses on peptide ligands and liposome delivery for chronic pancreatitis in mice and does not involve coagulation_factor_xiii. |
| popPK | Hurják_2020 | relevant | 4 | 5 | The study reports in vivo clearance data (concentrations over time) for FXIII-B in mice, but lacks a formal compartmental PK model or explicit clearance/volume parameters. |
| popPK | Jamil_2022 | irrelevant | 0 | 0 | The paper is a bioinformatic analysis of gene expression data for FXIII subunits and does not report any pharmacokinetic parameters. |
| popPK | Jonckx_2017 | irrelevant | 0 | 0 | The study investigates ocriplasmin, not coagulation_factor_xiii, and focuses on vitreoretinal effects rather than PK parameters. |
| popPK | Kaplan_1980 | irrelevant | 0 | 0 | The study investigates the effect of methylprednisolone on reticuloendothelial function in rats and does not involve coagulation_factor_xiii. |
| popPK | Karaman_2021 | irrelevant | 0 | 0 | The paper is a clinical case study regarding the management of bleeding in a patient with Factor XIII deficiency and inhibitors, and does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Karimi_2009 | irrelevant | 0 | 0 | The paper is a review of Factor XIII deficiency pathophysiology and diagnostic assays, containing no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Katona_2014 | irrelevant | 0 | 0 | The study investigates the biochemical interaction and binding kinetics (Kd) of FXIII subunits in vitro, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the drug. |
| popPK | Kattula_2020 | irrelevant | 0 | 0 | The study investigates the effect of a Factor XIII polymorphism on clot mass (hemostasis/thrombosis) and does not report any pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| popPK | Kiener_1986 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of fibronectin and Factor XIII is only a modulator/comparator, with no quantitative PK parameters (CL, V, etc.) reported for Factor XIII itself. |
| popPK | Kim_2023 | irrelevant | 0 | 0 | The paper investigates the mechanism of irisin and amyloid-beta clearance in Alzheimer's disease models and does not involve coagulation_factor_xiii or its pharmacokinetics. |
| popPK | Kitchens_1979 | irrelevant | 1 | 0 | The paper is a clinical review of Factor XIII deficiency that mentions a long half-life qualitatively but provides no quantitative pharmacokinetic parameters (CL, V, ka) or compartmental models. |
| popPK | Lautz_1979 | irrelevant | 0 | 0 | The paper is a clinical study on liver disease that measures coagulation factor XIII activity as a diagnostic marker, not a pharmacokinetic study reporting disposition parameters for the drug. |
| popPK | Le_2011 | irrelevant | 0 | 0 | The paper discusses sugar metabolism and virulence in enterobacteria and contains no pharmacokinetic data for coagulation_factor_xiii. |
| PD | Le_2011 | not_relevant | 0 | 0 | The paper discusses sugar metabolism and virulence in enterobacteria and contains no information regarding coagulation factor XIII or any pharmacodynamic modeling. |
| popPK | Le_2018 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of a Factor IX fusion protein, using Factor XIII only as a carrier component, and does not report quantitative PK parameters for Factor XIII itself. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of MT218 (a gadolinium-based MRI contrast agent), not coagulation_factor_xiii. |
| popPK | Loose_1981 | irrelevant | 0 | 0 | The paper studies macrophage dysfunction in mice exposed to environmental chemicals (PCB, HCB, dieldrin) and does not involve coagulation_factor_xiii or its pharmacokinetics. |
| popPK | Lorand_2019 | irrelevant | 0 | 0 | The paper is a review of transglutaminase diseases and biochemistry, containing no pharmacokinetic data or quantitative disposition parameters for coagulation factor XIII. |
| popPK | Lovejoy_2006 | relevant | 8 | 2 | The study reports PK parameters for coagulation_factor_xiii, but only the half-life (8.5 days) is explicitly provided in the text, lacking other quantitative disposition parameters like clearance or volume. |
| popPK | Maile_1995 | irrelevant | 0 | 0 | The paper is a histological study of the thyroid gland in marmosets and mentions Factor XIII only as an immunohistochemical marker for dendritic cells, not as a subject of pharmacokinetic analysis. |
| popPK | Marco_2021 | irrelevant | 0 | 0 | The paper is a clinical case report on autoimmune acquired Factor XIII deficiency that reports diagnostic levels and inhibitor titers, but does not contain any pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| popPK | Martín-Otal_2025 | irrelevant | 0 | 0 | The paper investigates CAR-T cell therapy targeting phosphatidylserine and does not report pharmacokinetic parameters for coagulation factor XIII. |
| popPK | Matranga_1995 | irrelevant | 0 | 0 | The paper studies fibronectin-like proteins in sea urchins and contains no pharmacokinetic data for coagulation factor XIII. |
| popPK | McCafferty_1983 | irrelevant | 0 | 0 | The study measures fibronectin levels in children and does not involve coagulation_factor_xiii pharmacokinetics. |
| popPK | Mezei_2015 | irrelevant | 0 | 0 | The study is a genetic association analysis of FXIII polymorphisms and coronary artery disease risk, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Miloszewski_1970 | irrelevant | 2 | 0 | The evidence contains only the title "The half-life of factor XIII in vivo" with no quantitative parameter values, model details, or full text provided. |
| popPK | Mitchell_2023 | irrelevant | 0 | 0 | The study investigates the mechanistic role of platelet factor XIII-A in platelet function and clot retraction, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the drug. |
| popPK | Mohammed_2024 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of Factor XIII substrate binding and activation, reporting no pharmacokinetic parameters. |
| popPK | Muszbek_2017 | irrelevant | 0 | 0 | The paper describes diagnostic assays for Factor XIII activity and antigen levels, not pharmacokinetic disposition parameters. |
| popPK | Napoli_1978 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro activity of vitamin D3 analogs, which is unrelated to the pharmacokinetics of coagulation factor XIII. |
| popPK | Nilsson_1972 | irrelevant | 0 | 0 | no_text gate: only 36 chars of text extracted (&lt; 400) |
| popPK | Oba_2025 | irrelevant | 0 | 0 | The paper investigates Piezo2 expression in diabetic mouse kidneys and is unrelated to the pharmacokinetics of coagulation factor XIII. |
| popPK | Oertel_2007 | irrelevant | 0 | 0 | The paper describes a fluorometric assay for measuring FXIII concentration (analytical method) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for the drug. |
| PD | Oertel_2007 | not_relevant | 0 | 0 | The paper describes a laboratory assay method for measuring FXIII concentration, not a pharmacodynamic or exposure-response relationship for a drug. |
| popPK | Okada_1985 | irrelevant | 0 | 0 | The paper describes the biochemical mechanism of fibronectin incorporation into fibrin gels by Factor XIII, not the pharmacokinetic disposition parameters (CL, V, etc.) of the drug. |
| popPK | Orosz_2019 | irrelevant | 0 | 0 | The paper is a mechanistic/cellular biology study investigating the presence and localization of cellular Factor XIII in corneal keratocytes, not a pharmacokinetic study of the drug coagulation_factor_xiii. |
| popPK | Piccardi_2025 | irrelevant | 0 | 0 | The paper focuses on the interaction between mesothelin and an engineered protein, not the pharmacokinetics of coagulation factor XIII. |
| popPK | Ponce_2005 | relevant | 8 | 2 | The study reports pharmacokinetics for recombinant human factor XIII in cynomolgus monkeys, including a circulating half-life of 5-7 days, but lacks detailed compartmental parameters (CL, V) in the provided text. |
| popPK | Ramakrishnan_2019 | irrelevant | 0 | 0 | The paper describes the engineering of a fibronectin domain binder for PD-L1 imaging and contains no pharmacokinetic data for coagulation factor XIII. |
| popPK | Robertson_2022 | irrelevant | 0 | 0 | The paper is an in-vitro immunology study regarding T cell cytotoxicity and extracellular matrix, with no pharmacokinetic data for coagulation factor XIII. |
| popPK | Robinson_2000 | irrelevant | 0 | 0 | The study investigates the catalytic half-life of activated Factor XIII in thrombi (mechanistic/enzymatic), not the pharmacokinetic disposition parameters (CL, V, etc.) of the drug. |
| popPK | Sachan_2024 | irrelevant | 0 | 0 | The study evaluates the diagnostic accuracy of serum glycosylated fibronectin for preeclampsia and does not involve coagulation_factor_xiii or any pharmacokinetic parameters. |
| popPK | Sang_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet FXIII-A retention and release, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Schmitz_2020 | irrelevant | 0 | 0 | The paper is a review of FXIII inhibitors and does not report quantitative pharmacokinetic parameters for coagulation factor XIII itself. |
| popPK | Schroeder_2016 | irrelevant | 0 | 0 | The paper is a review of the structure and function of Factor XIII, containing no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Schroeder_2020 | irrelevant | 0 | 0 | The paper is a review of laboratory diagnostic assays for coagulation factor XIII and does not report quantitative pharmacokinetic parameters. |
| popPK | Sherman_1975 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fibrinogen:fibrin complexes, not coagulation factor XIII, which is only used as a reagent for crosslinking. |
| popPK | Shi_2019 | irrelevant | 0 | 0 | The study investigates the expression of coagulation factor XIII in Alzheimer's disease mice using immunohistochemistry, not pharmacokinetic parameters. |
| popPK | Shi_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pirfenidone derivatives, not coagulation_factor_xiii. |
| popPK | Shibahara_2023 | irrelevant | 0 | 0 | The paper investigates extracellular matrix remodeling in a mouse stroke model and does not involve coagulation_factor_xiii or any pharmacokinetic parameters. |
| PGx | Shiotani_2010 | not_relevant | 0 | 0 | The paper is a review of genetic polymorphisms associated with aspirin-induced peptic ulcers and mentions coagulation factor XIII only as a potential factor in aspirin resistance, without reporting any pharmacokinetic or pharmacodynamic data for coagulation factor XIII. |
| PGx | Sidelmann_2000 | not_relevant | 0 | 0 | The paper is a general review of fibrin clot formation and lysis mechanisms, not a study reporting specific pharmacogenomic effects on PK/PD parameters of coagulation factor XIII. |
| popPK | Soltani_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Factor XIII-A's role in NET formation and does not report any pharmacokinetic parameters. |
| popPK | Son_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sulforaphane and sulforaphane N-acetylcysteine, not coagulation factor XIII. |
| popPK | Souri_2015 | irrelevant | 0 | 0 | The paper is a mechanistic study on fibrin cross-linking and does not report quantitative pharmacokinetic parameters for coagulation factor XIII. |
| popPK | Souri_2023 | irrelevant | 0 | 0 | The study is mechanistic/immunological, focusing on antibody cloning and inhibition mechanisms, and does not report quantitative pharmacokinetic parameters for coagulation_factor_xiii. |
| popPK | Souri_2023_2 | irrelevant | 0 | 0 | The study is mechanistic/in-vitro, focusing on antibody inhibition of FXIII activation and fibrin crosslinking, and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| popPK | Stenfors_1999 | irrelevant | 0 | 0 | The paper discusses immune mechanisms in the middle ear and does not contain any pharmacokinetic data for coagulation factor XIII. |
| popPK | Syed_2024 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of protein structure and enzymatic activity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Tamaki_1995 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding coagulation_factor_xiii pharmacokinetics. |
| popPK | Tang_2021 | irrelevant | 0 | 0 | The paper is a review of Chinese medicines for diabetic nephropathy and does not report pharmacokinetic parameters for coagulation factor XIII. |
| popPK | Terri_2024 | irrelevant | 0 | 0 | The paper investigates the mechanism of HDAC inhibition on ovarian cancer adhesion in mice and cell lines, and does not report pharmacokinetic parameters for coagulation_factor_xiii. |
| popPK | Ueyama_1978 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Factor XIII's role in fibroblast proliferation and does not report any pharmacokinetic parameters. |
| popPK | Vincent_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and regulation of fibronectin in rats, not coagulation factor XIII. |
| PGx | Wang_2014 | not_relevant | 0 | 0 | The paper investigates the association between the FXIIIVal34Leu polymorphism and Polycystic Ovary Syndrome (PCOS) susceptibility/metabolic markers, not the effect of the genotype on the pharmacokinetic or pharmacodynamic parameters of coagulation factor XIII as a drug. |
| popPK | Weller_1990 | irrelevant | 0 | 0 | The study is a mechanistic/pathological investigation using immunofluorescence and Western blotting to locate Factor XIII in retinal membranes, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Würtz_2012 | not_relevant | 1 | 0 | The paper is a review of aspirin pharmacogenetics that mentions coagulation factor XIII only as a gene involved in hemostasis, without reporting any PD or exposure-response data. |
| PGx | Würtz_2012 | not_relevant | 0 | 0 | The paper is a review of aspirin pharmacogenetics and only mentions coagulation factor XIII as a protein of importance for haemostasis in the context of aspirin response, without reporting any pharmacogenomic effect on the PK or PD of coagulation factor XIII itself. |
| popPK | Yahara_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tissue-type plasminogen activator (t-PA) variants, not coagulation factor XIII. |
| popPK | Yamada_2024 | irrelevant | 0 | 0 | The study measures FXIII activity (functional assay) in patients with hemorrhagic shock but does not report pharmacokinetic parameters (CL, V, ka) or a PK model for the drug. |
| popPK | Yan_2018 | irrelevant | 0 | 0 | The paper is a clinical review of acquired factor XIII deficiency and does not report quantitative pharmacokinetic parameters or population PK models. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper studies the immune function of Dscam in crabs and does not involve the pharmacokinetics of coagulation factor XIII. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper describes a general QSAR modeling method and does not report pharmacokinetic parameters for coagulation_factor_xiii. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper describes a machine learning method (Topological Regression) for QSAR modeling on ChEMBL datasets and does not report any pharmacodynamic or exposure-response analysis for coagulation factor XIII. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a PET imaging probe (68Ga-NODAGA-BMS986192), not the drug coagulation_factor_xiii. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The paper focuses on RSV-induced lung injury and integrin signaling, with no mention of coagulation_factor_xiii or its pharmacokinetics. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters regarding Factor XIII pharmacodynamics. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 18:10 UTC</sub>
