<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09I&quot;,&quot;href&quot;:&quot;atc/V09I.md&quot;},{&quot;label&quot;:&quot;fluorodopa (18F)&quot;}]"></div>

# fluorodopa (18F)

- **generic name:** fluorodopa (18F)
- **ATC codes:** `V09IX05`
- **DrugBank:** [DB13848](https://go.drugbank.com/drugs/DB13848) · **PubChem:** not captured
- **molar mass:** 214.183 g/mol (C9H10FNO4) — DrugBank
- **groups:** approved, investigational

## About

Fluorodopa F-18 is a radioactive tracer used as a diagnostic radiopharmaceutical for detecting tumours. It is an approved imaging agent, also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27121509](https://www.wikidata.org/wiki/Q27121509) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:54 | 1:38 | 0/1/0 | 0/0/0 | 0/0/0 | 18,424/2,292 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kratochwil_2014_reference](drugs/drug_fluorodopa_18f/Fluorodopa18f_Kratochwil2014_reference.md) | — | 1-compartment (no model) | 0 | Kratochwil C et al., Intra-individual comparison of ¹⁸F-FET…, Neuro-oncology (2014) | [10.1093/neuonc/not199](https://doi.org/10.1093/neuonc/not199) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fluorodopa_18f) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DDC (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Doudet_1991.pdf` | Doudet DJ et al., Distribution and kinetics of 3-O-methyl…, Journal of cerebral blood f… (1991) | popPK | 8 | [10.1038/jcbfm.1991.129](https://doi.org/10.1038/jcbfm.1991.129) | [1874805](https://pubmed.ncbi.nlm.nih.gov/1874805) | The study models the kinetics of the main metabolite of fluorodopa_18f ([18F]3-OM-DOPA) in rhesus monkeys, which is relevant to fluorodopa_18f PK, but specific numeric parameter values are not present in the provided text. |
| `Kratochwil_2014.pdf` | Kratochwil C et al., Intra-individual comparison of ¹⁸F-FET…, Neuro-oncology (2014) | popPK | 8 | [10.1093/neuonc/not199](https://doi.org/10.1093/neuonc/not199) | [24305717](https://pubmed.ncbi.nlm.nih.gov/24305717) | The study reports quantitative kinetic parameters (k1) from compartmental modeling for 18F-DOPA in human brain tumors. |

<sub>queue written 2026-10-07T15:53:12.273956+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Brooks_1998 | not_relevant | 0 | 0 | The paper discusses the use of [18F]Dopa PET for diagnosing Parkinson's disease and does not report any pharmacogenomic effects on the PK or PD parameters of the tracer. |
| popPK | Doudet_1991 | relevant | 8 | 2 | The study models the kinetics of the main metabolite of fluorodopa_18f ([18F]3-OM-DOPA) in rhesus monkeys, which is relevant to fluorodopa_18f PK, but specific numeric parameter values are not present in the provided text. |
| PGx | Dunoyer_2026 | not_relevant | 0 | 0 | The paper reports clinical and imaging outcomes of gene therapy for AADC deficiency, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of the radiotracer 18F-fluorodopa. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:53 UTC</sub>
