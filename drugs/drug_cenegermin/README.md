<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01X&quot;,&quot;href&quot;:&quot;atc/S01X.md&quot;},{&quot;label&quot;:&quot;cenegermin&quot;}]"></div>

# cenegermin

- **generic name:** cenegermin
- **ATC codes:** `S01XA24`
- **DrugBank:** [DB13926](https://go.drugbank.com/drugs/DB13926) · **PubChem:** not captured
- **groups:** approved, investigational

## About

It is authorised in the European Union as an ophthalmological medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q30315101](https://www.wikidata.org/wiki/Q30315101) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:18 | 4:35 | 0/1/0 | 0/0/0 | 0/0/0 | 183,512/5,184 | ollama / glm-5.3-flash | 4 | 0/1 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mattioli_2025_reference](drugs/drug_cenegermin/Cenegermin_Mattioli2025_reference.md) | — | 1-compartment (no model) | 0 | Mattioli SL et al., Human nerve growth factor delivery to t…, PNAS nexus (2025) | [10.1093/pnasnexus/pgaf250](https://doi.org/10.1093/pnasnexus/pgaf250) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cenegermin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: NGFR (stimulator), NTRK1 (stimulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 33 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dai_2025.pdf` | Dai Y et al., Safety and pharmacokinetics of escalati…, European journal of pharmac… (2025) | popPK | 8 | [10.1016/j.ejps.2025.107314](https://doi.org/10.1016/j.ejps.2025.107314) | [41076137](https://pubmed.ncbi.nlm.nih.gov/41076137) | A human PK study of recombinant human NGF (the same active moiety as cenegermin) with tear-fluid PK values (Tmax 0.17 h, Cmax 3.63 µg/g, t1/2 4.21 h) reported directly in the abstract; no systemic CL/V reported. |

<sub>queue written 2026-10-07T17:15:39.393031+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jia_2026 | irrelevant | 0 | 0 | In-vitro expression of recombinant human NGF in tobacco cells; no PK or disposition parameters for cenegermin. |
| popPK | Shen_2023 | irrelevant | 3 | 2 | This is a different recombinant human NGF product (intramuscular, Chinese subjects) rather than cenegermin, and only Tmax and t1/2 are reported with no CL/V or population-PK parameters. |
| popPK | Wen_2011 | irrelevant | 0 | 0 | This is a review of intranasal drug delivery with no quantitative PK parameters for cenegermin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:15 UTC</sub>
