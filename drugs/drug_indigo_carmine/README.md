<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;indigo carmine&quot;}]"></div>

# indigo carmine

- **generic name:** indigo carmine
- **ATC codes:** `V04CH02`
- **DrugBank:** [DB11577](https://go.drugbank.com/drugs/DB11577) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Indigo carmine is a blue dye used as a diagnostic agent in tests for kidney function and ureteral injuries. It is an approved drug and is also being studied for investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27162327](https://www.wikidata.org/wiki/Q27162327) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:00 | 0:52 | 0/0/0 | 0/0/0 | 0/0/0 | 195,397/723 | ollama / glm-5.3-flash | 7 | 0/7 | 7/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=indigo_carmine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Breaud_2025 | irrelevant | 0 | 0 | This is a plant-extract antitubercular screening/metabolomics study with no pharmacokinetic parameters for indigo carmine; the drug is not studied at all. |
| popPK | Börnsen_2026 | irrelevant | 0 | 0 | This is a structural/medicinal chemistry study of an AcrB efflux pump inhibitor (BDM91531); indigo carmine is not the subject drug and no PK parameters are reported. |
| popPK | Carucci_2023 | irrelevant | 0 | 0 | The paper models TD-6450 (an NS5A inhibitor) and NITD609, not indigo carmine; no indigo carmine PK parameters appear. |
| popPK | DeGennaro_2016 | irrelevant | 0 | 0 | This is a yeast metabolic flux/isotope-labeling study with no indigo carmine PK parameters reported. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | Plant metabolomics study of Isatis indigotica cultivars; no pharmacokinetic parameters for indigo carmine (only indirubin plant content). |
| popPK | Montani_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry study of benzothiazole derivatives with antioxidant/UV-filter assays; no PK parameters for indigo carmine appear anywhere. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | This is a review on marine by-product bioactives for cosmetics; indigo carmine is not the subject drug and no PK parameters appear. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
