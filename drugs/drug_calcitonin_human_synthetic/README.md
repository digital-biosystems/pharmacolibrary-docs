<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05B&quot;,&quot;href&quot;:&quot;atc/H05B.md&quot;},{&quot;label&quot;:&quot;calcitonin (human synthetic)&quot;}]"></div>

# calcitonin (human synthetic)

- **generic name:** calcitonin (human synthetic)
- **ATC codes:** `H05BA03`
- **DrugBank:** [DB06773](https://go.drugbank.com/drugs/DB06773) · **PubChem:** not captured
- **groups:** approved

## About

Synthetic human calcitonin is a hormone preparation used to lower blood calcium, for example in conditions of excessive calcium or bone breakdown. It is an approved medicine, though it appears to be little used compared with other calcitonin preparations.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:08 | 5:07 | 0/0/0 | 0/0/0 | 0/0/0 | 49,120/33,477 | einfracz / qwen3.8-27b | 6 | 2/4 | 4/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=calcitonin_human_synthetic) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ACTN1 (incorporation into and destabilization), ANPEP (substrate), CALCR (modulator), NAGLU (substrate), PGM1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 398 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tiegs_1986.pdf` | Tiegs RD et al., Secretion and metabolism of monomeric h…, Journal of bone and mineral… (1986) | popPK | 7 | [10.1002/jbmr.5650010407](https://doi.org/10.1002/jbmr.5650010407) | [3503547](https://pubmed.ncbi.nlm.nih.gov/3503547) | Reports quantitative metabolic clearance rates (MCR) for human calcitonin derived from infusion studies in humans. |

<sub>queue written 2026-10-07T10:07:10.171093+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brain_1985 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamic effects (vasodilation) of Calcitonin Gene-Related Peptide (CGRP), not the pharmacokinetic parameters of synthetic human calcitonin. |
| popPK | Cambridge_1992 | irrelevant | 0 | 0 | The study investigates calcitonin gene-related peptide (CGRP) in rats, not calcitonin_human_synthetic, and focuses on hemodynamics rather than PK parameters. |
| popPK | Curto_2020 | irrelevant | 0 | 0 | The paper focuses on ubrogepant, a CGRP receptor antagonist, and does not report pharmacokinetic parameters for the drug calcitonin_human_synthetic. |
| popPK | Dahl_2024 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of the amylin analog NN1213, not calcitonin_human_synthetic. |
| popPK | Elalouf_1988 | irrelevant | 0 | 0 | The study investigates the desensitization of rat renal cells to vasopressin; calcitonin is only used as a comparator hormone to test specificity, and no pharmacokinetic parameters for calcitonin are reported. |
| popPK | Feldman_1977 | irrelevant | 0 | 0 | The study investigates gastrointestinal function in carcinoid patients and only mentions normal serum calcitonin levels as a diagnostic exclusion, reporting no pharmacokinetic parameters for calcitonin. |
| popPK | Greger_2000 | irrelevant | 0 | 0 | The paper is a review of renal physiology where calcitonin is mentioned only as a regulatory hormone influencing sodium transport, not as the subject of a pharmacokinetic study. |
| popPK | Hamdy_2012 | irrelevant | 2 | 5 | The paper is a narrative review that reports some basic PK metrics (Cmax, AUC, half-life) for salmon calcitonin but lacks the specific quantitative disposition parameters (CL, V, Q, ka) required for a population-PK model. |
| popPK | Hughes_1992 | irrelevant | 0 | 0 | The paper discusses gallium nitrate, not calcitonin_human_synthetic. |
| popPK | Mortensen_1993 | irrelevant | 0 | 0 | The study measures serum levels of calcitonin as a biomarker of bone turnover in rats, but does not model or report pharmacokinetic parameters (clearance, volume, half-life) for calcitonin as the subject drug. |
| popPK | Paemeleire_2018 | irrelevant | 0 | 0 | The paper is a review of monoclonal antibodies targeting CGRP, not a pharmacokinetic study of calcitonin. |
| popPK | Pelizzo_1994 | irrelevant | 0 | 0 | The paper is a clinical surgical study on medullary thyroid cancer where calcitonin is used as a diagnostic marker, not a pharmacokinetic study of the drug. |
| popPK | Pinho-Ribeiro_2023 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on bacterial meningitis and does not report any pharmacokinetic parameters for calcitonin_human_synthetic. |
| popPK | Scuteri_2019 | irrelevant | 0 | 0 | The paper reviews eptinezumab (a CGRP antibody) for migraine and does not report pharmacokinetic parameters for the subject drug calcitonin_human_synthetic. |
| popPK | Spuntarelli_2021 | irrelevant | 0 | 0 | The paper is a review of eptinezumab (a CGRP monoclonal antibody) and does not study calcitonin_human_synthetic. |
| popPK | Walton_1985 | irrelevant | 0 | 0 | The study focuses on disodium etidronate's effect on skeletal blood flow, using calcitonin only as a historical comparator without reporting any quantitative pharmacokinetic parameters for calcitonin. |
| popPK | Wootton_1981 | irrelevant | 0 | 0 | The study measures skeletal blood flow using 18F and does not report pharmacokinetic parameters (CL, V, t1/2) for calcitonin. |
| popPK | Zhu_2021 | irrelevant | 0 | 0 | The paper is a review on oral delivery technologies for peptides and only mentions calcitonin in a table regarding oral bioavailability enhancement, not providing pharmacokinetic parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
