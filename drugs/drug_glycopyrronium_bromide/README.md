<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;glycopyrronium bromide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;GlycopyrroniumBromide_Bartels2013_model_based&quot;,&quot;label&quot;:&quot;Bartels_2013_model_based&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium_bromide/GlycopyrroniumBromide_Bartels2013_model_based.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;GlycopyrroniumBromide_Bartels2013_noncompartmental&quot;,&quot;label&quot;:&quot;Bartels_2013_noncompartmental&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium_bromide/GlycopyrroniumBromide_Bartels2013_noncompartmental.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;GlycopyrroniumBromide_Bartels2013_population_mean_cv&quot;,&quot;label&quot;:&quot;Bartels_2013_population_mean_cv&quot;,&quot;href&quot;:&quot;drugs/drug_glycopyrronium_bromide/GlycopyrroniumBromide_Bartels2013_population_mean_cv.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# glycopyrronium bromide

- **generic name:** glycopyrronium bromide
- **ATC codes:** `A03AB02`, `R03BB06`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 09:02 | 1:20 | 1/0/2 | 0/0/0 | 0/0/0 | 60,516/1,106 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.455). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Bartels_2013_model_based](drugs/drug_glycopyrronium_bromide/GlycopyrroniumBromide_Bartels2013_model_based.md) | Bartels C et al., Determination of the pharmacokinetics o…, British journal of clinical… (2013) | [10.1111/bcp.12118](https://doi.org/10.1111/bcp.12118) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.545). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Bartels_2013_noncompartmental](drugs/drug_glycopyrronium_bromide/GlycopyrroniumBromide_Bartels2013_noncompartmental.md) | Bartels C et al., Determination of the pharmacokinetics o…, British journal of clinical… (2013) | [10.1111/bcp.12118](https://doi.org/10.1111/bcp.12118) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.818). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Bartels_2013_population_mean_cv](drugs/drug_glycopyrronium_bromide/GlycopyrroniumBromide_Bartels2013_population_mean_cv.md) | Bartels C et al., Determination of the pharmacokinetics o…, British journal of clinical… (2013) | [10.1111/bcp.12118](https://doi.org/10.1111/bcp.12118) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2025 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamic effects of scopolamine, with glycopyrronium bromide serving only as a comparator agent, and no quantitative PK parameters for glycopyrronium are reported. |
| PD | Chen_2025 | not_relevant | 4 | 2 | The paper reports a PK/PD model for scopolamine's effect on HRV, but glycopyrronium bromide was used only as a control and no PD parameters or concentration-effect relationship are reported for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 09:01 UTC</sub>
