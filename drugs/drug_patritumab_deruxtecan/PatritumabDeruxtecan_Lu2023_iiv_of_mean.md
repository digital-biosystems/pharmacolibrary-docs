<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;patritumab deruxtecan&quot;,&quot;href&quot;:&quot;drugs/drug_patritumab_deruxtecan/&quot;},{&quot;label&quot;:&quot;Lu_2023 \u00b7 iiv_of_mean&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# patritumab deruxtecan — `PatritumabDeruxtecan_Lu2023_iiv_of_mean`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has patritumab_deruxtecan, the second reading patritumab deruxtecan; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Lu Y et al., Population Pharmacokinetics of Patritum…, Journal of clinical pharmac… (2023)
  ·  DOI: [10.1002/jcph.2137](https://doi.org/10.1002/jcph.2137)

<div class="pk-model-meta" hidden drug="patritumab deruxtecan" model-id="PatritumabDeruxtecan_Lu2023_iiv_of_mean" status="rejected" stale="false" population="patients with HER3-expressing solid tumors" measured-compound="patritumab_deruxtecan" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLlin, L/d' routed out of structural estimates ('IIV of Mean, %')
- table section iiv: 'CLlin, L/d' routed out of structural estimates ('IIV of RSE, %')
- table section iiv: 'Vc, L' routed out of structural estimates ('IIV of Mean, %')
- table section iiv: 'Vc, L' routed out of structural estimates ('IIV of RSE, %')
- table section iiv: 'Krel, 1/h' routed out of structural estimates ('IIV of Mean, %')
- table section iiv: 'Krel, 1/h' routed out of structural estimates ('IIV of RSE, %')
- table section iiv: 'CLDXd, L/h' routed out of structural estimates ('IIV of Mean, %')
- table section iiv: 'CLDXd, L/h' routed out of structural estimates ('IIV of RSE, %')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=patritumab_deruxtecan
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'iiv of mean, %' subgroup of Lu_2023 (paper reports 2 populations: iiv of mean, %, mean)
- row roles: 2 per-group rows of patritumab_deruxtecan covariate_effect but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of deruxtecan covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 20 linked by role; re-tagged parent→deruxtecan ×24
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell jcph2137-tbl-0002:row1:col3 = '0.301 to 0.384'
- unparsed cell jcph2137-tbl-0002:row2:col3 = '2.893 to 2.994'
- unparsed cell jcph2137-tbl-0002:row3:col3 = '3660.2 to 5044.2'
- unparsed cell jcph2137-tbl-0002:row4:col3 = '357.4 to 794.5'
- unparsed cell jcph2137-tbl-0002:row5:col3 = '0.402 to 0.484'
- unparsed cell jcph2137-tbl-0002:row6:col3 = '4.949 to 5.788'
- unparsed cell jcph2137-tbl-0002:row7:col3 = '0.663 to 1.159'
- unparsed cell jcph2137-tbl-0002:row8:col3 = '0.585 to 0.723'
- unparsed cell jcph2137-tbl-0002:row9:col3 = '−1.152 to −0.439'
- unparsed cell jcph2137-tbl-0002:row10:col3 = '0.769 to 0.961'
- unparsed cell jcph2137-tbl-0002:row11:col3 = '0.733 to 0.889'
- unparsed cell Lu_2023_table_3:row0:col3 = '0.029 to 0.031'
- unparsed cell Lu_2023_table_3:row1:col3 = '5.359 to 6.066'
- unparsed cell Lu_2023_table_3:row2:col3 = '0.628 to 0.668'
- unparsed cell Lu_2023_table_3:row3:col3 = '0.168 to 0.193'
- unparsed cell Lu_2023_table_3:row4:col3 = '−0.627 to −0.307'
- unparsed cell Lu_2023_table_3:row5:col3 = '0.609 to 0.803'
- unparsed cell Lu_2023_table_3:row6:col3 = '0.206 to 0.857'
- unparsed cell Lu_2023_table_3:row7:col3 = '0.161 to 0.226'
- unparsed cell Lu_2023_table_3:row8:col3 = '0.105 to 0.180'
- unparsed cell Lu_2023_table_3:row9:col3 = '0.287 to 0.434'
- unparsed cell Lu_2023_table_3:row10:col3 = '0.379 to 0.405'
- companion parameter table 3 transcribed (29 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (1/4 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['patritumab_deruxtecan', 'deruxtecan', 'metabolism']] | [['dxd-conjugated antibody', 'unconjugated dxd', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | patritumab_deruxtecan | patritumab deruxtecan | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | patritumab_deruxtecan | DXd-conjugated antibody | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_patritumab_deruxtecan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lu_2023` / `Lu_2023::iiv_of_mean`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 18:13 UTC</sub>
