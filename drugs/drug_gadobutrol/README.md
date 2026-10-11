<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadobutrol&quot;}]"></div>

# gadobutrol

- **generic name:** gadobutrol
- **ATC codes:** `V08CA09`
- **DrugBank:** [DB06703](https://go.drugbank.com/drugs/DB06703) · **PubChem:** [CID 70678987](https://pubchem.ncbi.nlm.nih.gov/compound/70678987)
- **molar mass:** 604.72 g/mol (C18H31GdN4O9) — DrugBank
- **groups:** approved, investigational

## About

Gadobutrol is a gadolinium-based contrast agent used to improve images in magnetic resonance imaging scans. It is an approved paramagnetic MRI contrast medium and remains in clinical use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2570844](https://www.wikidata.org/wiki/Q2570844) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gadobutrol | parent | 604.72 | C18H31GdN4O9 | DrugBank | [70678987](https://pubchem.ncbi.nlm.nih.gov/compound/70678987) | Eide_2023, Hahn_2009, Hovd_2022 |
| gadolinium | metabolite | 157.25 | Gd | PubChem | [23982](https://pubchem.ncbi.nlm.nih.gov/compound/23982) | Hahn_2009 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:42 | 8:15 | 0/4/0 | 0/0/0 | 0/0/0 | 196,337/38,003 | openai / gpt-6-luna | 11 | 0/7 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Eide_2023_sleep_deprivation_group](drugs/drug_gadobutrol/Gadobutrol_Eide2023_sleep_deprivation_group.md) | — | 1-compartment (no model) | 5 | Eide PK et al., Mechanisms behind changes of neurodegen…, Brain communications (2023) | [10.1093/braincomms/fcad343](https://doi.org/10.1093/braincomms/fcad343) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Eide_2023_sleep_group](drugs/drug_gadobutrol/Gadobutrol_Eide2023_sleep_group.md) | — | 1-compartment (no model) | 5 | Eide PK et al., Mechanisms behind changes of neurodegen…, Brain communications (2023) | [10.1093/braincomms/fcad343](https://doi.org/10.1093/braincomms/fcad343) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hahn_2009_reference](drugs/drug_gadobutrol/Gadobutrol_Hahn2009_reference.md) | — | 1-compartment (no model) | 3 | Hahn G et al., Pharmacokinetics and safety of gadobutr…, Investigative radiology (2009) | [10.1097/RLI.0b013e3181bfe2d2](https://doi.org/10.1097/RLI.0b013e3181bfe2d2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Hovd_2022_reference](drugs/drug_gadobutrol/Gadobutrol_Hovd2022_reference.md) | — | 1-compartment (no model) | 1 | Hovd MH et al., Population pharmacokinetic modeling of…, Fluids and barriers of the… (2022) | [10.1186/s12987-022-00352-w](https://doi.org/10.1186/s12987-022-00352-w) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gadobutrol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 49 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hahn_2009.pdf` | Hahn G et al., Pharmacokinetics and safety of gadobutr…, Investigative radiology (2009) | popPK | 10 | [10.1097/RLI.0b013e3181bfe2d2](https://doi.org/10.1097/RLI.0b013e3181bfe2d2) | [19858730](https://pubmed.ncbi.nlm.nih.gov/19858730) | Pediatric population-PK model reports numeric clearance and volume estimates directly in the evidence. |
| `Kunze_2016.pdf` | Kunze C et al., Pharmacokinetics and Safety of Macrocyc…, Investigative radiology (2016) | popPK | 10 | [10.1097/RLI.0000000000000204](https://doi.org/10.1097/RLI.0000000000000204) | [26340504](https://pubmed.ncbi.nlm.nih.gov/26340504) | A two-compartment population-PK model is reported, but numeric disposition parameters are absent; only AUC and C20 values are provided. |

<sub>queue written 2026-10-07T17:35:44.349577+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Backhaus_2020 | irrelevant | 2 | 0 | Gadobutrol is used as an imaging contrast agent, but no quantitative disposition parameters for it are reported. |
| popPK | Eide_2026 | irrelevant | 2 | 0 | Gadobutrol is used as a comparison tracer, and its numeric parameter values are not shown in the evidence. |
| popPK | Guenther_2025 | irrelevant | 1 | 0 | The quantitative PK results are for gadoquatrane and the Dy-butrol comparator analog, not gadobutrol itself. |
| popPK | Hao_2024 | irrelevant | 1 | 0 | This review reports gadopiclenol pharmacokinetics, while gadobutrol is only a comparator and has no quantitative disposition parameters here. |
| popPK | Kunze_2016 | relevant | 10 | 3 | A two-compartment population-PK model is reported, but numeric disposition parameters are absent; only AUC and C20 values are provided. |
| popPK | Segeroth_2023 | irrelevant | 2 | 0 | Gadobutrol is an MRI tracer for brain solute-clearance modeling, and no numeric gadobutrol disposition parameters are shown (model results are only referenced in figures). |
| popPK | Spath_2021 | irrelevant | 0 | 0 | Gadobutrol is used only for LGE, and the reported kinetic values are for manganese. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:36 UTC</sub>
