<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;pridopidine&quot;}]"></div>

# pridopidine

- **generic name:** pridopidine
- **ATC codes:** `N07XX26`
- **DrugBank:** [DB11947](https://go.drugbank.com/drugs/DB11947) · **PubChem:** [CID 9795739](https://pubchem.ncbi.nlm.nih.gov/compound/9795739)
- **molar mass:** 281.41 g/mol (C15H23NO2S) — DrugBank
- **groups:** investigational

## About

Pridopidine is an investigational sigma-1 receptor agonist being developed for Huntington's disease and amyotrophic lateral sclerosis. It is administered orally as a small molecule drug. It is in late-stage clinical development with some authorized products in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7242858](https://www.wikidata.org/wiki/Q7242858), [Wikipedia](https://en.wikipedia.org/wiki/Pridopidine?oldid=1383463077) (CC BY-SA 4.0), the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Grachev_2021_S1R_RO](drugs/drug_pridopidine/pd_Grachev_2021_S1R_RO.md) | Sigma-1 receptor occupancy ← pridopidine · direct sigmoid Emax (Hill) effect | — | Grachev ID et al., Sigma-1 and dopamine D2/D3 receptor occ…, European journal of nuclear… (2021) | [10.1007/s00259-020-05030-3](https://doi.org/10.1007/s00259-020-05030-3) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:48 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 4,293/147 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Audouard_2025 | irrelevant | 0 | 0 | The paper focuses on cell-based enzyme replacement therapy for metachromatic leukodystrophy in mice and does not mention pridopidine or its pharmacokinetics. |
| PGx | Audouard_2025 | not_relevant | 0 | 0 | The paper discusses encapsulated cell therapy for metachromatic leukodystrophy and does not mention pridopidine or any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Eddings_2019 | irrelevant | 0 | 0 | This is a mechanistic in-vitro study focusing on neuroprotection and receptor binding, reporting no pharmacokinetic parameters. |
| PGx | Eddings_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of pridopidine (sigma-1 receptor) for neuroprotection in Huntington's disease models, but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Gershoni_2025 | irrelevant | 0 | 0 | This is a review of pridopidine's S1R-mediated mechanism of action with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Grachev_2021 | irrelevant | 3 | 3 | PET receptor-occupancy study with only NCA PK descriptors (Cmax, AUC, tmax) mentioned; detailed PK values live in Supplementary Table S1 not provided, and no CL/V/compartmental model for pridopidine is reported. |
| popPK | Maurice_2021 | irrelevant | 0 | 0 | The paper is a review of sigma-1 receptor ligands and pridopidine's mechanism of action, containing no original quantitative pharmacokinetic parameter values. |
| PGx | Maurice_2021 | not_relevant | 0 | 0 | The paper is a review discussing the bi-phasic dose-response of sigma-1 receptor ligands like pridopidine and does not report any pharmacogenomic effects or genetic variants. |
| popPK | Waters_2014 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of behavioral and neurochemical effects (locomotor activity, dopamine levels, gene expression) and contains no quantitative pharmacokinetic parameters. |
| PGx | Waters_2014 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions in rats and does not report any pharmacogenomic effects on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpridopidine%5D&body=Drug%3A%20pridopidine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pridopidine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
