<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;dicloxacillin&quot;}]"></div>

# dicloxacillin

- **generic name:** dicloxacillin
- **ATC codes:** `J01CF01`
- **DrugBank:** [DB00485](https://go.drugbank.com/drugs/DB00485) · **PubChem:** [CID 18381](https://pubchem.ncbi.nlm.nih.gov/compound/18381)
- **molar mass:** 470.326 g/mol (C19H17Cl2N3O5S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Dicloxacillin is a penicillin antibiotic used to treat staphylococcal infections, including cellulitis, osteomyelitis, pneumonia, urinary and upper respiratory tract infections. It is an approved antibiotic, also approved for veterinary use, and remains in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2313471](https://www.wikidata.org/wiki/Q2313471) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:01 | 0:06 | 0/0/0 | 0/0/0 | 0/0/0 | 10,346/402 | einfracz / qwen3.8-27b | 6 | 0/1 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dicloxacillin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder/regulator | DrugBank actor |
| metabolism | liver | `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | kidney | `SLC15A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DeSante_1980.pdf` | DeSante KA et al., Influence of sulfaethidole on the human…, Journal of clinical pharmac… (1980) | popPK | 8 | [10.1002/j.1552-4604.1980.tb02547.x](https://doi.org/10.1002/j.1552-4604.1980.tb02547.x) | [6893599](https://pubmed.ncbi.nlm.nih.gov/6893599) | The study reports pharmacokinetic evaluation of dicloxacillin in humans using a two-compartment model, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| `Nauta_1976.pdf` | Nauta EH et al., Dicloxacillin and cloxacillin: pharmaco…, Clinical pharmacology and t… (1976) | popPK | 8 | [10.1002/cpt197620198](https://doi.org/10.1002/cpt197620198) | [1277730](https://pubmed.ncbi.nlm.nih.gov/1277730) | Reports quantitative PK parameters (T1/2, bioavailability) for dicloxacillin, but specific clearance/volume values from the 2-compartment model are not explicitly detailed in the provided abstract text. |

<sub>queue written 2026-10-07T10:01:35.614443+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | DeSante_1980 | relevant | 8 | 0 | The study reports pharmacokinetic evaluation of dicloxacillin in humans using a two-compartment model, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| popPK | Dittert_1977 | irrelevant | 2 | 0 | The paper is a review that discusses the pharmacokinetic modeling of dicloxacillin in humans but does not present original quantitative parameter values or detailed data in the provided text. |
| popPK | Nauta_1976 | relevant | 8 | 4 | Reports quantitative PK parameters (T1/2, bioavailability) for dicloxacillin, but specific clearance/volume values from the 2-compartment model are not explicitly detailed in the provided abstract text. |
| popPK | Sjöstedt_2025 | irrelevant | 4 | 2 | The paper is primarily an in-vitro transporter study and PBPK modeling paper; while it develops a PBPK model for dicloxacillin, the specific quantitative compartmental PK parameters (CL, V, Q) are not provided in the text but are referenced in supplementary tables (S2, S3) and figures which are not included in the evidence. |
| popPK | Tsuji_1983 | relevant | 4 | 0 | The study reports a physiologically based pharmacokinetic model and tissue partition coefficients (Kp) for dicloxacillin in rats, but no specific numeric parameter values for dicloxacillin are provided in the text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
