<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;pegunigalsidase alfa&quot;}]"></div>

# pegunigalsidase alfa

- **generic name:** pegunigalsidase alfa
- **ATC codes:** `A16AB20`
- **DrugBank:** [DB14992](https://go.drugbank.com/drugs/DB14992) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Pegunigalsidase alfa is an enzyme replacement therapy used to treat Fabry disease. It is authorised in the European Union and remains an approved, though still partly investigational, treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27270744](https://www.wikidata.org/wiki/Q27270744) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:18 | 1:24 | 0/0/0 | 0/0/0 | 0/0/0 | 63,670/756 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/6 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pegunigalsidase_alfa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GLA (modulator), Globotriaosylceramide (metabolizer), Globotriaosylceramide (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schiffmann_2019.pdf` | Schiffmann R et al., Pegunigalsidase alfa, a novel PEGylated…, Journal of inherited metabo… (2019) | popPK | 8 | [10.1002/jimd.12080](https://doi.org/10.1002/jimd.12080) | [30834538](https://pubmed.ncbi.nlm.nih.gov/30834538) | The study reports the mean terminal plasma half-life (53-121 hours) for pegunigalsidase alfa in humans, but lacks other quantitative disposition parameters like clearance or volume of distribution. |

<sub>queue written 2026-10-05T11:18:22.515562+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Azevedo_2020 | irrelevant | 0 | 0 | A narrative review of Fabry disease therapies with no PK parameters for pegunigalsidase alfa. |
| PD | Azevedo_2020 | not_relevant | 1 | 0 | Narrative review of Fabry disease therapies with no concentration-effect or dose-response analysis or numeric PD parameters for pegunigalsidase alfa. |
| popPK | Azimpour_2025 | irrelevant | 0 | 0 | The paper reports health state utility values (EQ-5D-3L) for quality of life and economic evaluation, not pharmacokinetic parameters. |
| popPK | Brussee_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lucerastat, not pegunigalsidase alfa. |
| PD | Brussee_2026 | not_relevant | 0 | 0 | Paper is about lucerastat (not pegunigalsidase alfa) and reports only a population PK model with exposure/dose adaptation, no PD or concentration-effect parameters. |
| popPK | Germain_2024 | irrelevant | 2 | 0 | The paper is a clinical review of efficacy and safety that mentions a ~40-fold increase in half-life (~80h) but does not report quantitative compartmental PK parameters (CL, V, Q) or a population PK model. |
| PGx | Germain_2024 | not_relevant | 0 | 0 | The paper describes the clinical development and efficacy of pegunigalsidase alfa but does not report any pharmacogenomic analysis or gene variant effects on its PK/PD parameters. |
| popPK | Gómez-Cerezo_2025 | irrelevant | 1 | 0 | This is a narrative review of immunogenicity in Fabry disease ERT; pegunigalsidase alfa is discussed qualitatively (half-life mentioned but no numeric PK parameters like CL, V, or a PK model are reported). |
| PD | Gómez-Cerezo_2025 | not_relevant | 1 | 0 | Narrative review of ADA immunogenicity in Fabry ERT; no concentration- or dose-effect analysis or numeric PD parameters for pegunigalsidase alfa. |
| popPK | Lenders_2023 | irrelevant | 2 | 1 | The study is an in-vitro immunological characterization of antibody effects on enzyme stability, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, Q) for pegunigalsidase_alfa. |
| popPK | Lenders_2025 | irrelevant | 1 | 0 | The paper focuses on immunological methods for measuring anti-drug antibodies and only mentions the half-life qualitatively without providing quantitative PK parameters like clearance or volume. |
| popPK | Lenders_2025_2 | relevant | 4 | 5 | The study reports pharmacokinetic data (AUC, half-life) for pegunigalsidase alfa in humans, but lacks standard compartmental parameters (CL, V, Q) and relies on enzyme activity assays rather than direct drug concentration measurements. |
| PGx | Perretta_2025 | not_relevant | 0 | 0 | The paper is a general review of Fabry disease treatments and does not report specific pharmacogenomic effects on the PK or PD of pegunigalsidase alfa. |
| popPK | Schiffmann_2019 | relevant | 8 | 3 | The study reports the mean terminal plasma half-life (53-121 hours) for pegunigalsidase alfa in humans, but lacks other quantitative disposition parameters like clearance or volume of distribution. |
| PD | Schiffmann_2019 | not_relevant | 3 | 2 | Dose-ranging design with PK and Gb3/renal outcomes reported descriptively, but no concentration-effect or dose-response relationship or numeric PD parameters (Emax, EC50, slope) are stated or derivable. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
