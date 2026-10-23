<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;fosfocreatine&quot;}]"></div>

# fosfocreatine

- **generic name:** fosfocreatine
- **ATC codes:** `C01EB06`
- **DrugBank:** [DB13191](https://go.drugbank.com/drugs/DB13191) · **PubChem:** none
- **groups:** investigational, nutraceutical

## About

Fosfocreatine (creatine phosphate) is a cardiotonic agent classified under other cardiac preparations, investigated for heart conditions. It remains investigational and is also considered a nutraceutical; it is not an authorised medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1984607](https://www.wikidata.org/wiki/Q1984607) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fosfocreatine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CKB (target), CKM (target), CKMT1A (target), CKMT2 (target), GAMT (product), SLC6A8 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 11:41 | 0:44 | 0/0/0 | 0/0/0 | 0/0/0 | 64,906/3,362 | einfracz / qwen3.8-27b | 2 | 2/12 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 353 matched, 85 returned
- **screened:** 3  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hebisch_1993.pdf` | Hebisch S et al., Influence of 2,3-butanedione monoxime o…, Basic research in cardiology (1993) | pd | 5 | [10.1007/BF00788875](https://doi.org/10.1007/BF00788875) | [8147822](https://www.ncbi.nlm.nih.gov/pubmed/8147822) | metadata signals extractable PD data (IC50) |
| `Nichols_1990.pdf` | Nichols CG et al., The regulation of ATP-sensitive K+ chan…, The Journal of physiology (1990) | pd | 5 | [10.1113/jphysiol.1990.sp018013](https://doi.org/10.1113/jphysiol.1990.sp018013) | [2388163](https://www.ncbi.nlm.nih.gov/pubmed/2388163) | metadata signals extractable PD data (sigmoid) |
| `Asou_1988.pdf` | Asou T et al., Optimal timing for application of ventr…, ASAIO transactions (1988) | pd | 4 |  | [3196547](https://www.ncbi.nlm.nih.gov/pubmed/3196547) | metadata signals extractable PD data (Emax) |
| `Künstlinger_1987.pdf` | Künstlinger U et al., Metabolic changes during volleyball mat…, International journal of sp… (1987) | pd | 4 | [10.1055/s-2008-1025676](https://doi.org/10.1055/s-2008-1025676) | [3679645](https://www.ncbi.nlm.nih.gov/pubmed/3679645) | metadata signals extractable PD data (concentrationeffect) |
| `Starnes_1982.pdf` | Starnes VA et al., Functional and metabolic preservation o…, The Annals of thoracic surg… (1982) | pd | 4 | [10.1016/s0003-4975(10)60853-3](https://doi.org/10.1016/s0003-4975(10)60853-3) | [7092401](https://www.ncbi.nlm.nih.gov/pubmed/7092401) | metadata signals extractable PD data (emax) |

<sub>queue written 2026-10-08 11:40 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andrews_1996 | irrelevant | 0 | 0 | The study investigates the effect of L-lactate on muscle contractility in rabbit fibers and does not measure pharmacokinetic parameters for fosfocreatine. |
| PD | Andrews_1996 | not_relevant | 0 | 0 | The paper investigates the effect of L-lactate on muscle contractility, not fosfocreatine, and does not report a pharmacodynamic model or exposure-response relationship for the target drug. |
| popPK | Asou_1988 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Asou_1988 | not_relevant | 0 | 0 | The paper is an experimental study on ventricular assist devices and does not report any pharmacodynamic or exposure-response data for fosfocreatine. |
| popPK | Baiardi_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dalbavancin, not fosfocreatine. |
| PD | Baiardi_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of Dalbavancin and target attainment (PTA) for a specific PK/PD index (fT&gt;MIC), but it does not report a pharmacodynamic model (e.g., Emax, IC50) or an exposure-response relationship for fosfocreatine. |
| popPK | Barnett_1983 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on glucocorticoid receptors and does not report pharmacokinetic parameters for fosfocreatine. |
| PD | Barnett_1983 | not_relevant | 0 | 0 | The paper studies the effect of ATP/ADP on glucocorticoid receptors in vitro and does not report any pharmacodynamic or exposure-response relationship for fosfocreatine. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic models for therapeutic enzymes in lysosomal storage diseases and does not involve the drug fosfocreatine. |
| PD | Barzel_2026 | not_relevant | 1 | 0 | The paper is a review of therapeutic enzymes in lysosomal storage diseases and does not contain any data, analysis, or parameters for fosfocreatine. |
| PGx | Bocca_2018 | not_relevant | 0 | 0 | The paper studies endogenous metabolomics in OPA1-knockout cells and does not involve the administration of the drug fosfocreatine. |
| popPK | Burges_1991 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of amlodipine, not fosfocreatine. |
| PD | Burges_1991 | not_relevant | 0 | 0 | The paper discusses amlodipine, not fosfocreatine, and contains no numeric PD parameters or exposure-response data. |
| popPK | Cai_2016 | irrelevant | 0 | 0 | The paper investigates the enzymatic inhibition of creatine kinase by Cadmium, not the pharmacokinetics of fosfocreatine. |
| PD | Cai_2016 | not_relevant | 0 | 0 | The paper investigates the enzymatic inhibition kinetics of creatine kinase by Cadmium (Cd2+), not the pharmacodynamics of the drug fosfocreatine. |
| popPK | Cendrós_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of enflicoxib, not fosfocreatine. |
| PD | Cendrós_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model validation for enflicoxib but contains no pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| popPK | Christakis_1986 | irrelevant | 0 | 0 | The paper studies diltiazem cardioplegia and does not report pharmacokinetic parameters for fosfocreatine. |
| PD | Christakis_1986 | not_relevant | 2 | 1 | The paper discusses diltiazem (not fosfocreatine) and only qualitatively mentions a dose-response relationship without providing numeric PD parameters or a formal model. |
| popPK | Colclasure_1995 | irrelevant | 0 | 0 | The paper investigates the role of creatine kinase in red blood cell transport mechanisms and does not report pharmacokinetic parameters for fosfocreatine. |
| PD | Colclasure_1995 | not_relevant | 0 | 0 | The paper investigates the role of creatine kinase in red blood cell physiology, not the pharmacodynamics of the drug fosfocreatine. |
| PGx | Connolly_2019 | not_relevant | 0 | 0 | The paper studies the metabolome of cattle to predict carcass traits and does not involve the drug fosfocreatine, human pharmacogenomics, or PK/PD parameters. |
| popPK | Fedosov_1994 | irrelevant | 0 | 0 | The paper describes a theoretical mathematical model of cellular energy metabolism (ADP-ATP and Cr-CrP shuttles) and does not report in vivo pharmacokinetic parameters for the drug fosfocreatine. |
| PGx | Fernandez_2002 | not_relevant | 0 | 0 | The paper studies post-mortem meat quality in pigs related to halothane genotype, not the pharmacokinetics or pharmacodynamics of the drug fosfocreatine. |
| PGx | Friedman_1989 | not_relevant | 0 | 0 | The paper describes the developmental expression of creatine kinase isozymes in the lens and does not investigate the pharmacokinetics or pharmacodynamics of the drug fosfocreatine. |
| popPK | Ganguly_2021 | irrelevant | 0 | 0 | The study focuses on cyclocreatine (CCR) and its liposomal delivery, not fosfocreatine, and does not report PK parameters for the target drug. |
| popPK | Giacometti_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Dalbavancin, not fosfocreatine. |
| PD | Giacometti_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PK) modeling of Dalbavancin using Neural ODEs and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Gordji-Nejad_2026 | irrelevant | 0 | 0 | The study investigates the cognitive effects of creatine monohydrate on sleep deprivation and does not report any pharmacokinetic parameters for fosfocreatine. |
| PD | Gordji-Nejad_2026 | not_relevant | 2 | 1 | The study reports qualitative cognitive improvements and a percentage change in performance for a specific dose, but it does not provide plasma concentration data, an exposure-response curve, or numeric PD parameters (e.g., EC50, Emax) required to define a pharmacodynamic relationship. |
| popPK | Gu_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rivaroxaban, not fosfocreatine. |
| PD | Gu_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not fosfocreatine, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Hebisch_1993 | irrelevant | 0 | 0 | The study investigates the metabolic effects of 2,3-butanedione monoxime on heart energy status and does not report pharmacokinetic parameters for fosfocreatine. |
| PD | Hebisch_1993 | not_relevant | 0 | 0 | The paper studies 2,3-butanedione monoxime (BDM), not fosfocreatine, and reports IC50 values for BDM's inhibition of enzymes, not a PD relationship for fosfocreatine. |
| popPK | Hu_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of utreloxastat, not fosfocreatine. |
| PD | Hu_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetic (PopPK) modeling of utreloxastat, specifically time-varying clearance, and does not report any pharmacodynamic (PD) or exposure-response data for fosfocreatine or any other drug. |
| popPK | Huestis_2025 | irrelevant | 0 | 0 | The paper describes pharmacokinetic models for MDMA, not fosfocreatine. |
| PD | Huestis_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of MDMA, including population and physiologically based PK models, and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Iwama_2024 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for febuxostat, not fosfocreatine. |
| PD | Iwama_2024 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for febuxostat, not fosfocreatine, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Jian_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for Pegbing (peginterferon alpha-2b), not fosfocreatine. |
| PD | Jian_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for Pegbing (peginterferon alpha-2b), not fosfocreatine, and focuses solely on PK parameters and covariates without reporting any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Jung_2006 | irrelevant | 0 | 0 | The paper studies the pharmacological profile of KR-33028, not fosfocreatine, and contains no PK parameters for the target drug. |
| PD | Jung_2006 | not_relevant | 0 | 0 | The paper reports pharmacological data for KR-33028, not fosfocreatine. |
| popPK | Kakei_1985 | irrelevant | 0 | 0 | The paper investigates the biophysics of potassium channels in guinea-pig heart cells and mentions creatine phosphate (a related compound) only as a non-blocking agent in an electrophysiological experiment, containing no pharmacokinetic data for fosfocreatine. |
| PD | Kakei_1985 | not_relevant | 0 | 0 | The paper studies the biophysical properties of potassium channels in guinea-pig cells and explicitly states that creatine phosphate (fosfocreatine) does not block the channel; it reports no pharmacodynamic or exposure-response relationship for fosfocreatine. |
| popPK | Karamat_2017 | irrelevant | 0 | 0 | The study investigates beta-guanidinopropionic acid (GPA) and creatine, not fosfocreatine, and does not report PK parameters for the target drug. |
| PD | Karamat_2017 | not_relevant | 0 | 0 | The paper is a first-in-human safety trial that reports plasma concentrations but does not assess or report any pharmacodynamic effects or exposure-response relationships. |
| popPK | Kauffenstein_2004 | irrelevant | 0 | 0 | The paper is a pharmacological study on P2Y12 receptor antagonism by ATP nucleotides and does not report pharmacokinetic parameters for fosfocreatine. |
| PD | Kauffenstein_2004 | not_relevant | 0 | 0 | The paper studies ATP nucleotides and their analogs (e.g., 2MeSATP, ATP, 2ClATP) at P2Y12 receptors, not fosfocreatine; while it mentions creatine phosphate (CP) as a regeneration agent, it does not report a PD or exposure-response relationship for fosfocreatine itself. |
| PGx | Klont_1994 | not_relevant | 0 | 0 | The paper examines dantrolene's effects on pigs of different genotypes, but it does not report on fosfocreatine. |
| PGx | Klont_1995 | not_relevant | 0 | 0 | The paper discusses the effect of halothane genotype and temperature on muscle metabolism in pigs, but it does not investigate the drug fosfocreatine or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Klont_1995_2 | not_relevant | 0 | 0 | The paper discusses preslaughter exercise and halothane genotypes, not the pharmacokinetics or pharmacodynamics of the drug fosfocreatine. |
| popPK | Ko_1994 | irrelevant | 0 | 0 | The paper studies the pharmacology of phorbol esters in platelets and is unrelated to the pharmacokinetics of fosfocreatine. |
| PD | Ko_1994 | not_relevant | 0 | 0 | The paper studies the pharmacology of Phorbol 12,13-dibutyrate (PDBu) on platelets, not fosfocreatine. |
| popPK | Komatsu_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefazolin, not fosfocreatine. |
| PD | Komatsu_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of cefazolin, not fosfocreatine, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Künstlinger_1987 | irrelevant | 0 | 0 | The paper studies metabolic changes during volleyball matches and does not report pharmacokinetic parameters for fosfocreatine. |
| PD | Künstlinger_1987 | not_relevant | 0 | 0 | The paper discusses metabolic changes during volleyball matches and does not mention fosfocreatine or report any pharmacodynamic or exposure-response data. |
| popPK | Lee_2005 | irrelevant | 0 | 0 | The study investigates the cardioprotective effects of KR-32570 in rat hearts and does not report pharmacokinetic parameters for fosfocreatine. |
| PD | Lee_2005 | not_relevant | 0 | 0 | The paper studies KR-32570, not fosfocreatine. |
| popPK | Lee_2006 | irrelevant | 0 | 0 | The study investigates the antiplatelet mechanism of DK-002 and does not report pharmacokinetic parameters for fosfocreatine. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper studies 17-DMAG, quetiapine, clozapine, and ziprasidone, not fosfocreatine. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (PK) model selection using multi-objective optimization for 17-DMAG, quetiapine, clozapine, and ziprasidone, and does not report any pharmacodynamic (PD) or exposure-response relationships for fosfocreatine or any other drug. |
| PGx | Lundström_1989 | not_relevant | 0 | 0 | The paper investigates the effect of the halothane genotype on muscle metabolism and meat quality in pigs, not the pharmacokinetics or pharmacodynamics of the drug fosfocreatine. |
| popPK | Luong_2009 | irrelevant | 0 | 0 | This study examines in vitro cellular toxicity mechanisms in chick cardiomyocytes, not the pharmacokinetic parameters of fosfocreatine. |
| PD | Luong_2009 | not_relevant | 0 | 0 | The paper studies arsenate, verapamil, and creatine, but does not report any pharmacodynamic or exposure-response data for fosfocreatine. |
| popPK | Maie_1991 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding fosfocreatine pharmacokinetics. |
| PD | Maie_1991 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, drug information, or pharmacodynamic data for fosfocreatine. |
| popPK | Mitsuyama_2013 | irrelevant | 0 | 0 | The study investigates the mechanism of KATP channels in rat myocytes and mentions creatine phosphate only as a regulator, without providing any pharmacokinetic parameters for fosfocreatine. |
| PD | Mitsuyama_2013 | not_relevant | 0 | 0 | The paper investigates the effect of hypo-osmotic stress on pinacidil-induced K+ channel currents and does not report any pharmacodynamic or exposure-response data for fosfocreatine. |
| popPK | Munhall_2026 | irrelevant | 0 | 0 | The study investigates the efficacy of cilastatin sodium in pigs, not the pharmacokinetics of fosfocreatine. |
| PD | Munhall_2026 | not_relevant | 0 | 0 | The paper investigates cilastatin sodium, not fosfocreatine, and reports efficacy outcomes (GFR, creatinine) without any pharmacokinetic data or exposure-response modeling. |
| PGx | Nain_2008 | not_relevant | 0 | 0 | The study investigates myocardial energy metabolism in chickens and does not involve the pharmacokinetics or pharmacodynamics of the drug fosfocreatine. |
| popPK | Nichols_1990 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PD | Nichols_1990 | not_relevant | 0 | 0 | The paper investigates the mechanism of ATP-sensitive K+ channel regulation in rat ventricular myocytes and does not mention fosfocreatine or report any pharmacodynamic exposure-response or dose-response relationships for it. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of elafibranor, not fosfocreatine. |
| PD | Ooi_2026 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics and pharmacodynamics of elafibranor, not fosfocreatine. |
| popPK | Perlmutter_1990 | irrelevant | 0 | 0 | The study investigates the effects of lignocaine on swine, not the pharmacokinetics of fosfocreatine. |
| PD | Perlmutter_1990 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of lignocaine, not fosfocreatine. |
| popPK | Philipp_2026 | irrelevant | 0 | 0 | The paper is a methodological study using a simulation based on a dupilumab case study and does not involve fosfocreatine. |
| PD | Philipp_2026 | not_relevant | 0 | 0 | The paper focuses on statistical methods for covariate analysis in PK simulations (dupilumab) and does not report any pharmacodynamic or exposure-response data for fosfocreatine. |
| popPK | Phuong_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis on the association between serum creatinine levels and Type 2 Diabetes risk, not a pharmacokinetic study of fosfocreatine. |
| PD | Phuong_2025 | not_relevant | 0 | 0 | The paper is a meta-analysis of epidemiological associations between serum creatinine levels and T2DM risk, not a pharmacodynamic study of the drug fosfocreatine. |
| PGx | Rao_2015 | not_relevant | 0 | 0 | The paper investigates the effect of tumor genotypes on endogenous metabolite levels (e.g., creatine) in pheochromocytomas, not the pharmacokinetics or pharmacodynamics of the drug fosfocreatine. |
| popPK | Robinson_1984 | irrelevant | 1 | 0 | The study investigates the myocardial protective effects of creatine phosphate (a related compound, not fosfocreatine) in a rat model and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for fosfocreatine. |
| popPK | Robinson_1987 | irrelevant | 0 | 0 | The study evaluates myocardial protection efficacy in an isolated heart model and does not report pharmacokinetic parameters for fosfocreatine. |
| popPK | Robinson_1991 | irrelevant | 0 | 0 | The study investigates the optimal calcium concentration in cardioplegic solution for myocardial protection and does not report pharmacokinetic parameters for fosfocreatine. |
| popPK | Semb_1997 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on sheep cardiac Purkinje fibers regarding Na,K-pump activity and does not involve fosfocreatine pharmacokinetics. |
| popPK | Sheu_1992 | irrelevant | 0 | 0 | The paper studies the pharmacological effect of triflavin on platelet aggregation and does not report pharmacokinetic parameters for fosfocreatine. |
| PD | Sheu_1992 | not_relevant | 0 | 0 | The paper studies triflavin, not fosfocreatine; creatine phosphate is only used as a control agent. |
| popPK | Shoshani_1999 | irrelevant | 0 | 0 | The paper describes the enzymatic synthesis and binding properties of a dideoxyadenosine analog, not the pharmacokinetics of fosfocreatine. |
| PD | Shoshani_1999 | not_relevant | 0 | 0 | The paper reports the synthesis and binding/inhibition properties of a dideoxyadenosine analog, not fosfocreatine; fosfocreatine is only mentioned as a reagent in the synthesis. |
| popPK | Souhrada_1979 | irrelevant | 0 | 0 | The study investigates the role of glucose in airway smooth muscle contractility and does not involve fosfocreatine or pharmacokinetic parameters. |
| PD | Souhrada_1979 | not_relevant | 0 | 0 | The paper investigates the effect of glucose on airway smooth muscle contractility in response to histamine, carbachol, and acetylcholine, and does not mention or study fosfocreatine. |
| popPK | Starnes_1982 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Starnes_1982 | not_relevant | 0 | 0 | The paper studies verapamil, not fosfocreatine, and reports only qualitative functional recovery data without concentration-effect modeling. |
| popPK | Sukhram_2026 | irrelevant | 0 | 0 | The paper is a review of ketamine pharmacokinetics in diabetes and does not contain data for fosfocreatine. |
| PD | Sukhram_2026 | not_relevant | 0 | 0 | The paper is a scoping review of ketamine in diabetes and does not report any pharmacodynamic data or numeric PD parameters for fosfocreatine. |
| popPK | Suzuki_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for mycophenolic acid (MPA), not fosfocreatine. |
| PD | Suzuki_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of mycophenolic acid and does not report any pharmacodynamic (PD) or exposure-response relationships for fosfocreatine or any other drug. |
| popPK | Tachet_2025 | irrelevant | 0 | 0 | The study focuses on Janus Kinase Inhibitors (JAKIs) and does not mention fosfocreatine. |
| PD | Tachet_2025 | not_relevant | 0 | 0 | The paper is a protocol for a prospective observational study on Janus Kinase Inhibitors (JAKIs) and does not report any results, data, or numeric parameters for fosfocreatine. |
| popPK | Tamuli_2025 | irrelevant | 0 | 0 | The study is an in-vitro NMR metabolomics investigation of 6-hydroxydopamine toxicity in cell lines and does not report pharmacokinetic parameters for fosfocreatine. |
| PD | Tamuli_2025 | not_relevant | 0 | 0 | The paper investigates the mode of action of 6-hydroxydopamine using metabolomics and does not report any pharmacodynamic or exposure-response relationship for fosfocreatine. |
| popPK | Tsoukatos_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on platelet activation by cardiolipins and does not report pharmacokinetic parameters for fosfocreatine. |
| popPK | Tsuchiwata_2026 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for tofacitinib, not fosfocreatine. |
| PD | Tsuchiwata_2026 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of tofacitinib, not fosfocreatine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Tuffal_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of avalglucosidase alfa, not fosfocreatine. |
| PD | Tuffal_2023 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic (PK) model for avalglucosidase alfa, not fosfocreatine, and reports no pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Wang_1985 | irrelevant | 0 | 0 | The paper studies the antiplatelet effects of a herbal extract (Agrimonia pilosa) and does not involve fosfocreatine or pharmacokinetic parameters. |
| PD | Wang_1985 | not_relevant | 0 | 0 | The paper studies the antiplatelet effect of Hsien-Ho-T'sao (Agrimonia pilosa), not fosfocreatine. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The paper investigates the enzymatic inactivation of creatine kinase by hydrogen peroxide and does not report pharmacokinetic parameters for fosfocreatine. |
| PD | Wang_2017 | not_relevant | 0 | 0 | The paper investigates the inactivation of creatine kinase by hydrogen peroxide, not the pharmacodynamics of fosfocreatine. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of omadacycline, not fosfocreatine. |
| PD | Wang_2024 | not_relevant | 0 | 0 | The paper analyzes omadacycline, not fosfocreatine, and focuses on PK/PD target attainment (MIC-based) rather than a concentration-effect model with numeric PD parameters like Emax or EC50. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetics for firsekibart (an anti-IL-1β antibody), not fosfocreatine. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper reports pharmacokinetics and exposure-response analysis for firsekibart, not fosfocreatine. |
| popPK | Westra_2024 | irrelevant | 0 | 0 | The paper investigates the population pharmacokinetics of osimertinib, not fosfocreatine. |
| PD | Westra_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on the external validation of population pharmacokinetic (popPK) models for osimertinib and does not report any pharmacodynamic (PD) or exposure-response analysis, nor does it provide numeric PD parameters. |
| popPK | Wickramasinghe_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of ribociclib and its metabolite LEQ803, not fosfocreatine. |
| PD | Wickramasinghe_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of ribociclib and the predictive value of a biomarker for metabolism, containing no pharmacodynamic or exposure-response analysis for fosfocreatine. |
| popPK | Wilson_2017 | irrelevant | 0 | 0 | The paper is a mechanistic model of glucose-stimulated insulin release and does not report pharmacokinetic parameters for fosfocreatine. |
| PD | Wilson_2017 | not_relevant | 0 | 0 | The paper models glucose-stimulated insulin release and does not report any pharmacodynamic or exposure-response data for fosfocreatine. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The paper studies the cellular kinetics of idcabtagene vicleucel (a CAR-T therapy), not fosfocreatine. |
| PD | Wu_2025 | not_relevant | 0 | 0 | The paper reports cellular kinetics (PK) of idecabtagene vicleucel, not fosfocreatine, and does not provide a pharmacodynamic exposure-response model for the queried drug. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper studies daptomycin pharmacokinetics, not fosfocreatine. |
| PD | Xie_2026 | not_relevant | 0 | 0 | The paper focuses on daptomycin population pharmacokinetics (PopPK) and precision dosing, not fosfocreatine, and does not report any pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lacosamide, not fosfocreatine. |
| PD | Yu_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for lacosamide, not fosfocreatine, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of hydromethylthionine, not fosfocreatine. |
| PD | van_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the population pharmacokinetics (PK) of hydromethylthionine and does not report any pharmacodynamic (PD) or exposure-response models or numeric PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfosfocreatine%5D&body=Drug%3A%20fosfocreatine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fosfocreatine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
