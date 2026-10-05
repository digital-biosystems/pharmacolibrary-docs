<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;sodium sulfate&quot;}]"></div>

# sodium sulfate

- **generic name:** sodium sulfate
- **ATC codes:** `A06AD13`, `A12CA02`
- **DrugBank:** [DB09472](https://go.drugbank.com/drugs/DB09472) · **PubChem:** [CID 24436](https://pubchem.ncbi.nlm.nih.gov/compound/24436)
- **molar mass:** 142.042 g/mol (Na2O4S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Sodium sulfate is used as an osmotically acting laxative for constipation and as a sodium-containing mineral supplement. It is an approved drug and also has veterinary approval, though it appears not to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q211737](https://www.wikidata.org/wiki/Q211737) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 17:13 | 11:42 | 0/0/0 | 0/0/0 | 0/0/0 | 396,626/14,970 | ollama / qwen3.8:27b-mtp-q8_0 | 30 | 6/48 | 29/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_sulfate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 162 matched, 101 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2019.pdf` | Chen P et al., Recovering sodium erythorbate from wast…, Water environment research… (2019) | pd | 4 | [10.1002/wer.1043](https://doi.org/10.1002/wer.1043) | [30740828](https://www.ncbi.nlm.nih.gov/pubmed/30740828) | metadata signals extractable PD data (concentrationeffect) |
| `Montañés_2024.pdf` | Montañés MT et al., Effect of the anode material, applied c…, Heliyon (2024) | pd | 4 | [10.1016/j.heliyon.2024.e27266](https://doi.org/10.1016/j.heliyon.2024.e27266) | [38449618](https://www.ncbi.nlm.nih.gov/pubmed/38449618) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T17:04:55.936391+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Assaggaf_2022 | irrelevant | 0 | 0 | The paper investigates the chemical composition and biological effects of Salvia officinalis essential oils and does not involve sodium sulfate or pharmacokinetic modeling. |
| PD | Assaggaf_2022 | not_relevant | 0 | 0 | The paper investigates the biological effects of Salvia officinalis essential oils, not sodium sulfate. |
| popPK | Ayodeji_2025 | irrelevant | 0 | 0 | The paper studies fluorescent androgen receptor inhibitors (ARi-FL) for prostate cancer imaging, not the pharmacokinetics of sodium sulfate. |
| PD | Ayodeji_2025 | not_relevant | 0 | 0 | The paper reports pharmacological binding affinities (IC50, Kd) for an androgen receptor imaging probe, not a pharmacodynamic exposure-response or dose-response relationship for sodium sulfate. |
| popPK | Azzarolo_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sodium-phosphate cotransport inhibition, and sodium sulfate is only mentioned as a non-protective control agent, not as the subject drug for PK analysis. |
| PD | Azzarolo_1991 | not_relevant | 0 | 0 | The paper reports an IC50 for H2-DIDS, not sodium sulfate; sodium sulfate is only mentioned as a non-protective agent in a qualitative context. |
| popPK | Aćimović_2022 | irrelevant | 0 | 0 | The paper analyzes the chemical composition and antimicrobial activity of plant essential oils and contains no pharmacokinetic data for sodium sulfate. |
| PD | Aćimović_2022 | not_relevant | 0 | 0 | The paper studies the antimicrobial activity of plant essential oils, not the pharmacodynamics of sodium sulfate. |
| PGx | Bär_2013 | not_relevant | 0 | 0 | The paper investigates the effect of mitochondrial gene polymorphisms on the severity of colitis induced by dextran sodium sulfate (a chemical irritant), not the pharmacokinetics or pharmacodynamics of sodium sulfate as a therapeutic drug. |
| popPK | Catto_2025 | irrelevant | 0 | 0 | The study focuses on the efficacy of netoglitazone in a mouse model of Alzheimer's disease and does not involve sodium sulfate or any pharmacokinetic analysis. |
| PD | Catto_2025 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent effects (low vs. high dose) on plaque count and size but does not provide numeric concentration-effect curves, Emax/EC50 parameters, or a formal PK/PD model fit. |
| PGx | Chapkin_2021 | not_relevant | 0 | 0 | The paper studies the mechanism of coffee's effect on DSS-induced colitis, not the pharmacokinetics or pharmacodynamics of sodium sulfate as a therapeutic drug. |
| popPK | Chen_2019 | irrelevant | 0 | 0 | The paper describes a chemical engineering process for recovering sodium erythorbate and sodium sulfate from wastewater, not a pharmacokinetic study. |
| PD | Chen_2019 | not_relevant | 0 | 0 | The paper describes a chemical engineering process for recovering sodium erythorbate and sodium sulfate from wastewater, not a pharmacodynamic or exposure-response study. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and metabolism of Sophora flavescens extract in rats, where sodium sulfate is only used as a component of the DSS disease model, not as the subject drug for PK analysis. |
| PD | Chen_2020 | not_relevant | 0 | 0 | The paper studies the effects of a Sophora flavescens extract, not sodium sulfate, and does not report any exposure-response or dose-response PD parameters for sodium sulfate. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper is an in-vitro screening study for SARS-CoV-2 Mpro inhibitors and does not report pharmacokinetic parameters for sodium sulfate. |
| PGx | Cheung_2011 | not_relevant | 0 | 0 | The paper studies the carcinogenic effects of PhIP and DSS in transgenic mice, not the pharmacokinetics or pharmacodynamics of sodium sulfate. |
| PGx | Danne_2024 | not_relevant | 0 | 0 | The paper investigates the role of the Card9 gene in DSS-induced colitis susceptibility and microbiota interactions, not the pharmacokinetics or pharmacodynamics of sodium sulfate as a therapeutic drug. |
| popPK | De_2025 | irrelevant | 0 | 0 | The paper describes the development of dual GPBAR1 and LIFR modulators for liver fibrosis and does not involve sodium sulfate or any pharmacokinetic parameters. |
| PD | De_2025 | not_relevant | 0 | 0 | The paper studies a novel estradienone derivative (compound 2o) for liver fibrosis and does not report any pharmacodynamic or exposure-response data for sodium sulfate. |
| popPK | Di_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and antimicrobial activity of menthol-based derivatives and does not involve sodium sulfate or pharmacokinetic modeling. |
| PD | Di_2026 | not_relevant | 0 | 0 | The paper studies menthol-based antimicrobials (MF1, MCl2) and does not report any pharmacodynamic or exposure-response data for sodium sulfate. |
| popPK | Guilloteau_2022 | irrelevant | 0 | 0 | The study investigates the toxicological effects of engineered nanoparticles on gut inflammation and microbiota, and does not report pharmacokinetic parameters for sodium sulfate. |
| PD | Guilloteau_2022 | not_relevant | 0 | 0 | The paper studies engineered nanoparticles (Ag, TiO2, Ti, SiO2) and mentions dextran sodium sulfate only as a model for inducing colitis, not as the subject of a pharmacodynamic or exposure-response analysis. |
| popPK | Han_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacological effects of astilbin on colorectal cancer and inflammation, and does not report any pharmacokinetic parameters for sodium sulfate. |
| popPK | Havelkova_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study of buparlisib (a PI3K inhibitor) and does not involve sodium sulfate or report any pharmacokinetic parameters. |
| popPK | Hou_2009 | irrelevant | 0 | 0 | The study is an electrochemical degradation experiment where sodium sulfate is used as a supporting electrolyte, not a pharmacokinetic study of the drug. |
| popPK | Hsueh_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on Pannexin 1 inhibitors for colitis and does not report pharmacokinetic parameters for sodium sulfate. |
| PGx | Hu_2014 | not_relevant | 0 | 0 | The paper investigates the mechanism of artemisinin in treating dextran sulfate sodium-induced colitis, not the pharmacokinetics or pharmacodynamics of sodium sulfate itself. |
| popPK | Hulpia_2025 | irrelevant | 0 | 0 | The paper focuses on PRMT5 inhibitors for colorectal cancer, and sodium sulfate is only mentioned as part of the dextran sodium sulfate (DSS) model for inducing colitis, not as the subject drug for PK analysis. |
| PD | Hulpia_2025 | not_relevant | 0 | 0 | The paper describes the discovery of PRMT5 inhibitors and their efficacy in a DSS-induced colitis model, but does not report a pharmacodynamic or exposure-response relationship for sodium sulfate itself. |
| popPK | Inganäs_2025 | irrelevant | 0 | 0 | The paper discusses the physicochemical properties and membrane interactions of PROTACs, not the pharmacokinetics of sodium sulfate. |
| PD | Inganäs_2025 | not_relevant | 0 | 0 | The paper analyzes the physicochemical properties and membrane interactions of PROTACs, not the pharmacodynamics of sodium sulfate. |
| popPK | Islam_1991 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on enzyme inhibition where sodium sulfate is used only as a negative control, not as a subject drug for pharmacokinetic analysis. |
| PD | Islam_1991 | not_relevant | 0 | 0 | The paper reports that sodium sulfate did not inhibit the enzyme up to 10 mM, providing no numeric PD parameters or dose-response relationship for sodium sulfate. |
| popPK | Iuga_2026 | irrelevant | 0 | 0 | The paper describes the design and synthesis of SARS-CoV-2 papain-like protease inhibitors and does not involve sodium sulfate or any pharmacokinetic studies. |
| PD | Iuga_2026 | not_relevant | 0 | 0 | The paper reports biochemical IC50 and antiviral EC50 values for SARS-CoV-2 PLpro inhibitors, but does not contain any data, analysis, or mention of sodium sulfate. |
| popPK | Jesudason_2026 | irrelevant | 0 | 0 | The paper studies SHIP1 ligands for Alzheimer's disease and does not involve sodium sulfate or its pharmacokinetics. |
| PD | Jesudason_2026 | not_relevant | 1 | 0 | The paper describes qualitative pharmacodynamic effects (gene expression, IL-1β levels) and target engagement but does not provide numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for sodium sulfate or the specific compound. |
| popPK | Jia_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of herbal compounds (albiflorin, paeoniflorin, etc.) in a DSS-induced ulcerative colitis model, where dextran sodium sulfate is used as a disease inducer, not as the subject drug for PK parameter extraction. |
| PD | Jia_2024 | not_relevant | 0 | 0 | The paper reports PK parameters for specific compounds in a traditional decoction and qualitative/semi-quantitative efficacy data, but does not report a pharmacodynamic model or numeric exposure-response/dose-response parameters (e.g., Emax, EC50) for sodium sulfate or any other agent. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The paper studies CB2 receptor agonists for colitis and uses dextran sodium sulfate (DSS) as a disease inducer, not sodium sulfate as a pharmacokinetic subject. |
| PD | Jiang_2025 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding potency (EC50) and qualitative in vivo efficacy in a DSS model, but does not report a pharmacokinetic-pharmacodynamic (PK/PD) or exposure-response relationship for sodium sulfate or the test compounds. |
| popPK | Johnson_2026 | irrelevant | 0 | 0 | The paper describes a dextran sodium sulfate (DSS) model for inflammatory bowel disease, not a pharmacokinetic study of sodium sulfate as a drug. |
| PGx | Kang_2020 | not_relevant | 0 | 0 | The paper investigates the role of the LACC1 gene in immune response and bacterial clearance, not the pharmacokinetics or pharmacodynamics of sodium sulfate. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paeonol and paeoniflorin from Moutan Cortex, not sodium sulfate. |
| PD | Kim_2025 | not_relevant | 2 | 1 | The paper reports PK parameters and qualitative dose-dependent effects (DAI, protein expression) but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Kirkpatrick_1977 | irrelevant | 0 | 0 | The paper describes radioimmunoassay methods for alpha-fetoprotein and mentions sodium sulfate only as a reagent for precipitation, not as a subject drug for pharmacokinetic analysis. |
| PD | Kirkpatrick_1977 | not_relevant | 0 | 0 | The paper describes an immunoassay method for alpha-fetoprotein and mentions sodium sulfate only as a precipitating agent in a different assay technique, not as a drug with a pharmacodynamic effect. |
| popPK | Kirschenbaum_2023 | irrelevant | 0 | 0 | The paper studies anti-amyloid therapies in mice and does not involve sodium sulfate pharmacokinetics. |
| PD | Kirschenbaum_2023 | not_relevant | 0 | 0 | The paper investigates the spatial and temporal efficacy of anti-Aβ therapies (antibodies, BACE1 inhibitors, polythiophenes) in mice but does not report any pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50) for sodium sulfate or any other drug. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper focuses on proteomic characterization of tau protein in neurodegenerative diseases and does not study the pharmacokinetics of sodium sulfate. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper is a proteomics study characterizing tau protein modifications in brain tissue and does not report any pharmacodynamic or exposure-response data for sodium sulfate. |
| PGx | Lahiri_2014 | not_relevant | 0 | 0 | The paper investigates the role of NOD2 variants in macrophage function and bacterial clearance, not the pharmacokinetics or pharmacodynamics of sodium sulfate. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper describes a chemical engineering process (bipolar membrane electrodialysis) for recovering NaOH from Na2SO4 wastewater, not a pharmacokinetic study of sodium sulfate as a drug. |
| PGx | Li_2014 | not_relevant | 0 | 0 | The paper investigates the role of the COMMD1 gene in inflammatory bowel disease and colitis, not the pharmacokinetics or pharmacodynamics of sodium sulfate. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The study investigates propylene glycol alginate sodium sulfate (PSS), a distinct polysaccharide formulation, rather than the drug sodium sulfate itself. |
| PD | Li_2018 | not_relevant | 2 | 1 | The paper reports PK parameters (bioavailability) and qualitative efficacy improvements but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of Brusatol in meningioma and does not involve sodium sulfate or pharmacokinetic parameters. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper investigates Brusatol, not sodium sulfate, and does not report any pharmacodynamic or exposure-response relationship for sodium sulfate. |
| popPK | Liang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Valeriana jatamansi components, not sodium sulfate, which is only mentioned as part of the DSS (dextran sodium sulfate) colitis model. |
| PD | Liang_2025 | not_relevant | 0 | 0 | The paper focuses on identifying active components of a herbal extract using PK and network pharmacology, but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for sodium sulfate or the identified compounds. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The paper describes the optimization of BMX kinase inhibitors and does not involve sodium sulfate or any pharmacokinetic parameters. |
| PD | Liang_2026 | not_relevant | 0 | 0 | The paper reports in vitro biochemical potency (IC50/EC50) and molecular modeling for kinase inhibitors, but does not contain any pharmacokinetic or pharmacodynamic (exposure-response) data for sodium sulfate or any other drug. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics and mechanism of p-Hydroxybenzaldehyde in a DSS-induced colitis model, not the pharmacokinetics of sodium sulfate. |
| PD | Liu_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of p-Hydroxybenzaldehyde, not sodium sulfate, and does not report any exposure-response or dose-response PD parameters. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on argininosuccinate synthetase 1 in colitis and does not report pharmacokinetic parameters for sodium sulfate. |
| PD | Liu_2025 | not_relevant | 0 | 0 | The paper investigates the role of arginine and ASS1 in colitis using DSS (dextran sulfate sodium) as a disease inducer, not sodium sulfate as a therapeutic agent, and does not report any pharmacodynamic exposure-response or dose-response parameters for sodium sulfate. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and metabolomics of Baitouweng decoction in a DSS-induced ulcerative colitis model, with no pharmacokinetic parameters reported for sodium sulfate. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper investigates a traditional Chinese medicine decoction (BTWD) and does not report any pharmacodynamic or exposure-response relationship for sodium sulfate. |
| popPK | Luca_2024 | irrelevant | 0 | 0 | The study focuses on ibuprofen delivery using decellularized macroalgae and does not involve sodium sulfate pharmacokinetics. |
| PD | Luca_2024 | not_relevant | 0 | 0 | The paper focuses on the material characterization of decellularized macroalgae hydrogels and ibuprofen release kinetics, containing no pharmacodynamic or exposure-response analysis for sodium sulfate. |
| PGx | Lévesque_2017 | not_relevant | 0 | 0 | The paper studies the effect of a gene variant on tumor growth in a model where DSS is used as a chemical inducer of colitis, not as a therapeutic drug, and does not report PK/PD parameters for sodium sulfate. |
| popPK | M_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and antioxidant activity of cyclic dipeptides, not the pharmacokinetics of sodium sulfate. |
| PD | M_2026 | not_relevant | 0 | 0 | The paper reports structure-activity relationships for synthetic cyclic dipeptides, not pharmacodynamic or exposure-response data for sodium sulfate. |
| popPK | Ma_2023 | irrelevant | 0 | 0 | The paper investigates the mechanism of Huangqin Tang in a colitis-associated cancer model and does not report pharmacokinetic parameters for sodium sulfate. |
| PD | Ma_2023 | not_relevant | 0 | 0 | The paper studies the effects of Huangqin tang (HQT) on colitis-associated colorectal cancer, not sodium sulfate; dextran sodium sulfate is only used as a model inducer, and no PD parameters for sodium sulfate are reported. |
| popPK | Maier_2025 | irrelevant | 0 | 0 | The paper focuses on machine learning models for monoclonal antibody purification and does not involve sodium sulfate pharmacokinetics. |
| PD | Maier_2025 | not_relevant | 0 | 0 | The paper describes a QSPR model for predicting monoclonal antibody purification process fit using machine learning and does not report any pharmacodynamic or exposure-response relationships for sodium sulfate. |
| PGx | Mao_2021 | not_relevant | 0 | 0 | The paper investigates the role of decorin deficiency in colon cancer metastasis using DSS as a chemical inducer of colitis, not as a therapeutic drug subject to pharmacogenomic analysis. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper describes the discovery of novel human constitutive androstane receptor (CAR) agonists and does not involve sodium sulfate or its pharmacokinetics. |
| popPK | Montañés_2024 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Montañés_2024 | not_relevant | 0 | 0 | The paper investigates the electrooxidation of atenolol and its toxicity, not the pharmacodynamics of sodium sulfate. |
| PGx | Morrison_2021 | not_relevant | 0 | 0 | The paper studies a plant extract's effects on cancer models and CYP enzymes, not the pharmacokinetics or pharmacodynamics of sodium sulfate. |
| PGx | Nakajima_2002 | not_relevant | 0 | 0 | The paper studies gene expression changes in a colitis model treated with a PPAR-gamma ligand, not the pharmacokinetics or pharmacodynamics of sodium sulfate. |
| popPK | Nasr_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro anticancer evaluation of thiazole-derived EGFR/CDK-2 inhibitors and does not involve sodium sulfate or any pharmacokinetic parameters. |
| PD | Nasr_2026 | not_relevant | 0 | 0 | The paper reports IC50 values for kinase inhibition (EGFR/CDK-2) and cellular activity, but does not report a pharmacodynamic (exposure-response) relationship for sodium sulfate. |
| popPK | Nourmandipour_2025 | irrelevant | 0 | 0 | The paper studies morphine derivatives for anti-nociceptive effects and does not report pharmacokinetic parameters for sodium sulfate. |
| popPK | Oancea_2017 | irrelevant | 0 | 0 | The paper studies thioguanine and mercaptopurine in colitis models and does not report pharmacokinetic parameters for sodium sulfate. |
| popPK | Olechno_2025 | irrelevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report pharmacokinetic parameters for sodium sulfate. |
| PD | Olechno_2025 | not_relevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report any pharmacodynamic or exposure-response data for sodium sulfate. |
| popPK | Paliwal_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the antimalarial compound 80/53, using sodium sulfate only as a reagent for sample preparation. |
| PGx | Ranjan_2021 | not_relevant | 0 | 0 | The paper investigates the ubiquitination of ATF6 by RNF186 in the context of the unfolded protein response and innate immunity, with no mention of sodium sulfate or its pharmacokinetics/pharmacodynamics. |
| popPK | Ravon_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of vancomycin and tetrahydrolipstatin, not sodium sulfate. |
| PD | Ravon_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and efficacy of vancomycin and tetrahydrolipstatin dry powders, with no mention of sodium sulfate or any pharmacodynamic modeling. |
| popPK | Ren_2024 | irrelevant | 0 | 0 | The paper studies the anticancer mechanism of hirsutine in colorectal cancer and does not report pharmacokinetic parameters for sodium sulfate. |
| popPK | Richard_2022 | irrelevant | 0 | 0 | The study investigates brown adipose tissue glucose uptake and microbiome changes in response to diet, with no pharmacokinetic data for sodium sulfate. |
| PD | Richard_2022 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of high-fructose diets on brown adipose tissue and does not report any pharmacodynamic or exposure-response relationship for sodium sulfate. |
| popPK | Sacco_2019 | irrelevant | 0 | 0 | The paper studies dextran sodium sulfate (DSS) as a chemical inducer of colitis in mice, not sodium sulfate as a pharmacokinetic subject, and contains no PK parameters. |
| PD | Sacco_2019 | not_relevant | 0 | 0 | The paper investigates the effect of a genetic knockout (COX-1 deletion) on DSS-induced colitis, not the pharmacodynamic relationship of sodium sulfate itself, and provides no numeric PD parameters for sodium sulfate. |
| PGx | Schäfer_2023 | not_relevant | 0 | 0 | The paper studies the effect of Alox15b gene variants on inflammation models (DSS colitis, paw edema) and eicosanoid levels, not the pharmacokinetics or pharmacodynamics of sodium sulfate. |
| PGx | Sliva_2012 | not_relevant | 0 | 0 | The paper studies the chemopreventive effects of a mushroom extract on colitis-associated carcinogenesis in mice and does not report pharmacogenomic effects on the PK/PD of sodium sulfate. |
| popPK | Sládeková_2025 | irrelevant | 0 | 0 | The study investigates the drug FKK6 in a mouse model where dextran sodium sulfate (DSS) is used as a disease inducer, not as the subject drug for pharmacokinetic analysis. |
| PD | Sládeková_2025 | not_relevant | 0 | 0 | The paper studies FKK6 in a DSS-induced cancer model; DSS is the disease inducer, not the drug of interest, and no exposure-response or PD parameters are reported for sodium sulfate. |
| popPK | Sorucu_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of enrofloxacin and ciprofloxacin, using sodium sulfate only as a reagent for sample preparation (protein precipitation/partitioning), not as the subject drug. |
| PD | Sorucu_2025 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters (AUC, T1/2) for enrofloxacin and ciprofloxacin, not pharmacodynamic or exposure-response relationships for sodium sulfate (which is used only as a reagent). |
| popPK | Teng_2025 | irrelevant | 0 | 0 | The paper focuses on nanomedicine delivery of a PAR2 antagonist (AZ3451) for analgesia and does not report pharmacokinetic parameters for sodium sulfate. |
| PD | Teng_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of a PAR2 antagonist (AZ3451) delivered via nanoparticles, not sodium sulfate; no exposure-response or dose-response data for sodium sulfate is reported. |
| popPK | Thomas_2026 | irrelevant | 0 | 0 | The paper describes a gold-based PROTAC for protein degradation in cell culture and does not involve sodium sulfate or pharmacokinetic parameters. |
| PD | Thomas_2026 | not_relevant | 0 | 0 | The paper studies a gold-based PROTAC (AuPROTAC) and does not mention or analyze sodium sulfate. |
| PGx | Tise_2016 | not_relevant | 0 | 0 | The paper reports genetic associations with endogenous serum sulfate levels and liver enzymes, not the pharmacokinetics or pharmacodynamics of the drug sodium sulfate. |
| PGx | Tise_2017 | not_relevant | 0 | 0 | The paper investigates the effect of SLC13A1 variants on endogenous DHEA and testosterone levels, not the pharmacokinetics or pharmacodynamics of the drug sodium sulfate. |
| PGx | Tschurtschenthaler_2017 | not_relevant | 0 | 0 | The paper investigates the role of ATG16L1 and IRE1α in Crohn's disease pathogenesis and does not report pharmacokinetic or pharmacodynamic effects of sodium sulfate. |
| popPK | Uehara_2022 | irrelevant | 0 | 0 | The paper studies the immunological effects of 2-deoxy-d-glucose and dextran sodium sulfate (a colitis inducer), not the pharmacokinetics of sodium sulfate. |
| PD | Uehara_2022 | not_relevant | 0 | 0 | The paper studies 2-deoxy-D-glucose (2-DG), not sodium sulfate, and reports qualitative or binary dose effects without numeric PD parameters like Emax or EC50. |
| popPK | Vien_2022 | irrelevant | 0 | 0 | The paper is a natural product chemistry study focusing on the isolation and cytotoxicity of sulfated pigments, not a pharmacokinetic study of sodium sulfate. |
| PD | Vien_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for isolated natural products (sulfated naphthopyrones/anthraquinones) in cell lines, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) relationship for the drug sodium sulfate. |
| PGx | Vázquez-Arreguín_2019 | not_relevant | 0 | 0 | The paper investigates the role of the transcription factor Oct1 in colon regeneration and cancer models, not the pharmacokinetics or pharmacodynamics of sodium sulfate. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study reports ecotoxicity endpoints (EC50/EC20) for freshwater organisms, not pharmacokinetic parameters for sodium sulfate. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of grape seed proanthocyanidin extract (GSPE) components, not sodium sulfate, which is only used as a disease inducer (DSS). |
| PD | Wang_2022 | not_relevant | 3 | 1 | The paper reports qualitative dose-dependent effects and PK parameters for GSPE components, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response model for sodium sulfate. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper studies a Chinese herbal medicine for ulcerative colitis and does not report pharmacogenomic effects on the PK/PD of sodium sulfate. |
| popPK | Wang_2024_2 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanism of Frankincense essential oil in a dextran sodium sulfate (DSS)-induced colitis model, not the pharmacokinetics of sodium sulfate. |
| PD | Wang_2024_2 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Frankincense essential oil in a DSS-induced colitis model, not the pharmacodynamics of sodium sulfate itself, and does not report any exposure-response or dose-response parameters for sodium sulfate. |
| popPK | Widiandani_2026 | irrelevant | 0 | 0 | The paper studies pinostrobin pentanoate in breast cancer cells and does not involve sodium sulfate or pharmacokinetic parameters. |
| PD | Widiandani_2026 | not_relevant | 0 | 0 | The paper reports IC50 values for pinostrobin pentanoate, not sodium sulfate. |
| popPK | Włodarczyk_2025 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of peptide KR-12 in a cancer model where dextran sodium sulfate is used only as a disease inducer, not as the subject drug for PK analysis. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper is a review of flavonoids in digestive diseases and does not contain any pharmacokinetic data for sodium sulfate. |
| PD | Xu_2025 | not_relevant | 0 | 0 | The paper is a review of flavonoids in digestive diseases and does not mention sodium sulfate or report any pharmacodynamic parameters. |
| popPK | Yan_2023 | irrelevant | 0 | 0 | The study focuses on azathioprine and its metabolite 6-mercaptopurine, not sodium sulfate. |
| PD | Yan_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of azathioprine therapy failure via gut microbiota (Blautia wexlerae) and does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for sodium sulfate or azathioprine. |
| popPK | Yang_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a monoclonal antibody (8C2) in mice, using dextran sodium sulfate (DSS) only as an inducer of colitis, not as the subject drug. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper is an in-vitro study on alginate derivatives against SARS-CoV-2 and does not report pharmacokinetic parameters for sodium sulfate. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The paper studies theophylline disposition in a colitis model, not sodium_sulfate. |
| PGx | Zhang_2015 | not_relevant | 0 | 0 | The paper studies the mechanism of Tanshinone IIA in treating IBD using DSS as a disease inducer, not the pharmacokinetics or pharmacodynamics of sodium sulfate itself. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper focuses on the isolation and anti-inflammatory efficacy of physalin steroids, and sodium sulfate is only mentioned as part of the dextran sodium sulfate (DSS) reagent used to induce colitis in the animal model, not as a subject drug for PK analysis. |
| popPK | Zheng_2019 | irrelevant | 0 | 0 | The paper studies the anti-inflammatory and anti-cancer effects of HCD in an IBD model where dextran sodium sulfate (DSS) is used only as an inducer, not as the subject drug for pharmacokinetic analysis. |
| PD | Zheng_2019 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of HCD (a clerodane diterpene), not sodium sulfate (which is only used as DSS for disease induction). |
| popPK | Zhu_2022 | irrelevant | 0 | 0 | The paper studies triterpenoids from Pseudolarix amabilis and uses dextran sodium sulfate (DSS) only as a disease model inducer, not as the subject drug for pharmacokinetic analysis. |
| PD | Zhu_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for triterpenoids, not sodium sulfate, and the mention of sodium sulfate is only as part of the DSS (dextran sodium sulfate) disease model name, not as a drug with a PD relationship. |
| popPK | Zhu_2022_2 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and metabolomics of Tanshinone IIA in a dextran sodium sulfate-induced colitis model, not the pharmacokinetics of sodium sulfate. |
| PD | Zhu_2022_2 | not_relevant | 1 | 0 | The paper reports qualitative improvements in disease activity and cytokine levels for Tanshinone IIA but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (e.g., EC50, Emax) for sodium sulfate or the drug. |
| popPK | Zigmond_2014 | irrelevant | 0 | 0 | The study investigates the therapeutic effect of light therapy on dextran-sodium-sulfate (DSS) induced colitis, where DSS is a chemical inducer of disease, not a drug subject to pharmacokinetic analysis. |
| PD | Zigmond_2014 | not_relevant | 0 | 0 | The paper studies the effect of light therapy on DSS-induced colitis; DSS is the disease inducer, not the drug being evaluated for pharmacodynamics, and no PD parameters for sodium sulfate are reported. |
| popPK | de-Carvalho_2022 | irrelevant | 0 | 0 | The paper is an ecotoxicology study assessing embryotoxicity in snails and does not report pharmacokinetic parameters for sodium sulfate. |
| PD | de-Carvalho_2022 | not_relevant | 0 | 0 | The paper reports ecotoxicological concentration-response data (LC50/EC50) for various chemicals in a snail assay, but does not report pharmacodynamic parameters for sodium sulfate. |
| popPK | van_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for paclitaxel, not sodium sulfate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
