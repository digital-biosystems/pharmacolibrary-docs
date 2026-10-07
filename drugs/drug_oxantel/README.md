<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;oxantel&quot;}]"></div>

# oxantel

- **generic name:** oxantel
- **ATC codes:** `P02CC02`
- **DrugBank:** [DB13670](https://go.drugbank.com/drugs/DB13670) · **PubChem:** not captured
- **molar mass:** 216.284 g/mol (C13H16N2O) — DrugBank
- **groups:** investigational

## About

Oxantel is an antinematodal drug used against trichuriasis, a whipworm infection. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1227207](https://www.wikidata.org/wiki/Q1227207) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:01 | 0:46 | 0/0/0 | 2/1/1 | 0/0/0 | 104,899/2,548 | ollama / glm-5.3-flash | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bartos_2009_Peak_current](drugs/drug_oxantel/pd_Bartos_2009_Peak_current.md) | Macroscopic peak current of α7-5HT3A receptors ← oxantel · direct sigmoid Emax (Hill) effect | — | Bartos M et al., Glutamine 57 at the complementary bindi…, The Journal of biological c… (2009) | [10.1074/jbc.M109.013797](https://doi.org/10.1074/jbc.M109.013797) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schärer_2023_hatching](drugs/drug_oxantel/pd_Sch_rer_2023_hatching.md) | T. muris egg hatching (normalized activity %) ← oxantel pamoate · direct sigmoid Emax (Hill) effect | — | Schärer A et al., Trichuris muris egg-hatching assay for…, International journal for p… (2023) | [10.1016/j.ijpddr.2023.10.001](https://doi.org/10.1016/j.ijpddr.2023.10.001) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bavo_2025_Normalized_ACh_evoked_peak_current_at_3_2_nAChR_in_presence_of_10_M_oxantel](drugs/drug_oxantel/pd_Bavo_2025_Normalized_ACh_evoked_peak_current_at_3_2_nAChR_in.md) | Normalized ACh-evoked peak current at α3β2 nAChR in presence of 10 μM oxantel ← acetylcholine (ACh) in coapplication with 10 μM oxantel · direct sigmoid Emax (Hill) effect | — | Bavo F et al., Structural Determinants of Oxantel Anal…, ACS omega (2025) | [10.1021/acsomega.4c11196](https://doi.org/10.1021/acsomega.4c11196) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bavo_2025_Normalized_ACh_evoked_peak_current_at_4_2_nAChR_in_presence_of_10_M_oxantel](drugs/drug_oxantel/pd_Bavo_2025_Normalized_ACh_evoked_peak_current_at_4_2_nAChR_in.md) | Normalized ACh-evoked peak current at α4β2 nAChR in presence of 10 μM oxantel ← acetylcholine (ACh) in coapplication with 10 μM oxantel · direct sigmoid Emax (Hill) effect | — | Bavo F et al., Structural Determinants of Oxantel Anal…, ACS omega (2025) | [10.1021/acsomega.4c11196](https://doi.org/10.1021/acsomega.4c11196) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Brussee_2021_CR](drugs/drug_oxantel/pd_Brussee_2021_CR.md) | cure rate (probability of being cured of hookworm infection) ← dADT (tribendimidine primary metabolite) · direct Emax (saturable) effect | — | Brussee JM et al., Pharmacometric Analysis of Tribendimidi…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.00714-20](https://doi.org/10.1128/AAC.00714-20) |

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
| popPK | Bartos_2009 | irrelevant | 0 | 0 | This is an in vitro electrophysiology/receptor pharmacology study of oxantel on nicotinic receptors, with no pharmacokinetic disposition parameters (CL, V, ka, half-life, PK model). |
| popPK | Bavo_2025 | irrelevant | 0 | 0 | This is a receptor pharmacology/SAR study of oxantel analogs on nAChRs in Xenopus oocytes; no PK disposition parameters (CL, V, ka, half-life, population-PK model) are reported. |
| popPK | Brussee_2021 | irrelevant | 2 | 1 | Oxantel is only a co-administered drug; the population PK model covers tribendimidine's metabolites (dADT/adADT), not oxantel, and no oxantel parameter values appear. |
| popPK | Easland_2023 | irrelevant | 0 | 0 | In vitro egg-hatching assay only; oxantel is a test compound with EC50 &gt;100 µM, no PK parameters. |
| popPK | Kaji_2020 | irrelevant | 0 | 0 | This is an electrophysiology/pharmacodynamics study of hookworm nicotinic acetylcholine receptors in Xenopus oocytes; oxantel is only a test ligand, with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Schärer_2023 | irrelevant | 0 | 0 | In vitro egg-hatching assay with oxantel only as a test compound (EC50 potency); no pharmacokinetic disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
