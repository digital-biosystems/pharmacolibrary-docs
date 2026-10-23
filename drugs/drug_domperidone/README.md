<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03F&quot;,&quot;href&quot;:&quot;atc/A03F.md&quot;},{&quot;label&quot;:&quot;domperidone&quot;}]"></div>

# domperidone

- **generic name:** domperidone
- **ATC codes:** `A03FA03`
- **DrugBank:** [DB01184](https://go.drugbank.com/drugs/DB01184) · **PubChem:** [CID 3151](https://pubchem.ncbi.nlm.nih.gov/compound/3151)
- **molar mass:** 425.911 g/mol (C22H24ClN5O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Domperidone is a dopamine-blocking medicine used to treat nausea and vomiting and to help the stomach empty, and it is also taken to boost milk production. It is an approved medicine, widely used in many countries for these stomach-related problems, though it is not authorised in the United States.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424238](https://www.wikidata.org/wiki/Q424238) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| domperidone | parent | 425.911 | C22H24ClN5O2 | DrugBank | [3151](https://pubchem.ncbi.nlm.nih.gov/compound/3151) | Dailly_2008 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Dailly_2008_reference](drugs/drug_domperidone/Domperidone_Dailly2008_reference.md) | — | 1-compartment (no model) | 3 | Dailly E et al., Population pharmacokinetics of domperid…, European journal of clinica… (2008) | [10.1007/s00228-008-0535-1](https://doi.org/10.1007/s00228-008-0535-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Claassen_2005_I_Kr](drugs/drug_domperidone/pd_Claassen_2005_I_Kr.md) | HERG currents ← domperidone · direct sigmoid Emax (Hill) effect | — | Claassen S et al., Comparison of the effects of metoclopra…, Pharmacology (2005) | [10.1159/000083234](https://doi.org/10.1159/000083234) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Borst_2013](drugs/drug_domperidone/pgx_Borst_2013_ABCB1_Q100.md) | Borst P et al., P-glycoprotein ABCB1: a major player in…, The Journal of clinical inv… (2013) | [10.1172/JCI70430](https://doi.org/10.1172/JCI70430) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:52 | 4:16 | 0/1/0 | 1/0/0 | 0/0/1 | 66,021/8,936 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 3/5 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 82 matched, 60 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_23 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dailly_2008.pdf` | Dailly E et al., Population pharmacokinetics of domperid…, European journal of clinica… (2008) | popPK | 10 | [10.1007/s00228-008-0535-1](https://doi.org/10.1007/s00228-008-0535-1) | [18685840](https://pubmed.ncbi.nlm.nih.gov/18685840) | The paper reports a population pharmacokinetic model for domperidone with explicit numeric values for clearance, volume of distribution, and absorption rate constant in the abstract. |
| `Heykants_1981.pdf` | Heykants J et al., On the pharmacokinetics of domperidone…, European journal of drug me… (1981) | popPK | 10 | [10.1007/BF03189516](https://doi.org/10.1007/BF03189516) | [7250152](https://pubmed.ncbi.nlm.nih.gov/7250152) | The study reports quantitative PK parameters for domperidone in humans, but specific numeric values for clearance, volume, or rate constants are not present in the provided abstract text. |
| `Heykants_1981_2.pdf` | Heykants J et al., On the pharmacokinetics of domperidone…, European journal of drug me… (1981) | popPK | 9 | [10.1007/BF03189513](https://doi.org/10.1007/BF03189513) | [7250149](https://pubmed.ncbi.nlm.nih.gov/7250149) | The study reports quantitative PK parameters (half-lives, model type) for domperidone in rats and dogs, but specific values for clearance, volume, or ka are not fully detailed in the provided abstract text. |
| `Wu_2002.pdf` | Wu MS et al., Determination of domperidone in human p…, Acta pharmacologica Sinica (2002) | popPK | 9 | not captured | [11918857](https://pubmed.ncbi.nlm.nih.gov/11918857) | The study reports quantitative pharmacokinetic parameters (Tmax, Cmax, T1/2) for domperidone in humans, though clearance and volume values are not explicitly listed in the provided text. |
| `Bose_2013.pdf` | Bose A et al., Convolution and validation of in vitro-…, European journal of drug me… (2013) | popPK | 8 | [10.1007/s13318-012-0116-7](https://doi.org/10.1007/s13318-012-0116-7) | [23264125](https://pubmed.ncbi.nlm.nih.gov/23264125) | The study reports pharmacokinetic parameters (absorption rate constant, AUC, Cmax) for domperidone, but the specific numeric values are not present in the provided evidence text. |
| `Devandla_2015.pdf` | Devandla A et al., Effect of rifampicin pretreatment on th…, Drug metabolism and persona… (2015) | popPK | 8 | [10.1515/dmpt-2015-0004](https://doi.org/10.1515/dmpt-2015-0004) | [26353177](https://pubmed.ncbi.nlm.nih.gov/26353177) | The study reports quantitative PK parameters (Cmax, AUC, MRT, t1/2) for domperidone in humans, but specific numeric values are not explicitly listed in the provided abstract text, only percentage changes. |
| `Corsi_1991.pdf` | Corsi M et al., Pharmacological analysis of 5-hydroxytr…, British journal of pharmaco… (1991) | pd | 4 | [10.1111/j.1476-5381.1991.tb12494.x](https://doi.org/10.1111/j.1476-5381.1991.tb12494.x) | [1797331](https://www.ncbi.nlm.nih.gov/pubmed/1797331) | metadata signals extractable PD data (EC50) |
| `Etchegoyen_1986.pdf` | Etchegoyen GS et al., Binding and effects of catecholestrogen…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90329-8](https://doi.org/10.1016/0014-2999(86)90329-8) | [3021471](https://www.ncbi.nlm.nih.gov/pubmed/3021471) | metadata signals extractable PD data (EC50) |
| `Kan_2025.pdf` | Kan JY et al., Darunavir inhibits dengue virus replica…, Biochemical pharmacology (2025) | pd | 4 | [10.1016/j.bcp.2025.116839](https://doi.org/10.1016/j.bcp.2025.116839) | [40024350](https://www.ncbi.nlm.nih.gov/pubmed/40024350) | metadata signals extractable PD data (EC50) |
| `Schuurkes_1985.pdf` | Schuurkes JA et al., A comparative study on the effects of d…, Japanese journal of pharmac… (1985) | pd | 4 | [10.1254/jjp.39.123](https://doi.org/10.1254/jjp.39.123) | [4087563](https://www.ncbi.nlm.nih.gov/pubmed/4087563) | metadata signals extractable PD data (IC50) |
| `Vayssette_1986.pdf` | Vayssette J et al., Dopamine receptors in pancreatic acinar…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90412-7](https://doi.org/10.1016/0014-2999(86)90412-7) | [2872068](https://www.ncbi.nlm.nih.gov/pubmed/2872068) | metadata signals extractable PD data (EC50) |
| `Athukuri_2017.pdf` | Athukuri BL et al., Enhanced Oral Bioavailability of Domper…, Journal of pharmacy & pharm… (2017) | pgx | 7 | [10.18433/J3MK72](https://doi.org/10.18433/J3MK72) | [28459658](https://www.ncbi.nlm.nih.gov/pubmed/28459658) | metadata signals extractable PGX data (CYP3A1, PK/PD-context) |
| `Michaud_2010.pdf` | Michaud V et al., Characterization of CYP3A isozymes invo…, Drug metabolism letters (2010) | pgx | 7 | [10.2174/187231210791292735](https://doi.org/10.2174/187231210791292735) | [21281268](https://www.ncbi.nlm.nih.gov/pubmed/21281268) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Naidoo_2019.pdf` | Naidoo P et al., Progress in the Consideration of Possib…, Current drug metabolism (2019) | pgx | 7 | [10.2174/1389200220666181128160813](https://doi.org/10.2174/1389200220666181128160813) | [30488793](https://www.ncbi.nlm.nih.gov/pubmed/30488793) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Nomoto_2005.pdf` | Nomoto M et al., [Inter- and intraindividual pharmacokin…, Rinsho shinkeigaku = Clinic… (2005) | pgx | 7 | not captured | [16447756](https://www.ncbi.nlm.nih.gov/pubmed/16447756) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Rossi_2010.pdf` | Rossi M et al., Domperidone and long QT syndrome, Current drug safety (2010) | pgx | 7 | [10.2174/157488610791698334](https://doi.org/10.2174/157488610791698334) | [20394569](https://www.ncbi.nlm.nih.gov/pubmed/20394569) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Templeton_2016.pdf` | Templeton I et al., A physiologically based pharmacokinetic…, Biopharmaceutics & drug dis… (2016) | pgx | 7 | [10.1002/bdd.1992](https://doi.org/10.1002/bdd.1992) | [26356245](https://www.ncbi.nlm.nih.gov/pubmed/26356245) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ung_2009.pdf` | Ung D et al., Metabolic interactions between prokinet…, Xenobiotica; the fate of fo… (2009) | pgx | 7 | [10.1080/00498250903096121](https://doi.org/10.1080/00498250903096121) | [19575604](https://www.ncbi.nlm.nih.gov/pubmed/19575604) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yamsani_2014.pdf` | Yamsani SK et al., Effect of silymarin pretreatment on the…, Drug metabolism and drug in… (2014) | pgx | 7 | [10.1515/dmdi-2014-0013](https://doi.org/10.1515/dmdi-2014-0013) | [25029082](https://www.ncbi.nlm.nih.gov/pubmed/25029082) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Zhou_2021.pdf` | Zhou H et al., A simple LC-MS/MS method for simultaneo…, Journal of chromatography.… (2021) | pgx | 7 | [10.1016/j.jchromb.2021.122766](https://doi.org/10.1016/j.jchromb.2021.122766) | [34247102](https://www.ncbi.nlm.nih.gov/pubmed/34247102) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `unknown_2016.pdf` | unknown, Metoclopramide, domperidone: sudden car…, Prescrire international (2016) | pgx | 7 | not captured | [30645828](https://www.ncbi.nlm.nih.gov/pubmed/30645828) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Essa_2012.pdf` | Essa EA et al., Preparation and characterization of dom…, Pakistan journal of pharmac… (2012) | pgx | 5 | not captured | [23009995](https://www.ncbi.nlm.nih.gov/pubmed/23009995) | metadata signals extractable PGX data (CYP3A4) |
| `Parkman_2011.pdf` | Parkman HP et al., Domperidone treatment for gastroparesis…, Digestive diseases and scie… (2011) | pgx | 5 | [10.1007/s10620-010-1472-2](https://doi.org/10.1007/s10620-010-1472-2) | [21063774](https://www.ncbi.nlm.nih.gov/pubmed/21063774) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-04T13:48:37.709551+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Athukuri_2017 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (piperine) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Barthelmebs_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of renal vascular receptors where domperidone is used as a D2 antagonist, not a pharmacokinetic study of domperidone. |
| PD | Barthelmebs_1991 | not_relevant | 0 | 0 | The study reports PD parameters (EC50, Emax) for bromocriptine, not domperidone; domperidone is used only as a qualitative antagonist to confirm receptor subtype. |
| popPK | Biewenga_2015 | irrelevant | 2 | 2 | The study is a thorough QT/QTc safety trial that reports only exposure metrics (AUC, Cmax) and ECG data, lacking the specific disposition parameters (CL, V, ka, t1/2) required for population PK modeling. |
| popPK | Bose_2013 | relevant | 8 | 0 | The study reports pharmacokinetic parameters (absorption rate constant, AUC, Cmax) for domperidone, but the specific numeric values are not present in the provided evidence text. |
| popPK | Claassen_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel blockade, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Corsi_1991 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | Corsi_1991 | not_relevant | 0 | 0 | The paper analyzes the effects of 5-hydroxytryptamine on the human urinary bladder and does not mention domperidone or report any pharmacodynamic parameters for it. |
| popPK | Devandla_2015 | relevant | 8 | 4 | The study reports quantitative PK parameters (Cmax, AUC, MRT, t1/2) for domperidone in humans, but specific numeric values are not explicitly listed in the provided abstract text, only percentage changes. |
| PGx | Doggrell_2014 | not_relevant | 0 | 0 | The paper is a review of cardiac safety and pharmacodynamics (QT prolongation) but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Duvignaud_2020 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for treating SARS-CoV-2 and does not report pharmacogenomic effects on domperidone PK/PD. |
| PGx | Essa_2012 | not_relevant | 0 | 0 | The paper focuses on formulation development (solid dispersions) to improve dissolution and bioavailability, not on pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Etchegoyen_1986 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PD | Etchegoyen_1986 | not_relevant | 0 | 0 | The paper focuses on catecholestrogens and receptor binding in guinea-pig membranes, with no mention of domperidone or its pharmacodynamics. |
| popPK | Heykants_1981 | relevant | 10 | 2 | The study reports quantitative PK parameters for domperidone in humans, but specific numeric values for clearance, volume, or rate constants are not present in the provided abstract text. |
| popPK | Heykants_1981_2 | relevant | 9 | 3 | The study reports quantitative PK parameters (half-lives, model type) for domperidone in rats and dogs, but specific values for clearance, volume, or ka are not fully detailed in the provided abstract text. |
| PGx | Ioannou_2016 | not_relevant | 0 | 0 | The study is a survey of prescribing practices and drug interactions, not a pharmacogenomic study investigating the effect of genetic variants on domperidone PK/PD. |
| popPK | Kan_2025 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Kan_2025 | not_relevant | 0 | 0 | The paper discusses darunavir and dengue virus, not domperidone, and does not report any pharmacodynamic or exposure-response data for the target drug. |
| popPK | Kurosawa_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of dopamine receptors in guinea pig stomach smooth muscle, where domperidone is used only as a selective antagonist probe, and no pharmacokinetic parameters are reported. |
| PD | Kurosawa_1991 | not_relevant | 0 | 0 | The paper reports pharmacological characterization of dopamine receptors in guinea pig stomach smooth muscle; domperidone is mentioned only as a DA2 antagonist that had no effect, with no exposure-response or dose-response relationship for domperidone itself. |
| PGx | Maher_2017 | not_relevant | 0 | 0 | The paper uses domperidone as an internal standard for a bioanalytical method and does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Marechal_2006 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (CYP3A4 inhibition) involving domperidone, not pharmacogenomic effects (gene variants) on its PK/PD. |
| popPK | McGonigle_1988 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay characterizing D2 sites in human retina, not a pharmacokinetic study of domperidone. |
| PD | McGonigle_1988 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding kinetics (Kd, Bmax) for spiroperidol and mentions domperidone's affinity for binding sites, but it does not report a pharmacodynamic exposure-response or dose-response relationship for domperidone in a physiological or clinical context. |
| PGx | Michaud_2010 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (clarithromycin inhibiting domperidone metabolism) and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Michaud_2010_2 | not_relevant | 0 | 0 | The study characterizes CYP3A isoforms and cytochrome b5 modulation in vitro but does not report the effect of a specific gene variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Naidoo_2019 | not_relevant | 0 | 0 | The paper discusses sex differences in drug interactions, not pharmacogenomic effects (gene variants) on domperidone PK/PD. |
| popPK | Nomoto_2005 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| PGx | Nomoto_2005 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic variations in Parkinson's disease treatment but does not report pharmacogenomic effects on domperidone. |
| PGx | Patoine_2014 | not_relevant | 0 | 0 | The study investigates the effect of diabetes (a disease state) on CYP3a activity, not the effect of a specific gene variant or genotype on domperidone pharmacokinetics. |
| PGx | Rossi_2010 | not_relevant | 0 | 0 | The paper reviews the safety risk of long QT syndrome associated with domperidone but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Rump_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor modulation in human atrial tissue, not a pharmacokinetic study of domperidone. |
| PD | Rump_1995 | not_relevant | 3 | 2 | The study reports a pKB value for domperidone as a D2 antagonist in an ex vivo electrophysiology/neurotransmission assay, which is a pharmacological potency parameter rather than a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| PGx | Satoh_2003 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of 29 drugs on estradiol oxidation, not the pharmacokinetics or pharmacodynamics of domperidone. |
| popPK | Schuurkes_1985 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Schuurkes_1985 | not_relevant | 0 | 0 | The paper is an in-vitro/in-vivo pharmacological study on guinea pigs focusing on qualitative or semi-quantitative effects on gut preparation, not a clinical PK/PD or exposure-response analysis with numeric PD parameters for domperidone. |
| PGx | Simard_2004 | not_relevant | 0 | 0 | The paper identifies CYP3A4 as the metabolic enzyme for domperidone using in vitro systems but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters in humans. |
| PGx | Swain_2013 | not_relevant | 0 | 0 | The paper reports a lack of neurotoxicity (clinical observation) for domperidone in a mouse model, but does not report changes in specific pharmacokinetic or pharmacodynamic parameters. |
| PGx | Tanda_1994 | not_relevant | 0 | 0 | The paper investigates the hemodynamic effects of dopamine on tumor blood flow and uses domperidone only as a receptor antagonist to characterize the mechanism, without reporting any pharmacogenomic effects on domperidone's PK or PD parameters. |
| PGx | Templeton_2016 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions with CYP3A4 inhibitors using PBPK modeling, not on pharmacogenomic variants affecting domperidone PK/PD. |
| PGx | Ung_2009 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (erythromycin inhibiting CYP3A4) rather than a pharmacogenomic effect (gene variant/genotype) on domperidone PK/PD. |
| popPK | Vayssette_1986 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| PD | Vayssette_1986 | not_relevant | 0 | 0 | The paper focuses on dopamine receptors in pancreatic acinar cells from dogs and does not mention domperidone or report any pharmacodynamic or exposure-response data for it. |
| PGx | Wang_2012 | not_relevant | 2 | 5 | The study reports associations between SNPs and clinical outcomes (efficacy/side effects) rather than specific pharmacokinetic or pharmacodynamic parameters. |
| PGx | Ward_2004 | not_relevant | 0 | 0 | The paper characterizes CYP enzymes involved in domperidone metabolism in vitro but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| popPK | Wu_2023 | relevant | 4 | 2 | The study reports non-compartmental PK parameters (Cmax, AUC, T1/2) for domperidone, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only bioequivalence ratios. |
| PGx | Yamsani_2014 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (silymarin) rather than a pharmacogenomic effect (gene variant/genotype). |
| PGx | Youssef_2014 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (pioglitazone/ondansetron) on domperidone metabolism, not the effect of a gene variant or genotype on PK/PD parameters. |
| PGx | Zhou_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction study for cilostazol and ambroxol, using domperidone only as an internal standard, and contains no pharmacogenomic data. |
| PGx | Zidan_2020 | not_relevant | 2 | 5 | The paper uses in silico methods to predict genes associated with adverse drug reactions (like QT prolongation) but does not report measured pharmacokinetic or pharmacodynamic parameter changes linked to specific genotypes. |
| PGx | unknown_2016 | not_relevant | 0 | 0 | The text discusses drug-drug interactions (CYP3A4 inhibitors) and safety risks, but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 13:48 UTC</sub>
