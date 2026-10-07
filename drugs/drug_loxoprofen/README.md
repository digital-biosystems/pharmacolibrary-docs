<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;loxoprofen&quot;}]"></div>

# loxoprofen

- **generic name:** loxoprofen
- **ATC codes:** `M01AE19`, `M02AA31`
- **DrugBank:** [DB09212](https://go.drugbank.com/drugs/DB09212) · **PubChem:** [CID 3965](https://pubchem.ncbi.nlm.nih.gov/compound/3965)
- **molar mass:** 246.3016 g/mol (C15H18O3) — DrugBank
- **groups:** approved, investigational

## About

Loxoprofen is a non-steroidal anti-inflammatory drug used to treat painful inflammatory conditions such as periarthritis. It is an approved medication, available as oral and topical products for joint and muscular pain, and is used mainly in Asian countries such as Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2759348](https://www.wikidata.org/wiki/Q2759348) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:54 | 1:36 | 0/0/0 | 0/0/0 | 0/0/0 | 20,695/604 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=loxoprofen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | `CYP3A4` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CBR1 (substrate), PTGS1 (target), PTGS2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jang_2024.pdf` | Jang JH et al., Population Pharmacokinetics of Loxoprof…, Daru : journal of Faculty o… (2024) | popPK | 10 | [10.1007/s40199-024-00533-y](https://doi.org/10.1007/s40199-024-00533-y) | [39145828](https://pubmed.ncbi.nlm.nih.gov/39145828) | The paper describes a population pharmacokinetic model for loxoprofen in humans and identifies covariates (BSA, CrCL, albumin), but the specific numeric parameter estimates (means, SDs, typical values) are not explicitly listed in the provided abstract text, only qualitative trends and simulation outcomes. |
| `Kim_2017.pdf` | Kim TH et al., Development of a Physiologically Releva…, Molecular pharmaceutics (2017) | popPK | 9 | [10.1021/acs.molpharmaceut.6b00677](https://doi.org/10.1021/acs.molpharmaceut.6b00677) | [27809538](https://pubmed.ncbi.nlm.nih.gov/27809538) | The study reports a population PK model for loxoprofen in Beagle dogs with specific formulation parameters, but the actual numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| `Tanaka_2016.pdf` | Tanaka S et al., Prediction of fetal ductus arteriosus c…, International journal of cl… (2016) | pd | 5 | [10.5414/CP202532](https://doi.org/10.5414/CP202532) | [27285464](https://www.ncbi.nlm.nih.gov/pubmed/27285464) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-07T01:54:09.721966+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jang_2024 | relevant | 10 | 4 | The paper describes a population pharmacokinetic model for loxoprofen in humans and identifies covariates (BSA, CrCL, albumin), but the specific numeric parameter estimates (means, SDs, typical values) are not explicitly listed in the provided abstract text, only qualitative trends and simulation outcomes. |
| popPK | Kim_2017 | relevant | 9 | 2 | The study reports a population PK model for loxoprofen in Beagle dogs with specific formulation parameters, but the actual numeric parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| PGx | Liang_2026 | not_relevant | 0 | 0 | The paper is a study of traditional Chinese medicine plasters in a rat model and does not investigate pharmacogenomic effects on loxoprofen. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper describes the synthesis and anticancer activity of novel hybrid compounds, not the pharmacogenomics of loxoprofen itself. |
| PGx | Paudel_2019 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A modulation) in a mouse model, not pharmacogenomic effects of gene variants on human PK/PD parameters. |
| PGx | Shrestha_2018 | not_relevant | 0 | 0 | The study investigates metabolic enzymes (CYPs, UGTs) but does not report pharmacogenomic variants or their effects on PK/PD parameters. |
| popPK | Tanaka_2016 | irrelevant | 2 | 0 | The study is a modeling/prediction paper that uses loxoprofen as one of many NSAIDs, but no quantitative PK parameter values for loxoprofen are provided in the evidence (data was collected from literature but not displayed). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
