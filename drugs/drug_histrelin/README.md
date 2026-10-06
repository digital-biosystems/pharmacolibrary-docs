<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02A&quot;,&quot;href&quot;:&quot;atc/L02A.md&quot;},{&quot;label&quot;:&quot;histrelin&quot;}]"></div>

# histrelin

- **generic name:** histrelin
- **ATC codes:** `L02AE05`
- **DrugBank:** [DB06788](https://go.drugbank.com/drugs/DB06788) · **PubChem:** [CID 56927879](https://pubchem.ncbi.nlm.nih.gov/compound/56927879)
- **molar mass:** 1443.632 g/mol (C70H94N18O16) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Histrelin is a gonadotropin-releasing hormone analogue used in endocrine therapy, notably for prostate cancer and for central precocious puberty. It remains an approved drug, though it has been withdrawn in some markets and is also investigational for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5871149](https://www.wikidata.org/wiki/Q5871149) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:07 | 2:17 | 0/0/0 | 0/0/0 | 0/0/0 | 51,478/2,328 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=histrelin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GNRHR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Campen_1995.pdf` | Campen CA et al., Potent pituitary-gonadal axis suppressi…, Biochemical pharmacology (1995) | pd | 4 | [10.1016/0006-2952(95)00027-w](https://doi.org/10.1016/0006-2952(95)00027-w) | [7763313](https://www.ncbi.nlm.nih.gov/pubmed/7763313) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T22:06:56.296248+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Kofahi_2021 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of cortisol/hydrocortisone, not histrelin. |
| popPK | Campen_1995 | irrelevant | 0 | 0 | The paper focuses on the biological activity of a GnRH antagonist (azaline B) and uses histrelin only as a tool compound in in-vitro and in-vivo receptor assays, not as the subject of a pharmacokinetic study. |
| popPK | Dineen_2005 | irrelevant | 4 | 1 | While the study reports mean serum concentrations (steady-state exposure) for histrelin, it does not explicitly report derived quantitative disposition parameters (CL, V, ka) or a population PK model parameterization in the provided text. |
| popPK | Paci_2026 | irrelevant | 0 | 0 | The paper describes a nanofluidic drug delivery device and uses generic compounds for release testing; it does not report pharmacokinetic parameters for histrelin. |
| popPK | Ruplin_2024 | irrelevant | 0 | 0 | This is a review of drug-drug interactions that explicitly states no PK DDIs are expected for histrelin and does not provide any quantitative PK parameter values (CL, V, etc.) for the drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
