<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A09A&quot;,&quot;href&quot;:&quot;atc/A09A.md&quot;},{&quot;label&quot;:&quot;diastase&quot;}]"></div>

# diastase

- **generic name:** diastase
- **ATC codes:** `A09AA01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Diastase is an enzyme preparation used as a digestive aid to help break down starch in the gut. It is classified in the ATC system among digestive enzyme preparations, indicating it remains an approved digestive remedy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q609677](https://www.wikidata.org/wiki/Q609677) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 21:16 | 6:11 | 0/0/0 | 0/0/0 | 0/0/0 | 220,319/4,845 | ollama / qwen3.8:27b-mtp-q8_0 | 30 | 7/22 | 28/2 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 438 matched, 82 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Azhagesan_2022.pdf` | Azhagesan A et al., Multispectroscopy analysis of polystyre…, Ecotoxicology and environme… (2022) | pd | 4 | [10.1016/j.ecoenv.2022.114226](https://doi.org/10.1016/j.ecoenv.2022.114226) | [36306622](https://www.ncbi.nlm.nih.gov/pubmed/36306622) | metadata signals extractable PD data (IC50) |
| `Mulugeta_2022.pdf` | Mulugeta M et al., Comb honey and processed honey of Croto…, Heliyon (2022) | pd | 4 | [10.1016/j.heliyon.2022.e09512](https://doi.org/10.1016/j.heliyon.2022.e09512) | [35647353](https://www.ncbi.nlm.nih.gov/pubmed/35647353) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T21:16:47.323273+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albalawi_2025 | irrelevant | 0 | 0 | The paper describes the biochemical and thermodynamic characterization of an alpha-amylase enzyme from Avena fatua, not the pharmacokinetics of the drug diastase in a biological system. |
| PD | Alnafisah_2026 | not_relevant | 0 | 0 | The paper analyzes the nutritional composition and biological activities (antioxidant, anti-inflammatory) of honey samples; diastase is measured only as a quality control parameter (enzyme activity), not as a drug with a pharmacodynamic exposure-response relationship. |
| PD | Azhagesan_2022 | not_relevant | 0 | 0 | The paper analyzes the physical interaction between nanoplastics and the enzyme diastase using multispectroscopy, not a pharmacodynamic or exposure-response relationship in a biological system. |
| popPK | Bank_1991 | irrelevant | 0 | 0 | The paper describes the electrophoretic characterization and posttranslational modifications of alpha-amylase, not the pharmacokinetics of diastase. |
| popPK | Banks_1979 | irrelevant | 0 | 0 | The study focuses on amylase (not diastase) as a diagnostic marker for pancreatitis and renal insufficiency, not on the pharmacokinetic disposition parameters of diastase. |
| popPK | Barnett_1986 | irrelevant | 0 | 0 | The study focuses on the diagnostic utility of amylase and lipase levels in pancreatitis, not the pharmacokinetic parameters of diastase. |
| popPK | Bhavsar_2023 | irrelevant | 0 | 0 | The study measures salivary amylase activity in humans as a biomarker for tobacco use, not the pharmacokinetics of the drug diastase. |
| popPK | Calvano_2016 | irrelevant | 0 | 0 | The study investigates microRNA biomarkers for pancreatic injury in rats and does not report pharmacokinetic parameters for diastase. |
| popPK | Chetana_2023 | irrelevant | 0 | 0 | The paper investigates serum amylase as a prognostic marker in multiple myeloma, not the pharmacokinetics of diastase. |
| PD | Chummun_2023 | not_relevant | 1 | 0 | The paper mentions diastase activity as a quality indicator for honey but does not report any pharmacodynamic or exposure-response relationship for diastase itself. |
| popPK | Conrad_1988 | irrelevant | 0 | 0 | The study investigates the effect of diuretics on amylase levels, not the pharmacokinetics of diastase. |
| popPK | Cuckow_1997 | irrelevant | 0 | 0 | The paper describes a case of familial hyperamylasaemia (elevated serum amylase) and does not report pharmacokinetic parameters for the drug diastase. |
| popPK | Culp_2021 | irrelevant | 0 | 0 | The paper investigates the role of salivary amylase in dental caries in mice and does not report pharmacokinetic parameters for the drug diastase. |
| popPK | Das_2025 | irrelevant | 0 | 0 | The paper is a nutritional and antioxidant profiling study of honey, where "diastase" refers to the enzyme activity (DN units) in the honey, not the pharmacokinetics of the drug diastase. |
| PD | Das_2025 | not_relevant | 0 | 0 | The paper reports diastase activity as a static physicochemical quality parameter (DN units) of honey samples, not as a pharmacodynamic response to drug exposure or dose. |
| popPK | Dawes_2015 | irrelevant | 0 | 0 | The paper is a narrative review of the general functions of saliva and does not report any quantitative pharmacokinetic parameters for diastase. |
| popPK | DeVore_1980 | irrelevant | 0 | 0 | The study measures amylase/creatinine clearance ratios for diagnostic purposes in pregnancy, not the pharmacokinetic disposition parameters (CL, V, t1/2) of diastase as a drug. |
| popPK | Deng_2014 | irrelevant | 0 | 0 | The paper describes site-directed mutagenesis and structural characterization of an enzyme (likely diastase/amylase) in vitro, containing no pharmacokinetic data. |
| popPK | Desai_2021 | irrelevant | 0 | 0 | The paper describes the immobilization of alpha-amylase for industrial syrup production, not the pharmacokinetics of the drug diastase in a biological system. |
| popPK | Duane_1971 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amylase in baboons, not diastase. |
| popPK | Faro_1977 | irrelevant | 0 | 0 | The paper discusses macroamylasemia (amylase) in a clinical case, not the pharmacokinetics of diastase. |
| popPK | Fayez_2023 | irrelevant | 0 | 0 | The paper investigates the in vitro bioactivities (antioxidant, antiviral, anticancer) of bacterial carotenoids and does not study the pharmacokinetics of diastase. |
| popPK | Feher_2024 | irrelevant | 0 | 0 | The paper is a clinical diagnostic study on non-pancreatic hyperlipasemia and does not report pharmacokinetic parameters for diastase. |
| popPK | Gershman_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ethanol, not diastase. |
| popPK | Hohenwallner_1979 | irrelevant | 0 | 0 | The study measures renal clearance of amylase (a different enzyme) in urine, not the pharmacokinetics of diastase. |
| popPK | Hudson_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amylase and lipase in dogs, not diastase (which is a specific pancreatic enzyme preparation, often distinct from generic serum amylase in PK contexts, and the drug of interest is not the subject). |
| popPK | Jabbour_2025 | irrelevant | 0 | 0 | The paper is a review of Chronic Myeloid Leukemia treatment and does not contain any pharmacokinetic data for diastase. |
| popPK | Jiang_2015 | irrelevant | 0 | 0 | The paper describes the characterization of a bacterial alpha-amylase enzyme (Gs4j-amyA) for industrial starch hydrolysis, not the pharmacokinetics of the drug diastase in a biological subject. |
| popPK | Joyet_1992 | irrelevant | 0 | 0 | The paper describes protein engineering and thermostability of Bacillus licheniformis alpha-amylase, not the pharmacokinetics of the drug diastase. |
| popPK | Junge_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lipase and amylase, not diastase. |
| popPK | Kapitza_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of semaglutide, ethinylestradiol, and levonorgestrel, not diastase. |
| popPK | Kelleni_2025 | irrelevant | 0 | 0 | The paper is a clinical case report on bronchiolitis treatment where alpha-amylase (diastase) is used as a mucolytic agent, but no pharmacokinetic parameters for diastase are reported. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paclitaxel nanoparticles, not diastase. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper describes in vitro enzymatic properties and mutagenesis of alpha-amylase, not the pharmacokinetics of the drug diastase. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The study investigates the bioaccessibility and bioavailability of EGCG in bread, not the pharmacokinetics of diastase. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper analyzes honey quality and metabolite binding to 5-LOX, not the pharmacodynamics of the drug diastase. |
| popPK | Lin_2022 | irrelevant | 0 | 0 | The paper is a clinical study on hypertriglyceridemic acute pancreatitis and does not report pharmacokinetic parameters for diastase. |
| PGx | Llanora_2025 | not_relevant | 0 | 0 | The paper describes a genetic disorder (GSD IV) and uses diastase as a histological reagent, not as a drug subject to pharmacogenomic analysis. |
| popPK | Lu_1998 | irrelevant | 0 | 0 | The paper is a diagnostic study on pancreas divisum and does not report pharmacokinetic parameters for diastase. |
| popPK | Lu_2025 | irrelevant | 0 | 0 | The study investigates pioglitazone's effect on alpha-1 antitrypsin accumulation, and "diastase" is mentioned only as a histological stain (PAS with diastase), not as the subject drug for pharmacokinetic analysis. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The study focuses on Rehmannia glutinosa polysaccharide nanoparticles for diabetes and osteoporosis, not the pharmacokinetics of diastase. |
| popPK | Lynge_2019 | irrelevant | 0 | 0 | The paper is a review of salivary microbiota and does not report pharmacokinetic parameters for diastase. |
| popPK | Marques_2024 | irrelevant | 0 | 0 | The study focuses on the nanoencapsulation of quinoa oil and its in vitro inhibition of digestive enzymes (alpha-amylase), not the pharmacokinetics of the drug diastase. |
| PD | Mulugeta_2022 | not_relevant | 0 | 0 | The paper analyzes the enzymatic and antioxidant properties of honey from different botanical origins and does not report any pharmacodynamic or exposure-response data for diastase. |
| popPK | Murray_2025 | irrelevant | 0 | 0 | The paper investigates the interaction between alpha-amylase and antibiotics in Pseudomonas aeruginosa biofilms, not the pharmacokinetics of the drug diastase. |
| popPK | Mályusz_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pancreatic lipase and amylase, not diastase. |
| popPK | Narayanan_1980 | irrelevant | 0 | 0 | The paper is a review of creatinine measurement methods and does not report pharmacokinetic parameters for diastase. |
| popPK | Nithya_2017 | irrelevant | 0 | 0 | The paper describes the production and characterization of an amylase enzyme from Streptomyces fragilis, not the pharmacokinetics of the drug diastase. |
| popPK | O_2022 | irrelevant | 0 | 0 | The paper is a review of macroalgal protein extraction and bioactivity, containing no pharmacokinetic data for the drug diastase. |
| popPK | Obara_2025 | irrelevant | 0 | 0 | The paper describes an in vitro cell model for CYP2D6 metabolism and does not report pharmacokinetic parameters for diastase. |
| PD | Obara_2025 | not_relevant | 0 | 0 | The paper describes the development of a CYP2D6-enhanced HepaRG cell model for drug metabolism and toxicity; it does not report a pharmacodynamic (exposure- or dose-response) relationship for diastase or any other drug with numeric PD parameters. |
| popPK | Oyewusi_2023 | irrelevant | 0 | 0 | The study is an in silico molecular dynamics simulation of Withanolide A as an enzyme inhibitor, not a pharmacokinetic study of diastase. |
| PGx | Pastore_2026 | not_relevant | 0 | 0 | The paper discusses the pathophysiology of Alpha-1 antitrypsin deficiency and the role of p62/SQSTM1 in protein aggregation, not the pharmacokinetics or pharmacodynamics of the drug diastase. |
| popPK | Pinďáková_2017 | irrelevant | 0 | 0 | The study investigates the behavior and toxicity of silver nanoparticles, not the pharmacokinetics of diastase. |
| popPK | Prasad_2023 | irrelevant | 0 | 0 | The paper is an observational study on serum amylase and lipase levels in COVID-19 patients and does not report pharmacokinetic parameters for diastase. |
| popPK | Redman_2021 | irrelevant | 0 | 0 | The paper investigates the efficacy and safety of glycoside hydrolases (enzymes) for biofilm dispersal, not the pharmacokinetics of the drug diastase. |
| popPK | Remsberg_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gnetol, not diastase. |
| popPK | Rodriguez_2024 | irrelevant | 0 | 0 | The study is an in vitro digestion analysis of infant food ingredients (starch and protein) and does not involve the drug diastase or pharmacokinetic parameters. |
| popPK | Royapuram_2023 | irrelevant | 0 | 0 | The paper is an in-vitro study on the anti-diabetic activity of pomegranate peel extract-mediated strontium nanoparticles and does not involve the drug diastase or report any pharmacokinetic parameters. |
| popPK | Ruiz_1998 | irrelevant | 0 | 0 | The text is a general review of acute pancreatitis pathophysiology and management, containing no pharmacokinetic data or quantitative parameters for diastase. |
| popPK | Ruzik_2016 | irrelevant | 0 | 0 | The paper investigates the bioaccessibility of copper in Açaí berries using in vitro digestion models and does not study the pharmacokinetics of diastase. |
| popPK | Salgaonkar_2018 | irrelevant | 0 | 0 | The paper describes an in-vitro immobilization study of enzymes (alpha-amylase and glucoamylase) for starch hydrolysis, not a pharmacokinetic study of the drug diastase. |
| popPK | Sameeh_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro/in vivo antidiabetic activity of thiazolidinedione derivatives, not the pharmacokinetics of diastase. |
| popPK | Saokham_2017 | irrelevant | 0 | 0 | The paper is a review of gamma-cyclodextrin, not a pharmacokinetic study of diastase. |
| popPK | Seno_1995 | irrelevant | 0 | 0 | The study investigates serum levels of pancreatic enzymes (including amylase) as diagnostic markers in renal dysfunction, not the pharmacokinetics of diastase. |
| popPK | Sharma_2014 | irrelevant | 0 | 0 | The paper studies the immobilization and stability of alpha-amylase (an enzyme), not the pharmacokinetics of the drug diastase. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | The paper studies a polysaccharide (NAP-3) for hypoglycemic activity and does not involve the drug diastase or its pharmacokinetics. |
| popPK | Suthar_2024 | irrelevant | 0 | 0 | The paper describes the production and characterization of a microbial amylase enzyme for industrial use, not the pharmacokinetics of the drug diastase. |
| popPK | Tiarsa_2022 | irrelevant | 0 | 0 | The paper studies the immobilization and thermal stability of Aspergillus fumigatus α-amylase, not the pharmacokinetics of the drug diastase. |
| popPK | Tyagi_2023 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro evaluation of plumbagin-loaded niosomes, not the pharmacokinetics of diastase. |
| popPK | Vallinayaki_2024 | irrelevant | 0 | 0 | The paper investigates the antidiabetic and cytotoxic effects of strontium nanoparticles synthesized using Mimosa pudica, and does not involve the drug diastase or any pharmacokinetic parameters. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper is a microbiology study on probiotic Bacillus subtilis in eels and does not involve the drug diastase or pharmacokinetic parameters. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper characterizes microbial strains and their enzymatic/antioxidant activities in fermented products, containing no pharmacokinetic data for diastase. |
| popPK | Warshaw_1976 | irrelevant | 0 | 0 | The study investigates amylase isoenzymes and renal clearance in pancreatitis, not the pharmacokinetics of diastase. |
| popPK | Yandri_2022 | irrelevant | 0 | 0 | The paper studies the in-vitro stability and kinetics of immobilized alpha-amylase enzyme, not the pharmacokinetics of the drug diastase in a biological system. |
| popPK | Yeh_2003 | irrelevant | 0 | 0 | The study focuses on plasmapheresis for hyperlipidemic pancreatitis and does not report pharmacokinetic parameters for diastase. |
| popPK | Yu_2020 | irrelevant | 0 | 0 | The study investigates triglyceride-lowering therapies for acute pancreatitis and does not report pharmacokinetic parameters for diastase. |
| popPK | Zarei_2021 | irrelevant | 0 | 0 | The paper studies the synthesis and stability of nicotinamide riboside trioleate chloride (NRTOCl), not the drug diastase. |
| popPK | Zheng_2021 | irrelevant | 0 | 0 | The paper studies the environmental effect of alpha-amylase on soil bacteria and PFOS toxicity, not the pharmacokinetics of diastase. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper is a clinical study on hyperlipidemic acute pancreatitis and does not report pharmacokinetic parameters for the drug diastase. |
| popPK | da_2013 | irrelevant | 0 | 0 | The paper is a food science study on cashew apple nectar where "diastase" is mentioned only as a regulatory quality control parameter for honey, not as a drug subject to pharmacokinetic analysis. |
| PD | da_2013 | not_relevant | 0 | 0 | The paper evaluates antioxidant and mutagenic activities of a beverage; the mention of "diastase number" refers to a quality control parameter for honey, not a pharmacodynamic drug effect. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
