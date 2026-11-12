<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;4-Aminobiphenyl&quot;}]"></div>

# 4-Aminobiphenyl

- **generic name:** 4-Aminobiphenyl
- **T3DB:** [T3D0232](http://www.t3db.ca/toxins/T3D0232) · **PubChem:** [CID 7102](https://pubchem.ncbi.nlm.nih.gov/compound/7102)

## About

4-Aminobiphenyl is an amine derivative of biphenyl. It is used to manufacture azo dyes. It is a known human carcinogen and so it has been largely replaced by less toxic compounds. …

- **Category:** Cigarette Toxin, Industrial/Workplace Toxin, Pollutant, Airborne Pollutant, Food Toxin, Synthetic Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Sources and uses:** 4-Aminobiphenyl is used to manufacture azo dyes and is also found in tobacco smoke.
- **Mechanism of toxicity:** 4-Aminobiphenyl requires metabolic activation in order to exert its toxicity. This is catalyzed by N-hydroxylation via cytochrome P450 1A2, then followed by O-sulfation and O-acetylation by sulfotransferase 1A1 and arylamine N-acetyltransferase 2. …
- **Health effects:** 4-Aminobiphenyl is a known human carcinogen. It may also cause methemoglobinemia.
- **Carcinogenicity:** IARC group 1, carcinogenic to humans.
- **Acute toxicity:** LD50: 205 mg/kg (Oral, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0232">T3DB T3D0232</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 92-67-1 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:1784">ChEBI 1784</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 4-aminobiphenyl hemoglobin adducts | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Schorp_2010_reference](drugs/toxin_4_aminobiphenyl/D_4Aminobiphenyl_Schorp2010_reference.md) | — | 1-compartment (no model) | 0 | Schorp MK et al., Biomonitoring of smoke constituents: ex…, Inhalation toxicology (2010) | [10.3109/08958371003717043](https://doi.org/10.3109/08958371003717043) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **NAT1** | `Q1` · Km | metabolism | [Habil_2022](drugs/toxin_4_aminobiphenyl/pgx_Habil_2022_NAT1_Q1.md) | Habil MR et al., Acetyl coenzyme A kinetic studies on N-…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.931323](https://doi.org/10.3389/fphar.2022.931323) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=4_aminobiphenyl).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `NAT1` metabolism | PGx paper |
| metabolism | liver | `NAT1` metabolism | PGx paper |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 03:20 | 27:10 | 0/1/0 | 0/0/0 | 0/0/1 | 362,025/19,710 | einfracz / qwen3.8-27b | 12 | 3/6 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 138 matched, 129 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_17 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kadlubar_1991.pdf` | Kadlubar FF et al., Frequency of urination and its effects…, Cancer research (1991) | popPK | 10 |  | [1868460](https://pubmed.ncbi.nlm.nih.gov/1868460) | The paper reports a multicompartmental pharmacokinetic model and kinetic parameters (such as apparent volumes of distribution and reabsorption rates) for 4-aminobiphenyl in beagle dogs, but specific numeric parameter values are not visible in the provided text. |
| `Schorp_2010.pdf` | Schorp MK et al., Biomonitoring of smoke constituents: ex…, Inhalation toxicology (2010) | popPK | 9 | [10.3109/08958371003717043](https://doi.org/10.3109/08958371003717043) | [20433335](https://pubmed.ncbi.nlm.nih.gov/20433335) | The paper provides specific quantitative estimates (mean, median, 95th percentile) for 4-aminobiphenyl hemoglobin adduct steady-state levels in humans, derived from toxicokinetic and exposure models. |
| `Wang_2015_2.pdf` | Wang S et al., Relative Contributions of CYP1A2 and CY…, Drug metabolism and disposi… (2015) | popPK | 8 | [10.1124/dmd.115.063297](https://doi.org/10.1124/dmd.115.063297) | [25922528](https://pubmed.ncbi.nlm.nih.gov/25922528) | The paper describes in vivo clearance and Vmax for 4-aminobiphenyl in mice, but the provided evidence contains no numeric values for these parameters. |
| `Chen_2002.pdf` | Chen HM et al., Effects of lead on 4-aminobiphenyl phar…, Ecotoxicology (London, Engl… (2002) | popPK | 5 | [10.1023/a:1016396121312](https://doi.org/10.1023/a:1016396121312) | [12211698](https://pubmed.ncbi.nlm.nih.gov/12211698) | The paper reports the study of 4-aminobiphenyl pharmacokinetics in rats, but the specific quantitative kinetic parameters are not provided in the extracted text or abstract. |
| `Babu_1994.pdf` | Babu SR et al., Glucuronidation of N-acetylbenzidine by…, Drug metabolism and disposi… (1994) | pd | 4 |  | [7895611](https://www.ncbi.nlm.nih.gov/pubmed/7895611) | metadata signals extractable PD data (IC50) |
| `Carreón_2006.pdf` | Carreón T et al., NAT2 slow acetylation and bladder cance…, International journal of ca… (2006) | pgx | 8 | [10.1002/ijc.21308](https://doi.org/10.1002/ijc.21308) | [16003747](https://www.ncbi.nlm.nih.gov/pubmed/16003747) | metadata signals extractable PGX data (NAT2, PK/PD-context) |
| `Doll_2017.pdf` | Doll MA et al., Genetic heterogeneity among slow acetyl…, Archives of toxicology (2017) | pgx | 8 | [10.1007/s00204-017-1988-8](https://doi.org/10.1007/s00204-017-1988-8) | [28516247](https://www.ncbi.nlm.nih.gov/pubmed/28516247) | metadata signals extractable PGX data (NAT2, PK/PD-context) |
| `Hein_2018.pdf` | Hein DW et al., Role of N-acetyltransferase 2 acetylati…, Toxicology letters (2018) | pgx | 8 | [10.1016/j.toxlet.2017.11.028](https://doi.org/10.1016/j.toxlet.2017.11.028) | [29180287](https://www.ncbi.nlm.nih.gov/pubmed/29180287) | metadata signals extractable PGX data (NAT2, PK/PD-context) |
| `Sugamori_2007.pdf` | Sugamori KS et al., Effect of arylamine acetyltransferase N…, Drug metabolism and disposi… (2007) | pgx | 8 | [10.1124/dmd.107.015396](https://doi.org/10.1124/dmd.107.015396) | [17403913](https://www.ncbi.nlm.nih.gov/pubmed/17403913) | metadata signals extractable PGX data (Nat2, PK/PD-context) |
| `Vaziri_2001.pdf` | Vaziri SA et al., Variation in enzymes of arylamine proca…, Pharmacogenetics (2001) | pgx | 8 | [10.1097/00008571-200102000-00002](https://doi.org/10.1097/00008571-200102000-00002) | [11207033](https://www.ncbi.nlm.nih.gov/pubmed/11207033) | metadata signals extractable PGX data (NAT2, PK/PD-context) |
| `Fukami_2007.pdf` | Fukami T et al., CYP2A13 metabolizes the substrates of h…, Drug metabolism and disposi… (2007) | pgx | 7 | [10.1124/dmd.106.011064](https://doi.org/10.1124/dmd.106.011064) | [17178771](https://www.ncbi.nlm.nih.gov/pubmed/17178771) | metadata signals extractable PGX data (CYP2A13, PK/PD-context) |
| `Sarkar_2006.pdf` | Sarkar M et al., CYP1A2 and NAT2 phenotyping and 3-amino…, Toxicology and applied phar… (2006) | pgx | 7 | [10.1016/j.taap.2005.11.003](https://doi.org/10.1016/j.taap.2005.11.003) | [16405939](https://www.ncbi.nlm.nih.gov/pubmed/16405939) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Castelao_2004.pdf` | Castelao JE et al., Carotenoids/vitamin C and smoking-relat…, International journal of ca… (2004) | pgx | 5 | [10.1002/ijc.20104](https://doi.org/10.1002/ijc.20104) | [15095308](https://www.ncbi.nlm.nih.gov/pubmed/15095308) | metadata signals extractable PGX data (CYP1A2) |
| `Faraglia_2003.pdf` | Faraglia B et al., Evaluation of 4-aminobiphenyl-DNA adduc…, Carcinogenesis (2003) | pgx | 5 | [10.1093/carcin/bgg013](https://doi.org/10.1093/carcin/bgg013) | [12727801](https://www.ncbi.nlm.nih.gov/pubmed/12727801) | metadata signals extractable PGX data (NAT2) |
| `Hein_1994.pdf` | Hein DW et al., Construction of Syrian hamster lines co…, Toxicology and applied phar… (1994) | pgx | 5 | [10.1006/taap.1994.1003](https://doi.org/10.1006/taap.1994.1003) | [8291057](https://www.ncbi.nlm.nih.gov/pubmed/8291057) | metadata signals extractable PGX data (NAT2) |
| `Hein_2017.pdf` | Hein DW et al., Catalytic properties and heat stabiliti…, Archives of toxicology (2017) | pgx | 5 | [10.1007/s00204-017-1989-7](https://doi.org/10.1007/s00204-017-1989-7) | [28523442](https://www.ncbi.nlm.nih.gov/pubmed/28523442) | metadata signals extractable PGX data (NAT2) |
| `Talaska_2006.pdf` | Talaska G et al., Impact of Cyp1a2 or Ahr gene knockout i…, Toxicology letters (2006) | pgx | 5 | [10.1016/j.toxlet.2005.09.020](https://doi.org/10.1016/j.toxlet.2005.09.020) | [16256281](https://www.ncbi.nlm.nih.gov/pubmed/16256281) | metadata signals extractable PGX data (Cyp1a2) |

<sub>queue written 2026-11-11 03:15 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Badawi_1995 | irrelevant | 2 | 2 | The paper reports metabolic enzyme activities (NAT1/NAT2) and DNA adduct levels rather than disposition pharmacokinetic parameters (half-life, clearance, partition coefficients) for 4-aminobiphenyl itself. |
| PGx | Baldauf_2020 | not_relevant | 2 | 5 | The paper reports a pharmacogenomic effect on DNA damage and mutagenicity (toxicodynamic endpoints), not on the pharmacokinetic (PK) or therapeutic pharmacodynamic (PD) parameters of 4-aminobiphenyl as a drug, which is treated here as a carcinogen. |
| popPK | Bartsch_1990 | irrelevant | 0 | 0 | The paper measures the level of ABP hemoglobin adducts (a biomarker of internal dose/exposure) in humans but does not report quantitative toxicokinetic parameters such as half-life, clearance, rate constants, or partition coefficients for 4-aminobiphenyl. |
| PGx | Beyerbach_2006 | not_relevant | 0 | 0 | The paper describes hemoglobin adducts in exposed workers and mentions NAT1/NAT2 variants qualitatively but does not report a quantitative pharmacokinetic or pharmacodynamic effect of a specific genotype on 4-aminobiphenyl parameters. |
| popPK | Birner_1990 | irrelevant | 1 | 0 | The paper studies hemoglobin adducts of benzidine and its congeners in rats, where 4-aminobiphenyl is identified as a metabolite of benzidine rather than being the subject substance administered for kinetic analysis. |
| popPK | Cai_2017 | irrelevant | 1 | 0 | The paper reports biomarker concentrations (Hb adduct levels) and DNA adduct levels, which are measures of exposure/burden rather than kinetic parameters (half-life, clearance, rate constants) describing the rate of disposition. |
| PGx | Carreón_2006 | not_relevant | 0 | 0 | The paper discusses NAT2 and benzidine exposure, not 4-aminobiphenyl pharmacokinetics or pharmacodynamics. |
| PGx | Castelao_2004 | not_relevant | 0 | 0 | The paper discusses smoking-related bladder cancer and carotenoids, not the pharmacogenomics of 4-aminobiphenyl. |
| popPK | Chen_2002 | relevant | 5 | 0 | The paper reports the study of 4-aminobiphenyl pharmacokinetics in rats, but the specific quantitative kinetic parameters are not provided in the extracted text or abstract. |
| PGx | Chen_2002 | not_relevant | 0 | 0 | The paper investigates the effect of lead exposure (environmental factor) on 4-aminobiphenyl pharmacokinetics, not the effect of a genetic variant. |
| popPK | Chen_2003 | irrelevant | 0 | 0 | The paper reports genotoxicity (DNA damage) rankings and mechanisms, containing no toxicokinetic parameters (e.g., half-life, clearance, partition coefficients of disposition) for 4-aminobiphenyl. |
| popPK | Chen_2003_2 | irrelevant | 0 | 0 | The paper reports in vitro hemoglobin adduct formation (exposure/dose-response metrics) rather than quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Chung_2000 | irrelevant | 0 | 0 | The paper reports Ames test mutagenicity results, which are toxicodynamic/genotoxicity endpoints, not toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| PGx | Ciotti_1999 | not_relevant | 0 | 0 | The study investigates recombinant UGT enzymes in vitro but does not report how human gene variants or genotypes alter the pharmacokinetic or pharmacodynamic parameters of 4-aminobiphenyl in vivo. |
| PGx | Cohen_2000 | not_relevant | 2 | 1 | The paper is an epidemiological overview of bladder cancer etiology and mentions 4-aminobiphenyl as a carcinogen and N-acetyltransferase polymorphisms as risk factors, but it does not report specific pharmacokinetic or pharmacodynamic parameters or quantitative effects of the variants on these parameters for 4-aminobiphenyl. |
| PGx | Cui_2000 | not_relevant | 0 | 0 | The study demonstrates DNA adduct formation in a xenograft model but does not report pharmacogenomic effects of specific genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Doll_2010 | not_relevant | 4 | 2 | The study characterizes NAT2 genotype-phenotype correlations for metabolic activity (enzyme kinetics) in vitro, rather than reporting a change in a specific pharmacokinetic parameter (e.g., AUC, $t_{1/2}$) or pharmacodynamic endpoint for 4-aminobiphenyl in a subject population. |
| PGx | Duarte_2005 | not_relevant | 0 | 0 | The paper describes a bacterial mutagenicity assay involving gene knockouts (ada, ogt) and CYP expression, not human pharmacogenomic effects on the PK or PD parameters of 4-aminobiphenyl. |
| PGx | Faraglia_2003 | not_relevant | 3 | 1 | The paper reports a correlation between tobacco smoke (exposure) and DNA adduct levels, not a specific gene variant/genotype effect on the PK/PD of 4-aminobiphenyl. |
| PGx | Ferrer_2004 | not_relevant | 0 | 0 | The paper studies the antimutagenic effects of a plant extract on 4-ABP metabolism, not the impact of a specific human gene variant or genotype on 4-ABP pharmacokinetics or pharmacodynamics. |
| popPK | Fukami_2007 | irrelevant | 0 | 0 | The paper investigates the substrate specificity of CYP2A13 using standard probe drugs (phenacetin, theophylline) and mentions 4-aminobiphenyl only as a substrate for activation in a prior context, without reporting any quantitative kinetic parameters for 4-aminobiphenyl itself in this study. |
| PGx | Fukami_2007 | not_relevant | 3 | 5 | The paper compares the in vitro metabolic activities of CYP2A13 and CYP1A2 on substrates including 4-aminobiphenyl, but does not report a genetic variant-specific effect on a clinical pharmacokinetic or pharmacodynamic parameter. |
| PGx | Gonzalez_2001 | not_relevant | 4 | 2 | The paper mentions 4-aminobiphenyl only to state that CYP1A2-null mice do not differ significantly from wild-type, providing no specific PK/PD parameter data or quantitative effect sizes. |
| popPK | Hein_1993 | irrelevant | 3 | 1 | The paper reports in vitro metabolic parameters (enzyme kinetics/catalysis rates) for 4-aminobiphenyl metabolism, but the specific numeric values are not present in the provided text and the study is mechanistic/enzymological rather than a quantitative toxicokinetic parameterization (clearance/half-life) of the substance's disposition. |
| PGx | Hein_1993 | not_relevant | 3 | 5 | The study reports in vitro enzyme kinetic differences (Km/Vmax/affinity) between NAT1/NAT2 isoforms for 4-aminobiphenyl, but does not report in vivo pharmacokinetic or pharmacodynamic parameters (like AUC, Cmax, or tumor response) linked to the NAT2 genotype. |
| popPK | Hein_2006 | irrelevant | 0 | 0 | The paper reports enzyme activity levels (NAT1/NAT2 catalysis) for 4-aminobiphenyl metabolism, not toxicokinetic parameters such as half-life, clearance, partition coefficients, or rate constants for disposition. |
| PGx | Hein_2017 | not_relevant | 0 | 0 | The paper describes N-acetyltransferase 2 allozymes but does not mention 4-aminobiphenyl or specific pharmacokinetic parameters for it. |
| PGx | Hein_2017_2 | not_relevant | 3 | 6 | The study reports a pharmacogenomic association with hepatic metabolic enzyme activity (in vitro) rather than a pharmacokinetic or pharmacodynamic parameter in vivo for 4-aminobiphenyl. |
| PGx | Hein_2018 | not_relevant | 0 | 0 | The paper investigates the metabolism of 4,4'-methylene bis (2-chloroaniline) (MOCA), not 4-aminobiphenyl. |
| PGx | Hong_2023 | not_relevant | 2 | 0 | The paper discusses NAT2 variants' association with cardiometabolic disorders and lipid levels, mentioning 4-aminobiphenyl only as a general substrate context; it does not report specific PK or PD changes for 4-aminobiphenyl. |
| PGx | Hölzl-Armstrong_2020 | not_relevant | 0 | 0 | The study examines the in vitro mutagenicity of 4-aminobiphenyl and CYP gene expression, but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Kadlubar_1991 | relevant | 10 | 3 | The paper reports a multicompartmental pharmacokinetic model and kinetic parameters (such as apparent volumes of distribution and reabsorption rates) for 4-aminobiphenyl in beagle dogs, but specific numeric parameter values are not visible in the provided text. |
| PGx | Kimura_1999 | not_relevant | 4 | 3 | The paper investigates the role of CYP1A2 in the metabolic activation and carcinogenicity of 4-aminobiphenyl, but does not report quantitative pharmacokinetic or pharmacodynamic parameters (e.g., AUC, clearance, specific PD metrics) for the compound in a pharmacogenomic context; it focuses on tumor incidence and foci type. |
| PGx | Kozhekbaeva_2007 | not_relevant | 2 | 1 | The paper describes a method for detecting NAT2 genotypes and mentions the enzyme's role in metabolizing 4-aminobiphenyl, but it does not report any experimental data on how these variants specifically affect the pharmacokinetic or pharmacodynamic parameters of 4-aminobiphenyl. |
| PGx | Landi_1999 | not_relevant | 3 | 5 | The text discusses CYP1A2 polymorphisms and their general effect on metabolites (like caffeine) and biomarkers (4-aminobiphenyl-hemoglobin adducts) but does not report a specific pharmacokinetic parameter of 4-aminobiphenyl itself, and it is a review of CYP1A2 properties rather than a primary study of 4-aminobiphenyl PK. |
| popPK | Mazumder_2019 | irrelevant | 0 | 0 | The paper describes a new analytical method for detecting 4-aminobiphenyl in urine but does not report any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| PGx | McManus_1989 | not_relevant | 5 | 2 | The paper discusses general mechanisms of metabolism and polymorphisms for aromatic amines like 4-aminobiphenyl but does not report specific quantitative PK/PD data or fitted effect sizes for the compound. |
| PGx | McQueen_2003 | not_relevant | 1 | 0 | The paper examines the age-dependent (ontogeny) expression of NAT1/2 enzymes and their impact on 4-aminobiphenyl genotoxicity, but it does not report a pharmacogenomic effect (genetic variant/genotype/phenotype) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Nakajima_2006 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PGx | Orzechowski_1994 | not_relevant | 0 | 0 | The paper studies environmental enzyme induction (3-methylcholanthrene) rather than a specific gene variant/genotype (pharmacogenomics). |
| popPK | Perera_1987 | irrelevant | 0 | 0 | The paper reports biomarker levels (adducts) in human subjects to correlate with exposure but does not provide quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for 4-aminobiphenyl. |
| popPK | Preston_2026 | irrelevant | 0 | 0 | The paper is an exposomics study measuring static tissue concentrations of 4-aminobiphenyl in thyroid tumors and non-cancer tissues, reporting no kinetic parameters such as half-life, clearance, or rate constants. |
| popPK | Richter_2000 | irrelevant | 1 | 0 | The paper reports steady-state haemoglobin adduct levels (body burden/concentration) in rats but does not provide any quantitative toxicokinetic rate parameters, half-lives, clearance, or partition coefficients. |
| popPK | Riffelmann_1995 | irrelevant | 0 | 0 | The paper focuses on aniline and 4-chloroaniline, and the term "4-aminodiphenyl" in the evidence refers to a different chemical structure (diphenyl) or is a typo for a metabolite, but no kinetic parameters for 4-aminobiphenyl are reported. |
| popPK | Roberts_1991 | irrelevant | 0 | 0 | The paper describes the development of an immunoassay for a 4-aminobiphenyl DNA adduct (biomarker method validation) but does not report quantitative toxicokinetic parameters such as rate constants, half-lives, or partition coefficients. |
| popPK | Roemer_2012 | irrelevant | 0 | 0 | The paper is a review of cigarette ingredients where 4-aminobiphenyl appears only as a smoke constituent whose yield changes with sugar content, reporting no kinetic parameters for the substance itself. |
| popPK | Sabbioni_1995 | irrelevant | 1 | 0 | The paper describes an analytical method (GC-MS) for detecting hemoglobin adducts and uses deuterated 4-aminobiphenyl as a recovery standard, but does not report quantitative toxicokinetic parameters (e.g., half-life, clearance) for the substance itself. |
| popPK | Schettgen_2011 | irrelevant | 0 | 0 | The paper reports that 4-aminobiphenyl was not detectable in urine, providing no quantitative kinetic parameters for the subject substance. |
| popPK | Schäffler_1993 | irrelevant | 0 | 0 | The paper reports hemoglobin adduct levels (exposure biomarkers) in human blood but does not provide any toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for 4-aminobiphenyl. |
| popPK | Seyler_2011 | irrelevant | 0 | 0 | The paper is an analytical method validation and exposure biomonitoring study reporting urinary concentrations (biomarkers of exposure) rather than quantitative toxicokinetic parameters such as clearance, half-life, or partition coefficients. |
| popPK | Srám_2000 | irrelevant | 0 | 0 | The paper is a review of molecular epidemiology studies and mentions 4-aminobiphenyl only as a general example of a tobacco smoke component, reporting no quantitative toxicokinetic parameters. |
| popPK | Sugamori_2006 | irrelevant | 0 | 0 | The abstract reports a lack of difference in area under the curve (AUC) and qualitative observations of N-acetylation, but provides no specific numeric quantitative kinetic parameters (e.g., clearance values, rate constants, half-life) for 4-aminobiphenyl. |
| popPK | Sugamori_2007 | relevant | 4 | 0 | The paper reports in vivo clearance and in vitro metabolism of 4-aminobiphenyl in mice, but states only that Nat3 knockout did not change these values (qualitative comparison) without providing specific numeric kinetic parameters. |
| PGx | Sugamori_2007 | not_relevant | 1 | 0 | The study reports no significant difference in the pharmacokinetic clearance or metabolism of 4-aminobiphenyl between wild-type and Nat3 knockout mice. |
| popPK | Sugamori_2011 | irrelevant | 3 | 0 | The paper qualitatively describes 4-aminobiphenyl metabolism in transgenic mice but provides no specific quantitative kinetic parameters (such as half-life, clearance, or rate constants) for 4-aminobiphenyl in the evidence provided. |
| PGx | Sugimura_1991 | not_relevant | 0 | 0 | The paper discusses 4-aminobiphenyl as a carcinogen and its adducts as biomarkers of exposure, but does not report pharmacogenomic effects on its PK or PD parameters. |
| popPK | Talaska_1990 | irrelevant | 0 | 0 | The paper reports DNA adduct levels (exposure/biomarkers) and qualitative dose-response data, but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants). |
| popPK | Talaska_2006 | irrelevant | 0 | 0 | The paper reports DNA adduct levels (biomarkers of exposure/damage) and metabolic impacts, but does not provide quantitative toxicokinetic parameters such as half-life, rate constants, partition coefficients, or clearance. |
| PGx | Talaska_2006 | not_relevant | 5 | 10 | The paper reports pharmacodynamic effects (DNA adduct levels) rather than pharmacokinetic parameters, and the target compound 4-aminobiphenyl showed no significant difference in adduct levels between Cyp1a2 knockout and wild-type mice. |
| PGx | Tsuneoka_2003 | not_relevant | 3 | 8 | The paper reports on the effect of a genotype on DNA adduct formation (toxicity/metabolism), but does not report standard pharmacokinetic parameters (e.g., Cmax, AUC) or pharmacodynamic parameters (e.g., target inhibition) required for the specific definition of the query. |
| popPK | Van_2002 | irrelevant | 0 | 0 | The paper reports on the effect of NAC on 4-aminobiphenyl hemoglobin adducts (a biomarker of exposure/metabolism) in smokers, but it does not provide quantitative toxicokinetic parameters (such as half-life, clearance, or rate constants) for 4-aminobiphenyl itself. |
| PGx | Vang_1993 | not_relevant | 3 | 2 | The paper describes the effect of CYP expression on the inhibition of intercellular communication by 4-aminobiphenyl, but does not report changes in standard pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, EC50) linked to specific human genetic variants. |
| PGx | Vaziri_2001 | not_relevant | 5 | 5 | The study reports differences in enzyme expression/genotypes between cancer patients and controls but does not report specific pharmacokinetic (PK) or pharmacodynamic (PD) parameter changes for 4-aminobiphenyl. |
| popPK | Vineis_1992 | irrelevant | 2 | 1 | The paper is a molecular epidemiological study reporting hemoglobin adduct concentrations and dose-response associations, but it does not provide quantitative toxicokinetic parameters (e.g., half-life, clearance, rate constants) for 4-aminobiphenyl. |
| popPK | Vineis_1994 | irrelevant | 2 | 0 | The paper measures steady-state DNA and Hb adduct levels to infer relative metabolic clearance differences between phenotypes, but does not provide specific quantitative toxicokinetic rate constants, half-lives, or volumes of distribution for 4-aminobiphenyl. |
| PGx | Wagner_1996 | not_relevant | 0 | 0 | The paper studies the mutagenicity of 2,3-diaminophenazine and 2-amino-3-hydroxyphenazine in Salmonella strains, not the pharmacokinetics or pharmacodynamics of 4-aminobiphenyl in humans. |
| PGx | Wang_2015 | not_relevant | 2 | 0 | The paper discusses the metabolic activation (N-hydroxylation) of 4-aminobiphenyl by CYP2E1 and its role in oxidative stress and tumorigenesis, rather than the pharmacokinetics or pharmacodynamics of 4-aminobiphenyl as a therapeutic drug. |
| popPK | Wang_2015_2 | irrelevant | 8 | 0 | The paper describes in vivo clearance and Vmax for 4-aminobiphenyl in mice, but the provided evidence contains no numeric values for these parameters. |
| PGx | Wang_2015_2 | not_relevant | 8 | 7 | The study examines pharmacogenomic effects (gene knockout) on the clearance of a xenobiotic/carcinogen (4-aminobiphenyl), not a therapeutic drug. |
| PGx | Weston_1991 | not_relevant | 0 | 0 | The paper investigates the association of 4-aminobiphenyl exposure with lung cancer and explicitly states there was no association with CYP2D6 phenotypes. |
| popPK | Xiao_2016 | irrelevant | 0 | 0 | The paper reports the identification and concentration of a DNA adduct in human tissue (biomonitoring/exposure study) but does not provide any quantitative toxicokinetic parameters (such as half-life, clearance, rate constants, or partition coefficients) for 4-aminobiphenyl. |
| PGx | Xiao_2026 | not_relevant | 2 | 5 | The study reports genetic susceptibility and cancer risk, not the pharmacokinetics (ADME) or specific pharmacodynamic parameters of 4-aminobiphenyl itself. |
| popPK | Yun_2017 | irrelevant | 0 | 0 | The paper describes a method for DNA extraction to measure static DNA adduct levels, reporting no kinetic parameters (half-life, clearance, rate constants) for 4-aminobiphenyl. |
| popPK | Yun_2018 | irrelevant | 0 | 0 | The paper reports on the stability of DNA adducts and cell viability, which are biomonitoring and genotoxicity metrics, not toxicokinetic parameters (half-life, clearance, partition coefficients, etc.). |
| PGx | Zhang_2000 | not_relevant | 1 | 0 | The paper investigates the association between CYP1A1/2 protein expression and DNA adduct levels, not a specific gene variant/genotype changing a PK/PD parameter of 4-aminobiphenyl. |
| PGx | Zhu_2002 | not_relevant | 4 | 7 | The paper reports in vitro enzymatic activity reductions for 4-aminobiphenyl due to the NAT2*19 SNP, which is a proxy for metabolic PK but not a direct clinical PK parameter measurement (e.g., plasma concentration, clearance) in humans. |
| popPK | Zwirner-Baier_1998 | irrelevant | 1 | 0 | The paper focuses on metabolic activation pathways (acetylation/deacetylation) and haemoglobin adduct levels as biomarkers of exposure rather than reporting specific quantitative toxicokinetic parameters like half-life, clearance, or distribution volumes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B4_aminobiphenyl%5D&body=Drug%3A%204_aminobiphenyl%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_4_aminobiphenyl/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 03:15 UTC</sub>
