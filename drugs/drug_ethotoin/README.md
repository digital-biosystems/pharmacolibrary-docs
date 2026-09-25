<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;ethotoin&quot;}]"></div>

# ethotoin

- **generic name:** ethotoin
- **ATC codes:** `N03AB01`
- **DrugBank:** [DB00754](https://go.drugbank.com/drugs/DB00754)
- **groups:** approved

## About

**Description.** Ethotoin is a hydantoin derivative and anticonvulsant. Ethotoin exerts an antiepileptic effect without causing general central nervous system depression. The mechanism of action is probably very similar to that of phenytoin. The latter drug appears to stabilize rather than to raise the normal seizure threshold, and to prevent the spread of seizure activity rather than to abolish the primary focus of seizure discharges. Ethotoin is no longer  commonly used.

**Indication.** For the control of tonic-clonic (grand mal) and complex partial (psychomotor) seizures.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 17:44 | 2:15 | 0/0/0 | 0/0/0 | 0/0/0 | 60,558/1,469 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ethotoin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>“…Hepatic. The drug exhibits saturable metabolism with respect to the…”</sub> | prose |

<sub>Actors without a tissue in the table: NR1I2 (activator), SCN5A (inhibitor), SERPINA7 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hooper_1992.pdf` | Hooper WD et al., Enantioselective pharmacokinetics of et…, Chirality (1992) | popPK | 10 | [10.1002/chir.530040303](https://doi.org/10.1002/chir.530040303) | [1350205](https://pubmed.ncbi.nlm.nih.gov/1350205) | The study reports quantitative PK parameters (half-life, AUC ratios) for ethotoin in humans, with specific numeric values for half-life and metabolite half-life present in the text. |
| `Troupin_1979.pdf` | Troupin AS et al., Clinical pharmacology of mephenytoin an…, Annals of neurology (1979) | popPK | 8 | [10.1002/ana.410060506](https://doi.org/10.1002/ana.410060506) | [42344](https://pubmed.ncbi.nlm.nih.gov/42344) | The paper reports quantitative pharmacokinetic parameters (Tmax, T1/2) for ethotoin in humans, with values explicitly stated in the text. |

<sub>queue written 2026-09-21T17:44:09.213827+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carter_1984 | irrelevant | 2 | 0 | The abstract mentions characterizing pharmacokinetics and finding nonlinearity but provides no quantitative disposition parameters (CL, V, etc.) for ethotoin. |
| popPK | Hall_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mephenytoin metabolism where ethotoin is used only as an inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Hall_1987 | not_relevant | 0 | 0 | The paper investigates the inhibition of mephenytoin metabolism by ethotoin, not the effect of genetic variants on ethotoin's pharmacokinetics or pharmacodynamics. |
| popPK | Ouassaf_2026 | irrelevant | 0 | 0 | The paper describes an AI platform for drug-drug interaction prediction and does not report any pharmacokinetic parameters for ethotoin. |
| PD | Ouassaf_2026 | not_relevant | 0 | 0 | The paper describes an AI-based classification framework for predicting drug-drug interactions and does not report any specific pharmacodynamic or exposure-response data, models, or numeric parameters for ethotoin. |
| popPK | Pressler_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of brivaracetam, not ethotoin. |
| PD | Pressler_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetics (PK) and safety of brivaracetam, not ethotoin, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Watson_1978 | irrelevant | 0 | 0 | The paper describes a gas chromatography method for analyzing drug concentrations in dosage forms and contains no pharmacokinetic parameters or disposition data for ethotoin. |
| PD | Watson_1978 | not_relevant | 0 | 0 | The paper describes a gas chromatography method for analyzing drug concentrations in dosage forms and contains no pharmacodynamic or exposure-response data. |
| popPK | Wu_2020 | irrelevant | 0 | 0 | The paper is a review of computational ADMET prediction methods and does not report any pharmacokinetic parameters for ethotoin. |
| PD | Wu_2020 | not_relevant | 0 | 0 | The paper is a review of computational approaches (ADMET, PBPK, molecular modeling) and does not report specific pharmacodynamic data or exposure-response relationships for ethotoin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
