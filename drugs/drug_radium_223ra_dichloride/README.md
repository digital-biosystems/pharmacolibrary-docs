<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;radium (223Ra) dichloride&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Radium223raDichloride_Hllriegl2021_reference&quot;,&quot;label&quot;:&quot;H\u00f6llriegl_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_radium_223ra_dichloride/Radium223raDichloride_Hllriegl2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# radium (223Ra) dichloride

- **generic name:** radium (223Ra) dichloride
- **ATC codes:** `V10XX03`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-25 06:52 | 9:56 | 0/1/0 | 0/0/0 | 0/0/0 | 179,719/19,591 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.167). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Höllriegl_2021_reference](drugs/drug_radium_223ra_dichloride/Radium223raDichloride_Hllriegl2021_reference.md) | Höllriegl V et al., Radiopharmacokinetic modelling and radi…, EJNMMI physics (2021) | [10.1186/s40658-021-00388-1](https://doi.org/10.1186/s40658-021-00388-1) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Deshayes_2017 | not_relevant | 1 | 0 | The text is a review summarizing mechanism of action and clinical trials, but it does not report specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response curves for radium-223 dichloride. |
| PGx | Langsteger_2016 | not_relevant | 0 | 0 | The paper is a table of contents for a nuclear medicine symposium and does not report pharmacogenomic effects on the PK/PD of radium-223. |
| PD | Nilsson_2015 | not_relevant | 1 | 0 | The paper is a qualitative review of safety and efficacy data without reporting specific numeric pharmacodynamic parameters or exposure-response models. |
| PD | Sindhu_2022 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanism of action and clinical efficacy of radium-223, containing no numeric PD parameters, exposure-response data, or dose-effect curves. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-25 06:45 UTC</sub>
