<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;nebivolol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nebivolol_Marques2022_reference&quot;,&quot;label&quot;:&quot;Marques_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# nebivolol

- **generic name:** nebivolol
- **ATC codes:** `C07AB12`, `C07BB12`, `C07FB12`, `C09BX07`, `C09DX05`, `C10BX22`
- **DrugBank:** [DB04861](https://go.drugbank.com/drugs/DB04861)
- **groups:** approved, investigational

## About

**Description.** Nebivolol is a racemic mixture of 2 enantiomers where one is a beta adrenergic antagonist and the other acts as a cardiac stimulant without beta adrenergic activity.[A182579] Treatment with nebivolol leads to a greater decrease in systolic and diastolic blood pressure than [atenolol], [propranolol], or [pindolol].[A182579] Nebivolol and other beta blockers are generally not first line therapies as many patients are first treated with thiazide diuretics.[A182594]

Nebivolol was granted FDA approval on 17 December 2007.[L7985]

**Indication.** Nebivolol is indicated to treat hypertension.[A2762,A182579,L7985,L7988]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 16 | 3/0 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.889). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Marques_2022_reference](drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md) | Marques L et al., New Data for Nebivolol after In Silico…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091911](https://doi.org/10.3390/pharmaceutics14091911) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nebivolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…metabolizers, 38% is eliminated in the urine and 44% in the feces.[L7985] In poor CYP2D6 m…”</sub> | prose |
| excretion | kidney | <sub>“…In extensive CYP2D6 metabolizers, 38% is eliminated in the urine and 44% in the feces.[L79…”</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Okamoto_2014 | irrelevant | 0 | 0 | This is a pharmacodynamic blood-pressure study, not a PK study, and no nebivolol disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 13:59 UTC</sub>
