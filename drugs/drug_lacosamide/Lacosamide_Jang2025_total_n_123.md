<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;lacosamide&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/&quot;},{&quot;label&quot;:&quot;Jang_2025 \u00b7 total_n_123&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lacosamide_Li2025_boostrap&quot;,&quot;label&quot;:&quot;Li_2025_boostrap&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Li2025_boostrap.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Li2025_final_models&quot;,&quot;label&quot;:&quot;Li_2025_final_models&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Li2025_final_models.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Wang2024_reference&quot;,&quot;label&quot;:&quot;Wang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Wang2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Wu2026_reference&quot;,&quot;label&quot;:&quot;Wu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Wu2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lacosamide_Yu2026_reference&quot;,&quot;label&quot;:&quot;Yu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lacosamide/Lacosamide_Yu2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lacosamide — `Lacosamide_Jang2025_total_n_123`

> ## <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (Cmax, Ctrough and AUC), so that value has no SI equivalent.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:27.011959+00:00) predates the upstream re-run (2026-10-07 06:56:40.972298+00:00). Current validate status: `not captured`.

## Citation
Jang Y et al., Saliva-based lacosamide monitoring pave…, Scientific reports (2025)
  ·  DOI: [10.1038/s41598-025-04044-x](https://doi.org/10.1038/s41598-025-04044-x)

## Model component
<dbs-pgx drug="lacosamide" model-id="Lacosamide_Jang2025_total_n_123" status="" stale="true" population="epilepsy patients" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Model structure:** —; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- unparsed cell Tab1:row2:col4 = '0.029*'
- unparsed cell Tab1:row3:col1 = '67 (54.5%)'
- unparsed cell Tab1:row3:col2 = '53 (55.8%)'
- unparsed cell Tab1:row3:col3 = '14 (50%)'
- unparsed cell Tab1:row9:col1 = '113 (91.9%)'
- unparsed cell Tab1:row9:col2 = '86 (90.5%)'
- unparsed cell Tab1:row9:col3 = '27 (96.4%)'
- unparsed cell Tab1:row15:col1 = '37 (30.3%)'
- unparsed cell Tab1:row15:col2 = '26 (27.4%)'
- unparsed cell Tab1:row15:col3 = '11 (39.3%)'
- unparsed cell Tab1:row16:col1 = '63 (51.2%)'
- unparsed cell Tab1:row16:col2 = '63 (66.3%)'
- unparsed cell Tab1:row24:col1 = '101 (83.5%)'
- unparsed cell Tab1:row24:col2 = '77 (82.8%)'
- unparsed cell Tab1:row24:col3 = '24 (85.7%)'
- unparsed cell Tab1:row25:col1 = '18 (14.9%)'
- unparsed cell Tab1:row25:col2 = '16 (17.4%)'
- unparsed cell Tab1:row25:col3 = '2 (7.4%)'
- unparsed cell Tab1:row26:col1 = '79 (65.3%)'
- unparsed cell Tab1:row26:col2 = '58 (63.0%)'
- unparsed cell Tab1:row26:col3 = '21 (77.8%)'
- unparsed cell Tab1:row27:col1 = '12 (9.9%)'
- unparsed cell Tab1:row27:col2 = '10 (10.9%)'
- unparsed cell Tab1:row27:col3 = '2 (7.4%)'
- unparsed cell Tab1:row28:col1 = '7 (5.8%)'
- unparsed cell Tab1:row28:col2 = '6 (6.5%)'
- unparsed cell Tab1:row28:col3 = '1 (3.7%)'
- unparsed cell Tab1:row31:col1 = '109 (88.6%)'
- unparsed cell Tab1:row31:col2 = '86 (90.5%)'
- unparsed cell Tab1:row31:col3 = '23 (82.1%)'
- unparsed cell Tab1:row32:col1 = '4.25 [2.57–7]'
- unparsed cell Tab1:row32:col2 = '4.21 [2.54–6.85]'
- unparsed cell Tab1:row32:col3 = '4.25 [ 2.92–7.46]'
- unparsed cell Tab1:row33:col1 = '59 (48.0%)'
- unparsed cell Tab1:row33:col2 = '43 (45.3%)'
- unparsed cell Tab1:row33:col3 = '16 (57.1%)'
- unparsed cell Tab1:row34:col1 = '59 (48.0%)'
- unparsed cell Tab1:row34:col2 = '43 (45.3%)'
- unparsed cell Tab1:row34:col3 = '16 (57.1%)'
- unparsed cell Tab1:row37:col1 = '4.67 [3.03–6.86]'
- unparsed cell Tab1:row37:col2 = '5.17 [2.93–6.86]'
- unparsed cell Tab1:row37:col3 = '3.83 [3.27–6.33]'
- unparsed cell Tab1:row39:col4 = '0.026*'
- unparsed cell Tab1:row42:col4 = '0.011*'
- LLM region Jang_2025:discussion_prose: no JSON records returned

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lacosamide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jang_2025` / `Jang_2025::total_n_123`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:56 UTC</sub>
