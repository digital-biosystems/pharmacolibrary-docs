<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;erlotinib&quot;}]"></div>

# erlotinib

- **generic name:** erlotinib
- **ATC codes:** `L01EB02`, `L01XE03`
- **DrugBank:** [DB00530](https://go.drugbank.com/drugs/DB00530) · **PubChem:** [CID 176870](https://pubchem.ncbi.nlm.nih.gov/compound/176870)
- **molar mass:** 393.4357 g/mol (C22H23N3O4) — DrugBank
- **groups:** approved, investigational

## About

Erlotinib is a tyrosine-kinase inhibitor used to treat cancers, mainly non-small-cell lung cancer and pancreatic cancer. It is approved and authorised in the European Union, and is used in cancer treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418369](https://www.wikidata.org/wiki/Q418369) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| erlotinib | parent | 393.436 | C22H23N3O4 | DrugBank | [176870](https://pubchem.ncbi.nlm.nih.gov/compound/176870) | Reddick_2019 |
| OSI-420 | metabolite | 379.416 | C21H21N3O4 | PubChem | [10317566](https://pubchem.ncbi.nlm.nih.gov/compound/10317566) | Reddick_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:03 | 17:36 | 0/2/1 | 4/1/1 | 0/0/0 | 405,792/98,979 | openai / gpt-6-luna | 9 | 1/8 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q351 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Reddick_2019_reference](drugs/drug_erlotinib/Erlotinib_Reddick2019_reference.md) | — | parent + metabolite (no model) | 4 | Reddick SJ et al., Pharmacokinetics and safety of erlotini…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03921-3](https://doi.org/10.1007/s00280-019-03921-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Eigenmann_2017_reference](drugs/drug_erlotinib/Erlotinib_Eigenmann2017_reference.md) | — | 1-compartment (no model) | 0 | Eigenmann MJ et al., PKPD modeling of acquired resistance to…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9553-x](https://doi.org/10.1007/s10928-017-9553-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Guidi_2020_reference](drugs/drug_erlotinib/Erlotinib_Guidi2020_reference.md) | — | 1-compartment (no model) | 0 | Guidi M et al., Population Pharmacokinetics of Erlotini…, Clinical therapeutics (2020) | [10.1016/j.clinthera.2020.05.008](https://doi.org/10.1016/j.clinthera.2020.05.008) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Eigenmann_2016_TGI](drugs/drug_erlotinib/pd_Eigenmann_2016_TGI.md) | Tumor growth inhibition ← erlotinib · inhibition effect | — | Eigenmann MJ et al., Combining Nonclinical Experiments with…, Molecular cancer therapeuti… (2016) | [10.1158/1535-7163.MCT-16-0076](https://doi.org/10.1158/1535-7163.MCT-16-0076) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Eigenmann_2016_pErk](drugs/drug_erlotinib/pd_Eigenmann_2016_pErk.md) | phospho-Erk (pErk) signals ← erlotinib · inhibition effect | — | Eigenmann MJ et al., Combining Nonclinical Experiments with…, Molecular cancer therapeuti… (2016) | [10.1158/1535-7163.MCT-16-0076](https://doi.org/10.1158/1535-7163.MCT-16-0076) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Eigenmann_2017_TV](drugs/drug_erlotinib/pd_Eigenmann_2017_TV.md) | Tumor volume (TV) ← erlotinib · delayed effect through transit (transduction) compartments | — | Eigenmann MJ et al., PKPD modeling of acquired resistance to…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9553-x](https://doi.org/10.1007/s10928-017-9553-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Eigenmann_2017_TV_2](drugs/drug_erlotinib/pd_Eigenmann_2017_TV_2.md) | Tumor volume (TV) ← erlotinib · delayed effect through transit (transduction) compartments | — | Eigenmann MJ et al., PKPD modeling of acquired resistance to…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9553-x](https://doi.org/10.1007/s10928-017-9553-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thomas_2009_early_drug_response](drugs/drug_erlotinib/pd_Thomas_2009_early_drug_response.md) | early drug response ← erlotinib · model not identified | — | Thomas F et al., Population pharmacokinetics of erlotini…, European journal of cancer… (2009) | [10.1016/j.ejca.2009.05.007](https://doi.org/10.1016/j.ejca.2009.05.007) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thomas_2009_grade_of_skin_rash](drugs/drug_erlotinib/pd_Thomas_2009_grade_of_skin_rash.md) | grade of skin rash ← erlotinib · model not identified | — | Thomas F et al., Population pharmacokinetics of erlotini…, European journal of cancer… (2009) | [10.1016/j.ejca.2009.05.007](https://doi.org/10.1016/j.ejca.2009.05.007) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wanika_2024_Tumor_cell_viability](drugs/drug_erlotinib/pd_Wanika_2024_Tumor_cell_viability.md) | Tumor cell viability ← erlotinib · indirect response — drug inhibits the production of Tumor cell viability | — | Wanika L et al., In vitro PK/PD modeling of tyrosine kin…, Clinical and translational… (2024) | [10.1111/cts.13714](https://doi.org/10.1111/cts.13714) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Rodier_2022_OS](drugs/drug_erlotinib/pd_Rodier_2022_OS.md) | overall survival ← erlotinib · time-to-event model | — | Rodier T et al., Exposure-Response Analysis of Osimertin…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091844](https://doi.org/10.3390/pharmaceutics14091844) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Rodier_2022_PFS](drugs/drug_erlotinib/pd_Rodier_2022_PFS.md) | progression-free survival ← erlotinib · time-to-event model | — | Rodier T et al., Exposure-Response Analysis of Osimertin…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091844](https://doi.org/10.3390/pharmaceutics14091844) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Li_2013_tumor_growth](drugs/drug_erlotinib/pd_Li_2013_tumor_growth.md) | tumor growth · model not identified | — | Li M et al., Preclinical pharmacokinetic/pharmacodyn…, Pharmaceutical research (2013) | [10.1007/s11095-013-0978-7](https://doi.org/10.1007/s11095-013-0978-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=erlotinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C8` inhibitor/substrate, `CYP2D6` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: EGFR (inhibitor), EGFR (target), NR1I2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 65 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guidi_2020.pdf` | Guidi M et al., Population Pharmacokinetics of Erlotini…, Clinical therapeutics (2020) | popPK | 10 | [10.1016/j.clinthera.2020.05.008](https://doi.org/10.1016/j.clinthera.2020.05.008) | [32631634](https://pubmed.ncbi.nlm.nih.gov/32631634) | Reports numeric population-PK parameters for erlotinib, including CL/F, V/F, and absorption rate. |
| `Reddick_2019.pdf` | Reddick SJ et al., Pharmacokinetics and safety of erlotini…, Cancer chemotherapy and pha… (2019) | popPK | 10 | [10.1007/s00280-019-03921-3](https://doi.org/10.1007/s00280-019-03921-3) | [31392390](https://pubmed.ncbi.nlm.nih.gov/31392390) | Pediatric population-PK models report numeric erlotinib and OSI-420 apparent clearances in the evidence. |
| `Thomas_2009.pdf` | Thomas F et al., Population pharmacokinetics of erlotini…, European journal of cancer… (2009) | popPK | 10 | [10.1016/j.ejca.2009.05.007](https://doi.org/10.1016/j.ejca.2009.05.007) | [19523815](https://pubmed.ncbi.nlm.nih.gov/19523815) | The human population-PK analysis reports erlotinib clearance covariates, but no numeric parameter values are present in the evidence. |
| `Kim_2025.pdf` | Kim M et al., Population pharmacokinetics of erlotini…, Computers in biology and me… (2025) | popPK | 9 | [10.1016/j.compbiomed.2025.109682](https://doi.org/10.1016/j.compbiomed.2025.109682) | [39862467](https://pubmed.ncbi.nlm.nih.gov/39862467) | This is a human erlotinib population-PK model, but no numeric parameter values are present in the evidence. |
| `Eigenmann_2016.pdf` | Eigenmann MJ et al., Combining Nonclinical Experiments with…, Molecular cancer therapeuti… (2016) | popPK | 8 | [10.1158/1535-7163.MCT-16-0076](https://doi.org/10.1158/1535-7163.MCT-16-0076) | [27638857](https://pubmed.ncbi.nlm.nih.gov/27638857) | The study models erlotinib PK in xenograft mice, but no numeric disposition parameter values are provided in the evidence. |
| `Jackwerth_2026.pdf` | Jackwerth M et al., In vivo evidence of functional OATP2B1…, European journal of pharmac… (2026) | popPK | 8 | [10.1016/j.ejps.2026.107441](https://doi.org/10.1016/j.ejps.2026.107441) | [41544824](https://pubmed.ncbi.nlm.nih.gov/41544824) | Human PET data report numeric erlotinib volume-of-distribution estimates and a compartmental model. |

<sub>queue written 2026-10-06T23:47:32.946898+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bahce_2016 | irrelevant | 2 | 8 | The study uses [11C]erlotinib as a diagnostic PET tracer, though numeric tumor VT values and the compartment model are reported; detailed results are in supplementary tables. |
| popPK | Benay_2015 | irrelevant | 1 | 0 | This is an in-vitro cell assay, and no numeric erlotinib disposition parameter values are provided. |
| popPK | Eigenmann_2016 | relevant | 8 | 0 | The study models erlotinib PK in xenograft mice, but no numeric disposition parameter values are provided in the evidence. |
| popPK | Haaland_2014 | irrelevant | 0 | 0 | This is a meta-analysis of clinical efficacy and adverse events, not erlotinib pharmacokinetics; no disposition parameter values are reported. |
| popPK | Janssen_2022 | irrelevant | 1 | 0 | The model is for ctDNA dynamics and progression, and reports no quantitative erlotinib disposition parameters. |
| popPK | Kim_2025 | relevant | 9 | 0 | This is a human erlotinib population-PK model, but no numeric parameter values are present in the evidence. |
| popPK | Li_2013 | irrelevant | 1 | 0 | The models quantify antitumor interaction, not erlotinib disposition parameters, and no numeric PK parameters are provided. |
| popPK | Li_2016 | irrelevant | 0 | 0 | This is a review of ketamine, not erlotinib, and reports no erlotinib disposition parameters. |
| popPK | Nakagawa_2022 | irrelevant | 2 | 1 | The study focuses on ramucirumab; erlotinib disposition parameters are not reported, and its exposure values are in supplementary material not provided. |
| popPK | Rodier_2022 | irrelevant | 2 | 0 | Erlotinib is used for an exposure–survival comparison; the displayed PK parameter values are for osimertinib, and erlotinib estimates are only referenced to a prior model. |
| popPK | Shao_2017 | irrelevant | 0 | 0 | This is an efficacy study and reports no quantitative erlotinib disposition parameters. |
| popPK | Thomas_2009 | relevant | 10 | 1 | The human population-PK analysis reports erlotinib clearance covariates, but no numeric parameter values are present in the evidence. |
| popPK | Wanika_2024 | irrelevant | 2 | 1 | This is an in-vitro PK/PD model, and erlotinib’s numeric parameter estimates are referenced in Table 2 but not present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:48 UTC</sub>
