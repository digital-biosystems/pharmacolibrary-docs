<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Trifluoperazine&quot;}]"></div>

# Trifluoperazine

- **generic name:** Trifluoperazine
- **T3DB:** [T3D2905](http://www.t3db.ca/toxins/T3D2905) · **DrugBank:** [DB00831](https://go.drugbank.com/drugs/DB00831) · **PubChem:** [CID 5566](https://pubchem.ncbi.nlm.nih.gov/compound/5566)
- **groups:** approved, investigational

## About

Trifluoperazine is only found in individuals that have used or taken this drug. It is a phenothiazine with actions similar to chlorpromazine. It is used as an antipsychotic and an antiemetic. [PubChem]Trifluoperazine blocks postsynaptic mesolimbic dopaminergic D1 and D2 receptors in the brain; depresses the release of hypothalamic and hypophyseal hormones and is believed to depress the reticular activating system thus affecting basal metabolism, body temperature, wakefulness, vasomotor tone, and emesis.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral
- **Sources and uses:** For the treatment of anxiety disorders, depressive symptoms secondary to anxiety and agitation.
- **Mechanism of toxicity:** Trifluoperazine blocks postsynaptic mesolimbic dopaminergic D1 and D2 receptors in the brain; depresses the release of hypothalamic and hypophyseal hormones and is believed to depress the reticular activating system thus affecting basal metabolism, body temperature, wakefulness, vasomotor tone, and emesis.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2905">T3DB T3D2905</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 117-89-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:45951">ChEBI 45951</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Miyagi_2007_reference](drugs/toxin_trifluoperazine/Trifluoperazine_Miyagi2007_reference.md) | — | nonlinear / manual (no model) | 0 | Miyagi SJ et al., Pediatric development of glucuronidatio…, Drug metabolism and disposi… (2007) | [10.1124/dmd.107.015214](https://doi.org/10.1124/dmd.107.015214) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Yen-Koo_1980_gnawing_behavior](drugs/toxin_trifluoperazine/pd_Yen_Koo_1980_gnawing_behavior.md) | gnawing behavior · model not identified | — | Yen-Koo HC et al., Detection of dopaminergic supersensitiv…, Drug and chemical toxicology (1980) | [10.3109/01480548009108286](https://doi.org/10.3109/01480548009108286) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trifluoperazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `UGT1A4` substrate, `XDH` modulator | DrugBank actor |
| metabolism | small intestine | `XDH` modulator | DrugBank actor |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), CALM1 (inhibitor), CALM2 (inhibitor), CALM3 (inhibitor), CALY (target), DRD2 (target), S100A4 (inhibitor), TNNC1 (allosteric modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 07:51 | 25:03 | 0/1/0 | 0/1/0 | 0/0/0 | 736,690/38,506 | einfracz / qwen3.8-flash-next | 19 | 5/9 | 19/0 | 0 |

## Coverage

- **PubMed hits:** 198 matched, 157 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_15 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bezawada_2022.pdf` | Bezawada V et al., Bioanalysis of trifluoperazine in human…, Biomedical chromatography :… (2022) | popPK | 9 | [10.1002/bmc.5499](https://doi.org/10.1002/bmc.5499) | [36064842](https://pubmed.ncbi.nlm.nih.gov/36064842) | The abstract explicitly states that pharmacokinetic parameters were determined, but does not list the specific numeric values (e.g., half-life, Vd, Cl) in the provided text. |
| `Miyagi_2007.pdf` | Miyagi SJ et al., Pediatric development of glucuronidatio…, Drug metabolism and disposi… (2007) | popPK | 9 | [10.1124/dmd.107.015214](https://doi.org/10.1124/dmd.107.015214) | [17556526](https://pubmed.ncbi.nlm.nih.gov/17556526) | The paper reports quantitative kinetic parameters (Vmax, Km, intrinsic clearance) for trifluoperazine metabolism via UGT1A4 in pediatric liver samples. |
| `Midha_1988.pdf` | Midha KK et al., A pharmacokinetic study of trifluoperaz…, Psychopharmacology (1988) | popPK | 8 | [10.1007/BF00181943](https://doi.org/10.1007/BF00181943) | [3137618](https://pubmed.ncbi.nlm.nih.gov/3137618) | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, Vd, half-life) for trifluoperazine in humans, but the evidence provided is only the abstract and does not contain the specific numerical values. |
| `Yoshida_1998.pdf` | Yoshida K et al., Neuroleptic drugs in breast-milk: a stu…, Psychological medicine (1998) | popPK | 6 | [10.1017/s0033291797005965](https://doi.org/10.1017/s0033291797005965) | [9483685](https://pubmed.ncbi.nlm.nih.gov/9483685) | The paper studies the pharmacokinetics of trifluoperazine in breast-feeding mothers and infants, reporting dose transfer percentages and concentrations, but provides no specific numeric kinetic parameters (e.g., half-life, clearance) in the provided text. |
| `Laverdière_2011.pdf` | Laverdière I et al., In vitro investigation of human UDP-glu…, Drug metabolism and disposi… (2011) | pgx | 8 | [10.1124/dmd.111.039040](https://doi.org/10.1124/dmd.111.039040) | [21487055](https://www.ncbi.nlm.nih.gov/pubmed/21487055) | metadata signals extractable PGX data (UGT1A4, PK/PD-context) |
| `Ghosheh_2002.pdf` | Ghosheh O et al., N-glucuronidation of nicotine and cotin…, Drug metabolism and disposi… (2002) | pgx | 7 | [10.1124/dmd.30.9.991](https://doi.org/10.1124/dmd.30.9.991) | [12167564](https://www.ncbi.nlm.nih.gov/pubmed/12167564) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Hashiba_2024.pdf` | Hashiba S et al., Cytochrome P450 and UDP-Glucuronosyltra…, Drug metabolism and disposi… (2024) | pgx | 7 | [10.1124/dmd.124.001685](https://doi.org/10.1124/dmd.124.001685) | [38866474](https://www.ncbi.nlm.nih.gov/pubmed/38866474) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Korprasertthaworn_2019.pdf` | Korprasertthaworn P et al., Inhibition of human UDP-glucuronosyltra…, Biochemical pharmacology (2019) | pgx | 7 | [10.1016/j.bcp.2019.08.018](https://doi.org/10.1016/j.bcp.2019.08.018) | [31445021](https://www.ncbi.nlm.nih.gov/pubmed/31445021) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Liu_2017.pdf` | Liu X et al., The inhibition of UDP-glucuronosyltrans…, Xenobiotica; the fate of fo… (2017) | pgx | 7 | [10.1080/00498254.2016.1198841](https://doi.org/10.1080/00498254.2016.1198841) | [27359323](https://www.ncbi.nlm.nih.gov/pubmed/27359323) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Loureiro_2011.pdf` | Loureiro AI et al., Hepatic UDP-glucuronosyltransferase is…, Drug metabolism and disposi… (2011) | pgx | 7 | [10.1124/dmd.111.038620](https://doi.org/10.1124/dmd.111.038620) | [21673130](https://www.ncbi.nlm.nih.gov/pubmed/21673130) | metadata signals extractable PGX data (UGT1A4, PK/PD-context) |
| `Walsky_2012.pdf` | Walsky RL et al., Optimized assays for human UDP-glucuron…, Drug metabolism and disposi… (2012) | pgx | 7 | [10.1124/dmd.111.043117](https://doi.org/10.1124/dmd.111.043117) | [22357286](https://www.ncbi.nlm.nih.gov/pubmed/22357286) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Wang_2016.pdf` | Wang XX et al., [Inhibition of sciadopitysin against UD…, Yao xue xue bao = Acta phar… (2016) | pgx | 7 |  | [29874021](https://www.ncbi.nlm.nih.gov/pubmed/29874021) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Wang_2021.pdf` | Wang X et al., Inhibition of human UDP-glucuronosyltra…, Toxicology letters (2021) | pgx | 7 | [10.1016/j.toxlet.2020.12.001](https://doi.org/10.1016/j.toxlet.2020.12.001) | [33290829](https://www.ncbi.nlm.nih.gov/pubmed/33290829) | metadata signals extractable PGX data (UGT1A3, PK/PD-context) |
| `Wang_2022.pdf` | Wang Z et al., Cabozantinib Carries the Risk of Drug-D…, Current drug metabolism (2022) | pgx | 7 | [10.2174/1389200224666221028140652](https://doi.org/10.2174/1389200224666221028140652) | [36306450](https://www.ncbi.nlm.nih.gov/pubmed/36306450) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Court_2005.pdf` | Court MH, Isoform-selective probe substrates for…, Methods in enzymology (2005) | pgx | 5 | [10.1016/S0076-6879(05)00007-8](https://doi.org/10.1016/S0076-6879(05)00007-8) | [16399346](https://www.ncbi.nlm.nih.gov/pubmed/16399346) | metadata signals extractable PGX data (UGT1A1) |

<sub>queue written 2026-11-13 07:39 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajiboye_2024 | irrelevant | 1 | 0 | The paper is an in silico computational study predicting drug repurposing targets and general ADMET profiles, reporting no specific quantitative toxicokinetic parameters for trifluoperazine; the visible clearance values belong to other compounds or are unlabeled. |
| popPK | Albert_1990 | irrelevant | 4 | 1 | The paper establishes a method for in vivo NMR monitoring but reports no specific quantitative kinetic parameters (e.g., half-lives, clearance rates, volumes) for trifluoperazine. |
| popPK | Bartels_1991 | irrelevant | 2 | 0 | The paper reports qualitative detection times of NMR signals rather than quantitative kinetic parameters (half-lives, clearance, partition coefficients, etc.), and no numeric kinetic values are present. |
| popPK | Bezawada_2022 | relevant | 9 | 2 | The abstract explicitly states that pharmacokinetic parameters were determined, but does not list the specific numeric values (e.g., half-life, Vd, Cl) in the provided text. |
| popPK | Burgio_1998 | irrelevant | 0 | 0 | The paper reports kinetic parameters (clearance, BBR) for etoposide, not trifluoperazine; trifluoperazine is merely a co-administered P-glycoprotein modulator. |
| popPK | Chen_2025 | irrelevant | 1 | 0 | The paper reports pharmacodynamic effects and biological outcomes (cognition, cytokine levels, morphology) in mice but contains no quantitative toxicokinetic parameters such as half-life, clearance, volume of distribution, or partition coefficients for trifluoperazine. |
| PGx | Cheung_2026 | not_relevant | 0 | 0 | The study investigates drug-target gene expression overlap with diabetes risk using TWAS, but reports no pharmacogenomic effects of gene variants on trifluoperazine PK or PD parameters. |
| PGx | Choi_2020 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions where mertansine inhibits the metabolism of trifluoperazine, but it does not investigate pharmacogenomic effects (gene variants) on trifluoperazine's pharmacokinetics or pharmacodynamics. |
| popPK | Conway_2013 | irrelevant | 0 | 0 | The paper focuses on autophagy and Salmonella infection, using trifluoperazine merely as a pharmacological agent in cell cultures without reporting any toxicokinetic parameters. |
| PGx | Court_2005 | not_relevant | 0 | 0 | The paper discusses UGT selectivity and genetic polymorphisms in general but does not report specific pharmacogenomic effects on trifluoperazine's PK or PD parameters. |
| popPK | Dabbeni-Sala_1990 | irrelevant | 0 | 0 | The paper investigates molecular mechanisms of mitochondrial ATP synthase inhibition and binding sites, reporting no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients for trifluoperazine. |
| PGx | Dong_2014 | not_relevant | 0 | 0 | The paper reports on the inhibition of UGT enzymes by bakuchiol, using trifluoperazine merely as a probe substrate for UGT1A4; it does not investigate pharmacogenomic variants affecting trifluoperazine PK/PD. |
| popPK | Elsalhy_2025 | irrelevant | 0 | 0 | The abstract describes a formulation study comparing pharmacokinetic profiles qualitatively but provides no specific numeric kinetic parameters (e.g., half-lives, clearance, AUC values) for trifluoperazine. |
| popPK | Enigbokan_1995 | irrelevant | 0 | 0 | Trifluoperazine is used merely as a co-administered inhibitor/comparator to study the toxicokinetics of dideoxycytidine (ddC), with no kinetic parameters reported for trifluoperazine itself. |
| popPK | Friedlaender_1989 | irrelevant | 0 | 0 | Trifluoperazine is used only as a pharmacological tool/co-exposure to investigate the mechanism of Vitamin D3; no kinetic parameters for trifluoperazine are reported. |
| PGx | Fujiwara_2007 | not_relevant | 0 | 0 | The paper reports on enzyme kinetics affected by protein-protein interactions (co-expression) rather than genetic polymorphisms/genotypes altering parameters in a clinical or PK/PD context. |
| PGx | Gagez_2012 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring UGT enzyme activity using trifluoperazine as a probe substrate, but does not report any genotype-phenotype relationship affecting trifluoperazine's pharmacokinetics or pharmacodynamics. |
| popPK | Garcia_1995 | irrelevant | 0 | 0 | Trifluoperazine is mentioned only as an experimental tool to inhibit myosin light chain kinase, with no toxicokinetic parameters reported for it. |
| popPK | Ghosheh_2002 | irrelevant | 0 | 0 | The paper focuses on nicotine/cotinine metabolism, and trifluoperazine is mentioned only as a UGT1A4 substrate used in an inhibition test without any specific kinetic parameters reported for trifluoperazine itself. |
| PGx | Ghosheh_2002 | not_relevant | 0 | 0 | The paper mentions trifluoperazine only as a UGT1A4 substrate reference for inhibition studies and does not report any pharmacogenomic effects on trifluoperazine's PK or PD parameters. |
| PGx | Gradinaru_2015 | not_relevant | 0 | 0 | The paper describes an in vitro assay method using trifluoperazine as a specific substrate for UGT1A4, but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Hashiba_2024 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| PGx | Hashiba_2024 | not_relevant | 0 | 0 | The text discusses enzyme expression in renal cells and does not mention trifluoperazine or specific gene variant effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hernandez_1999 | irrelevant | 0 | 0 | The paper studies the functional effect of trifluoperazine as a pharmacological additive on kidney preservation outcomes, not its toxicokinetic disposition or parameters. |
| popPK | Hirst_1995 | irrelevant | 0 | 0 | Trifluoperazine is used solely as an analytical tool/inhibitor (CaM antagonist) in a mechanistic study of adenylyl cyclase, with no toxicokinetic parameters reported for it. |
| popPK | Imberdis_2019 | irrelevant | 0 | 0 | The paper is an in vitro pharmacological study investigating alpha-synuclein aggregation mechanisms using trifluoperazine as a tool compound, reporting only IC50 values for biological effects and containing no toxicokinetic parameters (ADME, PK, or PBPK). |
| PGx | Ji_2012 | not_relevant | 0 | 0 | The paper reports in vitro drug-drug interaction data (efavirenz inhibition of UGT enzymes) using trifluoperazine as a substrate, not pharmacogenomic effects of gene variants on trifluoperazine PK/PD parameters. |
| popPK | Kaji_2005 | irrelevant | 0 | 0 | The paper focuses on the metabolism of afloqualone, using trifluoperazine only as an inhibitor or comparator substrate without reporting its kinetic parameters. |
| PGx | Kaku_2004 | not_relevant | 0 | 0 | The paper investigates tamoxifen metabolism by UGT1A4 using trifluoperazine merely as a chemical probe substrate to validate enzyme activity; it does not study the pharmacokinetics or pharmacodynamics of trifluoperazine nor any genetic variants affecting its parameters. |
| popPK | Kang_2010 | irrelevant | 2 | 1 | The paper reports binding affinity to a protein in vitro, not toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| PGx | Kasteel_2020 | not_relevant | 2 | 1 | Trifluoperazine is mentioned as an outlier probe substrate for general human variability in this review, but the paper explicitly states that data linking UGT polymorphisms to specific PK parameters is limited and does not report specific pharmacogenomic effect sizes for trifluoperazine. |
| popPK | Kato_2013 | irrelevant | 2 | 0 | Trifluoperazine is only mentioned as a negative control (inactive substrate) with no quantitative kinetic parameters reported for it. |
| popPK | Kim_2005 | irrelevant | 0 | 0 | The paper reports on calcium regulatory effects and tissue penetration (qualitative/structural), not quantitative toxicokinetic parameters (rates, volumes, half-lives) for trifluoperazine. |
| PGx | Kiyotaki_1984 | not_relevant | 0 | 0 | The paper discusses the effects of trifluoperazine on macrophage cell biology, not pharmacogenomic effects of gene variants on drug PK/PD parameters. |
| PGx | Korprasertthaworn_2019 | not_relevant | 0 | 0 | The study focuses on kinase inhibitors (dabrafenib, ibrutinib, etc.) and their inhibition of UGT enzymes; it does not mention trifluoperazine nor any pharmacogenomic effects on its parameters. |
| PGx | Laverdière_2011 | not_relevant | 0 | 0 | The paper investigates tacrolimus metabolism and only mentions trifluoperazine as a marker substrate for UGT1A4 activity in a correlation analysis, not as the target drug for a pharmacogenomic effect. |
| PGx | Lee_2015 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (finasteride inhibiting UGT1A4) affecting trifluoperazine metabolism in vitro, but it does not investigate genetic variants or pharmacogenomic effects. |
| PGx | Leite_2006 | not_relevant | 0 | 0 | The paper discusses the in vitro and in vivo modulation of MDR transporters by trifluoperazine, but does not analyze the impact of specific gene variants or genotypes on the pharmacokinetics or pharmacodynamics of the drug. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The paper studies XueBiJing compounds (e.g., tanshinol, salvianolic acid B) and antibiotics, not trifluoperazine, which is not mentioned in the text. |
| PGx | Limniatis_2021 | not_relevant | 2 | 2 | The study investigates the cytotoxic effect (PD) of trifluoperazine on ABCB1-expressing cells, but does not report standard pharmacogenomic parameters (e.g., AUC, Cmax) or describe how a human germline genotype alters the drug's PK/PD profile in patients or relevant models. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | Trifluoperazine is used solely as a probe substrate for UGT1A4 activity; the reported kinetic parameters (Ki, IC50) belong to the inhibitors Hesperetin and Naringenin, not to trifluoperazine's own toxicokinetics. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper studies drug-drug/herb-drug interactions involving UGT inhibition, not the effect of human gene variants on trifluoperazine PK/PD. |
| PGx | Liu_2017 | not_relevant | 0 | 0 | The paper studies the drug-drug interaction between vitamin A and trifluoperazine (inhibition of UGT enzymes), not a pharmacogenomic effect caused by gene variants. |
| PGx | Loureiro_2011 | not_relevant | 0 | 0 | The paper studies eslicarbazepine metabolism; trifluoperazine is mentioned only as a chemical reference substrate for UGT1A4, not as the drug of interest with genetic effects. |
| PGx | Ma_2014 | not_relevant | 0 | 0 | The paper discusses herb-drug interactions and enzyme inhibition (UGT2B7/1A4), not pharmacogenomic variants (gene polymorphisms) affecting trifluoperazine parameters. |
| popPK | MacDonald_1986 | irrelevant | 0 | 0 | The paper reports a partition coefficient for a virus membrane vs buffer, which is an analytical/molecular interaction parameter, not a biological toxicokinetic parameter (e.g., tissue:plasma, half-life, clearance) in humans or animals. |
| popPK | Malheiros_1998 | irrelevant | 0 | 0 | The paper reports partition coefficients into model membranes (liposomes, microsomes, erythrocyte ghosts) and octanol, which are physicochemical membrane interaction parameters rather than physiological toxicokinetic parameters (like tissue:plasma or blood:air partition coefficients) required for PBTK modeling. |
| popPK | Midha_1988 | relevant | 8 | 2 | The study reports quantitative pharmacokinetic parameters (Cmax, AUC, Vd, half-life) for trifluoperazine in humans, but the evidence provided is only the abstract and does not contain the specific numerical values. |
| PGx | Nakajima_2002 | not_relevant | 0 | 0 | The paper focuses on Imipramine N-glucuronidation; Trifluoperazine is only mentioned as a correlation substrate for UGT1A4 activity, with no pharmacogenomic data regarding trifluoperazine metabolism or effects. |
| popPK | Onoda_1989 | irrelevant | 0 | 0 | Trifluoperazine is mentioned only as a comparator/calmodulin antagonist in an efficacy study with no toxicokinetic parameters reported for it. |
| PGx | Onoda_1989 | not_relevant | 0 | 0 | The paper describes an in vivo efficacy study in mice involving drug-drug interactions, with no mention of gene variants, genotypes, or pharmacogenomic parameters. |
| popPK | Pavlov_1998 | irrelevant | 0 | 0 | The paper investigates the mechanism of mitochondrial protein import inhibition and mentions lipid/water partition coefficients generally, but provides no quantitative toxicokinetic parameters for trifluoperazine itself. |
| popPK | Qi_2015 | irrelevant | 1 | 0 | Trifluoperazine is used solely as a probe substrate to screen enzyme inhibition; no kinetic parameters for trifluoperazine are reported. |
| PGx | Qi_2015 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT1A4 by podophyllotoxin using trifluoperazine as a probe substrate; it does not investigate the effect of gene variants on trifluoperazine pharmacokinetics or pharmacodynamics. |
| popPK | Shiraishi_1994 | irrelevant | 1 | 0 | The paper studies chlorpromazine and cadmium, mentioning trifluoperazine only as a prior example in the introduction with no data. |
| PGx | Skryabin_2021 | not_relevant | 0 | 0 | The paper reports on olanzapine's pharmacogenomic effects; trifluoperazine is only mentioned as an alternative drug prescribed to the patient, with no PK or PD parameters or genetic effects on trifluoperazine reported. |
| popPK | Sridhar_1993 | irrelevant | 0 | 0 | The kinetic parameters reported are for prochlorperazine (PCZ), while trifluoperazine is mentioned only as an in vitro comparator/efflux blocker with no kinetic data. |
| popPK | Suzuka_1987 | irrelevant | 0 | 0 | The evidence contains only software metadata and no scientific text, data, or parameters regarding trifluoperazine. |
| PGx | Torchia_2025 | not_relevant | 0 | 0 | The paper focuses on ifosfamide-induced encephalopathy; trifluoperazine is mentioned only as a preclinical agent for treating this condition, with no pharmacogenomic PK/PD data provided for it. |
| popPK | Uchaipichat_2006 | relevant | 3 | 4 | The paper reports Km values for trifluoperazine glucuronidation in human liver microsomes and recombinant UGT1A4, which are metabolic rate parameters, though not whole-body toxicokinetic parameters. |
| PGx | Uchaipichat_2006 | not_relevant | 0 | 0 | The paper investigates the in vitro selectivity of trifluoperazine as a UGT1A4 substrate and does not report any effects of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Uno_2018 | not_relevant | 0 | 0 | The paper characterizes UDP-glucuronosyltransferase 1A in cynomolgus macaques and mentions trifluoperazine only as a substrate where no enzymatic activity was observed; it does not report human gene variant effects on trifluoperazine PK or PD parameters. |
| PGx | Uno_2020 | not_relevant | 0 | 0 | The paper characterizes marmoset UGT enzymes and mentions trifluoperazine as a substrate, but does not report any pharmacogenomic effect of a gene variant on a human PK/PD parameter. |
| popPK | Walsky_2012 | irrelevant | 2 | 5 | Trifluoperazine serves solely as a UGT1A4 probe substrate to validate assay conditions and screen inhibitors, rather than being the subject of a toxicokinetic or disposition study. |
| PGx | Walsky_2012 | not_relevant | 0 | 0 | The paper focuses on in vitro assay optimization and enzyme kinetics for drug interaction screening, not on pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Wang_2016 | not_relevant | 0 | 0 | The paper reports on a drug-drug interaction (inhibition of UGT enzymes by sciadopitysin) affecting trifluoperazine metabolism, not on a pharmacogenomic effect (gene variant/genotype) altering trifluoperazine PK/PD. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper investigates drug-drug interaction mechanisms via enzyme inhibition (UGTs), not pharmacogenomic effects of gene variants on trifluoperazine parameters; TFP is used only as a non-selective probe substrate. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper reports the effect of cabozantinib on trifluoperazine metabolism (inhibiting UGT1A9), but does not investigate genetic variants or phenotypes affecting pharmacokinetics or pharmacodynamics. |
| PGx | Yin_2021 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition by dabrafenib), not pharmacogenomic effects of gene variants on trifluoperazine parameters. |
| popPK | Yoshida_1998 | relevant | 6 | 0 | The paper studies the pharmacokinetics of trifluoperazine in breast-feeding mothers and infants, reporting dose transfer percentages and concentrations, but provides no specific numeric kinetic parameters (e.g., half-life, clearance) in the provided text. |
| PGx | den_2017 | not_relevant | 0 | 0 | The paper does not mention trifluoperazine or its specific pharmacokinetic/pharmacodynamic parameters; it focuses on general in vitro assay methodology for liver enzymes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrifluoperazine%5D&body=Drug%3A%20trifluoperazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_trifluoperazine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 07:39 UTC</sub>
