<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;difenoxin&quot;}]"></div>

# difenoxin

- **generic name:** difenoxin
- **ATC codes:** `A07DA04`
- **DrugBank:** [DB01501](https://go.drugbank.com/drugs/DB01501) · **PubChem:** [CID 34328](https://pubchem.ncbi.nlm.nih.gov/compound/34328)
- **molar mass:** 424.5341 g/mol (C28H28N2O2) — DrugBank
- **groups:** approved, illicit

## About

**Description.** Difenoxin is a 4-phenylpiperidine which is closely related to the opioid analgesic meperidine. Difenoxin alone is a USA Schedule I controlled drug, as it may be habit forming. However, it is listed as a Schedule IV controlled drug if combined with atropine, which is added to decrease deliberate misuse. Motofen(R) is a brand mixture which combines atropine sulfate and difenoxin hydrochloride. It is approved by the FDA to treat acute and chronic diarrhea. 
 
Difenoxin is an active metabolite of the anti-diarrheal drug, diphenoxylate, which is also used in combination with atropine in the brand mixture Lomotil(R). It works mostly in the periphery and activates opioid receptors in the intestine rather than the central nervous system (CNS). [3] Difenoxin is also closely related to loperamide, but unlike loperamide it is still capable of crossing the blood brain barrier to produce weak sedative and analgesic effects. However, the antidiarrheal potency of difenoxin is much greater than its CNS effects, which makes it an attractive alternative to other opioids.

**Indication.** Motofen(R) is a combination of atropine, an anticholinergic drug, and difenoxin, an antidiarrheal drug. It has been used in many countries for many years as a second line opioid-agonist antidiarrheal, which exists an intermediate between loperamide and paragoric. [2]

Diarrhea which is a result of cyclic or diarrhea predominant Inflammatory Bowel Syndrome may not be treated effectively with difenoxin, diphenoxylate, or loperamide. As such, diarrhea and cramping which does not respond to non-centrally acting derivatives or belladonna derivatives such as atropine are often treated with conservative doses of codeine. In patients with acute ulcerative colitis, as induction of toxic megacolon is possible, and thus use of Motofen(R) is cautioned.  

Motofen(R) has been assigned pregnancy category C by the FDA, and is to be used only when the potential benefits outweigh the potential risk to the fetus. The safety of use during lactation is unknown and thus not recommended.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 22:39 | 0:39 | 0/0/0 | 0/0/0 | 0/0/0 | 5,835/399 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=difenoxin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>“…excreted, mainly as conjugates, in urine and feces…”</sub> | prose |
| excretion | kidney | <sub>“…excreted, mainly as conjugates, in urine…”</sub> | prose |

<sub>Actors without a tissue in the table: OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

---
<sub>Generated by `docs.py` (scholarv2)</sub>
