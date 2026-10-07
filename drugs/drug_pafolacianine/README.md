<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;pafolacianine&quot;}]"></div>

# pafolacianine

- **generic name:** pafolacianine
- **ATC codes:** `V04CX10`
- **DrugBank:** [DB15413](https://go.drugbank.com/drugs/DB15413) · **PubChem:** not captured
- **molar mass:** 1326.49 g/mol (C61H67N9O17S4) — DrugBank
- **groups:** approved, investigational

## About

Pafolacianine is a diagnostic imaging agent used to help identify ovarian cancer during surgery. It is an approved drug, though it appears to be a niche product rather than one in widespread use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27277759](https://www.wikidata.org/wiki/Q27277759) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:30 | 1:25 | 0/0/0 | 0/0/0 | 0/0/0 | 42,801/935 | ollama / glm-5.3-flash | 4 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pafolacianine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: FOLR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hoogstins_2016.pdf` | Hoogstins CE et al., A Novel Tumor-Specific Agent for Intrao…, Clinical cancer research :… (2016) | popPK | 6 | [10.1158/1078-0432.CCR-15-2640](https://doi.org/10.1158/1078-0432.CCR-15-2640) | [27306792](https://pubmed.ncbi.nlm.nih.gov/27306792) | This is a human PK study of OTL38 (pafolacianine) with blood/skin pharmacokinetics assessed, but no numeric parameter values (CL, V, half-life) appear in the provided evidence. |
| `Mahalingam_2018.pdf` | Mahalingam SM et al., Evaluation of Novel Tumor-Targeted Near…, Journal of medicinal chemis… (2018) | popPK | 6 | [10.1021/acs.jmedchem.8b01115](https://doi.org/10.1021/acs.jmedchem.8b01115) | [30296376](https://pubmed.ncbi.nlm.nih.gov/30296376) | OTL38 (pafolacianine) PK is described with a half-time (&lt;30 min) but detailed quantitative disposition parameters appear to live in figures/supplementary material not provided. |

<sub>queue written 2026-10-07T23:30:00.966806+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2015 | irrelevant | 2 | 1 | Preclinical mouse imaging comparison of EC17 vs OTL38 (pafolacianine) reporting only signal-to-background ratios and biodistribution, with no quantitative PK parameters (CL, V, half-life); tracer clearance is only shown in a figure. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Hoogstins_2016 | relevant | 6 | 2 | This is a human PK study of OTL38 (pafolacianine) with blood/skin pharmacokinetics assessed, but no numeric parameter values (CL, V, half-life) appear in the provided evidence. |
| popPK | Lehane_2024 | irrelevant | 1 | 0 | Clinical case series of surgical fluorescence imaging with no PK parameters reported. |
| popPK | Mahalingam_2018 | relevant | 6 | 3 | OTL38 (pafolacianine) PK is described with a half-time (&lt;30 min) but detailed quantitative disposition parameters appear to live in figures/supplementary material not provided. |
| popPK | Montaño_2025 | irrelevant | 0 | 0 | This is a fluorophore design/imaging paper; pafolacianine is only mentioned as an approved comparator, with no PK parameters reported. |
| popPK | Pace_2025 | irrelevant | 2 | 1 | Pafolacianine (OTL38) is only a contrast agent used for CTC labeling; no PK model or quantitative disposition parameters (CL, V, ka) for it are reported, and the only half-life mention is a literature citation. |
| popPK | Pace_2026 | irrelevant | 1 | 1 | This is a contrast-agent/CTC imaging study, not a PK study; only a passing mention of a 2–3 h plasma clearance half-life for OTL38 with no CL, V, or model parameters, and no numeric PK values for pafolacianine are present. |
| popPK | Peng_2026 | irrelevant | 0 | 0 | The paper is about a different NIR-II probe (OCTP); pafolacianine (Cytalux) is only a comparator, and no numeric PK parameters appear. |
| popPK | Shum_2016 | irrelevant | 0 | 0 | Surgical case report of OTL38 imaging with no PK disposition parameters (CL, V, half-life, model) reported anywhere. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
