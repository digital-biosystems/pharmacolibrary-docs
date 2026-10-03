<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;benazepril&quot;,&quot;href&quot;:&quot;drugs/drug_benazepril/&quot;},{&quot;label&quot;:&quot;King_2003 \u00b7 oral_benazepril_hcl&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# benazepril — `Benazepril_King2003_oral_benazepril_hcl`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.111). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: cat.** This record comes from an animal study (cat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**Benazeprilat half-lives were stored as rate constants — kel = 0.0001 and kabs = 0.62 carry 'T 1/2' labels in hours — giving a dimension error and an implausibly small elimination rate constant, so the record was rejected.**

The parameter labelled 'T 1/2 K 10 (h)' was entered as kel = 0.0001 and 'T 1/2 K a (h)' as kabs = 0.62, so half-lives in hours were treated as rate constants; this dimension mismatch on structural parameters also puts the clearance/volume relationships outside a physiological window (V1/F = 0.0005 L/kg, CL/F = 4.73 L/kg/h). The AUC∞ entry is inconsistent: its label reads 'AUC free(0-inf) (ng h/mL) 152 ± 85' while the stored value is 575. One reported unit could not be converted to SI, so some parameters lacked SI values, and an independent second reading of the paper disagreed on several entries, reading Bmax = 56, KD = 0.0019, Cmax = 12.3, Fab = 8.75 and kel = 0.0001 where the record had none, while leaving the mass-balance bioavailability (22.9) and the benazepril-to-benazeprilat hydrolysis link unread. Extracted — benazeprilat: V1/F 0.0005 L/kg, kel 0.0001 h, Bmax 56 ng/mL, Cmax 12.3 nmol/L, KD 0.0019 ng/mL, Fab 8.75 units, kabs 0.62 h, AUC∞ 575, … (+3); benazepril: Fab 22.9 units.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has benazepril → benazeprilat (hydrolysis), the second reading none; it also differs on 31 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `benazepril`, measured `benazeprilat`.

## Citation
King JN et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of veterinary pharm… (2003)
  ·  DOI: [10.1046/j.1365-2885.2003.00468.x](https://doi.org/10.1046/j.1365-2885.2003.00468.x)

## Model component
<dbs-pgx drug="benazepril" model-id="Benazepril_King2003_oral_benazepril_hcl" status="rejected" stale="false" population="healthy cats" measured-compound="benazeprilat" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V c /F (L/kg) | `Q290` · V1/F | 0.0005 | L/kg | 3.5e-05 | [l] / [kg] | not captured | exact (1.0) | tab_1:row4:col4, King_2003_table_1:row3:col2 | — | not captured |
| T 1/2 K 10 (h) | `Q47` · kel | 0.0001 | h | not captured | [h] | not captured | exact (1.0) | tab_1:row6:col5, King_2003_table_1:row6:col2, King_2003_table_1:row6:col4 | — | not captured |
| B max (ng/mL) | `Q332` · Bmax | 56 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | tab_1:row7:col4, tab_1:row7:col5, tab_1:row7:col6, tab_1:row7:col8, King_2003_table_1:row8:col2, King_2003_table_1:row8:col4 | — | not captured |
| P max (nmol/L) | `Q32` · Cmax | 12.3 | nmol/L | not captured | [nM] / [l] | not captured | llm (0.6) | tab_1:row9:col4, tab_1:row9:col5, tab_1:row9:col6, tab_1:row9:col8, King_2003_table_1:row10:col2, King_2003_table_1:row10:col4 | — | not captured |
| K d (ng/mL) | `Q331` · KD | 0.0019 | ng/mL | not captured | [ng] / [ml] | not captured | space_fold (0.95) | tab_1:row10:col5, King_2003_table_1:row11:col2, King_2003_table_1:row11:col4 | — | not captured |
| F circ (%) | `Q40` · Fab | 8.75 | units | not captured | [units] | not captured | llm (0.6) | tab_1:row12:col4, tab_1:row12:col5, tab_1:row12:col6, tab_1:row12:col8, King_2003_table_1:row13:col2, King_2003_table_1:row13:col4 | — | not captured |
| T 1/2 K a (h) | `Q49` · kabs | 0.62 | h | not captured | [h] | not captured | exact (1.0) | tab_1:row13:col5, King_2003_table_1:row17:col2 | — | not captured |
| AUC free(0-inf) (ng h/mL) 152 ± 85 | `Q17` · AUC∞ | 575 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | tab_1:row14:col4, tab_1:row14:col5 | — | not captured |
| Cl/F (L/kg/h) | `Q27` · CL/F | 4.73 | L/kg/h | 9.197222222222224e-05 | [l] / [[h] · [kg]] | not captured | exact (1.0) | King_2003_table_1:row5:col2 | — | not captured |
| T lag (h) | `Q83` · tlag | 0.11 | h | 396.0 | [h] | not captured | exact (1.0) | King_2003_table_1:row18:col2 | — | not captured |
| F abs (mass balance) (%) | `Q40` · Fab | 22.9 | units | not captured | [units] | not captured | llm (0.6) | King_2003_table_1:row19:col2 | — | not captured |
| F m (%) | `Q45` · fm | 13.4 | units | not captured | [units] | not captured | exact (1.0) | King_2003_table_1:row21:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameters (units)' — extend the ontology if this is a real PK parameter (source ['tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row3:col7'])
- unit_dimension_mismatch: 'T 1/2 K 10 (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q332 ('B max (nmol/L)', value '141') — already have one for this compound
- unit_dimension_mismatch: 'P max (nmol/L)' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'K d (nmol/L)' → Q331 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q331 ('K d (nmol/L)', value '4.35') — already have one for this compound
- unit_dimension_mismatch: 'T 1/2 K a (h)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q17 ('AUC tot(0-inf) (ng h/mL) 409 ± 128', value '715') — already have one for this compound
- unit_dimension_unknown: 'ng h/mL' (AUC∞)
- dropped duplicate Q17 ('AUC free(0-inf) (ng h/mL)', value '220') — already have one for this compound
- dropped duplicate Q17 ('AUC tot(0-last) (ng h/mL)', value '373') — already have one for this compound
- dropped duplicate Q17 ('AUC tot(0-inf) (ng h/mL)', value '426') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.25 (source ['tab_1:footnote', 'tab_1:footnote', 'tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.54 (source ['tab_1:footnote', 'tab_1:footnote', 'tab_1:footnote']); the table cell was unparseable — needs review
- unit inherited for Fab (Q40): 'units' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'AUC free(0-inf) (ng h/mL) 152 ± 85' — the LLM proposed 'ng h/mL', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=benazeprilat
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 0, metabolites [1]
- status held at route_to_review — not promoted
- population split: 'oral benazepril.hcl' subgroup of King_2003 (paper reports 4 populations: i.v. benazeprilat, oral benazepril.hcl, repeated administration (n ¼ 6), single administration (n ¼ 5))
- row roles (LLM): model_class=compartmental; 25/25 row label(s) assigned, 17 linked by role; re-tagged parent→benazeprilat ×59, benazepril→benazeprilat ×29, benazepril→parent ×1
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row4:col1 = '1.09 ± 0.66 0.975 ± 0.412 1.30 ± 1.60 2.65 ± 0.66 1.74 ± 0.67'
- unparsed cell tab_1:row4:col3 = '2.39 (1.6, 3.6)'
- unparsed cell tab_1:row5:col1 = '2.02 ± 1.54 1.04 ± 0.24 0.825 ± 0.290 0.94 ± 0.36 0.826 ± 0.280 0.622 ± 0.134'
- unparsed cell tab_1:row5:col2 = '0.65 (0.49, 0.87)'
- unparsed cell tab_1:row6:col1 = '0.44 ± 0.26 0.65 ± 0.20'
- unparsed cell tab_1:row6:col2 = '0.90 ± 0.76 2.09 ± 0.48 1.62 ± 0.75'
- unparsed cell tab_1:row6:col4 = '3.67 (2.3, 5.9)'
- unparsed cell tab_1:row7:col7 = '0.59 (0.49, 0.71)'
- unparsed cell tab_1:row8:col7 = '0.59 (0.49, 0.71)'
- unparsed cell tab_1:row9:col7 = '0.62 (0.35, 1.1)'
- unparsed cell tab_1:row10:col1 = '1.09 ± 0.24 1.17 ± 0.31'
- unparsed cell tab_1:row10:col2 = '1.39 ± 0.70 2.48 ± 0.99 1.73 ± 0.43'
- unparsed cell tab_1:row10:col4 = '1.51 (1.2, 1.9)'
- unparsed cell tab_1:row11:col1 = '2.75 ± 0.61 2.95 ± 0.78'
- unparsed cell tab_1:row11:col6 = '1.51 (1.2, 1.9)'
- unparsed cell tab_1:row12:col7 = '1.05 (0.64, 1.7)'
- unparsed cell tab_1:row13:col1 = '1.65 ± 0.52 2.17 ± 0.99'
- unparsed cell tab_1:row13:col2 = '2.81 ± 1.65 1.90 ± 1.66 2.53 ± 1.65'
- unparsed cell tab_1:row13:col4 = '0.90 (0.57, 1.4)'
- unparsed cell King_2003_table_1:row6:col3 = '3.03 (1.4, 6.7)'
- unparsed cell King_2003_table_1:row8:col3 = '1.06 (0.58, 1.9)'
- unparsed cell King_2003_table_1:row9:col3 = '1.05 (0.58, 0.93)'
- unparsed cell King_2003_table_1:row10:col3 = '1.10 (0.56, 2.2)'
- unparsed cell King_2003_table_1:row11:col3 = '1.73 (0.56, 5.4)'
- unparsed cell King_2003_table_1:row12:col3 = '1.72 (0.56, 5.3)'
- unparsed cell King_2003_table_1:row13:col3 = '1.05 (0.91, 1.2)'
- companion parameter table 1 transcribed (37 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.111 (4/36 fields) | 32 |

<details><summary>32 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['benazepril', 'benazeprilat', 'hydrolysis']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[auc free(0-inf) (ng h/ml) 152 ± 85]` | not captured | 575 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc free(0-inf) (ng h/ml) 152 ± 85]` | 575 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc free(0-inf)]` | not captured | 220 | only_one_extracted |
| `gpt-oss:120b` | `parameters[b max]` | not captured | 56 | only_one_extracted |
| `gpt-oss:120b` | `parameters[b max]` | not captured | 78.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[b max]` | 56 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | not captured | 4.73 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | 4.73 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[f abs (mass balance)]` | 22.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[f circ]` | not captured | 8.75 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f circ]` | not captured | 10.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f circ]` | 8.75 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[f m]` | not captured | 13.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f m]` | 13.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k d]` | not captured | 0.0019 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k d]` | not captured | 0.86 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k d]` | 0.0019 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[p max]` | not captured | 12.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[p max]` | not captured | 19.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[p max]` | 12.3 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 k 10]` | not captured | 0.0001 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 k 10]` | not captured | 0.31 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 k 10]` | 0.0001 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 k a]` | not captured | 0.62 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 k a]` | not captured | 1.16 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 k a]` | 0.62 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t lag]` | not captured | 0.11 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t lag]` | 0.11 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v c /f]` | not captured | 0.0005 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v c /f]` | not captured | 2.20 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v c /f]` | 0.0005 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['King_2003_table_1:row5:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row4:col4', 'King_2003_table_1:row3:col2'] |
| C5_dimension_Q32 | fail | [substance] / [length] ** 3 | nmol/L | not captured | not captured | ['tab_1:row9:col4', 'tab_1:row9:col5', 'tab_1:row9:col6', 'tab_1:row9:col8', 'King_2003_table_1:row10:col2', 'King_2003_table_1:row10:col4'] |
| C5_dimension_Q331 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row10:col5', 'King_2003_table_1:row11:col2', 'King_2003_table_1:row11:col4'] |
| C5_dimension_Q47 | fail | [time] | h | not captured | not captured | ['tab_1:row6:col5', 'King_2003_table_1:row6:col2', 'King_2003_table_1:row6:col4'] |
| C5_dimension_Q49 | fail | [time] | h | not captured | not captured | ['tab_1:row13:col5', 'King_2003_table_1:row17:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['King_2003_table_1:row18:col2'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row14:col4', 'tab_1:row14:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 331 L/h | not captured | not captured | ['King_2003_table_1:row5:col2'] |
| C9_phys_window_Q290 | fail | volume within physiological range | 0.035 L | not captured | not captured | ['tab_1:row4:col4', 'King_2003_table_1:row3:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_benazepril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `King_2003` / `King_2003::oral_benazepril_hcl`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-30 22:19 UTC</sub>
