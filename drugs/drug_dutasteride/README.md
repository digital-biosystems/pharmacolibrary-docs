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
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Gisleskog_1999_reference](drugs/drug_dutasteride/Dutasteride_Gisleskog1999_reference.md) | — | 1-compartment (no model) | 0 | Gisleskog PO et al., The pharmacokinetic modelling of GI1987…, British journal of clinical… (1999) | [10.1046/j.1365-2125.1999.00843.x](https://doi.org/10.1046/j.1365-2125.1999.00843.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Samoto_2021_C4_2](drugs/drug_dutasteride/pd_Samoto_2021_C4_2.md) | C4-2 colony growth ← dutasteride · direct Emax (saturable) effect | — | Samoto M et al., Novel bone microenvironment model of ca…, Oncology letters (2021) | [10.3892/ol.2021.12950](https://doi.org/10.3892/ol.2021.12950) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCG2** | `Q88` · AUC | transport | [Villapalos-García_2021](drugs/drug_dutasteride/pgx_Villapalos_Garc_a_2021_ABCG2_Q88.md) | Villapalos-García G et al., Effects of Cytochrome P450 and Transpor…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.718281](https://doi.org/10.3389/fphar.2021.718281) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Villapalos-García_2021](drugs/drug_dutasteride/pgx_Villapalos_Garc_a_2021_CYP2D6_Q27.md) | Villapalos-García G et al., Effects of Cytochrome P450 and Transpor…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.718281](https://doi.org/10.3389/fphar.2021.718281) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A4** | `Q88` · AUC | metabolism | [Villapalos-García_2021](drugs/drug_dutasteride/pgx_Villapalos_Garc_a_2021_CYP3A4_Q88.md) | Villapalos-García G et al., Effects of Cytochrome P450 and Transpor…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.718281](https://doi.org/10.3389/fphar.2021.718281) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A5** | `Q88` · AUC | metabolism | [Villapalos-García_2021](drugs/drug_dutasteride/pgx_Villapalos_Garc_a_2021_CYP3A5_Q88.md) | Villapalos-García G et al., Effects of Cytochrome P450 and Transpor…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.718281](https://doi.org/10.3389/fphar.2021.718281) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **SLC22A1** | `Q88` · AUC | transport | [Villapalos-García_2021](drugs/drug_dutasteride/pgx_Villapalos_Garc_a_2021_SLC22A1_Q88.md) | Villapalos-García G et al., Effects of Cytochrome P450 and Transpor…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.718281](https://doi.org/10.3389/fphar.2021.718281) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dutasteride) page (add drugs there; the set becomes a link).

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
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 75 matched, 63 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
