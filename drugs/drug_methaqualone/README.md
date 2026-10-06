<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;methaqualone&quot;}]"></div>

# methaqualone

- **generic name:** methaqualone
- **ATC codes:** `N05CM01`
- **DrugBank:** [DB04833](https://go.drugbank.com/drugs/DB04833) · **PubChem:** [CID 6292](https://pubchem.ncbi.nlm.nih.gov/compound/6292)
- **molar mass:** 250.2952 g/mol (C16H14N2O) — DrugBank
- **groups:** approved, illicit, withdrawn

## About

Methaqualone is a sedative-hypnotic drug that was used as a sleep aid. It has been withdrawn from the market and is now only encountered as an illicit drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423912](https://www.wikidata.org/wiki/Q423912) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:40 | 3:48 | 0/0/0 | 0/1/0 | 0/0/0 | 119,317/1,881 | ollama / glm-5.3-flash | 4 | 4/0 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Müller_1978_specific_3H_diazepam_binding_to_benzodiazepine_receptors](drugs/drug_methaqualone/pd_M_ller_1978_specific_3H_diazepam_binding_to_benzodiazepine_r.md) | specific [3H] diazepam binding to benzodiazepine receptors ← methaqualone · inhibition effect | — | Müller WE et al., Benzodiazepine receptor binding: the in…, Naunyn-Schmiedeberg's archi… (1978) | [10.1007/BF00497002](https://doi.org/10.1007/BF00497002) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methaqualone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Verpooten_1982.pdf` | Verpooten GA et al., Prediction of the efficacy of hemoperfu…, Archives of toxicology. Sup… (1982) | popPK | 7 | [10.1007/978-3-642-68511-8_54](https://doi.org/10.1007/978-3-642-68511-8_54) | [6954915](https://pubmed.ncbi.nlm.nih.gov/6954915) | Methaqualone PK modeled with a two-compartment model in intoxicated patients, but no numeric parameter values appear in the abstract (likely in the full text/tables not provided). |

<sub>queue written 2026-10-06T21:39:58.884999+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdul_2025 | irrelevant | 0 | 0 | Methaqualone appears only as an internal standard in the GC-NPD assay for lignocaine; no methaqualone PK parameters are reported. |
| popPK | Cai_1989 | irrelevant | 0 | 0 | Methaqualone is only used as an internal standard; the PK parameters reported are for tetramethylpyrazine, a different drug. |
| popPK | Kulkarni_2026 | irrelevant | 0 | 0 | This is a machine-learning study predicting TB antibiotic MICs from genome sequences; methaqualone is not mentioned and no PK parameters exist. |
| popPK | Noh_2017 | irrelevant | 0 | 0 | The paper reports PK parameters for 7-O-succinyl macrolactin A (SMA); methaqualone is only used as an internal standard in the LC-MS/MS assay, with no methaqualone PK data. |
| PGx | Prost_2003 | not_relevant | 5 | 5 | Study reports absence of CYP2D6/CYP2C19 phenotype effect on methaqualone metabolite patterns, with no fitted PK/PD effect sizes. |
| popPK | Verpooten_1982 | relevant | 7 | 2 | Methaqualone PK modeled with a two-compartment model in intoxicated patients, but no numeric parameter values appear in the abstract (likely in the full text/tables not provided). |
| popPK | Wijk_2024 | irrelevant | 1 | 2 | Methaqualone appears only as a covariate (urine test) reducing rifampicin bioavailability by 19%; no PK parameters for methaqualone itself are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
