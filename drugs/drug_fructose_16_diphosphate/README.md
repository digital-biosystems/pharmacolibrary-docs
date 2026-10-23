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

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Dietzler_1975_3_rate_of_glycogen_synthesis](drugs/drug_fructose_16_diphosphate/pd_Dietzler_1975_3_rate_of_glycogen_synthesis.md) | rate of glycogen synthesis biomarker turnover ← fructose_16_diphosphate | — | Dietzler DN et al., Evidence for the allosteric regulation…, The Journal of biological c… (1975) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 11:41 | 0:53 | 0/0/0 | 1/0/0 | 0/0/0 | 63,828/3,843 | einfracz / qwen3.8-27b | 3 | 3/6 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 67 matched, 63 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rigobello_1982.pdf` | Rigobello MP et al., Pharmacokinetics of fructose-1, 6-dipho…, Il Farmaco; edizione scient… (1982) | popPK | 6 | not captured | [7128804](https://pubmed.ncbi.nlm.nih.gov/7128804) | The study is a pharmacokinetic investigation of fructose-1, 6-diphosphate in rats, but the provided evidence only contains qualitative descriptions (e.g., "highest amount," "maximal activity") without any specific quantitative parameter values (CL, V, t1/2). |
| `Xu_2008.pdf` | Xu K et al., Pharmacokinetics of fructose-1,6-diphos…, Pharmacological research (2008) | popPK | 6 | [10.1016/j.phrs.2008.01.008](https://doi.org/10.1016/j.phrs.2008.01.008) | [18325780](https://pubmed.ncbi.nlm.nih.gov/18325780) | The study is a pharmacokinetic investigation of fructose-1,6-diphosphate in rats, but the provided evidence contains only qualitative descriptions of concentration changes (e.g., "fall to baseline," "significant increase") without any specific quantitative parameter values (CL, V, etc.) or numeric concentration data. |
| `Sommer_1985.pdf` | Sommer P et al., Lactate dehydrogenase from Streptococcu…, Infection and immunity (1985) | pd | 5 | [10.1128/iai.47.2.489-495.1985](https://doi.org/10.1128/iai.47.2.489-495.1985) | [3917978](https://www.ncbi.nlm.nih.gov/pubmed/3917978) | metadata signals extractable PD data (sigmoid) |
| `Ekman_1976.pdf` | Ekman P et al., Comparative kinetic studies on the L-ty…, Biochimica et biophysica ac… (1976) | pd | 4 | [10.1016/0005-2744(76)90285-0](https://doi.org/10.1016/0005-2744(76)90285-0) | [4127](https://www.ncbi.nlm.nih.gov/pubmed/4127) | metadata signals extractable PD data (sigmoid) |
| `Galzigna_1989.pdf` | Galzigna L et al., Some effects of fructose-1,6-diphosphat…, Cell biochemistry and funct… (1989) | pd | 4 | [10.1002/cbf.290070203](https://doi.org/10.1002/cbf.290070203) | [2548756](https://www.ncbi.nlm.nih.gov/pubmed/2548756) | metadata signals extractable PD data (IC50) |
| `Jetten_1994.pdf` | Jetten MS et al., Structural and functional analysis of p…, Applied and environmental m… (1994) | pd | 4 | [10.1128/aem.60.7.2501-2507.1994](https://doi.org/10.1128/aem.60.7.2501-2507.1994) | [8074528](https://www.ncbi.nlm.nih.gov/pubmed/8074528) | metadata signals extractable PD data (sigmoid) |
| `Sharma_2011.pdf` | Sharma B, Kinetic Characterisation of Phosphofruc…, Enzyme research (2011) | pd | 4 | [10.4061/2011/939472](https://doi.org/10.4061/2011/939472) | [21941634](https://www.ncbi.nlm.nih.gov/pubmed/21941634) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-10-08T11:41:47.342470+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Batsios_2026 | irrelevant | 0 | 0 | The paper focuses on metabolic imaging of gliomas and lactate metabolism, containing no pharmacokinetic data for fructose 1,6-diphosphate. |
| PD | Batsios_2026 | not_relevant | 0 | 0 | The paper investigates the metabolic role of lactate in gliomas and does not report any pharmacodynamic or exposure-response relationship for fructose 1,6-diphosphate. |
| popPK | Brown_1972 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study characterizing the regulatory properties of lactate dehydrogenase, not a pharmacokinetic study. |
| PD | Brown_1972 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics and allosteric regulation of lactate dehydrogenase, not a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| popPK | Cardoso_1996 | irrelevant | 1 | 0 | The study measures the whole kidney clearance of exogenous filtration markers (likely inulin or PAH) to assess nephrotoxicity, not the pharmacokinetic disposition parameters (CL, V, etc.) of fructose-1,6-diphosphate itself. |
| popPK | Cui_2017 | irrelevant | 0 | 0 | The study is a clinical trial evaluating myocardial protective effects in children where fructose-1,6-diphosphate is used as a comparator treatment, and no pharmacokinetic parameters are reported. |
| popPK | Deepa_2023 | irrelevant | 0 | 0 | The paper is a mechanistic pathway model of glucose-stimulated insulin secretion and does not report pharmacokinetic parameters for fructose-1,6-diphosphate. |
| PD | Deepa_2023 | not_relevant | 0 | 0 | The paper presents a mechanistic kinetic model of glucose-stimulated insulin secretion in pancreatic beta-cells, not a pharmacodynamic analysis of fructose 1,6-diphosphate as a drug. |
| popPK | Didlake_1989 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of fructose 1,6-diphosphate in preventing renal ischemia injury in rats, reporting functional markers (BUN, creatinine, inulin clearance) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for the drug itself. |
| popPK | Dietzler_1975 | irrelevant | 0 | 0 | The paper is a metabolic study in Escherichia coli investigating the regulation of glycolysis and glycogen synthesis, not a pharmacokinetic study of fructose-1,6-diphosphate as a drug. |
| popPK | Dietzler_1975_2 | irrelevant | 0 | 0 | The study is a metabolic regulatory study in Escherichia coli measuring intracellular metabolite levels, not a pharmacokinetic study of fructose-1,6-diphosphate as a drug. |
| popPK | Dietzler_1975_3 | irrelevant | 0 | 0 | The paper reports enzyme kinetics (Hill equation parameters) for glycogen synthesis in E. coli, not pharmacokinetic parameters (CL, V, ka) for fructose-1,6-diphosphate. |
| popPK | Ekman_1976 | irrelevant | 0 | 0 | no_text gate: only 149 chars of text extracted (&lt; 400) |
| PD | Ekman_1976 | not_relevant | 0 | 0 | The paper studies the kinetics of pyruvate kinase enzyme activity and phosphorylation, not the pharmacodynamic or exposure-response relationship of fructose 1,6-diphosphate as a drug. |
| popPK | Galzigna_1989 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Galzigna_1989 | not_relevant | 0 | 0 | The paper investigates the mechanism of action (membrane stabilization) of fructose-1,6-diphosphate on rat myocardial tissue but does not report a quantitative exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | Götz_1975 | irrelevant | 0 | 0 | This is an in vitro biochemical study characterizing an enzyme's activation by fructose-1,6-diphosphate, not a pharmacokinetic study of the compound's disposition. |
| popPK | Hellman_1975 | irrelevant | 0 | 0 | The paper is an in-vitro metabolic study measuring the steady-state concentration of fructose-1,6-diphosphate in mouse islets under anoxic conditions, not a pharmacokinetic study reporting disposition parameters like clearance or volume for fructose-1,6-diphosphate as a drug. |
| PD | Hellman_1975 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for glucose (substrate) on glycolytic flux, not for fructose 1,6-diphosphate (which is an intermediate metabolite measured, not the drug/exposure variable). |
| PGx | Hugenholtz_2000 | not_relevant | 0 | 0 | The paper analyzes sugar metabolism in bacteria using NMR and does not report on the pharmacokinetics or pharmacodynamics of fructose-1,6-diphosphate as a drug in humans or animals. |
| popPK | Irving_1973 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme kinetics study of pyruvate kinase where fructose 1,6-diphosphate acts as an allosteric activator, not a pharmacokinetic study of fructose 1,6-diphosphate's disposition. |
| popPK | Jetten_1994 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Jetten_1994 | not_relevant | 0 | 0 | The paper analyzes the structure and function of pyruvate kinase, not the pharmacodynamics of fructose 1,6-diphosphate. |
| popPK | Kiel_1977 | irrelevant | 0 | 0 | The study investigates the enzymatic inhibition of invertase by fructose-1,6-diphosphate in *Actinomyces viscosus*, which is a mechanistic/biochemical study, not a pharmacokinetic study of the drug's disposition. |
| popPK | Li_2015 | irrelevant | 6 | 2 | The study reports PK parameters (AUC, t1/2, Cmax) primarily for rats and only descriptive data for humans; specific quantitative disposition parameters like Clearance (CL), Volume of distribution (Vd), and intercompartmental clearance (Q) are not explicitly provided in the text, though AUC and t1/2 are present. |
| popPK | Likos_1980 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme kinetics study of yeast pyruvate kinase where fructose 1,6-diphosphate is used only as a ligand, not as a subject for pharmacokinetic analysis. |
| PD | Likos_1980 | not_relevant | 0 | 0 | The paper describes the mechanism of enzyme inactivation/activation by an affinity label, not a pharmacodynamic exposure-response relationship for fructose 1,6-diphosphate as a drug. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper is a metabolomic and transcriptomic study of the plant *Isatis indigotica* and does not report pharmacokinetic parameters for fructose_16_diphosphate. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper is a comparative metabolomic and transcriptomic study of plant cultivars and does not report any pharmacodynamic or exposure-response data for fructose 1,6-diphosphate. |
| PGx | Lucotte_1975 | not_relevant | 0 | 0 | The paper discusses biochemical polymorphisms in enzymes (including fructose-1,6-bisphosphate aldolase) in quail, but does not report on fructose_16_diphosphate as a drug or its PK/PD parameters being altered by a genotype in a pharmacogenomic context. |
| popPK | Ma_2011 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for strontium fructose 1,6-diphosphate (Sr-FDP), a strontium salt, not for the subject drug fructose 1,6-diphosphate (FDP) itself. |
| popPK | Macalalad_2023 | irrelevant | 0 | 0 | The study is an in-silico screening of phytochemicals against diabetes targets and does not report pharmacokinetic parameters for fructose 1,6-diphosphate. |
| PD | Macalalad_2023 | not_relevant | 0 | 0 | The paper is an in silico study focusing on molecular docking and binding affinity for phytochemicals, containing no pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Markov_1985 | irrelevant | 0 | 0 | The study investigates the immunological and metabolic effects of fructose-1,6-diphosphate on phagocytosis and cellular energy, not its pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Markov_2007 | irrelevant | 0 | 0 | The study is a physiological investigation of FDP's effect on endotoxin-induced lung injury in sheep, reporting hemodynamic and histological outcomes rather than quantitative pharmacokinetic disposition parameters (e.g., clearance, volume of distribution) for FDP. |
| popPK | Nishikawa_2001 | irrelevant | 0 | 0 | The study characterizes the enzyme pyruvate kinase from lamprey muscle, using fructose-1,6-diphosphate only as an activator substrate, and does not report pharmacokinetic parameters for the drug. |
| PD | Nishikawa_2001 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, Hill coefficient) for pyruvate kinase in the presence of fructose-1,6-diphosphate, which is a biochemical mechanism study, not a pharmacodynamic exposure-response or dose-response analysis of the drug's effect on a biological system. |
| popPK | Ohta_1996 | irrelevant | 0 | 0 | The study investigates the metabolic effects of the drug M16209 on glucose metabolism in rats and does not report pharmacokinetic parameters for fructose 1,6-bisphosphate. |
| PGx | Paglia_1983 | not_relevant | 0 | 0 | The paper studies an enzymatic defect in human pyruvate kinase involving fructose-1,6-diphosphate as an allosteric activator, not the pharmacokinetic or pharmacodynamic profile of fructose-1,6-diphosphate as a drug. |
| popPK | Palm_2003 | irrelevant | 0 | 0 | The paper is a study of immunoreactive proteins in giardiasis, where fructose-1,6-bisphosphate aldolase is identified as a parasite antigen, not a pharmacokinetic study of the drug fructose_16_diphosphate. |
| popPK | Pardo_2026 | irrelevant | 0 | 0 | The paper is a cancer biology study focusing on mRNA translation in lung cancer, with no mention of fructose_16_diphosphate or pharmacokinetic parameters. |
| PD | Pardo_2026 | not_relevant | 0 | 0 | The paper investigates the role of eIF4A2 in lung cancer tumorigenesis and does not report any pharmacodynamic or exposure-response analysis for fructose 1,6-diphosphate. |
| popPK | Puckett_2014 | irrelevant | 0 | 0 | The paper investigates the metabolic role of fructose-1,6-bisphosphate (an endogenous metabolite) in Mycobacterium tuberculosis, not the pharmacokinetics of it as a drug. |
| popPK | Pérez-Lucas_1979 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme kinetics study investigating the effect of glucagon on pyruvate kinase, where fructose 1,6-diphosphate is used solely as an allosteric regulator, not as the subject drug for pharmacokinetic analysis. |
| PD | Pérez-Lucas_1979 | not_relevant | 3 | 2 | The paper reports kinetic parameters (K0.5, Vmax, nH) of an enzyme under different conditions, which is enzyme kinetics, not a pharmacodynamic exposure-response or dose-response relationship for the drug fructose 1,6-diphosphate. |
| popPK | Rigobello_1982 | relevant | 6 | 0 | The study is a pharmacokinetic investigation of fructose-1, 6-diphosphate in rats, but the provided evidence only contains qualitative descriptions (e.g., "highest amount," "maximal activity") without any specific quantitative parameter values (CL, V, t1/2). |
| popPK | Sandras_2026 | irrelevant | 0 | 0 | The study measures intracellular metabolite concentrations and turnover in cell lines via NMR, not systemic pharmacokinetic disposition parameters (CL, V, etc.) for fructose 1,6 bisphosphate as a drug. |
| popPK | Shan_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on apigenin's effect on PKM2, where fructose-1,6-diphosphate is used only as a co-factor/comparator, and no pharmacokinetic parameters are reported. |
| PD | Shan_2017 | not_relevant | 0 | 0 | The paper reports IC50 values for Apigenin, not Fructose 1,6-diphosphate (FBP); FBP is only mentioned as a control that does not reverse Apigenin's inhibition, with no PD parameters provided for FBP itself. |
| popPK | Sharma_2011 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Sharma_2011 | not_relevant | 0 | 0 | The paper characterizes the enzyme phosphofructokinase in a parasite, not the pharmacodynamic response of a drug (fructose 1,6-diphosphate) in a biological system. |
| popPK | Sommer_1985 | irrelevant | 0 | 0 | no_text gate: only 207 chars of text extracted (&lt; 400) |
| PD | Sommer_1985 | not_relevant | 0 | 0 | The paper characterizes lactate dehydrogenase from Streptococcus mutans and does not report any pharmacodynamic or exposure-response data for fructose 1,6-diphosphate. |
| popPK | Tarsi_1985 | irrelevant | 0 | 0 | no_text gate: only 305 chars of text extracted (&lt; 400) |
| popPK | Tashima_1975 | irrelevant | 0 | 0 | The paper is an in-vitro enzyme kinetic study of fructose-1,6-diphosphatase, not a pharmacokinetic study of fructose-1,6-diphosphate. |
| popPK | Tharmalingam_2026 | irrelevant | 0 | 0 | The paper studies the antimicrobial mechanism of Candesartan cilexetil against MRSA and does not involve fructose_16_diphosphate or its pharmacokinetics. |
| PD | Tharmalingam_2026 | not_relevant | 0 | 0 | The paper investigates the antimicrobial mechanism of Candesartan cilexetil, not fructose 1,6-diphosphate, and does not report pharmacodynamic parameters for the specified drug. |
| popPK | Tsao_1975 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study of pyruvate kinase in Neurospora crassa, where fructose-1,6-diphosphate is an activator, not a drug subject to pharmacokinetic analysis. |
| PD | Tsao_1975 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics (Michaelis-Menten/Hill) of pyruvate kinase, not a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| popPK | Wang_2012 | irrelevant | 0 | 0 | The study focuses on propofol pharmacokinetics, not fructose_16_diphosphate. |
| PD | Wang_2012 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic (PK) modeling of propofol clearance scaling with bodyweight and does not contain any pharmacodynamic (PD) or exposure-response analysis for fructose 1,6-diphosphate or any other drug. |
| popPK | Xiong_2025 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic study on ALDOA inhibitors where fructose-1,6-diphosphate is a substrate, not a subject drug for pharmacokinetic analysis. |
| PD | Xiong_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for inhibitors of the enzyme Aldolase A, not a pharmacodynamic exposure-response relationship for fructose 1,6-diphosphate (which is the substrate). |
| popPK | Xu_2008 | irrelevant | 6 | 0 | The study is a pharmacokinetic investigation of fructose-1,6-diphosphate in rats, but the provided evidence contains only qualitative descriptions of concentration changes (e.g., "fall to baseline," "significant increase") without any specific quantitative parameter values (CL, V, etc.) or numeric concentration data. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper studies omentin-1's role in lung fibrosis and glycolysis (mentioning FBP treatment in fibroblasts) but contains no pharmacokinetic data for fructose_1,6-diphosphate. |
| popPK | de_2021 | irrelevant | 0 | 0 | The paper focuses on metabolic control analysis in cancer cells and does not report pharmacokinetic parameters for fructose 1,6-diphosphate. |
| PD | de_2021 | not_relevant | 0 | 0 | The paper applies Metabolic Control Analysis to infer metabolic drivers of CDK4/6 inhibition in cancer cells; it does not report a pharmacodynamic exposure-response or dose-response relationship for fructose 1,6-diphosphate as a drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
