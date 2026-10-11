<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01F&quot;,&quot;href&quot;:&quot;atc/S01F.md&quot;},{&quot;label&quot;:&quot;homatropine&quot;}]"></div>

# homatropine

- **generic name:** homatropine
- **ATC codes:** `S01FA05`
- **DrugBank:** [DB11181](https://go.drugbank.com/drugs/DB11181) · **PubChem:** not captured
- **molar mass:** 275.348 g/mol (C16H21NO3) — DrugBank
- **groups:** approved

## About

Homatropine is an anticholinergic eye medicine used to dilate the pupil and temporarily paralyse the eye's focusing muscle, for example during eye examinations and in certain eye conditions. It remains an approved medication and is used in ophthalmic practice, mainly as eye drops in eye-care settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1038115](https://www.wikidata.org/wiki/Q1038115) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:10 | 0:11 | 0/0/0 | 0/0/0 | 0/0/0 | 21,255/569 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=homatropine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CES1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cherkaoui_1997 | irrelevant | 0 | 0 | The paper describes a capillary zone electrophoresis method for quantifying homatropine in ophthalmic formulations and does not report any pharmacokinetic parameters or in vivo/in vitro disposition data. |
| popPK | Gore_2012 | irrelevant | 0 | 0 | This is a pharmacodynamic study assessing visual efficacy in rats, not a pharmacokinetic study reporting quantitative disposition parameters for homatropine. |
| popPK | Hanna_1977 | irrelevant | 0 | 0 | The paper describes a stability-indicating analytical method for homatropine in dosage forms, not a pharmacokinetic study. |
| popPK | Jinagal_2019 | irrelevant | 0 | 0 | The paper is a clinical case report on systemic toxicity of topical corticosteroids, and homatropine is merely listed as a co-administered drug without any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Knochen_1987 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| popPK | Majlát_1984 | irrelevant | 0 | 0 | The paper describes a gas chromatography method for assaying drugs in tablets, where homatropine is used as an internal standard for atropine, not a subject of pharmacokinetic study. |
| popPK | Waller_1979 | irrelevant | 0 | 0 | The paper is a clinical case report on relapsing polychondritis where homatropine is used as a therapeutic agent, not as a subject of pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
