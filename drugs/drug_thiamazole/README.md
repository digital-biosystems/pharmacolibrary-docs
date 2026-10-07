<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03B&quot;,&quot;href&quot;:&quot;atc/H03B.md&quot;},{&quot;label&quot;:&quot;thiamazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Thiamazole_Kharouba2025_reference&quot;,&quot;label&quot;:&quot;Kharouba_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_thiamazole/Thiamazole_Kharouba2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# thiamazole

- **generic name:** thiamazole
- **ATC codes:** `H03BB02`
- **DrugBank:** [DB00763](https://go.drugbank.com/drugs/DB00763) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Thiamazole (methimazole) is an antithyroid medicine used to treat hyperthyroidism, goiter, and thyroid crisis. It is an approved drug and remains in use as a systemic antithyroid preparation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419663](https://www.wikidata.org/wiki/Q419663) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methimazole (thiamazole) | parent | 114.166 | C4H6N2S | PubChem | [1349907](https://pubchem.ncbi.nlm.nih.gov/compound/1349907) | Okamura_1986 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:02 | 13:13 | 1/1/0 | 0/0/0 | 0/0/0 | 477,545/17,825 | einfracz / qwen3.8-27b | 18 | 2/14 | 18/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kharouba_2025_reference](drugs/drug_thiamazole/Thiamazole_Kharouba2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kharouba M et al., The Impact of Augmented Renal Clearance…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70007](https://doi.org/10.1002/jcph.70007) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Okamura_1986_reference](drugs/drug_thiamazole/Thiamazole_Okamura1986_reference.md) | — | 1-compartment (no model) | 0 | Okamura Y et al., Pharmacokinetics of methimazole in norm…, Endocrinologia japonica (1986) | [10.1507/endocrj1954.33.605](https://doi.org/10.1507/endocrj1954.33.605) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=thiamazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2A6` inhibitor, `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor, `FMO3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TPO (inhibitor), TPO (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 690 matched, 82 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Syrenicz_1991.pdf` | Syrenicz A et al., [Comparison of thiamazole pharmacokinet…, Polski tygodnik lekarski (W… (1991) | popPK | 9 | not captured | [1669174](https://pubmed.ncbi.nlm.nih.gov/1669174) | The paper reports a pharmacokinetic study of thiamazole in humans using a one-compartment model, but the specific numeric parameter values are not provided in the evidence. |
| `Leonard_2016.pdf` | Leonard JA et al., Estimating Margin of Exposure to Thyroi…, Toxicological sciences : an… (2016) | pd | 5 | [10.1093/toxsci/kfw022](https://doi.org/10.1093/toxsci/kfw022) | [26865668](https://www.ncbi.nlm.nih.gov/pubmed/26865668) | metadata signals extractable PD data (PharmacodynamicModel) |
| `Chin_1992.pdf` | Chin JP et al., Classification of the beta-adrenoceptor…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90330-7](https://doi.org/10.1016/0014-2999(92)90330-7) | [1350995](https://www.ncbi.nlm.nih.gov/pubmed/1350995) | metadata signals extractable PD data (IC50) |
| `Lagorce_1997.pdf` | Lagorce JF et al., Anti-inflammatory action of methimazole, Pharmacology (1997) | pd | 4 | [10.1159/000139525](https://doi.org/10.1159/000139525) | [9396076](https://www.ncbi.nlm.nih.gov/pubmed/9396076) | metadata signals extractable PD data (IC50) |
| `Störmer_2000.pdf` | Störmer E et al., Cytochrome P-450 enzymes and FMO3 contr…, Psychopharmacology (2000) | pgx | 8 | [10.1007/s002130000489](https://doi.org/10.1007/s002130000489) | [11026737](https://www.ncbi.nlm.nih.gov/pubmed/11026737) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mushiroda_2000.pdf` | Mushiroda T et al., The involvement of flavin-containing mo…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10997945](https://www.ncbi.nlm.nih.gov/pubmed/10997945) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Xie_2021.pdf` | Xie Y et al., Metabolic Retroversion of Piperaquine (…, Drug metabolism and disposi… (2021) | pgx | 7 | [10.1124/dmd.120.000306](https://doi.org/10.1124/dmd.120.000306) | [33674271](https://www.ncbi.nlm.nih.gov/pubmed/33674271) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Nnane_2003.pdf` | Nnane IP et al., Involvement of cytochrome P450 and the…, Life sciences (2003) | pgx | 5 | [10.1016/s0024-3205(03)00290-x](https://doi.org/10.1016/s0024-3205(03)00290-x) | [12757843](https://www.ncbi.nlm.nih.gov/pubmed/12757843) | metadata signals extractable PGX data (CYP450) |

<sub>queue written 2026-10-07T09:58:38.357079+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alshabeeb_2022 | not_relevant | 0 | 0 | The paper investigates DILI susceptibility to flucloxacillin and co-amoxiclav, not the pharmacokinetics or pharmacodynamics of thiamazole. |
| PGx | Chen_2019 | not_relevant | 2 | 10 | The paper reports associations between HLA genotypes and the adverse event of agranulocytosis, which is a toxicity outcome rather than a change in a pharmacokinetic (e.g., AUC, clearance) or pharmacodynamic (e.g., receptor affinity, concentration-response) parameter of the drug's primary action. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic models for antibody-drug conjugates (ADCs) and does not mention thiamazole or provide any data for it. |
| popPK | Codea_2026 | irrelevant | 0 | 0 | The study is a longitudinal clinical trial in cats focusing on haematological markers as surrogate indicators of thyroid status during methimazole therapy; it contains no pharmacokinetic modeling or quantitative PK parameters (CL, V, t1/2) for thiamazole. |
| PGx | Dolphin_2000 | not_relevant | 0 | 0 | The paper discusses FMO3 mutations and their impact on methimazole S-oxidation, not thiamazole. |
| popPK | Dunkelmann_2007 | irrelevant | 1 | 0 | The study investigates the kinetics of radioiodine in the thyroid and the effect of thiamazole on that process, rather than measuring the pharmacokinetic parameters of thiamazole itself. |
| popPK | Esmaeili_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and viral dynamics of nirmatrelvir (a SARS-CoV-2 antiviral), not thiamazole. |
| popPK | Fetter_2015 | irrelevant | 0 | 0 | This is a toxicology study on zebrafish embryos measuring goitrogenic effects (gene expression/malformations), not a pharmacokinetic study with disposition parameters. |
| PGx | Gao_2016 | not_relevant | 2 | 0 | The paper discusses the structural modeling and drug binding mechanisms of hFMO3 with methimazole (a thionamide related to thiamazole), but it is a structural bioinformatics study and does not report human pharmacogenomic data linking specific genotypes to measured pharmacokinetic or pharmacodynamic parameters. |
| PGx | Guo_1997 | not_relevant | 0 | 0 | The study investigates drug-drug interaction (enzyme inhibition) in vitro and does not report on pharmacogenomic variants affecting thiamazole (methimazole) PK or PD. |
| popPK | Hanada_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cisplatin, and thiamazole is not the subject drug (methimazole is a different thionamide compound and serves as a protective agent in this context). |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper describes a method for generating initial estimates for PK models using various drugs (e.g., cefaclor, ceftriaxone) as test cases, but thiamazole is not the subject of the study. |
| PGx | Hugonnard_2004 | not_relevant | 0 | 0 | The paper studies the metabolism of methimazole (not thiamazole) and does not report PK/PD parameters for thiamazole. |
| PGx | Jin_2019 | not_relevant | 0 | 0 | The study investigates the association between SLCO1B1 genotypes and susceptibility to adverse drug reactions (DILI), but does not report changes in pharmacokinetic (PK) or pharmacodynamic (PD) parameters of thiamazole. |
| popPK | Ju_2024 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic review of isoniazid (an anti-tuberculosis drug), not thiamazole (an antithyroid drug). |
| popPK | Kharouba_2025 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of levetiracetam, not thiamazole. |
| popPK | Khorshidi-Behzadi_2013 | irrelevant | 0 | 0 | This is a vascular physiology study investigating the effects of methimazole (a thiamazole isomer) on arterial reactivity in rats, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Kousba_2007 | not_relevant | 0 | 0 | The paper investigates the metabolism of the Src kinase inhibitor TG100435, not thiamazole. |
| PGx | Krueger_2005 | not_relevant | 0 | 0 | The study analyzes FMO2 polymorphisms and their effect on substrate oxidation (methimazole), but does not report pharmacokinetic or pharmacodynamic parameters for thiamazole in humans. |
| PGx | Lattard_2003 | not_relevant | 2 | 5 | The study investigates the metabolism of methimazole (a thionamide) by FMO3 variants, not thiamazole, and reports in vitro catalytic efficiency rather than in vivo PK/PD parameters for the specific drug inquired about. |
| popPK | Leonard_2016 | irrelevant | 0 | 0 | The study focuses on PBPK modeling for other TPO inhibitors (methimazole, PTU, etc.) and does not report pharmacokinetic parameters for thiamazole. |
| PGx | Li_2008 | not_relevant | 0 | 0 | The study examines the association between the Fas gene polymorphism and the clinical response to methimazole, finding no association; it does not report any changes in pharmacokinetic parameters (e.g., AUC, clearance) or specific pharmacodynamic effect sizes (e.g., IC50) driven by the gene. |
| PGx | Li_2020 | not_relevant | 3 | 2 | The paper investigates the mechanism of adverse drug reactions (hepatotoxicity) and identifies a genetic determinant (UGT1A1*6), but it does not report quantitative changes in standard pharmacokinetic parameters (e.g., clearance, half-life, Cmax) or primary pharmacodynamic parameters (e.g., TSH, T3/T4 levels) due to genotype. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a systematic review of the pharmacokinetics of anakinra (an IL-1 receptor antagonist), not thiamazole. |
| popPK | Mi_2026 | irrelevant | 0 | 0 | The paper is a database curation and machine learning study regarding nanoparticles in mice, not a pharmacokinetic study of the drug thiamazole. |
| popPK | Mortimer_1997 | irrelevant | 2 | 8 | The study reports placental transfer clearances (in vitro/ex vivo model) for methimazole rather than systemic population pharmacokinetic parameters (V, t1/2, etc.). |
| PGx | Mostyn_2008 | not_relevant | 0 | 0 | The paper uses methimazole as a general antithyroid agent to modulate thyroid levels for a physiological study on uncoupling proteins in pigs, rather than investigating pharmacogenomic effects on thiamazole's own PK/PD. |
| popPK | Mukker_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the ATR inhibitor tuvusertib, not for thiamazole. |
| PGx | Mushiroda_2000 | not_relevant | 0 | 0 | The study investigates the metabolism of itopride and drug interactions with CYP3A4 inhibitors, not the pharmacogenomics of thiamazole. |
| popPK | Newcomer_1978 | irrelevant | 0 | 0 | The study investigates iodine transport in chickens using methimazole (a thiamazole analog) as an inhibitor, not the pharmacokinetics of thiamazole itself. |
| PGx | Nguyen_2019 | not_relevant | 0 | 0 | The paper describes a pharmacogenomic effect on the pharmacokinetics of ethionamide, not thiamazole. |
| PGx | Nnane_2003 | not_relevant | 0 | 0 | The paper investigates the metabolism of simple sulphides and the inhibitory effect of methimazole, a chemical precursor to thiamazole, but does not report any pharmacogenomic effects on thiamazole PK/PD parameters. |
| popPK | Ortega_2005 | irrelevant | 0 | 0 | The study investigates vascular reactivity and nitric oxide mechanisms in thyroid arteries ex vivo, not the pharmacokinetics of thiamazole. |
| PGx | Pike_2001 | not_relevant | 0 | 0 | The paper studies the metabolism of a disulfiram metabolite (MeDDC) by FMO1 in the kidney, which is a different compound and metabolic pathway than thiamazole (methimazole), although methimazole is used only as an inhibitor probe in the study. |
| PGx | Prueksaritanont_2000 | not_relevant | 0 | 0 | The paper investigates the metabolism of L-775,606, not thiamazole. |
| PGx | Ramsbottom_2020 | not_relevant | 1 | 5 | The paper investigates the structural mechanism of HLA-mediated adverse drug reactions (agranulocytosis) using molecular docking, not pharmacokinetic or pharmacodynamic parameter changes caused by gene variants. |
| PGx | Rawden_2000 | not_relevant | 0 | 0 | The paper investigates the metabolism of albendazole, not thiamazole. |
| popPK | Rocmans_1977 | irrelevant | 0 | 0 | The study investigates iodide transport in dog thyroid slices and does not report pharmacokinetic parameters for thiamazole. |
| popPK | Rodallec_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paclitaxel and its polymer prodrug in mice, not thiamazole. |
| PGx | Siddens_2008 | not_relevant | 0 | 0 | The paper focuses on FMO enzyme expression in mice and the metabolism of methimazole (a different drug), not thiamazole, and does not report human pharmacogenomic effects. |
| PGx | Störmer_2000 | not_relevant | 0 | 0 | The study investigates the metabolism of perazine, not thiamazole. |
| popPK | Syrenicz_1991 | relevant | 9 | 0 | The paper reports a pharmacokinetic study of thiamazole in humans using a one-compartment model, but the specific numeric parameter values are not provided in the evidence. |
| PGx | Taniguchi-Takizawa_2015 | not_relevant | 0 | 0 | The paper studies benzydamine metabolism, not thiamazole. |
| PGx | Uehara_2015 | not_relevant | 0 | 0 | The paper studies MPTP metabolism and explicitly tests methimazole (a structural isomer of thiamazole) as a pharmacological inhibitor, not the effect of genetic variants on thiamazole pharmacokinetics or pharmacodynamics. |
| PGx | Uno_2019 | not_relevant | 1 | 5 | The paper investigates methimazole metabolism in cynomolgus macaques, not thiamazole in humans. |
| PGx | Wang_2012 | not_relevant | 0 | 0 | The paper investigates trimethylamine (TMA) metabolism in laying hens, not the pharmacokinetics or pharmacodynamics of thiamazole in humans. |
| PGx | Wolford_2012 | not_relevant | 0 | 0 | The paper discusses levamisole-induced agranulocytosis and only mentions thiamazole (as methimazole) in a comparative list of drugs associated with blood dyscrasias, without providing any pharmacogenomic data or PK/PD parameter analysis for thiamazole. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for linezolid, not thiamazole. |
| PGx | Wynalda_2003 | not_relevant | 0 | 0 | The paper investigates the in vitro metabolism of clindamycin (a different drug), not thiamazole. |
| PGx | Xie_2021 | not_relevant | 0 | 0 | The paper focuses on Piperaquine, not thiamazole. |
| PGx | van_2011 | not_relevant | 0 | 0 | The study focuses on irinotecan pharmacokinetics and does not report on the pharmacokinetics or pharmacodynamics of thiamazole. |
| popPK | van_2013 | irrelevant | 0 | 0 | The study investigates the teratogenic effects of propylthiouracil and methimazole in Xenopus embryos, not the pharmacokinetics of thiamazole. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:58 UTC</sub>
