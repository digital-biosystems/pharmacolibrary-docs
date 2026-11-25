<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;selegiline&quot;}]"></div>

# selegiline

- **generic name:** selegiline
- **ATC codes:** `N04BD01`
- **DrugBank:** [DB01037](https://go.drugbank.com/drugs/DB01037) · **PubChem:** [CID 26757](https://pubchem.ncbi.nlm.nih.gov/compound/26757)
- **molar mass:** 187.286 g/mol (C13H17N) — DrugBank
- **groups:** approved, vet_approved

## About

Selegiline is a monoamine oxidase B inhibitor used to treat Parkinson's disease and major depressive disorder. It is taken by mouth in tablet or capsule form for Parkinson's disease, or applied as a transdermal patch for depression. The drug is widely used in clinical practice.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q47495783](https://www.wikidata.org/wiki/Q47495783), [Wikipedia](https://en.wikipedia.org/wiki/Selegiline?oldid=1384702943) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Mahmood_1998_platelet_MAO_B_activity](drugs/drug_selegiline/pd_Mahmood_1998_platelet_MAO_B_activity.md) | platelet MAO-B activity ← selegiline · direct sigmoid Emax (Hill) effect | — | Mahmood I, Is 10 milligrams selegiline essential a…, Therapeutic drug monitoring (1998) | [10.1097/00007691-199812000-00024](https://doi.org/10.1097/00007691-199812000-00024) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2B6** | `Q3` · CLint | formation | [Puttrevu_2020](drugs/drug_selegiline/pgx_Puttrevu_2020_CYP2B6_Q3.md) | Puttrevu SK et al., Physiologically Based Pharmacokinetic M…, Pharmaceutics (2020) | [10.3390/pharmaceutics12100942](https://doi.org/10.3390/pharmaceutics12100942) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q3` · CLint | metabolism | [Puttrevu_2020](drugs/drug_selegiline/pgx_Puttrevu_2020_CYP2D6_Q3.md) | Puttrevu SK et al., Physiologically Based Pharmacokinetic M…, Pharmaceutics (2020) | [10.3390/pharmaceutics12100942](https://doi.org/10.3390/pharmaceutics12100942) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A4** | `Q3` · CLint | formation | [Puttrevu_2020](drugs/drug_selegiline/pgx_Puttrevu_2020_CYP3A4_Q3.md) | Puttrevu SK et al., Physiologically Based Pharmacokinetic M…, Pharmaceutics (2020) | [10.3390/pharmaceutics12100942](https://doi.org/10.3390/pharmaceutics12100942) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:44 | 0:03 | 0/0/0 | 0/1/0 | 0/0/3 | 3,975/184 | einfracz / qwen3.8-27b | 6 | 6/0 | 5/1 | 0 |

## Coverage

- **PubMed hits:** 70 matched, 50 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_11 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Finberg_1985.pdf` | Finberg JP et al., Reduced peripheral presynaptic adrenoce…, British journal of pharmaco… (1985) | pd | 4 | [10.1111/j.1476-5381.1985.tb16140.x](https://doi.org/10.1111/j.1476-5381.1985.tb16140.x) | [2985158](https://www.ncbi.nlm.nih.gov/pubmed/2985158) | metadata signals extractable PD data (EC50) |
| `Laine_2001.pdf` | Laine K et al., CYP2C19 polymorphism is not important f…, European journal of clinica… (2001) | pgx | 8 | [10.1007/s002280100289](https://doi.org/10.1007/s002280100289) | [11417445](https://www.ncbi.nlm.nih.gov/pubmed/11417445) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Scheinin_1998.pdf` | Scheinin H et al., CYP2D6 polymorphism is not crucial for…, Clinical pharmacology and t… (1998) | pgx | 8 | [10.1016/S0009-9236(98)90071-6](https://doi.org/10.1016/S0009-9236(98)90071-6) | [9797797](https://www.ncbi.nlm.nih.gov/pubmed/9797797) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Wang_2008.pdf` | Wang H et al., CYP2B6: new insights into a historicall…, Current drug metabolism (2008) | pgx | 8 | [10.2174/138920008785821710](https://doi.org/10.2174/138920008785821710) | [18781911](https://www.ncbi.nlm.nih.gov/pubmed/18781911) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Chang_2009.pdf` | Chang SY et al., Further assessment of 17alpha-ethinyl e…, Drug metabolism and disposi… (2009) | pgx | 7 | [10.1124/dmd.109.026997](https://doi.org/10.1124/dmd.109.026997) | [19454483](https://www.ncbi.nlm.nih.gov/pubmed/19454483) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Guay_2006.pdf` | Guay DR, Rasagiline (TVP-1012): a new selective…, The American journal of ger… (2006) | pgx | 7 | [10.1016/j.amjopharm.2006.12.001](https://doi.org/10.1016/j.amjopharm.2006.12.001) | [17296539](https://www.ncbi.nlm.nih.gov/pubmed/17296539) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Kivistö_2001.pdf` | Kivistö KT et al., Selegiline pharmacokinetics are unaffec…, European journal of clinica… (2001) | pgx | 7 | [10.1007/s002280100278](https://doi.org/10.1007/s002280100278) | [11372588](https://www.ncbi.nlm.nih.gov/pubmed/11372588) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Mitchell_1997.pdf` | Mitchell PB, Drug interactions of clinical significa…, Drug safety (1997) | pgx | 7 | [10.2165/00002018-199717060-00005](https://doi.org/10.2165/00002018-199717060-00005) | [9429838](https://www.ncbi.nlm.nih.gov/pubmed/9429838) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Nomoto_2005.pdf` | Nomoto M et al., [Inter- and intraindividual pharmacokin…, Rinsho shinkeigaku = Clinic… (2005) | pgx | 7 |  | [16447756](https://www.ncbi.nlm.nih.gov/pubmed/16447756) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Walsky_2006.pdf` | Walsky RL et al., Evaluation of 227 drugs for in vitro in…, Journal of clinical pharmac… (2006) | pgx | 7 | [10.1177/0091270006293753](https://doi.org/10.1177/0091270006293753) | [17101742](https://www.ncbi.nlm.nih.gov/pubmed/17101742) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Watanabe_2010.pdf` | Watanabe T et al., Functional characterization of 26 CYP2B…, Pharmacogenetics and genomi… (2010) | pgx | 5 | [10.1097/FPC.0b013e32833bba0e](https://doi.org/10.1097/FPC.0b013e32833bba0e) | [20517174](https://www.ncbi.nlm.nih.gov/pubmed/20517174) | metadata signals extractable PGX data (CYP2B6) |

<sub>queue written 2026-11-24 05:44 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agúndez_2013 | irrelevant | 0 | 0 | This is a review on pharmacogenetics and does not report quantitative pharmacokinetic parameters for selegiline. |
| PGx | Agúndez_2013 | not_relevant | 4 | 2 | The paper is a review that only mentions the CYP2B6/selegiline gene-drug pairing in a list without reporting specific quantitative PK/PD parameters or fitted effect sizes. |
| popPK | Benetton_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P450 phenotyping and metabolic pathways, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume of distribution. |
| PGx | Benetton_2007 | not_relevant | 0 | 0 | The paper identifies the CYP enzymes responsible for selegiline metabolism but does not report specific gene variants, genotypes, or their effect on PK/PD parameters. |
| PGx | Cacabelos_2017 | not_relevant | 2 | 3 | Review table only lists gene names associated with selegiline metabolism; no variant effect on a PK/PD parameter is reported. |
| popPK | Chang_2009 | irrelevant | 0 | 0 | The study is an in vitro CYP450 inhibition study for ethinyl estradiol, where selegiline is only mentioned as a probe drug for CYP2B6 activity, not as the subject of a PK analysis. |
| PGx | Chang_2009 | not_relevant | 0 | 0 | The paper discusses ethinyl estradiol's inhibition of CYP450s and explicitly states it is difficult to rationalize drug interactions involving CYP2B6 (e.g., selegiline), reporting no pharmacogenomic effect on selegiline PK/PD. |
| PGx | De_2012 | not_relevant | 0 | 0 | Review of ADHD pharmacotherapy with no gene variant/genotype effects on selegiline or any PK/PD parameters reported. |
| popPK | Di_2009 | irrelevant | 0 | 0 | The paper is a review of the CYP2A6 enzyme and its polymorphisms, mentioning selegiline only as a mechanism-based inhibitor rather than providing any pharmacokinetic parameters for selegiline itself. |
| PGx | Di_2009 | not_relevant | 0 | 0 | The paper is a review of CYP2A6 and mentions selegiline only as a mechanism-based inhibitor, without reporting any pharmacogenomic effects on selegiline's PK/PD. |
| popPK | Dingemanse_1996 | irrelevant | 0 | 0 | The study measures pharmacokinetic parameters only for moclobemide and its metabolites; selegiline is a co-administered agent and its specific quantitative PK parameters (CL, V, etc.) are not reported. |
| PGx | Dingemanse_1996 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic and pharmacodynamic interaction between two drugs (selegiline and moclobemide), not the impact of a specific gene variant or genotype on selegiline's PK or PD parameters. |
| popPK | Erickson_2007 | irrelevant | 0 | 0 | The paper studies the in vitro metabolism of bicifadine, and selegiline is used only as a mechanistic inhibitor (probe), not as the subject of PK analysis. |
| PGx | Erickson_2007 | not_relevant | 0 | 0 | The study focuses on the metabolism of the drug bicifadine, not selegiline, and selegiline is only used as an enzyme inhibitor in vitro. |
| popPK | Finberg_1985 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PGx | Finberg_1985 | not_relevant | 0 | 0 | The study focuses on adrenoceptor sensitivity in rats following antidepressant treatment and does not investigate the pharmacokinetics or pharmacodynamics of selegiline. |
| popPK | Glezer_2003 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study measuring EC50 values in rat vas deferens, not a pharmacokinetic study reporting disposition parameters for selegiline. |
| PGx | Glezer_2003 | not_relevant | 0 | 0 | The paper reports the pharmacological effects of drug metabolites and does not report any gene variants or genotypes. |
| popPK | Guay_2006 | irrelevant | 0 | 0 | The paper is a review of rasagiline, a different drug, with selegiline mentioned only as a comparator/context. |
| PGx | Guay_2006 | not_relevant | 0 | 0 | The paper is a review of Rasagiline, not Selegiline, and does not report any pharmacogenomic effects on Selegiline PK/PD. |
| popPK | Kahma_2021 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assay measuring CYP enzyme inhibition, where selegiline is used as a probe inhibitor rather than being the subject of a pharmacokinetic disposition study. |
| PGx | Kahma_2021 | not_relevant | 0 | 0 | The paper describes an in vitro CYP inhibition method and mentions selegiline only as a tool compound (CYP2A6 inhibitor), reporting no genetic variants or pharmacogenomic effects on selegiline's PK/PD. |
| popPK | Kivistö_2001 | irrelevant | 2 | 0 | The abstract states that selegiline PK variables were unaffected but does not report specific quantitative disposition parameter values (such as CL, V, or ka), only relative changes in metabolite AUC. |
| PGx | Kivistö_2001 | not_relevant | 0 | 0 | The study examines the effect of a drug-drug interaction (CYP3A4 inhibitor), not a pharmacogenomic effect of a specific gene variant/genotype on the PK parameters of selegiline. |
| popPK | Kálmán_2003 | irrelevant | 0 | 0 | The study is a clinical trial investigating therapeutic response to selegiline in Alzheimer's patients and does not report any pharmacokinetic parameters. |
| PGx | Kálmán_2003 | not_relevant | 1 | 0 | The study explicitly reports a lack of influence of APOE genotype on selegiline treatment outcome (no pharmacogenomic effect). |
| popPK | Laine_2001 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| PGx | Laine_2001 | not_relevant | 1 | 5 | The title explicitly states that the CYP2C19 polymorphism is not important for selegiline metabolism, indicating a null result with no reported genetic effect on PK parameters. |
| popPK | Lecht_2007 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of rasagiline, mentioning selegiline only as a comparator drug without providing quantitative PK parameters for it. |
| PGx | Lecht_2007 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics and metabolism of rasagiline (a different drug) and does not report pharmacogenomic effects of selegiline. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | Paper is a computational drug repositioning study; selegiline is only a predicted anti-AD candidate, with no gene variant effect on any PK/PD parameter reported. |
| popPK | Mahmood_1998 | relevant | 8 | 0 | The paper describes the development of a pharmacokinetic-pharmacodynamic model for selegiline, but no specific quantitative PK parameter values (such as clearance, volume, or half-life) are provided in the extracted evidence. |
| PGx | Mahmood_1998 | not_relevant | 0 | 0 | The study investigates dose-response relationships and PK/PD modeling for selegiline but does not report any effect of genetic variants or genotypes on its pharmacokinetics or pharmacodynamics. |
| popPK | Mitchell_1997 | irrelevant | 0 | 0 | The paper is a review of SSRIs and mentions selegiline only as a co-administered agent regarding pharmacodynamic interactions (serotonin syndrome), without reporting any PK parameters. |
| PGx | Mitchell_1997 | not_relevant | 0 | 0 | The text is a general review of pharmacological drug interactions involving SSRIs and mentions selegiline only as a risk factor for serotonin syndrome, without reporting any pharmacogenomic data or specific PK/PD parameter changes driven by genetic variants. |
| popPK | Müller_2014 | irrelevant | 0 | 0 | The paper is a review of rasagiline, a different drug, and does not contain quantitative pharmacokinetic data for selegiline. |
| PGx | Müller_2014 | not_relevant | 0 | 0 | The paper is a review of rasagiline's pharmacokinetics and clinical use, with no focus on selegiline or any pharmacogenomic analysis. |
| popPK | Nomoto_2005 | irrelevant | 0 | 0 | The paper is a general review of Parkinson's disease pharmacokinetics that only mentions selegiline's metabolic pathways qualitatively without reporting any quantitative PK parameters for selegiline. |
| PGx | Nomoto_2005 | not_relevant | 1 | 0 | The paper mentions CYP2D6/3A4 metabolism of selegiline and drug-drug interactions (e.g., quinidine) but does not report pharmacogenomic effects (genotype/phenotype) on PK/PD parameters. |
| popPK | Palacharla_2018 | irrelevant | 0 | 0 | The study is an in-vitro enzyme phenotyping study determining CYP2B6 contribution (fm,CYP) and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for selegiline in vivo. |
| PGx | Palacharla_2018 | not_relevant | 0 | 0 | The paper discusses in vitro CYP2B6 fractions for selegiline but does not report a pharmacogenomic effect on PK/PD parameters. |
| popPK | Riederer_2018 | irrelevant | 0 | 0 | This is a narrative review of MAO-B inhibitors in Parkinson's disease that discusses clinical pharmacology and mechanisms but does not report original quantitative pharmacokinetic parameters (CL, V, ka) for selegiline. |
| PGx | Riederer_2018 | not_relevant | 0 | 0 | The text is a narrative review of MAO-B inhibitors in Parkinson's disease and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of selegiline. |
| popPK | Rohatagi_1997 | irrelevant | 5 | 2 | The study describes a pulsatile delivery system and mentions compartmental analysis, but the provided text only reports a ratio of rate constants (1.57 and 0.61) without standard disposition parameters like CL, V, or ka, making it insufficient for standard PK parameter extraction. |
| PGx | Rohatagi_1997 | not_relevant | 0 | 0 | The study evaluates a new formulation in healthy volunteers and contains no genetic variants or pharmacogenomic analysis. |
| popPK | Rohatagi_1997_2 | relevant | 9 | 0 | The paper reports a pharmacokinetic model and NCA parameters for selegiline, but the specific numeric values are not listed in the provided abstract/evidence text. |
| PGx | Rohatagi_1997_2 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic model for selegiline in a small cohort of healthy males without analyzing any gene variants or genetic phenotypes. |
| popPK | Sarginson_2015 | irrelevant | 0 | 0 | The paper is a pharmacogenetics study on smoking cessation outcomes and does not report pharmacokinetic parameters. |
| PGx | Sarginson_2015 | not_relevant | 4 | 2 | The paper reports an association between genetic variants and smoking cessation outcomes (abstinence/craving), not pharmacokinetic or direct pharmacodynamic parameters of selegiline. |
| popPK | Scheinin_1998 | irrelevant | 4 | 0 | The study reports only qualitative findings and range values (e.g., "1 to 32 nmol/L") rather than specific quantitative PK parameters like clearance, volume, or half-life for selegiline. |
| popPK | Schnoll_2006 | irrelevant | 0 | 0 | The paper is a review of pharmacotherapies for tobacco dependence and mentions selegiline only as a potential treatment without providing any quantitative pharmacokinetic parameters. |
| PGx | Schnoll_2006 | not_relevant | 0 | 0 | The text is a broad review of pharmacotherapies for tobacco dependence and mentions selegiline only as a drug with limited evidence in certain subgroups, without reporting any specific gene variant or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Schwengber_2017 | irrelevant | 0 | 0 | The study is an in vitro evaluation of transdermal delivery systems using selegiline as a model drug, reporting release kinetics rather than pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Schwengber_2017 | not_relevant | 0 | 0 | The paper focuses on in vitro transdermal drug delivery systems and release kinetics, containing no pharmacogenomic data or genotype-based effects on selegiline PK/PD. |
| popPK | Shaik_2017 | irrelevant | 0 | 0 | The paper describes in-vitro enzyme inhibition studies using selegiline as a probe substrate, not a pharmacokinetic study of selegiline's disposition. |
| PGx | Shaik_2017 | not_relevant | 0 | 0 | The paper investigates MAO inhibition by novel compounds in vitro and does not report pharmacogenomic effects on selegiline PK/PD. |
| popPK | Taavitsainen_2000 | irrelevant | 1 | 2 | The study is explicitly in vitro (human liver microsomes) and reports metabolic enzyme kinetics (Km, Vmax, Ki) rather than in vivo disposition parameters (CL, V, ka, t1/2) or population PK models. |
| PGx | Taavitsainen_2000 | not_relevant | 0 | 0 | The paper characterizes CYP enzyme involvement in selegiline metabolism in vitro but does not report any genetic variants or genotypes affecting PK/PD parameters. |
| popPK | Walsky_2006 | irrelevant | 0 | 0 | The study is an in vitro mechanistic screen of CYP2B6 inhibitors where selegiline is only mentioned as a substrate example, with no PK parameters for selegiline reported. |
| PGx | Walsky_2006 | not_relevant | 0 | 0 | The paper focuses on in vitro CYP2B6 inhibition by other drugs (drug-drug interactions) and does not report genetic variants affecting selegiline PK/PD. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | The paper is a review of the CYP2B6 enzyme and mentions selegiline only as a substrate example, without reporting any pharmacokinetic parameter values. |
| PGx | Wang_2008 | not_relevant | 0 | 0 | The paper is a review summarizing general CYP2B6 properties and listing selegiline as a substrate, but it does not report specific experimental data or fitted effect sizes of gene variants on selegiline PK/PD parameters. |
| popPK | Watanabe_2010 | irrelevant | 1 | 1 | The study reports in-vitro enzyme kinetic parameters (Vmax/Km) for CYP2B6 variants metabolizing selegiline, rather than population pharmacokinetic disposition parameters (CL, V, t1/2) in a physiological system. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bselegiline%5D&body=Drug%3A%20selegiline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_selegiline/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
