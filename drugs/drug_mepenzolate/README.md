<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;mepenzolate&quot;}]"></div>

# mepenzolate

- **generic name:** mepenzolate
- **ATC codes:** `A03AB12`
- **DrugBank:** [DB04843](https://go.drugbank.com/drugs/DB04843) · **PubChem:** [CID 4057](https://pubchem.ncbi.nlm.nih.gov/compound/4057)
- **molar mass:** 340.436 g/mol (C21H26NO3) — DrugBank
- **groups:** approved, withdrawn

## About

**Description.** Mepenzolate is a post-ganglionic parasympathetic inhibitor. It decreases gastric acid and pepsin secretion and suppresses spontaneous contractions of the colon. Mepenzolate diminishes gastric acid and pepsin secretion. Mepenzolate also suppresses spontaneous contractions of the colon. Pharmacologically, it is a post-ganglionic parasympathetic inhibitor. It has not been shown to be effective in contributing to the healing of peptic ulcer, decreasing the rate of recurrence, or preventing complications.

**Indication.** For use as adjunctive therapy in the treatment of peptic ulcer. It has not been 
shown to be effective in contributing to the healing of peptic ulcer, decreasing the rate of recurrence, or preventing complications.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:57 | 0:36 | 0/0/0 | 0/0/0 | 0/0/0 | 27,112/318 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/2 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mepenzolate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>“…excreted in the urine over a 5-day period…”</sub> | prose |
| absorption | small intestine | <sub>“…appears in the next 5 days in the feces and presumably has not been absorbed…”</sub> | prose |
| excretion | kidney | <sub>“…excreted in the urine…”</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM3 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jeong_2020 | irrelevant | 0 | 0 | Mepenzolate is used only as a GPR109A antagonist to validate the mechanism of the study drug (ASA-azo-NA), and no pharmacokinetic parameters for mepenzolate are reported. |
| PD | Jeong_2020 | not_relevant | 0 | 0 | The paper reports an EC50 for a GPR109A agonist (5-ANA), not for mepenzolate, and only qualitatively mentions mepenzolate as an antagonist without providing any dose-response or exposure-response data for it. |
| popPK | Kang_2022 | irrelevant | 0 | 0 | Mepenzolate is used only as a GPR109A antagonist to block the effect of the study drug (trans-cinnamic acid), not as the subject of pharmacokinetic analysis. |
| PD | Kang_2022 | not_relevant | 0 | 0 | The paper reports an EC50 for trans-cinnamic acid (tCA) as a GPR109A agonist, but mepenzolate is used only as a qualitative antagonist to block the effect; no dose-response or exposure-response relationship for mepenzolate is reported. |
| popPK | Munawar_2016 | irrelevant | 0 | 0 | The paper is a study on snake venom peptides and ACE inhibition, and does not mention mepenzolate or report any pharmacokinetic parameters for it. |
| PD | Munawar_2016 | not_relevant | 0 | 0 | The paper studies snake venom peptides and their inhibition of angiotensin-converting enzyme, not the pharmacodynamics of mepenzolate. |
| popPK | Saitoh_1986 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding mepenzolate pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
