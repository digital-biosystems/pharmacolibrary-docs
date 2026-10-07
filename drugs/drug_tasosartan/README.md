<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;tasosartan&quot;}]"></div>

# tasosartan

- **generic name:** tasosartan
- **ATC codes:** `C09CA05`
- **DrugBank:** [DB01349](https://go.drugbank.com/drugs/DB01349) · **PubChem:** [CID 60919](https://pubchem.ncbi.nlm.nih.gov/compound/60919)
- **molar mass:** 411.4591 g/mol (C23H21N7O) — DrugBank
- **groups:** experimental

## About

Tasosartan is an angiotensin II receptor antagonist, a drug class used to lower blood pressure in hypertension. It remains experimental and does not appear to be an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1317131](https://www.wikidata.org/wiki/Q1317131) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:23 | 0:18 | 0/0/0 | 0/0/0 | 0/0/0 | 9,125/340 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tasosartan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: AGTR1 (target), AGTR2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Andrawis_2000.pdf` | Andrawis NS et al., A pharmacokinetic and pharmacodynamic s…, Journal of clinical pharmac… (2000) | popPK | 8 | [10.1177/00912700022008892](https://doi.org/10.1177/00912700022008892) | [10709151](https://pubmed.ncbi.nlm.nih.gov/10709151) | The study is a relevant human PK/PD interaction study for tasosartan, but the specific quantitative PK parameters (CL, V, etc.) are not present in the provided evidence, which only reports pharmacodynamic blood pressure data. |

<sub>queue written 2026-10-07T08:23:35.867255+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andrawis_2000 | relevant | 8 | 0 | The study is a relevant human PK/PD interaction study for tasosartan, but the specific quantitative PK parameters (CL, V, etc.) are not present in the provided evidence, which only reports pharmacodynamic blood pressure data. |
| popPK | Brunner_1997 | irrelevant | 0 | 0 | The paper is a review focused on irbesartan, and tasosartan is only mentioned as a comparator without providing quantitative PK parameters for it. |
| PD | Brunner_1997 | not_relevant | 0 | 0 | Tasosartan is mentioned only in a pharmacokinetic comparison; no tasosartan-specific exposure- or dose-response relationship or numeric PD parameters are reported or derivable. |
| popPK | Buchwalder-Csajka_1999 | irrelevant | 0 | 0 | The paper evaluates angiotensin challenge methodology for pharmacodynamic profiling and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for tasosartan. |
| PD | Buchwalder-Csajka_1999 | not_relevant | 0 | 0 | The reported numeric dose-response parameters describe angiotensin challenges, not tasosartan exposure or dose; no tasosartan-specific relationship is extractable. |
| popPK | Lacourcière_1998 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting blood pressure changes and does not contain pharmacokinetic parameters (CL, V, t1/2) for tasosartan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
