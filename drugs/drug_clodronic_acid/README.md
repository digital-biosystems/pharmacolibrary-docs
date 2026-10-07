<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;clodronic acid&quot;}]"></div>

# clodronic acid

- **generic name:** clodronic acid
- **ATC codes:** `M05BA02`
- **DrugBank:** [DB00720](https://go.drugbank.com/drugs/DB00720) · **PubChem:** [CID 25419](https://pubchem.ncbi.nlm.nih.gov/compound/25419)
- **molar mass:** 244.892 g/mol (CH4Cl2O6P2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Clodronic acid is a bisphosphonate used to treat bone diseases, acting as a bone density conservation agent. It is an approved medicine and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2341200](https://www.wikidata.org/wiki/Q2341200) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:15 | 0:27 | 0/1/0 | 0/0/0 | 0/0/0 | 13,210/806 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Seguí_2024_reference](drugs/drug_clodronic_acid/ClodronicAcid_Segu2024_reference.md) | — | 1-compartment (no model) | 0 | Seguí Pedrosa B et al., Detection times of clodronic acid in ho…, Journal of veterinary pharm… (2024) | [10.1111/jvp.13453](https://doi.org/10.1111/jvp.13453) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clodronic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Hydroxylapatite (target), PTGS2 (inhibitor), SLC25A4 (inhibitor), SLC25A5 (inhibitor), SLC25A6 (inhibitor).</sub>

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
| `Seguí_2024.pdf` | Seguí Pedrosa B et al., Detection times of clodronic acid in ho…, Journal of veterinary pharm… (2024) | popPK | 9 | [10.1111/jvp.13453](https://doi.org/10.1111/jvp.13453) | [38880898](https://pubmed.ncbi.nlm.nih.gov/38880898) | The study reports a quantitative pharmacokinetic parameter (depletion half-life of 10.6 days) derived from a population model (nonlinear mixed effects) for clodronic acid in horses. |

<sub>queue written 2026-10-07T03:15:21.988722+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:15 UTC</sub>
