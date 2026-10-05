<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;glycopyrronium&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glycopyrronium_Bartels2013_model_based&quot;,&quot;label&quot;:&quot;Bartels_2013_model_based&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_model_based.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glycopyrronium_Bartels2013_noncompartmental&quot;,&quot;label&quot;:&quot;Bartels_2013_noncompartmental&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glycopyrronium_Bartels2013_population_mean_cv&quot;,&quot;label&quot;:&quot;Bartels_2013_population_mean_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# glycopyrronium

- **generic name:** glycopyrronium
- **ATC codes:** `A03AB02`, `A03CA05`, `D11AA01`, `R03AL04`, `R03AL07`, `R03AL09`, `R03AL11`, `R03AL12`, `R03BB06`
- **DrugBank:** [DB00986](https://go.drugbank.com/drugs/DB00986) · **PubChem:** [CID 9933193](https://pubchem.ncbi.nlm.nih.gov/compound/9933193)
- **molar mass:** 318.4305 g/mol (C19H28NO3) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Glycopyrronium is an anticholinergic (muscarinic antagonist) used for conditions such as peptic ulcer disease and chronic obstructive pulmonary disease, and also as an anesthetic adjuvant and antihidrotic. It remains in use, with approved and veterinary-approved products, and is used in inhaled combinations for obstructive airway diseases as well as gastrointestinal and dermatological preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411917](https://www.wikidata.org/wiki/Q411917) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| glycopyrronium | parent | 318.43 | C19H28NO3 | DrugBank | [9933193](https://pubchem.ncbi.nlm.nih.gov/compound/9933193) | Bartels_2013, Bartels_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:42 | 15:14 | 3/1/0 | 1/0/0 | 0/0/0 | 196,655/55,191 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Bartels_2013_model_based](drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_model_based.md) | ▶ model + simulator | 1-compartment, IV | 4 | Bartels C et al., Determination of the pharmacokinetics o…, British journal of clinical… (2013) | [10.1111/bcp.12118](https://doi.org/10.1111/bcp.12118) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Bartels_2013_noncompartmental](drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_noncompartmental.md) | ▶ model + simulator | 1-compartment, IV | 3 | Bartels C et al., Determination of the pharmacokinetics o…, British journal of clinical… (2013) | [10.1111/bcp.12118](https://doi.org/10.1111/bcp.12118) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.826). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Bartels_2013_population_mean_cv](drugs/drug_glycopyrronium/Glycopyrronium_Bartels2013_population_mean_cv.md) | ▶ model + simulator | 2-compartment, oral | 8 | Bartels C et al., Determination of the pharmacokinetics o…, British journal of clinical… (2013) | [10.1111/bcp.12118](https://doi.org/10.1111/bcp.12118) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Bartels_2021_reference](drugs/drug_glycopyrronium/Glycopyrronium_Bartels2021_reference.md) | — | 1-compartment (no model) | 3 (+4 cov.) | Bartels C et al., Population Pharmacokinetic Analysis of…, European journal of drug me… (2021) | [10.1007/s13318-021-00689-x](https://doi.org/10.1007/s13318-021-00689-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Penttilä_2001_HF_CCV](drugs/drug_glycopyrronium/pd_Penttil_2001_HF_CCV.md) | Hayano index of the high frequency variability of RRI ← glycopyrrolate · direct sigmoid Emax (Hill) effect | — | Penttilä J et al., Pharmacokinetic-pharmacodynamic model f…, European journal of clinica… (2001) | [10.1007/s002280100288](https://doi.org/10.1007/s002280100288) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Penttilä_2001_RRI](drugs/drug_glycopyrronium/pd_Penttil_2001_RRI.md) | mean R-R interval ← glycopyrrolate · direct sigmoid Emax (Hill) effect | — | Penttilä J et al., Pharmacokinetic-pharmacodynamic model f…, European journal of clinica… (2001) | [10.1007/s002280100288](https://doi.org/10.1007/s002280100288) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glycopyrronium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` unknown, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` substrate, `SLC47A1` substrate | DrugBank actor |
| excretion | liver | `SLC47A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), CYP2C18 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 31 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Demin_2016.pdf` | Demin I et al., Population pharmacokinetics of IND/GLY…, International journal of cl… (2016) | popPK | 10 | [10.5414/CP202558](https://doi.org/10.5414/CP202558) | [27049057](https://pubmed.ncbi.nlm.nih.gov/27049057) | The paper describes a population PK model for glycopyrronium in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Marchiori_2026.pdf` | Marchiori J et al., Pharmacokinetics of Intramuscular and I…, Journal of veterinary pharm… (2026) | popPK | 10 | [10.1111/jvp.70061](https://doi.org/10.1111/jvp.70061) | [41742333](https://pubmed.ncbi.nlm.nih.gov/41742333) | The study reports quantitative non-compartmental pharmacokinetic parameters (clearance, volume of distribution, half-life, bioavailability) for glycopyrrolate in rabbits, with all numeric values explicitly present in the abstract. |
| `Rumpler_2014_2.pdf` | Rumpler MJ et al., The pharmacokinetics of glycopyrrolate…, Journal of veterinary pharm… (2014) | popPK | 10 | [10.1111/jvp.12085](https://doi.org/10.1111/jvp.12085) | [24325462](https://pubmed.ncbi.nlm.nih.gov/24325462) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution) for glycopyrrolate in horses. |
| `Penttilä_2001.pdf` | Penttilä J et al., Pharmacokinetic-pharmacodynamic model f…, European journal of clinica… (2001) | popPK | 8 | [10.1007/s002280100288](https://doi.org/10.1007/s002280100288) | [11417448](https://pubmed.ncbi.nlm.nih.gov/11417448) | The study reports a 3-compartment PK model for glycopyrrolate (glycopyrronium) in humans, but the specific numeric PK parameter values (CL, V, Q) are not listed in the provided text, only PK-PD effect parameters (EC50, t1/2ke0). |

<sub>queue written 2026-10-04T12:28:17.889389+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Demin_2016 | relevant | 10 | 2 | The paper describes a population PK model for glycopyrronium in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Kume_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor interactions in guinea pig trachealis and does not report pharmacokinetic parameters for glycopyrronium. |
| popPK | Mathioudakis_2026 | irrelevant | 0 | 0 | The paper is a clinical trial analysis of exacerbation rates in COPD patients and does not report any pharmacokinetic parameters for glycopyrronium. |
| popPK | Pariser_2021 | relevant | 9 | 4 | The paper reports a population PK model and NCA parameters for glycopyrronium, but specific model parameter estimates (CL, V, ka) are likely in the supplementary material, with only summary exposure metrics (Cmax, AUC) and half-life provided in the text. |
| popPK | Penttilä_2001 | relevant | 8 | 2 | The study reports a 3-compartment PK model for glycopyrrolate (glycopyrronium) in humans, but the specific numeric PK parameter values (CL, V, Q) are not listed in the provided text, only PK-PD effect parameters (EC50, t1/2ke0). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 12:28 UTC</sub>
