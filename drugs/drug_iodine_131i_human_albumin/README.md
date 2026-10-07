<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09X&quot;,&quot;href&quot;:&quot;atc/V09X.md&quot;},{&quot;label&quot;:&quot;iodine (131I) human albumin&quot;}]"></div>

# iodine (131I) human albumin

- **generic name:** iodine (131I) human albumin
- **ATC codes:** `V09XA03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Iodine-131I human albumin was a radiolabelled albumin preparation used as a diagnostic radiopharmaceutical for imaging and blood-volume measurements. It is no longer in clinical use, having been abandoned as safer diagnostic agents became available.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:28 | 1:11 | 0/0/0 | 0/0/0 | 0/0/0 | 14,170/992 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boulanger_1999 | irrelevant | 0 | 0 | The study uses iodine-131 labeled human serum albumin (131I-HSA) as a tracer to measure lymphatic flow in sheep, not to characterize the pharmacokinetics of the drug iodine_131i_human_albumin. |
| popPK | Boulton_1997 | irrelevant | 0 | 0 | The study uses iodine-131 labeled human serum albumin as a diagnostic tracer to measure lymphatic drainage in sheep, not to characterize the pharmacokinetics of the drug itself. |
| popPK | Boulton_1998 | irrelevant | 0 | 0 | The study uses 131I-HSA as a tracer to measure CSF absorption in sheep, not to characterize the pharmacokinetics of the drug itself. |
| popPK | Lying-Tunell_1978 | irrelevant | 2 | 0 | The study reports a biologic half-time (BHT) for clearance from the basal cisterns (a diagnostic/CSF flow parameter) rather than standard systemic pharmacokinetic parameters (CL, V, Q) for the drug as a therapeutic agent, and no specific numeric values are provided in the evidence. |
| popPK | Láznícková_1987 | irrelevant | 1 | 0 | The study focuses on platinum cytostatics in rats, and iodine_131i_human_albumin is only mentioned as a comparator for half-life without providing its own PK parameters. |
| popPK | Pourafshar_2024 | irrelevant | 1 | 0 | The paper is a review of methods for assessing volume overload in heart failure; while it mentions the use of [131I]-human serum albumin for blood volume measurement, it does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for the drug itself. |
| popPK | Sato_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mitomycin C-dextran conjugates, using 131I-labeled human serum albumin only as a vascular reference substance (comparator), not as the subject drug. |
| popPK | Sibbald_1981 | irrelevant | 2 | 5 | The study uses iodine-131 human serum albumin as a diagnostic tracer to measure alveolo-capillary permeability, not to characterize the drug's systemic pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Sun_2000 | irrelevant | 0 | 0 | The study uses 125I-HSA and 131I-HSA as tracers to assess intestinal barrier function in rats, not to characterize the pharmacokinetic parameters (CL, V, etc.) of iodine_131i_human_albumin as a therapeutic drug. |
| popPK | Taylor_1980 | irrelevant | 2 | 0 | The study uses iodine-131-labeled human serum albumin as a diagnostic tracer to assess gastric mucosal permeability in piglets, rather than reporting pharmacokinetic disposition parameters (CL, V, t1/2) for the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
