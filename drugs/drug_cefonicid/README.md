<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefonicid&quot;}]"></div>

# cefonicid

- **generic name:** cefonicid
- **ATC codes:** `J01DC06`
- **DrugBank:** [DB01328](https://go.drugbank.com/drugs/DB01328) · **PubChem:** [CID 43594](https://pubchem.ncbi.nlm.nih.gov/compound/43594)
- **molar mass:** 542.566 g/mol (C18H18N6O8S3) — DrugBank
- **groups:** approved

## About

Cefonicid is a second-generation cephalosporin antibiotic used to treat bacterial infections. It is an approved antibacterial for systemic use, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057286](https://www.wikidata.org/wiki/Q5057286) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:16 | 1:06 | 0/1/0 | 1/0/0 | 0/0/0 | 40,621/1,140 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Phelps_1986_reference](drugs/drug_cefonicid/Cefonicid_Phelps1986_reference.md) | — | 1-compartment (no model) | 0 | Phelps RT et al., Multiple-dose pharmacokinetics of cefon…, Antimicrobial agents and ch… (1986) | [10.1128/AAC.29.5.913](https://doi.org/10.1128/AAC.29.5.913) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Benson_1993_PB](drugs/drug_cefonicid/pd_Benson_1993_PB.md) | protein binding ← cefonicid · model not identified | — | Benson JM et al., In vitro protein binding of cefonicid a…, Antimicrobial agents and ch… (1993) | [10.1128/AAC.37.6.1343](https://doi.org/10.1128/AAC.37.6.1343) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefonicid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` other/unknown | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Phelps_1986.pdf` | Phelps RT et al., Multiple-dose pharmacokinetics of cefon…, Antimicrobial agents and ch… (1986) | popPK | 10 | [10.1128/AAC.29.5.913](https://doi.org/10.1128/AAC.29.5.913) | [3729349](https://pubmed.ncbi.nlm.nih.gov/3729349) | Reports a two-compartment PK model and elimination half-life range for cefonicid in humans, but specific values for clearance, volume, and intercompartmental clearance are not explicitly listed in the provided evidence text. |
| `Pochini_2008.pdf` | Pochini L et al., Interaction of beta-lactam antibiotics…, Chemico-biological interact… (2008) | pd | 4 | [10.1016/j.cbi.2008.03.003](https://doi.org/10.1016/j.cbi.2008.03.003) | [18452908](https://www.ncbi.nlm.nih.gov/pubmed/18452908) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T11:15:51.141350+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:15 UTC</sub>
