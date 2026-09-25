<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;lead&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/&quot;},{&quot;label&quot;:&quot;Dede_2017 \u00b7 exposure::adult humans&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lead_Dede2017_exposure&quot;,&quot;label&quot;:&quot;Dede_2017_exposure&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/Lead_Dede2017_exposure.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lead_Dede2017_exposure_adult_humans&quot;,&quot;label&quot;:&quot;Dede_2017_exposure::adult humans&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/Lead_Dede2017_exposure_adult_humans.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Lead_Dede2017_optimal&quot;,&quot;label&quot;:&quot;Dede_2017_optimal&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/Lead_Dede2017_optimal.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lead_Dede2017_optimal_adult_humans&quot;,&quot;label&quot;:&quot;Dede_2017_optimal::adult humans&quot;,&quot;href&quot;:&quot;drugs/toxin_lead/Lead_Dede2017_optimal_adult_humans.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lead — `Lead_Dede2017_exposure_adult_humans`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** nonlinear topology.
**How to address:** not a curation fix — the pipeline is the limit here (engineer: the topology is outside the template set the engineer can build).
<sub>owner: **modeller**</sub>

## Citation
Dede E; Tindall MJ; Cherrie JW; Hankin S; Collins C et al. (2017).
  ·  DOI: [10.1016/j.etap.2017.12.003](https://doi.org/10.1016/j.etap.2017.12.003)

## Model component
<dbs-pgx drug="lead" model-id="Lead_Dede2017_exposure_adult_humans" status="needs_review" stale="false" population="adult humans" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- unparsed cell tab_2:row5:col3 = '7 -14 days'
- unparsed cell tab_2:row8:col4 = '&lt; 0.01'
- unparsed cell tab_2:row11:col4 = '&lt; 0.01'
- unparsed cell tab_2:row14:col3 = '3-9 days'
- unparsed cell tab_2:row17:col3 = '15-90 days'
- unparsed cell tab_2:row17:col4 = '≥0.3'
- companion parameter table S1 transcribed (10 record(s))
- companion parameter table S2 transcribed (6 record(s))
- unparsed cell Dede_2017_table_S4:row21:col3 = '1.83 L'
- companion parameter table S4 transcribed (8 record(s))
- LLM selected parameter table(s) S1, S2, S3, S4

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/toxins/toxin_lead/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dede_2017` / `Dede_2017::exposure::adult humans`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-08 17:26 UTC</sub>
