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
| <span class="pk-badge pk-badge--green">extracted</span> | [Grachev_2021_S1R_RO](drugs/drug_pridopidine/pd_Grachev_2021_S1R_RO.md) | Sigma-1 receptor occupancy ← pridopidine · direct sigmoid Emax (Hill) effect | — | Grachev ID et al., Sigma-1 and dopamine D2/D3 receptor occ…, European journal of nuclear… (2021) | [10.1007/s00259-020-05030-3](https://doi.org/10.1007/s00259-020-05030-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.50).">in vitro</span> | [Eddings_2019_neuronal_protection_against_mutant_Huntingtin_toxicity](drugs/drug_pridopidine/pd_Eddings_2019_neuronal_protection_against_mutant_Huntingtin_t.md) | neuronal protection against mutant Huntingtin toxicity ← pridopidine · stimulation effect | — | Eddings CR et al., Pridopidine protects neurons from mutan…, Neurobiology of disease (2019) | [10.1016/j.nbd.2019.05.009](https://doi.org/10.1016/j.nbd.2019.05.009) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pridopidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DRD2 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
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
