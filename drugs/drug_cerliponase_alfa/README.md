<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;cerliponase alfa&quot;}]"></div>

# cerliponase alfa

- **generic name:** cerliponase alfa
- **ATC codes:** `A16AB17`
- **DrugBank:** [DB13173](https://go.drugbank.com/drugs/DB13173) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Cerliponase alfa is an enzyme medication used to treat neuronal ceroid-lipofuscinosis, a rare metabolic disease. It is authorised in the European Union and is used only in specialised care for this very rare condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q33626059](https://www.wikidata.org/wiki/Q33626059) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:13 | 1:33 | 0/0/0 | 0/0/0 | 0/0/0 | 42,673/2,496 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cerliponase_alfa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IGF2R (target), TPP1 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hammon_2021.pdf` | Hammon K et al., Dose selection for intracerebroventricu…, Clinical and translational… (2021) | popPK | 9 | [10.1111/cts.13028](https://doi.org/10.1111/cts.13028) | [34076336](https://pubmed.ncbi.nlm.nih.gov/34076336) | The paper describes a population PK model and allometric scaling for cerliponase alfa, but the specific numeric parameter values are not present in the provided abstract text. |
| `Vuillemenot_2015.pdf` | Vuillemenot BR et al., Nonclinical evaluation of CNS-administe…, Molecular genetics and meta… (2015) | popPK | 9 | [10.1016/j.ymgme.2014.09.004](https://doi.org/10.1016/j.ymgme.2014.09.004) | [25257657](https://pubmed.ncbi.nlm.nih.gov/25257657) | The paper is a nonclinical PK study of cerliponase alfa (TPP1) in dogs, but specific quantitative parameters (CL, V) are not provided in the abstract. |

<sub>queue written 2026-10-05T11:12:51.583860+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Corti_2025 | irrelevant | 0 | 0 | The paper describes an in vitro disease model and gene therapy efficacy for CLN2, containing no pharmacokinetic data for cerliponase alfa. |
| PD | Corti_2025 | not_relevant | 0 | 0 | The paper describes an in vitro gene therapy study for CLN2 disease and does not report any pharmacodynamic or exposure-response analysis for cerliponase alfa. |
| popPK | Grobman_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mycophenolate mofetil (MMF) in dogs, not cerliponase alfa. |
| popPK | Hammon_2021 | relevant | 9 | 2 | The paper describes a population PK model and allometric scaling for cerliponase alfa, but the specific numeric parameter values are not present in the provided abstract text. |
| PD | Hammon_2021 | not_relevant | 0 | 0 | The paper focuses on allometric PK scaling and dose selection for exposure prediction, reporting no pharmacodynamic or exposure-response relationship. |
| PD | Kim_2021 | not_relevant | 3 | 1 | The paper reports PK parameters and qualitative exposure-response observations (no correlation between exposure and efficacy/AEs) but does not provide numeric PD parameters (Emax, EC50, etc.) or a quantitative dose-response curve. |
| popPK | Kohlschütter_2016 | irrelevant | 0 | 0 | The paper is a review of CLN2 disease and treatment approaches (ERT and gene therapy) and does not report quantitative pharmacokinetic parameters for cerliponase alfa. |
| popPK | Meng_2017 | irrelevant | 0 | 0 | The study focuses on the delivery of TPP1 using a peptide mediator (K16ApoE) in mice and does not report pharmacokinetic parameters for cerliponase alfa. |
| popPK | Meng_2021 | irrelevant | 0 | 0 | The paper studies a peptide delivery system for cancer immunotherapy and does not involve cerliponase_alfa. |
| PGx | Nickel_2022 | not_relevant | 0 | 0 | The paper describes natural history data for CLN2 disease used as controls for cerliponase alfa trials, but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Priglinger_2025 | not_relevant | 0 | 0 | The paper is a review of enzyme replacement therapy for CLN2 retinopathy and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | So_2026 | irrelevant | 0 | 0 | The paper focuses on AI-based target discovery for Parkinson's disease and does not involve cerliponase_alfa or any pharmacokinetic analysis. |
| popPK | Soangra_2025 | irrelevant | 0 | 0 | The paper is a clinical study assessing gait and postural outcomes in CLN2 patients treated with cerliponase alfa, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| popPK | Solé-Domènech_2018 | irrelevant | 0 | 0 | The paper investigates the proteolytic degradation of amyloid-beta by TPP1 and does not involve cerliponase_alfa or pharmacokinetic parameters. |
| popPK | Specchio_2024 | irrelevant | 0 | 0 | The paper is a clinical validity study comparing rating scales and does not report any pharmacokinetic parameters for cerliponase alfa. |
| popPK | Vuillemenot_2014 | irrelevant | 0 | 0 | The study investigates recombinant human tripeptidyl peptidase-1 (rhTPP1), not cerliponase alfa. |
| popPK | Vuillemenot_2015 | relevant | 9 | 0 | The paper is a nonclinical PK study of cerliponase alfa (TPP1) in dogs, but specific quantitative parameters (CL, V) are not provided in the abstract. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a header for conference proceedings and contains no scientific content, data, or analysis regarding cerliponase alfa or any pharmacodynamic relationship. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
