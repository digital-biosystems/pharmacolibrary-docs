<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04C&quot;,&quot;href&quot;:&quot;atc/G04C.md&quot;},{&quot;label&quot;:&quot;dutasteride&quot;}]"></div>

# dutasteride

- **generic name:** dutasteride
- **ATC codes:** `G04CA52`, `G04CB02`
- **DrugBank:** [DB01126](https://go.drugbank.com/drugs/DB01126) · **PubChem:** [CID 6918296](https://pubchem.ncbi.nlm.nih.gov/compound/6918296)
- **molar mass:** 528.5297 g/mol (C27H30F6N2O2) — DrugBank
- **groups:** approved, investigational

## About

Dutasteride is a 5-alpha-reductase inhibitor used to treat benign prostatic hypertrophy and, in some settings, male pattern baldness. It is an approved medicine, used mainly for urological conditions such as an enlarged prostate.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424760](https://www.wikidata.org/wiki/Q424760) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:09 | 6:16 | 0/1/0 | 1/0/0 | 0/0/5 | 116,473/5,404 | einfracz / qwen3.8-27b | 15 | 1/5 | 14/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gisleskog_1999_reference](drugs/drug_dutasteride/Dutasteride_Gisleskog1999_reference.md) | — | 1-compartment (no model) | 0 | Gisleskog PO et al., The pharmacokinetic modelling of GI1987…, British journal of clinical… (1999) | [10.1046/j.1365-2125.1999.00843.x](https://doi.org/10.1046/j.1365-2125.1999.00843.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Samoto_2021_C4_2](drugs/drug_dutasteride/pd_Samoto_2021_C4_2.md) | C4-2 colony growth ← dutasteride · direct Emax (saturable) effect | — | Samoto M et al., Novel bone microenvironment model of ca…, Oncology letters (2021) | [10.3892/ol.2021.12950](https://doi.org/10.3892/ol.2021.12950) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **ABCG2** | `Q88` · AUC | transport | [Villapalos-García_2021](drugs/drug_dutasteride/pgx_Villapalos_Garc_a_2021_ABCG2_Q88.md) | Villapalos-García G et al., Effects of Cytochrome P450 and Transpor…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.718281](https://doi.org/10.3389/fphar.2021.718281) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Villapalos-García_2021](drugs/drug_dutasteride/pgx_Villapalos_Garc_a_2021_CYP2D6_Q27.md) | Villapalos-García G et al., Effects of Cytochrome P450 and Transpor…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.718281](https://doi.org/10.3389/fphar.2021.718281) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP3A4** | `Q88` · AUC | metabolism | [Villapalos-García_2021](drugs/drug_dutasteride/pgx_Villapalos_Garc_a_2021_CYP3A4_Q88.md) | Villapalos-García G et al., Effects of Cytochrome P450 and Transpor…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.718281](https://doi.org/10.3389/fphar.2021.718281) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP3A5** | `Q88` · AUC | metabolism | [Villapalos-García_2021](drugs/drug_dutasteride/pgx_Villapalos_Garc_a_2021_CYP3A5_Q88.md) | Villapalos-García G et al., Effects of Cytochrome P450 and Transpor…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.718281](https://doi.org/10.3389/fphar.2021.718281) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **SLC22A1** | `Q88` · AUC | transport | [Villapalos-García_2021](drugs/drug_dutasteride/pgx_Villapalos_Garc_a_2021_SLC22A1_Q88.md) | Villapalos-García G et al., Effects of Cytochrome P450 and Transpor…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.718281](https://doi.org/10.3389/fphar.2021.718281) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dutasteride).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` transport | paper PGx gene |
| absorption | liver | `ABCG2` transport | paper PGx gene |
| absorption | mammary gland | `ABCG2` transport | paper PGx gene |
| absorption | small intestine | `ABCG2` transport | paper PGx gene |
| absorption | testis | `ABCG2` transport | paper PGx gene |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` metabolism | paper PGx gene |
| metabolism | kidney | `CYP3A5` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` metabolism, `CYP3A4` metabolism, `CYP3A5` metabolism/substrate, `SLC22A1` transport | DrugBank actor |
| metabolism | small intestine | `CYP3A4` metabolism, `CYP3A5` metabolism/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | liver | `SRD5A1` inhibitor | DrugBank actor |
| — | prostate gland | `SRD5A1` inhibitor, `SRD5A2` inhibitor | DrugBank actor |
| — | skin | `SRD5A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SRD5A3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 75 matched, 63 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gisleskog_1999.pdf` | Gisleskog PO et al., The pharmacokinetic modelling of GI1987…, British journal of clinical… (1999) | popPK | 10 | [10.1046/j.1365-2125.1999.00843.x](https://doi.org/10.1046/j.1365-2125.1999.00843.x) | [10073740](https://pubmed.ncbi.nlm.nih.gov/10073740) | The paper reports a population PK model for dutasteride in humans with specific numeric values for clearance, volume, and Km provided in the abstract text. |
| `Gisleskog_1998.pdf` | Gisleskog PO et al., A model for the turnover of dihydrotest…, Clinical pharmacology and t… (1998) | popPK | 8 | [10.1016/S0009-9236(98)90054-6](https://doi.org/10.1016/S0009-9236(98)90054-6) | [9871428](https://pubmed.ncbi.nlm.nih.gov/9871428) | The study models the pharmacokinetics and pharmacodynamics of dutasteride (GI198745) in humans, but the specific numeric PK parameter values are not present in the provided text. |
| `Giffen_2020.pdf` | Giffen PS et al., Controlled Delivery of Dutasteride Usin…, Journal of pharmaceutical s… (2020) | popPK | 6 | [10.1016/j.xphs.2019.11.012](https://doi.org/10.1016/j.xphs.2019.11.012) | [31751565](https://pubmed.ncbi.nlm.nih.gov/31751565) | The paper describes PK studies in animals (rats/pigs) and in-silico modeling but provides no explicit numeric disposition parameters (CL, V, ka) in the extracted evidence, only qualitative exposure durations. |
| `Olsson_1999.pdf` | Olsson Gisleskog P et al., Validation of a population pharmacokine…, European journal of pharmac… (1999) | popPK | 5 | [10.1016/s0928-0987(99)00024-x](https://doi.org/10.1016/s0928-0987(99)00024-x) | [10425379](https://pubmed.ncbi.nlm.nih.gov/10425379) | The paper validates a population pharmacodynamic model for 5-alpha-reductase inhibition (DHT conversion) but does not provide numeric pharmacokinetic disposition parameters (CL, V) for dutasteride itself in the provided text. |

<sub>queue written 2026-10-07T09:08:07.579818+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bamodu_2021 | not_relevant | 1 | 0 | The paper studies gene expression as prognostic biomarkers for prostate cancer and drug resistance, not the impact of patient genotypes on the pharmacokinetic or pharmacodynamic parameters of dutasteride. |
| popPK | Fossler_2015 | irrelevant | 3 | 2 | The study is a bioequivalence trial reporting only non-compartmental PK metrics (Cmax, AUC, Tmax) and lacks quantitative disposition parameters (CL, V, Q, ka) or a compartmental/population model required for relevance. |
| popPK | Giffen_2020 | irrelevant | 6 | 0 | The paper describes PK studies in animals (rats/pigs) and in-silico modeling but provides no explicit numeric disposition parameters (CL, V, ka) in the extracted evidence, only qualitative exposure durations. |
| popPK | Gisleskog_1998 | relevant | 8 | 2 | The study models the pharmacokinetics and pharmacodynamics of dutasteride (GI198745) in humans, but the specific numeric PK parameter values are not present in the provided text. |
| PGx | Kader_2012 | not_relevant | 0 | 0 | The paper investigates genetic markers for predicting prostate cancer risk, not pharmacokinetic or pharmacodynamic effects of dutasteride. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The paper focuses on the metabolites and pharmacokinetics of epristeride, not dutasteride, and does not report pharmacogenomic effects. |
| PGx | McKay_2017 | not_relevant | 0 | 0 | The study is a clinical trial evaluating a drug combination in prostate cancer and does not report on genetic variants or pharmacogenomic effects on dutasteride pharmacokinetics or pharmacodynamics. |
| PGx | Na_2019 | not_relevant | 0 | 0 | The study analyzes the association between a genetic risk score and the age of prostate cancer diagnosis in a dutasteride trial, but does not report pharmacokinetic or pharmacodynamic parameters of dutasteride or how genetics influence them. |
| popPK | Olsson_1999 | relevant | 5 | 0 | The paper validates a population pharmacodynamic model for 5-alpha-reductase inhibition (DHT conversion) but does not provide numeric pharmacokinetic disposition parameters (CL, V) for dutasteride itself in the provided text. |
| PGx | Panfili_2012 | not_relevant | 2 | 5 | The paper discusses pharmacogenomics (CYP3A4/2D6) related to ranolazine's metabolism and bladder hypotonia, not the PK/PD of dutasteride, which is only mentioned as a co-therapy. |
| PGx | Park_2010 | not_relevant | 0 | 0 | The study investigated the association between PSA gene variants and PSA response to dutasteride but concluded that there were no statistically significant correlations or associations between the genotypes and PSA changes. |
| PGx | Quah_2022 | not_relevant | 2 | 0 | The paper is a review of drug-drug interactions (DDIs) between NMV/r and dermatological medications (including dutasteride), not a study reporting pharmacogenomic effects of gene variants on dutasteride's pharmacokinetics. |
| PGx | Rathnayake_2010 | not_relevant | 0 | 0 | The text is a general review of androgenetic alopecia and mentions dutasteride only as a drug currently in trials, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Torres_2026 | not_relevant | 4 | 0 | The paper is a narrative review discussing genetic susceptibility to hair loss and general drug response heterogeneity, but it does not report specific quantitative PK or PD parameter changes for dutasteride. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:08 UTC</sub>
