<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;aluminium chloride&quot;}]"></div>

# aluminium chloride

- **generic name:** aluminium chloride
- **ATC codes:** `D10AX01`
- **DrugBank:** [DB11081](https://go.drugbank.com/drugs/DB11081) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Aluminium chloride is a topical preparation used against acne. It is an approved dermatological ingredient, used topically rather than as a systemic medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q314036](https://www.wikidata.org/wiki/Q314036) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:28 | 1:04 | 0/0/0 | 0/1/0 | 0/0/0 | 134,106/1,338 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Orihuela_1999_JCa_ms](drugs/drug_aluminium_chloride/pd_Orihuela_1999_JCa_ms.md) | JCa(ms) ← aluminum · inhibition effect | — | Orihuela D et al., Aluminum effects upon calbindin D9k-lin…, Toxicology letters (1999) | [10.1016/s0378-4274(98)00367-1](https://doi.org/10.1016/s0378-4274(98)00367-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aluminium_chloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GLUD1 (inactivator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aremu_2019 | irrelevant | 0 | 0 | The study investigates the antioxidant properties of Taraxacum officinale in rats, and aluminium chloride is only mentioned as a reagent for colorimetric flavonoid assays, not as a subject drug for pharmacokinetic analysis. |
| popPK | Gashaye_2023 | irrelevant | 0 | 0 | The paper investigates the phytochemical, antioxidant, and antibacterial properties of plant extracts, with aluminium chloride mentioned only as a reagent in a colorimetric assay, not as a subject drug in a pharmacokinetic study. |
| popPK | Khongkarat_2022 | irrelevant | 0 | 0 | The study investigates the phytochemical content and antioxidant activity of bee pollen, using aluminum chloride only as a reagent in a colorimetric assay, not as a pharmacokinetic subject. |
| popPK | Kim_1986 | irrelevant | 0 | 0 | The study measures blood-brain barrier permeability using a marker ([14C]sucrose), not the pharmacokinetic parameters (CL, V, etc.) of aluminum chloride itself. |
| popPK | Levallois_2023 | irrelevant | 0 | 0 | The study is an ecotoxicological analysis of effects on Pacific oyster larvae, not a pharmacokinetic study reporting disposition parameters for aluminium chloride. |
| popPK | Mara_2020 | irrelevant | 0 | 0 | The paper studies parsley extract antioxidant activity and uses aluminum chloride only as a reagent for colorimetric quantification of flavonoids, not as a subject drug for PK analysis. |
| popPK | Neves_2024 | irrelevant | 0 | 0 | The paper investigates the antimicrobial and antioxidant properties of plant extracts, using aluminium chloride only as a reagent in a colorimetric assay, and contains no pharmacokinetic data for aluminium chloride. |
| popPK | Orihuela_1999 | irrelevant | 0 | 0 | The study focuses on the mechanistic effects of aluminum on calcium transport and protein levels, not on the pharmacokinetic disposition parameters of aluminum chloride. |
| popPK | Peter_2021 | irrelevant | 0 | 0 | The paper investigates the extraction optimization of Abelmoschus esculentus extract and its antihyperglycemic activity, with no data on aluminium chloride pharmacokinetics. |
| popPK | Saba_2017 | irrelevant | 0 | 0 | The study investigates the neurotoxic effects of aluminium chloride on brain metabolism and memory in mice, not its pharmacokinetic disposition (clearance, volume, etc.). |
| popPK | Silva_2017 | irrelevant | 0 | 0 | The paper is a botany/phytochemistry study of Clusia criuva where aluminum chloride is used as a reagent for flavonoid assays, not as a drug subject to pharmacokinetic evaluation. |
| popPK | Toimela_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic toxicity analysis (mitochondrial viability and apoptosis) using cell lines, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
