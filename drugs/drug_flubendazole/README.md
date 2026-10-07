<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;flubendazole&quot;}]"></div>

# flubendazole

- **generic name:** flubendazole
- **ATC codes:** `P02CA05`
- **DrugBank:** [DB08974](https://go.drugbank.com/drugs/DB08974) · **PubChem:** [CID 35802](https://pubchem.ncbi.nlm.nih.gov/compound/35802)
- **molar mass:** 313.2832 g/mol (C16H12FN3O3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Flubendazole is an antinematodal drug (a benzimidazole anthelmintic) used to treat worm infections caused by roundworms (nematodes). It is an approved medicine and remains in use as an anthelmintic, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q241992](https://www.wikidata.org/wiki/Q241992) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:27 | 0:27 | 0/0/0 | 1/0/1 | 0/0/0 | 27,965/1,073 | ollama / glm-5.3-flash | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Dong_2025_Anthelmintic_efficacy_against_Gyrodactylus_kobayashii](drugs/drug_flubendazole/pd_Dong_2025_Anthelmintic_efficacy_against_Gyrodactylus_kobayas.md) | Anthelmintic efficacy against Gyrodactylus kobayashii ← flubendazole · inhibition effect | — | Dong J et al., Discovery of Potential Anthelmintic Age…, Journal of fish diseases (2025) | [10.1111/jfd.14102](https://doi.org/10.1111/jfd.14102) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Poulopoulou_2023_ED](drugs/drug_flubendazole/pd_Poulopoulou_2023_ED.md) | embryonation rate of Ascaridia galli eggs ← flubendazole · categorical (graded) response model | — | Poulopoulou I et al., In vitro evaluation of the effects of m…, Veterinary research communi… (2023) | [10.1007/s11259-022-09958-9](https://doi.org/10.1007/s11259-022-09958-9) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flubendazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TUBA1A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dong_2025 | irrelevant | 0 | 0 | Drug-discovery/efficacy study in goldfish; no PK disposition parameters for flubendazole are reported. |
| popPK | Ignagali_2024 | irrelevant | 0 | 0 | In vitro antifilarial study of plant extracts; flubendazole is only a positive control with IC50 values, no PK disposition parameters. |
| popPK | Kan_1998 | irrelevant | 2 | 1 | This is a residue-depletion study in eggs reporting residue concentrations, not PK disposition parameters (CL, V, half-life, or a PK model); no numeric PK values are present. |
| popPK | Oh_2006 | irrelevant | 0 | 0 | This is an aquatic ecotoxicity study (EC50, log Kow) with no pharmacokinetic disposition parameters for flubendazole. |
| popPK | Petersen_1997 | irrelevant | 0 | 0 | In-vitro efficacy assay of benzimidazoles against worms; no pharmacokinetic parameters for flubendazole. |
| popPK | Poulopoulou_2023 | irrelevant | 0 | 0 | In vitro embryonation-inhibition study where flubendazole is only a positive control; no PK parameters reported. |
| popPK | Tweats_2016 | irrelevant | 2 | 1 | This is a genotoxicity study; only plasma exposure (AUC) data for rats are mentioned, with no PK disposition parameters and numeric values not present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
