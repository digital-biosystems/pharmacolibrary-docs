<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Beclabuvir&quot;}]"></div>

# Beclabuvir

- **generic name:** Beclabuvir
- **ATC codes:** `J05AP58`
- **DrugBank:** [DB12225](https://go.drugbank.com/drugs/DB12225) · **PubChem:** [CID 56934415](https://pubchem.ncbi.nlm.nih.gov/compound/56934415)
- **molar mass:** 659.838 g/mol (C36H45N5O5S) — DrugBank
- **groups:** investigational

## About

Beclabuvir is a direct-acting antiviral used to treat hepatitis C virus infection. It is currently an investigational drug that has been studied in clinical trials.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q19596032](https://www.wikidata.org/wiki/Q19596032), [Wikipedia](https://en.wikipedia.org/wiki/Beclabuvir?oldid=1330131650) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Ueno_2019_SVR12](drugs/drug_beclabuvir/pd_Ueno_2019_SVR12.md) | sustained virologic response at posttreatment week 12 ← beclabuvir · categorical (graded) response model | — | Ueno T et al., Exposure-Response Analysis for Efficacy…, Clinical pharmacology in dr… (2019) | [10.1002/cpdd.646](https://doi.org/10.1002/cpdd.646) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 18:35 | 0:04 | 0/0/0 | 1/0/0 | 0/0/0 | 4,267/150 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 46 matched, 44 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ueno_2019.pdf` | Ueno T et al., Exposure-Response Analysis for Efficacy…, Clinical pharmacology in dr… (2019) | pd | 5 | [10.1002/cpdd.646](https://doi.org/10.1002/cpdd.646) | [30667592](https://www.ncbi.nlm.nih.gov/pubmed/30667592) | metadata signals extractable PD data (Exposure-Response) |
| `Murray_2024.pdf` | Murray M, The Role of CYPs and Transporters in th…, Current drug metabolism (2024) | pgx | 8 | [10.2174/0113892002288832240213095622](https://doi.org/10.2174/0113892002288832240213095622) | [38441017](https://www.ncbi.nlm.nih.gov/pubmed/38441017) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Eley_2015.pdf` | Eley T et al., Asunaprevir: A Review of Preclinical an…, Clinical pharmacokinetics (2015) | pgx | 7 | [10.1007/s40262-015-0299-6](https://doi.org/10.1007/s40262-015-0299-6) | [26177803](https://www.ncbi.nlm.nih.gov/pubmed/26177803) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-23 18:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2018 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy (SVR12) and safety, containing no pharmacokinetic data or disposition parameters. |
| PGx | Ahmed_2018 | not_relevant | 2 | 5 | The paper reports clinical efficacy (SVR12) rather than PK/PD parameters, and while it mentions IL28B genotype, it states there was no difference in response, failing to report a specific pharmacogenomic effect on a PK/PD parameter. |
| popPK | Akuta_2018 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on viral suppression and liver fibrosis markers, reporting no pharmacokinetic parameters for beclabuvir. |
| PGx | Akuta_2018 | not_relevant | 0 | 0 | The paper reports clinical outcomes (fibrosis, AFP, SVR) for an HCV regimen but does not assess any pharmacokinetic or pharmacodynamic parameters modified by genetic variants. |
| popPK | Cheng_2016 | irrelevant | 0 | 0 | The study focuses on CYP3A4 induction and inhibition mechanisms in vitro to predict drug-drug interactions, not on the disposition pharmacokinetic parameters (CL, V, etc.) of beclabuvir. |
| PGx | Cheng_2016 | not_relevant | 0 | 0 | The study investigates CYP3A4-mediated drug-drug interactions (DDIs) between HCV drugs and midazolam, not the impact of human gene variants on beclabuvir's PK or PD. |
| popPK | Eley_2015 | irrelevant | 0 | 0 | The paper is a review of asunaprevir's pharmacokinetics, and beclabuvir is only mentioned as a co-administered drug in a drug-drug interaction context, not as the subject of the PK study. |
| PGx | Eley_2015 | not_relevant | 0 | 0 | The paper reviews the pharmacokinetics of Asunaprevir, not Beclabuvir, and mentions Beclabuvir only in the context of drug-drug interactions. |
| popPK | Esposito_2018 | irrelevant | 1 | 0 | This is a narrative review discussing the fixed-dose combination containing beclabuvir, but it does not report original quantitative population-pharmacokinetic parameter estimates (CL, V, etc.) in the provided text. |
| PGx | Esposito_2018 | not_relevant | 0 | 0 | The paper is a review of PK/PD properties and clinical efficacy of DCV-TRIO, but it does not report pharmacogenomic effects of genetic variants on PK/PD parameters. |
| popPK | Everson_2016 | irrelevant | 1 | 0 | The paper is a clinical efficacy/safety study for HCV treatment and does not report quantitative pharmacokinetic disposition parameters for beclabuvir. |
| PGx | Everson_2016 | not_relevant | 0 | 0 | The study reports clinical efficacy (SVR12) outcomes for HCV treatment but does not analyze pharmacokinetic or pharmacodynamic parameters based on pharmacogenomic variants. |
| popPK | Fabrizi_2015 | irrelevant | 0 | 0 | This is a clinical review of efficacy and safety in renal impairment, not a pharmacokinetic study reporting quantitative disposition parameters for beclabuvir. |
| PGx | Fabrizi_2015 | not_relevant | 0 | 0 | The paper is a review of DAA efficacy and safety in renal failure patients and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Friborg_2014 | irrelevant | 0 | 0 | In vitro HCV replicon study with no PK parameters for beclabuvir; only EC50 values and clinical Ctrough references appear. |
| PGx | Friborg_2014 | not_relevant | 0 | 0 | In vitro HCV replicon resistance study; no host gene variant/genotype effect on beclabuvir PK or PD parameters. |
| PGx | Garimella_2018 | not_relevant | 0 | 0 | This is a drug–drug interaction (DDI) cocktail study; no gene variant/genotype/phenotype effects on beclabuvir PK/PD are reported. |
| popPK | Gentile_2015 | irrelevant | 2 | 0 | This is a review article that discusses beclabuvir's pharmacokinetics qualitatively but does not report original quantitative disposition parameters (e.g., CL, V) in the provided text. |
| PGx | Gentile_2015 | not_relevant | 0 | 0 | The paper is a general review of beclabuvir's mechanism, safety, and efficacy, but does not report any pharmacogenomic effects (gene variants/genotypes) on its PK or PD parameters. |
| popPK | Gentile_2015_2 | irrelevant | 0 | 0 | The paper is a review of asunaprevir safety, and beclabuvir is not mentioned or studied. |
| PGx | Gentile_2015_2 | not_relevant | 0 | 0 | The paper discusses asunaprevir, not beclabuvir, and focuses on safety rather than pharmacogenomics. |
| popPK | Kao_2017 | irrelevant | 0 | 0 | The paper reports efficacy (SVR12) and safety data for a clinical trial, but contains no pharmacokinetic parameters or quantitative disposition data for beclabuvir. |
| PGx | Kao_2017 | not_relevant | 1 | 0 | The paper does not report pharmacokinetic or pharmacodynamic parameters modified by gene variants. |
| popPK | Maekawa_2018 | irrelevant | 0 | 0 | The paper focuses on pharmacogenomics of daclatasvir/asunaprevir and mentions beclabuvir only in a future context in the conclusion, reporting no PK parameters for beclabuvir. |
| PGx | Maekawa_2018 | not_relevant | 0 | 0 | The study investigates the pharmacogenomic effect of UGT1A1*6 on ALT elevation for daclatasvir and asunaprevir, not beclabuvir. |
| popPK | Matsumoto_2020 | irrelevant | 2 | 0 | This is an in-vitro mechanistic study of CYP3A4/3A5 metabolism, not a pharmacokinetic study reporting disposition parameters like CL, V, or half-life for beclabuvir. |
| PGx | Matsumoto_2020 | not_relevant | 2 | 0 | The study explicitly states that the CYP3A5*3 genetic variant had no significant effect on beclabuvir metabolism in vitro, reporting a null finding rather than a pharmacogenomic effect. |
| popPK | Murray_2024 | irrelevant | 2 | 0 | The paper is a review article discussing biotransformation and transport mechanisms without reporting original quantitative pharmacokinetic parameter values for beclabuvir. |
| popPK | Netzler_2017 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study reporting antiviral IC50 values for beclabuvir, not pharmacokinetic parameters such as clearance or volume. |
| PGx | Netzler_2017 | not_relevant | 0 | 0 | The paper investigates the antiviral activity of beclabuvir against caliciviruses in vitro and does not contain any data on human pharmacokinetics, pharmacodynamics, or genetic variants affecting drug response. |
| popPK | Osawa_2019 | relevant | 10 | 0 | The paper reports a population PK model for beclabuvir, but no specific numeric parameter values (e.g., CL, V, Q) are present in the provided evidence text. |
| PGx | Osawa_2019 | not_relevant | 1 | 0 | The paper analyzes the effect of race (phenotype) on PK, but does not report any effect of specific gene variants or genotypes on PK or PD parameters. |
| popPK | Osawa_2019_2 | irrelevant | 2 | 0 | This is a safety exposure-response analysis that references a prior PopPK model for beclabuvir but does not report original quantitative disposition parameters (CL, V, etc.) in this paper. |
| PGx | Osawa_2019_2 | not_relevant | 0 | 0 | The paper reports an exposure-response analysis involving race and weight, but does not investigate specific gene variants or genotypes (pharmacogenomics). |
| popPK | Ramirez_2016 | irrelevant | 0 | 0 | The paper is an in vitro antiviral resistance study that lists beclabuvir only as a comparator drug in dose-response assays, without reporting any pharmacokinetic parameters. |
| PGx | Ramirez_2016 | not_relevant | 0 | 0 | The paper studies HCV genotype differences and viral resistance, not human pharmacogenomics of beclabuvir. |
| popPK | Takaguchi_2019 | irrelevant | 0 | 0 | The paper reports virological efficacy (SVR rates) and safety, not pharmacokinetic parameters (CL, V, etc.) for beclabuvir. |
| PGx | Takaguchi_2019 | not_relevant | 0 | 0 | The paper evaluates virological efficacy and safety of a DAA regimen, with no mention of gene variants affecting pharmacokinetics or pharmacodynamics. |
| PGx | Tatum_2015 | not_relevant | 0 | 0 | No pharmacogenomic analyses or gene variant effects on beclabuvir PK/PD are reported; only efficacy and safety outcomes. |
| popPK | Teraoka_2018 | irrelevant | 0 | 0 | The study is a virological efficacy/efficacy trial assessing antiviral response and resistance, reporting no pharmacokinetic parameters such as clearance, volume, or half-life for beclabuvir. |
| PGx | Teraoka_2018 | not_relevant | 0 | 0 | The study focuses on HCV resistance-associated variants (RAVs) and virological response (PD) to DAA therapy in mice and patients, but does not report a pharmacogenomic effect (host gene variant/genotype) on a PK or PD parameter of beclabuvir. |
| popPK | Ueno_2019 | irrelevant | 0 | 0 | The study is an exposure-response efficacy analysis focused on SVR12 outcomes and covariate effects, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for beclabuvir. |
| PGx | Ueno_2019 | not_relevant | 0 | 0 | The paper analyzes exposure-response relationships and demographic covariates but does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | The paper is a clinical review of daclatasvir regimens and does not report quantitative pharmacokinetic parameters for beclabuvir. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The paper is a review of the efficacy and safety of daclatasvir regimens and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of beclabuvir. |
| popPK | Zappulo_2020 | irrelevant | 1 | 0 | The paper is a narrative review discussing the fixed-dose combination and lacks specific quantitative population PK parameters or original numeric disposition values for beclabuvir. |
| PGx | Zappulo_2020 | not_relevant | 0 | 0 | The paper is a review of efficacy and safety and does not report pharmacogenomic effects of genetic variants on beclabuvir PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbeclabuvir%5D&body=Drug%3A%20beclabuvir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_beclabuvir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
