<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05A&quot;,&quot;href&quot;:&quot;atc/D05A.md&quot;},{&quot;label&quot;:&quot;fumaric acid&quot;}]"></div>

# fumaric acid

- **generic name:** fumaric acid
- **ATC codes:** `D05AX01`
- **DrugBank:** [DB01677](https://go.drugbank.com/drugs/DB01677) · **PubChem:** [CID 444972](https://pubchem.ncbi.nlm.nih.gov/compound/444972)
- **molar mass:** 116.0722 g/mol (C4H4O4) — DrugBank
- **groups:** investigational

## About

Fumaric acid is a fatty acid classified as an antipsoriatic medication for topical use. It is considered an investigational drug and is not widely used in current clinical practice.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q139857](https://www.wikidata.org/wiki/Q139857) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Liu_2026_latency_period_of_cold_pain_foot_retraction](drugs/drug_fumaric_acid/pd_Liu_2026_latency_period_of_cold_pain_foot_retraction.md) | latency period of cold pain foot retraction ← fumaric acid · model not identified | — | Liu S et al., Fumaric acid regulates morphine toleran…, Pakistan journal of pharmac… (2026) | [10.36721/PJPS.2026.39.8.233.1](https://doi.org/10.36721/PJPS.2026.39.8.233.1) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Liu_2026_threshold_for_mechanical_foot_retraction](drugs/drug_fumaric_acid/pd_Liu_2026_threshold_for_mechanical_foot_retraction.md) | threshold for mechanical foot retraction ← fumaric acid · model not identified | — | Liu S et al., Fumaric acid regulates morphine toleran…, Pakistan journal of pharmac… (2026) | [10.36721/PJPS.2026.39.8.233.1](https://doi.org/10.36721/PJPS.2026.39.8.233.1) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:50 | 0:03 | 0/0/0 | 2/0/0 | 0/0/0 | 4,501/182 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kim_2016 | irrelevant | 0 | 0 | The paper is a study on the nematicidal activity of fungal metabolites (specifically kojic acid) and only mentions fumaric acid as a minor organic acid component, containing no pharmacokinetic data. |
| PGx | Kim_2016 | not_relevant | 0 | 0 | The paper studies the nematicidal activity of organic acids (including fumaric acid) produced by a fungus, containing no information on human pharmacogenomics, PK, or PD parameters. |
| popPK | Kozan_2026 | irrelevant | 0 | 0 | The paper is an in vitro anthelmintic study where fumaric acid is only identified as a compound in an extract, with no pharmacokinetic parameters reported. |
| PGx | Kozan_2026 | not_relevant | 0 | 0 | The study evaluates the in vitro anthelmintic activity of Avena sativa extracts against parasites and does not involve pharmacogenomics or human PK/PD parameters for fumaric acid. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | This is a mouse pharmacology study reporting efficacy EC50 values, not fumaric-acid pharmacokinetic parameters. |
| popPK | Nazir_2022 | irrelevant | 0 | 0 | The paper reports fumaric acid as a constituent of a fungal extract but contains no pharmacokinetic parameters or disposition data. |
| PGx | Nazir_2022 | not_relevant | 0 | 0 | The paper studies the bioactive potential of a fungal endophyte producing fumaric acid, not the pharmacogenomics of fumaric acid as a drug. |
| popPK | Ordronneau_1992 | irrelevant | 0 | 0 | The paper is an immunology study characterizing an antiserum, and fumaric acid is only mentioned as a compound with minor cross-reactivity in an immunoassay, with no pharmacokinetic data reported. |
| PGx | Ordronneau_1992 | not_relevant | 0 | 0 | The paper characterizes an antiserum for NMDA-like compounds and mentions fumaric acid only as a control showing minor cross-reactivity in an immunoassay, not as a drug subject to pharmacogenomic analysis. |
| popPK | Petrović_2025 | irrelevant | 0 | 0 | The paper is a phytochemical and nutritional analysis of Lunaria annua seeds where fumaric acid is only detected as a trace organic acid component, with no pharmacokinetic studies performed. |
| PGx | Petrović_2025 | not_relevant | 0 | 0 | The paper describes the nutritional and bioactive properties of a plant extract and is unrelated to fumaric acid pharmacogenomics. |
| popPK | Salehi_2021 | irrelevant | 0 | 0 | The paper focuses on a mass transport model for drug dissolution using fumaric acid as a formulation excipient (pH modifier), not as a subject drug for pharmacokinetic analysis, and contains no PK parameter values for fumaric acid itself. |
| PGx | Salehi_2021 | not_relevant | 0 | 0 | The study focuses on formulating fumaric acid as a pH modifier to improve the dissolution of other drugs, not on the pharmacogenomics of fumaric acid itself. |
| popPK | Shimizu_2023 | irrelevant | 1 | 0 | The study reports ensitrelvir pharmacokinetics, not quantitative disposition parameters for fumaric acid itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfumaric_acid%5D&body=Drug%3A%20fumaric_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fumaric_acid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
