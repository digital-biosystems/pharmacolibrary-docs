<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;eslicarbazepine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eslicarbazepine_Sunkaraneni2018v2_reference&quot;,&quot;label&quot;:&quot;Sunkaraneni_2018_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# eslicarbazepine

- **generic name:** eslicarbazepine
- **ATC codes:** `N03AF04`
- **DrugBank:** [DB14575](https://go.drugbank.com/drugs/DB14575) · **PubChem:** not captured
- **molar mass:** 254.2839 g/mol (C15H14N2O2) — DrugBank
- **groups:** approved

## About

Eslicarbazepine is an antiepileptic drug used to treat epilepsy. It is an approved medicine and is used in clinical practice for seizure control.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27077226](https://www.wikidata.org/wiki/Q27077226) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| eslicarbazepine | parent | 254.284 | C15H14N2O2 | DrugBank | — | Sunkaraneni_2018_2 |
| eslicarbazepine acetate | metabolite | 296.326 | C17H16N2O3 | PubChem | [179344](https://pubchem.ncbi.nlm.nih.gov/compound/179344) | Sunkaraneni_2018_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:39 | 1:05 | 1/1/0 | 1/0/0 | 0/0/0 | 57,343/14,602 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Sunkaraneni_2018_2_reference](drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+2 cov.) | Sunkaraneni S et al., Modeling and simulations to support dos…, Journal of pharmacokinetics… (2018) | [10.1007/s10928-018-9596-7](https://doi.org/10.1007/s10928-018-9596-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Falcão_2012_reference](drugs/drug_eslicarbazepine/Eslicarbazepine_Falco2012_reference.md) | — | parent + metabolite (no model) | 0 | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Sunkaraneni_2018_Na](drugs/drug_eslicarbazepine/pd_Sunkaraneni_2018_Na.md) | serum sodium level ← eslicarbazepine · direct linear effect | — | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sunkaraneni_2018_probability_of_seizure_freedom](drugs/drug_eslicarbazepine/pd_Sunkaraneni_2018_probability_of_seizure_freedom.md) | probability of seizure freedom ← eslicarbazepine · categorical (graded) response model | — | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sunkaraneni_2018_time_to_first_occurrence_of_dizziness](drugs/drug_eslicarbazepine/pd_Sunkaraneni_2018_time_to_first_occurrence_of_dizziness.md) | time to first occurrence of dizziness ← eslicarbazepine · time-to-event model | — | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sunkaraneni_2018_time_to_first_occurrence_of_headache](drugs/drug_eslicarbazepine/pd_Sunkaraneni_2018_time_to_first_occurrence_of_headache.md) | time to first occurrence of headache ← eslicarbazepine · time-to-event model | — | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sunkaraneni_2018_time_to_first_occurrence_of_nausea](drugs/drug_eslicarbazepine/pd_Sunkaraneni_2018_time_to_first_occurrence_of_nausea.md) | time to first occurrence of nausea ← eslicarbazepine · time-to-event model | — | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sunkaraneni_2018_time_to_study_exit](drugs/drug_eslicarbazepine/pd_Sunkaraneni_2018_time_to_study_exit.md) | time to study exit ← eslicarbazepine · time-to-event model | — | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eslicarbazepine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` inhibitor, `CYP3A4` inducer, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `UGT1A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: P2RX4 (unknown), SCN11A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Falcão_2012.pdf` | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | popPK | 10 | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) | [22171585](https://pubmed.ncbi.nlm.nih.gov/22171585) | The paper reports a population PK model for eslicarbazepine (the active metabolite) with specific numeric values for clearance (CL/F = 2.36 L/h), variability (44%), and a structural equation provided directly in the text. |
| `Sunkaraneni_2018.pdf` | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | popPK | 9 | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) | [29528499](https://pubmed.ncbi.nlm.nih.gov/29528499) | The study reports a population PK model for eslicarbazepine with quantitative descriptors (CL, V related to weight/sex), but specific numeric parameter estimates (e.g., typical CL value, RSV) are not present in the provided abstract text. |
| `Sunkaraneni_2018_3.pdf` | Sunkaraneni S et al., Population Pharmacokinetic Evaluation a…, Clinical pharmacology in dr… (2018) | popPK | 5 | [10.1002/cpdd.382](https://doi.org/10.1002/cpdd.382) | [28881418](https://pubmed.ncbi.nlm.nih.gov/28881418) | The paper describes a population PK model and missed-dose simulations but the provided evidence contains no quantitative PK parameter values (CL, V, etc.), only qualitative simulation outcomes. |

<sub>queue written 2026-10-07T07:38:33.310564+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Banach_2015 | irrelevant | 2 | 0 | The paper is a literature review/overview of eslicarbazepine without original quantitative PK parameter values (CL, V, etc.) presented in the text. |
| popPK | Gidal_2018 | relevant | 10 | 2 | The paper describes a population PK model for eslicarbazepine, but the specific numeric parameter estimates (CL, V, ka) are located in Appendix S1 which is not provided in the evidence. |
| popPK | Levy-Cooperman_2016 | irrelevant | 2 | 0 | The study focuses on abuse liability and subjective effects; while it mentions PK parameters were comparable to previous studies, no specific numeric disposition parameters (CL, V, etc.) for eslicarbazepine are provided in the evidence. |
| popPK | Liu_2026 | relevant | 4 | 0 | The study is a clinical trial simulation using validated population PK models for eslicarbazepine (human), but the evidence provided contains no specific numeric PK parameter values (CL, V, etc.) for eslicarbazepine. |
| popPK | Monni_2022 | irrelevant | 1 | 0 | The study focuses on anti-epileptic efficacy and electrophysiological effects in a mouse model, reporting no quantitative pharmacokinetic parameters (CL, V, etc.). |
| popPK | Sunkaraneni_2017 | irrelevant | 4 | 0 | The study is a simulation using a pre-existing population PK model to predict efficacy, and it does not report the underlying quantitative PK parameter values (CL, V, etc.) for eslicarbazepine in the provided text. |
| popPK | Sunkaraneni_2018 | relevant | 9 | 3 | The study reports a population PK model for eslicarbazepine with quantitative descriptors (CL, V related to weight/sex), but specific numeric parameter estimates (e.g., typical CL value, RSV) are not present in the provided abstract text. |
| popPK | Sunkaraneni_2018_3 | irrelevant | 5 | 0 | The paper describes a population PK model and missed-dose simulations but the provided evidence contains no quantitative PK parameter values (CL, V, etc.), only qualitative simulation outcomes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:38 UTC</sub>
