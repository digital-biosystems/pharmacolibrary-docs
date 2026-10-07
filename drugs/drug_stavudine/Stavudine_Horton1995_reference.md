<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;stavudine&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/&quot;},{&quot;label&quot;:&quot;Horton_1995 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Stavudine_Jullien2007_reference&quot;,&quot;label&quot;:&quot;Jullien_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Jullien2007_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Stavudine_Panhard2007_reference&quot;,&quot;label&quot;:&quot;Panhard_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Panhard2007_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Stavudine_Sinxadi2010_reference&quot;,&quot;label&quot;:&quot;Sinxadi_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Sinxadi2010_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# stavudine — `Stavudine_Horton1995_reference`

> ## <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The stavudine absorption rate constant used flow units (2.38 liters/h), causing a dimensional mismatch and model rejection.**

The absorption rate constant is reported as 2.38 liters/h, which is dimensionally incompatible with a first-order rate process. This unit error is the specific cause of the dimensional failure for this structural parameter. The reported unit could not be converted to standard SI units, preventing derivation of a valid value. Extracted — stavudine: CL/F 30.9 liters/h, V1/F 8.42 liters, Vnorm/F 68.9 liters, Q/F 12.4 liters/h, kabs 2.38 liters/h, Fab 99.1 % of dose, CL 34.6 liters/h, V1 23.9 liters, … (+2).

<sub>reviewed by qwen3.8-27b</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-07 14:42:50.466755+00:00) predates the upstream re-run (2026-10-07 16:16:50.926967+00:00). Current validate status: `not captured`.

## Citation
Horton CM et al., Population pharmacokinetics of stavudin…, Antimicrobial agents and ch… (1995)
  ·  DOI: [10.1128/AAC.39.10.2309](https://doi.org/10.1128/AAC.39.10.2309)

## Model component
<dbs-pgx drug="stavudine" model-id="Stavudine_Horton1995_reference" status="" stale="true" population="patients with AIDS or advanced AIDS-related complex" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Model structure:** —; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- transposed table tab_5: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tab_5:row0:col2 = '[18.8 (11.6, 26) ϩ'
- unparsed cell tab_5:row0:col3 = '0.13 (0.03, 0.24) ⅐'
- unparsed cell tab_5:row0:col4 = 'TBW] ⅐ [1.2 (1.0,'
- unparsed cell tab_5:row0:col5 = '1.38) Ϫ stage] ⅐'
- unparsed cell tab_5:row0:col6 = '[1.5 (1.12),'
- unparsed cell tab_5:row0:col9 = '11, 25'
- unparsed cell tab_5:row1:col2 = '8.18 (4.68, 11.7) 70 (44.9, 95.2) 13.1 (7.7, 18.5) 1.35 (1.13, 1.57) 0.17 (0.13, 0.21) 0.002 (0, 0.003)'
- unparsed cell tab_5:row2:col9 = '24, 123'
- unparsed cell tab_5:row3:col9 = '0, 46'
- unparsed cell tab_5:row4:col9 = '67, 94'
- transposed table Horton_1995_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Horton_1995_table_3:row0:col2 = '82.3, 116'
- unparsed cell Horton_1995_table_3:row0:col4 = '1, 36'
- unparsed cell Horton_1995_table_3:row1:col2 = '28.9, 40.3'
- unparsed cell Horton_1995_table_3:row1:col4 = '0, 43'
- unparsed cell Horton_1995_table_3:row2:col2 = '18.8, 29.0'
- unparsed cell Horton_1995_table_3:row3:col2 = '47.3, 64.9'
- unparsed cell Horton_1995_table_3:row4:col2 = '16.3, 24.3'
- unparsed cell Horton_1995_table_3:row4:col4 = '0, 71'
- unparsed cell Horton_1995_table_3:row5:col2 = '1.8, 3.0'
- unparsed cell Horton_1995_table_3:row5:col4 = '31, 175'
- unparsed cell Horton_1995_table_3:row6:col2 = '0.09, 0.17'
- unparsed cell Horton_1995_table_3:row7:col2 = '0, 0.006'
- companion parameter table 3 transcribed (12 record(s))
- unparsed cell Horton_1995_table_4:row1:col2 = '1.41 (1.18, 1.64)'
- unparsed cell Horton_1995_table_4:row1:col4 = 'Ͻ0.001'
- unparsed cell Horton_1995_table_4:row2:col2 = '0.17 (0.04, 0.3)'
- unparsed cell Horton_1995_table_4:row2:col4 = 'Ͻ0.001'
- unparsed cell Horton_1995_table_4:row3:col2 = '1.23 (1.01, 1.45)'
- unparsed cell Horton_1995_table_4:row3:col4 = 'Ͻ0.001'
- unparsed cell Horton_1995_table_4:row4:col2 = '1.12 (0.9, 1.34)'
- unparsed cell Horton_1995_table_4:row4:col4 = 'Ͻ0.01'
- unparsed cell Horton_1995_table_4:row5:col2 = '0.05 (Ϫ0.03, 0.13)'
- unparsed cell Horton_1995_table_4:row5:col4 = 'Ͻ0.01'
- unparsed cell Horton_1995_table_4:row6:col2 = '0.93 (0.74, 1.12)'
- unparsed cell Horton_1995_table_4:row6:col4 = 'Ͼ0.05'
- unparsed cell Horton_1995_table_4:row7:col2 = '0.94 (0.54, 1.35)'
- unparsed cell Horton_1995_table_4:row7:col4 = 'Ͼ0.2'
- unparsed cell Horton_1995_table_4:row8:col2 = '0.01 (Ϫ0.22, 0.25)'
- unparsed cell Horton_1995_table_4:row8:col4 = 'Ͼ0.3'
- unparsed cell Horton_1995_table_4:row9:col2 = '0.99 (0.75, 1.23)'
- unparsed cell Horton_1995_table_4:row9:col4 = 'Ͼ0.3'
- unparsed cell Horton_1995_table_4:row10:col2 = '0.99 (0.76, 1.22)'
- unparsed cell Horton_1995_table_4:row10:col4 = 'Ͼ0.3'
- unparsed cell Horton_1995_table_4:row12:col2 = '0.689 (0.207, 1.17)'
- unparsed cell Horton_1995_table_4:row12:col4 = 'Ͻ0.05'
- unparsed cell Horton_1995_table_4:row13:col2 = 'Ϫ0.589 (Ϫ1.399, 0.221)'
- unparsed cell Horton_1995_table_4:row13:col4 = 'Ͻ0.01'
- unparsed cell Horton_1995_table_4:row14:col2 = 'Ϫ0.076 (Ϫ0.706, 0.554)'
- unparsed cell Horton_1995_table_4:row14:col4 = 'Ͼ0.3'
- companion parameter table 4 transcribed (26 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_stavudine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Horton_1995` / `Horton_1995::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:16 UTC</sub>
