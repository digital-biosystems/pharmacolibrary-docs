<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;eperisone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eperisone_Baek2021_reference&quot;,&quot;label&quot;:&quot;Baek_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eperisone/Eperisone_Baek2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eperisone_Kang2021_reference&quot;,&quot;label&quot;:&quot;Kang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eperisone/Eperisone_Kang2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# eperisone

- **generic name:** eperisone
- **ATC codes:** `M03BX09`
- **DrugBank:** [DB08992](https://go.drugbank.com/drugs/DB08992) · **PubChem:** [CID 3236](https://pubchem.ncbi.nlm.nih.gov/compound/3236)
- **molar mass:** 259.3865 g/mol (C17H25NO) — DrugBank
- **groups:** investigational

## About

Eperisone is a centrally acting muscle relaxant that has been used to treat muscle spasticity and related musculoskeletal conditions. It is not authorised in the European Union and is considered investigational in major drug databases, though it has been marketed in some Asian countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q426401](https://www.wikidata.org/wiki/Q426401) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| eperisone | parent | 259.387 | C17H25NO | DrugBank | [3236](https://pubchem.ncbi.nlm.nih.gov/compound/3236) | Baek_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:49 | 0:33 | 2/0/0 | 0/0/0 | 0/0/0 | 69,482/5,449 | einfracz / qwen3.8-27b | 2 | 0/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Baek_2021_reference](drugs/drug_eperisone/Eperisone_Baek2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Baek IH et al., Pharmacokinetics of eperisone following…, Biopharmaceutics & drug dis… (2021) | [10.1002/bdd.2264](https://doi.org/10.1002/bdd.2264) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kang_2021_reference](drugs/drug_eperisone/Eperisone_Kang2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kang WH et al., Population Pharmacokinetic Method to Pr…, Pharmaceuticals (Basel, Swi… (2021) | [10.3390/ph14020114](https://doi.org/10.3390/ph14020114) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eperisone) page (add drugs there; the set becomes a link).

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

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baek_2021.pdf` | Baek IH et al., Pharmacokinetics of eperisone following…, Biopharmaceutics & drug dis… (2021) | popPK | 10 | [10.1002/bdd.2264](https://doi.org/10.1002/bdd.2264) | [33527395](https://pubmed.ncbi.nlm.nih.gov/33527395) | The study reports quantitative population PK parameters (CL/F, Vc/F, Ka, half-life) for eperisone in humans directly in the abstract. |

<sub>queue written 2026-10-07T02:49:09.592794+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kang_2021 | irrelevant | 3 | 2 | The study uses eperisone primarily as a case study to validate a statistical method for estimating variability, and the PK parameters mentioned (CL=10 L/h, Vd=50 L) are simulation assumptions for a generic drug, not measured values for eperisone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:49 UTC</sub>
