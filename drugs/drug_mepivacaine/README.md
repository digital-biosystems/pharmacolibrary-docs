<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01B&quot;,&quot;href&quot;:&quot;atc/N01B.md&quot;},{&quot;label&quot;:&quot;mepivacaine&quot;}]"></div>

# mepivacaine

- **generic name:** mepivacaine
- **ATC codes:** `N01BB03`
- **DrugBank:** [DB00961](https://go.drugbank.com/drugs/DB00961) · **PubChem:** [CID 4062](https://pubchem.ncbi.nlm.nih.gov/compound/4062)
- **molar mass:** 246.348 g/mol (C15H22N2O) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Mepivacaine is a local anesthetic of the amide type used to prevent or relieve pain. It is an approved medicine, also approved for veterinary use, and is used fairly widely in dental and other local anesthesia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416760](https://www.wikidata.org/wiki/Q416760) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mepivacaine | parent | 246.348 | C15H22N2O | DrugBank | [4062](https://pubchem.ncbi.nlm.nih.gov/compound/4062) | Lauven_1990 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:11 | 2:56 | 0/0/1 | 0/0/0 | 0/0/0 | 14,706/32,762 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Lauven_1990_reference](drugs/drug_mepivacaine/Mepivacaine_Lauven1990_reference.md) | — | 1-compartment (no model) | 4 | Lauven PM et al., [An infusion model for intraoperative p…, Anasthesie, Intensivtherapi… (1990) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mepivacaine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SCN10A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lauven_1990.pdf` | Lauven PM et al., [An infusion model for intraoperative p…, Anasthesie, Intensivtherapi… (1990) | popPK | 10 | not captured | [2252168](https://pubmed.ncbi.nlm.nih.gov/2252168) | The paper reports specific quantitative one-compartment PK parameters (Vd, Cl, half-lives) for mepivacaine in humans. |

<sub>queue written 2026-10-07T04:09:05.210032+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bodtger_2023 | irrelevant | 0 | 0 | This is a procedural description of local anesthetic thoracoscopy where mepivacaine is used as a local anesthetic, with no pharmacokinetic data reported. |
| popPK | Boorman_2023 | irrelevant | 0 | 0 | The study is an in vitro mechanistic analysis of tissue biomarkers, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Ekström_1996 | not_relevant | 1 | 0 | The paper focuses on the metabolism of ropivacaine by CYP1A and CYP3A, and does not report the effects of gene variants on mepivacaine. |
| popPK | Perez-Castro_2009 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring cell viability and apoptosis, containing no pharmacokinetic disposition parameters (e.g., clearance, volume, half-life). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:11 UTC</sub>
