<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;fructose 1,6-diphosphate&quot;}]"></div>

# fructose 1,6-diphosphate

- **generic name:** fructose 1,6-diphosphate
- **ATC codes:** `C01EB07`
- **DrugBank:** [DB13863](https://go.drugbank.com/drugs/DB13863) · **PubChem:** not captured
- **molar mass:** 340.1157 g/mol (C6H14O12P2) — DrugBank
- **groups:** investigational

## About

Fructose 1,6-diphosphate is a cardiac therapy agent that has been investigated for treating heart-related conditions. It remains investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28529691](https://www.wikidata.org/wiki/Q28529691) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 05:56 | 2:06 | 0/0/0 | 0/0/0 | 0/0/0 | 3,752/345 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 3/6 | 2/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 67 matched, 63 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xu_2008.pdf` | Xu K et al., Pharmacokinetics of fructose-1,6-diphos…, Pharmacological research (2008) | popPK | 8 | [10.1016/j.phrs.2008.01.008](https://doi.org/10.1016/j.phrs.2008.01.008) | [18325780](https://pubmed.ncbi.nlm.nih.gov/18325780) | The paper is a pharmacokinetic study of fructose-1,6-diphosphate in rats, but the provided evidence contains only qualitative descriptions of time-course trends without specific numeric parameter values (CL, V, etc.). |
| `Sommer_1985.pdf` | Sommer P et al., Lactate dehydrogenase from Streptococcu…, Infection and immunity (1985) | pd | 5 | [10.1128/iai.47.2.489-495.1985](https://doi.org/10.1128/iai.47.2.489-495.1985) | [3917978](https://www.ncbi.nlm.nih.gov/pubmed/3917978) | metadata signals extractable PD data (sigmoid) |
| `Ekman_1976.pdf` | Ekman P et al., Comparative kinetic studies on the L-ty…, Biochimica et biophysica ac… (1976) | pd | 4 | [10.1016/0005-2744(76)90285-0](https://doi.org/10.1016/0005-2744(76)90285-0) | [4127](https://www.ncbi.nlm.nih.gov/pubmed/4127) | metadata signals extractable PD data (sigmoid) |
| `Galzigna_1989.pdf` | Galzigna L et al., Some effects of fructose-1,6-diphosphat…, Cell biochemistry and funct… (1989) | pd | 4 | [10.1002/cbf.290070203](https://doi.org/10.1002/cbf.290070203) | [2548756](https://www.ncbi.nlm.nih.gov/pubmed/2548756) | metadata signals extractable PD data (IC50) |
| `Jetten_1994.pdf` | Jetten MS et al., Structural and functional analysis of p…, Applied and environmental m… (1994) | pd | 4 | [10.1128/aem.60.7.2501-2507.1994](https://doi.org/10.1128/aem.60.7.2501-2507.1994) | [8074528](https://www.ncbi.nlm.nih.gov/pubmed/8074528) | metadata signals extractable PD data (sigmoid) |
| `Sharma_2011.pdf` | Sharma B, Kinetic Characterisation of Phosphofruc…, Enzyme research (2011) | pd | 4 | [10.4061/2011/939472](https://doi.org/10.4061/2011/939472) | [21941634](https://www.ncbi.nlm.nih.gov/pubmed/21941634) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-09-30T05:56:14.383920+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Batsios_2026 | irrelevant | 0 | 0 | The paper focuses on metabolic imaging and mechanistic studies of glioma proliferation, not the pharmacokinetics of fructose_16_diphosphate. |
| PD | Batsios_2026 | not_relevant | 0 | 0 | The paper investigates the metabolic role of lactate in gliomas and does not report any pharmacodynamic or exposure-response relationship for fructose 1,6-diphosphate. |
| popPK | Brown_1972 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on lactate dehydrogenase regulation by fructose-1,6-diphosphate, not a pharmacokinetic study. |
| PD | Brown_1972 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics and allosteric regulation of lactate dehydrogenase, not a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| popPK | Cardoso_1996 | irrelevant | 0 | 0 | The study measures renal clearance of inulin or similar markers to assess nephrotoxicity, not the pharmacokinetic disposition parameters (CL, V, etc.) of fructose-1,6-diphosphate itself. |
| popPK | Cui_2017 | irrelevant | 0 | 0 | The study is a clinical trial comparing the therapeutic efficacy of L-carnitine and fructose-1,6-diphosphate on myocardial enzymes, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Deepa_2023 | irrelevant | 0 | 0 | The paper is a mechanistic systems biology model of glucose-stimulated insulin secretion in pancreatic beta-cells, not a pharmacokinetic study of fructose-1,6-diphosphate as a drug. |
| PD | Deepa_2023 | not_relevant | 0 | 0 | The paper presents a mechanistic kinetic model of glucose-stimulated insulin secretion in pancreatic beta-cells, not a pharmacodynamic analysis of fructose 1,6-diphosphate as a drug. |
| popPK | Didlake_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of fructose 1,6-diphosphate's protective effects on renal injury, not a pharmacokinetic study, and reports no PK parameters (CL, V, ka, etc.) for the drug. |
| popPK | Dietzler_1975 | irrelevant | 0 | 0 | The paper is a mechanistic study of metabolic regulation in E. coli, not a pharmacokinetic study of fructose-1,6-diphosphate as a drug. |
| popPK | Dietzler_1975_2 | irrelevant | 0 | 0 | The paper is a mechanistic study of metabolic regulation in E. coli, not a pharmacokinetic study of fructose-1,6-diphosphate as a drug. |
| popPK | Dietzler_1975_3 | irrelevant | 0 | 0 | The paper is a mechanistic study of glycogen synthesis in E. coli where fructose 1,6-diphosphate is a substrate/metabolite, not a drug subject to pharmacokinetic analysis. |
| popPK | Ekman_1976 | irrelevant | 0 | 0 | no_text gate: only 149 chars of text extracted (&lt; 400) |
| PD | Ekman_1976 | not_relevant | 0 | 0 | The paper studies the kinetics of pyruvate kinase enzyme activity and phosphorylation, not the pharmacodynamic or exposure-response relationship of fructose 1,6-diphosphate as a drug. |
| popPK | Galzigna_1989 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Galzigna_1989 | not_relevant | 0 | 0 | The paper investigates the mechanism of action (membrane stabilization) of fructose-1,6-diphosphate on rat myocardial tissue but does not report a quantitative exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | Götz_1975 | irrelevant | 0 | 0 | The paper describes the purification and enzymatic properties of lactate dehydrogenase activated by fructose-1,6-diphosphate, not the pharmacokinetics of fructose-1,6-diphosphate itself. |
| popPK | Hellman_1975 | irrelevant | 0 | 0 | The paper is a mechanistic study of glucose metabolism in pancreatic islets where fructose-1,6-diphosphate is an intracellular metabolite, not a drug subject to pharmacokinetic analysis. |
| PD | Hellman_1975 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for glucose (substrate) on glycolytic flux, not for fructose 1,6-diphosphate (which is an intermediate metabolite measured, not the drug/exposure variable). |
| PGx | Hugenholtz_2000 | not_relevant | 0 | 0 | The paper analyzes sugar metabolism in bacteria using NMR and does not report pharmacogenomic effects on the PK/PD of fructose-1,6-diphosphate as a drug. |
| popPK | Irving_1973 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on pyruvate kinase regulation, not a pharmacokinetic study of fructose 1,6-diphosphate. |
| popPK | Jetten_1994 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Jetten_1994 | not_relevant | 0 | 0 | The paper analyzes the structure and function of pyruvate kinase, not the pharmacodynamics of fructose 1,6-diphosphate. |
| popPK | Kiel_1977 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on invertase regulation, not a pharmacokinetic study of fructose-1,6-diphosphate. |
| popPK | Likos_1980 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on yeast pyruvate kinase where fructose 1,6-diphosphate is used as a ligand, not a subject drug for pharmacokinetic analysis. |
| PD | Likos_1980 | not_relevant | 0 | 0 | The paper describes the mechanism of enzyme inactivation/activation by an affinity label, not a pharmacodynamic exposure-response relationship for fructose 1,6-diphosphate as a drug. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper is a metabolomic and transcriptomic study of *Isatis indigotica* varieties and does not report pharmacokinetic parameters for fructose_16_diphosphate. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper is a comparative metabolomic and transcriptomic study of plant cultivars and does not report any pharmacodynamic or exposure-response data for fructose 1,6-diphosphate. |
| PGx | Lucotte_1975 | not_relevant | 0 | 0 | The paper discusses biochemical polymorphisms in Japanese quail enzymes, not the pharmacokinetics or pharmacodynamics of fructose-1,6-diphosphate as a drug. |
| popPK | Ma_2011 | irrelevant | 2 | 0 | The study investigates the pharmacokinetics of strontium fructose 1,6-diphosphate (Sr-FDP), a different compound, rather than fructose 1,6-diphosphate itself, and no specific numeric PK parameter values are provided in the text. |
| popPK | Macalalad_2023 | irrelevant | 0 | 0 | The paper is an in silico study on phytochemical inhibitors of diabetes targets (including FBPase) and does not report pharmacokinetic parameters for fructose 1,6-diphosphate. |
| PD | Macalalad_2023 | not_relevant | 0 | 0 | The paper is an in silico study focusing on molecular docking and binding affinity for phytochemicals, containing no pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Markov_1985 | irrelevant | 0 | 0 | The study investigates the immunological and metabolic effects of fructose-1,6-diphosphate, not its pharmacokinetic disposition parameters. |
| popPK | Markov_2007 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of FDP's effect on lung injury in sheep and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| popPK | Nishikawa_2001 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on pyruvate kinase where fructose-1,6-diphosphate acts as an allosteric activator, not a subject drug for pharmacokinetic analysis. |
| PD | Nishikawa_2001 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, Hill coefficient) for pyruvate kinase in the presence of fructose-1,6-diphosphate, which is a biochemical mechanism study, not a pharmacodynamic exposure-response or dose-response analysis of the drug's effect on a biological system. |
| popPK | Ohta_1996 | irrelevant | 0 | 0 | The study focuses on the metabolic effects of the drug M16209 on glucose handling, and fructose-1,6-bisphosphate is only mentioned as a metabolic intermediate whose tissue content was measured, not as a subject drug for pharmacokinetic analysis. |
| PGx | Paglia_1983 | not_relevant | 0 | 0 | The paper describes a genetic defect in the enzyme pyruvate kinase affecting its allosteric regulation by fructose-1,6-diphosphate, which is a metabolic substrate/cofactor, not a drug. |
| popPK | Palm_2003 | irrelevant | 0 | 0 | The paper is an immunology study identifying antigens in Giardia lamblia, and fructose-1,6-bisphosphate aldolase is a protein, not the drug fructose_16_diphosphate, with no PK parameters reported. |
| popPK | Pardo_2026 | irrelevant | 0 | 0 | The paper is a cancer biology study focusing on mRNA translation and lung adenocarcinoma, with no pharmacokinetic data or mention of fructose_16_diphosphate. |
| PD | Pardo_2026 | not_relevant | 0 | 0 | The paper investigates the role of eIF4A2 in lung cancer tumorigenesis and does not report any pharmacodynamic or exposure-response analysis for fructose 1,6-diphosphate. |
| popPK | Puckett_2014 | irrelevant | 0 | 0 | The paper investigates the metabolic role of the enzyme fructose-1,6-bisphosphate aldolase in Mycobacterium tuberculosis, not the pharmacokinetics of fructose-1,6-diphosphate as a drug. |
| popPK | Pérez-Lucas_1979 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic kinetic study of pyruvate kinase where fructose 1,6-diphosphate acts as an allosteric regulator, not a pharmacokinetic study of the compound's disposition. |
| PD | Pérez-Lucas_1979 | not_relevant | 3 | 2 | The paper reports kinetic parameters (K0.5, Vmax, nH) of an enzyme under different conditions, which is enzyme kinetics, not a pharmacodynamic exposure-response or dose-response relationship for the drug fructose 1,6-diphosphate. |
| popPK | Rigobello_1982 | irrelevant | 2 | 0 | The study describes qualitative distribution and hydrolytic activity in rats but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for fructose-1,6-diphosphate. |
| popPK | Sandras_2026 | irrelevant | 0 | 0 | The study is an in-cell NMR metabolic profiling analysis of neuronal cells, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for fructose 1,6 diphosphate. |
| popPK | Shan_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on apigenin's effect on PKM2, where fructose-1,6-diphosphate is used only as a co-factor/comparator, and no pharmacokinetic parameters are reported. |
| PD | Shan_2017 | not_relevant | 0 | 0 | The paper reports IC50 values for Apigenin, not Fructose 1,6-diphosphate (FBP); FBP is only mentioned as a control that does not reverse Apigenin's inhibition, with no PD parameters provided for FBP itself. |
| popPK | Sharma_2011 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Sharma_2011 | not_relevant | 0 | 0 | The paper characterizes the enzyme phosphofructokinase in a parasite, not the pharmacodynamic response of a drug (fructose 1,6-diphosphate) in a biological system. |
| popPK | Sommer_1985 | irrelevant | 0 | 0 | no_text gate: only 207 chars of text extracted (&lt; 400) |
| PD | Sommer_1985 | not_relevant | 0 | 0 | The paper characterizes lactate dehydrogenase from Streptococcus mutans and does not report any pharmacodynamic or exposure-response data for fructose 1,6-diphosphate. |
| popPK | Tarsi_1985 | irrelevant | 0 | 0 | no_text gate: only 305 chars of text extracted (&lt; 400) |
| popPK | Tashima_1975 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study reporting kinetic parameters (Km, Hill coefficient) for fructose-1,6-diphosphatase, not pharmacokinetic disposition parameters for fructose-1,6-diphosphate. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The paper studies the antimicrobial mechanism of Candesartan cilexetil, and fructose-1,6-diphosphate is only mentioned as a metabolite in omics data, not as a subject drug for PK analysis. |
| PD | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper investigates the antimicrobial mechanism of Candesartan cilexetil, not fructose 1,6-diphosphate, and does not report pharmacodynamic parameters for the specified drug. |
| popPK | Tsao_1975 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic kinetics study of pyruvate kinase in Neurospora crassa, not a pharmacokinetic study of fructose-1,6-diphosphate. |
| PD | Tsao_1975 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics (Michaelis-Menten/Hill) of pyruvate kinase, not a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| popPK | Wang_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of propofol, not fructose_16_diphosphate. |
| PD | Wang_2012 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) modeling of propofol clearance scaling with bodyweight and does not contain any pharmacodynamic (PD) or exposure-response analysis for fructose 1,6-diphosphate or any other drug. |
| popPK | Xiong_2025 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic study on ALDOA inhibitors where fructose-1,6-diphosphate is a substrate, not a subject drug for pharmacokinetic analysis. |
| PD | Xiong_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for inhibitors of the enzyme Aldolase A, not a pharmacodynamic exposure-response relationship for fructose 1,6-diphosphate (which is the substrate). |
| popPK | Xu_2008 | relevant | 8 | 2 | The paper is a pharmacokinetic study of fructose-1,6-diphosphate in rats, but the provided evidence contains only qualitative descriptions of time-course trends without specific numeric parameter values (CL, V, etc.). |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on lung fibrosis and omentin-1, containing no pharmacokinetic data for fructose_16_diphosphate. |
| popPK | de_2021 | irrelevant | 0 | 0 | The paper is a theoretical study on Metabolic Control Analysis and linear programming for metabolic networks, not a pharmacokinetic study, and does not report PK parameters for fructose 1,6-diphosphate. |
| PD | de_2021 | not_relevant | 0 | 0 | The paper applies Metabolic Control Analysis to infer metabolic drivers of CDK4/6 inhibition in cancer cells; it does not report a pharmacodynamic exposure-response or dose-response relationship for fructose 1,6-diphosphate as a drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
