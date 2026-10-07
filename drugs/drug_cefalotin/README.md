<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefalotin&quot;}]"></div>

# cefalotin

- **generic name:** cefalotin
- **ATC codes:** `J01DB03`
- **DrugBank:** [DB00456](https://go.drugbank.com/drugs/DB00456) · **PubChem:** [CID 6024](https://pubchem.ncbi.nlm.nih.gov/compound/6024)
- **molar mass:** 396.438 g/mol (C16H16N2O6S2) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Cefalotin is a first-generation cephalosporin antibiotic used to treat bacterial infections such as staphylococcal, urinary tract, and upper respiratory tract infections. It has been withdrawn from use, though it was once approved for human and veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2736126](https://www.wikidata.org/wiki/Q2736126) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:47 | 0:16 | 0/0/0 | 0/0/0 | 0/0/0 | 15,017/493 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefalotin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC15A1` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `SLC22A7` inhibitor | DrugBank actor |
| excretion | kidney | `SLC15A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC22A11 (inhibitor).</sub>

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

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brandis_1975 | irrelevant | 0 | 0 | The paper is a clinical case report discussing acute renal failure etiology where cefalotin was co-administered, with no pharmacokinetic parameters reported. |
| popPK | Dalley_2007 | irrelevant | 2 | 1 | The study reports qualitative/summary time-duration metrics (time above MIC) rather than quantitative pharmacokinetic disposition parameters (clearance, volume, rate constants). |
| popPK | Jungers_1977 | irrelevant | 0 | 0 | The study focuses on the nephrotoxicity of gentamicin, with cefalotin mentioned only as a co-administered antibiotic and not as the subject of a PK analysis. |
| popPK | Rolin_1984 | irrelevant | 0 | 0 | The study measures in-vitro effects on bacterial cell wall synthesis, not pharmacokinetic disposition parameters in humans or animals. |
| popPK | Shah_1976 | irrelevant | 0 | 0 | The paper describes in-vitro bactericidal dose-activity relationships for cefalotin and does not report any pharmacokinetic parameters (CL, V, t1/2) for the drug in a biological system. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
