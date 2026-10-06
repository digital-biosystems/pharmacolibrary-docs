<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;lurasidone&quot;}]"></div>

# lurasidone

- **generic name:** lurasidone
- **ATC codes:** `N05AE05`
- **DrugBank:** [DB08815](https://go.drugbank.com/drugs/DB08815) · **PubChem:** [CID 213046](https://pubchem.ncbi.nlm.nih.gov/compound/213046)
- **molar mass:** 492.676 g/mol (C28H36N4O2S) — DrugBank
- **groups:** approved, investigational

## About

Lurasidone is an antipsychotic used to treat schizophrenia and related psychotic and mood conditions such as schizoaffective disorder. It is an approved medicine, authorised in the European Union for schizophrenia, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416992](https://www.wikidata.org/wiki/Q416992) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lurasidone | parent | 492.676 | C28H36N4O2S | DrugBank | [213046](https://pubchem.ncbi.nlm.nih.gov/compound/213046) | Dai_2026, Yang_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:59 | 2:21 | 0/3/0 | 1/0/0 | 0/0/0 | 94,271/7,499 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Dai_2026_reference](drugs/drug_lurasidone/Lurasidone_Dai2026_reference.md) | — | 1-compartment (no model) | 2 | Dai C et al., The impact of CYP3A4 rs2242480 on oral…, Journal of affective disord… (2026) | [10.1016/j.jad.2025.120588](https://doi.org/10.1016/j.jad.2025.120588) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yang_2026_final_model](drugs/drug_lurasidone/Lurasidone_Yang2026_final_model.md) | — | 1-compartment (no model) | 3 | Yang Y et al., Impact of valproate co-medication and a…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1810528](https://doi.org/10.3389/fphar.2026.1810528) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yang_2026_pop](drugs/drug_lurasidone/Lurasidone_Yang2026_pop.md) | — | 1-compartment (no model) | 3 | Yang Y et al., Impact of valproate co-medication and a…, Frontiers in pharmacology (2026) | [10.3389/fphar.2026.1810528](https://doi.org/10.3389/fphar.2026.1810528) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Zhuang_2023_Kv_current](drugs/drug_lurasidone/pd_Zhuang_2023_Kv_current.md) | Kv channel current inhibition ← lurasidone · direct sigmoid Emax (Hill) effect | — | Zhuang W et al., Lurasidone blocks the voltage-gated pot…, European journal of pharmac… (2023) | [10.1016/j.ejphar.2023.176005](https://doi.org/10.1016/j.ejphar.2023.176005) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lurasidone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRA2C (target), DRD2 (target), HTR1A (target), HTR2A (target), HTR7 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dai_2026.pdf` | Dai C et al., The impact of CYP3A4 rs2242480 on oral…, Journal of affective disord… (2026) | popPK | 10 | [10.1016/j.jad.2025.120588](https://doi.org/10.1016/j.jad.2025.120588) | [41192731](https://pubmed.ncbi.nlm.nih.gov/41192731) | Population PK model of lurasidone in Chinese bipolar depression patients with numeric CL/F values by genotype reported directly in the abstract. |
| `Hu_2017.pdf` | Hu C et al., Single- and Multiple-Dose Pharmacokinet…, Clinical drug investigation (2017) | popPK | 7 | [10.1007/s40261-017-0546-8](https://doi.org/10.1007/s40261-017-0546-8) | [28695535](https://pubmed.ncbi.nlm.nih.gov/28695535) | Human PK study of lurasidone with NCA parameters (t½ 18.1-25.5 h, accumulation index 1.25) reported in abstract, but full parameter table (CL, V, Cmax, AUC values) not included in evidence. |

<sub>queue written 2026-10-06T15:57:33.916385+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hu_2017 | relevant | 7 | 4 | Human PK study of lurasidone with NCA parameters (t½ 18.1-25.5 h, accumulation index 1.25) reported in abstract, but full parameter table (CL, V, Cmax, AUC values) not included in evidence. |
| popPK | Meyer_2017 | irrelevant | 0 | 0 | This is a real-world weight-change (metabolic outcomes) study with no pharmacokinetic parameters for lurasidone. |
| popPK | Sözer_2025 | irrelevant | 3 | 4 | Bioequivalence study reporting only NCA exposure metrics (AUC, Cmax, tmax, t½) with no clearance, volume, or compartmental/population-PK model parameters for lurasidone. |
| popPK | Yu_2025 | irrelevant | 3 | 2 | Bioequivalence study with only NCA exposure metrics (Cmax, AUC) and ratios; no clearance, volume, or compartmental/population-PK parameters, and no numeric PK values appear in the evidence. |
| popPK | Zhuang_2023 | irrelevant | 0 | 0 | In-vitro electrophysiology study of Kv channel blockade in rabbit coronary smooth muscle cells; no PK disposition parameters for lurasidone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 15:57 UTC</sub>
