<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Beclabuvir&quot;}]"></div>

# Beclabuvir

- **generic name:** Beclabuvir
- **ATC codes:** `J05AP58`
- **DrugBank:** [DB12225](https://go.drugbank.com/drugs/DB12225) · **PubChem:** [CID 56934415](https://pubchem.ncbi.nlm.nih.gov/compound/56934415)
- **molar mass:** 659.838 g/mol (C36H45N5O5S) — DrugBank
- **groups:** investigational

## About

Beclabuvir is an antiviral drug investigated for the treatment of hepatitis C virus infections. It remains investigational and has not been approved for clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19596032](https://www.wikidata.org/wiki/Q19596032) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:43 | 2:12 | 0/0/0 | 0/0/1 | 0/0/0 | 35,437/1,917 | ollama / glm-5.3-flash | 4 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Ueno_2019_SVR12](drugs/drug_beclabuvir/pd_Ueno_2019_SVR12.md) | sustained virologic response at posttreatment week 12 ← beclabuvir · categorical (graded) response model | — | Ueno T et al., Exposure-Response Analysis for Efficacy…, Clinical pharmacology in dr… (2019) | [10.1002/cpdd.646](https://doi.org/10.1002/cpdd.646) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=beclabuvir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Genome polyprotein (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 44 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Osawa_2019.pdf` | Osawa M et al., Population Pharmacokinetic Analysis of…, Clinical pharmacology in dr… (2019) | popPK | 10 | [10.1002/cpdd.649](https://doi.org/10.1002/cpdd.649) | [30629858](https://pubmed.ncbi.nlm.nih.gov/30629858) | Population PK model for beclabuvir in HCV-infected subjects, but numeric parameter values (CL, V, etc.) are not present in the evidence text. |
| `Ueno_2019.pdf` | Ueno T et al., Exposure-Response Analysis for Efficacy…, Clinical pharmacology in dr… (2019) | pd | 5 | [10.1002/cpdd.646](https://doi.org/10.1002/cpdd.646) | [30667592](https://www.ncbi.nlm.nih.gov/pubmed/30667592) | metadata signals extractable PD data (Exposure-Response) |
| `Murray_2024.pdf` | Murray M, The Role of CYPs and Transporters in th…, Current drug metabolism (2024) | pgx | 8 | [10.2174/0113892002288832240213095622](https://doi.org/10.2174/0113892002288832240213095622) | [38441017](https://www.ncbi.nlm.nih.gov/pubmed/38441017) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Eley_2015.pdf` | Eley T et al., Asunaprevir: A Review of Preclinical an…, Clinical pharmacokinetics (2015) | pgx | 7 | [10.1007/s40262-015-0299-6](https://doi.org/10.1007/s40262-015-0299-6) | [26177803](https://www.ncbi.nlm.nih.gov/pubmed/26177803) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T15:42:59.874820+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahmed_2018 | not_relevant | 2 | 0 | Mentions IL28B genotype only as an efficacy stratifier (SVR12), not a pharmacogenomic effect on a PK/PD parameter of beclabuvir. |
| PGx | Akuta_2018 | not_relevant | 2 | 3 | NS5A resistance polymorphisms relate to viral response (PD efficacy outcome), not a fitted pharmacogenomic effect on a PK/PD parameter of beclabuvir. |
| PGx | Cheng_2016 | not_relevant | 0 | 0 | Paper reports in vitro CYP3A4 induction/inhibition by BCV for DDI prediction, with no gene variant/genotype/phenotype effect on BCV PK/PD. |
| PGx | Eley_2015 | not_relevant | 0 | 0 | No pharmacogenomic (gene variant/genotype/phenotype) effects on beclabuvir PK/PD are reported; only race and hepatic status are mentioned. |
| PGx | Esposito_2018 | not_relevant | 0 | 0 | Review of DCV-TRIO efficacy/safety with no pharmacogenomic effects on beclabuvir PK/PD parameters reported. |
| PGx | Everson_2016 | not_relevant | 2 | 3 | IL28B genotype is reported only as an efficacy subgroup (SVR rates), not as a pharmacogenomic effect on a PK or PD parameter of beclabuvir. |
| PGx | Fabrizi_2015 | not_relevant | 0 | 0 | Review of DAA efficacy/safety in renal impairment with no pharmacogenomic effects on beclabuvir PK/PD parameters. |
| popPK | Friborg_2014 | irrelevant | 0 | 0 | In vitro HCV replicon study with no PK parameters for beclabuvir; only EC50 values and clinical Ctrough references appear. |
| PGx | Friborg_2014 | not_relevant | 0 | 0 | In vitro HCV replicon resistance study; no host gene variant/genotype effect on beclabuvir PK or PD parameters. |
| PGx | Garimella_2018 | not_relevant | 0 | 0 | This is a drug–drug interaction (DDI) cocktail study; no gene variant/genotype/phenotype effects on beclabuvir PK/PD are reported. |
| PGx | Gentile_2015 | not_relevant | 0 | 0 | Abstract only reviews beclabuvir PK/efficacy generally; no gene variant effect on PK/PD parameters reported. |
| PGx | Gentile_2015_2 | not_relevant | 0 | 0 | Review of asunaprevir safety with no pharmacogenomic effects on PK/PD parameters reported. |
| PGx | Kao_2017 | not_relevant | 2 | 3 | Reports efficacy/safety of beclabuvir combination therapy and baseline viral resistance polymorphisms, but no host gene variant effect on beclabuvir PK/PD parameters. |
| PGx | Maekawa_2018 | not_relevant | 1 | 5 | Pharmacogenomic findings concern daclatasvir/asunaprevir-induced ALT elevation; beclabuvir is only mentioned as a possible future application, with no PK/PD effect reported for it. |
| PGx | Matsumoto_2020 | not_relevant | 4 | 4 | For beclabuvir, the study explicitly reports no CYP3A5*3 genotype effect on metabolism; only ASV showed a genotype-dependent PK effect, and no fitted effect sizes for BCV are given. |
| PGx | Murray_2024 | not_relevant | 6 | 2 | Mentions pharmacogenomic variation may affect beclabuvir disposition only in general terms, with no specific variant or PK parameter reported. |
| popPK | Osawa_2019 | relevant | 10 | 3 | Population PK model for beclabuvir in HCV-infected subjects, but numeric parameter values (CL, V, etc.) are not present in the evidence text. |
| popPK | Osawa_2019_2 | irrelevant | 4 | 2 | This is an exposure-response safety analysis; a beclabuvir PopPK model is referenced (1-compartment, covariates on clearance) but no numeric PK parameter values (CL, V, etc.) are given in the evidence. |
| PGx | Ramirez_2016 | not_relevant | 2 | 3 | Viral genotype sensitivity differences for beclabuvir, not a host gene variant effect on drug PK/PD. |
| PGx | Takaguchi_2019 | not_relevant | 0 | 0 | No gene variant/genotype effects on beclabuvir PK/PD parameters are reported; only clinical efficacy (SVR) and viral resistance associations. |
| PGx | Tatum_2015 | not_relevant | 0 | 0 | No pharmacogenomic analyses or gene variant effects on beclabuvir PK/PD are reported; only efficacy and safety outcomes. |
| PGx | Teraoka_2018 | not_relevant | 0 | 0 | Paper reports viral resistance variants affecting treatment efficacy, not a host gene variant effect on beclabuvir PK/PD parameters. |
| popPK | Ueno_2019 | irrelevant | 3 | 1 | This is an exposure-response efficacy analysis (logistic SVR12 model), not a PK disposition model, and no numeric beclabuvir PK parameters appear in the evidence. |
| PGx | Ueno_2019 | not_relevant | 0 | 0 | Covariates are viral resistance substitutions and clinical factors, not host gene variants affecting PK/PD of beclabuvir. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | Review of daclatasvir regimens; no pharmacogenomic effects on beclabuvir PK/PD reported. |
| popPK | Zappulo_2020 | irrelevant | 2 | 0 | A narrative review discussing PK of the combination qualitatively, with no numeric disposition parameter values for beclabuvir present in the evidence. |
| PGx | Zappulo_2020 | not_relevant | 2 | 3 | Review mentions IL28B genotype independence of SVR but reports no pharmacogenomic effect on beclabuvir PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
