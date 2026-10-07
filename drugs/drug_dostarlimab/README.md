<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;dostarlimab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dostarlimab_Kuchimanchi2025_reference&quot;,&quot;label&quot;:&quot;Kuchimanchi_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dostarlimab_Melhem2022_mean&quot;,&quot;label&quot;:&quot;Melhem_2022_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dostarlimab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dostarlimab/Dostarlimab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dostarlimab

- **generic name:** dostarlimab
- **ATC codes:** `L01FF07`
- **DrugBank:** [DB15627](https://go.drugbank.com/drugs/DB15627) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Dostarlimab is a monoclonal antibody drug used to treat endometrial cancer. It is an approved PD-1 inhibitor and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q85757472](https://www.wikidata.org/wiki/Q85757472) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:16 | 8:12 | 3/1/0 | 0/0/2 | 0/0/0 | 153,187/40,146 | openai / gpt-6-luna | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kuchimanchi_2025_reference](drugs/drug_dostarlimab/Dostarlimab_Kuchimanchi2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 (+3 cov.) | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Melhem_2022_mean](drugs/drug_dostarlimab/Dostarlimab_Melhem2022_mean.md) | ▶ model + simulator | 1-compartment, IV | 5 | Melhem M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2022) | [10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Shang_2022_reference](drugs/drug_dostarlimab/Dostarlimab_Shang2022_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Shang J et al., Population pharmacokinetic models of an…, Frontiers in immunology (2022) | [10.3389/fimmu.2022.871372](https://doi.org/10.3389/fimmu.2022.871372) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Melhem_2022_estimate_b](drugs/drug_dostarlimab/Dostarlimab_Melhem2022_estimate_b.md) | — | 2-compartment (no model) | 5 (+3 cov.) | Melhem M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2022) | [10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kuchimanchi_2025_DOR](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_DOR.md) | Duration of response ← dostarlimab · time-to-event model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kuchimanchi_2025_PFS](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_PFS.md) | Progression-free survival ← dostarlimab · time-to-event model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kuchimanchi_2025_arthralgia](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_arthralgia.md) | arthralgia ← dostarlimab · categorical (graded) response model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kuchimanchi_2025_diarrhoea](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_diarrhoea.md) | diarrhoea ← dostarlimab · categorical (graded) response model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kuchimanchi_2025_fatigue](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_fatigue.md) | fatigue ← dostarlimab · categorical (graded) response model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kuchimanchi_2025_nausea](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_nausea.md) | nausea ← dostarlimab · categorical (graded) response model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Kuchimanchi_2025_rash](drugs/drug_dostarlimab/pd_Kuchimanchi_2025_rash.md) | rash ← dostarlimab · categorical (graded) response model | — | Kuchimanchi M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2025) | [10.1111/bcp.16325](https://doi.org/10.1111/bcp.16325) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Melhem_2022_ORR](drugs/drug_dostarlimab/pd_Melhem_2022_ORR.md) | overall response rate ← dostarlimab · categorical (graded) response model | — | Melhem M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2022) | [10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Melhem_2022_asthenia](drugs/drug_dostarlimab/pd_Melhem_2022_asthenia.md) | asthenia ← dostarlimab · categorical (graded) response model | — | Melhem M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2022) | [10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Melhem_2022_diarrhoea](drugs/drug_dostarlimab/pd_Melhem_2022_diarrhoea.md) | diarrhoea ← dostarlimab · categorical (graded) response model | — | Melhem M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2022) | [10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Melhem_2022_fatigue](drugs/drug_dostarlimab/pd_Melhem_2022_fatigue.md) | fatigue ← dostarlimab · categorical (graded) response model | — | Melhem M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2022) | [10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Melhem_2022_hypothyroidism](drugs/drug_dostarlimab/pd_Melhem_2022_hypothyroidism.md) | hypothyroidism ← dostarlimab · categorical (graded) response model | — | Melhem M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2022) | [10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Melhem_2022_nausea](drugs/drug_dostarlimab/pd_Melhem_2022_nausea.md) | nausea ← dostarlimab · categorical (graded) response model | — | Melhem M et al., Population pharmacokinetics and exposur…, British journal of clinical… (2022) | [10.1111/bcp.15339](https://doi.org/10.1111/bcp.15339) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dostarlimab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PDCD1 (antibody), PDCD1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 3  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kuchimanchi_2023 | irrelevant | 1 | 0 | This human concentration–QT analysis reports no quantitative dostarlimab disposition parameters. |
| popPK | Shang_2022 | irrelevant | 2 | 1 | This systematic review mentions a human dostarlimab PPK model, but dostarlimab-specific numeric parameter values are not present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:09 UTC</sub>
