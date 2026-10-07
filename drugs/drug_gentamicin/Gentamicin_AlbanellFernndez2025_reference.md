<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;gentamicin&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/&quot;},{&quot;label&quot;:&quot;Albanell-Fern\u00e1ndez_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gentamicin_Abbasi2023_reference&quot;,&quot;label&quot;:&quot;Abbasi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gentamicin_Crcek2019_reference&quot;,&quot;label&quot;:&quot;Crcek_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Crcek2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gentamicin — `Gentamicin_AlbanellFernndez2025_reference`

> ## <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No value for gentamicin's clearance and volume of distribution.**

The model was built, but gentamicin's clearance and volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — gentamicin: V 0.66.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has vancomycin, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:38:08.005632+00:00) predates the upstream re-run (2026-10-07 22:09:46.825072+00:00). Current validate status: `not captured`.

## Citation
Albanell-Fernández M et al., A Review of Vancomycin, Gentamicin, and…, Clinical pharmacokinetics (2025)
  ·  DOI: [10.1007/s40262-024-01459-z](https://doi.org/10.1007/s40262-024-01459-z)

## Model component
<dbs-pgx drug="gentamicin" model-id="Gentamicin_AlbanellFernndez2025_reference" status="" stale="true" population="neonates and infants with no previous pathologies" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Model structure:** —; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- transposed table Tab5: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tab5:row2:col4 = '0.072a'
- unparsed cell Tab5:row2:col8 = '0.07 presence or 0.086 absence of concomitant treatment with IND or VENT'
- unparsed cell Tab5:row2:col13 = '0.079 (for mean weight 1.3 kg, 30 wks PMA and appropriate for GA)'
- unparsed cell Tab5:row2:col14 = '0.049 (for mean weight 1.3 kg, 34 wks PMA and no VENT)'
- unparsed cell Tab5:row2:col29 = '1.46 (for mean weight 3.2 kg and PMA 41 weeks)'
- unparsed cell Tab5:row2:col31 = '0.102 (for mean weight 1.48 kg)'
- unparsed cell Tab5:row2:col38 = 'M1: 0.057M2: 0.063'
- unparsed cell Tab5:row2:col39 = '0.053 if PCA &gt;34 wks and AP ≥7; 0.044 if PCA ≤34 wks and AP &lt;7; 0.036 if PCA ≤34 wks and AP &lt;7'
- unparsed cell Tab5:row2:col40 = '0.046 if GA ≤31 wks, 0.094 if GA 31–34 wks'
- unparsed cell Tab5:row2:col41 = '0.069c'
- unparsed cell Tab5:row2:col46 = '0.046 (for mean weight 2.4 kg)'
- unparsed cell Tab5:row2:col47 = '0.0387 (It2B modeling) − 0.0404 (STS modeling)'
- unparsed cell Tab5:row2:col50 = '0.076 (for median BW 1.92 kg and GA 32 wks)'
- unparsed cell Tab5:row2:col55 = '0.037 (for mean weight 2.3 kg, PNA 3 days)'
- unparsed cell Tab5:row2:col63 = '0.028 (for mean weight 1 kg, PCA 27 wks, and no NSAID)'
- unparsed cell Tab5:row2:col64 = '0.040 (for mean weight 1 kg, 28 wks PMA and appropriate forGA)'
- unparsed cell Tab5:row2:col65 = '0.0497 (for mean weight 1 kg, PMA 34 wks, PNA 1 day, no INO, no VENT)'
- unparsed cell Tab5:row2:col66 = '0.091 (for mean weight 2 kg, PMA 30 wks)'
- unparsed cell Tab5:row5:col3 = '1.18 (for mean weight 2 kg, PCA 40 wks, Cr)'
- unparsed cell Tab5:row5:col4 = '0.52a'
- unparsed cell Tab5:row5:col8 = '0.562 (PMA ≤32 wks)0.498 (PMA &gt;32 wks)'
- unparsed cell Tab5:row5:col13 = '0.730 (for mean weight 1.3 kg, 30 wks PMA and appropriate for GA)'
- unparsed cell Tab5:row5:col14 = '0.724 (for mean weight 1.3 kg, 34 wks PMA and no artificial ventilation)'
- unparsed cell Tab5:row5:col29 = '0.148 (for mean weight 3.2 kg)'
- unparsed cell Tab5:row5:col31 = '0.884 (for mean weight 1.48 kg)'
- unparsed cell Tab5:row5:col40 = '0.703 – 0.767 if GA ≤31 wks0.643–0.653 if GA 31−34 wks'
- unparsed cell Tab5:row5:col41 = '0.547c'
- unparsed cell Tab5:row5:col46 = '0.46 (for mean weight 2.4 kg)'
- unparsed cell Tab5:row5:col47 = '0.586 (It2B modeling) − 0.623 (STS modeling)'
- unparsed cell Tab5:row5:col48 = '0.631c'
- unparsed cell Tab5:row5:col50 = '0.136 (for median BW 1.92 kg)'
- unparsed cell Tab5:row5:col55 = '0.687 (for mean weight 2.3kg and no sepsis)'
- unparsed cell Tab5:row5:col64 = '0.561 (for mean weight 1 kg, 28 wks PMA and appropriate for GA)'
- unparsed cell Tab5:row5:col65 = '0.455 (for mean weight 1 kg, PMA 34 wks, PNA 1 day, no INO, no VENT)'
- unparsed cell Tab5:row5:col66 = '0.957 (for mean weight 2 kg PMA 30 wks)'
- companion parameter table 2 transcribed (5 record(s))
- companion parameter table 3 transcribed (11 record(s))
- companion parameter table 4 transcribed (5 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5
- LLM region Albanell-Fernández_2025:other_prose: no JSON records returned
- captured model equation CL = 1.0 * (WT/70)^0.75 * (PMA/30)^3.16 * [0.83 * GA + 1.03 * (1 - GA)]GA = 1 for SGA infants and 0 for appropriate-for-GA infants
- captured model equation V = 0.791 * (WT/1.416)^0.898
- captured model equation Vc = 0.913 * (WT/1.75)^0.919Vc = Vp

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.667 (4/6 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `screen.dose_compound` | vancomycin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | vancomycin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 1 scholar param(s) emitted or defaulted | 1 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_gentamicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Albanell-Fernández_2025` / `Albanell-Fernández_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_gentamicin/models/modelica/_needs_review/Gentamicin_AlbanellFernndez2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_gentamicin/models/modelica/_needs_review/Gentamicin_AlbanellFernndez2025_reference.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:09 UTC</sub>
