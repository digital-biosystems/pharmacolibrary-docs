<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;mianserin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mianserin_Timmer1985_reference&quot;,&quot;label&quot;:&quot;Timmer_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mianserin/Mianserin_Timmer1985_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# mianserin

- **generic name:** mianserin
- **ATC codes:** `N06AX03`
- **DrugBank:** [DB06148](https://go.drugbank.com/drugs/DB06148) · **PubChem:** [CID 4184](https://pubchem.ncbi.nlm.nih.gov/compound/4184)
- **molar mass:** 264.3648 g/mol (C18H20N2) — DrugBank
- **groups:** approved, withdrawn

## About

Mianserin is an atypical antidepressant that treats depression. It is given orally in tablets or liquid form. The drug is used in Europe and other territories.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416701](https://www.wikidata.org/wiki/Q416701), [Wikipedia](https://en.wikipedia.org/wiki/Mianserin?oldid=1381943240) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mianserin | parent | 264.365 | C18H20N2 | DrugBank | [4184](https://pubchem.ncbi.nlm.nih.gov/compound/4184) | Maguire_1983, Timmer_1985 |

## Start here

> **Timmer_1985_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> healthy adult males, n = 6. [Run it in the simulator](drugs/drug_mianserin/Mianserin_Timmer1985_reference.md?tab=Simulation) · [record](drugs/drug_mianserin/Mianserin_Timmer1985_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: cross_check_disputed</sub> | [Timmer_1985_reference](drugs/drug_mianserin/Mianserin_Timmer1985_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Timmer CJ et al., Absolute bioavailability of mianserin t…, European journal of drug me… (1985) | [10.1007/BF03189759](https://doi.org/10.1007/BF03189759) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Maguire_1983_reference](drugs/drug_mianserin/Mianserin_Maguire1983_reference.md) | — | 1-compartment (no model) | 7 | Maguire K et al., The pharmacokinetics of mianserin in el…, Psychiatry research (1983) | [10.1016/0165-1781(83)90016-1](https://doi.org/10.1016/0165-1781(83)90016-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Liu_2003_tryptaminergic_responses](drugs/drug_mianserin/pd_Liu_2003_tryptaminergic_responses.md) | tryptaminergic responses biomarker turnover ← mianserin | — | Liu H et al., Effects of some antidepressant drugs on…, Pharmacology (2003) | [10.1159/000072361](https://doi.org/10.1159/000072361) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Minguez_2014_EC50](drugs/drug_mianserin/pd_Minguez_2014_EC50.md) | Acute toxicity ← Mianserine · inhibition effect | — | Minguez L et al., Acute toxicity of 8 antidepressants: wh…, Chemosphere (2014) | [10.1016/j.chemosphere.2014.01.057](https://doi.org/10.1016/j.chemosphere.2014.01.057) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:12 | 0:05 | 1/1/0 | 1/1/0 | 0/0/0 | 4,471/196 | einfracz / qwen3.8-27b | 11 | 6/5 | 10/1 | 0 |

## Coverage

- **PubMed hits:** 237 matched, 111 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_13 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ananth_1987.pdf` | Ananth US et al., Stimulation of phosphoinositide hydroly…, Journal of neurochemistry (1987) | pd | 4 | [10.1111/j.1471-4159.1987.tb13156.x](https://doi.org/10.1111/j.1471-4159.1987.tb13156.x) | [3025366](https://www.ncbi.nlm.nih.gov/pubmed/3025366) | metadata signals extractable PD data (EC50) |
| `Crider_2003.pdf` | Crider JY et al., Pharmacological characterization of a s…, Investigative ophthalmology… (2003) | pd | 4 | [10.1167/iovs.02-1292](https://doi.org/10.1167/iovs.02-1292) | [14578406](https://www.ncbi.nlm.nih.gov/pubmed/14578406) | metadata signals extractable PD data (EC50) |
| `Kaufman_1995.pdf` | Kaufman MJ et al., Serotonin 5-HT2C receptor stimulates cy…, Journal of neurochemistry (1995) | pd | 4 | [10.1046/j.1471-4159.1995.64010199.x](https://doi.org/10.1046/j.1471-4159.1995.64010199.x) | [7798914](https://www.ncbi.nlm.nih.gov/pubmed/7798914) | metadata signals extractable PD data (EC50) |
| `Bogni_2005.pdf` | Bogni A et al., Substrate specific metabolism by polymo…, Toxicology in vitro : an in… (2005) | pgx | 8 | [10.1016/j.tiv.2005.04.001](https://doi.org/10.1016/j.tiv.2005.04.001) | [15893449](https://www.ncbi.nlm.nih.gov/pubmed/15893449) | metadata signals extractable PGX data (CYP2D6*17, PK/PD-context) |
| `Eap_2000.pdf` | Eap CB et al., Marked increase of venlafaxine enantiom…, Pharmacopsychiatry (2000) | pgx | 8 | [10.1055/s-2000-7975](https://doi.org/10.1055/s-2000-7975) | [10855463](https://www.ncbi.nlm.nih.gov/pubmed/10855463) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kirchheiner_2003.pdf` | Kirchheiner J et al., Bupropion and 4-OH-bupropion pharmacoki…, Pharmacogenetics (2003) | pgx | 8 | [10.1097/00008571-200310000-00005](https://doi.org/10.1097/00008571-200310000-00005) | [14515060](https://www.ncbi.nlm.nih.gov/pubmed/14515060) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Mihara_1997.pdf` | Mihara K et al., The CYP2D6 genotype and plasma concentr…, Journal of clinical psychop… (1997) | pgx | 8 | [10.1097/00004714-199712000-00005](https://doi.org/10.1097/00004714-199712000-00005) | [9408809](https://www.ncbi.nlm.nih.gov/pubmed/9408809) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Szewczuk-Bogusławska_2004.pdf` | Szewczuk-Bogusławska M et al., [Assessment of CYP2D6 activity as a for…, Psychiatria polska (2004) | pgx | 8 |  | [15779673](https://www.ncbi.nlm.nih.gov/pubmed/15779673) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Yasui_1997.pdf` | Yasui N et al., Effects of thioridazine, an inhibitor o…, Pharmacogenetics (1997) | pgx | 8 | [10.1097/00008571-199710000-00005](https://doi.org/10.1097/00008571-199710000-00005) | [9352572](https://www.ncbi.nlm.nih.gov/pubmed/9352572) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Eap_1999.pdf` | Eap CB et al., Effects of carbamazepine coadministrati…, Therapeutic drug monitoring (1999) | pgx | 7 | [10.1097/00007691-199904000-00005](https://doi.org/10.1097/00007691-199904000-00005) | [10217335](https://www.ncbi.nlm.nih.gov/pubmed/10217335) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Eap_1994.pdf` | Eap CB et al., Determination of the enantiomers of mia…, Chirality (1994) | pgx | 5 | [10.1002/chir.530060708](https://doi.org/10.1002/chir.530060708) | [7986669](https://www.ncbi.nlm.nih.gov/pubmed/7986669) | metadata signals extractable PGX data (CYP2D6) |
| `Hole_2025.pdf` | Hole K et al., Association Between CYP2D6 Genotypes an…, Basic & clinical pharmacolo… (2025) | pgx | 5 | [10.1111/bcpt.70013](https://doi.org/10.1111/bcpt.70013) | [40010695](https://www.ncbi.nlm.nih.gov/pubmed/40010695) | metadata signals extractable PGX data (CYP2D6) |
| `Spigset_1997.pdf` | Spigset O et al., Seizures and myoclonus associated with…, Acta psychiatrica Scandinav… (1997) | pgx | 5 | [10.1111/j.1600-0447.1997.tb09933.x](https://doi.org/10.1111/j.1600-0447.1997.tb09933.x) | [9395157](https://www.ncbi.nlm.nih.gov/pubmed/9395157) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-11-24 01:12 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akiyoshi_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor desensitization where mianserin is used only as a binding ligand, not as the subject of a pharmacokinetic study. |
| PGx | Akiyoshi_1995 | not_relevant | 0 | 0 | The paper describes 5-HT2C receptor signaling and desensitization in transfected CHO cells, not the pharmacogenomic effect of a genetic variant on mianserin's pharmacokinetics or pharmacodynamics. |
| popPK | Ananth_1987 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PD | Ananth_1987 | not_relevant | 0 | 0 | The paper studies serotonin in C6 glioma cells and does not mention mianserin or report any pharmacodynamic parameters for it. |
| PGx | Ananth_1987 | not_relevant | 0 | 0 | The paper studies the mechanism of serotonin signaling in glioma cells and does not involve mianserin or pharmacogenomics. |
| popPK | Balfanz_2014 | irrelevant | 0 | 0 | The study investigates receptor pharmacology in honeybees where mianserin is used only as a probe ligand, not as the subject of pharmacokinetic analysis. |
| PGx | Balfanz_2014 | not_relevant | 0 | 0 | The paper studies octopamine receptors in honeybees and does not involve human pharmacogenomics or clinical PK/PD parameters for mianserin. |
| popPK | Banach_2016 | irrelevant | 0 | 0 | The paper is a review discussing pharmacokinetic interactions generally, and mianserin is only mentioned as a drug to be avoided due to low convulsive threshold, not as a subject of quantitative PK modeling. |
| PD | Banach_2016 | not_relevant | 1 | 0 | The text is a review discussing qualitative pharmacodynamic interactions and safety concerns (lowering convulsive threshold) without providing any numeric PD parameters or concentration-effect data for mianserin. |
| PGx | Banach_2016 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic/pharmacodynamic interactions between antiepileptic drugs and antidepressants, but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters of mianserin. |
| popPK | Baumann_2001 | irrelevant | 0 | 0 | The paper is a review discussing the principles of evaluating enantiomers of chiral antidepressants and does not report original quantitative pharmacokinetic parameters for mianserin. |
| PGx | Baumann_2001 | not_relevant | 2 | 1 | The paper is a qualitative review of enantiomeric pharmacology and does not report specific genetic variant effects on mianserin's PK/PD parameters. |
| popPK | Baumann_2002 | irrelevant | 0 | 0 | The paper is a review focusing on escitalopram and stereochemistry, mentioning mianserin only as an example of a chiral psychotropic drug without providing original quantitative pharmacokinetic parameter values. |
| PGx | Baumann_2002 | not_relevant | 2 | 5 | The paper is a critical review focusing on the stereochemistry of antidepressants (specifically escitalopram) and only mentions mianserin as an example of a chiral psychotropic drug without reporting specific pharmacogenomic data for it. |
| popPK | Bogni_2005 | irrelevant | 0 | 0 | The study is an in-vitro metabolic study focusing on CYP2D6 allele activity and does not report pharmacokinetic parameters like clearance or volume for mianserin. |
| PGx | Bogni_2005 | not_relevant | 5 | 4 | The paper reports in vitro metabolism rates (clearance) of mianserin by CYP2D6 variants in cell lines, which is a surrogate for intrinsic clearance rather than a measured in vivo pharmacokinetic or pharmacodynamic parameter in humans. |
| popPK | Carvalho_2014 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy trials for depression in breast cancer, not a pharmacokinetic study, and it does not report any quantitative PK parameters for mianserin. |
| PGx | Carvalho_2014 | not_relevant | 0 | 0 | The paper is a systematic review of clinical trials in breast cancer patients and does not investigate pharmacogenomic variants or their effects on the PK/PD of mianserin. |
| popPK | Chow_1999 | irrelevant | 0 | 0 | The study investigates in-vitro metabolic pathways and stereoselectivity of CYP isoforms, providing no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Clark_1988 | irrelevant | 0 | 0 | This is a pharmacogenetic study investigating the association between sparteine oxidation phenotypes and adverse drug reactions; it does not report quantitative pharmacokinetic parameters (CL, V, etc.) for mianserin. |
| PGx | Clark_1988 | not_relevant | 0 | 0 | The abstract mentions mianserin only as a drug selected for association with sparteine oxidation adverse reactions, but does not report specific pharmacokinetic or pharmacodynamic parameter changes for mianserin based on genotype. |
| popPK | Clineschmidt_1985 | irrelevant | 0 | 0 | The paper is an in-vitro receptor characterization study where mianserin is used as a test compound (noncompetitive antagonist), not a pharmacokinetic study reporting disposition parameters. |
| PD | Clineschmidt_1985 | not_relevant | 0 | 0 | The paper characterizes 5-HT receptors in rat stomach fundus and identifies mianserin as a noncompetitive antagonist, but it does not report a pharmacodynamic exposure-response or dose-response relationship for mianserin itself (e.g., Emax, EC50 for mianserin's effect, or PK/PD fit). |
| PGx | Clineschmidt_1985 | not_relevant | 0 | 0 | The paper characterizes 5-HT receptors in rat stomach and does not investigate pharmacogenomic effects on mianserin's PK or PD parameters. |
| popPK | Conn_1986 | irrelevant | 0 | 0 | The paper is a pharmacological study using mianserin as an antagonist to characterize receptor binding, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Conn_1986 | not_relevant | 0 | 0 | The paper characterizes the pharmacology of a serotonin receptor in rat tissues but does not report any pharmacogenomic effects on the PK or PD of mianserin. |
| popPK | Crider_2003 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Crider_2003 | not_relevant | 0 | 0 | The paper focuses on 5-HT7 receptor pharmacology in corneal cells and does not mention mianserin or report any exposure-response or dose-response data for it. |
| PGx | Crider_2003 | not_relevant | 0 | 0 | The paper characterizes 5-HT7 receptors in human cells and does not investigate mianserin or pharmacogenomic effects. |
| popPK | Dahl_1994 | relevant | 6 | 1 | The study reports qualitative pharmacokinetic findings (AUC correlations, enantioselectivity) for mianserin but does not provide specific numeric parameter values (CL, V, t1/2) in the extracted text. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | The study focuses on insect octopamine receptor pharmacology and uses mianserin only as a reference compound for comparison, not as the subject of a pharmacokinetic analysis. |
| PD | Deng_2021 | not_relevant | 3 | 2 | The paper reports a single EC50 value for mianserin as an antagonist in an in vitro receptor assay, which is a pharmacological potency parameter rather than a pharmacodynamic exposure-response or dose-response relationship for a therapeutic effect in a subject. |
| PGx | Deng_2021 | not_relevant | 0 | 0 | The paper studies insect octopamine receptors and uses mianserin only as a reference antagonist in a biological assay, reporting no human pharmacogenomic effects on its PK or PD. |
| popPK | Eap_1994 | irrelevant | 0 | 0 | The paper describes an analytical method for measuring enantiomers and reports ratio data, but does not provide population pharmacokinetic parameters like clearance, volume, or half-life. |
| PGx | Eap_1994 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring mianserin enantiomers and reports plasma ratios in a single genotype group (extensive metabolizers), but does not compare different genotypes to demonstrate a pharmacogenomic effect on PK/PD parameters. |
| popPK | Eap_1998 | relevant | 7 | 3 | The study measures steady-state concentrations and enantiomer ratios in humans for mianserin, but lacks explicit compartmental PK parameters (CL, Vd) or individual numeric concentration values in the text, relying on ratios and summary statistics. |
| PGx | Eap_1998 | not_relevant | 4 | 7 | The study reports only mean concentrations and ratios without fitted effect size estimates (theta), and conclusions suggest the genotype has only a moderate or non-significant influence, failing to establish a robust quantitative pharmacogenomic effect. |
| popPK | Eap_1999 | irrelevant | 2 | 0 | The study reports only relative percentage changes in plasma concentrations due to enzyme induction, without providing quantitative disposition parameters such as clearance, volume of distribution, or half-life. |
| PGx | Eap_1999 | not_relevant | 0 | 0 | The study examines a drug-drug interaction (carbamazepine and mianserin), not a pharmacogenomic effect of a gene variant. |
| popPK | Eap_2000 | irrelevant | 0 | 0 | The study focuses on venlafaxine pharmacokinetics and its interaction with mianserin, which is used only as a co-administered agent/comparator. |
| PGx | Eap_2000 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (mianserin inhibiting venlafaxine metabolism) rather than a pharmacogenomic effect of a gene variant on mianserin's PK/PD. |
| popPK | Feldman_1994 | irrelevant | 0 | 0 | The paper is an electrophysiological study in rat brain slices investigating serotonin effects, where mianserin is used only as a receptor antagonist probe, not a subject of pharmacokinetic analysis. |
| PGx | Feldman_1994 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of serotonin and receptor antagonists (including mianserin) on rat neurons and does not report any pharmacogenomic effects or human genetic associations. |
| popPK | Flores_1995 | irrelevant | 0 | 0 | This is an in vitro electrophysiology study using mianserin as a pharmacological antagonist to characterize serotonin effects on neurons, not a pharmacokinetic study. |
| PGx | Flores_1995 | not_relevant | 0 | 0 | The paper studies the effect of 5-HT on subthalamic neurons and the blocking action of mianserin, but does not report any pharmacogenomic (genetic variant) influence on mianserin's PK or PD parameters. |
| popPK | Gendelev_2024 | irrelevant | 0 | 0 | This is a zebrafish behavioral phenotypic screening/ML paper; mianserin is only a screened compound with no PK parameters reported. |
| popPK | Glusa_2000 | irrelevant | 0 | 0 | The paper is a pharmacological study characterizing 5-HT receptors in pig pulmonary artery, using mianserin only as a comparative antagonist, and contains no pharmacokinetic parameters. |
| PGx | Glusa_2000 | not_relevant | 0 | 0 | The paper characterizes 5-HT receptor subtypes in pig pulmonary artery and lists mianserin's antagonistic potency, but it does not report a pharmacogenomic effect of a gene variant on the PK or PD of mianserin. |
| popPK | Hengartner_2020 | irrelevant | 0 | 0 | This is a study of antidepressant withdrawal symptoms from forum narratives; mianserin is only mentioned once as a co-treatment, with no PK parameters. |
| popPK | Hirst_1997 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay (pKi measurement) for 5-HT7 receptors, not a pharmacokinetic study of mianserin disposition. |
| PGx | Hirst_1997 | not_relevant | 0 | 0 | The paper characterizes 5-HT receptors in rat astrocytes using mianserin as an antagonist, but does not investigate pharmacogenomic variations affecting mianserin's PK or PD. |
| popPK | Hoertel_2022 | irrelevant | 0 | 0 | Observational COVID-19/antidepressant study with no mianserin PK parameters; mianserin not even mentioned. |
| popPK | Hole_2025 | irrelevant | 0 | 0 | The study reports concentration-to-dose (C/D) ratios rather than quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) or a compartmental model. |
| popPK | Huang_2009 | irrelevant | 0 | 0 | The paper is a molecular cloning and in-vitro pharmacological study of a silkworm tyramine receptor where mianserin is only used as a test antagonist, not a PK subject. |
| PGx | Huang_2009 | not_relevant | 0 | 0 | The paper investigates a tyramine receptor in silkworms and lists mianserin only as an antagonist in a ranking, providing no pharmacogenomic data on human PK/PD parameters for mianserin. |
| popPK | Ichida_1983 | irrelevant | 0 | 0 | In-vitro receptor binding study; mianserin only a Ki comparator, no PK parameters. |
| PD | Ichida_1983 | not_relevant | 1 | 2 | The paper reports in vitro binding affinity (Ki) for mianserin, which is a pharmacological property, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for a physiological effect. |
| popPK | Inoue_2003 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT receptor subtypes in porcine oviducts where mianserin is used only as an antagonist to determine pKb values, not as a subject drug for pharmacokinetic parameter estimation. |
| PD | Inoue_2003 | not_relevant | 0 | 0 | The paper investigates the pharmacology of 5-HT on the porcine oviduct and reports the pKb of mianserin as an antagonist, but it does not report a pharmacodynamic (exposure- or dose-response) relationship for mianserin itself. |
| PGx | Inoue_2003 | not_relevant | 0 | 0 | The paper investigates the pharmacology of 5-HT receptors in the porcine oviduct and uses mianserin only as a non-specific antagonist to characterize receptor subtypes, without reporting any pharmacogenomic effects on mianserin's PK or PD parameters. |
| popPK | Kaufman_1995 | irrelevant | 0 | 0 | The study is an in vitro pharmacological assay measuring receptor affinity ($K_i$) and cGMP formation, not population pharmacokinetic parameters like clearance or volume. |
| PD | Kaufman_1995 | not_relevant | 3 | 2 | The paper reports a receptor binding affinity (Ki) for mianserin in an in vitro tissue slice assay, which is a pharmacological potency measure but not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| PGx | Kaufman_1995 | not_relevant | 0 | 0 | The study investigates the pharmacological mechanism of 5-HT2C receptors in choroid plexus using mianserin as an antagonist, but it does not report any genetic variants or their effects on pharmacokinetics or pharmacodynamics. |
| popPK | Kirchheiner_2003 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PGx | Kirchheiner_2003 | not_relevant | 0 | 0 | The paper studies pharmacokinetics of bupropion, not mianserin. |
| popPK | Kitazawa_1998 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of 5-HT receptors in porcine myometrium, where mianserin is used as a reference antagonist, not as the subject of pharmacokinetic analysis. |
| PGx | Kitazawa_1998 | not_relevant | 0 | 0 | The study is a pharmacology paper using mianserin as an antagonist to characterize a receptor subtype in porcine myometrium; it does not investigate gene variants or their effect on mianserin's PK/PD. |
| popPK | Koyama_1996 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of CYP450 isoforms responsible for mianserin metabolism and does not report in vivo pharmacokinetic disposition parameters (CL, V, ka, t1/2) for the parent drug. |
| PGx | Koyama_1996 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics and CYP isoform identification for mianserin metabolism but does not assess the impact of specific human gene variants or genotypes on pharmacokinetic parameters. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | This is an in-vitro pharmacology study on isolated rat jejunum, not a pharmacokinetic study reporting disposition parameters for mianserin. |
| PGx | Liu_2003 | not_relevant | 0 | 0 | The paper studies the pharmacological effect of mianserin on rat jejunum receptors but does not report any genetic variation affecting its PK or PD parameters. |
| popPK | Ma_2019 | irrelevant | 0 | 0 | Mianserin is only used as a pharmacological antagonist probe on an insect receptor; no PK parameters for mianserin are reported. |
| PD | Ma_2019 | not_relevant | 1 | 0 | The paper reports qualitative antagonistic effects of mianserin on an insect receptor but provides no numeric PD parameters (e.g., Ki, IC50) or concentration-effect curves for mianserin. |
| PGx | Maguire_1983 | not_relevant | 0 | 0 | The study reports pharmacokinetic parameters in elderly patients but does not mention any genetic variants, genotypes, or pharmacogenomic factors affecting mianserin. |
| popPK | McDermott-Rouse_2021 | irrelevant | 0 | 0 | This is a C. elegans behavioral mode-of-action screening study; mianserin is only one screened compound and no PK parameters are reported. |
| popPK | Mihara_1997 | irrelevant | 2 | 3 | The study reports steady-state plasma concentrations and therapeutic response but does not provide quantitative pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| popPK | Mikuni_1987 | irrelevant | 0 | 0 | The study investigates receptor binding and second messenger signaling mechanisms in rat cortex and human platelets, containing no pharmacokinetic parameters for mianserin. |
| PGx | Mikuni_1987 | not_relevant | 0 | 0 | The study investigates the receptor binding mechanisms of psychotropic drugs in rats and humans but does not report pharmacogenomic effects on the PK or PD parameters of mianserin. |
| popPK | Minguez_2014 | irrelevant | 0 | 0 | The study assesses acute toxicity and modes of action in Daphnia magna, reporting EC50 values rather than pharmacokinetic disposition parameters for mianserin. |
| PGx | Minguez_2014 | not_relevant | 0 | 0 | The paper describes ecotoxicology and acute toxicity mechanisms in non-human models without any analysis of genetic variants or pharmacogenomic effects. |
| popPK | Mitchell_2004 | irrelevant | 1 | 0 | The paper is a review of therapeutic drug monitoring without original quantitative pharmacokinetic parameter values for mianserin. |
| PGx | Mitchell_2004 | not_relevant | 1 | 1 | The paper is a general review of TDM for various antidepressants and only mentions pharmacogenomics as a future application, without reporting specific genetic effects on mianserin PK/PD. |
| PGx | Molden_2011 | not_relevant | 0 | 0 | Paper reviews metoprolol–antidepressant drug interactions, not pharmacogenomic effects on mianserin PK/PD. |
| popPK | Odagaki_1993 | irrelevant | 0 | 0 | The study is a pharmacological/mechanistic investigation of GTPase activity in platelet membranes, not a pharmacokinetic study, and mianserin is used only as an antagonist probe. |
| PGx | Odagaki_1993 | not_relevant | 0 | 0 | The paper investigates receptor-mediated GTPase activity in platelets and uses mianserin as an antagonist to characterize alpha-2 adrenergic receptor properties, but it does not report a pharmacogenomic effect (i.e., influence of a gene variant on drug response) on a PK or PD parameter of mianserin itself in a clinical or patient population context. |
| popPK | Paluzzi_2015 | irrelevant | 0 | 0 | Mianserin is only used as a serotonin receptor antagonist in an insect receptor pharmacology study; no PK parameters for mianserin. |
| popPK | Piechota_2015 | irrelevant | 0 | 0 | This is a genomics study analyzing transcriptional responses in mouse striatum, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Piechota_2015 | not_relevant | 0 | 0 | The study analyzes transcriptomic changes in the brain following mianserin treatment in mice, focusing on gene transcriptional regulation rather than the impact of a human genetic variant on a pharmacokinetic or pharmacodynamic parameter of the drug. |
| popPK | Raiteri_1992 | irrelevant | 0 | 0 | The paper is an in vitro neuropharmacology study characterizing alpha-2 autoreceptors, and mianserin is used only as a pharmacological tool/antagonist, not as the subject of a pharmacokinetic analysis. |
| PGx | Raiteri_1992 | not_relevant | 0 | 0 | The paper studies alpha 2-autoreceptors in brain slices and does not report any pharmacogenomic effects on the PK or PD of mianserin. |
| popPK | Rangaraju_2016 | irrelevant | 0 | 0 | This is a mechanistic/transcriptomic study on longevity and gene expression in C. elegans and humans, reporting no pharmacokinetic parameters for mianserin. |
| PGx | Rangaraju_2016 | not_relevant | 0 | 0 | The paper examines the relationship between ANK3 gene expression/variants and longevity/depression, and uses mianserin in C. elegans to model drug effects on lifespan, but it does not report pharmacokinetic or pharmacodynamic parameters of mianserin in humans or animals linked to a specific pharmacogenomic variant. |
| popPK | Roth_1986 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT2 receptor-mediated phosphoinositide turnover in rat aorta, reporting antagonist potency (IC50) rather than pharmacokinetic disposition parameters for mianserin. |
| PGx | Roth_1986 | not_relevant | 0 | 0 | The paper describes the pharmacological mechanism of 5-HT2 receptors and the modulation by phorbol esters, but does not report any pharmacogenomic effect (gene variant) on the pharmacokinetics or pharmacodynamics of mianserin. |
| PGx | Sakurada_2018 | not_relevant | 2 | 3 | Case report links HLA-B*4601 to allergic reactions (including mianserin cross-reactivity) but reports no PK/PD parameter change for mianserin. |
| popPK | Schoeffter_1988 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT1D receptor coupling in calf brain tissue where mianserin is used only as an antagonist probe, with no pharmacokinetic data reported. |
| PGx | Schoeffter_1988 | not_relevant | 0 | 0 | The paper investigates receptor pharmacology of the 5-HT1D subtype and does not report any pharmacogenomic effects on mianserin's pharmacokinetics or pharmacodynamics. |
| popPK | Shimizu_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor desensitization in astrocytes, not a pharmacokinetic study of mianserin. |
| PGx | Shimizu_1996 | not_relevant | 0 | 0 | The paper investigates the effect of chronic mianserin exposure on 5-HT7 receptor function in astrocytes (a pharmacodynamic response to the drug) and does not examine any genetic variants or their impact on mianserin's pharmacokinetics or pharmacodynamics. |
| popPK | Sindrup_1992 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on diabetic neuropathy symptoms and does not report pharmacokinetic disposition parameters (CL, V, etc.) for mianserin. |
| PGx | Sindrup_1992 | not_relevant | 0 | 0 | The study mentions a poor metabolizer status affecting plasma concentration, but the primary outcome is the lack of clinical efficacy, and no specific pharmacokinetic parameter (like AUC or half-life) is quantified based on genotype. |
| popPK | Spigset_1997 | irrelevant | 0 | 0 | The paper is a case review of adverse drug reactions (seizures/myoclonus) and does not report quantitative pharmacokinetic parameters for mianserin. |
| PGx | Spigset_1997 | not_relevant | 1 | 2 | The paper investigates risk factors for seizures/myoclonus (adverse events) and reports no significant association between CYP2D6/CYP2C19 genotypes and these outcomes, nor does it provide quantitative PK/PD parameter data for mianserin. |
| popPK | Sutherland_2023 | irrelevant | 0 | 0 | In vitro secondary pharmacology/ADR association study; mianserin not a PK subject and no disposition parameters reported. |
| popPK | Szewczuk-Bogusławska_2004 | irrelevant | 0 | 0 | The paper is a review of CYP2D6 phenotyping strategies and does not report quantitative pharmacokinetic parameters (e.g., CL, Vd, t1/2) for mianserin. |
| PGx | Szewczuk-Bogusławska_2004 | not_relevant | 1 | 0 | The text describes the general mechanism of CYP2D6 polymorphism affecting various antidepressants but does not report specific data, studies, or quantitative effects for mianserin. |
| popPK | Terai_1989 | irrelevant | 0 | 0 | The paper is a receptor binding study in rat striatum where mianserin is used only as a displacement ligand to determine Ki values, not as the subject of a pharmacokinetic disposition study. |
| PGx | Terai_1989 | not_relevant | 0 | 0 | The paper compares binding affinities of radioligands to dopamine D-2 receptors in rat striatum and does not report any pharmacogenomic effect on the PK or PD of mianserin. |
| popPK | Terrón_1996 | irrelevant | 0 | 0 | The study is an in vitro pharmacological characterization of 5-HT receptors in dog coronary arteries, not a pharmacokinetic study of mianserin. |
| PGx | Terrón_1996 | not_relevant | 0 | 0 | The paper investigates receptor pharmacology and drug binding in isolated canine coronary arteries, not the effect of genetic variants on mianserin pharmacokinetics or pharmacodynamics. |
| PGx | Timmer_1985 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters of mianserin in healthy subjects but does not investigate gene variants or genotypes (pharmacogenomics). |
| popPK | Tokmakjian_2026 | irrelevant | 0 | 0 | Mianserin is only mentioned as a CAD used in a published expression dataset; no PK parameters for mianserin are reported. |
| popPK | Wu_2017 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo receptor pharmacology characterization in a brown planthopper, where mianserin is used only as a comparator antagonist to characterize the receptor profile, not as a subject drug for PK parameter extraction. |
| PGx | Wu_2017 | not_relevant | 0 | 0 | The paper focuses on insect octopamine receptors and uses mianserin merely as a pharmacological antagonist in insect physiology, not as a drug undergoing pharmacokinetics or pharmacodynamics in humans or animals. |
| popPK | Yamamoto_2003 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of CYP2D6 inhibition using mianserin as a compound, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Yamamoto_2003 | not_relevant | 0 | 0 | The paper is a methodological study on enzyme inhibition using CYP2D6, where mianserin is tested as an inhibitor, not for its own pharmacokinetics altered by genetic polymorphisms. |
| popPK | Yang_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium mobilization where mianserin is used only as a receptor antagonist, not as the subject of a pharmacokinetic analysis. |
| PGx | Yang_1994 | not_relevant | 0 | 0 | The paper reports receptor binding affinity of mianserin but does not investigate any gene variants or pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Yang_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of iris-ciliary body receptors where mianserin is used only as a non-selective antagonist, containing no pharmacokinetic parameters. |
| PGx | Yang_1998 | not_relevant | 0 | 0 | The paper describes in vitro pharmacology of 5-HT receptors in iris tissue and mentions mianserin only as a non-selective antagonist, with no data on genetic variants affecting PK or PD. |
| popPK | Yasui_1997 | irrelevant | 2 | 3 | The study reports steady-state plasma concentrations (Cmin) for a drug interaction but does not report disposition parameters like clearance (CL), volume of distribution (V), or half-life (t1/2). |
| PGx | Yasui_1997 | not_relevant | 3 | 8 | The study primarily reports a pharmacokinetic drug-drug interaction (inhibition by thioridazine), and while it notes a specific PK phenotype in a single CYP2D6*5 homozygous patient, it does not report a general pharmacogenomic effect on the population. |
| popPK | Zhu_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of contractile responses in rat gastric smooth muscle where mianserin is used as a serotonin receptor antagonist, not a pharmacokinetic study. |
| PGx | Zhu_1996 | not_relevant | 0 | 0 | The paper investigates the effect of diabetes on smooth muscle contractility to serotonin and the use of mianserin as a pharmacological tool, but does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of mianserin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmianserin%5D&body=Drug%3A%20mianserin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mianserin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:11 UTC</sub>
