<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;methyclothiazide&quot;}]"></div>

# methyclothiazide

- **generic name:** methyclothiazide
- **ATC codes:** `C03AA08`, `C03AB08`
- **DrugBank:** [DB00232](https://go.drugbank.com/drugs/DB00232) · **PubChem:** [CID 4121](https://pubchem.ncbi.nlm.nih.gov/compound/4121)
- **molar mass:** 360.237 g/mol (C9H11Cl2N3O4S2) — DrugBank
- **groups:** approved, withdrawn

## About

Methyclothiazide is a thiazide diuretic that was used to treat high blood pressure, congestive heart failure, nephrotic syndrome, and fluid buildup such as anasarca. It is no longer in use, as it has been withdrawn from the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6823919](https://www.wikidata.org/wiki/Q6823919) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:01 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 17,765/318 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methyclothiazide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA2 (inhibitor), CA4 (inhibitor), SLC12A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Campione_1966 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of antihypertensive therapy and does not report any pharmacokinetic parameters for methyclothiazide. |
| PD | Campione_1966 | not_relevant | 1 | 0 | The paper is a clinical observation of blood pressure changes over one year without any pharmacokinetic data, concentration measurements, or quantitative dose-response modeling. |
| popPK | Chan_2012 | irrelevant | 0 | 0 | The paper is a clinical review of the antihypertensive efficacy of thiazides in renal disease and does not report pharmacokinetic parameters for methyclothiazide. |
| popPK | Gordon_1977 | irrelevant | 0 | 0 | The study focuses on the clinical efficacy of methyclothiazide on blood pressure and plasma volume, reporting no pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Gordon_1977 | not_relevant | 2 | 1 | The paper reports a qualitative lack of dose-response (doubling dose did not significantly change BP) but provides no numeric PD parameters, concentration-effect curves, or quantitative model fits. |
| popPK | Jin_2012 | irrelevant | 0 | 0 | The study focuses on warfarin pharmacokinetics, and methyclothiazide is only mentioned as an internal standard for extraction, not as the subject drug. |
| popPK | Li_2018 | irrelevant | 0 | 0 | Methyclothiazide is used only as an internal standard for the pharmacokinetic analysis of senkyunolide I, not as the subject drug. |
| popPK | Soghikian_1977 | irrelevant | 0 | 0 | The study is a clinical trial assessing blood pressure response to methyclothiazide and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Soghikian_1977 | not_relevant | 2 | 1 | The paper reports clinical dose-response outcomes (blood pressure reduction at 5mg vs 10mg) and time-to-response, but does not provide concentration-effect data, PK/PD modeling, or specific numeric PD parameters like Emax or EC50. |
| popPK | Wayne_1986 | irrelevant | 0 | 0 | The paper is a clinical case report describing the therapeutic efficacy of methyclothiazide, not a pharmacokinetic study, and contains no quantitative disposition parameters. |
| PD | Wayne_1986 | not_relevant | 1 | 0 | The text is a qualitative case report describing clinical response to methyclothiazide without providing any numeric concentration-effect data, dose-response curves, or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
