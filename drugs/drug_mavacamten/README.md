<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;mavacamten&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mavacamten_Chang2024_reference&quot;,&quot;label&quot;:&quot;Chang_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_mavacamten/Mavacamten_Chang2024_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mavacamten_Merali2025_reference&quot;,&quot;label&quot;:&quot;Merali_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_mavacamten/Mavacamten_Merali2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# mavacamten

- **generic name:** mavacamten
- **ATC codes:** `C01EB24`
- **DrugBank:** [DB14921](https://go.drugbank.com/drugs/DB14921)
- **groups:** approved, investigational

## About

**Description.** Mavacamten is a myosin inhibitor indicated for the treatment of adults with symptomatic New York Heart Association (NYHA) class II-III obstructive hypertrophic cardiomyopathy (HCM). It received initial US FDA approval in 2022, and it is one of the first myosin inhibitors to be used in humans.[A248440] Mavacamten was also approved by Health Canada in October 2022 and by EMA in July 2023 for the same indication.[L44106,L47471]

**Indication.** Mavacamten is indicated for the treatment of adults with symptomatic New York Heart Association (NYHA) class II-III obstructive hypertrophic cardiomyopathy (HCM) to improve functional capacity and symptoms by the FDA, Health Canada, and the EMA.[L41680,L44106,L47466]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 5 | 4/0 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Chang_2024_reference](drugs/drug_mavacamten/Mavacamten_Chang2024_reference.md) | Chang P et al., Characterization of mavacamten pharmaco…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13197](https://doi.org/10.1002/psp4.13197) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Merali_2025_reference](drugs/drug_mavacamten/Mavacamten_Merali2025_reference.md) | Merali S et al., Exposure-Response Modeling and Simulati…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70072](https://doi.org/10.1002/jcph.70072) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mavacamten) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>“…atients with mild (Child-Pugh A) or moderate (Child-Pugh B) hepatic impairment. The effect…”</sub> | prose |
| metabolism | brain | `CYP2D6` unknown | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C19` inducer/substrate, `CYP2C8` substrate, `CYP2C9` inducer/substrate, `CYP2D6` unknown, `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…of radiolabeled mavacamten, 7% of the dose was recovered in feces (1% unchanged) and 85% i…”</sub> | prose |
| excretion | kidney | <sub>“…f the dose was recovered in feces (1% unchanged) and 85% in urine (3% unchanged).[L41680]…”</sub> | prose |

<sub>Actors without a tissue in the table: MYH7 (inhibitory allosteric modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Merali_2024 | relevant | 8 | 3 | This is a mavacamten population PK/exposure-response modeling paper, but the actual PK parameter values are not shown here and appear to be in Table 2/supplementary material not provided. |
| popPK | Wu_2025 | relevant | 7 | 2 | This is a mavacamten population PK/PK-PD modeling paper, but the numeric PK parameters are not shown here and are referred to as being in prior work/table/supplementary material. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 13:05 UTC</sub>
