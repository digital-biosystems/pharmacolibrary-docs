<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;teclistamab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Teclistamab_Miao2023_reference&quot;,&quot;label&quot;:&quot;Miao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# teclistamab

- **generic name:** teclistamab
- **ATC codes:** `L01FX24`
- **DrugBank:** [DB16655](https://go.drugbank.com/drugs/DB16655) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Teclistamab is a monoclonal antibody used to treat multiple myeloma. It is an approved anticancer medicine authorised in the European Union, though it also remains under investigation and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q113366205](https://www.wikidata.org/wiki/Q113366205) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:10 | 5:07 | 1/0/0 | 0/0/0 | 0/0/0 | 137,958/8,655 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Miao_2023_reference](drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Miao X et al., Population Pharmacokinetics and Exposur…, Targeted oncology (2023) | [10.1007/s11523-023-00989-z](https://doi.org/10.1007/s11523-023-00989-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=teclistamab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD3D (antibody), TNFRSF17 (antibody).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cardé_2026 | relevant | 8 | 2 | The paper uses a population PK model for teclistamab and reports simulated concentration values, but the specific quantitative disposition parameters (CL, V, Q, ka) are not listed in the text, only referenced as previously described or in supplementary material. |
| popPK | Girgis_2022 | relevant | 8 | 2 | The paper describes a 2-compartment PK model for teclistamab in humans and monkeys, but specific numeric parameter values (CL, V, Q) are not listed in the text, likely residing in figures or supplementary material. |
| popPK | Guo_2025 | relevant | 8 | 4 | The paper reports population PK modeling and simulation results for teclistamab, providing specific exposure metrics (Ctrough, AUC, Cmax) and simulation comparisons, but lacks explicit structural parameter estimates (CL, V, Q) in the provided text. |
| popPK | Martin_2024 | irrelevant | 0 | 0 | The paper reports health-related quality of life (HRQoL) and patient-reported outcomes, not pharmacokinetic parameters. |
| popPK | Pillarisetti_2020 | irrelevant | 0 | 0 | The paper reports in vitro and in vivo efficacy (cytotoxicity, EC50) but contains no pharmacokinetic parameters (CL, V, t1/2) for teclistamab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:06 UTC</sub>
