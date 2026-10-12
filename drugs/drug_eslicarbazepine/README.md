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

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

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
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Sunkaraneni_2018_2_reference](drugs/drug_eslicarbazepine/Eslicarbazepine_Sunkaraneni2018v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+2 cov.) | Sunkaraneni S et al., Modeling and simulations to support dos…, Journal of pharmacokinetics… (2018) | [10.1007/s10928-018-9596-7](https://doi.org/10.1007/s10928-018-9596-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Falcão_2012_reference](drugs/drug_eslicarbazepine/Eslicarbazepine_Falco2012_reference.md) | — | parent + metabolite (no model) | 0 | Falcão A et al., Pharmacokinetics, drug interactions and…, CNS drugs (2012) | [10.2165/11596290-000000000-00000](https://doi.org/10.2165/11596290-000000000-00000) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Sunkaraneni_2018_Na](drugs/drug_eslicarbazepine/pd_Sunkaraneni_2018_Na.md) | serum sodium level ← eslicarbazepine · direct linear effect | — | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sunkaraneni_2018_probability_of_seizure_freedom](drugs/drug_eslicarbazepine/pd_Sunkaraneni_2018_probability_of_seizure_freedom.md) | probability of seizure freedom ← eslicarbazepine · categorical (graded) response model | — | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sunkaraneni_2018_time_to_first_occurrence_of_dizziness](drugs/drug_eslicarbazepine/pd_Sunkaraneni_2018_time_to_first_occurrence_of_dizziness.md) | time to first occurrence of dizziness ← eslicarbazepine · time-to-event model | — | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sunkaraneni_2018_time_to_first_occurrence_of_headache](drugs/drug_eslicarbazepine/pd_Sunkaraneni_2018_time_to_first_occurrence_of_headache.md) | time to first occurrence of headache ← eslicarbazepine · time-to-event model | — | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sunkaraneni_2018_time_to_first_occurrence_of_nausea](drugs/drug_eslicarbazepine/pd_Sunkaraneni_2018_time_to_first_occurrence_of_nausea.md) | time to first occurrence of nausea ← eslicarbazepine · time-to-event model | — | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sunkaraneni_2018_time_to_study_exit](drugs/drug_eslicarbazepine/pd_Sunkaraneni_2018_time_to_study_exit.md) | time to study exit ← eslicarbazepine · time-to-event model | — | Sunkaraneni S et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1086](https://doi.org/10.1002/jcph.1086) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
