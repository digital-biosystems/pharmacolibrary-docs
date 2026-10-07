<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;hepatitis B immunoglobulin&quot;}]"></div>

# hepatitis B immunoglobulin

- **generic name:** hepatitis B immunoglobulin
- **ATC codes:** `J06BB04`
- **DrugBank:** [DB05276](https://go.drugbank.com/drugs/DB05276) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Hepatitis B immune globulin is a specific immunoglobulin (antibody) preparation used against hepatitis B infection. It is an approved medicine, given as an injection, and is used in many countries for protection against hepatitis B, for example after exposure or around the time of liver transplantation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5731700](https://www.wikidata.org/wiki/Q5731700) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:30 | 0:53 | 0/2/0 | 0/0/0 | 0/0/0 | 32,633/1,059 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Han_2017_reference](drugs/drug_hepatitis_b_immunoglobulin/HepatitisBImmunoglobulin_Han2017_reference.md) | — | 1-compartment (no model) | 0 | Han S et al., A 6-month mixed-effect pharmacokinetic…, Drug design, development an… (2017) | [10.2147/DDDT.S134711](https://doi.org/10.2147/DDDT.S134711) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wahl_1983_reference](drugs/drug_hepatitis_b_immunoglobulin/HepatitisBImmunoglobulin_Wahl1983_reference.md) | — | 1-compartment (no model) | 0 | Wahl M et al., Recovery and turnover rate of hepatitis…, Developments in biological… (1983) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wahl_1983.pdf` | Wahl M et al., Recovery and turnover rate of hepatitis…, Developments in biological… (1983) | popPK | 9 | not captured | [6653889](https://pubmed.ncbi.nlm.nih.gov/6653889) | The study reports quantitative PK parameters (half-life 21.7 days, recovery/bioavailability ~19.2%) for hepatitis B immunoglobulin in human volunteers using a compartmental model. |

<sub>queue written 2026-10-07T14:29:15.805157+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anley_2023 | irrelevant | 0 | 0 | The paper is an epidemiological compartmental model of Hepatitis B virus transmission dynamics, not a pharmacokinetic study of hepatitis_b_immunoglobulin (HBIG). |
| popPK | Bierhoff_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tenofovir (TFV) for hepatitis B treatment, not hepatitis_b_immunoglobulin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:29 UTC</sub>
