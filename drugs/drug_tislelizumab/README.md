<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tislelizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tislelizumab_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tislelizumab

- **generic name:** tislelizumab
- **ATC codes:** `L01FF09`
- **DrugBank:** [DB14922](https://go.drugbank.com/drugs/DB14922) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tislelizumab is a monoclonal antibody that blocks PD-1 and is used to treat several cancers, including esophageal, lung, nasopharyngeal, and stomach cancers. It is an approved medicine, with one product currently authorised in the European Union, though another EU product has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28209583](https://www.wikidata.org/wiki/Q28209583) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:15 | 5:19 | 1/2/2 | 0/0/0 | 0/0/0 | 149,126/6,487 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 0/5 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Kim_2025_reference](drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kim TM, Decoding the EPAR scientific assessment…, Translational and clinical… (2025) | [10.12793/tcp.2025.33.e17](https://doi.org/10.12793/tcp.2025.33.e17) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Yu_2025_cycle_1](drugs/drug_tislelizumab/Tislelizumab_Yu2025_cycle_1.md) | — | 1-compartment (no model) | 4 | Yu T et al., Clinical Pharmacology Overview of Tisle…, Clinical and translational… (2025) | [10.1111/cts.70221](https://doi.org/10.1111/cts.70221) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Yu_2025_cycle_5](drugs/drug_tislelizumab/Tislelizumab_Yu2025_cycle_5.md) | — | 1-compartment (no model) | 4 | Yu T et al., Clinical Pharmacology Overview of Tisle…, Clinical and translational… (2025) | [10.1111/cts.70221](https://doi.org/10.1111/cts.70221) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Budha_2023_reference](drugs/drug_tislelizumab/Tislelizumab_Budha2023_reference.md) | — | 2-compartment (no model) | 4 | Budha N et al., Model-based population pharmacokinetic…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12880](https://doi.org/10.1002/psp4.12880) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2026_reference](drugs/drug_tislelizumab/Tislelizumab_Liu2026_reference.md) | — | 2-compartment (no model) | 7 (+6 cov.) | Liu X et al., Model-Informed Development of a Subcuta…, Clinical and translational… (2026) | [10.1111/cts.70649](https://doi.org/10.1111/cts.70649) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tislelizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PDCD1 (antibody), PDCD1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Rizwan_2025 | relevant | 8 | 2 | The paper uses a population PK model for tislelizumab to simulate alternative dosing regimens, but the specific numeric parameter values (CL, V, etc.) are in supplementary tables or figures not provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:11 UTC</sub>
