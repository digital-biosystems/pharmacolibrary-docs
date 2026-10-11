<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iodoxamic acid&quot;}]"></div>

# iodoxamic acid

- **generic name:** iodoxamic acid
- **ATC codes:** `V08AC01`
- **DrugBank:** [DB13539](https://go.drugbank.com/drugs/DB13539) · **PubChem:** not captured
- **molar mass:** 1287.925 g/mol (C26H26I6N2O10) — DrugBank
- **groups:** experimental

## About

Iodoxamic acid is an iodinated, water-soluble X-ray contrast agent that is taken up by the liver and was used to visualise the biliary tract during imaging examinations. It is no longer in routine clinical use; it is currently regarded as an experimental compound and is not an authorised medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6062332](https://www.wikidata.org/wiki/Q6062332) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iodoxamic acid | parent | 1287.92 | C26H26I6N2O10 | DrugBank | — | Lin_1978 |
| iodoxamic_acid | metabolite | 1287.92 | C26H26I6N2O10 | DrugBank | — | Lin_1978 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:17 | 0:35 | 0/2/0 | 0/0/0 | 0/0/0 | 8,437/910 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lin_1978_reference](drugs/drug_iodoxamic_acid/IodoxamicAcid_Lin1978_reference.md) | — | 1-compartment (no model) | 1 | Lin SK et al., Pharmacokinetics of iodoxamic acid in r…, Journal of pharmaceutical s… (1978) | [10.1002/jps.2600670715](https://doi.org/10.1002/jps.2600670715) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Moss_1980_reference](drugs/drug_iodoxamic_acid/IodoxamicAcid_Moss1980_reference.md) | — | parent + metabolite (no model) | 0 | Moss AA et al., Gastrointestinal radiology. Pharmacokin…, Investigative radiology (1980) | [10.1097/00004424-198011001-00028](https://doi.org/10.1097/00004424-198011001-00028) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lin_1978.pdf` | Lin SK et al., Pharmacokinetics of iodoxamic acid in r…, Journal of pharmaceutical s… (1978) | popPK | 6 | [10.1002/jps.2600670715](https://doi.org/10.1002/jps.2600670715) | [96248](https://pubmed.ncbi.nlm.nih.gov/96248) | Reports numeric capacity-limited PK parameters (Vmax, Km) for iodoxamic acid in rhesus monkeys directly in the abstract, though no CL/V values. |
| `Moss_1980.pdf` | Moss AA et al., Gastrointestinal radiology. Pharmacokin…, Investigative radiology (1980) | popPK | 6 | [10.1097/00004424-198011001-00028](https://doi.org/10.1097/00004424-198011001-00028) | [6894137](https://pubmed.ncbi.nlm.nih.gov/6894137) | PK study of iodoxamic acid in rhesus monkeys with numeric parameters (Vmax, unbound fractions) present, though no standard CL/V/compartmental values. |

<sub>queue written 2026-10-07T22:17:47.804286+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Moss_1979 | irrelevant | 0 | 0 | The subject drug is iopanoic acid in rhesus monkeys; iodoxamic acid is only mentioned as the origin of the infusion method, with no PK parameters for iodoxamic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:17 UTC</sub>
