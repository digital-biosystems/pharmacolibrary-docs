<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;tegafur&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/&quot;},{&quot;label&quot;:&quot;Kim_2017 \u00b7 population_mean_bsv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tegafur_Kim2017_multiple_dose&quot;,&quot;label&quot;:&quot;Kim_2017_multiple_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tegafur_Kim2017_single_dose&quot;,&quot;label&quot;:&quot;Kim_2017_single_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Kim2017_single_dose.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tegafur_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tegafur — `Tegafur_Kim2017_population_mean_bsv`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume; kfm and CL have no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (kfm and CL), so that value has no SI equivalent. Extracted — tegafur: kfm 0.122 BSV, CL 1.68 fold.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of estimated clearance of 5-fu (cl5fu) increase: this record has none, the second reading 1.68. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:32:18.461222+00:00) predates the upstream re-run (2026-10-07 17:20:04.806217+00:00). Current validate status: `rejected`.

## Citation
Kim TH et al., Effect of Sipjeondaebo-Tang on the Phar…, Molecules (Basel, Switzerla… (2017)
  ·  DOI: [10.3390/molecules22091488](https://doi.org/10.3390/molecules22091488)

<div class="pk-model-meta" hidden drug="tegafur" model-id="Tegafur_Kim2017_population_mean_bsv" status="rejected" stale="true" population="rats" measured-compound="tegafur" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Absorption rate constant for tegafur in control group' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Absorption rate constant for tegafur in SDT pretreatment group' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Formation rate constant of 5-FU precursor from gut compartment in control group' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Formation rate constant of 5-FU precursor from gut compartment in SDT pretreatment group' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Formation rate constant of 5-FU from 5-FU precursor' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Clearance for tegafur' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Fraction of 5-FU clearance for 5-FU precursor formation' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Clearance for 5-FU in control group' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Clearance for 5-FU in SDT pretreatment group' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Distribution clearance for tegafur' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Distribution clearance for 5-FU' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Central volume of distribution for tegafur' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Central volume of distribution for 5-FU' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Peripheral volume of distribution for tegafur' routed out of structural estimates ('Population Mean (BSV)')
- table section iiv: 'Peripheral volume of distribution for 5-FU' routed out of structural estimates ('Population Mean (BSV)')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tegafur
- template fit: none — only the metabolite is modelled — no parent compartment (site presystemic: 'To determine the effect of SDT multiple dose pretreatment, the oral absorption rate of tegafur (Ka), metabolic conversio')
- population split: 'population mean (bsv)' subgroup of Kim_2017 (paper reports 3 populations: multiple dose, population mean (bsv), single dose)
- row roles: 2 per-group rows of tegafur absorption_rate_constant but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of 5-FU formation_rate_constant but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of 5-FU clearance but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 24 linked by role; re-tagged parent→5-FU ×22, parent→gimeracil ×5
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- unparsed cell Kim_2017_table_1:row1:col3 = '3.5 ± 0.7 *'
- unparsed cell Kim_2017_table_1:row2:col4 = '3.2 ± 1.6 *'
- unparsed cell Kim_2017_table_1:row3:col4 = '4960.0 ± 431.9 *'
- unparsed cell Kim_2017_table_1:row7:col2 = '0.6 ± 0.2 *'
- unparsed cell Kim_2017_table_1:row10:col4 = '64.3 ± 23.0 *'
- unparsed cell Kim_2017_table_1:row11:col4 = '362.7 ± 96.2 *'
- unparsed cell Kim_2017_table_1:row12:col4 = '429.6 ± 83.2 *'
- unparsed cell Kim_2017_table_1:row13:col4 = '1.5 ± 0.5 *'
- unparsed cell Kim_2017_table_1:row16:col4 = '142.3 ± 41.8 *'
- unparsed cell Kim_2017_table_1:row17:col4 = '180.2 ± 41.5 *'
- unparsed cell Kim_2017_table_1:row18:col4 = '247.4 ± 57.4 *'
- unparsed cell Kim_2017_table_1:row19:col4 = '101.9 ± 22.6 *'
- unparsed cell Kim_2017_table_1:row20:col4 = '6.8 ± 0.9 *'
- companion parameter table 1 transcribed (73 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | primary re-run | 0.8 (4/5 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[estimated clearance of 5-fu (cl5fu) increase]` | not captured | 1.68 | only_one_extracted |

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

- scholar stages: `../../../knowledgebase/drugs/drug_tegafur/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2017` / `Kim_2017::population_mean_bsv`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:20 UTC</sub>
