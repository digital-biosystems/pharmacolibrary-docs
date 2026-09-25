<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;ofloxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ofloxacin_Fillastre1987_reference&quot;,&quot;label&quot;:&quot;Fillastre_1987_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ofloxacin/Ofloxacin_Fillastre1987_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# ofloxacin

- **generic name:** ofloxacin
- **ATC codes:** `J01MA01`, `J01RA09`, `J01RA17`, `J01RA18`, `S01AE01`, `S02AA16`
- **DrugBank:** [DB01165](https://go.drugbank.com/drugs/DB01165)
- **groups:** approved, investigational

## About

**Description.** A synthetic fluoroquinolone (fluoroquinolones) antibacterial agent that inhibits the supercoiling activity of bacterial DNA gyrase, halting DNA replication.

**Indication.** For the treatment of infections (respiratory tract, kidney, skin, soft tissue, UTI), urethral and cervical gonorrhoea.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 22 | 3/0 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Fillastre_1987_reference](drugs/drug_ofloxacin/Ofloxacin_Fillastre1987_reference.md) | Fillastre JP et al., Ofloxacin pharmacokinetics in renal fai…, Antimicrobial agents and ch… (1987) | [10.1128/AAC.31.2.156](https://doi.org/10.1128/AAC.31.2.156) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ofloxacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…dosing. About 4-8% of an ofloxacin dose is excreted in the feces and the drug is minimally…”</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor, `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TOP2A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 62 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Sakai_2019 | irrelevant | 2 | 8 | The study focuses on azithromycin with ofloxacin as a comparator, reporting only tissue concentrations (Cmax, AUC) rather than systemic population-PK parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-18 23:43 UTC</sub>
