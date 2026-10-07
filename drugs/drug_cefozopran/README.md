<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefozopran&quot;}]"></div>

# cefozopran

- **generic name:** cefozopran
- **ATC codes:** `J01DE03`
- **DrugBank:** [DB13667](https://go.drugbank.com/drugs/DB13667) · **PubChem:** not captured
- **molar mass:** 515.52 g/mol (C19H17N9O5S2) — DrugBank
- **groups:** experimental

## About

Cefozopran is a fourth-generation cephalosporin antibiotic used to treat bacterial infections. It is not authorised in the European Union and appears to be only an experimental drug, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057291](https://www.wikidata.org/wiki/Q5057291) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:03 | 0:23 | 0/1/0 | 0/0/0 | 0/0/0 | 5,690/847 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sakurai_1999_reference](drugs/drug_cefozopran/Cefozopran_Sakurai1999_reference.md) | — | 1-compartment (no model) | 0 | Sakurai Y et al., [Pharmacokinetic analysis of cefozopran…, The Japanese journal of ant… (1999) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sakurai_1999.pdf` | Sakurai Y et al., [Pharmacokinetic analysis of cefozopran…, The Japanese journal of ant… (1999) | popPK | 10 | not captured | [10202684](https://pubmed.ncbi.nlm.nih.gov/10202684) | The paper reports a population pharmacokinetic analysis of cefozopran in neonates with explicit quantitative equations for clearance (CL) and volume of distribution (Vd) based on weight and postnatal age. |
| `Ikawa_2008.pdf` | Ikawa K et al., Pharmacokinetic-pharmacodynamic target…, Journal of infection and ch… (2008) | pd | 5 | [10.1007/s10156-008-0589-0](https://doi.org/10.1007/s10156-008-0589-0) | [18622676](https://www.ncbi.nlm.nih.gov/pubmed/18622676) | metadata signals extractable PD data (PK-PD) |

<sub>queue written 2026-10-07T11:02:50.654365+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:02 UTC</sub>
