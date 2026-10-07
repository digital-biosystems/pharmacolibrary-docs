<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01B&quot;,&quot;href&quot;:&quot;atc/S01B.md&quot;},{&quot;label&quot;:&quot;bromfenac&quot;}]"></div>

# bromfenac

- **generic name:** bromfenac
- **ATC codes:** `S01BC11`
- **DrugBank:** [DB00963](https://go.drugbank.com/drugs/DB00963) · **PubChem:** [CID 60726](https://pubchem.ncbi.nlm.nih.gov/compound/60726)
- **molar mass:** 334.165 g/mol (C15H12BrNO3) — DrugBank
- **groups:** approved, withdrawn

## About

Bromfenac is a non-steroidal anti-inflammatory drug used to treat pain and inflammation after eye surgery. It is authorised in the European Union as an eye drop for postoperative ocular pain, and is also approved elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2487682](https://www.wikidata.org/wiki/Q2487682) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:34 | 0:19 | 0/0/0 | 0/0/0 | 0/0/0 | 39,401/467 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bromfenac) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chiang_1996.pdf` | Chiang ST et al., Pharmacokinetic-pharmacodynamic relatio…, Pharmacotherapy (1996) | popPK | 5 | not captured | [8947993](https://pubmed.ncbi.nlm.nih.gov/8947993) | The study describes pharmacokinetic-pharmacodynamic modeling of bromfenac, but specific disposition parameters like clearance (CL) and volume (V) are not explicitly provided in the extracted evidence. |

<sub>queue written 2026-10-07T18:34:15.432583+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chiang_1996 | relevant | 5 | 0 | The study describes pharmacokinetic-pharmacodynamic modeling of bromfenac, but specific disposition parameters like clearance (CL) and volume (V) are not explicitly provided in the extracted evidence. |
| popPK | Park_2026 | irrelevant | 0 | 0 | This is a clinical study on the anatomical effects of topical bromfenac on macular thickness, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Sharif_2013 | irrelevant | 0 | 0 | Bromfenac is mentioned only as a cyclooxygenase inhibitor used in in vitro mechanistic experiments, with no pharmacokinetic parameters reported. |
| popPK | Sharif_2014 | irrelevant | 0 | 0 | Bromfenac is used only as a pharmacological antagonist to block a pathway, not as the subject of a pharmacokinetic study. |
| popPK | Sharif_2014_2 | irrelevant | 0 | 0 | Bromfenac is used only as a cyclooxygenase inhibitor to block prostaglandin release in an in-vitro mechanistic study of bradykinin signaling, with no pharmacokinetic parameters reported for bromfenac. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
