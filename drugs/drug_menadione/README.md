<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;menadione&quot;}]"></div>

# menadione

- **generic name:** menadione
- **ATC codes:** `B02BA02`
- **DrugBank:** [DB00170](https://go.drugbank.com/drugs/DB00170) · **PubChem:** [CID 4055](https://pubchem.ncbi.nlm.nih.gov/compound/4055)
- **molar mass:** 172.18 g/mol (C11H8O2) — DrugBank
- **groups:** approved, nutraceutical

## About

Menadione, a synthetic form of vitamin K, is used to treat clotting problems such as hypoprothrombinemia and other blood coagulation disorders. It is approved as a nutraceutical and is used as a vitamin K supplement, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q192471](https://www.wikidata.org/wiki/Q192471) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Bundschuh_1995_MTT](drugs/drug_menadione/pd_Bundschuh_1995_MTT.md) | formazan production capacity ← menadione · direct sigmoid Emax (Hill) effect | — | Bundschuh DS et al., Isolation and characterization of rat p…, In vitro cellular & develop… (1995) | [10.1007/BF02634089](https://doi.org/10.1007/BF02634089) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Majiene_2019_C6_cell_viability](drugs/drug_menadione/pd_Majiene_2019_C6_cell_viability.md) | C6 cell viability ← menadione · direct sigmoid Emax (Hill) effect | — | Majiene D et al., Comparison of the Effect of Native 1,4-…, Nutrients (2019) | [10.3390/nu11061294](https://doi.org/10.3390/nu11061294) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Wang_2021_3CLpro](drugs/drug_menadione/pd_Wang_2021_3CLpro.md) | SARS-CoV-2 3CLpro activity biomarker turnover ← Vitamin K3 | — | Wang R et al., Identification of Vitamin K3 and its an…, International journal of bi… (2021) | [10.1016/j.ijbiomac.2021.04.129](https://doi.org/10.1016/j.ijbiomac.2021.04.129) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Wang_2021_kobs](drugs/drug_menadione/pd_Wang_2021_kobs.md) | SARS-CoV-2 3CLpro inactivation rate biomarker turnover ← Vitamin K3 | — | Wang R et al., Identification of Vitamin K3 and its an…, International journal of bi… (2021) | [10.1016/j.ijbiomac.2021.04.129](https://doi.org/10.1016/j.ijbiomac.2021.04.129) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yue_2002_infarction](drugs/drug_menadione/pd_Yue_2002_infarction.md) | infarction ← menadione · direct Emax (saturable) effect | — | Yue Y et al., The relative order of mK(ATP) channels,…, Cardiovascular research (2002) | [10.1016/s0008-6363(02)00452-2](https://doi.org/10.1016/s0008-6363(02)00452-2) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **NQO1** | `Q321` · EC50 | metabolism | [Glorieux_2019](drugs/drug_menadione/pgx_Glorieux_2019_NQO1_Q321.md) | Glorieux C et al., Cancer Cell Sensitivity to Redox-Cyclin…, Antioxidants (Basel, Switze… (2019) | [10.3390/antiox8090369](https://doi.org/10.3390/antiox8090369) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=menadione).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `AOX1` inhibitor, `CYP1A2` inducer/inhibitor, `CYP2A6` inhibitor, `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `NQO1` metabolism/unknown, `XDH` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer/inhibitor, `CYP1B1` inhibitor | DrugBank actor |
| metabolism | skin | `CYP1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer/inhibitor, `CYP3A4` inhibitor, `CYP3A5` inhibitor, `XDH` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: BGLAP (target), F2 (activator), F9 (activator), GGCX (cofactor), MTHFR (substrate), NQO2 (unknown), PROC (activator), PROS1 (activator), VKORC1 (cofactor), VKORC1L1 (cofactor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 19:18 | 10:44 | 0/0/0 | 4/0/0 | 0/0/1 | 434,321/9,158 | ollama / qwen3.8:27b-mtp-q8_0 | 29 | 9/30 | 28/1 | 0 |

## Coverage

- **PubMed hits:** 250 matched, 138 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hu_1995.pdf` | Hu OY et al., Determination of anticancer drug vitami…, Journal of chromatography.… (1995) | popPK | 8 | [10.1016/0378-4347(94)00572-m](https://doi.org/10.1016/0378-4347(94)00572-m) | [7633606](https://pubmed.ncbi.nlm.nih.gov/7633606) | The study reports a two-compartment model and a specific half-life for menadione/menadiol in rabbits, but most quantitative parameters (CL, V, Q) are not explicitly listed in the provided text. |
| `Weidert_2014.pdf` | Weidert ER et al., Inhibition of xanthine oxidase by the a…, Nitric oxide : biology and… (2014) | pd | 5 | [10.1016/j.niox.2013.12.010](https://doi.org/10.1016/j.niox.2013.12.010) | [24406683](https://www.ncbi.nlm.nih.gov/pubmed/24406683) | metadata signals extractable PD data (EC50) |
| `Wilton_1993.pdf` | Wilton JC et al., Stability and optimization of canalicul…, Cell biochemistry and funct… (1993) | pd | 5 | [10.1002/cbf.290110305](https://doi.org/10.1002/cbf.290110305) | [8403231](https://www.ncbi.nlm.nih.gov/pubmed/8403231) | metadata signals extractable PD data (IC50) |
| `Szotáková_2013.pdf` | Szotáková B et al., Inhibitory effect of anthocyanidins on…, Xenobiotica; the fate of fo… (2013) | pd | 4 | [10.3109/00498254.2012.756557](https://doi.org/10.3109/00498254.2012.756557) | [23320385](https://www.ncbi.nlm.nih.gov/pubmed/23320385) | metadata signals extractable PD data (IC50) |
| `Thomas_1995.pdf` | Thomas J et al., Acute stimulation of glucose transport…, Biochimica et biophysica ac… (1995) | pd | 4 | [10.1016/0167-4889(95)00049-x](https://doi.org/10.1016/0167-4889(95)00049-x) | [7626667](https://www.ncbi.nlm.nih.gov/pubmed/7626667) | metadata signals extractable PD data (EC50) |
| `Nebert_2002.pdf` | Nebert DW et al., NAD(P)H:quinone oxidoreductase (NQO1) p…, Genetics in medicine : offi… (2002) | pgx | 8 | [10.1097/00125817-200203000-00003](https://doi.org/10.1097/00125817-200203000-00003) | [11882782](https://www.ncbi.nlm.nih.gov/pubmed/11882782) | metadata signals extractable PGX data (CYP2E1, PK/PD-context) |
| `Molnari_2012.pdf` | Molnari JC et al., Carbonyl reduction of bupropion in huma…, Xenobiotica; the fate of fo… (2012) | pgx | 7 | [10.3109/00498254.2011.643416](https://doi.org/10.3109/00498254.2011.643416) | [22339467](https://www.ncbi.nlm.nih.gov/pubmed/22339467) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Perepechaeva_2022.pdf` | Perepechaeva ML et al., Effects of prolonged subchronic benzo(α…, Drug and chemical toxicology (2022) | pgx | 7 | [10.1080/01480545.2020.1849270](https://doi.org/10.1080/01480545.2020.1849270) | [33213213](https://www.ncbi.nlm.nih.gov/pubmed/33213213) | metadata signals extractable PGX data (CYP1A, PK/PD-context) |
| `Duzhyi_2016.pdf` | Duzhyi ID et al., [HORMONALLY-GENETICALLY DEPENDENT THERA…, Klinichna khirurhiia (2016) | pgx | 5 |  | [27434945](https://www.ncbi.nlm.nih.gov/pubmed/27434945) | metadata signals extractable PGX data (VKORC1) |
| `Liang_1992.pdf` | Liang HC et al., "Oxidative stress" response in liver of…, Biochemical and biophysical… (1992) | pgx | 5 | [10.1016/0006-291x(92)91853-i](https://doi.org/10.1016/0006-291x(92)91853-i) | [1540161](https://www.ncbi.nlm.nih.gov/pubmed/1540161) | metadata signals extractable PGX data (CYP1A1) |

<sub>queue written 2026-10-05 19:10 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Akhmadishina_2018 | not_relevant | 0 | 0 | The paper studies the effect of triphenylphosphonium moieties on peptide stability and antioxidant activity, using menadione only as an oxidative stress inducer in cell assays, and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Antachopoulos_2006 | irrelevant | 0 | 0 | The study is an in-vitro antifungal susceptibility assay where menadione is used as an electron transfer agent for the XTT method, not as the subject drug for pharmacokinetic analysis. |
| popPK | Antachopoulos_2007 | irrelevant | 0 | 0 | The study is an in-vitro antifungal susceptibility assay where menadione is used as a reagent in the XTT metabolic activity assay, not as the subject drug for pharmacokinetic analysis. |
| popPK | Asami_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of apoptosis and cytotoxicity in cell lines, reporting no pharmacokinetic parameters for menadione. |
| PGx | Bandmann_1997 | not_relevant | 0 | 0 | The paper investigates the association between N-acetyltransferase 2 genotype and Parkinson's disease risk, not the pharmacokinetics or pharmacodynamics of menadione. |
| popPK | Barchowsky_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of menadione's effects on prostaglandin synthesis and oxidative stress in endothelial cells, reporting no pharmacokinetic parameters. |
| popPK | Barreiro-Costa_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro biological activity of bis(spiropyrazolone)cyclopropanes for leishmaniasis and does not involve menadione or its pharmacokinetics. |
| PD | Barreiro-Costa_2021 | not_relevant | 0 | 0 | The paper reports IC50 values for a different class of compounds (bis(spiropyrazolone)cyclopropanes) and does not mention menadione or provide any exposure-response data for it. |
| popPK | Belldina_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cysteamine, not menadione. |
| PGx | Bu-Abbas_1994 | not_relevant | 0 | 0 | The paper studies the antimutagenic effects of anthracene and does not report any pharmacogenomic effects on the PK or PD of menadione. |
| popPK | Bundschuh_1995 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay measuring EC50 values for cell viability, not a pharmacokinetic study reporting disposition parameters like clearance or volume for menadione. |
| PGx | Chuard_1997 | not_relevant | 0 | 0 | The paper discusses menadione biosynthesis defects in Staphylococcus aureus affecting antibiotic susceptibility, not human pharmacogenomics of menadione as a drug. |
| PGx | Comini_2008 | not_relevant | 0 | 0 | The paper studies the role of a protein in African trypanosomes and mentions menadione only as a negative control for growth impairment, not as a drug subject to pharmacogenomic analysis. |
| popPK | Cornely_2021 | irrelevant | 0 | 0 | no_text gate: only 181 chars of text extracted (&lt; 400) |
| PD | Cornely_2021 | not_relevant | 0 | 0 | The provided text is a conference header and does not contain any pharmacodynamic data, models, or parameters for menadione. |
| popPK | De_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NQO1-mediated protection against menadione toxicity in CHO cells, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Dehn_2004 | not_relevant | 2 | 5 | The paper reports a pharmacodynamic effect (toxicity) of menadione modulated by NQO1 genotype, but it is a secondary observation in a study focused on RH1, and no specific PK/PD parameter values or fitted effect sizes for menadione are provided. |
| popPK | Desai_2015 | irrelevant | 0 | 0 | The paper is a mechanistic signaling network study where menadione is used as a perturbation agent, not a pharmacokinetic study of menadione. |
| popPK | Dos_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and biological evaluation of menadione derivatives as P2X7 inhibitors, containing no pharmacokinetic data. |
| PGx | Duzhyi_2016 | not_relevant | 2 | 0 | The paper describes a dosing strategy based on genotype and hormone levels but does not report measured changes in pharmacokinetic or pharmacodynamic parameters. |
| PGx | Ehnert_2008 | not_relevant | 0 | 0 | The paper describes an in vitro cell model for drug metabolism and does not report pharmacogenomic effects on the PK/PD of menadione. |
| popPK | Eyles_1992 | irrelevant | 0 | 0 | The study focuses on the stereospecific reduction of haloperidol, with menadione used only as an inhibitor to characterize enzyme activity, not as the subject drug for PK parameter estimation. |
| PD | Eyles_1992 | not_relevant | 0 | 0 | The paper focuses on the stereospecific reduction of haloperidol and mentions menadione only as an enzyme inhibitor, without reporting any pharmacodynamic or exposure-response relationship for menadione itself. |
| PGx | Ferguson_2015 | not_relevant | 0 | 0 | The paper characterizes enzyme kinetics for menadione but does not report a pharmacogenomic effect on the PK or PD of menadione in vivo. |
| popPK | Finlay_2023 | irrelevant | 0 | 0 | The paper describes an in vitro bone model protocol and does not involve menadione or any pharmacokinetic analysis. |
| PD | Finlay_2023 | not_relevant | 0 | 0 | The paper describes a methodology for an in vitro bone model and does not report any pharmacodynamic or exposure-response data for menadione. |
| popPK | Gao_2017 | irrelevant | 0 | 0 | The paper uses menadione as an electrochemical mediator in a biosensor for toxicity assessment, not as a subject drug for pharmacokinetic analysis. |
| PD | Gao_2017 | not_relevant | 0 | 0 | The paper reports IC50 values for heavy metals and phenols using a biosensor where menadione is a mediator, not a drug being tested for pharmacodynamic effects. |
| popPK | Garcia_2012 | irrelevant | 0 | 0 | The study is an in vitro microbiological investigation of antibiotic susceptibility in MRSA variants, not a pharmacokinetic study of menadione. |
| PGx | Garcia_2012_2 | not_relevant | 0 | 0 | The paper investigates the intracellular activity of antibiotics against Staphylococcus aureus mutants, not the pharmacokinetics or pharmacodynamics of menadione in humans. |
| PGx | Garcia_2012_3 | not_relevant | 0 | 0 | The paper studies bacterial genetic variants (menD/hemB) affecting antibiotic efficacy, not human pharmacogenomics affecting the PK/PD of menadione. |
| popPK | Gasiewicz_1986 | irrelevant | 0 | 0 | The study examines enzyme induction (NMOR activity) by TCDD, not the pharmacokinetic disposition parameters of menadione. |
| PGx | Ginsburg_1997 | not_relevant | 0 | 0 | The paper studies the synergistic cytotoxicity of DDC and nitric oxide with oxidants (including menadione) in cell culture, but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Hart_1984 | irrelevant | 0 | 0 | The study focuses on Vitamin K1 and K2 pharmacodynamics in rabbits, not menadione (Vitamin K3) pharmacokinetics. |
| PGx | Honda_2006 | not_relevant | 0 | 0 | The paper studies the metabolism of neo-nicotinoid insecticides, not the pharmacokinetics or pharmacodynamics of menadione, which is only used as an inhibitor in the experimental setup. |
| popPK | Hu_1995 | relevant | 8 | 2 | The study reports a two-compartment model and a specific half-life for menadione/menadiol in rabbits, but most quantitative parameters (CL, V, Q) are not explicitly listed in the provided text. |
| popPK | Intagliata_2019 | irrelevant | 0 | 0 | The paper is a review of Heme Oxygenase-2 inhibitors and activators, mentioning menadione only as a structural analogue for mechanistic understanding, with no pharmacokinetic data. |
| PD | Intagliata_2019 | not_relevant | 1 | 0 | The paper is a review of HO-2 inhibitors and activators; while it mentions menadione analogues, it does not report a pharmacokinetic or pharmacodynamic exposure-response analysis with numeric PD parameters for menadione itself. |
| popPK | Jahn_1995 | irrelevant | 0 | 0 | The paper describes an in-vitro susceptibility assay where menadione is used as a reagent to enhance MTT reduction, not as a subject drug for pharmacokinetic analysis. |
| PD | Jahn_1995 | not_relevant | 0 | 0 | The paper describes a microbiological susceptibility assay where menadione is used as a reagent to enhance MTT reduction, not as a drug with a pharmacodynamic effect being modeled; no PD parameters for menadione are reported. |
| PGx | Jan_2016 | not_relevant | 0 | 0 | The paper investigates menadione as a therapeutic agent to inhibit parathion metabolism, not how genetic variants affect menadione's pharmacokinetics or pharmacodynamics. |
| popPK | Janda_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on autophagy and NQO2 inhibition where menadione is used only as a substrate/control agent, not as the subject of a pharmacokinetic analysis. |
| PD | Janda_2021 | not_relevant | 0 | 0 | The paper focuses on flavonoids (apigenin, luteolin) and does not report a pharmacodynamic or exposure-response relationship for menadione. |
| PGx | Kahl_2014 | not_relevant | 0 | 0 | The paper discusses menadione as a growth supplement for bacterial small colony variants, not as a drug subject to pharmacogenomic analysis. |
| popPK | Kandhasamy_2022 | irrelevant | 0 | 0 | The paper focuses on the fabrication of a drug-loaded scaffold for tissue engineering and reports in vitro/in vivo biological effects, but contains no pharmacokinetic parameters for menadione. |
| popPK | Ko_1990 | irrelevant | 0 | 0 | The study is a mechanistic investigation of platelet aggregation inhibition by naphthoquinones and does not report any pharmacokinetic parameters for menadione. |
| PGx | Kriegeskorte_2014 | not_relevant | 0 | 0 | The paper studies bacterial metabolism in Staphylococcus aureus, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of menadione as a drug. |
| PGx | Krzyżanowski_2014 | not_relevant | 2 | 5 | The paper reports increased cellular vulnerability (PD) to menadione in ABCG2-overexpressing cells, but it is a mechanistic study on collateral sensitivity in cancer cells, not a clinical pharmacogenomic study reporting specific PK/PD parameter changes in humans based on genotype. |
| PGx | Liang_1992 | not_relevant | 0 | 0 | The paper reports basal enzyme activities in untreated mice, not the pharmacokinetic or pharmacodynamic parameters of menadione administration. |
| popPK | Lilius_1996 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay in rainbow trout hepatocytes where menadione is used only as a test chemical to evaluate probe specificity, not as a subject for pharmacokinetic analysis. |
| PD | Lilius_1996 | not_relevant | 0 | 0 | The paper mentions menadione only as a false positive in a mitochondrial assay and does not report any concentration-effect data, EC50 values, or PD parameters for it. |
| popPK | Madelain_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of favipiravir in nonhuman primates, not menadione. |
| PD | Madelain_2017 | not_relevant | 0 | 0 | The paper focuses on favipiravir pharmacokinetics, not menadione, and does not report a PD model or numeric PD parameters for the target drug. |
| popPK | Majiene_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial function and cytotoxicity, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Martins_1992 | not_relevant | 0 | 0 | The paper describes acquired drug resistance in cell lines via chromosomal duplication and gene amplification, not a pharmacogenomic effect of a specific human gene variant on PK/PD parameters. |
| PGx | Marí_2001 | not_relevant | 0 | 0 | The paper investigates the induction of antioxidant enzymes in CYP2E1-overexpressing cells and their resistance to menadione-induced oxidative stress, but does not report pharmacokinetic or pharmacodynamic parameters of menadione itself. |
| popPK | Matzno_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Vitamin K3 (menadione) on cell cycle and cytotoxicity in Hep G2 cells, reporting no pharmacokinetic parameters. |
| PGx | Melter_2010 | not_relevant | 0 | 0 | The paper discusses bacterial small colony variants and their resistance mechanisms, not human pharmacogenomics or the PK/PD of menadione in patients. |
| popPK | Micheletti_2022 | irrelevant | 0 | 0 | The paper is a synthetic chemistry and in-vitro biological activity study of naphthoquinone derivatives, containing no pharmacokinetic data or disposition parameters for menadione. |
| popPK | Minhas_1995 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring TC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Molnari_2012 | irrelevant | 0 | 0 | The study focuses on the metabolism of bupropion, using menadione only as an inhibitor to identify enzymes, and does not report pharmacokinetic parameters for menadione. |
| PD | Molnari_2012 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics and IC50 values for menadione as an inhibitor of bupropion metabolism, which is a pharmacokinetic/enzymatic study, not a pharmacodynamic exposure-response relationship for the drug's therapeutic effect. |
| PGx | Molnari_2012 | not_relevant | 0 | 0 | The paper studies the metabolism of bupropion, not menadione, and does not report pharmacogenomic effects. |
| popPK | Nayak_2021 | irrelevant | 0 | 0 | The paper studies the effects of methotrexate on gut bacteria and is unrelated to menadione pharmacokinetics. |
| PD | Nayak_2021 | not_relevant | 0 | 0 | The paper investigates the effect of methotrexate on gut bacteria and does not mention menadione or report any pharmacodynamic parameters for it. |
| PGx | Nebert_1997 | not_relevant | 0 | 0 | The paper discusses the use of menadione as a substrate for the enzyme NAD(P)H:menadione oxidoreductase in the context of generating knockout mouse lines, but it does not report any pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of menadione itself. |
| PGx | Nebert_2002 | not_relevant | 0 | 0 | The paper discusses NQO1 polymorphisms and toxicity risks associated with benzene and general quinones, but does not report specific pharmacokinetic or pharmacodynamic parameter changes for menadione. |
| popPK | Nureye_2025 | irrelevant | 0 | 0 | The paper is a review of medicinal plants for hypertension and does not contain pharmacokinetic data for menadione. |
| PD | Nureye_2025 | not_relevant | 0 | 0 | The paper is a review of medicinal plants for hypertension in Ethiopia and does not contain any pharmacodynamic or exposure-response data for menadione. |
| popPK | Nutter_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/cytotoxicity analysis of menadione in cell lines and does not report any pharmacokinetic parameters. |
| popPK | Osada_2008 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo mechanistic and efficacy study of menadione against pancreatic cancer, reporting IC50 and molecular markers, but containing no pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Othman_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of GA2-50, not menadione. |
| popPK | Oztopcu-Vatan_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and apoptosis, reporting no pharmacokinetic parameters. |
| PGx | Parekh_1991 | not_relevant | 0 | 0 | The paper investigates the cytotoxic effects of vitamin K3 on tumor cells and thiol pools, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Pawlik_2025 | not_relevant | 0 | 0 | The paper studies the response of a fungus to menadione as an oxidative stressor, not the pharmacokinetics or pharmacodynamics of menadione in humans or animals influenced by genetic variants. |
| popPK | Pelassy_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phosphatidylserine synthesis in Jurkat cells where menadione is used only as a tool to generate hydrogen peroxide, not as the subject of pharmacokinetic analysis. |
| PGx | Perepechaeva_2022 | not_relevant | 0 | 0 | The paper investigates the effect of menadione on CYP1A expression and liver morphology in rats exposed to benzo(a)pyrene, but does not report pharmacogenomic effects on the PK or PD parameters of menadione itself. |
| PGx | Petersen_1989 | not_relevant | 0 | 0 | The paper studies gene transcription and mRNA levels in a mouse model, not the pharmacokinetic or pharmacodynamic parameters of menadione in humans or a relevant pharmacogenomic context. |
| PGx | Porter_2000 | not_relevant | 0 | 0 | The paper studies naltrexone metabolism and mentions menadione only as a chemical inhibitor, not as the drug of interest for a pharmacogenomic study. |
| popPK | Presser_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro antiprotozoal activity of menadione derivatives, containing no pharmacokinetic data or disposition parameters. |
| PD | Presser_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a series of synthesized compounds, which is a structure-activity relationship (SAR) study, not a pharmacodynamic (exposure-response) analysis for a single drug. |
| popPK | Presser_2025_2 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro antiprotozoal activity of menadione derivatives, containing no pharmacokinetic data or disposition parameters. |
| PD | Presser_2025_2 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a series of synthesized compounds, which is a structure-activity relationship (SAR) study, not a pharmacodynamic (exposure-response) analysis for a single drug. |
| popPK | Punzo_2021 | irrelevant | 0 | 0 | The study focuses on the extraction and biological activity of grape pomace polyphenols, using menadione only as a pro-oxidant agent to induce oxidative stress in cell cultures, not as a subject drug for pharmacokinetic analysis. |
| popPK | Rannug_1984 | irrelevant | 0 | 0 | The paper is a mechanistic study on mutagenicity and enzyme inhibition where menadione is used only as a co-administered agent to test interaction effects, with no pharmacokinetic parameters reported. |
| PD | Rannug_1984 | not_relevant | 1 | 0 | The paper discusses menadione only qualitatively as a potentiator of mutagenicity via redox cycling and does not provide any numeric dose-response or exposure-response parameters for it. |
| PGx | RayChaudhuri_1990 | not_relevant | 0 | 0 | The paper investigates the transcriptional regulation of the Cyp1a-1 gene and its effect on other genes (including Nmo-1), but does not report pharmacokinetic or pharmacodynamic parameters of menadione itself. |
| popPK | Rebhi_2024 | irrelevant | 0 | 0 | The paper is an in silico study on honeybee pathogens and does not involve menadione pharmacokinetics. |
| PD | Rebhi_2024 | not_relevant | 0 | 0 | The paper is an in silico study on drug target identification and molecular docking for a bacterial pathogen; it does not involve menadione or report any pharmacodynamic or exposure-response data. |
| popPK | Rocha-Valderrama_2025 | irrelevant | 0 | 0 | The paper studies the antiparasitic activity of novel 6-nitrocoumarin derivatives, not the pharmacokinetics of menadione. |
| PD | Rocha-Valderrama_2025 | not_relevant | 0 | 0 | The paper reports IC50 values for novel 6-nitrocoumarin derivatives, not for menadione, which is used only as a positive control in mechanistic ROS assays without reported dose-response parameters. |
| popPK | Rohmawaty_2025 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of a plant extract where menadione is used only as an oxidative stress inducer, not as the subject drug for PK analysis. |
| PD | Rohmawaty_2025 | not_relevant | 0 | 0 | The paper studies a plant extract (Cymbopogon nardus), not the drug menadione; menadione is used only as a positive control/inducer, and no PD parameters for menadione are reported. |
| popPK | Roignant_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and antiplasmodial activity of menadione analogues, reporting no quantitative pharmacokinetic parameters (CL, V, etc.) for menadione. |
| PD | Roignant_2025 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and in vivo ED50 (parasitemia reduction) for a library of compounds, but does not provide a concentration-effect curve, PK/PD fit, or numeric PD parameters (Emax, EC50, slope) for menadione itself. |
| popPK | Rosemond_2004 | irrelevant | 0 | 0 | The study is an in-vitro enzymology investigation of S-1360 metabolism where menadione is used only as a chemical inhibitor, not as the subject drug for PK parameter estimation. |
| PD | Rosemond_2004 | not_relevant | 0 | 0 | The paper describes in vitro enzymology and inhibition of S-1360 metabolism by menadione, not a pharmacodynamic exposure-response relationship for menadione itself. |
| PGx | Roy_1995 | not_relevant | 0 | 0 | The paper studies the metabolism of O6-benzylguanine, not menadione, and menadione is only used as an inhibitor of aldehyde oxidase. |
| popPK | Rush_2016 | irrelevant | 0 | 0 | The study is a mechanistic investigation of menadione's effect on corneal wound healing and EGFR signaling, not a pharmacokinetic study, and it does not report quantitative disposition parameters like clearance or volume. |
| popPK | Santone_1989 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assay measuring EC50 values for cell damage, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Schmalix_1996 | not_relevant | 0 | 0 | The paper studies the effect of CYPOR expression on menadione cytotoxicity (PD) in cell lines, but does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter in humans or a relevant pharmacogenomic context. |
| popPK | Shibata_1995 | irrelevant | 0 | 0 | The study focuses on mitomycin C resistance mechanisms in cell lines, and menadione is only mentioned as a collateral sensitivity agent without any pharmacokinetic parameters. |
| PD | Shibata_1995 | not_relevant | 0 | 0 | The paper focuses on Mitomycin C resistance mechanisms; menadione is only mentioned qualitatively as a collateral sensitivity without any dose-response data or numeric PD parameters. |
| PGx | Shukla_2007 | not_relevant | 0 | 0 | The paper reports that menadione is a substrate of the ABCG2 transporter but does not report any pharmacogenomic effect (gene variant/genotype) on its PK or PD parameters. |
| PGx | Sidorova_2005 | not_relevant | 0 | 0 | The study examines the induction of CYP enzymes by menadione in rats but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Sidorova_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of menadione's inhibition of CYP1A enzymes but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Siew_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of phytochemicals where menadione is used only as a positive control agent to induce oxidative stress, not as the subject of pharmacokinetic analysis. |
| PD | Siew_2023 | not_relevant | 0 | 0 | The paper reports an IC50 for Laevifolin A, not menadione, and uses menadione only as a fixed-dose inducer of oxidative stress to test genoprotection, without providing a dose-response curve or numeric PD parameters for menadione itself. |
| popPK | Soltanian_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of menadione's effect on cancer stem cell markers and cytotoxicity (IC50), reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Soltanian_2021 | not_relevant | 0 | 0 | The study investigates the anti-cancer effects of menadione on cell lines but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Sorg_2002 | irrelevant | 0 | 0 | The study investigates the effects of UVA and menadione on epidermal vitamin A and lipid peroxidation in mice, not the pharmacokinetics of menadione. |
| popPK | Sreelatha_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and biological activity of naphthoquinone derivatives, containing no pharmacokinetic data for menadione. |
| popPK | Stefanowicz-Hajduk_2022 | irrelevant | 0 | 0 | The paper is an in-vitro phytochemical and cytotoxicity study where menadione is used only as a positive control to induce oxidative stress, not as the subject of pharmacokinetic analysis. |
| PD | Stefanowicz-Hajduk_2022 | not_relevant | 0 | 0 | The paper studies a plant extract (Kalanchoe daigremontiana) and uses menadione only as a positive control for oxidative stress; it does not report a pharmacodynamic or exposure-response relationship for menadione itself. |
| popPK | Stiegler_2011 | irrelevant | 0 | 0 | The study is an in-vitro neurotoxicity assay using menadione as a cytotoxic control, not a pharmacokinetic study. |
| PD | Stiegler_2011 | not_relevant | 3 | 2 | The paper reports a qualitative ratio of EC50s for menadione (&lt; 4) but does not provide specific numeric EC50 values or a detailed dose-response curve for the drug itself. |
| PGx | Summitt_2015 | not_relevant | 0 | 0 | The paper characterizes the enzyme PRODH2 and mentions menadione only as a terminal electron acceptor in an in vitro assay, not as a drug subject to pharmacogenomic analysis. |
| popPK | Szotáková_2013 | irrelevant | 0 | 0 | Menadione is used only as a substrate for in-vitro enzyme activity assays, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Szotáková_2013 | not_relevant | 0 | 0 | The paper reports enzyme inhibition kinetics (IC50) of anthocyanidins on drug-metabolizing enzymes, not a pharmacodynamic exposure-response relationship for menadione. |
| popPK | Thomas_1995 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Thomas_1995 | not_relevant | 0 | 0 | The paper focuses on histamine-stimulated glucose transport in endothelial cells and does not mention menadione or report any pharmacodynamic parameters for it. |
| popPK | Tiedge_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant enzyme protection against menadione toxicity, not a pharmacokinetic study. |
| PD | Tiedge_1998 | not_relevant | 3 | 2 | The paper reports qualitative toxicity comparisons and mentions an EC50 for butylalloxan, but does not provide numeric PD parameters or concentration-effect curves for menadione. |
| popPK | Todsaporn_2026 | irrelevant | 0 | 0 | The paper is a study on JAK2 inhibitors for cervical cancer and does not involve menadione or pharmacokinetic parameters. |
| popPK | Vallis_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cellular resistance to menadione, reporting IC50 values and gene expression changes rather than pharmacokinetic disposition parameters. |
| popPK | Vats_2025 | irrelevant | 0 | 0 | The paper is a review of the plant Tecomella undulata and does not contain pharmacokinetic data for menadione. |
| PD | Vats_2025 | not_relevant | 0 | 0 | The paper is a review of the plant Tecomella undulata and does not report any pharmacodynamic or exposure-response data for menadione. |
| popPK | Vita_2011 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on anti-proliferative effects and cytotoxicity (IC50, RC0) of menadione, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Wade_2016 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of vitamin K3 (menadione) for pain relief in dysmenorrhoea and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Wang_2011 | not_relevant | 0 | 0 | The paper studies bupropion metabolism and uses menadione only as a chemical inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of menadione as a SARS-CoV-2 protease inhibitor, reporting IC50 and binding kinetics rather than pharmacokinetic disposition parameters. |
| PGx | Weber_2012 | not_relevant | 0 | 0 | The paper studies genetic variation in oxidative stress resistance in Drosophila using menadione as a stressor, not the pharmacokinetics or pharmacodynamics of menadione as a drug. |
| popPK | Weidert_2014 | irrelevant | 0 | 0 | no_text gate: only 138 chars of text extracted (&lt; 400) |
| PD | Weidert_2014 | not_relevant | 0 | 0 | The paper discusses raloxifene and xanthine oxidase inhibition, not menadione, and does not report any PD or exposure-response data for the target drug. |
| popPK | Wilton_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/toxicology study on hepatocyte couplets, not a pharmacokinetic study, and menadione is used only as a toxic agent to assess canalicular function. |
| popPK | Wu_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of apoptosis in cancer cells and does not report pharmacokinetic parameters for menadione. |
| popPK | Wu_2011 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on apoptosis and cytotoxicity, reporting no pharmacokinetic parameters for menadione. |
| PGx | Xiao_2015 | not_relevant | 0 | 0 | The paper investigates the effect of menadione as a modulator of the pentose phosphate pathway on the metabolism of other drugs (testosterone and dextromethorphan), not the pharmacokinetics or pharmacodynamics of menadione itself. |
| PGx | Xiao_2020 | not_relevant | 0 | 0 | The study investigates the drug-drug interaction between menadione and imatinib, not the effect of a gene variant on menadione's PK/PD. |
| popPK | Xie_2010 | irrelevant | 0 | 0 | The paper is a study on fungal superoxide dismutase (SOD) and stress tolerance, using menadione only as a chemical stressor to generate superoxide, not as a subject drug for pharmacokinetic analysis. |
| popPK | Yue_2002 | irrelevant | 0 | 0 | The study is a mechanistic investigation of ischemic preconditioning pathways in rat hearts, not a pharmacokinetic study, and reports no disposition parameters for menadione. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of uterine contractility and does not report any pharmacokinetic parameters for menadione. |
| PGx | Zhou_2024 | not_relevant | 0 | 0 | The paper investigates the formation of small colony variants in Staphylococcus aureus induced by sulfamethoprim-trimethoprim, not the pharmacogenomics of menadione. |
| popPK | Zhou_2024_2 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on myricetin as an inhibitor of bacterial NDH-2, where menadione is used only as a substrate, not as the subject drug for pharmacokinetic analysis. |
| popPK | Zick_1990 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology study on signal transduction and does not report any pharmacokinetic parameters for menadione (vitamin K3). |
| PD | Zick_1990 | not_relevant | 0 | 0 | The paper studies the effects of H2O2 and vanadate, and explicitly states that the effect is not mimicked by vitamin K3 (menadione), providing no PD parameters for menadione. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for menadione. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 37 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is a conference title and contains no information regarding menadione, pharmacodynamics, or exposure-response relationships. |
| popPK | van_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of voriconazole and anidulafungin, not menadione. |
| PD | van_2009 | not_relevant | 0 | 0 | The paper investigates voriconazole and anidulafungin, not menadione, and reports survival/galactomannan outcomes without deriving numeric PD parameters like Emax or EC50. |
| PGx | von_2006 | not_relevant | 0 | 0 | The paper studies bacterial genetics (S. aureus mutants) and metabolic phenotypes, not human pharmacogenomics or the PK/PD of menadione as a drug. |
| popPK | von_2012 | irrelevant | 0 | 0 | The paper is a structure-based virtual screening study for Liver X Receptor (LXR) activators and does not involve the drug menadione or report any pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmenadione%5D&body=Drug%3A%20menadione%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_menadione/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
