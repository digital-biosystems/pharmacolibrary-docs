<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;azelaic acid&quot;}]"></div>

# azelaic acid

- **generic name:** azelaic acid
- **ATC codes:** `D10AX03`
- **DrugBank:** [DB00548](https://go.drugbank.com/drugs/DB00548) · **PubChem:** [CID 2266](https://pubchem.ncbi.nlm.nih.gov/compound/2266)
- **molar mass:** 188.2209 g/mol (C9H16O4) — DrugBank
- **groups:** approved, investigational

## About

Azelaic acid is a topical dermatological drug used to treat acne and rosacea. It is an approved medicine, applied to the skin, and is widely used for these skin conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413504](https://www.wikidata.org/wiki/Q413504) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:30 | 0:34 | 0/0/0 | 2/0/0 | 0/0/0 | 61,219/943 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Gudin_2026_EC50](drugs/drug_azelaic_acid/pd_Gudin_2026_EC50.md) | fungal mycelia growth ← azelaic_acid · direct Emax (saturable) effect | — | Gudin GS et al., Azelaic Acid-Mediated Resistance in Ric…, Plants (Basel, Switzerland) (2026) | [10.3390/plants15040567](https://doi.org/10.3390/plants15040567) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Kang_2015_Ca2](drugs/drug_azelaic_acid/pd_Kang_2015_Ca2.md) | intracellular Ca(2+) mobilization ← azelaic_acid · direct Emax (saturable) effect | — | Kang N et al., Olfactory receptor Olfr544 responding t…, Biochemical and biophysical… (2015) | [10.1016/j.bbrc.2015.03.078](https://doi.org/10.1016/j.bbrc.2015.03.078) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=azelaic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | liver | `SRD5A1` inhibitor | DrugBank actor |
| — | prostate gland | `SRD5A1` inhibitor, `SRD5A2` inhibitor | DrugBank actor |
| — | skin | `SRD5A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: AKR1D1 (inhibitor), SRD5A3 (inhibitor), TYR (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barragán-Zarate_2020 | irrelevant | 0 | 0 | The study focuses on the ethnomedical and pharmacological effects (anti-inflammatory, gastroprotective) of an orchid extract where azelaic acid is merely one of many identified phytoconstituents, and no pharmacokinetic parameters are reported. |
| popPK | Gudin_2026 | irrelevant | 0 | 0 | The study is a plant pathology/biochemistry investigation of azelaic acid's effect on rice defense mechanisms and fungal growth, containing no pharmacokinetic data. |
| popPK | Kang_2015 | irrelevant | 0 | 0 | The study focuses on the mechanistic role of olfactory receptors in glucagon secretion and does not report pharmacokinetic disposition parameters. |
| popPK | Mwinga_2026 | irrelevant | 0 | 0 | The paper is a phytochemical and antifungal study where azelaic acid is merely identified as one of many compounds present in plant extracts, with no pharmacokinetic data reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
