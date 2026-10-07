<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03B&quot;,&quot;href&quot;:&quot;atc/D03B.md&quot;},{&quot;label&quot;:&quot;collagenase&quot;}]"></div>

# collagenase

- **generic name:** collagenase
- **ATC codes:** `D03BA02`, `M09AB02`
- **DrugBank:** [DB00048](https://go.drugbank.com/drugs/DB00048) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Collagenase clostridium histolyticum is an enzyme medicine used to treat Dupuytren's contracture, and collagenase preparations are also used on wounds and ulcers. It is an approved medicine, though one European Union product has been withdrawn, and it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5145911](https://www.wikidata.org/wiki/Q5145911) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:01 | 1:43 | 0/0/0 | 0/0/0 | 0/0/0 | 147,363/5,102 | openai / gpt-6-luna | 8 | 1/7 | 8/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=collagenase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: COL1A1 (cleavage), COL2A1 (cleavage), COL3A1 (cleavage).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 84 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amirmostofian_2023 | irrelevant | 0 | 0 | Collagenase is used only to isolate rat hepatocytes; no collagenase pharmacokinetic parameters are reported. |
| popPK | Apraj_2016 | irrelevant | 0 | 0 | The study reports in-vitro collagenase inhibition, not collagenase pharmacokinetics or disposition parameters. |
| popPK | Bundschuh_1995 | irrelevant | 0 | 0 | Collagenase is used only to isolate lung cells; the paper reports no collagenase pharmacokinetic parameters. |
| popPK | Dai_2003 | irrelevant | 0 | 0 | The reported two-compartment parameters are for an anti-collagenase antibody, not collagenase. |
| popPK | Freitas_2020 | irrelevant | 0 | 0 | This is an in-vitro seaweed-fraction collagenase-inhibition study, not a pharmacokinetic study. |
| popPK | García-Vicuña_2004 | irrelevant | 0 | 0 | Collagenase is measured as an enzyme activity in cultured cells, not studied as a drug with pharmacokinetic parameters. |
| popPK | Jeffrey_1991 | irrelevant | 0 | 0 | This is an in-vitro study of serotonin-induced collagenase production, not collagenase pharmacokinetics. |
| popPK | Kao_1977 | irrelevant | 0 | 0 | The half-times describe procollagen secretion, while collagenase is only used to identify digestible peptides. |
| popPK | Karatoprak_2022 | irrelevant | 0 | 0 | This is an in-vitro collagenase enzyme-inhibition study, not a pharmacokinetic study. |
| popPK | Kidd_2006 | irrelevant | 0 | 0 | Collagenase is only a cell-isolation reagent, and no pharmacokinetic parameters are reported. |
| popPK | London_1990 | irrelevant | 0 | 0 | Collagenase is used to digest human pancreatic tissue, with no pharmacokinetic parameters reported. |
| popPK | Modlin_2006 | irrelevant | 0 | 0 | Collagenase is only used to digest tissue; no collagenase pharmacokinetic parameters are reported. |
| popPK | Nordenskjöld_2018 | irrelevant | 0 | 0 | Collagenase is a treatment context only; the study reports joint-extension measurements, not pharmacokinetic parameters. |
| popPK | OShaughnessy_1993 | irrelevant | 0 | 0 | Collagenase is only used as a pretreatment; no pharmacokinetic parameters are reported. |
| popPK | Pogosyan_2026 | irrelevant | 0 | 0 | Collagenase was used to induce injury, and no collagenase pharmacokinetic parameters are reported. |
| popPK | Rydén_2024 | irrelevant | 0 | 0 | This human synovial-fluid proteomics study measures collagenase 3 abundance, not pharmacokinetics of collagenase as a drug. |
| popPK | Schouten_2025 | irrelevant | 0 | 0 | Collagenase A is only a tissue-digestion reagent; the reported PK data concern DNDI-0690. |
| popPK | Stratford_2014 | irrelevant | 0 | 0 | The pharmacokinetic subject is a PTH-CBD construct, not collagenase, and no collagenase PK values are reported. |
| popPK | Susano_2021 | irrelevant | 0 | 0 | This is an in-vitro enzyme-inhibition study, not a pharmacokinetic study of collagenase. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | Collagenase is only used to induce osteoarthritis, and no collagenase pharmacokinetic parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
