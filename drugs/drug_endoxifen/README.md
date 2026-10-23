<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Endoxifen&quot;}]"></div>

# Endoxifen

- **generic name:** Endoxifen
- **ATC codes:** none (no WHO ATC code)
- **DrugBank:** [DB31662](https://go.drugbank.com/drugs/DB31662) · **PubChem:** none
- **groups:** investigational

## About

<p><b>Description (Wikipedia).</b> Endoxifen, also known as 4-hydroxy-N-desmethyltamoxifen, is a nonsteroidal selective estrogen receptor modulator (SERM) and a protein kinase C (PKC) inhibitor of the triphenylethylene group. It is under development for the treatment of estrogen receptor-positive breast cancer and for the treatment of mania in bipolar disorder. It is taken by mouth.</p>

<p><small>Source: <a href="https://en.wikipedia.org/wiki/Endoxifen?oldid=1379451828">Wikipedia</a> · <a href="https://www.wikidata.org/wiki/Q27149598">Wikidata</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| endoxifen (Z-endoxifen) | parent | 373.496 | C25H27NO2 | PubChem | [10090750](https://pubchem.ncbi.nlm.nih.gov/compound/10090750) | Dilli_2022, Koubek_2022 |
| N-desmethyl-4-hydroxytamoxifen | parent | — (mass units only) | — | — | — | — |
| 4-hydroxytamoxifen | metabolite | — (mass units only) | — | — | — | — |
| 4-hydroxytamoxifen O-glucuronide | metabolite | — (mass units only) | — | — | — | — |
| endoxifen 3-hydroxy | metabolite | — (mass units only) | — | — | — | — |
| N-desmethyltamoxifen | metabolite | — (mass units only) | — | — | — | — |
| tamoxifen | metabolite | 371.5 | C26H29NO | PubChem | [2733526](https://pubchem.ncbi.nlm.nih.gov/compound/2733526) | Dilli_2022 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Dilli_2022_reference](drugs/drug_endoxifen/Endoxifen_Dilli2022_reference.md) | — | parent + metabolite (no model) | 0 | Dilli Batcha JS et al., Factors Influencing Pharmacokinetics of…, Biology (2022) | [10.3390/biology12010051](https://doi.org/10.3390/biology12010051) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Koubek_2022_reference](drugs/drug_endoxifen/Endoxifen_Koubek2022_reference.md) | — | 2-compartment (no model) | 3 | Koubek EJ et al., Population Pharmacokinetics of Z-Endoxi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2053](https://doi.org/10.1002/jcph.2053) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Puszkiel_2021_reference](drugs/drug_endoxifen/Endoxifen_Puszkiel2021_reference.md) | — | general linear (no model) | 0 | Puszkiel A et al., Model-Based Quantification of Impact of…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2077](https://doi.org/10.1002/cpt.2077) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Sanchez-Spitman_2020_discontinuation](drugs/drug_endoxifen/pd_Sanchez_Spitman_2020_discontinuation.md) | tamoxifen discontinuation ← endoxifen · direct linear effect | — | Sanchez-Spitman AB et al., Exposure-response analysis of endoxifen…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04089-x](https://doi.org/10.1007/s00280-020-04089-x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Sanchez-Spitman_2020_relapse](drugs/drug_endoxifen/pd_Sanchez_Spitman_2020_relapse.md) | relapse ← endoxifen · direct linear effect | — | Sanchez-Spitman AB et al., Exposure-response analysis of endoxifen…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04089-x](https://doi.org/10.1007/s00280-020-04089-x) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Sanchez-Spitman_2020_RFSt](drugs/drug_endoxifen/pd_Sanchez_Spitman_2020_RFSt.md) | relapse-free survival ← endoxifen · time-to-event model | — | Sanchez-Spitman AB et al., Exposure-response analysis of endoxifen…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04089-x](https://doi.org/10.1007/s00280-020-04089-x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q88` · AUC | formation | [Hussaarts_2019](drugs/drug_endoxifen/pgx_Hussaarts_2019_CYP2D6_Q88.md) | Hussaarts KGAM et al., Impact of Curcumin (with or without Pip…, Cancers (2019) | [10.3390/cancers11030403](https://doi.org/10.3390/cancers11030403) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q305` · kfm | formation | [Irarrázaval_2016](drugs/drug_endoxifen/pgx_Irarr_zaval_2016_CYP2D6_Q305.md) | Irarrázaval O ME et al., [Antidepressants agents in breast cance…, Revista medica de Chile (2016) | [10.4067/S0034-98872016001000013](https://doi.org/10.4067/S0034-98872016001000013) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=endoxifen).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` formation | PGx paper |
| metabolism | liver | `CYP2D6` formation | PGx paper |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-22 09:04 | 5:54 | 0/3/0 | 1/0/0 | 0/0/2 | 291,523/15,437 | einfracz / qwen3.8-27b | 30 | 3/21 | 30/0 | 0 |

## Coverage

- **PubMed hits:** 528 matched, 94 returned
- **screened:** 14  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_18 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Koubek_2022.pdf` | Koubek EJ et al., Population Pharmacokinetics of Z-Endoxi…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2053](https://doi.org/10.1002/jcph.2053) | [35358345](https://pubmed.ncbi.nlm.nih.gov/35358345) | The abstract provides specific numeric values for clearance, central volume, and peripheral volume for the subject drug Z-endoxifen. |
| `Puszkiel_2021.pdf` | Puszkiel A et al., Model-Based Quantification of Impact of…, Clinical pharmacology and t… (2021) | popPK | 10 | [10.1002/cpt.2077](https://doi.org/10.1002/cpt.2077) | [33047329](https://pubmed.ncbi.nlm.nih.gov/33047329) | The paper reports a population pharmacokinetic model for endoxifen, and specific quantitative parameters (formation clearance reduction percentages and RSEs) are present in the abstract text. |
| `ter_2014.pdf` | ter Heine R et al., Population pharmacokinetic modelling to…, British journal of clinical… (2014) | popPK | 9 | [10.1111/bcp.12388](https://doi.org/10.1111/bcp.12388) | [24697814](https://pubmed.ncbi.nlm.nih.gov/24697814) | The paper is a population PK study reporting that CYP phenotypes explain variability in endoxifen formation, but specific numeric parameter values (CL, V, Q) are not explicitly listed in the provided evidence text. |
| `Mueller-Schoell_2020.pdf` | Mueller-Schoell A et al., Obesity Alters Endoxifen Plasma Levels…, Clinical pharmacology and t… (2020) | popPK | 8 | [10.1002/cpt.1960](https://doi.org/10.1002/cpt.1960) | [32578187](https://pubmed.ncbi.nlm.nih.gov/32578187) | The paper describes a population PK model for endoxifen, but specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| `Chae_2015.pdf` | Chae YJ et al., Endoxifen, the active metabolite of tam…, European journal of pharmac… (2015) | pd | 4 | [10.1016/j.ejphar.2015.01.048](https://doi.org/10.1016/j.ejphar.2015.01.048) | [25680947](https://www.ncbi.nlm.nih.gov/pubmed/25680947) | metadata signals extractable PD data (IC50) |
| `Yong_2020.pdf` | Yong YF et al., Liquid chromatography-tandem mass spect…, Journal of chromatography.… (2020) | pd | 4 | [10.1016/j.jchromb.2020.122148](https://doi.org/10.1016/j.jchromb.2020.122148) | [32416571](https://www.ncbi.nlm.nih.gov/pubmed/32416571) | metadata signals extractable PD data (IC50) |
| `Agema_2023.pdf` | Agema BC et al., Toward model-informed precision dosing…, Biomedicine & pharmacothera… (2023) | pgx | 8 | [10.1016/j.biopha.2023.114369](https://doi.org/10.1016/j.biopha.2023.114369) | [36753957](https://www.ncbi.nlm.nih.gov/pubmed/36753957) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Binkhorst_2015.pdf` | Binkhorst L et al., Individualization of tamoxifen therapy:…, Cancer treatment reviews (2015) | pgx | 8 | [10.1016/j.ctrv.2015.01.002](https://doi.org/10.1016/j.ctrv.2015.01.002) | [25618289](https://www.ncbi.nlm.nih.gov/pubmed/25618289) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Brauch_2009.pdf` | Brauch H et al., Pharmacogenomics of tamoxifen therapy, Clinical chemistry (2009) | pgx | 8 | [10.1373/clinchem.2008.121756](https://doi.org/10.1373/clinchem.2008.121756) | [19574470](https://www.ncbi.nlm.nih.gov/pubmed/19574470) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Del_2012.pdf` | Del Re M et al., Pharmacogenetics of anti-estrogen treat…, Cancer treatment reviews (2012) | pgx | 8 | [10.1016/j.ctrv.2011.08.003](https://doi.org/10.1016/j.ctrv.2011.08.003) | [21917382](https://www.ncbi.nlm.nih.gov/pubmed/21917382) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Johansson_2016.pdf` | Johansson H et al., A pooled analysis of CYP2D6 genotype in…, Breast cancer research and… (2016) | pgx | 8 | [10.1007/s10549-016-3932-7](https://doi.org/10.1007/s10549-016-3932-7) | [27484880](https://www.ncbi.nlm.nih.gov/pubmed/27484880) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kiyotani_2012.pdf` | Kiyotani K et al., Pharmacogenomics of tamoxifen: roles of…, Drug metabolism and pharmac… (2012) | pgx | 8 | [10.2133/dmpk.dmpk-11-rv-084](https://doi.org/10.2133/dmpk.dmpk-11-rv-084) | [22041137](https://www.ncbi.nlm.nih.gov/pubmed/22041137) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Sanchez-Spitman_2019.pdf` | Sanchez-Spitman AB et al., Clinical pharmacokinetics and pharmacog…, Expert review of clinical p… (2019) | pgx | 8 | [10.1080/17512433.2019.1610390](https://doi.org/10.1080/17512433.2019.1610390) | [31008668](https://www.ncbi.nlm.nih.gov/pubmed/31008668) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Slanař_2021.pdf` | Slanař O et al., Recent advances in the personalized tre…, Expert opinion on drug meta… (2021) | pgx | 8 | [10.1080/17425255.2021.1865310](https://doi.org/10.1080/17425255.2021.1865310) | [33320718](https://www.ncbi.nlm.nih.gov/pubmed/33320718) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Xiong_2016.pdf` | Xiong W et al., [Advances in the research of pharmacoge…, Yao xue xue bao = Acta phar… (2016) | pgx | 8 |  | [29924509](https://www.ncbi.nlm.nih.gov/pubmed/29924509) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ximenez_2020.pdf` | Ximenez JP et al., Post-marketing assessment of generic ta…, Basic & clinical pharmacolo… (2020) | pgx | 7 | [10.1111/bcpt.13368](https://doi.org/10.1111/bcpt.13368) | [31758654](https://www.ncbi.nlm.nih.gov/pubmed/31758654) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Beverage_2007.pdf` | Beverage JN et al., CYP2D6 polymorphisms and the impact on…, Journal of pharmaceutical s… (2007) | pgx | 5 | [10.1002/jps.20892](https://doi.org/10.1002/jps.20892) | [17518364](https://www.ncbi.nlm.nih.gov/pubmed/17518364) | metadata signals extractable PGX data (CYP2D6) |
| `Higgins_2011.pdf` | Higgins MJ et al., Pharmacogenetics of endocrine therapy f…, Annual review of medicine (2011) | pgx | 5 | [10.1146/annurev-med-070909-182545](https://doi.org/10.1146/annurev-med-070909-182545) | [21226615](https://www.ncbi.nlm.nih.gov/pubmed/21226615) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-22 09:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agema_2023 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PGx | Beverage_2007 | not_relevant | 7 | 3 | The text provides a qualitative overview of CYP2D6 impact on endoxifen levels but lacks specific quantitative effect sizes. |
| PGx | Binkhorst_2015 | not_relevant | 6 | 0 | The text is a review discussing the conceptual impact of CYP2D6 and other gene variants on endoxifen levels, but it provides no specific data, tables, or fitted effect sizes within the provided text. |
| PGx | Binkhorst_2016 | not_relevant | 2 | 10 | The study investigates the impact of drug-drug interactions (SSRI inhibition of CYP2D6) on endoxifen pharmacokinetics, rather than the effect of a specific gene variant or genotype. |
| popPK | Centanni_2024 | irrelevant | 0 | 0 | The paper is a simulation study comparing dosing strategies for multiple drugs; endoxifen is mentioned only as a metabolite of tamoxifen in the context of literature search results, but no quantitative PK parameters for endoxifen itself are reported in the evidence. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | The paper is a general review on real-world data and pharmacometrics that only briefly mentions endoxifen in the context of tamoxifen dosing as an example, without reporting quantitative PK parameters for endoxifen itself. |
| PGx | Del_2012 | not_relevant | 6 | 1 | The text describes a qualitative association between CYP2D6 variants and low endoxifen plasma levels but provides no specific quantitative effect sizes, fitted parameters, or detailed statistical data. |
| PGx | Dürrbeck_2016 | not_relevant | 1 | 2 | The paper is a review of terbinafine drug interactions and only mentions endoxifen qualitatively as a metabolite affected by CYP2D6 inhibitors, without reporting pharmacogenomic PK/PD effect sizes. |
| popPK | Frederiksen_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tedatioxetine and its metabolite Lu AA37208, not for the target drug endoxifen. |
| PGx | Fujita_2006 | not_relevant | 2 | 0 | The paper is a general review of CYP enzymes and anticancer drugs; while it mentions endoxifen formation in CYP2D6 polymorphisms, it does not report specific quantitative PK/PD data or effect sizes for endoxifen from a study. |
| PGx | Hansten_2018 | not_relevant | 1 | 0 | The paper is a review on drug-drug interactions (CYP2D6 inhibitors and enzyme inducers) and does not report primary data on pharmacogenomic effects of gene variants on endoxifen PK/PD. |
| PGx | Irarrázaval_2016 | not_relevant | 2 | 1 | The paper is a qualitative review of drug-drug interactions (antidepressants vs. tamoxifen) and general guidelines; it does not report specific pharmacogenomic effects (gene variants) on quantitative PK/PD parameters of endoxifen. |
| PGx | Jayaraman_2021 | not_relevant | 0 | 0 | The paper is a review of the development and pharmacology of endoxifen but does not report specific quantitative studies on how gene variants affect its PK/PD parameters. |
| popPK | Luijendijk_2025 | irrelevant | 1 | 0 | The study assesses the relationship between drug exposure and cognitive function, but the provided evidence contains no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for endoxifen. |
| PGx | Maximov_2014 | not_relevant | 1 | 5 | The study evaluates the biological efficacy of endoxifen in vitro but does not report a pharmacogenomic effect where a gene variant changes a PK/PD parameter of endoxifen itself. |
| PGx | Maximov_2014_2 | not_relevant | 4 | 0 | The paper simulates pharmacodynamic efficacy using *exogenous* concentrations corresponding to genotypes rather than measuring endogenous PK parameters or providing fitted pharmacokinetic effect sizes. |
| popPK | Mc_2024 | irrelevant | 1 | 0 | The study is a trial simulation for therapeutic drug monitoring (TDM) based on exposure-response analysis (survival outcomes), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Mc_2024 | not_relevant | 2 | 0 | The paper focuses on exposure-response relationships and therapeutic drug monitoring (TDM) feasibility; it does not report specific gene variants or genotypes affecting PK/PD parameters. |
| popPK | Montenegro_2011 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring vasorelaxation in aortic rings, not a pharmacokinetic study reporting disposition parameters for endoxifen. |
| popPK | Mueller-Schoell_2020 | relevant | 8 | 2 | The paper describes a population PK model for endoxifen, but specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| popPK | Mueller-Schoell_2021 | relevant | 8 | 2 | The paper reports a population PK model for endoxifen and uses its parameters for simulations, but the specific numeric parameter estimates (CL, V, Q, ka) are referred to as being in reference [39] or supplementary material not fully provided here, though some derived metrics like IIV (CV%) are present. |
| popPK | Mueller-Schoell_2021_2 | relevant | 10 | 1 | This paper applies a pre-existing population PK model for endoxifen (from ref [12]) to simulate outcomes, and while the model structure is described, the specific numeric parameter estimates (CL, V, etc.) are not present in the text and are referred to in a cited reference. |
| popPK | Nakamura_2018 | irrelevant | 4 | 1 | The study models endoxifen as a metabolite of tamoxifen (not the subject drug itself) and specific PK parameter values are located in Supplementary Table S2 which is not provided. |
| popPK | Oturkar_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tamoxifen and its metabolite endoxifen in the context of breast cancer response, but does not report specific quantitative disposition parameters (such as clearance or volume of distribution) for endoxifen itself. |
| popPK | Perry_2020 | irrelevant | 0 | 0 | The paper is a general review of PBPK modeling applications across various therapeutic areas and does not contain specific pharmacokinetic data or parameters for endoxifen. |
| popPK | Remmel_2026 | irrelevant | 0 | 0 | The paper is a mechanistic and transcriptomic review of endoxifen in Duchenne Muscular Dystrophy, containing no original pharmacokinetic data or quantitative disposition parameters (CL, V, ka, etc.). |
| PGx | Ribeiro_2014 | not_relevant | 1 | 1 | The paper is a review focused on the mitochondrial mechanisms of tamoxifen-induced liver injury; it mentions CYP2D6 genetic variability only in the context of general plasma concentration variability without reporting specific pharmacogenomic effect sizes or detailed PK/PD parameter changes for endoxifen. |
| PGx | Sanchez-Spitman_2019 | not_relevant | 8 | 2 | This is a narrative review summarizing literature on CYP2D6 and endoxifen, but it does not report new, specific quantitative fitted effect sizes from a primary pharmacogenomic study. |
| PGx | Sanchez-Spitman_2019_2 | not_relevant | 3 | 5 | The study reports the association between CYP2D6 genotype and clinical outcome (relapse-free survival), but does not provide quantitative PK parameter data (e.g., AUC, Cmax) or fitted effect sizes for genotype-driven changes in endoxifen exposure. |
| popPK | Sanchez-Spitman_2020 | irrelevant | 0 | 0 | The study is an exposure-response analysis linking endoxifen serum concentrations to clinical outcomes (relapse), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Sideras_2010 | not_relevant | 3 | 0 | The text describes the qualitative relationship between CYP2D6 inhibition and lower endoxifen concentrations but provides no quantitative data, fitted effect sizes, or specific pharmacokinetic parameter values. |
| PGx | Slanař_2021 | not_relevant | 0 | 0 | The text is a narrative overview of the topic without reporting any specific quantitative pharmacokinetic or pharmacodynamic data for endoxifen. |
| popPK | Somogyi_2012 | irrelevant | 0 | 0 | no_text gate: only 18 chars of text extracted (&lt; 400) |
| popPK | Størset_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of risperidone, not endoxifen. |
| popPK | Wali_2026 | irrelevant | 0 | 0 | The paper is a review of gut microbiome mechanisms in breast cancer and does not report any pharmacokinetic parameters for endoxifen. |
| PGx | Wu_2011 | not_relevant | 2 | 1 | The study investigates the influence of the ERβ protein (a cellular phenotype/target expression) on endoxifen potency, not the effect of a specific inherited gene variant/genotype on a PK or PD parameter. |
| PGx | Ximenez_2020 | not_relevant | 1 | 1 | The paper is a post-marketing assessment of generic tamoxifen and does not report pharmacogenomic effects on endoxifen PK/PD parameters. |
| PGx | Ximenez_2020_2 | not_relevant | 3 | 5 | The paper reports a high heritability estimate (rGC=0.87) for the conversion of tamoxifen to endoxifen, indicating genetic variability, but it does not characterize specific genotypes/variants or report how specific genetic phenotypes change PK parameters. |
| PGx | Xiong_2016 | not_relevant | 5 | 2 | The text is a review abstract that describes the general role of genetic polymorphisms in tamoxifen metabolism but does not report specific quantitative pharmacokinetic or pharmacodynamic data. |
| popPK | Yuan_2017 | irrelevant | 1 | 1 | The study uses endoxifen as a metabolite in a tumor growth PD model rather than a PK study of endoxifen, and specific disposition parameters (CL, V, Q, t1/2) are not reported. |
| PGx | Zhang_2015 | not_relevant | 2 | 5 | The paper discusses a boronic prodrug for endoxifen and mentions CYP2D6 in the background, but reports no pharmacogenomic data on how genotypes alter endoxifen PK/PD. |
| popPK | ter_2014 | relevant | 9 | 3 | The paper is a population PK study reporting that CYP phenotypes explain variability in endoxifen formation, but specific numeric parameter values (CL, V, Q) are not explicitly listed in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bendoxifen%5D&body=Drug%3A%20endoxifen%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_endoxifen/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-22 09:00 UTC</sub>
