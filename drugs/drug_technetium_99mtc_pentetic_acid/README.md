<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09C&quot;,&quot;href&quot;:&quot;atc/V09C.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) pentetic acid&quot;}]"></div>

# technetium (99mTc) pentetic acid

- **generic name:** technetium (99mTc) pentetic acid
- **ATC codes:** `V09CA01`, `V09EA01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Technetium-99m pentetic acid is a diagnostic radiopharmaceutical used in nuclear medicine imaging of the kidneys and of the lungs when inhaled. It is classified in the ATC system under diagnostic radiopharmaceuticals for the renal and respiratory systems and remains in diagnostic use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:10 | 1:59 | 0/0/0 | 0/0/0 | 0/0/0 | 14,815/4,453 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 597 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bienenstock_1988 | irrelevant | 0 | 0 | Technetium-99m DTPA is an aerosol probe, and no quantitative pharmacokinetic parameters are reported. |
| popPK | Bloom_1987 | irrelevant | 0 | 0 | 99mTc-DTPA is used as a lung-permeability tracer, with no quantitative pharmacokinetic parameters reported. |
| popPK | Cukuranovic_2005 | irrelevant | 0 | 0 | The reported 99mTc-DTPA clearance values estimate kidney function, not the drug’s pharmacokinetic disposition. |
| popPK | Cuocolo_1989 | irrelevant | 1 | 1 | Human study reports GFR responses to [99mTc]DTPA, not its pharmacokinetic disposition parameters. |
| popPK | Dewit_1990 | irrelevant | 0 | 0 | 99mTc-DTPA is used as a scintigraphic endpoint, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Gellert_1985 | irrelevant | 1 | 0 | Technetium-99m DTPA is used as a diagnostic permeability tracer, and no numeric clearance half-times are provided. |
| popPK | Isawa_1995 | irrelevant | 0 | 0 | This review discusses diagnostic pulmonary imaging but reports no quantitative disposition parameters for technetium-99m pentetic acid. |
| popPK | Jandeleit-Dahm_1998 | irrelevant | 0 | 0 | Technetium-99m-DTPA is only used to measure glomerular filtration, with no pharmacokinetic parameters reported for it. |
| popPK | Jefferies_1993 | irrelevant | 1 | 8 | Tc-99m-DTPA is used as a pulmonary-permeability tracer, though numeric clearance-rate values are reported. |
| popPK | Jones_1987 | irrelevant | 1 | 0 | 99mTc-DTPA is only mentioned as a renal-function measure, with no drug disposition parameters or numeric values. |
| popPK | Kleinert_2005 | irrelevant | 0 | 0 | This is a review of GFR measurement, with 99mTc-DTPA mentioned only as a tracer and no quantitative pharmacokinetic values reported. |
| popPK | Mason_1987 | irrelevant | 1 | 0 | This is a human radioaerosol diagnostic clearance test, and no numeric disposition parameter values are provided. |
| popPK | Morrison_2006 | irrelevant | 1 | 0 | 99mTc-DTPA is used as a diagnostic tracer and only qualitative lung-clearance results are reported, with no numeric PK parameters. |
| popPK | Todisco_1988 | irrelevant | 1 | 1 | Reports lung-clearance half-times as a permeability index, not quantitative pharmacokinetic disposition parameters. |
| popPK | Tägil_2000 | irrelevant | 2 | 0 | This is a diagnostic ventilation-scintigraphy study; it mentions lung clearance but provides no numeric PK values. |
| popPK | Waller_1991 | irrelevant | 1 | 0 | Technetium-99m DTPA is used as a GFR measurement probe, with no numeric pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
