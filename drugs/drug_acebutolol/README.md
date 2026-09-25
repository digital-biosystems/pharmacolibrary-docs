<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;acebutolol&quot;}]"></div>

# acebutolol

- **generic name:** acebutolol
- **ATC codes:** `C07AB04`, `C07BB04`
- **DrugBank:** [DB01193](https://go.drugbank.com/drugs/DB01193)
- **groups:** approved, investigational

## About

**Description.** A cardioselective beta-adrenergic antagonist with little effect on the bronchial receptors. The drug has stabilizing and quinidine-like effects on cardiac rhythm as well as weak inherent sympathomimetic action.

**Indication.** For the management of hypertension and ventricular premature beats in adults.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 11 | 4/0 | 3/8 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acebutolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…al mechanisms 50% to 60%, which includes excretion into the bile and direct passage throug…”</sub> | prose |
| excretion | kidney | <sub>“…Elimination via renal excretion is approximately 30% to 40% and by non-renal mech…”</sub> | prose |
| excretion | small intestine | <sub>“…udes excretion into the bile and direct passage through the intestinal wall.…”</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (partial agonist), ADRB2 (partial agonist).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 21 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Scott_1995.pdf` | Scott PJ et al., The Effects of Age on the Pharmacokinet…, American journal of therape… (1995) | pd | 5 | [10.1097/00045391-199508000-00004](https://doi.org/10.1097/00045391-199508000-00004) | [11854823](https://www.ncbi.nlm.nih.gov/pubmed/11854823) | metadata signals extractable PD data (Concentration-Effect) |
| `Kumar_2023.pdf` | Kumar U et al., Exploring the repurposing potential of…, Anti-cancer drugs (2023) | pd | 4 | [10.1097/CAD.0000000000001509](https://doi.org/10.1097/CAD.0000000000001509) | [36847075](https://www.ncbi.nlm.nih.gov/pubmed/36847075) | metadata signals extractable PD data (IC50) |
| `Maideen_2021.pdf` | Maideen NMP et al., A Review on Pharmacokinetic and Pharmac…, Current drug metabolism (2021) | pgx | 7 | [10.2174/1389200222666210614112529](https://doi.org/10.2174/1389200222666210614112529) | [34182907](https://www.ncbi.nlm.nih.gov/pubmed/34182907) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-08-02T13:56:35.601783+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abrahamsson_1989 | irrelevant | 0 | 0 | The study reports in-vitro receptor pharmacology parameters (pKB, pD2) rather than quantitative population-pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Klug_1994 | irrelevant | 0 | 0 | The study is an in-vitro embryotoxicity assay reporting EC50 and tissue concentrations, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Lumley_1977 | irrelevant | 0 | 0 | The paper is an in-vitro receptor pharmacology study reporting pA2 values, not a pharmacokinetic study with disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
