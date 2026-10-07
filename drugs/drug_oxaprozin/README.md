<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;oxaprozin&quot;}]"></div>

# oxaprozin

- **generic name:** oxaprozin
- **ATC codes:** `M01AE12`
- **DrugBank:** [DB00991](https://go.drugbank.com/drugs/DB00991) · **PubChem:** [CID 4614](https://pubchem.ncbi.nlm.nih.gov/compound/4614)
- **molar mass:** 293.3166 g/mol (C18H15NO3) — DrugBank
- **groups:** approved

## About

Oxaprozin is a non-steroidal anti-inflammatory drug used to treat osteoarthritis, rheumatoid arthritis, and juvenile rheumatoid arthritis. It is an approved medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1749609](https://www.wikidata.org/wiki/Q1749609) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oxaprozin | parent | 293.317 | C18H15NO3 | DrugBank | [4614](https://pubchem.ncbi.nlm.nih.gov/compound/4614) | Janssen_1980 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:44 | 0:44 | 0/1/0 | 1/0/0 | 0/0/0 | 25,082/938 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Janssen_1980_reference](drugs/drug_oxaprozin/Oxaprozin_Janssen1980_reference.md) | — | 1-compartment (no model) | 0 | Janssen FW et al., Metabolism and kinetics of oxaprozin in…, Clinical pharmacology and t… (1980) | [10.1038/clpt.1980.47](https://doi.org/10.1038/clpt.1980.47) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chiang_1984_C_unbound](drugs/drug_oxaprozin/pd_Chiang_1984_C_unbound.md) | unbound drug concentration in plasma ← oxaprozin · direct linear effect | — | Chiang ST et al., Oxaprozin dose proportionality, Journal of clinical pharmac… (1984) | [10.1002/j.1552-4604.1984.tb02761.x](https://doi.org/10.1002/j.1552-4604.1984.tb02761.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxaprozin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Janssen_1980.pdf` | Janssen FW et al., Metabolism and kinetics of oxaprozin in…, Clinical pharmacology and t… (1980) | popPK | 10 | [10.1038/clpt.1980.47](https://doi.org/10.1038/clpt.1980.47) | [7357792](https://pubmed.ncbi.nlm.nih.gov/7357792) | The abstract explicitly reports numeric values for plasma clearance (Clp), volume of distribution (VD beta), and half-life for oxaprozin in humans. |
| `Karim_1997.pdf` | Karim A et al., Oxaprozin and piroxicam, nonsteroidal a…, Journal of clinical pharmac… (1997) | pgx | 8 | [10.1002/j.1552-4604.1997.tb04302.x](https://doi.org/10.1002/j.1552-4604.1997.tb04302.x) | [9115051](https://www.ncbi.nlm.nih.gov/pubmed/9115051) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07T01:44:20.900926+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Karim_1997 | not_relevant | 1 | 5 | The study mentions poor metabolizers of debrisoquine (CYP2D6) in the subject cohort, but explicitly reports that their oxaprozin clearance was within +/-20% of the mean (i.e., no significant pharmacogenomic effect was observed); the main findings compare oxaprozin vs. piroxicam and focus on protein-binding/age/sex differences rather than genotype-specific PK changes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:44 UTC</sub>
