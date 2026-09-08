# hydroxocobalamin

- **generic name:** hydroxocobalamin
- **ATC codes:** `B03BA03`, `V03AB33`
- **DrugBank:** [DB00200](https://go.drugbank.com/drugs/DB00200)
- **groups:** approved, investigational

## About

**Description.** Hydroxocobalamin, also known as vitamin B12a and hydroxycobalamin, is an injectable form of vitamin B 12 that has been used therapeutically to treat vitamin B 12 deficiency. It is also used in cyanide poisoning, Leber's optic atrophy, and toxic amblyopia.

**Indication.** For treatment of pernicious anemia and the prevention and treatment of vitamin B12 deficiency arising from alcoholism, malabsorption, tapeworm infestation, celiac, hyperthyroidism, hepatic-biliary tract disease, persistent diarrhea, ileal resection, pancreatic cancer, renal disease, prolonged stress, vegan diets, macrobiotic diets or other restrictive diets. Also for the treatment of known or suspected cyanide poisoning.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 13:06 | 17:24 | 0/2/0 | 0/0/0 | 0/0/0 | 86,831/3,111 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 0/0 | 10/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Houeto_1996](drugs/drug_hydroxocobalamin/Hydroxocobalamin_Houeto1996_reference.md) | Houeto P et al., Pharmacokinetics of hydroxocobalamin in…, Journal of toxicology. Clin… (1996) | [10.3109/15563659609013809](https://doi.org/10.3109/15563659609013809) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [de_1994](drugs/drug_hydroxocobalamin/Hydroxocobalamin_de1994_reference.md) | de La Coussaye JE et al., Pharmacokinetics of hydroxocobalamin in…, Journal of neurosurgical an… (1994) | [10.1097/00008506-199404000-00006](https://doi.org/10.1097/00008506-199404000-00006) |

## Coverage

- **PubMed hits:** 41 matched, 35 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Houeto_1996.pdf` | Houeto P et al., Pharmacokinetics of hydroxocobalamin in…, Journal of toxicology. Clin… (1996) | popPK | 10 | [10.3109/15563659609013809](https://doi.org/10.3109/15563659609013809) | [8699553](https://pubmed.ncbi.nlm.nih.gov/8699553) | The paper reports quantitative pharmacokinetic parameters (half-lives, volume of distribution, clearance) for hydroxocobalamin in humans, with all numeric values explicitly present in the text. |
| `de_1994.pdf` | de La Coussaye JE et al., Pharmacokinetics of hydroxocobalamin in…, Journal of neurosurgical an… (1994) | popPK | 10 | [10.1097/00008506-199404000-00006](https://doi.org/10.1097/00008506-199404000-00006) | [8012169](https://pubmed.ncbi.nlm.nih.gov/8012169) | The paper reports quantitative pharmacokinetic parameters (half-life, volume of distribution, clearance) for hydroxocobalamin in dogs, with all numeric values explicitly present in the text. |
| `Bonaventura_2007.pdf` | Bonaventura D et al., Comparison of the mechanisms underlying…, Vascular pharmacology (2007) | pd | 4 | [10.1016/j.vph.2006.10.002](https://doi.org/10.1016/j.vph.2006.10.002) | [17127100](https://www.ncbi.nlm.nih.gov/pubmed/17127100) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-06T12:59:04.765926+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bonaventura_2006 | irrelevant | 0 | 0 | The study investigates the mechanism of action of a ruthenium complex, using hydroxocobalamin only as a nitric oxide scavenger (comparator) rather than as the subject drug for pharmacokinetic analysis. |
| PD | Bonaventura_2006 | not_relevant | 0 | 0 | The paper studies a ruthenium complex, not hydroxocobalamin; hydroxocobalamin is used only as a scavenger agent in the experimental setup. |
| popPK | Bonaventura_2007 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of nitric oxide donors in rat aorta, where hydroxocobalamin is used only as a chemical scavenger, not as a subject drug for PK analysis. |
| PD | Bonaventura_2007 | not_relevant | 0 | 0 | The paper studies the mechanism of action of nitric oxide donors (sodium nitroprusside and a ruthenium complex) in rat aorta, using hydroxocobalamin only as a chemical scavenger for NO radicals, not as the drug of interest for a PD analysis. |
| popPK | Cavalcante_2011 | irrelevant | 0 | 0 | The study investigates the cardiovascular effects of milonine, using hydroxocobalamin only as a pharmacological inhibitor of nitric oxide, and contains no pharmacokinetic parameters. |
| PD | Cavalcante_2011 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of milonine, not hydroxocobalamin; hydroxocobalamin is only mentioned as a non-specific NO scavenger used to inhibit milonine's effect. |
| PGx | Chen_2023 | not_relevant | 0 | 0 | The paper is a case report on a metabolic disorder (cblC deficiency) and does not report pharmacogenomic effects on the PK or PD of hydroxocobalamin. |
| popPK | Dias_2007 | irrelevant | 0 | 0 | The study investigates the vasodilator mechanism of diosgenin, using hydroxocobalamin only as a pharmacological inhibitor (probe) rather than as the subject drug for PK analysis. |
| PD | Dias_2007 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of diosgenin, not hydroxocobalamin; hydroxocobalamin is used only as a non-specific nitric oxide scavenger to inhibit diosgenin's effect. |
| PGx | Ding_2026 | not_relevant | 4 | 5 | The paper reports genotype-stratified differences in required dosage (a dosing adjustment) and clinical/biochemical outcomes, but does not report pharmacokinetic parameters (e.g., AUC, Cmax) or direct pharmacodynamic effect sizes (e.g., EC50) for hydroxocobalamin. |
| PGx | Drew_1983 | not_relevant | 0 | 0 | The paper discusses the clinical use and efficacy of hydroxocobalamin for cyanide toxicity but does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Forny_2016 | not_relevant | 0 | 0 | The paper reports a therapeutic response to hydroxocobalamin in a mouse model of methylmalonic aciduria, but does not report a pharmacogenomic effect (gene variant changing PK/PD) of the drug itself. |
| PGx | Forny_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of hydroxocobalamin as a therapeutic agent for a metabolic disorder (cblB-type MMA), not the pharmacokinetics or pharmacodynamics of hydroxocobalamin itself as a drug. |
| PGx | Furuta_2026 | not_relevant | 0 | 0 | The paper is a clinical case report describing the diagnosis and treatment of Cobalamin C disease, not a study investigating how genetic variants alter the pharmacokinetics or pharmacodynamics of hydroxocobalamin. |
| PGx | García_2010 | not_relevant | 0 | 0 | The paper studies plant biology (Arabidopsis) and cyanide detoxification, not human pharmacogenomics or hydroxocobalamin PK/PD. |
| PGx | Gherasim_2013 | not_relevant | 0 | 0 | The paper describes the molecular mechanism of intracellular cobalamin trafficking and protein-protein interactions in inborn errors of metabolism, not the pharmacokinetics or pharmacodynamics of hydroxocobalamin as a therapeutic drug. |
| PGx | Gupta_2021 | not_relevant | 0 | 0 | The paper reports a case of a metabolic disorder (MAHCC) and mentions hydroxocobalamin as a treatment, but it does not report any pharmacokinetic or pharmacodynamic parameters or how genetic variants affect the drug's response. |
| PGx | Hewick_1987 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between hydroxocobalamin and sodium nitroprusside, not the effect of genetic variants on hydroxocobalamin pharmacokinetics or pharmacodynamics. |
| PGx | Higashimoto_2020 | not_relevant | 0 | 0 | The paper reports clinical and biochemical outcomes of a specific genotype (cblC deficiency) treated with a drug, but does not report a pharmacokinetic or pharmacodynamic parameter of the drug itself (e.g., clearance, half-life, receptor affinity) that is altered by the genotype. |
| PGx | Longo_2026 | not_relevant | 0 | 0 | The paper investigates the structural and thermodynamic effects of the MMACHC R161Q mutation on cobalamin binding and protein oligomerization, but does not report clinical pharmacokinetic or pharmacodynamic parameters of hydroxocobalamin. |
| PGx | Mondesert_2025 | not_relevant | 0 | 0 | The paper is a case report of a metabolic disorder (cblC) and does not report pharmacogenomic effects on the PK/PD of hydroxocobalamin. |
| PGx | Moraes_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of a nitric oxide donor (NONO2P) and uses hydroxocobalamin only as a chemical scavenger, not as the subject of a pharmacogenomic study. |
| PGx | Richard_2009 | not_relevant | 2 | 5 | The paper reports cellular oxidative stress and apoptosis changes in cblC patients treated with hydroxocobalamin, which are disease pathophysiology markers rather than standard pharmacokinetic or pharmacodynamic parameters of the drug itself. |
| popPK | Ritter_2022 | irrelevant | 0 | 0 | The study focuses on hemodynamic effects (blood pressure) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| PGx | Sawlan_2025 | not_relevant | 0 | 0 | The paper reports clinical outcomes and biochemical markers (MMA, tHcy) in patients with TCN2 deficiency, but does not report pharmacokinetic or pharmacodynamic parameters of hydroxocobalamin itself (e.g., AUC, Cmax, clearance). |
| PGx | Scalais_2017 | not_relevant | 0 | 0 | The paper describes a genetic disorder (HCFC1) affecting cobalamin metabolism and biomarkers, but does not report a pharmacogenomic effect on the PK or PD parameters of hydroxocobalamin as a drug. |
| PGx | Scalais_2019 | not_relevant | 0 | 0 | The paper reports clinical and biochemical responses to hydroxocobalamin dose intensification in patients with intracellular cobalamin metabolism defects, but it does not report a pharmacogenomic effect (i.e., how a specific gene variant alters the PK or PD of the drug itself). |
| popPK | Schubert_2004 | irrelevant | 0 | 0 | The study investigates the mechanism of sodium nitroprusside-induced vasodilation, using hydroxocobalamin only as a nitric oxide scavenger rather than as the subject of pharmacokinetic analysis. |
| PD | Schubert_2004 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for sodium nitroprusside, not hydroxocobalamin, which is used only as a qualitative NO scavenger. |
| PGx | Selvanathan_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes and biomarker correlations in patients with a specific genetic disease (cblC), but does not report how a gene variant affects the pharmacokinetics or pharmacodynamics of hydroxocobalamin. |
| PGx | Stepien_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes and safety of hydroxocobalamin treatment in pregnancy for cobalamin disorders, but does not report pharmacokinetic or pharmacodynamic parameters or specific pharmacogenomic effects on drug handling. |
| popPK | Terroni_2022 | irrelevant | 0 | 0 | The study investigates the vascular effects of Lapdesf-4c, using hydroxocobalamin only as an NO-scavenger tool compound, and reports no pharmacokinetic parameters for hydroxocobalamin. |
| PD | Terroni_2022 | not_relevant | 0 | 0 | The paper studies the PD of Lapdesf-4c, not hydroxocobalamin; hydroxocobalamin is used only as a tool compound (NO scavenger) to investigate the mechanism of action. |
| popPK | Thompson_2012 | irrelevant | 2 | 0 | The paper is a review that describes the pharmacokinetic model qualitatively (two-compartment) but does not provide specific numeric parameter values (CL, V, t1/2) in the text. |
| popPK | Tsui_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of S-nitrosocaptopril where hydroxocobalamin is used only as a nitric oxide scavenger, with no PK parameters reported. |
| PD | Tsui_2003 | not_relevant | 0 | 0 | The paper focuses on S-nitrosocaptopril; hydroxocobalamin is used only as a qualitative NO scavenger to modulate responses, with no exposure-response or dose-response analysis for hydroxocobalamin itself. |
| PGx | Tulsiyan_2026 | not_relevant | 0 | 0 | The paper describes a clinical case of a metabolic disorder treated with hydroxocobalamin but does not report pharmacokinetic or pharmacodynamic parameters or quantitative pharmacogenomic effects. |
| PGx | Underhill_2013 | not_relevant | 2 | 5 | The paper reports a lack of pharmacodynamic response (MMA levels) to hydroxocobalamin in a specific genotype, but it is a case report of disease pathophysiology rather than a study quantifying a pharmacogenomic effect on PK/PD parameters. |
| PGx | Wang_2010 | not_relevant | 0 | 0 | The paper describes the genetic basis and clinical phenotype of cblC deficiency but does not report pharmacokinetic or pharmacodynamic parameters of hydroxocobalamin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_hydroxocobalamin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
