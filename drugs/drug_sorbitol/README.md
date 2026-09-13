<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;sorbitol&quot;}]"></div>

# sorbitol

- **generic name:** sorbitol
- **ATC codes:** `A06AD18`, `A06AG07`, `B05CX02`, `V04CC01`
- **DrugBank:** [DB01638](https://go.drugbank.com/drugs/DB01638)
- **groups:** approved, investigational

## About

**Description.** A polyhydric alcohol with about half the sweetness of sucrose. Sorbitol occurs naturally and is also produced synthetically from glucose. It was formerly used as a diuretic and may still be used as a laxative and in irrigating solutions for some surgical procedures.

**Indication.** Used as a non-stimulant laxative via an oral suspension or enema.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 14:43 | 15:50 | 0/2/0 | 1/0/0 | 0/0/0 | 210,300/13,142 | ollama / qwen3.8:27b-mtp-q8_0 | 23 | 0/0 | 22/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Molino_1986](drugs/drug_sorbitol/Sorbitol_Molino1986_reference.md) | Molino G et al., Sorbitol clearance: a parameter reflect…, Research communications in… (1986) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Nau_1992](drugs/drug_sorbitol/Sorbitol_Nau1992_reference.md) | Nau R et al., Low blood-to-cerebrospinal fluid passag…, Stroke (1992) | [10.1161/01.str.23.9.1276](https://doi.org/10.1161/01.str.23.9.1276) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Takada_2017](drugs/drug_sorbitol/pd_Takada_2017_dietary_intake.md) | Takada T et al., A mannitol/sorbitol receptor stimulates…, PloS one (2017) | [10.1371/journal.pone.0186420](https://doi.org/10.1371/journal.pone.0186420) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Takada_2017](drugs/drug_sorbitol/pd_Takada_2017_receptor_current.md) | Takada T et al., A mannitol/sorbitol receptor stimulates…, PloS one (2017) | [10.1371/journal.pone.0186420](https://doi.org/10.1371/journal.pone.0186420) |

## Coverage

- **PubMed hits:** 91 matched, 53 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Molino_1986.pdf` | Molino G et al., Sorbitol clearance: a parameter reflect…, Research communications in… (1986) | popPK | 9 | not captured | [3715193](https://pubmed.ncbi.nlm.nih.gov/3715193) | The study reports quantitative pharmacokinetic parameters (clearance values) for sorbitol in rats, with specific numeric values provided in the text. |
| `van_1995.pdf` | van Griensven JM et al., Tolrestat pharmacokinetic and pharmacod…, Clinical pharmacology and t… (1995) | pd | 5 | [10.1016/0009-9236(95)90019-5](https://doi.org/10.1016/0009-9236(95)90019-5) | [8529328](https://www.ncbi.nlm.nih.gov/pubmed/8529328) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Dias_2022.pdf` | Dias CJ et al., Carvacrol reduces blood pressure, arter…, European journal of pharmac… (2022) | pd | 4 | [10.1016/j.ejphar.2021.174717](https://doi.org/10.1016/j.ejphar.2021.174717) | [34953800](https://www.ncbi.nlm.nih.gov/pubmed/34953800) | metadata signals extractable PD data (Emax) |
| `Lomba_2023.pdf` | Lomba L et al., Ecotoxicological study of glucose:choli…, Environmental science and p… (2023) | pd | 4 | [10.1007/s11356-023-25538-z](https://doi.org/10.1007/s11356-023-25538-z) | [36717413](https://www.ncbi.nlm.nih.gov/pubmed/36717413) | metadata signals extractable PD data (EC50) |
| `Brockmöller_1994.pdf` | Brockmöller J et al., Assessment of liver metabolic function.…, Clinical pharmacokinetics (1994) | pgx | 8 | [10.2165/00003088-199427030-00005](https://doi.org/10.2165/00003088-199427030-00005) | [7988103](https://www.ncbi.nlm.nih.gov/pubmed/7988103) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Chalon_2003.pdf` | Chalon SA et al., Effect of hepatic impairment on the pha…, Clinical pharmacology and t… (2003) | pgx | 8 | [10.1067/mcp.2003.25](https://doi.org/10.1067/mcp.2003.25) | [12621383](https://www.ncbi.nlm.nih.gov/pubmed/12621383) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zeeh_1996.pdf` | Zeeh J et al., Influence of age, frailty and liver fun…, European journal of clinica… (1996) | pgx | 7 | [10.1007/BF00203783](https://doi.org/10.1007/BF00203783) | [8866634](https://www.ncbi.nlm.nih.gov/pubmed/8866634) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-11T14:36:58.039701+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agius_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study on glucokinase regulation where sorbitol is used only as a precursor to fructose 1-phosphate, with no pharmacokinetic parameters reported. |
| PD | Agius_1998 | not_relevant | 1 | 0 | The paper discusses sorbitol only qualitatively as a precursor causing glucokinase translocation, without providing any numeric dose-response or concentration-effect parameters for sorbitol itself. |
| PGx | Bachleda_2009 | not_relevant | 0 | 0 | The paper uses sorbitol as a chemical activator of MAPKs to study gene expression, not as a drug subject to pharmacogenomic analysis. |
| PGx | Bidart_2023 | not_relevant | 0 | 0 | The paper investigates bacterial carbohydrate metabolism and transport mechanisms, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of sorbitol as a drug. |
| PGx | Birnbaum_1990 | not_relevant | 0 | 0 | The paper studies the toxicity of TCDD, not the pharmacokinetics or pharmacodynamics of sorbitol. |
| PGx | Brockmöller_1994 | not_relevant | 0 | 0 | The paper discusses sorbitol only as a probe for hepatic blood flow and does not report pharmacogenomic effects on its PK/PD parameters. |
| PGx | Chalon_2003 | not_relevant | 0 | 0 | The paper investigates the effect of hepatic impairment on atomoxetine pharmacokinetics, using sorbitol only as a marker for hepatic blood flow, not as the drug of interest. |
| PGx | Chefson_2007 | not_relevant | 0 | 0 | The paper discusses sorbitol as a lyoprotectant for CYP enzymes, not as a drug subject to pharmacogenomic analysis. |
| popPK | Chien_2023 | irrelevant | 0 | 0 | The study investigates the association between nonnutritive sweetener intake (including sorbitol) and body composition changes, not the pharmacokinetic disposition parameters of sorbitol. |
| PGx | Chilambi_2020 | not_relevant | 0 | 0 | The paper studies bacterial evolution and sorbitol utilization in Enterococcus faecium, not human pharmacogenomics of sorbitol. |
| PGx | Cortese_2025 | not_relevant | 0 | 0 | The paper describes the genotype-phenotype spectrum of a genetic disease (CMT-SORD) and sorbitol as a biomarker, but does not report pharmacokinetic or pharmacodynamic effects of a drug on sorbitol levels. |
| PGx | Desnoues_2018 | not_relevant | 0 | 0 | The paper models sugar metabolism in peach fruit, not the pharmacokinetics or pharmacodynamics of sorbitol as a drug in humans. |
| PGx | Di_2019 | not_relevant | 0 | 0 | The paper studies Hereditary Fructose Intolerance (a metabolic disorder) and the dietary restriction of sorbitol, not the pharmacokinetics or pharmacodynamics of sorbitol as a drug. |
| popPK | Dias_2022 | irrelevant | 0 | 0 | The paper focuses on carvacrol and hypertension in rats, with no mention of sorbitol pharmacokinetics. |
| PD | Dias_2022 | not_relevant | 0 | 0 | The paper studies carvacrol, not sorbitol, and does not report any pharmacodynamic or exposure-response relationship for sorbitol. |
| PGx | Doehlert_1990 | not_relevant | 0 | 0 | The paper studies sugar metabolism in maize mutants and does not involve sorbitol as a drug or human pharmacogenomics. |
| PGx | Du_2023 | not_relevant | 0 | 0 | The paper describes the design and biological evaluation of novel antifungal compounds, and sorbitol is only mentioned as a reagent in a protection experiment to confirm the mechanism of action, not as a drug subject to pharmacogenomic analysis. |
| popPK | Gonçalves_2025 | irrelevant | 0 | 0 | The study is an epidemiological investigation of cognitive decline associated with sweetener consumption and does not report any pharmacokinetic parameters for sorbitol. |
| popPK | Grunewald_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of osmolyte transport in cell lines, not a pharmacokinetic study reporting disposition parameters for sorbitol. |
| PGx | Israels_1976 | not_relevant | 0 | 0 | The paper discusses lactic acidosis and mentions sorbitol only as a non-pharmacogenomic exogenous cause, without reporting any gene variant effects on sorbitol PK/PD. |
| PGx | Karagiannis_2021 | not_relevant | 0 | 0 | The paper analyzes sorbitol content in fruit metabolites, not the pharmacokinetics or pharmacodynamics of sorbitol as a drug in humans. |
| PGx | Kumar_2018 | not_relevant | 0 | 0 | The paper discusses sorbitol as a carbon source for bacterial protein production, not as a drug subject to pharmacogenomic modulation of PK/PD parameters. |
| PGx | Kölbel_2026 | not_relevant | 0 | 0 | The paper discusses the pathophysiology of SORD gene variants in CMT2 and sorbitol metabolism, but does not report pharmacokinetic or pharmacodynamic parameters of sorbitol as a drug. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper describes a genetic disorder (dHMN) caused by SORD variants affecting endogenous sorbitol metabolism, not the pharmacokinetics or pharmacodynamics of sorbitol as a drug. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro/in vivo efficacy of an aldose reductase inhibitor, where sorbitol is only mentioned as a biomarker of accumulation, not as the subject of a pharmacokinetic analysis. |
| popPK | Lomba_2023 | irrelevant | 0 | 0 | The paper is an ecotoxicological study of sorbitol-based deep eutectic solvents, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Lomba_2023 | not_relevant | 0 | 0 | The paper is an ecotoxicological study of deep eutectic solvents (glucose/sorbitol with choline chloride) and does not report pharmacodynamic or exposure-response relationships for sorbitol as a drug. |
| PGx | Long_2024 | not_relevant | 0 | 0 | The paper describes the synthesis and antifungal activity of novel chitin synthase inhibitors, and sorbitol is only used as a reagent in a protection assay, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Lübberstedt_2011 | not_relevant | 0 | 0 | The paper compares cell lines for drug metabolism assays and does not report pharmacogenomic effects on sorbitol PK/PD. |
| popPK | Machida_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on gallotannin derivatives as antioxidants and alpha-glucosidase inhibitors, containing no pharmacokinetic data for sorbitol. |
| PD | Machida_2021 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for gallotannin derivatives, not sorbitol, and does not contain pharmacodynamic modeling or exposure-response analysis. |
| popPK | Manca_2019 | irrelevant | 0 | 0 | The study focuses on sorbitol as a penetration enhancer in vesicle formulations for baicalin delivery, not on the pharmacokinetics of sorbitol itself. |
| popPK | Mauro_1987 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenytoin, with sorbitol used only as a laxative adjunct to activated charcoal, not as the subject drug. |
| popPK | Moing_1992 | irrelevant | 0 | 0 | The paper is a plant physiology study on carbon fluxes in peach leaves, not a pharmacokinetic study of sorbitol as a drug. |
| popPK | Munguía-Ramírez_2026 | irrelevant | 0 | 0 | The paper is a virology study evaluating sorbitol as a stabilizer for viral RNA in swine oral fluids, not a pharmacokinetic study of sorbitol disposition. |
| PGx | Nicolaides_2021 | not_relevant | 0 | 0 | The paper investigates glucocorticoid sensitivity and metabolomics, not the pharmacokinetics or pharmacodynamics of sorbitol. |
| PGx | Rojas_2025 | not_relevant | 0 | 0 | The paper reports in-silico screening for aldose reductase inhibitors and does not investigate pharmacogenomic effects on sorbitol PK/PD parameters. |
| PGx | Roncal_2014 | not_relevant | 0 | 0 | The paper investigates the role of endogenous sorbitol in renal injury via the polyol pathway in mice, not the pharmacokinetics or pharmacodynamics of exogenous sorbitol as a drug. |
| popPK | Salehi_2021 | irrelevant | 0 | 0 | The paper is a microbiology study on carotenoid production by Dietzia maris, where sorbitol is used only as a carbon source, not as a subject drug for pharmacokinetic analysis. |
| PD | Salehi_2021 | not_relevant | 0 | 0 | The paper studies carotenoid production in bacteria using sorbitol as a carbon source, not the pharmacodynamics of sorbitol as a drug. |
| PGx | Schlicker_2019 | not_relevant | 0 | 0 | The paper investigates the biosynthesis of erythritol (a sweetener) and the role of ADH1/SORD variants in this metabolic pathway, not the pharmacokinetics or pharmacodynamics of sorbitol as a drug. |
| PGx | Shen_2025 | not_relevant | 0 | 0 | The paper describes the in vitro enzymatic biosynthesis of sorbitol from fructose-6-phosphate, not the pharmacokinetics or pharmacodynamics of sorbitol in humans or the effect of human gene variants on sorbitol metabolism. |
| PGx | Stintzing_2009 | not_relevant | 0 | 0 | The paper investigates liver function tests (including sorbitol clearance) in response to antiviral therapy for Hepatitis C, but does not report any pharmacogenomic effects (gene variants) on sorbitol pharmacokinetics or pharmacodynamics. |
| popPK | Takada_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on insect gustatory receptors and feeding behavior, not a pharmacokinetic study, and reports no disposition parameters for sorbitol. |
| PGx | Tran_2024 | not_relevant | 0 | 0 | The paper investigates urinary metabolites (including sorbitol) as biomarkers for adrenal suppression in asthma patients, not the pharmacokinetics or pharmacodynamics of sorbitol as a drug. |
| PGx | Vrzal_2008 | not_relevant | 0 | 0 | The paper studies the effect of microtubule-interfering agents on CYP1A2 induction, using sorbitol only as a model JNK activator, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Xu_2026 | not_relevant | 0 | 0 | The paper studies plant biology (pear genotypes and rhizosphere fungi), not human pharmacogenomics or drug pharmacokinetics. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper is a toxicology study using bioluminescent bacteria to detect heavy metals and BPA, where sorbitol is used only as a cryoprotectant in the freeze-drying process, not as a subject drug for pharmacokinetic analysis. |
| PD | Yang_2022 | not_relevant | 0 | 0 | The paper reports EC50 values for contaminants (heavy metals, BPA) on bacteria, not a pharmacodynamic relationship for sorbitol, which is only used as a cryoprotectant. |
| PGx | Yang_2023 | not_relevant | 0 | 0 | The paper investigates potassium use efficiency and carbon metabolism in pear rootstocks, not the pharmacokinetics or pharmacodynamics of sorbitol in humans. |
| PGx | Zaher_1998 | not_relevant | 0 | 0 | The paper studies acetaminophen toxicity, not sorbitol; sorbitol dehydrogenase is mentioned only as a liver enzyme marker. |
| PGx | Zeeh_1996 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of brofaromine, not sorbitol, and sorbitol is only used as a probe for liver plasma flow. |
| popPK | Zhang_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of etomidate, with sorbitol serving only as an excipient in the formulation. |
| PGx | Zhang_2017 | not_relevant | 0 | 0 | The paper studies transcriptomics in pear fruit development and mentions sorbitol dehydrogenase in the context of plant carbon metabolism, not human pharmacogenomics or drug PK/PD. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper describes the antifungal activity of valinomycin and contains no pharmacokinetic data for sorbitol. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper reports the antifungal activity of valinomycin, not sorbitol, and contains no pharmacodynamic or exposure-response analysis for sorbitol. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper investigates metabolic changes in diabetic retinopathy and mentions sorbitol as a metabolite, but does not report pharmacokinetic or pharmacodynamic parameters of sorbitol as a drug, nor does it link gene variants to sorbitol's PK/PD. |
| popPK | van_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tolrestat and its effect on sorbitol levels, not the pharmacokinetic parameters of sorbitol itself. |
| PD | van_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and pharmacodynamics of tolrestat (an aldose reductase inhibitor) on sorbitol levels, not the pharmacodynamic relationship of sorbitol itself as a drug. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_sorbitol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
