<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03B&quot;,&quot;href&quot;:&quot;atc/A03B.md&quot;},{&quot;label&quot;:&quot;homatropine methylbromide&quot;}]"></div>

# homatropine methylbromide

- **generic name:** homatropine methylbromide
- **ATC codes:** `A03BB06`, `A03CB04`
- **DrugBank:** [DB00725](https://go.drugbank.com/drugs/DB00725) · **PubChem:** [CID 6646](https://pubchem.ncbi.nlm.nih.gov/compound/6646)
- **molar mass:** 370.281 g/mol (C17H24BrNO3) — DrugBank
- **groups:** approved

## About

**Description.** Homatropine methylbromide is a quaternary ammonium muscarinic acetylcholine receptor antagonist belonging to the group of medicines called anti-muscarinics. Homatropine is used to treat duodenal or stomach ulcers or intestine problems. It can be used together with antacids or other medicine in the treatment of peptic ulcer. It may also be used to prevent nausea, vomiting, and motion sickness.

**Indication.** Used in conjunction with antacids or histamine H2-receptor antagonists in the treatment of peptic ulcers, gastric ulcers and duodenal ulcers, to reduce further gastric acid secretion and delay gastric emptying.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:18 | 0:23 | 0/0/0 | 0/0/0 | 0/0/0 | 17,533/267 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=homatropine_methylbromide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gowtham_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 4-hydroxy isoleucine from fenugreek, using homatropine only as an internal standard, not as the subject drug. |
| popPK | Hanna_1977 | irrelevant | 0 | 0 | The paper describes a stability-indicating analytical method for pharmaceutical formulations and does not report any pharmacokinetic parameters. |
| PD | Hanna_1977 | not_relevant | 0 | 0 | The paper describes a stability-indicating analytical method for homatropine methylbromide and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Knochen_1987 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PD | Knochen_1987 | not_relevant | 0 | 0 | The paper describes a UV spectrophotometric method for quantifying homatropine methylbromide in dosage forms and contains no pharmacodynamic or exposure-response data. |
| popPK | Pereira_2015 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of naloxone in humans and does not report pharmacokinetic parameters for homatropine_methylbromide. |
| PD | Pereira_2015 | not_relevant | 0 | 0 | The paper is a study protocol for a trial involving naloxone, not homatropine methylbromide, and it does not report any results or PD parameters. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of atropine, scopolamine, and anisodamine, using homatropine only as an internal standard, not as the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
