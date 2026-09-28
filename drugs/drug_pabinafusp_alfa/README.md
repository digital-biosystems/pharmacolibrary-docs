<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;pabinafusp alfa&quot;}]"></div>

# pabinafusp alfa

- **generic name:** pabinafusp alfa
- **ATC codes:** `A16AB27`
- **DrugBank:** [DB15633](https://go.drugbank.com/drugs/DB15633) · **PubChem:** not captured
- **groups:** investigational

## About

**Description.** Pabinafusp alfa is under investigation in clinical trial NCT03568175 (A Study of JR-141 in Patients With Mucopolysaccharidosis II).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 09:39 | 3:50 | 0/0/0 | 0/0/0 | 0/0/0 | 4,875/518 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Okuyama_2019.pdf` | Okuyama T et al., Iduronate-2-Sulfatase with Anti-human T…, Molecular therapy : the jou… (2019) | popPK | 8 | [10.1016/j.ymthe.2018.12.005](https://doi.org/10.1016/j.ymthe.2018.12.005) | [30595526](https://pubmed.ncbi.nlm.nih.gov/30595526) | This is the first-in-human PK study of JR-141 (pabinafusp alfa), but the evidence contains only qualitative PK descriptions (peak at 3 hr, dose-dependent, no accumulation) with no numeric CL/V/half-life values, which likely reside in figures or supplementary material not provided. |

<sub>queue written 2026-09-27T09:39:32.765159+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Giugliani_2021 | irrelevant | 3 | 0 | This is an efficacy/safety phase 2 trial abstract; no PK disposition parameters (CL, V, half-life) for pabinafusp alfa are reported or referenced. |
| PD | Giugliani_2021 | not_relevant | 3 | 1 | Only qualitative dose-group comparisons (1/2/4 mg/kg) with descriptive GAG reductions; no numeric PD parameters or concentration-effect relationships reported. |
| popPK | Morimoto_2021 | irrelevant | 2 | 0 | This is a pharmacodynamic efficacy study in MPS II mice with no PK disposition parameters (CL, V, half-life) reported, and no numeric PK values appear in the evidence. |
| popPK | Okuyama_2019 | relevant | 8 | 2 | This is the first-in-human PK study of JR-141 (pabinafusp alfa), but the evidence contains only qualitative PK descriptions (peak at 3 hr, dose-dependent, no accumulation) with no numeric CL/V/half-life values, which likely reside in figures or supplementary material not provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
