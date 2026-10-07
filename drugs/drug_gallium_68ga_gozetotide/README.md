<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09I&quot;,&quot;href&quot;:&quot;atc/V09I.md&quot;},{&quot;label&quot;:&quot;gallium (68Ga) gozetotide&quot;}]"></div>

# gallium (68Ga) gozetotide

- **generic name:** gallium (68Ga) gozetotide
- **ATC codes:** `V09IX14`
- **DrugBank:** [DB16019](https://go.drugbank.com/drugs/DB16019) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Gallium (68Ga) gozetotide is a diagnostic radiopharmaceutical used for detecting tumours, particularly in prostate cancer. It is an approved medicine, though its use is specialised and typically confined to nuclear medicine settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27295602](https://www.wikidata.org/wiki/Q27295602) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:15 | 2:31 | 0/1/0 | 0/0/0 | 0/0/0 | 47,652/4,714 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sachpekidis_2016_reference](drugs/drug_gallium_68ga_gozetotide/Gallium68gaGozetotide_Sachpekidis2016_reference.md) | — | 1-compartment (no model) | 0 | Sachpekidis C et al., 68Ga-PSMA-11 Dynamic PET/CT Imaging in…, Clinical nuclear medicine (2016) | [10.1097/RLU.0000000000001349](https://doi.org/10.1097/RLU.0000000000001349) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gallium_68ga_gozetotide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | prostate gland | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FOLH1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sachpekidis_2016.pdf` | Sachpekidis C et al., 68Ga-PSMA-11 Dynamic PET/CT Imaging in…, Clinical nuclear medicine (2016) | popPK | 8 | [10.1097/RLU.0000000000001349](https://doi.org/10.1097/RLU.0000000000001349) | [27607173](https://pubmed.ncbi.nlm.nih.gov/27607173) | The study reports quantitative compartmental parameters (K1, k3, influx) for Ga-PSMA-11 (gallium_68ga_gozetotide) in human patients, with values explicitly listed in the abstract. |

<sub>queue written 2026-10-07T16:13:23.652124+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Burasothikul_2024 | irrelevant | 2 | 0 | The study reports net influx rates (Ki) from a compartmental model for diagnostic imaging optimization, but does not provide standard population pharmacokinetic parameters (CL, V, Q) or extractable numeric PK values for the drug. |
| popPK | Ringheim_2018 | irrelevant | 0 | 0 | The study assesses the reproducibility of standardized uptake values (SUVs) for imaging comparison, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Smith_2023 | relevant | 8 | 2 | The paper reports quantitative tissue-level pharmacokinetic parameters (K1, k2, k3, Ki, Vd) for 68Ga-PSMA-11 (gallium_68ga_gozetotide) using compartmental models, but the specific numeric values are located in Table 2 and Supplemental Figures which are not included in the provided evidence. |
| popPK | Smith_2024 | irrelevant | 2 | 1 | The study models tissue-specific tracer kinetics (K1, k2, k3) for 68Ga-PSMA-11 (a different drug) rather than the systemic population pharmacokinetics (CL, V) of gallium_68ga_gozetotide. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:13 UTC</sub>
