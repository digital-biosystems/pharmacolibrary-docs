<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;pridopidine&quot;}]"></div>

# pridopidine

- **generic name:** pridopidine
- **ATC codes:** `N07XX26`
- **DrugBank:** [DB11947](https://go.drugbank.com/drugs/DB11947) · **PubChem:** [CID 9795739](https://pubchem.ncbi.nlm.nih.gov/compound/9795739)
- **molar mass:** 281.41 g/mol (C15H23NO2S) — DrugBank
- **groups:** investigational

## About

Pridopidine is an investigational nervous-system drug studied for Huntington's disease. It is not an approved medicine; a marketing application in the European Union was withdrawn, so its use remains limited to research settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7242858](https://www.wikidata.org/wiki/Q7242858) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:19 | 0:23 | 0/0/0 | 1/1/0 | 0/0/0 | 36,435/1,810 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [Grachev_2021_S1R_RO](drugs/drug_pridopidine/pd_Grachev_2021_S1R_RO.md) | Sigma-1 receptor occupancy ← pridopidine · direct sigmoid Emax (Hill) effect | — | Grachev ID et al., Sigma-1 and dopamine D2/D3 receptor occ…, European journal of nuclear… (2021) | [10.1007/s00259-020-05030-3](https://doi.org/10.1007/s00259-020-05030-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">in vitro</span> | [Eddings_2019_neuronal_protection_against_mutant_Huntingtin_toxicity](drugs/drug_pridopidine/pd_Eddings_2019_neuronal_protection_against_mutant_Huntingtin_t.md) | neuronal protection against mutant Huntingtin toxicity ← pridopidine · stimulation effect | — | Eddings CR et al., Pridopidine protects neurons from mutan…, Neurobiology of disease (2019) | [10.1016/j.nbd.2019.05.009](https://doi.org/10.1016/j.nbd.2019.05.009) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pridopidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DRD2 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Audouard_2025 | irrelevant | 0 | 0 | This is an enzyme replacement/gene therapy study for metachromatic leukodystrophy with no pridopidine PK data or parameters. |
| popPK | Eddings_2019 | irrelevant | 0 | 0 | In-vitro mechanistic neuroprotection study with no PK parameters for pridopidine. |
| popPK | Gershoni_2025 | irrelevant | 0 | 0 | This is a review of pridopidine's S1R-mediated mechanism of action with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Grachev_2021 | irrelevant | 3 | 3 | PET receptor-occupancy study with only NCA PK descriptors (Cmax, AUC, tmax) mentioned; detailed PK values live in Supplementary Table S1 not provided, and no CL/V/compartmental model for pridopidine is reported. |
| popPK | Maurice_2021 | irrelevant | 0 | 0 | This is a review of sigma-1 receptor ligands with no quantitative PK parameters for pridopidine reported. |
| popPK | Waters_2014 | irrelevant | 0 | 0 | Pharmacodynamic drug-interaction study in rats with no PK disposition parameters for pridopidine reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
