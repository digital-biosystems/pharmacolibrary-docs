<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;tiotropium bromide&quot;}]"></div>

# tiotropium bromide

- **generic name:** tiotropium bromide
- **ATC codes:** `R03AL06`, `R03AL10`, `R03BB04`
- **DrugBank:** [DB01409](https://go.drugbank.com/drugs/DB01409) · **PubChem:** [CID 5487427](https://pubchem.ncbi.nlm.nih.gov/compound/5487427)
- **molar mass:** 392.512 g/mol (C19H22NO4S2) — DrugBank
- **groups:** approved, investigational

## About

Tiotropium bromide is an inhaled anticholinergic bronchodilator used for obstructive airway and other lung diseases. It is an approved medicine and is widely used as a maintenance inhalation treatment for breathing disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424316](https://www.wikidata.org/wiki/Q424316) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:09 | 0:20 | 0/0/0 | 0/0/0 | 0/0/0 | 39,510/501 | ollama / glm-5.3-flash | 5 | 0/1 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tiotropium_bromide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` substrate | DrugBank actor |
| absorption | small intestine | `SLC22A4` substrate, `SLC22A5` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Singh_2018.pdf` | Singh D et al., The pharmacokinetics, pharmacodynamics…, British journal of clinical… (2018) | popPK | 5 | [10.1111/bcp.13645](https://doi.org/10.1111/bcp.13645) | [29790581](https://pubmed.ncbi.nlm.nih.gov/29790581) | A human PK study of tiotropium (PUR0200 vs HandiHaler) but the abstract gives no numeric PK parameters (Cmax, AUC, CL, t½), which likely appear in tables/figures not provided. |

<sub>queue written 2026-10-07T15:09:01.917703+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calverley_2016 | irrelevant | 0 | 0 | This is a bronchodilator efficacy (FEV1/FVC) comparison of tiotropium devices; no PK disposition parameters (CL, V, ka, half-life, population-PK model) are reported, only a mention that PK profiles were similar. |
| popPK | Keam_2004 | irrelevant | 2 | 2 | A narrative review of tiotropium's clinical efficacy with only scattered descriptive PK values (Cmax, t½, bioavailability) and no compartmental/population-PK parameters. |
| popPK | Maesen_1995 | irrelevant | 2 | 0 | This is a pharmacodynamic (FEV1) dose-response study in COPD patients with no PK disposition parameters reported. |
| popPK | Singh_2018 | relevant | 5 | 2 | A human PK study of tiotropium (PUR0200 vs HandiHaler) but the abstract gives no numeric PK parameters (Cmax, AUC, CL, t½), which likely appear in tables/figures not provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
