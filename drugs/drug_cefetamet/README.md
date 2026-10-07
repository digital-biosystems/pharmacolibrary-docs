<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefetamet&quot;}]"></div>

# cefetamet

- **generic name:** cefetamet
- **ATC codes:** `J01DD10`
- **DrugBank:** [DB13504](https://go.drugbank.com/drugs/DB13504) · **PubChem:** not captured
- **molar mass:** 397.42 g/mol (C14H15N5O5S2) — DrugBank
- **groups:** investigational

## About

Cefetamet is a third-generation cephalosporin antibiotic developed for treating bacterial infections. It is considered investigational and does not appear to be an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1083757](https://www.wikidata.org/wiki/Q1083757) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:35 | 0:43 | 0/1/0 | 0/0/0 | 0/0/0 | 37,851/1,732 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Li_2014_reference](drugs/drug_cefetamet/Cefetamet_Li2014_reference.md) | — | 1-compartment (no model) | 0 | Li CZ et al., [Phase I clinical trial on the safety o…, Sichuan da xue xue bao. Yi… (2014) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Blouin_1990.pdf` | Blouin RA et al., Influence of antacid and ranitidine on…, Antimicrobial agents and ch… (1990) | popPK | 10 | [10.1128/AAC.34.9.1744](https://doi.org/10.1128/AAC.34.9.1744) | [1981000](https://pubmed.ncbi.nlm.nih.gov/1981000) | The study is a relevant PK interaction trial for cefetamet in humans, but the provided text contains only qualitative results (e.g., "no significant differences") and design details, with no specific numeric parameter values for clearance, volume, or half-life. |
| `Li_2014.pdf` | Li CZ et al., [Phase I clinical trial on the safety o…, Sichuan da xue xue bao. Yi… (2014) | popPK | 9 | not captured | [25286691](https://pubmed.ncbi.nlm.nih.gov/25286691) | The study reports quantitative PK parameters (Cmax, AUC, half-life) and a two-compartment model for cefetamet in humans, though specific clearance or volume values are not explicitly listed in the text. |
| `Li_2016.pdf` | Li C et al., Using Monte Carlo simulation to determi…, Journal of chemotherapy (Fl… (2016) | popPK | 9 | [10.1179/1973947814Y.0000000214](https://doi.org/10.1179/1973947814Y.0000000214) | [25252727](https://pubmed.ncbi.nlm.nih.gov/25252727) | The study reports quantitative PK parameters (Cmax, AUC, t1/2) for cefetamet in humans, which allows for derivation of clearance and volume, although specific CL and V values are not explicitly listed. |

<sub>queue written 2026-10-07T10:34:30.045929+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blouin_1990 | relevant | 10 | 1 | The study is a relevant PK interaction trial for cefetamet in humans, but the provided text contains only qualitative results (e.g., "no significant differences") and design details, with no specific numeric parameter values for clearance, volume, or half-life. |
| popPK | Mahmood_2020 | relevant | 6 | 2 | The study includes cefetamet as one of ten drugs to model clearance in children, but specific numeric parameter values for cefetamet are in supplementary material not provided. |
| popPK | van_1995 | irrelevant | 0 | 0 | The study is an in-vitro microbiology assessment of antibacterial activity and intracellular concentrations, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:34 UTC</sub>
