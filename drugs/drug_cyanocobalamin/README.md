# cyanocobalamin

- **generic name:** cyanocobalamin
- **ATC codes:** `B03BA01`
- **DrugBank:** [DB00115](https://go.drugbank.com/drugs/DB00115)
- **groups:** approved, investigational, nutraceutical

## About

**Description.** Cyanocobalamin (commonly known as Vitamin B12) is a highly complex, essential vitamin, owing its name to the fact that it contains the mineral, cobalt. This vitamin is produced naturally by bacteria [A175276], and is necessary for DNA synthesis and cellular energy production. Vitamin B12 has many forms, including the cyano-, methyl-, deoxyadenosyl- and hydroxy-cobalamin forms. The _cyano_ form, is the most widely used form in supplements and prescription drugs [A175255], [FDA label].  Several pharmaceutical forms of cyanocobalamin have been developed, including the tablet, injection, and nasal spray forms [FDA label], [L5542], [L5545].  This drug was initially approved by the FDA in 1942 [FDA label].

**Indication.** **Nasal spray**

The cyanocobalamin nasal spray is indicated for the maintenance of vitamin B12 concentrations after normalization with intramuscular vitamin B12 therapy in patients with deficiency of this vitamin who have no nervous system involvement [FDA label].

Note:  CaloMist [FDA label], the nasal spray form, has not been evaluated for the treatment of newly diagnosed vitamin B12 deficiency.

**Injection forms (subcutaneous, intramuscular)**

These forms are indicated for vitamin B12 deficiencies due to various causes, with or without neurologic manifestations [F3736].  Vitamin B12 deficiency is frequently caused by malabsorption, which is often associated with the following conditions [L5545]:

Addisonian (pernicious) anemia

Gastrointestinal pathology, dysfunction, or surgery, including gluten enteropathy or sprue, small bowel bacterial overgrowth, total or partial gastrectomy

Fish tapeworm infestation

Malignancy of the pancreas or bowel

Folic acid deficiency


**Oral forms**

Vitamin B12 supplements are widely available and indicated in patients who require supplementation for various reasons.  Dose requirements for vitamin B12 which are higher than normal (caused by pregnancy, thyrotoxicosis, hemolytic anemia, hemorrhage, malignancy, hepatic and renal disease) can usually be achieved with oral supplementation [L5545].   Oral products of vitamin B12 are not recommended in patients with malabsorption, as these forms are primarily absorbed in the gastrointestinal tract [F3739].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 12:41 | 5:31 | 0/1/0 | 0/0/0 | 0/0/0 | 41,857/1,788 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/0 | 5/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Nava-Ocampo_2005](drugs/drug_cyanocobalamin/Cyanocobalamin_NavaOcampo2005_reference.md) | Nava-Ocampo AA et al., Pharmacokinetics of high doses of cyano…, Clinical and experimental p… (2005) | [10.1111/j.1440-1681.2005.04145.x](https://doi.org/10.1111/j.1440-1681.2005.04145.x) |

## Coverage

- **PubMed hits:** 25 matched, 24 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nava-Ocampo_2005.pdf` | Nava-Ocampo AA et al., Pharmacokinetics of high doses of cyano…, Clinical and experimental p… (2005) | popPK | 10 | [10.1111/j.1440-1681.2005.04145.x](https://doi.org/10.1111/j.1440-1681.2005.04145.x) | [15730428](https://pubmed.ncbi.nlm.nih.gov/15730428) | The study reports quantitative PK parameters (half-life, clearance, volume of distribution) for cyanocobalamin in rats, with specific numeric ranges provided in the abstract. |
| `Sivadas_2025.pdf` | Sivadas A et al., Novel genetic variants associated with…, The American journal of cli… (2025) | popPK | 9 | [10.1016/j.ajcnut.2025.08.005](https://doi.org/10.1016/j.ajcnut.2025.08.005) | [40840787](https://pubmed.ncbi.nlm.nih.gov/40840787) | The study explicitly uses a 2-compartment pharmacokinetic model for cyanocobalamin, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| `Devi_2020.pdf` | Devi S et al., Measuring vitamin B-12 bioavailability…, The American journal of cli… (2020) | popPK | 8 | [10.1093/ajcn/nqaa221](https://doi.org/10.1093/ajcn/nqaa221) | [32844171](https://pubmed.ncbi.nlm.nih.gov/32844171) | The study reports a 2-compartment model for cyanocobalamin plasma appearance, but specific numeric PK parameters (CL, V, ka) are not provided in the text, only bioavailability percentages. |
| `Kurpad_2023.pdf` | Kurpad AV et al., Bioavailability and daily requirement o…, The American journal of cli… (2023) | popPK | 8 | [10.1016/j.ajcnut.2023.08.020](https://doi.org/10.1016/j.ajcnut.2023.08.020) | [38044024](https://pubmed.ncbi.nlm.nih.gov/38044024) | The study reports bioavailability and excretion rates using a 2-compartment model, but specific PK parameters like clearance (CL) or volume (V) are not explicitly listed in the provided text. |
| `Egler_2023.pdf` | Egler SG et al., Acute toxicity of single and combined r…, Ecotoxicology and environme… (2023) | pd | 5 | [10.1016/j.ecoenv.2023.114538](https://doi.org/10.1016/j.ecoenv.2023.114538) | [36652740](https://www.ncbi.nlm.nih.gov/pubmed/36652740) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-06T12:39:51.809050+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ackermann_2010 | not_relevant | 0 | 0 | The paper reports a clinical case of methotrexate toxicity and treatment with cyanocobalamin, but does not report a pharmacogenomic effect on the PK or PD parameters of cyanocobalamin itself. |
| PGx | Corghi_2002 | not_relevant | 2 | 5 | The paper reports the effect of MTHFR genotype on homocysteine levels (a biomarker/PD parameter of the metabolic pathway) and the effect of B12 supplementation on homocysteine, but it does not report a pharmacogenomic effect on the PK or PD parameters of cyanocobalamin itself (e.g., B12 clearance or B12 concentration response to genotype). |
| popPK | Devi_2020 | relevant | 8 | 2 | The study reports a 2-compartment model for cyanocobalamin plasma appearance, but specific numeric PK parameters (CL, V, ka) are not provided in the text, only bioavailability percentages. |
| PGx | Dierkes_1999 | not_relevant | 3 | 5 | The paper reports a trend suggesting MTHFR genotype influences the PD response (homocysteine reduction) to cyanocobalamin, but it does not provide a fitted quantitative effect size or definitive pharmacogenomic parameter estimation. |
| popPK | Egler_2023 | irrelevant | 0 | 0 | The study focuses on the acute toxicity of rare earth elements in Daphnia, using cyanocobalamin only as a chelator in the assay medium, and reports no pharmacokinetic parameters for cyanocobalamin. |
| PD | Egler_2023 | not_relevant | 0 | 0 | The paper studies the acute toxicity of rare earth elements (La, Nd, Sm) on Daphnia similis; cyanocobalamin is only mentioned as a chelator in the assay medium, and no pharmacodynamic or exposure-response relationship for cyanocobalamin is reported. |
| PGx | Ferrazzi_2005 | not_relevant | 0 | 0 | The paper investigates the association between MTHFR genotype and homocysteine levels in retinal vein occlusion patients, but does not report pharmacokinetic or pharmacodynamic parameters of cyanocobalamin (Vitamin B12) administration. |
| PGx | Fofou-Caillierez_2013 | not_relevant | 2 | 5 | The paper describes a rare inherited metabolic disorder (cblG-variant) affecting the intracellular processing of cyanocobalamin, rather than a pharmacogenomic effect on the PK/PD of cyanocobalamin as a therapeutic drug in a general population. |
| PGx | Gherasim_2013 | not_relevant | 0 | 0 | The paper describes the molecular mechanism of intracellular cobalamin trafficking and protein-protein interactions in inborn errors of metabolism, not the pharmacokinetics or pharmacodynamics of exogenous cyanocobalamin administration. |
| PGx | Hannah-Shmouni_2018 | not_relevant | 2 | 5 | The paper reports clinical outcomes and biochemical normalization in patients with a genetic defect, but does not quantify specific pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, EC50) of cyanocobalamin. |
| PGx | Kaur_2021 | not_relevant | 0 | 0 | The paper discusses folic acid as a placebo in hydroxychloroquine trials and mentions cyanocobalamin only as a component of a combination therapy for clinical cure, without reporting any pharmacogenomic effects on PK or PD parameters of cyanocobalamin. |
| popPK | Kurpad_2023 | relevant | 8 | 3 | The study reports bioavailability and excretion rates using a 2-compartment model, but specific PK parameters like clearance (CL) or volume (V) are not explicitly listed in the provided text. |
| PGx | Lanska_2010 | not_relevant | 0 | 0 | The text is a historical review of B vitamin deficiency disorders and does not report pharmacogenomic effects on the PK or PD of cyanocobalamin. |
| PGx | Lioudyno_2024 | not_relevant | 0 | 0 | The paper reports associations between folate cycle gene polymorphisms and baseline blood levels of Vitamin B12 (cyanocobalamin) in MS patients, but does not report a pharmacokinetic or pharmacodynamic effect of a drug intervention. |
| PGx | Longo_2026 | not_relevant | 0 | 0 | The paper investigates the structural and thermodynamic effects of the MMACHC R161Q mutation on protein stability and oligomerization, not pharmacokinetic or pharmacodynamic parameters of cyanocobalamin. |
| PGx | Paul_2017 | not_relevant | 2 | 0 | The paper is a narrative review discussing general B12 forms and genetic polymorphisms qualitatively, without reporting specific quantitative pharmacokinetic or pharmacodynamic effect sizes for cyanocobalamin. |
| PGx | Refsum_2006 | not_relevant | 2 | 5 | The paper reports an association between TCN2 genotype and total transcobalamin levels, but does not report a pharmacokinetic or pharmacodynamic effect of a gene variant on cyanocobalamin itself. |
| PGx | Saviola_2018 | not_relevant | 0 | 0 | The paper reports a clinical case of methotrexate toxicity associated with MTHFR polymorphisms, but it does not report pharmacokinetic or pharmacodynamic parameters for cyanocobalamin. |
| popPK | Sivadas_2025 | relevant | 9 | 2 | The study explicitly uses a 2-compartment pharmacokinetic model for cyanocobalamin, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| PGx | Sunebo_2026 | not_relevant | 0 | 0 | The paper investigates an adverse drug reaction (MADD) associated with sertraline and does not report pharmacokinetic or pharmacodynamic parameters of cyanocobalamin. |
| PGx | Vaisbich_2017 | not_relevant | 0 | 0 | The paper describes a clinical case of methionine synthase deficiency and treatment response, but does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of cyanocobalamin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_cyanocobalamin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
